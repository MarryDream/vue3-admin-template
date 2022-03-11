<template>
  <div class="not-found h100">
    <div class="not-found-contain">
      <p class="not-found-content">
        <span>404</span>
        <el-button type="primary" size="small" @click="$router.push('/')">回到首页</el-button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'NotFound'
})
</script>

<style lang="scss" scoped>
.not-found {
  position: relative;
  background-color: #f8f8f8;
  text-align: center;
  > .not-found-contain {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    > .el-image {
      margin: 0 15px;
      width: 280px;
      height: 254px;
    }
    > .not-found-content {
      margin-top: 30px;
      font-size: 14px;
      color: #333;
      .el-button {
        border-radius: 14px;
        margin-left: 20px;
      }
    }
  }
}
</style>
