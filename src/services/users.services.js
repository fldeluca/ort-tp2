import Users from "../models/DAO/userMongo.model.js"

const getUsers = async () => {
  const users = await Users.getUsers()
  return users
}

const getUserById = async (id) => {
  const users = await Users.getUserById(id)
  return users
}

const getUserByUsername = async (username, password) => {
  const users = await Users.getUserByUsername(username, password)
  return users
}

const postUser = async (nuevoUser) => {
  const users = await Users.postUser(nuevoUser)
  return users
}

const updateUser = async (id, actualizacionUser) => {
  const users = await Users.updateUser(id, actualizacionUser)
  return users
}

const addCollectionToUser = async (idUsuario, idCollection) => {
  const users = await Users.addCollectionToUser(idUsuario, idCollection) 
  return users
}

const addObraToCollectionFromUser = async (idUsuario, idCollection, obra) => {
  const users = await Users.addObraToCollectionFromUser(idUsuario, idCollection, obra)
  return users
}

const addObraToLikes = async (idUsuario, obra) => {
  const users = await Users.addObraToLikes(idUsuario, obra)
  return users
}

const deleteObraFromCollection = async (idUsuario, idCollection, idObra) => {
  const users = await Users.deleteObraFromCollection(idUsuario, idCollection, idObra)
  return users
}

const deleteObraFromLikes = async (idUsuario, obra) => {
  const users = await Users.deleteObraFromLikes(idUsuario, obra)
  return users
}

const deleteCollectionFromUser = async (idUsuario, idCollection) => {
  const users = await Users.deleteCollectionFromUser(idUsuario, idCollection)
  return users
}
 
const deleteUser = async (id) => {
  const users = await Users.deleteUser(id)
  return users
}

export default {
  getUsers, getUserById, getUserByUsername, postUser, updateUser, deleteUser, addCollectionToUser, addObraToCollectionFromUser, addObraToLikes, deleteObraFromCollection, deleteObraFromLikes, deleteCollectionFromUser
}