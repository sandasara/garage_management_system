const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());


//Making database connection to mysql database
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Juliet25",
    database: "garagebeta",
  });

//Adding console statement to check the success of database connection
con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

//API to add new appointment to appointmentform table.
//New appointment details are coming from the form in appointmentform component
app.post('/appointmentform', (req, res) => {
    const { firstname, lastname, phone, vehicle_type, vehicle_no, date, time, description, appointment_type } = req.body;
    const query = `
        INSERT INTO appointmentform 
        (firstname, lastname, phone, vehicle_type, vehicle_no, date, time, description, appointment_type) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [firstname, lastname, phone, vehicle_type, vehicle_no, date, time, description, appointment_type];

    con.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send({ message: "Backend: Enter Correct Details" });
        }    
        res.send(result);
    });
});


//API to check user for login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        con.query(query, [email], (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json("fail");
            }
            if (results.length > 0) {
                const user = results[0];
                if (user.password === password) {
                    res.json("exist");
                } else {
                    res.json("incorrect password");
                }
            } else {
                res.json("notexist");
            }
        });
    } catch (e) {
        console.error('Error in try-catch:', e);
        res.json("fail");
    }
});

//API for sign up
app.post('/signup', async (req, res) => {
    const { email, username, password } = req.body;
    const checkQuery = 'SELECT * FROM users WHERE email = ?';
    const insertQuery = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';

    try {
        con.query(checkQuery, [email], async (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json("fail");
            }
            if (results.length > 0) {
                res.json("exist");
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                con.query(insertQuery, [email, username, hashedPassword], (err, result) => {
                    if (err) {
                        console.error('Error inserting data:', err);
                        return res.status(500).json("fail");
                    }
                    res.json("notexist");
                });
            }
        });
    } catch (e) {
        console.error('Error in try-catch:', e);
        res.json("fail");
    }
});

//Home API (Just for the purpose for checking if the backend is running or not)
app.get('/' , (req, res)=> {
    return res.json("From Backend Side");
})

//Starting the server on port 50000
app.listen(5000, ()=> {
    console.log("listning: http://localhost:5000/")
})
