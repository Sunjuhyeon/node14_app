const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('나는 banner.js입니다.')
})

module.exports = router;