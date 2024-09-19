import experss from "express";
import cors from "cors";
import { Worker } from "node:worker_threads";

const app = experss();
const port = process.env.PORT || 3000;

/**
 * endpoints handler
 * @param {string} path the api endpoint
 * @param {Response} res the response
 */
const handler = async (path, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const worker = new Worker(`./workers/${path}.js`, { workerData: { path } });

  worker.on("message", (data) => {
    const code = data ? 200 : 404;
    res.status(code).json(response);
  });

  worker.on("error", () => {
    res.status(404).json(null);
  });
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
