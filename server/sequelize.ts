import { Sequelize } from "sequelize-typescript";
import { Op, DATE } from "sequelize";

// Override timezone formatting
DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);

  // Z here means current timezone, _not_ UTC
  // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};
require("dotenv").config();
export const sequelize = new Sequelize({
  host:  process.env.hostDatabase,
  username: process.env.usernameDatabase,
  password: process.env.passwordDatabase,
  dialect: "mssql",
  operatorsAliases: Op,
  database: process.env.nameDatabase,
  dialectOptions: {
    options: {
      encrypt: true
    },
    useUTC: false
  },
  define: {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  },
  models: [__dirname + "/domain/models/"],
  logging: false
});