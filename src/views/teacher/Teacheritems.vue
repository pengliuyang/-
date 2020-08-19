<template>
  <div class="teacheritems">
    <div class="title">
      <span>师资详情</span>
      <router-link to="/teacher/teacherstaff">&lt;&emsp;返回</router-link>
    </div>
    <div class="titlebottom">
      <h1>{{ data.title }}</h1>
      <p>{{ data.textContent }}</p>
    </div>
    <div></div>
  </div>
</template>

<script>
import { teacheritems } from "@/apis/home";
export default {
  data() {
    return {
      data: "",
    };
  },
  methods: {},
  created() {
    console.log(this.$store.state.id)
    teacheritems(this.$store.state.id).then((res) => {
      this.data = res;
    });
  },
};
</script>

<style lang="less" scoped>
.teacheritems {
  width: 980px;
  float: right;
  .title {
    display: flex;
    justify-content: space-between;
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
  .titlebottom {
    display: flex;
    flex-wrap: wrap;
    .teachershow {
      display: flex;
      margin-top: 30px;
      img {
        width: 270px;
        height: 154px;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
        width: 190px;
        color: #2d2d2d;
        .name {
          font-size: 20px;
        }
      }
    }
  }
  margin-bottom: 90px;
}
</style>
