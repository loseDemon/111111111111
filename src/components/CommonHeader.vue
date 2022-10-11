<template>
  <div class="header-container">
    <div class="l-container">
      <el-button @click="handMenu()" icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <span class="text">首页</span>
    </div>
    <div class="r-container">
      <!-- 头像区域 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="userPic" src="../assets/images/user.png" alt="头像">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    // 组件开关的方法
    handMenu(){
      this.$store.commit("CollapseMenu");
    }
  }
}
</script>
<style lang="less" scoped>
.header-container {
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
  }

  .r-container {
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }

    .el-icon-arrow-down {
      font-size: 12px;
    }
    .userPic{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>