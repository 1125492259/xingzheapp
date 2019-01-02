<template>
  <div id="box4">
  	 <ul>
  		<!-- <li><img src="../../static/11.png" ><h3>辽媒塔爬坡</h3><p>测试文字测试文字测试文字测试文字测试文字测试文字测试文字</p></li>
  		<li><img src="../../static/11.png" ><h3>辽媒塔爬坡</h3><p>测试文字测试文字测试文字测试文字测试文字测试文字测试文字</p></li>
  		<li><img src="../../static/11.png" ><h3>辽媒塔爬坡</h3><p>测试文字测试文字测试文字测试文字测试文字测试文字测试文字</p></li> -->
  		<li v-for="data in datalist" @click="handleclick(data.id)" :key="data.id">
  			<img :src="data.image" alt="">
  			<h3>{{data.city}}</h3>
  			<span>{{data.count}}公里</span>
  			<span>平均坡度{{data.avg_cadence}}%</span>
  			<span>累计{{data.min_altitude}}米</span><br>
  			<span>{{data.user_name}}的路书</span>
  		</li>
      <li>继续加载</li>
      <!-- <router-link :to="'/lushu/'+data.id" tag="li"></router-link> -->
  	</ul>
  	

  </div>
</template>

<script>
import axios from "axios"
export default {
	data(){
		return{
			datalist:[]
		}
	},
  methods:{
     handleclick(id){
       this.$router.push(`/xiangqingye/${id}`);
       /*this.$router.push({name:'xiangqingye',params:{id:id}})*/ //通过名字
     }
  },
  mounted(){
  	//ajax 
  	axios.get('/api/v4/lushu_search?&page=1&limit=15&type=7&lat=41.1236&lng=122.99').then(res=>{
       this.datalist=res.data;
       console.log(res)
  	}).catch(error=>{

  	})

  	/*axios({
  		url:"",
  		method:'get',
  		headers:{
  			//这里面是卖座网站加的请求头的数据 记得加''
  		}
  	})*/
  }
}

</script>

<style scoped>
  #box4{width: 1065px;height:1500px;background-color: #2d3033;position: relative;top: 69px; left: 180px;}
  #box4 ul{padding-top: 40px;width: 1065px;height: 100%; position: relative;left: 30px;top:-450px;clear: both;}
  #box4 li{float: left;margin-right: 30px;margin-bottom: 30px;width: 300px;}
  #box4 li:last-of-type{margin-left: 450px;}
  #box4 h3{color: white;font-size: 16px;}
  #box4 p{font-size: 12px;color: #adadad;}
  #box4 img{height: 180px; width: 300px;}
  #box4 span{color: #acacac;font-size: 12px;}
</style>