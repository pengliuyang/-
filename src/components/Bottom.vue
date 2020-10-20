<template>
      <div class="bottom" >
      <div class="container">
        <div class="left">
          <img src="../assets/images/bottombar_icon_call.png" alt="" />
          <span>65904466</span>
        </div>
        <div class="center">
          <div>
            <p><span>http://www.xxx.edu.cn/</span></p>
            <p><span>&copy;2020四川大学版权所有</span></p>
          </div>
        </div>
        <div class="right">
          <div>
            <p><span>四川省成都市一环路南一段24号</span></p>
            <p><span>技术支持：深圳或然科技有限公司</span></p>
          </div>
        </div>
      </div>
   
    </div>
</template>
<script>
export default {

}
</script>

<style lang="less">
  .bottom {
     font-family: 'Source Han Serif CN';
    height: 200px;
    background: url("../assets/images/bottombar_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .container {
      display: flex;
      justify-content: center;
      height: 100%;
      .left {
        margin-right: 78px;
      }
      .center {
        div {
          padding-left: 78px;
          border-left: 2px solid #fff;
          span {
            margin-right: 102px;
          }
        }
      }
    }
    img {
      width: 20px;
      height: 20px;
      margin-bottom: 3px;
    }
    span {
      color: #fff;
      margin-left: 10px;
    }
    .left,
    .right,
    .center {
      display: flex;
      align-items: center;
    }
    .right,
    .center {
      p {
        margin-bottom: 10px;
      }
    }
  }

</style>