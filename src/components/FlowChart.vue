<script setup lang="ts">
import {ref} from "vue";
import {VueFlow} from "@vue-flow/core";

const elements = ref([
  // nodes

  // an input node, specified by using `type: 'input'`
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },

  // default node, you can omit `type: 'default'` as it's the fallback type
  { id: '2', label: 'Node 2', position: { x: 100, y: 100 }, },

  // An output node, specified by using `type: 'output'`
  { id: '3', type: 'output', label: 'Node 3', position: { x: 200, y: 200 } },

  // A custom node, specified by using a custom type name
  // we choose `type: 'special'` for this example
  {
    id: '4',
    type: 'special',
    label: 'Node 4',
    position: {x: 400, y: 200},

    // pass custom data to the node
    data: {
      // you can pass any data you want to the node
      hello: 'world',
    },
  },

  // edges

  // simple default bezier edge
  // consists of an id, source-id and target-id
  { id: 'e1-3', source: '1', target: '3' },

  // an animated edge, specified by using `animated: true`
  { id: 'e1-2', source: '1', target: '2', animated: true },

  // a custom edge, specified by using a custom type name
  // we choose `type: 'special'` for this example
  {
    id: 'e1-4',
    type: 'special',
    source: '1',
    target: '4',

    // pass custom data to the edge
    data: {
      // You can pass any data you want to the edge
      hello: 'world',
    }
  },
]);
</script>

<template>
  <div style="width: 800px; height: 500px; background-color: #ffffff">
    <VueFlow v-model="elements" />
  </div>
</template>

<style scoped>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>