import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const obra = new Schema({
  title: String,
  description: String,
  author: String,
  technique: String,
  image: String,
  culture: String,
  url: String,
  division: String,
  date: Date
});

export default obra