const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const upload = require("../middlewares/upload");

router.get("/", productController.getAllProducts);
router.post(
    "/",
    upload.fields([{
            name: "image",
            maxCount: 1
        },
        {
            name: "spec",
            maxCount: 1
        }
    ]),
    productController.createProduct
);

router.put(
    "/:id",
    upload.fields([{
            name: "image",
            maxCount: 1
        },
        {
            name: "spec",
            maxCount: 1
        }
    ]),
    productController.updateProduct
);

router.delete("/:id", productController.deleteProduct);

module.exports = router;