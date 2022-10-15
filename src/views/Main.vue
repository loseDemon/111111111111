<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="auto"><common-aside /></el-aside>
      <el-container>
        <!-- 顶部区域 -->
        <el-header><common-header /></el-header>
        <!-- 面包屑 -->
        <common-tag />
        <!-- 主体内容区域 -->
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../../src/components/CommonAside.vue';
import CommonHeader from '../../src/components/CommonHeader.vue';
import CommonTag from '../../src/components/CommonTag.vue';


import '../api/mock'
export default {
  components:{
    CommonAside,
    CommonHeader,
    CommonTag
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