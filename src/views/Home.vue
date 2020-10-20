<template>
  <div class="home">
    <div class="banner">
      <img
        :src="homeFormfirst.bannerurl"
        alt=""
        class="topbanner"
     
      />
      <div class="back">
        <img src="../assets/images/logo.png" alt="" class="icon" />
        <p>跨国投资汇率风险管理虚拟仿真实训项目</p>
        <div class="container" id="lunbo">
          <div class="block">
            <el-carousel trigger="click">
              <el-carousel-item
                v-for="item in homeFormfirst.tableData"
                :key="item.id"
              >
                <img v-if="item.isImg == 0" :src="item.url" alt="" />
                <video
                  class="carousevideo"
                  v-if="item.isImg == 1"
                  :src="item.url"
                  controls
                ></video>
                <div class="box">
                  <h3>{{ item.title }}</h3>
                  <div class="description">
                    {{ item.description }}
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="right">
            <p>虚拟仿真实验</p>
            <span>项目入口</span>
            <a href="/ms/login" class="text">我要做实验</a>
            <a href="" class="expert">专家通道</a>
          </div>
        </div>
      </div>
    </div>
    <div class="title container">
      <div class="common">
        <i class="icon teacher"></i><span>{{ homeFormfirst.titleone }}</span>
      </div>
    </div>
    <div class="source container">
      <div class="sourceitems">
        <div
          v-for="value in homeFormfirst.links1"
          :key="value.id"
          @click="linkto(value)"
        >
          <img :src="value.icon" alt="" />
          <p class="china">{{ value.title }}</p>
          <p class="english">{{ value.englishTitle }}</p>
        </div>
      </div>
      <div class="sourceitems">
        <div
          v-for="value in homeFormfirst.links2"
          :key="value.id"
          @click="linkto(value)"
        >
          <img :src="value.icon" alt="" />
          <p class="china">{{ value.title }}</p>
          <p class="english">{{ value.englishTitle }}</p>
        </div>
      </div>
    </div>
    <div class="title container news">
      <div class="common">
        <!-- <i class="icon new"></i><span>{{ title }}</span> -->
        <i class="icon new"></i><span>{{ homeFormfirst.titletwo }}</span>
      </div>
      <span class="allnews" @click="allcontain()">更多内容 ></span>
    </div>
    <div class="columnnews">
      <div class="column container">
        <div class="columnitems">
          <span
            :class="{ active: color == 'left' }"
            @click="changecolor('left')"
            >{{ homeFormfirst.linkcolumn }}</span
          >
          <span
            :class="{ active: color == 'right' }"
            @click="changecolor('right')"
            >{{ homeFormfirst.linkcolumntwo }}</span
          >
        </div>

        <div
          class="columphoto"
          @click="
            routelink(
              homeFormfirst.linkcolumnarticletop.id,
              homeFormfirst.linkcolumnarticletop.linkUrl
            )
          "
        >
          <img :src="homeFormfirst.linkcolumnarticletop.bgImgUrl" alt="" />
          <div class="columphotodetail">
            <h3>{{ homeFormfirst.linkcolumnarticletop.title }}</h3>
            <div
              v-html="homeFormfirst.linkcolumnarticletop.textContent"
              class="textcontent"
            ></div>
            <span>{{ homeFormfirst.linkcolumnarticletop.createTime }}</span>
          </div>
        </div>
        <div class="columphotoes">
          <div
            v-for="item in homeFormfirst.linkcolumnarticlebottom"
            :key="item.id"
          >
            <img :src="item.bgImgUrl" alt="" />
            <p>{{ item.title }}</p>
            <p class="time">{{ item.createTime }}</p>
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
            <el-submenu
              :index="value.id"
              v-for="value in Datachild"
              :key="value.id"
            >
              <template slot="title">{{ value.classifyName }}</template>
              <el-menu-item
                :index="value.id"
                v-for="value in value.friendshipLink"
                :key="value.id"
              >
                <a :href="value.linkUrl" target="_blank">{{
                  value.title
                }}</a></el-menu-item
              >
            </el-submenu>
            <el-menu-item
              v-for="value in Data"
              :index="value.id"
              :key="value.id"
            >
              <a :href="value.linkUrl" target="_blank">{{
                value.title
              }}</a></el-menu-item
            >
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomecolumn } from "@/apis/request.js";
import { getHomebanner } from "@/apis/request.js";
import { getHomecarouse } from "@/apis/request.js";
import { getHomeheadline } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
import { getColumnarticle } from "@/apis/request.js";
import { allColumn } from "@/apis/request.js";
import { getHomelinks } from "@/apis/request.js";
import { getHomelink } from "@/apis/request.js";
import { getArticlemessage } from "@/apis/request.js";

export default {
  name: "Home",
  data() {
    return {
      Datachild: [],
      Data: [],
      imgUrl: "",
      homeFormfirst: {
        bannerurl: "",
        columnIds: "",
        tableData: [
          // {
          //   index: 1,
          //   title: "四川大学1",
          //   value1: true,
          //   imageUrl:
          //     "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          // },
        ],
        links1: [],
        links2: [],
        frinedlinktableData: [
          {
            index: 1,
            title: "四川大学",
            class: "",
            value: true,
            address: "https://123",
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
            ],
          },
          {
            index: 1,
            title: "四川大学",
            class: "",
            value: true,
            address: "https://123",
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
            ],
          },
        ],
        frinedlinkmange: [
          {
            index: 1,
            title: "四川大学",
            value: true,
          },
          {
            index: 1,
            title: "四川大学",
            value: true,
          },
        ],
        titleone: "",
        titletwo: "",
        linkcolumn: [],
        linkcolumntwo: [],
        linkcolumnarticletop: {},
        linkcolumnarticlebottom: [],
      },

      id: 0,
      arr: [
        {
          url: require("../assets/images/风险识别与计量图片.jpg"),
          title: "汇率风险识别与计量",
          contain:
            "汇率风险又称外汇风险或外汇暴露，是指一定时期的国际经济交易当中，以外币计价的资产与负债，由于汇率的波动而引起其价值涨跌的可能性。基本实验原理是提供真实的企业跨国投资情景环境，让学生根据情景，运用相关知识和方法对投资存在的汇率风险进行系统的分析和识别，并能够判断不同情景对汇率波动的影响大小。充分识别汇率风险后，学生应根据国际货币市场波动，利用正态VaR,历史模拟法，蒙特卡洛风险计量模型，对汇率波动造成的影响进行估计和测算。",
        },
        {
          url: require("../assets/images/汇率管理工具图片.jpg"),
          title: "汇率风险管理工具",
          contain:
            "汇率风险是跨国投资中最常见的风险，可以采取的应对手段主要包括：远期外汇合约（Forward contracts）、货币市场套期保值（Money market hedging）、外汇期货交易（Currency futures）、外汇期权交易（Currency options）。利用货币市场和期权期货交易市场，能够实现套期保值，降低跨国投资中的汇率风险。",
        },
        {
          url: require("../assets/images/外汇期货交易图片.jpg"),
          title: "外汇期货对冲交易",
          contain:
            "外汇期货交易的基本原理是，外汇买卖成交后，买卖双方均未提供现货，而仅提供若干的保证金，并订立契约，约定在未来某月依据约定的汇率办理实际收付的外汇业务。外汇期权交易的基本原理是通过购买期权增强交易的灵活性,即可以有权选择有利于自己的汇率进行外汇买卖,消除汇率变动带来的损失。",
        },
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
          title: "四川大学1",
          contain: "这是新闻",
          time: "2020-07-20",
        },
      ],
      newsitem: [
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学2",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学3",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学4",
          time: "2020-07-30",
        },
        {
          url: require("../assets/images/5.jpg"),
          title: "四川大学5",
          time: "2020-07-30",
        },
      ],
      color: "left",
      flag: false,
    };
  },
  components: {
    // Bootommenu,
    // Contain,
  },
  methods: {
    link(a) {
      this.$router.push(a);
    },
    routelink(id, url) {
      if (
        this.$store.state.columnmessage.styleType == 0 ||
        this.$store.state.columnmessage.styleType == 1
      ) {
        getArticlemessage(id).then((res) => {
          console.log(res, 7);
          allColumn().then((data) => {
          console.log(res,6)
            var a = this.familyTree(data, res[0].columnId).length - 1;
            if (this.familyTree(data, res[0].columnId)[a]) {
              var id = this.familyTree(data, res[0].columnId)[a].id;
            }

            for (let i = 0; i < data.length; i++) {
              if (data[i].id == res[0].columnId) {
                this.flag = true;
                const { href } = this.$router.resolve({
                  path:
                    "/ChuanDa/" +
                    res[0].columnId +
                    "/leftmenu/" +
                    0 +
                    "/description/" +
                    res[0].id,
                });
           
                if (this.$store.state.columnmessage.openMethod == 1) {
                  returnColumn(res[0].columnId).then((res) => {
                    this.$store.state.columnmessage.styleType =
                      res[0].styleType;
                    localStorage.setItem(
                      "styleType",
                      this.$store.state.columnmessage.styleType
                    );
                    console.log(
                      this.$store.state.columnmessage.styleType,
                      "con"
                    );
                    window.open(href, "_blank");
                  });
                } else {
                  returnColumn(res[0].columnId).then((res) => {
                    this.$store.state.columnmessage.styleType =
                      res[0].styleType;
                    console.log(
                      this.$store.state.columnmessage.styleType,
                      "con"
                    );
                    window.open(href, "_self");
                  });
                }
              }
            }
            if (this.flag == false) {
              console.log(res, id,6);
              const { href } = this.$router.resolve({
                path:
                  "/ChuanDa/" +
                  id +
                  "/leftmenu/" +
                  res[0].columnId +
                  "/description/" +
                  res[0].id,
              });
              if (this.$store.state.columnmessage.openMethod == 1) {
                localStorage.setItem(
                  "styleType",
                  this.$store.state.columnmessage.styleType
                );
                window.open(href, "_blank");
                console.log(this.$store.state.columnmessage.styleType, "con1");
              } else {
                  localStorage.setItem(
                  "styleType",
                  this.$store.state.columnmessage.styleType
                );
                console.log(this.$store.state.columnmessage.styleType, "con2");
                window.open(href, "_self");
              }
              // console.log(this.$store.state.columnmessage.id, 1);
            }
          });
        });
      } else {
        getArticlemessage(id).then((res) => {
          console.log(res, 1);
          if (res[0].linkType == 1) {
            location.href = url;
          } else {
            allColumn().then((data) => {
              console.log(this.familyTree(data, res[0].linkColumnId), 2);
              var a = this.familyTree(data, res[0].linkColumnId).length - 1;
              var id = this.familyTree(data, res[0].linkColumnId)[a].id;
              for (let i = 0; i < data.length; i++) {
                if (data[i].id == res[0].linkColumnId) {
                  this.flag = true;
                  const { href } = this.$router.resolve({
                    path:
                      "/ChuanDa/" +
                      res[0].linkColumnId +
                      "/leftmenu/" +
                      0 +
                      "/description/" +
                      res[0].linkArticleId,
                  });
                  if (this.$store.state.columnmessage.openMethod == 1) {
                    returnColumn(res[0].linkColumnId).then((res) => {
                      this.$store.state.columnmessage.styleType =
                        res[0].styleType;
                      localStorage.setItem(
                        "styleType",
                        this.$store.state.columnmessage.styleType
                      );
                      //  localStorage.removeItem('styleType')
                      console.log(
                        this.$store.state.columnmessage.styleType,
                        "con"
                      );
                      window.open(href, "_blank");
                    });
                  } else {
                    returnColumn(res[0].linkColumnId).then((res) => {
                      this.$store.state.columnmessage.styleType =
                        res[0].styleType;
                      console.log(
                        this.$store.state.columnmessage.styleType,
                        "con"
                      );
                      window.open(href, "_self");
                    });
                  }
                }
              }
              if (this.flag == false) {
                console.log(res, "o");
                const { href } = this.$router.resolve({
                  path:
                    "/ChuanDa/" +
                    id +
                    "/leftmenu/" +
                    res[0].linkColumnId +
                    "/description/" +
                    res[0].linkArticleId,
                });
                if (this.$store.state.columnmessage.openMethod == 1) {
                  localStorage.setItem(
                    "styleType",
                    this.$store.state.columnmessage.styleType
                  );
                  window.open(href, "_blank");
                  console.log(
                    this.$store.state.columnmessage.styleType,
                    "con1"
                  );
                } else {
                  console.log(
                    this.$store.state.columnmessage.styleType,
                    "con2"
                  );
                  window.open(href, "_self");
                }
                console.log(this.$store.state.columnmessage.id, 1);
              }
            });
          }
        });
      }
    },
    linkto(val) {
      console.log(val, 66);
      if (val.linkType == 0) {
        allColumn().then((data) => {
          var columnid = val.linkColumnId;
          var a = this.familyTree(data, columnid).length - 1;
          var id = this.familyTree(data, columnid)[a].id;
          console.log(id);
          for (let i = 0; i < data.length; i++) {
            if (data[i].id == columnid) {
              this.flag = true;
              if (val.linkArticleId != "") {
                const { href } = this.$router.resolve({
                  path:
                    "/ChuanDa/" +
                    columnid +
                    "/leftmenu/" +
                    0 +
                    "/description/" +
                    val.linkArticleId,
                });
                returnColumn(columnid).then((res) => {
                  this.$store.state.columnmessage.styleType = res[0].styleType;
                  localStorage.setItem(
                    "styleType",
                    this.$store.state.columnmessage.styleType
                  );

                  window.open(href, "_blank");
                });
              } else {
                const { href } = this.$router.resolve({
                  path: "/ChuanDa/" + columnid + "/leftmenu/0",
                });
                window.open(href, "_blank");
              }
            }
          }
          if (this.flag == false) {
            if (val.linkArticleId != "") {
              const { href } = this.$router.resolve({
                path:
                  "/ChuanDa/" +
                  id +
                  "/leftmenu/" +
                  columnid +
                  "/description/" +
                  val.linkArticleId,
              });
              returnColumn(columnid).then((res) => {
                this.$store.state.columnmessage.styleType = res[0].styleType;
                localStorage.setItem(
                  "styleType",
                  this.$store.state.columnmessage.styleType
                );

                window.open(href, "_blank");
              });
            } else {
              const { href } = this.$router.resolve({
                path: "/ChuanDa/" + id + "/leftmenu/" + columnid,
              });
              window.open(href, "_blank");
            }
          }
        });
      } else {
        location.href = val.linkUrl;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    familyTree(arr1, id) {
      var temp = [];
      var forFn = function(arr, id) {
        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          if (item.id === id) {
            temp.push(item);
            forFn(arr1, item.parentId);
            break;
          } else {
            if (item.children) {
              forFn(item.children, id);
            }
          }
        }
      };
      forFn(arr1, id);
      return temp;
    },
    allcontain() {
      if (this.color == "left") {
        allColumn().then((data) => {
          var columnid = Number(this.homeFormfirst.columnIds[0]);
          var a = this.familyTree(data, columnid).length - 1;
          var id = this.familyTree(data, columnid)[a].id;
          console.log(id);
          for (let i = 0; i < data.length; i++) {
            if (data[i].id == this.homeFormfirst.columnIds[0]) {
              this.flag = true;
              const { href } = this.$router.resolve({
                path:
                  "/ChuanDa/" + this.homeFormfirst.columnIds[0] + "/leftmenu/0",
              });
              window.open(href, "_self");
            }
          }
          if (this.flag == false) {
            const { href } = this.$router.resolve({
              path:
                "/ChuanDa/" +
                id +
                "/leftmenu/" +
                this.homeFormfirst.columnIds[0],
            });
            window.open(href, "_self");
          }
        });
      }
      if (this.color == "right") {
        console.log("yes");
        allColumn().then((data) => {
          var columnid = Number(this.homeFormfirst.columnIds[1]);
          var a = this.familyTree(data, columnid).length - 1;
          var id = this.familyTree(data, columnid)[a].id;
          console.log(id);
          for (let i = 0; i < data.length; i++) {
            if (data[i].id == this.homeFormfirst.columnIds[1]) {
              this.flag = true;
              const { href } = this.$router.resolve({
                path:
                  "/ChuanDa/" + this.homeFormfirst.columnIds[1] + "/leftmenu/0",
              });
              window.open(href, "_self");
            }
          }
          if (this.flag == false) {
            const { href } = this.$router.resolve({
              path:
                "/ChuanDa/" +
                id +
                "/leftmenu/" +
                this.homeFormfirst.columnIds[1],
            });
            window.open(href, "_self");
          }
        });
      }
    },
    changecolor(column) {
      if (column == "left") {
        getColumnarticle(this.homeFormfirst.columnIds[0], 1).then((res) => {
          if (res) {
            this.homeFormfirst.linkcolumnarticletop = res.list[0];
            this.homeFormfirst.linkcolumnarticlebottom = res.list.splice(1, 4);
          }
        });
        returnColumn(this.homeFormfirst.columnIds[0]).then((res) => {
          this.$store.state.columnmessage.styleType = res[0].styleType;
          this.$store.state.columnmessage.openMethod = res[0].openMethod;
          console.log(res, 9);
        });
        this.color = "left";
      }
      if (column == "right") {
        getColumnarticle(this.homeFormfirst.columnIds[1], 1).then((res) => {
          if (res) {
            this.homeFormfirst.linkcolumnarticletop = res.list[0];
            this.homeFormfirst.linkcolumnarticlebottom = res.list.splice(1, 4);
          }
        });
        returnColumn(this.homeFormfirst.columnIds[0]).then((res) => {
          this.$store.state.columnmessage.styleType = res[0].styleType;
          this.$store.state.columnmessage.openMethod = res[0].openMethod;
          console.log(res, 9);
        });
        this.color = "right";
      }
    },
  },

  mounted() {
    getHomecolumn().then((res) => {
      this.homeFormfirst.columnIds = res[0].columnIds.split(",");
      getHomebanner(res[0].bgImgId).then((res) => {
        this.homeFormfirst.bannerurl = res[0].imgUrl;
        console.log(res, 9);
      });
      getHomecarouse(res[0].carouselIds).then((res) => {
        this.homeFormfirst.tableData = res.filter((res) => {
          if (res.isOpen == 0) {
            return res;
          }
        });
      });
      getHomeheadline(res[0].headline1Id).then((res) => {
        this.homeFormfirst.titleone = res[0].title;
      });
      getHomelinks(res[0].linkIds).then((res) => {
        this.homeFormfirst.links1 = res.splice(0, 3);
        this.homeFormfirst.links2 = res;
        console.log(res, "ply");
      });
      getHomeheadline(res[0].headline2Id).then((res) => {
        this.homeFormfirst.titletwo = res[0].title;
      });
      returnColumn(this.homeFormfirst.columnIds[0]).then((res) => {
        this.homeFormfirst.linkcolumn = res[0].columnName;
        this.$store.state.columnmessage.styleType = res[0].styleType;
        this.$store.state.columnmessage.showType = res[0].showType;
        this.$store.state.columnmessage.openMethod = res[0].openMethod;
        console.log(res, 9);
      });

      returnColumn(this.homeFormfirst.columnIds[1]).then((res) => {
        this.homeFormfirst.linkcolumntwo = res[0].columnName;
      });
      getColumnarticle(this.homeFormfirst.columnIds[0], 1).then((res) => {
        if (res) {
          this.homeFormfirst.linkcolumnarticletop = res.list[0];
          console.log(this.homeFormfirst.linkcolumnarticletop, 666);
          this.homeFormfirst.linkcolumnarticlebottom = res.list.splice(1, 4);
        }
        console.log(res, 0);
      });
    });
    getHomelink().then((res) => {
      console.log(res, 666);
      this.Datachild = res[0];
      // console.log(this.Datachild, 8);
      this.Data = res[1];
    });
  },
};
</script>
<style lang="less">
.home {
  font-family: "Source Han Serif CN";
  .banner {
    width: 100%;
    height: 400px;
    .topbanner {
      width: 100%;
      height: 400px;
    }
    text-align: center;
    position: relative;
    margin-bottom: 260px;
    .icon {
      margin-top: 40px;
    }
    p {
      color: #ffffff;
      font-size: 40px;
      padding: 0;
      margin: 0;
      margin-top: 15px;
    }
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(75, 70, 70, 0.7);
      top: 0;
      left: 0;
    }
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  #lunbo {
    display: flex;
    justify-content: space-between;
    height: 360px;
    margin-top: 30px;
    .block {
      width: 1000px;
      height: 360px;
      background: #fff;
      .box {
        width: 460px;
        margin-left: 30px;
        h3 {
          font-size: 24px;
        }
        .description {
          text-align: left;
          width: 460px;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 11;
          -webkit-box-orient: vertical;
          margin-top: 16px;
          color: #333;
          font-size: 16px;
          line-height: 30px;
        }
      }
      box-shadow: -2px 2px 12px 0px #ccc;
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
    height: 360px;
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
    .carousevideo {
      width: 450px;
      height: 290px;
      object-fit: fill;
      margin-left: 28px;
      margin-top: 28px;
    }
    .carousevideo:focus {
      outline: none;
    }
    h3 {
      // color: red;
      font-size: 20px;
      margin-top: 30px;
      text-align: left;
    }
  }

  .el-carousel__indicator--horizontal .el-carousel__button {
    background: red;
  }
  .el-carousel--horizontal {
    overflow-y: hidden;
  }
  .title {
    font-size: 26px;
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
      margin-top: 1px;
      display: inline-block;
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-size: 100%;
      margin-right: 10px;
    }
    // span {
    //   margin-top: 10px;
    // }
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
      box-shadow: 1px 1px 8px #ccc;
      p {
        margin-top: 10px;
      }
      .china {
        font-size: 24px;
        color: #2d2d2d;
        margin-top: 16px;
      }
      .english {
        color: #999999;
        font-size: 18px;
        width: 200px;
        margin: 18px auto;
      }
      img {
        width: 80px;
        height: 80px;
        margin-top: 20px;
      }
    }
  }
  .sourceitems div:hover {
    transform: scale(1.1);
    -ms-transform: scale(1.1);
    background: #bb2b18;

    cursor: pointer;
    p {
      color: #fff;
    }
  }
  .news {
    margin-top: 90px;
    .allnews {
      font-size: 14px;
      margin-top: 14px;
      cursor: pointer;
      color: #8c8f94;
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
        font-size: 22px;
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
      cursor: pointer;
      img {
        width: 580px;
        height: 350px;
      }
      .columphotodetail {
        padding: 20px 30px;
        width: 560px;
        height: 310px;
        background: rgb(241, 238, 238);
        position: relative;
        h3{
          font-size: 22px;
        }
        .textcontent {
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          line-height: 28px;
          margin-top: 10px;
          img{
            display: none;
          }
          video{
            display: none;
          }
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
          margin-top: 14px;
          margin-left: 8px;
        }
        .time {
          color: #ccc;
        }
      }
    }
    .columphotoes > div:hover {
      box-shadow: 1px 1px 8px 0px #ccc;
      transform: scale(1.05);
      -ms-transform: scale(1.05);
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
  // .el-menu-item:hover {
  //   background-color: #ccc !important;
  // }
  // .el-menu-item.is-active {
  //   color: #000;
  //   background-color: #ccc !important;
  // }
  // .el-menu--horizontal>.el-submenu .el-submenu__title {
  //  font-size: 18px !important;
  // }
  //  .el-submenu .el-submenu__title:hover {
  //   background: #ccc !important;
  // }

  // .el-submenu.is-opened .el-submenu__title {
  //    background: #ccc !important;
  //   color: #fff;
  // }
}
</style>
