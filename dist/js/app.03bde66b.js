(function(t){function e(e){for(var i,n,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)n=r[d],s[n]&&p.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);b&&b(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var b=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("c21b"),s=a.n(i);s.a},"0b52":function(t,e,a){},2519:function(t,e,a){},3406:function(t,e,a){"use strict";var i=a("b28e"),s=a.n(i);s.a},3979:function(t,e,a){"use strict";var i=a("bc5c"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation",{directives:[{name:"show",rawName:"v-show",value:"FrontPage"!==t.$route.name,expression:"($route.name !== 'FrontPage')"}]}),a("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{staticClass:"nav-height md-elevation-2",attrs:{toggleable:"md",fixed:"top",type:"light",variant:"light"}},[i("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),i("b-navbar-brand",{staticClass:"nav-title spread-appart"},[i("a",{staticClass:"disable-default",on:{click:t.pushHome}},[i("img",{staticStyle:{height:"30px",width:"170px"},attrs:{src:a("7115")}})])]),i("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[i("b-navbar-nav",{staticClass:"ml-auto",staticStyle:{"margin-right":"13px"}},[i("b-nav-item",{staticClass:"nav-links"},[i("router-link",{attrs:{to:{name:"FrontPage"}}},[i("i",{staticClass:"fa fa-home"}),t._v("  Home")])],1),i("b-nav-item",{staticClass:"nav-links",class:{"nav-links-active":"/search"===t.$route.path}},[i("router-link",{attrs:{to:{name:"Search"}}},[i("i",{staticClass:"fa fa-search"}),t._v("  Search")])],1),i("b-nav-item",{staticClass:"nav-links",attrs:{href:"/user"}},[i("i",{staticClass:"fa fa-user"}),t._v("  User\n\t      ")])],1)],1)],1)],1)},r=[],l={name:"Navigation",methods:{pushHome:function(){this.$router.push("/")}}},c=l,b=(a("96b9"),a("2877")),d=Object(b["a"])(c,n,r,!1,null,"150e2bfa",null);d.options.__file="Navigation.vue";var p=d.exports,u={name:"app",components:{Navigation:p}},m=u,f=(a("034f"),Object(b["a"])(m,s,o,!1,null,null,null));f.options.__file="App.vue";var v=f.exports,h=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-cover full-container"},[a("b-container",[a("b-row",[a("b-col"),a("b-col"),a("b-col"),a("b-col"),a("b-col",{attrs:{"align-self":"end"}},[a("md-button",{staticClass:"md-primary",staticStyle:{display:"inline-left",color:"white","font-weight":"bold","margin-right":"27px"},on:{click:t.login}},[a("i",{staticClass:"fa fa-lock"}),t._v("  Already have an account?\n          ")])],1)],1)],1),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",[a("center",[a("p",{staticClass:"front-font-main spread-appart center-piece adjust-top"},[t._v("ServAce")]),a("p",{staticClass:"tagline"},[a("i",[t._v("\"You've got a job ? We've got people for you\"")])]),a("div",{staticStyle:{"margin-top":"30px"}},[a("b-container",{staticStyle:{width:"1000px",margin:"0 auto"}},[a("b-row",[a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("What")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"Job Description"}})],1),a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("Where")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"City"}})],1),a("b-col",{attrs:{cols:"2"}},[a("p",{staticClass:"sub-headers"},[a("b",[t._v("Search")])]),a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front",on:{click:t.searchEmployee}},[a("i",{staticClass:"fa fa-search"}),t._v(" Find Professionals\n                ")])],1)],1)],1)],1)])],1),a("div",[a("center",[a("p",{staticClass:"sub-note"},[t._v("Are you looking for a job ?")]),a("md-button",{staticClass:"md-raised md-primary note-signup-button",on:{click:t.signup}},[a("i",{staticClass:"fa fa-pencil-alt"}),t._v("  Yes, Sign me up\n        ")])],1)],1)],1)},_=[],g={name:"FrontPage",methods:{searchEmployee:function(){this.$router.push("/search")},signup:function(){this.$router.push("/signup")},login:function(){this.$router.push("/signin")}}},C=g,w=(a("86d3"),Object(b["a"])(C,y,_,!1,null,"828a8b48",null));w.options.__file="FrontPage.vue";var S=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"md-elevation-5 search-container"},[a("div",[a("br"),a("br"),a("b-container",[a("b-breadcrumb",{attrs:{items:t.path}}),a("b-row",{staticStyle:{width:"100%"}},[a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("What")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"Job Description"},model:{value:t.job,callback:function(e){t.job=e},expression:"job"}})],1),a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("Where")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"City"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),a("b-col",{attrs:{cols:"2"}},[a("p",{staticClass:"sub-headers"},[a("b",[t._v("Search")])]),a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front"},[a("i",{staticClass:"fa fa-search"}),t._v("  Find Professionals\n                  ")])],1)],1)],1),a("b-container",{staticStyle:{"margin-top":"30px"}},[a("b-row",{staticStyle:{"margin-top":"-20px"}},[a("p",{staticClass:"search-results-description",staticStyle:{"margin-left":"15px"}},[t._v("Below are the results of your query")])]),a("b-row",{staticStyle:{"margin-top":"-15px"}},[a("p",{staticClass:"search-results-description",staticStyle:{"margin-left":"15px"}},[t._v("\n          \t\t\tDisplaying results for "),a("b",[t._v('"Carpenters on Brgy. Dimalna, Marawi City"')])])]),a("b-row",{staticStyle:{"margin-top":"-15px"}},[a("p",{staticClass:"search-results-description",staticStyle:{"margin-left":"15px"}},[t._v("\n          \t\t\tFound "),a("b",[t._v(" 8 employees")]),t._v(" matching your preference")])]),a("md-table",[a("md-table-row",[a("md-table-head",{staticClass:"head-font",staticStyle:{width:"20%"}},[t._v("Name")]),a("md-table-head",{staticClass:"head-font",staticStyle:{width:"20%"}},[t._v("Skills")]),a("md-table-head",{staticClass:"head-font",staticStyle:{"text-align":"center",width:"5%"}},[t._v("Experience")]),a("md-table-head",{staticClass:"head-font"},[t._v("Service Type")]),a("md-table-head",{staticClass:"head-font",staticStyle:{width:"25%"}},[t._v("Action")])],1),t._l(t.searchResults,function(e,i){return a("md-table-row",{key:"index"},[a("md-table-cell",{staticClass:"cell-font",staticStyle:{"text-align":"left"},attrs:{"md-numeric":""}},[t._v(t._s(e.name))]),a("md-table-cell",{staticClass:"cell-font"},[t._v("Carpentry, Air conditioning, Plumbing")]),a("md-table-cell",{staticClass:"cell-font",staticStyle:{"text-align":"center"}},[t._v("5 years")]),a("md-table-cell",{staticClass:"cell-font"},[t._v("Home Service / Shop Service")]),a("md-table-cell",[a("md-button",{staticClass:"md-primary md-raised profile-button",staticStyle:{display:"inline-block","font-size":"12px"},on:{click:t.pushProfile}},[a("i",{staticClass:"fa fa-user"}),t._v("  View\n\t\t        \t")]),t._v("\n\t\t        \t \n\t\t        \t"),a("md-button",{staticClass:"md-primary md-raised call-button",staticStyle:{display:"inline-block","font-size":"12px"},on:{click:function(e){t.showCallMeDialog=!0}}},[a("i",{staticClass:"fa fa-phone"}),t._v("  Contact\n\t\t        \t")])],1)],1)})],2),a("br")],1),a("b-container",[a("b-container",{staticClass:"bottom-filter"},[a("b-row",[a("div",{staticClass:"bottom-filter-inner"},[a("p",{staticClass:"narrow-hints"},[a("b",[t._v("Would you like to narrow the list with ?")])])])]),a("b-row",[a("b-col",[a("b-form-group",[a("div",[a("b-form-select",{staticClass:"mb-3",attrs:{options:t.barangay},model:{value:t.selectedBarangay,callback:function(e){t.selectedBarangay=e},expression:"selectedBarangay"}}),a("p",{staticClass:"narrow-hints",staticStyle:{"margin-top":"-5px"}},[a("i",[t._v("Show only results from a choosen barangay")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.criticCounter,expression:"(criticCounter ===2)"}]},[a("b-form-input",{staticClass:"form-input-border",attrs:{type:"number",placeholder:"Expected Salary"}}),a("p",{staticClass:"narrow-hints",staticStyle:{"margin-top":"5px"}},[a("i",[t._v("Show only results less than or equal expected salary")])])],1)])],1),a("b-col",[a("b-form-group",[a("div",[a("b-form-select",{staticClass:"mb-3",attrs:{options:t.typeOfService},model:{value:t.selectedTypeOfService,callback:function(e){t.selectedTypeOfService=e},expression:"selectedTypeOfService"}}),a("p",{staticClass:"narrow-hints",staticStyle:{"margin-top":"-5px"}},[a("i",[t._v("Show only results with a type of service")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.criticCounter,expression:"(criticCounter ===2)"}]},[a("b-form-input",{staticClass:"form-input-border",attrs:{type:"number",placeholder:"Age"}}),a("p",{staticClass:"narrow-hints",staticStyle:{"margin-top":"5px"}},[a("i",[t._v("Show only results less than or equal age set")])])],1)])],1),a("b-col",[a("b-form-group",{staticStyle:{width:"180px"}},[a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front",on:{click:t.narrowSearch}},[a("i",{staticClass:"fa fa-search"}),t._v("  Narrow Search\n                  \t  ")])],1)],1)],1)],1),a("br"),a("br"),a("br")],1)],1)]),a("br"),a("br"),a("br"),a("br"),a("md-dialog",{attrs:{"md-active":t.showCallMeDialog},on:{"update:mdActive":function(e){t.showCallMeDialog=e}}},[a("md-dialog-title",[a("i",{staticClass:"fa fa-address-book"}),t._v(" Contact Information")]),a("br"),a("md-dialog-content",[a("i",{staticClass:"fa fa-mobile-alt"}),t._v("   "),a("b",[t._v("09489138920")]),a("br"),a("br"),a("i",{staticClass:"fa fa-phone"}),t._v("  "),a("b",[t._v("(632) 834-4000")]),a("br"),a("br"),a("i",{staticClass:"fa fa-envelope-square"}),t._v("   "),a("b",[t._v("monkeydev.team@gmail.com")])]),a("br"),a("md-dialog-actions",{staticStyle:{"margin-top":"-10px"}},[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showCallMeDialog=!1}}},[t._v("Ok")])],1)],1)],1)},k=[],N={name:"Search",components:{Navigation:p},data:function(){return{searchResults:[{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"}],path:[{text:"Home",to:{name:"FrontPage"}},{text:"Search",to:{name:"Search"}}],showCallMeDialog:!1,barangay:[{value:null,text:"-- Select a barangay --"},{value:0,text:"Brgy. Dimalna"},{value:1,text:"Baryo Salam"},{value:2,text:"Baryo Sikap"},{value:3,text:"Baryo Kalilintad"}],selectedBarangay:null,typeOfService:[{value:null,text:"-- Select a type of service --"},{value:0,text:"Home Service"},{value:1,text:"Shop Service"},{value:2,text:"Home and Shop Service"}],selectedTypeOfService:null,job:"Carpenter",city:"Marawi",criticCounter:1,expected_salary:"",age:""}},methods:{narrowSearch:function(){this.criticCounter+=1,this.criticCounter>2&&(this.criticCounter=2)},pushProfile:function(){this.$router.push("/profile/nelmin-stink")}}},P=N,O=(a("3979"),Object(b["a"])(P,x,k,!1,null,"02423f7a",null));O.options.__file="Search.vue";var M=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-cover",staticStyle:{overflow:"auto"}},[a("br"),a("br"),a("div",{staticClass:"inner-div md-elevation-1"},[a("div",{staticStyle:{width:"85%",margin:"0 auto"}},[a("br"),a("center",[a("h4",{staticClass:"form-title"},[t._v("Sign in")])]),a("md-field",[a("label",[t._v("Email")]),a("md-input",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("md-field",[a("label",[t._v("Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("md-button",{staticClass:"md-dense md-raised md-primary button-stable",on:{click:t.profile}},[a("i",{staticClass:"fa fa-lock"}),t._v("  Submit\n\t\t\t\t")])],1)])])},E=[],B={name:"Signin",data:function(){return{email:"",password:""}},methods:{profile:function(){this.$router.push("/profile")}}},A=B,F=(a("bd59"),Object(b["a"])(A,j,E,!1,null,"29fe8dc7",null));F.options.__file="Signin.vue";var D=F.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-cover",staticStyle:{overflow:"auto"}},[a("br"),a("div",{staticClass:"inner-div md-elevation-2"},[a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("br"),a("br"),a("h4",{staticClass:"form-title"},[t._v("Employee Registration Form")]),a("p",[t._v("Fill up information needed in the form below to sign up as an employee.")]),a("br"),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"(step === 1)"}]},[a("b-row",[a("b-col",[a("b",[a("i",{staticClass:"fa fa-user"}),t._v(" Fillup Personal Informations")])])],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* First Name")]),a("md-input",{model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1)],1),a("b-col",{attrs:{cols:"2"}},[a("md-field",[a("label",[t._v("Middle Initial")]),a("md-input",{attrs:{maxlength:"1",type:"text"},model:{value:t.middleName,callback:function(e){t.middleName=e},expression:"middleName"}})],1)],1),a("b-col",[a("md-field",[a("label",[t._v("* Last Name")]),a("md-input",{model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* City")]),a("md-input",{model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1)],1),a("b-col",[a("md-field",[a("label",[t._v("* Barangay")]),a("md-input",{model:{value:t.barangay,callback:function(e){t.barangay=e},expression:"barangay"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* Date of Birth")]),a("md-input",{model:{value:t.dateOfBirth,callback:function(e){t.dateOfBirth=e},expression:"dateOfBirth"}})],1)],1),a("b-col",[a("md-field",[a("label",[t._v("* Contact No.")]),a("md-input",{attrs:{type:"number"},model:{value:t.contactNo,callback:function(e){t.contactNo=e},expression:"contactNo"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* Job")]),a("md-input",{model:{value:t.job,callback:function(e){t.job=e},expression:"job"}})],1)],1),a("b-col",[a("md-field",[a("label",[t._v("* Expected Salary")]),a("md-input",{attrs:{type:"number"},model:{value:t.expectedSalary,callback:function(e){t.expectedSalary=e},expression:"expectedSalary"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* Years of Experience")]),a("md-input",{model:{value:t.yearsOfExperience,callback:function(e){t.yearsOfExperience=e},expression:"yearsOfExperience"}})],1)],1),a("b-col",[a("md-field",[a("label",{attrs:{for:"movie"}},[t._v("Service Type")]),a("md-select",{model:{value:t.service,callback:function(e){t.service=e},expression:"service"}},[a("md-option",{attrs:{value:"Home"}},[t._v("Home Service")]),a("md-option",{attrs:{value:"Shop"}},[t._v("Shop Service")]),a("md-option",{attrs:{value:"HomeShop"}},[t._v("Home and Shop Service")])],1)],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* Skills")]),a("md-input",{model:{value:t.skills,callback:function(e){t.skills=e},expression:"skills"}})],1),a("p",{staticStyle:{"margin-top":"-15px",color:"gray"}},[a("i",[t._v("Please separate your skills with a comma (e.g. Cooking, Sketching, Painting).")])])],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* Certifications")]),a("md-file",{model:{value:t.skills,callback:function(e){t.skills=e},expression:"skills"}})],1),a("p",{staticStyle:{"margin-top":"-15px",color:"gray"}},[a("i",[t._v("Please upload your certifications as an image file.")])])],1)],1),a("b-row",[a("b-col",[a("b",{staticStyle:{"font-size":"16px"}},[t._v("Step 1 of 2")])]),a("b-col"),a("b-col",{attrs:{"align-v":"end"}},[a("md-button",{staticClass:"md-raised md-primary button-stable",on:{click:t.proceed}},[t._v("\n\t\t\t\t\t\t\tProceed   "),a("i",{staticClass:"fa fa-arrow-right"})])],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"(step === 2)"}]},[a("b-row",[a("b-col",[a("b",[a("i",{staticClass:"fa fa-lock"}),t._v(" Setup Account Information")])])],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* Email Address")]),a("md-input",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[t._v("* Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("b-col",[a("md-field",[a("label",[t._v("* Confirm Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1)],1),a("b-row",[a("b-col",[a("b",{staticStyle:{"font-size":"16px"}},[t._v("Step 2 of 2")])]),a("b-col",[a("md-button",{staticClass:"md-raised md-primary button-stable",staticStyle:{"background-color":"#27ae60"},on:{click:t.previous}},[a("i",{staticClass:"fa fa-arrow-left"}),t._v("   Previous \n\t\t\t\t\t\t")])],1),a("b-col",{attrs:{"align-v":"end"}},[a("md-button",{staticClass:"md-raised md-primary button-stable"},[t._v("\n\t\t\t\t\t\t\tSubmit   "),a("i",{staticClass:"fa fa-paper-plane"})])],1)],1)],1)]),a("br"),a("br")]),a("br"),a("br"),a("br"),a("br")])},J=[],H={name:"Signup",data:function(){return{firstName:"",middleName:"",lastName:"",email:"",username:"",password:"",confirmPassword:"",address:"",city:"",barangay:"",dateOfBirth:"",contactNo:"",job:"",yearsOfExperience:"",skills:"",step:1}},methods:{proceed:function(){this.step+=1},previous:function(){this.step-=1}}},T=H,I=(a("3406"),Object(b["a"])(T,$,J,!1,null,"04500f91",null));I.options.__file="Signup.vue";var W=I.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-container"},[i("b-container",[i("b-row",[i("b-col",{attrs:{cols:"3"}},[i("div",{staticClass:"md-elevation-3 left-wing-profile"},[i("center",[i("img",{staticClass:"profileImage",attrs:{src:a("61bd")}})]),i("div",{staticStyle:{width:"90%",height:"0 auto",margin:"0 auto"}},[i("br"),i("font",{staticClass:"employee-name"},[t._v("Nelmin Jay M. Anoc")]),i("br"),i("font",{staticClass:"sub-info"},[i("i",{staticClass:"fa fa-envelope"}),t._v(" hitman@gmail.com")]),i("br"),i("font",{staticClass:"sub-info"},[i("i",{staticClass:"fa fa-phone"}),t._v(" 09489138920")]),i("br"),i("br"),i("font",{staticClass:"sub-info"},[t._v('"I do the nasty job so clean that I\'ll come knocking on your door to clean you myself"')]),i("br"),i("br"),i("b-row",[i("b-col",[i("md-button",{staticClass:"md-dense md-raised md-primary update-button",staticStyle:{"margin-left":"0px"},on:{click:function(e){t.updateDialogForm=!0}}},[i("i",{staticClass:"fa fa-edit"}),t._v("   Update Profile\n\t\t          \t\t\t\t")])],1)],1)],1),i("br"),i("b",[i("p",{staticClass:"social-media-note"},[t._v("   Social Media Recommendation")])]),i("div",{staticStyle:{"word-wrap":"breakword","margin-left":"12px"}},[i("div",{staticClass:"fb-like",attrs:{"data-color-scheme":"light","data-href":t.profileUrl,"data-layout":"standard","data-action":"recommend","data-size":"large","data-show-faces":"true","data-share":"false","data-width":"100"}})]),i("br")],1)]),i("b-col",[i("div",{staticClass:"md-elevation-3 right-wing-profile"},[i("b-container",[i("br"),i("b-breadcrumb",{attrs:{items:t.path}}),i("b-row",[i("b-col",[i("p",{staticClass:"section-sub-titles"},[i("i",{staticClass:"fa fa-user"}),t._v(" Personal Information")]),i("br")])],1),i("div",{staticStyle:{width:"94%",margin:"0 auto"}},[i("b-row",[i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Birhtdate:")]),t._v("  December 12, 1994")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Address:")]),t._v("  Marawi City, Brgy. Dimalna")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Job:")]),t._v("  Hitman / Assasin")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Experience:")]),t._v("  5 years")])])],1)],1),i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Service Type:")]),t._v("  Home and Shop Service")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Expected Salary:")]),t._v("  PHP 1,000,000.00")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Skills:")]),t._v("  Painting, Welding, Carpentry, Cooking and Cleaning")])])],1)],1)],1)],1),i("br"),i("p",{staticClass:"section-sub-titles"},[i("i",{staticClass:"fa fa-graduation-cap"}),t._v(" Educational Background")]),i("br"),i("div",{staticStyle:{width:"94%",margin:"0 auto",height:"0 auto"}},[i("b-row",[i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Level:")]),t._v("  Elementary")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("School:")]),t._v("  Butuan Central Elementary School")])])],1)],1),i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Level:")]),t._v("  Secondary")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("School:")]),t._v("  Agusan National Highschool")])])],1)],1)],1),i("b-row",[i("b-col",[i("br"),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Level:")]),t._v("  Tertiary")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("School:")]),t._v("  Mindanao State University")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Course:")]),t._v("  BS Information Technology (Database)")])])],1)],1)],1)],1),i("br"),i("p",{staticClass:"section-sub-titles"},[i("i",{staticClass:"fa fa-briefcase"}),t._v(" Work Experience")]),i("br"),i("div",{staticStyle:{width:"94%",margin:"0 auto",height:"0 auto"}},[i("b-row",[i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Position:")]),t._v("  Senior Software Developer")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Date:")]),t._v("  Dec 12, 2010 - November 6, 2016")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Company:")]),t._v("  Code Labs")])])],1)],1),i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Position:")]),t._v("  Senior Software Developer")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Date:")]),t._v("  Dec 12, 2016 - Present")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Company:")]),t._v("  Orange and Bronze")])])],1)],1)],1)],1),i("br"),i("p",{staticClass:"section-sub-titles"},[i("i",{staticClass:"fa fa-users"}),t._v(" Character Reference")]),i("br"),i("div",{staticStyle:{width:"94%",margin:"0 auto",height:"0 auto"}},[i("b-row",[i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Name:")]),t._v("  Mudzna J. Muin-Asakil")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Company:")]),t._v("  Mindanao State University")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Position:")]),t._v("  Faculty / College Secretary")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Contact Number:")]),t._v("  09489138920")])])],1)],1),i("b-col",[i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Name:")]),t._v("  Janice F. Wade")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Company:")]),t._v("  Mindanao State University")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Position:")]),t._v("  Faculty / College Chairperson")])])],1),i("b-row",[i("b-col",[i("p",{staticClass:"section-info"},[i("b",[t._v("Contact Number:")]),t._v("  09489138920")])])],1)],1)],1)],1),i("br"),i("br")],1)],1)])],1)],1),i("br"),i("br")],1)},z=[],L={name:"Profile",props:["slugName"],mounted:function(){FB.XFBML.parse(),FB.Event.subscribe("xfbml.render",function(){console.log("finish rendering")})},created:function(){this.profileUrl="http://servace.ml/#/profile/"+this.$props.slugName},data:function(){return{path:[{text:"Home",to:{name:"FrontPage"}},{text:"Search",to:{name:"Search"}},{text:"Profile",to:{name:"Profile"}}],profileUrl:"",updateDialogForm:!0}}},R=L,q=(a("f40e"),Object(b["a"])(R,U,z,!1,null,"148b181a",null));q.options.__file="Profile.vue";var Y=q.exports;i["default"].use(h["a"]);var K=new h["a"]({routes:[{path:"/",name:"FrontPage",component:S},{path:"/search",name:"Search",component:M},{path:"/signin",name:"Signin",component:D},{path:"/signup",name:"Signup",component:W},{path:"/profile/:slugName",name:"Profile",component:Y,props:!0}]}),V=a("9f7b"),X=a("43f9"),G=a.n(X);a("f9e3"),a("2dd8"),a("51de"),a("e094");i["default"].use(V["a"]),i["default"].use(G.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(v)},router:K}).$mount("#app")},"61bd":function(t,e,a){t.exports="img/sampleProfile.e8bb6cd0.jpg"},7115:function(t,e,a){t.exports="img/ServAceLogoRaw.9956bae8.png"},"86d3":function(t,e,a){"use strict";var i=a("2519"),s=a.n(i);s.a},"96b9":function(t,e,a){"use strict";var i=a("0b52"),s=a.n(i);s.a},b28e:function(t,e,a){},bc5c:function(t,e,a){},bd59:function(t,e,a){"use strict";var i=a("cf34"),s=a.n(i);s.a},c0ce:function(t,e,a){},c21b:function(t,e,a){},cf34:function(t,e,a){},f40e:function(t,e,a){"use strict";var i=a("c0ce"),s=a.n(i);s.a}});
//# sourceMappingURL=app.03bde66b.js.map