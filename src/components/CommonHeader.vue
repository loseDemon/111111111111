<template>
  <div class="header-container">
    <div class="l-container">
      <el-button @click="handMenu()" icon="el-icon-menu" size="mini" style="margin-right:20px"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.name" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-container">
      <!-- 头像区域 -->
      <el-dropdown @command="handClick">
        <span class="el-dropdown-link">
          <img class="userPic" src="../assets/images/user.png" alt="头像">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="cancle">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Cookie from "js-cookie"
export default {
  data() {
    return {
    }
  },
  methods: {
    // 组件开关的方法
    handMenu() {
      this.$store.commit("CollapseMenu");
    },
    // 登出事件
    handClick(command){
      if(command === 'cancle'){
        Cookie.remove('token');
        // 跳转到登录页面
        this.$router.push('/login')
      }
    }
  },
  computed:{
    // 如何获取store中已经更新好的tagList数据？两种方法：1.this.$store.state.tag.tagList;2.使用mapState方法；
    ...mapState({
       tags: state => state.tag.tagList
    })
  },
  mounted(){
   
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

  .r-container {
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }

    .el-icon-arrow-down {
      font-size: 12px;
    }

    .userPic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .l-container{
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item{
      .el-breadcrumb__inner{
        font-weight: normal;
        &.is-link{
          color: #FFF;
        }
      }
      &:last-child{
        .el-breadcrumb__inner{
          color: skyblue;
          cursor: pointer;
        }
        
      }
    }
  }
}
</style>