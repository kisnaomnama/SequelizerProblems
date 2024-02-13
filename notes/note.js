//! migration 
//   name: {
//*    type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },

  //!model
//   name: {
//*     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   }
/**
* name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 20],
          msg: "name must be between 2 and 20 characters"
        },
        mustEndWithY(value) {
          if (value[value.length - 1] === 'y') {
            throw new Error("name must end with y")
          }
        }
      }
    }
 */


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


// The queryInterface object in Sequelize provides methods for performing various database operations such as creating, altering, and dropping tables, columns, indexes, and constraints. Here's a list of some commonly used methods available in the queryInterface object:

// Creating Tables:

// createTable(tableName, attributes, options): Creates a new table with the specified name, attributes, and options.
// Altering Tables:

// !addColumn(tableName, attributeName, attributeDefinition): Adds a new column to an existing table.
// !removeColumn(tableName, attributeName): Removes a column from an existing table.
//! renameColumn(tableName, oldColumnName, newColumnName): Renames a column in an existing table.
// !changeColumn(tableName, attributeName, dataTypeOrOptions): Changes the definition of a column in an existing table.
//? Dropping Tables:

// *dropTable(tableName, options): Drops (deletes) an existing table.
//? Adding Constraints:

// *addConstraint(tableName, options): Adds a constraint to a table.
// *removeConstraint(tableName, constraintName): Removes a constraint from a table.
// Adding Indexes:

// *addIndex(tableName, options, rawAttributes): Adds an index to a table.
// *removeIndex(tableName, indexName): Removes an index from a table.
// Raw SQL Execution:

// sequelize.query(): Executes a raw SQL query.
// Seeding Data:

// bulkInsert(tableName, records, options): Inserts multiple records into a table efficiently.
// bulkDelete(tableName, where, options): Deletes multiple records from a table efficiently.
// bulkUpdate(tableName, values, where, options): Updates multiple records in a table efficiently.
// Other Operations:

// describeTable(tableName, options): Describes the structure of a table.
// showAllTables(): Lists all tables in the database.
