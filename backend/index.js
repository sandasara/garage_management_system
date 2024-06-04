const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const bcrypt = require('bcrypt')
const util = require('util'); // Node.js utility module

const app = express()
app.use(cors())
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Juliet25",
    database: "garagebeta",
  });

con.query = util.promisify(con.query);

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});


//API for make appointment
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

//API FOR VIEW APPOINTMENT
app.get('/appointments', (req, res) => {
    const query = 'SELECT * FROM appointmentform';
    con.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send({ message: 'Backend: Error fetching data' });
        }
        res.send(results);
    });
});


//API FOR MY APPOINRTMENT(CUSTOMER)
app.get('/myappointments', (req, res) => {
    const firstname = req.query.firstname; 
    const query = 'SELECT * FROM appointmentform WHERE firstname = ?';
    con.query(query, [firstname], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send({ message: 'Backend: Error fetching data' });
        }
        res.send(results);
    });
});


//API to check user for login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        con.query(query, [username], (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json("fail");
            }
            if (results.length > 0) {
                const user = results[0];
                // Use bcrypt.compare to check the password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.error('Error comparing passwords:', err);
                        return res.status(500).json("fail");
                    }
                    if (isMatch) {
                        res.json("exist");
                    } else {
                        res.json("incorrect password");
                    }
                });
            } else {
                res.json("notexist");
            }
            console.log(results)
        });
    } catch (e) {
        console.error('Error in try-catch:', e);
        res.json("fail");
    }
});

//API for sign up
app.post('/signup', async (req, res) => {
    const { email, username, password, role } = req.body;
    const checkQuery = 'SELECT * FROM users WHERE email = ?';
    const insertQuery = 'INSERT INTO users (email, username, password, role) VALUES (?, ?, ?, ?)';

    try {
        const results = await con.query(checkQuery, [email]);
        if (results.length > 0) {
            res.json("exist");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await con.query(insertQuery, [email, username, hashedPassword, role]);
            res.json("notexist");
        }
    } catch (err) {
        console.error('Error during database operations:', err);
        res.status(500).json("fail");
    }
});

//API for give feedback
app.post('/givefeedback', (req, res) => {
    const { content, email } = req.body;
    const query = 'INSERT INTO feedback (content, email) VALUES (?, ?)';
  
    con.query(query, [content, email], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting feedback');
      } else {
        res.send('Feedback submitted successfully');
      }
    });
  });

  //API for View Feedback
  app.get('/viewfeedback', (req, res) => {
    const query = 'SELECT * FROM feedback';
    con.query(query, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error fetching feedback');
      } else {
        res.send(results);
      }
    });
  });


//API for get Employee Details
app.get('/employeedetails', (req, res) => {
    const query = 'SELECT * FROM employee';
    con.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send({ message: 'Backend: Error fetching data' });
        }
        res.send(results);
    });
});


app.get('/' , (req, res)=> {
    return res.json("From Backend Side");
})


app.listen(5000, ()=> {
    console.log("listning: http://localhost:5000/")
})



// db.sequelize.sync().then(() => {
//     app.listen(8081, ()=> {
//         console.log("listning: http://localhost:8081/")
//     })
// });

// const modelsRouter = require("./routes/Routes");
//app.use("/customer", modelsRouter );
