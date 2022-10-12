import Mock from "mockjs";
import homeApi from "./mockServer/home"

// 定义请求的拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData());