<template>
	<div style="overflow: auto" class="background-cover">
		<br />
		<div class="inner-div md-elevation-2">
			<div style="width: 90%; margin: 0 auto;">
				<br /><br />
					<h4 class="form-title">Employee Registration Form</h4>
					<p>Fill up information needed in the form below to sign up as an employee.</p>
					<br />
				<div v-show="(step === 1)">
					<b-row>
						<b-col>
							<b><i class="fa fa-user"/>&nbsp;Fillup Personal Informations</b>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* First Name</label>
						      <md-input v-model="firstName"></md-input>
	    					</md-field>
						</b-col>
				        <b-col cols="2">
				        	<md-field>
						      <label>Middle Initial</label>
						      <md-input v-model="middleName" maxlength="1" type="text"></md-input>
	    					</md-field>
				        </b-col>
				        <b-col>
				        	<md-field>
						      <label>* Last Name</label>
						      <md-input v-model="lastName"></md-input>
	    					</md-field>
				        </b-col>
					</b-row>
					<b-row>
						<b-col>
							<md-field>
					          <label for="provinceSelected">* Province</label>
					          <md-select v-model="provinceSelected">
					            <md-option v-for="item in province" :key="item.id" :value="item.id">{{item.name}}</md-option>
					          </md-select>
					        </md-field>
	    				</b-col>
						<b-col>
							<md-field>
					          <label for="citySelected">* City</label>
					          <md-select v-model="citySelected">
					            <md-option v-for="item in city" :key="item.id" :value="item.id">{{item.name}}</md-option>
					          </md-select>
					        </md-field>
	    				</b-col>
	    				<b-col>
							<md-field>
						      <label>* Barangay</label>
						      <md-input v-model="barangay"></md-input>
		    				</md-field>	
	    				</b-col>
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* Date of Birth</label>
						      <md-input v-model="dateOfBirth"></md-input>
		    				</md-field>
						</b-col>
						<b-col>
							<md-field>
						      <label>* Contact No.</label>
						      <md-input v-model="contactNo" type="number"></md-input>
		    				</md-field>
						</b-col> 	
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* Job</label>
						      <md-input v-model="job"></md-input>
		    				</md-field>
	    				</b-col>
	    				<b-col>
							<md-field>
						      <label>* Expected Salary</label>
						      <md-input v-model="expectedSalary" type="number"></md-input>
		    				</md-field>
	    				</b-col>	
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* Years of Experience</label>
						      <md-input v-model="yearsOfExperience"></md-input>
		    				</md-field>
	    				</b-col>	
	    				<b-col>
							<md-field>
					          <label for="movie">Service Type</label>
					          <md-select v-model="service">
					            <md-option value="Home">Home Service</md-option>
					            <md-option value="Shop">Shop Service</md-option>
					            <md-option value="HomeShop">Home and Shop Service</md-option>
					          </md-select>
					        </md-field>
	    				</b-col>
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* Skills</label>
						      <md-input v-model="skills"></md-input>
		    				</md-field>
		    				<p style="margin-top: -15px; color: gray;"><i>Please separate your skills with a comma (e.g. Cooking, Sketching, Painting).</i></p>
	    				</b-col>	
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* Certifications</label>
						      <md-file v-model="skills"></md-file>
		    				</md-field>
		    				<p style="margin-top: -15px; color: gray;"><i>Please upload your certifications as an image file.</i></p>
	    				</b-col>	
					</b-row>
					<b-row>
						<b-col><b style="font-size:16px;">Step 1 of 2</b></b-col>
						<b-col></b-col>
						<b-col align-v="end">
							<md-button class="md-raised md-primary button-stable" v-on:click="proceed">
								Proceed &nbsp; <i class="fa fa-arrow-right" />
							</md-button>
						</b-col>
					</b-row>
				</div>
				<div v-show="(step === 2)">
					<b-row>
						<b-col>
							<b><i class="fa fa-lock"/>&nbsp;Setup Account Information</b>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* Email Address</label>
						      <md-input v-model="email"></md-input>
	    					</md-field>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<md-field>
						      <label>* Password</label>
						      <md-input v-model="password" type="password"></md-input>
	    					</md-field>
						</b-col>
						<b-col>
							<md-field>
						      <label>* Confirm Password</label>
						      <md-input v-model="confirmPassword" type="password"></md-input>
	    					</md-field>
						</b-col>
					</b-row>
					<b-row>
						<b-col><b style="font-size:16px;">Step 2 of 2</b></b-col>
						<b-col>
							<md-button class="md-raised md-primary button-stable" v-on:click="previous" style="background-color: #27ae60;">
								<i class="fa fa-arrow-left" /> &nbsp; Previous 
							</md-button>
						</b-col>
						<b-col align-v="end">
							<md-button class="md-raised md-primary button-stable">
								Submit &nbsp; <i class="fa fa-paper-plane" />
							</md-button>
						</b-col>
					</b-row>
				</div>
			</div>
			<br /><br />
		</div>
		<br /><br /><br /><br />
	</div>
</template>

<script>
	import io from 'socket.io-client'

	export default {
		name: 'Signup',
		created: function () {
			this.socket = io('http://localhost:3000')
			this.socket.emit('get-province-trigger')
			this.socket.on('get-province-response', (data) => {
				this.province = data
			})
			this.socket.on('get-cities-response', (data) => {
				this.city = data
			})
		},
		data () {
			return {
				socket: '',
				firstName: '',
				middleName: '',
				lastName: '',
				email: '',
				username: '',
				password: '',
				confirmPassword: '',
				address: '',
				provinceSelected: '',
				province: '',
				citySelected: '',
				city: '',
				barangay: '',
				expectedSalary: '',
				service: '',
				dateOfBirth: '',
				contactNo: '',
				job: '',
				yearsOfExperience: '',
				skills: '',
				step: 1,
				isCityPopulated: true
			}
		},
		methods: {
			proceed: function () {
				this.step += 1
			},
			previous: function () {
				this.step -= 1
			}
		},
		watch: {
		    provinceSelected: function(event) {
		      this.socket.emit('get-cities-trigger',{ id: this.provinceSelected })
		    }
  		}
	}
</script>

<style scoped>
.inner-div {
	min-height: 300px;
	max-height: 0 auto;
	width: 60%;
	margin: 0 auto;
	background-color: white;
	margin-top: 100px !important;
}

.form-title {
	font-weight: bold;
	font-size: 25px;
	text-align: left;
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