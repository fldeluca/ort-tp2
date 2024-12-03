import collection from '../models/DAO/collectionMongo.model.js'

const getCollections = async () => {
  const collections = await collection.getCollections()
  return collections
}

const getCollectionById = async (id) => {
  const collections = await collection.getCollectionById(id)
  return collections
}

const postCollection = async (nuevaCollection) => {
  const collections = await collection.postCollection(nuevaCollection)
  return collections
}

const updateCollection = async (id, actualizacionCollection) => {
  const collections = await collection.updateCollection(id, actualizacionCollection)
  return collections
}

const deleteCollection = async (id) => {
  const collections = await collection.deleteCollection(id)
  return collections
}

export default {
    getCollections, getCollectionById, postCollection, updateCollection, deleteCollection
}