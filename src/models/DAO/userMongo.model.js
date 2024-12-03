import mongoose from 'mongoose'
import user from "../../schemas/user.schema.js"
import coleccion from './collectionMongo.model.js';

const User = mongoose.model('User', user);

const getUsers = async () => {
  const Users = await User.find({})
  return Users;
}

const getUserById = async (id) => {
  const usuario = await User.findById({ _id: id})
  return usuario;
}

const getUserByUsername = async (username, password) => {
  const UserFinded = await User.find({ username: username, password: password})
  return UserFinded;
}

const postUser = async (nuevaUser) => {
  const newUser = await User.create(nuevaUser)
  return newUser
}

const updateUser = async (id, actualizacionUser) => {
    await User.updateOne({_id: id}, actualizacionUser)
    return actualizacionUser
}

const addCollectionToUser = async (idUsuario, idCollection) => {
  const collection = await coleccion.getCollectionById(idCollection) //postCollection
  await User.findOneAndUpdate({ _id: idUsuario },
    { $addToSet: { collections: collection } },
    { new: true });

  return "Colección añadida a Usuario"
}


const addObraToCollectionFromUser = async (idUsuario, idCollection, obra) => {  
  // await coleccion.addObraToCollection(idCollection, obra)

  // /* const coleccion = usuario.collections.find(item => item.id === idCollection)
  // if (coleccion != undefined) {
  //   coleccion.push(obra)
  //   return "Obra añadidad a colección"
  // } */

  const usuario = await User.findById(idUsuario)
  const colec = usuario.collections.find(item => item._id.toString() === idCollection)
  if(colec != undefined){
    const obras = colec.obras
    obras.push(obra)
    await usuario.save()
    return "Obra añadida a Colección"
  }
}

const addObraToLikes = async (idUsuario, obra) => {
  await User.findOneAndUpdate({ _id: idUsuario },
    { $addToSet: { likes: obra } },
    { new: true });
    return "Obra añadida a likes"  
}

const deleteObraFromCollection = async (idUsuario, idCollection, idObra) => {
  // const usuario = await getUserById(idUsuario)
  // const coleccion = usuario.collections.find(item => item.id === idCollection)
  // if (coleccion != undefined) {
  //   const indexObra = coleccion.findIndex(item => item.id === idObra)
  //   if (indexObra !== -1) {
  //     coleccion.splice(indexObra, 1) 
  //     return "Obra eliminada correctamente de colección"
  //   }
  // }
  
  const usuario = await User.findById(idUsuario);
    const colec = usuario.collections.find(item => item._id.toString() === idCollection)
    if(colec != undefined){
      const indexObra = colec.obras.findIndex(obra => obra._id.toString() === idObra);
      if (indexObra !== -1) {
        colec.obras.splice(indexObra, 1)
        await usuario.save();
        return "Obra eliminada correctamente de Colección";
      }
      
    }
  
}

const deleteObraFromLikes = async (idUsuario, idObra) => {
  await User.findOneAndUpdate({ _id: idUsuario },
    { $pull: { likes: { _id: idObra }}},
    { new: true });
  return "Obra eliminada de likes"
}

const deleteCollectionFromUser = async (idUsuario, idCollection) => {
  await User.findOneAndUpdate({_id: idUsuario}, 
    { $pull : { collections: {_id: idCollection}}},
    { new: true });
  return "Colección eliminada de Usuario"
}

const deleteUser = async (id) => {
    await User.deleteOne({ _id: id})
    return "User eliminado correctamente"
}

export default {
  getUsers, getUserById, getUserByUsername, postUser, updateUser, deleteUser, addCollectionToUser, addObraToCollectionFromUser, addObraToLikes, deleteObraFromCollection, deleteObraFromLikes, deleteCollectionFromUser
}