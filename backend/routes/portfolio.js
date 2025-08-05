const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = require('../middleware/upload');
const {
  createOrUpdatePortfolio,
  uploadPortfolio,
  getPortfolios,
  getPortfolioById,
  updatePortfolio

} = require("../controller/portfolioController");

router.post("/portfolios", uploadPortfolio, createOrUpdatePortfolio);
router.get("/portfolios", getPortfolios);
router.get("/portfolios/:id", getPortfolioById);
router.put("/portfolios/:id", uploadPortfolio, updatePortfolio);

module.exports = router;
