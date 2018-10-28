<template>
	<div>
	<br /><br /><br /><br />
	<div class="md-elevation-5 search-container">
		<div>
		  <br />
		  <br />
          <b-container>
          	<b-breadcrumb :items="path"/>
            <b-row style="width: 100%;">
                <b-col>
                  <p class="sub-headers "><b>What</b></p>
                  <b-form-input 
                    class="form-input-border"
                    type="text"
                    placeholder="Job Description"
                    v-model="job"></b-form-input>
                </b-col>
                <b-col>
                  <p class="sub-headers "><b>Where</b></p>
                  <b-form-input
                    class="form-input-border"
                    type="text"
                    placeholder="City"
                    v-model="city"></b-form-input>
                </b-col>
                <b-col cols="2">
                  <p class="sub-headers"><b>Search</b></p>
                  <md-button class="md-dense md-raised md-primary search-button-front">
                    <i class="fa fa-search"></i>&nbsp;&nbsp;Find Professionals
                  </md-button>
                </b-col>
            </b-row>
          </b-container>
          <b-container style="margin-top: 30px;">
          	<b-row style="margin-top: -20px;">
          		<p style="margin-left: 15px;" class="search-results-description">Below are the results of your query</p>
          	</b-row>
          	<b-row style="margin-top: -15px;">
          		<p style="margin-left: 15px;" class="search-results-description">
          			Displaying results for <b>"Carpenters on Brgy. Dimalna, Marawi City"</b></p>
          	</b-row>
          	<b-row style="margin-top: -15px;">
          		<p style="margin-left: 15px;" class="search-results-description">
          			Found <b> 8 employees</b> matching your preference</p>
          	</b-row>
          	<md-table>	
	      		<md-table-row>
		        <md-table-head class="head-font" style="width: 20%">Name</md-table-head>
		        <md-table-head class="head-font" style="width: 20%;">Skills</md-table-head>
		        <md-table-head class="head-font" style="text-align: center; width: 5%;">Experience</md-table-head>
		        <md-table-head class="head-font">Service Type</md-table-head>
		        <md-table-head class="head-font" style="width: 25%;">Action</md-table-head>
		      </md-table-row>

		      <md-table-row v-for="(item, index) in searchResults" key="index">
		        <md-table-cell md-numeric class="cell-font" style="text-align: left;">{{ item.name }}</md-table-cell>
		        <md-table-cell class="cell-font">Carpentry, Air conditioning, Plumbing</md-table-cell>
		        <md-table-cell class="cell-font" style="text-align: center;">5 years</md-table-cell>
		        <md-table-cell class="cell-font">Home Service / Shop Service</md-table-cell>
		        <md-table-cell>
		        	<md-button class="md-primary md-raised profile-button" style="display: inline-block; font-size: 12px;" @click="pushProfile">
		        		<i class="fa fa-user"></i>&nbsp; View
		        	</md-button>
		        	&nbsp;
		        	<md-button class="md-primary md-raised call-button" style="display: inline-block; font-size: 12px;" 
		        	@click="showCallMeDialog = true">
		        		<i class="fa fa-phone"></i>&nbsp; Contact
		        	</md-button></md-table-cell>
		      </md-table-row>
			</md-table>
          	<br />
          </b-container>
          <b-container>
          	<b-container class="bottom-filter">
          		<b-row>
	          		<div class="bottom-filter-inner">
	          			<p class="narrow-hints"><b>Would you like to narrow the list with ?</b></p>
	          		</div>
          		</b-row>
          		<b-row>
          		<b-col>
                   <b-form-group>
                   	<div>
	                   	 <b-form-select v-model="selectedBarangay" :options="barangay" class="mb-3" />
	                   	 <p style="margin-top: -5px;" class="narrow-hints">
	                   	 	<i>Show only results from a choosen barangay</i></p>
                   	</div>
                   	<div v-show="(criticCounter ===2)">
				  		<b-form-input 
		                    class="form-input-border"
		                    type="number"
		                    placeholder="Expected Salary" ></b-form-input>
		                    <p style="margin-top: 5px;" class="narrow-hints">
		                    	<i>Show only results less than or equal expected salary</i></p>
				  	</div>
    				</b-form-group>
                </b-col>
                <b-col>
                  	<b-form-group>
              		<div>
					      <b-form-select v-model="selectedTypeOfService" :options="typeOfService" class="mb-3" />
					      <p style="margin-top: -5px;" class="narrow-hints">
					      	<i>Show only results with a type of service</i></p>
				  	</div>
				  	<div v-show="(criticCounter ===2)">
				  		<b-form-input 
		                    class="form-input-border"
		                    type="number"
		                    placeholder="Age"></b-form-input>
		                    <p style="margin-top: 5px;" class="narrow-hints">
		                    	<i>Show only results less than or equal age set</i></p>
				  	</div>
    				</b-form-group>
                </b-col>
                <b-col>
                   <b-form-group style="width: 180px;">
				      <md-button class="md-dense md-raised md-primary search-button-front" @click="narrowSearch">
                   		<i class="fa fa-search"></i>&nbsp;&nbsp;Narrow Search
                  	  </md-button>
    				</b-form-group>
                </b-col>
          		</b-row>
          	</b-container>
          	<br /><br /><br />
          </b-container>
        </div>
	</div>
	<br /><br /><br /><br />
	<md-dialog  :md-active.sync="showCallMeDialog">
      <md-dialog-title><i class="fa fa-address-book"></i>&nbsp;Contact Information</md-dialog-title>
      <br />
      <md-dialog-content>
      	<i class="fa fa-mobile-alt"></i>&nbsp;&nbsp;&nbsp;<b>09489138920</b><br /> <br />
      	<i class="fa fa-phone"></i>&nbsp;&nbsp;<b>(632) 834-4000</b><br /> <br />
      	<i class="fa fa-envelope-square"></i>&nbsp;&nbsp;&nbsp;<b>monkeydev.team@gmail.com</b>
      </md-dialog-content>
      <br />
      <md-dialog-actions style="margin-top: -10px;">
          <md-button class="md-primary" @click="showCallMeDialog = false">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>
	</div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
	name: 'Search',
	components: {
		Navigation
	},
	data () {
		return {
			searchResults: [
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		    ],
		    path: [{
		        text: 'Home',
		        to: { name: 'FrontPage'}
		      }, {
		        text: 'Search',
		        to: { name: 'Search'}
	        }],
    		showCallMeDialog: false,
    		barangay: [
    		    { value: null, text: '-- Select a barangay --' },
		        { value: 0, text: 'Brgy. Dimalna' },
		        { value: 1, text: 'Baryo Salam' },
		        { value: 2, text: 'Baryo Sikap' },
		        { value: 3, text: 'Baryo Kalilintad' }
      		],
      		selectedBarangay: null,
      		typeOfService: [
      			{ value: null, text: '-- Select a type of service --' },
      			{ value: 0, text: 'Home Service' },
      			{ value: 1, text: 'Shop Service' },
      			{ value: 2, text: 'Home and Shop Service'}
      		],
      		selectedTypeOfService: null,
      		job: 'Carpenter',
      		city: 'Marawi',
      		criticCounter: 1,
      		expected_salary: '',
      		age: ''
		}
	},
	methods: {
		narrowSearch: function () {
			this.criticCounter += 1
			if(this.criticCounter > 2) {
				this.criticCounter = 2
			}
		},
		pushProfile: function () {
			this.$router.push('/profile/nelmin-stink')
		}
	}
}
</script>

<style scoped>
.search-container {
	width: 95%; 
	margin: 0 auto;
	min-height: 300px !important;
	height: 100%;
	background: white; 
	margin-top: 20px;
}

.bottom-filter {
	min-height: 150px;
	max-height: 220px; 
	width: 100px; 
	background-color: #e9ecef;
	width: 100%;
	margin: 0 auto; 
	border-radius: 10px 10px;
}

.bottom-filter-inner {
	width: 98%;
	margin: 0 auto;
	height: 95%;
	margin-top: 20px;
}

.head-font {
	font-size: 17px;
	font-weight: bold;
}

.profile-button {
	height: 30px;
	margin-left: -2px;
}

.call-button {
	height: 30px;
	background-color: #27ae60 !important;
}

.search-button-front {
  height: 36px !important; 
  margin-top: 1px !important; 
  width: 119% !important; 
  margin-left: -2px !important; 
  background-color: #27ae60 !important;
}

.search-results-description {
	font-family: 'Lineto Circular Book', sans-serif;
}

.narrow-hints {
	font-family: 'Lineto Circular Book', sans-serif;	
}

input, select, button, tr, a {
  font-family: 'Lineto Circular Book', sans-serif !important;
}
</style>