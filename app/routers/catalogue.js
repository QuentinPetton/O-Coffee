const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");
//Catalogue
router.get("/", mainController.listPage);
// Catalogue filtre
router.get("/categorie", mainController.searchCategorie);

module.exports = router;
