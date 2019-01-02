<template>
  <div>
  	 制作路书child
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

<style>

</style>