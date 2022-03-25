<template>
  <div class="plugins-base">{{ title }}</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "PageFirst",
  setup() {
    return {
      title: "页面一"
    }
  }
})
</script>
