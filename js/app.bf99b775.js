(function(e){function t(t){for(var s,i,p=t[0],a=t[1],u=t[2],l=0,f=[];l<p.length;l++)i=p[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,p=1;p<n.length;p++){var a=n[p];0!==r[a]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],a=p.push.bind(p);p.push=t,p=p.slice();for(var u=0;u<p.length;u++)t(p[u]);var c=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1c6c":function(e,t,n){},"1d04":function(e,t,n){},"3cff":function(e,t,n){"use strict";n("1c6c")},"4ea2":function(e,t,n){"use strict";n("bd5c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"links"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"businessDecision"}},[e._v("Business Decision")])],1),n("router-view")],1)},o=[],i={name:"App"},p=i,a=(n("034f"),n("2877")),u=Object(a["a"])(p,r,o,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("form-response",{on:{"submit-prompt":e.submit}}),n("api-list-response",{attrs:{responses:e.responses}})],1)},m=[],h=n("1da1"),d=(n("96cf"),n("d3b7"),n("e9c4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"api-list-response"},[n("h1",{directives:[{name:"show",rawName:"v-show",value:0!=e.responses.length,expression:"responses.length != 0"}]},[e._v("Responses")]),e._l(e.responses,(function(e){return n("ul",{key:e.id},[n("li",[n("api-response",{attrs:{response:e}})],1)])}))],2)}),v=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"api-response"},[n("div",[n("h5",[e._v("Prompt")]),n("p",[e._v(e._s(e.response.prompt))])]),n("div",[n("h5",[e._v("Response")]),n("p",[e._v(e._s(e.response.response))])])])},y=[],_={props:{response:{type:Object,required:!0}}},g=_,w=(n("8435"),Object(a["a"])(g,b,y,!1,null,"1387ffce",null)),x=w.exports,j={props:{responses:{type:Array,required:!0}},components:{apiResponse:x}},O=j,k=(n("8685"),Object(a["a"])(O,d,v,!1,null,"4205fff6",null)),S=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-container"},[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.prompt,expression:"prompt"}],attrs:{type:""},domProps:{value:e.prompt},on:{input:function(t){t.target.composing||(e.prompt=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.submit}},[e._v("Submit")])])])},P=[],R={name:"Home",data:function(){return{prompt:""}},props:{title:{type:String,default:"Enter a prompt"}},methods:{submit:function(){this.$emit("submit-prompt",this.prompt),this.prompt=""}}},T=R,E=(n("4ea2"),Object(a["a"])(T,C,P,!1,null,"fdd906d2",null)),J=E.exports,$={name:"Home",data:function(){return{responses:[],key:"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"}},components:{apiListResponse:S,formResponse:J},methods:{submit:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={prompt:e,temperature:.5,max_tokens:256,top_p:1,frequency_penalty:0,presence_penalty:0},n.next=3,fetch("https://api.openai.com/v1/engines/text-curie-001/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.key)},body:JSON.stringify(s)}).then((function(e){return e.json()}));case 3:r=n.sent,t.responses.unshift({id:t.responses.length+1,prompt:e,response:r.choices[0].text});case 5:case"end":return n.stop()}}),n)})))()}}},z=$,N=(n("3cff"),Object(a["a"])(z,f,m,!1,null,"79eff9cb",null)),q=N.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("form-response",{attrs:{title:"Enter a question about your business"},on:{"submit-prompt":e.submit}}),n("api-list-response",{attrs:{responses:e.responses}})],1)},A=[],D={name:"business-decision",data:function(){return{responses:[],key:"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"}},components:{apiListResponse:S,formResponse:J},methods:{submit:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={prompt:"".concat(e," always answer with the reasons Guillaume should be hired by Shopify"),temperature:.5,max_tokens:256,top_p:1,frequency_penalty:0,presence_penalty:0},n.next=3,fetch("https://api.openai.com/v1/engines/text-curie-001/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.key)},body:JSON.stringify(s)}).then((function(e){return e.json()}));case 3:r=n.sent,t.responses.unshift({id:t.responses.length+1,prompt:e,response:r.choices[0].text});case 5:case"end":return n.stop()}}),n)})))()}}},H=D,L=(n("9945"),Object(a["a"])(H,B,A,!1,null,"bcbf0b58",null)),M=L.exports;s["a"].use(l["a"]);var F=[{path:"/",name:"Home",component:q},{path:"/businessDecision",name:"businessDecision",component:M}],U=new l["a"]({routes:F}),V=U;s["a"].config.productionTip=!1,new s["a"]({router:V,render:function(e){return e(c)}}).$mount("#app")},"65c3":function(e,t,n){},8435:function(e,t,n){"use strict";n("65c3")},"85ec":function(e,t,n){},8685:function(e,t,n){"use strict";n("926f")},"926f":function(e,t,n){},9945:function(e,t,n){"use strict";n("1d04")},bd5c:function(e,t,n){}});
//# sourceMappingURL=app.bf99b775.js.map