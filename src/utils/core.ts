import { JSDOM } from "jsdom";
import { execute_in_paralel, text_parser_map } from "@/utils/tools";
import { data_map } from "@/utils/data-map";

/**
 * fetch & get html document
 * @param url the url object
 */
const get_html = async (url: URL | string) => {
  try {
    const res = await fetch(url);
    return res.ok ? res.text() : null;
  } catch (error) {
    return null;
  }
};

const load_data_async = async (
  key: Types.PricesKey,
  url: string,
  prop_sel: string[][],
  pricesRef: NonNullable<Types.DataType>
) => {
  try {
    const _url = new URL(url!);
    const html = await get_html(_url);

    if (html) {
      console.log("\n-->", _url.hostname, "✅");
      const {
        window: { document },
      } = new JSDOM(html);

      for (const [prop, sel] of prop_sel) {
        const ele = document.querySelector(sel!) as HTMLElement;
        if (ele) {
          pricesRef[prop!] = text_parser_map.get(key)!(
            ele.textContent,
            ele,
            prop!
          );
          console.log(prop, "🟩");
        } else {
          pricesRef[prop!] = null;
          console.log(prop, "🟥");
        }
      }
    } else {
      console.log(_url.hostname, "❌");
    }
  } catch (err) {
    console.error("ERROR ❌: ", (err as Error).message);
  }
};

/**
 * dom & get prices
 * @param key to get the data for a specific endpoint
 */
const get_prices = async (key: Types.PricesKey): Promise<Types.DataType> => {
  const prices = Object.create(null);
  const map_list = data_map
    .get(key)!
    .map(([url, prop_sel]) =>
      load_data_async(key, url as string, prop_sel as string[][], prices)
    );

  await execute_in_paralel(map_list, true);

  // fix JPY by divide it by 100
  if (prices["jpy_egp_b"]) {
    prices["jpy_egp_b"] = +(prices["jpy_egp_b"] / 100).toFixed(4);
    prices["jpy_egp_s"] = +(prices["jpy_egp_s"] / 100).toFixed(4);
  }

  // return null if the object has no keys at all
  return Object.keys(prices).length === 0 ? null : prices;
};

export { get_prices };
