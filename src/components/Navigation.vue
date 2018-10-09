<template>
	<div>
	  <b-navbar fixed="top" type="light" variant="light" class="nav-height md-elevation-1" >
		  <b-navbar-brand class="nav-title spread-appart"><a href="/" class="disable-default">SerVace</a></b-navbar-brand>
		  <b-collapse is-nav id="nav_collapse">
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

</style>