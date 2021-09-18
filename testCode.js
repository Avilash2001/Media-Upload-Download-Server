require("dotenv/config");
const mongoose = require("mongoose");
const Upload = require("./Schemas/uploads");
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

const fetchUpload = async (fileType, fileName, uploaderName) => {
    await Upload.findOne({
        uFName: fileName,
        uName: uploaderName,
        "meta.fileType": fileType,
    })
        .then((file) => {
            console.log(file);
        })
        .catch((err) => {
            console.error(err);
        });
};
fetchUpload("image", "test", "adwait");
