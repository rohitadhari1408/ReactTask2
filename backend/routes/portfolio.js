const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = require('../middleware/upload');
const {
  createOrUpdatePortfolio,

  getPortfolios,
  getPortfolioById,
  updatePortfolio

} = require("../controller/portfolioController");

router.post("/portfolios", upload.fields([{ name: "profileImage", maxCount: 1 }, { name: "projectImages", maxCount: 10 }]), createOrUpdatePortfolio);
router.get("/portfolios", getPortfolios);
router.get("/portfolios/:id", getPortfolioById);
router.patch("/portfolios/:id", upload.fields([{ name: "profileImage", maxCount: 1 }, { name: "projectImages", maxCount: 10 }]), updatePortfolio);

module.exports = router;
