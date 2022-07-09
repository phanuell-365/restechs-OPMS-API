// jshint esversion:9

"use strict";

const sequelize = require("../config.db");
const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const Sessions = new SequelizeStore({
    db: sequelize,
});


module.exports = Sessions;