<template>
   <div class="topbar">
      <img src="../assets/images/2.png" alt="" />
      <img src="../assets/images/1.png" alt=""  width="120"/>
      <!-- <img src="../assets/images/d_xxgk.png" alt=""> -->
      <ul class="clearfix">
        <li :class="{active:this.$route.path=='/home'}"><router-link to='/home'>首页</router-link></li>
        <li :class="{active:this.$route.path.indexOf('center')>0?true:false}"><router-link to='/center'>中心概述</router-link></li>
        <li :class="{active:this.$route.path.indexOf('project')>0?true:false}"><router-link to='/project'>项目介绍</router-link></li>
        <li :class="{active:this.$route.path.indexOf('teacher')>0?true:false}"><router-link to='/teacher'>师资队伍</router-link></li>
        <li :class="{active:this.$route.path.indexOf('resource')>0?true:false}"><router-link to='/resource'>资源共享</router-link></li>
        <li :class="{active:this.$route.path.indexOf('news')>0?true:false}"><router-link to='/news'>新闻公告</router-link></li>
        <li :class="{active:this.$route.path.indexOf('enterprise')>0?true:false}"><router-link to='/enterprise'>校企合作</router-link></li>
        <li :class="{active:this.$route.path.indexOf('contact')>0?true:false}"><router-link to='/contact'>联系我们</router-link></li>
      </ul>
      <div class="circle" @click="fun()">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>

<script>

export default {
 data(){
   return{}
 
    
 },
   methods:{
      fun(){
        this.$router.push('/login')
      }   
   },
 created(){
     console.log(this.$route.path)
   }
}
</script>

<style lang="less">
  .topbar {
    padding: 10px;
    height: 50px;
    display: flex;
    background: #fff;
     img{
      height:50px;
    }
    color: #000;
    .clearfix::after {
      content: "";
      display: block;
      clear: both;
      height: 0;
    }
    ul {
      height: 30px;
      font-size: 16px;
      line-height: 50px;
      padding: 10px;
    }
    ul li {
      float: left;
      list-style: none;
      height: 30px;
      text-align: center;
      line-height: 30px;
      // margin-right: 30px;
      padding-right: 30px;
      cursor: pointer;
      a{
         display:inline-block;
         height: 30px;
         font-size: 18px;
         font-family: 'Source Han Serif CN';
        
      }
    }
    ul li:hover {
      a{
         color:#bb2a17;
        
        
      }
    }
    ul li:first-child {
      margin-left: 160px;
    }
    ul li:last-child {
      border-right: 1px solid rgba(0, 0, 0, 0.678);
      margin-right: 20px;
    }
    .circle {
      margin-top: 10px;
      width: 4px;
      height: 50px;
    }
    .circle:hover {
      cursor: pointer;
    }
    .circle > div {
      margin-top: 5px;
      height: 4px;
      width: 4px;
      background: rgba(0, 0, 0, 0.678);
      border-radius: 2px;
    }
    a{
      text-decoration: none;
      color: rgba(0, 0, 0, 0.678);
    }
    .active>a{
    color:#bb2a17;
    }
  }
</style>