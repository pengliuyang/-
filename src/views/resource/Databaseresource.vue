<template>
  <div class="resourceshare">
    <div class="title">
      <span>数据资源</span>
      <!-- <a href="">&lt;&emsp;返回</a> -->
    </div>
    <div class="titlebottom">
      <a href="http://www.gtarsc.com/">
        <div class="teachershow">
          <img src="../../assets/images/组 184.png" alt="" />
          <div>
            <P class="name">国泰安数据库</P>
          </div>
        </div>
      </a>
      <a href="http://db.resset.com">
        <div class="teachershow">
          <img src="../../assets/images/组 177.png" alt="" />
          <div>
            <P class="name">RESSET金融研究</P>
          </div>
        </div>
      </a>
   <a href="https://www.cnrds.com">
          <div class="teachershow">
        <img src="../../assets/images/组 183.png" alt="" />
        <div>
          <P class="name">中国研究数据服务平台</P>
        </div>
      </div>
   </a>
       <a href="https://www.cnki.net/">
               <div class="teachershow">
        <img src="../../assets/images/组 178.png" alt="" />
        <div>
          <P class="name">中国知网</P>
        </div>
      </div>
       </a>
         <a href="http://c.wanfangdata.com.cn/">
               <div class="teachershow">
        <img src="../../assets/images/组 182.png" alt="" />
        <div>
          <P class="name">万方数据</P>
        </div>
      </div>
         </a>
          <a href="http://www.blyun.com/">
               <div class="teachershow">
        <img src="../../assets/images/组 179.png" alt="" />
        <div>
          <P class="name">读秀图书</P>
        </div>
      </div>
          </a>
            <a href="http://qikan.cqvip.com/">
                 <div class="teachershow">
        <img src="../../assets/images/组 181.png" alt="" />
        <div>
          <P class="name">维普中文期刊服务平台</P>
        </div>
      </div>
            </a>
             <a href="http://www.sslibrary.com">
                    <div class="teachershow">
        <img src="../../assets/images/组 180.png" alt="" />
        <div>
          <P class="name">超星数字图书馆</P>
        </div>
      </div>
             </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.resourceshare {
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
        width: 260px;
        height: 118px;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 3px 10px #dee4ea;
        width: 220px;
        margin-right: 10px;
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
}
</style>
