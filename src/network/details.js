import {request} from 'network/request'

export function getDetails(id){
    return request({
        url:`https://picsum.photos/id/${id}/info`,
    })
}