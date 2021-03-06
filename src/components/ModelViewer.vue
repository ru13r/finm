<template lang="pug">
div
  block-viewer(v-for="(block, index) in blocks" :block="block" :key="index")
</template>
<script>
import BlockViewer from "components/BlockViewer";
export default {
  name: 'ModelViewer',
  components: { BlockViewer },
  props: {
    blocks: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped></style>
