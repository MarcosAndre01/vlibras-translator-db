const { Sequelize } = require('sequelize');
const { Review } = require('./db/models');
const { Translation } = require('./db/models');
require('dotenv').config();

const connection_string = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const sequelize = new Sequelize(connection_string);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const translation = await Translation.create({ text: 'ola', translation: 'OLA', requester: 'alguem' });
  const review = await Review.create({ translationId: translation.id, rating: true, review: 'gostei', requester: 'alguem' });

  const translations = await Translation.findAll();
  const reviews = await Review.findAll();

  console.log(translations);
  console.log(reviews);

})();

