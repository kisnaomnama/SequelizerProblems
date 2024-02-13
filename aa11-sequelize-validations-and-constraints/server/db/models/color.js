'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [2,20],
       mustEndWithY(value){
          if(value[value.length-1] === 'y'){
            throw new Error("must end with y")
          }
        }
      }
    }
  },
 {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
