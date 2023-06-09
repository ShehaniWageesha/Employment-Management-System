const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database connection established successfully");
})
const employeeRouter = require('./routes/employee');

app.use('/employee',employeeRouter);

app.listen(port, () => {

    console.log(`server is running on port: ${port}`);
});