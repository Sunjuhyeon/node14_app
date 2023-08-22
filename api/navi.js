const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('나는 navi.js입니다.')
})
router.get('/sub', (req, res) => {
    res.send('나는 하위 라우터입니다. 주소창에 요청해야해요 부모라우터/sub')
})

module.exports = router;