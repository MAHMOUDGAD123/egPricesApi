declare module "fastify" {
  type Word = `${string}`;
  type DottedString = `${Word}.${Word}`;
  type Path = `${Word}.${DottedString}`;


  interface FastifyContextConfig {
    cacheKey?: Types.PricesKey;
    cacheTTL?: number;
    dynamic?: boolean;
    dynamicCacheProps?: [string, DottedString][];
  }

  interface FastifyReply {
    locals?: {
      cacheKey?: string;
    };
  }
}

export {};
