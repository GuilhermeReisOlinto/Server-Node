const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, () => {
    console.log("o servidor esta executando ")
});


//db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco de dados");
    });


//routes 
app.get('/', (req, res) => {
    res.send("esta funcionando gfswwsr4tuusey");
});