import express from "express";
import 'dotenv/config'
import router from "./src/routes/gallery.routes.js";
import db from './db.js'
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.PORT, () => console.log(`Server listening on: ${process.env.PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));
