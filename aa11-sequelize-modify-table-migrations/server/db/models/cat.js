'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {

    static associate(models) {
      // define association here
    }
  };
  Cat.init({
    name: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    age:{
      type: DataTypes.DECIMAL(2,2),
      validate: {
        len: [2,10]
      }
    } 
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};
