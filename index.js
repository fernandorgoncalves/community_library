import express from 'express'

const app = express()
const port = 3000
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
    const body = req.body
    users.push(body)
    res.status(201).send("usuario criado com sucesso")
})
app.get('/users', (req, res)=>{
    res.send({messasge: "Essses são os usuarios",users})
})

app.listen(port, () => {  
    console.log(`Server is running on http://localhost:${port}`)  
 })