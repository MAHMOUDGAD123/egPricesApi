export const execute_in_paralel = async (
  list: [] | unknown[],
  allSettled: boolean = false
) => {
  if (allSettled) {
    await Promise.allSettled(list);
  } else {
    await Promise.all(list);
  }
};

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

/* investing.com
  const live_parser = (text: string) => {
    return text.startsWith("(")
      ? text.slice(1, text.length - 1)
      : text.startsWith("+") || text.startsWith("-")
      ? text
      : parse_float_no_comma(text);
 }; */

// twelvedata.com
/**
 * text parser for live only
 * @param text the textContent of the element
 * @param element the element itself
 * @param name the name of the porperty
 */
const live_parser = (text: string, element: HTMLElement, name: string) => {
  const parsedNumber = parse_float_no_comma(text);
  if (!name.includes("delta")) {
    return parsedNumber;
  }
  const isMinus = element.parentElement?.classList.contains(
    "stats-symbol-price-diff--down"
  );
  if (text.includes("%")) {
    return `${isMinus ? "-" : "+"}${parsedNumber}`;
  }
  return `${isMinus ? "-" : "+"}${parsedNumber}`;
};

const text_parser_map = new Map<
  Types.PricesKey,
  (text: string, element: HTMLElement, name: string) => number | string
>([
  ["prices", prices_parser],
  ["gold", prices_parser],
  ["silver", prices_parser],
  ["live", live_parser],
]);

export { text_parser_map };
