<template>
  <div class="dashboard-base">{{ title }}</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Dashboard",
  setup() {
    return {
      title: "控制台"
    }
  }
})
</script>
