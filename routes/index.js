const router = require('express').Router();

router.get("/", (req, res) => res.send("Hellop World"));

router.use("/users", require('./users'));

module.exports = router;