import axios from './axiosAlias'
export default function (config) {
    const instance=axios.create({
        timeout:5000
    })
    instance.interceptors.request.use(res=>res,rej=>console.log(rej))
    instance.interceptors.response.use(res=>res.data,rej=>console.log(rej))
    return instance(config)
}