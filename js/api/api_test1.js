const express = require("express")
const router = express.Router()

router.get("/getresult", (req, res) => {
    res.json({result : "OK"})
})

module.exports = router