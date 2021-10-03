const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

//路由
app.use('/schema', require('./router/schema'));


app.listen(8888, () => {
    console.log('server start');
});