//Express lesz majd a webserver 
//npm i express
//npm i -D @types/node @types/express

import express from "express"; //Importalnunk kell elsonek
import type { Request, Response } from "express";


const app = express();

app.use(express.json())      


app.get('/', (_req, res) =>{
    res.send("A szerver fut") //Erre a get keresre ez a valasz fog erkezni
})

app.post('/', (req:Request, res:Response) =>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () =>{
    console.log("Fut az express webszerver")
})

