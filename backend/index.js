const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const util = require('util'); // Node.js utility module
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

// Setup multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "HSRTIB@21422",
    database: "garageomega",
});

con.query = util.promisify(con.query);

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Define a router
const router = express.Router();

// Use the router
app.use('/', router);

// Add a new customer
app.post('/addcustomer', (req, res) => {
    const { customer_id, firstname, lastname, email, phone, address } = req.body;
    const query = 'INSERT INTO customer (customer_id, firstname, lastname, email, phone, address) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [customer_id, firstname, lastname, email, phone, address], (err, result) => {
        if (err) {
            console.error('Error adding customer:', err);
            res.status(500).send('Error adding customer');
        } else {
            res.status(200).send('Customer added successfully');
        }
    });
});

// API for make appointment
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

// API for viewing all appointments
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

// API for my appointment (customer)
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

app.put('/updateAppointment/:id', (req, res) => {
    const { id } = req.params;
    const updatedDetails = req.body;
    const query = 'UPDATE appointmentform SET ? WHERE id = ?';
    con.query(query, [updatedDetails, id], (err, result) => {
        if (err) {
            console.error('Error updating appointment:', err);
            return res.status(500).send({ message: 'Backend: Error updating appointment' });
        }
        res.send({ message: 'Appointment updated successfully' });
    });
});

app.delete('/deleteAppointment/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM appointmentform WHERE id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting appointment:', err);
            return res.status(500).send({ message: 'Backend: Error deleting appointment' });
        }
        res.send({ message: 'Appointment deleted successfully' });
    });
});

//API for Upload a image
app.post('/upload', upload.single('image') , (req, res) => {
    const image = req.file.filename;
    const sql = "UPDATE job SET image = ?";
    con.query(sql, [image], (err, result) => {
        if(err) return res.json({Message: "Error"});
        return res.json({Status: "Success"});
    });
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM job';
    con.query(sql, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    });
});

// API for update job status
app.put('/updateJobStatus', (req, res) => {
    const { id, status } = req.body;
    const query = 'UPDATE job SET status = ? WHERE job_id = ?';
    con.query(query, [status, id], (err, result) => {
        if (err) {
            console.error('Error updating status:', err);
            return res.status(500).send({ message: 'Backend: Error updating status' });
        }
        res.send(result);
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        con.query(query, [email], (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({status: 'fail', message: "Error"});
            }
            if (results.length > 0) {
                const user = results[0];
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.error('Error comparing passwords:', err);
                        return res.status(500).json({ status: 'fail', message: 'Error' });
                    }
                    if (isMatch) {
                        res.json({ status: "exist", role: user.role, email: user.email });
                    } else {
                        res.json({status: 'fail', message: "incorrect password"});
                    }
                });
            } else {
                res.json({status: 'fail', message: "User does not exist"});
            }
        });
    } catch (e) {
        console.error('Error in try-catch:', e);
        res.json("fail");
    }
});



// Update your /signup route to hash the password
app.post('/signup', (req, res) => {
    const { email, password, role, firstname, lastname, phone, address } = req.body;
    const user_id = generateUniqueId(); // Function to generate unique IDs

    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hashedPassword) => { // 10 is the number of salt rounds
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ status: 'fail', message: 'Error creating account' });
        }

        // Insert into users table with hashed password
        let userQuery = 'INSERT INTO users (user_id, email, password, role) VALUES (?, ?, ?, ?)';
        con.query(userQuery, [user_id, email, hashedPassword, role], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ status: 'fail', message: 'Error creating account' });
            }

            if (role === 'employee' || role === 'manager') {
                // Insert into employee table
                let employeeQuery = 'INSERT INTO employee (employee_id, firstname, lastname, email, role, phone, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
                con.query(employeeQuery, [user_id, firstname, lastname, email, role, phone, address], (err, result) => {
                    if (err) {
                        console.error('Error inserting employee:', err);
                        return res.status(500).json({ status: 'fail', message: 'Failed to create employee' });
                    }
                    res.json({ status: 'success', message: 'Employee account created successfully' });
                });
            } else if (role === 'customer') {
                // Insert into customer table
                let customerQuery = 'INSERT INTO customer (customer_id, firstname, lastname, email, phone, address) VALUES (?, ?, ?, ?, ?, ?)';
                con.query(customerQuery, [user_id, firstname, lastname, email, phone, address], (err, result) => {
                    if (err) {
                        console.error('Error inserting customer:', err);
                        return res.status(500).json({ status: 'fail', message: 'Failed to create customer' });
                    }
                    res.json({ status: 'success', message: 'Customer account created successfully' });
                });
            } else {
                return res.status(500).json({ status: 'fail', message: 'Failed to create customer' });
            }
        });
    });
});

function generateUniqueId() {
    return 'ID' + Math.random().toString(36).substr(2, 9);
}


// API for give feedback
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

// API for view feedback
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

// API for get employee details
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

app.delete('/employees/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM employee WHERE employee_id = ?';
    con.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).send({ message: 'Backend: Error deleting data' });
        }
        res.send({ message: 'Employee deleted successfully' });
    });
});

app.put('/employees/:id', (req, res) => {
    const id = req.params.id;
    const { employee_type, firstname, lastname, email, phone, address } = req.body;
    const query = `
        UPDATE employee
        SET employee_type = ?, firstname = ?, lastname = ?, email = ?, phone = ?, address = ?
        WHERE employee_id = ?
    `;
    const values = [employee_type, firstname, lastname, email, phone, address, id];
    
    con.query(query, values, (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).send({ message: 'Backend: Error updating data' });
        }
        res.send({ message: 'Employee updated successfully' });
    });
});

// Add a new employee
app.post('/addemployee', (req, res) => {
    const { employee_id, employee_type, firstname, lastname, email, phone, address } = req.body;
    const query = 'INSERT INTO employee (employee_id, employee_type, firstname, lastname, email, phone, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [employee_id, employee_type, firstname, lastname, email, phone, address], (err, result) => {
        if (err) {
            console.error('Error adding employee:', err);
            res.status(500).send('Error adding employee');
        } else {
            res.status(200).send('Employee added successfully');
        }
    });
});

// API for get employee details
app.get('/jobdetails', (req, res) => {
    const query = 'SELECT * FROM job';
    con.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send({ message: 'Backend: Error fetching data' });
        }
        res.send(results);
    });
});

app.delete('/jobdetails/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM job WHERE job_id = ?';
    con.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).send({ message: 'Backend: Error deleting data' });
        }
        res.send({ message: 'Job deleted successfully' });
    });
});

app.put('/jobdetails/:id', (req, res) => {
    const id = req.params.id;
    const { name, type, start_date, estimate_end_date, actual_end_date, status, description } = req.body;
    const query = `
        UPDATE job
        SET name = ?, type = ?, start_date = ?, estimate_end_date = ?, actual_end_date = ?, status = ?, description =?
        WHERE job_id = ?
    `;
    const values = [name, type, start_date, estimate_end_date, actual_end_date, status, description, id];
    
    con.query(query, values, (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).send({ message: 'Backend: Error updating data' });
        }
        res.send({ message: 'Job updated successfully' });
    });
});

// Add a new job
app.post('/addjob', (req, res) => {
    const { job_id, name, type, start_date, estimate_end_date, actual_end_date, status, description } = req.body;
    const query = 'INSERT INTO job (job_id, name, type, start_date, estimate_end_date, actual_end_date, status, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [job_id, name, type, start_date, estimate_end_date, actual_end_date, status, description], (err, result) => {
        if (err) {
            console.error('Error adding job:', err);
            res.status(500).send('Error adding job');
        } else {
            res.status(200).send('Job added successfully');
        }
    });
});

// API for get customer details
app.get('/customerdetails', (req, res) => {
    const query = 'SELECT * FROM customer';
    con.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send({ message: 'Backend: Error fetching data' });
        }
        res.send(results);
    });
});

app.delete('/customer/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM customer WHERE customer_id = ?';
    con.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).send({ message: 'Backend: Error deleting data' });
        }
        res.send({ message: 'Customer deleted successfully' });
    });
});

app.put('/customer/:id', (req, res) => {
    const id = req.params.id;
    const { customer_id, firstname, lastname, email, phone, address } = req.body;
    const query = `
        UPDATE customer
        SET customer_id = ?, firstname = ?, lastname = ?, email = ?, phone = ?, address = ?
        WHERE customer_id = ?
    `;
    const values = [customer_id, firstname, lastname, email, phone, address, id];
    
    con.query(query, values, (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).send({ message: 'Backend: Error updating data' });
        }
        res.send({ message: 'Customer updated successfully' });
    });
});

app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.listen(5000, () => {
    console.log("Listening: http://localhost:5000/");
});
