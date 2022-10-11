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

        <!-- 表单购买信息 -->
        <el-card style="margin-top:20px;height:460px;">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column  v-for="(val,key) in tableLable" :prop="key" :label="val"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <!-- 右侧购买信息 -->
      <el-col :span="16">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{ display:'flex',padding: 0}">
            <!-- 图标 -->
          <i class="icon" :class="`el-icon-${item.icon}`"></i>
          <!-- 动态绑定颜色：style="{background:item.color}" -->
          <!-- 今日和收入种类 -->
          <div class="detial">
            <p class="price">{{ item.value}}</p>
            <p class="desc">{{ item.name}}</p>
          </div>
        </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'oppo',
          todayBuy: 500,
          monthBuy: 3500,
          totalBuy: 22000
        },
        {
          name: 'vivo',
          todayBuy: 300,
          monthBuy: 2200,
          totalBuy: 24000
        },
        {
          name: '苹果',
          todayBuy: 800,
          monthBuy: 4500,
          totalBuy: 65000
        },
        {
          name: '小米',
          todayBuy: 1200,
          monthBuy: 6500,
          totalBuy: 45000
        },
        {
          name: '三星',
          todayBuy: 300,
          monthBuy: 2000,
          totalBuy: 34000
        },
        {
          name: '魅族',
          todayBuy: 350,
          monthBuy: 3000,
          totalBuy: 22000
        }
      ],
      tableLable:{
          name: "课程",
          todayBuy: "今日购买",
          monthBuy: "本月购买",
          totalBuy: "总购买"
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "s-opportunity",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "box",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-promotion",
          color: "#5ab1ef",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }

  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .access {
      color: #999;
    }
  }
}

.login-info {
  p {
    line-height: 20px;
    font-size: 14px;
    color: #999;
    margin-left: 20px;

    span {
      color: #666;
      margin-left: 20px;
    }
  }
}
.num{ 
  display: flex;
  // 按照原来的宽度排列，放不下就换行
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
  .icon{
    width: 80px;
    height: 80px;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
  }
  .detial{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price{
    font-size: 30px;
    margin-bottom: 10px; 
    }
    .desc{
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
}
</style>
