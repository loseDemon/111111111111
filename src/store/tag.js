export default {
    state: {
        isCollapse: false, //用于控制菜单的展开还是收起
        tagList: [{ //用于存放面包屑的数据
            path: "/",
            name: "home",
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
        }]
    },
    mutations: {
        // 定义用于开关的方法
        CollapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        // 用于处理面包屑数据的方法，调用该方法可以将aside数据压入tagList;接受参数的：第一个是固定写法：state；第二个是接受参数的变量；
        SelectMenu(state, val) {
            // 判断是否为首页,首页不添加
            if (val.name !== 'home') {
                const IndexFlag = state.tagList.findIndex(item => item.name === val.name);
                // 如果不存在，返回-1，添加到tagList
                if (IndexFlag === -1) {
                    state.tagList.push(val);
                }
            }
        },
        // 处理tag数据，当点击删除时候，调用该方法，对taglist数组进行操作。
        closeMenu(state, item) {
            const index = state.tagList.findIndex(vale => vale.name === item.name)
            state.tagList.splice(index, 1);
        }
    }
}