import mongoose from 'mongoose'
import axios from 'axios';
import obra from "../../schemas/obra.schema.js"

const normalizeData = (obras) => {
  let obrasNormalizadas = []
  obras.forEach(obra => {
    obrasNormalizadas.push({
      title: obra.title,
      description: obra.description,
      author: obra.people[0].name,
      technique: obra.technique,
      image: obra.primaryimageurl,
      culture: obra.culture,
      url: obra.url,
      division: obra.division,
      date: new Date()
    })
  });
  return obrasNormalizadas
}

const getObrasHarvard = async () => {
  try {
    let obras = await axios.get(process.env.API_HARVARD)
    return normalizeData(obras.data.records)
  } catch(err){
    console.log(err)
  }
}

const addObras = async () => {
  let obras = await getObrasHarvard()
  if(obras.length > 0){
    for (let i = 0; i < obras.length; i++) {
      const obra = obras[i];
      await postObra(obra)
    }
  }
}

const Obra = mongoose.model('Obra', obra);

const getObras = async () => {
  const obras = await Obra.find({})
  if(obras.length <= 0){
    await addObras()
  }
  return obras;
}

const getObraById = async (id) => {
  console.log(id);
  const obra = await Obra.findById({_id: id})
  return obra
}

const postObra = async (nuevaObra) => {
  const newObra = await Obra.create(nuevaObra)
  return newObra
}

const updateObra = async (id, actualizacionObra) => {
    await Obra.updateOne({_id: id}, actualizacionObra)
    return actualizacionObra
}

const deleteObra = async (id) => {
    await Obra.deleteOne({_id: id})
    return "Obra eliminada correctamente"
}

export default {
  getObras, getObraById, postObra, updateObra, deleteObra
}

