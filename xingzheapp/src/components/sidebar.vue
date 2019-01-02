<template>
  <div id="box">
      <ul>
        <li class="xz"><span>行者</span></li>
        <router-link tag="li" to="/lushu/tuijianheji" activeClass="brightlight"><div><img src="../../static/1.1.jpg" height="14" width="14" alt=""></div>路书</router-link>
        <router-link tag="li" to="/xingzhebang" activeClass="brightlight"><div><img src="../../static/1.2.jpg" height="14" width="16" alt=""></div>行者帮</router-link>
        <router-link tag="li" to="/saishi" activeClass="brightlight"><div><img src="../../static/1.3.jpg" height="14" width="16" alt=""></div>赛事</router-link>
        <router-link tag="li" to="/xingzhetoutiao" activeClass="brightlight"><div><img src="../../static/1.3.jpg" height="14" width="16" alt=""></div>行者头条</router-link>
        <router-link tag="li" to="/bangzhuzhongxin" activeClass="brightlight"><div><img src="../../static/1.4.jpg" height="14" width="16" alt=""></div>帮助中心</router-link>
        <router-link tag="li" to="/lianxiwomen" activeClass="brightlight"><div><img src="../../static/1.5.jpg" height="14" width="16" alt=""></div>联系我们</router-link>
        <router-link tag="li" to="/zhinengshebei" activeClass="brightlight"><div><img src="../../static/1.6.jpg" height="14" width="16" alt=""></div>智能设备</router-link>
        <!-- <li>路书</li> -->
        <!-- <li>行者帮</li>
        <li>赛事</li>
        <li>行者头条</li>
        <li>帮助中心</li>
        <li>练习我们</li>
        <li>智能设备</li> -->
      </ul>
      
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
  }
  li{
    list-style: none;
  }
  #box{height: 700px; width: 140px; background-color: red;float: left;box-sizing:border-box;background-color: #2d3033;}
  #box ul{overflow: hidden;}
  #box li{margin-top: 20px;cursor: pointer;color: #a8adb2;height: 50px;text-align: center;line-height: 50px;}
  #box li:hover{color: white;background-color: #424344;}
  #box img:hover{color: white;}
  #box .xz{color: white;width: 100%; height: 50px;background-color: #189adb;margin-top: 0px;text-align: center;font-size: 20px;font-weight: bold;}
  #box .xz span{line-height: 50px;}
  #box .xz:hover{background-color:#189adb; line-height: 50px;}
  #box div{position: absolute;left: 10px;}
</style>