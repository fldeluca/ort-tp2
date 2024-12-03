const obras = []

const getObras = async () => {
    return obras
}

const postObra = async (nuevaObra) => {
    nuevaObra.id = obras.length + 1
    await obras.push(nuevaObra)
    return nuevaObra
}

const updateObra = async (id, actualizacionObra) => {
    actualizacionObra.id = id
    const index = obras.findIndex((obra) => obra.id === Number(id))
    obras.splice(index, 1, actualizacionObra)
    return actualizacionObra
}

const deleteObra = async (id) => {
    const index = obras.findIndex((obra) => obra.id === Number(id))
    if (index === -1) {
        throw new Error("Id inexistente")
    } else {
        obras.splice(index, 1)
        return "Obra eliminada correctamente"
    }
}

export default {
    getObras, postObra, updateObra, deleteObra
}