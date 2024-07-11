const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userBridevRoutes = require('./routes/userBridevRoute');
const logCopilotRoutes = require('./routes/logCopilotRoute');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', [userBridevRoutes, logCopilotRoutes]);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
