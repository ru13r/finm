<template lang="pug">
q-item(
  clickable='',
  tag='a',
  target='_blank',
  :href='link'
  )
  q-item-section(
    v-if='icon',
    avatar=''
    )
    q-icon(:name='icon')
  q-item-section
    q-item-label {{ title }}
    q-item-label(caption='')
      | {{ caption }}
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>
