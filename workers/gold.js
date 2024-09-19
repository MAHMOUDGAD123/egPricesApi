const { parentPort, workerData } = require("node:worker_threads");
const { get_prices } = require("../api.js");

(async () => {
  parentPort.postMessage(await get_prices(workerData.path));
})();
