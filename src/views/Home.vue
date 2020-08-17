<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/images/logo.png" alt="" />
      <p>跨国投资汇率风险管理虚拟仿真实训项目</p>
      <div class="container" id="lunbo">
        <div class="block">
          <!-- <el-carousel trigger="click">
            <el-carousel-item v-for="item in arr" :key="item.id">
              <img :src="item.url" alt="" />
              <div class="box">
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.description }}
                </p>
              </div>
            </el-carousel-item>
          </el-carousel> -->
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in arr" :key="item">
              <img :src="item.url" alt="" />
              <div class="box">
                <h3>{{item.title}}</h3>
                <p>
                {{item.contain}}
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
      <div class="common">
        <!-- <i class="icon new"></i><span>{{ title }}</span> -->
        <i class="icon new"></i><span>新闻公告</span>
      </div>
      <span class="allnews" @click="allcontain()">全部内容 ></span>
    </div>
    <div class="columnnews">
      <div class="column container">
        <div class="columnitems">
          <!-- <span
            v-for="item in columnlink"
            :key="item.id"
            @click="linkdetail(item.id, $event)"
            ref="items"
            >{{ item.name }}</span
          > -->
          <span :class="{active:color=='news'}" @click="changecolor('news')">新闻</span>
          <span :class="{active:color=='notice'}" @click="changecolor('notice')">公告</span>
        </div>
        <!-- <div class="columphoto">
          <img :src="imglarge.bgImgUrl" alt="" />
          <div class="columphotodetail">
            <h3>{{ imglarge.title }}</h3>
            <p>
              {{ imglarge.description }}
            </p>
          </div>
        </div> -->
        <!-- <div class="columphoto">
          <img src="../assets/images/5.jpg" alt="" />
          <div class="columphotodetail">
            <h3>1111</h3>
            <p>
              222222222222
            </p>
          </div>
        </div> -->
        <div class="columphoto" v-for="item in news" :key="item">
          <img :src="item.url" alt="" />
          <div class="columphotodetail">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.contain }}
            </p>
            <span>{{ item.time }}</span>
          </div>
        </div>
        <div class="columphotoes">
          <!-- <div v-for="item in imgsmall" :key="item.bgImgUrl">
            <img :src="item.bgImgUrl" alt="" />
            <p>{{ item.title }}</p>
            <p class="time">{{ item.createTime }}</p>
          </div> -->
          <div v-for="item in newsitem" :key="item">
            <img :src="item.url" alt="" />
            <p>{{ item.title }}</p>
            <p class="time">{{ item.time }}</p>
          </div>
          <!-- <div>
            <img src="../assets/images/5.jpg" alt="" />
            <p>1</p>
            <p class="time">2020-07-30</p>
          </div>
          <div>
            <img src="../assets/images/5.jpg" alt="" />
            <p>11</p>
            <p class="time">2020-07-30</p>
          </div>
           <div>
            <img src="../assets/images/5.jpg" alt="" />
            <p>1</p>
            <p class="time">2020-07-30</p>
          </div> -->
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
            <el-menu-item index="1"
              ><a href="https://www.baidu.com" target="_blank"
                >订单管理</a
              ></el-menu-item
            >
            <!-- <el-submenu
              :index="item.classifyName"
              v-for="item in treelistfilter"
              :key="item"
            >
              <template slot="title">{{ item.classifyName }}</template>
              <el-menu-item
                :index="children.linkUrl"
                v-for="children in item.friendshipLink"
                :key="children.title"
                >{{ children.title }}</el-menu-item
              >
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu> -->
            <!-- <el-menu-item
              :index="item.classifyName"
              v-for="item in small"
              :key="item.classifyName"
              ><a href="https://www.baidu.com" target="_blank">{{
                item.classifyName
              }}</a></el-menu-item> -->
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
// import { carousel } from "@/apis/home.js";
// import { titlelink } from "@/apis/home.js";
// import { getallPage } from "@/apis/home.js";
// import { columnlink } from "@/apis/home.js";
// import { columnlinkcontent } from "@/apis/home.js";
// import { linkclassify } from "@/apis/home.js";

export default {
  name: "Home",
  data() {
    return {
      arr: [
        {url:require("../assets/images/7.jpg"),title:"虚拟仿真项目1",contain:"内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"},
        {url: require("../assets/images/5.jpg"),title:"虚拟仿真项目2",contain:"内容内容内容内容内容内容内容内容内容"},
        {url: require("../assets/images/2.jpg"),title:"虚拟仿真项目3",contain:"内容内容内容内容内容内容内容内容内容"},
       
      ],
      activeIndex: "1",
      carouselIds: [],
      title: "",
      columnlink: [],
      imglarge: {},
      imgsmall: [],
      // 动态菜单创建
      treelist: [],
      small: [],
      news: [
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          contain: "这是新闻",
          time: "2020-07-20",
        },
      ],
      newsitem: [
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
      ],
      color:"news",
    };
  },

  methods: {
    fun() {
      alert(0);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    allcontain() {
      this.$router.push("/news/notice");
    },
    // linkdetail(id, event) {
    //   columnlinkcontent(id).then((res) => {
    //     this.imglarge = res[0];
    //     this.imgsmall = res.splice(1, 4);
    //     for (var i = 0; i < this.$refs.items.length; i++) {
    //       this.$refs.items[i].className = "";
    //     }
    //     event.target.className = "active";
    //   });
    //   console.log(this.treelistfilter);
    // },
    changecolor(column) {
      if (column == "news") {
        this.news = [
          {
            url: require("../assets/images/5.jpg"),
            title: "四川大学新闻",
            contain: "这是新闻",
            time: "2020-07-20",
          },
        ];
        this.newsitem=[
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
      ];
      this.color="news"
      }
         if (column == "notice") {
        this.news = [
          {
            url: require("../assets/images/2.jpg"),
            title: "四川大学公告",
            contain: "这是公告",
            time: "2020-07-20",
          },
        ];
        this.newsitem=[
        {
          url: require("../assets/images/2.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/2.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/2.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/2.jpg"),
          title: "四川大学",
          time: "2020-07-30",
        },
      ],
       this.color="notice"
      }
    },
  },
  computed: {
    // treelistfilter() {
    //   return this.treelist.filter((value) => {
    //     if (value.friendshipLink.length == 0) {
    //       this.small.push(value) ;
    //       console.log(this.small);
    //     }
    //     return value.friendshipLink.length;
    //   });
    // },
  },
  mounted() {
    // getallPage().then((res) => {
    //   titlelink(res[0].headline2Id).then((res) => {
    //     this.title = res[0].title;
    //   });
    //   columnlink(res[0].columnIds).then((res) => {
    //     res.map((res) => {
    //       if (res.level == 2) {
    //         this.columnlink.push({ name: res.columnName, id: res.id });
    //       }
    //     });
    //     columnlinkcontent(this.columnlink[0].id).then((res) => {
    //       this.imglarge = res[0];
    //       this.imgsmall = res.splice(1, 4);
    //     });
    //   });
    //   linkclassify(res[0].friendshipLinkIds).then((res) => {
    //     this.treelist = res;
    //     console.log(this.treelist);
    //   });
    // });
  },
};
</script>
<style lang="less">
.home {
  font-family: "Source Han Serif CN";
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
          -webkit-line-clamp:2;
          -webkit-box-orient: vertical;
          font-size: 20px;
          margin-top: 16px;
          color: #000;
          font-size: 18px;
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
      a {
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
        font-size: 18px;
      }
      .text {
        background-color: #fff;
        color: #bb2b18;
      }
      .expert {
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
        cursor: pointer;
      }
      span:hover {
        border-bottom: 6px solid #bb2b18;
      }
      .active {
        border-bottom: 6px solid #bb2b18;
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
        position: relative;
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
        span {
          color: #ccc;
          position: absolute;
          right: 30px;
          bottom: 20px;
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
          height: 168px;
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
      .el-menu-item {
        font-size: 18px;
      }
    }
    .visit,
    .friendlink {
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
      .el-submenu__title {
        font-size: 18px;
      }
      .el-menu-item * {
        vertical-align: baseline;
      }
      .el-submenu__title,
      .is-active,
      .el-submenu {
        border: none;
      }
      .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
        border: none;
      }
    }
  }
}
</style>
