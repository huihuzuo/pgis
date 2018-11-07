<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    text-color="#FFFFFF"
    background-color="#545c64">

    <el-submenu v-for="(title, index) in navList" :key="index" :index="title.index" v-if="title.children">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{title.name}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="(child, i) in title.children" :key="i" :index="child.index" @click="goTo(child)">{{child.name}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item v-else :index="title.index" @click="goTo(title)">
      <i class="el-icon-setting"></i>
      <span slot="title">{{title.name}}</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  import {mapState} from "vuex"

   export default {
      name: "nav",
      data(){
        return{
          navList:[
            {
              "index": "01",
              "name": "信息看板",
              "alias": "infoBoard",
              },
            {
              "index": "02",
              "name": "运行监控",
              "alias": "runningMoniter",
              "children": [
                {
                  "index": "0201",
                  "name": "服务监控",
                  "alias": "serviceMoniter"
                },
                {
                  "index": "0202",
                  "name": "系统监控",
                  "alias": "systemMonitor"
                },
                {
                  "index": "0203",
                  "name": "访问监控",
                  "alias": "visitMonitor"
                }
              ]
            },
            {
              "index": "03",
              "name": "资源中心",
              "alias": "resourceCenter",
              "children":[
                {
                  "index": "0301",
                  "name": "服务管理",
                  "alias": "serviceManage"
                },
                {
                  "index": "0302",
                  "name": "数据管理",
                  "alias": "dataManage"
                },
                {
                  "index": "0303",
                  "name": "标准规范",
                  "alias": "standardRull"
                }
              ]
            },
            {
              "index":"04",
              "name":"授权中心",
              "alias":"authorCenter",
              "children":[
                {
                  "index": "0401",
                  "name": "资源列表",
                  "alias": "resourceList"
                },
                {
                  "index": "0402",
                  "name": "服务申请",
                  "alias": "serviceApply"
                }
              ]
            },
            {
              "index":"05",
              "name":"开发中心",
              "alias":"developCenter",
              "children":[
                {
                  "index": "0501",
                  "name": "开发中心1",
                  "alias": "developCenter1"
                },
                {
                  "index": "0502",
                  "name": "开发中心2",
                  "alias": "developCenter2"
                }
              ]
            },
            {
              "index":"06",
              "name":"系统管理",
              "alias":"systemManage",
              "children":[
                {
                  "index": "0601",
                  "name": "用户管理",
                  "alias": "userManage"
                },
                {
                  "index": "0602",
                  "name": "单位管理",
                  "alias": "unitManage"
                },
                {
                  "index": "0603",
                  "name": "权限管理",
                  "alias": "rightManage"
                }
              ]
            }
          ]
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath)
        },
        goTo(title){
          this.$router.push({
            name:title.alias,
          })
        },
      },
      computed:{
       ...mapState["navList"]
      },
      mounted(){
        this.$store.dispatch("getNavList")
      },
      created(){

      }

    }
</script>

<style scoped lang="scss">

</style>
