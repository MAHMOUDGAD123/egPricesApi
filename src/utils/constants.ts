import type { CorsOptions } from "cors";

export const CORS_OPTIONS: CorsOptions = {
  origin: [/https:\/\/egypt-prices.netlify.app/, /http:\/\/localhost:\d{4}/],
  credentials: true,
  methods: ["GET"],
  optionsSuccessStatus: 200,
};

export const expressCacheOptions = {
  timeOut: 5 * 60 * 1000,
};
