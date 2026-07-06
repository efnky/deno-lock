import { STATUS_CODE } from "@std/http/status";

const port = Number(Deno.env.get("PORT") ?? 8000);

Deno.serve({ port }, () =>
  new Response(`deno-lock up on :${port} (OK=${STATUS_CODE.OK})\n`));

console.log(`Listening on :${port}`);
