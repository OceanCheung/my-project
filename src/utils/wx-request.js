import { baseUrl } from '@/config/url.js';
const request = (serviceUrl, method = 'POST', data = {}, contentType = 'application/x-www-form-urlencoded') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + serviceUrl, // 仅为示例，并非真实的接口地址
            method: method,
            data: data,
            headers: {
                'content-type': contentType //默认值
                //其余两个常用选项： application/json、multipart/form-data
            },
            success: res => {
                console.log('成功')
                resolve(res.data);
            },
            fail: res => {
                console.log('失败')
                reject(false);
            },
            complete: () => {}
        });
    });
}
export {
    request
}