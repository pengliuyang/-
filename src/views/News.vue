<template>
  <div class="teacher">
    <div class="banner">
      <img src="../assets/images/新闻公告.png" alt="" />
    </div>
    <div class="centeritems container clearfix">
      <ul v-show="this.$route.path.indexOf('noticedetail')>-1?false:true">
        <li>新闻公告</li>
        <li @click="link('/news/notice')" :class="{active:this.$route.path.indexOf('notice')>0?true:false}">公告</li>
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
  },
  mounted(){
    console.log(this.$route.path,this.$route.path.indexOf('noticedetail'))
  }
};
</script>

<style lang="less" scoped>
.teacher {
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
margin-bottom: 90px;
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
