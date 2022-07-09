// jshint esversion:9

"use strict";

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    if (req.session.viewCount) {
        req.session.viewCount++;
    } else {
        req.session.viewCount = 1;
    }

    console.log("The users route", req.session);
    res.send(`Hello User. You have visited this page ${req.session.viewCount} times`);
});

module.exports = router;
