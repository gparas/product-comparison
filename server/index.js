const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url = `mongodb+srv://root:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0.csqu9.mongodb.net/test?retryWrites=true`;

const apiroutes = require('./routes');

app.use('/', apiroutes);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000);
    console.log('database connected');
  })
  .catch((err) => console.log(err));
