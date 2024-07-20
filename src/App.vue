<script setup>
</script>

<template>
  <div class="app">
    <nav class="left-nav">
      <div class="menu-header">
        <i class="icon iconfont icon-wutouxiang"></i>
      </div>
      <div class="menu-content">
        <router-link to="/chat">
          <div class="item-style">
            <i class="icon iconfont icon-chart-"></i>
            <span class="item-title">对话</span>
          </div>
        </router-link>
        <router-link to="/create">
          <div class="item-style">
            <i class="icon iconfont icon-yumaobi"></i>
            <span class="item-title">创作</span>
          </div>
        </router-link>
        <router-link to="/simulate">
          <div class="item-style">
            <i class="icon iconfont icon-renxiang"></i>
            <span class="item-title">模拟</span>
          </div>
        </router-link>
        <router-link to="/painting">
          <div class="item-style">
            <i class="icon iconfont icon-huihua"></i>
            <span class="item-title">绘画</span>
          </div>
        </router-link>
        <router-link to="/knowledge">
          <div class="item-style">
            <i class="icon iconfont icon-zhishiku"></i>
            <span class="item-title">知识库</span>
          </div>
        </router-link>
        <router-link to="/more">
          <div class="item-style">
            <i class="icon iconfont icon-gengduo"></i>
            <span class="item-title">更多</span>
          </div>
        </router-link>
      </div>
      <div class="menu-bottom">
        <i class="icon iconfont icon-yueliang"></i>
        <span :id="id" class="light-mode-title">夜间</span>
      </div>
    </nav>
    <div class="right-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa)
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa)
}

#app {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: #eff0f0;
  height: 100vh;
}

.left-nav {
  width: 100px;
  transition: all 0.2s;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: relative;
  @apply shadow-md fixed;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  // &:hover {
  //   color: black;
  //   background-color: unset !important;
  // }

  a {
    display: block;
    color: #606468;
    &:hover {
      color: #10a37f;
      background-color: unset !important;
    }
  }

  .menu-header {
    width: 48px;
    height: 48px;
    border-radius: 5px;
    margin: 10px auto 30px auto;
    overflow: hidden;
    display: flex;
    justify-content: center;

    i {
      font-size: 24px;
    }
  }

  .menu-content {
    .item-style {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      i {
        font-size: 24px;
      }

      .item-title {
        font-size: 13px;
      }
    }
  }

  .menu-bottom {
    position: absolute;
    bottom: 10px;
    height: 66px;
    font-size: 14px;
    margin-top: 10px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;

    i {
      font-size: 26px;
    }
  }
}

.right-container {
  padding-top: 0;
  min-width: 800px;
  position: absolute;
  top: 0;
  left: 100px;
  right: 0;
  height: 100%;
  background: #eff0f0;
}
</style>