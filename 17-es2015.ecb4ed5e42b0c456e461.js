(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1ibO":function(e,t,r){"use strict";r.r(t);var s=r("ofXK"),i=r("3Pt+"),l=r("tyNb"),c=r("Tlfu"),n=r("fXoL"),o=r("jhN1"),u=r("PQSZ");const a=["drawerContent"],p=[{displayName:"DevOps \u6280\u80fd\u56fe\u8c31",source:"devops-skilltree"},{displayName:"\u67b6\u6784\u6280\u80fd\u56fe\u8c31",source:"arch-skilltree"},{displayName:"\u524d\u7aef\u6280\u80fd\u56fe\u8c31",source:"frontend-skilltree"}];let d=(()=>{class e{constructor(e,t){this.title=e,this.activatedRoute=t,this.items=p,this.currentUrl="/skilltree",this.urlPrefix="skilltrees"}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const t=e.get("skilltree"),r=this.items.find(e=>e.source===t);this.title.setTitle(`DevOps ${r.displayName} \u6280\u80fd\u56fe\u8c31 - Ledge DevOps \u77e5\u8bc6\u5e73\u53f0`),this.currentSource=t})}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(o.d),n.Ob(l.a))},e.\u0275cmp=n.Ib({type:e,selectors:[["app-skill-tree"]],viewQuery:function(e,t){var r;1&e&&n.Mc(a,!0),2&e&&n.tc(r=n.dc())&&(t.drawerContent=r.first)},decls:1,vars:4,consts:[[3,"items","currentUrl","urlPrefix","source"]],template:function(e,t){1&e&&n.Pb(0,"ledge-multiple-docs",0),2&e&&n.lc("items",t.items)("currentUrl",t.currentUrl)("urlPrefix",t.urlPrefix)("source",t.currentSource)},directives:[u.a],styles:[""]}),e})();var f=r("PCNd");r.d(t,"SkillTreeModule",(function(){return m}));const h=[{path:":skilltree",component:d},{path:"",pathMatch:"full",redirectTo:"devops-skilltree"}];let m=(()=>{class e{}return e.\u0275mod=n.Mb({type:e}),e.\u0275inj=n.Lb({factory:function(t){return new(t||e)},imports:[[s.c,i.f,f.a,c.b,l.i.forChild(h)]]}),e})()}}]);