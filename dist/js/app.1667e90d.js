(function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],n[o]&&p.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("c21b"),n=a.n(i);n.a},"16b6":function(e,t,a){},2486:function(e,t,a){"use strict";var i=a("16b6"),n=a.n(i);n.a},"2eab":function(e,t,a){},"348d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navigation",{directives:[{name:"show",rawName:"v-show",value:"FrontPage"!==e.$route.name,expression:"($route.name !== 'FrontPage')"}]}),a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{staticClass:"nav-height md-elevation-2",attrs:{toggleable:"md",fixed:"top",type:"light",variant:"light"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{staticClass:"nav-title spread-appart"},[a("a",{staticClass:"disable-default",on:{click:e.pushHome}},[e._v("SerVace")])])],1)],1)},s=[],l={name:"Navigation",methods:{pushHome:function(){this.$router.push("/")}}},c=l,d=(a("2486"),a("2877")),u=Object(d["a"])(c,o,s,!1,null,"15f746bf",null);u.options.__file="Navigation.vue";var p=u.exports,m={name:"app",components:{Navigation:p}},b=m,f=(a("034f"),Object(d["a"])(b,n,r,!1,null,null,null));f.options.__file="App.vue";var v=f.exports,y=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background-cover full-container"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",[a("center",[a("p",{staticClass:"front-font-main spread-appart center-piece adjust-top"},[e._v("SerVace")]),a("p",{staticClass:"tagline"},[a("i",[e._v("\"You've got a job ? We've got people for you\"")])]),a("div",{staticStyle:{"margin-top":"30px"}},[a("b-container",{staticStyle:{width:"1000px",margin:"0 auto"}},[a("b-row",[a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[e._v("What")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"Job Description"}})],1),a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[e._v("Where")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"City"}})],1),a("b-col",{attrs:{cols:"2"}},[a("p",{staticClass:"sub-headers"},[a("b",[e._v("Search")])]),a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front",on:{click:e.searchEmployee}},[a("i",{staticClass:"fa fa-search"}),e._v(" Find Employee\n                ")])],1)],1)],1)],1)])],1),a("div",[a("center",[a("p",{staticClass:"sub-note"},[e._v("Are you looking for a job ?")]),a("md-button",{staticClass:"md-raised md-primary note-signup-button",on:{click:e.signup}},[e._v("\n            Yes, Sign me up\n        ")])],1)],1)])},_=[],g={name:"FrontPage",methods:{searchEmployee:function(){this.$router.push("/search")},signup:function(){this.$router.push("/signup")}}},w=g,x=(a("5778"),Object(d["a"])(w,h,_,!1,null,"b7e41c7c",null));x.options.__file="FrontPage.vue";var S=x.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"md-elevation-5 search-container"},[a("div",[a("br"),a("br"),a("b-container",[a("b-breadcrumb",{attrs:{items:e.path}}),a("b-row",{staticStyle:{width:"100%"}},[a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[e._v("What")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"Job Description"},model:{value:e.job,callback:function(t){e.job=t},expression:"job"}})],1),a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[e._v("Where")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"City"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),a("b-col",{attrs:{cols:"2"}},[a("p",{staticClass:"sub-headers"},[a("b",[e._v("Search")])]),a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front"},[a("i",{staticClass:"fa fa-search"}),e._v("  Find Employee\n                  ")])],1)],1)],1),a("b-container",{staticStyle:{"margin-top":"30px"}},[a("b-row",{staticStyle:{"margin-top":"-20px"}},[a("p",{staticStyle:{"margin-left":"15px"}},[e._v("Below are the results of your query")])]),a("b-row",{staticStyle:{"margin-top":"-15px"}},[a("p",{staticStyle:{"margin-left":"15px"}},[e._v("Displaying results for "),a("b",[e._v('"Carpenters on Brgy. Dimalna, Marawi City"')])])]),a("b-row",{staticStyle:{"margin-top":"-15px"}},[a("p",{staticStyle:{"margin-left":"15px"}},[e._v("Found "),a("b",[e._v(" 8 employees")]),e._v(" matching your preference")])]),a("md-table",[a("md-table-row",[a("md-table-head",{staticClass:"head-font",staticStyle:{width:"20%"}},[e._v("Name")]),a("md-table-head",{staticClass:"head-font",staticStyle:{width:"20%"}},[e._v("Skills")]),a("md-table-head",{staticClass:"head-font",staticStyle:{"text-align":"center",width:"5%"}},[e._v("Experience")]),a("md-table-head",{staticClass:"head-font"},[e._v("Service Type")]),a("md-table-head",{staticClass:"head-font",staticStyle:{width:"25%"}},[e._v("Action")])],1),e._l(e.searchResults,function(t,i){return a("md-table-row",{key:"index"},[a("md-table-cell",{staticClass:"cell-font",staticStyle:{"text-align":"left"},attrs:{"md-numeric":""}},[e._v(e._s(t.name))]),a("md-table-cell",{staticClass:"cell-font"},[e._v("Carpentry, Air conditioning, Plumbing")]),a("md-table-cell",{staticClass:"cell-font",staticStyle:{"text-align":"center"}},[e._v("5 years")]),a("md-table-cell",{staticClass:"cell-font"},[e._v("Home Service / Shop Service")]),a("md-table-cell",[a("md-button",{staticClass:"md-primary md-raised profile-button",staticStyle:{display:"inline-block","font-size":"12px"}},[a("i",{staticClass:"fa fa-user"}),e._v("  View\n\t\t\t        \t")]),e._v("\n\t\t\t        \t \n\t\t\t        \t"),a("md-button",{staticClass:"md-primary md-raised call-button",staticStyle:{display:"inline-block","font-size":"12px"},on:{click:function(t){e.showCallMeDialog=!0}}},[a("i",{staticClass:"fa fa-phone"}),e._v("  Contact\n\t\t\t        \t")])],1)],1)})],2),a("br")],1),a("b-container",[a("b-container",{staticClass:"bottom-filter"},[a("b-row",[a("div",{staticClass:"bottom-filter-inner"},[a("p",[a("b",[e._v("Would you like to narrow the list with ?")])])])]),a("b-row",[a("b-col",[a("b-form-group",[a("div",[a("b-form-select",{staticClass:"mb-3",attrs:{options:e.barangay},model:{value:e.selectedBarangay,callback:function(t){e.selectedBarangay=t},expression:"selectedBarangay"}}),a("p",{staticStyle:{"margin-top":"-5px"}},[a("i",[e._v("Show only results from a choosen barangay")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.criticCounter,expression:"(criticCounter ===2)"}]},[a("b-form-input",{staticClass:"form-input-border",attrs:{type:"number",placeholder:"Expected Salary"}}),a("p",{staticStyle:{"margin-top":"5px"}},[a("i",[e._v("Show only results less than or equal expected salary")])])],1)])],1),a("b-col",[a("b-form-group",[a("div",[a("b-form-select",{staticClass:"mb-3",attrs:{options:e.typeOfService},model:{value:e.selectedTypeOfService,callback:function(t){e.selectedTypeOfService=t},expression:"selectedTypeOfService"}}),a("p",{staticStyle:{"margin-top":"-5px"}},[a("i",[e._v("Show only results with a type of service")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.criticCounter,expression:"(criticCounter ===2)"}]},[a("b-form-input",{staticClass:"form-input-border",attrs:{type:"number",placeholder:"Age"}}),a("p",{staticStyle:{"margin-top":"5px"}},[a("i",[e._v("Show only results less than or equal age set")])])],1)])],1),a("b-col",[a("b-form-group",{staticStyle:{width:"180px"}},[a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front",on:{click:e.narrowSearch}},[a("i",{staticClass:"fa fa-search"}),e._v("  Narrow Search\n                  \t  ")])],1)],1)],1)],1),a("br"),a("br")],1)],1)]),a("br"),a("br"),a("md-dialog",{attrs:{"md-active":e.showCallMeDialog},on:{"update:mdActive":function(t){e.showCallMeDialog=t}}},[a("md-dialog-title",[a("i",{staticClass:"fa fa-address-book"}),e._v(" Contact Information")]),a("md-dialog-content",[a("i",{staticClass:"fa fa-mobile-alt"}),e._v("   09489138920 "),a("br"),a("br"),a("i",{staticClass:"fa fa-phone"}),e._v("  (632) 834-4000 "),a("br"),a("br"),a("i",{staticClass:"fa fa-envelope-square"}),e._v("   nelmin_sinitchi@yahoo.com\n      ")]),a("md-dialog-actions",{staticStyle:{"margin-top":"-10px"}},[a("md-button",{staticClass:"md-primary",on:{click:function(t){e.showCallMeDialog=!1}}},[e._v("Ok")])],1)],1)],1)},k=[],N={name:"Search",components:{Navigation:p},data:function(){return{searchResults:[{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"}],path:[{text:"Home",to:{name:"FrontPage"}},{text:"Search",to:{name:"Search"}}],showCallMeDialog:!1,barangay:[{value:null,text:"-- Select a barangay --"},{value:0,text:"Brgy. Dimalna"},{value:1,text:"Baryo Salam"},{value:2,text:"Baryo Sikap"},{value:3,text:"Baryo Kalilintad"}],selectedBarangay:null,typeOfService:[{value:null,text:"-- Select a type of service --"},{value:0,text:"Home Service"},{value:1,text:"Shop Service"},{value:2,text:"Home and Shop Service"}],selectedTypeOfService:null,job:"Carpenter",city:"Marawi",criticCounter:1,expected_salary:"",age:""}},methods:{narrowSearch:function(){this.criticCounter+=1,this.criticCounter>2&&(this.criticCounter=2)}}},O=N,P=(a("c7c1"),Object(d["a"])(O,C,k,!1,null,"12e7a652",null));P.options.__file="Search.vue";var j=P.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background-cover",staticStyle:{overflow:"auto"}},[a("br"),a("br"),a("div",{staticClass:"inner-div md-elevation-1"},[a("div",{staticStyle:{width:"85%",margin:"0 auto"}},[a("br"),a("center",[a("h4",{staticClass:"form-title"},[e._v("Sign in")])]),a("md-field",[a("label",[e._v("Email")]),a("md-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("md-field",[a("label",[e._v("Password")]),a("md-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("md-button",{staticClass:"md-dense md-raised md-primary button-stable"},[e._v("Submit")])],1)])])},M=[],A={name:"Signin",data:function(){return{email:"",password:""}}},B=A,F=(a("91d6"),Object(d["a"])(B,E,M,!1,null,"410906d5",null));F.options.__file="Signin.vue";var J=F.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background-cover",staticStyle:{overflow:"auto"}},[a("br"),a("div",{staticClass:"inner-div md-elevation-2"},[a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("br"),a("br"),a("h4",{staticClass:"form-title"},[e._v("Employee Registration Form")]),a("p",[e._v("Fill up information needed in the form below to sign up as an employee.")]),a("br"),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"(step === 1)"}]},[a("b-row",[a("b-col",[a("b",[a("i",{staticClass:"fa fa-user"}),e._v(" Fillup Personal Informations")])])],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* First Name")]),a("md-input",{model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1)],1),a("b-col",{attrs:{cols:"2"}},[a("md-field",[a("label",[e._v("Middle Initial")]),a("md-input",{model:{value:e.middleName,callback:function(t){e.middleName=t},expression:"middleName"}})],1)],1),a("b-col",[a("md-field",[a("label",[e._v("* Last Name")]),a("md-input",{model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* City")]),a("md-input",{model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1)],1),a("b-col",[a("md-field",[a("label",[e._v("* Barangay")]),a("md-input",{model:{value:e.barangay,callback:function(t){e.barangay=t},expression:"barangay"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* Date of Birth")]),a("md-input",{model:{value:e.dateOfBirth,callback:function(t){e.dateOfBirth=t},expression:"dateOfBirth"}})],1)],1),a("b-col",[a("md-field",[a("label",[e._v("* Contact No.")]),a("md-input",{attrs:{type:"number"},model:{value:e.contactNo,callback:function(t){e.contactNo=t},expression:"contactNo"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* Job")]),a("md-input",{model:{value:e.job,callback:function(t){e.job=t},expression:"job"}})],1)],1),a("b-col",[a("md-field",[a("label",[e._v("* Expected Salary")]),a("md-input",{model:{value:e.expectedSalary,callback:function(t){e.expectedSalary=t},expression:"expectedSalary"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* Years of Experience")]),a("md-input",{model:{value:e.yearsOfExperience,callback:function(t){e.yearsOfExperience=t},expression:"yearsOfExperience"}})],1)],1),a("b-col",[a("md-field",[a("label",{attrs:{for:"movie"}},[e._v("Service Type")]),a("md-select",{model:{value:e.service,callback:function(t){e.service=t},expression:"service"}},[a("md-option",{attrs:{value:"Home"}},[e._v("Home Service")]),a("md-option",{attrs:{value:"Shop"}},[e._v("Shop Service")]),a("md-option",{attrs:{value:"HomeShop"}},[e._v("Home and Shop Service")])],1)],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* Skills")]),a("md-input",{model:{value:e.skills,callback:function(t){e.skills=t},expression:"skills"}})],1),a("p",{staticStyle:{"margin-top":"-15px",color:"gray"}},[a("i",[e._v("Please separate your skills with a comma (e.g. Cooking, Sketching, Painting).")])])],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* Certifications")]),a("md-file",{model:{value:e.skills,callback:function(t){e.skills=t},expression:"skills"}})],1),a("p",{staticStyle:{"margin-top":"-15px",color:"gray"}},[a("i",[e._v("Please upload your certifications as an image file.")])])],1)],1),a("b-row",[a("b-col",[a("b",{staticStyle:{"font-size":"16px"}},[e._v("Step 1 of 2")])]),a("b-col"),a("b-col",{attrs:{"align-v":"end"}},[a("md-button",{staticClass:"md-raised md-primary button-stable",on:{click:e.proceed}},[e._v("\n\t\t\t\t\t\t\tProceed   "),a("i",{staticClass:"fa fa-arrow-right"})])],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"(step === 2)"}]},[a("b-row",[a("b-col",[a("b",[a("i",{staticClass:"fa fa-lock"}),e._v(" Setup Account Information")])])],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* Email Address")]),a("md-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1),a("b-row",[a("b-col",[a("md-field",[a("label",[e._v("* Password")]),a("md-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("b-col",[a("md-field",[a("label",[e._v("* Confirm Password")]),a("md-input",{attrs:{type:"password"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1)],1)],1),a("b-row",[a("b-col",[a("b",{staticStyle:{"font-size":"16px"}},[e._v("Step 2 of 2")])]),a("b-col",[a("md-button",{staticClass:"md-raised md-primary button-stable",staticStyle:{"background-color":"#27ae60"},on:{click:e.previous}},[a("i",{staticClass:"fa fa-arrow-left"}),e._v("   Previous \n\t\t\t\t\t\t")])],1),a("b-col",{attrs:{"align-v":"end"}},[a("md-button",{staticClass:"md-raised md-primary button-stable"},[e._v("\n\t\t\t\t\t\t\tSubmit   "),a("i",{staticClass:"fa fa-paper-plane"})])],1)],1)],1)]),a("br"),a("br")]),a("br"),a("br"),a("br"),a("br")])},D=[],H={name:"Signup",data:function(){return{firstName:"",middleName:"",lastName:"",email:"",username:"",password:"",confirmPassword:"",address:"",city:"",barangay:"",dateOfBirth:"",contactNo:"",job:"",yearsOfExperience:"",skills:"",step:1}},methods:{proceed:function(){this.step+=1},previous:function(){this.step-=1}}},T=H,W=(a("8d63"),Object(d["a"])(T,$,D,!1,null,"531e12d6",null));W.options.__file="Signup.vue";var q=W.exports;i["default"].use(y["a"]);var z=new y["a"]({routes:[{path:"/",name:"FrontPage",component:S},{path:"/search",name:"Search",component:j},{path:"/signin",name:"signin",component:J},{path:"/signup",name:"signup",component:q}]}),I=a("9f7b"),R=a("43f9"),V=a.n(R);a("f9e3"),a("2dd8"),a("51de"),a("e094");i["default"].use(I["a"]),i["default"].use(V.a),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(v)},router:z}).$mount("#app")},5778:function(e,t,a){"use strict";var i=a("2eab"),n=a.n(i);n.a},"6d82":function(e,t,a){},"8d63":function(e,t,a){"use strict";var i=a("6d82"),n=a.n(i);n.a},"91d6":function(e,t,a){"use strict";var i=a("348d"),n=a.n(i);n.a},b0af:function(e,t,a){},c21b:function(e,t,a){},c7c1:function(e,t,a){"use strict";var i=a("b0af"),n=a.n(i);n.a}});
//# sourceMappingURL=app.1667e90d.js.map