<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right:10px">
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
        <el-card style="margin-top:20px;height:430px;">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column v-for="(val,key) in tableLable" :prop="key" :label="val"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <!-- 右侧购买信息 -->
      <el-col :span="16" style="padding-left:10px">
        <!-- 数据 -->
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
        <!-- 折线图 -->
        <el-card style="height:260px">
          <!-- 折线图区域 -->
          <div ref="lineEcharts" style="height: 260px"></div>
        </el-card>
        <!-- 底部两个数据图 -->
        <div class="grash">
          <el-card style="height:260px;width: 48%">
            <!-- 柱状图 -->
            <div ref="BarEcharts" style="height:260px;"></div>
          </el-card>
          <el-card style="height:260px;width: 48%">
          <!-- 饼状图 -->
          <div ref="PieEcharts" style="height:260px;"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from '../api/index.js';
import * as echarts from 'echarts'
export default {
  data() {
    return {
      tableData: [],
      tableLable: {
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
  mounted() {
    // 解构赋值的语法
    getData().then(({ data }) => {
      // 获取后端返回的Data数据
      const { orderData, tableData, videoData, userData } = data.data;
      // console.log(data.data);
      // 赋值给本地的tableData数据
      this.tableData = tableData;

      //获取DOM节点，所以要存放在mounted里边
      // 基于准备好的dom，初始化echarts实例
      const lineEcharts = echarts.init(this.$refs.lineEcharts);
      // 指定图表的配置项和数据
      var LineEchartOption = {};
      //处理X轴的数据 获取手机品牌
      var xAxisData = [];
      for (let index = 0; index < videoData.length; index++) {
        xAxisData[index] = videoData[index].name
      }
      // 将X轴处理好的数据赋值给图表
      LineEchartOption.xAxis = {
        data: xAxisData
      },
        LineEchartOption.legend = {
          data: xAxisData
        }
      // y轴也要定义
      LineEchartOption.yAxis = {};
      // 处理series数据
      LineEchartOption.series = [];
      xAxisData.forEach(key => {
        LineEchartOption.series.push({
          name: key,
          data: orderData.data.map(item => item[key]),
          type: 'line',
        })
      });
      // 使用刚指定的配置项和数据显示图表。
      lineEcharts.setOption(LineEchartOption);


      //柱状图
      //  首先获取DOM元素，初始化Echarts；
      const BarEcharts = echarts.init(this.$refs.BarEcharts);
      // 指定图表的配置项和数据
      var BarEchartsOption = {
        legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: userData.map(item => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name:"新增用户",
              data:userData.map(item => item.new),
              type:'bar'
            },
            {
              name:"活跃用户",
              data:userData.map(item => item.active),
              type:'bar'
            }
          ],
      };
      // 使用刚指定的配置项和数据显示图表。
      BarEcharts.setOption(BarEchartsOption);


      // 饼状图
      const PieEcharts = echarts.init(this.$refs.PieEcharts);
      var PieEchartsOption = {
        tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data:videoData,
              type:'pie'
            }  
          ],
      }
      PieEcharts.setOption(PieEchartsOption);
    });
  }
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

.num {
  display: flex;
  // 按照原来的宽度排列，放不下就换行
  flex-wrap: wrap;
  justify-content: space-between;

  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }

  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
  }

  .detial {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .price {
      font-size: 30px;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
}

.grash {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
