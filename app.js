require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const usersRouter = require('./routes/usersRouter');
const postsRouter = require('./routes/postsRouter');
const port = process.env.PORT || 8080;
const path = require('path');

// CONNECT TO ONLINE DATABASE
const connect = mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
});
connect.then(
  () => console.log('Connected correctly to MongoDB server'),
  (err) => console.log(err)
);

app.use(
  cors({
    origin: ['https://kurtreyn.com'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://kurtreyn.com');
  res.header('Access-Control-Allow-Headers: origin, content-type, accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Server is Running</h1></body></html>');
});
