const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json());

const db = require("./models");

app.post('/signup' , (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    con.query("INSERT INTO users (username, email, password) VALUES(?, ?, ?)", [username,email,password],
        (err, result) => {
            if(result){
                res.send(result);
            }
            else{
                res.send({message: "Enter Correct Details"})
            }
        }
    )

})

app.post('/login' , (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    con.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,password],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }
            else{
                if(result.length >0){
                    res.send(result);
                }
                else
                    res.send({message: "Username oor Passeord Incorrect"})
            }
        }
    )

})



const modelsRouter = require("./routes/Routes");
//app.use("/customer", modelsRouter );

app.get('/' , (req, res)=> {
    return res.json("From Backend Side");
})

db.sequelize.sync().then(() => {
    app.listen(8081, ()=> {
        console.log("listning: http://localhost:8081/")
    })
});
