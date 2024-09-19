const experss = require("express");
const cors = require("cors");
const { Worker } = require("node:worker_threads");

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
    // console.log("done");
    const code = data ? 200 : 404;
    res.status(code).json(data);
  });

  worker.on("error", (err) => {
    // console.log("--------------------------");
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err.stack);
    // console.log("--------------------------");
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
