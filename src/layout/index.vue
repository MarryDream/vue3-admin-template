<template>
  <div class="layout-base">
    <Aside class="aside" />
    <div class="content">
      <NavBar class="nav" />
      <MainView class="main" />
    </div>
  </div>
</template>

<script>
import NavBar from './modules/NavBar.vue'
import Aside from './modules/Aside.vue'
import MainView from './modules/MainView.vue'
export default {
  name: 'Layout',
  components: {
    NavBar,
    Aside,
    MainView
  },
  setup() {}
}
</script>

<style lang="scss" scoped>
.layout-base {
  display: flex;
  .aside {
    width: 200px;
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    .main {
      flex: 1;
    }
  }
}
</style>