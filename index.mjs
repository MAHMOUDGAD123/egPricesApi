import experss from "express";
import cors from "cors";
import { get_prices } from "./api.mjs";
import expressCache from "cache-express";

const app = experss();
const PORT = process.env.PORT || 3000;
const expressCacheOptions = {
  timeOut: 5 * 60 * 1000,
};

/**
 * endpoints handler
 * @param {string} path the api endpoint
 * @param {Response} res the server response
 */
const getDataHandler = async (path, res) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  const data = await get_prices(path);
  const code = data ? 200 : 500;
  res.status(code).json(data);
};

app.use(cors());
app.get("/live", (_, res) => getDataHandler("live", res));
app.use(expressCache(expressCacheOptions));
app.get("/", (_, res) => getDataHandler("prices", res));
app.get("/prices", (_, res) => getDataHandler("prices", res));
app.get("/gold", (_, res) => getDataHandler("gold", res));
app.get("/silver", (_, res) => getDataHandler("silver", res));

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT, "\n");
});
