<template>
	<div class="section-container">
		<b-row>
			<b-col cols="3">
				<div class="md-elevation-3 left-wing-profile">
					<center>
					  	<img src="./../assets/sampleProfile.jpg" class="profileImage" />
					</center>
					<div style="width: 90%; height: 0 auto; margin: 0 auto;"> <br />
						<font class="employee-name">Nelmin Jay M. Anoc</font><br />
						<font class="sub-info"><i class="fa fa-envelope"/>&nbsp;hitman@gmail.com</font> <br />
						<font class="sub-info"><i class="fa fa-phone" />&nbsp;09489138920</font> <br /> <br />
						<font class="sub-info">"I do the nasty job so clean that I'll come knocking on your door to clean you myself"</font>
					</div>			
				</div>
			</b-col>
			<b-col>
				<div class="md-elevation-3 right-wing-profile">
					<b-container>
						<br /><b-breadcrumb :items="path"/><br />
						<p class="section-sub-titles"><i class="fa fa-user"/>&nbsp;Personal Information</p><br />
						<div style="width: 94%; margin: 0 auto;">
							<b-row>
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Birhtdate:</b>&nbsp; December 12, 1994</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Address:</b>&nbsp; Marawi City, Brgy. Dimalna</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Job:</b>&nbsp; Hitman / Assasin</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Experience:</b>&nbsp; 5 years</p>
										</b-col>
									</b-row>
								</b-col>
								<b-col>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Service Type:</b>&nbsp; Home and Shop Service</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Expected Salary:</b>&nbsp; PHP 1,000,000.00</p>
										</b-col>
									</b-row>
									<b-row>
										<b-col>
											<p class="section-info">
											<b>Skills:</b>&nbsp; Painting, Welding, Carpentry, Cooking and Cleaning</p>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
						</div><br />
						<p class="section-sub-titles"><i class="fa fa-certificate"/>&nbsp;Certifications</p><br />
						<div style="width: 94%; margin: 0 auto;height: 0 auto;">
							<b-row>
								<b-col>
									<img src="./../assets/certificate1.jpg" class="certificate-width" />
								</b-col>
								<b-col>
									<img src="./../assets/certificate2.jpg" class="certificate-width" />
								</b-col>
							</b-row>
							
							<br />
							<br />
						</div>
					</b-container>
				</div>
			</b-col>
		</b-row>
		<br /><br />
	</div>
</template>

<script>
	export default {
		name: 'Profile',
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
		        ]
			}
		}
	}
</script>

<style scoped>

.section-container {
	overflow-x: hidden; 
	padding-top: 130px; 
	margin: 0 auto; 
	width: 95%;
}

.profileImage {
	width: 90%;
	margin-top: 10px;
}

.left-wing-profile {
	height: 500px; 
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
	font-size: 23px;
	margin-left: 5px;
}

.certificate-width {
	width: 90% !important;
	height: 300px !important;
}

</style>