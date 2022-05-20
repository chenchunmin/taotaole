<template>
    <div class="goodsDetail-container">
        <div class="card" @click="previewImg">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in thumb" :key="index">
                    <img :src="item.src" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="card">
            <div class="price">
                <span class="sell_price">&yen;{{ goodsInfo.sell_price }}</span>
                <span class="market_price">&yen;{{ goodsInfo.market_price }}</span>
            </div>
            <div class="title ellipsis_l2">{{ goodsInfo.title }}</div>
        </div>

        <div class="card">
            <van-divider content-position="left">介绍</van-divider>
            <div class="content" v-html="goodsInfo.content"></div>
        </div>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" dot />
            <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
// 商品详情
import { fetchGoodsLunbo, fetchGoodsInfo } from "../api/index.js";
import { ImagePreview } from "vant";
export default {
    props: ["id"],
    data() {
        return {
            thumb: [],
            goodsInfo: {},
        };
    },
    created() {
        this._fetchGoodsLunbo();
        this._fetchGoodsInfo();
    },
    methods: {
        async _fetchGoodsLunbo() {
            let { message } = await fetchGoodsLunbo(this.id);
            this.thumb = message;
        },
        async _fetchGoodsInfo() {
            let { message } = await fetchGoodsInfo(this.id);
            let reg = /\width=['"]\w+['"]\s+/i;
            message.content = message.content.replace(reg, "");
            this.goodsInfo = message;
        },
        previewImg() {
            ImagePreview({
                images: this.thumb.map((item) => item.src),
                startPosition: 1,
            });
        },
    },
};
</script>

<style lang="scss">
.goodsDetail-container {
    height: 100vh;
    padding: 2px;
    background: #efedee;

    .card {
        border-radius: 6px;
        margin-bottom: 8px;
        background-color: #fff;
        padding: 8px;

        .my-swipe {
            .van-swipe-item {
                height: 240px;
                text-align: center;

                img {
                    height: 100%;
                }
            }
        }

        .price {
            .sell_price {
                color: #fa865d;
                font-size: 20px;
                margin-right: 20px;
            }

            .market_price {
                color: #666;
                font-size: 14px;
            }
        }

        .title {
            color: #333;
            font-weight: 500;
        }

        .content {
            color: #666;

            img {
                width: 100%;
            }
        }
    }
}
</style>