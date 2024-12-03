import mongoose from 'mongoose'
import collection from './collection.schema.js'
import obra from './obra.schema.js'
const Schema = mongoose.Schema;

const user = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  collections: [collection],
  likes: [obra]
});

export default user
