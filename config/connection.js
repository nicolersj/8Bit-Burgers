var sequelize = require("sequelize");


var sequelize = new sequelize("burger_bitdb", "root", "1875Njr1875",{
    host: "localhost",
    port: 3306,
    dialect: "mysql",


        pool:{
            max: 5,
            min: 0,
            idle: 10000
        }

});


module.exports = sequelize;
