<template>
	<div style="overflow: auto" class="background-cover">
		<br /><br />
		<div class="inner-div md-elevation-1">
			<div style="width: 85%; margin: 0 auto;">
				<br />
				<center>
					<h4 class="form-title">Sign in</h4>
				</center>
				<md-field>
			      <label>Email</label>
			      <md-input v-model="email"></md-input>
    			</md-field>
    			<md-field>
			      <label>Password</label>
			      <md-input v-model="password" type="password"></md-input>
    			</md-field>
				<md-button class="md-dense md-raised md-primary button-stable" v-on:click="profile">
					<i class="fa fa-lock"/>&nbsp; Submit
				</md-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Signin',
		data () {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			profile: function () {
				this.$router.push('/profile/nelmin-stink')
			}
		}
	}
</script>

<style scoped>

.inner-div {
	height: 290px;
	width: 400px;
	margin: 0 auto;
	background-color: white;
	margin-top: 100px !important;
}

.form-title {
	font-weight: bold;
	font-size: 25px;
}

.background-cover {
	background-image: url('./../assets/appbg.jpg');
	background-size: cover;
	height: 100vh;
}

.button-stable {
	width: 100%;
	height: 45px !important; 
	margin-left: -1px;
}

input, select, button, tr, a, label {
  font-family: 'Lineto Circular Book', sans-serif !important;
}


</style>