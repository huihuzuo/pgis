/*包含n个请求函数的模块，根据Api接口文档进行设计*/

import ajax from "./ajax.js"


 /*获取信息*/
export const reqNavList = () => ajax("navList")


