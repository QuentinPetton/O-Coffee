const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");

router.get('/',mainController.boutiquePage);

module.exports = router;