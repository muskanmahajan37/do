(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{bqWv:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("3Pt+"),r=n("tyNb"),a=n("AfZv"),o=n("PCNd"),l=n("XNiG"),h=n("EY2u"),c=n("Kj3r"),d=n("/uUt"),u=n("eIep"),p=n("fXoL"),g=n("HDdC");const m=["gutterEls"];function f(e,t){if(1&e){const e=p.dc();p.cc(0,"div",2,3),p.kc("mousedown",(function(t){p.Fc(e);const n=p.oc().index;return p.oc().startDragging(t,2*n+1,n+1)}))("touchstart",(function(t){p.Fc(e);const n=p.oc().index;return p.oc().startDragging(t,2*n+1,n+1)}))("mouseup",(function(t){p.Fc(e);const n=p.oc().index;return p.oc().clickGutter(t,n+1)}))("touchend",(function(t){p.Fc(e);const n=p.oc().index;return p.oc().clickGutter(t,n+1)})),p.Xb(2,"div",4),p.bc()}if(2&e){const e=p.oc().index,t=p.oc();p.Lc("flex-basis",t.gutterSize,"px")("order",2*e+1)}}function A(e,t){1&e&&p.Mc(0,f,3,4,"div",1),2&e&&p.tc("ngIf",!1===t.last)}const b=["*"];function S(e){return void 0!==e.changedTouches&&e.changedTouches.length>0?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:void 0!==e.clientX&&void 0!==e.clientY?{x:e.clientX,y:e.clientY}:null}function z(e,t){const n=e.nativeElement.getBoundingClientRect();return"horizontal"===t?n.width:n.height}function x(e){return"boolean"==typeof e?e:"false"!==e}function v(e,t){return null==e?t:(e=Number(e),!isNaN(e)&&e>=0?e:t)}function y(e,t){if("percent"===e){const e=t.reduce((e,t)=>null!==t?e+t:e,0);return t.every(e=>null!==e)&&e>99.9&&e<100.1}if("pixel"===e)return 1===t.filter(e=>null===e).length}function _(e){return null===e.size?null:!0===e.component.lockSize?e.size:null===e.component.minSize?null:e.component.minSize>e.size?e.size:e.component.minSize}function P(e){return null===e.size?null:!0===e.component.lockSize?e.size:null===e.component.maxSize?null:e.component.maxSize<e.size?e.size:e.component.maxSize}function C(e,t,n,i){return t.reduce((t,n)=>{const s=function(e,t,n,i){return 0===n?{areaSnapshot:t,pixelAbsorb:0,percentAfterAbsorption:t.sizePercentAtStart,pixelRemain:0}:0===t.sizePixelAtStart&&n<0?{areaSnapshot:t,pixelAbsorb:0,percentAfterAbsorption:0,pixelRemain:n}:"percent"===e?function(e,t,n){const i=(e.sizePixelAtStart+t)/n*100;if(t>0){if(null!==e.area.maxSize&&i>e.area.maxSize){const i=e.area.maxSize/100*n;return{areaSnapshot:e,pixelAbsorb:i,percentAfterAbsorption:e.area.maxSize,pixelRemain:e.sizePixelAtStart+t-i}}return{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:i>100?100:i,pixelRemain:0}}if(t<0){if(null!==e.area.minSize&&i<e.area.minSize){const i=e.area.minSize/100*n;return{areaSnapshot:e,pixelAbsorb:i,percentAfterAbsorption:e.area.minSize,pixelRemain:e.sizePixelAtStart+t-i}}return i<0?{areaSnapshot:e,pixelAbsorb:-e.sizePixelAtStart,percentAfterAbsorption:0,pixelRemain:t+e.sizePixelAtStart}:{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:i,pixelRemain:0}}}(t,n,i):"pixel"===e?function(e,t,n){const i=e.sizePixelAtStart+t;return t>0?null!==e.area.maxSize&&i>e.area.maxSize?{areaSnapshot:e,pixelAbsorb:e.area.maxSize-e.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:i-e.area.maxSize}:{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:-1,pixelRemain:0}:t<0?null!==e.area.minSize&&i<e.area.minSize?{areaSnapshot:e,pixelAbsorb:e.area.minSize+t-i,percentAfterAbsorption:-1,pixelRemain:i-e.area.minSize}:i<0?{areaSnapshot:e,pixelAbsorb:-e.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:t+e.sizePixelAtStart}:{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:-1,pixelRemain:0}:void 0}(t,n):void 0}(e,n,t.remain,i);return t.list.push(s),t.remain=s.pixelRemain,t},{remain:n,list:[]})}function E(e,t){"percent"===e?t.areaSnapshot.area.size=t.percentAfterAbsorption:"pixel"===e&&null!==t.areaSnapshot.area.size&&(t.areaSnapshot.area.size=t.areaSnapshot.sizePixelAtStart+t.pixelAbsorb)}let k=(()=>{class e{constructor(e,t,n,i){this.ngZone=e,this.elRef=t,this.cdRef=n,this.renderer=i,this._direction="horizontal",this._unit="percent",this._gutterSize=11,this._gutterStep=1,this._restrictMove=!1,this._useTransition=!1,this._disabled=!1,this._dir="ltr",this._gutterDblClickDuration=0,this.dragStart=new p.p(!1),this.dragEnd=new p.p(!1),this.gutterClick=new p.p(!1),this.gutterDblClick=new p.p(!1),this.dragProgressSubject=new l.a,this.dragProgress$=this.dragProgressSubject.asObservable(),this.isDragging=!1,this.dragListeners=[],this.snapshot=null,this.startPoint=null,this.endPoint=null,this.displayedAreas=[],this.hidedAreas=[],this._clickTimeout=null,this.direction=this._direction}set direction(e){this._direction="vertical"===e?"vertical":"horizontal",this.renderer.addClass(this.elRef.nativeElement,`as-${this._direction}`),this.renderer.removeClass(this.elRef.nativeElement,`as-${"vertical"===this._direction?"horizontal":"vertical"}`),this.build(!1,!1)}get direction(){return this._direction}set unit(e){this._unit="pixel"===e?"pixel":"percent",this.renderer.addClass(this.elRef.nativeElement,`as-${this._unit}`),this.renderer.removeClass(this.elRef.nativeElement,`as-${"pixel"===this._unit?"percent":"pixel"}`),this.build(!1,!0)}get unit(){return this._unit}set gutterSize(e){this._gutterSize=v(e,11),this.build(!1,!1)}get gutterSize(){return this._gutterSize}set gutterStep(e){this._gutterStep=v(e,1)}get gutterStep(){return this._gutterStep}set restrictMove(e){this._restrictMove=x(e)}get restrictMove(){return this._restrictMove}set useTransition(e){this._useTransition=x(e),this._useTransition?this.renderer.addClass(this.elRef.nativeElement,"as-transition"):this.renderer.removeClass(this.elRef.nativeElement,"as-transition")}get useTransition(){return this._useTransition}set disabled(e){this._disabled=x(e),this._disabled?this.renderer.addClass(this.elRef.nativeElement,"as-disabled"):this.renderer.removeClass(this.elRef.nativeElement,"as-disabled")}get disabled(){return this._disabled}set dir(e){this._dir="rtl"===e?"rtl":"ltr",this.renderer.setAttribute(this.elRef.nativeElement,"dir",this._dir)}get dir(){return this._dir}set gutterDblClickDuration(e){this._gutterDblClickDuration=v(e,0)}get gutterDblClickDuration(){return this._gutterDblClickDuration}get transitionEnd(){return new g.a(e=>this.transitionEndSubscriber=e).pipe(Object(c.a)(20))}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>this.renderer.addClass(this.elRef.nativeElement,"as-init"))})}getNbGutters(){return 0===this.displayedAreas.length?0:this.displayedAreas.length-1}addArea(e){const t={component:e,order:0,size:0,minSize:null,maxSize:null};!0===e.visible?(this.displayedAreas.push(t),this.build(!0,!0)):this.hidedAreas.push(t)}removeArea(e){if(this.displayedAreas.some(t=>t.component===e)){const t=this.displayedAreas.find(t=>t.component===e);this.displayedAreas.splice(this.displayedAreas.indexOf(t),1),this.build(!0,!0)}else if(this.hidedAreas.some(t=>t.component===e)){const t=this.hidedAreas.find(t=>t.component===e);this.hidedAreas.splice(this.hidedAreas.indexOf(t),1)}}updateArea(e,t,n){!0===e.visible&&this.build(t,n)}showArea(e){const t=this.hidedAreas.find(t=>t.component===e);if(void 0===t)return;const n=this.hidedAreas.splice(this.hidedAreas.indexOf(t),1);this.displayedAreas.push(...n),this.build(!0,!0)}hideArea(e){const t=this.displayedAreas.find(t=>t.component===e);if(void 0===t)return;const n=this.displayedAreas.splice(this.displayedAreas.indexOf(t),1);n.forEach(e=>{e.order=0,e.size=0}),this.hidedAreas.push(...n),this.build(!0,!0)}getVisibleAreaSizes(){return this.displayedAreas.map(e=>null===e.size?"*":e.size)}setVisibleAreaSizes(e){if(e.length!==this.displayedAreas.length)return!1;const t=e.map(e=>v(e,null));return!1!==y(this.unit,t)&&(this.displayedAreas.forEach((e,n)=>e.component._size=t[n]),this.build(!1,!0),!0)}build(e,t){if(this.stopDragging(),!0===e&&(this.displayedAreas.every(e=>null!==e.component.order)&&this.displayedAreas.sort((e,t)=>e.component.order-t.component.order),this.displayedAreas.forEach((e,t)=>{e.order=2*t,e.component.setStyleOrder(e.order)})),!0===t){const e=y(this.unit,this.displayedAreas.map(e=>e.component.size));switch(this.unit){case"percent":{const t=100/this.displayedAreas.length;this.displayedAreas.forEach(n=>{n.size=e?n.component.size:t,n.minSize=_(n),n.maxSize=P(n)});break}case"pixel":if(e)this.displayedAreas.forEach(e=>{e.size=e.component.size,e.minSize=_(e),e.maxSize=P(e)});else{const e=this.displayedAreas.filter(e=>null===e.component.size);if(0===e.length&&this.displayedAreas.length>0)this.displayedAreas.forEach((e,t)=>{e.size=0===t?null:e.component.size,e.minSize=0===t?null:_(e),e.maxSize=0===t?null:P(e)});else if(e.length>1){let e=!1;this.displayedAreas.forEach(t=>{null===t.component.size?!1===e?(t.size=null,t.minSize=null,t.maxSize=null,e=!0):(t.size=100,t.minSize=null,t.maxSize=null):(t.size=t.component.size,t.minSize=_(t),t.maxSize=P(t))})}}}}this.refreshStyleSizes(),this.cdRef.markForCheck()}refreshStyleSizes(){if("percent"===this.unit)if(1===this.displayedAreas.length)this.displayedAreas[0].component.setStyleFlex(0,0,"100%",!1,!1);else{const e=this.getNbGutters()*this.gutterSize;this.displayedAreas.forEach(t=>{t.component.setStyleFlex(0,0,`calc( ${t.size}% - ${t.size/100*e}px )`,null!==t.minSize&&t.minSize===t.size,null!==t.maxSize&&t.maxSize===t.size)})}else"pixel"===this.unit&&this.displayedAreas.forEach(e=>{null===e.size?e.component.setStyleFlex(1,1,1===this.displayedAreas.length?"100%":"auto",!1,!1):1===this.displayedAreas.length?e.component.setStyleFlex(0,0,"100%",!1,!1):e.component.setStyleFlex(0,0,`${e.size}px`,null!==e.minSize&&e.minSize===e.size,null!==e.maxSize&&e.maxSize===e.size)})}clickGutter(e,t){const n=S(e);this.startPoint&&this.startPoint.x===n.x&&this.startPoint.y===n.y&&(null!==this._clickTimeout?(window.clearTimeout(this._clickTimeout),this._clickTimeout=null,this.notify("dblclick",t),this.stopDragging()):this._clickTimeout=window.setTimeout(()=>{this._clickTimeout=null,this.notify("click",t),this.stopDragging()},this.gutterDblClickDuration))}startDragging(e,t,n){e.preventDefault(),e.stopPropagation(),this.startPoint=S(e),null!==this.startPoint&&!0!==this.disabled&&(this.snapshot={gutterNum:n,lastSteppedOffset:0,allAreasSizePixel:z(this.elRef,this.direction)-this.getNbGutters()*this.gutterSize,allInvolvedAreasSizePercent:100,areasBeforeGutter:[],areasAfterGutter:[]},this.displayedAreas.forEach(e=>{const n={area:e,sizePixelAtStart:z(e.component.elRef,this.direction),sizePercentAtStart:"percent"===this.unit?e.size:-1};e.order<t?!0===this.restrictMove?this.snapshot.areasBeforeGutter=[n]:this.snapshot.areasBeforeGutter.unshift(n):e.order>t&&(!0===this.restrictMove?0===this.snapshot.areasAfterGutter.length&&(this.snapshot.areasAfterGutter=[n]):this.snapshot.areasAfterGutter.push(n))}),this.snapshot.allInvolvedAreasSizePercent=[...this.snapshot.areasBeforeGutter,...this.snapshot.areasAfterGutter].reduce((e,t)=>e+t.sizePercentAtStart,0),0!==this.snapshot.areasBeforeGutter.length&&0!==this.snapshot.areasAfterGutter.length&&(this.dragListeners.push(this.renderer.listen("document","mouseup",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchend",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchcancel",this.stopDragging.bind(this))),this.ngZone.runOutsideAngular(()=>{this.dragListeners.push(this.renderer.listen("document","mousemove",this.dragEvent.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchmove",this.dragEvent.bind(this)))}),this.displayedAreas.forEach(e=>e.component.lockEvents()),this.isDragging=!0,this.renderer.addClass(this.elRef.nativeElement,"as-dragging"),this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.notify("start",this.snapshot.gutterNum)))}dragEvent(e){if(e.preventDefault(),e.stopPropagation(),null!==this._clickTimeout&&(window.clearTimeout(this._clickTimeout),this._clickTimeout=null),!1===this.isDragging)return;if(this.endPoint=S(e),null===this.endPoint)return;let t="horizontal"===this.direction?this.startPoint.x-this.endPoint.x:this.startPoint.y-this.endPoint.y;"rtl"===this.dir&&(t=-t);const n=Math.round(t/this.gutterStep)*this.gutterStep;if(n===this.snapshot.lastSteppedOffset)return;this.snapshot.lastSteppedOffset=n;let i=C(this.unit,this.snapshot.areasBeforeGutter,-n,this.snapshot.allAreasSizePixel),s=C(this.unit,this.snapshot.areasAfterGutter,n,this.snapshot.allAreasSizePixel);if(0!==i.remain&&0!==s.remain?Math.abs(i.remain)===Math.abs(s.remain)||(Math.abs(i.remain)>Math.abs(s.remain)?s=C(this.unit,this.snapshot.areasAfterGutter,n+i.remain,this.snapshot.allAreasSizePixel):i=C(this.unit,this.snapshot.areasBeforeGutter,-(n-s.remain),this.snapshot.allAreasSizePixel)):0!==i.remain?s=C(this.unit,this.snapshot.areasAfterGutter,n+i.remain,this.snapshot.allAreasSizePixel):0!==s.remain&&(i=C(this.unit,this.snapshot.areasBeforeGutter,-(n-s.remain),this.snapshot.allAreasSizePixel)),"percent"===this.unit){const e=[...i.list,...s.list],t=e.find(e=>0!==e.percentAfterAbsorption&&e.percentAfterAbsorption!==e.areaSnapshot.area.minSize&&e.percentAfterAbsorption!==e.areaSnapshot.area.maxSize);t&&(t.percentAfterAbsorption=this.snapshot.allInvolvedAreasSizePercent-e.filter(e=>e!==t).reduce((e,t)=>e+t.percentAfterAbsorption,0))}i.list.forEach(e=>E(this.unit,e)),s.list.forEach(e=>E(this.unit,e)),this.refreshStyleSizes(),this.notify("progress",this.snapshot.gutterNum)}stopDragging(e){if(e&&(e.preventDefault(),e.stopPropagation()),!1!==this.isDragging){for(this.displayedAreas.forEach(e=>e.component.unlockEvents());this.dragListeners.length>0;){const e=this.dragListeners.pop();e&&e()}this.isDragging=!1,!this.endPoint||this.startPoint.x===this.endPoint.x&&this.startPoint.y===this.endPoint.y||this.notify("end",this.snapshot.gutterNum),this.renderer.removeClass(this.elRef.nativeElement,"as-dragging"),this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.snapshot=null,this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.startPoint=null,this.endPoint=null})})}}notify(e,t){const n=this.getVisibleAreaSizes();"start"===e?this.dragStart.emit({gutterNum:t,sizes:n}):"end"===e?this.dragEnd.emit({gutterNum:t,sizes:n}):"click"===e?this.gutterClick.emit({gutterNum:t,sizes:n}):"dblclick"===e?this.gutterDblClick.emit({gutterNum:t,sizes:n}):"transitionEnd"===e?this.transitionEndSubscriber&&this.ngZone.run(()=>this.transitionEndSubscriber.next(n)):"progress"===e&&this.dragProgressSubject.next({gutterNum:t,sizes:n})}ngOnDestroy(){this.stopDragging()}}return e.\u0275fac=function(t){return new(t||e)(p.Wb(p.E),p.Wb(p.n),p.Wb(p.i),p.Wb(p.K))},e.\u0275cmp=p.Qb({type:e,selectors:[["as-split"]],viewQuery:function(e,t){var n;1&e&&p.Sc(m,!0),2&e&&p.Ac(n=p.lc())&&(t.gutterEls=n)},inputs:{direction:"direction",unit:"unit",gutterSize:"gutterSize",gutterStep:"gutterStep",restrictMove:"restrictMove",useTransition:"useTransition",disabled:"disabled",dir:"dir",gutterDblClickDuration:"gutterDblClickDuration"},outputs:{dragStart:"dragStart",dragEnd:"dragEnd",gutterClick:"gutterClick",gutterDblClick:"gutterDblClick",transitionEnd:"transitionEnd"},exportAs:["asSplit"],ngContentSelectors:b,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],["class","as-split-gutter",3,"flex-basis","order","mousedown","touchstart","mouseup","touchend",4,"ngIf"],[1,"as-split-gutter",3,"mousedown","touchstart","mouseup","touchend"],["gutterEls",""],[1,"as-split-gutter-icon"]],template:function(e,t){1&e&&(p.sc(),p.rc(0),p.Mc(1,A,1,1,"ng-template",0)),2&e&&(p.Jb(1),p.tc("ngForOf",t.displayedAreas))},directives:[i.j,i.k],styles:['[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url("")}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}'],changeDetection:0}),e})(),O=(()=>{class e{constructor(e,t,n,i){this.ngZone=e,this.elRef=t,this.renderer=n,this.split=i,this._order=null,this._size=null,this._minSize=null,this._maxSize=null,this._lockSize=!1,this._visible=!0,this.lockListeners=[],this.renderer.addClass(this.elRef.nativeElement,"as-split-area")}set order(e){this._order=v(e,null),this.split.updateArea(this,!0,!1)}get order(){return this._order}set size(e){this._size=v(e,null),this.split.updateArea(this,!1,!0)}get size(){return this._size}set minSize(e){this._minSize=v(e,null),this.split.updateArea(this,!1,!0)}get minSize(){return this._minSize}set maxSize(e){this._maxSize=v(e,null),this.split.updateArea(this,!1,!0)}get maxSize(){return this._maxSize}set lockSize(e){this._lockSize=x(e),this.split.updateArea(this,!1,!0)}get lockSize(){return this._lockSize}set visible(e){this._visible=x(e),this._visible?(this.split.showArea(this),this.renderer.removeClass(this.elRef.nativeElement,"as-hidden")):(this.split.hideArea(this),this.renderer.addClass(this.elRef.nativeElement,"as-hidden"))}get visible(){return this._visible}ngOnInit(){this.split.addArea(this),this.ngZone.runOutsideAngular(()=>{this.transitionListener=this.renderer.listen(this.elRef.nativeElement,"transitionend",e=>{"flex-basis"===e.propertyName&&this.split.notify("transitionEnd",-1)})})}setStyleOrder(e){this.renderer.setStyle(this.elRef.nativeElement,"order",e)}setStyleFlex(e,t,n,i,s){this.renderer.setStyle(this.elRef.nativeElement,"flex-grow",e),this.renderer.setStyle(this.elRef.nativeElement,"flex-shrink",t),this.renderer.setStyle(this.elRef.nativeElement,"flex-basis",n),!0===i?this.renderer.addClass(this.elRef.nativeElement,"as-min"):this.renderer.removeClass(this.elRef.nativeElement,"as-min"),!0===s?this.renderer.addClass(this.elRef.nativeElement,"as-max"):this.renderer.removeClass(this.elRef.nativeElement,"as-max")}lockEvents(){this.ngZone.runOutsideAngular(()=>{this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement,"selectstart",e=>!1)),this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement,"dragstart",e=>!1))})}unlockEvents(){for(;this.lockListeners.length>0;){const e=this.lockListeners.pop();e&&e()}}ngOnDestroy(){this.unlockEvents(),this.transitionListener&&this.transitionListener(),this.split.removeArea(this)}}return e.\u0275fac=function(t){return new(t||e)(p.Wb(p.E),p.Wb(p.n),p.Wb(p.K),p.Wb(k))},e.\u0275dir=p.Rb({type:e,selectors:[["as-split-area"],["","as-split-area",""]],inputs:{order:"order",size:"size",minSize:"minSize",maxSize:"maxSize",lockSize:"lockSize",visible:"visible"},exportAs:["asSplitArea"]}),e})(),w=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}static forChild(){return{ngModule:e,providers:[]}}}return e.\u0275mod=p.Ub({type:e}),e.\u0275inj=p.Tb({factory:function(t){return new(t||e)},imports:[[i.c]]}),e})();const M=["split"],R=["area1"],D=["area2"];let G=(()=>{class e{constructor(){this.content='# Ledge \u8bed\u6cd5\u5e2e\u52a9\n\n```kanban\n - Kanban Name\n   - Todo\n     - done basic feature\n     - write document\n   - Doing\n     - create componet\n     - add testing\n   - Done\n     - create card\n   - Done\n```\n\n```tech-radar\n - \u6846\u67b6\n   - adopt\n     - Angular\n     - D3.js\n   - trail\n     - Echarts\n   - assess\n     - Stencil.js\n     - Ionic\n   - hold\n     - react\n - \u5e73\u53f0\n   - adopt\n     - GitHub\n   - trail\n   - assess\n   - hold\n - \u8bed\u8a00\n   - adopt\n     - TypeScript\n   - trail\n   - assess\n   - hold\n     - JavaScript\n - \u6280\u672f\n   - adopt\n   - trail\n     - Web Components\n   - assess\n   - hold\n```\n\n```list-style\n - \u5f00\u6e90\u5de5\u5177\u91c7\u7528\n - \u5546\u4e1a\u91c7\u8d2d\n - \u81ea\u7814\u7814\u53d1\u4ea4\u901a\u5e73\u53f0\n\nconfig: {"type": "circle"}\n```\n\n```list-style\n - \u57fa\u4e8e\u5f00\u6e90\u65b9\u6848\u9047\u5230\u56f0\u96be\n   - \u6027\u80fd\u74f6\u9888\n   - \u4e1a\u52a1\u9700\u6c42\u2f47\u76ca\u591a\u5143\u5316\uff0c\u4f46\u56e2\u961f\u89c4\u6a21\u6709\u9650\n - \u6269\u5c55\u66f4\u591a\u7684\u80fd\u529b\n   - \u66f4\u591a\u5143\u5316\u7684\u4ee3\u7801\u8d28\u91cf\u68c0\u67e5\n   - \u5ba1\u8ba1\u9700\u6c42\n   - \u4e8c\u8fdb\u5236\u3001\u955c\u50cf\u5b89\u5168\u626b\u63cf\n\nconfig: {"type": "group-square"}\n```\n\n```echarts\n{\n"series": [\n    {\n        "type": "treemap",\n        "breadcrumb": {"show": false},\n        "roam": "move",\n        "data": [{\n            "name": "nodeA","value": 10,\n            "children": [\n              {"name": "HealthController.java", "value": 4 },\n              {"name": "HealthService.java", "value": 6}\n            ]},\n            {"name": "HealthModel.java", "value": 20}\n        ]\n    }\n]\n}\n```\n\n```graphviz\ndigraph {\n  rankdir=LR;\n  "\u7ea2" -> "\u7eff"[label="\u5199\u4e00\u4e2a\u5931\u8d25\u7684\u6d4b\u8bd5"];\n  "\u7eff" -> "\u91cd\u6784"[label="\u8ba9\u4ee3\u7801\u53ef\u4ee5\u5de5\u4f5c"];\n  "\u91cd\u6784" -> "\u7ea2"[dir="back" label="\u91cd\u6784"];\n}\n```\n\n```toolset\n - \u7528\u6237\u4f53\u9a8c\n - \u65f6\u95f4\n - \u6210\u672c\n - \u5b89\u5168\n - \u8303\u56f4\n\nconfig: {"type": "slider"}\n```\n\n```toolset\n|  Challenge;Skill/Ability   | low | high |\n|-|-|-|\n| low  |      | boredom |\n| high | anxiety | flow |\n\nconfig: {"type": "line-chart"}\n```\n\n```quadrant\n - \u6280\u672f\u503a\u5899\n     - \u5feb\u901f\u89e3\u51b3\n       - \u2026\u2026\n       - \u2026\u2026\n       - \u2026\u2026\n     - \u5206\u89e3\u5e76\u8ba1\u5212\n       - \u2026\u2026\n       - \u2026\u2026\n       - \u2026\u2026\n     - \u5728\u53ef\u80fd\u7684\u65f6\u5019\u63d0\u5347\n       - \u2026\u2026\n       - \u2026\u2026\n     - \u6682\u65f6\u4e0d\u7ba1\n       - \u2026\u2026\n       - \u2026\u2026\n       - \u2026\u2026\n\nconfig: {"left": "\u7b80\u5355", "right": "\u56f0\u96be", "bottom": "\u4e0d\u91cd\u8981", "top": "\u91cd\u8981"}\n```\n\n```radar\n - \u8d28\u91cf\u5c5e\u6027\u7f51\u7edc\n   - \u53ef\u9760\u6027\n   - \u53ef\u4fee\u6539\u6027\n   - \u5b89\u5168\u6027\n   - \u53ef\u6d4b\u8bd5\u6027\n   - \u6027\u80fd\n   - \u53ef\u7528\u6027\n```\n\n```radar\n - \u8d28\u91cf\u6210\u719f\u5ea6\u8bc4\u4f30\u6a21\u578b\n  - \u8d28\u91cf\u5185\u5efa: 3 -> 4\n  - \u4f18\u5316\u4e1a\u52a1\u4ef7\u503c: 2 -> 2\n  - \u8d28\u91cf\u7edf\u4e00\uff0c\u53ef\u89c6\u5316: 1 -> 5\n  - \u5168\u5458\u53c2\u4e0e: 3 -> 4\n  - \u5feb\u901f\u4ea4\u4ed8: 4 -> 5\n  - \u6d4b\u8bd5\u4f5c\u4e3a\u8d44\u4ea7: 2 -> 3\n  - \u5feb\u901f\u53cd\u9988: 5 -> 5\n\nconfig: {"legend": ["\u5f53\u524d", "\u672a\u6765"]}\n```\n\n```pyramid\n - \u5bfb\u627e\u4ef7\u503c\n   - \u4ef7\u503c\uff1a\u3001\n   - \u8d28\u91cf\uff1a\u96f6\u7f3a\u9677\u3001\u8bbe\u8ba1\u826f\u597d\n   - \u5212\u5206\uff1a\u5c0f\u3001\u5b8c\u6574\n   - \u6784\u5efa\uff1a\u4ef7\u503c\u4f18\u5148\u3001\u9010\u6e10\u5b8c\u5584\u4ea7\u54c1\n   - \u8ba1\u5212\uff1a\u6301\u7eed\u3001\u63a5\u4e0b\u6765\u505a\u4ec0\u4e48\uff1f\n   - \u7ec4\u7ec7\uff1a\u56e2\u961f\u3001\u4eba\u5458\u4e0e\u6280\u80fd\n   - \u6307\u5bfc\uff1a\u4f55\u7269\u3001\u4f55\u65f6\n```\n\n```mindmap\n - CI \u5efa\u8bbe\n  - \u5f00\u53d1\u9636\u6bb5\u51c6\u5907\n    - \u62c9 Aimeituan \u5de5\u7a0b\u7684\u5f00\u53d1\u5206\u652f\n    - \u4fee\u6539\u5f00\u53d1\u5206\u652f\u7248\u672c\u53f7\n    - Aimeituan \u5de5\u7a0b\u72ec\u7acb\u7f16\u8bd1\u81ea\u52a8\u914d\u7f6e\n  - PR \u68c0\u6d4b\n    - \u9759\u6001\u68c0\u6d4b\n    - \u589e\u91cf\u68c0\u6d4b\n      - SDK\n      - \u5305\u5927\u5c0f\n    - \u5355\u6d4b\n  - \u5f00\u53d1\u9636\u6bb5\n    - \u5b9a\u65f6\u68c0\u6d4b\u58f3\u5de5\u7a0b\u662f\u5426\u6709\u66f4\u65b0\uff0c\u89e6\u53d1\u81ea\u52a8\u6253\u5305\n    - \u6bcf\u65e5\u6700\u65b0\u7248\u672c\u53f7\u63d0\u9192\n  - \u63d0\u6d4b\u9636\u6bb5\n    - \u5192\u70df\u63d0\u9192\n    - \u81ea\u52a8\u62c9\u63d0\u6d4b\u5206\u652f\n    - \u4e1a\u52a1\u5e93\u68c0\u6d4b\u662f\u5426\u6709 PR \u672a\u5408\u5165\n    - \u63d0\u6d4b\u6253\u5305\u3001\u53d1\u63d0\u6d4b\u90ae\u4ef6\n  - \u53d1\u7248\u9636\u6bb5\n    - \u5206\u652f\u5408\u5e76\n    - \u5916\u5356\u4e1a\u52a1\u5e93\u5408\u5165 Aimeituan \u63d0\u6d4b\u5206\u652f\n    - \u5168\u91cf\u63d0\u9192\n```\n\n```process-step\n - \u5e73\u53f0\u5c42\n   - \u8fd0\u7ef4\u5e73\u53f0\n   - \u5c0f\u7c73\u79c1\u6709\u4e91\n   - \u5c0f\u7c73\u751f\u6001\u4e91\n - \u80fd\u529b\u5c42\n   - \u56e2\u961f\u6ce8\u518c\n   - \u4e00\u952e\u63a5\u5165\n   - \u68c0\u6d4b\u626b\u63cf\u5de5\u5177\u96c6\u6210\n   - \u53d1\u5e03\u90e8\u7f72\n   - \u6807\u51c6\u5316\u5de5\u5177\u63a5\u5165\n - \u5de5\u5177\u5c42\n   - Gitlab\n   - Phabricator\n   - Jenkins on K8s\n   - \u4ee3\u7801\u8d28\u91cf\u626b\u63cf\n   - \u5b89\u5168/\u6cd5\u5f8b\u5408\u89c4\u626b\u63cf\n   - \u4e8c\u8fdb\u5236&\u4ea7\u51fa\u7269\u5b58\u50a8\n   - \u4e8c\u8fdb\u5236\u5b89\u5168\u626b\u63cf\n   - \u4e8c\u8fdb\u5236\u6cd5\u52a1\u5ba1\u8ba1\u626b\u63cf\n   - \u90e8\u7f72\u670d\u52a1\n - \u6570\u636e\u5c42\n   - \u6570\u636e\u667a\u80fd\u5e94\u7528\n   - \u7814\u53d1\u6548\u80fd\u6570\u636e\u4ed3\u5e93\n```\n\n```javascript\nconsole.log(\'hello, world\');\n```\n\n|     | normal | table |\n| --- | ------ | ----- |\n|     |        |       |\n|     |        |       |\n\n```process-table\n| \u6e90\u7801\u7ba1\u7406 | \u4ee3\u7801\u8d28\u91cf | \u5236\u54c1\u7ba1\u7406  | \u6d4b\u8bd5 | \u6301\u7eed\u96c6\u6210 | \u5206\u6790 | \u534f\u4f5c  |\n|-|-|-|-|-|-|-|\n| Git | TSLint | Git (history) | Jasmine | GitHub Action | GitHub Traffic | GitHub Projects |\n| GitHub | Code Climate | |  Jest | | Google Analysis |  |\n```\n\n### \u91c7\u7528 DevOps \u7684\u884c\u4e1a\n\n```chart\n| \u884c\u4e1a | \u5360\u6bd4 |\n|-|-|\n| \u6280\u672f | 38% |\n| \u91d1\u878d\u670d\u52a1 | 12% |\n| \u96f6\u552e/\u6d88\u8d39/\u7535\u5b50\u5546\u52a1 | 9% |\n| \u5176\u5b83 | 9% |\n| \u533b\u7597\u4fdd\u5065\u548c\u5236\u836f | 5\uff05 |\n| \u653f\u5e9c | 5% |\n| \u5a92\u4f53/\u5a31\u4e50 | 4% |\n| \u4fdd\u9669 | 4% |\n| \u6559\u80b2 | 4% |\n| \u5de5\u4e1a\u548c\u5236\u9020\u4e1a | 4% |\n| \u7535\u4fe1 | 3% |\n| \u80fd\u6e90 | 3% |\n| \u975e\u8425\u5229 | 1% |\n```\n\n## \u7ec4\u7ec7\u6240\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\n\n```chart\n| \u64cd\u4f5c\u7cfb\u7edf  |  2018 | 2019 |\n|-|-|-|\n| Windows 2003/2003R2 | 12% | 6% |\n| Windows 2008/2008R2 | 33% | 26% |\n| Windows 2012/2012R2 | 56% | 52% |\n| Other Windows      | 22% | 25% |\n| Linux Debian/Ubuntu variants  | 36% | 43% |\n| Linux Enterprise variants (RHEL, Oracle, CentOS) | 48% | 49% |\n| Linux Fedora        | 5% | 4% |\n| SUSE Linux Enterprise Server  | 8% | 5% |\n| Linux OpenSUSE | 4% | 4% |\n| Linux Arch    | 2% | 2% |\n| Other Linux  |  13% | 11% |\n| Other UNIX  | 8% | 4% |\n| FreeBSD/NetBSD/OpenBSD   | 3% | 3% |\n| AIX                | 10% | 7% |\n| Solaris OS         | 12% | 5% |\n| Other              | 12% | 8% |\n\nconfig: {"type": "bar", "multiset": true}\n```\n\n```step-line\n - \u6e90\u7801\u7ba1\u7406\n - \u5236\u54c1\u7ba1\u7406\n - \u914d\u7f6e\u7ba1\u7406\n - \u6570\u636e\u5e93\u81ea\u52a8\u5316\n - \u6d4b\u8bd5\n - \u6301\u7eed\u96c6\u6210\n - \u76d1\u63a7\n - \u5206\u6790\n - \u667a\u80fd\u8fd0\u7ef4\n - \u534f\u4f5c\n```\n\n- list\n- item\n\n> spliqt\n\n- a\n  - a\n    - a\n    - b\n\n\u8fd9\u662f\u4e00\u4e2a\u6b63\u5e38\u65e0\u6bd4\u7684\u6bb5\u843d\u3002\n\n> blockquote\n\n## [Link in Heading](https://devops.phodal.com/design)\n\n<a href="https://www.phodal.com/">phodal.com</a>\n\n---\n\n1. fsda\n2. 34 sdf\n\n- a\n- a\n\n3. sdaf\n\nb\n\n- [ ] a\n- [ ] b\n  - [ ] c\n\n```pie\n - Some & title\n   - a: 4\n   - b: 12\n   - c: 21\n   - d: 19\n```\n',this.direction="horizontal",this.sizes={percent:{area1:30,area2:70},pixel:{area1:120,area2:"*",area3:160}},this.term$=new l.a,this.searchSubscription=this.term$.pipe(Object(c.a)(500),Object(d.a)(),Object(u.a)(e=>(this.content=e,h.a))).subscribe()}ngOnInit(){}ngOnDestroy(){this.searchSubscription&&(this.searchSubscription.unsubscribe(),this.searchSubscription=null)}dragEnd(e,{sizes:t}){"percent"===e?(this.sizes.percent.area1=t[0],this.sizes.percent.area2=t[1]):"pixel"===e&&(this.sizes.pixel.area1=t[0],this.sizes.pixel.area2=t[1],this.sizes.pixel.area3=t[2])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Qb({type:e,selectors:[["app-ledge-helper"]],viewQuery:function(e,t){var n;1&e&&(p.Sc(M,!0),p.Sc(R,!0),p.Sc(D,!0)),2&e&&(p.Ac(n=p.lc())&&(t.split=n.first),p.Ac(n=p.lc())&&(t.area1=n.first),p.Ac(n=p.lc())&&(t.area2=n.first))},decls:8,vars:3,consts:[["unit","percent",1,"helper",3,"direction","dragEnd"],["split","asSplit"],["size","30",1,"source"],["area1","asSplitArea"],["matInput","","cols","25",3,"ngModel","ngModelChange"],["size","70"],["area2","asSplitArea"],[1,"sample",3,"content"]],template:function(e,t){1&e&&(p.cc(0,"as-split",0,1),p.kc("dragEnd",(function(e){return t.dragEnd("percent",e)})),p.cc(2,"as-split-area",2,3),p.cc(4,"textarea",4),p.kc("ngModelChange",(function(e){return t.term$.next(e)})),p.bc(),p.bc(),p.cc(5,"as-split-area",5,6),p.Xb(7,"ledge-render",7),p.bc(),p.bc()),2&e&&(p.tc("direction",t.direction),p.Jb(4),p.tc("ngModel",t.content),p.Jb(3),p.tc("content",t.content))},directives:[k,O,s.b,s.j,s.m,a.a],styles:[".helper[_ngcontent-%COMP%]{display:flex;flex-grow:1;height:calc(100vh - 64px);overflow-y:hidden;padding:0 .2em}.source[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:14px;margin-left:1em;padding:8px;width:100%;height:100%}.sample[_ngcontent-%COMP%]{height:100%;flex-shrink:0;overflow-y:hidden}"]}),e})();n.d(t,"LedgeHelperModule",(function(){return T}));let T=(()=>{class e{}return e.\u0275mod=p.Ub({type:e}),e.\u0275inj=p.Tb({factory:function(t){return new(t||e)},imports:[[i.c,s.f,o.a,a.b,w.forRoot(),r.h.forChild([{path:"",component:G}])]]}),e})()}}]);