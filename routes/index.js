// jshint esversion:9

"use strict";

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    if (req.session.viewCount) {
        req.session.viewCount++;
    } else {
        req.session.viewCount = 1;
    }

    console.log("The root route -> ", req.session);
    res.send(`<h1>Hello there. You have visited this page ${req.session.viewCount} times </h1>`);
});

module.exports = router;
