import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import Search from '@/components/Search'
import Signin from '@/components/Signin'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'FrontPage',
			component: FrontPage
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/signin',
			name: 'signin',
			component: Signin
		}
	]
})