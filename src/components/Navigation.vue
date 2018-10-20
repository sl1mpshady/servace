<template>
	<div>
	    <b-navbar toggleable="md" fixed="top" type="light" variant="light" class="nav-height md-elevation-2"> 
		  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		  <b-navbar-brand class="nav-title spread-appart"><a v-on:click="pushHome" class="disable-default">SerVace</a></b-navbar-brand>
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
	font-family: 'Anton', sans-serif;
	font-size: 30px;
	margin-left: 18px;
}

.spread-appart {
  letter-spacing: 3px;
}

.nav-height {
	height: 65px !important;
}

.disable-default {
	text-decoration: none !important;
	color: black !important;
	cursor: pointer;
}

.nav-links {
	font-family: 'Rubik', sans-serif;
	font-size: 16px;
	font-weight: bold;
	text-decoration: none !important;
}

.nav-links:hover {
	text-decoration: none !important;	
}

a:not(.md-button):hover {
    text-decoration: none !important;
}

a:not(.md-button) {
    text-decoration: none !important;
    text-decoration-line: none !important;
}

.dropdown-links {
	font-size: 16px !important; 
	color: rgba(0, 0, 0, 0.5) !important;
}

</style>