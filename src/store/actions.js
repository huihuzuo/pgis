
import {
  RECEIVE_NAVLIST
} from "./mutation-types"

import {
  reqNavList
}from "../api"

export default {
  async getNavList({commit},callback){
    const result=await reqNavList()
    if(result.code===0){
      const navList=result.data
      console.log(navList)
      commit(RECEIVE_NAVLIST,{navList})

    }
    callback && callback()

  }
}
