<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!-- 左侧登录信息 -->
        <el-card class="box-card">
          <!-- 上边头像区域 -->
          <div class="user">
            <img src="../assets/images/user.png" alt="">
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2022-10-10</span></p>
            <p>上次登录地点：<span>大连</span></p>
            <p>上次登录IP：<span>10.101.5.150</span></p>
          </div>
        </el-card>
</el-col>
      <!-- 右侧购买信息 -->
      <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.user{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .userinfo{
      .name{
        font-size: 32px;
        margin-bottom: 10px;
      }
      .access{
        color: #999;
      }
    }
 }
.login-info{
    p{
      line-height: 20px;
      font-size: 14px;
      color: #999;
      margin-left: 20px;
      span{
        color:#666;
        margin-left: 20px;
      }
    }
  }
</style>
