<template>
  <div class="content">
    <v-header></v-header>
    <div class="main-content">
      <div class="left-menu">
        <ul>
          <li><router-link to="/no1">to no1</router-link></li>
          <li><router-link to="/no2">to no2</router-link></li>
          <li><router-link to="/no3">to no3</router-link></li>
          <li><router-link to="/no4">to no4</router-link></li>
          <li><router-link to="/no5">to no5</router-link></li>
          <li><router-link to="/no1">to no1</router-link></li>
          <li><router-link to="/no2">to no2</router-link></li>
          <li><router-link to="/no3">to no3</router-link></li>
          <li><router-link to="/no4">to no4</router-link></li>
          <li><router-link to="/no5">to no5</router-link></li>
        </ul>
      </div>
      <div class="right-content" id="min-height-div">
        <router-view/>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '../components/header'
  import footer from '../components/footer'
  import index from '../components/index'
export default {
  data () {
    return {
      
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-index': index
  },
  mounted(){
    const rightMinHeight = window.innerHeight - 220;
    document.getElementById('min-height-div').setAttribute('style', 'min-height:'+rightMinHeight+'px !important');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-content{
    margin-top: 20px;
    width: 80%;
    height: auto;
    margin-left: 10%;
    background-color: transparent;
    overflow: hidden;     /*去除浮动的影响，防止元素脱离文档流*/
    /* border: 1px solid #DADDE0; */
  }
  .content{
    width: 100%;
    height: auto;
    background-color: white;
  }
  .left-menu{
    width: 20%;
    height: auto;
    background-color: #DBDDE0;
    float: left;
  }
  .left-menu ul{
    list-style: none;
  }
  .left-menu ul li{
    line-height: 30px;
    font-size: 16px;
  }
  .right-content{
    width: 76%;
    height: auto;
    float: right;
    background-color: #DBDDE0;
  }
</style>
