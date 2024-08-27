const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");

router.get('/:id',mainController.detailsPage);

module.exports = router;