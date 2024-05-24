const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())


app.use(express.json());

const db = require("./models");

const modelsRouter = require("./routes/Routes");
app.use("/customers", modelsRouter );

app.get('/' , (req, res)=> {
    return res.json("From Backend Side");
})

db.sequelize.sync().then(() => {
    app.listen(8081, ()=> {
        console.log("listning: http://localhost:8081/")
    })
});
