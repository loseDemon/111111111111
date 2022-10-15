<template>
  <div class="login-container">
    <el-form label-width="70px" ref="form" :model="form" :rules="rules" :inline="true">
      <h3 class="login-title">系统登录</h3>
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密  码:" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit()" style="margin-left:105px;margin-top: 10px">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '../api/index'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          trigger: "blur",
          message: "请输入用户名"
        }],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "请输入密码"
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      // 设置token
      // const token = Mock.Random.guid()


      // 校验通过
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if (data.code === 20000) {
              // 将token信息存到cookie方便不同页面之间通信
              Cookie.set('token', data.data.token)
              // 跳转到首页
              this.$router.push('/home')
            }else{
              this.$message({
                showClose: true,
                message: data.data.message,
                type: 'error'
              });
            }
          })
        }
      })


    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;

  .login-title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }

  .el-form-item {
    .el-input {
      width: 198px;
    }
  }
}
</style>