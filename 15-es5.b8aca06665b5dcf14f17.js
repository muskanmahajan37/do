function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{cpjc:function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),r=n("KYhu"),i=n("PCNd"),c=n("tyNb"),s=n("mrSG"),o=n("tk/3"),u=[{displayName:"\u9700\u6c42\u7ba1\u7406",source:"ba"},{displayName:"\u8d28\u91cf\u7ba1\u7406",source:"qa",default:!0},{displayName:"Android",source:"mobile-android"},{displayName:"\u524d\u7aef",source:"frontend"}],l=n("fXoL"),f=n("jhN1"),d=n("GWUB");function p(e,t){if(1&e&&(l.Ub(0,"div"),l.Pb(1,"component-markdown-render",1),l.Tb()),2&e){var n=l.gc();l.Bb(1),l.lc("data",n.content)}}var h,b=((h=function(){function e(t,n,a){_classCallCheck(this,e),this.title=t,this.activatedRoute=n,this.http=a,this.tanks=u}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){var n=t.get("tank"),a=e.tanks.find((function(e){return e.source===n}));e.title.setTitle("DevOps ".concat(a.displayName," \u667a\u5e93 - Ledge DevOps \u77e5\u8bc6\u5e73\u53f0")),e.configSource(n)}))}},{key:"configSource",value:function(e){this.getCase(e)}},{key:"getCase",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.src=this.buildSrc(e),this.currentSource=e,n=(new o.c).set("Content-Type","text/plain; charset=utf-8"),this.http.get(this.src,{headers:n,responseType:"text"}).subscribe((function(e){a.content=e}));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"buildSrc",value:function(e){return"assets/docs/think-tank/".concat(e,".md")}}]),e}()).\u0275fac=function(e){return new(e||h)(l.Ob(f.d),l.Ob(c.a),l.Ob(o.a))},h.\u0275cmp=l.Ib({type:h,selectors:[["app-think-tank"]],decls:1,vars:1,consts:[[4,"ngIf"],["showToc","true",3,"data"]],template:function(e,t){1&e&&l.Fc(0,p,2,1,"div",0),2&e&&l.lc("ngIf",t.content)},directives:[a.k,d.a],styles:[""]}),h);n.d(t,"ThinkTankModule",(function(){return k}));var v,k=((v=function e(){_classCallCheck(this,e)}).\u0275mod=l.Mb({type:v}),v.\u0275inj=l.Lb({factory:function(e){return new(e||v)},imports:[[a.c,o.b,r.a,i.a,c.i.forChild([{path:":tank",component:b},{path:"",pathMatch:"full",redirectTo:"qa"}])]]}),v)}}]);