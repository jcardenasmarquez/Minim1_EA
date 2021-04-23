import { skipPartiallyEmittedExpressions } from "typescript";
import app from "./app";
import { startConnection } from "./database";

//Per arrencar el servidor al port escollit
async function main() {
  startConnection(); //Inicia connexió amb BBDD
  await app.listen(app.get("port")); //default port
  console.log("Server on port", app.get("port"));
  console.log("Cors-enabled for all origins");
}

main();
