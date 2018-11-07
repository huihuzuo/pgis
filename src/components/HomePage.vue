<template>
  <div class="wrap">
    <div class="aside-left">
      <div class="aside-left-title">运维后台系统</div>
      <div class="aside-left-content">
        <navContent/>
      </div>
    </div>
    <div class="aside-right">
      <div class="aside-right-title">right-title</div>
      <div class="aside-right-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import navContent from "./common/navContent"
    export default {
        name: "HomePage",
        components:{
          navContent
        },
        methods:{

        }
    }

</script>

<style scoped lang="scss">
  $mainBg: #ededed;
  $leftBg:#ccc;

  .wrap{
    width:100%;
    height:100%;
    overflow: hidden;
    background-color:$mainBg;
    .aside-left{
      width:200px;
      height:100%;
      float:left;
      //background-color:#000;
      .aside-left-title{
        height: 60px;
        width: 100%;
        color: #FFF;
        background-color: rgba(54, 177, 244, 0.63);
        text-align: center;
        line-height: 60px;
       }
      .aside-left-content{
        width: 100%;
        height: calc(100% - 60px);
        background-color:rgb(84, 92, 100);
      }
    }
    .aside-right{
      width: calc(100% - 200px);
      height: 100%;
      float:left;
      .aside-right-title{
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background-color: white;
        box-shadow: 0 6px 6px rgba(54, 177, 244, 0.06);
      }
      .aside-right-content{
        width: 100%;
        height: calc(100% - 60px);
        background-color:#eee;
      }

    }
  }




</style>
