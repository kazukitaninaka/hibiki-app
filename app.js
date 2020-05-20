const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('./utils/sort');
require('dotenv').config({ path: './config.env' });

const mainRouter = require('./routes/memberRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
const localDB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connected successfully');
  });

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// For static files
app.use(express.static(path.join(__dirname, 'public')));
// For pug integration
app.locals.basedir = path.join(__dirname, 'views');

// Routes
app.use('/', mainRouter);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
