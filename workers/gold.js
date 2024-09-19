import { parentPort, workerData } from "node:worker_threads";
import { get_prices } from "../api.js";

parentPort.postMessage(await get_prices(workerData.path));
