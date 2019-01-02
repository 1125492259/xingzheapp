<template>
  <div id="box5">
  	 <ul>
  		<!-- <li><img src="../../static/2.1.jpg" ></li>
      <li><img src="../../static/2.1.jpg" ></li>
      <li><img src="../../static/2.1.jpg" ></li>
      <li><img src="../../static/2.1.jpg" ></li>
      <li><img src="../../static/2.1.jpg" ></li>
      <li><img src="../../static/2.1.jpg" ></li> -->
      <!-- <li><div class="ddd"><p>{{data.title}}</p></div></li>
      <li><div class="ddd"></div></li>
      <li><div class="ddd"></div></li> -->
      <li v-for="data in datalist" class="ddd"><div><p>{{data.title}}</p><span>{{data.lushu_count}}人觉得可行</span></div></li>
      <li>继续加载 </li>
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
  mounted(){
    //ajax 
    axios.get('/api/v4/collection_list/?&page=1&time=1545957213431&type=0&limit=15').then(res=>{
       /*this.datalist=res.data.lushu_collection;*/
       console.log(res)
       this.datalist=res.data.lushu_collection
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

  #box5{width: 1065px;background-color: #2d3033;position: relative;top: 69px; left: 180px;}
  #box5 ul{padding-top: 40px;width: 1065px;height:700px;position: relative;left: 30px;top:-450px;clear: both;}
  #box5 .ddd{width:315px;height:180px; background: url(../../static/2.2.jpg)no-repeat ; background-size: 300px;}
   #box5 li{float: left;margin-right: 30px;margin-bottom: 30px;}

   #box5 li:last-of-type{color: black;font-weight: bold;margin-left: 450px;cursor: pointer;}
   #box5 li i{height: 100%;width: 100%;background: black;display: inline-block;opacity: 0.1;}
   #box5 li p{font-size: 16px;color: #e6e8e6;font-weight: bold;text-align: center;margin-top: 65px;z-index: 999;}
   #box5 li span{font-size: 12px;font-weight: bold;color: #abaaaa;margin-left: 120px;}



</style>