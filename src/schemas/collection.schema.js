import mongoose from 'mongoose'
import obra from './obra.schema.js'
const Schema = mongoose.Schema;

const collection = new Schema({
  title: { type: String, required: true },
  obras: [obra]
});

export default collection
