const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(apiRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/employee', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.listen(PORT, function () {
  console.log(`Server now listening on PORT ${PORT}!`);
});
