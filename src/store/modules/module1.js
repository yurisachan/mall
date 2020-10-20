export default {
    state:{
        name:'yurisa'
    },
    mutations:{
        changeName(state,newName){
            state.name=newName
        }
    },
    getters:{
        wholeName(state){
            return state.name+' chan'
        }
    },
    actions:{
        //当前context是指此模块,可以拿到rootState、rootGetters
        asyncChangeName(context,payload){
            return new Promise(resolve=>{
                setTimeout(() => {
                    console.log(context);
                    
                    context.commit("changeName",payload)
                    resolve('异步修改名字成功')
                }, 1000)
                
            })
        }
    },
    modules:{}
}