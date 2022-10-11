import Vue from "vue";
import Vuex from "vuex";
import tag from "./tag.js"
Vue.use(Vuex);

// 创建Vuex实例化,并且暴露实例

export default new Vuex.Store({
    modules: {
        tag
    }
});