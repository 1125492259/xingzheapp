<template>

  	 <div>
  	    <router-link tag="div" to="/lushu/wodelushu/wodelushuchild" class="ddd" activeClass="brightlight">我的路书</router-link>
  	 	<router-link tag="div" to="/lushu/zhizuolushu/makelushuchild" class="aaa" activeClass="brightlight">制作路书</router-link>
  </div>

</template>

<script>
export default {
   beforeMount(){
      this.$store.state.isShow = false
  },
  beforeDestroy(){
      this.$store.state.isShow = true
  }
}
</script>

<style scoped>
div{position: absolute;left: 90px;top: 40px;}
.ddd{width: 100px; height: 45px;border-radius: 2px;line-height: 43px;text-align: center;color: white;background-color: red;}
.aaa{width: 100px; height: 45px;border-radius: 2px;position: relative;left: 182px;margin-left: 7px;line-height: 43px;text-align: center;color: white;background-color: red;}
.brightlight{}
/* .minelushu{width: 100px; height: 45px;background-color: #2d3033;border-radius: 2px;margin-right: 20px;line-height: 43px;text-align: center;}
.makelushu{width: 100px; height: 45px;background-color: #189adb;border-radius: 2px;line-height: 43px;text-align: center;} */
</style>