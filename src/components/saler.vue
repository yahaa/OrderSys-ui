<template>
<div class="hello">
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
        <el-menu-item index="4">
          <el-button type="danger" round @click="logout()">退出登录</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>

      <el-row type="flex" class="row-bg" style="padding:0px 60px 0px 60px;">
        <el-col :span="2">
          <h3>销售任务</h3>
        </el-col>
        <el-col :span="6" style="margin-top:20px">
          <el-tag>产品</el-tag>
          <el-tag type="success">销售</el-tag>
          <el-tag type="info">我的销售</el-tag>
          <el-tag type="warning">产品</el-tag>
          <el-tag type="danger">订单</el-tag>
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
          </el-table>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" style="padding:0px 60px 0px 60px;">
        <el-col :span="2">
          <h3>经办订单</h3>
        </el-col>
        <el-col :span="6" style="margin-top:20px">
          <el-tag>客户</el-tag>
          <el-tag type="success">订单</el-tag>
          <el-tag type="info">我经办</el-tag>
          <el-tag type="warning">查看订单</el-tag>
          <el-tag type="danger">订单</el-tag>
        </el-col>
      </el-row>

      <el-row style="padding:0px 60px 0px 60px;">
        <el-col :span="18">
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
            <el-table-column label="客户编号">
              <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.userId}}</span>
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
          </el-table>
        </el-col>
      </el-row>


    </el-main>
  </el-container>


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
      orders: [{
        'ordId': '',
        'userId': '',
        'saleId': '',
        'proId': '',
        'nums': '',
        'total': '',
        'orderTime': '',
        'marks': '',
        'price': '',
        'ordCom': '',
        'playTime': '',
        'saleType': '',
        'deliverType': ''
      }]
    }
  },
  methods: {
    getPros () {
      let tvm = this
      this.axios.get('/api/saler/tasks')
        .then(function (res) {
          tvm.products = res.data
        }).catch(function (res) {
          tvm.permit()
          console.log(res)
        })
    },
    logout () {
      this.$router.push('/')
    },
    open () {
      const h = this.$createElement
      this.$notify({
        title: '添加结果',
        message: h('i', {
          style: 'color: teal'
        }, '添加成功 !')
      })
    },
    getOrds () {
      let tvm = this
      tvm.axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token')
      tvm.axios.get('/api/saler/orders')
        .then(function (res) {
          tvm.orders = res.data
        }).catch(function (res) {
          console.log(res)
        })
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
    this.getPros()
    this.getOrds()
  }

}
</script>
