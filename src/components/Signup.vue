<template>
	<div style="overflow: auto" class="background-cover">
		<br />
		<div class="inner-div md-elevation-1">
			<div style="width: 90%; margin: 0 auto;">
				<br /><br />
					<h4 class="form-title">Employee Registration Form</h4>
					<p>Fill up information needed in the form below to sign up as an employee.</p>
					<br />
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
					      <md-input v-model="middleName"></md-input>
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
					      <label>* City</label>
					      <md-input v-model="city"></md-input>
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
					      <md-input v-model="expectedSalary"></md-input>
	    				</md-field>
    				</b-col>	
				</b-row>
				<b-row>
					<b-col>
						<md-field>
					      <label>* Years of Experience</label>
					      <md-input v-model="job"></md-input>
	    				</md-field>
    				</b-col>	
    				<b-col>
						<md-field>
					      <label>* Service Type</label>
					      <md-input v-model="serviceType"></md-input>
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
					<b-col></b-col>
					<b-col></b-col>
					<b-col align-v="end">
						<md-button class="md-raised md-primary button-stable" >
							Proceed &nbsp; <i class="fa fa-arrow-right" />
						</md-button>
					</b-col>
				</b-row>
			</div>
			<br /><br />
		</div>
		<br /><br /><br /><br />
	</div>
</template>

<script>
	export default {
		name: 'Signup',
		data () {
			return {
				firstName: '',
				middleName: '',
				lastName: '',
				email: '',
				password: '',
				address: '',
				city: '',
				barangay: '',
				dateOfBirth: '',
				contactNo: '',
				job: '',
				skills: '',
				step: 1
			}
		},
		methods: {
				
		}
	}
</script>

<style scoped>
.inner-div {
	min-height: 500px;
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

</style>