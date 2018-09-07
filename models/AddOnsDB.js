var Sequelize = require("sequelize");
var sequelize = require("../config/connection");
var orm = require("../config/orm.js")

//mimic whats in the database

// var addChosen = sequelize.define("add_ons",
// {
//   chosen: {
//     type: Sequelize.BOOLEAN,
//     allowNull : true
//   }
// });

var Add = sequelize.define("add_ons",
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

  Add.sync();


  module.exports = Add;
  // module.exports = addChosen;
