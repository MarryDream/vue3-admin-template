<template>
  <component :is="layout"></component>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {useRoute} from "vue-router";
import * as l from "@/layout/index";

export default defineComponent({
  name: "App",
  components: {
    blankLayout: l.BlankLayout,
    UserLayout: l.UserLayout,
    LoginLayout: l.LoginLayout
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => {
      return `${route.meta.layout || "blank"}-layout`;
    });
    return {
      layout
    }
  }
})
</script>

<style lang="scss" scoped>
#app {
  min-width: 1400px;
}
</style>
