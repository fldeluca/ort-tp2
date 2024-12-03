import service from '../services/gallery.services.js'

const getObras = async (req, res) => {
    try {
        const obras = await service.getObras()
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const getObraById = async (req, res) => {
    try {
        const { id } = req.params
        const obra = await service.getObraById(id)
        res.send(obra)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const postObra = async (req, res) => {
    try {
        const nuevaObra = req.body
        const obras = await service.postObra(nuevaObra)
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const updateObra = async (req, res) => {
    try {
        const {id} = req.params
        const actualizacionObra = req.body
        const obras = await service.updateObra(id, actualizacionObra)
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const deleteObra = async (req, res) => {
    try {
        const {id} = req.params
        const obras = await service.deleteObra(id)
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

export default {
    getObras, getObraById, postObra, updateObra, deleteObra
}