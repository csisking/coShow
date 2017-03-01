'use strict';

const request = require('request');
// const logger = require('./logger');

function fetch(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
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



module.exports = function (req, res, next) {
    let body = {};

    let key = 'smartcamera_buy_pc_fg_sessionid';

    // let value = req.cookies.get('smartcamera_buy_pc_fg_sessionid', {
    //     signed: false
    // });

    let value = req.cookies[key];
    if (!value) {
        next();
    }

    let j = request.jar();
    let c = request.cookie(key + '=' + value);
    let url;
    if (process.env.NODE_ENV === 'development') {
        // url = 'http://smartcameratest2.x.163.com/fgadmin/checkLogin?tm=' + new Date().getTime();
        url = 'http://10.240.178.132:9999/fgadmin/checkLogin?tm=' + new Date().getTime();
    } else {
        url = 'http://x.163.com/fgadmin/checkLogin?tm=' + new Date().getTime();
    }

    j.setCookie(c, url);


    fetch({
            url: url,
            jar: j
        })
        .then(function (data) {
            // success
            console.log(data);
            req.auth = data;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
            // next(error);
        });
};
