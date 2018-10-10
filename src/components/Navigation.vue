<template>
	<div>
	    <b-navbar toggleable="md" fixed="top" type="light" variant="light" class="nav-height md-elevation-1"> 

		  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		  <b-navbar-brand class="nav-title spread-appart"><a href="/" class="disable-default">SerVace</a></b-navbar-brand>

		  <b-collapse is-nav id="nav_collapse">
		    <b-navbar-nav class="ml-auto">
		        <b-navbar-nav>
			      <b-nav-item href="#" class="nav-links"><i class="fa fa-home"></i>&nbsp;Home</b-nav-item>
			      <b-nav-item href="#" class="nav-links"><i class="fa fa-search" active></i>&nbsp;Search</b-nav-item>
			      <b-nav-item-dropdown right>
			        <!-- Using button-content slot -->
			        <template slot="button-content"><i class="fa fa-user"></i>&nbsp;<font class="nav-links">User</font></template>
			        <b-dropdown-item href="#" class="nav-links dropdown-links"><i class="fa fa-key"></i>&nbsp;Signin</b-dropdown-item>
			        <b-dropdown-item href="#" class="nav-links dropdown-links"><i class="fa fa-pencil-alt"></i>&nbsp;Signup</b-dropdown-item>
			      </b-nav-item-dropdown>
		        </b-navbar-nav>
		        &nbsp;
		        &nbsp;
		    </b-navbar-nav>
		  </b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: 'Navigation'
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
	height: 60px !important;
}

.disable-default {
	text-decoration: none !important;
	color: black !important;
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