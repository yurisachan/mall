export default{
    submit(context, payload) {
        return new Promise(resolve => {
            setTimeout(() => {
                // console.log(payload);
                context.commit('countSubmit',payload)
                resolve('请求成功了')
            }, 2000);
        })
    }
}