<template lang="pug">
q-layout(view='lHh Lpr lFf')
  q-header(elevated='')
    q-toolbar
      q-btn(
        flat='',
        dense='',
        round='',
        icon='menu',
        aria-label='Menu',
        @click='leftDrawerOpen = !leftDrawerOpen'
      )
        q-toolbar-title Financial Model Builder
        div v.0.01
  q-drawer(
    v-model='leftDrawerOpen',
    show-if-above='',
    bordered='',
    content-class='bg-grey-1'
  )
    q-list
      q-item-label.text-grey-8(header='')
        | Essential Links
      essential-link(
        v-for='link in essentialLinks',
        :key='link.title',
        v-bind='link'
      )
  q-page-container
    router-view
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Model Viewer',
    caption: 'ModelViewer',
    icon: 'code',
    link: 'samplemodel',
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
