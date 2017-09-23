<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-table
     :propTableData="tableData1"
     :propTitle="title1"></a-table>
     <a-table
     :propTableData="tableData2"
     :propTitle="title2"></a-table>
     <a-table
     :propTableData="tableData3"
     :propTitle="title3"></a-table>
     <a-table
     :propTableData="tableData1"
     :propFilter="filter"
     :propTitle="title4"></a-table>
  </div>
</template>

<script>
import vue from 'vue';
import aTable from 'vue-ahn-table';
//import aTable from './Table.vue';

vue.component('aTable', aTable);

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Vue-Ahn-Table Demo',
      title1: 'Basic Table',
      tableData1: {
        header: [
          [
            { label: 'header1', isShow: true },
            { label: 'header2', isShow: true },
            { label: 'header3', isShow: true },
            { label: 'header4', isShow: true },
            { label: 'header5', isShow: true },
          ],
        ],
        rows: [
          [
            { label: 'v-title1-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title1-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column1-1', type: 'column' },
            { label: 'v-column1-2', type: 'column' },
            { label: 'v-column1-3', type: 'column' },
          ],
          [
            { label: 'v-title2-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title2-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column2-1', type: 'column' },
            { label: 'v-column2-2', type: 'column' },
            { label: 'v-column2-3', type: 'column' },
          ],
          [
            { label: 'v-title3-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title3-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column3-1', type: 'column' },
            { label: 'v-column3-2', type: 'column' },
            { label: 'v-column3-3', type: 'column' },
          ],
          [
            { label: 'v-title4-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title4-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column4-1', type: 'column' },
            { label: 'v-column4-2', type: 'column' },
            { label: 'v-column4-3', type: 'column' },
          ],
        ],
      },
      title2: 'Complex Top Header',
      tableData2: {
        header: [
          [
            { label: 'header1-1', rowspan: 2, isShow: true },
            { label: 'header1-2', rowspan: 2, isShow: true },
            { label: 'header1-3', colspan: 3, isShow: true },
            { label: 'header1-4', isShow: false },
            { label: 'header1-5', isShow: false },
          ],
          [
            { label: 'header2-1', rowspan: 0, isShow: false },
            { label: 'header2-2', rowspan: 0, isShow: false },
            { label: 'header2-3', isShow: true },
            { label: 'header2-4', isShow: true },
            { label: 'header2-5', isShow: true },
          ],
        ],
        rows: [
          [
            { label: 'v-title1-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title1-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column1-1', type: 'column' },
            { label: 'v-column1-2', type: 'column' },
            { label: 'v-column1-3', type: 'column' },
          ],
          [
            { label: 'v-title2-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title2-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column2-1', type: 'column' },
            { label: 'v-column2-2', type: 'column' },
            { label: 'v-column2-3', type: 'column' },
          ],
          [
            { label: 'v-title3-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title3-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column3-1', type: 'column' },
            { label: 'v-column3-2', type: 'column' },
            { label: 'v-column3-3', type: 'column' },
          ],
          [
            { label: 'v-title4-1', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-title4-2', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column4-1', type: 'column' },
            { label: 'v-column4-2', type: 'column' },
            { label: 'v-column4-3', type: 'column' },
          ],
        ],
      },
      title3: 'Complex Vertical Header',
      tableData3: {
        header: [
          [
            { label: 'header1', isShow: true },
            { label: 'header2', isShow: true },
            { label: 'header3', isShow: true },
            { label: 'header4', isShow: true },
            { label: 'header5', isShow: true },
            { label: 'header6', isShow: true },
            { label: 'header7', isShow: true },
          ],
        ],
        rows: [
          [
            { label: 'v-title1-1', type: 'header', rowspan: 4, isShow: true },
            { label: 'v-title1-2', type: 'header', rowspan: 2, isShow: true },
            { label: 'v-title1-3', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column1-1', type: 'column' },
            { label: 'v-column1-2', type: 'column' },
            { label: 'v-column1-3', type: 'column' },
            { label: 'v-column1-4', type: 'column' },
          ],
          [
            { label: 'v-title2-1', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-title2-2', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-title2-3', type: 'header', rowspan: 0, isShow: true },
            { label: 'v-column2-1', type: 'column' },
            { label: 'v-column2-2', type: 'column' },
            { label: 'v-column2-3', type: 'column' },
            { label: 'v-column2-4', type: 'column' },
          ],
          [
            { label: 'v-title3-1', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-title3-2', type: 'header', rowspan: 2, isShow: true },
            { label: 'v-title3-3', type: 'header', rowspan: 2, isShow: true },
            { label: 'v-column3-1', type: 'column' },
            { label: 'v-column3-2', type: 'column' },
            { label: 'v-column3-3', type: 'column' },
            { label: 'v-column3-4', type: 'column' },
          ],
          [
            { label: 'v-title4-1', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-title4-2', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-title4-3', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-column4-1', type: 'column' },
            { label: 'v-column4-2', type: 'column' },
            { label: 'v-column4-3', type: 'column' },
            { label: 'v-column4-4', type: 'column' },
          ],
          [
            { label: 'v-title5-1', type: 'header', rowspan: 2, isShow: true },
            { label: 'v-title5-2', type: 'header', rowspan: 2, isShow: true },
            { label: 'v-title5-3', type: 'header', rowspan: 2, isShow: true },
            { label: 'v-column5-1', type: 'column' },
            { label: 'v-column5-2', type: 'column' },
            { label: 'v-column5-3', type: 'column' },
            { label: 'v-column5-4', type: 'column' },
          ],
          [
            { label: 'v-title6-1', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-title6-2', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-title6-3', type: 'header', rowspan: 0, isShow: false },
            { label: 'v-column6-1', type: 'column' },
            { label: 'v-column6-2', type: 'column' },
            { label: 'v-column6-3', type: 'column' },
            { label: 'v-column6-4', type: 'column' },
          ],
        ],
      },
      title4: 'Filterd',
      filter: function(column) {
        return column + '(filterd)'
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
