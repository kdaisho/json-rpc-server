import { serve } from "https://deno.land/std@0.117.0/http/server.ts";
import { respond } from "https://deno.land/x/gentle_rpc@v3.4/mod.ts";

const port = "3009";

const rpcMethods = {
  sayHello: (req: { name: string }) => {
    return `Hello ${req.name}`;
  },
  sum: ({ a, b }: { a: number; b: number }) => {
    return a + b;
  },
  log: (req: { message: string }) => {
    console.log(req);
    return null;
  },
};

serve(
  (req) => {
    return respond(rpcMethods, req);
  },
  { addr: `:${port}` }
);
console.log(`Listening on ${port}`);
