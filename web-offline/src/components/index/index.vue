<template>
  <div id="bd" class="row">
    <MainContent></MainContent>
    <RightSideBar></RightSideBar>
  </div>
</template>
<script>
import fnGetHelloData from './getHelloData'
import RightSideBar from '../common/rightSideBar'
import MainContent from '../common/content'
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {

  },
  created() {

  },
   components: {
    RightSideBar,
    MainContent
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
