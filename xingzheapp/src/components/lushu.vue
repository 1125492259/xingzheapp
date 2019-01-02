<template>
  <div>
  	 <header v-show="this.$store.state.isShow">
  	 	<img src="../assets/2.1.jpg" height="200" width="1123" alt="">
  	 	<div class="lushu">
  	 	   <h1>行者路书</h1>
  	 	   <input type="text" placeholder="请输入关键字,作者,路书编号">
  	 	   <ul class="qixinglist">
  	 	   	  <li><a href="">318</a></li>
  	 	   	  <li><a href="">骑闯天路</a></li>
  	 	   	  <li><a href="">ROCN</a></li>
  	 	   	  <li><a href="">环台湾</a></li>
  	 	   	  <li><a href="">环海南</a></li>
  	 	   </ul>
  	 	</div>
  	 </header>
  	 <article v-show="this.$store.state.isShow">
  	   <div class="hj" >
  	 	<!-- <div class="tjhj">
  	 		推荐合集
  	 	</div> -->
  	 	<router-link tag="div" to="/lushu/tuijianheji" class="tjhj" activeClass="brightlight2" ><div class="tj11" ></div><span>推荐合集</span></router-link>
      

  	 	<!-- <div class="sdls">
  	 		赛段路书
  	 	</div> -->
  	 	<router-link tag="div" to="/lushu/saiduanlushu" class="sdls" activeClass="brightlight2" ><div class="tj22" ></div><span >赛段路书</span></router-link>
  	 	</div>
  	 	<div class="mine">
  	 	<!-- <div class="minelushu">
  	 		我的路书
  	 	</div> -->
  	 	<router-link tag="div" to="/lushu/wodelushu/wodelushuchild" class="minelushu" >我的路书</router-link>
  	 	<router-link tag="div" to="/lushu/wodelushu/wodelushuchild" class="makelushu">制作路书</router-link>
  	 	<!-- <div class="makelushu">
  	 		制作路书
  	 	</div> -->
  	 	</div>
  	 </article>
    <router-view></router-view>
  	 
  	 
  </div>
</template>

<script>
/*import aaa from './components/tuijianheji'*/
/*import bbb from './components/saiduanlushu'*/
export default {
	
  
}
</script>

<style scoped>
  .brightlight2{background-color: #2d3033;color: blue;}
  .brightlight2 span{color: #189adb;font-weight: bold;}
  .blue{background-color: #189adb}
  .red{background-color:red;}
  article .tj11{width: 100px; height: 5px;}
  article .tj22{width: 100px; height: 5px;}
  header{width: 1123px; height: 200px;position: relative;left: 140px; top:-650px; }
  header .lushu{position: relative; left: 40%;top: -180px;}
  header .lushu h1{font-size: 44px; color: white;margin-bottom:10px; }
  header .lushu input{width: 400px; height: 45px;position: relative;left: -110px;border-radius: 5px;padding-left: 10px;font-size: 18px;background:url(../../static/1.8.jpg)370px no-repeat;background-color: white;}
  header .qixinglist{display: flex;}
  header .qixinglist li{flex-direction:row;position: relative;left: -120px;top:5px;margin-left: 10px;}
  header .qixinglist a{color: white}
  /* header img{position: absolute;left: 140px;} */
  article .hj{width: 200px; height: 50px;position: absolute;left: 180px;top: 270px;display: flex;background-color: #222426;}
  article .hj span{font-size: 14px;}
  article .tjhj{color:white;width:100px; height: 45px;text-align: center;cursor: pointer;padding-bottom: 4px;}
  article .tjhj span{line-height: 50px;}
  article .sdls{color:white;width:100px; height: 45px;text-align: center;cursor: pointer;padding-bottom: 4px;}
  article .sdls span{line-height: 50px;}
  article .mine{display: flex;position: absolute;color: white;right: 0;top:270px;margin-right: 20px;}
  article .minelushu{width: 100px; height: 45px;background-color: #2d3033;border-radius: 2px;margin-right: 20px;line-height: 43px;text-align: center;}
  article .makelushu{width: 100px; height: 45px;background-color: #189adb;border-radius: 2px;line-height: 43px;text-align: center;}
</style>
