'use strict';
const express = require('express');
const request = require('request');
const auth = require('../middlewares/auth');
const router = express.Router();

//proxy
//
// router.use(/\/fgadmin|\/frontend|\/common|\/live|\/log/, function (req, res, next) {
//     const url = 'http://smartcameratest2.x.163.com' + req.originalUrl;
//     req.pipe(request(url)).on('error', function (err) {
//         console.log(err);
//         next(err);
//     }).pipe(res);
// });
// router.use(/\/fgadmin|\/frontend|\/common|\/live|\/log/, function (req, res, next) {
//     const url = 'http://10.240.176.73:8282' + req.originalUrl;
//     req.pipe(request(url)).pipe(res);
// });


let renderData = {
    title: 'Express',
    bottomLink:[
        {linkName:"发展历程",linkUrl:"/develop"},
        {linkName:"公司介绍",linkUrl:"/index"},
        {linkName:"产品说明",linkUrl:"/technical"},
        {linkName:"解决方案",linkUrl:"/solution"},
        {linkName:"企业案例",linkUrl:"/case"},
        {linkName:"服务流程",linkUrl:"/service"}
    ],
    companyList:[
        {   cover:"/res/img/case-1.png",
            name:"深圳市高训大厦",
            project:"改造项目：中央空调变频节能改造",
            des:"投入运行以来系统节电运行效果十分显著，平均每小时节电56度，该大厦空调每年开机2000小时,节约11.2万元，取得显著的经济效益。"
        },
        {   cover:"/res/img/case-2.png",
            name:"深圳市高训大厦",
            project:"改造项目：中央空调变频节能改造",
            des:"深圳市罗湖区委大厦的三台500冷吨开利 离心式冷水机组,自经变频节能改造后,投 入运行以来系统节电运行效果十分显著,综合平均节电率在25%以上,年节约电费30万 元(空调年开机时间1600小时),取得了显 著的经济效益。"
        },
        {   cover:"/res/img/case-3.png",
            name:"深圳市高训大厦",
            project:"改造项目：中央空调变频节能改造",
            des:"投入运行以来系统节电运行效果十分显著，平均每小时节电56度，该大厦空调每年开机2000小时,节约11.2万元，取得显著的经济效益。"
        },
        {   cover:"/res/img/case-4.png",
            name:"深圳市高训大厦",
            project:"改造项目：中央空调变频节能改造",
            des:"投入运行以来系统节电运行效果十分显著，平均每小时节电56度，该大厦空调每年开机2000小时,节约11.2万元，取得显著的经济效益。"
        }

    ]
};

/* GET home page. */
function fetch(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                let info = JSON.parse(body);
                if (info.code === 200 && info.result) {
                    resolve(info.result);
                } else {
                    reject(info);
                }
            } else {
                reject(error);
            }
        });
    });
}

router.get('/index', function (req, res, next) {
    res.render('index', renderData);
});

router.get('/technical', function (req, res, next) {
    res.render('technical', renderData);
});

router.get('/solution', function (req, res, next) {
    res.render('solution', renderData);
});

router.get('/case', function (req, res, next) {
    res.render('case', renderData);
});

router.get('/service', function (req, res, next) {
    res.render('service', renderData);
});

router.get('/develop', function (req, res, next) {
    res.render('develop', renderData);
});

router.get('/technical', function (req, res, next) {
    res.render('technical', renderData);
});

router.get('/technical_1', function (req, res, next) {
    res.render('technical_1', renderData);
});

router.get('/technical_2', function (req, res, next) {
    res.render('technical_2', renderData);
});

module.exports = router;
