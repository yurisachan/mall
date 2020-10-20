export default{
    //下面方法中第二个参数getters可以拿到getters属性
    arrf(state) {
        return n => {
            return state.arr.filter(v => v > n)
        }
    }
}