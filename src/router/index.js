//此文件为配置路由的文件


import Vue from 'vue'
import Router from 'vue-router'

import HomePage from "../components/HomePage.vue"

//信息看板组件
import infoBoard from "../components/routeComponents/infoBoard.vue"

//运行监控组件
import serviceMoniter from "../components/routeComponents/serviceMoniter.vue"
import systemMonitor from "../components/routeComponents/systemMonitor.vue"
import visitMonitor from "../components/routeComponents/visitMonitor.vue"

//资源中心组件
import serviceManage from "../components/routeComponents/serviceManage.vue"
import dataManage from "../components/routeComponents/dataManage.vue"
import standardRull from "../components/routeComponents/standardRull.vue"

//授权中心下的组件
import resourceList from "../components/routeComponents/resourceList.vue"
import serviceApply from "../components/routeComponents/serviceApply.vue"

//开发中心下的组件
import developCenter1 from "../components/routeComponents/developCenter1.vue"
import developCenter2 from "../components/routeComponents/developCenter2.vue"

//系统管理下的组件
import userManage from "../components/routeComponents/userManage.vue"
import unitManage from "../components/routeComponents/unitManage.vue"
import rightManage from "../components/routeComponents/rightManage.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/HomePage"
    },

    {
      path:"/HomePage",
      component:HomePage,
    },

    //信息看板栏的路由
    {
      path:"/infoBoard",
      name:"infoBoard",
      component:infoBoard,
    },

    //运行监控栏的路由
    {
      path:"/serviceMoniter",
      name:"serviceMoniter",
      component:serviceMoniter,
    },
    {
      path:"/systemMonitor",
      name:"systemMonitor",
      component:systemMonitor,
    },
    {
      path:"/visitMonitor",
      name:"visitMonitor",
      component:visitMonitor,
    },

    //资源中心栏下的路由
    {
      path:"/serviceManage",
      name:"serviceManage",
      component:serviceManage,
    },
    {
      path:"/dataManage",
      name:"dataManage",
      component:dataManage,
    },
    {
      path:"/standardRull",
      name:"standardRull",
      component:standardRull,
    },

    //授权中心栏下的路由
    {
      path:"/resourceList",
      name:"resourceList",
      component:resourceList,
    },
    {
      path:"/serviceApply",
      name:"serviceApply",
      component:serviceApply,
    },

    //开发中心栏下的路由
    {
      path:"/developCenter1",
      name:"developCenter1",
      component:developCenter1,
    },
    {
      path:"/developCenter2",
      name:"developCenter2",
      component:developCenter2,
    },

    //系统管理下的路由
    {
      path:"/userManage",
      name:"userManage",
      component:userManage,
    },
    {
      path:"/unitManage",
      name:"unitManage",
      component:unitManage,
    },
    {
      path:"/rightManage",
      name:"rightManage",
      component:rightManage,
    },

  ]
})
