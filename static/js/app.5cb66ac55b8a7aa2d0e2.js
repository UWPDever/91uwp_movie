webpackJsonp([1],{0:function(e,t){},J0YL:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),i={name:"App",mounted:function(){this.$router.afterEach(function(e,t,s){window.scrollTo(0,0)})}};window.onload=function(){document.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()}),document.addEventListener("gesturestart",function(e){e.preventDefault()})};var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(e){s("pz/P")},null,null).exports,l=s("/ocq"),r={data:function(){return{current:1,allcount:0,isloading:!0,isloading1:!1,visible:!1,collapsed:!0,data1:[],data:[]}},mounted:function(){var e=this;e.axios.get("https://service-ny42jrk1-1251342364.ap-shanghai.apigateway.myqcloud.com/release/getlist?type=&key=&page=0").then(function(t){console.log("ssss"),e.data=JSON.parse(t.data).results,e.allcount=JSON.parse(t.data).count,e.isloading=!1})},methods:{onsearch:function(e){var t=this;t.isloading1=!0,t.axios.get("https://service-ny42jrk1-1251342364.ap-shanghai.apigateway.myqcloud.com/release/getsearch?keyword="+e).then(function(e){t.data1=JSON.parse(e.data).results,t.isloading1=!1})},toggleCollapsed:function(){this.collapsed=!this.collapsed},onCollapse:function(e,t){console.log(e,t)},showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},onclick:function(e){this.$router.push({name:"VideoPlayer",query:{id:e}})},onchange:function(e){var t=null==this.key?"":this.key;this.getdata("movietype",e,t)},onselect:function(e){this.current=1;var t=e.key;this.key=t,this.getdata("movietype","0",t),console.log(e)},getdata:function(e,t,s){var n=this;target.scrollIntoView(),n.data=[],n.isloading=!0,n.axios.get("https://service-ny42jrk1-1251342364.ap-shanghai.apigateway.myqcloud.com/release/getlist?type="+e+"&key="+s+"&page="+t).then(function(e){n.isloading=!1,n.allcount=JSON.parse(e.data).count,n.data=JSON.parse(e.data).results,0==n.collapsed&&(n.collapsed=!0),console.log(JSON.parse(e.data).results)})}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-layout",{attrs:{id:"target"}},[s("a-layout",[s("a-layout-header",{style:{background:"#001529",padding:0,position:"fixed",zIndex:1,width:"100%"}},[s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"title"},[e._v("电影大全UWP")]),e._v(" "),s("a-icon",{staticStyle:{position:"absolute",right:"15px",top:"15px","font-size":"22px"},attrs:{type:"search"},on:{click:e.showDrawer}})],1)]),e._v(" "),s("a-layout-content",{style:{margin:"80px 4vw  0 4vw"}},[s("div",{style:{padding:"12px",background:"#fff"}},[s("a-list",{staticStyle:{"min-height":"100vh"},attrs:{loading:e.isloading,grid:{gutter:4,xs:2,sm:3,md:4,lg:6,xl:6,xxl:6},dataSource:e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t){return s("a-list-item",{on:{"":function(e){}}},[s("a-card",{staticStyle:{"text-align":"left"},attrs:{hoverable:""},on:{click:function(s){return e.onclick(t.movieid)}}},[s("img",{staticStyle:{},attrs:{slot:"cover",src:"http://super-search.u.qiniudn.com/king"+t.movieid+"_DetailCoverimg.jpg",onError:"this.src='https://i.loli.net/2019/08/30/AnZb8YCGdvsNO3P.jpg'"},slot:"cover"}),e._v(" "),s("a-card-meta",{staticStyle:{"white-space":"nowrap",height:"50px"},attrs:{title:t.moviename}},[s("template",{slot:"description"},[e._v(e._s(t.movietype))])],2)],1)],1)}}])}),e._v(" "),s("a-pagination",{attrs:{defaultPageSize:24,total:e.allcount},on:{change:e.onchange},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1)]),e._v(" "),s("a-layout-footer",{staticStyle:{textAlign:"center"}},[e._v("电影大全 ©2019 Created by 91uwp.com")])],1)],1),e._v(" "),s("div",{staticClass:"menu1"},[s("a-button",{staticStyle:{margin:"16px"},attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[s("a-icon",{attrs:{type:e.collapsed?"menu-unfold":"menu-fold"}})],1),e._v(" "),s("a-menu",{staticStyle:{height:"100%"},attrs:{theme:"dark",mode:"inline",inlineCollapsed:e.collapsed,defaultSelectedKeys:["剧情"]},on:{select:e.onselect}},[s("a-menu-item",{key:"剧情"},[s("span",{staticClass:"nav-text"},[e._v("剧情")])]),e._v(" "),s("a-menu-item",{key:"喜剧"},[s("span",{staticClass:"nav-text"},[e._v("喜剧")])]),e._v(" "),s("a-menu-item",{key:"动作"},[s("span",{staticClass:"nav-text"},[e._v("动作")])]),e._v(" "),s("a-menu-item",{key:"爱情"},[s("span",{staticClass:"nav-text"},[e._v("爱情")])]),e._v(" "),s("a-menu-item",{key:"犯罪"},[s("span",{staticClass:"nav-text"},[e._v("犯罪")])]),e._v(" "),s("a-menu-item",{key:"冒险"},[s("span",{staticClass:"nav-text"},[e._v("冒险")])])],1)],1),e._v(" "),s("a-drawer",{attrs:{title:"电影搜索",placement:"top",height:"100%",closable:!1,visible:e.visible},on:{close:e.onClose}},[s("div",[s("a-input-search",{staticStyle:{width:"100%"},attrs:{placeholder:"Search..."},on:{search:e.onsearch}}),e._v(" "),s("div",{staticStyle:{"overflow-y":"auto","overflow-x":"hidden",height:"80vh",position:"relative","padding-top":"8px"}},[s("a-list",{attrs:{loading:e.isloading1,grid:{gutter:4,xs:2,sm:3,md:4,lg:6,xl:6,xxl:6},dataSource:e.data1},scopedSlots:e._u([{key:"renderItem",fn:function(t){return s("a-list-item",{on:{"":function(e){}}},[s("a-card",{staticStyle:{"text-align":"left"},attrs:{hoverable:""},on:{click:function(s){return e.onclick(t.movieid)}}},[s("img",{staticStyle:{},attrs:{slot:"cover",src:"http://super-search.u.qiniudn.com/king"+t.movieid+"_DetailCoverimg.jpg",onError:"this.src='https://i.loli.net/2019/08/30/AnZb8YCGdvsNO3P.jpg'"},slot:"cover"}),e._v(" "),s("a-card-meta",{staticStyle:{"white-space":"nowrap",height:"50px"},attrs:{title:t.moviename}},[s("template",{slot:"description"},[e._v(e._s(t.movietype+" "))])],2)],1)],1)}}])})],1),e._v(" "),s("div",{staticStyle:{position:"absolute",bottom:"30px","text-align":"center","margin-left":"auto","margin-right":"auto",width:"100%",left:"0",right:"0"}},[s("a-button",{attrs:{shape:"circle",icon:"close"},on:{click:function(t){e.visible=!1}}})],1)],1)])],1)},staticRenderFns:[]};var u=s("VU/8")(r,c,!1,function(e){s("U6f1")},null,null).exports,p=(s("g3Gj"),s("iqGf")),d=(s("Y3H9"),{data:function(){return{sublist:[],defaultValue:null,visible:!1,title:"",m3u8list:[],menus:{},playerOptions:{fluid:!1,autoplay:!1,sources:null,poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},components:{videoPlayer:p.videoPlayer},created:function(){this.getdata(this.$route.query.id)},methods:{getdata:function(e){var t=this;t.axios.get("https://service-ny42jrk1-1251342364.ap-shanghai.apigateway.myqcloud.com/release/getvideo?movieid="+e).then(function(e){var s=[],n=[];t.title=e.data.title;var i=e.data.m3u8list;for(var a in i){var o=parseInt(a)+1;n.push({a1:"源"+o,a2:i[a]}),s.push({type:"",src:i[a]})}n!=[]&&(t.defaultValue=n[0].a1),t.m3u8list=n,t.getsub(t.title),t.playerOptions.sources=s,t.playerOptions.autoplay=!0,console.log(t.playerOptions.sources)})},getsub:function(e){var t=this;t.axios.get("https://service-ny42jrk1-1251342364.ap-shanghai.apigateway.myqcloud.com/release/getsearch?keyword="+e.substring(0,1)+"&num=5").then(function(e){t.sublist=JSON.parse(e.data).results})},onclick:function(){this.$router.push({name:"HelloWorld"})},onclick2:function(e){this.$router.push({name:"VideoPlayer",query:{id:e}}),this.getdata(e)},handleChange:function(e){console.log(e),this.playerOptions.sources={type:"",src:e}}}}),m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-layout",{attrs:{id:"components-layout-demo-fixed"}},[s("a-layout-content",{style:{marginTop:"0"}},[s("div",[s("div",{staticClass:"custom-video-outer-box"},[s("videoPlayer",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:e.playerOptions,playsinline:!0}})],1),e._v(" "),s("div",{staticStyle:{"text-align":"left",padding:"8px","font-weight":"bold","font-size":"20px",color:"black"}},[e._v(e._s(e.title))]),e._v(" "),s("div",{staticStyle:{"text-align":"left",padding:"8px","font-weight":"bold","font-size":"18px",color:"#444"}},[e._v("相关推荐")]),e._v(" "),e._l(e.sublist,function(t){return s("div",{key:t,on:{click:function(s){return e.onclick2(t.movieid)}}},[s("div",{staticStyle:{"text-align":"left",color:"#444",background:"white",margin:"4px 8px"}},[s("a-row",[s("a-col",{attrs:{span:6}},[s("img",{staticStyle:{width:"100%"},attrs:{src:"http://super-search.u.qiniudn.com/king"+t.movieid+"_DetailCoverimg.jpg",onError:"this.src='https://i.loli.net/2019/08/30/AnZb8YCGdvsNO3P.jpg'",alt:""}})]),e._v(" "),s("a-col",{attrs:{span:18}},[s("div",{staticStyle:{"padding-left":"8px"}},[s("div",{staticStyle:{"font-size":"16px",color:"#333","padding-bottom":"20px","padding-top":"8px","font-weight":"bold"}},[e._v(e._s(t.moviename))]),e._v(" "),s("div",{staticClass:"a2"},[e._v(e._s(t.movietype))])])])],1)],1)])})],2)]),e._v(" "),s("a-layout-footer",{staticStyle:{textAlign:"center"}},[e._v("电影大全 ©2019 Created by 91uwp.com")])],1),e._v(" "),s("div",{staticClass:"menu1",on:{click:e.onclick}},[s("div",{staticClass:"sss",staticStyle:{margin:"16px"}},[s("a-icon",{staticStyle:{"font-size":"18px",color:"white","padding-top":"10px"},attrs:{type:"home"}}),e._v(" "),s("div",{staticStyle:{"font-size":"12px"}},[e._v("主页")])],1)])],1)},staticRenderFns:[]};var v=s("VU/8")(d,m,!1,function(e){s("rCw3"),s("POlL"),s("W+RG"),s("J0YL")},"data-v-e4dd57cc",null).exports;n.a.use(l.a);var g=new l.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/player",name:"VideoPlayer",component:v}]}),h=(s("hZ/y"),s("2vhu")),j=s("mtWM"),y=s.n(j),f=s("Rf8U"),b=s.n(f);n.a.use(b.a,y.a),n.a.config.productionTip=!1,n.a.use(h.a),new n.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},POlL:function(e,t){},U6f1:function(e,t){},"W+RG":function(e,t){},XN5v:function(e,t){e.exports={name:"ant-design-vue",version:"1.3.10",title:"Ant Design Vue",description:"An enterprise-class UI design language and Vue-based implementation",keywords:["ant","design","antd","vue","vueComponent","component","components","ui","framework","frontend"],main:"lib/index.js",module:"es/index.js",typings:"types/index.d.ts",files:["dist","lib","es","types"],scripts:{dev:"cross-env NODE_ENV=development ENTRY_INDEX=dev ./node_modules/.bin/webpack-dev-server --open --hot --port 3001",start:"cross-env NODE_ENV=development ./node_modules/.bin/webpack-dev-server --open --hot",test:"cross-env NODE_ENV=test jest --config .jest.js",site:"node scripts/run.js _site",copy:"node scripts/run.js copy-html",compile:"node antd-tools/cli/run.js compile",pub:"node antd-tools/cli/run.js pub","pub-with-ci":"node antd-tools/cli/run.js pub-with-ci",prepublish:"node antd-tools/cli/run.js guard","pre-publish":"node ./scripts/prepub",dist:"node antd-tools/cli/run.js dist",lint:"eslint -c ./.eslintrc --fix --ext .jsx,.js,.vue ./components","lint:style":'stylelint "{site,components}/**/*.less" --syntax less',commitmsg:"commitlint -x @commitlint/config-conventional -e $GIT_PARAMS",codecov:"codecov",prettier:"node ./scripts/prettier.js"},repository:{type:"git",url:"git+https://github.com/vueComponent/ant-design-vue.git"},license:"MIT",bugs:{url:"https://github.com/vueComponent/ant-design-vue/issues"},homepage:"https://vue.ant.design/","pre-commit":["lint","prettier"],peerDependencies:{vue:">=2.5.0","vue-template-compiler":">=2.5.0"},devDependencies:{"@commitlint/cli":"^6.2.0","@commitlint/config-conventional":"^6.1.3","@octokit/rest":"^15.4.1","@vue/cli-plugin-eslint":"^3.0.5","@vue/server-test-utils":"1.0.0-beta.16","@vue/test-utils":"1.0.0-beta.16",acorn:"^6.0.5",autoprefixer:"^9.6.0",axios:"^0.18.0","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^10.0.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^23.6.0","babel-loader":"^7.1.2","babel-plugin-import":"^1.1.1","babel-plugin-inline-import-data-uri":"^1.0.1","babel-plugin-istanbul":"^4.1.1","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-es3-member-expression-literals":"^6.22.0","babel-plugin-transform-es3-property-literals":"^6.22.0","babel-plugin-transform-object-assign":"^6.22.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"~6.23.0","babel-plugin-transform-vue-jsx":"^3.7.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","case-sensitive-paths-webpack-plugin":"^2.1.2",chalk:"^2.3.2",cheerio:"^1.0.0-rc.2",codecov:"^3.0.0",colorful:"^2.1.0",commander:"^2.15.0","compare-versions":"^3.3.0","cross-env":"^5.1.4","css-loader":"^0.28.7","deep-assign":"^2.0.0","enquire-js":"^0.2.1",eslint:"^5.8.0","eslint-config-prettier":"^3.0.1","eslint-plugin-html":"^3.2.2","eslint-plugin-vue":"^5.1.0","fetch-jsonp":"^1.1.3","fs-extra":"^7.0.0",glob:"^7.1.2",gulp:"^3.9.1","gulp-babel":"^7.0.0","gulp-strip-code":"^0.1.4","highlight.js":"^9.12.0","html-webpack-plugin":"^3.2.0",husky:"^0.14.3","istanbul-instrumenter-loader":"^3.0.0",jest:"^24.0.0","jest-serializer-vue":"^1.0.0","js-base64":"^2.4.8",jsonp:"^0.2.1",less:"^3.9.0","less-loader":"^4.1.0","less-plugin-npm-import":"^2.1.0","lint-staged":"^7.2.2","markdown-it":"^8.4.0","markdown-it-anchor":"^4.0.0",marked:"^0.3.7",merge2:"^1.2.1","mini-css-extract-plugin":"^0.5.0",minimist:"^1.2.0",mkdirp:"^0.5.1",mockdate:"^2.0.2",nprogress:"^0.2.0","optimize-css-assets-webpack-plugin":"^5.0.1",postcss:"^7.0.6","postcss-loader":"^3.0.0","pre-commit":"^1.2.2",prettier:"^1.15.3",querystring:"^0.2.0","raw-loader":"^1.0.0-beta.0",reqwest:"^2.0.5",rimraf:"^2.6.2","rucksack-css":"^1.0.2","selenium-server":"^3.0.1",semver:"^5.3.0","style-loader":"^0.18.2",stylelint:"^9.10.1","stylelint-config-prettier":"^4.0.0","stylelint-config-standard":"^18.2.0",through2:"^2.0.3","uglifyjs-webpack-plugin":"^2.1.1","url-loader":"^1.1.2",vue:"^2.6.10","vue-antd-md-loader":"^1.1.0","vue-clipboard2":"0.0.8","vue-eslint-parser":"^5.0.0","vue-i18n":"^8.3.2","vue-infinite-scroll":"^2.0.2","vue-jest":"^2.5.0","vue-loader":"^15.5.1","vue-router":"^3.0.1","vue-server-renderer":"^2.5.16","vue-template-compiler":"^2.6.10","vue-virtual-scroller":"^0.12.0",vuex:"^3.1.0",webpack:"^4.28.4","webpack-cli":"^3.2.1","webpack-dev-server":"^3.1.14","webpack-merge":"^4.1.1",webpackbar:"^3.1.5"},dependencies:{"@ant-design/icons":"^1.1.15","@ant-design/icons-vue":"^1.0.1","add-dom-event-listener":"^1.0.2","array-tree-filter":"^2.1.0","async-validator":"^1.8.2","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-runtime":"6.x",classnames:"^2.2.5","component-classes":"^1.2.6","dom-align":"^1.7.0","dom-closest":"^0.2.0","dom-scroll-into-view":"^1.2.1","enquire.js":"^2.1.6",intersperse:"^1.0.0","is-negative-zero":"^2.0.0",ismobilejs:"^0.5.1",json2mq:"^0.2.0",lodash:"^4.17.5",moment:"^2.21.0","mutationobserver-shim":"^0.3.2","omit.js":"^1.0.0",raf:"^3.4.0","resize-observer-polyfill":"^1.5.1","shallow-equal":"^1.0.0",shallowequal:"^1.0.2","vue-ref":"^1.0.4",warning:"^3.0.0"},sideEffects:["site/*","components/style.js","components/**/style/*","*.vue","*.md","dist/*","es/**/style/*","lib/**/style/*","*.less"]}},g3Gj:function(e,t){},"hZ/y":function(e,t){},"pz/P":function(e,t){},rCw3:function(e,t){},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(e){return s(a(e))}function a(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.5cb66ac55b8a7aa2d0e2.js.map