(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8/JR":function(e,t,n){"use strict";var o=n("8T9/"),r=n("Ibf7");e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var o=arguments.length;if(1===o)delete i[t];else if(0===o)i={};else{var r=i[t];if(!r)return e;r.splice(r.indexOf(n),1)}return e},e.emit=function(){var t=o(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(i[t]||[]).slice(0);return function(){var i=o(arguments),c=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach((function(o){n.async?r(o,i,c):o.apply(c,i),o._once&&e.off(t,o)})),e}},e}},"8T9/":function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},Gjsa:function(e,t){var n="function"==typeof setImmediate;e.exports=n?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,t,n){"use strict";var o=n("Gjsa");e.exports=function(e,t,n){e&&o((function(){e.apply(n||null,t||[])}))}},KRns:function(e,t){var n=global.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},PzH3:function(e,t,n){"use strict";var o=n("KRns"),r=n("Ys8N"),i=global.document,a=function(e,t,n,o){return e.addEventListener(t,n,o)},c=function(e,t,n,o){return e.removeEventListener(t,n,o)},l=[];function s(e,t,n){var o=function(e,t,n){var o,r;for(o=0;o<l.length;o++)if((r=l[o]).element===e&&r.type===t&&r.fn===n)return o}(e,t,n);if(o){var r=l[o].wrapper;return l.splice(o,1),r}}global.addEventListener||(a=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var o=s(e,t,n)||function(e,t,n){return function(t){var o=t||global.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,n.call(e,o)}}(e,0,n);return l.push({wrapper:o,element:e,type:t,fn:n}),o}(e,t,n))},c=function(e,t,n){var o=s(e,t,n);if(o)return e.detachEvent("on"+t,o)}),e.exports={add:a,remove:c,fabricate:function(e,t,n){var a=-1===r.indexOf(t)?new o(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}},YS7c:function(e,t,n){"use strict";var o=n("8/JR"),r=n("PzH3"),i=n("n6yW"),a=document,c=a.documentElement;function l(e,t,n,o){global.navigator.pointerEnabled?r[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],o):global.navigator.msPointerEnabled?r[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],o):(r[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],o),r[t](e,n,o))}function s(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e){var t=e.getBoundingClientRect();return{left:t.left+u("scrollLeft","pageXOffset"),top:t.top+u("scrollTop","pageYOffset")}}function u(e,t){return void 0!==global[t]?global[t]:c.clientHeight?c[e]:a.body[e]}function g(e,t,n){var o,r=e||{},i=r.className;return r.className+=" gu-hide",o=a.elementFromPoint(t,n),r.className=i,o}function h(){return!1}function p(){return!0}function f(e){return e.width||e.right-e.left}function m(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(v(t)))}(e)}function C(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function y(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in n)&&o[e]in n&&(e=o[e]),n[e]}e.exports=function(e,t){var n,u,M,x,O,S,k,w,P,E,_,T=arguments.length;1===T&&!1===Array.isArray(e)&&(t=e,e=[]);var D,N=null,I=t||{};void 0===I.moves&&(I.moves=p),void 0===I.accepts&&(I.accepts=p),void 0===I.invalid&&(I.invalid=V),void 0===I.containers&&(I.containers=e||[]),void 0===I.isContainer&&(I.isContainer=h),void 0===I.copy&&(I.copy=!1),void 0===I.copySortSource&&(I.copySortSource=!1),void 0===I.revertOnSpill&&(I.revertOnSpill=!1),void 0===I.removeOnSpill&&(I.removeOnSpill=!1),void 0===I.direction&&(I.direction="vertical"),void 0===I.ignoreInputTextSelection&&(I.ignoreInputTextSelection=!0),void 0===I.mirrorContainer&&(I.mirrorContainer=a.body);var L=o({containers:I.containers,start:z,end:K,cancel:Z,remove:Q,destroy:$,canMove:W,dragging:!1});return!0===I.removeOnSpill&&L.on("over",re).on("out",ie),R(),L;function H(e){return-1!==L.containers.indexOf(e)||I.isContainer(e)}function R(e){var t=e?"remove":"add";l(c,t,"mousedown",A),l(c,t,"mouseup",U)}function j(e){l(c,e?"remove":"add","mousemove",F)}function Y(e){var t=e?"remove":"add";r[t](c,"selectstart",B),r[t](c,"click",B)}function $(){R(!0),U({})}function B(e){D&&e.preventDefault()}function A(e){if(S=e.clientX,k=e.clientY,1===s(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=X(t);n&&(D=n,j(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function F(e){if(D)if(0!==s(e)){if(void 0===e.clientX||e.clientX!==S||void 0===e.clientY||e.clientY!==k){if(I.ignoreInputTextSelection){var t=y("clientX",e),n=y("clientY",e);if(b(a.elementFromPoint(t,n)))return}var o=D;j(!0),Y(),K(),G(o);var r=d(M);x=y("pageX",e)-r.left,O=y("pageY",e)-r.top,i.add(E||M,"gu-transit"),ae(),oe(e)}}else U({})}function X(e){if(!(L.dragging&&n||H(e))){for(var t=e;v(e)&&!1===H(v(e));){if(I.invalid(e,t))return;if(!(e=v(e)))return}var o=v(e);if(o&&!I.invalid(e,t)&&I.moves(e,o,t,C(e)))return{item:e,source:o}}}function W(e){return!!X(e)}function z(e){var t=X(e);t&&G(t)}function G(e){de(e.item,e.source)&&(E=e.item.cloneNode(!0),L.emit("cloned",E,e.item,"copy")),u=e.source,M=e.item,w=P=C(e.item),L.dragging=!0,L.emit("drag",M,u)}function V(){return!1}function K(){if(L.dragging){var e=E||M;q(e,v(e))}}function J(){D=!1,j(!0),Y(!0)}function U(e){if(J(),L.dragging){var t=E||M,o=y("clientX",e),r=y("clientY",e),i=ne(g(n,o,r),o,r);i&&(E&&I.copySortSource||!E||i!==u)?q(t,i):I.removeOnSpill?Q():Z()}}function q(e,t){var n=v(e);E&&I.copySortSource&&t===u&&n.removeChild(M),te(t)?L.emit("cancel",e,u,u):L.emit("drop",e,t,u,P),ee()}function Q(){if(L.dragging){var e=E||M,t=v(e);t&&t.removeChild(e),L.emit(E?"cancel":"remove",e,t,u),ee()}}function Z(e){if(L.dragging){var t=arguments.length>0?e:I.revertOnSpill,n=E||M,o=v(n),r=te(o);!1===r&&t&&(E?o&&o.removeChild(E):u.insertBefore(n,w)),r||t?L.emit("cancel",n,u,u):L.emit("drop",n,o,u,P),ee()}}function ee(){var e=E||M;J(),ce(),e&&i.rm(e,"gu-transit"),_&&clearTimeout(_),L.dragging=!1,N&&L.emit("out",e,N,u),L.emit("dragend",e),u=M=E=w=P=_=N=null}function te(e,t){var o;return o=void 0!==t?t:n?P:C(E||M),e===u&&o===w}function ne(e,t,n){for(var o=e;o&&!r();)o=v(o);return o;function r(){if(!1===H(o))return!1;var r=le(o,e),i=se(o,r,t,n);return!!te(o,i)||I.accepts(M,o,u,i)}}function oe(e){if(n){e.preventDefault();var t=y("clientX",e),o=y("clientY",e),r=o-O;n.style.left=t-x+"px",n.style.top=r+"px";var i=E||M,a=g(n,t,o),c=ne(a,t,o),l=null!==c&&c!==N;(l||null===c)&&(N&&p("out"),N=c,l&&p("over"));var s=v(i);if(c!==u||!E||I.copySortSource){var d,h=le(c,a);if(null!==h)d=se(c,h,t,o);else{if(!0!==I.revertOnSpill||E)return void(E&&s&&s.removeChild(i));d=w,c=u}(null===d&&l||d!==i&&d!==C(i))&&(P=d,c.insertBefore(i,d),L.emit("shadow",i,c,u))}else s&&s.removeChild(i)}function p(e){L.emit(e,i,N,u)}}function re(e){i.rm(e,"gu-hide")}function ie(e){L.dragging&&i.add(e,"gu-hide")}function ae(){if(!n){var e=M.getBoundingClientRect();(n=M.cloneNode(!0)).style.width=f(e)+"px",n.style.height=m(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),I.mirrorContainer.appendChild(n),l(c,"add","mousemove",oe),i.add(I.mirrorContainer,"gu-unselectable"),L.emit("cloned",n,M,"mirror")}}function ce(){n&&(i.rm(I.mirrorContainer,"gu-unselectable"),l(c,"remove","mousemove",oe),v(n).removeChild(n),n=null)}function le(e,t){for(var n=t;n!==e&&v(n)!==e;)n=v(n);return n===c?null:n}function se(e,t,n,o){var r,i="horizontal"===I.direction;return t!==e?(r=t.getBoundingClientRect(),(i?n>r.left+f(r)/2:o>r.top+m(r)/2)?C(t):t):function(){var t,r,a,c=e.children.length;for(t=0;t<c;t++){if(a=(r=e.children[t]).getBoundingClientRect(),i&&a.left+a.width/2>n)return r;if(!i&&a.top+a.height/2>o)return r}return null}()}function de(e,t){return"boolean"==typeof I.copy?I.copy:I.copy(e,t)}}},Ys8N:function(e,t,n){"use strict";var o=[],r="",i=/^on/;for(r in global)i.test(r)&&o.push(r.slice(2));e.exports=o},a1rO:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),r=n("tyNb"),i=n("YS7c"),a=n.n(i),c=n("fXoL"),l=n("XNiG"),s=n("quSY"),d=n("pLZG"),u=n("lJxs");class g{constructor(e,t,n){this.name=e,this.drake=t,this.options=n,this.initEvents=!1}}const h={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},p=Object.keys(h).map(e=>h[e]),f=a.a||i;class m{constructor(e=f){this.build=e}}const v=(e,t,n)=>o=>o.pipe(Object(d.a)(({event:n,name:o})=>n===e&&(void 0===t||o===t)),Object(u.a)(({name:e,args:t})=>n(e,t))),b=(e,[t,n,o])=>({name:e,el:t,container:n,source:o});let C=(()=>{class e{constructor(e=null){this.drakeFactory=e,this.dispatch$=new l.a,this.drag=e=>this.dispatch$.pipe(v(h.Drag,e,(e,[t,n])=>({name:e,el:t,source:n}))),this.dragend=e=>this.dispatch$.pipe(v(h.DragEnd,e,(e,[t])=>({name:e,el:t}))),this.drop=e=>this.dispatch$.pipe(v(h.Drop,e,(e,[t,n,o,r])=>({name:e,el:t,target:n,source:o,sibling:r}))),this.elContainerSource=e=>t=>this.dispatch$.pipe(v(e,t,b)),this.cancel=this.elContainerSource(h.Cancel),this.remove=this.elContainerSource(h.Remove),this.shadow=this.elContainerSource(h.Shadow),this.over=this.elContainerSource(h.Over),this.out=this.elContainerSource(h.Out),this.cloned=e=>this.dispatch$.pipe(v(h.Cloned,e,(e,[t,n,o])=>({name:e,clone:t,original:n,cloneType:o}))),this.dropModel=e=>this.dispatch$.pipe(v(h.DropModel,e,(e,[t,n,o,r,i,a,c,l,s])=>({name:e,el:t,target:n,source:o,sibling:r,item:i,sourceModel:a,targetModel:c,sourceIndex:l,targetIndex:s}))),this.removeModel=e=>this.dispatch$.pipe(v(h.RemoveModel,e,(e,[t,n,o,r,i,a])=>({name:e,el:t,container:n,source:o,item:r,sourceModel:i,sourceIndex:a}))),this.groups={},null===this.drakeFactory&&(this.drakeFactory=new m)}add(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}find(e){return this.groups[e]}destroy(e){let t=this.find(e);t&&(t.drake&&t.drake.destroy(),delete this.groups[e])}createGroup(e,t){return this.add(new g(e,this.drakeFactory.build([],t),t))}handleModels({name:e,drake:t,options:n}){let o,r,i;t.on("remove",(n,o,i)=>{if(!t.models)return;let a=t.models[t.containers.indexOf(i)];a=a.slice(0);const c=a.splice(r,1)[0];this.dispatch$.next({event:h.RemoveModel,name:e,args:[n,o,i,c,a,r]})}),t.on("drag",(e,n)=>{t.models&&(o=e,r=this.domIndexOf(e,n))}),t.on("drop",(a,c,l,s)=>{if(!t.models||!c)return;i=this.domIndexOf(a,c);let d,u=t.models[t.containers.indexOf(l)],g=t.models[t.containers.indexOf(c)];if(c===l)u=u.slice(0),d=u.splice(r,1)[0],u.splice(i,0,d),g=u;else{let e=o!==a;if(d=u[r],e){if(!n.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");d=n.copyItem(d)}if(e||(u=u.slice(0),u.splice(r,1)),g=g.slice(0),g.splice(i,0,d),e)try{c.removeChild(a)}catch(p){}}this.dispatch$.next({event:h.DropModel,name:e,args:[a,c,l,s,d,u,g,r,i]})})}setupEvents(e){if(e.initEvents)return;e.initEvents=!0;const t=e.name;p.forEach(n=>{e.drake.on(n,(...e)=>{this.dispatch$.next({event:n,name:t,args:e})})})}domIndexOf(e,t){return Array.prototype.indexOf.call(t.children,e)}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(m,8))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac}),e})(),y=(()=>{class e{constructor(e,t){this.el=e,this.dragulaService=t,this.dragulaModelChange=new c.n}get container(){return this.el&&this.el.nativeElement}ngOnChanges(e){if(e&&e.dragula){const{previousValue:t,currentValue:n}=e.dragula;let o=!!n;!!t&&this.teardown(t),o&&this.setup()}else if(e&&e.dragulaModel){const{previousValue:t,currentValue:n}=e.dragulaModel,{drake:o}=this.group;if(this.dragula&&o){o.models=o.models||[];let e=o.models.indexOf(t);-1!==e?(o.models.splice(e,1),n&&o.models.splice(e,0,n)):n&&o.models.push(n)}}}setup(){let e=this.dragulaService.find(this.dragula);e||(e=this.dragulaService.createGroup(this.dragula,{})),(e=>{this.dragulaModel&&(e.drake.models?e.drake.models.push(this.dragulaModel):e.drake.models=[this.dragulaModel])})(e),e.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=e}subscribe(e){this.subs=new s.a,this.subs.add(this.dragulaService.dropModel(e).subscribe(({source:e,target:t,sourceModel:n,targetModel:o})=>{e===this.el.nativeElement?this.dragulaModelChange.emit(n):t===this.el.nativeElement&&this.dragulaModelChange.emit(o)})),this.subs.add(this.dragulaService.removeModel(e).subscribe(({source:e,sourceModel:t})=>{e===this.el.nativeElement&&this.dragulaModelChange.emit(t)}))}teardown(e){this.subs&&this.subs.unsubscribe();const t=this.dragulaService.find(e);if(t){const e=t.drake.containers.indexOf(this.el.nativeElement);if(-1!==e&&t.drake.containers.splice(e,1),this.dragulaModel&&t.drake&&t.drake.models){let e=t.drake.models.indexOf(this.dragulaModel);-1!==e&&t.drake.models.splice(e,1)}}}ngOnDestroy(){this.teardown(this.dragula)}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(c.l),c.Nb(C))},e.\u0275dir=c.Ib({type:e,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[c.zb()]}),e})(),M=(()=>{class e{static forRoot(){return{ngModule:e,providers:[C]}}}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)}}),e})();var x=n("PCNd"),O=n("jhN1"),S=n("8YY3"),k=n("/t3+"),w=n("bTqV");const P=["itemElement"];function E(e,t){if(1&e&&(c.Tb(0,"div",12),c.Tb(1,"h2"),c.zc(2),c.Sb(),c.Sb()),2&e){const e=t.$implicit,n=t.index,o=c.ec();c.lc("id","",n,"_header"),c.jc("ngStyle",o.getHeaderHeight()),c.Bb(2),c.Ac(e.title)}}function _(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",15,16),c.bc("dblclick",(function(){c.rc(e);const n=t.index,o=c.ec().index;return c.ec().enableEdit(o,n)}))("keydown.enter",(function(n){c.rc(e);const o=t.index,r=c.ec().index;return c.ec().updateItem(r,o,n)})),c.zc(2),c.Sb()}if(2&e){const e=t.$implicit,n=t.index,o=c.ec().index,r=c.ec();c.mc("id","pipe",o,"_child",n,""),c.jc("ngStyle",r.getEditableStyle()),c.Bb(2),c.Bc(" ",e," ")}}function T(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",13),c.bc("dragulaModelChange",(function(n){return c.rc(e),t.$implicit.items=n})),c.xc(1,_,3,4,"div",14),c.Sb()}if(2&e){const e=t.$implicit,n=t.index,o=c.ec();c.lc("id","",n,"_pipe"),c.jc("dragulaModel",e.items)("ngStyle",o.getContainerStyle(e)),c.Bb(1),c.jc("ngForOf",e.items)}}const D=[{id:1,title:"Process",items:["Commit Code","PUSH Hooks","RUN CI","Deploy Dev","E2E Test","Manual Test","Deploy UAT","Manual Test","Go-Live Apply","Go-Live"],backgroundColor:"#00a300",textColor:"#ffffff"},{id:2,title:"People",items:[""],backgroundColor:"#ff0097",textColor:"#ffffff"},{id:3,title:"Tooling",items:["Git & GitHub","Git","Jenkins","","","","",""],backgroundColor:"#99b433",textColor:"#ffffff"},{id:4,title:"Artifacts",items:["Code","","Build Log","","","","","","",""],backgroundColor:"#1e7145",textColor:"#ffffff"},{id:5,title:"Pain",items:[""],backgroundColor:"#00aba9",textColor:"#ffffff"},{id:6,title:"Duration",items:[""],backgroundColor:"#ffc40d",textColor:"#ffffff"}];let N=(()=>{class e{constructor(e,t){this.storage=e,this.renderer=t,this.pipeData=D}ngOnInit(){this.maxLength=this.getMaxLength(this.pipeData),this.storage.get("ledge.path").subscribe(e=>{e?(this.pipeData=e,this.fillDefaultValue()):this.fillDefaultValue()})}fillDefaultValue(){this.pipeData=this.fillArrayWithEmpty(this.pipeData)}fillArrayWithEmpty(e){for(let t=0;t<e.length;t++){const n=e[t].items.length;for(let o=0;o<=this.maxLength;o++)o>n&&(e[t].items[o-1]="")}return e}addColumn(){this.maxLength++,this.pipeData=this.fillArrayWithEmpty(this.pipeData)}removeColumn(){if(this.pipeData.length<=0)return;const e=this;this.maxLength--,this.pipeData=function(t){for(let n=0;n<t.length;n++)for(let o=0;o<=e.maxLength;o++)o>e.maxLength-1&&t[n].items.splice(-1,1);return t}(this.pipeData)}getContainerStyle(e){const{itemWidth:t,containerHeight:n}=this.getContainerHeightWidth();return{minWidth:this.maxLength*(t+21)+"px",height:n,background:e.backgroundColor,color:e.textColor}}getContainerHeightWidth(){let e=(window.innerWidth-200)/this.maxLength-20;return e<100&&(e=100),{itemWidth:e,containerHeight:e+20+2+"px",itemHeightPx:e+"px"}}getEditableStyle(){const e=this.getContainerHeightWidth().itemHeightPx;return{height:e,width:e}}getHeaderHeight(){return{height:this.getContainerHeightWidth().itemWidth+20+12+"px"}}getMaxLength(e){let t=e[0].items.length;for(let n=0;n<e.length;n++){const o=e[n].items.length;o>t&&(t=o)}return t}updateItem(e,t,n){this.pipeData[e].items[t]=n.target.innerText,this.storage.set("ledge.path",this.pipeData).subscribe(()=>{})}enableEdit(e,t){const n=`pipe${e}_child${t}`,o=this.itemElements.filter(e=>e.nativeElement.id===n);o.length>0&&this.renderer.setProperty(o[0].nativeElement,"contentEditable",!0)}resetAll(){this.pipeData=D,this.maxLength=this.getMaxLength(D),this.fillDefaultValue(),this.storage.set("ledge.path",this.pipeData).subscribe(()=>{})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(S.a),c.Nb(c.E))},e.\u0275cmp=c.Hb({type:e,selectors:[["component-path"]],viewQuery:function(e,t){var n;1&e&&c.Dc(P,!0),2&e&&c.oc(n=c.cc())&&(t.itemElements=n)},decls:25,vars:3,consts:[[1,"path"],[1,"header","markdown"],[1,"spacer"],[1,"right"],["color","warn","mat-raised-button","",3,"click"],["color","accent","mat-raised-button","",3,"disabled","click"],["color","primary","mat-raised-button","",3,"click"],[1,"page"],["id","pipe-header"],["class","pipe-header",3,"id","ngStyle",4,"ngFor","ngForOf"],["id","pipe",1,"wrapper"],["class","container","dragula","ITEMS",3,"id","dragulaModel","ngStyle","dragulaModelChange",4,"ngFor","ngForOf"],[1,"pipe-header",3,"id","ngStyle"],["dragula","ITEMS",1,"container",3,"id","dragulaModel","ngStyle","dragulaModelChange"],["class","editable","ngDefaultControl","",3,"id","ngStyle","dblclick","keydown.enter",4,"ngFor","ngForOf"],["ngDefaultControl","",1,"editable",3,"id","ngStyle","dblclick","keydown.enter"],["itemElement",""]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"h3"),c.zc(3,"Path to Production"),c.Sb(),c.Sb(),c.Tb(4,"mat-toolbar"),c.Tb(5,"mat-toolbar-row"),c.Ob(6,"span"),c.Ob(7,"span",2),c.Tb(8,"div",3),c.Tb(9,"button",4),c.bc("click",(function(){return t.resetAll()})),c.zc(10,"Reset"),c.Sb(),c.Tb(11,"span",2),c.zc(12,"\xa0"),c.Sb(),c.Tb(13,"button",5),c.bc("click",(function(){return t.removeColumn()})),c.zc(14,"Remove"),c.Sb(),c.Tb(15,"span",2),c.zc(16,"\xa0"),c.Sb(),c.Tb(17,"button",6),c.bc("click",(function(){return t.addColumn()})),c.zc(18,"Add"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(19,"div",7),c.Tb(20,"div",0),c.Tb(21,"div",8),c.xc(22,E,3,3,"div",9),c.Sb(),c.Tb(23,"div",10),c.xc(24,T,2,4,"div",11),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.Bb(13),c.jc("disabled",0===t.maxLength),c.Bb(9),c.jc("ngForOf",t.pipeData),c.Bb(2),c.jc("ngForOf",t.pipeData))},directives:[k.a,k.c,w.b,o.j,o.l,y],styles:["#pipe[_ngcontent-%COMP%]{position:relative;float:right;display:inline-block;width:calc(100% - 138px);max-width:100%;height:180px;padding-right:32px}.header[_ngcontent-%COMP%]{margin-top:1em}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{padding:0;margin-right:6px;margin-top:12px;background-color:hsla(0,0%,100%,.2);max-width:100%;width:100%;color:#fff;line-height:1.3em;border:1px dashed #fff;border-radius:6px;font-weight:400}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:150px;max-height:150px;width:10%;max-width:10%}.container[_ngcontent-%COMP%]:nth-child(odd), .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .gu-mirror[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.2)}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .gu-mirror[_ngcontent-%COMP%]{margin:10px;padding:5px;transition:opacity .4s ease-in-out}.container[_ngcontent-%COMP%] > div.empty[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05)}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;overflow-y:auto;cursor:move;cursor:grab;cursor:-webkit-grab}.gu-mirror[_ngcontent-%COMP%]{cursor:grabbing;cursor:-webkit-grabbing}#header[_ngcontent-%COMP%]{height:80px;text-align:center}#header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:80px}#pipe-header[_ngcontent-%COMP%]{position:absolute;left:20px}.pipe-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:relative;top:calc(50% - 1.6rem)}.add-item[_ngcontent-%COMP%]{right:4rem}.add-item[_ngcontent-%COMP%], .download[_ngcontent-%COMP%]{top:3rem;position:absolute}.download[_ngcontent-%COMP%]{right:35rem}.remove-column[_ngcontent-%COMP%]{top:3rem;position:absolute;right:18rem}#color-green[_ngcontent-%COMP%]{background-color:#00a300}#color-greendark[_ngcontent-%COMP%]{background-color:#1e7145}#color-greenlight[_ngcontent-%COMP%]{background-color:#99b433}#color-magenta[_ngcontent-%COMP%]{background-color:#ff0097}#color-purplelight[_ngcontent-%COMP%]{background-color:#9f00a7}#color-purple[_ngcontent-%COMP%]{background-color:#7e3878}#color-purpledark[_ngcontent-%COMP%]{background-color:#603cba}#color-darken[_ngcontent-%COMP%]{background-color:#1d1d1d}#color-teal[_ngcontent-%COMP%]{background-color:#00aba9}#color-bluelight[_ngcontent-%COMP%]{background-color:#eff4ff}#color-blue[_ngcontent-%COMP%]{background-color:#2d89ef}#color-bluedark[_ngcontent-%COMP%]{background-color:#2b5797}#color-yellow[_ngcontent-%COMP%]{background-color:#ffc40d}#color-orange[_ngcontent-%COMP%]{background-color:#e3a21a}#color-orangedark[_ngcontent-%COMP%]{background-color:#da532c}#color-red[_ngcontent-%COMP%]{background-color:#b91d47}#color-redlight[_ngcontent-%COMP%]{background-color:#e11}#color-white[_ngcontent-%COMP%]{background-color:#fff}"]}),e})(),I=(()=>{class e{constructor(e){e.setTitle("DevOps \u77e5\u8bc6\u5e73\u53f0 Ledge - \u8bbe\u8ba1 Devops")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(O.d))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-design"]],decls:1,vars:0,template:function(e,t){1&e&&c.Ob(0,"component-path")},directives:[N],styles:[""]}),e})();var L=n("KYhu");n.d(t,"DesignModule",(function(){return H}));let H=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[o.c,x.a,L.a,M.forRoot(),r.e.forChild([{path:"",component:I}])]]}),e})()},n6yW:function(e,t,n){"use strict";var o={};function r(e){var t=o[e];return t?t.lastIndex=0:o[e]=t=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),t}e.exports={add:function(e,t){var n=e.className;n.length?r(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(r(t)," ").trim()}}}}]);