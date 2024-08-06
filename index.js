const cheerio = require("cheerio");
const app = require("express")();
const cors = require("cors");
const port = process.env.PORT || 3000;

const gold_map = [
   // gold
  [
    "https://egcurrency.com/en/gold/egp",
    [
      [
        "goldO_egp_b",
        'tr[data-href="/en/gold/gold-ounce-in-egp"]>td:nth-child(2)',
      ],
      [
        "goldO_egp_s",
        'tr[data-href="/en/gold/gold-ounce-in-egp"]>td:nth-child(3)',
      ],
      [
        "goldP_egp_b",
        'tr[data-href="/en/gold/gold-coin-in-egp"]>td:nth-child(2)',
      ],
      [
        "goldP_egp_s",
        'tr[data-href="/en/gold/gold-coin-in-egp"]>td:nth-child(3)',
      ],
      [
        "gold24_egp_b",
        'tr[data-href="/en/gold/24-karat-in-egp"]>td:nth-child(2)',
      ],
      [
        "gold24_egp_s",
        'tr[data-href="/en/gold/24-karat-in-egp"]>td:nth-child(3)',
      ],
      [
        "gold22_egp_b",
        'tr[data-href="/en/gold/22-karat-in-egp"]>td:nth-child(2)',
      ],
      [
        "gold22_egp_s",
        'tr[data-href="/en/gold/22-karat-in-egp"]>td:nth-child(3)',
      ],
      [
        "gold21_egp_b",
        'tr[data-href="/en/gold/21-karat-in-egp"]>td:nth-child(2)',
      ],
      [
        "gold21_egp_s",
        'tr[data-href="/en/gold/21-karat-in-egp"]>td:nth-child(3)',
      ],
      [
        "gold18_egp_b",
        'tr[data-href="/en/gold/18-karat-in-egp"]>td:nth-child(2)',
      ],
      [
        "gold18_egp_s",
        'tr[data-href="/en/gold/18-karat-in-egp"]>td:nth-child(3)',
      ],
      [
        "gold14_egp_b",
        'tr[data-href="/en/gold/14-karat-in-egp"]>td:nth-child(2)',
      ],
      [
        "gold14_egp_s",
        'tr[data-href="/en/gold/14-karat-in-egp"]>td:nth-child(3)',
      ],
      [
        "gold12_egp_b",
        'tr[data-href="/en/gold/12-karat-in-egp"]>td:nth-child(2)',
      ],
      [
        "gold12_egp_s",
        'tr[data-href="/en/gold/12-karat-in-egp"]>td:nth-child(3)',
      ],
      [
        "gold9_egp_b",
        'tr[data-href="/en/gold/9-karat-in-egp"]>td:nth-child(2)',
      ],
      [
        "gold9_egp_s",
        'tr[data-href="/en/gold/9-karat-in-egp"]>td:nth-child(3)',
      ],
      ["goldO_usd", 'a[href="/en/gold/gold-ounce-in-usd"]>b'],
      ["goldO_eur", 'a[href="/en/gold/gold-ounce-in-eur"]>b'],
    ],
  ],
];

const silver_map = [
  // silver
  [
    "https://egcurrency.com/en/silver/egp",
    [
      [
        "sil999_egp_b",
        'tr[data-href="/en/silver/silver-999-in-egp"]>td:nth-child(2)',
      ],
      [
        "sil999_egp_s",
        'tr[data-href="/en/silver/silver-999-in-egp"]>td:nth-child(3)',
      ],
      [
        "sil960_egp_b",
        'tr[data-href="/en/silver/silver-960-in-egp"]>td:nth-child(2)',
      ],
      [
        "sil960_egp_s",
        'tr[data-href="/en/silver/silver-960-in-egp"]>td:nth-child(3)',
      ],
      [
        "sil958_egp_b",
        'tr[data-href="/en/silver/silver-958-in-egp"]>td:nth-child(2)',
      ],
      [
        "sil958_egp_s",
        'tr[data-href="/en/silver/silver-958-in-egp"]>td:nth-child(3)',
      ],
      [
        "sil950_egp_b",
        'tr[data-href="/en/silver/silver-950-in-egp"]>td:nth-child(2)',
      ],
      [
        "sil950_egp_s",
        'tr[data-href="/en/silver/silver-950-in-egp"]>td:nth-child(3)',
      ],
      [
        "sil947_egp_b",
        'tr[data-href="/en/silver/silver-947-in-egp"]>td:nth-child(2)',
      ],
      [
        "sil947_egp_s",
        'tr[data-href="/en/silver/silver-947-in-egp"]>td:nth-child(3)',
      ],
      [
        "sil925_egp_b",
        'tr[data-href="/en/silver/silver-925-in-egp"]>td:nth-child(2)',
      ],
      [
        "sil925_egp_s",
        'tr[data-href="/en/silver/silver-925-in-egp"]>td:nth-child(3)',
      ],
      [
        "sil800_egp_b",
        'tr[data-href="/en/silver/silver-800-in-egp"]>td:nth-child(2)',
      ],
      [
        "sil800_egp_s",
        'tr[data-href="/en/silver/silver-800-in-egp"]>td:nth-child(3)',
      ],
      [
        "silOZ_egp_b",
        'tr[data-href="/en/silver/silver-ounce-in-egp"]>td:nth-child(2)',
      ],
      [
        "silOZ_egp_s",
        'tr[data-href="/en/silver/silver-ounce-in-egp"]>td:nth-child(3)',
      ],
    ],
  ],
];

const map = [
  // sagha usd
  [
    "https://egcurrency.com/en/currency/egp/gold",
    [
      [
        "sagha_usd_b",
        'tr[data-href="/en/currency/usd-to-egp/gold"]>td:nth-child(2)',
      ],
      [
        "sagha_usd_s",
        'tr[data-href="/en/currency/usd-to-egp/gold"]>td:nth-child(3)',
      ],
    ],
  ],
  // bank
  [
    "https://egcurrency.com/en/currency/egp/cbe",
    [
      ["usd_egp_b", 'tr[data-href="/en/currency/usd-to-egp"]>td:nth-child(2)'],
      ["usd_egp_s", 'tr[data-href="/en/currency/usd-to-egp"]>td:nth-child(3)'],
      ["eur_egp_b", 'tr[data-href="/en/currency/eur-to-egp"]>td:nth-child(2)'],
      ["eur_egp_s", 'tr[data-href="/en/currency/eur-to-egp"]>td:nth-child(3)'],
      ["sar_egp_b", 'tr[data-href="/en/currency/sar-to-egp"]>td:nth-child(2)'],
      ["sar_egp_s", 'tr[data-href="/en/currency/sar-to-egp"]>td:nth-child(3)'],
      ["aed_egp_b", 'tr[data-href="/en/currency/aed-to-egp"]>td:nth-child(2)'],
      ["aed_egp_s", 'tr[data-href="/en/currency/aed-to-egp"]>td:nth-child(3)'],
      ["qar_egp_b", 'tr[data-href="/en/currency/qar-to-egp"]>td:nth-child(2)'],
      ["qar_egp_s", 'tr[data-href="/en/currency/qar-to-egp"]>td:nth-child(3)'],
      ["kwd_egp_b", 'tr[data-href="/en/currency/kwd-to-egp"]>td:nth-child(2)'],
      ["kwd_egp_s", 'tr[data-href="/en/currency/kwd-to-egp"]>td:nth-child(3)'],
      ["jod_egp_b", 'tr[data-href="/en/currency/jod-to-egp"]>td:nth-child(2)'],
      ["jod_egp_s", 'tr[data-href="/en/currency/jod-to-egp"]>td:nth-child(3)'],
      ["omr_egp_b", 'tr[data-href="/en/currency/omr-to-egp"]>td:nth-child(2)'],
      ["omr_egp_s", 'tr[data-href="/en/currency/omr-to-egp"]>td:nth-child(3)'],
      ["bhd_egp_b", 'tr[data-href="/en/currency/bhd-to-egp"]>td:nth-child(2)'],
      ["bhd_egp_s", 'tr[data-href="/en/currency/bhd-to-egp"]>td:nth-child(3)'],
      ["cny_egp_b", 'tr[data-href="/en/currency/cny-to-egp"]>td:nth-child(2)'],
      ["cny_egp_s", 'tr[data-href="/en/currency/cny-to-egp"]>td:nth-child(3)'],
      ["cad_egp_b", 'tr[data-href="/en/currency/cad-to-egp"]>td:nth-child(2)'],
      ["cad_egp_s", 'tr[data-href="/en/currency/cad-to-egp"]>td:nth-child(3)'],
      ["gbp_egp_b", 'tr[data-href="/en/currency/gbp-to-egp"]>td:nth-child(2)'],
      ["gbp_egp_s", 'tr[data-href="/en/currency/gbp-to-egp"]>td:nth-child(3)'],
      ["aud_egp_b", 'tr[data-href="/en/currency/aud-to-egp"]>td:nth-child(2)'],
      ["aud_egp_s", 'tr[data-href="/en/currency/aud-to-egp"]>td:nth-child(3)'],
      ["jpy_egp_b", 'tr[data-href="/en/currency/jpy-to-egp"]>td:nth-child(2)'],
      ["jpy_egp_s", 'tr[data-href="/en/currency/jpy-to-egp"]>td:nth-child(3)'],
      ["chf_egp_b", 'tr[data-href="/en/currency/chf-to-egp"]>td:nth-child(2)'],
      ["chf_egp_s", 'tr[data-href="/en/currency/chf-to-egp"]>td:nth-child(3)'],
      ["sek_egp_b", 'tr[data-href="/en/currency/sek-to-egp"]>td:nth-child(2)'],
      ["sek_egp_s", 'tr[data-href="/en/currency/sek-to-egp"]>td:nth-child(3)'],
      ["nok_egp_b", 'tr[data-href="/en/currency/nok-to-egp"]>td:nth-child(2)'],
      ["nok_egp_s", 'tr[data-href="/en/currency/nok-to-egp"]>td:nth-child(3)'],
      ["dkk_egp_b", 'tr[data-href="/en/currency/dkk-to-egp"]>td:nth-child(2)'],
      ["dkk_egp_s", 'tr[data-href="/en/currency/dkk-to-egp"]>td:nth-child(3)'],
    ],
  ],
  // black market
  [
    "https://egcurrency.com/en/currency/egp/exchange",
    [
      [
        "usd_egp_bm_b",
        'tr[data-href="/en/currency/usd-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "usd_egp_bm_s",
        'tr[data-href="/en/currency/usd-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "eur_egp_bm_b",
        'tr[data-href="/en/currency/eur-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "eur_egp_bm_s",
        'tr[data-href="/en/currency/eur-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "sar_egp_bm_b",
        'tr[data-href="/en/currency/sar-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "sar_egp_bm_s",
        'tr[data-href="/en/currency/sar-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "aed_egp_bm_b",
        'tr[data-href="/en/currency/aed-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "aed_egp_bm_s",
        'tr[data-href="/en/currency/aed-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "qar_egp_bm_b",
        'tr[data-href="/en/currency/qar-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "qar_egp_bm_s",
        'tr[data-href="/en/currency/qar-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "kwd_egp_bm_b",
        'tr[data-href="/en/currency/kwd-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "kwd_egp_bm_s",
        'tr[data-href="/en/currency/kwd-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "jod_egp_bm_b",
        'tr[data-href="/en/currency/jod-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "jod_egp_bm_s",
        'tr[data-href="/en/currency/jod-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "omr_egp_bm_b",
        'tr[data-href="/en/currency/omr-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "omr_egp_bm_s",
        'tr[data-href="/en/currency/omr-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "bhd_egp_bm_b",
        'tr[data-href="/en/currency/bhd-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "bhd_egp_bm_s",
        'tr[data-href="/en/currency/bhd-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "cny_egp_bm_b",
        'tr[data-href="/en/currency/cny-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "cny_egp_bm_s",
        'tr[data-href="/en/currency/cny-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "cad_egp_bm_b",
        'tr[data-href="/en/currency/cad-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "cad_egp_bm_s",
        'tr[data-href="/en/currency/cad-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "gbp_egp_bm_b",
        'tr[data-href="/en/currency/gbp-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "gbp_egp_bm_s",
        'tr[data-href="/en/currency/gbp-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "aud_egp_bm_b",
        'tr[data-href="/en/currency/aud-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "aud_egp_bm_s",
        'tr[data-href="/en/currency/aud-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "jpy_egp_bm_b",
        'tr[data-href="/en/currency/jpy-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "jpy_egp_bm_s",
        'tr[data-href="/en/currency/jpy-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "chf_egp_bm_b",
        'tr[data-href="/en/currency/chf-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "chf_egp_bm_s",
        'tr[data-href="/en/currency/chf-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "sek_egp_bm_b",
        'tr[data-href="/en/currency/sek-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "sek_egp_bm_s",
        'tr[data-href="/en/currency/sek-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "nok_egp_bm_b",
        'tr[data-href="/en/currency/nok-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "nok_egp_bm_s",
        'tr[data-href="/en/currency/nok-to-egp/exchange"]>td:nth-child(3)',
      ],
      [
        "dkk_egp_bm_b",
        'tr[data-href="/en/currency/dkk-to-egp/exchange"]>td:nth-child(2)',
      ],
      [
        "dkk_egp_bm_s",
        'tr[data-href="/en/currency/dkk-to-egp/exchange"]>td:nth-child(3)',
      ],
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
];

const live = [
  // XAU-USD
  [
    "https://www.investing.com/currencies/xau-usd",
    [
      [
        "xau_usd",
        'div[data-test="instrument-header-details"] div[data-test="instrument-price-last"]',
      ],
      [
        "xau_usd_delta",
        'div[data-test="instrument-header-details"] [data-test="instrument-price-change"]',
      ],
      [
        "xau_usd_delta_pt",
        'div[data-test="instrument-header-details"] [data-test="instrument-price-change-percent"]',
      ],
    ],
  ],
  // USD_EGP
  [
    "https://www.investing.com/currencies/usd-egp",
    [
      [
        "usd_egp",
        'div[data-test="instrument-header-details"] div[data-test="instrument-price-last"]',
      ],
      [
        "usd_egp_delta",
        'div[data-test="instrument-header-details"] [data-test="instrument-price-change"]',
      ],
      [
        "usd_egp_delta_pt",
        'div[data-test="instrument-header-details"] [data-test="instrument-price-change-percent"]',
      ],
    ],
  ],
];

// get data
const get_html = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "POST, GET",
    },
  });
  return res.ok ? res.text() : null;
};

const get_gold = async () => {
  const prices = {};
  try {
    for (const [url, prop_sel] of gold_map) {
      const _url = new URL(url);
      const html = await get_html(_url);

      if (html) {
        // console.log("-->", _url.hostname, "✔️");
        // console.log("----------------------------");
        const $ = cheerio.load(html);

        for (const [prop, sel] of prop_sel) {
          const ele = $(sel);
          if (ele) {
            prices[prop] = Number.parseFloat(ele.text().replace(",", ""));
            // console.log(prop, "✅");
          }
          // else {
          //   console.log(prop, "❌");
          // }
        }
      }
      // else {
      //   console.log(_url.hostname, "✖️");
      // }
      // console.log("----------------------------\n");
    }
    // console.error("SUCCESS 🆗\n");
  } catch (e) {
    console.error("ERROR ❌: ", e.message);
    return null;
  }
  return prices;
};

const get_silver = async () => {
  const prices = {};
  try {
    for (const [url, prop_sel] of silver_map) {
      const _url = new URL(url);
      const html = await get_html(_url);

      if (html) {
        // console.log("-->", _url.hostname, "✔️");
        // console.log("----------------------------");
        const $ = cheerio.load(html);

        for (const [prop, sel] of prop_sel) {
          const ele = $(sel);
          if (ele) {
            prices[prop] = Number.parseFloat(ele.text().replace(",", ""));
            // console.log(prop, "✅");
          }
          // else {
          //   console.log(prop, "❌");
          // }
        }
      }
      // else {
      //   console.log(_url.hostname, "✖️");
      // }
      // console.log("----------------------------\n");
    }
    // console.error("SUCCESS 🆗\n");
  } catch (e) {
    console.error("ERROR ❌: ", e.message);
    return null;
  }
  return prices;
};

const get_prices = async () => {
  const prices = {};
  try {
    for (const [url, prop_sel] of map) {
      const _url = new URL(url);
      const html = await get_html(_url);

      if (html) {
        // console.log("-->", _url.hostname, "✔️");
        // console.log("----------------------------");
        const $ = cheerio.load(html);

        for (const [prop, sel] of prop_sel) {
          const ele = $(sel);
          if (ele) {
            prices[prop] = Number.parseFloat(ele.text().replace(",", ""));
            // console.log(prop, "✅");
          }
          // else {
          //   console.log(prop, "❌");
          // }
        }
      }
      // else {
      //   console.log(_url.hostname, "✖️");
      // }
      // console.log("----------------------------\n");
    }
    // console.error("SUCCESS 🆗\n");
  } catch (e) {
    console.error("ERROR ❌: ", e.message);
    return null;
  }
  return prices;
};

const get_live = async () => {
  const prices = {};
  try {
    for (const [url, prop_sel] of live) {
      const _url = new URL(url);
      const html = await get_html(_url);

      if (html) {
        // console.log("-->", _url.hostname, "✔️");
        // console.log("----------------------------");
        const $ = cheerio.load(html);

        for (const [prop, sel] of prop_sel) {
          const ele = $(sel);
          if (ele) {
            prices[prop] = ele.text().replace(",", "");
            // console.log("-", prop, "✅");
          } 
          // else {
          //   console.log(prop, "✖️");
          // }
        }
      }
      // else {
      //   console.log(_url.hostname, "✖️");
      // }
      // console.log("----------------------------");
    }
    // console.error("SUCCESS 🆗\n");
  } catch (e) {
    console.error("ERROR ❌: ", e.message);
    return null;
  }
  return prices;
};

const gold_handler = async (_, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const response = await get_gold();
  const code = response ? 200 : 404;
  res.status(code).json(response);
};

const silver_handler = async (_, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const response = await get_silver();
  const code = response ? 200 : 404;
  res.status(code).json(response);
};

const prices_handler = async (_, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const response = await get_prices();
  const code = response ? 200 : 404;
  res.status(code).json(response);
};

const live_handler = async (_, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const response = await get_live();
  const code = response ? 200 : 404;
  res.status(code).json(response);
};

app.use(cors());
app.get("/", prices_handler);
app.get("/gold", gold_handler);
app.get("/silver", silver_handler);
app.get("/prices", prices_handler);
app.get("/live", live_handler);

app.listen(port, () => {
  console.log("Listening on port: " + port, "\n");
});
