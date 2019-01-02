<template>
  <div>
  	<sidebar></sidebar>
  	<navbar></navbar>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
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