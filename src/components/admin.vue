<template>
<div class="hello">
  <el-container>
    <el-header style="padding:0px">
      <el-menu :default-active="2" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="padding:0px 60px 0px 60px;">
        <el-menu-item index="1" style="font-size:20px">订单处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="/admin" target="_blank">订单管理</a></el-menu-item>
        <el-menu-item index="3">
          <el-button type="success" round @click="logout()">退出登录</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>


    </el-main>
  </el-container>

</div>
</template>

<script>
export default {
  data () {
    return {
      username: 'aaa',
      password: 'bbb'
    }
  }
}
</script>
