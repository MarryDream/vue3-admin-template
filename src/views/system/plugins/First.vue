<template>
  <div class="plugins-base">{{ title }}</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "First",
  setup() {
    return {
      title: "插件一"
    }
  }
})
</script>
