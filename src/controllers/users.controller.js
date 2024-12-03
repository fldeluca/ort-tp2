import service from '../services/users.services.js'
import obraService from '../services/gallery.services.js'

const getUsers = async (req, res) => {
    try {
        const users = await service.getUsers()
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const users = await service.getUserById(id)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.send({ statusCode: 500, message: "Internal server error." });
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { username, password } = req.params
        const users = await service.getUserByUsername(username, password)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const postUser = async (req, res) => {
    try {
        const nuevoUser = req.body
        const users = await service.postUser(nuevoUser)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const actualizacionUsuario = req.body
        const users = await service.updateUser(id, actualizacionUsuario)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const addCollectionToUser = async (req, res) => {
    try {
        const {idUsuario, idCollection} = req.body
        const users = await service.addCollectionToUser(idUsuario, idCollection)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const addObraToCollectionFromUser = async (req, res) => {
    try {
        const {idUsuario, idCollection, idObra} = req.body
        const addObra = await obraService.getObraById(idObra)
        const users = await service.addObraToCollectionFromUser(idUsuario, idCollection, addObra)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const addObraToLikes = async (req, res) => {
    try {
        const {idUsuario, idObra} = req.body
        const obra = await obraService.getObraById(idObra)
        const users = await service.addObraToLikes(idUsuario, obra)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const deleteObraFromCollection = async (req, res) => {
    try {
        const { idUsuario } = req.params
        const { idCollection, idObra } = req.body

        const users = await service.deleteObraFromCollection(idUsuario, idCollection, idObra)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const deleteObraFromLikes = async (req, res) => {
    try {
        const {idUsuario} = req.params
        const {idObra} = req.body
        const users = await service.deleteObraFromLikes(idUsuario, idObra) 
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const deleteCollectionFromUser = async (req, res) => {
    try {
        const {idUsuario} = req.params
        const {idCollection} = req.body
        const users = await service.deleteCollectionFromUser(idUsuario, idCollection) 
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const users = await service.deleteUser(id)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}



export default {
    getUsers, getUserById, getUserByUsername, updateUser, postUser, deleteUser, addCollectionToUser, addObraToCollectionFromUser, addObraToLikes, deleteObraFromCollection, deleteObraFromLikes, deleteCollectionFromUser

}