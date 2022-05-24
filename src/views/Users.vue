<template>
  <div class="user-container">
    <div class="userInfo">
      <div class="active">
        <img src="../assets/images/logo.webp" alt="">
      </div>
      <div class="username">
        用户名1346
      </div>
    </div>
    <van-cell-group>
      <van-cell title="修改密码" is-link />
      <van-cell title="我的订单" is-link />
      <van-cell title="收货地址" is-link />
      <van-cell title="提交反馈" is-link />
      <van-cell title="设置" is-link />
      <van-cell title="关于海淘" value="v1.0.3" />
    </van-cell-group>
    <van-button type="danger" block>退出登录</van-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.user-container {
  .userInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;

    .active {
      width: 80px;

      img {
        width: 100%;
      }
    }

    .username {
      color: #666;
      font-size: 18px;
    }
  }
}
</style>