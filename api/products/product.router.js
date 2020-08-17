const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct
} = require("./product.controller");
router.get("/", checkToken, getProducts);
router.post("/", checkToken, createProduct);
router.get("/:id", checkToken, getProductById);
router.patch("/", checkToken, updateProduct);
router.delete("/", checkToken, deleteProduct);

module.exports = router;
