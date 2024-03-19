//create folder 
//move into that folder 
//run command in terminal npm init -y
//open the folde in vs code and run command npm i express

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

const pathRouter = require("./routes/path");

app.use("/api", pathRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const dbConnect = require("./config/dataBase");
dbConnect();

// Default route
app.get("/", (req, res) => {
    res.send("<h1>App started successfully</h1>");
});
