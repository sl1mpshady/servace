<template>
  <div class="background-cover full-container">
    <b-container>
        <b-row>
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
          <b-col align-self="end">
            <md-button class="md-primary" style="display: inline-left; color: white; font-weight: bold; margin-right: 27px;"
             v-on:click="login">
              <i class="fa fa-lock"/>&nbsp; Already have an account?
            </md-button>   
          </b-col>
        </b-row>
    </b-container>
    <br /><br /><br /><br /><br />
      <div>
        <center>
        <p class="front-font-main spread-appart center-piece adjust-top">ServAce</p>
        <p class="tagline"><i>"You've got a job ? We've got people for you"</i></p>
        <div style="margin-top: 30px;">
          <b-container style="width: 1000px; margin: 0 auto;">
            <b-row>
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
                    placeholder="City"></b-form-input>
                </b-col>
                <b-col cols="2">
                  <p class="sub-headers"><b>Search</b></p>
                  <md-button class="md-dense md-raised md-primary search-button-front" v-on:click="searchEmployee">
                    <i class="fa fa-search"></i>&nbsp;Find Professionals
                  </md-button>
                </b-col>
            </b-row>
          </b-container>
        </div>
      </center>
      </div>
      <div>
        <center>
          <p class="sub-note">Are you looking for a job ?</p>
          <md-button class="md-raised md-primary note-signup-button" v-on:click="signup">
              <i class="fa fa-pencil-alt"/>&nbsp; Yes, Sign me up
          </md-button>
        </center>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  methods: {
    searchEmployee: function () {
      this.$router.push('/search')
    },
    signup: function () {
      this.$router.push('/signup')
    },
    login: function () {
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.front-font-main {
  font-family: 'Samsung Sharp Sans Bold', sans-serif !important;
  font-size: 85px !important;
  color: white;
}

.spread-appart {
  letter-spacing: 2px;
}

.center-piece {
  margin: 0 auto;
}

.sub-headers {
  font-size: 18px;
  color: white;
}

.sub-headers-variant {
  font-size: 18px;
}

.tagline {
  color: white;
  font-size: 18px;
  margin-top: 40px;
  font-family:'Lineto Circular Book', sans-serif !important;
}

.form-input-border {
  border-color: #10ac84 !important;
}

.sub-note {
  font-size: 20px;
  color: white;
  margin-top: 60px;
  font-family:'Lineto Circular Book', sans-serif !important;
}

.search-button-front {
  height: 36px !important; 
  margin-top: 1px !important; 
  width: 130% !important; 
  margin-left: -2px !important; 
  background-color: #27ae60 !important;
}

.note-signup-button {
  height: 36px !important; 
  margin-top: 1px !important; 
  margin-left: -2px !important; 
  background-color: #27ae60 !important;
  width: 170px;
}

.blue-button {
  background-color: #27ae60 !important;
}


</style>
