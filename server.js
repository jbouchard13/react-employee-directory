const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3750;

const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('public'));
// app.use(express.static('src'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require('./routes/apiRoutes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
