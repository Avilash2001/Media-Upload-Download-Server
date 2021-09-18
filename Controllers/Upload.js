const multer = require("multer");
const { getNow } = require("../Utils/moment");
const fileExtension = require("file-extension");
const storageIMG = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../uploads/images");
    },
    filename: (req, file, cb) => {
        let now = getNow();
        cb(null, "img-" + now + "." + fileExtension(file.originalname));
    },
});
const storageVID = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../uploads/videos");
    },
    filename: (req, file, cb) => {
        let now = getNow();
        cb(null, "vid-" + now + "." + fileExtension(file.originalname));
    },
});
const storageAUD = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../uploads/audios");
    },
    filename: (req, file, cb) => {
        let now = getNow();
        cb(null, "aud-" + now + "." + fileExtension(file.originalname));
    },
});
const storageOTH = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../uploads/others");
    },
    filename: (req, file, cb) => {
        let now = getNow();
        cb(null, "oth-" + now + "." + fileExtension(file.originalname));
    },
});
exports.uploadIMG = multer({
    storage: storageIMG,
    fileFilter: (req, file, cb) => {
        if (
            ["jpg", "png", "webp", "svg", "jpeg"].indexOf(
                fileExtension(file.originalname)
            ) === -1
        ) {
            return cb(new Error("Wrong extension type"));
        } else {
            cb(null, true);
        }
    },
    // limits: { fieldSize: 2 * 1024 * 1024 },
});
exports.uploadVID = multer({
    storage: storageVID,
    fileFilter: (req, file, cb) => {
        if (
            ["mp4", "mkv", "vlc", "3gp", "mov"].indexOf(
                fileExtension(file.originalname)
            ) === -1
        ) {
            return cb(new Error("Wrong extension type"));
        }
        cb(null, true);
    },
    // limits: { fieldSize: 12 * 1024 * 1024 },
});
exports.uploadAUD = multer({
    storage: storageAUD,
    fileFilter: (req, file, cb) => {
        if (
            ["mp3", "vlc", "3gp", "wav", "ogg"].indexOf(
                fileExtension(file.originalname)
            ) === -1
        ) {
            return cb(new Error("Wrong extension type"));
        }
        cb(null, true);
    },
    // limits: { fieldSize: 8 * 1024 * 1024 },
});
exports.uploadOTH = multer({
    storage: storageOTH,
    fileFilter: (req, file, cb) => {
        cb(null, true);
    },
    // limits: { fieldSize: 20 * 1024 * 1024 },
});
