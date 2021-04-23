import { Schema, model, Document, Types, Mongoose } from "mongoose";

const ResearchGroupSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  link: { type: String },
  responsible: { type: String },
});

export default model("ResearchGroup", ResearchGroupSchema);
