import jsonServer from "json-server";
import fs from "fs";

export const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync("db.json"));
const router = jsonServer.router(db);

server.post("/boards", (req, res, next) => {
  db.boards.ids = [req.body.id, ...db.boards.ids];
  next();
});

server.use(router);
server.listen(3000);
