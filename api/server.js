import jsonServer from "json-server";
import fs from "fs";

export const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync("db.json"));
const router = jsonServer.router(db);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3000);
