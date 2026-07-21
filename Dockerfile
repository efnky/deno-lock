FROM denoland/deno:2.1.4 AS runner

WORKDIR /app

COPY deno.json ./

COPY . .

RUN deno install

EXPOSE 8080

USER deno

CMD ["deno", "run", "--allow-net", "--allow-env", "main.ts"]