export default {
    state: {
        isCollapse: false //用于控制菜单的展开还是收起
    },
    mutations: {
        // 定义用于开关的方法
        CollapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}