<template>
  <div class="menu-tree">
    <label v-for="list in dataList" :key="list.id">
      <el-submenu :index="list.id" v-if="list.children.length != 0">
        <template slot="title">
          <span>{{ list.columnName }}</span>
        </template>
        <label>
          <Child :dataList="list.children"></Child>
        </label>
      </el-submenu>
      <el-menu-item :index="list.id" v-else @click="getColumnmessage(list.id)">
        <span slot="title">{{ list.columnName }}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
import { getColumnarticle } from "@/apis/request.js";
import { getColumnchildren } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
export default {
  name: "Child",
  props: ["dataList"],

  data() {
    return {
      id: 12,
    };
  },

  methods: {
    getColumnmessage(key) {
      if (key == -1) {
        return false;
      }
      this.$store.state.bottomcolumnid = key;
      this.$router.push({
        path:
          "/ChuanDa/" + this.$store.state.columnmessage.id + "/leftmenu/" + key,
      });
      getColumnchildren(key).then((res) => {
        if (res.length == 0) {
          getColumnarticle(key, 1).then((res) => {
            this.$store.state.columnmessage.data = res.list;
            this.$store.state.columnmessage.total = res.total;
          });
          returnColumn(key).then((res) => {
          this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
            this.$store.state.columnmessage.columnName = res[0].columnName;
            this.$store.state.columnmessage.showType = res[0].showType;
            this.$store.state.columnmessage.styleType = res[0].styleType;
            this.$store.state.columnmessage.english = res[0].english;
            this.$store.state.columnmessage.openMethod = res[0].openMethod;
          });
        //  console.log(this.$store,'p')  
        } else {
          getColumnarticle(res[0].id, 1).then((res) => {
            this.$store.state.columnmessage.data = res.list;
            this.$store.state.columnmessage.total = res.total;
            console.log(res,0)
          });
          returnColumn(res[0].id).then((res) => {
            this.$store.state.columnmessage.showType = res[0].showType;
            this.$store.state.columnmessage.styleType = res[0].styleType;
            this.$store.state.columnmessage.columnName = res[0].columnName;
            this.$store.state.columnmessage.english = res[0].english;
            this.$store.state.columnmessage.openMethod = res[0].openMethod;
          });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-item.is-active {
  color: #fff;
  background-color: #bb2a17 !important;
}
.el-menu-item:hover {
  background-color: #bb2a17 !important;
}
// label:nth-child(1) .el-menu-item:nth-child(1):hover {
//   background-color: #ccc  !important;
// }
.el-menu > .menu-tree > label:nth-child(1) > .el-menu-item {
  margin-bottom: 10px;

  span {
    margin: 0 auto;
    display: inline-block;
    width: 160px;
    border-bottom: 2px solid #ccc;
    font-size: 16px;
  }
}
.el-menu > .menu-tree > label:nth-child(1) > .el-menu-item:hover {
  background-color: #f3f3f3 !important;
  color: #000 !important;
}
.el-menu > .menu-tree > label:nth-child(1) > .el-menu-item.is-active {
  color: #000 !important;
  background-color: #f3f3f3 !important;
}
.el-menu-vertical-demo .el-submenu .el-submenu__title:hover {
  background: #bb2a17 !important;
}
// .el-menu-vertical-demo .el-submenu .el-submenu__title {
//  background-color:#f3f3f3 !important;
// }
.el-menu-vertical-demo .el-submenu.is-opened .el-submenu__title {
   background: #bb2a17 !important;
  color: #fff;
}
</style>
