(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CC0K:function(t,e,r){"use strict";r.r(e);var i=r("ofXK"),s=r("tyNb"),n=r("sYmb"),a=r("fXoL"),c=r("jhN1"),o=r("PQSZ");const u=["drawerContent"],p=[{displayName:"DevOps \u6210\u719f\u5ea6\u6a21\u578b",source:"devops"},{displayName:"OWASP \u5b89\u5168\u6210\u719f\u5ea6\u6a21\u578b",source:"owasp"},{displayName:"AMM \u654f\u6377\u6210\u719f\u5ea6\u6a21\u578b",source:"amm"},{displayName:"\u67b6\u6784\u6210\u719f\u5ea6\u6a21\u578b",source:"arch"}];let l=(()=>{class t{constructor(t,e){this.title=t,this.activatedRoute=e,this.items=p,this.currentUrl="/maturity",this.urlPrefix="maturities"}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{const e=t.get("name"),r=this.items.find(t=>t.source===e);this.title.setTitle(`DevOps ${r.displayName} \u68c0\u67e5\u6e05\u5355 - Ledge DevOps \u77e5\u8bc6\u5e73\u53f0`),this.currentSource=e})}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(c.d),a.Ob(s.a))},t.\u0275cmp=a.Ib({type:t,selectors:[["app-maturity"]],viewQuery:function(t,e){var r;1&t&&a.Mc(u,!0),2&t&&a.tc(r=a.dc())&&(e.drawerContent=r.first)},decls:1,vars:4,consts:[[3,"items","currentUrl","urlPrefix","source"]],template:function(t,e){1&t&&a.Pb(0,"ledge-multiple-docs",0),2&t&&a.lc("items",e.items)("currentUrl",e.currentUrl)("urlPrefix",e.urlPrefix)("source",e.currentSource)},directives:[o.a],styles:[".maturity[_ngcontent-%COMP%]{width:80%;max-width:1200px;margin:66px auto 0;height:calc(100vh - 66px)}.maturity-outline[_ngcontent-%COMP%]{font-size:20px;text-indent:50px;line-height:30px;padding:50px}"]}),t})();var d=r("KYhu"),m=r("PCNd");r.d(e,"MaturityModule",(function(){return f}));const h=[{path:":name",component:l},{path:"",pathMatch:"full",redirectTo:"devops"}];let f=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},imports:[[i.c,d.a,m.a,s.i.forChild(h),n.b.forChild({isolate:!1})]]}),t})()}}]);