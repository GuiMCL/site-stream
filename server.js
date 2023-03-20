const express = require("express")
const path = require("path")
const port = 3333


// declaraçao de caminho com let pegando o diretorio atual e o join = juntar com o public
let initialpath =path.join(__dirname, "public")
let app = express()
app.use(express.static(initialpath))

app.get("/", (req, res) => {
    res.sendfile(path.join(initialpath , "index.html"))
})

app.listen(port,() => {
    console.log(`SERVER START on port ${port}! `)

})