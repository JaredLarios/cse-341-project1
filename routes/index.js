const bodyParser = require('body-parser');
const router = require('express').Router();

router.get("/", (req, res) => res.send("Hello World"));

router.use(bodyParser.json());
router.use("/contacts", require('./contacts'));

module.exports = router;