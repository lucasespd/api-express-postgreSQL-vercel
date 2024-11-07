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
  sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.POSTGRES_HOST,
      dialect: process.env.DB_TYPE,
      dialectOptions: {
        useUTC: false,
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      timezone: "America/Argentina/Buenos_Aires",
      dialectModule: pg,
    }
  );
}

module.exports = sequelize;
