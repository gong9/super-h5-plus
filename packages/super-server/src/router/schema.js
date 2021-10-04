const express = require('express');
const fs = require('fs')
const multer = require('multer');
const path = require('path')

const router = express.Router();
const upload = multer({
    temp: path.join(__dirname, 'temp')
});

const resMesSuccess = {
    code: 0,
    data: {},
    message: 'success'
}
const resMesFail = {
    code: -1
}

// 预览 保存组件信息
router.post('/save', function (req, res) {
    const schemaStr = JSON.stringify(req.body.params);

    try {
        fs.writeFileSync(path.join(__dirname, '../../temp/db.txt'), schemaStr)
    } catch (err) {
        console.error(err)
    }
    res.json({
        ...resMesSuccess
    })
});

// 预览 读取组件信息
router.get('/getSchema', (req, res) => {
    let resData
    try {
        resData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../temp/db.txt'), 'utf8'))
    } catch (err) {
        console.error(err)
        resData = {}
    }
    res.json({
        ...resMesSuccess,
        data: {
            resData
        }
    })
})

// 下载 组件信息
router.get('/download', (req, res) => {
    const filepath = path.join(__dirname, '../../temp/db.txt');
    res.download(filepath);
})

// 上传 组件信息
router.post('/upload', upload.single('file'), function (req, res) {
    const compFileBuffer = req.file.buffer
    try {
        fs.writeFileSync(path.join(__dirname, '../../temp/db.txt'), compFileBuffer)
    } catch (error) {
        res.json({
            ...resMesFail,
            message: error
        })
    }
    res.json(resMesSuccess)
});


module.exports = router;