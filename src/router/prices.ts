import type { FastifyInstance } from "fastify";
import { get_prices } from "@/utils/core";

type ReplyType = { data: Types.DataType; code: number };

/**
 * endpoints handler
 * @param key the api endpoint
 * @param res the server response
 */
const getDataHandler = async (key: Types.PricesKey): Promise<ReplyType> => {
  const data = await get_prices(key);
  return data ? { data, code: 200 } : { data: null, code: 500 };
};

export const pricesRoutes = async (app: FastifyInstance) => {
  app.get<{
    Reply: Types.DataType;
  }>(
    "/gold",
    { config: { cacheKey: "gold", dynamic: false } },
    async (_req, _res) => {
      const replay = await getDataHandler("gold");
      return _res
        .status(replay.code)
        .type("application/json")
        .send(replay.data);
    }
  );

  app.get<{
    Reply: Types.DataType;
  }>("/live", {}, async (_req, _res) => {
    const replay = await getDataHandler("live");
    return _res.status(replay.code).type("application/json").send(replay.data);
  });

  app.get<{
    Reply: Types.DataType;
  }>(
    "/prices",
    { config: { cacheKey: "prices", dynamic: false } },
    async (_req, _res) => {
      const replay = await getDataHandler("prices");
      return _res
        .status(replay.code)
        .type("application/json")
        .send(replay.data);
    }
  );

  app.get<{
    Reply: Types.DataType;
  }>(
    "/silver",
    { config: { cacheKey: "silver", dynamic: false } },
    async (_req, _res) => {
      const replay = await getDataHandler("silver");
      return _res
        .status(replay.code)
        .type("application/json")
        .send(replay.data);
    }
  );
};
