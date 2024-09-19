import experss from "express";
import cors from "cors";
import { get_prices } from "./api.js";

const app = experss();
const port = process.env.PORT || 3000;

/**
 * endpoints handler
 * @param {string} path the api endpoint
 * @param {Response} res the server response
 */
const handler = async (path, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const data = await get_prices(path);
  const code = data ? 200 : 500;
  res.status(code).json(data);
};

app.use(cors());
app.get("/", (_, res) => handler("prices", res));
app.get("/prices", (_, res) => handler("prices", res));
app.get("/gold", (_, res) => handler("gold", res));
app.get("/silver", (_, res) => handler("silver", res));
app.get("/live", (_, res) => handler("live", res));

app.listen(port, () => {
  console.log("Listening on port: " + port, "\n");
});
