'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // static async findAllPuppies(){
    //   try{
    //     const puppies = await Puppy.findAll()
    //     return puppies;
    //   }
    //   catch(error){
    //     throw new Error(`Error finding all puppies: ${error.message}`)
    //   }
    // }

  };
  Puppy.init({
    name: DataTypes.STRING,
    ageYrs: DataTypes.FLOAT,
    breed: DataTypes.STRING,
    weightLbs: DataTypes.INTEGER,
    microchipped: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Puppy',
  });
  return Puppy;
};
