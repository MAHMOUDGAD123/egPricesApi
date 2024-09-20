/**
 * remove commas (,) from the text
 * @param {string} text
 */
const parse_float_no_comma = (text) => {
  return Number.parseFloat(text?.replace(",", ""));
};

/**
 * text parser for all prices except live
 * @param {string} text
 */
const prices_parser = (text) => parse_float_no_comma(text);

/**
 * text parser for live only
 * @param {string} text
 */
const live_parser = (text) => {
  return text.startsWith("(")
    ? text?.slice(1, text.length - 1)
    : text?.startsWith("+")
    ? text
    : parse_float_no_comma(text);
};

const text_parser_map = new Map([
  ["prices", prices_parser],
  ["gold", prices_parser],
  ["silver", prices_parser],
  ["live", live_parser],
]);

export { text_parser_map };
