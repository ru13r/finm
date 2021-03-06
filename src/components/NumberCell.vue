<template lang="pug">
div(:class="isNumber ? 'numberCell' : ''")
  span {{ isNumber ? format(value) : value }}
  span(v-if='isPositive', style='visibility: hidden') )
</template>

<script>
import { numberToMonetary } from 'src/helpers/formating';
export default {
  name: 'NumberCell',
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    isPositive: ({ value }) => Number.isFinite(value) && value >= 0,
    isNumber: ({ value }) => Number.isFinite(value),
  },
  methods: {
    format: numberToMonetary,
  },
};
</script>

<style scoped lang="sass">
.numberCell
  text-align: right
</style>
