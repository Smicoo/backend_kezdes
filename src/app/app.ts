//Express lesz majd a webserver 
//npm i express
//npm i -D @types/node @types/express

import express from "express"; //Importalnunk kell elsonek
import type { Request, Response } from "express";


const app = express();
//Kell ez a sor, hogy az express fel tudja dolgozni ami elkuldtem a szervernek
app.use(express.urlencoded({extended: true}))

app.use(express.json())      

//Atrendezzuk hogy atlathatobb legyen

export default app