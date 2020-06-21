const path = require("path");
const projectDir = require("../projectDir.js");

module.exports = (req, res) => {
  console.log("Request to root has been recieved.");
  res.sendFile(path.join(projectDir(), "index.html"));
};
