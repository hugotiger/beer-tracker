require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const middlewares = require('./middlewares');

// Connect to database
mongoose
  .connect(config.get('db_uri'), {
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
app.use(cors({ origin: config.get('cors_origin') }));
app.use(express.json());

app.use('/api/beers', require('./api/beers'));

// Middlewares that need to be run after route handling
app.use('/api', middlewares.notFound);
app.use('/api', middlewares.errorHandler);

// Serve client build-folder if we're in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

// Start server
const port = config.get('port');
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
