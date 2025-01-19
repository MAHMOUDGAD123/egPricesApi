import express, { type Response as ExpressResponse } from "express";
import cors from "cors";
import { CORS_OPTIONS } from "@/utils/constants";
import router from "@/router";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(cors(CORS_OPTIONS));
app.use("/api", router);

app.get("/", async (_, res) => {
  res.status(200).json({
    msg: "Welcome to EGPrices API",
  });
});

app.get("*", async (_, res: ExpressResponse) => {
  res.sendStatus(404);
});

if (import.meta.env.DEV) {
  console.log("Development Mode ✅");
}

if (import.meta.env.PROD) {
  console.log("Production Mode ✅");
  const PORT = process.env.PORT ?? 3000;
  app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
  });
}

export const viteNodeApp = app; // for vite-node plugin
export default app; // for vercel deployment
