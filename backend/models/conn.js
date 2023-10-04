// --------  imports and data
const { Sequelize } = require('sequelize');


// --------  DB connection config
const sequelize = new Sequelize("ticketing_277x", "ticketing_277x_user", "Ghc9oCRn6KlUjles9NZh909IwPQnX8Zt", {
    host: "dpg-ckedriea3ovc73bsog60-a",
    dialect: "postgres",
    dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
});


// ---------  connection test
async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log("connection established");
        return true;
    } catch(error) {
        console.error("connection failed", error);
        return false;
    }
};


//------------  exports
module.exports = {sequelize, testConnection};
