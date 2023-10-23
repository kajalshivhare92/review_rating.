const multer = require("multer");
const path = require("path");

const imageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "..", "/uploads/user"));
    },
    filename: (req, file, callback) => {
        // var! ext = file.orginalname .substring(file.originalname.indexOf(","));
        callback(null, `image_${Date.now()}.${file.originalname}`);
    },
});

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Only image is allowed"));
    }
};
const userUpload = multer({
    storage: imageConfig,
    fileFilter: isImage,
});

module.exports ={
 userUpload,
};


