<template>
  <div id="app">
    <van-nav-bar v-show="ShowNavBar" :title="title" left-arrow @click-left="onClickLeft" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      ShowNavBar: true,
      title: "乐淘",
    };
  },

  watch: {
    $route: {
      handler: function (route) {
        if (route.meta) {
          let { pageTitle, isShowNavBar } = route.meta;
          // 头部标题
          this.title = pageTitle;
          // 头部NavBar的显示和隐藏
          this.ShowNavBar = isShowNavBar ? false : true;
        }
      },
      immediate: true,
    },
  },

  methods: {
    onClickLeft() {
      // 返回页面栈的上一个页面(router:路由器route:当前路由)
      this.$router.back()
    }
  }

};
</script>
<style lang="scss">
#app {
  min-width: 320px;
  max-width: 750px;
  margin: auto;

  .van-tabbar {
    min-width: 320px;
    max-width: 750px;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>

