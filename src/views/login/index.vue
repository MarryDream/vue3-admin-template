<template>
  <div class="login-base">
    <el-button @click="login">{{ title }}</el-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    console.log(store.state.app.title)

    function login() {
      router.push('/system')
    }

    return {
      title: '登录',
      login
    }
  }
}
</script>