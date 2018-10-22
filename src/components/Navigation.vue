<template>
	<div>
	    <b-navbar toggleable="md" fixed="top" type="light" variant="light" class="nav-height md-elevation-2"> 
		  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		  <b-navbar-brand class="nav-title spread-appart">
		  	<a v-on:click="pushHome" class="disable-default">
		  		ServAce
		  	</a>
		  </b-navbar-brand>
		  <b-collapse is-nav id="nav_collapse">
		    <!-- Right aligned nav items -->
		    <b-navbar-nav class="ml-auto" style="margin-right: 13px;">
			  <b-nav-item class="nav-links">
			  	<router-link :to="{name: 'FrontPage'}"><i class="fa fa-home"/>&nbsp; Home</router-link>
			  </b-nav-item>
		      <b-nav-item class="nav-links"  v-bind:class="{ 'nav-links-active': $route.path === '/search' }">
		      	<router-link :to="{name: 'Search'}"><i class="fa fa-search"/>&nbsp; Search</router-link>
		      </b-nav-item>
		      <b-nav-item href="/user" class="nav-links">
		      		<i class="fa fa-user"/>&nbsp; User
		      </b-nav-item>
		    </b-navbar-nav>
		  </b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: 'Navigation',
		methods: {
			pushHome: function () {
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
.nav-title {
	font-family: 'Samsung Sharp Sans Bold', sans-serif !important;
	font-size: 30px;
	margin-left: 18px;
	color: #27ae60 !important ;
}

.nav-height {
	height: 65px !important;
}

.disable-default {
	text-decoration: none !important;
	color: black !important;
	cursor: pointer;
	color: #27ae60 !important;
}

.nav-links {
	font-family:'Lineto Circular Book', sans-serif !important;
	font-size: 16px;
	font-weight: bold;
	text-decoration: none !important;
}

.nav-links:hover {
	background-color: #e9ecef;
	border-radius: 10px 10px;
}


a:not(.md-button):hover {
    text-decoration: none !important;
    color: #27ae60 !important;
}

a:not(.md-button) {
    text-decoration: none !important;
    text-decoration-line: none !important;
}

.dropdown-links {
	font-size: 16px !important; 
	color: rgba(0, 0, 0, 0.5) !important;
}

.nav-links {
	font-size: 17px !important;
}

.router-link-active {
	color: rgba(0, 0, 0, 0.7) !important;
}

.nav-links-active {
	background-color: #e9ecef;
	border-radius: 10px 10px;
}

.nav-links-active > a > a {
	color: #27ae60 !important;
}

.nav-link > a {
	color:  rgba(0, 0, 0, 0.5) !important;
}

</style>