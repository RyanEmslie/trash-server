const express = require('express');
const mongoose = require('mongoose');

const testData = require('./routes/api/testData');

const path = require('path');

// initialize express
const app = express();
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongo/mLab via mongoose
// Promise based
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use routes
// 'starting' endpoints
app.use('/api/testData/', testData);

app.get('/', (req, res) => res.send('Hello Trash Server!'));

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
