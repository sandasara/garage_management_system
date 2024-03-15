const express = require('express')
const router = express.Router()
const { Customer } = require("../models/Customer");


router.get("/", (req, res) => {
    res.send("welcome");
})

router.post("/", async (req, res) => {
    const customer = req.body;
    await Customer.create(customer)
    res.json(customer);
});


module.exports = router
