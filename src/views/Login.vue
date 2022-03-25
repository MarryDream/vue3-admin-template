<template>
  <el-form :model="formData" label-width="0">
    <el-form-item prop="username">
      <el-input v-model="formData.username" placeholder="请输入用户名" @keydown.enter="login"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="formData.password" placeholder="请输入密码" show-password @keydown.enter="login"></el-input>
    </el-form-item>
  </el-form>
  <div class="btn-box">
    <el-button type="primary" v-loading="loginLoading" @click="login">登录</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {reactive, toRefs} from "@vue/reactivity"
import {useRouter} from "vue-router"
import {useAppStore, useUserStore} from "@/store";
import {ElMessage} from "element-plus"

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter()
    const user = useUserStore()
    const app = useAppStore()

    const webTitle = app.title

    const state = reactive({
      formData: {
        username: "",
        password: ""
      },
      loginLoading: false
    })

    /* 登录 */
    function login() {
      state.loginLoading = true
      if (!state.formData.username || !state.formData.password) {
        state.loginLoading = false
        return ElMessage.warning("用户名或密码不能为空")
      }
      user.loginByPassword(state.formData).then(() => {
        state.loginLoading = false
        router.push("/system")
      }).catch(err => {
        ElMessage.error(err.toString() || "登录失败")
        state.loginLoading = false
      })
    }

    return {
      ...toRefs(state),
      webTitle,
      login
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
