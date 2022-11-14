import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("<h1>Hello World!.</h1>")
})

app.listen(port, () => {
    console.log(`escuchando en http://localhost:${port}`);
})
