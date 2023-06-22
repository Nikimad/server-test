import jsonServer from "json-server";
import fs from "fs";

export const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync("db.json"));
const router = jsonServer.router(db);

server.post("/boards", ({ body }) => {
  const { id } = body;
  router.db.boards.items[id] = body;
  router.db.boards.ids = [id, ...db.boards.ids];
  router.db.write();
});

server.use(router);
server.listen(3000);
