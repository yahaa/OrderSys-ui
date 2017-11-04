<template>
<div id="app">
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
      <el-row style="padding:20px 60px 20px 60px;">
        <el-tag type="success">在销产品</el-tag>
        <el-tag>订单系统</el-tag>
        <el-tag type="info">商品</el-tag>
        <el-tag type="warning">购物</el-tag>
        <el-tag type="danger">销售员</el-tag>
      </el-row>
      <el-row style="padding:0px 60px 0px 60px;">
        <el-col :span="24">
          <el-table :data="tableData" style="width: 100%">
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
            <el-table-column label="销售员">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.salerName }}</p>
                  <p>编号: {{ scope.row.salerId }}</p>
                  <p>电话: {{ scope.row.phone }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.salerName }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="mkOrder(scope.$index, scope.row)">购买</el-button>
          </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row style="padding:50px 60px 20px 60px;">
        <el-tag>我的订单</el-tag>
        <el-tag type="success">支付中心</el-tag>
        <el-tag type="info">订单</el-tag>
        <el-tag type="warning">取消订单</el-tag>
        <el-tag type="danger">取消订单</el-tag>
      </el-row>
      <el-row style="padding:0px 60px 0px 60px;">
        <el-col :span="24">
          <el-table :data="orders" style="width: 100%">
            <el-table-column label="订单编号">
              <template slot-scope="scope">
                    <i class="el-icon-goods"></i>
                    <span style="margin-left: 10px">{{ scope.row.ordId}}</span>
                </template>
            </el-table-column>
            <el-table-column label="商品编号">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.proId}}</span>
                </template>
            </el-table-column>
            <el-table-column label="销售员编号">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.saleId}}</span>
                </template>
            </el-table-column>

            <el-table-column label="金额">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>数量: {{ scope.row.nums }}</p>
                  <p>单价: {{ scope.row.price }}</p>
                  <p>总金额: {{ scope.row.total }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.total }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="支付方式">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.saleType}}</span>
                </template>
            </el-table-column>
            <el-table-column label="送货方式">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{scope.row.deliverType}}</span>
                </template>
            </el-table-column>
            <el-table-column label="下单时间">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.orderTime|filT}}</span>
                </template>
            </el-table-column>
            <el-table-column label="个人/企业">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.ordCom|filT}}</span>
                </template>
            </el-table-column>
            <el-table-column label="支付时间">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.playTime|filP}}</span>
                </template>
            </el-table-column>

            <el-table-column label="备注">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.marks|filS}}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="delOrd(scope.$index, scope.row)">取消</el-button>
                  <el-button
                    size="mini"
                    type="success"
                    @click="play(scope.$index, scope.row)">支付</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
  <router-view/>

  <el-dialog title="下订单" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="商品编号" :label-width="formLabelWidth">
        <el-tag type="info">{{form.proId}}</el-tag>
      </el-form-item>

      <el-form-item label="售货员编号" :label-width="formLabelWidth">
        <el-tag type="info">{{form.saleId}}</el-tag>
      </el-form-item>

      <el-form-item label="单价" :label-width="formLabelWidth">
        <el-tag type="info">{{form.price}}</el-tag>
      </el-form-item>

      <el-form-item label="销售方式" :label-width="formLabelWidth">
        <el-tag type="info">{{form.saleType}}</el-tag>
      </el-form-item>

      <el-form-item label="发货方式" :label-width="formLabelWidth">
        <el-tag type="info">{{form.deliverType}}</el-tag>
      </el-form-item>
      <el-form-item label="购买数量" :label-width="formLabelWidth">
        <el-input v-model="form.nums" size="10" placeholder="请输入购买的数量"></el-input>
      </el-form-item>
      <el-form-item label="个人/组织" :label-width="formLabelWidth">
        <el-input v-model="form.ordCom" size="10" placeholder="请输入个人或组织名"></el-input>
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="form.marks" size="10" placeholder="特殊需求请留言"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="sendOrd()">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'cus',
  data () {
    return {
      tableData: [{
        'salerId': '14122261',
        'salerName': '¿¿',
        'proId': '1005',
        'proName': 'ddd',
        'proSM': 'ttt',
        'proCom': 'sd',
        'proPrice': '9.78',
        'proCounts': '100',
        'proStye': '',
        'orderTime': '2017-09-31T11:00:02.257+08:00',
        'marks': 'here is your!',
        'phone': '18777859598'
      }],
      orders: [{
        'ordId': '1509498899',
        'userId': '14122262',
        'saleId': '14122261',
        'proId': '1005',
        'nums': '0',
        'total': '100',
        'orderTime': '2017-11-01 09:14:59.508274847 +0800 CST m=+3.359295318',
        'marks': '',
        'price': '0',
        'ordCom': 'shanghai',
        'playTime': '',
        'saleType': 'payple',
        'deliverType': 'self get'
      }],
      dialogFormVisible: false,
      form: {
        saleId: '',
        proId: '',
        nums: '1',
        price: '',
        ordCom: '',
        saleType: 'sale by org',
        deliverType: 'deliver by fly',
        marks: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    getPros () {
      let tvm = this
      this.axios.get('/api/products')
        .then(function (res) {
          tvm.tableData = res.data
        }).catch(function (res) {
          console.log(res)
        })
    },
    getOrds () {
      let tvm = this
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.get('/api/cus/orders')
        .then(function (res) {
          tvm.orders = res.data
        }).catch(function (res) {
          tvm.permit()
          console.log(res)
        })
    },
    delOrd (index, row) {
      let tvm = this
      tvm.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
        tvm.axios.delete(`/api/cus/orders/${row.ordId}`)
          .then(function (res) {
            tvm.$message({
              type: 'success',
              message: '删除成功!'
            })
            tvm.orders.splice(index, 1)
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
    play (index, row) {
      const h = this.$createElement
      this.$msgbox({
        title: '立即支付',
        message: h('p', null, [
          h('span', null, '向商家支付 '),
          h('i', {
            style: 'color: teal'
          }, row.total + '元')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            this.doPlay(index, row)
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 1000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'success',
          message: '支付成功 !'
        })
      })
    },
    doPlay (index, row) {
      let tvm = this
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.put(`/api/cus/orders/${row.ordId}`)
        .then(function (res) {
          row.playTime = 'adsfasdf'
        }).catch(function (res) {
          console.log(res)
        })
    },
    mkOrder (index, row) {
      let tvm = this
      tvm.form.proId = row.proId
      tvm.form.saleId = row.salerId
      tvm.form.price = row.proPrice
      tvm.dialogFormVisible = true
    },
    sendOrd () {
      let tvm = this
      tvm.dialogFormVisible = false
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.post(`/api/cus/order`, tvm.form)
        .then(function (res) {
          tvm.getOrds()
        }).catch(function (res) {
          console.log(res)
        })
    },
    logout () {
      this.$router.push('/')
    },
    permit () {
      this.$alert('你没有权限访问该目录', '权限管理', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
          this.$router.push('/')
        }
      })
    }

  },
  mounted () {
    this.getPros()
    this.getOrds()
  },
  filters: {
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
