declare namespace Types {
  type PricesKey = "prices" | "live" | "gold" | "silver";
  type DataType = Record<string, string | number | null> | null;
}

declare namespace Globals {
  type EnvironmentMode = "development" | "production";
}
