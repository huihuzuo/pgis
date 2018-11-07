
/*包含用于直接更新state的函数的对象模块*/

import Vue from "vue"

import {
  RECEIVE_NAVLIST
} from "./mutation-types"

export default{
  [RECEIVE_NAVLIST](state,{navList}){
    state.navList=navList
    console.log(navList)

  }
}

