import Mock from "mockjs";

import { zxrs } from "./data/onlinePeople"
// import {fwcs} from "./data/visitNumber"
// import { yhgc } from "./data/peopleConstitute"
// import {wjfw} from "./data/fileServe"
// import {xtrl} from "./data/systemChart"
// Mock.mock("你要拦截的url","什么方式来调用接口",执行的方法 )
// 使用正则表达式获得地址
// Mock.mock("/\/getPortalList/","get",getInfo )
// Mock.mock("/\/getPortalList/","get",{name:'loi',age: "12"} )

const Random = Mock.Random
const getData = req => {
  console.log(req)
  let data = []
  for (let i = 0; i < 10; i++) {
    let post = {
      title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
      icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
      author: Random.cname(), // 随机生成名字
      date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
    }
    data.push(post)
  }
  return data
}
const getData2 = req => {
  console.log(req)
  let chartDatasskc = []
  for (let i = 0; i < 10; i++) {

    let newArticleObject = {
        "name": Random.cname(),//随机生成中文名字
        'qq': /^\d{8,10}$/,
        "mtime": Random.datetime(),//随机生成日期时间

        "stars": Random.natural(0, 5),//随机生成1-5的数字
        "add": Random.region(),
        


    }
    chartDatasskc.push(newArticleObject)
}
  return chartDatasskc
}
Mock.mock("/getData",'get',getData)
Mock.mock("/getData2",'get',getData2)
Mock.mock("/getOnlinePeople","get",zxrs )
// Mock.mock("getvisitNumber","get",fwcs )
// Mock.mock("getPeopleConstitute","get",yhgc )
// Mock.mock("getFileServe","get",wjfw )
// Mock.mock("getSystemChart","get",xtrl )
// export default getData;