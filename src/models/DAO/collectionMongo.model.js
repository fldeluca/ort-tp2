import mongoose from 'mongoose'
import collection from "../../schemas/collection.schema.js"

const Collection = mongoose.model('Collection', collection);

const getCollections = async () => {
  const Collections = await Collection.find({}) //.toArray()
  return Collections;
}

const getCollectionById = async (id) => {
  const coleccion = await Collection.findById({ _id: id})
  return coleccion;
}

const postCollection = async (nuevaCollection) => {
  const newCollection = await Collection.create(nuevaCollection)
  return newCollection
}

const addObraToCollection = async (idCollection, obra) => {
  await Collection.findOneAndUpdate({ _id: idCollection },
    { $addToSet: { obras: obra } },
    { new: true });

   return "Obra añadida a Colección" 
}

const updateCollection = async (id, actualizacionCollection) => {
  await Collection.updateOne({_id: id}, actualizacionCollection)
  return actualizacionCollection
}

const deleteCollection = async (id) => {
  await Collection.deleteOne({ _id: id})
  return "Collection eliminado correctamente"
}

export default {
  getCollections, getCollectionById, postCollection, updateCollection, deleteCollection, addObraToCollection
}