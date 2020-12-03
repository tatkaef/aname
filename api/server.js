const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ hello: "node 36 WOW! IT'S WORKING!!!!!" });
});
module.exports = server;
