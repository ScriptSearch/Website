"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{1683:function(e,t,n){function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,{VY:function(){return eh},h4:function(){return ec},ck:function(){return eu},fC:function(){return ea},xz:function(){return ed}});var r=n(7294),s=n.t(r,2);function o(e,t=[]){let n=[],i=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let i=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return i.scopeName=e,[function(t,i){let s=(0,r.createContext)(i),o=n.length;function l(t){let{scope:n,children:i,...l}=t,a=(null==n?void 0:n[e][o])||s,u=(0,r.useMemo)(()=>l,Object.values(l));return(0,r.createElement)(a.Provider,{value:u},i)}return n=[...n,i],l.displayName=t+"Provider",[l,function(n,l){let a=(null==l?void 0:l[e][o])||s,u=(0,r.useContext)(a);if(u)return u;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:i})=>{let r=n(e),s=r[`__scope${i}`];return{...t,...s}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(i,...t)]}function l(...e){return t=>e.forEach(e=>{var n;"function"==typeof(n=e)?n(t):null!=n&&(n.current=t)})}function a(...e){return(0,r.useCallback)(l(...e),e)}let u=(0,r.forwardRef)((e,t)=>{let{children:n,...s}=e,o=r.Children.toArray(n),l=o.find(h);if(l){let e=l.props.children,n=o.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):(0,r.isValidElement)(e)?e.props.children:null);return(0,r.createElement)(c,i({},s,{ref:t}),(0,r.isValidElement)(e)?(0,r.cloneElement)(e,void 0,n):null)}return(0,r.createElement)(c,i({},s,{ref:t}),n)});u.displayName="Slot";let c=(0,r.forwardRef)((e,t)=>{let{children:n,...i}=e;return(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{...function(e,t){let n={...t};for(let i in t){let r=e[i],s=t[i],o=/^on[A-Z]/.test(i);o?r&&s?n[i]=(...e)=>{s(...e),r(...e)}:r&&(n[i]=r):"style"===i?n[i]={...r,...s}:"className"===i&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:l(t,n.ref)}):r.Children.count(n)>1?r.Children.only(null):null});c.displayName="SlotClone";let d=({children:e})=>(0,r.createElement)(r.Fragment,null,e);function h(e){return(0,r.isValidElement)(e)&&e.type===d}function p(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(null==e||e(i),!1===n||!i.defaultPrevented)return null==t?void 0:t(i)}}function m(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}function f({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,s]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[i]=n,s=(0,r.useRef)(i),o=m(t);return(0,r.useEffect)(()=>{s.current!==i&&(o(i),s.current=i)},[i,s,o]),n}({defaultProp:t,onChange:n}),o=void 0!==e,l=m(n),a=(0,r.useCallback)(t=>{if(o){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else s(t)},[o,e,s,l]);return[o?e:i,a]}var g=n(3935);let v=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,r.forwardRef)((e,n)=>{let{asChild:s,...o}=e,l=s?u:t;return(0,r.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,r.createElement)(l,i({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),y=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{},E=e=>{let{present:t,children:n}=e,i=function(e){var t;let[n,i]=(0,r.useState)(),s=(0,r.useRef)({}),o=(0,r.useRef)(e),l=(0,r.useRef)("none"),[a,u]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let i=t[e][n];return null!=i?i:e},e?"mounted":"unmounted"));return(0,r.useEffect)(()=>{let e=b(s.current);l.current="mounted"===a?e:"none"},[a]),y(()=>{let t=s.current,n=o.current;if(n!==e){let i=l.current,r=b(t);e?u("MOUNT"):"none"===r||(null==t?void 0:t.display)==="none"?u("UNMOUNT"):n&&i!==r?u("ANIMATION_OUT"):u("UNMOUNT"),o.current=e}},[e,u]),y(()=>{if(n){let e=e=>{let t=b(s.current),i=t.includes(e.animationName);e.target===n&&i&&(0,g.flushSync)(()=>u("ANIMATION_END"))},t=e=>{e.target===n&&(l.current=b(s.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:(0,r.useCallback)(e=>{e&&(s.current=getComputedStyle(e)),i(e)},[])}}(t),s="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),o=a(i.ref,s.ref);return"function"==typeof n||i.isPresent?(0,r.cloneElement)(s,{ref:o}):null};function b(e){return(null==e?void 0:e.animationName)||"none"}E.displayName="Presence";let w=s["useId".toString()]||(()=>void 0),C=0;function A(e){let[t,n]=r.useState(w());return y(()=>{e||n(e=>null!=e?e:String(C++))},[e]),e||(t?`radix-${t}`:"")}let M="Collapsible",[x,N]=o(M),[S,L]=x(M),R=(0,r.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:s,defaultOpen:o,disabled:l,onOpenChange:a,...u}=e,[c=!1,d]=f({prop:s,defaultProp:o,onChange:a});return(0,r.createElement)(S,{scope:n,disabled:l,contentId:A(),open:c,onOpenToggle:(0,r.useCallback)(()=>d(e=>!e),[d])},(0,r.createElement)(v.div,i({"data-state":O(c),"data-disabled":l?"":void 0},u,{ref:t})))}),T=(0,r.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...s}=e,o=L("CollapsibleTrigger",n);return(0,r.createElement)(v.button,i({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":O(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},s,{ref:t,onClick:p(e.onClick,o.onOpenToggle)}))}),_="CollapsibleContent",k=(0,r.forwardRef)((e,t)=>{let{forceMount:n,...s}=e,o=L(_,e.__scopeCollapsible);return(0,r.createElement)(E,{present:n||o.open},({present:e})=>(0,r.createElement)(z,i({},s,{ref:t,present:e})))}),z=(0,r.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:s,children:o,...l}=e,u=L(_,n),[c,d]=(0,r.useState)(s),h=(0,r.useRef)(null),p=a(t,h),m=(0,r.useRef)(0),f=m.current,g=(0,r.useRef)(0),E=g.current,b=u.open||c,w=(0,r.useRef)(b),C=(0,r.useRef)();return(0,r.useEffect)(()=>{let e=requestAnimationFrame(()=>w.current=!1);return()=>cancelAnimationFrame(e)},[]),y(()=>{let e=h.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();m.current=t.height,g.current=t.width,w.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),d(s)}},[u.open,s]),(0,r.createElement)(v.div,i({"data-state":O(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!b},l,{ref:p,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":E?`${E}px`:void 0,...e.style}}),b&&o)});function O(e){return e?"open":"closed"}let P=(0,r.createContext)(void 0),I="Accordion",B=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Y,D,V]=function(e){let t=e+"CollectionProvider",[n,i]=o(t),[s,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:n}=e,i=r.useRef(null),o=r.useRef(new Map).current;return r.createElement(s,{scope:t,itemMap:o,collectionRef:i},n)},d=e+"CollectionSlot",h=r.forwardRef((e,t)=>{let{scope:n,children:i}=e,s=l(d,n),o=a(t,s.collectionRef);return r.createElement(u,{ref:o},i)}),p=e+"CollectionItemSlot",m="data-radix-collection-item",f=r.forwardRef((e,t)=>{let{scope:n,children:i,...s}=e,o=r.useRef(null),c=a(t,o),d=l(p,n);return r.useEffect(()=>(d.itemMap.set(o,{ref:o,...s}),()=>void d.itemMap.delete(o))),r.createElement(u,{[m]:"",ref:c},i)});return[{Provider:c,Slot:h,ItemSlot:f},function(t){let n=l(e+"CollectionConsumer",t),i=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),i=Array.from(n.itemMap.values()),r=i.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return r},[n.collectionRef,n.itemMap]);return i},i]}(I),[X,Z]=o(I,[V,N]),W=N(),H=r.forwardRef((e,t)=>{let{type:n,...s}=e;return r.createElement(Y.Provider,{scope:e.__scopeAccordion},"multiple"===n?r.createElement(G,i({},s,{ref:t})):r.createElement(q,i({},s,{ref:t})))});H.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[U,j]=X(I),[F,$]=X(I,{collapsible:!1}),q=r.forwardRef((e,t)=>{let{value:n,defaultValue:s,onValueChange:o=()=>{},collapsible:l=!1,...a}=e,[u,c]=f({prop:n,defaultProp:s,onChange:o});return r.createElement(U,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:c,onItemClose:r.useCallback(()=>l&&c(""),[l,c])},r.createElement(F,{scope:e.__scopeAccordion,collapsible:l},r.createElement(Q,i({},a,{ref:t}))))}),G=r.forwardRef((e,t)=>{let{value:n,defaultValue:s,onValueChange:o=()=>{},...l}=e,[a=[],u]=f({prop:n,defaultProp:s,onChange:o}),c=r.useCallback(e=>u((t=[])=>[...t,e]),[u]),d=r.useCallback(e=>u((t=[])=>t.filter(t=>t!==e)),[u]);return r.createElement(U,{scope:e.__scopeAccordion,value:a,onItemOpen:c,onItemClose:d},r.createElement(F,{scope:e.__scopeAccordion,collapsible:!0},r.createElement(Q,i({},l,{ref:t}))))}),[K,J]=X(I),Q=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:s,dir:o,orientation:l="vertical",...u}=e,c=r.useRef(null),d=a(c,t),h=D(n),m=function(e){let t=(0,r.useContext)(P);return e||t||"ltr"}(o),f="ltr"===m,g=p(e.onKeyDown,e=>{var t;if(!B.includes(e.key))return;let n=e.target,i=h().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),r=i.findIndex(e=>e.ref.current===n),s=i.length;if(-1===r)return;e.preventDefault();let o=r,a=s-1,u=()=>{(o=r+1)>a&&(o=0)},c=()=>{(o=r-1)<0&&(o=a)};switch(e.key){case"Home":o=0;break;case"End":o=a;break;case"ArrowRight":"horizontal"===l&&(f?u():c());break;case"ArrowDown":"vertical"===l&&u();break;case"ArrowLeft":"horizontal"===l&&(f?c():u());break;case"ArrowUp":"vertical"===l&&c()}let d=o%s;null===(t=i[d].ref.current)||void 0===t||t.focus()});return r.createElement(K,{scope:n,disabled:s,direction:o,orientation:l},r.createElement(Y.Slot,{scope:n},r.createElement(v.div,i({},u,{"data-orientation":l,ref:d,onKeyDown:s?void 0:g}))))}),ee="AccordionItem",[et,en]=X(ee),ei=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:s,...o}=e,l=J(ee,n),a=j(ee,n),u=W(n),c=A(),d=s&&a.value.includes(s)||!1,h=l.disabled||e.disabled;return r.createElement(et,{scope:n,open:d,disabled:h,triggerId:c},r.createElement(R,i({"data-orientation":l.orientation,"data-state":d?"open":"closed"},u,o,{ref:t,disabled:h,open:d,onOpenChange:e=>{e?a.onItemOpen(s):a.onItemClose(s)}})))}),er=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...s}=e,o=J(I,n),l=en("AccordionHeader",n);return r.createElement(v.h3,i({"data-orientation":o.orientation,"data-state":l.open?"open":"closed","data-disabled":l.disabled?"":void 0},s,{ref:t}))}),es="AccordionTrigger",eo=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...s}=e,o=J(I,n),l=en(es,n),a=$(es,n),u=W(n);return r.createElement(Y.ItemSlot,{scope:n},r.createElement(T,i({"aria-disabled":l.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:l.triggerId},u,s,{ref:t})))}),el=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...s}=e,o=J(I,n),l=en("AccordionContent",n),a=W(n);return r.createElement(k,i({role:"region","aria-labelledby":l.triggerId,"data-orientation":o.orientation},a,s,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))}),ea=H,eu=ei,ec=er,ed=eo,eh=el},9062:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("Activity",[["polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12",key:"xez52g"}]])},2701:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]])},6583:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]])},8971:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("ChevronDown",[["polyline",{points:"6 9 12 15 18 9",key:"1do0m2"}]])},1173:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]])},5592:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]])},9455:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]])},9461:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4297);let r=(0,i.Z)("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]])},2662:function(e){var t=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},n=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),!(n instanceof Node))throw"Can't initialize VanillaTilt because "+n+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=n,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.resetToStart=e.isSettingTrue(this.settings["reset-to-start"]),this.glare=e.isSettingTrue(this.settings.glare),this.glarePrerender=e.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=e.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=e.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),!1===this.resetToStart&&(this.settings.startX=0,this.settings.startY=0)}return e.isSettingTrue=function(e){return""===e||!0===e||1===e},e.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},e.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},e.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},e.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},e.prototype.onDeviceOrientation=function(e){if(null!==e.gamma&&null!==e.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,n=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,i=t/this.width,r=n/this.height,s=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),o=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero);null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:s/i+this.left,clientY:o/r+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},e.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},e.prototype.onMouseMove=function(e){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)},e.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},e.prototype.reset=function(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()},e.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},e.prototype.getValues=function(){var e=void 0,t=void 0;return this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1),{tiltX:(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*e,percentageY:100*t,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},e.prototype.updateElementPosition=function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top},e.prototype.update=function(){var e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:e.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+e.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+e.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null},e.prototype.prepareGlare=function(){if(!this.glarePrerender){var e=document.createElement("div");e.classList.add("js-tilt-glare");var t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())},e.prototype.updateGlareSize=function(){if(this.glare){var e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:e+"px",height:e+"px"})}},e.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},e.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},e.prototype.setTransition=function(){var e=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout(function(){e.element.style.transition="",e.glare&&(e.glareElement.style.transition="")},this.settings.speed)},e.prototype.extendSettings=function(e){var t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},n={};for(var i in t)if(i in e)n[i]=e[i];else if(this.element.hasAttribute("data-tilt-"+i)){var r=this.element.getAttribute("data-tilt-"+i);try{n[i]=JSON.parse(r)}catch(e){n[i]=r}}else n[i]=t[i];return n},e.init=function(t,n){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(function(t){"vanillaTilt"in t||(t.vanillaTilt=new e(t,n))})},e}();"undefined"!=typeof document&&(window.VanillaTilt=n,n.init(document.querySelectorAll("[data-tilt]"))),e.exports=n}}]);