const fs = require("fs");
const Uploads = "./uploads";
const Images = "./uploads/images";
const Videos = "./uploads/videos";
const Audios = "./uploads/audios";
const Others = "./uploads/others";
exports.CheckFolders = () => {
    let state = 0;
    let missing = [];

    if (!fs.existsSync(Uploads)) {
        state++;
        missing.push(Uploads);
    }
    if (!fs.existsSync(Images)) {
        state++;
        missing.push(Images);
    }
    if (!fs.existsSync(Videos)) {
        state++;
        missing.push(Videos);
    }
    if (!fs.existsSync(Audios)) {
        state++;
        missing.push(Audios);
    }
    if (!fs.existsSync(Others)) {
        state++;
        missing.push(Others);
    }
    if (state > 0) {
        console.log("WARNING:");
        console.log("This Directories are missing:", missing);
        console.log("Starting Creation of the Directories!");
        missing.map((directory) => {
            fs.mkdirSync(directory);
            console.log("Created:", directory);
        });
        console.log(
            "Directories have been made. Quitting the program. Run this program again to re-run check of the folders."
        );
        process.exit();
    } else if (state === 0) {
        console.log("All Directories are present. Proceeding...");
        return;
    }
};
