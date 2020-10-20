import axios from 'axios'

export function request(config){
    //创建axios实例
    const axiosInstance=axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
        //headers: headers
    })


    //拦截器

    axiosInstance.interceptors.request.use(config => {
    // Do something before request is sent
    //一般可以用于config信息过滤，请求loading动画，添加token等特殊信息
    return config;
    },error => {
    // Do something with request error
    return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(response => {
    // Do something before response is sent
    return response;
    },error => {
    // Do something with response error
    return Promise.reject(error);
    });


    //真正发送网络请求
    return axiosInstance(config)
}