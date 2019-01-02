
  <template>
  <div id="nav">
    <ul>
      <router-link tag="li" to="/huidaojiuban">回到旧版</router-link>
      <router-link tag="li" to="/shangchuanyundongshuju">上传运动数据</router-link>
      <router-link tag="li" to="/denglu">登录</router-link>
      <router-link tag="li" to="/zhuce">注册</router-link>
      <!-- <li>回到旧版</li>
      <li>上传运动数据</li>
      <li>登录</li>
      <li>注册</li> -->
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
 #nav{height: 50px; width: 100%;background-color: blue;background-color: #2d3033}
  #nav ul{float: right;display: flex;}
  #nav ul li{ margin-right: 10px;cursor: pointer;color: #a8adb2;font-size: 14px;line-height: 45px;height: 50px; width: 100px;text-align: center;position: relative;top: -10px;}
  #nav ul li:hover{background-color: #424344}
  #nav ul li:hover{color: white}
  .brightlight{
    color: white;
  }
</style>