const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();


connection_string = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const sequelize = new Sequelize(connection_string);

const Hit = require('./db/models/hit')(sequelize, DataTypes);


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const hit = new Hit({
    text: 'ola mundo',
    hits: 3
  });
  await hit.save();
  console.log(hit);
})();

