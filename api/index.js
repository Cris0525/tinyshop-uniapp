import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(
    config => {
        config.url = store.getters.baseUrl+'/api' + config.url
        return config;
    }
)

/***
 * response拦截器
 */
axios.interceptors.response.use(
    function (response) {
        if (response.data.status == 200) {
            return response.data;
        }
        return Promise.reject(response.data);
    }
)

export default axios;