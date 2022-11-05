//src/network/detail.js
import { request } from 'network/request.js'
export function getdetaildata(iid) {
    ///detail?iid=1jw0sr2
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function getrecommend() {
    return request({
        url: '/recommend'
    })
}