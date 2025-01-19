import type { CorsOptions } from "cors";

export const CORS_OPTIONS: CorsOptions = {
  origin: [
    /https:\/\/egypt-prices.netlify.app/, // PROD
    /http:\/\/localhost:\d{4}/, // DEV
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  methods: ["GET"],
  optionsSuccessStatus: 200,
};

export const expressCacheOptions = {
  timeOut: 5 * 60 * 1000,
};
