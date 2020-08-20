require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const middlewares = require('./middlewares');
const events = require('./api/events');
const total = require('./api/total');

console.log(require('dotenv'));
console.log(process.env.DB_URI);

// Connect to database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('Database connected'));

// Initialize express app
const app = express();

// Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors());
// app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use('/api/events', events);
app.use('/api/total', total);

// Middlewares that need to be run after route handling
app.use('/api', middlewares.notFound);
app.use('/api', middlewares.errorHandler);

app.use(express.static('../client/public'));

// app.get('*', (req, res) => {
//   res.sendFile('haha');
// });

// Start server
const port = process.env.PORT || 1337;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
