const { parentPort, workerData } = require("worker_threads");
const { get_prices } = require("./api.js");

(async () => {
  console.log("from silver");
  console.log(workerData.path);
  const data = await get_prices(workerData.path);
  parentPort.postMessage(data);
})();
