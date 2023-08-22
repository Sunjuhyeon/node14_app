const app = require('express')();
const navi = require('./api/navi')
const banner = require('./api/banner')
const interview = require('./api/interview')

// 라우터
app.use('/', banner);
app.use('/nav', navi);
app.use('/interview', interview);

app.listen(8000, () => {
    console.log("8000번 서버구동중")
})