<template>
  <div class="topbar">
    <div>
      <!-- <img src="../assets/images/2.png" alt="" />
      <img src="../assets/images/1.png" alt="" width="120" /> -->
      <img src="../assets/images/logo1.png" alt="" srcset="">
    </div>

    <ul class="clearfix">
      <!-- <li>
        <span @click="fun('/home')" :class="{active:$route.path.indexOf('home')>0?true:false}">首页</span>
      </li> -->
      <li
        v-for="value in columnall"
        :key="value.id"
        @click="route(value.id, value.columnName)"
      >
        <span
          :class="{
            active:
              $route.path.indexOf('ChuanDa/' + value.id) > 0 ? true : false,
          }"
          >{{ value.columnName }}</span
        >
      </li>
    </ul>
    <div class="posit">
      <div class="line"></div>
      <div class="circle clearfix" @click="mange()">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { allColumn } from "@/apis/request.js";
// import { getColumnchildren } from "@/apis/request.js";
export default {
  data() {
    return {
      columnall: [],
    };
  },
  methods: {
    fun(a) {
      this.$router.push(a);
    },
    mange() {
      location.href = "http://liuwanr.cn:8080/distt/login";
    },
    route(id, name) {
      console.log(name);
      //  this.$router.push({
      //   path: `/ChuanDa/`+id+'/leftmenu/0',
      // })
      //  location.href=`/ChuanDa/`+id+'/leftmenu/0';
      const { href } = this.$router.resolve({
        path: `/ChuanDa/` + id + "/leftmenu/0",
      });
      window.open(href, "_self");
      //     getColumnchildren(id).then((res)=>{
      //    if(res==''){
      //  this.$router.push({
      //         path: `/ChuanDa/`+id+'/leftmenu/0',
      //       })
      //    }
      //    else{
      //        this.$router.push({
      //         path: `/ChuanDa/`+id+'/leftmenu/'+res[0].id,
      //       })
      //    }
      //     })

      // this.$store.state.topcolumnid=id;
      this.$store.state.columnmessage.id = id;
      this.$store.state.columnmessage.topColumnname = name;
    },
  },
  computed: {},
  mounted() {
    allColumn().then((res) => {
      this.columnall = res;
      this.columnall = this.columnall.filter((res) => {
        if (res.isShow == 0) {
          return res;
        }
      });
    });
  },
};
</script>

<style lang="less">
.topbar {
  padding: 10px;
  height: 50px;
  display: flex;
  // justify-content: space-between;
  position: relative;
  background: #fff;
  .posit {
    display: flex;
    position: absolute;
    right: 10px;
    width: 24px;
    justify-content: space-between;
  }
  .line {
    width: 1px;
    height: 30px;
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.678);
  }
  img {
    height: 50px;
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
    span {
      display: inline-block;
      height: 30px;
      font-size: 18px;
      font-family: "Source Han Serif CN";
      color: rgba(0, 0, 0, 0.678);
    }
  }
  ul li:hover {
    span {
      color: #bb2a17;
    }
  }
  ul li:first-child {
    margin-left: 160px;
  }
  // ul li:last-child {
  //   border-right: 1px solid rgba(0, 0, 0, 0.678);
  //   // margin-right: 20px;
  // }
  .circle {
    margin-top: 10px;
    width: 4px;
    height: 50px;
    // float: right;
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
  .active {
    color: #bb2a17;
  }
}
</style>
