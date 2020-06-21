const express = require("express");
const path = require("path");
const app = express();

const rootRoute = require("./src/app/routes/rootRoute.js");
const mainScriptRoute = require("./src/app/routes/mainScriptRoute.js");

app.get("/", rootRoute);
app.get("/main.js", mainScriptRoute);
app.listen(3000, () => console.log("Server has run on port 3000"));
