/* eslint-disable no-console */
import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Fala ai meu mano";
});

async function main() {
  const PORT = 4040;

  await app.listen({ port: PORT });

  console.log(`App running at port: ${PORT}`);
}

main();
