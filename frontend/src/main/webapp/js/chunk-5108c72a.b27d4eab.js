(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5108c72a"],{2909:function(i,t,e){"use strict";e.d(t,"a",(function(){return c}));var n=e("6b75");function s(i){if(Array.isArray(i))return Object(n["a"])(i)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function o(i){if("undefined"!==typeof Symbol&&null!=i[Symbol.iterator]||null!=i["@@iterator"])return Array.from(i)}var a=e("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(i){return s(i)||o(i)||Object(a["a"])(i)||l()}},"76f1":function(i,t,e){},"8e07":function(i,t,e){"use strict";e.r(t);var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{attrs:{id:"header-desktop"}},[e("header",{attrs:{id:"banner"}},[e("div",{staticClass:"container layout wrap",staticStyle:{"padding-top":"5px","padding-bottom":"5px","padding-left":"10px"}},[i._m(0),e("div",{staticClass:"col-sm-8 text-right py-0",staticStyle:{color:"#ff6a00"}},[e("nav",{staticClass:"sort-pages modify-pages mt-3",attrs:{id:"navigation"}},[e("ul",{staticClass:"container",attrs:{"aria-label":"Site Pages",role:"menubar"}},i._l(i.items,(function(t,n){return e("li",{key:n,class:i.indexTab==n?"selected":"",attrs:{id:"layout_"+n,role:"presentation"}},[t.hasOwnProperty("childItems")?e("v-menu",{class:t["class"],attrs:{"open-on-hover":"",bottom:"","offset-y":"",id:t["id"],"aria-labelledby":"layout_"+n},scopedSlots:i._u([{key:"activator",fn:function(n){var s=n.on,o=n.attrs;return[e("a",i._g(i._b({},"a",o,!1),s),[e("span",[i._v(" "+i._s(t.title))]),e("v-icon",{staticClass:"ml-2",attrs:{color:"#fff",size:"22"}},[i._v(" mdi-chevron-down ")])],1)]}}],null,!0)},[e("v-list",[i._l(t.childItems,(function(s,o){return[e("v-list-item",{key:o,on:{click:function(t){return i.redirectTo(s,n)}}},[e("v-list-item-title",[e("span",{staticStyle:{"font-weight":"500"}},[i._v(" "+i._s(s.title))])])],1),o!==t.childItems.length-1?e("v-divider",{key:o,attrs:{inset:t.inset}}):i._e()]}))],2)],1):e("a",{class:t["class"],attrs:{id:t["id"],"aria-labelledby":"layout_"+n,"aria-haspopup":"true",href:"javascript:;",role:"menuitem"},on:{click:function(e){return i.redirectTo(t,n)}}},[e("span",[i._v(" "+i._s(t.title))])])],1)})),0)])])]),i.isSigned&&"xs"!==i.breakpointName&&"sm"!==i.breakpointName?e("v-menu",{attrs:{"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:i._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[e("v-chip",i._g(i._b({staticClass:"ma-2",staticStyle:{height:"36px",position:"absolute",top:"15px",right:"5px","z-index":"2"},attrs:{color:"primary"},on:{click:function(t){i.showMenu=!i.showMenu}}},"v-chip",s,!1),n),[e("v-icon",{staticClass:"mx-2",attrs:{left:"",size:"24"}},[i._v(" mdi-account-circle-outline ")]),e("span",{staticStyle:{"max-width":"65px",overflow:"hidden"}},[i._v(i._s(i.userLogin["hoVaTen"]?i.userLogin["hoVaTen"]:i.userLogin["role_name"]))]),i.showMenu?e("v-icon",{staticClass:"ml-2",attrs:{size:"20",color:"white"}},[i._v("mdi-chevron-down")]):e("v-icon",{staticClass:"ml-2",attrs:{size:"20",color:"white"}},[i._v("mdi-chevron-up")])],1)]}}],null,!1,438950733)},[e("v-list",{staticClass:"pa-0"},[e("v-list-item",{attrs:{to:"/pages/user",rel:"noopener"}},[e("v-list-item-action",{staticClass:"mr-3"},[e("v-icon",{attrs:{color:"#3f51b5"}},[i._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[i._v("Thông tin tài khoản")])],1)],1),e("v-list-item",{attrs:{rel:"noopener"},on:{click:i.logout}},[e("v-list-item-action",{staticClass:"mr-3"},[e("v-icon",{attrs:{color:"red"}},[i._v("mdi-power")])],1),e("v-list-item-content",[e("v-list-item-title",[i._v("Đăng xuất")])],1)],1)],1)],1):i._e(),i.isSigned?i._e():e("div",{staticClass:"btns"},[e("a",{staticClass:"login",attrs:{href:"javascript:;"},on:{click:i.goToLogin}},[i._v("Đăng nhập")])])],1)])])},s=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("a",{staticClass:"mLogo col-sm-4 py-0",staticStyle:{"text-decoration":"none",display:"block"},attrs:{href:""}},[e("img",{staticStyle:{width:"auto",height:"52px","border-radius":"10px"},attrs:{src:"/images/logo_banner.png"}}),e("div",[e("p",{staticClass:"ml-2 mb-2",staticStyle:{"font-size":"16px",color:"#fff"}},[i._v("HỆ THỐNG QUẢN LÝ VÀ TỔ CHỨC ĐIỂM TIÊM CHỦNG")])])])}],o=e("5530"),a=e("16b7"),l=e("f2e7"),c=e("58df"),h=e("d9bd"),d=Object(c["a"])(a["a"],l["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(i=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(i)&&1===i.length&&(i=i[0]),i&&!Array.isArray(i)&&i.tag?(this.disabled||(i.data=i.data||{},this._g(i.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),i):(Object(h["c"])("v-hover should only contain a single element",this),i)):(Object(h["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var i}}),r=e("da13"),u=e("2f62"),m={name:"DashboardCoreAppBar",components:{AppBarItem:{render:function(i){var t=this;return i(d,{scopedSlots:{default:function(e){var n=e.hover;return i(r["a"],{attrs:t.$attrs,class:{"black--text":!n,"white--text secondary elevation-12":n},props:Object(o["a"])({activeClass:"",dark:n,link:!0},t.$attrs)},t.$slots.default)}}})}}},props:{value:{type:Boolean,default:!1}},data:function(){return{showMenu:!1,items:[],notifications:[]}},created:function(){var i=this;i.userLogin&&i.userLogin["role_name"]&&"QuanTriHeThong"===i.userLogin["role_name"]?i.items=[{icon:"mdi-home",title:"Trang chủ",to:"/",class:"home-tab",id:"home-vacc"},{icon:"mdi-shield-plus-outline",title:"Đăng ký tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Đăng ký mới",to:"/pages/dang-ky-tiem-moi/0",id:"search"},{icon:"mdi-shield-plus-outline",title:"Đăng ký chính thức",to:"/pages/danh-sach-dang-ky-chinh-thuc",id:"search"},{icon:"mdi-shield-plus-outline",title:"Đăng ký đã rút",to:"/pages/danh-sach-dang-ky-da-rut",id:"search"},{icon:"mdi-shield-plus-outline",title:"Chứng nhận tiêm chủng",to:"/pages/chung-nhan-tiem-chung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"Kế hoạch tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Lịch tiêm chủng",to:"/pages/lich-tiem-chung",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn chờ xác nhận",to:"/pages/lich-hen-cho-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn đã xác nhận",to:"/pages/lich-hen-da-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Danh sách tiêm chủng",to:"/pages/danh-sach-tiem-chung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"Quản trị",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Ủy ban nhân dân",to:"/pages/uy-ban-nha-dan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Cơ sở y tế",to:"/pages/co-so-y-te",id:"search"},{icon:"mdi-shield-plus-outline",title:"Địa bàn cơ sở",to:"/pages/dia-ban-co-so",id:"search"},{icon:"mdi-shield-plus-outline",title:"Người dùng",to:"/pages/nguoi-dung",id:"search"},{icon:"mdi-shield-plus-outline",title:"Dữ liệu danh mục",to:"/pages/du-lieu-danh-muc",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"HDSD",to:"/pages/huong-dan-su-dung",id:"hdsd"}]:i.userLogin&&i.userLogin["role_name"]&&"QuanTriCoSo"===i.userLogin["role_name"]?i.items=[{icon:"mdi-home",title:"Trang chủ",to:"/",class:"home-tab",id:"home-vacc"},{icon:"mdi-shield-plus-outline",title:"Đăng ký tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Đăng ký mới",to:"/pages/dang-ky-tiem-moi/0",id:"search"},{icon:"mdi-shield-plus-outline",title:"Đăng ký chính thức",to:"/pages/danh-sach-dang-ky-chinh-thuc",id:"search"},{icon:"mdi-shield-plus-outline",title:"Đăng ký đã rút",to:"/pages/danh-sach-dang-ky-da-rut",id:"search"},{icon:"mdi-shield-plus-outline",title:"Chứng nhận tiêm chủng",to:"/pages/chung-nhan-tiem-chung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"Kế hoạch tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Lịch tiêm chủng",to:"/pages/lich-tiem-chung",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn chờ xác nhận",to:"/pages/lich-hen-cho-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn đã xác nhận",to:"/pages/lich-hen-da-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Danh sách tiêm chủng",to:"/pages/danh-sach-tiem-chung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"Quản trị",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Người dùng",to:"/pages/nguoi-dung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"HDSD",to:"/pages/huong-dan-su-dung",id:"hdsd"}]:i.userLogin&&i.userLogin["role_name"]&&"CanBoUBND"===i.userLogin["role_name"]?i.items=[{icon:"mdi-home",title:"Trang chủ",to:"/",class:"home-tab",id:"home-vacc"},{icon:"mdi-shield-plus-outline",title:"Giấy đi đường",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Đăng ký mới",to:"/pages/dang-ky-di-duong/0",id:"search"},{icon:"mdi-shield-plus-outline",title:"Danh sách đăng ký mới",to:"/pages/danh-sach-di-duong-yeu-cau",id:"search"},{icon:"mdi-shield-plus-outline",title:"Giấy đi đường đã cấp",to:"/pages/danh-sach-di-duong-da-cap",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"HDSD",to:"/pages/huong-dan-su-dung",id:"hdsd"}]:i.userLogin&&i.userLogin["role_name"]&&"CanBoYTe"===i.userLogin["role_name"]?i.items=[{icon:"mdi-home",title:"Trang chủ",to:"/",class:"home-tab",id:"home-vacc"},{icon:"mdi-shield-plus-outline",title:"Đăng ký tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Đăng ký mới",to:"/pages/dang-ky-tiem-moi/0",id:"search"},{icon:"mdi-shield-plus-outline",title:"Đăng ký chính thức",to:"/pages/danh-sach-dang-ky-chinh-thuc",id:"search"},{icon:"mdi-shield-plus-outline",title:"Đăng ký đã rút",to:"/pages/danh-sach-dang-ky-da-rut",id:"search"},{icon:"mdi-shield-plus-outline",title:"Chứng nhận tiêm chủng",to:"/pages/chung-nhan-tiem-chung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"Kế hoạch tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Lịch tiêm chủng",to:"/pages/lich-tiem-chung",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn chờ xác nhận",to:"/pages/lich-hen-cho-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn đã xác nhận",to:"/pages/lich-hen-da-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Danh sách tiêm chủng",to:"/pages/danh-sach-tiem-chung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"HDSD",to:"/pages/huong-dan-su-dung",id:"hdsd"}]:i.userLogin&&i.userLogin["role_name"]&&"CanBoDiaBan"===i.userLogin["role_name"]?i.items=[{icon:"mdi-home",title:"Trang chủ",to:"/",class:"home-tab",id:"home-vacc"},{icon:"mdi-shield-plus-outline",title:"Đăng ký tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Đăng ký mới",to:"/pages/dang-ky-tiem-moi/0",id:"search"},{icon:"mdi-shield-plus-outline",title:"Đăng ký chính thức",to:"/pages/danh-sach-dang-ky-chinh-thuc",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"Kế hoạch tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Lịch tiêm chủng",to:"/pages/lich-tiem-chung",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn chờ xác nhận",to:"/pages/lich-hen-cho-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Lịch hẹn đã xác nhận",to:"/pages/lich-hen-da-xac-nhan",id:"search"},{icon:"mdi-shield-plus-outline",title:"Danh sách tiêm chủng",to:"/pages/danh-sach-tiem-chung",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"HDSD",to:"/pages/huong-dan-su-dung",id:"hdsd"}]:i.userLogin&&i.userLogin["role_name"]&&"NguoiDung"===i.userLogin["role_name"]&&(i.items=[{icon:"mdi-home",title:"Trang chủ",to:"/",class:"home-tab",id:"home-vacc"},{icon:"mdi-shield-plus-outline",title:"Đăng ký tiêm",id:"search",childItems:[{icon:"mdi-shield-plus-outline",title:"Đăng ký mới",to:"/pages/dang-ky-tiem-moi/0",id:"search"}]},{icon:"mdi-shield-plus-outline",title:"HDSD",to:"/pages/huong-dan-su-dung",id:"hdsd"}])},mounted:function(){},computed:Object(o["a"])(Object(o["a"])({},Object(u["d"])(["drawer"])),{},{breakpointName:function(){return this.$store.getters.getBreakpointName},indexTab:function(){return this.$store.getters.getIndexTab}}),watch:{userLogin:function(i){}},methods:Object(o["a"])(Object(o["a"])({},Object(u["c"])({setDrawer:"SET_DRAWER"})),{},{logout:function(){var i=this;i.$store.commit("SET_ISSIGNED",!1),localStorage.getItem("user")&&localStorage.setItem("user",null),i.$cookies.set("Token",""),i.$router.push({path:"/login"})},redirectTo:function(i,t){this.$store.commit("SET_INDEXTAB",t),this.$router.push({path:i.to})},goToLogin:function(){this.$router.push({path:"/login"})}})},g=m,p=(e("b64c"),e("2877")),v=e("6544"),f=e.n(v),b=e("cc20"),y=e("ce7e"),k=e("132d"),_=e("8860"),L=e("1800"),x=e("5d23"),S=e("e449"),C=Object(p["a"])(g,n,s,!1,null,null,null);t["default"]=C.exports;f()(C,{VChip:b["a"],VDivider:y["a"],VIcon:k["a"],VList:_["a"],VListItem:r["a"],VListItemAction:L["a"],VListItemContent:x["a"],VListItemTitle:x["c"],VMenu:S["a"]})},b64c:function(i,t,e){"use strict";e("76f1")}}]);