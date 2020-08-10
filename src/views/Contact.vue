<template>
  <div class="contact">
    <div class="banner">
      <img src="../assets/images/组52.jpg" alt="" />
    </div>
    <div class="centeritems container clearfix">
      <ul>
        <li>联系我们</li>
        <li @click="link('/contact/university')" :class="{active:this.$route.path.indexOf('university')>0?true:false}">学校信息</li>
      </ul>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
export default {
  methods:{
      link(a){
         this.$router.push(a)
      }
  }
};
</script>

<style lang="less" scoped>
.contact {
   font-family: 'Source Han Serif CN';
  .banner {
    height: 200px;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .centeritems {
    ul {
      background: #f3f3f3;
      width: 180px;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
      font-size: 18px;
      color: #2d2d2d;
      li {
        margin-bottom: 20px;
      }
      float: left;
    }

    margin-top: 30px;
  }
  .centeritems > ul > li:first-child {
    width: 160px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
 .active{
  background: #bb2a17;
  color:#fff ;
}
margin-bottom: 30px;
}
.centeritems > ul > li:not(:nth-child(1)) {
  line-height: 30px;
  height: 30px;
}
.centeritems > ul > li:not(:nth-child(1)):hover {
  background: #bb2a17;
  color: #fff;
  cursor: pointer;
}

</style>
