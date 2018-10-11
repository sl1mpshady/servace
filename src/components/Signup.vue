<template>
	<div style="overflow: auto" class="background-cover">
		<br /><br />
		<div class="inner-div md-elevation-1">
			<div style="width: 85%; margin: 0 auto;">
				<br />
				<center>
					<h4 class="form-title">Sign up</h4>
				</center>
				<md-field>
			      <label>Email</label>
			      <md-input v-model="email"></md-input>
    			</md-field>
    			<md-field>
			      <label>Password</label>
			      <md-input v-model="password" type="password"></md-input>
    			</md-field>
				<md-button class="md-dense md-raised md-primary button-stable">Submit</md-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Signup',
		data () {
			return {
				email: '',
				password: ''
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
	font-family: 'Anton', sans-serif;
	font-size: 25px;
	letter-spacing: 3px;
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

</style>