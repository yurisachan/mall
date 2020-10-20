import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import module1 from './modules/module1'
import GoodsItem from './modules/GoodsItem'

Vue.use(Vuex)

const state={
    couter: 0,
    arr: [1, 2, 3, 7, 6, 2],
    itemDetails:[]
}
const store = new Vuex.Store({
    //共享状态数据
    state,
    //提交数据修改
    mutations,
    //异步操作
    actions,
    //变异数据
    getters,
    //state模块化
    modules: {
        module1,
        GoodsItem
    }
})

export default store