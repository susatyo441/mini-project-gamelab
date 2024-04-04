const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Folder tujuan penyimpanan file
    },
    filename: function (req, file, cb) {
        try {
            const ext = path.extname(file.originalname); // Ekstensi file
            const filename = path.basename(file.originalname, ext); // Nama file tanpa ekstensi
            cb(null,Date.now() + "-" + filename + ext); // Menggunakan hanya nama file tanpa path direktori
        } catch (error) {
            cb(error);
        }
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
