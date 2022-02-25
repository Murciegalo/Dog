const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connected'))
  .catch( err => console.log(err))


const app = express()

app.listen(process.env.PORT || 5000, () => console.log('Server Up'))