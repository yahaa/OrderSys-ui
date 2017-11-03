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
        <el-menu-item index="4">
          <el-button type="danger" round @click="logout()">退出登录</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>

      <el-row type="flex" class="row-bg" style="padding:0px 60px 0px 60px;">
        <el-col :span="2">
          <h3>用户管理</h3>
        </el-col>
        <el-col :span="2">
          <el-button type="success" size="small" round @click="dialogFormVisible = true" style="margin-top:20px">添加用户</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding:0px 60px 0px 60px;">
        <el-col :span="10">
          <el-table :data="users">
            <el-table-column label="用户编号" width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userId }}</span>
              </template>
            </el-table-column>

            <el-table-column label="基本信息" width="180">
              <template slot-scope="scope">
               <el-popover trigger="hover" placement="top">
                 <p>姓名: {{ scope.row.name }}</p>
                 <p>性别: {{ scope.row.sex }}</p>
                  <p>性别: {{ scope.row.phone }}</p>
                 <div slot="reference" class="name-wrapper">
                   <el-tag size="medium">{{ scope.row.name }}</el-tag>
                 </div>
               </el-popover>
             </template>
            </el-table-column>

            <el-table-column label="身份" width="180">
              <template slot-scope="scope">
                <el-tag size="medium" type="danger">{{ scope.row.roleId|filR }}</el-tag>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="upUser(scope.$index, scope.row)" round type="primary">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="delUser(scope.$index, scope.row)" round>删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" style="padding:0px 60px 0px 60px;">
        <el-col :span="2">
          <h3>产品管理</h3>
        </el-col>
        <el-col :span="2">
          <el-button type="success" size="small" round @click="dialogFormVisible = true" style="margin-top:20px">添加产品</el-button>
        </el-col>
      </el-row>
      <el-row style="padding:0px 60px 0px 60px;">
        <el-col :span="15">
          <el-table :data="products" style="width: 100%">
            <el-table-column label="商品编号">
              <template slot-scope="scope">
                    <i class="el-icon-goods"></i>
                    <span style="margin-left: 10px">{{ scope.row.proId}}</span>
                </template>
            </el-table-column>
            <el-table-column label="商品名称">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.proName}}</span>
                </template>
            </el-table-column>
            <el-table-column label="模型">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.proSM}}</span>
                </template>
            </el-table-column>
            <el-table-column label="生产商">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.proCom}}</span>
                </template>
            </el-table-column>
            <el-table-column label="价格">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.proPrice}}</span>
                </template>
            </el-table-column>

            <el-table-column label="库存">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.proCounts}}</span>
                </template>
            </el-table-column>
            <el-table-column label="样式">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.proStye|filS}}</span>
                </template>
            </el-table-column>
            <el-table-column label="进货时间">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{scope.row.orderTime|filT}}</span>
                </template>
            </el-table-column>
            <el-table-column label="备注">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.marks|filT}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="mkOrder(scope.$index, scope.row)" round>指派销售员</el-button>
          </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>


    </el-main>
  </el-container>

  <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
    <el-form :model="addUser">
      <el-form-item label="用户ID" :label-width="formLabelWidth">
        <el-input v-model="addUser.userId" size="10" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="addUser.name" size="10" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="联系电话" :label-width="formLabelWidth">
        <el-input v-model="addUser.phone" size="10" placeholder="请输入联系电话"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="addUser.password" size="10" placeholder="请输入用户初始密码"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-select v-model="addUser.sex" placeholder="请选择">
          <el-option v-for="item in sexValue" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="身份" :label-width="formLabelWidth">
        <el-select v-model="addUser.roleId" placeholder="请选择">
          <el-option v-for="item in roleValue" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="danger" @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="doAddUser()">确 定</el-button>
    </div>
  </el-dialog>


  <el-dialog title="修改用户基本信息" :visible.sync="editerDia">
    <el-form :model="edUser">
      <el-form-item label="用户ID" :label-width="formLabelWidth">
        <el-input v-model="edUser.userId" size="10" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="edUser.name" size="10" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="联系电话" :label-width="formLabelWidth">
        <el-input v-model="edUser.phone" size="10" placeholder="请输入联系电话"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-select v-model="edUser.sex" placeholder="请选择">
          <el-option v-for="item in sexValue" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="身份" :label-width="formLabelWidth">
        <el-select v-model="edUser.roleId" placeholder="请选择">
          <el-option v-for="item in roleValue" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="danger" @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="doUpUser()">确 定</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
export default {
  data () {
    return {
      products: [{
        'salerId': '',
        'salerName': '',
        'proId': '',
        'proName': '',
        'proSM': '',
        'proCom': '',
        'proPrice': '',
        'proCounts': '',
        'proStye': '',
        'orderTime': '',
        'marks': '',
        'phone': ''
      }],
      users: [{
        'userId': '',
        'name': '',
        'sex': '',
        'phone': '',
        'roleId': ''
      }],
      dialogFormVisible: false,
      editerDia: false,
      addUser: {
        'userId': '',
        'name': '',
        'sex': '',
        'phone': '',
        'roleId': '',
        'password': ''
      },
      sexValue: [{
        value: 'man',
        label: '男'
      }, {
        value: 'girl',
        label: '女'
      }],
      roleValue: [{
        value: '1',
        label: '管理员'
      }, {
        value: '2',
        label: '销售员'
      }, {
        value: '3',
        label: '客户'
      }],
      edUser: {
        'userId': '',
        'name': '',
        'sex': '',
        'phone': '',
        'roleId': ''
      }
    }
  },
  methods: {
    getPros () {
      let tvm = this
      this.axios.get('/api/admin/products')
        .then(function (res) {
          tvm.products = res.data
        }).catch(function (res) {
          console.log(res)
        })
    },
    logout () {
      this.$router.push('/')
    },
    getUsers () {
      let tvm = this
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.get('/api/admin/users')
        .then(function (res) {
          tvm.users = res.data
        }).catch(function (res) {
          console.log(res)
        })
    },
    doAddUser () {
      let tvm = this
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.post('/api/admin/user', tvm.addUser)
        .then(function (res) {
          tvm.dialogFormVisible = false
          tvm.getUsers()
          tvm.open()
        }).catch(function (res) {
          console.log(res)
        })
    },
    open () {
      const h = this.$createElement
      this.$notify({
        title: '添加用户结果',
        message: h('i', {
          style: 'color: teal'
        }, '添加成功 !')
      })
    },
    delUser (index, row) {
      let tvm = this
      tvm.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
        tvm.axios.delete(`/api/admin/users/${row.userId}`)
          .then(function (res) {
            tvm.$message({
              type: 'success',
              message: '删除成功!'
            })
            tvm.users.splice(index, 1)
          }).catch(function (res) {
            console.log(res)
          })
      }).catch(() => {
        tvm.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    upUser (index, row) {
      let tvm = this
      tvm.edUser = row
      tvm.editerDia = true
    },
    doUpUser () {
      let tvm = this
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.put('/api/admin/user', tvm.edUser)
        .then(function (res) {
          tvm.editerDia = false
          tvm.getUsers()
          tvm.open()
        }).catch(function (res) {
          console.log(res)
        })
    }
  },
  filters: {
    filR: function (value) {
      if (value === '1') {
        return '管理员'
      } else if (value === '2') {
        return '销售员'
      } else if (value === '3') {
        return '客户'
      } else {
        return '其他'
      }
    },
    filT: function (value) {
      return value.split(' ')[0]
    },
    filS: function (value) {
      if (value === '') {
        return '无'
      }
      return value
    },
    filP: function (value) {
      if (value === '') {
        return '未支付'
      }
      return '已支付'
    }
  },
  mounted () {
    this.getUsers()
    this.getPros()
  }

}
</script>
