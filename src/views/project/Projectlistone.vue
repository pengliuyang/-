<template>
      <div class="centeritemdetail">
        <div class="title">
          <span>项目列表>项目1</span>
          <a @click="route()">&lt;&emsp;返回</a>
        </div>
        <div class="titlebottom">
          <h3>标题</h3>
          <div>哈哈哈哈哈哈哈红红火哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚惚哈哈哈哈哈</div>
          <p>2020-07-20</p>
        </div>
      </div>
</template>

<script>
export default {
 methods:{
   route(){
     this.$router.push('/project/projectlist')
   }
 }
}
</script>

<style lang="less" scoped>
 .centeritemdetail {
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
        a{
        color: #2d2d2d;
        }
        a:hover{
          cursor: pointer;
        }
      }
      .titlebottom {
        padding-top: 30px;
        h3 {
          text-align: center;
        }
        div {
          margin-top: 20px;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 15;
          -webkit-box-orient: vertical;
          font-size: 16px;
          color: #2d2d2d;
          line-height: 40px;
          text-indent: 2em;
        }
        p {
          text-align: right;
          margin-top: 10px;
          color: #999;
        }
      }
          
    }
</style>