const { hostAddress } = require("../config");
const Upload = require("../Schemas/uploads");
const rs = require("randomstring");
const {
    uploadIMG,
    uploadAUD,
    uploadVID,
    uploadOTH,
} = require("../Controllers/Upload");

const router = require("express").Router();

const createUpload = async (res, body, file) => {
    const key = rs.generate({ alphanumeric: true, length: 8 });
    let newUpload = new Upload({
        meta: {
            originalName: file.originalname,
            encoding: file.encoding,
            mimeType: file.mimetype,
            fileType: body.fileType,
        },
        size: file.size,
        uName: body.uName,
        uFName: key,
        destination: file.destination,
        filename: file.filename,
        path: file.path,
        url: hostAddress + "srv/" + key,
    });
    await newUpload
        .save()
        .then((save) => {
            res.status(200).send({
                url: save.url,
                body: body,
                file: file,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({
                error: "Server is facing some issues at the moment",
                message: err.message,
            });
        });
};

const fetchUpload = async (res, key) => {
    await Upload.findOne(
        {
            uFName: key,
        },
        { path: 1 }
    )
        .then((file) => {
            res.status(200).sendFile(file.path);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({
                error: "Server is facing some issues at the moment",
                message: err.message,
            });
        });
};

router.post("/upld/img", [uploadIMG.single("file")], (req, res) => {
    createUpload(res, req.body, req.file);
});
router.post("/upld/vid", uploadVID.single("file"), (req, res) => {
    createUpload(res, req.body, req.file);
});
router.post("/upld/aud", uploadAUD.single("file"), (req, res) => {
    createUpload(res, req.body, req.file);
});
router.post("/upld/oth", uploadOTH.single("file"), (req, res) => {
    createUpload(res, req.body, req.file);
});

router.get("/srv/:key", (req, res) => {
    let { key } = req.params;
    if (!key) {
        res.status(400).send({ error: "Url failed to meet the needs" });
    } else {
        fetchUpload(res, key);
    }
});

module.exports = router;
