<template>
  <header>
    <div></div>
    <div class="el-menu-item logout-btn" @click="logout">退出登录</div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useUserStore} from "@/store";
import {ElMessageBox} from "element-plus"
import {useRouter} from "vue-router"

export default defineComponent({
  name: "LayoutNavBar",
  setup() {
    const router = useRouter()
    const user = useUserStore()

    function logout() {
      ElMessageBox.confirm("确定退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        user.logout()
        router.push("/login")
      }).catch(() => {
      })
    }

    return {
      logout
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: #222;

  .logout-btn {
    font-size: 14px;
    color: #fff;
    transition: background-color 0.2;

    &:hover {
      background-color: #111;
    }
  }
}
</style>
