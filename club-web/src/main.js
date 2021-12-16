import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import { request, post, get } from './request/request.js'
import globalDict from './utils/dict.js'
Vue.config.productionTip = false
//Register network request
Vue.prototype.request = request;
Vue.prototype.post = post;
Vue.prototype.get = get;
Vue.prototype.globalDict = globalDict;
//Date filter
Vue.filter('filterDate', function (t) {
	const time = new Date(t)
	let y = time.getFullYear()
	let m = time.getMonth() + 1
	let d = time.getDate()
	let h = time.getHours()
	let minutes = time.getMinutes()
	const s = "-";
	return y + s + m + s + d;
})
//Date filter
Vue.filter('filterDateTime', function (t) {
	const time = new Date(t)
	let y = time.getFullYear()
	let m = time.getMonth() + 1
	let d = time.getDate()
	let h = time.getHours()
	let minutes = time.getMinutes()
	const s = "-";
	return y + s + m + s + d + " " + h + ":" + minutes;
})
//Date filter
Vue.filter('filterDateTime2', function (t) {
	const time = new Date(t)
	let y = time.getFullYear()
	let m = time.getMonth() + 1
	let d = time.getDate()
	let h = time.getHours()
	if(h<10){
		h = '0'+h;
	}
	let minutes = time.getMinutes()
	if(minutes<10){
		minutes = '0'+minutes;
	}
	let seconds = time.getSeconds();
	if(seconds<10){
		seconds = '0'+seconds;
	}
	const s = "-";
	return y + s + m + s + d + " " + h + ":" + minutes + ":" + seconds;
})
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
