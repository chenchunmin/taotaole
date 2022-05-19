<template>
    <div class="Goods-container">
        <Goods v-for="item in goodsList" :key="item.id" :data="item"></Goods>
    </div>
</template>

<script>
import { fetchGoodsList } from '../api/index.js';
import Goods from '../components/Goods.vue'
export default {
    data() {
        return {
            page: 1,
            limit: 12,
            goodsList: [],
        }
    },
    created() {
        this._fetchGoodsList()
    },
    methods: {
        async _fetchGoodsList() {
            let { message } = await fetchGoodsList(this.page, this.limit)
            this.goodsList = message;
        }
    },
    components: {
        Goods
    }
}
</script>

<style lang="scss" scoped>
.Goods-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f0eded;
    padding-top: 4px;

    .item {
        box-shadow: 0 0 8px #ccc;
    }
}
</style>