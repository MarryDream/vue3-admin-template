<template>
  <el-form :model="formData" ref="regFormRef" :rules="rules" label-width="0">
    <el-form-item prop="username">
      <el-input v-model="formData.username" placeholder="请输入用户名" @keydown.enter="register"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="formData.password" placeholder="请输入密码" show-password @keydown.enter="register"></el-input>
    </el-form-item>
    <el-form-item prop="confirmPassword">
      <el-input v-model="formData.confirmPassword" placeholder="请再次输入密码" show-password
                @keydown.enter="register"></el-input>
    </el-form-item>
  </el-form>
  <div class="btn-box">
    <el-button type="primary" v-loading="registerLoading" @click="register">注册</el-button>
    <el-button type="primary" @click="toLogin">返回</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent, Ref, ref} from "vue";
import {reactive, toRefs} from "@vue/reactivity"
import {useRouter} from "vue-router"
import {ElMessage} from "element-plus"
import {validUserName, validPassword} from "@/utils/validate"

export default defineComponent({
  name: "Register",
  setup() {
    const router = useRouter()

    const state = reactive({
      formData: {
        username: "",
        password: "",
        confirmPassword: ""
      },
      registerLoading: false
    })

    const regFormRef: Ref<any> = ref(null)

    // 校验函数
    function validateUser(rule: any, value: string, callback: any) {
      if (!value) {
        callback(new Error("用户名不能为空"));
      } else if (!validUserName(value)) {
        callback(new Error("请输入6-14个字符，且字母开头，由字母数字和下划线组成"));
      } else {
        callback()
      }
    }
    function validatePassword(rule: any, value: string, callback: any) {
      regFormRef.value?.validateField("confirmPassword", () => null)
      if (!value) {
        callback(new Error('密码不能为空'))
      } else if (!validPassword(value)) {
        callback(new Error('请输入8-20个字符，且必须包括一个数字、小写字母和大写字母'))
      } else {
        callback()
      }
    }
    function validateConfirmPassword(rule: any, value: string, callback: any) {
      if (state.formData.password && value !== state.formData.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }

    const rules = reactive({
      username: [{ require: true, validator: validateUser, trigger: 'blur' }],
      password: [{ require: true, validator: validatePassword, trigger: 'blur' }],
      confirmPassword: [{ require: true, validator: validateConfirmPassword, trigger: 'blur' }]
    })

    /* 注册 */
    async function register() {
      state.registerLoading = true;
      const regForm = regFormRef.value
      if (!regForm) return
      regForm.validate((valid: boolean) => {
        if (valid) {
          ElMessage.info("暂不存在注册接口哟")
        } else {
          ElMessage.error("表单填写的有问题啊喂(#`O′)")
        }
        state.registerLoading = false
      })
    }

    /* 前去注册页 */
    function toLogin() {
      router.push("/login")
    }

    return {
      ...toRefs(state),
      rules,
      regFormRef,
      register,
      toLogin
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
