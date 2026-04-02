// pages/api/ai.js
// Uses Groq API — FREE tier, no billing needed
// Queue backed by Upstash Redis (optional — add UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN in Vercel)
// Get Groq key at: https://console.groq.com

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: 'GROQ_API_KEY not set. Add it in Vercel → Settings → Environment Variables. Get a free key at console.groq.com'
    })
  }

  const { prompt, maxTokens = 2000, returnRaw = false } = req.body || {}
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' })

  // ── Redis rate limiting (optional — skipped if env vars not set) ──────────
  const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
  const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const bucket = `cw_rate_${Math.floor(Date.now() / 60000)}`
      const incrRes = await fetch(`${UPSTASH_URL}/incr/${bucket}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
      })
      const incrData = await incrRes.json()
      const count = incrData.result || 0
      if (count === 1) {
        // Set 2-min expiry on first request in this bucket
        await fetch(`${UPSTASH_URL}/expire/${bucket}/120`, {
          headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
        })
      }
      if (count > 28) {
        // Rate limit hit — tell client to retry after delay
        res.setHeader('Retry-After', '10')
        return res.status(429).json({ error: 'Too many requests right now. Retrying in a few seconds…' })
      }
    } catch {
      // Redis error — allow request through
    }
  }

  // ── Model fallback list ───────────────────────────────────────────────────
  const MODELS = [
    'llama-3.3-70b-versatile',
    'llama3-70b-8192',
    'mixtral-8x7b-32768',
    'gemma2-9b-it',
  ]

  let lastError = 'All AI models are currently unavailable. Please try again in a moment.'

  for (const model of MODELS) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: String(prompt) }],
          max_tokens: Math.min(Number(maxTokens) || 2000, 8000),
          temperature: 0.35,
        }),
      })

      const data = await response.json()
      const errMsg = data?.error?.message || ''

      if (!response.ok || errMsg) {
        console.warn(`Model ${model} unavailable:`, errMsg)
        lastError = errMsg || lastError
        // If rate limited by Groq, wait briefly then try next model
        if (errMsg.includes('rate') || response.status === 429) {
          await new Promise(r => setTimeout(r, 1500))
        }
        continue
      }

      const text = data?.choices?.[0]?.message?.content || ''
      if (!text) { lastError = 'Empty response from AI.'; continue }

      // returnRaw: skip JSON stripping for assignment/chat mode
      if (returnRaw) {
        return res.status(200).json({ result: text.trim() })
      }

      // Strip markdown code fences for JSON mode
      const clean = text
        .replace(/^```json\s*/m, '')
        .replace(/^```\s*/m, '')
        .replace(/```\s*$/m, '')
        .trim()

      return res.status(200).json({ result: clean })

    } catch (err) {
      console.warn(`Model ${model} threw error:`, err.message)
      lastError = err.message
    }
  }

  return res.status(500).json({ error: lastError })
}
