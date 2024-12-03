import service from '../services/collection.services.js'

const getCollections = async (req, res) => {
    try {
        const collections = await service.getCollections()
        res.send(collections)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const getCollectionById = async (req, res) => {
    try {
        const { id } = req.params
        const collections = await service.getCollectionById(id)
        res.send(collections)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const postCollection = async (req, res) => {
    try {
        const nuevaCollection = req.body
        const collections = await service.postCollection(nuevaCollection)
        res.send(collections)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const updateCollection = async (req, res) => {
    try {
        const {id} = req.params
        const actualizacionCollection = req.body
        const collections = await service.updateCollection(id, actualizacionCollection)
        res.send(collections)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const deleteCollection = async (req, res) => {
    try {
        const {id} = req.params
        const obras = await service.deleteCollection(id)
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

export default {
    getCollections, getCollectionById, postCollection, updateCollection, deleteCollection
}