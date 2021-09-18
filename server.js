const express = require("express");
const { CheckFolders } = require("./Utils/FolderCheck");
const config = require("./config");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv/config");
const port = process.env.PORT;
const app = express();
const IndexRouter = require("./Routes/index");
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection to MongoDB Established");
    })
    .catch((err) => {
        console.log("Failed to Connect to Mongo DataBase");
        console.error(err);
    });

app.use(express.json());
app.use(morgan("dev"));
app.use(
    express.urlencoded({
        extended: true,
    })
);

CheckFolders();

app.get("/", (req, res) => {
    console.log("Hit");
    res.status(200).send({ status: "ok" });
});
app.get("/test", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html");
});

app.use("/", IndexRouter);

app.use("*", (req, res, next) => {
    res.status(404).send(`${req.baseUrl} was not found on this Server!`);
});

app.listen(port, () => {
    console.log("Server has Started Listening on port", port);
});
