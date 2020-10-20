<template>
  <div>
    <Home
      v-if="
        this.$store.state.columnmessage.columnName == '首页' &&
          this.$store.state.columnmessage.data == ''
      "
    />
    <div v-else class="location">
      <img
        :src="this.$store.state.columnmessage.bgImgUrl"
        alt=""
        class="banner"
      />
      <div class="bannertitle">
         
        <p>{{ this.$store.state.columnmessage.columnName}}</p>
        <p class="english">{{this.$store.state.columnmessage.english
          }}

        </p>
 
      </div>
      <div class="container clearfix">
        <!-- <li class="leftmenutop" v-if="id">
          <p>{{  id}}</p>
        </li> -->
        <el-menu
          v-if="listData.length > 0"
          unique-opened
          :default-active="$route.params.a"
          class="el-menu-vertical-demo"
          background-color="#f3f3f3"
          text-color="#000"
          active-text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <Child :dataList="listData"></Child>
        </el-menu>

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { getColumnarticle } from "@/apis/request.js";
import { getColumnchildren } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
import Child from "@/components/Childmenu.vue";
import Home from "@/views/Home.vue";
export default {
  data() {
    return {
      id: "",
      path: "",
      bgImgUrl: "",
      listData: [],
      columnmessage: {
        data: [],
        showType: 0,
        styleType: 0,
      },
    };
  },
  components: {
    Child,
    Home,
    // Contain,
  },
  methods: {
    handleOpen(key) {
      this.$store.state.bottomcolumnid = key;
      this.$router.push({
        path:
          "/ChuanDa/" + this.$store.state.columnmessage.id + "/leftmenu/" + key,
      });
      getColumnarticle(key, 1).then((res) => {
        this.$store.state.columnmessage.data = res.list;
        this.$store.state.columnmessage.total = res.total;
      });
      returnColumn(key).then((res) => {
        this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
        this.$store.state.columnmessage.columnName = res[0].columnName;
        this.$store.state.columnmessage.english = res[0].english;
        this.$store.state.columnmessage.showType = res[0].showType;
        this.$store.state.columnmessage.styleType = res[0].styleType;
        this.$store.state.columnmessage.openMethod = res[0].openMethod;
        console.log(this.$store.state.columnmessage.styleType, 0);
      });
    },
    handleClose(key) {
      this.$store.state.bottomcolumnid = key;
      this.$router.push({
        path:
          "/ChuanDa/" + this.$store.state.columnmessage.id + "/leftmenu/" + key,
      });
      getColumnarticle(key, 1).then((res) => {
        this.$store.state.columnmessage.data = res.list;
        this.$store.state.columnmessage.total = res.total;
      });
      returnColumn(key).then((res) => {
        this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
        this.$store.state.columnmessage.columnName = res[0].columnName;
        this.$store.state.columnmessage.english = res[0].english;
        this.$store.state.columnmessage.showType = res[0].showType;
        this.$store.state.columnmessage.openMethod = res[0].openMethod;
        this.$store.state.columnmessage.styleType = res[0].styleType;
      });
    },
  },

  watch: {
    $route(to) {
      //  console.log('变化1')
      if (to.path.indexOf("/leftmenu/0") > -1) {
        console.log("变化1");
        this.id = this.$route.params.id;
        this.path = this.$route.path;
        getColumnchildren(this.id).then((res) => {
          this.listData = JSON.parse(JSON.stringify(res));
          if (res.length == 0) {
            this.$store.state.bottomcolumnid = 0;
            getColumnarticle(this.id, 1).then((res) => {
              this.$store.state.columnmessage.data = res.list;
              returnColumn(this.id).then((data) => {
                if (res.list.length == 1 && data[0].styleType != 2) {
                  let id = res.list[0].id;
                  this.$router.push({
                    path:
                      "/ChuanDa/" +
                      this.$store.state.columnmessage.id +
                      "/leftmenu/" +
                      this.$store.state.bottomcolumnid +
                      "/description/" +
                      id,
                  });
                }
              });

              this.$store.state.columnmessage.total = res.total;
            });
            returnColumn(this.id).then((res) => {
              this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
              this.$store.state.columnmessage.columnName = res[0].columnName;
               this.$store.state.columnmessage.english = res[0].english;
              this.$store.state.columnmessage.id = res[0].id;
              this.$store.state.columnmessage.openMethod = res[0].openMethod;
              this.$store.state.columnmessage.showType = res[0].showType;
              this.$store.state.columnmessage.styleType = res[0].styleType;
            });
          } else {
            this.$store.state.bottomcolumnid = res[0].id;
            this.listData.unshift({
              columnName: this.$store.state.columnmessage.topColumnname,
              children: [],
              id: -1,
            });
            getColumnarticle(res[0].id, 1).then((res) => {
              this.$store.state.columnmessage.data = res.list;
              this.$store.state.columnmessage.total = res.total;
                  returnColumn(res[0].id).then((data) => {

                 if (res.list.length == 1&&data[0].styleType!=2) {
                let id = res.list[0].id;
                this.$router.push({
                  path:
                    "/ChuanDa/" +
                    this.$store.state.columnmessage.id +
                    "/leftmenu/" +
                    this.$store.state.bottomcolumnid +
                    "/description/" +
                    id,
                });
              }
          
            });
           
            });
            returnColumn(res[0].id).then((res) => {
              this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
              this.$store.state.columnmessage.showType = res[0].showType;
              this.$store.state.columnmessage.styleType = res[0].styleType;
              this.$store.state.columnmessage.openMethod = res[0].openMethod;
              this.$store.state.columnmessage.columnName = res[0].columnName;
               this.$store.state.columnmessage.english = res[0].english;
              this.$router.push({
                path: `/ChuanDa/` + this.id + "/leftmenu/" + res[0].id,
              });
            });
          }
        });
      } else {
        console.log("变化2");
        getColumnarticle(this.$route.params.a, 1).then((res) => {
          this.$store.state.columnmessage.data = res.list;
          this.$store.state.columnmessage.total = res.total;
             returnColumn(this.$route.params.a).then((data) => {
      if (res.list.length == 1&&data[0].styleType!=2) {
            let id = res.list[0].id;
            this.$router.push({
              path:
                "/ChuanDa/" +
                this.$store.state.columnmessage.id +
                "/leftmenu/" +
                this.$store.state.bottomcolumnid +
                "/description/" +
                id,
            });
          }
    
        });
    
        });
        returnColumn(this.$route.params.a).then((res) => {
          this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
          this.$store.state.columnmessage.showType = res[0].showType;
          this.$store.state.columnmessage.styleType = res[0].styleType;
          this.$store.state.columnmessage.openMethod = res[0].openMethod;
          this.$store.state.columnmessage.columnName = res[0].columnName;
           this.$store.state.columnmessage.english = res[0].english;
        });
      }
    },
  },
  created() {
    console.log("变化3");
    this.$store.state.bgImgUrl = null;
    this.id = this.$route.params.id;
    this.$store.state.columnmessage.id = this.$route.params.id;
    this.path = this.$route.path;
    getColumnchildren(this.id).then((res) => {
      this.listData = res;
      if (res.length == 0) {
        this.$store.state.bottomcolumnid = 0;
        getColumnarticle(this.id, 1).then((res) => {
          this.$store.state.columnmessage.data = res.list;
          this.$store.state.columnmessage.total = res.total;
          returnColumn(this.id).then((res) => {
            this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
            this.$store.state.columnmessage.columnName = res[0].columnName;
            this.$store.state.columnmessage.english = res[0].english;
            this.$store.state.columnmessage.openMethod = res[0].openMethod;
            this.$store.state.columnmessage.id = res[0].id;
            this.$store.state.columnmessage.showType = res[0].showType;
            this.$store.state.columnmessage.styleType = res[0].styleType;
            console.log(this.$store.state.columnmessage.styleType, 1);
            if (
              this.$store.state.columnmessage.data.length == 1 &&
              res[0].styleType != 2
            ) {
              let id = this.$store.state.columnmessage.data[0].id;
              this.$router.push({
                path:
                  "/ChuanDa/" +
                  this.$store.state.columnmessage.id +
                  "/leftmenu/" +
                  this.$store.state.bottomcolumnid +
                  "/description/" +
                  id,
              });
            }
            if (this.$route.params.a != 0) {
              this.$store.state.bottomcolumnid = this.$route.params.a;
              returnColumn(this.$route.params.a).then((res) => {
                this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
                this.$store.state.columnmessage.showType = res[0].showType;
                this.$store.state.columnmessage.openMethod = res[0].openMethod;
                this.$store.state.columnmessage.styleType = res[0].styleType;
                this.$store.state.columnmessage.columnName = res[0].columnName;
                this.$store.state.columnmessage.english = res[0].english;

              });
              getColumnarticle(this.$route.params.a, 1).then((res) => {
                this.$store.state.columnmessage.data = res.list;
                this.$store.state.columnmessage.total = res.total;
              });
            }
          });
        });
      } else {
        // console.log("a");
        this.$store.state.bottomcolumnid = res[0].id;
        returnColumn(this.id).then((res) => {
          this.$store.state.columnmessage.topColumnname = res[0].columnName;
          this.listData.unshift({
            columnName: this.$store.state.columnmessage.topColumnname,
            children: [],
            id: -1,
          });
        });
        if (this.$route.params.a != 0) {
          // console.log("b");
          this.$store.state.bottomcolumnid = this.$route.params.a;
          getColumnarticle(this.$route.params.a, 1).then((res) => {
            this.$store.state.columnmessage.data = res.list;
            this.$store.state.columnmessage.total = res.total;
            returnColumn(this.$route.params.a).then((data) => {
              this.$store.state.columnmessage.bgImgUrl = data[0].bgImgUrl;
              this.$store.state.columnmessage.showType = data[0].showType;
              this.$store.state.columnmessage.openMethod = data[0].openMethod;
              this.$store.state.columnmessage.styleType = data[0].styleType;
              this.$store.state.columnmessage.columnName = data[0].columnName;
                 this.$store.state.columnmessage.english = data[0].english;
              if (res.list.length == 1 && data[0].styleType != 2) {
                var id = res.list[0].id;
                this.$router.push({
                  path:
                    "/ChuanDa/" +
                    this.$store.state.columnmessage.id +
                    "/leftmenu/" +
                    this.$store.state.bottomcolumnid +
                    "/description/" +
                    id,
                });
              }
              console.log(data, 666);
              console.log(
                this.$store.state.columnmessage.styleType,
                "styleType1"
              );
            });
          });
        } else {
          if (this.$route.params.b != undefined) {
            returnColumn(this.$route.params.id).then((res) => {
              this.$store.state.columnmessage.styleType = res[0].styleType;
              console.log(res[0].bgImgUrl, 3);
            });
            // console.log("c");
            return false;
          }
          console.log("d");
          this.$router.push({
            path: `/ChuanDa/` + this.id + "/leftmenu/" + res[0].id,
          });
          getColumnarticle(res[0].id, 1).then((res) => {
            this.$store.state.columnmessage.data = res.list;
            this.$store.state.columnmessage.total = res.total;
          });
          returnColumn(res[0].id).then((res) => {
            this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
            this.$store.state.columnmessage.showType = res[0].showType;
            this.$store.state.columnmessage.openMethod = res[0].openMethod;
            this.$store.state.columnmessage.styleType = res[0].styleType;
            this.$store.state.columnmessage.columnName = res[0].columnName;
            this.$store.state.columnmessage.english = res[0].english;
          });
        }
      }
    });
  },
  mounted() {},
  computed: {},
};
</script>

<style lang="less" scoped>
.banner {
  // display: block;
  width: 100%;
  height: 180px;
 
.location{
 position: relative;
}
}
.bannertitle{
  width: 445px;
  height: 151px;
  background: url('../assets/images/back.png');
   position: absolute;
   right: 46px;
   top: 99px;
   font-size: 36px;
   color: #fff;
   text-align: center;
  .english{
    font-size: 30px;
    text-transform: uppercase;
  }
 p{
   margin-top: 20px;
 }

}
.el-menu {
  text-align: center;
  width: 200px;
  border-right: 0px;
  float: left;
  .leftmenutop {
    line-height: 51px;
    width: 180px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    p {
      border-bottom: 2px solid #ccc;
    }
  }
  .el-menu-item {
    font-size: 16px;
  }
  .el-submenu {
    .el-submenu__title {
      span {
        font-size: 16px;
      }
    }
  }
}
</style>
