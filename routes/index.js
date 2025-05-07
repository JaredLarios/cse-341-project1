const router = require('express').Router();

router.get("/", (req, res) => res.send("Hellop World"));

module.exports = router;