// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const { DataTypes } = require('sequelize');
// const process = require('process');

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require('../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, {
//       host: config.host,
//       dialect: config.dialect
//     });
// }

// fs.readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       !file.includes('.test.js')
//     );
//   })
//   .forEach(file => {
//     try {
//       const model = require(path.join(__dirname, file))(sequelize, DataTypes);
//       db[model.name] = model;
//     } catch (error) {
//       console.error(`Error loading model ${file}:`, error);
//     }
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
