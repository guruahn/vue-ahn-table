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
      msg: 'Welcome to Just Another Vue.js App',
      cities: ['Bengaluru', 'Delhi', 'Kolkata', 'Bareilly'],
      city: '',
    };
  },
};
</script>
```

```HTML
<template>
  <div class="hello">    
    <Dropdown :options="cities" v-model="city" placeholder="City" style="width: 30%"/>
  </div>
</template>
```

## Example
---------------
I have created an [example](https://github.com/mimani/vue-just-another-dropdown/tree/master/example) vue webapp (documentation [here](https://github.com/mimani/vue-just-another-dropdown/blob/master/example/just-another-vue-app/README.md)), demonstrating this dropdown via simple vue webapp, checkout `example` directory in this repo.


## TODOs
---------------
- Add support for multiselect
- Provide options for customised style
- Demo github pages


## Contributions
---------------
All contributions are welcome: use-cases, documentation, code, patches, bug reports, feature requests, etc. You do not need to be a programmer to speak up!
