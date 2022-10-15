<template>
  <div class="TagContainer">
    <el-tag
      v-for="(item,index) in tags"
      :key="item.path"
      :closable = "item.name != 'home'"    
      :effect="$route.name == item.name ? 'dark': 'plain'"
      @click="ChangeMenu(item)"
      @close="CloseMenu(item,index)"
      size="small"
    > 
    <!-- closable:关闭按钮；effect：选中有颜色，未选中镂空 -->
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState,mapMutations} from 'vuex'
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    
    // Tag显示的内容也需要从store获取
      ...mapState({
        tags: state => state.tag.tagList
      })
  },
  methods:{
    ...mapMutations(['closeMenu']),
    // 点击tag，页面也跳转。
    ChangeMenu(item){
      this.$router.push({name: item.name})
    },
    // 点击tag删除，面包屑删除，要调用tag中的closemenu方法
    CloseMenu(item,index){
      this.closeMenu(item)
      // 当前数组中的数据：打开了几个菜单页面。
      const len = this.tags.length;
      // 删除之后的跳转逻辑
      if(item.name !== this.$route.name){
        // 代表，如果删除的不是当前已经激活的标签，不做操作，也就是说：要操作tagList里边的标签。
        return
      }
      // 如果删除的是最后一个标签，往左跳转。
      if(index === len){
        this.$router.push({
          name: this.tags[index-1].name
        })
      }else{
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
};
</script>
<style lang="less" scoped>
.TagContainer{
  padding: 20px;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }

}
</style>