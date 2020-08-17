<template>
  <div class="newsnotice">
    <div class="title">
      <span>公告</span>
      <!-- <a href="">&lt;&emsp;返回</a> -->
    </div>
    <div class="titlebottom">
      <div class="noticeitems" @click="detail()">
        <img src="../../assets/images/5.jpg" alt="" />
        <div class="detail">
          <h3>模块标题</h3>
          <p>
            22222222哈哈哈哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚22222
          </p>
          <span>2020-07-20</span>
        </div>
      </div>
          <div class="noticeitems"  @click="detail()" >
        <img src="../../assets/images/5.jpg" alt="" />
        <div class="detail">
          <h3>模块标题</h3>
          <p>
            22222222哈哈哈哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚22222
          </p>
          <span>2020-07-20</span>
        </div>
      </div>
          <div class="noticeitems"  @click="detail()">
        <img src="../../assets/images/5.jpg" alt="" />
        <div class="detail">
          <h3>模块标题</h3>
          <p>
            22222222哈哈哈哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚22222
          </p>
          <span>2020-07-20</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    detail(){
    this.$router.push('/news/noticedetail')
    }
  }
};
</script>

<style lang="less" scoped>
.newsnotice {
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
    .noticeitems {
      display: flex;
      margin-top: 40px;
      height: 100px;
      img {
         height: 100%;
      }
      .detail {
        flex: 1;
        padding-left: 20px;
        padding-top: 10px;
        background: #ccc;
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
      transition:1s;
    }
    .noticeitems:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
}
</style>
