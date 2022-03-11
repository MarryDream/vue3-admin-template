<template>
  <aside>
    <el-menu :default-active="this.$route.path" class="el-menu-demo" background-color="#333" text-color="#fff"
             active-text-color="#ffd04b" router>
      <header>
        <div class="title">SAOmd</div>
        <div class="avatar-box">
          <el-image src="https://q1.qlogo.cn/g?b=qq&s=640&nk=2190758465"/>
          <p>MarryDream</p>
        </div>
      </header>
      <div v-for="routes of userRoutes" :key="routes.path">
        <el-sub-menu v-if="routes.children && routes.children.length > 1"
                     :class="{'is-active': this.$route.path === routes.path}" :index="routes.path">
          <template #title>{{ routes.meta.title }}</template>
          <el-menu-item v-for="route of routes.children" :key="route.path" :index="route.path">{{
              route.meta.title
            }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="routes.path">{{ routes.meta.title }}</el-menu-item>
      </div>
    </el-menu>
  </aside>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {RouteRecordRaw} from "vue-router";
import userRoutes from "@/router/modules/usercenter";

export default defineComponent({
  name: "LayoutAside",
  setup() {
    /* 获取实际route列表 */
    function getRouteList(routes: Array<RouteRecordRaw>, children: Array<RouteRecordRaw> = []) {
      for (const route of routes) {
        if (route.meta?.hidden) continue
        if (!route.children) {
          children.push(route)
          continue
        }
        const childShow = route.children.filter(item => !item.meta?.hidden)
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

    return {
      userRoutes: getRouteList(userRoutes)
    }
  }
})
</script>

<style lang="scss" scoped>
aside {
  height: 100vh;

  header {
    .title {
      height: 60px;
      padding: 20px 0;
      background-color: #222;
      line-height: 20px;
      color: #fff;
      text-align: center;
    }

    .avatar-box {
      padding: 18px 0;
      text-align: center;
      border-bottom: 1px solid #3c3c3c;

      .el-image {
        width: 80px;
        height: 80px;
        border: 3px solid rgba($color: #fff, $alpha: 0.5);
        border-radius: 50%;
      }

      p {
        margin: 14px 0 0;
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .el-menu {
    height: 100%;
    border-right: 0;
  }
}
</style>
