<template>
  <div class="resourceshare">
    <div class="title">
      <span>精品慕课</span>
      <!-- <a href="">&lt;&emsp;返回</a> -->
    </div>
    <div class="titlebottom">
      <a href="https://www.icourse163.org/university/SCU#/c">
        <div class="teachershow">
          <img src="../../assets/images/川大.png" alt="" />
          <div>
            <P class="name">四川大学慕课</P>
          </div>
        </div>
      </a>
      <a href="https://www.icourse163.org/course/SCU-1002879002">
        <div class="teachershow">
          <img src="../../assets/images/财务.jpg" alt="" />
          <div>
            <P class="name">财务管理慕课</P>
          </div>
        </div>
      </a>
   <a href="https://www.icourse163.org/course/SCU-1002712010">
          <div class="teachershow">
        <img src="../../assets/images/会计学.jpg" alt="" />
        <div>
          <P class="name">会计学原理慕课</P>
        </div>
      </div>
   </a>
       <a href="https://www.icourse163.org/course/SCU-1206680842">
               <div class="teachershow">
        <img src="../../assets/images/风险.jpg" alt="" />
        <div>
          <P class="name">风险投资与私募股权慕课</P>
        </div>
      </div>
       </a>
         <a href="https://www.icourse163.org/course/SCU-1206675853">
               <div class="teachershow">
        <img src="../../assets/images/金融.png" alt="" />
        <div>
          <P class="name">金融衍生品慕课</P>
        </div>
      </div>
         </a>
          <a href="https://www.icourse163.org/course/SCU-1206678850">
               <div class="teachershow">
        <img src="../../assets/images/管理.png" alt="" />
        <div>
          <P class="name">管理会计慕课</P>
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
