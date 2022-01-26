<template>
  <div class="login-base">
    <main>
      <header class="login-title">
        <h3>天狼星登录</h3>
      </header>
      <article class="login-contain">
        <el-form v-model="formData" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="formData.username" placeholder="请输入用户名" @keydown.enter="login"></el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input v-model="formData.password" placeholder="请输入密码" show-password @keydown.enter="login"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" v-loading="loginLoading" @click="login">登录</el-button>
      </article>
    </main>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const store = useStore()

    console.log(store)

    const state = reactive({
      formData: {
        username: '',
        password: ''
      },
      loginLoading: false
    })

    /* 登录 */
    function login() {
      state.loginLoading = true
      if (!state.formData.username || !state.formData.password) {
        state.loginLoading = false
        return ElMessage.warning('用户名或密码不能为空')
      }
      store
        .dispatch('user/loginByPassword', state.formData)
        .then(() => {
          state.loginLoading = false
          router.push('/system')
        })
        .catch(err => {
          ElMessage.error(err.toString() || '登录失败')
          state.loginLoading = false
        })
    }

    return {
      ...toRefs(state),
      login
    }
  }
}
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
    > .login-contain {
      padding: 30px 20px;
      &:deep(.el-form) {
        .el-input__inner {
          height: 42px;
          line-height: 42px;
          border-radius: 2px;
        }
      }
      .el-button {
        margin-top: 20px;
        width: 100%;
        height: 38px;
        border-radius: 2px;
      }
    }
  }
}
</style>