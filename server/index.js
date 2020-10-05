require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const categoryRoutes = require('./routes/category');

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use('/', categoryRoutes);

app.get('/', (req, res, next) => {
  res.send('running node-api');
});

mongoose
  .connect(
    `mongodb+srv://root:${process.env.MONGO_PASSWORD}@cluster0.csqu9.mongodb.net/test?retryWrites=true`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(3000, console.log('Server started at porst 3000'));
  })
  .catch((err) => console.log(err));
