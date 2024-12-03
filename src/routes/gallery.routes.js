import express from 'express'
import collectionController from '../controllers/collection.controller.js'
import controllerGallery from '../controllers/gallery.controller.js'
import controllerUsers from '../controllers/users.controller.js'

const router = express.Router()

//TP2
router.get("/obra", controllerGallery.getObras)
router.get("/obra/:id", controllerGallery.getObraById)
router.post("/obra", controllerGallery.postObra)
router.put("/obra/:id", controllerGallery.updateObra)
router.delete("/obra/:id", controllerGallery.deleteObra)

//PNT2
router.get("/usuario", controllerUsers.getUsers)
router.get("/usuario/:username-:password", controllerUsers.getUserByUsername)
router.post("/usuario", controllerUsers.postUser)
router.put("/usuario/:id", controllerUsers.updateUser)
router.delete("/usuario/:id", controllerUsers.deleteUser)

router.patch("/usuario/coleccion/", controllerUsers.addCollectionToUser)
router.patch("/usuario/coleccion/obra/", controllerUsers.addObraToCollectionFromUser)
router.patch("/usuario/likes/", controllerUsers.addObraToLikes)
router.patch("/usuario/coleccion/:idUsuario", controllerUsers.deleteObraFromCollection) 
router.patch("/usuario/likes/:idUsuario", controllerUsers.deleteObraFromLikes) 
router.patch("/usuario/coleccion/delete/:idUsuario", controllerUsers.deleteCollectionFromUser) 

router.get("/coleccion", collectionController.getCollections)
router.get("/coleccion/:id", collectionController.getCollectionById)
router.post("/coleccion", collectionController.postCollection)
router.put("/coleccion/:id", collectionController.updateCollection)
router.delete("/coleccion/:id", collectionController.deleteCollection)

export default router