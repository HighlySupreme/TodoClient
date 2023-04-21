import axios from 'axios';

const baseURL = "http://localhost:8080"//process.env.APP_REST_HOST;
// AXIOS

//Route interceptor if route is 401
axios.interceptors.response.use(r => r, (e) => {
    return Promise.reject(e)
})

const getBaseUrl = (u) => {
    if(u){
        return process.env.APP_REST_HOST + "/" + u;
    }
    return baseURL;
}

const axiosGet = (uri, params, headers, rest) => {
    return axios.get(uri, {
        baseURL: getBaseUrl(rest),
        params,
        headers: headers
    })
}

const axiosPost = (uri, data, headers, progressFn, rest) => {
    return axios.post(uri, data, {
        baseURL: getBaseUrl(rest),
        headers: headers,
        onUploadProgress: progressFn
    })
}

const axiosPut = (uri, data, headers, rest) => {
    return axios.put(uri, data, {
        baseURL: getBaseUrl(rest),
        headers: headers
    })
}

const axiosDelete = (uri, data, headers, rest) => {
    return axios.delete(uri, {
        baseURL: getBaseUrl(rest),
        headers: headers,
        data
    })
}

const axiosPatch = (uri, data, rest) => {
    return axios.patch(uri, data, {
        baseURL: getBaseUrl(rest),
        data
    })
}

export default {
    "GET": axiosGet,
    "PUT": axiosPut,
    "POST": axiosPost,
    "DELETE": axiosDelete,
    "PATCH": axiosPatch
}
