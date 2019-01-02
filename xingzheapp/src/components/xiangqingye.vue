<template>
  <div>
     <header>
        <div>
        	<h3>辽媒塔爬坡</h3>
        	<div>
        	<p>里程</p><span>{{rank.my_rank.ulevel}}</span>
        	<p>平均坡度</p><span>4.694%</span>
        	<p>累计爬升</p><span>122.4m</span>
        	<p>海拔落差</p><span>114.0m</span>
        	</div>
        </div>
     	<img src="../../static/3.1.jpg" height="320" width="814" alt="">
     	<div><img src="../../static/3.2.jpg" height="185" width="813" alt=""></div>
     </header>
     <footer>
     	<div></div>
     	<div></div>
     	<div></div>
     </footer>
     <aside>
     	<img src="../../static/3.3.jpg" height="539" width="250" alt="">
     </aside>	
     
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
  	return{
  		rank:[]
  	}
  },
  mounted(){
  	//获取上个页面传来的动态路由参数
  	console.log(this.$route.params)
  	axios.get(`/api/v4/new_segment_rank/?type=0&lushu_id=${this.$route.params.id}&page=0&limit=10`).then(res=>{
       this.rank=res.data;
       console.log(this.rank)
  	}).catch(error=>{

  	})
  }
}
</script>

<style>

  header{width: 814px;height: 600px;float: left; margin-top: 11px;position: relative;left: 20px;}
  header img{position: relative;top: 80px;}
  header div:nth-of-type(1){width: 814px;height: 80px;background-color: #2d3033;position: absolute;}
  header div:nth-of-type(1) div{display: flex;position: absolute;top: 40px;margin-left: 10px;width: 804px;}
  header div:nth-of-type(1) h3{position: relative;left: 10px;top: 10px;color: white;}
  header div:nth-of-type(1) div span{font-size: 14px;color: white;margin-left: 5px;margin-right: 5px;}
  header div:nth-of-type(1) div p{font-size: 12px;color: #7c8872;}
  header div:nth-of-type(2){width: 814px;height:276px;background-color:#2d3033;position: absolute;  }
  aside{width: 250px; height: 720px; float: right;background-color: #2d3033; margin-top: 10px;position: relative;right: 20px;}
  footer div:nth-of-type(1){width: 814px; height: 100px;margin-top: 20px;background-color: #2d3033;position: absolute;left: 160px;top:670px;}
  footer div:nth-of-type(2){width: 1084px; height: 100px;margin-top: 20px;background-color: #2d3033;position: absolute;top: 790px;left: 160px;}
  footer div:nth-of-type(3){width: 1084px; height: 100px;margin-top: 20px;background-color: #2d3033;position: absolute;left: 160px;top:910px;}
</style>