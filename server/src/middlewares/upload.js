const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = "";
        if (file.fieldname === "image") {
            folder = path.join(__dirname, "../../uploads/products");
        } else if (file.fieldname === "spec") {
            folder = path.join(__dirname, "../../uploads/specifications");
        } else {
            folder = path.join(__dirname, "../../uploads/temp");
        }
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
        cb(null, filename);
    }
});

const upload = multer({
    storage
});

module.exports = upload;