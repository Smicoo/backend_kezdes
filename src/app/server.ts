import app from "./app.js"
import dotenv from "dotenv"
dotenv.confing()

const PORT = process.env.PORT || 3000

app.get('/', (_req, res) =>{
    res.send("A szerver fut") //Erre a get keresre ez a valasz fog erkezni
})

app.post('/', (req:Request, res:Response) =>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, () =>{
    console.log("Fut az express webszerver")
})

app.post('/product', (req:Request, res:Response) =>{
    console.log(req.body)
    res.send(req.body)
})