<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px"><common-aside /></el-aside>
      <el-container>
        <!-- 顶部区域 -->
        <el-header><common-header /></el-header>
        <!-- 主体内容区域 -->
        <el-main><router-view></router-view>></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../../src/components/CommonAside.vue';
import CommonHeader from '../../src/components/CommonHeader.vue';
export default {
  components:{
    CommonAside,
    CommonHeader
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.el-header{
  padding: 0;
}
.el-menu{
  border: none;
}
</style>