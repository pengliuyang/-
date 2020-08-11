<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/images/logo.png" alt="" />
      <p>跨国投资汇率风险管理虚拟仿真实训项目</p>
      <div class="container" id="lunbo">
        <div class="block">
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in a" :key="item">
              <img :src="item" alt="" />
              <div class="box">
                <h3>虚拟仿真项目</h3>
                <p>
                  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊哈哈哈哈哈
                </p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <p>虚拟仿真实验</p>
          <span>项目入口</span>
           <a href="" class="text">我要做实验</a>
           <a href="" class="expert">专家通道</a>
          <!-- <button @click="fun()">我要做实验</button>
          <button @click="fun()">专家通道</button> -->
        </div>
      </div>
    </div>
    <div class="title container">
      <div class="common">
        <i class="icon teacher"></i><span>虚拟仿真教学</span>
      </div>
    </div>
    <div class="source container">
      <div class="sourceitems">
        <div>
          <img src="../assets/images/资源_画板 1.png" alt="" />

          <p class="china">虚拟仿真实验</p>
          <p class="english">Virtual simulation<br />project</p>
        </div>
        <div>
          <img src="../assets/images/资-11.png" alt="" />
          <p class="china">实证科研</p>
          <p class="english">Empircal research</p>
        </div>
        <div>
          <img src="../assets/images/资-12.png" alt="" />
          <p class="china">数据资源</p>
          <p class="english">Data resource</p>
        </div>
      </div>
      <div class="sourceitems">
        <div>
          <img src="../assets/images/资-13.png" alt="" />
          <p class="china">模拟竞赛</p>
          <p class="english">Competions</p>
        </div>
        <div>
          <img src="../assets/images/资-14.png" alt="" />
          <p class="china">精品慕课</p>
          <p class="english">Excellent<br />Courses-Mooc</p>
        </div>
        <div>
          <img src="../assets/images/资-15.png" alt="" />
          <p class="china">安全教育</p>
          <p class="english">safty Education</p>
        </div>
      </div>
    </div>
    <div class="title container news">
      <div class="common"><i class="icon new"></i><span>新闻公告</span></div>
      <span class="allnews" @click="allcontain()">全部内容 ></span>
    </div>
    <div class="columnnews">
      <div class="column container">
        <div class="columnitems"><span>新闻</span><span>新闻</span></div>
        <div class="columphoto">
          <img src="../assets/images/5.jpg" alt="" />
          <div class="columphotodetail">
            <h3>6666666666</h3>
            <p>
              666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            </p>
          </div>
        </div>
        <div class="columphotoes">
          <div>
            <img src="../assets/images/5.jpg" alt="" />
            <p>1</p>
            <p class="time">2020-07-30</p>
          </div>
          <div>
            <img src="../assets/images/5.jpg" alt="" />
            <p>1</p>
            <p class="time">2020-07-30</p>
          </div>
          <div>
            <img src="../assets/images/5.jpg" alt="" />
            <p>1</p>
            <p class="time">2020-07-30</p>
          </div>
          <div>
            <img src="../assets/images/5.jpg" alt="" />
            <p>1</p>
            <p class="time">2020-07-30</p>
          </div>
        </div>
      </div>
    </div>
    <div class="link">
      <div class="container">
        <div class="visit">
          <div class="visittotal">
            <img src="../assets/images/icon_msg_.png" alt="" /><span>
              访问统计</span
            >
          </div>
          <p>近日访问:<span>24,666</span></p>
          <p>历史访问:<span>400万</span></p>
        </div>
        <div class="friendlink">
          <div class="visittotal">
            <img src="../assets/images/icon_link.png" alt="" /><span>
              友情链接</span
            >
          </div>
          <el-menu
         
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#f3f3f3"
            text-color="#2d2d2d"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">我的工作台</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-submenu index="3-3">
                <template slot="title">选项4</template>
                <el-menu-item index="3-3-1">选项1</el-menu-item>
                <el-menu-item index="3-3-2">选项2</el-menu-item>
                <el-menu-item index="3-3-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="4"
              ><a href="https://www.baidu.com" target="_blank"
                >订单管理</a
              ></el-menu-item
            >
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import axios from 'axios';
export default {
  name: "Home",
  data() {
    return {
      a: [
        require("../assets/images/7.jpg"),
        require("../assets/images/2.jpg"),
        require("../assets/images/5.jpg"),
      ],
      activeIndex: "1",
    };
  },
 
  methods: {
    fun() {
      alert(0);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    allcontain(){
      this.$router.push('/news/notice')
    }
  },
  // mounted(){
  //   axios.get('https://192.168.31.179:8081/carouse/carouse').then((res)=>{
  //     console.log(res.data.data)
  //   })
  // }
};
</script>
<style lang="less" >
.home {
   font-family: 'Source Han Serif CN';
  .banner {
    width: 100%;
    height: 300px;
    background: url("../assets/images/banner.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    position: relative;
    margin-bottom: 410px;
    img {
      margin-top: 50px;
    }
    p {
      color: #ffffff;
      font-size: 40px;
      padding: 0;
      margin: 0;
      margin-top: 15px;
    }
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  #lunbo {
    display: flex;
    justify-content: space-between;
    height: 372px;
    margin-top: 50px;
    .block {
      width: 1000px;
      height: 371px;
      background: #fff;
      .box {
        width: 460px;
        margin-left: 30px;
        p {
          text-align: left;
          width: 460px;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 10;
          -webkit-box-orient: vertical;
          font-size: 20px;
          margin-top: 16px;
          color: #000;
        }
      }
       box-shadow: -1px 1px 1px 1px #ccc;
    }
    .right {
      width: 200px;
      background: #bb2b18;
      p {
        font-size: 24px;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      span {
        font-size: 16px;
        color: #ffffff;
      }
      a{
        text-decoration: none;
        display: block;
        width: 160px;
        height: 60px;
        line-height: 60px;
        border: none;
        margin: 0 auto;
        margin-top: 50px;
        border-radius: 5px;
        color: #fff;
        font-size:18px ;
      }
      .text{
          background-color: #fff;
           color: #bb2b18;
      }
      .expert{
          background-color: #2d2d2d;
           color: #fff;
      }
    }
  
   
  }
  .el-carousel__container {
    height: 372px;
    width: 1000px;
  }
  .el-carousel__item {
    display: flex;
    img {
      width: 450px;
      height: 290px;
      margin-left: 28px;
      margin-top: 28px;
    }
    h3 {
      color: red;
      font-size: 20px;
      margin-top: 30px;
      text-align: left;
    }
  }
  // .el-carousel__item {
  //   background-color: #ccc;
  // }
  // .el-carousel__item:nth-child(2n + 1) {
  //   background-color: #d3dce6;
  // }
  .el-carousel__indicator--horizontal .el-carousel__button {
    background: red;
    // width: 10px;
    // height: 10px;
    // border-radius: 5px;
  }
  .title {
    font-size: 20px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    .common {
      display: flex;
    }
    .teacher {
      background: url("../assets/images/icon_munu.png");
    }
    .new {
      background: url("../assets/images/icon_new.png");
    }
    .icon {
      margin-top: 2px;
      display: inline-block;
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-size: 100%;
      margin-right: 10px;
    }
    span {
      margin-top: 10px;
    }
  }
  .sourceitems {
    display: flex;
    justify-content: space-around;
    div {
      width: 240px;
      height: 240px;
      // background: orange;
      text-align: center;
      margin-top: 30px;
      box-shadow: 1px 1px 5px #ccc;
      p {
        margin-top: 10px;
      }
      .china {
        font-size: 24px;
        color: #2d2d2d;
      }
      .english {
        color: #999999;
        font-size: 18px;
      }
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
  .sourceitems > div:hover {
    transform: scale(1.1);
    background: #bb2b18;
    p {
      color: #fff;
    }
  }
  .news {
    margin-top: 90px;
    .allnews {
      font-size: 14px;
      color: #d6d6d6;
      margin-top: 14px;
      cursor: pointer;

    }
  }
  .columnnews {
    width: 100%;
  }
  .column {
    .columnitems {
      display: flex;
      justify-content: center;
      span {
        padding: 10px;
        padding-top: 40px;
        margin-left: 80px;
        margin-bottom: 40px;
        border-bottom: 6px solid transparent;
        font-size: 18px;
      }
      :hover {
        border-bottom: 6px solid #bb2b18;
        cursor: pointer;
      }
    }
    .columphoto {
      display: flex;
      img {
        width: 580px;
        height: 350px;
      }
      .columphotodetail {
        padding: 20px 30px;
        width: 560px;
        height: 310px;
        background: rgb(143, 139, 139);
        p {
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-top: 20px;
        }
      }
    }
    .columphotoes {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      div {
        width: 268px;
        height: 258px;
        transition: 1s;
        img {
          width: 100%;
        }
        p {
          margin-top: 10px;
        }
        .time {
          color: #ccc;
        }
      }
    }
    .columphotoes > div:hover {
      box-shadow: 1px 1px 2px 1px #ccc;
      transform: scale(1.05);
    }
  }
  .link {
    width: 100%;
    height: 188px;
    background: #f3f3f3;
    padding-top: 70px;
    margin-top: 80px;
    font-size: 18px;
    img {
      width: 20px;
      height: 20px;
      margin-bottom: -3px;
    }

    .container {
      display: flex;
      .visit {
        margin-right: 108px;
          
      }
       .el-menu-item{
         font-size: 18px;
       }
    }
    .visit,.friendlink {
      .visittotal {
        padding-bottom: 10px;
        width: 200px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
        span {
          font-size: 18px;
          color: #2d2d2d;
        }
      }
      p {
        margin-top: 10px;
      }
      span {
        margin-left: 10px;
      }
      .el-menu--horizontal {
        border-bottom: none;
      }
      a {
        text-decoration: none;
      }
      .el-submenu__title{
        font-size: 18px;
      }
      .el-menu-item *{
        vertical-align: baseline;
      }
    }
  }
}
</style>
