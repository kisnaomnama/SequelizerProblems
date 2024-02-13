//! migration 
//   name: {
// ?    type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },

  //!model
//   name: {
//?     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   }


//!bulkcreate does the insertInto 
//! Sequelize DataTypes
// STRING: A variable-length string. You can specify a length using Sequelize.STRING(length).
// CHAR: A fixed-length string.
// TEXT: A long text string.
// INTEGER: A 32-bit integer.
// BIGINT: A 64-bit integer.
// FLOAT: Floating-point number.
// REAL: A floating-point number with a precision argument.
// DOUBLE: Double precision floating-point number.
// DECIMAL: A fixed-point number.
// BOOLEAN: Boolean value.
// DATE: A date and time combination.
// DATEONLY: A date without time.
// TIME: A time without a date

//! Sequelize constraint
// validate: { isEmail: true }

// allowNull: false
// primaryKey: true,
// autoIncrement: true
// unique: true // Unique constraint
// defaultValue: 5
// references: { model: 'OtherModel', key: 'id' }
// onUpdate: 'CASCADE'
// onDelete: 'CASCADE'
// comment: 'Your comment here'


// foreignKeyColumn: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'AnotherModel', // Referenced model name
//       key: 'id' // Referenced column name
//     }
