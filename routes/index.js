const router = require('express').Router();

router.get("/", (req, res) => res.send("Hellop World"));

router.use("/contacts", require('./contacts'));

module.exports = router;