const fs = require('fs');
const path = require('path');

class FileStorageService {
    constructor(uploadDir) {
        this.uploadDir = uploadDir;
        if (!fs.existsSync(this.uploadDir)) {
            fs.mkdirSync(this.uploadDir, {
                recursive: true
            });
        }
    }

    async saveFile(buffer, filename) {
        const filePath = path.join(this.uploadDir, filename);
        fs.writeFileSync(filePath, buffer);
        return filename;
    }

    async deleteFile(filename) {
        const filePath = path.join(this.uploadDir, filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
}

// Untuk upload produk dan spesifikasi
const productUploadService = new FileStorageService('./uploads/products');
const specificationUploadService = new FileStorageService('./uploads/specifications');

module.exports = {
    productUploadService,
    specificationUploadService
};