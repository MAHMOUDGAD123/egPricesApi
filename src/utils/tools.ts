import type { Cheerio } from "cheerio";

/**
 * remove commas (,) from the text
 * @param text
 */
const parse_float_no_comma = (text: string) => {
  return Number.parseFloat(text.replace(",", ""));
};

/**
 * text parser for all prices except live
 * @param text
 */
const prices_parser = (text: string) => parse_float_no_comma(text);

/**
 * text parser for live only
 * @param text
 */
// investing.com
// const live_parser = (text: string) => {
//   return text.startsWith("(")
//     ? text.slice(1, text.length - 1)
//     : text.startsWith("+") || text.startsWith("-")
//     ? text
//     : parse_float_no_comma(text);
// };
// twelvedata.com
const live_parser = (text: string, element: Cheerio<any>, name: string) => {
  const parsedNumber = parse_float_no_comma(text);
  if (!name.includes("delta")) {
    return parsedNumber;
  }
  const isMinus = element.parent().hasClass("stats-symbol-price-diff--down");
  const isPercentage = text.includes("%");
  return (isMinus ? "-" : "+") + parsedNumber + (isPercentage ? "%" : "");
};

const text_parser_map = new Map<
  Types.PricesKey,
  (text: string, element: Cheerio<any>, name: string) => number | string
>([
  ["prices", prices_parser],
  ["gold", prices_parser],
  ["silver", prices_parser],
  ["live", live_parser],
]);

export { text_parser_map };
