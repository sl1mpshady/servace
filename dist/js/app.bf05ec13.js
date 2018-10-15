(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},"333c":function(t,e,a){"use strict";var n=a("d692"),r=a.n(n);r.a},"348d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation",{directives:[{name:"show",rawName:"v-show",value:"FrontPage"!==t.$route.name,expression:"($route.name !== 'FrontPage')"}]}),a("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{staticClass:"nav-height md-elevation-2",attrs:{toggleable:"md",fixed:"top",type:"light",variant:"light"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{staticClass:"nav-title spread-appart"},[a("a",{staticClass:"disable-default",attrs:{href:"/"}},[t._v("SerVace")])])],1)],1)},o=[],l={name:"Navigation"},c=l,d=(a("c7a7"),a("2877")),u=Object(d["a"])(c,s,o,!1,null,"7cd34749",null);u.options.__file="Navigation.vue";var p=u.exports,m={name:"app",components:{Navigation:p}},b=m,f=(a("034f"),Object(d["a"])(b,r,i,!1,null,null,null));f.options.__file="App.vue";var v=f.exports,y=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-cover full-container"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",[a("center",[a("p",{staticClass:"front-font-main spread-appart center-piece adjust-top"},[t._v("SerVace")]),a("p",{staticClass:"tagline"},[a("i",[t._v("\"You've got a job ? We've got people for you\"")])]),a("div",{staticStyle:{"margin-top":"30px"}},[a("b-container",{staticStyle:{width:"1000px",margin:"0 auto"}},[a("b-row",[a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("What")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"Job Description"}})],1),a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("Where")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"City"}})],1),a("b-col",{attrs:{cols:"2"}},[a("p",{staticClass:"sub-headers"},[a("b",[t._v("Search")])]),a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front",on:{click:t.searchEmployee}},[a("i",{staticClass:"fa fa-search"}),t._v(" Find Employee\n                ")])],1)],1)],1)],1)])],1),a("div",[a("center",[a("p",{staticClass:"sub-note"},[t._v("Are you looking for a job ?")]),a("md-button",{staticClass:"md-dense md-raised md-primary note-signup-button",on:{click:t.signup}},[t._v("\n            Yes, Sign me up\n        ")])],1)],1)])},_=[],g={name:"FrontPage",methods:{searchEmployee:function(){this.$router.push("/search")},signup:function(){this.$router.push("/signup")}}},C=g,S=(a("fb92"),Object(d["a"])(C,h,_,!1,null,"4fbf66e8",null));S.options.__file="FrontPage.vue";var w=S.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"md-elevation-2 search-container"},[a("div",[a("br"),a("br"),a("b-container",[a("b-breadcrumb",{attrs:{items:t.path}}),a("b-row",{staticStyle:{width:"100%"}},[a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("What")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"Job Description"},model:{value:t.job,callback:function(e){t.job=e},expression:"job"}})],1),a("b-col",[a("p",{staticClass:"sub-headers "},[a("b",[t._v("Where")])]),a("b-form-input",{staticClass:"form-input-border",attrs:{type:"text",placeholder:"City"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),a("b-col",{attrs:{cols:"2"}},[a("p",{staticClass:"sub-headers"},[a("b",[t._v("Search")])]),a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front"},[a("i",{staticClass:"fa fa-search"}),t._v("  Find Employee\n                  ")])],1)],1)],1),a("b-container",{staticStyle:{"margin-top":"30px"}},[a("b-row",{staticStyle:{"margin-top":"-20px"}},[a("p",{staticStyle:{"margin-left":"15px"}},[t._v("Below are the results of your query")])]),a("b-row",{staticStyle:{"margin-top":"-15px"}},[a("p",{staticStyle:{"margin-left":"15px"}},[t._v("Displaying results for "),a("b",[t._v('"Carpenters on Brgy. Dimalna, Marawi City"')])])]),a("b-row",{staticStyle:{"margin-top":"-15px"}},[a("p",{staticStyle:{"margin-left":"15px"}},[t._v("Found "),a("b",[t._v(" 8 employees")]),t._v(" matching your preference")])]),a("md-table",[a("md-table-row",[a("md-table-head",{staticClass:"head-font",staticStyle:{width:"20%"}},[t._v("Name")]),a("md-table-head",{staticClass:"head-font",staticStyle:{width:"20%"}},[t._v("Skills")]),a("md-table-head",{staticClass:"head-font",staticStyle:{"text-align":"center",width:"5%"}},[t._v("Experience")]),a("md-table-head",{staticClass:"head-font"},[t._v("Service Type")]),a("md-table-head",{staticClass:"head-font",staticStyle:{width:"25%"}},[t._v("Action")])],1),t._l(t.searchResults,function(e,n){return a("md-table-row",{key:"index"},[a("md-table-cell",{staticClass:"cell-font",staticStyle:{"text-align":"left"},attrs:{"md-numeric":""}},[t._v(t._s(e.name))]),a("md-table-cell",{staticClass:"cell-font"},[t._v("Carpentry, Air conditioning, Plumbing")]),a("md-table-cell",{staticClass:"cell-font",staticStyle:{"text-align":"center"}},[t._v("5 years")]),a("md-table-cell",{staticClass:"cell-font"},[t._v("Home Service / Shop Service")]),a("md-table-cell",[a("md-button",{staticClass:"md-primary md-raised profile-button",staticStyle:{display:"inline-block"}},[a("i",{staticClass:"fa fa-user"}),t._v("  View\n\t\t\t        \t")]),t._v("\n\t\t\t        \t \n\t\t\t        \t"),a("md-button",{staticClass:"md-primary md-raised call-button",staticStyle:{display:"inline-block"},on:{click:function(e){t.showCallMeDialog=!0}}},[a("i",{staticClass:"fa fa-phone"}),t._v("  Contact\n\t\t\t        \t")])],1)],1)})],2),a("br")],1),a("b-container",[a("b-container",{staticClass:"bottom-filter"},[a("b-row",[a("div",{staticClass:"bottom-filter-inner"},[a("p",[a("b",[t._v("Would you like to narrow the list with ?")])])])]),a("b-row",[a("b-col",[a("b-form-group",[a("div",[a("b-form-select",{staticClass:"mb-3",attrs:{options:t.barangay},model:{value:t.selectedBarangay,callback:function(e){t.selectedBarangay=e},expression:"selectedBarangay"}}),a("p",{staticStyle:{"margin-top":"-5px"}},[a("i",[t._v("Show only results from a choosen barangay")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.criticCounter,expression:"(criticCounter ===2)"}]},[a("b-form-input",{staticClass:"form-input-border",attrs:{type:"number",placeholder:"Expected Salary"}}),a("p",{staticStyle:{"margin-top":"5px"}},[a("i",[t._v("Show only results less than or equal expected salary")])])],1)])],1),a("b-col",[a("b-form-group",[a("div",[a("b-form-select",{staticClass:"mb-3",attrs:{options:t.typeOfService},model:{value:t.selectedTypeOfService,callback:function(e){t.selectedTypeOfService=e},expression:"selectedTypeOfService"}}),a("p",{staticStyle:{"margin-top":"-5px"}},[a("i",[t._v("Show only results with a type of service")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.criticCounter,expression:"(criticCounter ===2)"}]},[a("b-form-input",{staticClass:"form-input-border",attrs:{type:"number",placeholder:"Age"}}),a("p",{staticStyle:{"margin-top":"5px"}},[a("i",[t._v("Show only results less than or equal age set")])])],1)])],1),a("b-col",[a("b-form-group",{staticStyle:{width:"180px"}},[a("md-button",{staticClass:"md-dense md-raised md-primary search-button-front",on:{click:t.narrowSearch}},[a("i",{staticClass:"fa fa-search"}),t._v("  Narrow Search\n                  \t  ")])],1)],1)],1)],1),a("br"),a("br")],1)],1)]),a("br"),a("br"),a("md-dialog",{attrs:{"md-active":t.showCallMeDialog},on:{"update:mdActive":function(e){t.showCallMeDialog=e}}},[a("md-dialog-title",[a("i",{staticClass:"fa fa-address-book"}),t._v(" Contact Information")]),a("md-dialog-content",[a("i",{staticClass:"fa fa-mobile-alt"}),t._v("   09489138920 "),a("br"),a("br"),a("i",{staticClass:"fa fa-phone"}),t._v("  (632) 834-4000 "),a("br"),a("br"),a("i",{staticClass:"fa fa-envelope-square"}),t._v("   nelmin_sinitchi@yahoo.com\n      ")]),a("md-dialog-actions",{staticStyle:{"margin-top":"-10px"}},[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showCallMeDialog=!1}}},[t._v("Ok")])],1)],1)],1)},k=[],O={name:"Search",components:{Navigation:p},data:function(){return{searchResults:[{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"},{name:"Nelmin Jay M. Anoc",contact_number:"09489138920",expected_salary:"300/day"}],path:[{text:"Home",href:"/"},{text:"Search",href:"#"}],showCallMeDialog:!1,barangay:[{value:null,text:"-- Select a barangay --"},{value:0,text:"Brgy. Dimalna"},{value:1,text:"Baryo Salam"},{value:2,text:"Baryo Sikap"},{value:3,text:"Baryo Kalilintad"}],selectedBarangay:null,typeOfService:[{value:null,text:"-- Select a type of service --"},{value:0,text:"Home Service"},{value:1,text:"Shop Service"},{value:2,text:"Home and Shop Service"}],selectedTypeOfService:null,job:"Carpenter",city:"Marawi",criticCounter:1,expected_salary:"",age:""}},methods:{narrowSearch:function(){this.criticCounter+=1,this.criticCounter>2&&(this.criticCounter=2)}}},j=O,M=(a("7925"),Object(d["a"])(j,x,k,!1,null,"e73a43c8",null));M.options.__file="Search.vue";var N=M.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-cover",staticStyle:{overflow:"auto"}},[a("br"),a("br"),a("div",{staticClass:"inner-div md-elevation-1"},[a("div",{staticStyle:{width:"85%",margin:"0 auto"}},[a("br"),a("center",[a("h4",{staticClass:"form-title"},[t._v("Sign in")])]),a("md-field",[a("label",[t._v("Email")]),a("md-input",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("md-field",[a("label",[t._v("Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("md-button",{staticClass:"md-dense md-raised md-primary button-stable"},[t._v("Submit")])],1)])])},E=[],P={name:"Signin",data:function(){return{email:"",password:""}}},J=P,$=(a("91d6"),Object(d["a"])(J,A,E,!1,null,"410906d5",null));$.options.__file="Signin.vue";var B=$.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-cover",staticStyle:{overflow:"auto"}},[a("br"),a("br"),a("div",{staticClass:"inner-div md-elevation-1"},[a("div",{staticStyle:{width:"85%",margin:"0 auto"}},[a("br"),a("center",[a("h4",{staticClass:"form-title"},[t._v("Sign up")])]),a("md-field",[a("label",[t._v("Email")]),a("md-input",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("md-field",[a("label",[t._v("Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("md-button",{staticClass:"md-dense md-raised md-primary button-stable"},[t._v("Submit")])],1)])])},F=[],T={name:"Signup",data:function(){return{email:"",password:""}}},W=T,q=(a("333c"),Object(d["a"])(W,D,F,!1,null,"2bd8448b",null));q.options.__file="Signup.vue";var H=q.exports;n["default"].use(y["a"]);var V=new y["a"]({routes:[{path:"/",name:"FrontPage",component:w},{path:"/search",name:"Search",component:N},{path:"/signin",name:"signin",component:B},{path:"/signup",name:"signup",component:H}]}),R=a("9f7b"),Y=a("43f9"),I=a.n(Y);a("f9e3"),a("2dd8"),a("51de"),a("e094");n["default"].use(R["a"]),n["default"].use(I.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(v)},router:V}).$mount("#app")},"6d36":function(t,e,a){},7925:function(t,e,a){"use strict";var n=a("9d8d"),r=a.n(n);r.a},"91d6":function(t,e,a){"use strict";var n=a("348d"),r=a.n(n);r.a},"9d8d":function(t,e,a){},c21b:function(t,e,a){},c7a7:function(t,e,a){"use strict";var n=a("e9b4"),r=a.n(n);r.a},d692:function(t,e,a){},e9b4:function(t,e,a){},fb92:function(t,e,a){"use strict";var n=a("6d36"),r=a.n(n);r.a}});
//# sourceMappingURL=app.bf05ec13.js.map