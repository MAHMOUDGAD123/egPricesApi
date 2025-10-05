// urls & dom data
export const data_map = new Map<Types.PricesKey, (string | string[][])[][]>([
  [
    "gold",
    [
      // gold karats
      [
        "https://egcurrency.com/en/gold/EGP/stores",
        [
          [
            "goldO_egp_b",
            'tr[data-href="/en/gold/xau-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "goldO_egp_s",
            'tr[data-href="/en/gold/xau-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "goldP_egp_b",
            'tr[data-href="/en/gold/coin-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "goldP_egp_s",
            'tr[data-href="/en/gold/coin-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "gold24_egp_b",
            'tr[data-href="/en/gold/24k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "gold24_egp_s",
            'tr[data-href="/en/gold/24k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "gold22_egp_b",
            'tr[data-href="/en/gold/22k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "gold22_egp_s",
            'tr[data-href="/en/gold/22k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "gold21_egp_b",
            'tr[data-href="/en/gold/21k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "gold21_egp_s",
            'tr[data-href="/en/gold/21k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "gold18_egp_b",
            'tr[data-href="/en/gold/18k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "gold18_egp_s",
            'tr[data-href="/en/gold/18k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "gold14_egp_b",
            'tr[data-href="/en/gold/14k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "gold14_egp_s",
            'tr[data-href="/en/gold/14k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "gold12_egp_b",
            'tr[data-href="/en/gold/12k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "gold12_egp_s",
            'tr[data-href="/en/gold/12k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "gold9_egp_b",
            'tr[data-href="/en/gold/9k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "gold9_egp_s",
            'tr[data-href="/en/gold/9k-in-EGP/stores"]>td:nth-child(3)',
          ],
          // ["goldO_usd", 'a[href="/en/gold/gold-ounce-in-usd"]>b'],
          // ["goldO_eur", 'a[href="/en/gold/gold-ounce-in-eur"]>b'],
        ],
      ],
      // sagha usd
      [
        "https://egcurrency.com/en/currency/USD-to-EGP/gold",
        [
          [
            "sagha_usd_b",
            "div:has(img[data-src='/theme/img/flags/4x3/us.svg'])+div>b",
          ],
          [
            "sagha_usd_s",
            "div:has(img[data-src='/theme/img/flags/4x3/us.svg'])+div>p>b",
          ],
        ],
      ],
    ],
  ],
  [
    "silver",
    [
      [
        "https://egcurrency.com/en/silver/EGP/stores",
        [
          [
            "sil999_egp_b",
            'tr[data-href="/en/silver/999k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "sil999_egp_s",
            'tr[data-href="/en/silver/999k-in-EGP/stores"]>td:nth-child(3)',
          ],
          // [
          //   "sil960_egp_b",
          //   'tr[data-href="/en/silver/silver-960-in-egp"]>td:nth-child(2)',
          // ],
          // [
          //   "sil960_egp_s",
          //   'tr[data-href="/en/silver/silver-960-in-egp"]>td:nth-child(3)',
          // ],
          [
            "sil958_egp_b",
            'tr[data-href="/en/silver/958k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "sil958_egp_s",
            'tr[data-href="/en/silver/958k-in-EGP/stores"]>td:nth-child(3)',
          ],
          // [
          //   "sil950_egp_b",
          //   'tr[data-href="/en/silver/silver-950-in-egp"]>td:nth-child(2)',
          // ],
          // [
          //   "sil950_egp_s",
          //   'tr[data-href="/en/silver/silver-950-in-egp"]>td:nth-child(3)',
          // ],
          // [
          //   "sil947_egp_b",
          //   'tr[data-href="/en/silver/silver-947-in-egp"]>td:nth-child(2)',
          // ],
          // [
          //   "sil947_egp_s",
          //   'tr[data-href="/en/silver/silver-947-in-egp"]>td:nth-child(3)',
          // ],
          [
            "sil925_egp_b",
            'tr[data-href="/en/silver/925k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "sil925_egp_s",
            'tr[data-href="/en/silver/925k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "sil900_egp_b",
            'tr[data-href="/en/silver/900k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "sil900_egp_s",
            'tr[data-href="/en/silver/900k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "sil835_egp_b",
            'tr[data-href="/en/silver/835k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "sil835_egp_s",
            'tr[data-href="/en/silver/835k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "sil800_egp_b",
            'tr[data-href="/en/silver/800k-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "sil800_egp_s",
            'tr[data-href="/en/silver/800k-in-EGP/stores"]>td:nth-child(3)',
          ],
          [
            "silOZ_egp_b",
            'tr[data-href="/en/silver/xag-in-EGP/stores"]>td:nth-child(2)',
          ],
          [
            "silOZ_egp_s",
            'tr[data-href="/en/silver/xag-in-EGP/stores"]>td:nth-child(3)',
          ],
        ],
      ],
    ],
  ],
  [
    "prices",
    [
      // bank
      [
        "https://egcurrency.com/en/currency/EGP/bank",
        [
          [
            "usd_egp_b",
            'tr[data-href="/en/currency/USD-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "usd_egp_s",
            'tr[data-href="/en/currency/USD-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "eur_egp_b",
            'tr[data-href="/en/currency/EUR-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "eur_egp_s",
            'tr[data-href="/en/currency/EUR-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "sar_egp_b",
            'tr[data-href="/en/currency/SAR-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "sar_egp_s",
            'tr[data-href="/en/currency/SAR-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "aed_egp_b",
            'tr[data-href="/en/currency/AED-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "aed_egp_s",
            'tr[data-href="/en/currency/AED-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "qar_egp_b",
            'tr[data-href="/en/currency/QAR-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "qar_egp_s",
            'tr[data-href="/en/currency/QAR-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "kwd_egp_b",
            'tr[data-href="/en/currency/KWD-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "kwd_egp_s",
            'tr[data-href="/en/currency/KWD-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "jod_egp_b",
            'tr[data-href="/en/currency/JOD-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "jod_egp_s",
            'tr[data-href="/en/currency/JOD-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "omr_egp_b",
            'tr[data-href="/en/currency/OMR-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "omr_egp_s",
            'tr[data-href="/en/currency/OMR-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "bhd_egp_b",
            'tr[data-href="/en/currency/BHD-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "bhd_egp_s",
            'tr[data-href="/en/currency/BHD-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "cny_egp_b",
            'tr[data-href="/en/currency/CNY-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "cny_egp_s",
            'tr[data-href="/en/currency/CNY-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "cad_egp_b",
            'tr[data-href="/en/currency/CAD-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "cad_egp_s",
            'tr[data-href="/en/currency/CAD-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "gbp_egp_b",
            'tr[data-href="/en/currency/GBP-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "gbp_egp_s",
            'tr[data-href="/en/currency/GBP-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "aud_egp_b",
            'tr[data-href="/en/currency/AUD-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "aud_egp_s",
            'tr[data-href="/en/currency/AUD-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "jpy_egp_b",
            'tr[data-href="/en/currency/JPY-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "jpy_egp_s",
            'tr[data-href="/en/currency/JPY-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "chf_egp_b",
            'tr[data-href="/en/currency/CHF-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "chf_egp_s",
            'tr[data-href="/en/currency/CHF-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "sek_egp_b",
            'tr[data-href="/en/currency/SEK-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "sek_egp_s",
            'tr[data-href="/en/currency/SEK-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "nok_egp_b",
            'tr[data-href="/en/currency/NOK-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "nok_egp_s",
            'tr[data-href="/en/currency/NOK-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "dkk_egp_b",
            'tr[data-href="/en/currency/DKK-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "dkk_egp_s",
            'tr[data-href="/en/currency/DKK-to-EGP/bank"]>td:nth-child(3)',
          ],
          [
            "lyd_egp_b",
            'tr[data-href="/en/currency/LYD-to-EGP/bank"]>td:nth-child(2)',
          ],
          [
            "lyd_egp_s",
            'tr[data-href="/en/currency/LYD-to-EGP/bank"]>td:nth-child(3)',
          ],
        ],
      ],
      // black market
      [
        "https://egcurrency.com/en/currency/EGP/blackMarket",
        [
          [
            "usd_egp_bm_b",
            'tr[data-href="/en/currency/USD-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "usd_egp_bm_s",
            'tr[data-href="/en/currency/USD-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          [
            "eur_egp_bm_b",
            'tr[data-href="/en/currency/EUR-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "eur_egp_bm_s",
            'tr[data-href="/en/currency/EUR-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          [
            "sar_egp_bm_b",
            'tr[data-href="/en/currency/SAR-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "sar_egp_bm_s",
            'tr[data-href="/en/currency/SAR-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          [
            "aed_egp_bm_b",
            'tr[data-href="/en/currency/AED-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "aed_egp_bm_s",
            'tr[data-href="/en/currency/AED-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          // [
          //   "qar_egp_bm_b",
          //   'tr[data-href="/en/currency/qar-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "qar_egp_bm_s",
          //   'tr[data-href="/en/currency/qar-to-egp/exchange"]>td:nth-child(3)',
          // ],
          [
            "kwd_egp_bm_b",
            'tr[data-href="/en/currency/KWD-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "kwd_egp_bm_s",
            'tr[data-href="/en/currency/KWD-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          // [
          //   "jod_egp_bm_b",
          //   'tr[data-href="/en/currency/jod-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "jod_egp_bm_s",
          //   'tr[data-href="/en/currency/jod-to-egp/exchange"]>td:nth-child(3)',
          // ],
          [
            "omr_egp_bm_b",
            'tr[data-href="/en/currency/OMR-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "omr_egp_bm_s",
            'tr[data-href="/en/currency/OMR-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          // [
          //   "bhd_egp_bm_b",
          //   'tr[data-href="/en/currency/bhd-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "bhd_egp_bm_s",
          //   'tr[data-href="/en/currency/bhd-to-egp/exchange"]>td:nth-child(3)',
          // ],
          [
            "cny_egp_bm_b",
            'tr[data-href="/en/currency/CNY-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "cny_egp_bm_s",
            'tr[data-href="/en/currency/CNY-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          // [
          //   "cad_egp_bm_b",
          //   'tr[data-href="/en/currency/cad-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "cad_egp_bm_s",
          //   'tr[data-href="/en/currency/cad-to-egp/exchange"]>td:nth-child(3)',
          // ],
          [
            "gbp_egp_bm_b",
            'tr[data-href="/en/currency/GBP-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "gbp_egp_bm_s",
            'tr[data-href="/en/currency/GBP-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          [
            "aud_egp_bm_b",
            'tr[data-href="/en/currency/AUD-to-EGP/blackMarket"]>td:nth-child(2)',
          ],
          [
            "aud_egp_bm_s",
            'tr[data-href="/en/currency/AUD-to-EGP/blackMarket"]>td:nth-child(3)',
          ],
          // [
          //   "jpy_egp_bm_b",
          //   'tr[data-href="/en/currency/jpy-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "jpy_egp_bm_s",
          //   'tr[data-href="/en/currency/jpy-to-egp/exchange"]>td:nth-child(3)',
          // ],
          // [
          //   "chf_egp_bm_b",
          //   'tr[data-href="/en/currency/chf-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "chf_egp_bm_s",
          //   'tr[data-href="/en/currency/chf-to-egp/exchange"]>td:nth-child(3)',
          // ],
          // [
          //   "sek_egp_bm_b",
          //   'tr[data-href="/en/currency/sek-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "sek_egp_bm_s",
          //   'tr[data-href="/en/currency/sek-to-egp/exchange"]>td:nth-child(3)',
          // ],
          // [
          //   "nok_egp_bm_b",
          //   'tr[data-href="/en/currency/nok-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "nok_egp_bm_s",
          //   'tr[data-href="/en/currency/nok-to-egp/exchange"]>td:nth-child(3)',
          // ],
          // [
          //   "dkk_egp_bm_b",
          //   'tr[data-href="/en/currency/dkk-to-egp/exchange"]>td:nth-child(2)',
          // ],
          // [
          //   "dkk_egp_bm_s",
          //   'tr[data-href="/en/currency/dkk-to-egp/exchange"]>td:nth-child(3)',
          // ],
        ],
      ],
      // gasoline
      [
        "https://banklive.net/en/petroleum-price",
        [
          [
            "gasoline80",
            ".banklive-table.petrol > tbody > tr:nth-child(1) > td:nth-child(2)",
          ],
          [
            "gasoline92",
            ".banklive-table.petrol > tbody > tr:nth-child(2) > td:nth-child(2)",
          ],
          [
            "gasoline95",
            ".banklive-table.petrol > tbody > tr:nth-child(3) > td:nth-child(2)",
          ],
          [
            "kerosene",
            ".banklive-table.petrol > tbody > tr:nth-child(4) > td:nth-child(2)",
          ],
          [
            "solar",
            ".banklive-table.petrol > tbody > tr:nth-child(5) > td:nth-child(2)",
          ],
          [
            "gas_cyl",
            ".banklive-table.petrol > tbody > tr:nth-child(6) > td:nth-child(2)",
          ],
        ],
      ],
      // usdt
      [
        "https://www.google.com/finance/quote/USDT-EGP",
        [["usdt_egp", 'div[class^="YMlKec fxKbKc"]']],
      ],
    ],
  ],
  [
    "live",
    [
      // XAU-USD
      [
        // "https://www.investing.com/currencies/xau-usd",
        "https://twelvedata.com/markets/300755/commodity/xau-usd",
        [
          [
            "xau_usd",
            // 'div[data-test="instrument-header-details"] div[data-test="instrument-price-last"]',
            ".stats-symbol-price>span:nth-child(1)",
          ],
          [
            "xau_usd_delta",
            // 'div[data-test="instrument-header-details"] [data-test="instrument-price-change"]',
            ".stats-symbol-price-diff>:first-child", // stats-symbol-price-diff--down
          ],
          [
            "xau_usd_delta_pt",
            // 'div[data-test="instrument-header-details"] [data-test="instrument-price-change-percent"]',
            ".stats-symbol-price-diff>:last-child", // stats-symbol-price-diff--down
          ],
        ],
      ],
      // USD_EGP
      [
        // "https://www.investing.com/currencies/usd-egp",
        "https://twelvedata.com/markets/838667/forex/usd-egp",
        [
          [
            "usd_egp",
            // 'div[data-test="instrument-header-details"] div[data-test="instrument-price-last"]',
            ".stats-symbol-price>span:nth-child(1)",
          ],
          [
            "usd_egp_delta",
            // 'div[data-test="instrument-header-details"] [data-test="instrument-price-change"]',
            ".stats-symbol-price-diff>:first-child", // stats-symbol-price-diff--down
          ],
          [
            "usd_egp_delta_pt",
            // 'div[data-test="instrument-header-details"] [data-test="instrument-price-change-percent"]',
            ".stats-symbol-price-diff>:last-child", // stats-symbol-price-diff--down
          ],
        ],
      ],
    ],
  ],
]);
