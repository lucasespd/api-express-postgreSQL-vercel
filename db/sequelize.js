const { Sequelize } = require("sequelize");
const pg = require("pg");
let sequelize;

if (process.env.DB_TYPE === "mysql") {
  sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: process.env.MYSQL_HOST,
      dialect: process.env.DB_TYPE,
      port: process.env.MYSQL_PORT,
      dialectOptions: {
        useUTC: false,
      },
      timezone: "America/Argentina/Buenos_Aires",
    }
  );
} else if (process.env.DB_TYPE === "postgres") {
  sequelize = new Sequelize(process.env.POSTGRES_URI);
}

module.exports = sequelize;
