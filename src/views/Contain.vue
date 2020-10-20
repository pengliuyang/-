<template>
  <div class="newsnotice">
    <!-- <div class="title" >
      <span>{{ this.$store.state.columnmessage.columnName }}</span>

    </div> -->
    <div class="titlebottomone" v-if="showType == 1&&$store.state.columnmessage.data.length>1||(showType == 1&&$store.state.columnmessage.styleType==2)">
        <div class="title" >
      <span>{{ this.$store.state.columnmessage.columnName  }}</span>
      <!-- <a href="">&lt;&emsp;返回</a> -->
    </div>
      <div
        @click="link(value.id, value.linkUrl)"
        class="noticeitems"
        v-for="value in columnData"
        :key="value.id"
      >
        <img :src="value.bgImgUrl" alt="" />
        <div class="detail">
          <h3>{{ value.title }}</h3>
          <p>
            {{ value.description }}
          </p>
          <span>{{ value.createTime }}</span>
        </div>
      </div>
    </div>
    <div class="titlebottomtwo" v-if="showType == 0&&$store.state.columnmessage.data.length>1||(showType == 0&&$store.state.columnmessage.styleType==2)">
         <div class="title" >
      <span>{{ this.$store.state.columnmessage.columnName  }}</span>

    </div>
      <div
        @click="link(value.id, value.linkUrl)"
        :to="path + value.id"
        v-for="value in columnData"
        :key="value.id"
      >
        <div class="teachershow">
          <img :src="value.bgImgUrl" alt="" />
          <div>
            <P class="name">{{ value.title }}</P>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      background
      layout="prev, pager, next"
      :total="this.$store.state.columnmessage.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getColumnarticle } from "@/apis/request.js";
import { getArticlemessage } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
// import Description from "./Description.vue";

import { allColumn } from "@/apis/request.js";
export default {
  data() {
    return {
      currentPage: 1,
      total: 50,
      flag: false,
      arrData: [],
    };
  },
  components:{
    // Description
  },
  methods: {
    link(id, url) {
      if (
        this.$store.state.columnmessage.styleType == 0 ||
        this.$store.state.columnmessage.styleType == 1
      ) {
        this.$router.push({
          path:
            "/ChuanDa/" +
            this.$store.state.columnmessage.id +
            "/leftmenu/" +
            this.$store.state.bottomcolumnid +
            "/description/" +
            id,
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
    handleCurrentChange(val) {
      this.currentPage = val;
      this.querystock();
    },
    querystock() {
      if (this.$route.params.a != 0) {
        getColumnarticle(this.$route.params.a, this.currentPage).then((res) => {
          this.$store.state.columnmessage.data = res.list;
          this.$store.state.columnmessage.total = res.total;
          console.log(res, 666);
        });
      } else {
        getColumnarticle(
          this.$store.state.columnmessage.id,
          this.currentPage
        ).then((res) => {
          this.$store.state.columnmessage.data = res.list;
          this.$store.state.columnmessage.total = res.total;
          console.log(res, 666);
        });
      }
    },

    getParentNode(data, nodeId, arrRes) {
      if (!data) {
        if (!nodeId) {
          arrRes.unshift(nodeId);
        }
        return arrRes;
      }
      for (var i = 0, length = data.length; i < length; i++) {
        let node = data[i];
        if (node.value == nodeId) {
          arrRes.unshift(nodeId);
          this.getParentNode(this.arrData, node.parentId, arrRes);
          break;
        } else {
          if (node.children) {
            this.getParentNode(node.children, nodeId, arrRes);
          }
        }
      }
      return arrRes;
    },
  },
  computed: {
    showType() {
      if (
        this.$store.state.columnmessage.showType == 0 ||
        this.$store.state.columnmessage.showType == 1
      ) {
        return this.$store.state.columnmessage.showType;
      } else {
        return "";
      }
    },
    columnData() {
      if (this.$store.state.columnmessage.data.length > 0) {
        return this.$store.state.columnmessage.data;
      } else {
        return [];
      }
    },
    columnName(){
      if(this.$store.state.columnmessage.columnName){
        return  this.$store.state.columnmessage.columnName
      }
      else{
        return ''
      }
    },
    path() {
      return "/ChuanDa/" + this.$store.state.columnmessage.id + "/description/";
    },
  },
  created(){
  //   if(this.showType == 1&&this.columnData.length==1){
  //    this.link(93)
  //   }
  //   if(this.showType == 0&&this.columnData.length==1){
  // this.link(93)
  //   }
  console.log()
   
  }

};
</script>

<style lang="less">
.newsnotice {
  width: 980px;
  float: right;

  .title {
    display: flex;
    justify-content: space-between;
        width: 100%;
    font-size: 18px;
    padding-bottom: 10px;
    padding-top: 20px;
    border-bottom: 2px solid #ccc;
    color: #2d2d2d;
    font-size: 18px;
    a {
      color: #2d2d2d;
    }
  }
  .titlebottomone {
    .noticeitems {
      display: flex;
      margin-top: 30px;
      height: 100px;
      img {
        height: 100%;
        width: 160px;
      }
      .detail {
        flex: 1;
        padding-left: 20px;
        padding-top: 10px;
        background: rgb(230, 227, 227);
        position: relative;
        h3 {
          font-size: 18px;
          color: #2d2d2d;
        }
        p {
          width: 600px;
          margin-top: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 16px;
          color: #2d2d2d;
        }
        span {
          position: absolute;
          right: 10px;
          bottom: 10px;
          color: #999;
          font-size: 14px;
        }
      }
      transition: 1s;
    }
    .noticeitems:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }
  .titlebottomtwo {
    display: flex;
    flex-wrap: wrap;
    .teachershow {
      display: flex;
      margin-top: 30px;
      img {
        width: 260px;
        height: 118px;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 3px 10px #dee4ea;
        width: 180px;
        margin-right: 20px;
        padding: 0px 15px;
        color: #2d2d2d;
        .name {
          font-size: 16px;
          color: #333333;
        }
      }
    }
    .teachershow:hover {
      cursor: pointer;
    }
  }
  .el-pagination {
    width: 200px;

    margin: 180px auto;
  }
}
</style>
