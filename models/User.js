const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columnts and configuration
User.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // thi sis equiv ot sql's not null
      allowNull: false,
      // instruct that this is the Primary key
      primaryKey: true
    },
    // define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
              // this means the pw must be at least 4 characters long
      len: [4]
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE

    // pass in out imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    // timestamps: false;lengthdont pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing
    underscored: true,
    // make it so our model name stause lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;