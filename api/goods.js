import axios from 'axios'

export default {
	/**
	 * 商品分页列表
	 * */
	getGoodsList(opt) {
		return axios.get('/good', {
			params: opt
		});
	},
	/**
	 * 获取商品分类列表
	 * */
	getGoodsCategoryList(opt) {
		return axios.get('/goodCategory/tree', {
			params: opt
		});
	},
	/**
	 * 首页广告图列表
	 */
	shopBannerList(opt) {
		return axios.get('/shop/banner/list', {
			params: opt
		});
	}

}
