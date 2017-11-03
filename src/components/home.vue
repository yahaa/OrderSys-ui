<template>
<div id="app">
  <el-container>
    <el-header style="padding:0px">
      <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="padding:0px 60px 0px 60px;">
        <el-menu-item index="1" style="font-size:20px">订单处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="/admin" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-row :gutter="20" style="margin-top:150px">
        <el-col :span="6" :offset="9">
          <el-form status-icon label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" type="primary">
              <el-input type="text" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" type="danger">
              <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login()" round>登录</el-button>
              <el-button type="danger" @click="login()" round>清除</el-button>

              <el-button type="success" @click="login()" round>更多</el-button>
              <el-button type="info" @click="login()" round>关于</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'cus',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      resLogin: {
        expire: '',
        token: ''
      }

    }
  },
  methods: {
    login () {
      let tvm = this
      this.axios.post('/login', this.user)
        .then(function (res) {
          console.log(res)
          tvm.resLogin = res.data
          var tk = 'Bearer ' + tvm.resLogin.token
          localStorage.setItem('Token', tk)
          tvm.getInfo()
        }).catch(function (res) {
          // alert('密码或用户名错误')
        })
    },
    clear () {

    },
    getInfo () {
      let tvm = this
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.get('/api/self/info')
        .then(function (res) {
          console.log(res)
          if (res.data.roleId === '1') {
            tvm.$router.push('/admin')
          } else if (res.data.roleId === '2') {
            tvm.$router.push('/saler')
          } else if (res.data.roleId === '3') {
            tvm.$router.push('/cus')
          } else {
            console.log(6789)
          }
        }).catch(function (res) {
          console.log(555566666)
          // alert('密码或用户名错误')
        })
    }
  },
  mounted () {
    // this.getInfo()
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50
}
</style>
