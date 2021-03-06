<template lang="pug">
q-page.flex.flex-center
  model-viewer(:blocks="blocks")
</template>

<script>
import { Blocks } from "src/types/Block";
import ModelViewer from "components/ModelViewer";
export default {
  name: 'SampleTable',
  components: { ModelViewer },
  data: () => ({
    blocks: Blocks
  }),
};
</script>

<style scoped></style>
