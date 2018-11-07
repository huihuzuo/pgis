/*
使用mockjs提供多个mock数据接口
 */
import Mock from 'mockjs'

import data from './Data/navList.json' // 自动将json数据解析为js的对象

// mock navList数据的接口
Mock.mock('/navList', {code: 0, data: data.navList})


// 当前模块不需要向外暴露任何数据, 只需要被加载运行一次即可
