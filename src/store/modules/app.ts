import {reactive, toRefs} from "vue";
import {defineStore} from "pinia";

export const useAppStore = defineStore("app", () => {
  const state = reactive({
    title: "SAOmd管理面板"
  })
  return {
    ...toRefs(state)
  }
})
