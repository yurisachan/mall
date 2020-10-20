import {request} from 'network/request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,vpage){
    let page=0
    if(type=="pop"){
       page=3*vpage-2
    }else if(type=='new'){
       page=3*vpage-1
    }else{
        page=3*vpage
    }
    return request({
        url:'https://picsum.photos/v2/list',
        params:{
            page
        }
    })
}