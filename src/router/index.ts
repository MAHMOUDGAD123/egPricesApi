import { Router, type Response as ExpressResponse } from "express";
import { expressCacheOptions } from "@/utils/constants.js";
import { get_prices } from "@/utils/core";
// @ts-ignore
import expressCache from "cache-express";

const router: Router = Router();

/**
 * endpoints handler
 * @param key the api endpoint
 * @param res the server response
 */
const getDataHandler = async (key: Types.PricesKey, res: ExpressResponse) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  const data = await get_prices(key);
  const code = data ? 200 : 500;
  res.status(code).json(data);
};

if (import.meta.env.DEV) {
  // DEV
  router.use((req, _, next) => {
    console.log("Origin:", req.headers.origin);
    console.log("Request Headers:", req.headers);
    next();
  });
}

// routes
router.get("/live", (_, res) => getDataHandler("live", res));
router.use(expressCache(expressCacheOptions));
router.get("/prices", (_, res) => getDataHandler("prices", res));
router.get("/gold", (_, res) => getDataHandler("gold", res));
router.get("/silver", (_, res) => getDataHandler("silver", res));

export default router;
