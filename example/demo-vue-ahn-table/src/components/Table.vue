<template>
  <div v-bind:style="{width:propWidth, margin:'0 auto'}">
    <h1>{{propTitle}}</h1>
    <table class="a-table" :border="tableBorder" :cellspacing="tableCellspacing">
      <thead>
        <tr v-for="(header, key) in headerData">
          <th 
            v-for="(column, key) in header"
            :rowspan="column.rowspan"
            :colspan="column.colspan"
            v-show="column.isShow">{{column.label}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, key) in rowData">
          <template v-for="(column, key) in row">
            <th
              v-if="column.type == 'header'"
              :rowspan="column.rowspan"
              v-show="column.isShow">
              {{column.label}}  
            </th>
            <td
              v-if="column.type == 'column'">
              {{column.label}}  
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'aTable',
  props: {
    propWidth: {
      type: String,
      default: '800px',
    },
    propTitle: {
      type: String,
      default: '',
    },
    propTableData: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      tableBorder: 0,
      tableCellspacing: 0,
      headerData: [],
      rowData: [],
    };
  },
  created() {
    this.validateTableData();
  },
  methods: {
    validateTableData() {
      this.headerData = this.propTableData.header;
      this.rowData = this.propTableData.rows;
    },
  },
};
</script>
<style lang='scss' scoped src="./table.scss">

</style>
