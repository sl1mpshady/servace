<template>
	<div class="section-container">
		<b-container >
		<b-row v-show="(!updateContainer)">
			<b-col cols="3">
				<div class="md-elevation-3 left-wing-profile">	
					<center>
					  	<img src="./../assets/sampleProfile.jpg" class="profileImage" />
					</center>
					<div style="width: 90%; height: 0 auto; margin: 0 auto;"> <br />
						<font class="employee-name">{{ firstName + ' ' + middleName + ' ' + lastName }}</font><br />
						<font class="sub-info" style="word-break: break-all; "><i class="fa fa-envelope"/>&nbsp;{{ email.trim() }}</font> <br />
						<font class="sub-info"><i class="fa fa-phone" />&nbsp;{{ contactNumber }}</font> <br /> <br />
						<font class="sub-info">"{{ introduction }}"</font> <br /><br />
						<b-row>
							<b-col>
								<md-button v-show="!disableUpdate" 
									class="md-dense md-raised md-primary update-button" style="margin-left: 0px;" @click="updateContainer = true">
		            				<i class="fa fa-edit"></i>&nbsp;&nbsp; Update Profile
		          				</md-button>
	          				</b-col>
          				</b-row>
					</div>	
					<br />
					<b><p class="social-media-note">&nbsp;&nbsp;&nbsp;Social Media Recommendation</p></b>
					<div style="word-wrap: breakword;margin-left: 12px;">
						<div 
							data-color-scheme="light"
							class="fb-like" 
							:data-href="profileUrl" 
							data-layout="standard" 
							data-action="recommend" 
							data-size="large" 
							data-show-faces="true" 
							data-share="false"
							data-width="100"></div>
  					</div><br /> 
				</div>
			</b-col>
			<b-col>
				<div class="md-elevation-3 right-wing-profile">
					<b-container>
						<br /><b-breadcrumb :items="path"/>
						<b-row>
							<b-col>
								<p class="section-sub-titles"><i class="fa fa-user"/>&nbsp;Personal Information</p><br />
							</b-col>
						</b-row>
						
						<div style="width: 94%; margin: 0 auto;">
							<b-row>
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Birhtdate:</b>&nbsp; {{ birthdate }}</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Address:</b>&nbsp; {{ address }}</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Job:</b>&nbsp; {{ job }}</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Experience:</b>&nbsp; {{ experience }} year(s)</p>
										</b-col>
									</b-row>
								</b-col>
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Service Type:</b>&nbsp; {{ service }}</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Expected Salary:</b>&nbsp; PHP {{ expectedSalary }}</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Skills:</b>&nbsp; {{ skills }}</p>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
						</div><br />
						<p class="section-sub-titles"><i class="fa fa-graduation-cap"/>&nbsp;Educational Background</p><br />
						<div style="width: 94%; margin: 0 auto;height: 0 auto;">
							<b-row v-show="hasEducationalBackground">
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Level:</b>&nbsp; Elementary</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>School:</b>&nbsp; Butuan Central Elementary School</p>
										</b-col>
									</b-row>
								</b-col>
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Level:</b>&nbsp; Secondary</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>School:</b>&nbsp; Agusan National Highschool</p>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
							<b-row v-show="hasEducationalBackground">
								<b-col>
									<br />
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Level:</b>&nbsp; Tertiary</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>School:</b>&nbsp; Mindanao State University</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Course:</b>&nbsp; BS Information Technology (Database)</p>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
							<center>
								<div v-show="!hasEducationalBackground">
									<p class="section-empty-state-note">You haven't added an educational background yet.</p>
								</div>
							</center>
						</div><br />
						<p class="section-sub-titles"><i class="fa fa-briefcase"/>&nbsp;Work Experience</p><br />
						<div style="width: 94%; margin: 0 auto;height: 0 auto;">
							<b-row v-show="hasWorkExperience">
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Position:</b>&nbsp; Senior Software Developer</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Date:</b>&nbsp; Dec 12, 2010 - November 6, 2016</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Company:</b>&nbsp; Code Labs</p>
										</b-col>
									</b-row>
								</b-col>
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Position:</b>&nbsp; Senior Software Developer</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Date:</b>&nbsp; Dec 12, 2016 - Present</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Company:</b>&nbsp; Orange and Bronze</p>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
							<center>
								<div v-show="!hasWorkExperience">
									<p class="section-empty-state-note">You haven't added a work experience yet.</p>
								</div>
							</center>
						</div><br/>
						<p class="section-sub-titles"><i class="fa fa-users"/>&nbsp;Character Reference</p><br />
						<div style="width: 94%; margin: 0 auto;height: 0 auto;">
							<b-row v-show="hasCharacterReference">
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Name:</b>&nbsp; Mudzna J. Muin-Asakil</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Company:</b>&nbsp; Mindanao State University</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Position:</b>&nbsp; Faculty / College Secretary</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Contact Number:</b>&nbsp; 09489138920</p>
										</b-col>
									</b-row>
								</b-col>
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Name:</b>&nbsp; Janice F. Wade</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Company:</b>&nbsp; Mindanao State University</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Position:</b>&nbsp; Faculty / College Chairperson</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Contact Number:</b>&nbsp; 09489138920</p>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
							<center>
								<div v-show="!hasCharacterReference">
									<p class="section-empty-state-note">You haven't added a character reference yet.</p>
								</div>
							</center>
						</div>
						<br /><br />
					</b-container>
				</div>
			</b-col>
		</b-row>
	</b-container>
	<div v-show="(updateContainer)">
		<b-container  class="update-container">
			<div class="update-inner-container">
				<br />
				<b-row>
					<b-col>
						<h4 class="container-adjust-top update-container-title"><i class="fa fa-edit"/>&nbsp;Update Profile</h4>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="3">
						<img src="./../assets/sampleProfile.jpg" class="updateImage" />
					</b-col>
					<b-col>
						<hr />
						<b-row>
							<p class="section-sub-titles"><i class="fa fa-user"/>&nbsp;Personal Information</p>
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
							      <label>* City</label>
							      <md-input v-model="city" type="text"></md-input>
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
							      <md-input v-model="birthdate"></md-input>
		    					</md-field>
							</b-col>
					        <b-col>
					        	<md-field>
							      <label>Contact Number</label>
							      <md-input v-model="contactNumber" type="number"></md-input>
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
							      <label>Skills</label>
							      <md-input v-model="skills" type="text"></md-input>
		    					</md-field>
							</b-col>
						</b-row>
						<b-row>
							<b-col>
								<md-field>
							      <label>Introduction</label>
							      <md-input v-model="introduction" type="text" maxlength="100	"></md-input>
		    					</md-field>
							</b-col>
						</b-row>
						<br />
						<b-row>
							<p class="section-sub-titles"><i class="fa fa-graduation-cap"/>&nbsp;Educational Background</p>
						</b-row>
						<b-row>
							<b-col>
								<md-field>
							      <label>Elementary</label>
							      <md-input v-model="elementary"></md-input>
		    					</md-field>
							</b-col>
					        <b-col>
					        	<md-field>
							      <label>Highschool</label>
							      <md-input v-model="highschool"></md-input>
		    					</md-field>
					        </b-col>
						</b-row>
						<b-row>
							<b-col>
								<md-field>
							      <label>College</label>
							      <md-input v-model="college"></md-input>
		    					</md-field>
							</b-col>
					        <b-col>
					        	<md-field>
							      <label>Course</label>
							      <md-input v-model="course"></md-input>
		    					</md-field>
					        </b-col>
						</b-row>
						<br />
						<b-row>
							<p class="section-sub-titles"><i class="fa fa-briefcase"/>&nbsp;Work Experience</p>
						</b-row>
						<b-row>
							<b-col>
								<md-field>
							      <label>Position</label>
							      <md-input v-model="position[0]"></md-input>
		    					</md-field>
							</b-col>
					        <b-col>
					        	<md-field>
							      <label>Date</label>
							      <md-input v-model="fromToDate[0]"></md-input>
		    					</md-field>
					        </b-col>
					        <b-col>
					        	<md-field>
							      <label>company</label>
							      <md-input v-model="company[0]"></md-input>
		    					</md-field>
					        </b-col>
						</b-row>
						<b-row>
							<b-col>
								<md-button class="md-raised md-primary update-form-button">
								<i class="fa fa-plus"/>&nbsp; Add Another Work Experience
								</md-button>
							</b-col>
						</b-row>
						<br />
						<b-row>
							<p class="section-sub-titles"><i class="fa fa-users"/>&nbsp;Character Reference</p>
						</b-row>
						<b-row>
							<b-col>
								<md-field>
							      <label>Name</label>
							      <md-input v-model="nameRef[0]"></md-input>
		    					</md-field>
							</b-col>
					        <b-col>
					        	<md-field>
							      <label>Company</label>
							      <md-input v-model="companyRef[0]"></md-input>
		    					</md-field>
					        </b-col>
					        <b-col>
					        	<md-field>
							      <label>Position</label>
							      <md-input v-model="positionRef[0]"></md-input>
		    					</md-field>
					        </b-col>
						</b-row>
						<b-row>
							<b-col>
								<md-field>
							      <label>Contact Number</label>
							      <md-input v-model="contactNumberRef[0]"></md-input>
		    					</md-field>
							</b-col>
					        <b-col></b-col>
					        <b-col></b-col>
						</b-row>
						<b-row>
							<b-col>
								<md-button class="md-raised md-primary update-form-button">
								<i class="fa fa-plus"/>&nbsp; Add Another Character Reference
								</md-button>
							</b-col>
						</b-row>
						<hr />
						<b-row>
							<b-col>
								<md-button class="md-raised md-primary bottom-update-form-button">
									Save &nbsp; <i class="fa fa-save" />
								</md-button> &nbsp;
								<md-button class="md-raised md-primary bottom-update-form-button cancel-button" @click="updateContainer = false">
									Cancel &nbsp; <i class="fa fa-ban" />
								</md-button>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
			</div>
		</b-container>	
	</div>
	<br /><br />
	</div>
</template>

<script>
	import io from 'socket.io-client'

	export default {
		name: 'Profile',
		props: ['slugName'],
		mounted: function () {
			FB.XFBML.parse()
			FB.Event.subscribe('xfbml.render', function () {
				console.log("finish rendering")
			})
		},
		created: function () {

			if(!this.$session.exists('origin')) {
				this.$router.push('/')
			}

			this.socket = io('localhost:3000')
			// emit
			this.socket.emit('get-employee-data-trigger', { slug: this.$props.slugName })
			this.socket.emit('get-employee-work-experience-trigger', { slug: this.$props.slugName })
			this.socket.emit('get-employee-character-trigger', { slug: this.$props.slugName })
			// on
			this.socket.on('get-employee-data-response', (data) => {
				this.firstName = data[0].first_name
				this.middleName = data[0].middle_name
				this.lastName = data[0].last_name
				this.email = data[0].email
				this.contactNumber = data[0].contactNo
				if(!data[0].introduction) {
					this.introduction = `You haven't introduce yourself yet`
					this.emptyIntro = true
				} else {
					this.introduction = data[0].introduction
				}
				var splitBirthday = data[0].dateOfBirth.split('-')
				var splitDay = splitBirthday[2].split('T')
				this.birthdate = this.months[(splitBirthday[1]-1)] + ' ' + splitDay[0] + ', ' + splitBirthday[0]
				this.address = data[0].barangay + ', ' + data[0].city + ', ' + data[0].province
				this.job =data[0].job
				this.experience = data[0].yearsOfExperience
				this.service = data[0].service_type
				this.expectedSalary = data[0].expected_salary + '.00'
				this.skills = data[0].skills
				var requestOrigin = this.$session.get('origin')
				if(requestOrigin !== 'signin') {
					if(!this.$session.get('authenticatedLoggedIn') || this.$session.get('authenticatedSlug') != this.$props.slugName) {
						this.disableUpdate = true
						if(this.emptyIntro) {
							this.introduction = `This employee haven't made an introduction yet`
						}
					} else {
						this.disableUpdate = false
					}
				} else {
					this.disableUpdate = false
				}
			})
			this.socket.on('get-employee-work-experience-response', (data) => {
				if(data.length != 0) {
					this.hasWorkExperience = true
				}
			})
			this.socket.on('get-employee-character-reference-response', (data) => {
				if(data.length != 0) {
					this.hasCharacterReference = true
				}
			})
			
			// misc
			this.profileUrl = 'http://servace.ml/#/profile/' + this.$props.slugName
		},
		data () {
			return {
				path: [{
			        text: 'Home',
			        to: { name: 'FrontPage'}
			      }, {
			        text: 'Search',
			        to: { name: 'Search'},
		          }, {
		          	text: 'Profile',
		          	to: { name: 'Profile' },
		          }
		        ],
		       	socket: '',
		        profileUrl: '',
		        updateContainer: false,
		        firstName: '',
		        middleName: '',
		        lastName: '',
		        email: '',
		        contactNumber: '',
		        introduction: "",
		        birthdate: '',
		        provinceSelected: '',
		        province: '',
		        barangaySelected: '',
		        barangay: '',
		        citySelected: '',
		        city: '',
		        job: '',
		        expectedSalary: '',
		        yearsOfExperience: '',
		        elementary: '',
		        highschool: '',
		        college: '',
		        course: '',
		        position: [],
		        fromToDate: [],
		        company: [],
		        nameRef: [],
		        companyRef: [],
		        positionRef: [],
		        contactNumberRef: [],
		        isProfileUser: false,
		        introduction: '',
		        months: [
		        	'January',
		        	'February',
		        	'March',
		        	'April',
		        	'May',
		        	'June',
		        	'July',
		        	'August',
		        	'September',
		        	'October',
		        	'November',
		        	'December'
		        ],
		        address: '',
		        job: '',
		        service: '',
		        skills: '',
		        hasEducationalBackground: false,
		        hasWorkExperience: false,
		        hasCharacterReference: false,
		        disableUpdate: false,
		     	emptyIntro: false
			}
		}
	}
</script>

<style scoped>

.social-media-note {
	font-family: 'Lineto Circular Book' !important;
}

.section-container {
	padding-top: 110px;
	overflow-x: hidden; 
	margin: 0 auto; 
	width: 95%;
}

.profileImage {
	width: 90%;
	margin-top: 10px;
}

.left-wing-profile {
	min-height: 600px;
	max-height: 2500px; 
	width: 100%; 
	background-color: white;
}
.right-wing-profile {
	min-height: 700px !important; 
	max-height: 2000px !important; 
	width: 100%; 
	background-color: white;
}

.employee-name {
	font-family: 'Product Sans Bold' !important;
	margin-top: 20px !important;
    font-size: 25px !important;
    line-height: 1;
}

.sub-info {
	font-family: 'Lineto Circular Book' !important;
	font-size: 16px;
}

.section-info {
	font-family: 'Lineto Circular Book' !important;
	font-size: 15px;
}

.section-sub-titles {
	font-family: 'Lineto Circular Book' !important;
	font-size: 18px;
	margin-left: 5px;
	font-weight: bold;
}

.certificate-width {
	width: 90% !important;
	height: 300px !important;
}

.side-nav {
	width: 20%;
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    top: 110px; /* Stay at the top */
    left: 120px;
    overflow-x: hidden; /* Disable horizontal scroll */
    overflow-y: hidden;
}

.main {
	padding: 0px 10px;
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
}

.report-button {
	background-color: #e74c3c !important;
}

.update-button {
	font-size: 14px !important;
	height: 30px !important;
	background-color: #27ae60 !important;
}

.update-form-dialog {
	top: 300px !important;
	width: 95% !important;
	height: 900px !important;
}

.dialog-update-title {
	font-weight: bold !important;
	font-family: 'Product Sans Bold', sans-serif !important;
}

.dialog-form-center {
	background-color: whitesmoke !important;
	height: 0 auto !important;
	margin: 0 auto !important; 
	border-radius: 10px 10px !important;
}

.update-dialog-form-profile-image {
	height: 250px !important;
	width: 250px !important;
}

.update-container {
	background-color: white;
	height: 1500px !important;
	width: 1300px !important; 
	margin: 0 auto !important;
	margin-top: 15px;
}

.container-adjust-top {
	margin-top: 20px !important;
}

.update-inner-container {
	width: 95%;
	margin: 0 auto;
}

.image-profile-update-container {
	height: 300px !important;
	width: 99% !important;
	border-radius: 10px 10px; 
}

.updateImage {
	height: 250px;
	width: 250px;
	margin-top: 20px;
}

.update-container-title {
	font-family: 'Product Sans Bold', sans-serif !important;
}

.update-form-button {
	background-color: #27ae60 !important;
	margin-left: 0px;
}

.bottom-update-form-button {
	margin-left: 0px ;
}

.cancel-button {
	background-color: #c0392b !important;
}

.section-empty-state-note {
	font-family: 'Lineto Circular Book', sans-serif !important;
	font-size: 16px !important;
	font-weight: 400;
}
</style>