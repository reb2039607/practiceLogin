//npm stuff

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../api/routes");
const app = express();
const PORT = 3000;

//==========================================================//


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));