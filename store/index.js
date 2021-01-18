import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		user,
	},
	getters,
})

// const store = new Vuex.Store({
// 	state: {
// 		hasLogin: false,
// 		baseUrl: 'http://tinyshop/tucy.top',
// 		userInfo: {},
// 	},
// 	mutations: {
// 		login(state, provider) {

// 			state.hasLogin = true;
// 			state.userInfo = provider;
// 			uni.setStorage({ //缓存用户登陆状态
// 				key: 'userInfo',
// 				data: provider
// 			})
// 			console.log(state.userInfo);
// 		},
// 		logout(state) {
// 			state.hasLogin = false;
// 			state.userInfo = {};
// 			uni.removeStorage({
// 				key: 'userInfo'
// 			})
// 		}
// 	},
// 	actions: {

// 	}
// })

// export default store
