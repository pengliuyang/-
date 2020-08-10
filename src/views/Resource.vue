<template>
  <div class="resource">
    <div class="banner">
      <img src="../assets/images/组49.jpg" alt="" />
    </div>
    <div class="centeritems container clearfix">
      <ul>
        <li>资源共享</li>
        <li @click="link('/resource/resourceshare')" :class="{active:this.$route.path.indexOf('resourceshare')>0?true:false}">虚拟仿真项目</li>
        <li @click="link('/resource/resourceshare')">数据库资源</li>
        <li @click="link('/resource/resourceshare')" >精品慕课MOOC</li>
        <li @click="link('/resource/resourceshare')" >量化投资</li>
        <li @click="link('/resource/resourceshare')">模拟竞赛</li>
        <li @click="link('/resource/resourceshare')" >安全教育</li>
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
.resource {
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
