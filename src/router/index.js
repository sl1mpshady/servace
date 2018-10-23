import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import Search from '@/components/Search'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Profile from '@/components/Profile'

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
			name: 'Signin',
			component: Signin
		},
		{
			path: '/signup',
			name: 'Signup',
			component: Signup
		},
		{
			path: '/profile',
			name: 'Profile',
			component: Profile
		}
	]
})