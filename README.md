vue-ahn-table
=============

Vue table template, which can have complex vertical header.

## Installation
---------------
### npm
``` sh
npm install --save vue-ahn-table
```

## Usage
---------------

```javascript
<script>
import vue from 'vue';
import aTable from 'vue-ahn-table';

vue.component('aTable', aTable);

export default {
  name: 'hello',
  data() {
    return {
      title: 'Basic Table',
      tableData: {
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
    };
  },
};
</script>
```

```HTML
<template>
  <div class="hello">    
    <a-table
     :propTableData="tableData"
     :propTitle="title"></a-table>
  </div>
</template>
```

## Example
---------------
I have created an [example](https://github.com/guruahn/vue-ahn-table/tree/master/example/demo-vue-ahn-table) vue webapp, demonstrating this table via simple vue webapp, checkout `example` directory in this repo.


## Contributions
---------------
All contributions are welcome: use-cases, documentation, code, patches, bug reports, feature requests, etc. You do not need to be a programmer to speak up!
