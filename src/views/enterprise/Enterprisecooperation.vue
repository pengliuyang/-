<template>
      <div class="enterprisecooperation">
        <div class="title">
          <span>合作单位</span>
          <!-- <a>&lt;&emsp;返回</a> -->
        </div>
        <div class="titlebottom">
               <div class="teachershow">
                    <img src="../../assets/images/7.jpg" alt="">
                    <div>
                       <P class="name">姓名</P><P class="level">职称:xx</P><P class="education">学历:xx</P>
                    </div>
               </div>
                <div class="teachershow">
                    <img src="../../assets/images/7.jpg" alt="">
                    <div>
                       <P class="name">姓名</P>
                       <P class="level">职称:xx</P>
                       <P class="education">学历:xx</P>
                    </div>
               </div> 
               <div class="teachershow">
                    <img src="../../assets/images/7.jpg" alt="">
                    <div>
                       <P class="name">姓名</P>
                       <P class="level">职称:xx</P>
                       <P class="education">学历:xx</P>
                    </div>
               </div>
                <div class="teachershow">
                    <img src="../../assets/images/7.jpg" alt="">
                    <div>
                       <P class="name">姓名</P>
                       <P class="level">职称:xx</P>
                       <P class="education">学历:xx</P>
                    </div>
               </div>
                <div class="teachershow">
                    <img src="../../assets/images/7.jpg" alt="">
                    <div>
                       <P class="name">姓名</P>
                       <P class="level">职称:xx</P>
                       <P class="education">学历:xx</P>
                    </div>
               </div>
                  <div class="teachershow">
                    <img src="../../assets/images/7.jpg" alt="">
                    <div>
                       <P class="name">姓名</P>
                       <P class="level">职称:xx</P>
                       <P class="education">学历:xx</P>
                    </div>
               </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .enterprisecooperation {
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
      }
      .titlebottom {
        display: flex;
        flex-wrap: wrap;
        .teachershow{
          display: flex;
          margin-top: 30px;
         img{
          width: 270px;
          height: 154px;
         }
         div{
             display: flex;
            flex-direction: column;
            justify-content: flex-end;
           margin-left: 30px;
           width: 190px;
           color: #2d2d2d;
          .name{
            font-size: 24px;
           
          }
         .level{
           margin-top: 10px;
           margin-bottom: 10px;
           font-size: 18px;
         }
        .education{
          font-size: 18px;
        }
      
         }
        }
      }
          
    }
</style>