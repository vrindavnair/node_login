

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();


// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
   
  });

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});