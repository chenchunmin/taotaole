import instance from "./request.js";
// 轮播图
export function fetchLunbo() {
    return instance.get('/getlunbo')
}
// 推荐商品
export function fetchGoods(page = 1, limit = 10) {
    return instance.get(`/recommend?page=${page}&limit=${limit}`)
}

// 商品列表
export function fetchGoodsList(page = 1, limit = 10) {
    return instance.get(`/getgoods?pageindex=${page}&pagesize=${limit}`)
}

// 商品详情轮播图
export function fetchGoodsLunbo(goodsid) {
    return instance.get(`/getthumbimages/${goodsid}`)
}

// 商品详情基本信息
export function fetchGoodsInfo(goodsid) {
    return instance.get(`/getgoodsinfo/${goodsid}`)
}