<template>
      <div class="teacherstaff">
        <div class="title">
          <span>师资介绍</span>
          <!-- <a href="">&lt;&emsp;返回</a> -->
        </div>
        <div class="titlebottom">
               <div class="teachershow" v-for="item in tableData" :key="item.id">
                    <img :src="item.bgImgUrl" alt="">
                    <div>
                       <P class="name">姓名:{{item.title}}</P>
                       <P class="level">职称:教授</P>
                       <P class="education">学历:博士</P>
                    </div>
               </div>
                <!-- <div class="teachershow">
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
               </div> -->
        </div>
            <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="6"
      background
      layout="prev, pager, next"
      :total="total"
    >
    </el-pagination>
      </div>
</template>

<script>
import { _queryStock} from '@/apis/home'
export default {
  data() {
    return {
      currentPage: 1,
      total:0,
      tableData: [
        {
         imgurl:"",
         name:"",
         professor:"",
         qualification:"",
        }
      ],
    };
  },  
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
      this.querystock();
    },
        querystock() {
      let params = {
           currentpage: this.currentPage,
      };
      _queryStock(params)
        .then(res => {
          let {total, list} = res;
          this.total = total;
          this.tableData = list
          console.log(this.tableData)
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted(){
    this.querystock();
  }
}
</script>

<style lang="less" scoped>
 .teacherstaff {
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
     .el-pagination {
    width: 300px;
    margin: 90px auto;
  }
    }
</style>