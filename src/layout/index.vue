<template>
  <NavBar />
  <MainView />
</template>

<script>
import NavBar from './modules/NavBar.vue'
import MainView from './modules/MainView.vue'
export default {
  name: 'Layout',
  components: {
    NavBar,
    MainView
  },
  setup() {}
}
</script>