<template>
  <div id="bd" class="row">
    <Content></Content>
    <RightSideBar></RightSideBar>
  </div>
</template>
<script>
import fnGetHelloData from './getHelloData'
import RightSideBar from '../common/rightSideBar'
import Content from '../common/content'
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created() {
    fnGetHelloData().then(data => {
      console.log(data.data)
      this.tableData = data.data
    })
  },
   components: {
    RightSideBar,
    Content
  }
}
</script>
<style>
.table {
  margin-left: 10px;
}

.el-table th>.cell {
  text-align: center;
}
</style>
