import mongoose from "mongoose";
import { isJSDocAugmentsTag } from "typescript";

export async function startConnection() {
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/Minim1DB", {
    useNewUrlParser: true,
    useFindAndModify: true,
  });

  console.log("Connection with DATABASE (Minim1DB) established");
}
