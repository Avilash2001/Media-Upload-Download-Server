const mongoose = require("mongoose");

const UploadsSchema = new mongoose.Schema({
    meta: {
        originalName: { type: String, required: true },
        encoding: { type: String, required: true },
        mimeType: { type: String, required: true },
        fileType: { type: String, required: true },
    },
    size: { type: String, required: true },
    uName: { type: String, required: true },
    uFName: { type: String, required: true },
    destination: { type: String, required: true },
    filename: { type: String, required: true },
    path: { type: String, required: true },
    url: { type: String, required: true },
});
const Upload = mongoose.model("Upload", UploadsSchema);

module.exports = Upload;
