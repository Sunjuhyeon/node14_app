const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('나는 interview.js입니다.')
})

module.exports = router;