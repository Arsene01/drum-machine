const path = require("path");
const projectDir = require("../projectDir.js");

module.exports = (req, res) => {
  console.log("Request for main.js has been recieved.");
  res.sendFile(path.join(projectDir(), "dist", "app", "main.js"));
};
