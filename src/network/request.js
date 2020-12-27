import request from './index'
function requestone() {
    return request({
        baseURL:'http://152.136.185.210:8000/api/w6',
        url:'home/multidata'
    })
}
export default requestone
