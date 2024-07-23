// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const sequelize = require('./config/database');
// const userBridevRoutes = require('./routes/userBridevRoute');
// const logCopilotRoutes = require('./routes/logCopilotRoute');
// const authRoutes = require('./routes/authRoute');
// const logDailyBridevRoute = require('./routes/logDailyBridevRoute');
// const logSummaryRoute = require('./routes/logSummaryRoute');
// const userRoutes = require('./routes/userRoute');
// require('dotenv').config();

// const app = express();
// const PORT = 3000;

// app.use(cors({
//   origin: 'https://fe-monitoring-copilot-k4sb3rrmz-oktavianbayuws-projects.vercel.app:3001',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization',  'Insert-Type']
// }));


// app.use(bodyParser.json());
// app.use('/api', [
//   userRoutes,
//   authRoutes,
//   userBridevRoutes, 
//   logCopilotRoutes,
//   logDailyBridevRoute,
//   logSummaryRoute
// ]);

// sequelize.sync()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


// perubahan 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const userBridevRoutes = require('./routes/userBridevRoute');
const logCopilotRoutes = require('./routes/logCopilotRoute');
const authRoutes = require('./routes/authRoute');
const logDailyBridevRoute = require('./routes/logDailyBridevRoute');
const logSummaryRoute = require('./routes/logSummaryRoute');
const userRoutes = require('./routes/userRoute');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*', // Anda bisa mengganti dengan origin yang diperlukan
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Insert-Type']
}));

app.use(bodyParser.json());

app.use('/api', [
  userRoutes,
  authRoutes,
  userBridevRoutes, 
  logCopilotRoutes,
  logDailyBridevRoute,
  logSummaryRoute
]);

app.get('/', (req, res) => res.send('Hello World'));

module.exports = app;
