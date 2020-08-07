const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routes
app.use('/api', apiRoutes);

// app.use(express.static('public'));
// app.use(express.static('src'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
