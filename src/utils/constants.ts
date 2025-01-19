import type { CorsOptions } from "cors";

export const CORS_OPTIONS: CorsOptions = {
  origin: [
    /https:\/\/egypt-prices.netlify.app/, // PROD
    /http:\/\/localhost:\d{4}/, // DEV
    /http:\/\/127.0.0.1:\d{4}/, // DEV
    /vscode:\/\/thunder-client/, // DEV
  ],
  credentials: true,
  methods: ["GET"],
  optionsSuccessStatus: 200,
};

export const expressCacheOptions = {
  timeOut: 5 * 60 * 1000,
};
