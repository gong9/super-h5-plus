const express = require('express');
const fs = require('fs')

const router = express.Router();

// 预览 保存组件信息
router.post('/save', function (req, res) {
    const schemaStr = JSON.stringify(req.body.params);

    try {
        fs.writeFileSync('db.txt', schemaStr)
    } catch (err) {
        console.error(err)
    }
    res.json({
        code: 0,
        data: {},
        message: 'success'
    })
});

// 预览 读取组件信息
router.get('/getSchema', (req, res) => {
    let resData
    try {
        resData = JSON.parse(fs.readFileSync('db.txt', 'utf8'))
    } catch (err) {
        console.error(err)
        resData = {}
    }
    res.json({
        data: {
            resData
        },
        message: 'success'
    })
})

module.exports = router;