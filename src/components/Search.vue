<template>
	<div>
	<br /><br /><br /><br />
	<div class="md-elevation-2 search-container">
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
                    placeholder="Job Description"></b-form-input>
                </b-col>
                <b-col>
                  <p class="sub-headers "><b>Where</b></p>
                  <b-form-input
                    class="form-input-border"
                    type="text"
                    placeholder="Barangay, City"></b-form-input>
                </b-col>
                <b-col cols="2">
                  <p class="sub-headers"><b>Search</b></p>
                  <b-button variant="success" v-on:click="searchEmployee">Find Employee</b-button>
                </b-col>
            </b-row>
          </b-container>
          <b-container style="margin-top: 30px;">
          	<b-row style="margin-top: -20px;">
          		<p style="margin-left: 15px;">Below are the results of your query</p>
          	</b-row>
          	<b-row style="margin-top: -15px;">
          		<p style="margin-left: 15px;">Displaying results for <b>"Carpenters on Brgy. Dimalna, Marawi City"</b></p>
          	</b-row>
          	<b-row style="margin-top: -15px;">
          		<p style="margin-left: 15px;">Found <b> 8 employees</b> matching your preference</p>
          	</b-row>
          	<b-table striped hover :items="items" :fields="fields" style="text-align: center;"></b-table>
          	<br />
          </b-container>
          <b-container>
          	<b-container class="bottom-filter">
          		<b-row>
	          		<div class="bottom-filter-inner">
	          			<p><b>Would you like to compare your result with ?</b></p>
	          		</div>
          		</b-row>
          		<b-row>
          		<b-col>
                   <b-form-group>
				      <b-form-checkbox-group id="checkboxes2" name="flavour2" v-model="selected">
				        <b-form-checkbox value="orange">Lesser expected salary</b-form-checkbox>
				        <b-form-checkbox value="apple">Higher expected salary</b-form-checkbox>
				        <b-form-checkbox value="pineapple">Lesser years of experience</b-form-checkbox>
				        <b-form-checkbox value="pineapple">Higher years of experience</b-form-checkbox>
				      </b-form-checkbox-group>
    				</b-form-group>
                </b-col>
                <b-col>
                  	<b-form-group style="width: 200px;">
				      <b-form-checkbox-group id="checkboxes2" name="flavour2" v-model="selected">
				        <b-form-checkbox value="orange">Youngest Employees</b-form-checkbox>
				        <b-form-checkbox value="apple">Oldest Employees</b-form-checkbox>
				        <b-form-checkbox value="pineapple">Middle Aged Employees</b-form-checkbox>
				      </b-form-checkbox-group>
    				</b-form-group>
                </b-col>
                <b-col>
                   <b-form-group style="width: 180px;">
				      <b-form-checkbox-group id="checkboxes2" name="flavour2" v-model="selected">
				        <b-form-checkbox value="orange">Home Service</b-form-checkbox>
				        <b-form-checkbox value="apple">Shop Service</b-form-checkbox>
				        <b-form-checkbox value="pineapple">With Certifications</b-form-checkbox>
				      </b-form-checkbox-group>
    				</b-form-group>
                </b-col>
          		</b-row>
          	</b-container>
          	<br />
          	<br />
          </b-container>
        </div>
	</div>
	<br /><br />
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
			items: [
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		        { Name: 'Nelmin Jay M. Anoc', contact_number: '09489138920', expected_salary: '300/day'},
		    ],
		    path: [{
		        text: 'Home',
		        href: '/'
		      }, {
		        text: 'Search',
		        href: '#'
		      }]
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
	height: 190px; 
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
</style>