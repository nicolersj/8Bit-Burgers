var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

//mimic whats in the database

var Condiment = sequelize.define("condiments",
{
    id:{
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4

    },
    product: {
      type: Sequelize.STRING,
      allowNull : false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull : false
    },
    image: {
      type: Sequelize.BLOB,
      allowNull : false
    },
    chosen: {
      type: Sequelize.BOOLEAN,
      allowNull : false
    }
  },
  {
      freezeTableName: true,
    timestamps: false
  });

  Condiment.sync();

  module.exports = Condiment;
