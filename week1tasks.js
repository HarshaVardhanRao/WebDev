const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is listening on port ${port}");
});


app.get('/api/data', (req, res) => {
});

app.post('/api/data', (req, res) => {
});

app.use(express.json());
function asyncFunction() {
  return new Promise((resolve, reject) => {

  });
}

async function main() {
  try {
    const result = await asyncFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch(err => console.error('Error syncing database:', err));