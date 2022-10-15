import Mock from "mockjs";
import homeApi from "./mockServer/home"
import permission from "./mockServer/permission"
// 定义请求的拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData());

Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)