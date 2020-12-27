<template>
  <div class="login_contain">
    <div class="login_content">
      <div class="img-contain">
        <img src="~assets/logo.png" alt="">
      </div>
      <el-form class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginForm">
        <!--      用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="username">
            <i slot="prefix" class="iconfont icon-user color"></i>
          </el-input>
        </el-form-item>
        <!--        密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="password">
            <i slot="prefix" class="iconfont icon-mima1 color"></i>
          </el-input>
        </el-form-item>
        <!--        按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login('loginForm')">登录</el-button>
          <el-button type="primary" @click="reset('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import requestone from '@/network/request'
export default {
name: "login",
  data() {
    return {
      //这是登录表单的数据绑定对象
      loginForm: {
        username:'zs',
        password:'123'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger:'blur'}
        ],
      }
    }
  },
  methods: {
    reset(i) {
      this.$refs[i].resetFields()
    },
    login(i) {
      this.$refs[i].validate().then(async res=> {
        if (!res) return
        let result=await requestone()
        console.log(result);
      }).catch(err=>console.log(err))
    }
  }
}
</script>

<style lang="less" scoped>
.login_contain {
  color: hotpink;
}
.login_content {
  transform: translate(-50%,-50%);
  background-color: azure;
  width: 400px;
  height: 300px;
  left: 50%;
  position: absolute;
  top: 50%;
  text-align: center;
}
.img-contain {
  padding: 15px 15px;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 1px solid white;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow:  0 0 10px #ddd;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.color {
  color: saddlebrown;
}
</style>