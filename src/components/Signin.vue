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
    			<p v-show="loginError"class="form-error">Incorrect Email/Password, please check your spelling.</p>
				<md-button class="md-dense md-raised md-primary button-stable" v-on:click="signin">
					<i class="fa fa-lock"/>&nbsp; Submit
				</md-button><br /><br /><br />
			</div>
		</div>
	</div>
</template>

<script>
	import io from 'socket.io-client'

	export default {
		name: 'Signin',
		created: function () {
			if(this.$session.exists('authenticatedLoggedIn')) {
				this.$router.push(`/profile/${this.$session.get('authenticatedSlug')}`)
			}
			this.socket = io('localhost:3000')
			this.socket.on('login-employee-response', (data) => {
				if(data.length !=0 ) {
					this.$router.push(`/profile/${data[0].slug}`)
					this.$session.set('origin','signin')
					this.$session.set('userOrigin', data[0].email)
					this.$session.set('authenticatedLoggedIn', true)
					this.$session.set('authenticatedSlug', data[0].slug)
				} else {
					this.loginError = true
				}
			})
		},
		data () {
			return {
				email: '',
				password: '',
				socket: '',
				loginError: false
			}
		},
		methods: {
			profile: function () {
				this.$router.push('/profile/nelmin-stink')
			},
			signin: function () {
				this.socket.emit('login-employee', { 
					email: this.email,
					password: this.password
				})
			}
		}
	}
</script>

<style scoped>
.inner-div {
	min-height: 290px;
	max-height: 400px;
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

.form-error {
	color: #d63031;
	font-family: 'Lineto Circular Book', sans-serif !important;
	font-weight: bold;
}
</style>