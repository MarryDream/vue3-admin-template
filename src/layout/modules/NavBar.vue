<template>
  <header>
    <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" background-color="#222" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" router>
      <template v-for="routes of userRoutes">
        <el-sub-menu v-if="routes.children && routes.children.length > 1" :class="{'is-active': this.$route.path === routes.path}" :key="routes.path" :index="routes.path">
          <template #title>{{ routes.meta.title }}</template>
          <el-menu-item v-for="route of routes.children" :key="route.path" :index="route.path">{{ route.meta.title }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :key="routes.path" :index="routes.path">{{ routes.meta.title }}</el-menu-item>
      </template>
      <div class="el-menu-item logout-btn" @click="logout">退出登录</div>
    </el-menu>
  </header>
</template>

<script>
import userRoutes from '@/router/modules/usercenter'
import { useStore } from 'vuex'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    /* 获取实际route列表 */
    function getRouteList(routes, children = []) {
      for (const route of routes) {
        if (route.meta.hidden) continue
        if (!route.children) {
          children.push(route)
          continue
        }
        const childShow = route.children.filter(item => !item.meta.hidden)
        const trueRoute = childShow.length === 1 ? childShow[0] : route
        const trueCloneRoute = JSON.parse(JSON.stringify(trueRoute))
        trueCloneRoute.children = []

        children.push(trueCloneRoute)
        if (trueRoute.children) {
          getRouteList(trueRoute.children, trueCloneRoute.children)
        }
      }
      return children
    }

    function logout() {
      ElMessageBox.confirm('确定退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          store.dispatch('user/logout')
          router.push('/login')
        })
        .catch(() => {})
    }

    return {
      userRoutes: getRouteList(userRoutes),
      logout
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .logout-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>