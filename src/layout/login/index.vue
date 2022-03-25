<template>
  <div class="login-base">
    <main>
      <header class="login-title">
        <h3>{{ title }}</h3>
      </header>
      <article class="login-contain">
        <router-view/>
      </article>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {useAppStore} from "@/store";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "LoginLayout",
  setup() {
    const app = useAppStore()
    const route = useRoute()

    const title = computed(() => {
      return app.title + route.meta?.title
    })
    return {
      title
    }
  }
})
</script>

<style lang="scss" scoped>
.login-base {
  height: 100vh;
  position: relative;
  background-color: #333;
  overflow: hidden;

  > main {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 0 3px #999;

    > .login-title {
      padding: 20px;
      border-bottom: 1px solid #eee;

      h3 {
        margin: 0;
        font-size: 16px;
        font-weight: normal;
      }
    }

    > ::v-deep(.login-contain) {
      padding: 30px 20px;

      .el-form {
        .el-input__inner {
          height: 42px;
          line-height: 42px;
          border-radius: 2px;
        }
      }

      .btn-box {
        margin-top: 20px;
        display: flex;
        align-items: center;

        .el-button {
          flex: 1;
          height: 38px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
