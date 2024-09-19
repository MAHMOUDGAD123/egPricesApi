import { parentPort, workerData } from "node:worker_threads";
import { get_prices } from "../api";

parentPort.postMessage(await get_prices(workerData.path));
