export default {
    state: {
        id: null
    },
    mutations: {
        idChange(state,id){
            state.id=id
        }
    },
    actions: {
        // idChange(context, payload) {
        //     return new Promise(resolve=>{
        //         context.commit('idChange',payload)
        //         resolve('请求成功了')
        //     })
        // }
    },
    getters: {

    },
    modules: {

    }
}