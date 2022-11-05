//network/home.js
import { request } from 'network/request.js'
export function getmultidata() {
    return request({ url: '/home/multidata' })
}
//network/home.js
export function getdata(type, page) {
    ///home/data?type=sell&page=1
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}