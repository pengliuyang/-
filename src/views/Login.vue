<template>
  <div class="login">
        <Topbar></Topbar>
        <div class="container loginform">
          <div class="photo">
            <img src="../assets/images/logo.png" alt="">
            <p>跨国投资汇率风险管理</p>
            <p>虚拟仿真实验项目</p>
          </div>
          <div class="form">
         <p class="top">系统登录</p>   
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
   <p class="name">用户名</p>
  <el-form-item  prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
     <p class="password">密码</p>
  <el-form-item  prop="password">
    <el-input v-model="ruleForm.password"  placeholder="请输入密码"></el-input>
  </el-form-item>
  <div class="resit"><span>注册</span><span>忘记密码?</span></div>
  <el-form-item>
    <button @click="submitForm('ruleForm')">登录</button>
  </el-form-item>
</el-form>
<div class="select">
  <button class="expert">专家通道</button>
<button class="prepare">实验前预习</button>
</div>
          </div>
        </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
export default {
 components: {
    Topbar,
  },
   data() {
      return {
        ruleForm: {
          name: '',
          password:""
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
       
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    created(){
      
    }
}
</script>

<style lang="less">
.login{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url('../assets/images/矩形8.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .loginform{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

   .photo{
     width: 500px;
     padding-right: 90px;
     border-right: 1px solid #fff;
       img{
      width: 500px;
      height: 130px;
    }
    p{
      font-size: 40px ;
      color: #fff;
      margin-top: 10px;
       font-family: 'Source Han Serif CN';
    }
   }
   .form{
     width: 520px;
     height: 600px;
     background:#fff;
    font-family: 'Source Han Serif CN';
     p{
       text-indent: 50px;
       color: #ccc;
     }
     .top{
       margin-top: 30px;
       font-size: 24px;
       color: #2d2d2d;
     }
     .name{
       margin-top: 40px;
       margin-bottom: 10px;
     }
      .password{
       margin-top: 30px;
       margin-bottom: 10px;
     }
     .el-input__inner{
       width: 420px;
     }
     .resit{
       width: 420px;
       margin: 0 auto;
       margin-top: 10px;
       margin-bottom: 70px;
       color: #bb2b17;
       display: flex;
       justify-content: space-between;
     }
    .el-form-item button{
      width: 420px;
      background: #bb2b17;
      border: none;
      outline: none;
      height: 60px;
      color: #fff;
      border-radius: 8px;
      margin-bottom: 30px;
      font-size: 18px;
    }
    .select{
      width: 420px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      button{
        width: 126px;
        height: 60px;
        border: none;
        border-radius: 6px;
        outline: none;
        margin-right: 10px;
      }
      .expert{
    color: #fff;
    background: rgba(0, 0, 0, 0.856);
      }
      .prepare{
        color: #bb2b17;
        background: #fff;
        border: 1px solid #bb2b17;
      }
    }
   }
  }
}

</style>