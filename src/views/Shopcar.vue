<template>
  <div class="cartContainer">
    <div class="cartlist">
      <div class="item" v-for="(item, index) in cartGoodslist" :key="item.id">
        <van-checkbox @click="checkBox(item.id, $store.getters.getGoodsStatus[item.id])"
          v-model="$store.getters.getGoodsStatus[item.id]" checked-color="#ee0a24" />
        <div class="imgWrap">
          <img :src="item.thumb_path" />
        </div>
        <div class="info">
          <div class="title ellipsis_l1">{{ item.title }}</div>
          <div class="area">
            <div class="price">&yen;{{ item.sell_price }}</div>
            <van-stepper @change="numberChange($event, item.id)" v-model="$store.getters.getGoodsNumber[item.id]"
              theme="round" button-size="22" disable-input />
            <van-button type="danger" @click="delShopCar(item.id, index)">删除</van-button>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="$store.getters.getGoodsTotalPrice * 100" button-text="提交订单" @submit="onSubmit">
      <template #default>
        共计{{ $store.getters.getGoodsTotalNumber }}件
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { fetchShopCar } from "../api/index.js";
export default {
  data() {
    return {
      cartGoodslist: [],
      ids: this.$store.getters.getCarId,
    };
  },
  created() {
    this._fetchShopCar();
  },
  methods: {
    async _fetchShopCar() {
      if (this.ids.length == 0) {
        return;
      }
      let { message } = await fetchShopCar(this.ids);
      this.cartGoodslist = message;
    },
    delShopCar(id, index) {
      this.cartGoodslist.splice(index, 1);
      this.$store.commit("delCar", id);
    },
    // 切换选中不选中
    checkBox(id, selected) {
      this.$store.commit("GoodsSelect", { id, selected });
    },
    // 设置购物车购买数量
    numberChange(number, id) {
      this.$store.commit("GoodsNumber", { number, id });
    },
    onSubmit() { },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/common.scss";

.cartContainer {
  height: 100vh;
  background-color: #eae7e75e;
  padding: 6px;

  .van-submit-bar {
    bottom: 50px;
  }

  .cartlist {
    .item {
      display: flex;
      padding: 4px;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-radius: 6px;
      margin: 10px 0;

      .imgWrap {
        flex-basis: 50px;
        height: 50px;
        padding: 4px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .title {
          width: 70vw;
        }

        .area {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .price {
            color: #ff424a;
          }
        }
      }
    }
  }
}
</style>