const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())

const db = require("./models");

const modelsRouter = require("./routes/routes");
app.use("/customers", modelsRouter );

app.get('/' , (request, response)=> {
    return response.json("From Backend Side");
})

db.sequelize.sync().then(() => {
    app.listen(8081, ()=> {
        console.log("listning: http://localhost:8081/")
    })
  });