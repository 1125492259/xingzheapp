<template>
<div>
  <sidebar></sidebar>
  <navbar></navbar>
  <router-view></router-view>
 </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
export default {
  components:{
    sidebar,
    navbar
  }
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
  html{background-color: #1d1d1f;} 
  #box{height: 700px; width: 200px; background-color: red;float: left;box-sizing:border-box;}
  #box ul{overflow: hidden;}
  #box li{margin-top: 20px;cursor: pointer;}
  #nav{height: 50px; width: 100%;background-color: blue;}
  #nav ul{float: right;display: flex;}
  #nav ul li{margin-top: 10px; margin-right: 20px;cursor: pointer;}
  .brightlight{
    color: white;
  }
</style>
