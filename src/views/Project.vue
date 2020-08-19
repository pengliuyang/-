<template>
  <div class="project">
    <div class="banner">
      <img src="../assets/images/组46.jpg" alt="" />
    </div>
    <div class="centeritems container clearfix">
      <ul class="asides">
        <li>项目介绍</li>
        <li v-for="list in lists" :key="list">
          <a
            :class="{
              p_title: true,
              active: $route.path.indexOf(list.route) > 0 ? true : false,
            }"
            v-on:click="curshow(list)"
          >
            <span :class="list.flag ? 'down' : 'up'"
              ><img
                width="20px"
                src="../assets/images/箭头-下.png"
                alt=""/></span
            >{{ list.name }}
          </a>
          <ul class="c_item" v-if="list.flag">
            <li v-for="sub in list.sublist" :key="sub">
              <a   :class="{
              active: $route.path.indexOf(sub.route) > 0 ? true : false,
            }"
            v-on:click="subshow(sub.route)">{{ sub.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          name: "项目列表",
          //用于状态判定
          flag: false,
          //二级菜单
          sublist: [{ name: "项目1" ,route: "projectlistone"}, { name: "项目2",route: "projectlisttwo"}],
          route: "projectlist",
        },
        {
          name: "中心特色",
          flag: false,
          sublist: [
            { name: "裙子" },
            { name: "套装" },
            { name: "娃娃鞋" },
            { name: "靴子" },
          ],
          route: "centralfeatures",
        },
        {
          name: "现任领导",
          flag: false,
          sublist: [{ name: "哈哈" }, { name: "哈哈" }, { name: "哈哈" }],
        },
      ],
    };
  },
  methods: {
    link(a) {
      this.$router.push(a);
    },
    curshow: function(list) {
      //如果状态是点开的，那么再次点击就隐藏
      if (list.flag) {
        list.flag = false;
      }
      //若当前的是隐藏，则点击当前的显示，其余的隐藏
      else {
        for (let i = 0; i < this.lists.length; i++) {
          this.lists[i].flag = false;
        }
        list.flag = true;
      }
      this.$router.push(list.route);
    },
    subshow(route){
      this.$router.push(route);
    }
  },
};
</script>

<style lang="less" scoped>
.project {
   font-family: 'Source Han Serif CN';
  .banner {
    height: 200px;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .centeritems {
    margin-top: 30px;
    .asides {
      background: #f3f3f3;
      width: 180px;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
      font-size: 18px;
      color: #2d2d2d;
      float: left;
      li {
        margin-bottom: 20px;
      }
      .p_title {
        color: #2d2d2d;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span {
          margin-right: 10px;
          height: 22px;
          font-size: 20px;
          transition: all ease 1s;
          -webkit-transition: all ease 1s;
          -o-transition: all ease 1s;
          -moz-transition: all ease 1s;
          -ms-transition: all ease 1s;
        }
        .up {
          transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
        }
        .down {
          transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
        }
      }
      .c_item {
        margin-top: 20px;
        li {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
          a {
            display: block;
            background: #f3f3f3;
            color: #2d2d2d;
            cursor: pointer;
            width: 70%;
            font-size: 16px;
            line-height: 30px;
          }
           .active {
        background: #bb2a17;
        color: #fff;
      }
        }
      }
        .active {
        background: #bb2a17;
        color: #fff;
      }
      .c_item li a:hover {
        background: #bb2a17;
        color: #fff;
      }
    }
  }
  .centeritems > ul > li:not(:nth-child(1)) {
    min-height: 30px;
    line-height: 30px;
  }
  .centeritems > ul > li:not(:nth-child(1)):hover > a {
    background: #bb2a17;
    color: #fff;
  }
  .centeritems > ul > li:first-child {
    width: 160px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  margin-bottom: 90px;
}
</style>
