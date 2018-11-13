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
					          <label for="gender">Sex</label>
					          <md-select v-model="gender">
					            <md-option value="1">Male</md-option>
					            <md-option value="0">Female</md-option>
					          </md-select>
					        </md-field>
				    	</b-col>
						<b-col>
							<md-field>
						      <label>* Date of Birth</label>
						      <md-input v-on:focus="showDialog = true" v-model="dateOfBirth"></md-input>
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
					          <label for="provinceSelected">* Province</label>
					          <md-select v-model="provinceSelected">
					            <md-option v-for="item in province" :key="item.id" :value="item.id">{{item.name}}</md-option>
					          </md-select>
					        </md-field>
	    				</b-col> 	
						<b-col>
							<md-field v-show="(city !== '')">
					          <label for="citySelected">* City / Municipality</label>
					          <md-select v-model="citySelected">
					            <md-option v-for="item in city" :key="item.id" :value="item.id">{{item.name}}</md-option>
					          </md-select>
					        </md-field>
					        <md-field v-show="(city === '')">
					          <label for="citySelected">* City / Municipality</label>
					          <md-select v-model="citySelected" disabled>
					            <md-option v-for="item in city" :key="item.id" :value="item.id">{{item.name}}</md-option>
					          </md-select>
					        </md-field>
	    				</b-col>
	    				<b-col>
							<md-field v-show="(barangay !== '')">
					          <label for="barangaySelected">* Barangay</label>
					          <md-select v-model="barangaySelected">
					            <md-option v-for="item in barangay" :key="item.id" :value="item.id">{{item.name}}</md-option>
					          </md-select>
					        </md-field>
					        <md-field v-show="(barangay === '')">
					          <label for="barangaySelected">* Barangay</label>
					          <md-select v-model="barangaySelected" disabled>
					            <md-option v-for="item in barangay" :key="item.id" :value="item.id">{{item.name}}</md-option>
					          </md-select>
					        </md-field>
	    				</b-col>
					</b-row>
					<b-row>
						<b-col>
							<md-autocomplete v-model="jobSelected" :md-options="getSanitizedOptions">
     							<label>* job</label>
     							<template v-if="hasMatch" slot="md-autocomplete-item" slot-scope="{ item, term }">
        							<md-highlight-text :md-term="term">{{ item.Name }}</md-highlight-text>
      							</template>
								
								<template v-if="!hasMatch" slot="md-autocomplete-empty" slot-scope="{ term }">
									No jobs matching {{ term.Name }} were found
  								</template>	
    						</md-autocomplete>
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
						      <md-input v-model="yearsOfExperience" type="number"></md-input>
		    				</md-field>
	    				</b-col>	
	    				<b-col>
							<md-field>
					          <label for="movie">Service Type</label>
					          <md-select v-model="service">
					            <md-option value="1">Home Service</md-option>
					            <md-option value="2">Shop Service</md-option>
					            <md-option value="3">Home and Shop Service</md-option>
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
							<md-button 
								class="md-raised md-primary button-stable" 
								v-on:click="proceed"
								v-bind:disabled="disableProceedButton()">
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
							<md-field :class="passwordMatching">
						      <label>* Confirm Password</label>
						      <md-input v-model="confirmPassword" type="password"></md-input>
						      <span class="md-error">Password does not match</span>
	    					</md-field>
						</b-col>
					</b-row>
					<b-row>
						<b-col><b style="font-size:16px;">Step 2 of 2</b></b-col>
						<b-col>
							<md-button v-show="!submittingApplication" class="md-raised md-primary button-stable" v-on:click="previous" style="background-color: #27ae60;">
								<i class="fa fa-arrow-left" /> &nbsp; Previous 
							</md-button>

						</b-col>
						<b-col align-v="end">
							<md-progress-spinner 
							    v-show="submittingApplication"
								class="md-accent" 
								:md-diameter="30" 
								md-mode="indeterminate">
								</md-progress-spinner>
								<p v-show="submittingApplication" class="waiting"><b>Submitting Application, please wait ...</b></p>
							<md-button v-show="!submittingApplication"
								@click="applyEmployee()"
								v-bind:disabled="disableSubmitButton()"
								class="md-raised md-primary button-stable">
								Submit &nbsp; <i class="fa fa-paper-plane" />
							</md-button>
						</b-col>
					</b-row>
				</div>
			</div>
			<br /><br />
		</div>
		<br /><br /><br /><br />
		<md-dialog :md-active.sync="showDialog" style="width: 400px;">
    	  <md-dialog-title class="dialog-element"><i class="fa fa-calendar"></i> &nbsp;Set Birthdate</md-dialog-title>
    	  <md-content>
   			<div class="md-layout" style="margin-top: -20px;margin-left: 25px;">
   				<div class="md-layout-item md-size-30">
   					<md-field class="form-width-mini">
				      <label for="month" class="dialog-element">Month</label>
			          <md-select v-model="month" name="month" id="month">
			            <md-option value="1">January</md-option>
			            <md-option value="2">February</md-option>
			            <md-option value="3">March</md-option>
			            <md-option value="4">April</md-option>
			            <md-option value="5">May</md-option>
			            <md-option value="6">June</md-option>
			            <md-option value="7">July</md-option>
			            <md-option value="8">August</md-option>
			            <md-option value="9">September</md-option>
			            <md-option value="10">October</md-option>
			            <md-option value="11">November</md-option>
			            <md-option value="12">December</md-option>
			          </md-select>
			    	</md-field>
   				</div>
   				<div class="md-layout-item md-size-30">
   					<md-field class="form-width-mini">
				      <label for="day" class="dialog-element">Day</label>
			          <md-input v-model="day"></md-input>
			    	</md-field>
   				</div>
   				<div class="md-layout-item md-size-15">
   					<md-field class="form-width-mini">
				      <label for="year" class="dialog-element">Year</label>
			          <md-input v-model="year"></md-input>
			    	</md-field>
   				</div>
   			</div>
    	  </md-content>
	      <md-dialog-actions style="margin-top: 10px;">
	        <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
	        <md-button class="md-primary" @click="setBirthDate()">Set</md-button>
	      </md-dialog-actions>
    	</md-dialog>
    	<md-snackbar :md-position="left" :md-duration="4000" :md-active.sync="showSuccessSnackBar" md-persistent>
	      <span class="snack-bar-font">You have successfully signed up, you may now login and update your profile.</span>
	      <md-button class="md-primary snack-bar-font" @click="showSuccessSnackBar = false">Got it!</md-button>
    	</md-snackbar>
	</div>
</template>

<script>
	import io from 'socket.io-client'
	
	export default {
		name: 'Signup',
		created: function () {
			this.socket = io('localhost:3000')
			this.socket.emit('get-province-trigger')
			this.socket.on('get-province-response', (data) => {
				this.province = data
			})
			this.socket.on('get-cities-response', (data) => {
				this.city = data
			})
			this.socket.on('get-barangay-response', (data) => {
				if(this.citySelected !== '') {
					this.barangay = data	
				}	
			})
			this.socket.on('get-job-list-response', (data) => {
				this.jobs = data
				if(this.jobs.length == 0 ){
					this.hasMatch = false
				} else {
					this.hasMatch = true
				}
			})
			this.socket.on('apply-employee-response', (data) => {
				this.submittingApplication = false
				if(data.applicationStatus.status === 'success') {
					this.showSuccessSnackBar = true
					this.firstName =''
					this.middleName =''
					this.lastName =''
					this.email =''
					this.username =''
					this.password =''
					this.confirmPassword =''
					this.address =''
					this.provinceSelected =''
					this.province =''
					this.citySelected =''
					this.city =''
					this.barangaySelected =''
					this.barangay =''
					this.expectedSalary =''
					this.service =''
					this.dateOfBirth =''
					this.contactNo =''
					this.jobSelected =''
					this.jobs =''
					this.yearsOfExperience =''
					this.skills =''
					this.step =1
					this.isCityPopulated =true
					this.isFormCompleted =false
					this.options =[
				      'Option does not exists'
	    			]
	    			this.hasMatch =false
	    			this.showDialog =false
	    			this.month =''
	    			this.day =''
	    			this.year =''
	    			this.gender =''
				}
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
				barangaySelected: '',
				barangay: '',
				expectedSalary: '',
				service: '',
				dateOfBirth: '',
				contactNo: '',
				jobSelected: '',
				jobs: '',
				yearsOfExperience: '',
				skills: '',
				step: 1,
				isCityPopulated: true,
				isFormCompleted: false,
				options: [
			      'Option does not exists'
    			],
    			hasMatch: false,
    			showDialog: false,
    			month: '',
    			day: '',
    			year: '',
    			gender: '',
    			showSuccessSnackBar: false,
    			passwordDoesNotMatch: false,
    			submittingApplication: false
			}
		},
		methods: {
			proceed: function () {
				this.step += 1
			},
			previous: function () {
				this.step -= 1
			},
			disableProceedButton: function () {
				var flag = false
				if( this.firstName.trim() === '' || this.middleName.trim() === '' || this.lastName.trim() === ''  ||
		  		    this.citySelected === '' || this.provinceSelected === '' || this.barangaySelected === '' || 
		  		    this.expectedSalary.trim() === '' || this.service.trim() === '' || this.dateOfBirth.trim() === '' ||
		  			this.contactNo.trim() === '' || this.jobSelected.trim() === '' || this.yearsOfExperience.trim() === '' || 
		  			this.skills.trim() === '' ) {
		  			flag = true
		  		}	

				return flag 
			},
			disableSubmitButton: function () {
		  		var flag = false	

		  		if(this.firstName.trim() === '' || this.middleName.trim() === '' || this.lastName.trim() === '' || this.email.trim() === '' ||
		  			this.password.trim() === '' || this.confirmPassword.trim() === '' || this.citySelected === '' || this.provinceSelected === '' ||
		  			this.barangaySelected === '' || this.expectedSalary.trim() === '' || this.service.trim() === '' || this.dateOfBirth.trim() === '' ||
		  			this.contactNo.trim() === '' || this.jobSelected.trim() === '' || this.yearsOfExperience.trim() === '' || this.skills.trim() === '' || this.passwordDoesNotMatch ) {
		  			flag = true
		  		}		
		  		this.isFormCompleted = !flag
		
		  		return flag
		  	},
		  	emitJobListings: function () {
		  		this.socket.emit('get-job-list-trigger', { name: this.jobSelected })
		  	},
		  	setBirthDate: function () {
		  		if(this.month.trim() !== '' && this.day.trim() !== '' && this.year.trim() !== '') {
		  			this.dateOfBirth = this.year + '-' + this.month + '-' + this.day 
		  			this.showDialog = false
		  		} 
  			},
  			applyEmployee: function () {
  				this.submittingApplication = true
  				this.socket.emit('apply-employee', {
  					firstName: this.firstName,
  					middleName: this.middleName,
  					lastName: this.lastName,
  					province: this.provinceSelected,
  					city: this.citySelected,
  					barangay: this.barangaySelected,
  					dateOfBirth: this.dateOfBirth,
  					job: this.jobSelected,
  					yearsOfExperience: this.yearsOfExperience,
  					serviceType: this.service,
  					skills: this.skills,
  					email: this.email,
  					password: this.password,
  					confirmPassword: this.confirmPassword,
  					contactNo: this.contactNo,
  					gender: this.gender
  				})
  			}
		},
		watch: {
		    provinceSelected: function (event) {
		      this.citySelected = ''
		   	  this.barangaySelected = ''
		   	  this.barangay = ''
		      this.socket.emit('get-cities-trigger',{ id: this.provinceSelected })
		    },
		    citySelected: function(event) {
		      this.barangaySelected = ''
		      this.socket.emit('get-barangay-trigger', { id: this.citySelected })
		    },
		    jobSelected: function (event) {
		      if(this.jobSelected !== null && typeof this.jobSelected === 'object') {
		      	this.jobSelected = this.jobSelected.Name
		      }
		      this.emitJobListings()
		    },
		    confirmPassword: function (event) {
		    	if(this.password.trim() !== this.confirmPassword.trim()) {
		    		this.passwordDoesNotMatch = true
		    	} else {
		    		this.passwordDoesNotMatch = false
		    	}
		    }
  		},
  		computed: {
  			getSanitizedOptions () {
  				if(this.jobs.length !== 0 ) {
  					return this.jobs.map(jobs => ({
				        'Id': jobs.id,
				        'Name': jobs.name,
				        'toLowerCase': () => jobs.name.toLowerCase(),
				        'toString': () => jobs.name
	      			}))
  				} else {
  					return this.jobs
  				}
  				
  			},
  			passwordMatching () {
  				return {
  					'md-invalid': this.passwordDoesNotMatch
  				}
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

.form-width-mini {
	width: 100px !important;
}

.dialog-element {
	font-family: 'Lineto Circular Book', sans-serif !important;
}

.snack-bar-font {
	font-family: 'Lineto Circular Book', sans-serif !important;
}

.waiting {
	font-family: 'Lineto Circular Book', sans-serif !important;
	font-weight: 400;
}

</style>