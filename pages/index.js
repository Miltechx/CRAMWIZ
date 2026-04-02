import React, { useState, useEffect, useCallback, useRef } from 'react'
import Head from 'next/head'

// ============================================================
// SEED CODES - 1000 pre-generated access codes
// ============================================================
const SEED_CODES = {"CW-2GZWLACR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FF5KAZH7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XA3NLVTG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TZSD38AP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TZ55BCGC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3BUS35EE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JPMTRPWG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3E2SHPST":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-939N3PBG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8S9S82GC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-D8D5PAPL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-K7RD6ZW2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GEVA4KNW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5ZHPVMPJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KK8VAHSW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NF3RJCXQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JXEK2428":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8QGXPDP4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LVRSJ9L9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KQ6GPHJS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FZXDEKR9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XTFLFHFX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5SXRSMRU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BX2BVYT3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-H8JUN45Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HHGSV8EP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SVQGQ9YF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-E8K6DHDF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5WU9UTA8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TT8Y6JLS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6RRY3VH3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-N9KV79DG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LHC9HAJ9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z87PHUDB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4APHT7D9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KVV83UBX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-H5KLXFUP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PZAVS685":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GWX9VXMM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XQ26ND6R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JGF3LJ3C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UZHTUJKQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X5LG5XXF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4KUT5RSK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7KLQ2DZP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5RW449WB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CYCGDXZH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BQ5TDF8M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UDQK5BBH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5KPSUG4Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TSZCEPXA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JS42DF3Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GDMV3T8M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-573DCNUD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UEJYGXJF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6LB8MMQY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MFZL2ZW6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VSD8YAFF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TX8VXC64":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UL963JQS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NB2E42KH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WTEBVWET":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6K3CAJYS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P8WLJP3K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HMVW7332":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-34V3PGLM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JPEXF23W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KWAK95LQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BWBUSJDX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G2JY2XAW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6ZRCU8T6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2CWHYT64":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KCHZE9ZJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5Y66HSWM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YDV8ES5Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4UVCUP9A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CUT4TPML":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9UJPXU7Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JBGHMBEK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UYEDVX6L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CTWFP6JD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7QTCZNJ5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UZBKGAXU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AZZVSS2W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M89S3565":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CM66LS5H":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G3X68C3U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RX7AMAL8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RYWAH5HB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZFUGM6CT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NMLR7N4T":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TP37LUAD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NWPAMSF9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7U23WGYB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EGEA5DJD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ELV9NM99":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C3BGMA4B":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C2G2M7ZZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GJTCR42C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EWYZVSTS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XBM6X8LG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CYTL9KUP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QKCTEPK2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RFE3SX9S":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VAWHRALG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MZH82HNR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MSPDSU4Q":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9B36MSYD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LK76S9YR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FUKQBESR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-N5E8368A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3YVT6MHL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-H2FG7YAP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KGQSELNQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FAFJVX98":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KDUFX3DQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-E4BMK6WW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GPE52RYE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3A6LA8RU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ATKG2F7W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3FJY5PTF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ME8CAQFC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PJ7UEVHL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-D53ABPLY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LDNQRLQ2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AXGM5D86":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W4FPCGRJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HJ82AMH4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RKH66EJH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RALBB93M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3CXQCVZL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A3HM9N8X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WGBH27EB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LVR8UN3P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TA6PK96N":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FVG5UP7K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G3VUGHXY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2CFW3DLV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2HA6U5Q8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9WQASBYP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FBLQC85V":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2NPEKFAR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MQLGWZRQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KMF9H5LG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G4Y2U68A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JMM75B3F":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S7NRNRN9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FSAYJMBU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZU5Q85E2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PDEZWVZV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CA5M3WEE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2738Y6HL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JRXBNKWK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3TCAZMU5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GQGTHNCN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZW7MPT8R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZBBRGSEV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TL93NPTD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UZHP9A4T":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-65LFBGD4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UD7FTRUY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4MQGQPU3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KSL2DPLB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TX3HKHSH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JNX2Z3D2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5V8HFYKM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VS27WT8Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GMPRN8JY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZFEMDYJV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-H2LA9APF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RCTJD4E9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9JLUSMC4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AJZXYST8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8KS6TZPQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-V6LQ4VPK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RRUC4J2Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QYSXF5X4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S83HNMRN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S7XHWLTX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GGFTPAFR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TESBX8LJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KWLR4TV4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HP42YYDQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LM25TFUZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JXG7YL6Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BRWTKQWU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9VDHRJND":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F45Y8MTS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7ALTE9AE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZDERA3W8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NEQDDYU2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4U6BXQBZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AEN8L4SS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J36AX5YV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VCTN9GAS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QZKXKMYA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MP6UFHV2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2WYLMRT4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WEG74ETK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HB34FN6J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AJYK7GTD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A9ENFC3M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KVEPV6PY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FV5VBPAN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7QQTYPR6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8S2326KS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Q5SGU95V":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GUJCGK2K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X9D5S4ME":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RN8WXF9S":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MJH7ANXQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8WCCZL67":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8U7737VK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-35VRAQ4E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FQ27QPAX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W3JE4HC2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P8S6SF9Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HKX97NQF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-65G27MUS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZB7ZZNAS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CC57WVDH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M288M7XF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7RDRPFKM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GHCDXGFT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PPBDJZUM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LD3REAR3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A7S9AD4F":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-64JPZE3A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X6C35GBF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8N2NFZ5G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VZHVUK2W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NUMSR7LP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3B5GTK8Q":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YWFWTLNY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5GXBRWYB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZHZ2WMHE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VZQ3FEYY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HSHDQ34U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YMRTGV3L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-U9UT3M95":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8J4TJ63R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RDUNL6HK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XMCFVJ3H":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FTEJQ4YJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DN6VW9UM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TD63WEJH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-R2X92LF5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Y5F73J55":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A5QGK2YQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SY2ZFKTB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LURHTYHR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-H8GNFB3X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MU9HRBGU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3CL96LCH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M3ZDT2RG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZRXQ7Z8X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UPRGPYW4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-42N8VQDW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WCGCZWEW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JWX8F47G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z8P6Q8TU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-R76RUQ2K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F58EA8LS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5PYQYD4E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5SUGCC34":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-26MH7BNC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-E24ESVA5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KNSYE4VY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-U5T7YEP3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FFJAAWKS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WN6UNMPT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VKXSKQPZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6NC9GX2Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-86Q5Q8RS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8C6RBRKM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RLMRREB5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5SZSKCEK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-95ELCT67":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CEVEMBWS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5956WKTD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S2GAD2YV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3FJQG9PL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-B9WDDDXL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z3YXV5SN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CBLJSYRS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NWA8JZXP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TF3LPHPH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-99TEYVK4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NC2H9H89":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6BCFL74V":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZUU3C2E7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EMN85JL4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KQEG9YYC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8VAFH9EC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GYASM3CN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HFZ3XQSU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5WU33Q67":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MQ3YWNTB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KWFK4KLS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VMYK4B6T":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SA6H7VXR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MDRSCK4H":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F2KWVEW8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3K537K2W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-USLAYQC8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HP3WN343":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JA25YMXV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DCGFRNS5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QXKSCFEY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VKN2GHN2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VFUFX895":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M798S3MH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2QUV5YH5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W55QD5TB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XM4ANLB5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QRVVQ23F":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YKDQAHWU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DT3EKPV8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UBUFDYVN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AQ3BPCAN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W7S4RXDW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ESFG828U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6APDPQ8K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YASMGSLM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-B3MEDMC7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-N62VLYCU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9V4WDTSB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G9G4SMA6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6DJ2CQES":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8PT3Q6N2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GPJX6GCG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-E6PF2KFF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CCKCQXAQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-T4QN7RXC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4KZAGBM6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NSM9RBD2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UB99YFLZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RHEVKVED":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X2QY2GN5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AX4EK84J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S24B3K9U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NG6EM6Y3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-35HJU93P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TUNVUFL4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WD7HSRTV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EEQFTNYS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7ZQTTKZS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7FQP7WV3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VATBD5A3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-783F8G9D":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W8ZJXNT4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ECXFRN7R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BP69L2EE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4BBETXWK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PHBP3LPX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-55FM8649":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Q3S35DV2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9NBCFW7C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CQGPUKN7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G4W2FJKS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RYGCDVLK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WQZE8ZHJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2R5VQWRP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EC4ERNQE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-R769BHGA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BMFSMP9S":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UVXNF5GJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SBV6JF5J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RTSJEAH5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2PB6LRVH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XHXM7KG2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Y4XRL8DZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PE6NL59X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6MYLG786":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-L3XBNLZS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6SKHRZE9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TVPGYLS9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Q22JBDTX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SL3CVH4D":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NZD4TAJZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-USXGAWTR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AJTXFV39":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DK75XAPL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SZBNCEPP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X4RSBTWX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G3A8JAG3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZBVHVXY6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KWVMNQYL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KZHUECCR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RRRJAC4R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6QCUKXYB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VPATMEL2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VBH2Y8Z5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-T9DQKPH2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HJAJFJXK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-42FNL3E7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WJSF922B":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DX9UTTXR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5XDYBXYA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5C36NNFF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4KZ7WA2L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M7K9LDMY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7K5RAJQT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CJ3C35TC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2KJCEQ6R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-48WLKJ3G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DPF4PJGL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FNSRG3CK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-32BCDENC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9WY85MMM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9XZ6Z43E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8TK57E3J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5QH42492":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TXNXP474":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VKLURURP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BZLYFSQM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NL7VB4AQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SUF9M9AS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JNV99VK9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CUPDA54Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VK7U795A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-434UMQVV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SKELMQNP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-R346LNZ7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FK7XSYVG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S4YJR46F":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KCV4JLUD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-H6ELH7P2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VP5RBLYG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RDSTHFVB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SFMQALJP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ELAX2JWP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-N7LKWJS2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XC7HLPRD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RSLC6UPN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XDSRA93X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9LRXRLQU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KX929BSF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LU4Z9E9V":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AXY63YWH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HTQ32VKF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TS7UTD8L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CU5LSM9C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P9DL4ZXE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FF3EJ2X3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ALNST9BH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-N5UTSDS8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-B8886S44":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VLS7LJTS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2DQVRQUU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ETAED3DU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KQZCR2VS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F59HTQGT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JZG9ECV4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QF9SHJN6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6PRMP8LW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EP7FVSLV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X35YV3DK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FNCJNKUG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GLWJPDQ6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-93Z8LZFK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5WYMCJNC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ACYW5N4W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JKUSQ7L5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JHRCA54M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-69JTEWCX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EMNDCV2N":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8FTX6F3D":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8DNDD4H9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-T5RD4CDC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KQKFNHYP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HSC7DV5P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DVKP3RUG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PCV6ETFN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M5HUEFF4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-L2DK52EQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KJR4YNKL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MF9A5FEE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FZDWXR9X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZVDH7EGV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PNEQBP3Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DC9N2DFS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JYMPUZE3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RH8UEJ2K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C42PUKVB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WFCZLBHF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-K9HCBME7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3B22G2P8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PQF3TSMA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-U2V2VF8M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2CSUH32G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GQDJTPPM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JQ36B2WF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YV6UQ8BN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C8SCYDFN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Q9ZPU5X8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3UFUNF27":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6WNAPEEK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P5QN83ST":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NMGEQNKF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2MZ7P3MD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BAHU9WPD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-32E3GDT9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-23P5FP5P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RZAXHV3Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MYLGDM39":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GP6PD9AL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SWE3GA7X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DBB53JXV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DRSA6DV4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WRE5CFLS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WLMTAU84":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BJHXFY7P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z2ZHSFVY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QSBS4GR9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HJJNSURL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4T6C3D2J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Q8P9PM4J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G5YGW863":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NT9AKMHM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JRVMAN52":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4DCN3G6B":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QTT345T6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CMVUE49U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W3V9253Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-35H85E77":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RE5LGNME":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-R8LQ44AY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C6BG7VK3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-D78J9P42":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-94WS7YY6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GZEMVC3W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KVF8QFYM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-D2NWNAW8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2FB7WZWC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DA2MPJUF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VE2VFB9G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PYRAPZ8F":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Y6RC6WL5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZN6XSZ9J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C64C97WK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-37RGDU94":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GYA9CDH8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9QQL7C9Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5HEEUR8Q":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LLK8RTEY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WY74JTX5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KJQG473C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QLYGZTKP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S67ZVMKC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SGKP4ESL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-74VAXXEH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SCP5C4C4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JYWLV9UY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RJT35X2T":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7HT529JE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4CUTPY36":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GGENJWLU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SN4Z52PJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4FR9L4CV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5C2ANASC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FXWR5AF9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F95G4ETF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3BN5TX7T":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WQXD56QX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MY4KB53X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5L5AQRDW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NCXR3496":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X67SUKW8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5FKQJ2QF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BWVP7LNY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GYXUD6NU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SV5DS23Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VQJ8Z27D":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WD9J96VA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S7TGFA46":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SNQ3QZCL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7BENLJTR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GAM8HFQU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QHZP72NK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HLYJUTKA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G2PSTAQJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7CMQA3TV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PU2XDGVM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3HTFJQHK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RXQC5H39":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SNHCEARG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WZZ5Q5SP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RTDUJX92":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-95QUBYX2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2924FLQE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z5J74S4N":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-N6XNQH93":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DS2W9F8X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ESNUM629":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5JK8J96H":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8S7JTUPW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DPR69TEC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2YW38DB5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UKC4TMSH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DEF22576":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RRA5B7PT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DNLJDQFB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J3S2H7KL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3YNT996J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RRFJ4KMW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CQ32XKQQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KE8GZWTH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HL5E36AQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QRFRHRX8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HCJUTFSM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZLVLGBF8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9BUBHRZG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-L3ZQHHWR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-L7JWZSQX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-D7NSNEZC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DTQS22V2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F3SVDASZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XMBX4SWP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GD8USCEE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-32MQYTJQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TCT7HJW3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G8NDDSH2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JESJURSB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QBMJSS5Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NTK7U3LE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WDPLQ6ML":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NEDYU8DL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HWZPZNTZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GJ44UCP4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4PEH38CB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-T9AEFW5P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MKRQ6LSH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HD349NQR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3QM3YBYV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FA8473HP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X9FNG7KG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FYAHUR4G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9QMTHSG2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-28PFT8M2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-982STVG7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CU3KQ5VL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-U7V4M6JU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FN7NQK9V":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ADKG7LM3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6H9BQDMF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G6S2868N":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DKG8XZFA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-K83X4GHZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4UR5NHHE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2572NSU3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8U4X97B8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KR9SYHRF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2DVJKQC6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TZUUNFYQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-L9AHQ5A4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DUGFBDHQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7Y3ETER4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WKDMFK55":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3SYBYJH6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S9HKT2C9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-65DQGPH3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JL4LANHQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MLUD7VST":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HKBVJNH7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HLZYRM5L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JJF4PD3P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FCBAGNME":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-B28J7KME":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GBLUCGEE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S5MQFNP8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WTYVAYXN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WT69P5YW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6WQPM9FQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z3GVS2X7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WHEY7DV2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7P9ERNZF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CRR89LVP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WLPZSJ77":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AUTLC83C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GRS88JE8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4T35BHA9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3KTVBRRE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-58Q2RFJS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KYT9JXY2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CU2NHWWQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QRNWCR7G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3BW46RFB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AE6ZCJ2R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JWEE5NVB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SWFWW8J5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-36QLUFES":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MNTNJF6A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TJVE8GYL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8PPNWG3Q":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-B5SPJ58P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SKSJA46N":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-B99FNMRC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DPSD5LM6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S7E8G5YS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6R8Z7T6G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TKVLXRW4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F8CS2NYS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UFL7P5HA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7ENHK4WA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-48RY3FG5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LSW6F7J9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RH46W4AL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9PZEG93E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4HN5B7XZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AYXJZEAJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7RKJAF2C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WSECNMR5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9752KBVB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YCRHUCTZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KE8B7YPR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YPU49CV3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SE26BSQV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FRCDU7WW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EC2UCUBX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9FRV7L7E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X63C546Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X3DJMTWA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DZKT24M9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3BVQAAGM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-394ACR7Q":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DYUJWLWQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8TSUR6BT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XJTNBFRL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KH3EYHJ7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-L3CCG3EJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GKZYZVGS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZMUBFRT4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-V6H5FE7J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GVCCT26X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7B8SVBVJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LRZGTYYU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J45BA4H3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RXZ4LJLV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-82VSG4WZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NYD42K9M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QNBXPG8X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TM7YMUG8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WYD22ABR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NHCW8D5A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2ZNJ58B4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YUGKEKHH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8ALUCS2S":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8F8P83P4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SDATLGQZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4RSNAS9B":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5K475YEH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9YFV3B8Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MJ7CLA6U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-22LA5ZY5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RL3H5SKE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HJYUWA69":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FZVLS9QE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RQKHV5G3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UC8THR9Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RKUXGMVJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SSVAADAH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W84SLZX7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-X4QBZ6EF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6VMQAA7G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DVE5S7CV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZHNL47DP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TWUXUK5W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SY9VDZ26":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SJANJ5FF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-99HXH22D":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9E2TKV4Q":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2L6AKH3D":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-38DKEJSK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-E8DKMBDE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JSN5H3CD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M3CZ86PY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HXHRZCM2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZXE577V5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-63X6FZ5Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2CGSJJZ2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XLUNLW2T":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P4SSABEP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6GQZNF9E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QMD43ZP4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S9Y8KLXR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FFFWZMHK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J4J6SFLH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NXUEQN7W":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QXLM35EZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2AH67BXW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KHCVDYCU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SLKTMNZH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ABRK2EKQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GXSRF4Z8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z77KCGSZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QYMNLXRY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2VRXNQ4L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QQH4LMPE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z8CMZHFP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FZLP4DWC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QSA2M8PW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XR7P36RM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YZWX3B6D":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UC9TPTEE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A8UKYWH2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-K25CC4UM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YFBGZHL4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4PCN2Z27":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YZ5YW3MW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5LU4ENDH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F47KELLE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-53PG34K8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-T6ZVG9SV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LPQ7MWAP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-V5YN5UVY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LWVYLF4G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WH2JZJWP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FY76W8GA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MG35R4WS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AEJ9FDXH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6G472LB5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C8QH4HUT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DYX45DDT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XMEQUDPW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4A8SSN37":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2F55ZF38":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GHPYMW48":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-43SCSU9R":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-B6UBDE2K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9KHW334K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P3PRSSKB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LH7HM2Y2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EPYZDVZN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UKTSFHFB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DCQG3GG5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FUQTHTMH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LBVGNGXR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XUT4C4H9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GUNW957Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3ZFJ49S6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RM8FHKQN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FBAVCQ7H":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FBY8Z7RV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-V32NHXHW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-MSNDJCNW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VHEHLJG9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WJUVXBDD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PJHL8CCV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-39PLB2MH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7VVLKB3J":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-98KTYGZ6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZHHUFZNU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A29UNH4P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S6ADN4XD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-T24WYJSF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GM22BDFX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PCCXBZ6L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LBCEEXHE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BQ5PVWMZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8PFXQ58U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-KB5CM38K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-U246MYPB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EMXS6VK4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9FAX4NMU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J6E9PZVY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S6G74S7P":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JZMXTS5X":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EXRFWWJA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-96VKFJLE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HS5ENQSA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-325LVRDL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VGFCXDM4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RX3BUFB3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UXPAS54Z":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JSALQP4M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GPLGEKM6":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YB76R46U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-UPM7QTFJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZJZZCYCR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BWGHYQA2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AUJ4AVM3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3A29YJMZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C8SERUPQ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-U2QRESHM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-F5ZKAVXG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-S4XPETH7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W77464AB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7R2H5832":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GAEB83QV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZTW3HUPH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-E9MFJEDD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HTVDWV3K":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-54EBFW65":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-285SJ6PP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Q63HQBWB":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QSRRL5FM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JVRM4YZ7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7QBBXFKR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YZ4VJZUJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Y6TV85QK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-R4VUU6TJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W2KAY9KK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GKMLGXK2":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9744MRCK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5K5JJ3HN":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M24JD3DW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EGSDY3XT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WQ435ZCX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-K4B3UKPM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J2LDNZB5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W9PG58MY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P79K2K8C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-E7VNRZ34":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z8G5EJAV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6CJ5LUF3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-QLAQPX4S":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZAKBUFAL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RE27EPCM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2TT38A2E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Y8FDM2TY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4DRG2PNT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NU7WLXRJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2D5GWC68":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PNNRQ6ZG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BMK9ZRS9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GQCX4JCV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VHHN87EX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BHPS97FA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-279PEDSA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AUQJDK68":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5YM56LZS":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-T3WCUPHC":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Q3M24BXY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HZXVEU7L":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TARDWUVZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4R8C4292":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-8RKYTVK3":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JJBQZFL7":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-2N7PVT8H":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-D56QF5TR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WULW9HYZ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-NJHH2LYM":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PTGU7FU8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J4WK2K9A":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TPUYSVLD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-GKAEFDYU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9YDBCLEW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-68RPLJ42":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-SGJR7V6U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-TFR4JMM8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-VK2U29CL":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-DXCWEA2G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-H4B4Y9EH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EW8W4TWE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BFFB6JVD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-ZENT3VFF":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-U8XWX23F":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XHPT3UV5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A3S5NSHP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-3P97BKVX":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M4FJCQFJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-P6XB2CFE":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WGKNCRDA":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XNXZ2AU9":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4BKMKJUV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-WD9SW5MY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6T23UYAG":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G6PKA6ML":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-62T2UL7C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FEGLTFAW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-957TL8XT":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-BV3G3J3S":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-W8ZBZLQH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-6DED5BFY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5BUKT3JR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-A9JGZK79":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-J9SDCUNP":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-FHN4UD4Y":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YPYVWXEW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-YW4KVXGJ":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-RUGHXSL5":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-HZNN4K3M":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-G65SF2SR":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-EBGQTUEU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-N4DMUJQ4":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-XFV89QRU":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-LQ3WWW6N":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-9NR2N298":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-C6WJ3HF8":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-AP9SAQLV":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-M23YACWH":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7M44H45C":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-5S956RTK":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-CETFKSBY":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-PS2ACMCD":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-4K9MGJ6E":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-JP3S222U":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-Z6SA8RMW":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"},"CW-7ZZEQ67G":{"used":false,"createdAt":"2025-01-01T00:00:00.000Z"}};

// ============================================================
// STYLES
// ============================================================
const S = {
  nav: {position:'sticky',top:0,zIndex:300,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 28px',borderBottom:'1px solid var(--wf)',background:'rgba(8,8,15,.95)',backdropFilter:'blur(20px)'},
  logo: {display:'flex',alignItems:'center',gap:10,cursor:'pointer'},
  logoImg: {height:32,width:'auto',objectFit:'contain'},
  page: {position:'relative',zIndex:1,minHeight:'100vh'},
  btn: {fontFamily:'var(--fn)',fontWeight:600,fontSize:'.875rem',padding:'10px 20px',borderRadius:'var(--rs)',border:'none',cursor:'pointer',transition:'var(--tr)',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:6,whiteSpace:'nowrap',position:'relative',zIndex:5},
  btnPrimary: {background:'var(--blue)',color:'#fff',boxShadow:'0 0 24px rgba(26,108,255,.3)'},
  btnOutline: {background:'transparent',color:'var(--white)',border:'1px solid var(--wf)'},
  btnGhost: {background:'transparent',color:'var(--wd)',border:'none'},
  btnDanger: {background:'transparent',color:'var(--red)',border:'1px solid var(--red)'},
  btnLg: {padding:'13px 28px',fontSize:'1rem',borderRadius:'var(--r)'},
  btnFull: {width:'100%'},
  card: {background:'var(--b2)',border:'1px solid var(--wf)',borderRadius:'var(--r)',padding:22,transition:'var(--tr)'},
  cardBlue: {background:'linear-gradient(135deg,var(--b2),#0a1830)',border:'1px solid var(--bd)',borderRadius:'var(--r)',padding:22},
  input: {width:'100%',background:'var(--b3)',border:'1px solid var(--wf)',color:'var(--white)',padding:'11px 14px',borderRadius:'var(--rs)',fontFamily:'var(--fn)',fontSize:'.9rem',outline:'none'},
  label: {display:'block',fontSize:'.75rem',fontWeight:600,color:'var(--wd)',marginBottom:6,letterSpacing:'.3px',textTransform:'uppercase'},
  alert: {padding:'11px 15px',borderRadius:'var(--rs)',fontSize:'.85rem',marginBottom:12,display:'flex',alignItems:'flex-start',gap:8,lineHeight:1.5},
  alertError: {background:'rgba(255,77,109,.1)',border:'1px solid rgba(255,77,109,.3)',color:'#ff8fa3'},
  alertSuccess: {background:'rgba(0,214,143,.1)',border:'1px solid rgba(0,214,143,.25)',color:'var(--green)'},
  alertInfo: {background:'rgba(26,108,255,.1)',border:'1px solid var(--bd)',color:'var(--bb)'},
  alertWarn: {background:'rgba(245,166,35,.1)',border:'1px solid rgba(245,166,35,.25)',color:'var(--gold)'},
  badge: {display:'inline-flex',alignItems:'center',padding:'3px 9px',borderRadius:100,fontSize:'.68rem',fontFamily:'var(--fm)',fontWeight:700,letterSpacing:'.3px',textTransform:'uppercase'},
  uploadZone: {border:'2px dashed var(--wf)',borderRadius:'var(--r)',padding:'36px 20px',textAlign:'center',cursor:'pointer',transition:'var(--tr)',background:'var(--b2)',position:'relative',overflow:'hidden'},
  loaderRing: {width:40,height:40,border:'3px solid var(--b4)',borderTopColor:'var(--bb)',borderRadius:'50%',animation:'spin .75s linear infinite'},
  qItem: {borderLeft:'2px solid var(--blue)',padding:'14px 16px',marginBottom:10,background:'var(--b4)',borderRadius:'0 var(--rs) var(--rs) 0'},
  resultBlock: {background:'var(--b3)',border:'1px solid var(--wf)',borderRadius:'var(--r)',padding:18,marginBottom:12},
};

// ============================================================
// DB helper (localStorage)
// ============================================================
const DB = {
  get: (k) => { try { return JSON.parse(localStorage.getItem('cw3_'+k)) } catch { return null } },
  set: (k, v) => { try { localStorage.setItem('cw3_'+k, JSON.stringify(v)) } catch {} },
  del: (k) => { try { localStorage.removeItem('cw3_'+k) } catch {} },
};

// ============================================================
// AI CALL - goes through our secure Next.js API route
// ============================================================
async function aiCall(prompt, maxTokens = 2000) {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, maxTokens }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || 'API error ' + res.status);
  }
  const data = await res.json();
  const raw = (data.result || '').replace(/^```json\n?|^```\n?|```\s*$/gm, '').trim();

  // Try direct parse first
  try { return JSON.parse(raw); } catch {}

  // Extract the outermost { ... } block — handles trailing text after JSON
  const start = raw.indexOf('{');
  if (start !== -1) {
    let depth = 0, end = -1;
    for (let i = start; i < raw.length; i++) {
      if (raw[i] === '{') depth++;
      else if (raw[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end !== -1) {
      try { return JSON.parse(raw.slice(start, end + 1)); } catch {}
    }
  }

  // Last resort — find anything that looks like JSON
  const m = raw.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch {} }

  throw new Error('Could not parse AI response. Please try again.');
}

// Plain text AI call — for assignments (no JSON parsing)
async function aiCallText(prompt, maxTokens = 4000) {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, maxTokens, returnRaw: true }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || 'API error ' + res.status);
  }
  const data = await res.json();
  return data.result || '';
}

// ============================================================
// PDF TEXT EXTRACTION
// ============================================================
async function extractPdfText(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (file.type === 'application/pdf') {
        try {
          const pdfjsLib = window.pdfjsLib;
          if (!pdfjsLib) { resolve('[PDF.js not loaded]'); return; }
          const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(e.target.result) }).promise;
          let text = '';
          const maxPages = Math.min(pdf.numPages, 200);
          for (let i = 1; i <= maxPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(x => x.str).join(' ') + '\n';
          }
          if (text.trim().length < 80) text = '[Low quality scan] ' + text;
          resolve(text.slice(0, 38000));
        } catch { resolve('[PDF read error - try a clearer scan]'); }
      } else {
        resolve('[Image uploaded - AI will work from course/topic context provided]');
      }
    };
    if (file.type === 'application/pdf') reader.readAsArrayBuffer(file);
    else reader.readAsDataURL(file);
  });
}

// ============================================================
// SIMPLE HASH
// ============================================================
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
  return h.toString(36);
}

// ============================================================
// TIME AGO
// ============================================================
function ago(iso) {
  const s = Math.floor((Date.now() - new Date(iso)) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return Math.floor(s / 60) + 'm ago';
  if (s < 86400) return Math.floor(s / 3600) + 'h ago';
  return Math.floor(s / 86400) + 'd ago';
}

// ============================================================
// COMPONENTS
// ============================================================

function Btn({ children, onClick, style, disabled, variant = 'primary', size, full }) {
  const base = { ...S.btn };
  if (variant === 'primary') Object.assign(base, S.btnPrimary);
  if (variant === 'outline') Object.assign(base, S.btnOutline);
  if (variant === 'ghost') Object.assign(base, S.btnGhost);
  if (variant === 'danger') Object.assign(base, S.btnDanger);
  if (size === 'lg') Object.assign(base, S.btnLg);
  if (full) Object.assign(base, S.btnFull);
  if (disabled) Object.assign(base, { opacity: .35, cursor: 'not-allowed' });
  return (
    <button style={{ ...base, ...style }} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function Alert({ children, type = 'error', style }) {
  const typeStyle = type === 'error' ? S.alertError : type === 'success' ? S.alertSuccess : type === 'warn' ? S.alertWarn : S.alertInfo;
  if (!children) return null;
  return <div style={{ ...S.alert, ...typeStyle, ...style }}>{children}</div>;
}

function Badge({ children, color = 'blue' }) {
  const colors = {
    blue: { background: 'rgba(26,108,255,.15)', color: 'var(--bb)', border: '1px solid var(--bd)' },
    green: { background: 'rgba(0,214,143,.12)', color: 'var(--green)', border: '1px solid rgba(0,214,143,.25)' },
    red: { background: 'rgba(255,77,109,.12)', color: 'var(--red)', border: '1px solid rgba(255,77,109,.25)' },
    gold: { background: 'rgba(245,166,35,.12)', color: 'var(--gold)', border: '1px solid rgba(245,166,35,.25)' },
  };
  return <span style={{ ...S.badge, ...colors[color] }}>{children}</span>;
}

function Input({ label, id, type = 'text', placeholder, value, onChange, style, hint }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={S.label} htmlFor={id}>{label}</label>}
      <input
        id={id} type={type} placeholder={placeholder} value={value}
        onChange={e => onChange(e.target.value)}
        style={{ ...S.input, ...style }}
      />
      {hint && <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 4 }}>{hint}</p>}
    </div>
  );
}

function Select({ label, value, onChange, options, style }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={S.label}>{label}</label>}
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ ...S.input, ...style }}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function Loader({ text = 'Working...' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: 40 }}>
      <div style={S.loaderRing} />
      <p style={{ fontFamily: 'var(--fm)', fontSize: '.78rem', color: 'var(--wd)' }}>{text}</p>
    </div>
  );
}

function UploadZone({ label, badge, type, files, onFile }) {
  const [dragOver, setDragOver] = useState(false);
  const f = files[type];
  const handleDrop = (e) => {
    e.preventDefault(); setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) onFile(file, type);
  };
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <div style={{ marginBottom: 8 }}>
          <label style={S.label}>{label}</label>
          {badge && <Badge color={badge === 'Required' ? 'blue' : 'green'}>{badge}</Badge>}
        </div>
      )}
      <div
        style={{
          ...S.uploadZone,
          borderColor: f ? 'var(--green)' : dragOver ? 'var(--blue)' : 'var(--wf)',
          background: f ? 'rgba(0,214,143,.04)' : dragOver ? 'rgba(26,108,255,.04)' : 'var(--b2)',
        }}
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <input type="file" accept=".pdf,image/*"
          style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
          onChange={e => { if (e.target.files[0]) onFile(e.target.files[0], type); }}
        />
        <svg style={{ width: 36, height: 36, margin: '0 auto 10px', color: f ? 'var(--green)' : 'var(--bb)', display: 'block' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          {f
            ? <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            : <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>
          }
        </svg>
        <div style={{ fontWeight: 600, fontSize: '.9rem', marginBottom: 4 }}>
          {f ? f.name : 'Click or drag file here'}
        </div>
        <div style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>
          {f ? ((f.size / 1048576).toFixed(1) + 'MB — ready') : 'PDF or image · up to 60MB'}
        </div>
      </div>
    </div>
  );
}

function VoiceBtn({ text }) {
  const [speaking, setSpeaking] = useState(false);
  const speak = () => {
    if (speaking) { speechSynthesis.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9; u.lang = 'en-NG';
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    speechSynthesis.speak(u);
  };
  return (
    <button onClick={speak} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 13px',
      background: 'var(--b4)', border: `1px solid ${speaking ? 'var(--bb)' : 'var(--wf)'}`,
      borderRadius: 100, fontSize: '.75rem', color: speaking ? 'var(--bb)' : 'var(--wd)',
      cursor: 'pointer', fontFamily: 'var(--fm)', transition: 'var(--tr)',
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
      </svg>
      {speaking ? 'Stop' : 'Listen'}
    </button>
  );
}

// ============================================================
// SECTION: LANDING
// ============================================================
function Landing({ onNavigate }) {
  const features = [
    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'AI Summarizer', desc: 'Upload 200-page textbooks. Get what matters for the exam in seconds.' },
    { icon: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01', circle: true, title: 'Exam Question Generator', desc: 'Likely exam questions with full model answers — theory, calculations, MCQ.' },
    { icon: 'M22 12 18 12 15 21 9 3 6 12 2 12', poly: true, title: 'Past Question Solver', desc: 'Snap or upload any unsolved past question paper. Every question solved with workings.' },
    { icon: 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07', vol: true, title: 'Voice Playback', desc: 'Listen to summaries and answers while commuting. No screen needed.' },
    { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', people: true, title: 'Student Community', desc: 'Connect across departments and universities. Share resources and tips.' },
    { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', title: 'Ambassador Program', desc: 'Spread the word. Earn ₦1,000 for every student you refer.' },
  ];
  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div style={S.logo}>
          <img src="/logo.png" alt="CramWiz" style={S.logoImg} />
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Btn variant="ghost" onClick={() => onNavigate('login')}>Log In</Btn>
          <Btn onClick={() => onNavigate('subscribe')}>Get Access</Btn>
        </div>
      </nav>

      <section style={{ minHeight: 'calc(100vh - 57px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 28 }}>
          <img src="/logo.png" alt="CramWiz" style={{ height: 80, width: 'auto', filter: 'drop-shadow(0 8px 32px rgba(26,108,255,.4))' }} />
        </div>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '.7rem', color: 'var(--bb)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Built for Nigerian university students</p>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: 16, letterSpacing: -2 }}>
          Cram smart.<br /><span style={{ color: 'var(--bb)' }}>Pass like a boss.</span>
        </h1>
        <p style={{ fontSize: '.975rem', color: 'var(--wd)', maxWidth: 480, lineHeight: 1.7, marginBottom: 32 }}>
          The AI that doesn't disappoint. Upload your textbooks, past questions, and notes. Get summaries, exam questions, solutions — instantly. One-time payment. Lifetime access.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32 }}>
          <Btn size="lg" onClick={() => onNavigate('subscribe')}>Get Started — ₦3,000 Lifetime</Btn>
          <Btn variant="outline" size="lg" onClick={() => onNavigate('login')}>I Have an Account</Btn>
          <Btn variant="ghost" size="lg" onClick={() => onNavigate('about')}>About CramWiz</Btn>
        </div>
        <p style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>
          On Android: Open in Chrome → Menu → "Add to Home Screen" to install as app
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 14, padding: '40px 28px', maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {features.map((f, i) => (
          <div key={i} style={{ ...S.card, transition: 'var(--tr)' }}>
            <svg style={{ width: 30, height: 30, color: 'var(--bb)', marginBottom: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              {f.circle ? <><circle cx="12" cy="12" r="10" /><path d={f.icon} /></> : <path d={f.icon} />}
            </svg>
            <div style={{ fontWeight: 700, fontSize: '.9rem', marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: '.78rem', color: 'var(--wd)', lineHeight: 1.6 }}>{f.desc}</div>
          </div>
        ))}
      </section>

      <div style={{ textAlign: 'center', padding: '28px 20px 40px', borderTop: '1px solid var(--wf)', position: 'relative', zIndex: 2 }}>
        <p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>One-time payment of ₦3,000 · Lifetime access · One account per payment</p>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: ABOUT
// ============================================================
function About({ onNavigate }) {
  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => onNavigate('landing')}>
          <img src="/logo.png" alt="CramWiz" style={S.logoImg} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn>
          <Btn onClick={() => onNavigate('subscribe')}>Get Access</Btn>
        </div>
      </nav>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/logo.png" alt="CramWiz" style={{ height: 70, width: 'auto' }} />
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: -.5, marginBottom: 24, textAlign: 'center' }}>About CramWiz</h1>
        {[
          { title: 'What is CramWiz?', body: "CramWiz is the AI study platform built specifically for Nigerian university students. Think of it as the ChatGPT that doesn't disappoint — one that actually understands your textbooks, past questions, and the reality of studying in Nigeria. It's not just a chatbot. It reads your PDFs, maps your past questions, predicts what's coming in your exam, solves your worksheets, and reads everything back to you so you can study on the go." },
          { title: 'Why we built it', body: "70% of Nigerian university students work alongside school. Internet is expensive. Time is short. Most people cram before exams — not out of laziness, but because life is demanding. CramWiz doesn't judge that. It makes that cramming smarter, faster, and more targeted. Upload your material, get what matters, pass your exams." },
          { title: 'One-time payment. Lifetime access.', body: 'No monthly subscriptions. No hidden fees. Pay ₦3,000 once and CramWiz is yours for life. Every update, every new feature — included. We believe education tools should be affordable and accessible.' },
        ].map((s, i) => (
          <div key={i} style={{ ...S.card, marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, marginBottom: 10, color: 'var(--bb)' }}>{s.title}</h3>
            <p style={{ color: 'var(--wd)', lineHeight: 1.8, fontSize: '.9rem' }}>{s.body}</p>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Btn size="lg" onClick={() => onNavigate('subscribe')}>Get Started — ₦3,000 Lifetime</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: SUBSCRIBE / PAYMENT
// ============================================================
function Subscribe({ onNavigate }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dept, setDept] = useState('');
  const [uni, setUni] = useState('');
  const [refCode, setRefCode] = useState('');
  const [receiptFile, setReceiptFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError('');
    if (!fname || !email || !receiptFile) { setError('Please fill in first name, email, and upload your receipt.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return; }
    setLoading(true);
    try {
      const b64 = await new Promise((res, rej) => {
        const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(receiptFile);
      });
      const subs = DB.get('subs') || [];
      // Resolve ambassador details from ref code
      const ambs = DB.get('ambassadors') || {};
      const ambEntry = refCode ? Object.values(ambs).find(a => a.code === refCode.trim().toUpperCase()) : null;
      subs.push({ id: 'PAY-' + Date.now(), name: fname + ' ' + lname, email, phone, dept, uni, ref: refCode, ambName: ambEntry?.name || '', ambBank: ambEntry ? `${ambEntry.bankAcctName} · ${ambEntry.bankAcct} · ${ambEntry.bankName}` : '', receipt: b64, fileName: receiptFile.name, submittedAt: new Date().toISOString(), status: 'pending' });
      DB.set('subs', subs);
      const fd = new FormData();
      fd.append('name', fname + ' ' + lname); fd.append('email', email); fd.append('phone', phone || 'not provided');
      fd.append('dept', dept || 'not provided'); fd.append('uni', uni || 'not provided');
      fd.append('referral_code', refCode || 'none');
      fd.append('ambassador_name', ambEntry?.name || 'none');
      fd.append('ambassador_bank', ambEntry ? `${ambEntry.bankAcctName} · ${ambEntry.bankAcct} · ${ambEntry.bankName}` : 'none');
      fd.append('_subject', 'New CramWiz Payment — ' + fname + ' ' + lname);
      fd.append('message', `Payment from ${fname} ${lname} (${email}). Phone: ${phone||'none'}. Dept: ${dept||'none'}, ${uni}. Ref: ${refCode||'none'}. Log into admin to confirm.`);
      fd.append('receipt', receiptFile);
      fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mlgorbdr'}`, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }).catch(() => {});
      onNavigate('submitted');
    } catch { setError('Submission failed. Please try again.'); }
    setLoading(false);
  };

  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => onNavigate('landing')}><img src="/logo.png" alt="CramWiz" style={S.logoImg} /></div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn>
          <Btn variant="ghost" onClick={() => onNavigate('login')}>Log In</Btn>
        </div>
      </nav>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '32px 20px', minHeight: 'calc(100vh - 57px)', position: 'relative', zIndex: 2 }}>
        <div style={{ width: '100%', maxWidth: 520 }}>
          <Badge color="blue" style={{ marginBottom: 12 }}>One-Time Payment · Lifetime Access</Badge>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: -.5, marginBottom: 6, marginTop: 12 }}>Get Full Access</h2>
          <p style={{ color: 'var(--wd)', fontSize: '.85rem', marginBottom: 24 }}>Pay once. Use forever. Your code is personal — tied to your email only.</p>

          {/* Bank details */}
          <div style={{ ...S.cardBlue, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.82rem', color: '#fff' }}>1</div>
              <div style={{ fontWeight: 700 }}>Make the transfer</div>
            </div>
            <div style={{ background: 'var(--black)', border: '1px solid var(--bd)', borderRadius: 'var(--r)', padding: '16px 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '7px 16px', alignItems: 'center' }}>
                {[['Amount', '₦3,000', true], ['Bank', 'Moniepoint', false], ['Account', '8155272851', true], ['Name', 'Ibinabo Martins', false]].map(([k, v, bold]) => (
                  <>
                    <span key={k} style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase' }}>{k}</span>
                    <span key={v} style={{ fontWeight: bold ? 800 : 600, fontSize: bold ? (k==='Amount'?'1.2rem':'.95rem') : '.9rem', color: bold ? 'var(--bb)' : 'var(--white)', letterSpacing: k==='Account' ? 2 : 0, fontFamily: k==='Account' ? 'var(--fm)' : 'var(--fn)' }}>{v}</span>
                  </>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 10 }}>Use your name as transfer narration so we can match your payment.</p>
          </div>

          {/* Form */}
          <div style={{ ...S.card, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--b4)', border: '1px solid var(--wf)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.82rem' }}>2</div>
              <div style={{ fontWeight: 700 }}>Fill your details & submit receipt</div>
            </div>
            {error && <Alert type="error">{error}</Alert>}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 0 }}>
              <Input label="First Name" value={fname} onChange={setFname} placeholder="First name" />
              <Input label="Last Name" value={lname} onChange={setLname} placeholder="Last name" />
            </div>
            <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="Your access code comes here" hint="Double-check this — your login code is sent here." />
            <Input label="WhatsApp Number" type="tel" value={phone} onChange={setPhone} placeholder="+234 xxx xxx xxxx" hint="Backup — we'll send your code here if email fails." />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Input label="Department" value={dept} onChange={setDept} placeholder="e.g. Computer Science" />
              <Input label="University / School" value={uni} onChange={setUni} placeholder="e.g. UNILAG" />
            </div>
            <Input label="Referral Code (optional)" value={refCode} onChange={setRefCode} placeholder="Ambassador code if any" />
            <div style={{ marginBottom: 16 }}>
              <label style={S.label}>Upload Payment Receipt</label>
              <div style={{ ...S.uploadZone, borderColor: receiptFile ? 'var(--green)' : 'var(--wf)', background: receiptFile ? 'rgba(0,214,143,.04)' : 'var(--b2)' }}>
                <input type="file" accept="image/*,.pdf" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }} onChange={e => setReceiptFile(e.target.files[0])} />
                <div style={{ fontWeight: 600, fontSize: '.9rem' }}>{receiptFile ? receiptFile.name : 'Screenshot or photo of receipt'}</div>
                <div style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>JPG, PNG or PDF</div>
              </div>
            </div>
            <Btn onClick={submit} disabled={loading} full>{loading ? 'Submitting...' : 'Submit Receipt for Review'}</Btn>
            <p style={{ fontSize: '.72rem', color: 'var(--wd)', textAlign: 'center', marginTop: 10 }}>We verify and send your code — usually within a few hours.</p>
          </div>

          <div style={{ ...S.card, opacity: .6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--b4)', border: '1px solid var(--wf)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.82rem' }}>3</div>
              <div><div style={{ fontWeight: 700, marginBottom: 4 }}>Get your code by email & WhatsApp</div><div style={{ fontSize: '.72rem', color: 'var(--wd)' }}>Use it to register. Works once, only with your email.</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: SUBMITTED
// ============================================================
function Submitted({ onNavigate }) {
  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 400, textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(26,108,255,.15)', border: '2px solid var(--bb)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
          <svg style={{ width: 24, height: 24, color: 'var(--bb)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h2 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: 10 }}>Receipt Submitted!</h2>
        <p style={{ color: 'var(--wd)', fontSize: '.875rem', lineHeight: 1.7, marginBottom: 20 }}>
          We've received your receipt. Once we confirm your transfer, your CramWiz access code will be sent to your email and WhatsApp.
        </p>
        <Alert type="info" style={{ textAlign: 'left' }}>
          <ul style={{ paddingLeft: 14, marginTop: 4 }}>
            <li style={{ marginBottom: 6 }}>We verify your Moniepoint transfer</li>
            <li style={{ marginBottom: 6 }}>Code is sent to your email AND WhatsApp</li>
            <li>Come back and register with your code</li>
          </ul>
        </Alert>
        <Btn variant="outline" full onClick={() => onNavigate('landing')} style={{ marginBottom: 8 }}>Back to Home</Btn>
        <Btn variant="ghost" full onClick={() => onNavigate('login')}>I Already Have My Code</Btn>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: LOGIN
// ============================================================
function Login({ onNavigate, onLogin }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  const doLogin = () => {
    setError('');
    if (!email || !pw) { setError('Fill in all fields.'); return; }
    const users = DB.get('users') || {};
    const u = users[email.toLowerCase()];
    if (!u || u.pw !== hash(pw)) { setError('Invalid email or password.'); return; }
    if (u.disabled) { setError('This account has been deactivated. Contact support.'); return; }
    const user = { email: email.toLowerCase(), name: u.name, isFy: u.isFy, isAdmin: u.isAdmin, dept: u.dept || '', uni: u.uni || '' };
    DB.set('user', user);
    onLogin(user);
  };

  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 400, position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 6 }}><img src="/logo.png" alt="CramWiz" style={{ height: 36 }} /></div>
        <p style={{ fontSize: '.8rem', color: 'var(--wd)', marginBottom: 28, fontFamily: 'var(--fm)' }}>// welcome back. let's get to work.</p>
        {error && <Alert type="error">{error}</Alert>}
        <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="your@email.com" />
        <Input label="Password" type="password" value={pw} onChange={setPw} placeholder="••••••••" />
        <Btn full onClick={doLogin} style={{ marginTop: 8 }}>Log In</Btn>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <button onClick={() => onNavigate('forgot')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.82rem', fontFamily: 'var(--fn)' }}>Forgot password?</button>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid var(--wf)', margin: '18px 0' }} />
        <p style={{ textAlign: 'center', fontSize: '.875rem', color: 'var(--wd)' }}>
          No account?{' '}
          <button onClick={() => onNavigate('register')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.875rem', fontFamily: 'var(--fn)' }}>Register with your code</button>
        </p>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: FORGOT PASSWORD
// ============================================================
function Forgot({ onNavigate }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [verifiedEmail, setVerifiedEmail] = useState('');

  const verify = () => {
    setError('');
    if (!email || !code) { setError('Fill in email and access code.'); return; }
    const users = DB.get('users') || {};
    const codes = DB.get('codes') || {};
    if (!users[email.toLowerCase()]) { setError('No account found with this email.'); return; }
    const match = Object.entries(codes).find(([c, v]) => v.usedBy === email.toLowerCase() && c === code.toUpperCase());
    if (!match) { setError('Access code does not match this account.'); return; }
    setVerifiedEmail(email.toLowerCase());
    setStep(2);
  };

  const reset = () => {
    setError('');
    if (newPw.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (newPw !== confirmPw) { setError('Passwords do not match.'); return; }
    const users = DB.get('users') || {};
    if (!users[verifiedEmail]) { setError('Session error. Start over.'); return; }
    users[verifiedEmail].pw = hash(newPw);
    DB.set('users', users);
    setSuccess('Password reset! Redirecting to login...');
    setTimeout(() => onNavigate('login'), 2000);
  };

  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 400, position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 6 }}><img src="/logo.png" alt="CramWiz" style={{ height: 36 }} /></div>
        <p style={{ fontSize: '.8rem', color: 'var(--wd)', marginBottom: 28, fontFamily: 'var(--fm)' }}>// reset your password</p>
        {error && <Alert type="error">{error}</Alert>}
        {success && <Alert type="success">{success}</Alert>}
        {step === 1 ? (
          <>
            <p style={{ color: 'var(--wd)', fontSize: '.875rem', marginBottom: 16 }}>Enter your email and the access code you used to register.</p>
            <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="your@email.com" />
            <Input label="Your Access Code" value={code} onChange={setCode} placeholder="CW-XXXXXXXX" />
            <Btn full onClick={verify} style={{ marginTop: 8 }}>Verify Identity</Btn>
          </>
        ) : (
          <>
            <p style={{ color: 'var(--wd)', fontSize: '.875rem', marginBottom: 16 }}>Enter your new password.</p>
            <Input label="New Password" type="password" value={newPw} onChange={setNewPw} placeholder="Minimum 6 characters" />
            <Input label="Confirm Password" type="password" value={confirmPw} onChange={setConfirmPw} placeholder="Confirm new password" />
            <Btn full onClick={reset} style={{ marginTop: 8 }}>Reset Password</Btn>
          </>
        )}
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <Btn variant="ghost" onClick={() => onNavigate('login')}>← Back to Login</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: REGISTER
// ============================================================
function Register({ onNavigate, onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [dept, setDept] = useState('');
  const [uni, setUni] = useState('');
  const [code, setCode] = useState('');
  const [isFy, setIsFy] = useState(false);
  const [error, setError] = useState('');

  const doRegister = () => {
    setError('');
    if (!name || !email || !pw || !code) { setError('Fill in all required fields.'); return; }
    if (pw.length < 6) { setError('Password must be at least 6 characters.'); return; }
    const codes = DB.get('codes') || {};
    const uc = code.trim().toUpperCase();
    if (!codes[uc]) { setError('Invalid access code.'); return; }
    if (codes[uc].used) { setError('This code has already been used.'); return; }
    if (codes[uc].reservedFor && codes[uc].reservedFor !== email.toLowerCase()) { setError('This code was assigned to a different email address.'); return; }
    const users = DB.get('users') || {};
    const el = email.toLowerCase();
    if (users[el]) { setError('An account with this email already exists.'); return; }
    users[el] = { name, pw: hash(pw), isFy, isAdmin: false, dept, uni };
    DB.set('users', users);
    codes[uc].used = true; codes[uc].usedBy = el; codes[uc].usedAt = new Date().toISOString();
    DB.set('codes', codes);
    // Handle referral
    const ref = sessionStorage.getItem('cwref');
    if (ref) {
      const ambs = DB.get('ambassadors') || {};
      if (ambs[ref]) {
        ambs[ref].referrals = (ambs[ref].referrals || 0) + 1;
        ambs[ref].earned = (ambs[ref].earned || 0) + 1000;
        if (!ambs[ref].signups) ambs[ref].signups = [];
        ambs[ref].signups.push({ email: el, name, date: new Date().toISOString() });
        DB.set('ambassadors', ambs);
      }
      sessionStorage.removeItem('cwref');
    }
    const user = { email: el, name, isFy, isAdmin: false, dept, uni };
    DB.set('user', user);
    onLogin(user);
  };

  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 440, position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 6 }}><img src="/logo.png" alt="CramWiz" style={{ height: 36 }} /></div>
        <p style={{ fontSize: '.8rem', color: 'var(--wd)', marginBottom: 28, fontFamily: 'var(--fm)' }}>// one code. one account. let's go.</p>
        {error && <Alert type="error">{error}</Alert>}
        <Input label="Your Name" value={name} onChange={setName} placeholder="What should we call you?" />
        <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="your@email.com" />
        <Input label="Create Password" type="password" value={pw} onChange={setPw} placeholder="Minimum 6 characters" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <Input label="Department" value={dept} onChange={setDept} placeholder="e.g. Biochemistry" />
          <Input label="University" value={uni} onChange={setUni} placeholder="e.g. UNILAG" />
        </div>
        <Input label="Access Code" value={code} onChange={setCode} placeholder="CW-XXXXXXXX" hint="Works once, only with the email it was assigned to." style={{ fontFamily: 'var(--fm)', letterSpacing: 1 }} />
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, cursor: 'pointer' }}>
          <input type="checkbox" checked={isFy} onChange={e => setIsFy(e.target.checked)} style={{ accentColor: 'var(--bb)' }} />
          <span style={{ fontSize: '.83rem', color: 'var(--wd)' }}>I am a final year student</span>
        </label>
        <Btn full onClick={doRegister} style={{ marginTop: 8 }}>Create My Account</Btn>
        <hr style={{ border: 'none', borderTop: '1px solid var(--wf)', margin: '18px 0' }} />
        <p style={{ textAlign: 'center', fontSize: '.875rem', color: 'var(--wd)' }}>
          Already have an account?{' '}
          <button onClick={() => onNavigate('login')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.875rem' }}>Log in</button>
        </p>
        <div style={{ textAlign: 'center', marginTop: 10 }}><Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn></div>
      </div>
    </div>
  );
}

// ============================================================
// DASHBOARD
// ============================================================
function Dashboard({ user, onLogout, onNavigate }) {
  const [section, setSection] = useState('upload');
  const [showMore, setShowMore] = useState(false);
  const [files, setFiles] = useState({});
  const [results, setResults] = useState(() => DB.get('results'));
  const [solved, setSolved] = useState(() => DB.get('solved'));
  const [mapping, setMapping] = useState(() => DB.get('mapping'));
  const [processing, setProcessing] = useState(false);
  const [loaderText, setLoaderText] = useState('');

  const setFile = (file, type) => {
    const allowed = ['application/pdf','image/jpeg','image/png','image/jpg','image/webp'];
    if (!allowed.includes(file.type) && !file.type.startsWith('image/')) { alert('Please upload a PDF or image file.'); return; }
    if (file.size > 62914560) { alert('File too large. Max 60MB.'); return; }
    setFiles(prev => ({ ...prev, [type]: file }));
  };

  const animLoader = (msgs) => {
    let i = 0;
    setLoaderText(msgs[0]);
    const iv = setInterval(() => { i++; if (i < msgs.length) setLoaderText(msgs[i]); else clearInterval(iv); }, 2600);
    return () => clearInterval(iv);
  };

  const showSec = (s) => { setSection(s); setShowMore(false); window.scrollTo(0,0); };

  const sidebarBtns = [
    { id: 'upload', label: 'Upload & Process', icon: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12' },
    { id: 'assignment', label: 'Assignment Solver', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { id: 'results', label: 'My Results', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { id: 'solve', label: 'Solve Past Questions', icon: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'mapping', label: 'Pattern Mapping', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    { id: 'qbank', label: 'Question Bank', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.75 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'manual', label: 'Solve Manuals', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'notepad', label: 'Notepad', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { id: 'community', label: 'Community', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { id: 'ambassador', label: 'Ambassador', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    ...(user.isFy ? [{ id: 'project', label: 'Project Topics', icon: 'M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }] : []),
    { id: 'account', label: 'My Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'feedback', label: 'Feedback', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    ...(user.isAdmin ? [{ id: 'admin', label: 'Admin Panel', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }] : []),
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => onNavigate('landing')}><img src="/logo.png" alt="CramWiz" style={S.logoImg} /></div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--fm)', fontSize: '.72rem', color: 'var(--wd)', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</span>
          <Btn variant="outline" onClick={onLogout}>Log Out</Btn>
        </div>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 'calc(100vh - 57px)' }} className="dashboard-grid">
        {/* Sidebar */}
        <aside style={{ background: 'var(--b2)', borderRight: '1px solid var(--wf)', padding: '20px 0', overflowY: 'auto' }} className="sidebar">
          {sidebarBtns.map(b => (
            <button key={b.id} onClick={() => showSec(b.id)} style={{
              display: 'flex', alignItems: 'center', gap: 8, width: '100%',
              padding: '9px 14px', border: 'none', background: section === b.id ? 'rgba(26,108,255,.15)' : 'transparent',
              color: section === b.id ? 'var(--bb)' : 'var(--wd)', fontFamily: 'var(--fn)', fontSize: '.83rem',
              fontWeight: section === b.id ? 600 : 500, cursor: 'pointer', textAlign: 'left', transition: 'var(--tr)',
            }}>
              <svg style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d={b.icon} /></svg>
              {b.label}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ padding: '28px 32px', overflowY: 'auto', paddingBottom: 90 }} className="main-content">
          {section === 'upload' && <SectionUpload files={files} setFile={setFile} onResults={(r) => { setResults(r); DB.set('results', r); setSection('results'); }} animLoader={animLoader} setProcessing={setProcessing} processing={processing} loaderText={loaderText} setLoaderText={setLoaderText} />}
          {section === 'assignment' && <SectionAssignment user={user} />}
          {section === 'results' && <SectionResults results={results} isFy={user.isFy} onUpload={() => setSection('upload')} />}
          {section === 'solve' && <SectionSolve files={files} setFile={setFile} solved={solved} setSolved={(s) => { setSolved(s); DB.set('solved', s); }} />}
          {section === 'mapping' && <SectionMapping files={files} setFile={setFile} mapping={mapping} setMapping={(m) => { setMapping(m); DB.set('mapping', m); }} />}
          {section === 'qbank' && <SectionQbank />}
          {section === 'manual' && <SectionManual files={files} setFile={setFile} />}
          {section === 'notepad' && <SectionNotepad />}
          {section === 'community' && <SectionCommunity user={user} />}
          {section === 'ambassador' && <SectionAmbassador user={user} />}
          {section === 'project' && <SectionProject />}
          {section === 'account' && <SectionAccount user={user} />}
          {section === 'feedback' && <SectionFeedback user={user} />}
          {section === 'admin' && user.isAdmin && <SectionAdmin />}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <div className="mobile-nav" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(8,8,15,.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--wf)', zIndex: 200, padding: '6px 0 max(6px, env(safe-area-inset-bottom))' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {[
            { id: 'upload', label: 'Upload', icon: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12' },
            { id: 'results', label: 'Results', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
            { id: 'solve', label: 'Solve', icon: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'community', label: 'Community', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
          ].map(b => (
            <button key={b.id} onClick={() => showSec(b.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '6px 8px', border: 'none', background: 'transparent', color: section === b.id ? 'var(--bb)' : 'var(--wd)', cursor: 'pointer', flex: 1 }}>
              <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d={b.icon} /></svg>
              <span style={{ fontSize: '.6rem', fontWeight: 600 }}>{b.label}</span>
            </button>
          ))}
          <button onClick={() => setShowMore(v => !v)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '6px 8px', border: 'none', background: 'transparent', color: 'var(--wd)', cursor: 'pointer', flex: 1 }}>
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></svg>
            <span style={{ fontSize: '.6rem', fontWeight: 600 }}>More</span>
          </button>
        </div>
      </div>

      {/* More menu */}
      {showMore && (
        <div style={{ position: 'fixed', bottom: 65, left: 0, right: 0, background: 'rgba(15,15,28,.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--wf)', zIndex: 199, padding: '12px 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 10 }}>
            {['mapping','qbank','manual','notepad','ambassador','account'].map(id => {
              const b = sidebarBtns.find(x => x.id === id);
              if (!b) return null;
              return (
                <button key={id} onClick={() => showSec(id)} style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: 'var(--r)', padding: '12px 8px', color: 'var(--wd)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontSize: '.72rem', fontFamily: 'var(--fn)', fontWeight: 600 }}>
                  <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d={b.icon} /></svg>
                  {b.label}
                </button>
              );
            })}
          </div>
          <button onClick={() => setShowMore(false)} style={{ width: '100%', background: 'transparent', border: '1px solid var(--wf)', borderRadius: 'var(--rs)', padding: 10, color: 'var(--wd)', cursor: 'pointer', fontFamily: 'var(--fn)', fontSize: '.82rem' }}>Close</button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// DASHBOARD SECTIONS
// ============================================================

// ---- Markdown renderer (bold, numbered lists, headings) ----
function MarkdownText({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div style={{ lineHeight: 1.8, fontSize: '.9rem', color: 'var(--wd)' }}>
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: 10 }} />;
        // Heading ##
        if (line.startsWith('## ')) return <div key={i} style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--white)', margin: '14px 0 6px' }}>{line.slice(3)}</div>;
        if (line.startsWith('# ')) return <div key={i} style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--white)', margin: '16px 0 8px' }}>{line.slice(2)}</div>;
        // Numbered list
        const numMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (numMatch) return (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
            <span style={{ fontWeight: 700, color: 'var(--bb)', minWidth: 22, flexShrink: 0 }}>{numMatch[1]}.</span>
            <span>{renderInline(numMatch[2])}</span>
          </div>
        );
        // Bullet
        if (line.startsWith('- ') || line.startsWith('• ')) return (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 5 }}>
            <span style={{ color: 'var(--bb)', flexShrink: 0 }}>•</span>
            <span>{renderInline(line.slice(2))}</span>
          </div>
        );
        return <p key={i} style={{ margin: '0 0 6px' }}>{renderInline(line)}</p>;
      })}
    </div>
  );
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i} style={{ color: 'var(--white)', fontWeight: 700 }}>{p.slice(2, -2)}</strong>
      : p
  );
}

function SectionAssignment({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [customInstructions, setCustomInstructions] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const send = async () => {
    const q = input.trim();
    if (!q && !file) return;
    setError(''); setLoading(true);

    const userMsg = { role: 'user', text: q || `[File uploaded: ${file?.name}]`, file: file?.name };
    setMessages(prev => [...prev, userMsg]);
    setInput(''); setFile(null);

    try {
      let fileContext = '';
      if (file) {
        fileContext = await extractPdfText(file);
      }

      const history = messages.slice(-6).map(m =>
        m.role === 'user' ? `Student: ${m.text}` : `CramWiz: ${m.text}`
      ).join('\n');

      const sysPrompt = `You are CramWiz Assignment Solver — a highly accurate academic assistant for Nigerian university students.

RULES:
- Answer DIRECTLY. Never say "I'll solve this" or "Here's how to approach". Just solve it.
- For calculations: show every numbered step, state each formula, substitute values, give final answer in bold.
- For essay/theory: write the actual answer — structured, accurate, complete. Not a guide.
- For code: write the actual working code with comments.
- For diagrams/drawing questions: represent with clear ASCII or structured text, label all parts.
- Use **bold** for key terms, answers, and important steps.
- Be accurate. Double-check every calculation. This is for university assessment.
- Write clearly and confidently like a first-class student.
${customInstructions ? '\nAdditional instructions from student: ' + customInstructions : ''}`;

      const fullPrompt = `${sysPrompt}

${history ? 'Previous conversation:\n' + history + '\n' : ''}${fileContext ? 'Assignment document content:\n' + fileContext + '\n\n' : ''}Student question/assignment:
${q || 'Solve the assignment in the uploaded document.'}`;

      const answer = await aiCallText(fullPrompt, 6000);
      setMessages(prev => [...prev, { role: 'ai', text: answer }]);
    } catch(e) {
      setError('Error: ' + e.message);
    }
    setLoading(false);
  };

  const exportPDF = () => {
    const win = window.open('', '_blank');
    const content = messages.map(m => {
      if (m.role === 'user') return `<div style="margin:16px 0 6px;font-weight:700;color:#1a6cff">You: ${m.text}</div>`;
      return `<div style="margin:6px 0 20px;white-space:pre-wrap;line-height:1.8">${m.text.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</div><hr style="border:none;border-top:1px solid #eee"/>`;
    }).join('');
    win.document.write(`<!DOCTYPE html><html><head><title>CramWiz Assignment — ${user.name}</title>
<style>body{font-family:Georgia,serif;max-width:780px;margin:40px auto;padding:0 24px;color:#111;font-size:15px;line-height:1.8}h1{color:#1a6cff;font-size:1.4rem;margin-bottom:4px}p.meta{color:#666;font-size:.85rem;margin-bottom:32px}strong{color:#000}hr{margin:20px 0}@media print{body{margin:20px}}</style>
</head><body>
<h1>CramWiz Assignment Solutions</h1>
<p class="meta">Student: ${user.name} &nbsp;|&nbsp; ${new Date().toLocaleDateString('en-NG', {weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
${content}
</body></html>`);
    win.document.close();
    setTimeout(() => win.print(), 500);
  };

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', minHeight: 500 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexShrink: 0 }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 2 }}>Assignment Solver</h2>
          <p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>Type your assignment questions or upload a PDF. Get direct, complete answers.</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="outline" onClick={() => setShowInstructions(v => !v)}>
            {showInstructions ? 'Hide Options' : '⚙ Options'}
          </Btn>
          {messages.length > 0 && <Btn variant="outline" onClick={exportPDF}>Export PDF</Btn>}
          {messages.length > 0 && <Btn variant="ghost" onClick={() => setMessages([])}>Clear</Btn>}
        </div>
      </div>

      {showInstructions && (
        <div style={{ ...S.card, marginBottom: 12, flexShrink: 0 }}>
          <label style={S.label}>Custom Instructions (optional)</label>
          <textarea value={customInstructions} onChange={e => setCustomInstructions(e.target.value)}
            placeholder="e.g. Use APA referencing. Answer in 500 words. Focus on Nigerian context. Show all derivations."
            style={{ ...S.input, minHeight: 60, resize: 'vertical', fontSize: '.85rem' }} />
          <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 4 }}>These instructions apply to every answer in this session.</p>
        </div>
      )}

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0', marginBottom: 12 }}>
        {messages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--wd)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>📝</div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--white)', marginBottom: 8 }}>Ready to solve your assignment</div>
            <p style={{ fontSize: '.875rem', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>Type any assignment question below, or upload a PDF. CramWiz solves directly — no fluff, no preamble.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxWidth: 480, margin: '20px auto 0' }} className="grid-2">
              {['"Calculate the pH of 0.1M HCl"','"Write an essay on federalism in Nigeria"','"Solve the circuit for current I"','"Explain the OSI model with diagram"'].map((ex, i) => (
                <button key={i} onClick={() => setInput(ex.replace(/"/g,''))} style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: 'var(--rs)', padding: '10px 12px', color: 'var(--wd)', cursor: 'pointer', textAlign: 'left', fontSize: '.78rem', fontFamily: 'var(--fn)' }}>{ex}</button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
            {m.role === 'user' ? (
              <div style={{ maxWidth: '72%', background: 'var(--bb)', color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '10px 16px', fontSize: '.9rem', lineHeight: 1.6, fontWeight: 500 }}>{m.text}</div>
            ) : (
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue),var(--bb))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0 }}>CW</div>
                  <span style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>CramWiz</span>
                </div>
                <div style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: '4px 16px 16px 16px', padding: '16px 20px' }}>
                  <MarkdownText text={m.text} />
                </div>
                <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                  <VoiceBtn text={m.text.replace(/\*\*/g,'')} />
                  <button onClick={() => navigator.clipboard.writeText(m.text)} style={{ background: 'none', border: '1px solid var(--wf)', borderRadius: 100, padding: '4px 12px', fontSize: '.72rem', color: 'var(--wd)', cursor: 'pointer', fontFamily: 'var(--fm)' }}>Copy</button>
                </div>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue),var(--bb))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0 }}>CW</div>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0,1,2].map(d => <div key={d} style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--bb)', animation: 'bounce 1.2s infinite', animationDelay: d*0.2+'s' }} />)}
            </div>
          </div>
        )}
        {error && <Alert type="error">{error}</Alert>}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div style={{ flexShrink: 0, background: 'var(--b2)', border: '1px solid var(--wf)', borderRadius: 'var(--r)', padding: 12 }}>
        {file && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, padding: '6px 10px', background: 'rgba(26,108,255,.1)', borderRadius: 'var(--rs)', fontSize: '.78rem' }}>
            <span style={{ color: 'var(--bb)' }}>📎 {file.name}</span>
            <button onClick={() => setFile(null)} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontSize: '.78rem' }}>✕</button>
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <label style={{ cursor: 'pointer', padding: '8px', color: 'var(--wd)', flexShrink: 0, display: 'flex', alignItems: 'center' }} title="Upload assignment PDF">
            <input type="file" accept=".pdf,image/*" style={{ display: 'none' }} onChange={e => { if (e.target.files[0]) setFile(e.target.files[0]); }} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
          </label>
          <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
            placeholder="Type your assignment question here… or upload a PDF above. Press Enter to send, Shift+Enter for new line."
            style={{ ...S.input, flex: 1, minHeight: 44, maxHeight: 160, resize: 'none', margin: 0, padding: '10px 14px', fontSize: '.9rem', lineHeight: 1.5 }}
            rows={1}
          />
          <Btn onClick={send} disabled={loading || (!input.trim() && !file)} style={{ flexShrink: 0, height: 44 }}>
            {loading ? '…' : 'Send'}
          </Btn>
        </div>
        <p style={{ fontSize: '.68rem', color: 'var(--wd)', marginTop: 6, fontFamily: 'var(--fm)' }}>Enter to send · Shift+Enter for new line · Upload PDF or image of assignment</p>
      </div>
    </div>
  );
}

function SectionUpload({ files, setFile, onResults, animLoader, processing, setProcessing, loaderText, setLoaderText }) {
  const [course, setCourse] = useState('');
  const [mode, setMode] = useState('exam');
  const [error, setError] = useState('');

  const process = async () => {
    if (!files.material) return;
    setError(''); setProcessing(true);
    const stop = animLoader(['Reading your documents...','Analysing key topics...','Generating exam questions...','Looking for patterns...','Almost done...']);
    try {
      const mat = await extractPdfText(files.material);
      const pq = files.pastQuestions ? await extractPdfText(files.pastQuestions) : '';
      const hasPQ = pq.length > 20;
      const prompt = `You are CramWiz, a highly accurate AI exam prep tutor for Nigerian university students.${course ? '\nCourse: ' + course : ''}
Mode: ${mode === 'exam' ? 'Exam (sharp, direct answers with clear workings)' : 'Study (deep understanding with thorough explanations)'}.

IMPORTANT INSTRUCTIONS:
- Be HIGHLY ACCURATE. Every fact, formula, and answer must be correct.
- For calculations: show EVERY step clearly, number each step, and state the final answer boldly.
- For theory: explain in clear, bold language — not vague. Be direct like a lecturer who wants students to pass.
- If a topic involves a diagram (circuits, graphs, structures, flow charts, anatomy, etc.), describe it clearly with ASCII or structured text representation.
- Do NOT give identical answers to generic questions. Approach each topic from a unique angle — same message, different framing.
- Write answers as though you are the student's private tutor sitting next to them.

MATERIAL: ${mat}
${hasPQ ? 'PAST QUESTIONS:\n' + pq : ''}

Respond ONLY with valid JSON (no markdown, no backticks):
{"topics":[{"name":"Topic","importance":85,"summary":"2-3 sentence explanation"}],"summary":"3-5 sentence overview","questions":[{"question":"question text","answer":"full model answer with steps for calculations or clear explanation for theory","type":"theory|calculation|short"}],"hotTopics":${hasPQ ? '[{"topic":"name","frequency":80,"note":"appeared X/Y years"}]' : '[]'},"examTips":["actionable tip 1","actionable tip 2","actionable tip 3"],"projectTopics":["topic1","topic2","topic3"]}
Generate min: 5 topics, 10 questions, 3 tips.${hasPQ ? ' Use past questions to identify hot topics and make questions match the past question style.' : ''}`;
      const r = await aiCall(prompt, 4000);
      stop(); onResults(r);
    } catch(e) {
      stop();
      setError('Error: ' + e.message);
    }
    setProcessing(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: -.3, marginBottom: 3 }}>Upload Materials</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Upload your study material. Adding past questions makes predictions far more accurate.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Study Material" badge="Required" type="material" files={files} onFile={setFile} />
        <UploadZone label="Past Questions" badge="Optional" type="pastQuestions" files={files} onFile={setFile} />
      </div>
      <div style={{ ...S.card, marginTop: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Organic Chemistry" />
          <Select label="Study Mode" value={mode} onChange={setMode} options={[{ value: 'exam', label: 'Exam Mode — concise answers' },{ value: 'study', label: 'Study Mode — deep understanding' }]} />
        </div>
      </div>
      {processing ? <Loader text={loaderText} /> : (
        <div style={{ marginTop: 18 }}>
          <Btn onClick={process} disabled={!files.material}>Analyse My Material</Btn>
          <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 8 }}>Large PDFs may take up to 30 seconds.</p>
        </div>
      )}
    </div>
  );
}

function SectionResults({ results, isFy, onUpload }) {
  const [tab, setTab] = useState('summary');
  if (!results) return (
    <div style={{ textAlign: 'center', padding: '48px 20px' }}>
      <p style={{ color: 'var(--wd)', marginBottom: 16 }}>No results yet. Upload your material and click Analyse.</p>
      <Btn onClick={onUpload}>Upload Material</Btn>
    </div>
  );
  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'questions', label: 'Exam Questions' },
    { id: 'hot', label: 'Hot Topics' },
    { id: 'tips', label: 'Exam Tips' },
    ...(isFy ? [{ id: 'project', label: 'Project Topics' }] : []),
  ];
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: -.3, marginBottom: 3 }}>My Results</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>CramWiz analysis of your material.</p>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--wf)', marginBottom: 22, overflowX: 'auto' }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: '11px 16px', border: 'none', background: 'transparent', color: tab === t.id ? 'var(--bb)' : 'var(--wd)', fontFamily: 'var(--fn)', fontWeight: 600, fontSize: '.82rem', borderBottom: tab === t.id ? '2px solid var(--bb)' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap', marginBottom: -1 }}>{t.label}</button>
        ))}
      </div>
      {tab === 'summary' && (
        <div>
          <div style={S.resultBlock}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Overview</h4>
            <p style={{ fontSize: '.875rem', lineHeight: 1.75, color: 'var(--wd)' }}>{results.summary}</p>
            <div style={{ marginTop: 10 }}><VoiceBtn text={results.summary} /></div>
          </div>
          <p style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', margin: '18px 0 10px' }}>Key Topics</p>
          {(results.topics || []).map((t, i) => (
            <div key={i} style={{ ...S.card, marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontWeight: 700 }}>{t.name}</span>
                <Badge color="blue">{t.importance}% important</Badge>
              </div>
              <div style={{ height: 4, background: 'var(--b4)', borderRadius: 2, marginBottom: 8, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: t.importance + '%', background: 'linear-gradient(90deg,var(--blue),var(--bb))', borderRadius: 2 }} />
              </div>
              <p style={{ fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.6 }}>{t.summary}</p>
            </div>
          ))}
        </div>
      )}
      {tab === 'questions' && (results.questions || []).map((q, i) => (
        <div key={i} style={S.qItem}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <Badge color="blue">Q{i+1}</Badge>
            <Badge color={q.type === 'calculation' ? 'red' : 'green'}>{q.type || 'theory'}</Badge>
          </div>
          <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{q.question}</div>
          <div style={{ fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.7, fontFamily: 'var(--fm)' }}>{q.answer}</div>
          <div style={{ marginTop: 10 }}><VoiceBtn text={`Question ${i+1}: ${q.question}. Answer: ${q.answer}`} /></div>
        </div>
      ))}
      {tab === 'hot' && (
        <div>
          {(!results.hotTopics || !results.hotTopics.length)
            ? <Alert type="info">Upload past questions alongside your material to unlock topic frequency mapping.</Alert>
            : (
              <>
                <Alert type="info" style={{ marginBottom: 16 }}>Based on your past questions — study these first.</Alert>
                {results.hotTopics.map((t, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 13px', background: 'var(--b4)', borderRadius: 'var(--rs)', marginBottom: 6 }}>
                      <div><div style={{ fontWeight: 600, fontSize: '.875rem' }}>{t.topic}</div><div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 3 }}>{t.note}</div></div>
                      <Badge color="blue">{t.frequency}%</Badge>
                    </div>
                    <div style={{ height: 3, background: 'linear-gradient(90deg,var(--blue),var(--bb))', borderRadius: 2, marginBottom: 12, width: t.frequency + '%', boxShadow: '0 0 5px var(--blue)' }} />
                  </div>
                ))}
              </>
            )
          }
        </div>
      )}
      {tab === 'tips' && (
        <div style={S.resultBlock}>
          <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Exam Strategy</h4>
          <ul style={{ paddingLeft: 18 }}>
            {(results.examTips || []).map((t, i) => <li key={i} style={{ fontSize: '.875rem', lineHeight: 1.75, color: 'var(--wd)', marginBottom: 6 }}>{t}</li>)}
          </ul>
          <div style={{ marginTop: 10 }}><VoiceBtn text={(results.examTips || []).join('. ')} /></div>
        </div>
      )}
      {tab === 'project' && (
        <div>
          <Alert type="info" style={{ marginBottom: 16 }}>Use the Project Topic Generator (sidebar) for full proposals. These are quick suggestions from your material.</Alert>
          {(results.projectTopics || []).map((t, i) => (
            <div key={i} style={{ ...S.card, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Badge color="blue">{i+1}</Badge>
              <span style={{ fontWeight: 700 }}>{t}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionSolve({ files, setFile, solved, setSolved }) {
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loaderText, setLoaderText] = useState('Reading your question paper...');

  useEffect(() => {
    if (!loading) return;
    const msgs = ['Reading your question paper...','Extracting all questions...','Solving calculations step by step...','Writing theory answers...','Almost done...'];
    let i = 0;
    const iv = setInterval(() => { i = (i + 1) % msgs.length; setLoaderText(msgs[i]); }, 3000);
    return () => clearInterval(iv);
  }, [loading]);

  const solve = async () => {
    if (!files.solveFile) return;
    setError(''); setLoading(true);
    try {
      const txt = await extractPdfText(files.solveFile);

      // Step 1 — extract questions list (small, fast)
      const extractPrompt = `You are CramWiz. Extract all questions from this exam paper.
${course ? 'Course: ' + course : ''}
PAPER: ${txt}
Respond ONLY with valid JSON (no extra text before or after):
{"paperTitle":"title","year":"year or Unknown","sections":[{"sectionName":"Section A","questions":[{"number":"1","question":"exact question text","type":"theory|calculation|mcq|short|diagram","marks":"5"}]}]}`;
      const extracted = await aiCall(extractPrompt, 4000);

      // Step 2 — solve each section in batches of 3 questions
      const allSections = [];
      for (const section of (extracted.sections || [])) {
        const qs = section.questions || [];
        const solvedQs = [];
        for (let i = 0; i < qs.length; i += 3) {
          const batch = qs.slice(i, i + 3);
          const batchPrompt = `You are CramWiz, a highly accurate AI exam solver for Nigerian university students.
${course ? 'Course: ' + course : ''}

SOLVE each of these ${batch.length} questions completely and accurately.
RULES:
- For CALCULATIONS: number every step, state formula, substitute values, give bold final answer with units.
- For THEORY: write a complete, direct answer — no vague summaries.
- For DIAGRAMS: represent clearly with ASCII/text, label all parts.
- For MCQ: state correct option AND explain why others are wrong.
- Be ACCURATE. Double-check every step.

Questions to solve:
${batch.map((q,idx) => `Q${idx+1} (${q.type}): ${q.question}`).join('\n')}

Respond ONLY with valid JSON (no extra text outside the JSON):
{"answers":[{"number":"${batch[0]?.number}","answer":"complete solution here","type":"${batch[0]?.type}"}]}
Include exactly ${batch.length} answer objects matching the questions above.`;
          const solved = await aiCall(batchPrompt, 6000);
          const answers = solved.answers || [];
          answers.forEach((ans, idx) => {
            const orig = batch[idx] || {};
            solvedQs.push({ ...orig, answer: ans.answer || 'Could not solve this question.' });
          });
        }
        allSections.push({ sectionName: section.sectionName, questions: solvedQs });
      }

      setSolved({
        paperTitle: extracted.paperTitle || 'Past Question Paper',
        year: extracted.year || 'Unknown',
        totalQuestions: allSections.reduce((s, sec) => s + sec.questions.length, 0),
        sections: allSections,
        generalTips: ['Focus on questions with highest marks first', 'Show all workings — partial marks are awarded'],
      });
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Solve Past Questions</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Upload any unsolved paper — snap or PDF. Every question solved with full workings.</p>
      {error && <Alert type="error">{error}</Alert>}
      <Alert type="info" style={{ marginBottom: 16 }}>Camera snaps work. The clearer the image, the better the results.</Alert>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Question Paper" badge="Required" type="solveFile" files={files} onFile={setFile} />
        <div>
          <Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Thermodynamics" />
          <div style={S.card}>
            <div style={{ fontWeight: 600, fontSize: '.875rem', marginBottom: 8 }}>What you get:</div>
            <ul style={{ paddingLeft: 14 }}>
              {['Every question answered','Step-by-step workings for calculations','Voice playback on each answer'].map((t,i) => <li key={i} style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 6 }}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
      {loading ? <Loader text={loaderText} /> : <div style={{ marginTop: 18 }}><Btn onClick={solve} disabled={!files.solveFile}>Solve This Paper</Btn></div>}
      {solved && !loading && (
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{solved.paperTitle || 'Past Question Paper'}</div><div style={{ color: 'var(--wd)', fontSize: '.82rem', marginTop: 4 }}>{solved.year || 'Year unknown'} · {solved.totalQuestions || '?'} questions</div></div>
            <Badge color="green">Solved</Badge>
          </div>
          {solved.generalTips?.length > 0 && <Alert type="info" style={{ marginBottom: 16 }}><ul style={{ paddingLeft: 14 }}>{solved.generalTips.map((t,i) => <li key={i} style={{ marginBottom: 6 }}>{t}</li>)}</ul></Alert>}
          {(solved.sections || []).map((sec, si) => (
            <div key={si} style={{ ...S.resultBlock, marginBottom: 16 }}>
              <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>{sec.sectionName}</h4>
              {(sec.questions || []).map((q, qi) => (
                <div key={qi} style={S.qItem}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <Badge color="blue">Q{q.number}</Badge>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {q.marks && <span style={{ fontSize: '.72rem', color: 'var(--wd)' }}>{q.marks} marks</span>}
                      <Badge color={q.type === 'calculation' ? 'red' : q.type === 'mcq' ? 'green' : 'blue'}>{q.type || 'theory'}</Badge>
                    </div>
                  </div>
                  <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{q.question}</div>
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--wf)', fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.7, fontFamily: 'var(--fm)' }}>{q.answer}</div>
                  <div style={{ marginTop: 10 }}><VoiceBtn text={`Question ${q.number}: ${q.question}. Answer: ${q.answer}`} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionMapping({ files, setFile, mapping, setMapping }) {
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const run = async () => {
    if (!files.mapMaterial || !files.mapPastQ) return;
    setError(''); setLoading(true);
    try {
      const mat = await extractPdfText(files.mapMaterial);
      const pq = await extractPdfText(files.mapPastQ);
      const prompt = `You are CramWiz, a highly accurate AI pattern mapper for Nigerian university exam prep.${course ? '\nCourse: ' + course : ''}
MATERIAL: ${mat}
PAST QUESTIONS: ${pq}

Map all past questions against the material with precision. Identify exact frequencies, spot cold topics, and make well-reasoned predictions.
Respond ONLY with valid JSON (no markdown, no backticks):
{"summary":"2-3 precise sentences on the exam pattern","hotTopics":[{"topic":"name","frequency":85,"note":"appeared 4/5 years","chapters":"ch 3,5"}],"coldTopics":[{"topic":"name","note":"low priority reason"}],"questionStyles":[{"style":"Long theory","percentage":60,"note":"2-3 per paper"}],"predictions":[{"question":"predicted exam question (specific and realistic)","answer":"model answer with steps or explanation","reason":"pattern-based reason","priority":"high|medium|low"}],"studyPlan":["actionable step 1","actionable step 2","actionable step 3"]}`;
      const r = await aiCall(prompt, 3000);
      setMapping(r);
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Pattern Mapping</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Upload your textbook AND past questions. CramWiz maps which topics keep coming out and predicts what's next.</p>
      {error && <Alert type="error">{error}</Alert>}
      <Alert type="info" style={{ marginBottom: 16 }}>Both files required. More years of past questions = more accurate patterns.</Alert>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Textbook / Notes" badge="Required" type="mapMaterial" files={files} onFile={setFile} />
        <UploadZone label="Past Questions" badge="Required" type="mapPastQ" files={files} onFile={setFile} />
      </div>
      <div style={{ ...S.card, maxWidth: 380, marginTop: 14 }}><Input label="Course" value={course} onChange={setCourse} placeholder="e.g. Organic Chemistry" /></div>
      {loading ? <Loader text="Mapping question patterns..." /> : <div style={{ marginTop: 18 }}><Btn onClick={run} disabled={!files.mapMaterial || !files.mapPastQ}>Run Pattern Mapping</Btn></div>}
      {mapping && !loading && (
        <div style={{ marginTop: 24 }}>
          <Alert type="info" style={{ marginBottom: 16 }}>{mapping.summary}</Alert>
          <div style={{ ...S.resultBlock, marginBottom: 14 }}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Hot Topics — Study First</h4>
            {(mapping.hotTopics || []).map((t, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 13px', background: 'var(--b4)', borderRadius: 'var(--rs)', marginBottom: 6 }}>
                  <div><div style={{ fontWeight: 600, fontSize: '.875rem' }}>{t.topic}</div><div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 3 }}>{t.note}{t.chapters ? ' · ' + t.chapters : ''}</div></div>
                  <Badge color="blue">{t.frequency}%</Badge>
                </div>
                <div style={{ height: 3, background: 'linear-gradient(90deg,var(--blue),var(--bb))', width: t.frequency + '%', borderRadius: 2, marginBottom: 12 }} />
              </div>
            ))}
          </div>
          <div style={{ ...S.resultBlock, marginBottom: 14 }}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Question Style Breakdown</h4>
            {(mapping.questionStyles || []).map((s, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><span style={{ fontWeight: 600, fontSize: '.875rem' }}>{s.style}</span><span style={{ fontFamily: 'var(--fm)', color: 'var(--bb)', fontSize: '.875rem' }}>{s.percentage}%</span></div>
                <div style={{ height: 4, background: 'var(--b4)', borderRadius: 2, overflow: 'hidden' }}><div style={{ height: '100%', width: s.percentage + '%', background: 'linear-gradient(90deg,var(--blue),var(--bb))' }} /></div>
                <div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 3 }}>{s.note}</div>
              </div>
            ))}
          </div>
          <div style={{ ...S.resultBlock, marginBottom: 14 }}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Predicted Questions</h4>
            {(mapping.predictions || []).map((p, i) => (
              <div key={i} style={S.qItem}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}><Badge color="blue">Prediction {i+1}</Badge><Badge color={p.priority==='high'?'red':p.priority==='medium'?'blue':'green'}>{p.priority}</Badge></div>
                <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{p.question}</div>
                <div style={{ fontSize: '.82rem', color: 'var(--wd)' }}>Why: {p.reason}</div>
              </div>
            ))}
          </div>
          <div style={S.resultBlock}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Recommended Study Plan</h4>
            <ul style={{ paddingLeft: 18 }}>{(mapping.studyPlan || []).map((s, i) => <li key={i} style={{ fontSize: '.875rem', color: 'var(--wd)', lineHeight: 1.75, marginBottom: 8 }}>{s}</li>)}</ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionQbank() {
  const [topic, setTopic] = useState('');
  const [course, setCourse] = useState('');
  const [difficulty, setDifficulty] = useState('mixed');
  const [count, setCount] = useState('10');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const generate = async () => {
    if (!topic) { setError('Please enter a topic.'); return; }
    setError(''); setLoading(true);
    try {
      const prompt = `You are CramWiz, a highly accurate AI question bank generator for Nigerian university students.
Topic: ${topic}${course ? '\nCourse: ' + course : ''}
Difficulty: ${difficulty}

Generate exactly ${count} exam-standard questions on this topic.
- Questions must be varied in style (theory, calculation, short answer, MCQ where appropriate)
- Each answer must be COMPLETE, ACCURATE, and practically solved — not just described
- For calculations: show all working steps
- For diagrams: describe them with text/ASCII clearly
- Do NOT repeat question styles consecutively — mix them up

Respond ONLY with valid JSON (no markdown, no backticks):
{"topic":"${topic}","questions":[{"number":1,"question":"full question text","answer":"complete model answer with all workings/explanations","type":"theory|calculation|mcq|short|diagram","difficulty":"easy|medium|hard","hint":"brief strategic hint"}]}`;
      const r = await aiCall(prompt, 3500);
      setResults(r);
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  const dc = { easy: 'green', medium: 'blue', hard: 'red' };
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Question Bank</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Generate a bank of possible exam questions on any topic you enter.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={S.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Topic" value={topic} onChange={setTopic} placeholder="e.g. Mitosis and Meiosis" />
          <Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Biology" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 0 }} className="grid-2">
          <Select label="Difficulty" value={difficulty} onChange={setDifficulty} options={[{ value:'mixed',label:'Mixed — all levels'},{ value:'easy',label:'Easy'},{ value:'medium',label:'Medium'},{ value:'hard',label:'Hard — exam level'}]} />
          <Select label="Number of Questions" value={count} onChange={setCount} options={[{value:'10',label:'10 questions'},{value:'20',label:'20 questions'},{value:'30',label:'30 questions'}]} />
        </div>
        <Btn onClick={generate} disabled={loading} style={{ marginTop: 4 }}>Generate Question Bank</Btn>
      </div>
      {loading && <Loader text="Building your question bank..." />}
      {results && !loading && (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{results.topic}</div>
            <Badge color="blue">{(results.questions || []).length} Questions</Badge>
          </div>
          {(results.questions || []).map((q, i) => (
            <div key={i} style={S.qItem}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <Badge color="blue">Q{q.number}</Badge>
                <div style={{ display: 'flex', gap: 6 }}>
                  <Badge color={dc[q.difficulty] || 'blue'}>{q.difficulty || 'mixed'}</Badge>
                  <Badge color="blue">{q.type || 'theory'}</Badge>
                </div>
              </div>
              <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{q.question}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.7, fontFamily: 'var(--fm)' }}>{q.answer}</div>
              {q.hint && <div style={{ fontSize: '.72rem', color: 'var(--gold)', marginTop: 8 }}>Hint: {q.hint}</div>}
              <div style={{ marginTop: 10 }}><VoiceBtn text={`Question ${q.number}: ${q.question}. Answer: ${q.answer}`} /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionManual({ files, setFile }) {
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const solve = async () => {
    if (!files.manualFile) return;
    setError(''); setLoading(true);
    try {
      const manual = await extractPdfText(files.manualFile);
      const notes = files.manualNotes ? await extractPdfText(files.manualNotes) : '';
      const prompt = `You are CramWiz, a highly accurate AI manual and worksheet solver for Nigerian university students.${course ? '\nCourse: ' + course : ''}
A student has uploaded a manual/worksheet to be solved.${notes ? ' Their textbook/notes are also provided for context.' : ''}

CRITICAL INSTRUCTIONS:
- Solve EVERY question, exercise, and fill-in item without skipping any.
- For calculations: number every step. Show the formula, substitution, and final answer clearly.
- For theory: give a complete, accurate, well-structured answer — not a vague summary.
- For diagrams: describe them precisely using text or ASCII, label all parts.
- Be as accurate as a university lecturer marking a script.

MANUAL:
${manual}
${notes ? '\nSTUDENT NOTES:\n' + notes : ''}

Respond ONLY with valid JSON (no markdown, no backticks):
{"title":"Manual/worksheet title","items":[{"number":"1","question":"the question or exercise item","solution":"complete step-by-step solution","explanation":"concept explanation — why this answer is correct"}],"keyConcepts":["key concept 1"],"studyTips":["study tip 1"]}`;
      const r = await aiCall(prompt, 4000);
      setResults(r);
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Solve Manuals & Worksheets</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Upload photos of your filled-in manual or worksheet. CramWiz solves and explains everything.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Manual / Worksheet" badge="Required" type="manualFile" files={files} onFile={setFile} />
        <UploadZone label="Your Notes / Textbook" badge="Optional" type="manualNotes" files={files} onFile={setFile} />
      </div>
      <div style={{ ...S.card, maxWidth: 380, marginTop: 14 }}><Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Electrical Engineering" /></div>
      {loading ? <Loader text="Analysing and solving your manual..." /> : <div style={{ marginTop: 18 }}><Btn onClick={solve} disabled={!files.manualFile}>Solve This Manual</Btn></div>}
      {results && !loading && (
        <div style={{ marginTop: 24 }}>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 12 }}>{results.title || 'Manual Solutions'}</div>
          {results.keyConcepts?.length > 0 && <div style={{ marginBottom: 14 }}>{results.keyConcepts.map((c,i) => <Badge key={i} color="blue" style={{ marginRight: 4 }}>{c}</Badge>)}</div>}
          {results.studyTips?.length > 0 && <Alert type="info" style={{ marginBottom: 14 }}><ul style={{ paddingLeft: 14 }}>{results.studyTips.map((t,i) => <li key={i} style={{ marginBottom: 6 }}>{t}</li>)}</ul></Alert>}
          {(results.items || []).map((it, i) => (
            <div key={i} style={S.qItem}>
              <Badge color="blue" style={{ marginBottom: 8 }}>Item {it.number}</Badge>
              <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{it.question}</div>
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--wf)' }}>
                <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 4, fontFamily: 'var(--fm)' }}>Solution</div>
                <div style={{ fontSize: '.82rem', color: 'var(--wd)', fontFamily: 'var(--fm)', lineHeight: 1.7 }}>{it.solution}</div>
              </div>
              {it.explanation && <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--wf)', fontSize: '.75rem', color: 'var(--wd)' }}>{it.explanation}</div>}
              <div style={{ marginTop: 10 }}><VoiceBtn text={`Item ${it.number}: ${it.question}. Solution: ${it.solution}`} /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionNotepad() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState(() => { try { return localStorage.getItem('cw3_draft') || ''; } catch { return ''; } });
  const [notes, setNotes] = useState(() => DB.get('notes') || []);
  const [saved, setSaved] = useState('');

  const save = () => {
    if (!text.trim()) return;
    const t = title.trim() || 'Untitled Note';
    const n = [...notes];
    n.unshift({ id: Date.now(), title: t, text: text.trim(), date: new Date().toISOString() });
    if (n.length > 50) n.splice(50);
    DB.set('notes', n); setNotes(n); setTitle(''); setText(''); localStorage.removeItem('cw3_draft');
    setSaved('Note saved!'); setTimeout(() => setSaved(''), 2500);
  };

  const del = (id) => { const n = notes.filter(x => x.id !== id); DB.set('notes', n); setNotes(n); };
  const load = (note) => { setTitle(note.title); setText(note.text); window.scrollTo(0,0); };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Notepad</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Your personal study notes. Saved automatically on this device.</p>
      {saved && <Alert type="success">{saved}</Alert>}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Note title..." style={{ ...S.input, flex: 1, minWidth: 160 }} />
        <Btn onClick={save}>Save Note</Btn>
        <Btn variant="outline" onClick={() => { setText(''); setTitle(''); localStorage.removeItem('cw3_draft'); }}>Clear</Btn>
      </div>
      <textarea value={text} onChange={e => { setText(e.target.value); try { localStorage.setItem('cw3_draft', e.target.value); } catch {} }} placeholder="Write your study notes here..." style={{ ...S.input, minHeight: 280, resize: 'vertical', lineHeight: 1.7 }} />
      {notes.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 10 }}>Saved Notes</p>
          {notes.map(n => (
            <div key={n.id} style={{ ...S.card, marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontWeight: 600, fontSize: '.875rem' }}>{n.title}</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: '.72rem', color: 'var(--wd)' }}>{new Date(n.date).toLocaleDateString()}</span>
                  <button onClick={() => load(n)} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.75rem' }}>Load</button>
                  <button onClick={() => del(n.id)} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontSize: '.75rem' }}>Delete</button>
                </div>
              </div>
              <p style={{ color: 'var(--wd)', fontSize: '.82rem', whiteSpace: 'pre-wrap', maxHeight: 60, overflow: 'hidden' }}>{n.text.slice(0, 120)}{n.text.length > 120 ? '...' : ''}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionCommunity({ user }) {
  const [text, setText] = useState('');
  const [dept, setDept] = useState('');
  const [uni, setUni] = useState('');
  const [posts, setPosts] = useState(() => DB.get('posts') || []);

  const post = () => {
    if (!text.trim()) return;
    const p = [...posts];
    p.unshift({ id: Date.now(), author: user.name, dept, uni, text: text.trim(), time: new Date().toISOString() });
    if (p.length > 200) p.splice(200);
    DB.set('posts', p); setPosts(p); setText('');
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Student Community</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Connect with students across departments and universities in Nigeria.</p>
      <div style={S.card}>
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Share something</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Ask a question, share a resource, or start a discussion..." style={{ ...S.input, minHeight: 70, resize: 'vertical' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Department" value={dept} onChange={setDept} placeholder="e.g. Computer Science" />
          <Input label="University" value={uni} onChange={setUni} placeholder="e.g. UNILAG" />
        </div>
        <Btn onClick={post}>Post</Btn>
      </div>
      <div style={{ marginTop: 16 }}>
        {posts.length === 0
          ? <div style={{ textAlign: 'center', padding: 24, color: 'var(--wd)', fontSize: '.875rem' }}>No posts yet. Be the first!</div>
          : posts.map(p => (
            <div key={p.id} style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: 'var(--r)', padding: 14, marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue),var(--bb))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.8rem', flexShrink: 0 }}>{(p.author||'A')[0]}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.875rem' }}>{p.author}</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--wd)' }}>{[p.dept, p.uni].filter(Boolean).join(' · ') || 'CramWiz Student'} · {ago(p.time)}</div>
                </div>
              </div>
              <div style={{ fontSize: '.875rem', color: 'var(--wd)', lineHeight: 1.65 }}>{p.text}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

function SectionAmbassador({ user }) {
  const [ambs, setAmbs] = useState(() => DB.get('ambassadors') || {});
  const isAmb = !!ambs[user.email];
  const amb = ambs[user.email];
  const [customCode, setCustomCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAcct, setBankAcct] = useState('');
  const [bankAcctName, setBankAcctName] = useState('');
  const [joinErr, setJoinErr] = useState('');

  const join = () => {
    setJoinErr('');
    if (!customCode.trim()) { setJoinErr('Enter your preferred referral code name.'); return; }
    if (!bankName.trim() || !bankAcct.trim() || !bankAcctName.trim()) { setJoinErr('Fill in all bank account details — this is how you get paid.'); return; }
    const slug = customCode.trim().replace(/[^A-Z0-9]/gi, '').toUpperCase().slice(0, 12);
    if (slug.length < 3) { setJoinErr('Code must be at least 3 characters.'); return; }
    const existing = Object.values(ambs).find(a => a.code === slug);
    if (existing) { setJoinErr('That referral code is already taken. Choose another.'); return; }
    const a = { ...ambs, [user.email]: { code: slug, name: user.name, email: user.email, bankName, bankAcct, bankAcctName, referrals: 0, earned: 0, signups: [], joinedAt: new Date().toISOString() } };
    DB.set('ambassadors', a); setAmbs(a);
  };

  const refLink = typeof window !== 'undefined' ? `${window.location.origin}?ref=${amb?.code}` : '';

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Ambassador Program</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Spread the word about CramWiz and earn ₦1,000 for every student who signs up through your link.</p>
      {!isAmb ? (
        <div style={S.cardBlue}>
          <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: '1.1rem' }}>Become a CramWiz Ambassador</h3>
          <p style={{ color: 'var(--wd)', fontSize: '.875rem', lineHeight: 1.7, marginBottom: 16 }}>Share your unique referral link. Earn ₦1,000 for each student who successfully subscribes through it. No cap on earnings.</p>
          <ul style={{ paddingLeft: 16, color: 'var(--wd)', fontSize: '.875rem', lineHeight: 2, marginBottom: 20 }}>
            <li>Share your unique referral link</li>
            <li>Earn ₦1,000 for each successful sign-up</li>
            <li>Track your referrals and earnings</li>
            <li>No limit on how much you can earn</li>
          </ul>
          {joinErr && <Alert type="error">{joinErr}</Alert>}
          <Input label="Choose Your Referral Code Name" value={customCode} onChange={setCustomCode} placeholder="e.g. IBINABO or MILTECHX" hint="This becomes your unique referral link. Letters and numbers only, max 12 characters." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
            <Input label="Bank Name" value={bankName} onChange={setBankName} placeholder="e.g. Moniepoint" />
            <Input label="Account Number" value={bankAcct} onChange={setBankAcct} placeholder="10-digit number" />
          </div>
          <Input label="Account Name" value={bankAcctName} onChange={setBankAcctName} placeholder="Name on the account" hint="Commission (₦1,000 per referral) will be paid to this account." />
          <Btn size="lg" onClick={join}>Join as Ambassador — It's Free</Btn>
        </div>
      ) : (
        <div>
          <div style={S.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Ambassador Dashboard</div><div style={{ color: 'var(--wd)', fontSize: '.72rem', fontFamily: 'var(--fm)', marginTop: 4 }}>Code: {amb.code}</div></div>
              <Badge color="gold">Ambassador</Badge>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
              <div style={{ background: 'var(--b3)', borderRadius: 'var(--r)', padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Total Referrals</div>
                <div style={{ fontWeight: 800, fontSize: '1.8rem', color: 'var(--bb)' }}>{amb.referrals || 0}</div>
              </div>
              <div style={{ background: 'var(--b3)', borderRadius: 'var(--r)', padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Total Earned</div>
                <div style={{ fontWeight: 800, fontSize: '1.8rem', color: 'var(--green)' }}>₦{(amb.earned || 0).toLocaleString()}</div>
              </div>
            </div>
            <label style={S.label}>Your Referral Link</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="text" value={refLink} readOnly style={{ ...S.input, flex: 1, fontSize: '.78rem' }} />
              <Btn onClick={() => navigator.clipboard.writeText(refLink).then(() => alert('Link copied!'))}>Copy</Btn>
            </div>
            <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 6 }}>Share this link. Every student who signs up through it earns you ₦1,000.</p>
            {amb.bankName && (
              <div style={{ marginTop: 14, padding: '10px 14px', background: 'var(--b3)', borderRadius: 'var(--rs)', fontSize: '.78rem', color: 'var(--wd)' }}>
                <span style={{ fontWeight: 700, color: 'var(--white)' }}>Payout account: </span>{amb.bankAcctName} · {amb.bankAcct} · {amb.bankName}
              </div>
            )}
          </div>
          {amb.signups?.length > 0 && (
            <div style={{ ...S.card, marginTop: 14 }}>
              <p style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 12 }}>Recent Referrals</p>
              {amb.signups.slice(0, 10).map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--wf)' }}>
                  <span style={{ fontSize: '.875rem' }}>{s.name}</span>
                  <span style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>{new Date(s.date).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SectionProject() {
  const [dept, setDept] = useState('');
  const [course, setCourse] = useState('');
  const [focus, setFocus] = useState('');
  const [count, setCount] = useState('5');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const generate = async () => {
    if (!dept) { setError('Please enter your department.'); return; }
    setError(''); setLoading(true);
    try {
      const n = parseInt(count);
      // Generate in batches of 3 to avoid JSON truncation
      const batches = Math.ceil(n / 3);
      let all = [];
      for (let b = 0; b < batches; b++) {
        const batchSize = Math.min(3, n - all.length);
        const prompt = `You are CramWiz, AI final year project advisor for Nigerian university students.
Department: ${dept}
Programme: ${course || dept}
Area of Focus: ${focus || 'general'}
Generate exactly ${batchSize} final year project topics with full proposals. Start numbering from ${all.length + 1}.
IMPORTANT: Keep each field concise. Respond ONLY with valid JSON — no text before or after:
{"topics":[{"number":${all.length + 1},"title":"Full project title","problem":"1-2 sentences on the problem","objectives":["objective 1","objective 2","objective 3"],"methodology":"2-3 sentences","tools":"list of tools/technologies","novelty":"1 sentence on uniqueness","difficulty":"easy|medium|challenging"}]}
Make topics relevant to Nigerian context and current industry needs.`;
        const r = await aiCall(prompt, 6000);
        all = all.concat(r.topics || []);
      }
      setResults({ topics: all });
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  const dc = { easy: 'green', medium: 'blue', challenging: 'red' };
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Project Topic Generator</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Generate final year project topics and full proposals. No upload needed — just tell us your focus.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={S.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Your Department" value={dept} onChange={setDept} placeholder="e.g. Computer Science" />
          <Input label="Course / Programme" value={course} onChange={setCourse} placeholder="e.g. B.Sc Computer Science" />
        </div>
        <Input label="Area of Focus / Interest" value={focus} onChange={setFocus} placeholder="e.g. Machine Learning, Healthcare, Agriculture, FinTech..." />
        <Select label="Number of Topics" value={count} onChange={setCount} options={[{value:'5',label:'5 topics'},{value:'10',label:'10 topics'},{value:'15',label:'15 topics'}]} />
        <Btn onClick={generate} disabled={loading}>Generate Project Topics</Btn>
      </div>
      {loading && <Loader text="Generating project topics..." />}
      {results && !loading && (results.topics || []).map((t, i) => (
        <div key={i} style={{ ...S.card, marginTop: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', flex: 1, marginRight: 10 }}>{t.number}. {t.title}</div>
            <Badge color={dc[t.difficulty] || 'blue'}>{t.difficulty || 'medium'}</Badge>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }} className="grid-2">
            <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Problem Statement</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.problem}</p></div>
            <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Tools / Stack</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.tools}</p></div>
          </div>
          <div style={{ marginBottom: 12 }}><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Objectives</div><ul style={{ paddingLeft: 16 }}>{(t.objectives || []).map((o, oi) => <li key={oi} style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 4 }}>{o}</li>)}</ul></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
            <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Methodology</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.methodology}</p></div>
            <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>What Makes It Unique</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.novelty}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionAccount({ user }) {
  const [curPw, setCurPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [conPw, setConPw] = useState('');
  const [dept, setDept] = useState(user.dept || '');
  const [uni, setUni] = useState(user.uni || '');
  const [pwMsg, setPwMsg] = useState('');
  const [pwErr, setPwErr] = useState('');
  const [profMsg, setProfMsg] = useState('');

  const changePw = () => {
    setPwErr(''); setPwMsg('');
    const users = DB.get('users') || {};
    const u = users[user.email];
    if (!u || u.pw !== hash(curPw)) { setPwErr('Current password is incorrect.'); return; }
    if (newPw.length < 6) { setPwErr('New password must be at least 6 characters.'); return; }
    if (newPw !== conPw) { setPwErr('Passwords do not match.'); return; }
    u.pw = hash(newPw); DB.set('users', users);
    setPwMsg('Password updated!'); setCurPw(''); setNewPw(''); setConPw('');
    setTimeout(() => setPwMsg(''), 3000);
  };

  const updateProfile = () => {
    const users = DB.get('users') || {};
    if (!users[user.email]) return;
    users[user.email].dept = dept; users[user.email].uni = uni;
    DB.set('users', users);
    const u = DB.get('user') || {};
    u.dept = dept; u.uni = uni; DB.set('user', u);
    setProfMsg('Profile updated!'); setTimeout(() => setProfMsg(''), 3000);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>My Account</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Manage your profile and settings.</p>
      <div style={{ ...S.card, marginBottom: 16 }}>
        <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 14 }}>Profile</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="grid-2">
          <div><div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Name</div><div style={{ fontWeight: 700 }}>{user.name}</div></div>
          <div><div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Email</div><div style={{ fontSize: '.875rem' }}>{user.email}</div></div>
        </div>
        <Badge color={user.isFy ? 'gold' : 'blue'}>{user.isFy ? 'Final Year Student' : 'Student'}</Badge>
      </div>
      <div style={{ ...S.card, marginBottom: 16 }}>
        <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 14 }}>Update Profile</h4>
        {profMsg && <Alert type="success">{profMsg}</Alert>}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Department" value={dept} onChange={setDept} placeholder="Your department" />
          <Input label="University" value={uni} onChange={setUni} placeholder="Your university" />
        </div>
        <Btn variant="outline" onClick={updateProfile}>Save Changes</Btn>
      </div>
      <div style={S.card}>
        <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 14 }}>Change Password</h4>
        {pwErr && <Alert type="error">{pwErr}</Alert>}
        {pwMsg && <Alert type="success">{pwMsg}</Alert>}
        <Input label="Current Password" type="password" value={curPw} onChange={setCurPw} placeholder="Current password" />
        <Input label="New Password" type="password" value={newPw} onChange={setNewPw} placeholder="New password" />
        <Input label="Confirm New Password" type="password" value={conPw} onChange={setConPw} placeholder="Confirm new password" />
        <Btn onClick={changePw}>Update Password</Btn>
      </div>
    </div>
  );
}

function SectionFeedback({ user }) {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('general');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState('');

  const send = async () => {
    if (!message.trim()) { setErr('Please write your feedback.'); return; }
    if (rating === 0) { setErr('Please give a star rating.'); return; }
    setErr(''); setSending(true);
    try {
      const fd = new FormData();
      fd.append('name', user.name);
      fd.append('email', user.email);
      fd.append('rating', rating + ' / 5 stars');
      fd.append('category', category);
      fd.append('message', message);
      fd.append('_subject', `CramWiz Feedback from ${user.name} — ${rating}★`);
      fd.append('_replyto', user.email);
      await fetch('https://formspree.io/f/xpwzgdlr', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      // also store locally
      const fb = DB.get('feedback') || [];
      fb.push({ name: user.name, email: user.email, rating, category, message, date: new Date().toISOString() });
      DB.set('feedback', fb);
      setDone(true);
    } catch { setErr('Failed to send. Please try again.'); }
    setSending(false);
  };

  if (done) return (
    <div style={{ textAlign: 'center', padding: '48px 20px' }}>
      <div style={{ fontSize: '3rem', marginBottom: 12 }}>🙏</div>
      <h3 style={{ fontWeight: 800, marginBottom: 8 }}>Thank you, {user.name.split(' ')[0]}!</h3>
      <p style={{ color: 'var(--wd)', fontSize: '.875rem' }}>Your feedback has been sent to the CramWiz team. We read every single one.</p>
    </div>
  );

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Send Feedback</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Tell us what's working, what's not, or what you'd love to see next. Your feedback shapes CramWiz.</p>
      {err && <Alert type="error">{err}</Alert>}
      <div style={S.card}>
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Rate your experience</label>
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {[1,2,3,4,5].map(s => (
              <button key={s} onClick={() => setRating(s)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.8rem', opacity: s <= rating ? 1 : 0.3, transition: 'var(--tr)', padding: 0 }}>★</button>
            ))}
          </div>
        </div>
        <Select label="Category" value={category} onChange={setCategory} options={[
          { value: 'general', label: 'General Feedback' },
          { value: 'ai_quality', label: 'AI Answer Quality' },
          { value: 'accuracy', label: 'Accuracy Issue' },
          { value: 'feature', label: 'Feature Request' },
          { value: 'bug', label: 'Bug Report' },
          { value: 'payment', label: 'Payment Issue' },
        ]} />
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Your Message</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Be as detailed as you want. What did CramWiz do well? What frustrated you? What should we build next?" style={{ ...S.input, minHeight: 100, resize: 'vertical' }} />
        </div>
        <Btn onClick={send} disabled={sending}>{sending ? 'Sending...' : 'Send Feedback'}</Btn>
      </div>
    </div>
  );
}

function SectionAdmin() {
  const [count, setCount] = useState('50');
  const [genMsg, setGenMsg] = useState('');
  const [subs, setSubs] = useState(() => DB.get('subs') || []);
  const [codes, setCodes] = useState(() => DB.get('codes') || {});
  const [payMsg, setPayMsg] = useState('');

  const genCodes = () => {
    const n = parseInt(count || 50);
    if (isNaN(n) || n < 1 || n > 500) { setGenMsg('Enter 1–500.'); return; }
    const c = { ...codes };
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    for (let i = 0; i < n; i++) {
      let code; do { code = 'CW-'; for (let j = 0; j < 8; j++) code += chars[Math.floor(Math.random() * chars.length)]; } while (c[code]);
      c[code] = { used: false, createdAt: new Date().toISOString() };
    }
    DB.set('codes', c); setCodes(c); setGenMsg(n + ' codes generated!'); setTimeout(() => setGenMsg(''), 3000);
  };

  const confirmPay = (id) => {
    const s = [...subs]; const sub = s.find(x => x.id === id); if (!sub) return;
    const c = { ...codes };
    const free = Object.entries(c).find(([, v]) => !v.used && (!v.reservedFor || v.reservedFor === sub.email));
    if (!free) { setPayMsg('No free codes! Generate more first.'); return; }
    const [code] = free;
    c[code].reservedFor = sub.email; DB.set('codes', c); setCodes(c);
    sub.status = 'confirmed'; sub.codeAssigned = code; sub.confirmedAt = new Date().toISOString();
    DB.set('subs', s); setSubs([...s]);
    const subject = encodeURIComponent('Your CramWiz Access Code');
    const body = encodeURIComponent(`Hi ${sub.name},

Your payment has been confirmed. Welcome to CramWiz!

Your access code: ${code}

How to get started:
1. Go to the CramWiz website
2. Click "Log In" → Register
3. Use this exact email: ${sub.email}
4. Enter your access code (works only with this email)
5. Create your password and you're in!

See you inside!
— CramWiz Team`);
    window.open(`mailto:${sub.email}?subject=${subject}&body=${body}`);
    if (sub.phone) {
      const wpNum = sub.phone.replace(/\D/g,'').replace(/^0/,'234');
      const wpMsg = encodeURIComponent(`Hi ${sub.name}! 🎓

Your CramWiz payment is confirmed!

Your access code: *${code}*

Go to the website → Log In → Register
Use your email: ${sub.email}
Paste your code above.

Welcome aboard! 🚀`);
      setTimeout(() => window.open(`https://wa.me/${wpNum}?text=${wpMsg}`), 1200);
    }
    setPayMsg('Confirmed! Code assigned. Email + WhatsApp opened.'); setTimeout(() => setPayMsg(''), 4000);
  };

  const rejectPay = (id) => {
    if (!confirm('Reject this submission?')) return;
    const s = [...subs]; const sub = s.find(x => x.id === id);
    if (sub) { sub.status = 'rejected'; DB.set('subs', s); setSubs([...s]); }
  };

  const cEntries = Object.entries(codes);
  const used = cEntries.filter(([,v]) => v.used).length;
  const [adminTab, setAdminTab] = useState('payments');
  const [codeTab, setCodeTab] = useState('available');
  const [users, setUsers] = useState(() => DB.get('users') || {});

  const toggleUser = (email) => {
    const u = { ...users };
    if (!u[email]) return;
    u[email].disabled = !u[email].disabled;
    DB.set('users', u); setUsers({ ...u });
  };

  const availCodes = cEntries.filter(([,v]) => !v.used);
  const usedCodes = cEntries.filter(([,v]) => v.used);

  const tabBtn = (id, label) => (
    <button onClick={() => setAdminTab(id)} style={{ padding: '9px 16px', border: 'none', background: 'transparent', color: adminTab === id ? 'var(--bb)' : 'var(--wd)', fontFamily: 'var(--fn)', fontWeight: 600, fontSize: '.82rem', borderBottom: adminTab === id ? '2px solid var(--bb)' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap', marginBottom: -1 }}>{label}</button>
  );

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Admin Panel</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Manage codes, users, payments, and ambassadors.</p>

      {/* Stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 20 }} className="grid-2">
        {[['Total Codes', cEntries.length, 'blue'], ['Used', used, 'red'], ['Available', cEntries.length - used, 'green'], ['Pending Pays', subs.filter(s => s.status === 'pending').length, 'gold']].map(([l, v, c]) => (
          <div key={l} style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: 'var(--r)', padding: '12px 14px', textAlign: 'center' }}>
            <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>{l}</div>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: `var(--${c})` }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--wf)', marginBottom: 20, overflowX: 'auto' }}>
        {tabBtn('payments', `Payments (${subs.length})`)}
        {tabBtn('codes', 'Access Codes')}
        {tabBtn('users', `Users (${Object.keys(users).filter(e => e !== 'admin@cramwiz.com').length})`)}
      </div>

      {/* PAYMENTS TAB */}
      {adminTab === 'payments' && (
        <div>
          {payMsg && <Alert type="success">{payMsg}</Alert>}
          {subs.length === 0
            ? <p style={{ color: 'var(--wd)', fontSize: '.875rem' }}>No submissions yet.</p>
            : [...subs].reverse().map(s => (
              <div key={s.id} style={{ ...S.card, marginBottom: 12, borderColor: s.status==='confirmed'?'var(--green)':s.status==='rejected'?'var(--red)':'var(--bd)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{s.name}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)', marginTop: 3 }}>{s.email}{s.phone ? ' · ' + s.phone : ''}</div>
                    {s.dept && <div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 2 }}>{s.dept}{s.uni ? ' · ' + s.uni : ''}</div>}
                  </div>
                  <Badge color={s.status==='confirmed'?'green':s.status==='rejected'?'red':'blue'}>{s.status.toUpperCase()}</Badge>
                </div>
                <div style={{ fontSize: '.72rem', color: 'var(--wd)', marginBottom: 6 }}>{new Date(s.submittedAt).toLocaleString()}</div>
                {s.ref && <div style={{ fontSize: '.72rem', marginBottom: 4, padding: '5px 8px', background: 'rgba(245,166,35,.08)', borderRadius: 'var(--rs)', border: '1px solid rgba(245,166,35,.2)' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700 }}>Ref: {s.ref}</span>{s.ambName ? <span style={{ color: 'var(--wd)' }}> · Ambassador: <strong style={{ color: 'var(--white)' }}>{s.ambName}</strong></span> : ''}
                  {s.ambBank && <div style={{ marginTop: 3, color: 'var(--wd)' }}>Pay ₦1,000 to: <strong style={{ color: 'var(--white)' }}>{s.ambBank}</strong></div>}
                </div>}
                {s.receipt && <img src={s.receipt} onClick={() => window.open(s.receipt)} style={{ maxWidth: '100%', maxHeight: 160, borderRadius: 'var(--rs)', border: '1px solid var(--wf)', cursor: 'pointer', display: 'block', marginBottom: 10 }} alt="receipt" />}
                {s.status === 'pending' ? (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Btn onClick={() => confirmPay(s.id)}>Confirm & Send Code</Btn>
                    <Btn variant="danger" onClick={() => rejectPay(s.id)}>Reject</Btn>
                  </div>
                ) : s.status === 'confirmed' ? (
                  <p style={{ fontSize: '.72rem', color: 'var(--green)' }}>Code assigned: <span style={{ fontFamily: 'var(--fm)' }}>{s.codeAssigned || '—'}</span></p>
                ) : (
                  <p style={{ fontSize: '.72rem', color: 'var(--red)' }}>Rejected</p>
                )}
              </div>
            ))
          }
        </div>
      )}

      {/* CODES TAB */}
      {adminTab === 'codes' && (
        <div>
          <div style={{ ...S.card, marginBottom: 14 }}>
            <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 12 }}>Generate More Codes</h4>
            {genMsg && <Alert type="success">{genMsg}</Alert>}
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 140 }}><Input label="Count" type="number" value={count} onChange={setCount} placeholder="50" /></div>
              <Btn onClick={genCodes} style={{ marginBottom: 16 }}>Generate</Btn>
            </div>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--wf)', marginBottom: 14 }}>
            {[['available', `Available (${availCodes.length})`], ['used', `Used (${usedCodes.length})`]].map(([id, label]) => (
              <button key={id} onClick={() => setCodeTab(id)} style={{ padding: '8px 16px', border: 'none', background: 'transparent', color: codeTab === id ? 'var(--bb)' : 'var(--wd)', fontFamily: 'var(--fn)', fontWeight: 600, fontSize: '.82rem', borderBottom: codeTab === id ? '2px solid var(--bb)' : '2px solid transparent', cursor: 'pointer', marginBottom: -1 }}>{label}</button>
            ))}
          </div>
          <div style={{ maxHeight: 400, overflowY: 'auto' }}>
            {codeTab === 'available'
              ? availCodes.length === 0 ? <p style={{ color: 'var(--wd)', fontSize: '.875rem' }}>No available codes. Generate more.</p>
              : availCodes.map(([code]) => (
                <div key={code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', background: 'var(--b3)', borderRadius: 'var(--rs)', marginBottom: 6 }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: '.875rem', letterSpacing: 1 }}>{code}</span>
                  <Badge color="green">Available</Badge>
                </div>
              ))
              : usedCodes.length === 0 ? <p style={{ color: 'var(--wd)', fontSize: '.875rem' }}>No codes used yet.</p>
              : usedCodes.map(([code, v]) => (
                <div key={code} style={{ padding: '8px 10px', background: 'var(--b3)', borderRadius: 'var(--rs)', marginBottom: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: '.875rem', letterSpacing: 1 }}>{code}</span>
                    <Badge color="red">Used</Badge>
                  </div>
                  {v.usedBy && <div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 4 }}>Used by: {v.usedBy} · {v.usedAt ? new Date(v.usedAt).toLocaleDateString() : ''}</div>}
                </div>
              ))
            }
          </div>
        </div>
      )}

      {/* USERS TAB */}
      {adminTab === 'users' && (
        <div>
          {Object.entries(users).filter(([e]) => e !== 'admin@cramwiz.com').length === 0
            ? <p style={{ color: 'var(--wd)', fontSize: '.875rem' }}>No registered users yet.</p>
            : Object.entries(users).filter(([e]) => e !== 'admin@cramwiz.com').reverse().map(([email, u]) => (
              <div key={email} style={{ ...S.card, marginBottom: 10, opacity: u.disabled ? 0.55 : 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{u.name}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)', marginTop: 3 }}>{email}</div>
                    {(u.dept || u.uni) && <div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 2 }}>{[u.dept, u.uni].filter(Boolean).join(' · ')}</div>}
                    <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
                      {u.isFy && <Badge color="gold">Final Year</Badge>}
                      {u.disabled && <Badge color="red">Deactivated</Badge>}
                    </div>
                  </div>
                  <Btn variant={u.disabled ? 'outline' : 'danger'} onClick={() => toggleUser(email)}>
                    {u.disabled ? 'Activate' : 'Deactivate'}
                  </Btn>
                </div>
              </div>
            ))
          }
        </div>
      )}

      {/* Admin login reminder */}
      <div style={{ ...S.card, marginTop: 20 }}>
        <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 12 }}>Admin Login</h4>
        <p style={{ fontSize: '.875rem', color: 'var(--wd)' }}>Email: <span style={{ fontFamily: 'var(--fm)', color: 'var(--bb)' }}>admin@cramwiz.com</span></p>
        <p style={{ fontSize: '.875rem', color: 'var(--wd)', marginTop: 8 }}>Default Password: <span style={{ fontFamily: 'var(--fm)', color: 'var(--bb)' }}>admin2024</span></p>
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function CramWiz() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Seed codes if not done
    const seeded = DB.get('seeded');
    if (!seeded) {
      const existing = DB.get('codes') || {};
      DB.set('codes', { ...SEED_CODES, ...existing });
      DB.set('seeded', true);
    }
    // Create admin user if not exists
    const users = DB.get('users') || {};
    if (!users['admin@cramwiz.com']) {
      users['admin@cramwiz.com'] = { name: 'Admin', pw: hash('admin2024'), isAdmin: true, isFy: false, dept: '', uni: '' };
      DB.set('users', users);
    }
    // Check referral
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) sessionStorage.setItem('cwref', ref);
    // Restore session
    const u = DB.get('user');
    if (u) { setUser(u); setPage('dashboard'); }
    setReady(true);
  }, []);

  // Load PDF.js
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.pdfjsLib) return;
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    };
    document.head.appendChild(script);
  }, []);

  const navigate = useCallback((p) => { setPage(p); window.scrollTo(0, 0); }, []);
  const login = useCallback((u) => { setUser(u); setPage('dashboard'); }, []);
  const logout = useCallback(() => { DB.del('user'); setUser(null); setPage('landing'); }, []);

  if (!ready) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--black)' }}>
      <div style={{ textAlign: 'center' }}>
        <img src="/logo.png" alt="CramWiz" style={{ height: 60, marginBottom: 20 }} />
        <div style={{ width: 36, height: 36, border: '3px solid var(--b4)', borderTopColor: 'var(--bb)', borderRadius: '50%', animation: 'spin .75s linear infinite', margin: '0 auto' }} />
      </div>
    </div>
  );

  return (
    <>
      <Head><title>CramWiz — The AI Study Platform</title></Head>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,80%,100%{transform:scale(0);opacity:.4} 40%{transform:scale(1);opacity:1} }
        @media(max-width:900px){
          .dashboard-grid { grid-template-columns: 1fr !important; }
          .sidebar { display: none !important; }
          .main-content { padding: 20px 16px !important; padding-bottom: 90px !important; }
          .mobile-nav { display: block !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
        }
        @media(max-width:600px){
          .hero-title { font-size: 2rem !important; letter-spacing: -1px !important; }
        }
        a { color: var(--bb); }
        select option { background: var(--b3); color: var(--white); }
      `}</style>
      {page === 'landing' && <Landing onNavigate={navigate} />}
      {page === 'about' && <About onNavigate={navigate} />}
      {page === 'subscribe' && <Subscribe onNavigate={navigate} />}
      {page === 'submitted' && <Submitted onNavigate={navigate} />}
      {page === 'login' && <Login onNavigate={navigate} onLogin={login} />}
      {page === 'forgot' && <Forgot onNavigate={navigate} />}
      {page === 'register' && <Register onNavigate={navigate} onLogin={login} />}
      {page === 'dashboard' && user && <Dashboard user={user} onLogout={logout} onNavigate={navigate} />}
      {page === 'dashboard' && !user && (() => { navigate('login'); return null; })()}
    </>
  );
}
