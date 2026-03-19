(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Td={exports:{}},$a={},Id={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function SE(){if(Pg)return Re;Pg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=I&&O[I]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Q={};function $(O,Y,Se){this.props=O,this.context=Y,this.refs=Q,this.updater=Se||F}$.prototype.isReactComponent={},$.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ie(){}ie.prototype=$.prototype;function V(O,Y,Se){this.props=O,this.context=Y,this.refs=Q,this.updater=Se||F}var G=V.prototype=new ie;G.constructor=V,q(G,$.prototype),G.isPureReactComponent=!0;var H=Array.isArray,ee=Object.prototype.hasOwnProperty,re={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,Y,Se){var Ae,ke={},Ne=null,Ue=null;if(Y!=null)for(Ae in Y.ref!==void 0&&(Ue=Y.ref),Y.key!==void 0&&(Ne=""+Y.key),Y)ee.call(Y,Ae)&&!N.hasOwnProperty(Ae)&&(ke[Ae]=Y[Ae]);var Oe=arguments.length-2;if(Oe===1)ke.children=Se;else if(1<Oe){for(var $e=Array(Oe),Ht=0;Ht<Oe;Ht++)$e[Ht]=arguments[Ht+2];ke.children=$e}if(O&&O.defaultProps)for(Ae in Oe=O.defaultProps,Oe)ke[Ae]===void 0&&(ke[Ae]=Oe[Ae]);return{$$typeof:r,type:O,key:Ne,ref:Ue,props:ke,_owner:re.current}}function R(O,Y){return{$$typeof:r,type:O.type,key:Y,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function P(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return Y[Se]})}var L=/\/+/g;function k(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):Y.toString(36)}function ze(O,Y,Se,Ae,ke){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Ue=!1;if(O===null)Ue=!0;else switch(Ne){case"string":case"number":Ue=!0;break;case"object":switch(O.$$typeof){case r:case e:Ue=!0}}if(Ue)return Ue=O,ke=ke(Ue),O=Ae===""?"."+k(Ue,0):Ae,H(ke)?(Se="",O!=null&&(Se=O.replace(L,"$&/")+"/"),ze(ke,Y,Se,"",function(Ht){return Ht})):ke!=null&&(b(ke)&&(ke=R(ke,Se+(!ke.key||Ue&&Ue.key===ke.key?"":(""+ke.key).replace(L,"$&/")+"/")+O)),Y.push(ke)),1;if(Ue=0,Ae=Ae===""?".":Ae+":",H(O))for(var Oe=0;Oe<O.length;Oe++){Ne=O[Oe];var $e=Ae+k(Ne,Oe);Ue+=ze(Ne,Y,Se,$e,ke)}else if($e=A(O),typeof $e=="function")for(O=$e.call(O),Oe=0;!(Ne=O.next()).done;)Ne=Ne.value,$e=Ae+k(Ne,Oe++),Ue+=ze(Ne,Y,Se,$e,ke);else if(Ne==="object")throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Ue}function ft(O,Y,Se){if(O==null)return O;var Ae=[],ke=0;return ze(O,Ae,"","",function(Ne){return Y.call(Se,Ne,ke++)}),Ae}function Rt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var Ke={current:null},se={transition:null},ge={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:se,ReactCurrentOwner:re};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:ft,forEach:function(O,Y,Se){ft(O,function(){Y.apply(this,arguments)},Se)},count:function(O){var Y=0;return ft(O,function(){Y++}),Y},toArray:function(O){return ft(O,function(Y){return Y})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=$,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=V,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Re.act=ue,Re.cloneElement=function(O,Y,Se){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=q({},O.props),ke=O.key,Ne=O.ref,Ue=O._owner;if(Y!=null){if(Y.ref!==void 0&&(Ne=Y.ref,Ue=re.current),Y.key!==void 0&&(ke=""+Y.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for($e in Y)ee.call(Y,$e)&&!N.hasOwnProperty($e)&&(Ae[$e]=Y[$e]===void 0&&Oe!==void 0?Oe[$e]:Y[$e])}var $e=arguments.length-2;if($e===1)Ae.children=Se;else if(1<$e){Oe=Array($e);for(var Ht=0;Ht<$e;Ht++)Oe[Ht]=arguments[Ht+2];Ae.children=Oe}return{$$typeof:r,type:O.type,key:ke,ref:Ne,props:Ae,_owner:Ue}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=T,Re.createFactory=function(O){var Y=T.bind(null,O);return Y.type=O,Y},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:f,render:O}},Re.isValidElement=b,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Rt}},Re.memo=function(O,Y){return{$$typeof:_,type:O,compare:Y===void 0?null:Y}},Re.startTransition=function(O){var Y=se.transition;se.transition={};try{O()}finally{se.transition=Y}},Re.unstable_act=ue,Re.useCallback=function(O,Y){return Ke.current.useCallback(O,Y)},Re.useContext=function(O){return Ke.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Ke.current.useDeferredValue(O)},Re.useEffect=function(O,Y){return Ke.current.useEffect(O,Y)},Re.useId=function(){return Ke.current.useId()},Re.useImperativeHandle=function(O,Y,Se){return Ke.current.useImperativeHandle(O,Y,Se)},Re.useInsertionEffect=function(O,Y){return Ke.current.useInsertionEffect(O,Y)},Re.useLayoutEffect=function(O,Y){return Ke.current.useLayoutEffect(O,Y)},Re.useMemo=function(O,Y){return Ke.current.useMemo(O,Y)},Re.useReducer=function(O,Y,Se){return Ke.current.useReducer(O,Y,Se)},Re.useRef=function(O){return Ke.current.useRef(O)},Re.useState=function(O){return Ke.current.useState(O)},Re.useSyncExternalStore=function(O,Y,Se){return Ke.current.useSyncExternalStore(O,Y,Se)},Re.useTransition=function(){return Ke.current.useTransition()},Re.version="18.3.1",Re}var bg;function yf(){return bg||(bg=1,Id.exports=SE()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function AE(){if(Dg)return $a;Dg=1;var r=yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,y,_){var E,I={},A=null,F=null;_!==void 0&&(A=""+_),y.key!==void 0&&(A=""+y.key),y.ref!==void 0&&(F=y.ref);for(E in y)s.call(y,E)&&!l.hasOwnProperty(E)&&(I[E]=y[E]);if(f&&f.defaultProps)for(E in y=f.defaultProps,y)I[E]===void 0&&(I[E]=y[E]);return{$$typeof:e,type:f,key:A,ref:F,props:I,_owner:o.current}}return $a.Fragment=t,$a.jsx=h,$a.jsxs=h,$a}var Vg;function RE(){return Vg||(Vg=1,Td.exports=AE()),Td.exports}var g=RE(),Hu={},Sd={exports:{}},Zt={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function kE(){return Og||(Og=1,(function(r){function e(se,ge){var ue=se.length;se.push(ge);e:for(;0<ue;){var O=ue-1>>>1,Y=se[O];if(0<o(Y,ge))se[O]=ge,se[ue]=Y,ue=O;else break e}}function t(se){return se.length===0?null:se[0]}function s(se){if(se.length===0)return null;var ge=se[0],ue=se.pop();if(ue!==ge){se[0]=ue;e:for(var O=0,Y=se.length,Se=Y>>>1;O<Se;){var Ae=2*(O+1)-1,ke=se[Ae],Ne=Ae+1,Ue=se[Ne];if(0>o(ke,ue))Ne<Y&&0>o(Ue,ke)?(se[O]=Ue,se[Ne]=ue,O=Ne):(se[O]=ke,se[Ae]=ue,O=Ae);else if(Ne<Y&&0>o(Ue,ue))se[O]=Ue,se[Ne]=ue,O=Ne;else break e}}return ge}function o(se,ge){var ue=se.sortIndex-ge.sortIndex;return ue!==0?ue:se.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var y=[],_=[],E=1,I=null,A=3,F=!1,q=!1,Q=!1,$=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(se){for(var ge=t(_);ge!==null;){if(ge.callback===null)s(_);else if(ge.startTime<=se)s(_),ge.sortIndex=ge.expirationTime,e(y,ge);else break;ge=t(_)}}function H(se){if(Q=!1,G(se),!q)if(t(y)!==null)q=!0,Rt(ee);else{var ge=t(_);ge!==null&&Ke(H,ge.startTime-se)}}function ee(se,ge){q=!1,Q&&(Q=!1,ie(T),T=-1),F=!0;var ue=A;try{for(G(ge),I=t(y);I!==null&&(!(I.expirationTime>ge)||se&&!P());){var O=I.callback;if(typeof O=="function"){I.callback=null,A=I.priorityLevel;var Y=O(I.expirationTime<=ge);ge=r.unstable_now(),typeof Y=="function"?I.callback=Y:I===t(y)&&s(y),G(ge)}else s(y);I=t(y)}if(I!==null)var Se=!0;else{var Ae=t(_);Ae!==null&&Ke(H,Ae.startTime-ge),Se=!1}return Se}finally{I=null,A=ue,F=!1}}var re=!1,N=null,T=-1,R=5,b=-1;function P(){return!(r.unstable_now()-b<R)}function L(){if(N!==null){var se=r.unstable_now();b=se;var ge=!0;try{ge=N(!0,se)}finally{ge?k():(re=!1,N=null)}}else re=!1}var k;if(typeof V=="function")k=function(){V(L)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,ft=ze.port2;ze.port1.onmessage=L,k=function(){ft.postMessage(null)}}else k=function(){$(L,0)};function Rt(se){N=se,re||(re=!0,k())}function Ke(se,ge){T=$(function(){se(r.unstable_now())},ge)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(se){se.callback=null},r.unstable_continueExecution=function(){q||F||(q=!0,Rt(ee))},r.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<se?Math.floor(1e3/se):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(y)},r.unstable_next=function(se){switch(A){case 1:case 2:case 3:var ge=3;break;default:ge=A}var ue=A;A=ge;try{return se()}finally{A=ue}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(se,ge){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ue=A;A=se;try{return ge()}finally{A=ue}},r.unstable_scheduleCallback=function(se,ge,ue){var O=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,se){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ue+Y,se={id:E++,callback:ge,priorityLevel:se,startTime:ue,expirationTime:Y,sortIndex:-1},ue>O?(se.sortIndex=ue,e(_,se),t(y)===null&&se===t(_)&&(Q?(ie(T),T=-1):Q=!0,Ke(H,ue-O))):(se.sortIndex=Y,e(y,se),q||F||(q=!0,Rt(ee))),se},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(se){var ge=A;return function(){var ue=A;A=ge;try{return se.apply(this,arguments)}finally{A=ue}}}})(Rd)),Rd}var Lg;function NE(){return Lg||(Lg=1,Ad.exports=kE()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function CE(){if(jg)return Zt;jg=1;var r=yf(),e=NE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function A(n){return y.call(I,n)?!0:y.call(E,n)?!1:_.test(n)?I[n]=!0:(E[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Q(n,i,a,c,d,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new Q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function V(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ie,V);$[i]=new Q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ie,V);$[i]=new Q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ie,V);$[i]=new Q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function G(n,i,a,c){var d=$.hasOwnProperty(i)?$[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,d,c)&&(a=null),c||d===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var H=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),re=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Ke=Symbol.for("react.offscreen"),se=Symbol.iterator;function ge(n){return n===null||typeof n!="object"?null:(n=se&&n[se]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,O;function Y(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Se=!1;function Ae(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),p=c.stack.split(`
`),w=d.length-1,S=p.length-1;1<=w&&0<=S&&d[w]!==p[S];)S--;for(;1<=w&&0<=S;w--,S--)if(d[w]!==p[S]){if(w!==1||S!==1)do if(w--,S--,0>S||d[w]!==p[S]){var C=`
`+d[w].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=w&&0<=S);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Y(n):""}function ke(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case re:return"Portal";case R:return"Profiler";case T:return"StrictMode";case k:return"Suspense";case ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ft:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case Rt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ht(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,p.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Vi(n){n._valueTracker||(n._valueTracker=Ht(n))}function Qo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Hr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Oi(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Nl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Oe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Li(n,i){i=i.checked,i!=null&&G(n,"checked",i,!1)}function Ws(n,i){Li(n,i);var a=Oe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pt(n,i.type,a):i.hasOwnProperty("defaultValue")&&pt(n,i.type,Oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Yo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function pt(n,i,a){(i!=="number"||Hr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lt=Array.isArray;function Rn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Jo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Oe(a)}}function Cl(n,i){var a=Oe(i.value),c=Oe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Wr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Zo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Zo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,Pl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qs(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bl=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(n){bl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Kr[i]=Kr[n]})});function Gr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Kr.hasOwnProperty(n)&&Kr[n]?(""+i).trim():i+"px"}function Mi(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Gr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ea=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,i){if(i){if(ea[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ui(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qr=null;function Fi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gr=null,yr=null,rt=null;function ta(n){if(n=ka(n)){if(typeof gr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=iu(i),gr(n.stateNode,n.type,i))}}function Yr(n){yr?rt?rt.push(n):rt=[n]:yr=n}function Jr(){if(yr){var n=yr,i=rt;if(rt=yr=null,ta(n),i)for(n=0;n<i.length;n++)ta(i[n])}}function Dl(n,i){return n(i)}function Vl(){}var zn=!1;function Ol(n,i,a){if(zn)return n(i,a);zn=!0;try{return Dl(n,i,a)}finally{zn=!1,(yr!==null||rt!==null)&&(Vl(),Jr())}}function Ks(n,i){var a=n.stateNode;if(a===null)return null;var c=iu(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Xr=!1;if(f)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Xr=!1}function Ll(n,i,a,c,d,p,w,S,C){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(X){this.onError(X)}}var _r=!1,Bn=null,zi=!1,yn=null,jl={onError:function(n){_r=!0,Bn=n}};function Ml(n,i,a,c,d,p,w,S,C){_r=!1,Bn=null,Ll.apply(jl,arguments)}function na(n,i,a,c,d,p,w,S,C){if(Ml.apply(this,arguments),_r){if(_r){var z=Bn;_r=!1,Bn=null}else throw Error(t(198));zi||(zi=!0,yn=z)}}function Nn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ra(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ul(n){if(Nn(n)!==n)throw Error(t(188))}function Fl(n){var i=n.alternate;if(!i){if(i=Nn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ul(d),n;if(p===c)return Ul(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var w=!1,S=d.child;S;){if(S===a){w=!0,a=d,c=p;break}if(S===c){w=!0,c=d,a=p;break}S=S.sibling}if(!w){for(S=p.child;S;){if(S===a){w=!0,a=p,c=d;break}if(S===c){w=!0,c=p,a=d;break}S=S.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zl(n){return n=Fl(n),n!==null?Gs(n):null}function Gs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Gs(n);if(i!==null)return i;n=n.sibling}return null}var sa=e.unstable_scheduleCallback,Bi=e.unstable_cancelCallback,Qs=e.unstable_shouldYield,vr=e.unstable_requestPaint,Ge=e.unstable_now,eh=e.unstable_getCurrentPriorityLevel,$i=e.unstable_ImmediatePriority,ia=e.unstable_UserBlockingPriority,Ys=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Hi=e.unstable_IdlePriority,Js=null,rn=null;function Bl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Js,n,void 0,(n.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:Xs,$n=Math.log,_n=Math.LN2;function Xs(n){return n>>>=0,n===0?32:31-($n(n)/_n|0)|0}var Hn=64,es=4194304;function Me(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,w=a&268435455;if(w!==0){var S=w&~d;S!==0?c=Me(S):(p&=w,p!==0&&(c=Me(p)))}else w=a&~d,w!==0?c=Me(w):p!==0&&(c=Me(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-sn(i),d=1<<a,c|=n[a],i&=~d;return c}function Zs(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ei(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var w=31-sn(p),S=1<<w,C=d[w];C===-1?((S&a)===0||(S&c)!==0)&&(d[w]=Zs(S,i)):C<=i&&(n.expiredLanes|=S),p&=~S}}function aa(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function la(){var n=Hn;return Hn<<=1,(Hn&4194240)===0&&(Hn=64),n}function ua(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ti(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-sn(i),n[i]=a}function th(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-sn(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function ca(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-sn(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var De=0;function Wn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ha,Wi,da,fa,pa,qn=!1,qi=[],Kn=null,Gn=null,kt=null,ni=new Map,Er=new Map,on=[],$l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ts(n,i){switch(n){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":ni.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(i.pointerId)}}function Cn(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ka(i),i!==null&&Wi(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Hl(n,i,a,c,d){switch(i){case"focusin":return Kn=Cn(Kn,n,i,a,c,d),!0;case"dragenter":return Gn=Cn(Gn,n,i,a,c,d),!0;case"mouseover":return kt=Cn(kt,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return ni.set(p,Cn(ni.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Er.set(p,Cn(Er.get(p)||null,n,i,a,c,d)),!0}return!1}function Ki(n){var i=oi(n.target);if(i!==null){var a=Nn(i);if(a!==null){if(i=a.tag,i===13){if(i=ra(a),i!==null){n.blockedOn=i,pa(n.priority,function(){da(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function He(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Gi(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Qr=c,a.target.dispatchEvent(c),Qr=null}else return i=ka(a),i!==null&&Wi(i),n.blockedOn=a,!1;i.shift()}return!0}function Wl(n,i,a){He(n)&&a.delete(i)}function nh(){qn=!1,Kn!==null&&He(Kn)&&(Kn=null),Gn!==null&&He(Gn)&&(Gn=null),kt!==null&&He(kt)&&(kt=null),ni.forEach(Wl),Er.forEach(Wl)}function ns(n,i){n.blockedOn===i&&(n.blockedOn=null,qn||(qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nh)))}function rs(n){function i(d){return ns(d,n)}if(0<qi.length){ns(qi[0],n);for(var a=1;a<qi.length;a++){var c=qi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Kn!==null&&ns(Kn,n),Gn!==null&&ns(Gn,n),kt!==null&&ns(kt,n),ni.forEach(i),Er.forEach(i),a=0;a<on.length;a++)c=on[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<on.length&&(a=on[0],a.blockedOn===null);)Ki(a),a.blockedOn===null&&on.shift()}var xr=H.ReactCurrentBatchConfig,Tr=!0;function Qn(n,i,a,c){var d=De,p=xr.transition;xr.transition=null;try{De=1,ma(n,i,a,c)}finally{De=d,xr.transition=p}}function ql(n,i,a,c){var d=De,p=xr.transition;xr.transition=null;try{De=4,ma(n,i,a,c)}finally{De=d,xr.transition=p}}function ma(n,i,a,c){if(Tr){var d=Gi(n,i,a,c);if(d===null)fh(n,i,c,Yn,a),ts(n,c);else if(Hl(d,n,i,a,c))c.stopPropagation();else if(ts(n,c),i&4&&-1<$l.indexOf(n)){for(;d!==null;){var p=ka(d);if(p!==null&&ha(p),p=Gi(n,i,a,c),p===null&&fh(n,i,c,Yn,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else fh(n,i,c,null,a)}}var Yn=null;function Gi(n,i,a,c){if(Yn=null,n=Fi(c),n=oi(n),n!==null)if(i=Nn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ra(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Yn=n,null}function Qi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eh()){case $i:return 1;case ia:return 4;case Ys:case oa:return 16;case Hi:return 536870912;default:return 16}default:return 16}}var an=null,Yi=null,Ir=null;function Kl(){if(Ir)return Ir;var n,i=Yi,a=i.length,c,d="value"in an?an.value:an.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[p-c];c++);return Ir=d.slice(n,1<c?1-c:void 0)}function ri(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Jn(){return!0}function ga(){return!1}function Ot(n){function i(a,c,d,p,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Jn:ga,this.isPropagationStopped=ga,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=Ot(Xn),ss=ue({},Xn,{view:0,detail:0}),Ji=Ot(ss),Xi,Zi,ln,ii=ue({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Te,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ln&&(ln&&n.type==="mousemove"?(Xi=n.screenX-ln.screenX,Zi=n.screenY-ln.screenY):Zi=Xi=0,ln=n),Xi)},movementY:function(n){return"movementY"in n?n.movementY:Zi}}),ya=Ot(ii),Gl=ue({},ii,{dataTransfer:0}),Ql=Ot(Gl),eo=ue({},ss,{relatedTarget:0}),Nt=Ot(eo),Yl=ue({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jl=Ot(Yl),is=ue({},Xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Ot(is),m=ue({},Xn,{data:0}),v=Ot(m),x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ne(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=B[n])?!!i[n]:!1}function Te(){return ne}var ut=ue({},ss,{key:function(n){if(n.key){var i=x[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ri(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Te,charCode:function(n){return n.type==="keypress"?ri(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ri(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=Ot(ut),mt=ue({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),un=Ot(mt),Sr=ue({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Te}),Zn=Ot(Sr),er=ue({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),to=Ot(er),_a=ue({},ii,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vw=Ot(_a),ww=[9,13,27,32],rh=f&&"CompositionEvent"in window,va=null;f&&"documentMode"in document&&(va=document.documentMode);var Ew=f&&"TextEvent"in window&&!va,Tp=f&&(!rh||va&&8<va&&11>=va),Ip=" ",Sp=!1;function Ap(n,i){switch(n){case"keyup":return ww.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var no=!1;function xw(n,i){switch(n){case"compositionend":return Rp(i);case"keypress":return i.which!==32?null:(Sp=!0,Ip);case"textInput":return n=i.data,n===Ip&&Sp?null:n;default:return null}}function Tw(n,i){if(no)return n==="compositionend"||!rh&&Ap(n,i)?(n=Kl(),Ir=Yi=an=null,no=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tp&&i.locale!=="ko"?null:i.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Iw[n.type]:i==="textarea"}function Np(n,i,a,c){Yr(c),i=nu(i,"onChange"),0<i.length&&(a=new si("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var wa=null,Ea=null;function Sw(n){Kp(n,0)}function Xl(n){var i=ao(n);if(Qo(i))return n}function Aw(n,i){if(n==="change")return i}var Cp=!1;if(f){var sh;if(f){var ih="oninput"in document;if(!ih){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),ih=typeof Pp.oninput=="function"}sh=ih}else sh=!1;Cp=sh&&(!document.documentMode||9<document.documentMode)}function bp(){wa&&(wa.detachEvent("onpropertychange",Dp),Ea=wa=null)}function Dp(n){if(n.propertyName==="value"&&Xl(Ea)){var i=[];Np(i,Ea,n,Fi(n)),Ol(Sw,i)}}function Rw(n,i,a){n==="focusin"?(bp(),wa=i,Ea=a,wa.attachEvent("onpropertychange",Dp)):n==="focusout"&&bp()}function kw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xl(Ea)}function Nw(n,i){if(n==="click")return Xl(i)}function Cw(n,i){if(n==="input"||n==="change")return Xl(i)}function Pw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pn=typeof Object.is=="function"?Object.is:Pw;function xa(n,i){if(Pn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(i,d)||!Pn(n[d],i[d]))return!1}return!0}function Vp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Op(n,i){var a=Vp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vp(a)}}function Lp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Lp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function jp(){for(var n=window,i=Hr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Hr(n.document)}return i}function oh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function bw(n){var i=jp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Lp(a.ownerDocument.documentElement,a)){if(c!==null&&oh(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Op(a,p);var w=Op(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dw=f&&"documentMode"in document&&11>=document.documentMode,ro=null,ah=null,Ta=null,lh=!1;function Mp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lh||ro==null||ro!==Hr(c)||(c=ro,"selectionStart"in c&&oh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&xa(Ta,c)||(Ta=c,c=nu(ah,"onSelect"),0<c.length&&(i=new si("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ro)))}function Zl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var so={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},uh={},Up={};f&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function eu(n){if(uh[n])return uh[n];if(!so[n])return n;var i=so[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Up)return uh[n]=i[a];return n}var Fp=eu("animationend"),zp=eu("animationiteration"),Bp=eu("animationstart"),$p=eu("transitionend"),Hp=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function os(n,i){Hp.set(n,i),l(i,[n])}for(var ch=0;ch<Wp.length;ch++){var hh=Wp[ch],Vw=hh.toLowerCase(),Ow=hh[0].toUpperCase()+hh.slice(1);os(Vw,"on"+Ow)}os(Fp,"onAnimationEnd"),os(zp,"onAnimationIteration"),os(Bp,"onAnimationStart"),os("dblclick","onDoubleClick"),os("focusin","onFocus"),os("focusout","onBlur"),os($p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function qp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,na(c,i,void 0,n),n.currentTarget=null}function Kp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var w=c.length-1;0<=w;w--){var S=c[w],C=S.instance,z=S.currentTarget;if(S=S.listener,C!==p&&d.isPropagationStopped())break e;qp(d,S,z),p=C}else for(w=0;w<c.length;w++){if(S=c[w],C=S.instance,z=S.currentTarget,S=S.listener,C!==p&&d.isPropagationStopped())break e;qp(d,S,z),p=C}}}if(zi)throw n=yn,zi=!1,yn=null,n}function Qe(n,i){var a=i[vh];a===void 0&&(a=i[vh]=new Set);var c=n+"__bubble";a.has(c)||(Gp(i,n,2,!1),a.add(c))}function dh(n,i,a){var c=0;i&&(c|=4),Gp(a,n,c,i)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Sa(n){if(!n[tu]){n[tu]=!0,s.forEach(function(a){a!=="selectionchange"&&(Lw.has(a)||dh(a,!1,n),dh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[tu]||(i[tu]=!0,dh("selectionchange",!1,i))}}function Gp(n,i,a,c){switch(Qi(i)){case 1:var d=Qn;break;case 4:d=ql;break;default:d=ma}a=d.bind(null,i,a,n),d=void 0,!Xr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function fh(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var C=w.tag;if((C===3||C===4)&&(C=w.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;w=w.return}for(;S!==null;){if(w=oi(S),w===null)return;if(C=w.tag,C===5||C===6){c=p=w;continue e}S=S.parentNode}}c=c.return}Ol(function(){var z=p,X=Fi(a),Z=[];e:{var J=Hp.get(n);if(J!==void 0){var ae=si,de=n;switch(n){case"keypress":if(ri(a)===0)break e;case"keydown":case"keyup":ae=Be;break;case"focusin":de="focus",ae=Nt;break;case"focusout":de="blur",ae=Nt;break;case"beforeblur":case"afterblur":ae=Nt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=Zn;break;case Fp:case zp:case Bp:ae=Jl;break;case $p:ae=to;break;case"scroll":ae=Ji;break;case"wheel":ae=vw;break;case"copy":case"cut":case"paste":ae=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=un}var fe=(i&4)!==0,ct=!fe&&n==="scroll",j=fe?J!==null?J+"Capture":null:J;fe=[];for(var D=z,U;D!==null;){U=D;var te=U.stateNode;if(U.tag===5&&te!==null&&(U=te,j!==null&&(te=Ks(D,j),te!=null&&fe.push(Aa(D,te,U)))),ct)break;D=D.return}0<fe.length&&(J=new ae(J,de,null,a,X),Z.push({event:J,listeners:fe}))}}if((i&7)===0){e:{if(J=n==="mouseover"||n==="pointerover",ae=n==="mouseout"||n==="pointerout",J&&a!==Qr&&(de=a.relatedTarget||a.fromElement)&&(oi(de)||de[Ar]))break e;if((ae||J)&&(J=X.window===X?X:(J=X.ownerDocument)?J.defaultView||J.parentWindow:window,ae?(de=a.relatedTarget||a.toElement,ae=z,de=de?oi(de):null,de!==null&&(ct=Nn(de),de!==ct||de.tag!==5&&de.tag!==6)&&(de=null)):(ae=null,de=z),ae!==de)){if(fe=ya,te="onMouseLeave",j="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(fe=un,te="onPointerLeave",j="onPointerEnter",D="pointer"),ct=ae==null?J:ao(ae),U=de==null?J:ao(de),J=new fe(te,D+"leave",ae,a,X),J.target=ct,J.relatedTarget=U,te=null,oi(X)===z&&(fe=new fe(j,D+"enter",de,a,X),fe.target=U,fe.relatedTarget=ct,te=fe),ct=te,ae&&de)t:{for(fe=ae,j=de,D=0,U=fe;U;U=io(U))D++;for(U=0,te=j;te;te=io(te))U++;for(;0<D-U;)fe=io(fe),D--;for(;0<U-D;)j=io(j),U--;for(;D--;){if(fe===j||j!==null&&fe===j.alternate)break t;fe=io(fe),j=io(j)}fe=null}else fe=null;ae!==null&&Qp(Z,J,ae,fe,!1),de!==null&&ct!==null&&Qp(Z,ct,de,fe,!0)}}e:{if(J=z?ao(z):window,ae=J.nodeName&&J.nodeName.toLowerCase(),ae==="select"||ae==="input"&&J.type==="file")var pe=Aw;else if(kp(J))if(Cp)pe=Cw;else{pe=kw;var ye=Rw}else(ae=J.nodeName)&&ae.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(pe=Nw);if(pe&&(pe=pe(n,z))){Np(Z,pe,a,X);break e}ye&&ye(n,J,z),n==="focusout"&&(ye=J._wrapperState)&&ye.controlled&&J.type==="number"&&pt(J,"number",J.value)}switch(ye=z?ao(z):window,n){case"focusin":(kp(ye)||ye.contentEditable==="true")&&(ro=ye,ah=z,Ta=null);break;case"focusout":Ta=ah=ro=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,Mp(Z,a,X);break;case"selectionchange":if(Dw)break;case"keydown":case"keyup":Mp(Z,a,X)}var _e;if(rh)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else no?Ap(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Tp&&a.locale!=="ko"&&(no||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&no&&(_e=Kl()):(an=X,Yi="value"in an?an.value:an.textContent,no=!0)),ye=nu(z,Ee),0<ye.length&&(Ee=new v(Ee,n,null,a,X),Z.push({event:Ee,listeners:ye}),_e?Ee.data=_e:(_e=Rp(a),_e!==null&&(Ee.data=_e)))),(_e=Ew?xw(n,a):Tw(n,a))&&(z=nu(z,"onBeforeInput"),0<z.length&&(X=new v("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:z}),X.data=_e))}Kp(Z,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function nu(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Ks(n,a),p!=null&&c.unshift(Aa(n,p,d)),p=Ks(n,i),p!=null&&c.push(Aa(n,p,d))),n=n.return}return c}function io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qp(n,i,a,c,d){for(var p=i._reactName,w=[];a!==null&&a!==c;){var S=a,C=S.alternate,z=S.stateNode;if(C!==null&&C===c)break;S.tag===5&&z!==null&&(S=z,d?(C=Ks(a,p),C!=null&&w.unshift(Aa(a,C,S))):d||(C=Ks(a,p),C!=null&&w.push(Aa(a,C,S)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var jw=/\r\n?/g,Mw=/\u0000|\uFFFD/g;function Yp(n){return(typeof n=="string"?n:""+n).replace(jw,`
`).replace(Mw,"")}function ru(n,i,a){if(i=Yp(i),Yp(n)!==i&&a)throw Error(t(425))}function su(){}var ph=null,mh=null;function gh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,Uw=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,Fw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(n){return Jp.resolve(null).then(n).catch(zw)}:yh;function zw(n){setTimeout(function(){throw n})}function _h(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),rs(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);rs(i)}function as(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Xp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var oo=Math.random().toString(36).slice(2),tr="__reactFiber$"+oo,Ra="__reactProps$"+oo,Ar="__reactContainer$"+oo,vh="__reactEvents$"+oo,Bw="__reactListeners$"+oo,$w="__reactHandles$"+oo;function oi(n){var i=n[tr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ar]||a[tr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Xp(n);n!==null;){if(a=n[tr])return a;n=Xp(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[tr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ao(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function iu(n){return n[Ra]||null}var wh=[],lo=-1;function ls(n){return{current:n}}function Ye(n){0>lo||(n.current=wh[lo],wh[lo]=null,lo--)}function We(n,i){lo++,wh[lo]=n.current,n.current=i}var us={},Lt=ls(us),Gt=ls(!1),ai=us;function uo(n,i){var a=n.type.contextTypes;if(!a)return us;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function ou(){Ye(Gt),Ye(Lt)}function Zp(n,i,a){if(Lt.current!==us)throw Error(t(168));We(Lt,i),We(Gt,a)}function em(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return ue({},a,c)}function au(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||us,ai=Lt.current,We(Lt,n),We(Gt,Gt.current),!0}function tm(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=em(n,i,ai),c.__reactInternalMemoizedMergedChildContext=n,Ye(Gt),Ye(Lt),We(Lt,n)):Ye(Gt),We(Gt,a)}var Rr=null,lu=!1,Eh=!1;function nm(n){Rr===null?Rr=[n]:Rr.push(n)}function Hw(n){lu=!0,nm(n)}function cs(){if(!Eh&&Rr!==null){Eh=!0;var n=0,i=De;try{var a=Rr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Rr=null,lu=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(n+1)),sa($i,cs),d}finally{De=i,Eh=!1}}return null}var co=[],ho=0,uu=null,cu=0,vn=[],wn=0,li=null,kr=1,Nr="";function ui(n,i){co[ho++]=cu,co[ho++]=uu,uu=n,cu=i}function rm(n,i,a){vn[wn++]=kr,vn[wn++]=Nr,vn[wn++]=li,li=n;var c=kr;n=Nr;var d=32-sn(c)-1;c&=~(1<<d),a+=1;var p=32-sn(i)+d;if(30<p){var w=d-d%5;p=(c&(1<<w)-1).toString(32),c>>=w,d-=w,kr=1<<32-sn(i)+d|a<<d|c,Nr=p+n}else kr=1<<p|a<<d|c,Nr=n}function xh(n){n.return!==null&&(ui(n,1),rm(n,1,0))}function Th(n){for(;n===uu;)uu=co[--ho],co[ho]=null,cu=co[--ho],co[ho]=null;for(;n===li;)li=vn[--wn],vn[wn]=null,Nr=vn[--wn],vn[wn]=null,kr=vn[--wn],vn[wn]=null}var cn=null,hn=null,Xe=!1,bn=null;function sm(n,i){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function im(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,cn=n,hn=as(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,cn=n,hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=li!==null?{id:kr,overflow:Nr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,cn=n,hn=null,!0):!1;default:return!1}}function Ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Sh(n){if(Xe){var i=hn;if(i){var a=i;if(!im(n,i)){if(Ih(n))throw Error(t(418));i=as(a.nextSibling);var c=cn;i&&im(n,i)?sm(c,a):(n.flags=n.flags&-4097|2,Xe=!1,cn=n)}}else{if(Ih(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,cn=n}}}function om(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;cn=n}function hu(n){if(n!==cn)return!1;if(!Xe)return om(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!gh(n.type,n.memoizedProps)),i&&(i=hn)){if(Ih(n))throw am(),Error(t(418));for(;i;)sm(n,i),i=as(i.nextSibling)}if(om(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hn=as(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hn=null}}else hn=cn?as(n.stateNode.nextSibling):null;return!0}function am(){for(var n=hn;n;)n=as(n.nextSibling)}function fo(){hn=cn=null,Xe=!1}function Ah(n){bn===null?bn=[n]:bn.push(n)}var Ww=H.ReactCurrentBatchConfig;function Na(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var S=d.refs;w===null?delete S[p]:S[p]=w},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function du(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function lm(n){var i=n._init;return i(n._payload)}function um(n){function i(j,D){if(n){var U=j.deletions;U===null?(j.deletions=[D],j.flags|=16):U.push(D)}}function a(j,D){if(!n)return null;for(;D!==null;)i(j,D),D=D.sibling;return null}function c(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function d(j,D){return j=_s(j,D),j.index=0,j.sibling=null,j}function p(j,D,U){return j.index=U,n?(U=j.alternate,U!==null?(U=U.index,U<D?(j.flags|=2,D):U):(j.flags|=2,D)):(j.flags|=1048576,D)}function w(j){return n&&j.alternate===null&&(j.flags|=2),j}function S(j,D,U,te){return D===null||D.tag!==6?(D=yd(U,j.mode,te),D.return=j,D):(D=d(D,U),D.return=j,D)}function C(j,D,U,te){var pe=U.type;return pe===N?X(j,D,U.props.children,te,U.key):D!==null&&(D.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Rt&&lm(pe)===D.type)?(te=d(D,U.props),te.ref=Na(j,D,U),te.return=j,te):(te=Lu(U.type,U.key,U.props,null,j.mode,te),te.ref=Na(j,D,U),te.return=j,te)}function z(j,D,U,te){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=_d(U,j.mode,te),D.return=j,D):(D=d(D,U.children||[]),D.return=j,D)}function X(j,D,U,te,pe){return D===null||D.tag!==7?(D=yi(U,j.mode,te,pe),D.return=j,D):(D=d(D,U),D.return=j,D)}function Z(j,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=yd(""+D,j.mode,U),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ee:return U=Lu(D.type,D.key,D.props,null,j.mode,U),U.ref=Na(j,null,D),U.return=j,U;case re:return D=_d(D,j.mode,U),D.return=j,D;case Rt:var te=D._init;return Z(j,te(D._payload),U)}if(lt(D)||ge(D))return D=yi(D,j.mode,U,null),D.return=j,D;du(j,D)}return null}function J(j,D,U,te){var pe=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return pe!==null?null:S(j,D,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ee:return U.key===pe?C(j,D,U,te):null;case re:return U.key===pe?z(j,D,U,te):null;case Rt:return pe=U._init,J(j,D,pe(U._payload),te)}if(lt(U)||ge(U))return pe!==null?null:X(j,D,U,te,null);du(j,U)}return null}function ae(j,D,U,te,pe){if(typeof te=="string"&&te!==""||typeof te=="number")return j=j.get(U)||null,S(D,j,""+te,pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case ee:return j=j.get(te.key===null?U:te.key)||null,C(D,j,te,pe);case re:return j=j.get(te.key===null?U:te.key)||null,z(D,j,te,pe);case Rt:var ye=te._init;return ae(j,D,U,ye(te._payload),pe)}if(lt(te)||ge(te))return j=j.get(U)||null,X(D,j,te,pe,null);du(D,te)}return null}function de(j,D,U,te){for(var pe=null,ye=null,_e=D,Ee=D=0,St=null;_e!==null&&Ee<U.length;Ee++){_e.index>Ee?(St=_e,_e=null):St=_e.sibling;var je=J(j,_e,U[Ee],te);if(je===null){_e===null&&(_e=St);break}n&&_e&&je.alternate===null&&i(j,_e),D=p(je,D,Ee),ye===null?pe=je:ye.sibling=je,ye=je,_e=St}if(Ee===U.length)return a(j,_e),Xe&&ui(j,Ee),pe;if(_e===null){for(;Ee<U.length;Ee++)_e=Z(j,U[Ee],te),_e!==null&&(D=p(_e,D,Ee),ye===null?pe=_e:ye.sibling=_e,ye=_e);return Xe&&ui(j,Ee),pe}for(_e=c(j,_e);Ee<U.length;Ee++)St=ae(_e,j,Ee,U[Ee],te),St!==null&&(n&&St.alternate!==null&&_e.delete(St.key===null?Ee:St.key),D=p(St,D,Ee),ye===null?pe=St:ye.sibling=St,ye=St);return n&&_e.forEach(function(vs){return i(j,vs)}),Xe&&ui(j,Ee),pe}function fe(j,D,U,te){var pe=ge(U);if(typeof pe!="function")throw Error(t(150));if(U=pe.call(U),U==null)throw Error(t(151));for(var ye=pe=null,_e=D,Ee=D=0,St=null,je=U.next();_e!==null&&!je.done;Ee++,je=U.next()){_e.index>Ee?(St=_e,_e=null):St=_e.sibling;var vs=J(j,_e,je.value,te);if(vs===null){_e===null&&(_e=St);break}n&&_e&&vs.alternate===null&&i(j,_e),D=p(vs,D,Ee),ye===null?pe=vs:ye.sibling=vs,ye=vs,_e=St}if(je.done)return a(j,_e),Xe&&ui(j,Ee),pe;if(_e===null){for(;!je.done;Ee++,je=U.next())je=Z(j,je.value,te),je!==null&&(D=p(je,D,Ee),ye===null?pe=je:ye.sibling=je,ye=je);return Xe&&ui(j,Ee),pe}for(_e=c(j,_e);!je.done;Ee++,je=U.next())je=ae(_e,j,Ee,je.value,te),je!==null&&(n&&je.alternate!==null&&_e.delete(je.key===null?Ee:je.key),D=p(je,D,Ee),ye===null?pe=je:ye.sibling=je,ye=je);return n&&_e.forEach(function(IE){return i(j,IE)}),Xe&&ui(j,Ee),pe}function ct(j,D,U,te){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case ee:e:{for(var pe=U.key,ye=D;ye!==null;){if(ye.key===pe){if(pe=U.type,pe===N){if(ye.tag===7){a(j,ye.sibling),D=d(ye,U.props.children),D.return=j,j=D;break e}}else if(ye.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Rt&&lm(pe)===ye.type){a(j,ye.sibling),D=d(ye,U.props),D.ref=Na(j,ye,U),D.return=j,j=D;break e}a(j,ye);break}else i(j,ye);ye=ye.sibling}U.type===N?(D=yi(U.props.children,j.mode,te,U.key),D.return=j,j=D):(te=Lu(U.type,U.key,U.props,null,j.mode,te),te.ref=Na(j,D,U),te.return=j,j=te)}return w(j);case re:e:{for(ye=U.key;D!==null;){if(D.key===ye)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(j,D.sibling),D=d(D,U.children||[]),D.return=j,j=D;break e}else{a(j,D);break}else i(j,D);D=D.sibling}D=_d(U,j.mode,te),D.return=j,j=D}return w(j);case Rt:return ye=U._init,ct(j,D,ye(U._payload),te)}if(lt(U))return de(j,D,U,te);if(ge(U))return fe(j,D,U,te);du(j,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(j,D.sibling),D=d(D,U),D.return=j,j=D):(a(j,D),D=yd(U,j.mode,te),D.return=j,j=D),w(j)):a(j,D)}return ct}var po=um(!0),cm=um(!1),fu=ls(null),pu=null,mo=null,Rh=null;function kh(){Rh=mo=pu=null}function Nh(n){var i=fu.current;Ye(fu),n._currentValue=i}function Ch(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function go(n,i){pu=n,Rh=mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yt=!0),n.firstContext=null)}function En(n){var i=n._currentValue;if(Rh!==n)if(n={context:n,memoizedValue:i,next:null},mo===null){if(pu===null)throw Error(t(308));mo=n,pu.dependencies={lanes:0,firstContext:n}}else mo=mo.next=n;return i}var ci=null;function Ph(n){ci===null?ci=[n]:ci.push(n)}function hm(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Ph(i)):(a.next=d.next,d.next=a),i.interleaved=a,Cr(n,c)}function Cr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hs=!1;function bh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ds(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Cr(n,a)}return d=c.interleaved,d===null?(i.next=i,Ph(c)):(i.next=d.next,d.next=i),c.interleaved=i,Cr(n,a)}function mu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ca(n,a)}}function fm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function gu(n,i,a,c){var d=n.updateQueue;hs=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var C=S,z=C.next;C.next=null,w===null?p=z:w.next=z,w=C;var X=n.alternate;X!==null&&(X=X.updateQueue,S=X.lastBaseUpdate,S!==w&&(S===null?X.firstBaseUpdate=z:S.next=z,X.lastBaseUpdate=C))}if(p!==null){var Z=d.baseState;w=0,X=z=C=null,S=p;do{var J=S.lane,ae=S.eventTime;if((c&J)===J){X!==null&&(X=X.next={eventTime:ae,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var de=n,fe=S;switch(J=i,ae=a,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){Z=de.call(ae,Z,J);break e}Z=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,J=typeof de=="function"?de.call(ae,Z,J):de,J==null)break e;Z=ue({},Z,J);break e;case 2:hs=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,J=d.effects,J===null?d.effects=[S]:J.push(S))}else ae={eventTime:ae,lane:J,tag:S.tag,payload:S.payload,callback:S.callback,next:null},X===null?(z=X=ae,C=Z):X=X.next=ae,w|=J;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;J=S,S=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);if(X===null&&(C=Z),d.baseState=C,d.firstBaseUpdate=z,d.lastBaseUpdate=X,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);fi|=w,n.lanes=w,n.memoizedState=Z}}function pm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ca={},nr=ls(Ca),Pa=ls(Ca),ba=ls(Ca);function hi(n){if(n===Ca)throw Error(t(174));return n}function Dh(n,i){switch(We(ba,i),We(Pa,n),We(nr,Ca),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ji(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ji(i,n)}Ye(nr),We(nr,i)}function yo(){Ye(nr),Ye(Pa),Ye(ba)}function mm(n){hi(ba.current);var i=hi(nr.current),a=ji(i,n.type);i!==a&&(We(Pa,n),We(nr,a))}function Vh(n){Pa.current===n&&(Ye(nr),Ye(Pa))}var et=ls(0);function yu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Oh=[];function Lh(){for(var n=0;n<Oh.length;n++)Oh[n]._workInProgressVersionPrimary=null;Oh.length=0}var _u=H.ReactCurrentDispatcher,jh=H.ReactCurrentBatchConfig,di=0,tt=null,wt=null,Tt=null,vu=!1,Da=!1,Va=0,qw=0;function jt(){throw Error(t(321))}function Mh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pn(n[a],i[a]))return!1;return!0}function Uh(n,i,a,c,d,p){if(di=p,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,_u.current=n===null||n.memoizedState===null?Yw:Jw,n=a(c,d),Da){p=0;do{if(Da=!1,Va=0,25<=p)throw Error(t(301));p+=1,Tt=wt=null,i.updateQueue=null,_u.current=Xw,n=a(c,d)}while(Da)}if(_u.current=xu,i=wt!==null&&wt.next!==null,di=0,Tt=wt=tt=null,vu=!1,i)throw Error(t(300));return n}function Fh(){var n=Va!==0;return Va=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function xn(){if(wt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var i=Tt===null?tt.memoizedState:Tt.next;if(i!==null)Tt=i,wt=n;else{if(n===null)throw Error(t(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Oa(n,i){return typeof i=="function"?i(n):i}function zh(n){var i=xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var S=w=null,C=null,z=p;do{var X=z.lane;if((di&X)===X)C!==null&&(C=C.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var Z={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};C===null?(S=C=Z,w=c):C=C.next=Z,tt.lanes|=X,fi|=X}z=z.next}while(z!==null&&z!==p);C===null?w=c:C.next=S,Pn(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,tt.lanes|=p,fi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Bh(n){var i=xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=n(p,w.action),w=w.next;while(w!==d);Pn(p,i.memoizedState)||(Yt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function gm(){}function ym(n,i){var a=tt,c=xn(),d=i(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,$h(wm.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,La(9,vm.bind(null,a,c,d,i),void 0,null),It===null)throw Error(t(349));(di&30)!==0||_m(a,i,d)}return d}function _m(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function vm(n,i,a,c){i.value=a,i.getSnapshot=c,Em(i)&&xm(n)}function wm(n,i,a){return a(function(){Em(i)&&xm(n)})}function Em(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pn(n,a)}catch{return!0}}function xm(n){var i=Cr(n,1);i!==null&&Ln(i,n,1,-1)}function Tm(n){var i=rr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:n},i.queue=n,n=n.dispatch=Qw.bind(null,tt,n),[i.memoizedState,n]}function La(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Im(){return xn().memoizedState}function wu(n,i,a,c){var d=rr();tt.flags|=n,d.memoizedState=La(1|i,a,void 0,c===void 0?null:c)}function Eu(n,i,a,c){var d=xn();c=c===void 0?null:c;var p=void 0;if(wt!==null){var w=wt.memoizedState;if(p=w.destroy,c!==null&&Mh(c,w.deps)){d.memoizedState=La(i,a,p,c);return}}tt.flags|=n,d.memoizedState=La(1|i,a,p,c)}function Sm(n,i){return wu(8390656,8,n,i)}function $h(n,i){return Eu(2048,8,n,i)}function Am(n,i){return Eu(4,2,n,i)}function Rm(n,i){return Eu(4,4,n,i)}function km(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Nm(n,i,a){return a=a!=null?a.concat([n]):null,Eu(4,4,km.bind(null,i,n),a)}function Hh(){}function Cm(n,i){var a=xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Pm(n,i){var a=xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function bm(n,i,a){return(di&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Pn(a,i)||(a=la(),tt.lanes|=a,fi|=a,n.baseState=!0),i)}function Kw(n,i){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=jh.transition;jh.transition={};try{n(!1),i()}finally{De=a,jh.transition=c}}function Dm(){return xn().memoizedState}function Gw(n,i,a){var c=gs(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Vm(n))Om(i,a);else if(a=hm(n,i,a,c),a!==null){var d=qt();Ln(a,n,c,d),Lm(a,i,c)}}function Qw(n,i,a){var c=gs(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vm(n))Om(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,S=p(w,a);if(d.hasEagerState=!0,d.eagerState=S,Pn(S,w)){var C=i.interleaved;C===null?(d.next=d,Ph(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=hm(n,i,d,c),a!==null&&(d=qt(),Ln(a,n,c,d),Lm(a,i,c))}}function Vm(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function Om(n,i){Da=vu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Lm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ca(n,a)}}var xu={readContext:En,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Yw={readContext:En,useCallback:function(n,i){return rr().memoizedState=[n,i===void 0?null:i],n},useContext:En,useEffect:Sm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,wu(4194308,4,km.bind(null,i,n),a)},useLayoutEffect:function(n,i){return wu(4194308,4,n,i)},useInsertionEffect:function(n,i){return wu(4,2,n,i)},useMemo:function(n,i){var a=rr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=rr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Gw.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=rr();return n={current:n},i.memoizedState=n},useState:Tm,useDebugValue:Hh,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=Tm(!1),i=n[0];return n=Kw.bind(null,n[1]),rr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,d=rr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),It===null)throw Error(t(349));(di&30)!==0||_m(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Sm(wm.bind(null,c,p,n),[n]),c.flags|=2048,La(9,vm.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=rr(),i=It.identifierPrefix;if(Xe){var a=Nr,c=kr;a=(c&~(1<<32-sn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=qw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Jw={readContext:En,useCallback:Cm,useContext:En,useEffect:$h,useImperativeHandle:Nm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Pm,useReducer:zh,useRef:Im,useState:function(){return zh(Oa)},useDebugValue:Hh,useDeferredValue:function(n){var i=xn();return bm(i,wt.memoizedState,n)},useTransition:function(){var n=zh(Oa)[0],i=xn().memoizedState;return[n,i]},useMutableSource:gm,useSyncExternalStore:ym,useId:Dm,unstable_isNewReconciler:!1},Xw={readContext:En,useCallback:Cm,useContext:En,useEffect:$h,useImperativeHandle:Nm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Pm,useReducer:Bh,useRef:Im,useState:function(){return Bh(Oa)},useDebugValue:Hh,useDeferredValue:function(n){var i=xn();return wt===null?i.memoizedState=n:bm(i,wt.memoizedState,n)},useTransition:function(){var n=Bh(Oa)[0],i=xn().memoizedState;return[n,i]},useMutableSource:gm,useSyncExternalStore:ym,useId:Dm,unstable_isNewReconciler:!1};function Dn(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Wh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Tu={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=gs(n),p=Pr(c,d);p.payload=i,a!=null&&(p.callback=a),i=ds(n,p,d),i!==null&&(Ln(i,n,d,c),mu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=gs(n),p=Pr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ds(n,p,d),i!==null&&(Ln(i,n,d,c),mu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=gs(n),d=Pr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ds(n,d,c),i!==null&&(Ln(i,n,c,a),mu(i,n,c))}};function jm(n,i,a,c,d,p,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,w):i.prototype&&i.prototype.isPureReactComponent?!xa(a,c)||!xa(d,p):!0}function Mm(n,i,a){var c=!1,d=us,p=i.contextType;return typeof p=="object"&&p!==null?p=En(p):(d=Qt(i)?ai:Lt.current,c=i.contextTypes,p=(c=c!=null)?uo(n,d):us),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Tu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Um(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Tu.enqueueReplaceState(i,i.state,null)}function qh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},bh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=En(p):(p=Qt(i)?ai:Lt.current,d.context=uo(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Wh(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Tu.enqueueReplaceState(d,d.state,null),gu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function _o(n,i){try{var a="",c=i;do a+=ke(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Kh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Gh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Zw=typeof WeakMap=="function"?WeakMap:Map;function Fm(n,i,a){a=Pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Cu||(Cu=!0,ud=c),Gh(n,i)},a}function zm(n,i,a){a=Pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Gh(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Gh(n,i),typeof c!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Bm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Zw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=fE.bind(null,n,i,a),i.then(n,n))}function $m(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Hm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pr(-1,1),i.tag=2,ds(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var eE=H.ReactCurrentOwner,Yt=!1;function Wt(n,i,a,c){i.child=n===null?cm(i,null,a,c):po(i,n.child,a,c)}function Wm(n,i,a,c,d){a=a.render;var p=i.ref;return go(i,d),c=Uh(n,i,a,c,p,d),a=Fh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,br(n,i,d)):(Xe&&a&&xh(i),i.flags|=1,Wt(n,i,c,d),i.child)}function qm(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!gd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Km(n,i,p,c,d)):(n=Lu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(w,c)&&n.ref===i.ref)return br(n,i,d)}return i.flags|=1,n=_s(p,c),n.ref=i.ref,n.return=i,i.child=n}function Km(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(xa(p,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return i.lanes=n.lanes,br(n,i,d)}return Qh(n,i,a,c,d)}function Gm(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(wo,dn),dn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(wo,dn),dn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(wo,dn),dn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,We(wo,dn),dn|=c;return Wt(n,i,d,a),i.child}function Qm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qh(n,i,a,c,d){var p=Qt(a)?ai:Lt.current;return p=uo(i,p),go(i,d),a=Uh(n,i,a,c,p,d),c=Fh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,br(n,i,d)):(Xe&&c&&xh(i),i.flags|=1,Wt(n,i,a,d),i.child)}function Ym(n,i,a,c,d){if(Qt(a)){var p=!0;au(i)}else p=!1;if(go(i,d),i.stateNode===null)Su(n,i),Mm(i,a,c),qh(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,S=i.memoizedProps;w.props=S;var C=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=En(z):(z=Qt(a)?ai:Lt.current,z=uo(i,z));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==c||C!==z)&&Um(i,w,c,z),hs=!1;var J=i.memoizedState;w.state=J,gu(i,c,w,d),C=i.memoizedState,S!==c||J!==C||Gt.current||hs?(typeof X=="function"&&(Wh(i,a,X,c),C=i.memoizedState),(S=hs||jm(i,a,S,c,J,C,z))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),w.props=c,w.state=C,w.context=z,c=S):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,dm(n,i),S=i.memoizedProps,z=i.type===i.elementType?S:Dn(i.type,S),w.props=z,Z=i.pendingProps,J=w.context,C=a.contextType,typeof C=="object"&&C!==null?C=En(C):(C=Qt(a)?ai:Lt.current,C=uo(i,C));var ae=a.getDerivedStateFromProps;(X=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==Z||J!==C)&&Um(i,w,c,C),hs=!1,J=i.memoizedState,w.state=J,gu(i,c,w,d);var de=i.memoizedState;S!==Z||J!==de||Gt.current||hs?(typeof ae=="function"&&(Wh(i,a,ae,c),de=i.memoizedState),(z=hs||jm(i,a,z,c,J,de,C)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,de,C),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,de,C)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||S===n.memoizedProps&&J===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&J===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=de),w.props=c,w.state=de,w.context=C,c=z):(typeof w.componentDidUpdate!="function"||S===n.memoizedProps&&J===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&J===n.memoizedState||(i.flags|=1024),c=!1)}return Yh(n,i,a,c,p,d)}function Yh(n,i,a,c,d,p){Qm(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&tm(i,a,!1),br(n,i,p);c=i.stateNode,eE.current=i;var S=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=po(i,n.child,null,p),i.child=po(i,null,S,p)):Wt(n,i,S,p),i.memoizedState=c.state,d&&tm(i,a,!0),i.child}function Jm(n){var i=n.stateNode;i.pendingContext?Zp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zp(n,i.context,!1),Dh(n,i.containerInfo)}function Xm(n,i,a,c,d){return fo(),Ah(d),i.flags|=256,Wt(n,i,a,c),i.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Xh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zm(n,i,a){var c=i.pendingProps,d=et.current,p=!1,w=(i.flags&128)!==0,S;if((S=w)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(et,d&1),n===null)return Sh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,p?(c=i.mode,p=i.child,w={mode:"hidden",children:w},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=ju(w,c,0,null),n=yi(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Xh(a),i.memoizedState=Jh,n):Zh(i,w));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return tE(n,i,w,c,S,d,a);if(p){p=c.fallback,w=i.mode,d=n.child,S=d.sibling;var C={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=_s(d,C),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=_s(S,p):(p=yi(p,w,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,w=n.child.memoizedState,w=w===null?Xh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=n.childLanes&~a,i.memoizedState=Jh,c}return p=n.child,n=p.sibling,c=_s(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Zh(n,i){return i=ju({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Iu(n,i,a,c){return c!==null&&Ah(c),po(i,n.child,null,a),n=Zh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function tE(n,i,a,c,d,p,w){if(a)return i.flags&256?(i.flags&=-257,c=Kh(Error(t(422))),Iu(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=ju({mode:"visible",children:c.children},d,0,null),p=yi(p,d,w,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&po(i,n.child,null,w),i.child.memoizedState=Xh(w),i.memoizedState=Jh,p);if((i.mode&1)===0)return Iu(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,p=Error(t(419)),c=Kh(p,c,void 0),Iu(n,i,w,c)}if(S=(w&n.childLanes)!==0,Yt||S){if(c=It,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Cr(n,d),Ln(c,n,d,-1))}return md(),c=Kh(Error(t(421))),Iu(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=pE.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,hn=as(d.nextSibling),cn=i,Xe=!0,bn=null,n!==null&&(vn[wn++]=kr,vn[wn++]=Nr,vn[wn++]=li,kr=n.id,Nr=n.overflow,li=i),i=Zh(i,c.children),i.flags|=4096,i)}function eg(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Ch(n.return,i,a)}function ed(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function tg(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Wt(n,i,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&eg(n,a,i);else if(n.tag===19)eg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(et,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&yu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),ed(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&yu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ed(i,!0,a,null,p);break;case"together":ed(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Su(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function br(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),fi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_s(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_s(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function nE(n,i,a){switch(i.tag){case 3:Jm(i),fo();break;case 5:mm(i);break;case 1:Qt(i.type)&&au(i);break;case 4:Dh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(fu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(et,et.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Zm(n,i,a):(We(et,et.current&1),n=br(n,i,a),n!==null?n.sibling:null);We(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return tg(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,Gm(n,i,a)}return br(n,i,a)}var ng,td,rg,sg;ng=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},td=function(){},rg=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,hi(nr.current);var p=null;switch(a){case"input":d=Oi(n,d),c=Oi(n,c),p=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),p=[];break;case"textarea":d=Jo(n,d),c=Jo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=su)}kn(a,c);var w;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var S=d[z];for(w in S)S.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in c){var C=c[z];if(S=d?.[z],c.hasOwnProperty(z)&&C!==S&&(C!=null||S!=null))if(z==="style")if(S){for(w in S)!S.hasOwnProperty(w)||C&&C.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in C)C.hasOwnProperty(w)&&S[w]!==C[w]&&(a||(a={}),a[w]=C[w])}else a||(p||(p=[]),p.push(z,a)),a=C;else z==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,S=S?S.__html:void 0,C!=null&&S!==C&&(p=p||[]).push(z,C)):z==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(z,""+C):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(C!=null&&z==="onScroll"&&Qe("scroll",n),p||S===C||(p=[])):(p=p||[]).push(z,C))}a&&(p=p||[]).push("style",a);var z=p;(i.updateQueue=z)&&(i.flags|=4)}},sg=function(n,i,a,c){a!==c&&(i.flags|=4)};function ja(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function rE(n,i,a){var c=i.pendingProps;switch(Th(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Qt(i.type)&&ou(),Mt(i),null;case 3:return c=i.stateNode,yo(),Ye(Gt),Ye(Lt),Lh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(hu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bn!==null&&(dd(bn),bn=null))),td(n,i),Mt(i),null;case 5:Vh(i);var d=hi(ba.current);if(a=i.type,n!==null&&i.stateNode!=null)rg(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=hi(nr.current),hu(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[tr]=i,c[Ra]=p,n=(i.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)Qe(Ia[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Nl(c,p),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Qe("invalid",c);break;case"textarea":Xo(c,p),Qe("invalid",c)}kn(a,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var S=p[w];w==="children"?typeof S=="string"?c.textContent!==S&&(p.suppressHydrationWarning!==!0&&ru(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&ru(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(w)&&S!=null&&w==="onScroll"&&Qe("scroll",c)}switch(a){case"input":Vi(c),Yo(c,p,!0);break;case"textarea":Vi(c),Wr(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=su)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Zo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[tr]=i,n[Ra]=c,ng(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ui(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)Qe(Ia[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":Nl(n,c),d=Oi(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Xo(n,c),d=Jo(n,c),Qe("invalid",n);break;default:d=c}kn(a,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var C=S[p];p==="style"?Mi(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Pl(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&qs(n,C):typeof C=="number"&&qs(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Qe("scroll",n):C!=null&&G(n,p,C,w))}switch(a){case"input":Vi(n),Yo(n,c,!1);break;case"textarea":Vi(n),Wr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Rn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Rn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=su)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)sg(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=hi(ba.current),hi(nr.current),hu(i)){if(c=i.stateNode,a=i.memoizedProps,c[tr]=i,(p=c.nodeValue!==a)&&(n=cn,n!==null))switch(n.tag){case 3:ru(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ru(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=i,i.stateNode=c}return Mt(i),null;case 13:if(Ye(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)am(),fo(),i.flags|=98560,p=!1;else if(p=hu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[tr]=i}else fo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),p=!1}else bn!==null&&(dd(bn),bn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(et.current&1)!==0?Et===0&&(Et=3):md())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return yo(),td(n,i),n===null&&Sa(i.stateNode.containerInfo),Mt(i),null;case 10:return Nh(i.type._context),Mt(i),null;case 17:return Qt(i.type)&&ou(),Mt(i),null;case 19:if(Ye(et),p=i.memoizedState,p===null)return Mt(i),null;if(c=(i.flags&128)!==0,w=p.rendering,w===null)if(c)ja(p,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=yu(n),w!==null){for(i.flags|=128,ja(p,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,n=w.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(et,et.current&1|2),i.child}n=n.sibling}p.tail!==null&&Ge()>Eo&&(i.flags|=128,c=!0,ja(p,!1),i.lanes=4194304)}else{if(!c)if(n=yu(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ja(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Xe)return Mt(i),null}else 2*Ge()-p.renderingStartTime>Eo&&a!==1073741824&&(i.flags|=128,c=!0,ja(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(a=p.last,a!==null?a.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ge(),i.sibling=null,a=et.current,We(et,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return pd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(dn&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function sE(n,i){switch(Th(i),i.tag){case 1:return Qt(i.type)&&ou(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return yo(),Ye(Gt),Ye(Lt),Lh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Vh(i),null;case 13:if(Ye(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));fo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ye(et),null;case 4:return yo(),null;case 10:return Nh(i.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var Au=!1,Ut=!1,iE=typeof WeakSet=="function"?WeakSet:Set,ce=null;function vo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,i,c)}else a.current=null}function nd(n,i,a){try{a()}catch(c){st(n,i,c)}}var ig=!1;function oE(n,i){if(ph=Tr,n=jp(),oh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,S=-1,C=-1,z=0,X=0,Z=n,J=null;t:for(;;){for(var ae;Z!==a||d!==0&&Z.nodeType!==3||(S=w+d),Z!==p||c!==0&&Z.nodeType!==3||(C=w+c),Z.nodeType===3&&(w+=Z.nodeValue.length),(ae=Z.firstChild)!==null;)J=Z,Z=ae;for(;;){if(Z===n)break t;if(J===a&&++z===d&&(S=w),J===p&&++X===c&&(C=w),(ae=Z.nextSibling)!==null)break;Z=J,J=Z.parentNode}Z=ae}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(mh={focusedElem:n,selectionRange:a},Tr=!1,ce=i;ce!==null;)if(i=ce,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ce=n;else for(;ce!==null;){i=ce;try{var de=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,ct=de.memoizedState,j=i.stateNode,D=j.getSnapshotBeforeUpdate(i.elementType===i.type?fe:Dn(i.type,fe),ct);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){st(i,i.return,te)}if(n=i.sibling,n!==null){n.return=i.return,ce=n;break}ce=i.return}return de=ig,ig=!1,de}function Ma(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&nd(i,a,p)}d=d.next}while(d!==c)}}function Ru(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function rd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function og(n){var i=n.alternate;i!==null&&(n.alternate=null,og(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[tr],delete i[Ra],delete i[vh],delete i[Bw],delete i[$w])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ag(n){return n.tag===5||n.tag===3||n.tag===4}function lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ag(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=su));else if(c!==4&&(n=n.child,n!==null))for(sd(n,i,a),n=n.sibling;n!==null;)sd(n,i,a),n=n.sibling}function id(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(id(n,i,a),n=n.sibling;n!==null;)id(n,i,a),n=n.sibling}var Ct=null,Vn=!1;function fs(n,i,a){for(a=a.child;a!==null;)ug(n,i,a),a=a.sibling}function ug(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Js,a)}catch{}switch(a.tag){case 5:Ut||vo(a,i);case 6:var c=Ct,d=Vn;Ct=null,fs(n,i,a),Ct=c,Vn=d,Ct!==null&&(Vn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Vn?(n=Ct,a=a.stateNode,n.nodeType===8?_h(n.parentNode,a):n.nodeType===1&&_h(n,a),rs(n)):_h(Ct,a.stateNode));break;case 4:c=Ct,d=Vn,Ct=a.stateNode.containerInfo,Vn=!0,fs(n,i,a),Ct=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&nd(a,i,w),d=d.next}while(d!==c)}fs(n,i,a);break;case 1:if(!Ut&&(vo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){st(a,i,S)}fs(n,i,a);break;case 21:fs(n,i,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,fs(n,i,a),Ut=c):fs(n,i,a);break;default:fs(n,i,a)}}function cg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new iE),i.forEach(function(c){var d=mE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,w=i,S=w;e:for(;S!==null;){switch(S.tag){case 5:Ct=S.stateNode,Vn=!1;break e;case 3:Ct=S.stateNode.containerInfo,Vn=!0;break e;case 4:Ct=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(Ct===null)throw Error(t(160));ug(p,w,d),Ct=null,Vn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(z){st(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hg(i,n),i=i.sibling}function hg(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(i,n),sr(n),c&4){try{Ma(3,n,n.return),Ru(3,n)}catch(fe){st(n,n.return,fe)}try{Ma(5,n,n.return)}catch(fe){st(n,n.return,fe)}}break;case 1:On(i,n),sr(n),c&512&&a!==null&&vo(a,a.return);break;case 5:if(On(i,n),sr(n),c&512&&a!==null&&vo(a,a.return),n.flags&32){var d=n.stateNode;try{qs(d,"")}catch(fe){st(n,n.return,fe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,w=a!==null?a.memoizedProps:p,S=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Li(d,p),Ui(S,w);var z=Ui(S,p);for(w=0;w<C.length;w+=2){var X=C[w],Z=C[w+1];X==="style"?Mi(d,Z):X==="dangerouslySetInnerHTML"?Pl(d,Z):X==="children"?qs(d,Z):G(d,X,Z,z)}switch(S){case"input":Ws(d,p);break;case"textarea":Cl(d,p);break;case"select":var J=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ae=p.value;ae!=null?Rn(d,!!p.multiple,ae,!1):J!==!!p.multiple&&(p.defaultValue!=null?Rn(d,!!p.multiple,p.defaultValue,!0):Rn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ra]=p}catch(fe){st(n,n.return,fe)}}break;case 6:if(On(i,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(fe){st(n,n.return,fe)}}break;case 3:if(On(i,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(i.containerInfo)}catch(fe){st(n,n.return,fe)}break;case 4:On(i,n),sr(n);break;case 13:On(i,n),sr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ld=Ge())),c&4&&cg(n);break;case 22:if(X=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(z=Ut)||X,On(i,n),Ut=z):On(i,n),sr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!X&&(n.mode&1)!==0)for(ce=n,X=n.child;X!==null;){for(Z=ce=X;ce!==null;){switch(J=ce,ae=J.child,J.tag){case 0:case 11:case 14:case 15:Ma(4,J,J.return);break;case 1:vo(J,J.return);var de=J.stateNode;if(typeof de.componentWillUnmount=="function"){c=J,a=J.return;try{i=c,de.props=i.memoizedProps,de.state=i.memoizedState,de.componentWillUnmount()}catch(fe){st(c,a,fe)}}break;case 5:vo(J,J.return);break;case 22:if(J.memoizedState!==null){pg(Z);continue}}ae!==null?(ae.return=J,ce=ae):pg(Z)}X=X.sibling}e:for(X=null,Z=n;;){if(Z.tag===5){if(X===null){X=Z;try{d=Z.stateNode,z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=Z.stateNode,C=Z.memoizedProps.style,w=C!=null&&C.hasOwnProperty("display")?C.display:null,S.style.display=Gr("display",w))}catch(fe){st(n,n.return,fe)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(fe){st(n,n.return,fe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===n)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===n)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===n)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:On(i,n),sr(n),c&4&&cg(n);break;case 21:break;default:On(i,n),sr(n)}}function sr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(ag(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(qs(d,""),c.flags&=-33);var p=lg(n);id(n,p,d);break;case 3:case 4:var w=c.stateNode.containerInfo,S=lg(n);sd(n,S,w);break;default:throw Error(t(161))}}catch(C){st(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function aE(n,i,a){ce=n,dg(n)}function dg(n,i,a){for(var c=(n.mode&1)!==0;ce!==null;){var d=ce,p=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Au;if(!w){var S=d.alternate,C=S!==null&&S.memoizedState!==null||Ut;S=Au;var z=Ut;if(Au=w,(Ut=C)&&!z)for(ce=d;ce!==null;)w=ce,C=w.child,w.tag===22&&w.memoizedState!==null?mg(d):C!==null?(C.return=w,ce=C):mg(d);for(;p!==null;)ce=p,dg(p),p=p.sibling;ce=d,Au=S,Ut=z}fg(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ce=p):fg(n)}}function fg(n){for(;ce!==null;){var i=ce;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ut||Ru(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Dn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&pm(i,p,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}pm(i,w,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&rs(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||i.flags&512&&rd(i)}catch(J){st(i,i.return,J)}}if(i===n){ce=null;break}if(a=i.sibling,a!==null){a.return=i.return,ce=a;break}ce=i.return}}function pg(n){for(;ce!==null;){var i=ce;if(i===n){ce=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ce=a;break}ce=i.return}}function mg(n){for(;ce!==null;){var i=ce;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ru(4,i)}catch(C){st(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){st(i,d,C)}}var p=i.return;try{rd(i)}catch(C){st(i,p,C)}break;case 5:var w=i.return;try{rd(i)}catch(C){st(i,w,C)}}}catch(C){st(i,i.return,C)}if(i===n){ce=null;break}var S=i.sibling;if(S!==null){S.return=i.return,ce=S;break}ce=i.return}}var lE=Math.ceil,ku=H.ReactCurrentDispatcher,od=H.ReactCurrentOwner,Tn=H.ReactCurrentBatchConfig,Le=0,It=null,gt=null,Pt=0,dn=0,wo=ls(0),Et=0,Ua=null,fi=0,Nu=0,ad=0,Fa=null,Jt=null,ld=0,Eo=1/0,Dr=null,Cu=!1,ud=null,ps=null,Pu=!1,ms=null,bu=0,za=0,cd=null,Du=-1,Vu=0;function qt(){return(Le&6)!==0?Ge():Du!==-1?Du:Du=Ge()}function gs(n){return(n.mode&1)===0?1:(Le&2)!==0&&Pt!==0?Pt&-Pt:Ww.transition!==null?(Vu===0&&(Vu=la()),Vu):(n=De,n!==0||(n=window.event,n=n===void 0?16:Qi(n.type)),n)}function Ln(n,i,a,c){if(50<za)throw za=0,cd=null,Error(t(185));ti(n,a,c),((Le&2)===0||n!==It)&&(n===It&&((Le&2)===0&&(Nu|=a),Et===4&&ys(n,Pt)),Xt(n,c),a===1&&Le===0&&(i.mode&1)===0&&(Eo=Ge()+500,lu&&cs()))}function Xt(n,i){var a=n.callbackNode;ei(n,i);var c=wr(n,n===It?Pt:0);if(c===0)a!==null&&Bi(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Bi(a),i===1)n.tag===0?Hw(yg.bind(null,n)):nm(yg.bind(null,n)),Fw(function(){(Le&6)===0&&cs()}),a=null;else{switch(Wn(c)){case 1:a=$i;break;case 4:a=ia;break;case 16:a=Ys;break;case 536870912:a=Hi;break;default:a=Ys}a=Sg(a,gg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function gg(n,i){if(Du=-1,Vu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(xo()&&n.callbackNode!==a)return null;var c=wr(n,n===It?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ou(n,c);else{i=c;var d=Le;Le|=2;var p=vg();(It!==n||Pt!==i)&&(Dr=null,Eo=Ge()+500,mi(n,i));do try{hE();break}catch(S){_g(n,S)}while(!0);kh(),ku.current=p,Le=d,gt!==null?i=0:(It=null,Pt=0,i=Et)}if(i!==0){if(i===2&&(d=aa(n),d!==0&&(c=d,i=hd(n,d))),i===1)throw a=Ua,mi(n,0),ys(n,c),Xt(n,Ge()),a;if(i===6)ys(n,c);else{if(d=n.current.alternate,(c&30)===0&&!uE(d)&&(i=Ou(n,c),i===2&&(p=aa(n),p!==0&&(c=p,i=hd(n,p))),i===1))throw a=Ua,mi(n,0),ys(n,c),Xt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:gi(n,Jt,Dr);break;case 3:if(ys(n,c),(c&130023424)===c&&(i=ld+500-Ge(),10<i)){if(wr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=yh(gi.bind(null,n,Jt,Dr),i);break}gi(n,Jt,Dr);break;case 4:if(ys(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-sn(c);p=1<<w,w=i[w],w>d&&(d=w),c&=~p}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*lE(c/1960))-c,10<c){n.timeoutHandle=yh(gi.bind(null,n,Jt,Dr),c);break}gi(n,Jt,Dr);break;case 5:gi(n,Jt,Dr);break;default:throw Error(t(329))}}}return Xt(n,Ge()),n.callbackNode===a?gg.bind(null,n):null}function hd(n,i){var a=Fa;return n.current.memoizedState.isDehydrated&&(mi(n,i).flags|=256),n=Ou(n,i),n!==2&&(i=Jt,Jt=a,i!==null&&dd(i)),n}function dd(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function uE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ys(n,i){for(i&=~ad,i&=~Nu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-sn(i),c=1<<a;n[a]=-1,i&=~c}}function yg(n){if((Le&6)!==0)throw Error(t(327));xo();var i=wr(n,0);if((i&1)===0)return Xt(n,Ge()),null;var a=Ou(n,i);if(n.tag!==0&&a===2){var c=aa(n);c!==0&&(i=c,a=hd(n,c))}if(a===1)throw a=Ua,mi(n,0),ys(n,i),Xt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,gi(n,Jt,Dr),Xt(n,Ge()),null}function fd(n,i){var a=Le;Le|=1;try{return n(i)}finally{Le=a,Le===0&&(Eo=Ge()+500,lu&&cs())}}function pi(n){ms!==null&&ms.tag===0&&(Le&6)===0&&xo();var i=Le;Le|=1;var a=Tn.transition,c=De;try{if(Tn.transition=null,De=1,n)return n()}finally{De=c,Tn.transition=a,Le=i,(Le&6)===0&&cs()}}function pd(){dn=wo.current,Ye(wo)}function mi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Uw(a)),gt!==null)for(a=gt.return;a!==null;){var c=a;switch(Th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ou();break;case 3:yo(),Ye(Gt),Ye(Lt),Lh();break;case 5:Vh(c);break;case 4:yo();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:Nh(c.type._context);break;case 22:case 23:pd()}a=a.return}if(It=n,gt=n=_s(n.current,null),Pt=dn=i,Et=0,Ua=null,ad=Nu=fi=0,Jt=Fa=null,ci!==null){for(i=0;i<ci.length;i++)if(a=ci[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var w=p.next;p.next=d,c.next=w}a.pending=c}ci=null}return n}function _g(n,i){do{var a=gt;try{if(kh(),_u.current=xu,vu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}vu=!1}if(di=0,Tt=wt=tt=null,Da=!1,Va=0,od.current=null,a===null||a.return===null){Et=1,Ua=i,gt=null;break}e:{var p=n,w=a.return,S=a,C=i;if(i=Pt,S.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var z=C,X=S,Z=X.tag;if((X.mode&1)===0&&(Z===0||Z===11||Z===15)){var J=X.alternate;J?(X.updateQueue=J.updateQueue,X.memoizedState=J.memoizedState,X.lanes=J.lanes):(X.updateQueue=null,X.memoizedState=null)}var ae=$m(w);if(ae!==null){ae.flags&=-257,Hm(ae,w,S,p,i),ae.mode&1&&Bm(p,z,i),i=ae,C=z;var de=i.updateQueue;if(de===null){var fe=new Set;fe.add(C),i.updateQueue=fe}else de.add(C);break e}else{if((i&1)===0){Bm(p,z,i),md();break e}C=Error(t(426))}}else if(Xe&&S.mode&1){var ct=$m(w);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Hm(ct,w,S,p,i),Ah(_o(C,S));break e}}p=C=_o(C,S),Et!==4&&(Et=2),Fa===null?Fa=[p]:Fa.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var j=Fm(p,C,i);fm(p,j);break e;case 1:S=C;var D=p.type,U=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ps===null||!ps.has(U)))){p.flags|=65536,i&=-i,p.lanes|=i;var te=zm(p,S,i);fm(p,te);break e}}p=p.return}while(p!==null)}Eg(a)}catch(pe){i=pe,gt===a&&a!==null&&(gt=a=a.return);continue}break}while(!0)}function vg(){var n=ku.current;return ku.current=xu,n===null?xu:n}function md(){(Et===0||Et===3||Et===2)&&(Et=4),It===null||(fi&268435455)===0&&(Nu&268435455)===0||ys(It,Pt)}function Ou(n,i){var a=Le;Le|=2;var c=vg();(It!==n||Pt!==i)&&(Dr=null,mi(n,i));do try{cE();break}catch(d){_g(n,d)}while(!0);if(kh(),Le=a,ku.current=c,gt!==null)throw Error(t(261));return It=null,Pt=0,Et}function cE(){for(;gt!==null;)wg(gt)}function hE(){for(;gt!==null&&!Qs();)wg(gt)}function wg(n){var i=Ig(n.alternate,n,dn);n.memoizedProps=n.pendingProps,i===null?Eg(n):gt=i,od.current=null}function Eg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=rE(a,i,dn),a!==null){gt=a;return}}else{if(a=sE(a,i),a!==null){a.flags&=32767,gt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Et=6,gt=null;return}}if(i=i.sibling,i!==null){gt=i;return}gt=i=n}while(i!==null);Et===0&&(Et=5)}function gi(n,i,a){var c=De,d=Tn.transition;try{Tn.transition=null,De=1,dE(n,i,a,c)}finally{Tn.transition=d,De=c}return null}function dE(n,i,a,c){do xo();while(ms!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(th(n,p),n===It&&(gt=It=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Pu||(Pu=!0,Sg(Ys,function(){return xo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Tn.transition,Tn.transition=null;var w=De;De=1;var S=Le;Le|=4,od.current=null,oE(n,a),hg(a,n),bw(mh),Tr=!!ph,mh=ph=null,n.current=a,aE(a),vr(),Le=S,De=w,Tn.transition=p}else n.current=a;if(Pu&&(Pu=!1,ms=n,bu=d),p=n.pendingLanes,p===0&&(ps=null),Bl(a.stateNode),Xt(n,Ge()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Cu)throw Cu=!1,n=ud,ud=null,n;return(bu&1)!==0&&n.tag!==0&&xo(),p=n.pendingLanes,(p&1)!==0?n===cd?za++:(za=0,cd=n):za=0,cs(),null}function xo(){if(ms!==null){var n=Wn(bu),i=Tn.transition,a=De;try{if(Tn.transition=null,De=16>n?16:n,ms===null)var c=!1;else{if(n=ms,ms=null,bu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ce=n.current;ce!==null;){var p=ce,w=p.child;if((ce.flags&16)!==0){var S=p.deletions;if(S!==null){for(var C=0;C<S.length;C++){var z=S[C];for(ce=z;ce!==null;){var X=ce;switch(X.tag){case 0:case 11:case 15:Ma(8,X,p)}var Z=X.child;if(Z!==null)Z.return=X,ce=Z;else for(;ce!==null;){X=ce;var J=X.sibling,ae=X.return;if(og(X),X===z){ce=null;break}if(J!==null){J.return=ae,ce=J;break}ce=ae}}}var de=p.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var ct=fe.sibling;fe.sibling=null,fe=ct}while(fe!==null)}}ce=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ce=w;else e:for(;ce!==null;){if(p=ce,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ma(9,p,p.return)}var j=p.sibling;if(j!==null){j.return=p.return,ce=j;break e}ce=p.return}}var D=n.current;for(ce=D;ce!==null;){w=ce;var U=w.child;if((w.subtreeFlags&2064)!==0&&U!==null)U.return=w,ce=U;else e:for(w=D;ce!==null;){if(S=ce,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Ru(9,S)}}catch(pe){st(S,S.return,pe)}if(S===w){ce=null;break e}var te=S.sibling;if(te!==null){te.return=S.return,ce=te;break e}ce=S.return}}if(Le=d,cs(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Js,n)}catch{}c=!0}return c}finally{De=a,Tn.transition=i}}return!1}function xg(n,i,a){i=_o(a,i),i=Fm(n,i,1),n=ds(n,i,1),i=qt(),n!==null&&(ti(n,1,i),Xt(n,i))}function st(n,i,a){if(n.tag===3)xg(n,n,a);else for(;i!==null;){if(i.tag===3){xg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ps===null||!ps.has(c))){n=_o(a,n),n=zm(i,n,1),i=ds(i,n,1),n=qt(),i!==null&&(ti(i,1,n),Xt(i,n));break}}i=i.return}}function fE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Pt&a)===a&&(Et===4||Et===3&&(Pt&130023424)===Pt&&500>Ge()-ld?mi(n,0):ad|=a),Xt(n,i)}function Tg(n,i){i===0&&((n.mode&1)===0?i=1:(i=es,es<<=1,(es&130023424)===0&&(es=4194304)));var a=qt();n=Cr(n,i),n!==null&&(ti(n,i,a),Xt(n,a))}function pE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Tg(n,a)}function mE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Tg(n,a)}var Ig;Ig=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gt.current)Yt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yt=!1,nE(n,i,a);Yt=(n.flags&131072)!==0}else Yt=!1,Xe&&(i.flags&1048576)!==0&&rm(i,cu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Su(n,i),n=i.pendingProps;var d=uo(i,Lt.current);go(i,a),d=Uh(null,i,c,n,d,a);var p=Fh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(p=!0,au(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bh(i),d.updater=Tu,i.stateNode=d,d._reactInternals=i,qh(i,c,n,a),i=Yh(null,i,c,!0,p,a)):(i.tag=0,Xe&&p&&xh(i),Wt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Su(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=yE(c),n=Dn(c,n),d){case 0:i=Qh(null,i,c,n,a);break e;case 1:i=Ym(null,i,c,n,a);break e;case 11:i=Wm(null,i,c,n,a);break e;case 14:i=qm(null,i,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Qh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Ym(n,i,c,d,a);case 3:e:{if(Jm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,dm(n,i),gu(i,c,null,a);var w=i.memoizedState;if(c=w.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=_o(Error(t(423)),i),i=Xm(n,i,c,a,d);break e}else if(c!==d){d=_o(Error(t(424)),i),i=Xm(n,i,c,a,d);break e}else for(hn=as(i.stateNode.containerInfo.firstChild),cn=i,Xe=!0,bn=null,a=cm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fo(),c===d){i=br(n,i,a);break e}Wt(n,i,c,a)}i=i.child}return i;case 5:return mm(i),n===null&&Sh(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,w=d.children,gh(c,d)?w=null:p!==null&&gh(c,p)&&(i.flags|=32),Qm(n,i),Wt(n,i,w,a),i.child;case 6:return n===null&&Sh(i),null;case 13:return Zm(n,i,a);case 4:return Dh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=po(i,null,c,a):Wt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Wm(n,i,c,d,a);case 7:return Wt(n,i,i.pendingProps,a),i.child;case 8:return Wt(n,i,i.pendingProps.children,a),i.child;case 12:return Wt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,w=d.value,We(fu,c._currentValue),c._currentValue=w,p!==null)if(Pn(p.value,w)){if(p.children===d.children&&!Gt.current){i=br(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var S=p.dependencies;if(S!==null){w=p.child;for(var C=S.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=Pr(-1,a&-a),C.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?C.next=C:(C.next=X.next,X.next=C),z.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),Ch(p.return,a,i),S.lanes|=a;break}C=C.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(t(341));w.lanes|=a,S=w.alternate,S!==null&&(S.lanes|=a),Ch(w,a,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Wt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,go(i,a),d=En(d),c=c(d),i.flags|=1,Wt(n,i,c,a),i.child;case 14:return c=i.type,d=Dn(c,i.pendingProps),d=Dn(c.type,d),qm(n,i,c,d,a);case 15:return Km(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Su(n,i),i.tag=1,Qt(c)?(n=!0,au(i)):n=!1,go(i,a),Mm(i,c,d),qh(i,c,d,a),Yh(null,i,c,!0,n,a);case 19:return tg(n,i,a);case 22:return Gm(n,i,a)}throw Error(t(156,i.tag))};function Sg(n,i){return sa(n,i)}function gE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,i,a,c){return new gE(n,i,a,c)}function gd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yE(n){if(typeof n=="function")return gd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===ft)return 14}return 2}function _s(n,i){var a=n.alternate;return a===null?(a=In(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Lu(n,i,a,c,d,p){var w=2;if(c=n,typeof n=="function")gd(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case N:return yi(a.children,d,p,i);case T:w=8,d|=8;break;case R:return n=In(12,a,i,d|2),n.elementType=R,n.lanes=p,n;case k:return n=In(13,a,i,d),n.elementType=k,n.lanes=p,n;case ze:return n=In(19,a,i,d),n.elementType=ze,n.lanes=p,n;case Ke:return ju(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:w=10;break e;case P:w=9;break e;case L:w=11;break e;case ft:w=14;break e;case Rt:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=In(w,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function yi(n,i,a,c){return n=In(7,n,c,i),n.lanes=a,n}function ju(n,i,a,c){return n=In(22,n,c,i),n.elementType=Ke,n.lanes=a,n.stateNode={isHidden:!1},n}function yd(n,i,a){return n=In(6,n,null,i),n.lanes=a,n}function _d(n,i,a){return i=In(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function _E(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vd(n,i,a,c,d,p,w,S,C){return n=new _E(n,i,a,S,C),i===1?(i=1,p===!0&&(i|=8)):i=0,p=In(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(p),n}function vE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Ag(n){if(!n)return us;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return em(n,a,i)}return i}function Rg(n,i,a,c,d,p,w,S,C){return n=vd(a,c,!0,n,d,p,w,S,C),n.context=Ag(null),a=n.current,c=qt(),d=gs(a),p=Pr(c,d),p.callback=i??null,ds(a,p,d),n.current.lanes=d,ti(n,d,c),Xt(n,c),n}function Mu(n,i,a,c){var d=i.current,p=qt(),w=gs(d);return a=Ag(a),i.context===null?i.context=a:i.pendingContext=a,i=Pr(p,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ds(d,i,w),n!==null&&(Ln(n,d,w,p),mu(n,d,w)),w}function Uu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function wd(n,i){kg(n,i),(n=n.alternate)&&kg(n,i)}function wE(){return null}var Ng=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ed(n){this._internalRoot=n}Fu.prototype.render=Ed.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Mu(n,i,null,null)},Fu.prototype.unmount=Ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;pi(function(){Mu(null,n,null,null)}),i[Ar]=null}};function Fu(n){this._internalRoot=n}Fu.prototype.unstable_scheduleHydration=function(n){if(n){var i=fa();n={blockedOn:null,target:n,priority:i};for(var a=0;a<on.length&&i!==0&&i<on[a].priority;a++);on.splice(a,0,n),a===0&&Ki(n)}};function xd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cg(){}function EE(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var z=Uu(w);p.call(z)}}var w=Rg(i,c,n,0,null,!1,!1,"",Cg);return n._reactRootContainer=w,n[Ar]=w.current,Sa(n.nodeType===8?n.parentNode:n),pi(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var z=Uu(C);S.call(z)}}var C=vd(n,0,!1,null,null,!1,!1,"",Cg);return n._reactRootContainer=C,n[Ar]=C.current,Sa(n.nodeType===8?n.parentNode:n),pi(function(){Mu(i,C,a,c)}),C}function Bu(n,i,a,c,d){var p=a._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var S=d;d=function(){var C=Uu(w);S.call(C)}}Mu(i,w,n,d)}else w=EE(a,i,n,d,c);return Uu(w)}ha=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Me(i.pendingLanes);a!==0&&(ca(i,a|1),Xt(i,Ge()),(Le&6)===0&&(Eo=Ge()+500,cs()))}break;case 13:pi(function(){var c=Cr(n,1);if(c!==null){var d=qt();Ln(c,n,1,d)}}),wd(n,1)}},Wi=function(n){if(n.tag===13){var i=Cr(n,134217728);if(i!==null){var a=qt();Ln(i,n,134217728,a)}wd(n,134217728)}},da=function(n){if(n.tag===13){var i=gs(n),a=Cr(n,i);if(a!==null){var c=qt();Ln(a,n,i,c)}wd(n,i)}},fa=function(){return De},pa=function(n,i){var a=De;try{return De=n,i()}finally{De=a}},gr=function(n,i,a){switch(i){case"input":if(Ws(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=iu(c);if(!d)throw Error(t(90));Qo(c),Ws(c,d)}}}break;case"textarea":Cl(n,a);break;case"select":i=a.value,i!=null&&Rn(n,!!a.multiple,i,!1)}},Dl=fd,Vl=pi;var xE={usingClientEntryPoint:!1,Events:[ka,ao,iu,Yr,Jr,fd]},Ba={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TE={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||wE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Js=$u.inject(TE),rn=$u}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(i))throw Error(t(200));return vE(n,i,null,a)},Zt.createRoot=function(n,i){if(!xd(n))throw Error(t(299));var a=!1,c="",d=Ng;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=vd(n,1,!1,null,null,a,!1,c,d),n[Ar]=i.current,Sa(n.nodeType===8?n.parentNode:n),new Ed(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zl(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return pi(n)},Zt.hydrate=function(n,i,a){if(!zu(i))throw Error(t(200));return Bu(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!xd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",w=Ng;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Rg(i,null,n,1,a??null,d,!1,p,w),n[Ar]=i.current,Sa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Fu(i)},Zt.render=function(n,i,a){if(!zu(i))throw Error(t(200));return Bu(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!zu(n))throw Error(t(40));return n._reactRootContainer?(pi(function(){Bu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},Zt.unstable_batchedUpdates=fd,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!zu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Bu(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Mg;function PE(){if(Mg)return Sd.exports;Mg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=CE(),Sd.exports}var Ug;function bE(){if(Ug)return Hu;Ug=1;var r=PE();return Hu.createRoot=r.createRoot,Hu.hydrateRoot=r.hydrateRoot,Hu}var DE=bE(),he=yf();const VE=()=>{};var Fg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},OE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],y=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},A_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,y=o+2<r.length,_=y?r[o+2]:0,E=l>>2,I=(l&3)<<4|f>>4;let A=(f&15)<<2|_>>6,F=_&63;y||(F=64,h||(A=64)),s.push(t[E],t[I],t[A],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(S_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):OE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||I==null)throw new LE;const A=l<<2|f>>4;if(s.push(A),_!==64){const F=f<<4&240|_>>2;if(s.push(F),I!==64){const q=_<<6&192|I;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jE=function(r){const e=S_(r);return A_.encodeByteArray(e,!0)},uc=function(r){return jE(r).replace(/\./g,"")},R_=function(r){try{return A_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=()=>ME().__FIREBASE_DEFAULTS__,FE=()=>{if(typeof process>"u"||typeof Fg>"u")return;const r=Fg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},zE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&R_(r[1]);return e&&JSON.parse(e)},Pc=()=>{try{return VE()||UE()||FE()||zE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},k_=r=>Pc()?.emulatorHosts?.[r],N_=r=>{const e=k_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},C_=()=>Pc()?.config,P_=r=>Pc()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _f(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uc(JSON.stringify(t)),uc(JSON.stringify(h)),""].join(".")}const Xa={};function $E(){const r={prod:[],emulator:[]};for(const e of Object.keys(Xa))Xa[e]?r.emulator.push(e):r.prod.push(e);return r}function HE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let zg=!1;function vf(r,e){if(typeof window>"u"||typeof document>"u"||!zs(window.location.host)||Xa[r]===e||Xa[r]||zg)return;Xa[r]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",l=$E().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function f(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function y(A,F){A.setAttribute("width","24"),A.setAttribute("id",F),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function _(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{zg=!0,h()},A}function E(A,F){A.setAttribute("id",F),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function I(){const A=HE(s),F=t("text"),q=document.getElementById(F)||document.createElement("span"),Q=t("learnmore"),$=document.getElementById(Q)||document.createElement("a"),ie=t("preprendIcon"),V=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const G=A.element;f(G),E($,Q);const H=_();y(V,ie),G.append(V,q,$,H),document.body.appendChild(G)}l?(q.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function qE(){const r=Pc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function QE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YE(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function JE(){return!qE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XE(){try{return typeof indexedDB=="object"}catch{return!1}}function ZE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="FirebaseError";class pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ex,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gl.prototype.create)}}class gl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?tx(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new pr(o,f,s)}}function tx(r,e){return r.replace(nx,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const nx=/\{\$([^}]+)}/g;function rx(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ti(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Bg(l)&&Bg(h)){if(!Ti(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Bg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function qa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ka(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function sx(r,e){const t=new ix(r,e);return t.subscribe.bind(t)}class ix{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ox(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=kd),o.error===void 0&&(o.error=kd),o.complete===void 0&&(o.complete=kd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ox(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function kd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(r){return r&&r._delegate?r._delegate:r}class Vs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new BE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ux(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lx(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lx(r){return r===_i?void 0:r}function ux(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ax(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const hx={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},dx=Ce.INFO,fx={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},px=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=fx[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wf{constructor(e){this.name=e,this._logLevel=dx,this._logHandler=px,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const mx=(r,e)=>e.some(t=>r instanceof t);let $g,Hg;function gx(){return $g||($g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yx(){return Hg||(Hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D_=new WeakMap,Bd=new WeakMap,V_=new WeakMap,Nd=new WeakMap,Ef=new WeakMap;function _x(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(ks(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&D_.set(t,r)}).catch(()=>{}),Ef.set(e,r),e}function vx(r){if(Bd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Bd.set(r,e)}let $d={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Bd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||V_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ks(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function wx(r){$d=r($d)}function Ex(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Cd(this),e,...t);return V_.set(s,e.sort?e.sort():[e]),ks(s)}:yx().includes(r)?function(...e){return r.apply(Cd(this),e),ks(D_.get(this))}:function(...e){return ks(r.apply(Cd(this),e))}}function xx(r){return typeof r=="function"?Ex(r):(r instanceof IDBTransaction&&vx(r),mx(r,gx())?new Proxy(r,$d):r)}function ks(r){if(r instanceof IDBRequest)return _x(r);if(Nd.has(r))return Nd.get(r);const e=xx(r);return e!==r&&(Nd.set(r,e),Ef.set(e,r)),e}const Cd=r=>Ef.get(r);function Tx(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=ks(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ks(h.result),y.oldVersion,y.newVersion,ks(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),f.then(y=>{l&&y.addEventListener("close",()=>l()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const Ix=["get","getKey","getAll","getAllKeys","count"],Sx=["put","add","delete","clear"],Pd=new Map;function Wg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Sx.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Ix.includes(t)))return;const l=async function(h,...f){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&y.done]))[0]};return Pd.set(e,l),l}wx(r=>({...r,get:(e,t,s)=>Wg(e,t)||r.get(e,t,s),has:(e,t)=>!!Wg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Rx(r){return r.getComponent()?.type==="VERSION"}const Hd="@firebase/app",qg="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new wf("@firebase/app"),kx="@firebase/app-compat",Nx="@firebase/analytics-compat",Cx="@firebase/analytics",Px="@firebase/app-check-compat",bx="@firebase/app-check",Dx="@firebase/auth",Vx="@firebase/auth-compat",Ox="@firebase/database",Lx="@firebase/data-connect",jx="@firebase/database-compat",Mx="@firebase/functions",Ux="@firebase/functions-compat",Fx="@firebase/installations",zx="@firebase/installations-compat",Bx="@firebase/messaging",$x="@firebase/messaging-compat",Hx="@firebase/performance",Wx="@firebase/performance-compat",qx="@firebase/remote-config",Kx="@firebase/remote-config-compat",Gx="@firebase/storage",Qx="@firebase/storage-compat",Yx="@firebase/firestore",Jx="@firebase/ai",Xx="@firebase/firestore-compat",Zx="firebase",eT="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="[DEFAULT]",tT={[Hd]:"fire-core",[kx]:"fire-core-compat",[Cx]:"fire-analytics",[Nx]:"fire-analytics-compat",[bx]:"fire-app-check",[Px]:"fire-app-check-compat",[Dx]:"fire-auth",[Vx]:"fire-auth-compat",[Ox]:"fire-rtdb",[Lx]:"fire-data-connect",[jx]:"fire-rtdb-compat",[Mx]:"fire-fn",[Ux]:"fire-fn-compat",[Fx]:"fire-iid",[zx]:"fire-iid-compat",[Bx]:"fire-fcm",[$x]:"fire-fcm-compat",[Hx]:"fire-perf",[Wx]:"fire-perf-compat",[qx]:"fire-rc",[Kx]:"fire-rc-compat",[Gx]:"fire-gcs",[Qx]:"fire-gcs-compat",[Yx]:"fire-fst",[Xx]:"fire-fst-compat",[Jx]:"fire-vertex","fire-js":"fire-js",[Zx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map,nT=new Map,qd=new Map;function Kg(r,e){try{r.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ii(r){const e=r.name;if(qd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;qd.set(e,r);for(const t of cc.values())Kg(t,r);for(const t of nT.values())Kg(t,r);return!0}function bc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function fn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ns=new gl("app","Firebase",rT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ns.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=eT;function O_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Wd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ns.create("bad-app-name",{appName:String(o)});if(t||(t=C_()),!t)throw Ns.create("no-options");const l=cc.get(o);if(l){if(Ti(t,l.options)&&Ti(s,l.config))return l;throw Ns.create("duplicate-app",{appName:o})}const h=new cx(o);for(const y of qd.values())h.addComponent(y);const f=new sT(t,s,h);return cc.set(o,f),f}function xf(r=Wd){const e=cc.get(r);if(!e&&r===Wd&&C_())return O_();if(!e)throw Ns.create("no-app",{appName:r});return e}function ar(r,e,t){let s=tT[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(h.join(" "));return}Ii(new Vs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebase-heartbeat-database",oT=1,ol="firebase-heartbeat-store";let bd=null;function L_(){return bd||(bd=Tx(iT,oT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ns.create("idb-open",{originalErrorMessage:r.message})})),bd}async function aT(r){try{const t=(await L_()).transaction(ol),s=await t.objectStore(ol).get(j_(r));return await t.done,s}catch(e){if(e instanceof pr)Mr.warn(e.message);else{const t=Ns.create("idb-get",{originalErrorMessage:e?.message});Mr.warn(t.message)}}}async function Gg(r,e){try{const s=(await L_()).transaction(ol,"readwrite");await s.objectStore(ol).put(e,j_(r)),await s.done}catch(t){if(t instanceof pr)Mr.warn(t.message);else{const s=Ns.create("idb-set",{originalErrorMessage:t?.message});Mr.warn(s.message)}}}function j_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=1024,uT=30;class cT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>uT){const o=fT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Mr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qg(),{heartbeatsToSend:t,unsentEntries:s}=hT(this._heartbeatsCache.heartbeats),o=uc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mr.warn(e),""}}}function Qg(){return new Date().toISOString().substring(0,10)}function hT(r,e=lT){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Yg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Yg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XE()?ZE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yg(r){return uc(JSON.stringify({version:2,heartbeats:r})).length}function fT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(r){Ii(new Vs("platform-logger",e=>new Ax(e),"PRIVATE")),Ii(new Vs("heartbeat",e=>new cT(e),"PRIVATE")),ar(Hd,qg,r),ar(Hd,qg,"esm2020"),ar("fire-js","")}pT("");function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mT=M_,U_=new gl("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new wf("@firebase/auth");function gT(r,...e){hc.logLevel<=Ce.WARN&&hc.warn(`Auth (${Ci}): ${r}`,...e)}function Zu(r,...e){hc.logLevel<=Ce.ERROR&&hc.error(`Auth (${Ci}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(r,...e){throw Tf(r,...e)}function lr(r,...e){return Tf(r,...e)}function F_(r,e,t){const s={...mT(),[e]:t};return new gl("auth","Firebase",s).create(e,{appName:r.name})}function Lr(r){return F_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return U_.create(r,...e)}function ve(r,e,...t){if(!r)throw Tf(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zu(e),new Error(e)}function Ur(r,e){r||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(){return typeof self<"u"&&self.location?.href||""}function yT(){return Jg()==="http:"||Jg()==="https:"}function Jg(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yT()||GE()||"connection"in navigator)?navigator.onLine:!0}function vT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=WE()||QE()}get(){return _T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(r,e){Ur(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xT=new _l(3e4,6e4);function $r(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function mr(r,e,t,s,o={}){return B_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=yl({key:r.config.apiKey,...h}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:y,...l};return KE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&zs(r.emulatorConfig.host)&&(_.credentials="include"),z_.fetch()(await $_(r,r.config.apiHost,t,f),_)})}async function B_(r,e,t){r._canInitEmulator=!1;const s={...wT,...e};try{const o=new IT(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Wu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[y,_]=f.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(r,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Wu(r,"email-already-in-use",h);if(y==="USER_DISABLED")throw Wu(r,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw F_(r,E,_);Un(r,E)}}catch(o){if(o instanceof pr)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function vl(r,e,t,s,o={}){const l=await mr(r,e,t,s,o);return"mfaPendingCredential"in l&&Un(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function $_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?If(r.config,o):`${r.config.apiScheme}://${o}`;return ET.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function TT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(lr(this.auth,"network-request-failed")),xT.get())})}}function Wu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=lr(r,e,s);return o.customData._tokenResponse=t,o}function Xg(r){return r!==void 0&&r.enterprise!==void 0}class ST{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AT(r,e){return mr(r,"GET","/v2/recaptchaConfig",$r(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(r,e){return mr(r,"POST","/v1/accounts:delete",e)}async function dc(r,e){return mr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kT(r,e=!1){const t=Ze(r),s=await t.getIdToken(e),o=Sf(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:s,authTime:Za(Dd(o.auth_time)),issuedAtTime:Za(Dd(o.iat)),expirationTime:Za(Dd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Dd(r){return Number(r)*1e3}function Sf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=R_(t);return o?JSON.parse(o):(Zu("Failed to decode base64 JWT payload"),null)}catch(o){return Zu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Zg(r){const e=Sf(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof pr&&NT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function NT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(r){const e=r.auth,t=await r.getIdToken(),s=await Vo(r,dc(e,{idToken:t}));ve(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?H_(o.providerUserInfo):[],h=bT(r.providerData,l),f=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!h?.length,_=f?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Gd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function PT(r){const e=Ze(r);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function H_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(r,e){const t=await B_(r,{},async()=>{const s=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await $_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:f,body:s};return r.emulatorConfig&&zs(r.emulatorConfig.host)&&(y.credentials="include"),z_.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VT(r,e){return mr(r,"POST","/v2/accounts:revokeToken",$r(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Zg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await DT(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new ko;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ko,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new CT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kT(this,e)}reload(){return PT(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await fc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await Vo(this,RT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:A,isAnonymous:F,providerData:q,stsTokenManager:Q}=t;ve(I&&Q,e,"internal-error");const $=ko.fromJSON(this.name,Q);ve(typeof I=="string",e,"internal-error"),ws(s,e.name),ws(o,e.name),ve(typeof A=="boolean",e,"internal-error"),ve(typeof F=="boolean",e,"internal-error"),ws(l,e.name),ws(h,e.name),ws(f,e.name),ws(y,e.name),ws(_,e.name),ws(E,e.name);const ie=new jn({uid:I,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:F,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:$,createdAt:_,lastLoginAt:E});return q&&Array.isArray(q)&&(ie.providerData=q.map(V=>({...V}))),y&&(ie._redirectEventId=y),ie}static async _fromIdTokenResponse(e,t,s=!1){const o=new ko;o.updateFromServerResponse(t);const l=new jn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await fc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?H_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new ko;f.updateFromIdToken(s);const y=new jn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Map;function Or(r){Ur(r instanceof Function,"Expected a class definition");let e=ey.get(r);return e?(Ur(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ey.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}W_.type="NONE";const ty=W_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(r,e,t){return`firebase:${r}:${e}:${t}`}class No{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=ec(this.userKey,o.apiKey,l),this.fullPersistenceKey=ec("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await dc(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new No(Or(ty),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Or(ty);const h=ec(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){let I;if(typeof E=="string"){const A=await dc(e,{idToken:E}).catch(()=>{});if(!A)break;I=await jn._fromGetAccountInfoResponse(e,A,E)}else I=jn._fromJSON(e,E);_!==l&&(f=I),l=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!y.length?new No(l,e,s):(l=y[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new No(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(X_(e))return"Webos";if(K_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Y_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function q_(r=$t()){return/firefox\//i.test(r)}function K_(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(r=$t()){return/crios\//i.test(r)}function Q_(r=$t()){return/iemobile/i.test(r)}function Y_(r=$t()){return/android/i.test(r)}function J_(r=$t()){return/blackberry/i.test(r)}function X_(r=$t()){return/webos/i.test(r)}function Af(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function OT(r=$t()){return Af(r)&&!!window.navigator?.standalone}function LT(){return YE()&&document.documentMode===10}function Z_(r=$t()){return Af(r)||Y_(r)||X_(r)||J_(r)||/windows phone/i.test(r)||Q_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(r,e=[]){let t;switch(r){case"Browser":t=ny($t());break;case"Worker":t=`${ny($t())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ci}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const y=e(l);h(y)}catch(y){f(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(r,e={}){return mr(r,"GET","/v2/passwordPolicy",$r(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=6;class FT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??UT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ry(this),this.idTokenSubscription=new ry(this),this.beforeStateQueue=new jT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await No.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dc(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(fn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=s?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(s=f.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Lr(this));const t=e?Ze(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MT(this),t=new FT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await VT(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&gT(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Bs(r){return Ze(r)}class ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=sx(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BT(r){Dc=r}function tv(r){return Dc.loadJS(r)}function $T(){return Dc.recaptchaEnterpriseScript}function HT(){return Dc.gapiScript}function WT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class qT{constructor(){this.enterprise=new KT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const GT="recaptcha-enterprise",nv="NO_RECAPTCHA";class QT{constructor(e){this.type=GT,this.auth=Bs(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{AT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new ST(y);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(y=>{f(y)})})}function o(l,h,f){const y=window.grecaptcha;Xg(y)?y.enterprise.ready(()=>{y.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(nv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qT().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Xg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=$T();y.length!==0&&(y+=f),tv(y).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function sy(r,e,t,s=!1,o=!1){const l=new QT(r);let h;if(o)h=nv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const y=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const y=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function pc(r,e,t,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await sy(r,e,t,t==="getOobCode");return s(r,l)}else return s(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await sy(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(r,e){const t=bc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ti(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function JT(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Or);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function XT(r,e,t){const s=Bs(r);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=rv(e),{host:h,port:f}=ZT(e),y=f===null?"":`:${f}`,_={url:`${l}//${h}${y}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Ti(_,s.config.emulator)&&Ti(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,zs(h)?(_f(`${l}//${h}${y}`),vf("Auth",!0)):eI()}function rv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ZT(r){const e=rv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:iy(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:iy(h)}}}function iy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function eI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function tI(r,e){return mr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(r,e){return vl(r,"POST","/v1/accounts:signInWithPassword",$r(r,e))}async function rI(r,e){return mr(r,"POST","/v1/accounts:sendOobCode",$r(r,e))}async function sI(r,e){return rI(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(r,e){return vl(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,e))}async function oI(r,e){return vl(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends Rf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new al(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new al(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,t,"signInWithPassword",nI);case"emailLink":return iI(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,s,"signUpPassword",tI);case"emailLink":return oI(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(r,e){return vl(r,"POST","/v1/accounts:signInWithIdp",$r(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="http://localhost";class Si extends Rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new Si(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Co(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Co(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Co(e,t)}buildRequest(){const e={requestUri:aI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uI(r){const e=qa(Ka(r)).link,t=e?qa(Ka(e)).deep_link_id:null,s=qa(Ka(r)).deep_link_id;return(s?qa(Ka(s)).link:null)||s||t||e||r}class kf{constructor(e){const t=qa(Ka(e)),s=t.apiKey??null,o=t.oobCode??null,l=lI(t.mode??null);ve(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=uI(e);try{return new kf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,t){return al._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=kf.parseLink(t);return ve(s,"argument-error"),al._fromEmailAndCode(e,s.code,s.tenantId)}}Ho.PROVIDER_ID="password";Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends sv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends wl{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch{return null}}}Es.FACEBOOK_SIGN_IN_METHOD="facebook.com";Es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Si._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return xs.credential(t,s)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends wl{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ts.credential(e.oauthAccessToken)}catch{return null}}}Ts.GITHUB_SIGN_IN_METHOD="github.com";Ts.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends wl{constructor(){super("twitter.com")}static credential(e,t){return Si._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Is.credential(t,s)}catch{return null}}}Is.TWITTER_SIGN_IN_METHOD="twitter.com";Is.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(r,e){return vl(r,"POST","/v1/accounts:signUp",$r(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await jn._fromIdTokenResponse(e,s,o),h=oy(s);return new Ai({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=oy(s);return new Ai({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function oy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends pr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new mc(e,t,s,o)}}function iv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(r,l,e,s):l})}async function hI(r,e,t=!1){const s=await Vo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ai._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(r,e,t=!1){const{auth:s}=r;if(fn(s.app))return Promise.reject(Lr(s));const o="reauthenticate";try{const l=await Vo(r,iv(s,o,e,r),t);ve(l.idToken,s,"internal-error");const h=Sf(l.idToken);ve(h,s,"internal-error");const{sub:f}=h;return ve(r.uid===f,s,"user-mismatch"),Ai._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Un(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(r,e,t=!1){if(fn(r.app))return Promise.reject(Lr(r));const s="signIn",o=await iv(r,s,e),l=await Ai._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function fI(r,e){return ov(Bs(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(r){const e=Bs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pI(r,e,t){const s=Bs(r);await pc(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",sI)}async function mI(r,e,t){if(fn(r.app))return Promise.reject(Lr(r));const s=Bs(r),h=await pc(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cI).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&av(r),y}),f=await Ai._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function gI(r,e,t){return fn(r.app)?Promise.reject(Lr(r)):fI(Ze(r),Ho.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&av(r),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(r,e){return mr(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ze(r),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Vo(s,yI(s.auth,l));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const f=s.providerData.find(({providerId:y})=>y==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function vI(r,e,t,s){return Ze(r).onIdTokenChanged(e,t,s)}function wI(r,e,t){return Ze(r).beforeAuthStateChanged(e,t)}function EI(r,e,t,s){return Ze(r).onAuthStateChanged(e,t,s)}function xI(r){return Ze(r).signOut()}const gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=1e3,II=10;class uv extends lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);LT()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,II):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uv.type="LOCAL";const SI=uv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cv.type="SESSION";const hv=cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Vc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),y=await AI(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,y)=>{const _=Nf("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const A=I;if(A.data.eventId===_)switch(A.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(E),clearTimeout(l),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function kI(r){ur().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function NI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){return navigator?.serviceWorker?.controller||null}function PI(){return dv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="firebaseLocalStorageDb",bI=1,yc="firebaseLocalStorage",pv="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(r,e){return r.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function DI(){const r=indexedDB.deleteDatabase(fv);return new El(r).toPromise()}function Qd(){const r=indexedDB.open(fv,bI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(yc,{keyPath:pv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(yc)?e(s):(s.close(),await DI(),e(await Qd()))})})}async function ay(r,e,t){const s=Oc(r,!0).put({[pv]:e,value:t});return new El(s).toPromise()}async function VI(r,e){const t=Oc(r,!1).get(e),s=await new El(t).toPromise();return s===void 0?null:s.value}function ly(r,e){const t=Oc(r,!0).delete(e);return new El(t).toPromise()}const OI=800,LI=3;class mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>LI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(PI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await NI(),!this.activeServiceWorker)return;this.sender=new RI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await ay(e,gc,"1"),await ly(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ay(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>VI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ly(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Oc(o,!1).getAll();return new El(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mv.type="LOCAL";const jI=mv;new _l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(r,e){return e?Or(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends Rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UI(r){return ov(r.auth,new Cf(r),r.bypassAuthState)}function FI(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),dI(t,new Cf(r),r.bypassAuthState)}async function zI(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),hI(t,new Cf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return zI;case"reauthViaPopup":case"reauthViaRedirect":return FI;default:Un(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new _l(2e3,1e4);class Ro extends gv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Ro.currentPopupAction&&Ro.currentPopupAction.cancel(),Ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}Ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="pendingRedirect",tc=new Map;class HI extends gv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const s=await WI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WI(r,e){const t=GI(e),s=KI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function qI(r,e){tc.set(r._key(),e)}function KI(r){return Or(r._redirectPersistence)}function GI(r){return ec($I,r.config.apiKey,r.name)}async function QI(r,e,t=!1){if(fn(r.app))return Promise.reject(Lr(r));const s=Bs(r),o=MI(s,e),h=await new HI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=600*1e3;class JI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!yv(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(lr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YI&&this.cachedEventUids.clear(),this.cachedEventUids.has(uy(e))}saveEventToCache(e){this.cachedEventUids.add(uy(e)),this.lastProcessedEventTime=Date.now()}}function uy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function yv({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function XI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(r,e={}){return mr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t1=/^https?/;async function n1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ZI(r);for(const t of e)try{if(r1(t))return}catch{}Un(r,"unauthorized-domain")}function r1(r){const e=Kd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!t1.test(t))return!1;if(e1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=new _l(3e4,6e4);function cy(){const r=ur().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function i1(r){return new Promise((e,t)=>{function s(){cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cy(),t(lr(r,"network-request-failed"))},timeout:s1.get()})}if(ur().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ur().gapi?.load)s();else{const o=WT("iframefcb");return ur()[o]=()=>{gapi.load?s():t(lr(r,"network-request-failed"))},tv(`${HT()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw nc=null,e})}let nc=null;function o1(r){return nc=nc||i1(r),nc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=new _l(5e3,15e3),l1="__/auth/iframe",u1="emulator/auth/iframe",c1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d1(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?If(e,u1):`https://${r.config.authDomain}/${l1}`,s={apiKey:e.apiKey,appName:r.name,v:Ci},o=h1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${yl(s).slice(1)}`}async function f1(r){const e=await o1(r),t=ur().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:d1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=lr(r,"network-request-failed"),f=ur().setTimeout(()=>{l(h)},a1.get());function y(){ur().clearTimeout(f),o(s)}s.ping(y).then(y,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m1=500,g1=600,y1="_blank",_1="http://localhost";class hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v1(r,e,t,s=m1,o=g1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const y={...p1,width:s.toString(),height:o.toString(),top:l,left:h},_=$t().toLowerCase();t&&(f=G_(_)?y1:t),q_(_)&&(e=e||_1,y.scrollbars="yes");const E=Object.entries(y).reduce((A,[F,q])=>`${A}${F}=${q},`,"");if(OT(_)&&f!=="_self")return w1(e||"",f),new hy(null);const I=window.open(e||"",f,E);ve(I,r,"popup-blocked");try{I.focus()}catch{}return new hy(I)}function w1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="__/auth/handler",x1="emulator/auth/handler",T1=encodeURIComponent("fac");async function dy(r,e,t,s,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ci,eventId:o};if(e instanceof sv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",rx(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof wl){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const y=await r._getAppCheckToken(),_=y?`#${T1}=${encodeURIComponent(y)}`:"";return`${I1(r)}?${yl(f).slice(1)}${_}`}function I1({config:r}){return r.emulator?If(r,x1):`https://${r.authDomain}/${E1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="webStorageSupport";class S1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hv,this._completeRedirectFn=QI,this._overrideRedirectResult=qI}async _openPopup(e,t,s,o){Ur(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await dy(e,t,s,Kd(),o);return v1(e,l,Nf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await dy(e,t,s,Kd(),o);return kI(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await f1(e),s=new JI(e);return t.register("authEvent",o=>(ve(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vd,{type:Vd},o=>{const l=o?.[0]?.[Vd];l!==void 0&&t(!!l),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Z_()||K_()||Af()}}const A1=S1;var fy="@firebase/auth",py="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function N1(r){Ii(new Vs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(r)},_=new zT(s,o,l,y);return JT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ii(new Vs("auth-internal",e=>{const t=Bs(e.getProvider("auth").getImmediate());return(s=>new R1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(fy,py,k1(r)),ar(fy,py,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=300,P1=P_("authIdTokenMaxAge")||C1;let my=null;const b1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>P1)return;const o=t?.token;my!==o&&(my=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function D1(r=xf()){const e=bc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=YT(r,{popupRedirectResolver:A1,persistence:[jI,SI,hv]}),s=P_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=b1(l.toString());wI(t,h,()=>h(t.currentUser)),vI(t,f=>h(f))}}const o=k_("auth");return o&&XT(t,`http://${o}`),t}function V1(){return document.getElementsByTagName("head")?.[0]??document}BT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",V1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});N1("Browser");var gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,_v;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function R(){}R.prototype=T.prototype,N.F=T.prototype,N.prototype=new R,N.prototype.constructor=N,N.D=function(b,P,L){for(var k=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)k[ze-2]=arguments[ze];return T.prototype[P].apply(b,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,R){R||(R=0);const b=Array(16);if(typeof T=="string")for(var P=0;P<16;++P)b[P]=T.charCodeAt(R++)|T.charCodeAt(R++)<<8|T.charCodeAt(R++)<<16|T.charCodeAt(R++)<<24;else for(P=0;P<16;++P)b[P]=T[R++]|T[R++]<<8|T[R++]<<16|T[R++]<<24;T=N.g[0],R=N.g[1],P=N.g[2];let L=N.g[3],k;k=T+(L^R&(P^L))+b[0]+3614090360&4294967295,T=R+(k<<7&4294967295|k>>>25),k=L+(P^T&(R^P))+b[1]+3905402710&4294967295,L=T+(k<<12&4294967295|k>>>20),k=P+(R^L&(T^R))+b[2]+606105819&4294967295,P=L+(k<<17&4294967295|k>>>15),k=R+(T^P&(L^T))+b[3]+3250441966&4294967295,R=P+(k<<22&4294967295|k>>>10),k=T+(L^R&(P^L))+b[4]+4118548399&4294967295,T=R+(k<<7&4294967295|k>>>25),k=L+(P^T&(R^P))+b[5]+1200080426&4294967295,L=T+(k<<12&4294967295|k>>>20),k=P+(R^L&(T^R))+b[6]+2821735955&4294967295,P=L+(k<<17&4294967295|k>>>15),k=R+(T^P&(L^T))+b[7]+4249261313&4294967295,R=P+(k<<22&4294967295|k>>>10),k=T+(L^R&(P^L))+b[8]+1770035416&4294967295,T=R+(k<<7&4294967295|k>>>25),k=L+(P^T&(R^P))+b[9]+2336552879&4294967295,L=T+(k<<12&4294967295|k>>>20),k=P+(R^L&(T^R))+b[10]+4294925233&4294967295,P=L+(k<<17&4294967295|k>>>15),k=R+(T^P&(L^T))+b[11]+2304563134&4294967295,R=P+(k<<22&4294967295|k>>>10),k=T+(L^R&(P^L))+b[12]+1804603682&4294967295,T=R+(k<<7&4294967295|k>>>25),k=L+(P^T&(R^P))+b[13]+4254626195&4294967295,L=T+(k<<12&4294967295|k>>>20),k=P+(R^L&(T^R))+b[14]+2792965006&4294967295,P=L+(k<<17&4294967295|k>>>15),k=R+(T^P&(L^T))+b[15]+1236535329&4294967295,R=P+(k<<22&4294967295|k>>>10),k=T+(P^L&(R^P))+b[1]+4129170786&4294967295,T=R+(k<<5&4294967295|k>>>27),k=L+(R^P&(T^R))+b[6]+3225465664&4294967295,L=T+(k<<9&4294967295|k>>>23),k=P+(T^R&(L^T))+b[11]+643717713&4294967295,P=L+(k<<14&4294967295|k>>>18),k=R+(L^T&(P^L))+b[0]+3921069994&4294967295,R=P+(k<<20&4294967295|k>>>12),k=T+(P^L&(R^P))+b[5]+3593408605&4294967295,T=R+(k<<5&4294967295|k>>>27),k=L+(R^P&(T^R))+b[10]+38016083&4294967295,L=T+(k<<9&4294967295|k>>>23),k=P+(T^R&(L^T))+b[15]+3634488961&4294967295,P=L+(k<<14&4294967295|k>>>18),k=R+(L^T&(P^L))+b[4]+3889429448&4294967295,R=P+(k<<20&4294967295|k>>>12),k=T+(P^L&(R^P))+b[9]+568446438&4294967295,T=R+(k<<5&4294967295|k>>>27),k=L+(R^P&(T^R))+b[14]+3275163606&4294967295,L=T+(k<<9&4294967295|k>>>23),k=P+(T^R&(L^T))+b[3]+4107603335&4294967295,P=L+(k<<14&4294967295|k>>>18),k=R+(L^T&(P^L))+b[8]+1163531501&4294967295,R=P+(k<<20&4294967295|k>>>12),k=T+(P^L&(R^P))+b[13]+2850285829&4294967295,T=R+(k<<5&4294967295|k>>>27),k=L+(R^P&(T^R))+b[2]+4243563512&4294967295,L=T+(k<<9&4294967295|k>>>23),k=P+(T^R&(L^T))+b[7]+1735328473&4294967295,P=L+(k<<14&4294967295|k>>>18),k=R+(L^T&(P^L))+b[12]+2368359562&4294967295,R=P+(k<<20&4294967295|k>>>12),k=T+(R^P^L)+b[5]+4294588738&4294967295,T=R+(k<<4&4294967295|k>>>28),k=L+(T^R^P)+b[8]+2272392833&4294967295,L=T+(k<<11&4294967295|k>>>21),k=P+(L^T^R)+b[11]+1839030562&4294967295,P=L+(k<<16&4294967295|k>>>16),k=R+(P^L^T)+b[14]+4259657740&4294967295,R=P+(k<<23&4294967295|k>>>9),k=T+(R^P^L)+b[1]+2763975236&4294967295,T=R+(k<<4&4294967295|k>>>28),k=L+(T^R^P)+b[4]+1272893353&4294967295,L=T+(k<<11&4294967295|k>>>21),k=P+(L^T^R)+b[7]+4139469664&4294967295,P=L+(k<<16&4294967295|k>>>16),k=R+(P^L^T)+b[10]+3200236656&4294967295,R=P+(k<<23&4294967295|k>>>9),k=T+(R^P^L)+b[13]+681279174&4294967295,T=R+(k<<4&4294967295|k>>>28),k=L+(T^R^P)+b[0]+3936430074&4294967295,L=T+(k<<11&4294967295|k>>>21),k=P+(L^T^R)+b[3]+3572445317&4294967295,P=L+(k<<16&4294967295|k>>>16),k=R+(P^L^T)+b[6]+76029189&4294967295,R=P+(k<<23&4294967295|k>>>9),k=T+(R^P^L)+b[9]+3654602809&4294967295,T=R+(k<<4&4294967295|k>>>28),k=L+(T^R^P)+b[12]+3873151461&4294967295,L=T+(k<<11&4294967295|k>>>21),k=P+(L^T^R)+b[15]+530742520&4294967295,P=L+(k<<16&4294967295|k>>>16),k=R+(P^L^T)+b[2]+3299628645&4294967295,R=P+(k<<23&4294967295|k>>>9),k=T+(P^(R|~L))+b[0]+4096336452&4294967295,T=R+(k<<6&4294967295|k>>>26),k=L+(R^(T|~P))+b[7]+1126891415&4294967295,L=T+(k<<10&4294967295|k>>>22),k=P+(T^(L|~R))+b[14]+2878612391&4294967295,P=L+(k<<15&4294967295|k>>>17),k=R+(L^(P|~T))+b[5]+4237533241&4294967295,R=P+(k<<21&4294967295|k>>>11),k=T+(P^(R|~L))+b[12]+1700485571&4294967295,T=R+(k<<6&4294967295|k>>>26),k=L+(R^(T|~P))+b[3]+2399980690&4294967295,L=T+(k<<10&4294967295|k>>>22),k=P+(T^(L|~R))+b[10]+4293915773&4294967295,P=L+(k<<15&4294967295|k>>>17),k=R+(L^(P|~T))+b[1]+2240044497&4294967295,R=P+(k<<21&4294967295|k>>>11),k=T+(P^(R|~L))+b[8]+1873313359&4294967295,T=R+(k<<6&4294967295|k>>>26),k=L+(R^(T|~P))+b[15]+4264355552&4294967295,L=T+(k<<10&4294967295|k>>>22),k=P+(T^(L|~R))+b[6]+2734768916&4294967295,P=L+(k<<15&4294967295|k>>>17),k=R+(L^(P|~T))+b[13]+1309151649&4294967295,R=P+(k<<21&4294967295|k>>>11),k=T+(P^(R|~L))+b[4]+4149444226&4294967295,T=R+(k<<6&4294967295|k>>>26),k=L+(R^(T|~P))+b[11]+3174756917&4294967295,L=T+(k<<10&4294967295|k>>>22),k=P+(T^(L|~R))+b[2]+718787259&4294967295,P=L+(k<<15&4294967295|k>>>17),k=R+(L^(P|~T))+b[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,N.g[2]=N.g[2]+P&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.v=function(N,T){T===void 0&&(T=N.length);const R=T-this.blockSize,b=this.C;let P=this.h,L=0;for(;L<T;){if(P==0)for(;L<=R;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<T;)if(b[P++]=N.charCodeAt(L++),P==this.blockSize){o(this,b),P=0;break}}else for(;L<T;)if(b[P++]=N[L++],P==this.blockSize){o(this,b),P=0;break}}this.h=P,this.o+=T},s.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;T=this.o*8;for(var R=N.length-8;R<N.length;++R)N[R]=T&255,T/=256;for(this.v(N),N=Array(16),T=0,R=0;R<4;++R)for(let b=0;b<32;b+=8)N[T++]=this.g[R]>>>b&255;return N};function l(N,T){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=T(N)}function h(N,T){this.h=T;const R=[];let b=!0;for(let P=N.length-1;P>=0;P--){const L=N[P]|0;b&&L==T||(R[P]=L,b=!1)}this.g=R}var f={};function y(N){return-128<=N&&N<128?l(N,function(T){return new h([T|0],T<0?-1:0)}):new h([N|0],N<0?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return I;if(N<0)return $(_(-N));const T=[];let R=1;for(let b=0;N>=R;b++)T[b]=N/R|0,R*=4294967296;return new h(T,0)}function E(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return $(E(N.substring(1),T));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(T,8));let b=I;for(let L=0;L<N.length;L+=8){var P=Math.min(8,N.length-L);const k=parseInt(N.substring(L,L+P),T);P<8?(P=_(Math.pow(T,P)),b=b.j(P).add(_(k))):(b=b.j(R),b=b.add(_(k)))}return b}var I=y(0),A=y(1),F=y(16777216);r=h.prototype,r.m=function(){if(Q(this))return-$(this).m();let N=0,T=1;for(let R=0;R<this.g.length;R++){const b=this.i(R);N+=(b>=0?b:4294967296+b)*T,T*=4294967296}return N},r.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(q(this))return"0";if(Q(this))return"-"+$(this).toString(N);const T=_(Math.pow(N,6));var R=this;let b="";for(;;){const P=H(R,T).g;R=ie(R,P.j(T));let L=((R.g.length>0?R.g[0]:R.h)>>>0).toString(N);if(R=P,q(R))return L+b;for(;L.length<6;)L="0"+L;b=L+b}},r.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function q(N){if(N.h!=0)return!1;for(let T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function Q(N){return N.h==-1}r.l=function(N){return N=ie(this,N),Q(N)?-1:q(N)?0:1};function $(N){const T=N.g.length,R=[];for(let b=0;b<T;b++)R[b]=~N.g[b];return new h(R,~N.h).add(A)}r.abs=function(){return Q(this)?$(this):this},r.add=function(N){const T=Math.max(this.g.length,N.g.length),R=[];let b=0;for(let P=0;P<=T;P++){let L=b+(this.i(P)&65535)+(N.i(P)&65535),k=(L>>>16)+(this.i(P)>>>16)+(N.i(P)>>>16);b=k>>>16,L&=65535,k&=65535,R[P]=k<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ie(N,T){return N.add($(T))}r.j=function(N){if(q(this)||q(N))return I;if(Q(this))return Q(N)?$(this).j($(N)):$($(this).j(N));if(Q(N))return $(this.j($(N)));if(this.l(F)<0&&N.l(F)<0)return _(this.m()*N.m());const T=this.g.length+N.g.length,R=[];for(var b=0;b<2*T;b++)R[b]=0;for(b=0;b<this.g.length;b++)for(let P=0;P<N.g.length;P++){const L=this.i(b)>>>16,k=this.i(b)&65535,ze=N.i(P)>>>16,ft=N.i(P)&65535;R[2*b+2*P]+=k*ft,V(R,2*b+2*P),R[2*b+2*P+1]+=L*ft,V(R,2*b+2*P+1),R[2*b+2*P+1]+=k*ze,V(R,2*b+2*P+1),R[2*b+2*P+2]+=L*ze,V(R,2*b+2*P+2)}for(N=0;N<T;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=T;N<2*T;N++)R[N]=0;return new h(R,0)};function V(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function G(N,T){this.g=N,this.h=T}function H(N,T){if(q(T))throw Error("division by zero");if(q(N))return new G(I,I);if(Q(N))return T=H($(N),T),new G($(T.g),$(T.h));if(Q(T))return T=H(N,$(T)),new G($(T.g),T.h);if(N.g.length>30){if(Q(N)||Q(T))throw Error("slowDivide_ only works with positive integers.");for(var R=A,b=T;b.l(N)<=0;)R=ee(R),b=ee(b);var P=re(R,1),L=re(b,1);for(b=re(b,2),R=re(R,2);!q(b);){var k=L.add(b);k.l(N)<=0&&(P=P.add(R),L=k),b=re(b,1),R=re(R,1)}return T=ie(N,P.j(T)),new G(P,T)}for(P=I;N.l(T)>=0;){for(R=Math.max(1,Math.floor(N.m()/T.m())),b=Math.ceil(Math.log(R)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),L=_(R),k=L.j(T);Q(k)||k.l(N)>0;)R-=b,L=_(R),k=L.j(T);q(L)&&(L=A),P=P.add(L),N=ie(N,k)}return new G(P,N)}r.B=function(N){return H(this,N).h},r.and=function(N){const T=Math.max(this.g.length,N.g.length),R=[];for(let b=0;b<T;b++)R[b]=this.i(b)&N.i(b);return new h(R,this.h&N.h)},r.or=function(N){const T=Math.max(this.g.length,N.g.length),R=[];for(let b=0;b<T;b++)R[b]=this.i(b)|N.i(b);return new h(R,this.h|N.h)},r.xor=function(N){const T=Math.max(this.g.length,N.g.length),R=[];for(let b=0;b<T;b++)R[b]=this.i(b)^N.i(b);return new h(R,this.h^N.h)};function ee(N){const T=N.g.length+1,R=[];for(let b=0;b<T;b++)R[b]=N.i(b)<<1|N.i(b-1)>>>31;return new h(R,N.h)}function re(N,T){const R=T>>5;T%=32;const b=N.g.length-R,P=[];for(let L=0;L<b;L++)P[L]=T>0?N.i(L+R)>>>T|N.i(L+R+1)<<32-T:N.i(L+R);return new h(P,N.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,_v=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Cs=h}).apply(typeof gy<"u"?gy:typeof self<"u"?self:typeof window<"u"?window:{});var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vv,Ga,wv,rc,Yd,Ev,xv,Tv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof qu=="object"&&qu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var v=s;u=u.split(".");for(var x=0;x<u.length-1;x++){var M=u[x];if(!(M in v))break e;v=v[M]}u=u[u.length-1],x=v[u],m=m(x),m!=x&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var v=[],x;for(x in m)Object.prototype.hasOwnProperty.call(m,x)&&v.push([x,m[x]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function y(u,m,v){return u.call.apply(u.bind,arguments)}function _(u,m,v){return _=y,_.apply(null,arguments)}function E(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var x=v.slice();return x.push.apply(x,arguments),u.apply(this,x)}}function I(u,m){function v(){}v.prototype=m.prototype,u.Z=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(x,M,B){for(var ne=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)ne[Te-2]=arguments[Te];return m.prototype[M].apply(x,ne)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function F(u){const m=u.length;if(m>0){const v=Array(m);for(let x=0;x<m;x++)v[x]=u[x];return v}return[]}function q(u,m){for(let x=1;x<arguments.length;x++){const M=arguments[x];var v=typeof M;if(v=v!="object"?v:M?Array.isArray(M)?"array":v:"null",v=="array"||v=="object"&&typeof M.length=="number"){v=u.length||0;const B=M.length||0;u.length=v+B;for(let ne=0;ne<B;ne++)u[v+ne]=M[ne]}else u.push(M)}}class Q{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function $(u){h.setTimeout(()=>{throw u},0)}function ie(){var u=N;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class V{constructor(){this.h=this.g=null}add(m,v){const x=G.get();x.set(m,v),this.h?this.h.next=x:this.g=x,this.h=x}}var G=new Q(()=>new H,u=>u.reset());class H{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,re=!1,N=new V,T=()=>{const u=Promise.resolve(void 0);ee=()=>{u.then(R)}};function R(){for(var u;u=ie();){try{u.h.call(u.g)}catch(v){$(v)}var m=G;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}re=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};h.addEventListener("test",v,m),h.removeEventListener("test",v,m)}catch{}return u})();function k(u){return/^[\s\xa0]*$/.test(u)}function ze(u,m){P.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}I(ze,P),ze.prototype.init=function(u,m){const v=this.type=u.type,x=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),Rt=0;function Ke(u,m,v,x,M){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!x,this.ha=M,this.key=++Rt,this.da=this.fa=!1}function se(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ge(u,m,v){for(const x in u)m.call(v,u[x],x,u)}function ue(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function O(u){const m={};for(const v in u)m[v]=u[v];return m}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(u,m){let v,x;for(let M=1;M<arguments.length;M++){x=arguments[M];for(v in x)u[v]=x[v];for(let B=0;B<Y.length;B++)v=Y[B],Object.prototype.hasOwnProperty.call(x,v)&&(u[v]=x[v])}}function Ae(u){this.src=u,this.g={},this.h=0}Ae.prototype.add=function(u,m,v,x,M){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const ne=Ne(u,m,x,M);return ne>-1?(m=u[ne],v||(m.fa=!1)):(m=new Ke(m,this.src,B,!!x,M),m.fa=v,u.push(m)),m};function ke(u,m){const v=m.type;if(v in u.g){var x=u.g[v],M=Array.prototype.indexOf.call(x,m,void 0),B;(B=M>=0)&&Array.prototype.splice.call(x,M,1),B&&(se(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Ne(u,m,v,x){for(let M=0;M<u.length;++M){const B=u[M];if(!B.da&&B.listener==m&&B.capture==!!v&&B.ha==x)return M}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Oe={};function $e(u,m,v,x,M){if(Array.isArray(m)){for(let B=0;B<m.length;B++)$e(u,m[B],v,x,M);return null}return v=Yo(v),u&&u[ft]?u.J(m,v,f(x)?!!x.capture:!1,M):Ht(u,m,v,!1,x,M)}function Ht(u,m,v,x,M,B){if(!m)throw Error("Invalid event type");const ne=f(M)?!!M.capture:!!M;let Te=Li(u);if(Te||(u[Ue]=Te=new Ae(u)),v=Te.add(m,v,x,ne,B),v.proxy)return v;if(x=Vi(),v.proxy=x,x.src=u,x.listener=v,u.addEventListener)L||(M=ne),M===void 0&&(M=!1),u.addEventListener(m.toString(),x,M);else if(u.attachEvent)u.attachEvent(Oi(m.toString()),x);else if(u.addListener&&u.removeListener)u.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Vi(){function u(v){return m.call(u.src,u.listener,v)}const m=Nl;return u}function Qo(u,m,v,x,M){if(Array.isArray(m))for(var B=0;B<m.length;B++)Qo(u,m[B],v,x,M);else x=f(x)?!!x.capture:!!x,v=Yo(v),u&&u[ft]?(u=u.i,B=String(m).toString(),B in u.g&&(m=u.g[B],v=Ne(m,v,x,M),v>-1&&(se(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete u.g[B],u.h--)))):u&&(u=Li(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ne(m,v,x,M)),(v=u>-1?m[u]:null)&&Hr(v))}function Hr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[ft])ke(m.i,u);else{var v=u.type,x=u.proxy;m.removeEventListener?m.removeEventListener(v,x,u.capture):m.detachEvent?m.detachEvent(Oi(v),x):m.addListener&&m.removeListener&&m.removeListener(x),(v=Li(m))?(ke(v,u),v.h==0&&(v.src=null,m[Ue]=null)):se(u)}}}function Oi(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function Nl(u,m){if(u.da)u=!0;else{m=new ze(m,this);const v=u.listener,x=u.ha||u.src;u.fa&&Hr(u),u=v.call(x,m)}return u}function Li(u){return u=u[Ue],u instanceof Ae?u:null}var Ws="__closure_events_fn_"+(Math.random()*1e9>>>0);function Yo(u){return typeof u=="function"?u:(u[Ws]||(u[Ws]=function(m){return u.handleEvent(m)}),u[Ws])}function pt(){b.call(this),this.i=new Ae(this),this.M=this,this.G=null}I(pt,b),pt.prototype[ft]=!0,pt.prototype.removeEventListener=function(u,m,v,x){Qo(this,u,m,v,x)};function lt(u,m){var v,x=u.G;if(x)for(v=[];x;x=x.G)v.push(x);if(u=u.M,x=m.type||m,typeof m=="string")m=new P(m,u);else if(m instanceof P)m.target=m.target||u;else{var M=m;m=new P(x,u),Se(m,M)}M=!0;let B,ne;if(v)for(ne=v.length-1;ne>=0;ne--)B=m.g=v[ne],M=Rn(B,x,!0,m)&&M;if(B=m.g=u,M=Rn(B,x,!0,m)&&M,M=Rn(B,x,!1,m)&&M,v)for(ne=0;ne<v.length;ne++)B=m.g=v[ne],M=Rn(B,x,!1,m)&&M}pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const v=u.g[m];for(let x=0;x<v.length;x++)se(v[x]);delete u.g[m],u.h--}}this.G=null},pt.prototype.J=function(u,m,v,x){return this.i.add(String(u),m,!1,v,x)},pt.prototype.K=function(u,m,v,x){return this.i.add(String(u),m,!0,v,x)};function Rn(u,m,v,x){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let M=!0;for(let B=0;B<m.length;++B){const ne=m[B];if(ne&&!ne.da&&ne.capture==v){const Te=ne.listener,ut=ne.ha||ne.src;ne.fa&&ke(u.i,ne),M=Te.call(ut,x)!==!1&&M}}return M&&!x.defaultPrevented}function Jo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function Xo(u){u.g=Jo(()=>{u.g=null,u.i&&(u.i=!1,Xo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Cl extends b{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Xo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){b.call(this),this.h=u,this.g={}}I(Wr,b);var Zo=[];function ji(u){ge(u.g,function(m,v){this.g.hasOwnProperty(v)&&Hr(m)},u),u.g={}}Wr.prototype.N=function(){Wr.Z.N.call(this),ji(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,Pl=h.JSON.parse,qs=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Kr(){}function bl(){}var Gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mi(){P.call(this,"d")}I(Mi,P);function ea(){P.call(this,"c")}I(ea,P);var kn={},Ui=null;function Qr(){return Ui=Ui||new pt}kn.Ia="serverreachability";function Fi(u){P.call(this,kn.Ia,u)}I(Fi,P);function gr(u){const m=Qr();lt(m,new Fi(m))}kn.STAT_EVENT="statevent";function yr(u,m){P.call(this,kn.STAT_EVENT,u),this.stat=m}I(yr,P);function rt(u){const m=Qr();lt(m,new yr(m,u))}kn.Ja="timingevent";function ta(u,m){P.call(this,kn.Ja,u),this.size=m}I(ta,P);function Yr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Jr(){this.g=!0}Jr.prototype.ua=function(){this.g=!1};function Dl(u,m,v,x,M,B){u.info(function(){if(u.g)if(B){var ne="",Te=B.split("&");for(let Be=0;Be<Te.length;Be++){var ut=Te[Be].split("=");if(ut.length>1){const mt=ut[0];ut=ut[1];const un=mt.split("_");ne=un.length>=2&&un[1]=="type"?ne+(mt+"="+ut+"&"):ne+(mt+"=redacted&")}}}else ne=null;else ne=B;return"XMLHTTP REQ ("+x+") [attempt "+M+"]: "+m+`
`+v+`
`+ne})}function Vl(u,m,v,x,M,B,ne){u.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+M+"]: "+m+`
`+v+`
`+B+" "+ne})}function zn(u,m,v,x){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ks(u,v)+(x?" "+x:"")})}function Ol(u,m){u.info(function(){return"TIMEOUT: "+m})}Jr.prototype.info=function(){};function Ks(u,m){if(!u.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var v=B[u];if(!(v.length<2)){var x=v[1];if(Array.isArray(x)&&!(x.length<1)){var M=x[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ne=1;ne<x.length;ne++)x[ne]=""}}}}return qr(B)}catch{return m}}var Xr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ll;function _r(){}I(_r,Kr),_r.prototype.g=function(){return new XMLHttpRequest},Ll=new _r;function Bn(u){return encodeURIComponent(String(u))}function zi(u){var m=1;u=u.split(":");const v=[];for(;m>0&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function yn(u,m,v,x){this.j=u,this.i=m,this.l=v,this.S=x||1,this.V=new Wr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}var Ml={},na={};function Nn(u,m,v){u.M=1,u.A=wr(_n(m)),u.u=v,u.R=!0,ra(u,null)}function ra(u,m){u.F=Date.now(),Gs(u),u.B=_n(u.A);var v=u.B,x=u.S;Array.isArray(x)||(x=[String(x)]),fa(v.i,"t",x),u.C=0,v=u.j.L,u.h=new jl,u.g=Gl(u.j,v?m:null,!u.u),u.P>0&&(u.O=new Cl(_(u.Y,u,u.g),u.P)),m=u.V,v=u.g,x=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(Zo[0]=M.toString()),M=Zo);for(let B=0;B<M.length;B++){const ne=$e(v,M[B],x||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.J?O(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),gr(),Dl(u.i,u.v,u.B,u.l,u.S,u.u)}yn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Qn(u)==3?m.j():this.Y(u)},yn.prototype.Y=function(u){try{if(u==this.g)e:{const Te=Qn(this.g),ut=this.g.ya(),Be=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||ql(this.g)))){this.K||Te!=4||ut==7||(ut==8||Be<=0?gr(3):gr(2)),Bi(this);var m=this.g.ca();this.X=m;var v=Ul(this);if(this.o=m==200,Vl(this.i,this.v,this.B,this.l,this.S,Te,m),this.o){if(this.U&&!this.L){t:{if(this.g){var x,M=this.g;if((x=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(x)){var B=x;break t}}B=null}if(u=B)zn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,rt(12),vr(this),Qs(this);break e}}if(this.R){u=!0;let mt;for(;!this.K&&this.C<v.length;)if(mt=zl(this,v),mt==na){Te==4&&(this.m=4,rt(14),u=!1),zn(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==Ml){this.m=4,rt(15),zn(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else zn(this.i,this.l,mt,null),Ge(this,mt);if(Fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||v.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)zn(this.i,this.l,v,"[Invalid Chunked Response]"),vr(this),Qs(this);else if(v.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),si(ne),ne.P=!0,rt(11))}}else zn(this.i,this.l,v,null),Ge(this,v);Te==4&&vr(this),this.o&&!this.K&&(Te==4?Xi(this.j,this):(this.o=!1,Gs(this)))}else ma(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),vr(this),Qs(this)}}}catch{}finally{}};function Ul(u){if(!Fl(u))return u.g.la();const m=ql(u.g);if(m==="")return"";let v="";const x=m.length,M=Qn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vr(u),Qs(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<x;B++)u.h.h=!0,v+=u.h.i.decode(m[B],{stream:!(M&&B==x-1)});return m.length=0,u.h.g+=v,u.C=0,u.h.g}function Fl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function zl(u,m){var v=u.C,x=m.indexOf(`
`,v);return x==-1?na:(v=Number(m.substring(v,x)),isNaN(v)?Ml:(x+=1,x+v>m.length?na:(m=m.slice(x,x+v),u.C=x+v,m)))}yn.prototype.cancel=function(){this.K=!0,vr(this)};function Gs(u){u.T=Date.now()+u.H,sa(u,u.H)}function sa(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Yr(_(u.aa,u),m)}function Bi(u){u.D&&(h.clearTimeout(u.D),u.D=null)}yn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Ol(this.i,this.B),this.M!=2&&(gr(),rt(17)),vr(this),this.m=2,Qs(this)):sa(this,this.T-u)};function Qs(u){u.j.I==0||u.K||Xi(u.j,u)}function vr(u){Bi(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,ji(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ge(u,m){try{var v=u.j;if(v.I!=0&&(v.g==u||oa(v.h,u))){if(!u.L&&oa(v.h,u)&&v.I==3){try{var x=v.Ba.g.parse(m)}catch{x=null}if(Array.isArray(x)&&x.length==3){var M=x;if(M[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)Ji(v),an(v);else break e;Xn(v),rt(18)}}else v.xa=M[1],0<v.xa-v.K&&M[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=Yr(_(v.Va,v),6e3));Ys(v.h)<=1&&v.ta&&(v.ta=void 0)}else ln(v,11)}else if((u.L||v.g==u)&&Ji(v),!k(m))for(M=v.Ba.g.parse(m),m=0;m<M.length;m++){let Be=M[m];const mt=Be[0];if(!(mt<=v.K))if(v.K=mt,Be=Be[1],v.I==2)if(Be[0]=="c"){v.M=Be[1],v.ba=Be[2];const un=Be[3];un!=null&&(v.ka=un,v.j.info("VER="+v.ka));const Sr=Be[4];Sr!=null&&(v.za=Sr,v.j.info("SVER="+v.za));const Zn=Be[5];Zn!=null&&typeof Zn=="number"&&Zn>0&&(x=1.5*Zn,v.O=x,v.j.info("backChannelRequestTimeoutMs_="+x)),x=v;const er=u.g;if(er){const to=er.g?er.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var B=x.h;B.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Hi(B,B.h),B.h=null))}if(x.G){const _a=er.g?er.g.getResponseHeader("X-HTTP-Session-Id"):null;_a&&(x.wa=_a,Me(x.J,x.G,_a))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),x=v;var ne=u;if(x.na=ya(x,x.L?x.ba:null,x.W),ne.L){Js(x.h,ne);var Te=ne,ut=x.O;ut&&(Te.H=ut),Te.D&&(Bi(Te),Gs(Te)),x.g=ne}else Ot(x);v.i.length>0&&Ir(v)}else Be[0]!="stop"&&Be[0]!="close"||ln(v,7);else v.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?ln(v,7):Qi(v):Be[0]!="noop"&&v.l&&v.l.qa(Be),v.A=0)}}gr(4)}catch{}}var eh=class{constructor(u,m){this.g=u,this.map=m}};function $i(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ia(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ys(u){return u.h?1:u.g?u.g.size:0}function oa(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Hi(u,m){u.g?u.g.add(m):u.h=m}function Js(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}$i.prototype.cancel=function(){if(this.i=rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function rn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.G);return m}return F(u.i)}var Bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sn(u,m){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const x=u[v].indexOf("=");let M,B=null;x>=0?(M=u[v].substring(0,x),B=u[v].substring(x+1)):M=u[v],m(M,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function $n(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof $n?(this.l=u.l,Xs(this,u.j),this.o=u.o,this.g=u.g,Hn(this,u.u),this.h=u.h,es(this,pa(u.i)),this.m=u.m):u&&(m=String(u).match(Bl))?(this.l=!1,Xs(this,m[1]||"",!0),this.o=Zs(m[2]||""),this.g=Zs(m[3]||"",!0),Hn(this,m[4]),this.h=Zs(m[5]||"",!0),es(this,m[6]||"",!0),this.m=Zs(m[7]||"")):(this.l=!1,this.i=new De(null,this.l))}$n.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(ei(m,la,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ei(m,la,!0),"@"),u.push(Bn(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ei(v,v.charAt(0)=="/"?ti:ua,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ei(v,ca)),u.join("")},$n.prototype.resolve=function(u){const m=_n(this);let v=!!u.j;v?Xs(m,u.j):v=!!u.o,v?m.o=u.o:v=!!u.g,v?m.g=u.g:v=u.u!=null;var x=u.h;if(v)Hn(m,u.u);else if(v=!!u.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var M=m.h.lastIndexOf("/");M!=-1&&(x=m.h.slice(0,M+1)+x)}if(M=x,M==".."||M==".")x="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){x=M.lastIndexOf("/",0)==0,M=M.split("/");const B=[];for(let ne=0;ne<M.length;){const Te=M[ne++];Te=="."?x&&ne==M.length&&B.push(""):Te==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),x&&ne==M.length&&B.push("")):(B.push(Te),x=!0)}x=B.join("/")}else x=M}return v?m.h=x:v=u.i.toString()!=="",v?es(m,pa(u.i)):v=!!u.m,v&&(m.m=u.m),m};function _n(u){return new $n(u)}function Xs(u,m,v){u.j=v?Zs(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Hn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function es(u,m,v){m instanceof De?(u.i=m,qi(u.i,u.l)):(v||(m=ei(m,th)),u.i=new De(m,u.l))}function Me(u,m,v){u.i.set(m,v)}function wr(u){return Me(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Zs(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ei(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,aa),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function aa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var la=/[#\/\?@]/g,ua=/[#\?:]/g,ti=/[#\?]/g,th=/[#\?@]/g,ca=/#/g;function De(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Wn(u){u.g||(u.g=new Map,u.h=0,u.i&&sn(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=De.prototype,r.add=function(u,m){Wn(this),this.i=null,u=qn(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function ha(u,m){Wn(u),m=qn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Wi(u,m){return Wn(u),m=qn(u,m),u.g.has(m)}r.forEach=function(u,m){Wn(this),this.g.forEach(function(v,x){v.forEach(function(M){u.call(m,M,x,this)},this)},this)};function da(u,m){Wn(u);let v=[];if(typeof m=="string")Wi(u,m)&&(v=v.concat(u.g.get(qn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)v=v.concat(u[m]);return v}r.set=function(u,m){return Wn(this),this.i=null,u=qn(this,u),Wi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=da(this,u),u.length>0?String(u[0]):m):m};function fa(u,m,v){ha(u,m),v.length>0&&(u.i=null,u.g.set(qn(u,m),F(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let x=0;x<m.length;x++){var v=m[x];const M=Bn(v);v=da(this,v);for(let B=0;B<v.length;B++){let ne=M;v[B]!==""&&(ne+="="+Bn(v[B])),u.push(ne)}}return this.i=u.join("&")};function pa(u){const m=new De;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function qn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function qi(u,m){m&&!u.j&&(Wn(u),u.i=null,u.g.forEach(function(v,x){const M=x.toLowerCase();x!=M&&(ha(this,x),fa(this,M,v))},u)),u.j=m}function Kn(u,m){const v=new Jr;if(h.Image){const x=new Image;x.onload=E(kt,v,"TestLoadImage: loaded",!0,m,x),x.onerror=E(kt,v,"TestLoadImage: error",!1,m,x),x.onabort=E(kt,v,"TestLoadImage: abort",!1,m,x),x.ontimeout=E(kt,v,"TestLoadImage: timeout",!1,m,x),h.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=u}else m(!1)}function Gn(u,m){const v=new Jr,x=new AbortController,M=setTimeout(()=>{x.abort(),kt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:x.signal}).then(B=>{clearTimeout(M),B.ok?kt(v,"TestPingServer: ok",!0,m):kt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),kt(v,"TestPingServer: error",!1,m)})}function kt(u,m,v,x,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),x(v)}catch{}}function ni(){this.g=new qs}function Er(u){this.i=u.Sb||null,this.h=u.ab||!1}I(Er,Kr),Er.prototype.g=function(){return new on(this.i,this.h)};function on(u,m){pt.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(on,pt),r=on.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Cn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$l(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function $l(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ts(this):Cn(this),this.readyState==3&&$l(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ts(this))},r.Na=function(u){this.g&&(this.response=u,ts(this))},r.ga=function(){this.g&&ts(this)};function ts(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Cn(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Cn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(on.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Hl(u){let m="";return ge(u,function(v,x){m+=x,m+=":",m+=v,m+=`\r
`}),m}function Ki(u,m,v){e:{for(x in v){var x=!1;break e}x=!0}x||(v=Hl(v),typeof u=="string"?v!=null&&Bn(v):Me(u,m,v))}function He(u){pt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(He,pt);var Wl=/^https?$/i,nh=["POST","PUT"];r=He.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,v,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ll.g(),this.g.onreadystatechange=A(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){ns(this,B);return}if(u=v||"",v=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var M in x)v.set(M,x[M]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const B of x.keys())v.set(B,x.get(B));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(nh,m,void 0)>=0)||x||M||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ne]of v)this.g.setRequestHeader(B,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){ns(this,B)}};function ns(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,rs(u),Tr(u)}function rs(u){u.A||(u.A=!0,lt(u,"complete"),lt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,lt(this,"complete"),lt(this,"abort"),Tr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),He.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?xr(this):this.Xa())},r.Xa=function(){xr(this)};function xr(u){if(u.h&&typeof l<"u"){if(u.v&&Qn(u)==4)setTimeout(u.Ca.bind(u),0);else if(lt(u,"readystatechange"),Qn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var x;if(x=B===0){let ne=String(u.D).match(Bl)[1]||null;!ne&&h.self&&h.self.location&&(ne=h.self.location.protocol.slice(0,-1)),x=!Wl.test(ne?ne.toLowerCase():"")}v=x}if(v)lt(u,"complete"),lt(u,"success");else{u.o=6;try{var M=Qn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",rs(u)}}finally{Tr(u)}}}}function Tr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,m||lt(u,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Qn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Pl(m)}};function ql(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ma(u){const m={};u=(u.g&&Qn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<u.length;x++){if(k(u[x]))continue;var v=zi(u[x]);const M=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=m[M]||[];m[M]=B,B.push(v)}ue(m,function(x){return x.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Gi(u){this.za=0,this.i=[],this.j=new Jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yn("baseRetryDelayMs",5e3,u),this.Za=Yn("retryDelaySeedMs",1e4,u),this.Ta=Yn("forwardChannelMaxRetries",2,u),this.va=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new $i(u&&u.concurrentRequestLimit),this.Ba=new ni,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Gi.prototype,r.ka=8,r.I=1,r.connect=function(u,m,v,x){rt(0),this.W=u,this.H=m||{},v&&x!==void 0&&(this.H.OSID=v,this.H.OAID=x),this.F=this.X,this.J=ya(this,null,this.W),Ir(this)};function Qi(u){if(Yi(u),u.I==3){var m=u.V++,v=_n(u.J);if(Me(v,"SID",u.M),Me(v,"RID",m),Me(v,"TYPE","terminate"),Jn(u,v),m=new yn(u,u.j,m),m.M=2,m.A=wr(_n(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&h.Image&&(new Image().src=m.A,v=!0),v||(m.g=Gl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Gs(m)}ii(u)}function an(u){u.g&&(si(u),u.g.cancel(),u.g=null)}function Yi(u){an(u),u.v&&(h.clearTimeout(u.v),u.v=null),Ji(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Ir(u){if(!ia(u.h)&&!u.m){u.m=!0;var m=u.Ea;ee||T(),re||(ee(),re=!0),N.add(m,u),u.D=0}}function Kl(u,m){return Ys(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Yr(_(u.Ea,u,m),Zi(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new yn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=O(B),Se(B,this.U)):B=this.U),this.u!==null||this.R||(M.J=B,B=null),this.S)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var x=this.i[v];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(m+=x,m>4096){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=ga(this,M,m),v=_n(this.J),Me(v,"RID",u),Me(v,"CVER",22),this.G&&Me(v,"X-HTTP-Session-Id",this.G),Jn(this,v),B&&(this.R?m="headers="+Bn(Hl(B))+"&"+m:this.u&&Ki(v,this.u,B)),Hi(this.h,M),this.Ra&&Me(v,"TYPE","init"),this.S?(Me(v,"$req",m),Me(v,"SID","null"),M.U=!0,Nn(M,v,null)):Nn(M,v,m),this.I=2}}else this.I==3&&(u?ri(this,u):this.i.length==0||ia(this.h)||ri(this))};function ri(u,m){var v;m?v=m.l:v=u.V++;const x=_n(u.J);Me(x,"SID",u.M),Me(x,"RID",v),Me(x,"AID",u.K),Jn(u,x),u.u&&u.o&&Ki(x,u.u,u.o),v=new yn(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),m&&(u.i=m.G.concat(u.i)),m=ga(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Hi(u.h,v),Nn(v,x,m)}function Jn(u,m){u.H&&ge(u.H,function(v,x){Me(m,x,v)}),u.l&&ge({},function(v,x){Me(m,x,v)})}function ga(u,m,v){v=Math.min(u.i.length,v);const x=u.l?_(u.l.Ka,u.l,u):null;e:{var M=u.i;let Te=-1;for(;;){const ut=["count="+v];Te==-1?v>0?(Te=M[0].g,ut.push("ofs="+Te)):Te=0:ut.push("ofs="+Te);let Be=!0;for(let mt=0;mt<v;mt++){var B=M[mt].g;const un=M[mt].map;if(B-=Te,B<0)Te=Math.max(0,M[mt].g-100),Be=!1;else try{B="req"+B+"_"||"";try{var ne=un instanceof Map?un:Object.entries(un);for(const[Sr,Zn]of ne){let er=Zn;f(Zn)&&(er=qr(Zn)),ut.push(B+Sr+"="+encodeURIComponent(er))}}catch(Sr){throw ut.push(B+"type="+encodeURIComponent("_badmap")),Sr}}catch{x&&x(un)}}if(Be){ne=ut.join("&");break e}}ne=void 0}return u=u.i.splice(0,v),m.G=u,ne}function Ot(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;ee||T(),re||(ee(),re=!0),N.add(m,u),u.A=0}}function Xn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Yr(_(u.Da,u),Zi(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ss(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Yr(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),an(this),ss(this))};function si(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ss(u){u.g=new yn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=_n(u.na);Me(m,"RID","rpc"),Me(m,"SID",u.M),Me(m,"AID",u.K),Me(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Me(m,"TO",u.ia),Me(m,"TYPE","xmlhttp"),Jn(u,m),u.u&&u.o&&Ki(m,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=wr(_n(m)),v.u=null,v.R=!0,ra(v,u)}r.Va=function(){this.C!=null&&(this.C=null,an(this),Xn(this),rt(19))};function Ji(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Xi(u,m){var v=null;if(u.g==m){Ji(u),si(u),u.g=null;var x=2}else if(oa(u.h,m))v=m.G,Js(u.h,m),x=1;else return;if(u.I!=0){if(m.o)if(x==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var M=u.D;x=Qr(),lt(x,new ta(x,v)),Ir(u)}else Ot(u);else if(M=m.m,M==3||M==0&&m.X>0||!(x==1&&Kl(u,m)||x==2&&Xn(u)))switch(v&&v.length>0&&(m=u.h,m.i=m.i.concat(v)),M){case 1:ln(u,5);break;case 4:ln(u,10);break;case 3:ln(u,6);break;default:ln(u,2)}}}function Zi(u,m){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*m}function ln(u,m){if(u.j.info("Error code "+m),m==2){var v=_(u.bb,u),x=u.Ua;const M=!x;x=new $n(x||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Xs(x,"https"),wr(x),M?Kn(x.toString(),v):Gn(x.toString(),v)}else rt(2);u.I=0,u.l&&u.l.pa(m),ii(u),Yi(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function ii(u){if(u.I=0,u.ja=[],u.l){const m=rn(u.h);(m.length!=0||u.i.length!=0)&&(q(u.ja,m),q(u.ja,u.i),u.h.i.length=0,F(u.i),u.i.length=0),u.l.oa()}}function ya(u,m,v){var x=v instanceof $n?_n(v):new $n(v);if(x.g!="")m&&(x.g=m+"."+x.g),Hn(x,x.u);else{var M=h.location;x=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;const B=new $n(null);x&&Xs(B,x),m&&(B.g=m),M&&Hn(B,M),v&&(B.h=v),x=B}return v=u.G,m=u.wa,v&&m&&Me(x,v,m),Me(x,"VER",u.ka),Jn(u,x),x}function Gl(u,m,v){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new He(new Er({ab:v})):new He(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ql(){}r=Ql.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function eo(){}eo.prototype.g=function(u,m){return new Nt(u,m)};function Nt(u,m){pt.call(this),this.g=new Gi(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!k(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!k(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new is(this)}I(Nt,pt),Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Qi(this.g)},Nt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=qr(u),u=v);m.i.push(new eh(m.Ya++,u)),m.I==3&&Ir(m)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,Nt.Z.N.call(this)};function Yl(u){Mi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}I(Yl,Mi);function Jl(){ea.call(this),this.status=1}I(Jl,ea);function is(u){this.g=u}I(is,Ql),is.prototype.ra=function(){lt(this.g,"a")},is.prototype.qa=function(u){lt(this.g,new Yl(u))},is.prototype.pa=function(u){lt(this.g,new Jl)},is.prototype.oa=function(){lt(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Tv=function(){return new eo},xv=function(){return Qr()},Ev=kn,Yd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,rc=Xr,Zr.COMPLETE="complete",wv=Zr,bl.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",pt.prototype.listen=pt.prototype.J,Ga=bl,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,vv=He}).apply(typeof qu<"u"?qu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo="12.8.0";function O1(r){Wo=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new wf("@firebase/firestore");function To(){return Ri.logLevel}function le(r,...e){if(Ri.logLevel<=Ce.DEBUG){const t=e.map(Pf);Ri.debug(`Firestore (${Wo}): ${r}`,...t)}}function Fr(r,...e){if(Ri.logLevel<=Ce.ERROR){const t=e.map(Pf);Ri.error(`Firestore (${Wo}): ${r}`,...t)}}function Oo(r,...e){if(Ri.logLevel<=Ce.WARN){const t=e.map(Pf);Ri.warn(`Firestore (${Wo}): ${r}`,...t)}}function Pf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Iv(r,s,t)}function Iv(r,e,t){let s=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fr(s),new Error(s)}function Fe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Iv(e,o,s)}function Ie(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class j1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class M1{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let l=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new jr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=l;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},f=y=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>f(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?f(y):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new jr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new Sv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class U1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class F1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new U1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,le("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=B1(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Pe(r,e){return r<e?-1:r>e?1:0}function Jd(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return Od(o)===Od(l)?Pe(o,l):Od(o)?1:-1}return Pe(r.length,e.length)}const $1=55296,H1=57343;function Od(r){const e=r.charCodeAt(0);return e>=$1&&e<=H1}function Lo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Pe(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Jd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class qe extends ir{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const W1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ir{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return W1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_y}static keyField(){return new Dt([_y])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new oe(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new oe(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new oe(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new oe(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(qe.fromString(e))}static fromName(e){return new me(qe.fromString(e).popFirst(5))}static empty(){return new me(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(r,e,t){if(!t)throw new oe(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function q1(r,e,t,s){if(e===!0&&s===!0)throw new oe(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function vy(r){if(!me.isDocumentKey(r))throw new oe(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function wy(r){if(me.isDocumentKey(r))throw new oe(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Rv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Lc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function nn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new oe(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lc(r);throw new oe(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(r,e){const t={typeString:r};return e&&(t.value=e),t}function xl(r,e){if(!Rv(r))throw new oe(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new oe(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=-62135596800,xy=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xy);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ey)throw new oe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xy}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ey;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:vt("string",Je._jsonSchemaVersion),seconds:vt("number"),nanoseconds:vt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new Je(0,0))}static max(){return new xe(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=-1;function K1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=xe.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Os(o,me.empty(),e)}function G1(r){return new Os(r.readTime,r.key,ll)}class Os{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Os(xe.min(),me.empty(),ll)}static max(){return new Os(xe.max(),me.empty(),ll)}}function Q1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(r.documentKey,e.documentKey),t!==0?t:Pe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==Y1)throw r;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,s)=>{t(e)}))}static reject(e){return new K(((t,s)=>{s(e)}))}static waitFor(e){return new K(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(y=>s(y)))})),h=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next((o=>o?K.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new K(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let y=0;y<l;y++){const _=y;t(e[_]).next((E=>{h[_]=E,++f,f===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new K(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function X1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ko(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}jc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=-1;function Mc(r){return r==null}function _c(r){return r===0&&1/r==-1/0}function Z1(r){return typeof r=="number"&&Number.isInteger(r)&&!_c(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="";function eS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ty(e)),e=tS(r.get(t),e);return Ty(e)}function tS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case kv:t+="";break;default:t+=l}}return t}function Ty(r){return r+kv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function $s(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Nv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??bt.RED,this.left=o??bt.EMPTY,this.right=l??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new bt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sy(this.data.getIterator())}getIteratorFrom(e){return new Sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class Sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new pn([])}unionWith(e){let t=new xt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Cv("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const nS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=nS.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function js(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="server_timestamp",bv="__type__",Dv="__previous_value__",Vv="__local_write_time__";function Vf(r){return(r?.mapValue?.fields||{})[bv]?.stringValue===Pv}function Uc(r){const e=r.mapValue.fields[Dv];return Vf(e)?Uc(e):e}function ul(r){const e=Ls(r.mapValue.fields[Vv].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,s,o,l,h,f,y,_,E,I){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=I}}const vc="(default)";class cl{constructor(e,t){this.projectId=e,this.database=t||vc}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database===vc}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}function sS(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new oe(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="__type__",iS="__max__",Gu={mapValue:{}},Lv="__vector__",wc="value";function Ms(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Vf(r)?4:aS(r)?9007199254740991:oS(r)?10:11:we(28295,{value:r})}function fr(r,e){if(r===e)return!0;const t=Ms(r);if(t!==Ms(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ul(r).isEqual(ul(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ls(o.timestampValue),f=Ls(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return js(o.bytesValue).isEqual(js(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ht(o.geoPointValue.latitude)===ht(l.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ht(o.integerValue)===ht(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ht(o.doubleValue),f=ht(l.doubleValue);return h===f?_c(h)===_c(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Lo(r.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Iy(h)!==Iy(f))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(f[y]===void 0||!fr(h[y],f[y])))return!1;return!0})(r,e);default:return we(52216,{left:r})}}function hl(r,e){return(r.values||[]).find((t=>fr(t,e)))!==void 0}function jo(r,e){if(r===e)return 0;const t=Ms(r),s=Ms(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ht(l.integerValue||l.doubleValue),y=ht(h.integerValue||h.doubleValue);return f<y?-1:f>y?1:f===y?0:isNaN(f)?isNaN(y)?0:-1:1})(r,e);case 3:return Ay(r.timestampValue,e.timestampValue);case 4:return Ay(ul(r),ul(e));case 5:return Jd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=js(l),y=js(h);return f.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),y=h.split("/");for(let _=0;_<f.length&&_<y.length;_++){const E=Pe(f[_],y[_]);if(E!==0)return E}return Pe(f.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Pe(ht(l.latitude),ht(h.latitude));return f!==0?f:Pe(ht(l.longitude),ht(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Ry(r.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},y=h.fields||{},_=f[wc]?.arrayValue,E=y[wc]?.arrayValue,I=Pe(_?.values?.length||0,E?.values?.length||0);return I!==0?I:Ry(_,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Gu.mapValue&&h===Gu.mapValue)return 0;if(l===Gu.mapValue)return 1;if(h===Gu.mapValue)return-1;const f=l.fields||{},y=Object.keys(f),_=h.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let I=0;I<y.length&&I<E.length;++I){const A=Jd(y[I],E[I]);if(A!==0)return A;const F=jo(f[y[I]],_[E[I]]);if(F!==0)return F}return Pe(y.length,E.length)})(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function Ay(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const t=Ls(r),s=Ls(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function Ry(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=jo(t[o],s[o]);if(l)return l}return Pe(t.length,s.length)}function Mo(r){return Xd(r)}function Xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ls(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return js(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return me.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Xd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Xd(t.fields[h])}`;return o+"}"})(r.mapValue):we(61005,{value:r})}function sc(r){switch(Ms(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(r);return e?16+sc(e):16;case 5:return 2*r.stringValue.length;case 6:return js(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+sc(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return $s(s.fields,((l,h)=>{o+=l.length+sc(h)})),o})(r.mapValue);default:throw we(13486,{value:r})}}function ky(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Zd(r){return!!r&&"integerValue"in r}function Of(r){return!!r&&"arrayValue"in r}function Ny(r){return!!r&&"nullValue"in r}function Cy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ic(r){return!!r&&"mapValue"in r}function oS(r){return(r?.mapValue?.fields||{})[Ov]?.stringValue===Lv}function el(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return $s(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=el(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(r.arrayValue.values[t]);return e}return{...r}}function aS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===iS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=el(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ic(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){$s(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new tn(el(this.value))}}function jv(r){const e=[];return $s(r.fields,((t,s)=>{const o=new Dt([t]);if(ic(s)){const l=jv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,xe.min(),xe.min(),xe.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,xe.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,xe.min(),xe.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,xe.min(),xe.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.position=e,this.inclusive=t}}function Py(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=jo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function by(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!fr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t="asc"){this.field=e,this.dir=t}}function lS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{}class _t extends Mv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new cS(e,t,s):t==="array-contains"?new fS(e,s):t==="in"?new pS(e,s):t==="not-in"?new mS(e,s):t==="array-contains-any"?new gS(e,s):new _t(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new hS(e,s):new dS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jo(t,this.value)):t!==null&&Ms(this.value)===Ms(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends Mv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Fn(e,t)}matches(e){return Uv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Uv(r){return r.op==="and"}function Fv(r){return uS(r)&&Uv(r)}function uS(r){for(const e of r.filters)if(e instanceof Fn)return!1;return!0}function ef(r){if(r instanceof _t)return r.field.canonicalString()+r.op.toString()+Mo(r.value);if(Fv(r))return r.filters.map((e=>ef(e))).join(",");{const e=r.filters.map((t=>ef(t))).join(",");return`${r.op}(${e})`}}function zv(r,e){return r instanceof _t?(function(s,o){return o instanceof _t&&s.op===o.op&&s.field.isEqual(o.field)&&fr(s.value,o.value)})(r,e):r instanceof Fn?(function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&zv(h,o.filters[f])),!0):!1})(r,e):void we(19439)}function Bv(r){return r instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mo(t.value)}`})(r):r instanceof Fn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Bv).join(" ,")+"}"})(r):"Filter"}class cS extends _t{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class hS extends _t{constructor(e,t){super(e,"in",t),this.keys=$v("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dS extends _t{constructor(e,t){super(e,"not-in",t),this.keys=$v("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $v(r,e){return(e.arrayValue?.values||[]).map((t=>me.fromName(t.referenceValue)))}class fS extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Of(t)&&hl(t.arrayValue,this.value)}}class pS extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hl(this.value.arrayValue,t)}}class mS extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hl(this.value.arrayValue,t)}}class gS extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Of(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>hl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function Dy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new yS(r,e,t,s,o,l,h)}function Lf(r){const e=Ie(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ef(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Mo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Mo(s))).join(",")),e.Te=t}return e.Te}function jf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!lS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!zv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!by(r.startAt,e.startAt)&&by(r.endAt,e.endAt)}function tf(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=y,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function _S(r,e,t,s,o,l,h,f){return new Tl(r,e,t,s,o,l,h,f)}function Fc(r){return new Tl(r)}function Vy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function vS(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Hv(r){return r.collectionGroup!==null}function tl(r){const e=Ie(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new xt(Dt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new xc(l,s))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new xc(Dt.keyField(),s))}return e.Ie}function cr(r){const e=Ie(r);return e.Ee||(e.Ee=wS(e,tl(r))),e.Ee}function wS(r,e){if(r.limitType==="F")return Dy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new xc(o.field,l)}));const t=r.endAt?new Ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ec(r.startAt.position,r.startAt.inclusive):null;return Dy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function nf(r,e){const t=r.filters.concat([e]);return new Tl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function rf(r,e,t){return new Tl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function zc(r,e){return jf(cr(r),cr(e))&&r.limitType===e.limitType}function Wv(r){return`${Lf(cr(r))}|lt:${r.limitType}`}function Io(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Bv(o))).join(", ")}]`),Mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Mo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Mo(o))).join(",")),`Target(${s})`})(cr(r))}; limitType=${r.limitType})`}function Bc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):me.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of tl(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,y){const _=Py(h,f,y);return h.inclusive?_<=0:_<0})(s.startAt,tl(s),o)||s.endAt&&!(function(h,f,y){const _=Py(h,f,y);return h.inclusive?_>=0:_>0})(s.endAt,tl(s),o))})(r,e)}function ES(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qv(r){return(e,t)=>{let s=!1;for(const o of tl(r)){const l=xS(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function xS(r,e,t){const s=r.field.isKeyField()?me.comparator(e.key,t.key):(function(l,h,f){const y=h.data.field(l),_=f.data.field(l);return y!==null&&_!==null?jo(y,_):we(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return Nv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new nt(me.comparator);function zr(){return TS}const Kv=new nt(me.comparator);function Qa(...r){let e=Kv;for(const t of r)e=e.insert(t.key,t);return e}function Gv(r){let e=Kv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function vi(){return nl()}function Qv(){return nl()}function nl(){return new Pi((r=>r.toString()),((r,e)=>r.isEqual(e)))}const IS=new nt(me.comparator),SS=new xt(me.comparator);function be(...r){let e=SS;for(const t of r)e=e.add(t);return e}const AS=new xt(Pe);function RS(){return AS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_c(e)?"-0":e}}function Yv(r){return{integerValue:""+r}}function kS(r,e){return Z1(e)?Yv(e):Mf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._=void 0}}function NS(r,e,t){return r instanceof Tc?(function(o,l){const h={fields:{[bv]:{stringValue:Pv},[Vv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Vf(l)&&(l=Uc(l)),l&&(h.fields[Dv]=l),{mapValue:h}})(t,e):r instanceof dl?Xv(r,e):r instanceof fl?Zv(r,e):(function(o,l){const h=Jv(o,l),f=Oy(h)+Oy(o.Ae);return Zd(h)&&Zd(o.Ae)?Yv(f):Mf(o.serializer,f)})(r,e)}function CS(r,e,t){return r instanceof dl?Xv(r,e):r instanceof fl?Zv(r,e):t}function Jv(r,e){return r instanceof Ic?(function(s){return Zd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Tc extends $c{}class dl extends $c{constructor(e){super(),this.elements=e}}function Xv(r,e){const t=e0(e);for(const s of r.elements)t.some((o=>fr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class fl extends $c{constructor(e){super(),this.elements=e}}function Zv(r,e){let t=e0(e);for(const s of r.elements)t=t.filter((o=>!fr(o,s)));return{arrayValue:{values:t}}}class Ic extends $c{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Oy(r){return ht(r.integerValue||r.doubleValue)}function e0(r){return Of(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function PS(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof dl&&o instanceof dl||s instanceof fl&&o instanceof fl?Lo(s.elements,o.elements,fr):s instanceof Ic&&o instanceof Ic?fr(s.Ae,o.Ae):s instanceof Tc&&o instanceof Tc})(r.transform,e.transform)}class bS{constructor(e,t){this.version=e,this.transformResults=t}}class An{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Hc{}function t0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Uf(r.key,An.none()):new Il(r.key,r.data,An.none());{const t=r.data,s=tn.empty();let o=new xt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Hs(r.key,s,new pn(o.toArray()),An.none())}}function DS(r,e,t){r instanceof Il?(function(o,l,h){const f=o.value.clone(),y=jy(o.fieldTransforms,l,h.transformResults);f.setAll(y),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Hs?(function(o,l,h){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=jy(o.fieldTransforms,l,h.transformResults),y=l.data;y.setAll(n0(o)),y.setAll(f),l.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function rl(r,e,t,s){return r instanceof Il?(function(l,h,f,y){if(!oc(l.precondition,h))return f;const _=l.value.clone(),E=My(l.fieldTransforms,y,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Hs?(function(l,h,f,y){if(!oc(l.precondition,h))return f;const _=My(l.fieldTransforms,y,h),E=h.data;return E.setAll(n0(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(r,e,t,s):(function(l,h,f){return oc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function VS(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Jv(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function Ly(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Lo(s,o,((l,h)=>PS(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Il extends Hc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Hs extends Hc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function n0(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function jy(r,e,t){const s=new Map;Fe(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,CS(h,f,t[o]))}return s}function My(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,NS(l,h,e))}return s}class Uf extends Hc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OS extends Hc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&DS(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=rl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=rl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Qv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const y=t0(h,f);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(xe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,((t,s)=>Ly(t,s)))&&Lo(this.baseMutations,e.baseMutations,((t,s)=>Ly(t,s)))}}class Ff{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return IS})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Ff(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Ve;function US(r){switch(r){case W.OK:return we(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function r0(r){if(r===void 0)return Fr("GRPC error has no .code"),W.UNKNOWN;switch(r){case yt.OK:return W.OK;case yt.CANCELLED:return W.CANCELLED;case yt.UNKNOWN:return W.UNKNOWN;case yt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case yt.INTERNAL:return W.INTERNAL;case yt.UNAVAILABLE:return W.UNAVAILABLE;case yt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case yt.NOT_FOUND:return W.NOT_FOUND;case yt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case yt.ABORTED:return W.ABORTED;case yt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case yt.DATA_LOSS:return W.DATA_LOSS;default:return we(39323,{code:r})}}(Ve=yt||(yt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new Cs([4294967295,4294967295],0);function Uy(r){const e=FS().encode(r),t=new _v;return t.update(e),new Uint8Array(t.digest())}function Fy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Cs([t,s],0),new Cs([o,l],0)]}class zf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ya(`Invalid padding: ${t}`);if(s<0)throw new Ya(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Cs.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Cs.fromNumber(s)));return o.compare(zS)===1&&(o=new Cs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Uy(e),[s,o]=Fy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new zf(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=Uy(e),[s,o]=Fy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Wc(xe.min(),o,new nt(Pe),zr(),be())}}class Sl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Sl(s,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class s0{constructor(e,t){this.targetId=e,this.Ce=t}}class i0{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class zy{constructor(){this.ve=0,this.Fe=By(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),s=be();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:l})}})),new Sl(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=By()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class BS{constructor(e){this.Ge=e,this.ze=new Map,this.je=zr(),this.He=Qu(),this.Je=Qu(),this.Ze=new nt(Pe)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(tf(l))if(s===0){const h=new me(l.path);this.et(t,h,Bt.newNoDocument(h,xe.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const f=this.ut(e),y=f?this.ct(f,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=js(s).toUint8Array()}catch(y){if(y instanceof Cv)return Oo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{f=new zf(h,o,l)}catch(y){return Oo(y instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&tf(f.target)){const y=new me(f.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Bt.newNoDocument(y,e))}l.Be&&(t.set(h,l.ke()),l.Ke())}}));let s=be();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new Wc(e,t,this.Ze,this.je,s);return this.je=zr(),this.He=Qu(),this.Je=Qu(),this.Ze=new nt(Pe),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new zy,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new xt(Pe),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new xt(Pe),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qu(){return new nt(me.comparator)}function By(){return new nt(me.comparator)}const $S={asc:"ASCENDING",desc:"DESCENDING"},HS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WS={and:"AND",or:"OR"};class qS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sf(r,e){return r.useProto3Json||Mc(e)?e:{value:e}}function Sc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function KS(r,e){return Sc(r,e.toTimestamp())}function hr(r){return Fe(!!r,49232),xe.fromTimestamp((function(t){const s=Ls(t);return new Je(s.seconds,s.nanos)})(r))}function Bf(r,e){return of(r,e).canonicalString()}function of(r,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function a0(r){const e=qe.fromString(r);return Fe(d0(e),10190,{key:e.toString()}),e}function af(r,e){return Bf(r.databaseId,e.path)}function Ld(r,e){const t=a0(e);if(t.get(1)!==r.databaseId.projectId)throw new oe(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new oe(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new me(u0(t))}function l0(r,e){return Bf(r.databaseId,e)}function GS(r){const e=a0(r);return e.length===4?qe.emptyPath():u0(e)}function lf(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function u0(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function $y(r,e,t){return{name:af(r,e),fields:t.value.mapValue.fields}}function QS(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:we(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(Fe(E===void 0||typeof E=="string",58123),Vt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Vt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const E=_.code===void 0?W.UNKNOWN:r0(_.code);return new oe(E,_.message||"")})(h);t=new i0(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Ld(r,s.document.name),l=hr(s.document.updateTime),h=s.document.createTime?hr(s.document.createTime):xe.min(),f=new tn({mapValue:{fields:s.document.fields}}),y=Bt.newFoundDocument(o,l,h,f),_=s.targetIds||[],E=s.removedTargetIds||[];t=new ac(_,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Ld(r,s.document),l=s.readTime?hr(s.readTime):xe.min(),h=Bt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new ac([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Ld(r,s.document),l=s.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return we(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new MS(o,l),f=s.targetId;t=new s0(f,h)}}return t}function YS(r,e){let t;if(e instanceof Il)t={update:$y(r,e.key,e.value)};else if(e instanceof Uf)t={delete:af(r,e.key)};else if(e instanceof Hs)t={update:$y(r,e.key,e.data),updateMask:iA(e.fieldMask)};else{if(!(e instanceof OS))return we(16599,{dt:e.type});t={verify:af(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof Tc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof dl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof fl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ic)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw we(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:KS(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we(27497)})(r,e.precondition)),t}function JS(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?hr(o.updateTime):hr(l);return h.isEqual(xe.min())&&(h=hr(l)),new bS(h,o.transformResults||[])})(t,e)))):[]}function XS(r,e){return{documents:[l0(r,e.path)]}}function ZS(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=l0(r,o);const l=(function(_){if(_.length!==0)return h0(Fn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(A){return{field:So(A.field),direction:nA(A.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=sf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function eA(r){let e=GS(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(I){const A=c0(I);return A instanceof Fn&&Fv(A)?A.getFilters():[A]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((A=>(function(q){return new xc(Ao(q.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let A;return A=typeof I=="object"?I.value:I,Mc(A)?null:A})(t.limit));let y=null;t.startAt&&(y=(function(I){const A=!!I.before,F=I.values||[];return new Ec(F,A)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const A=!I.before,F=I.values||[];return new Ec(F,A)})(t.endAt)),_S(e,o,h,l,f,"F",y,_)}function tA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function c0(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ao(t.unaryFilter.field);return _t.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ao(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ao(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(r):r.fieldFilter!==void 0?(function(t){return _t.create(Ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Fn.create(t.compositeFilter.filters.map((s=>c0(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(r):we(30097,{filter:r})}function nA(r){return $S[r]}function rA(r){return HS[r]}function sA(r){return WS[r]}function So(r){return{fieldPath:r.canonicalString()}}function Ao(r){return Dt.fromServerFormat(r.fieldPath)}function h0(r){return r instanceof _t?(function(t){if(t.op==="=="){if(Cy(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NAN"}};if(Ny(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cy(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NAN"}};if(Ny(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:So(t.field),op:rA(t.op),value:t.value}}})(r):r instanceof Fn?(function(t){const s=t.getFilters().map((o=>h0(o)));return s.length===1?s[0]:{compositeFilter:{op:sA(t.op),filters:s}}})(r):we(54877,{filter:r})}function iA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function d0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function f0(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,s,o,l=xe.min(),h=xe.min(),f=Vt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=y}withSequenceNumber(e){return new As(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.yt=e}}function aA(r){const e=eA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.Sn=new uA}addToCollectionParentIndex(e,t){return this.Sn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Os.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class uA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new xt(qe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new xt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},p0=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(p0,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Uo(0)}static ar(){return new Uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="LruGarbageCollector",cA=1048576;function qy([r,e],[t,s]){const o=Pe(r,t);return o===0?Pe(e,s):o}class hA{constructor(e){this.Pr=e,this.buffer=new xt(qy),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();qy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){le(Wy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ko(t)?le(Wy,"Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.Ar(3e5)}))}}class fA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(jc.ce);const s=new hA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Hy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hy):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,l,h,f,y,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,f=Date.now(),this.removeTargets(e,s,t)))).next((I=>(l=I,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),To()<=Ce.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(y-f)+`ms
	Removed ${I} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function pA(r,e){return new fA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(){this.changes=new Pi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&rl(s.mutation,o,pn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=be()){const o=vi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Qa();return l.forEach(((f,y)=>{h=h.insert(f,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=vi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,be())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=zr();const h=nl(),f=(function(){return nl()})();return t.forEach(((y,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Hs)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),rl(E.mutation,_,E.mutation.getFieldMask(),Je.now())):h.set(_.key,pn.empty())})),this.recalculateAndSaveOverlays(e,l).next((y=>(y.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>f.set(_,new gA(E,h.get(_)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=nl();let o=new nt(((h,f)=>h-f)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let E=s.get(y)||pn.empty();E=f.applyToLocalView(_,E),s.set(y,E);const I=(o.get(f.batchId)||be()).add(y);o=o.insert(f.batchId,I)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const y=f.getNext(),_=y.key,E=y.value,I=Qv();E.forEach((A=>{if(!l.has(A)){const F=t0(t.get(A),s.get(A));F!==null&&I.set(A,F),l=l.add(A)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return K.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return vS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):K.resolve(vi());let f=ll,y=l;return h.next((_=>K.forEach(_,((E,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next((A=>{y=y.insert(E,A)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,y,_,be()))).next((E=>({batchId:f,changes:Gv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((s=>{let o=Qa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Qa();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(y=>{const _=(function(I,A){return new Tl(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,y.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((I,A)=>{h=h.insert(I,A)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((y,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))}));let f=Qa();return h.forEach(((y,_)=>{const E=l.get(y);E!==void 0&&rl(E.mutation,_,pn.empty(),Je.now()),Bc(t,_)&&(f=f.insert(y,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return K.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:aA(o.bundledQuery),readTime:hr(o.readTime)}})(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.overlays=new nt(me.comparator),this.Lr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=vi();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.bt(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=vi(),l=t.length+1,h=new me(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const y=f.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&y.largestBatchId>s&&o.set(y.getKey(),y)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new nt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=vi(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=vi(),y=l.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,E)=>f.set(_,E))),!(f.size()>=o)););return K.resolve(f)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new jS(t,s));let l=this.Lr.get(t);l===void 0&&(l=be(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.kr=new xt(At.Kr),this.qr=new xt(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new At(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new me(new qe([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new me(new qe([])),s=new At(t,e),o=new At(t,e+1);let l=be();return this.qr.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return me.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new xt(At.Kr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new LS(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Jr=this.Jr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Df:this.Yn-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Jr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new xt(Pe);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),K.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;me.isDocumentKey(l)||(l=l.child(""));const h=new At(new me(l),0);let f=new xt(Pe);return this.Jr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(y.Hr)),!0)}),h),K.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return K.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new At(t,0),o=this.Jr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.ti=e,this.docs=(function(){return new nt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=zr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=zr();const h=t.path,f=new me(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(f);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||Q1(G1(E),s)<=0||(o.has(E.key)||Bc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ni(e,t){return K.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new TA(this)}getSize(e){return K.resolve(this.size)}}class TA extends mA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),K.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.persistence=e,this.ri=new Pi((t=>Lf(t)),jf),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.ii=0,this.si=new $f,this.targetCount=0,this.oi=Uo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),K.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Uo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.lr(t),K.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ri.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t){this._i={},this.overlays={},this.ai=new jc(0),this.ui=!1,this.ui=!0,this.ci=new wA,this.referenceDelegate=e(this),this.li=new IA(this),this.indexManager=new lA,this.remoteDocumentCache=(function(o){return new xA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new oA(t),this.Pi=new _A(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new EA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){le("MemoryPersistence","Starting transaction:",e);const o=new SA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return K.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class SA extends J1{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Ri=new $f,this.Ai=null}static Vi(e){return new Hf(e)}get di(){if(this.Ai)return this.Ai;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.di,(s=>{const o=me.fromPath(s);return this.mi(e,o).next((l=>{l||t.removeEntry(o,xe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return K.or([()=>K.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ac{constructor(e,t){this.persistence=e,this.fi=new Pi((s=>eS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=pA(this,t)}static Vi(e,t){return new Ac(e,t)}Ti(){}Ii(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return K.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,xe.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sc(e.data.value)),t}wr(e,t,s){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Wf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return JE()?8:X1($t())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new AA;return this.ys(e,t,h).next((f=>{if(l.result=f,this.As)return this.ws(e,t,h,f.size)}))})).next((()=>l.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(To()<=Ce.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(To()<=Ce.DEBUG&&le("QueryEngine","Query:",Io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(To()<=Ce.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):K.resolve())}gs(e,t){if(Vy(t))return K.resolve(null);let s=cr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=rf(t,null,"F"),s=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=be(...l);return this.fs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.bs(t,f);return this.Ss(t,_,h,y.readTime)?this.gs(e,rf(t,null,"F")):this.Ds(e,_,t,y)}))))})))))}ps(e,t,s,o){return Vy(t)||o.isEqual(xe.min())?K.resolve(null):this.fs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ss(t,h,s,o)?K.resolve(null):(To()<=Ce.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.Ds(e,h,t,K1(o,ll)).next((f=>f)))}))}bs(e,t){let s=new xt(qv(e));return t.forEach(((o,l)=>{Bc(e,l)&&(s=s.add(l))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,s){return To()<=Ce.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Io(t)),this.fs.getDocumentsMatchingQuery(e,t,Os.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="LocalStore",kA=3e8;class NA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(Pe),this.Fs=new Pi((l=>Lf(l)),jf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function CA(r,e,t,s){return new NA(r,e,t,s)}async function g0(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let y=be();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function PA(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,y,_,E){const I=_.batch,A=I.keys();let F=K.resolve();return A.forEach((q=>{F=F.next((()=>E.getEntry(y,q))).next((Q=>{const $=_.docVersions.get(q);Fe($!==null,48541),Q.version.compareTo($)<0&&(I.applyToRemoteDocument(Q,_),Q.isValidDocument()&&(Q.setReadTime(_.commitVersion),E.addEntry(Q)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(y,I)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let y=be();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(y=y.add(f.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function y0(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function bA(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((E,I)=>{const A=o.get(I);if(!A)return;f.push(t.li.removeMatchingKeys(l,E.removedDocuments,I).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,I))));let F=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?F=F.withResumeToken(Vt.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,s)),o=o.insert(I,F),(function(Q,$,ie){return Q.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=kA?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(A,F,E)&&f.push(t.li.updateTargetData(l,F))}));let y=zr(),_=be();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(DA(l,h,e.documentUpdates).next((E=>{y=E.Bs,_=E.Ls}))),!s.isEqual(xe.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((I=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return K.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,y,_))).next((()=>y))})).then((l=>(t.vs=o,l)))}function DA(r,e,t){let s=be(),o=be();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=zr();return t.forEach(((f,y)=>{const _=l.get(f);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),y.isNoDocument()&&y.version.isEqual(xe.min())?(e.removeEntry(f,y.readTime),h=h.insert(f,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(f,y)):le(qf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",y.version)})),{Bs:h,Ls:o}}))}function VA(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Df),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function OA(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((l=>l?(o=l,K.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new As(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function uf(r,e,t){const s=Ie(r),o=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ko(h))throw h;le(qf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Ky(r,e,t){const s=Ie(r);let o=xe.min(),l=be();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,E){const I=Ie(y),A=I.Fs.get(E);return A!==void 0?K.resolve(I.vs.get(A)):I.li.getTargetData(_,E)})(s,h,cr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,f.targetId).next((y=>{l=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:xe.min(),t?l:be()))).next((f=>(LA(s,ES(e),f),{documents:f,ks:l})))))}function LA(r,e,t){let s=r.Ms.get(e)||xe.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Ms.set(e,s)}class Gy{constructor(){this.activeTargetIds=RS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jA{constructor(){this.vo=new Gy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Gy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="ConnectivityMonitor";class Yy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){le(Qy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){le(Qy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu=null;function cf(){return Yu===null?Yu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yu++,"0x"+Yu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="RestConnection",UA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class FA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===vc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=cf(),f=this.Qo(e,t.toUriEncodedString());le(jd,`Sending RPC '${e}' ${h}:`,f,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,o,l);const{host:_}=new URL(f),E=zs(_);return this.zo(e,f,y,s,E).then((I=>(le(jd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw Oo(jd,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",s),I}))}jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const s=UA[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection",Ha=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Po extends FA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Po.c_){const e=xv();Ha(e,Ev.STAT_EVENT,(t=>{t.stat===Yd.PROXY?le(Ft,"STAT_EVENT: detected buffering proxy"):t.stat===Yd.NOPROXY&&le(Ft,"STAT_EVENT: detected no buffering proxy")})),Po.c_=!0}}zo(e,t,s,o,l){const h=cf();return new Promise(((f,y)=>{const _=new vv;_.setWithCredentials(!0),_.listenOnce(wv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case rc.NO_ERROR:const I=_.getResponseJson();le(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case rc.TIMEOUT:le(Ft,`RPC '${e}' ${h} timed out`),y(new oe(W.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const A=_.getStatus();if(le(Ft,`RPC '${e}' ${h} failed with status:`,A,"response text:",_.getResponseText()),A>0){let F=_.getResponseJson();Array.isArray(F)&&(F=F[0]);const q=F?.error;if(q&&q.status&&q.message){const Q=(function(ie){const V=ie.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(V)>=0?V:W.UNKNOWN})(q.status);y(new oe(Q,q.message))}else y(new oe(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new oe(W.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{le(Ft,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);le(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=cf(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(f.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,s),f.encodeInitMessageHeaders=!0;const _=l.join("");le(Ft,`Creating RPC '${e}' stream ${o}: ${_}`,f);const E=h.createWebChannel(_,f);this.I_(E);let I=!1,A=!1;const F=new zA({Ho:q=>{A?le(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(I||(le(Ft,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),le(Ft,`RPC '${e}' stream ${o} sending:`,q),E.send(q))},Jo:()=>E.close()});return Ha(E,Ga.EventType.OPEN,(()=>{A||(le(Ft,`RPC '${e}' stream ${o} transport opened.`),F.i_())})),Ha(E,Ga.EventType.CLOSE,(()=>{A||(A=!0,le(Ft,`RPC '${e}' stream ${o} transport closed`),F.o_(),this.E_(E))})),Ha(E,Ga.EventType.ERROR,(q=>{A||(A=!0,Oo(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),F.o_(new oe(W.UNAVAILABLE,"The operation could not be completed")))})),Ha(E,Ga.EventType.MESSAGE,(q=>{if(!A){const Q=q.data[0];Fe(!!Q,16349);const $=Q,ie=$?.error||$[0]?.error;if(ie){le(Ft,`RPC '${e}' stream ${o} received error:`,ie);const V=ie.status;let G=(function(re){const N=yt[re];if(N!==void 0)return r0(N)})(V),H=ie.message;G===void 0&&(G=W.INTERNAL,H="Unknown error status: "+V+" with message "+ie.message),A=!0,F.o_(new oe(G,H)),E.close()}else le(Ft,`RPC '${e}' stream ${o} received:`,Q),F.__(Q)}})),Po.u_(),setTimeout((()=>{F.s_()}),0),F}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Tv()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(r){return new Po(r)}function Md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(r){return new qS(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Po.c_=!1;class _0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="PersistentStream";class v0{constructor(e,t,s,o,l,h,f,y){this.Ci=e,this.b_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new oe(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(Jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(le(Jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $A extends v0{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=QS(this.serializer,e),s=(function(l){if(!("targetChange"in l))return xe.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?xe.min():h.readTime?hr(h.readTime):xe.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=lf(this.serializer),t.addTarget=(function(l,h){let f;const y=h.target;if(f=tf(y)?{documents:XS(l,y)}:{query:ZS(l,y).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=o0(l,h.resumeToken);const _=sf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(xe.min())>0){f.readTime=Sc(l,h.snapshotVersion.toTimestamp());const _=sf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const s=tA(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=lf(this.serializer),t.removeTarget=e,this.K_(t)}}class HA extends v0{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=JS(e.writeResults,e.commitTime),s=hr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=lf(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>YS(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{}class qA extends WA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new oe(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,of(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new oe(W.UNKNOWN,l.toString())}))}jo(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.jo(e,of(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(W.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function KA(r,e,t,s){return new qA(r,e,t,s)}class GA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fr(t),this.aa=!1):le("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="RemoteStore";class QA{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{bi(this)&&(le(ki,"Restarting streams for network reachability change."),await(async function(y){const _=Ie(y);_.Ea.add(4),await Al(_),_.Va.set("Unknown"),_.Ea.delete(4),await Kc(_)})(this))}))})),this.Va=new GA(s,o)}}async function Kc(r){if(bi(r))for(const e of r.Ra)await e(!0)}async function Al(r){for(const e of r.Ra)await e(!1)}function w0(r,e){const t=Ie(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Yf(t)?Qf(t):Go(t).O_()&&Gf(t,e))}function Kf(r,e){const t=Ie(r),s=Go(t);t.Ia.delete(e),s.O_()&&E0(t,e),t.Ia.size===0&&(s.O_()?s.L_():bi(t)&&t.Va.set("Unknown"))}function Gf(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Go(r).Z_(e)}function E0(r,e){r.da.$e(e),Go(r).X_(e)}function Qf(r){r.da=new BS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Go(r).start(),r.Va.ua()}function Yf(r){return bi(r)&&!Go(r).x_()&&r.Ia.size>0}function bi(r){return Ie(r).Ea.size===0}function x0(r){r.da=void 0}async function YA(r){r.Va.set("Online")}async function JA(r){r.Ia.forEach(((e,t)=>{Gf(r,e)}))}async function XA(r,e){x0(r),Yf(r)?(r.Va.ha(e),Qf(r)):r.Va.set("Unknown")}async function ZA(r,e,t){if(r.Va.set("Online"),e instanceof i0&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.da.removeTarget(f))})(r,e)}catch(s){le(ki,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Rc(r,s)}else if(e instanceof ac?r.da.Xe(e):e instanceof s0?r.da.st(e):r.da.tt(e),!t.isEqual(xe.min()))try{const s=await y0(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.da.Tt(h);return f.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const E=l.Ia.get(_);E&&l.Ia.set(_,E.withResumeToken(y.resumeToken,h))}})),f.targetMismatches.forEach(((y,_)=>{const E=l.Ia.get(y);if(!E)return;l.Ia.set(y,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),E0(l,y);const I=new As(E.target,y,_,E.sequenceNumber);Gf(l,I)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){le(ki,"Failed to raise snapshot:",s),await Rc(r,s)}}async function Rc(r,e,t){if(!Ko(e))throw e;r.Ea.add(1),await Al(r),r.Va.set("Offline"),t||(t=()=>y0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{le(ki,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Kc(r)}))}function T0(r,e){return e().catch((t=>Rc(r,t,e)))}async function Gc(r){const e=Ie(r),t=Us(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Df;for(;eR(e);)try{const o=await VA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,tR(e,o)}catch(o){await Rc(e,o)}I0(e)&&S0(e)}function eR(r){return bi(r)&&r.Ta.length<10}function tR(r,e){r.Ta.push(e);const t=Us(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function I0(r){return bi(r)&&!Us(r).x_()&&r.Ta.length>0}function S0(r){Us(r).start()}async function nR(r){Us(r).ra()}async function rR(r){const e=Us(r);for(const t of r.Ta)e.ea(t.mutations)}async function sR(r,e,t){const s=r.Ta.shift(),o=Ff.from(s,e,t);await T0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Gc(r)}async function iR(r,e){e&&Us(r).Y_&&await(async function(s,o){if((function(h){return US(h)&&h!==W.ABORTED})(o.code)){const l=s.Ta.shift();Us(s).B_(),await T0(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Gc(s)}})(r,e),I0(r)&&S0(r)}async function Xy(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),le(ki,"RemoteStore received new credentials");const s=bi(t);t.Ea.add(3),await Al(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Kc(t)}async function oR(r,e){const t=Ie(r);e?(t.Ea.delete(2),await Kc(t)):e||(t.Ea.add(2),await Al(t),t.Va.set("Unknown"))}function Go(r){return r.ma||(r.ma=(function(t,s,o){const l=Ie(t);return l.sa(),new $A(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:YA.bind(null,r),Yo:JA.bind(null,r),t_:XA.bind(null,r),J_:ZA.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),Yf(r)?Qf(r):r.Va.set("Unknown")):(await r.ma.stop(),x0(r))}))),r.ma}function Us(r){return r.fa||(r.fa=(function(t,s,o){const l=Ie(t);return l.sa(),new HA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:nR.bind(null,r),t_:iR.bind(null,r),ta:rR.bind(null,r),na:sR.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Gc(r)):(await r.fa.stop(),r.Ta.length>0&&(le(ki,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Jf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(r,e){if(Fr("AsyncQueue",`${e}: ${r}`),Ko(r))return new oe(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Qa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new bo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.ga=new nt(me.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Fo{constructor(e,t,s,o,l,h,f,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Fo(e,t,bo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class lR{constructor(){this.queries=e_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=e_(),l.forEach(((h,f)=>{for(const y of f.ba)y.onError(s)}))})(this,new oe(W.ABORTED,"Firestore shutting down"))}}function e_(){return new Pi((r=>Wv(r)),zc)}async function Zf(r,e){const t=Ie(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.Da()&&(s=2):(l=new aR,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Xf(h,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.ba.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&tp(t)}async function ep(r,e){const t=Ie(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.ba.indexOf(e);h>=0&&(l.ba.splice(h,1),l.ba.length===0?o=e.Da()?0:1:!l.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function uR(r,e){const t=Ie(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.ba)f.Fa(o)&&(s=!0);h.wa=o}}s&&tp(t)}function cR(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const l of o.ba)l.onError(t);s.queries.delete(e)}function tp(r){r.Ca.forEach((e=>{e.next()}))}var hf,t_;(t_=hf||(hf={})).Ma="default",t_.Cache="cache";class np{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Fo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==hf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.key=e}}class R0{constructor(e){this.key=e}}class hR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=be(),this.mutatedKeys=be(),this.eu=qv(e),this.tu=new bo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Zy,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,I)=>{const A=o.get(E),F=Bc(this.query,I)?I:null,q=!!A&&this.mutatedKeys.has(A.key),Q=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let $=!1;A&&F?A.data.isEqual(F.data)?q!==Q&&(s.track({type:3,doc:F}),$=!0):this.su(A,F)||(s.track({type:2,doc:F}),$=!0,(y&&this.eu(F,y)>0||_&&this.eu(F,_)<0)&&(f=!0)):!A&&F?(s.track({type:0,doc:F}),$=!0):A&&!F&&(s.track({type:1,doc:A}),$=!0,(y||_)&&(f=!0)),$&&(F?(h=h.add(F),l=Q?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Ss:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,I)=>(function(F,q){const Q=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Vt:$})}};return Q(F)-Q(q)})(E.type,I.type)||this.eu(E.doc,I.doc))),this.ou(s),o=o??!1;const f=t&&!o?this._u():[],y=this.Ya.size===0&&this.current&&!o?1:0,_=y!==this.Xa;return this.Xa=y,h.length!==0||_?{snapshot:new Fo(this.query,e.tu,l,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Zy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=be(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new R0(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new A0(s))})),t}cu(e){this.Za=e.ks,this.Ya=be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const rp="SyncEngine";class dR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class fR{constructor(e){this.key=e,this.hu=!1}}class pR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Pi((f=>Wv(f)),zc),this.Iu=new Map,this.Eu=new Set,this.Ru=new nt(me.comparator),this.Au=new Map,this.Vu=new $f,this.du={},this.mu=new Map,this.fu=Uo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mR(r,e,t=!0){const s=D0(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await k0(s,e,t,!0),o}async function gR(r,e){const t=D0(r);await k0(t,e,!0,!1)}async function k0(r,e,t,s){const o=await OA(r.localStore,cr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await yR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&w0(r.remoteStore,o),f}async function yR(r,e,t,s,o){r.pu=(I,A,F)=>(async function(Q,$,ie,V){let G=$.view.ru(ie);G.Ss&&(G=await Ky(Q.localStore,$.query,!1).then((({documents:N})=>$.view.ru(N,G))));const H=V&&V.targetChanges.get($.targetId),ee=V&&V.targetMismatches.get($.targetId)!=null,re=$.view.applyChanges(G,Q.isPrimaryClient,H,ee);return r_(Q,$.targetId,re.au),re.snapshot})(r,I,A,F);const l=await Ky(r.localStore,e,!0),h=new hR(e,l.ks),f=h.ru(l.documents),y=Sl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,y);r_(r,t,_.au);const E=new dR(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function _R(r,e,t){const s=Ie(r),o=s.Tu.get(e),l=s.Iu.get(o.targetId);if(l.length>1)return s.Iu.set(o.targetId,l.filter((h=>!zc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await uf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Kf(s.remoteStore,o.targetId),df(s,o.targetId)})).catch(qo)):(df(s,o.targetId),await uf(s.localStore,o.targetId,!0))}async function vR(r,e){const t=Ie(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Kf(t.remoteStore,s.targetId))}async function wR(r,e,t){const s=RR(r);try{const o=await(function(h,f){const y=Ie(h),_=Je.now(),E=f.reduce(((F,q)=>F.add(q.key)),be());let I,A;return y.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let q=zr(),Q=be();return y.xs.getEntries(F,E).next(($=>{q=$,q.forEach(((ie,V)=>{V.isValidDocument()||(Q=Q.add(ie))}))})).next((()=>y.localDocuments.getOverlayedDocuments(F,q))).next(($=>{I=$;const ie=[];for(const V of f){const G=VS(V,I.get(V.key).overlayedDocument);G!=null&&ie.push(new Hs(V.key,G,jv(G.value.mapValue),An.exists(!0)))}return y.mutationQueue.addMutationBatch(F,_,ie,f)})).next(($=>{A=$;const ie=$.applyToLocalDocumentSet(I,Q);return y.documentOverlayCache.saveOverlays(F,$.batchId,ie)}))})).then((()=>({batchId:A.batchId,changes:Gv(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,y){let _=h.du[h.currentUser.toKey()];_||(_=new nt(Pe)),_=_.insert(f,y),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await Rl(s,o.changes),await Gc(s.remoteStore)}catch(o){const l=Xf(o,"Failed to persist write");t.reject(l)}}async function N0(r,e){const t=Ie(r);try{const s=await bA(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Fe(h.hu,14607):o.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))})),await Rl(t,s,e)}catch(s){await qo(s)}}function n_(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const y=Ie(h);y.onlineState=f;let _=!1;y.queries.forEach(((E,I)=>{for(const A of I.ba)A.va(f)&&(_=!0)})),_&&tp(y)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ER(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new nt(me.comparator);h=h.insert(l,Bt.newNoDocument(l,xe.min()));const f=be().add(l),y=new Wc(xe.min(),new Map,new nt(Pe),h,f);await N0(s,y),s.Ru=s.Ru.remove(l),s.Au.delete(e),sp(s)}else await uf(s.localStore,e,!1).then((()=>df(s,e,t))).catch(qo)}async function xR(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await PA(t.localStore,e);P0(t,s,null),C0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Rl(t,o)}catch(o){await qo(o)}}async function TR(r,e,t){const s=Ie(r);try{const o=await(function(h,f){const y=Ie(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return y.mutationQueue.lookupMutationBatch(_,f).next((I=>(Fe(I!==null,37113),E=I.keys(),y.mutationQueue.removeMutationBatch(_,I)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,f))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>y.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);P0(s,e,t),C0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Rl(s,o)}catch(o){await qo(o)}}function C0(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function P0(r,e,t){const s=Ie(r);let o=s.du[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function df(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||b0(r,s)}))}function b0(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(Kf(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),sp(r))}function r_(r,e,t){for(const s of t)s instanceof A0?(r.Vu.addReference(s.key,e),IR(r,s)):s instanceof R0?(le(rp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||b0(r,s.key)):we(19791,{wu:s})}function IR(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(s)||(le(rp,"New document in limbo: "+t),r.Eu.add(s),sp(r))}function sp(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new me(qe.fromString(e)),s=r.fu.next();r.Au.set(s,new fR(t)),r.Ru=r.Ru.insert(t,s),w0(r.remoteStore,new As(cr(Fc(t.path)),s,"TargetPurposeLimboResolution",jc.ce))}}async function Rl(r,e,t){const s=Ie(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,y)=>{h.push(s.pu(y,e,t).then((_=>{if((_||t)&&s.isPrimaryClient){const E=_?!_.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(_){o.push(_);const E=Wf.Es(y.targetId,_);l.push(E)}})))})),await Promise.all(h),s.Pu.J_(o),await(async function(y,_){const E=Ie(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>K.forEach(_,(A=>K.forEach(A.Ts,(F=>E.persistence.referenceDelegate.addReference(I,A.targetId,F))).next((()=>K.forEach(A.Is,(F=>E.persistence.referenceDelegate.removeReference(I,A.targetId,F)))))))))}catch(I){if(!Ko(I))throw I;le(qf,"Failed to update sequence numbers: "+I)}for(const I of _){const A=I.targetId;if(!I.fromCache){const F=E.vs.get(A),q=F.snapshotVersion,Q=F.withLastLimboFreeSnapshotVersion(q);E.vs=E.vs.insert(A,Q)}}})(s.localStore,l))}async function SR(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){le(rp,"User change. New user:",e.toKey());const s=await g0(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((y=>{y.reject(new oe(W.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Rl(t,s.Ns)}}function AR(r,e){const t=Ie(r),s=t.Au.get(e);if(s&&s.hu)return be().add(s.key);{let o=be();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function D0(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=N0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ER.bind(null,e),e.Pu.J_=uR.bind(null,e.eventManager),e.Pu.yu=cR.bind(null,e.eventManager),e}function RR(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TR.bind(null,e),e}class kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return CA(this.persistence,new RA,e.initialUser,this.serializer)}Cu(e){return new m0(Hf.Vi,this.serializer)}Du(e){return new jA}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kc.provider={build:()=>new kc};class kR extends kc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof Ac,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new dA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new m0((s=>Ac.Vi(s,t)),this.serializer)}}class ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>n_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=SR.bind(null,this.syncEngine),await oR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lR})()}createDatastore(e){const t=qc(e.databaseInfo.databaseId),s=BA(e.databaseInfo);return KA(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new QA(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>n_(this.syncEngine,t,0)),(function(){return Yy.v()?new Yy:new MA})())}createSyncEngine(e,t){return(function(o,l,h,f,y,_,E){const I=new pR(o,l,h,f,y,_);return E&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ie(t);le(ki,"RemoteStore shutting down."),s.Ea.add(5),await Al(s),s.Aa.shutdown(),s.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ff.provider={build:()=>new ff};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="FirestoreClient";class NR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{le(Fs,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(le(Fs,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Xf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ud(r,e){r.asyncQueue.verifyOperationInProgress(),le(Fs,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await g0(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function s_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await CR(r);le(Fs,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Xy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Xy(e.remoteStore,o))),r._onlineComponents=e}async function CR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){le(Fs,"Using user provided OfflineComponentProvider");try{await Ud(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Oo("Error using user provided cache. Falling back to memory cache: "+t),await Ud(r,new kc)}}else le(Fs,"Using default OfflineComponentProvider"),await Ud(r,new kR(void 0));return r._offlineComponents}async function V0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(le(Fs,"Using user provided OnlineComponentProvider"),await s_(r,r._uninitializedComponentsProvider._online)):(le(Fs,"Using default OnlineComponentProvider"),await s_(r,new ff))),r._onlineComponents}function PR(r){return V0(r).then((e=>e.syncEngine))}async function Nc(r){const e=await V0(r),t=e.eventManager;return t.onListen=mR.bind(null,e.syncEngine),t.onUnlisten=_R.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vR.bind(null,e.syncEngine),t}function bR(r,e,t,s){const o=new ip(s),l=new np(e,o,t);return r.asyncQueue.enqueueAndForget((async()=>Zf(await Nc(r),l))),()=>{o.Nu(),r.asyncQueue.enqueueAndForget((async()=>ep(await Nc(r),l)))}}function DR(r,e,t={}){const s=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,y,_){const E=new ip({next:A=>{E.Nu(),h.enqueueAndForget((()=>ep(l,I)));const F=A.docs.has(f);!F&&A.fromCache?_.reject(new oe(W.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&A.fromCache&&y&&y.source==="server"?_.reject(new oe(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(A)},error:A=>_.reject(A)}),I=new np(Fc(f.path),E,{includeMetadataChanges:!0,Ka:!0});return Zf(l,I)})(await Nc(r),r.asyncQueue,e,t,s))),s.promise}function VR(r,e,t={}){const s=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,y,_){const E=new ip({next:A=>{E.Nu(),h.enqueueAndForget((()=>ep(l,I))),A.fromCache&&y.source==="server"?_.reject(new oe(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(A)},error:A=>_.reject(A)}),I=new np(f,E,{includeMetadataChanges:!0,Ka:!0});return Zf(l,I)})(await Nc(r),r.asyncQueue,e,t,s))),s.promise}function OR(r,e){const t=new jr;return r.asyncQueue.enqueueAndForget((async()=>wR(await PR(r),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="ComponentProvider",i_=new Map;function jR(r,e,t,s,o){return new rS(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,O0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firestore.googleapis.com",o_=!0;class a_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=L0,this.ssl=o_}else this.host=e.host,this.ssl=e.ssl??o_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=p0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cA)throw new oe(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O0(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new L1;switch(s.type){case"firstParty":return new F1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=i_.get(t);s&&(le(LR,"Removing Datastore"),i_.delete(t),s.terminate())})(this),Promise.resolve()}}function MR(r,e,t,s={}){r=nn(r,Qc);const o=zs(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&(_f(`https://${f}`),vf("Firestore",!0)),l.host!==L0&&l.host!==f&&Oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...l,host:f,ssl:o,emulatorOptions:s};if(!Ti(y,h)&&(r._setSettings(y),s.mockUserToken)){let _,E;if(typeof s.mockUserToken=="string")_=s.mockUserToken,E=zt.MOCK_USER;else{_=b_(s.mockUserToken,r._app?.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new oe(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new zt(I)}r._authCredentials=new j1(new Sv(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Di(this.firestore,e,this._query)}}class it{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(xl(t,it._jsonSchema))return new it(e,s||null,new me(qe.fromString(t.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:vt("string",it._jsonSchemaVersion),referencePath:vt("string")};class Ps extends Di{constructor(e,t,s){super(e,t,Fc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new me(e))}withConverter(e){return new Ps(this.firestore,e,this._path)}}function zo(r,e,...t){if(r=Ze(r),Av("collection","path",e),r instanceof Qc){const s=qe.fromString(e,...t);return wy(s),new Ps(r,null,s)}{if(!(r instanceof it||r instanceof Ps))throw new oe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return wy(s),new Ps(r.firestore,null,s)}}function Rs(r,e,...t){if(r=Ze(r),arguments.length===1&&(e=bf.newId()),Av("doc","path",e),r instanceof Qc){const s=qe.fromString(e,...t);return vy(s),new it(r,null,new me(s))}{if(!(r instanceof it||r instanceof Ps))throw new oe(W.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return vy(s),new it(r.firestore,r instanceof Ps?r.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="AsyncQueue";class u_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _0(this,"async_queue_retry"),this._c=()=>{const s=Md();s&&le(l_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new jr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ko(e))throw e;le(l_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fr("INTERNAL UNHANDLED ERROR: ",c_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Jf.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:c_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function c_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Br extends Qc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new u_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new u_(e),this._firestoreClient=void 0,await e}}}function UR(r,e){const t=typeof r=="object"?r:xf(),s=typeof r=="string"?r:vc,o=bc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=N_("firestore");l&&MR(o,...l)}return o}function Yc(r){if(r._terminated)throw new oe(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||FR(r),r._firestoreClient}function FR(r){const e=r._freezeSettings(),t=jR(r._databaseId,r._app?.options.appId||"",r._persistenceKey,r._app?.options.apiKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new NR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Vt.fromBase64String(e))}catch(t){throw new oe(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:vt("string",Sn._jsonSchemaVersion),bytes:vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dr._jsonSchemaVersion}}static fromJSON(e){if(xl(e,dr._jsonSchema))return new dr(e.latitude,e.longitude)}}dr._jsonSchemaVersion="firestore/geoPoint/1.0",dr._jsonSchema={type:vt("string",dr._jsonSchemaVersion),latitude:vt("number"),longitude:vt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Mn(e.vectorValues);throw new oe(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:vt("string",Mn._jsonSchemaVersion),vectorValues:vt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=/^__.*__$/;class BR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Hs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}class j0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Hs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function M0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{dataSource:r})}}class lp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.validatePath(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new lp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Cc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(M0(this.dataSource)&&zR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class $R{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||qc(e)}createContext(e,t,s,o=!1){return new lp({dataSource:e,methodName:t,targetDoc:s,path:Dt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jc(r){const e=r._freezeSettings(),t=qc(r._databaseId);return new $R(r._databaseId,!!e.ignoreUndefinedProperties,t)}function U0(r,e,t,s,o,l={}){const h=r.createContext(l.merge||l.mergeFields?2:0,e,t,o);up("Data must be an object, but it was:",h,s);const f=F0(s,h);let y,_;if(l.merge)y=new pn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const A=pl(e,I,t);if(!h.contains(A))throw new oe(W.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);$0(E,A)||E.push(A)}y=new pn(E),_=h.fieldTransforms.filter((I=>y.covers(I.field)))}else y=null,_=h.fieldTransforms;return new BR(new tn(f),y,_)}class Xc extends ap{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xc}}function HR(r,e,t,s){const o=r.createContext(1,e,t);up("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();$s(s,((y,_)=>{const E=B0(e,y,t);_=Ze(_);const I=o.childContextForFieldPath(E);if(_ instanceof Xc)l.push(E);else{const A=kl(_,I);A!=null&&(l.push(E),h.set(E,A))}}));const f=new pn(l);return new j0(h,f,o.fieldTransforms)}function WR(r,e,t,s,o,l){const h=r.createContext(1,e,t),f=[pl(e,s,t)],y=[o];if(l.length%2!=0)throw new oe(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(pl(e,l[A])),y.push(l[A+1]);const _=[],E=tn.empty();for(let A=f.length-1;A>=0;--A)if(!$0(_,f[A])){const F=f[A];let q=y[A];q=Ze(q);const Q=h.childContextForFieldPath(F);if(q instanceof Xc)_.push(F);else{const $=kl(q,Q);$!=null&&(_.push(F),E.set(F,$))}}const I=new pn(_);return new j0(E,I,h.fieldTransforms)}function qR(r,e,t,s=!1){return kl(t,r.createContext(s?4:3,e))}function kl(r,e){if(z0(r=Ze(r)))return up("Unsupported field value:",e,r),F0(r,e);if(r instanceof ap)return(function(s,o){if(!M0(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let y=kl(f,o.childContextForArray(h));y==null&&(y={nullValue:"NULL_VALUE"}),l.push(y),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=Ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Je.fromDate(s);return{timestampValue:Sc(o.serializer,l)}}if(s instanceof Je){const l=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Sc(o.serializer,l)}}if(s instanceof dr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Sn)return{bytesValue:o0(o.serializer,s._byteString)};if(s instanceof it){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Bf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Mn)return(function(h,f){const y=h instanceof Mn?h.toArray():h;return{mapValue:{fields:{[Ov]:{stringValue:Lv},[wc]:{arrayValue:{values:y.map((E=>{if(typeof E!="number")throw f.createError("VectorValues must only contain numeric values.");return Mf(f.serializer,E)}))}}}}}})(s,o);if(f0(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Lc(s)}`)})(r,e)}function F0(r,e){const t={};return Nv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(r,((s,o)=>{const l=kl(o,e.childContextForField(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function z0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof dr||r instanceof Sn||r instanceof it||r instanceof ap||r instanceof Mn||f0(r))}function up(r,e,t){if(!z0(t)||!Rv(t)){const s=Lc(t);throw s==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+s)}}function pl(r,e,t){if((e=Ze(e))instanceof op)return e._internalPath;if(typeof e=="string")return B0(r,e);throw Cc("Field path arguments must be of type string or ",r,!1,void 0,t)}const KR=new RegExp("[~\\*/\\[\\]]");function B0(r,e,t){if(e.search(KR)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new op(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Cc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let y="";return(l||h)&&(y+=" (found",l&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new oe(W.INVALID_ARGUMENT,f+r+y)}function $0(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{convertValue(e,t="none"){switch(Ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return $s(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[wc].arrayValue?.values?.map((s=>ht(s.doubleValue)));return new Mn(t)}convertGeoPoint(e){return new dr(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Uc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const t=Ls(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);Fe(d0(s),9688,{name:e});const o=new cl(s.get(1),s.get(3)),l=new me(s.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends GR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}const h_="@firebase/firestore",d_="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(pl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QR extends H0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new oe(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class YR extends hp{}function JR(r,e,...t){let s=[];e instanceof hp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((y=>y instanceof fp)).length,f=l.filter((y=>y instanceof dp)).length;if(h>1||h>0&&f>0)throw new oe(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class dp extends YR{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new dp(e,t,s)}_apply(e){const t=this._parse(e);return q0(e._query,t),new Di(e.firestore,e.converter,nf(e._query,t))}_parse(e){const t=Jc(e.firestore);return(function(l,h,f,y,_,E,I){let A;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new oe(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){m_(I,E);const q=[];for(const Q of I)q.push(p_(y,l,Q));A={arrayValue:{values:q}}}else A=p_(y,l,I)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||m_(I,E),A=qR(f,h,I,E==="in"||E==="not-in");return _t.create(_,E,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class fp extends hp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const y of f)q0(h,y),h=nf(h,y)})(e._query,t),new Di(e.firestore,e.converter,nf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function p_(r,e,t){if(typeof(t=Ze(t))=="string"){if(t==="")throw new oe(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hv(e)&&t.indexOf("/")!==-1)throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(qe.fromString(t));if(!me.isDocumentKey(s))throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ky(r,new me(s))}if(t instanceof it)return ky(r,t._key);throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(t)}.`)}function m_(r,e){if(!Array.isArray(r)||r.length===0)throw new oe(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function q0(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function K0(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wi extends H0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(pl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",wi._jsonSchema={type:vt("string",wi._jsonSchemaVersion),bundleSource:vt("string","DocumentSnapshot"),bundleName:vt("string"),bundle:vt("string")};class lc extends wi{data(e={}){return super.data(e)}}class Ei{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ja(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new lc(this._firestore,this._userDataWriter,s.key,s,new Ja(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const y=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const y=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:XR(f.type),doc:y,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei._jsonSchemaVersion="firestore/querySnapshot/1.0",Ei._jsonSchema={type:vt("string",Ei._jsonSchemaVersion),bundleSource:vt("string","QuerySnapshot"),bundleName:vt("string"),bundle:vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(r){r=nn(r,it);const e=nn(r.firestore,Br),t=Yc(e);return DR(t,r._key).then((s=>Y0(e,r,s)))}function pp(r){r=nn(r,Di);const e=nn(r.firestore,Br),t=Yc(e),s=new cp(e);return W0(r._query),VR(t,r._query).then((o=>new Ei(e,s,r,o)))}function y_(r,e,t){r=nn(r,it);const s=nn(r.firestore,Br),o=K0(r.converter,e),l=Jc(s);return Zc(s,[U0(l,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,An.none())])}function G0(r,e,t,...s){r=nn(r,it);const o=nn(r.firestore,Br),l=Jc(o);let h;return h=typeof(e=Ze(e))=="string"||e instanceof op?WR(l,"updateDoc",r._key,e,t,s):HR(l,"updateDoc",r._key,e),Zc(o,[h.toMutation(r._key,An.exists(!0))])}function ZR(r){return Zc(nn(r.firestore,Br),[new Uf(r._key,An.none())])}function Q0(r,e){const t=nn(r.firestore,Br),s=Rs(r),o=K0(r.converter,e),l=Jc(r.firestore);return Zc(t,[U0(l,"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,An.exists(!1))]).then((()=>s))}function ek(r,...e){r=Ze(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||f_(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(f_(e[s])){const _=e[s];e[s]=_.next?.bind(_),e[s+1]=_.error?.bind(_),e[s+2]=_.complete?.bind(_)}let l,h,f;if(r instanceof it)h=nn(r.firestore,Br),f=Fc(r._key.path),l={next:_=>{e[s]&&e[s](Y0(h,r,_))},error:e[s+1],complete:e[s+2]};else{const _=nn(r,Di);h=nn(_.firestore,Br),f=_._query;const E=new cp(h);l={next:I=>{e[s]&&e[s](new Ei(h,E,_,I))},error:e[s+1],complete:e[s+2]},W0(r._query)}const y=Yc(h);return bR(y,f,o,l)}function Zc(r,e){const t=Yc(r);return OR(t,e)}function Y0(r,e,t){const s=t.docs.get(e._key),o=new cp(r);return new wi(r,o,e._key,s,new Ja(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){O1(Ci),Ii(new Vs("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Br(new M1(s.getProvider("auth-internal")),new z1(h,s.getProvider("app-check-internal")),sS(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),ar(h_,d_,e),ar(h_,d_,"esm2020")})();var tk="firebase",nk="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(tk,nk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="firebasestorage.googleapis.com",X0="storageBucket",rk=120*1e3,sk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends pr{constructor(e,t,s=0){super(Fd(e),`Firebase Storage: ${t} (${Fd(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function Fd(r){return"storage/"+r}function mp(){const r="An unknown error occurred, please check the error payload for server response.";return new at(ot.UNKNOWN,r)}function ik(r){return new at(ot.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function ok(r){return new at(ot.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ak(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new at(ot.UNAUTHENTICATED,r)}function lk(){return new at(ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uk(r){return new at(ot.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function ck(){return new at(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hk(){return new at(ot.CANCELED,"User canceled the upload/download.")}function dk(r){return new at(ot.INVALID_URL,"Invalid URL '"+r+"'.")}function fk(r){return new at(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function pk(){return new at(ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+X0+"' property when initializing the app?")}function mk(){return new at(ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gk(){return new at(ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yk(r){return new at(ot.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pf(r){return new at(ot.INVALID_ARGUMENT,r)}function Z0(){return new at(ot.APP_DELETED,"The Firebase app was deleted.")}function _k(r){return new at(ot.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sl(r,e){return new at(ot.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Wa(r){throw new at(ot.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=mn.makeFromUrl(e,t)}catch{return new mn(e,"")}if(s.path==="")return s;throw fk(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),y={bucket:1,path:3};function _(H){H.path_=decodeURIComponent(H.path)}const E="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",F=new RegExp(`^https?://${I}/${E}/b/${o}/o${A}`,"i"),q={bucket:1,path:3},Q=t===J0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",ie=new RegExp(`^https?://${Q}/${o}/${$}`,"i"),G=[{regex:f,indices:y,postModify:l},{regex:F,indices:q,postModify:_},{regex:ie,indices:{bucket:1,path:2},postModify:_}];for(let H=0;H<G.length;H++){const ee=G[H],re=ee.regex.exec(e);if(re){const N=re[ee.indices.bucket];let T=re[ee.indices.path];T||(T=""),s=new mn(N,T),ee.postModify(s);break}}if(s==null)throw dk(e);return s}}class vk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(r,e,t){let s=1,o=null,l=null,h=!1,f=0;function y(){return f===2}let _=!1;function E(...$){_||(_=!0,e.apply(null,$))}function I($){o=setTimeout(()=>{o=null,r(F,y())},$)}function A(){l&&clearTimeout(l)}function F($,...ie){if(_){A();return}if($){A(),E.call(null,$,...ie);return}if(y()||h){A(),E.call(null,$,...ie);return}s<64&&(s*=2);let G;f===1?(f=2,G=0):G=(s+Math.random())*1e3,I(G)}let q=!1;function Q($){q||(q=!0,A(),!_&&(o!==null?($||(f=2),clearTimeout(o),I(0)):$||(f=1)))}return I(0),l=setTimeout(()=>{h=!0,Q(!0)},t),Q}function Ek(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(r){return r!==void 0}function Tk(r){return typeof r=="object"&&!Array.isArray(r)}function gp(r){return typeof r=="string"||r instanceof String}function __(r){return yp()&&r instanceof Blob}function yp(){return typeof Blob<"u"}function v_(r,e,t,s){if(s<e)throw pf(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw pf(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(r,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${r}`}function ew(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var xi;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(xi||(xi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,t,s,o,l,h,f,y,_,E,I,A=!0,F=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=y,this.timeout_=_,this.progressCallback_=E,this.connectionFactory_=I,this.retry=A,this.isUsingEmulator=F,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((q,Q)=>{this.resolve_=q,this.reject_=Q,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Ju(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const y=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(y,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===xi.NO_ERROR,y=l.getStatus();if(!f||Ik(y,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===xi.ABORT;s(!1,new Ju(!1,null,E));return}const _=this.successCodes_.indexOf(y)!==-1;s(!0,new Ju(_,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const y=this.callback_(f,f.getResponse());xk(y)?l(y):l()}catch(y){h(y)}else if(f!==null){const y=mp();y.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,y)):h(y)}else if(o.canceled){const y=this.appDelete_?Z0():hk();h(y)}else{const y=ck();h(y)}};this.canceled_?t(!1,new Ju(!1,null,!0)):this.backoffId_=wk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ek(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ju{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Ak(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function Rk(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kk(r,e){e&&(r["X-Firebase-GMPID"]=e)}function Nk(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function Ck(r,e,t,s,o,l,h=!0,f=!1){const y=ew(r.urlParams),_=r.url+y,E=Object.assign({},r.headers);return kk(E,e),Ak(E,t),Rk(E,l),Nk(E,s),new Sk(_,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bk(...r){const e=Pk();if(e!==void 0){const t=new e;for(let s=0;s<r.length;s++)t.append(r[s]);return t.getBlob()}else{if(yp())return new Blob(r);throw new at(ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Dk(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(r){if(typeof atob>"u")throw yk("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zd{constructor(e,t){this.data=e,this.contentType=t||null}}function Ok(r,e){switch(r){case or.RAW:return new zd(tw(e));case or.BASE64:case or.BASE64URL:return new zd(nw(r,e));case or.DATA_URL:return new zd(jk(e),Mk(e))}throw mp()}function tw(r){const e=[];for(let t=0;t<r.length;t++){let s=r.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,h=r.charCodeAt(++t);s=65536|(l&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Lk(r){let e;try{e=decodeURIComponent(r)}catch{throw sl(or.DATA_URL,"Malformed data URL.")}return tw(e)}function nw(r,e){switch(r){case or.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw sl(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case or.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw sl(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Vk(e)}catch(o){throw o.message.includes("polyfill")?o:sl(r,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class rw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw sl(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=Uk(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function jk(r){const e=new rw(r);return e.base64?nw(or.BASE64,e.rest):Lk(e.rest)}function Mk(r){return new rw(r).contentType}function Uk(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){let s=0,o="";__(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(__(this.data_)){const s=this.data_,o=Dk(s,e,t);return o===null?null:new Ss(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Ss(s,!0)}}static getBlob(...e){if(yp()){const t=e.map(s=>s instanceof Ss?s.data_:s);return new Ss(bk.apply(null,t))}else{const t=e.map(h=>gp(h)?Ok(or.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new Ss(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(r){let e;try{e=JSON.parse(r)}catch{return null}return Tk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function zk(r,e){const t=e.split("/").filter(s=>s.length>0).join("/");return r.length===0?t:r+"/"+t}function iw(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(r,e){return e}class Kt{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||Bk}}let Xu=null;function $k(r){return!gp(r)||r.length<2?r:iw(r)}function ow(){if(Xu)return Xu;const r=[];r.push(new Kt("bucket")),r.push(new Kt("generation")),r.push(new Kt("metageneration")),r.push(new Kt("name","fullPath",!0));function e(l,h){return $k(h)}const t=new Kt("name");t.xform=e,r.push(t);function s(l,h){return h!==void 0?Number(h):h}const o=new Kt("size");return o.xform=s,r.push(o),r.push(new Kt("timeCreated")),r.push(new Kt("updated")),r.push(new Kt("md5Hash",null,!0)),r.push(new Kt("cacheControl",null,!0)),r.push(new Kt("contentDisposition",null,!0)),r.push(new Kt("contentEncoding",null,!0)),r.push(new Kt("contentLanguage",null,!0)),r.push(new Kt("contentType",null,!0)),r.push(new Kt("metadata","customMetadata",!0)),Xu=r,Xu}function Hk(r,e){function t(){const s=r.bucket,o=r.fullPath,l=new mn(s,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function Wk(r,e,t){const s={};s.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];s[h.local]=h.xform(s,e[h.server])}return Hk(s,r),s}function aw(r,e,t){const s=sw(e);return s===null?null:Wk(r,s,t)}function qk(r,e,t,s){const o=sw(e);if(o===null||!gp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const E=r.bucket,I=r.fullPath,A="/b/"+h(E)+"/o/"+h(I),F=_p(A,t,s),q=ew({alt:"media",token:_});return F+q})[0]}function Kk(r,e){const t={},s=e.length;for(let o=0;o<s;o++){const l=e[o];l.writable&&(t[l.server]=r[l.local])}return JSON.stringify(t)}class lw{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(r){if(!r)throw mp()}function Gk(r,e){function t(s,o){const l=aw(r,o,e);return uw(l!==null),l}return t}function Qk(r,e){function t(s,o){const l=aw(r,o,e);return uw(l!==null),qk(l,o,r.host,r._protocol)}return t}function cw(r){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=lk():o=ak():t.getStatus()===402?o=ok(r.bucket):t.getStatus()===403?o=uk(r.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function Yk(r){const e=cw(r);function t(s,o){let l=e(s,o);return s.getStatus()===404&&(l=ik(r.path)),l.serverResponse=o.serverResponse,l}return t}function Jk(r,e,t){const s=e.fullServerUrl(),o=_p(s,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,f=new lw(o,l,Qk(r,t),h);return f.errorHandler=Yk(e),f}function Xk(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function Zk(r,e,t){const s=Object.assign({},t);return s.fullPath=r.path,s.size=e.size(),s.contentType||(s.contentType=Xk(null,e)),s}function eN(r,e,t,s,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let G="";for(let H=0;H<2;H++)G=G+Math.random().toString().slice(2);return G}const y=f();h["Content-Type"]="multipart/related; boundary="+y;const _=Zk(e,s,o),E=Kk(_,t),I="--"+y+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+y+`\r
Content-Type: `+_.contentType+`\r
\r
`,A=`\r
--`+y+"--",F=Ss.getBlob(I,s,A);if(F===null)throw mk();const q={name:_.fullPath},Q=_p(l,r.host,r._protocol),$="POST",ie=r.maxUploadRetryTime,V=new lw(Q,$,Gk(r,t),ie);return V.urlParams=q,V.headers=h,V.body=F.uploadData(),V.errorHandler=cw(e),V}class tN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,l){if(this.sent_)throw Wa("cannot .send() more than once");if(zs(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nN extends tN{initXhr(){this.xhr_.responseType="text"}}function hw(){return new nN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){this._service=e,t instanceof mn?this._location=t:this._location=mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ni(e,t)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iw(this._location.path)}get storage(){return this._service}get parent(){const e=Fk(this._location.path);if(e===null)return null;const t=new mn(this._location.bucket,e);return new Ni(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw _k(e)}}function rN(r,e,t){r._throwIfRoot("uploadBytes");const s=eN(r.storage,r._location,ow(),new Ss(e,!0),t);return r.storage.makeRequestWithTokens(s,hw).then(o=>({metadata:o,ref:r}))}function sN(r){r._throwIfRoot("getDownloadURL");const e=Jk(r.storage,r._location,ow());return r.storage.makeRequestWithTokens(e,hw).then(t=>{if(t===null)throw gk();return t})}function iN(r,e){const t=zk(r._location.path,e),s=new mn(r._location.bucket,t);return new Ni(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(r){return/^[A-Za-z]+:\/\//.test(r)}function aN(r,e){return new Ni(r,e)}function dw(r,e){if(r instanceof vp){const t=r;if(t._bucket==null)throw pk();const s=new Ni(t,t._bucket);return e!=null?dw(s,e):s}else return e!==void 0?iN(r,e):r}function lN(r,e){if(e&&oN(e)){if(r instanceof vp)return aN(r,e);throw pf("To use ref(service, url), the first argument must be a Storage instance.")}else return dw(r,e)}function w_(r,e){const t=e?.[X0];return t==null?null:mn.makeFromBucketSpec(t,r)}function uN(r,e,t,s={}){r.host=`${e}:${t}`;const o=zs(e);o&&(_f(`https://${r.host}/b`),vf("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(r._overrideAuthToken=typeof l=="string"?l:b_(l,r.app.options.projectId))}class vp{constructor(e,t,s,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=J0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rk,this._maxUploadRetryTime=sk,this._requests=new Set,o!=null?this._bucket=mn.makeFromBucketSpec(o,this._host):this._bucket=w_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=w_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ni(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new vk(Z0());{const h=Ck(e,this._appId,s,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const E_="@firebase/storage",x_="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="storage";function cN(r,e,t){return r=Ze(r),rN(r,e,t)}function hN(r){return r=Ze(r),sN(r)}function dN(r,e){return r=Ze(r),lN(r,e)}function fN(r=xf(),e){r=Ze(r);const s=bc(r,fw).getImmediate({identifier:e}),o=N_("storage");return o&&pN(s,...o),s}function pN(r,e,t,s={}){uN(r,e,t,s)}function mN(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new vp(t,s,o,e,Ci)}function gN(){Ii(new Vs(fw,mN,"PUBLIC").setMultipleInstances(!0)),ar(E_,x_,""),ar(E_,x_,"esm2020")}gN();const yN={apiKey:"AIzaSyAFCaKi_-AIEPjneYyVAP1YTLTJsCZ1wvQ",authDomain:"campus-fdb87.firebaseapp.com",projectId:"campus-fdb87",storageBucket:"campus-fdb87.firebasestorage.app",messagingSenderId:"580962580065",appId:"1:580962580065:web:a5f2dd942ae2685e901c20",measurementId:"G-QWW258FNBV"},wp=O_(yN),il=D1(wp),gn=UR(wp),_N=fN(wp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wN=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),T_=r=>{const e=wN(r);return e.charAt(0).toUpperCase()+e.slice(1)},pw=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=he.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...f},y)=>he.createElement("svg",{ref:y,...EN,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:pw("lucide",o),...f},[...h.map(([_,E])=>he.createElement(_,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(r,e)=>{const t=he.forwardRef(({className:s,...o},l)=>he.createElement(xN,{ref:l,iconNode:e,className:pw(`lucide-${vN(T_(r))}`,`lucide-${r}`,s),...o}));return t.displayName=T_(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],I_=dt("arrow-left",TN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],SN=dt("calendar",IN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Bo=dt("circle-alert",AN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],$o=dt("circle-check-big",RN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],NN=dt("circle-user",kN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],ml=dt("clock",CN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],bs=dt("file-text",PN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],DN=dt("funnel",bN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ON=dt("image",VN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jN=dt("lock",LN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Ep=dt("log-out",MN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],mw=dt("map-pin",UN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],zN=dt("message-square",FN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],$N=dt("pen",BN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gw=dt("plus",HN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],yw=dt("tag",WN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],KN=dt("trash-2",qN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],QN=dt("upload",GN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ds=dt("user",YN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],XN=dt("users",JN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xp=dt("x",ZN);function mf(r){return!r||typeof r!="string"?!1:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.trim())&&r.length<=254}function eC(r){if(!r||typeof r!="string")return{isValid:!1,message:"Password is required"};if(r.length<8)return{isValid:!1,message:"Password must be at least 8 characters"};if(r.length>128)return{isValid:!1,message:"Password is too long (max 128 characters)"};const e=/[A-Z]/.test(r),t=/[a-z]/.test(r),s=/[0-9]/.test(r);return!e||!t||!s?{isValid:!1,message:"Password must contain uppercase, lowercase, and numbers"}:{isValid:!0,message:"Password is strong"}}function _w(r,e=2,t=100){if(!r||typeof r!="string")return!1;const s=r.trim();return s.length>=e&&s.length<=t}function tC(r,e=5,t=5e3){if(!r||typeof r!="string")return!1;const s=r.trim();return s.length>=e&&s.length<=t}function nC(r){if(!r||typeof r!="string")return!1;const e=r.trim();return e.length>=3&&e.length<=200}function rC(r,e=2){const t=e*1024*1024;return r<=t}function sC(r,e){return!r||typeof r!="string"?!1:e.includes(r.toLowerCase())}function iC(r){return["Student","Staff","Technician","Admin"].includes(r)}function Do(r){if(!r||typeof r!="string")return"";let e=r.trim();return e=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/javascript:/gi,"").replace(/on\w+\s*=/gi,""),e}function gf(r){return!r||typeof r!="string"?"":r.trim().toLowerCase()}function oC({onLogin:r}){const[e,t]=he.useState(!1),[s,o]=he.useState({name:"",email:"",password:"",role:"Student"}),[l,h]=he.useState(""),[f,y]=he.useState(!1),[_,E]=he.useState(!1),[I,A]=he.useState(!1),[F,q]=he.useState(""),Q=async ie=>{if(ie.preventDefault(),h(""),!mf(F)){h("Please enter a valid email address");return}y(!0);try{await pI(il,gf(F)),A(!0)}catch(V){V.code==="auth/user-not-found"?A(!0):h("Failed to send reset email. Please try again.")}finally{y(!1)}},$=async ie=>{if(ie.preventDefault(),h(""),y(!0),!mf(s.email)){h("Please enter a valid email address"),y(!1);return}if(e){const H=eC(s.password);if(!H.isValid){h(H.message),y(!1);return}}else if(!s.password||s.password.length<6){h("Invalid email or password"),y(!1);return}const V=gf(s.email),G=Do(s.name);try{if(e){if(!_w(G)){h("Please enter a valid full name (2-100 characters)"),y(!1);return}try{const re=Rs(gn,"users",V);if((await g_(re)).exists()){h("This email is already registered. Please log in with your role."),y(!1);return}}catch(re){console.error("Firestore check error:",re)}const H=await mI(il,V,s.password);await _I(H.user,{displayName:G});try{await y_(Rs(gn,"users",V),{name:G,email:V,role:s.role,uid:H.user.uid,createdAt:new Date().toISOString()}),console.log("User saved to Firestore with role:",s.role)}catch(re){console.error("Firestore save error:",re)}const ee=s.role==="Admin"?"ADM001":`STU${Date.now().toString().slice(-7)}`;r(G,s.role,ee)}else{const H=await gI(il,V,s.password);let ee=null,re="Student";try{const R=Rs(gn,"users",V),b=await g_(R);if(b.exists())ee=b.data(),re=ee?.role||"Student";else try{const P=Do(H.user.displayName||V.split("@")[0]);await y_(Rs(gn,"users",V),{name:P,email:V,role:"Student",uid:H.user.uid,createdAt:new Date().toISOString()})}catch(P){console.error("Could not create user entry:",P)}}catch(R){console.error("Firestore fetch error:",R)}const N=ee?.name&&String(ee.name)||H.user.displayName||s.email.split("@")[0],T=re==="Admin"?"ADM001":`STU${Date.now().toString().slice(-7)}`;console.log("Login successful:",{displayName:N,role:re,email:s.email}),r(N,re,T)}}catch(H){if(H instanceof Error){const ee=H.message.toLowerCase();ee.includes("user-not-found")?h("Email not found. Please check your email or sign up."):ee.includes("wrong-password")||ee.includes("invalid-credential")?h("Email or password is incorrect. Please try again."):ee.includes("email-already-in-use")?h("This email is already registered. Please log in instead."):ee.includes("weak-password")?h("Password must be at least 6 characters."):ee.includes("invalid-email")?h("Please enter a valid email address."):ee.includes("operation-not-allowed")?h("Account creation is currently disabled. Please try again later."):ee.includes("too-many-requests")?h("Too many login attempts. Please try again in a few minutes."):h("Something went wrong. Please try again.")}else h("An error occurred. Please try again.")}finally{y(!1)}};return g.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4",children:g.jsxs("div",{className:"bg-white rounded-2xl shadow-xl w-full max-w-md p-8",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4",children:g.jsx(NN,{className:"w-10 h-10 text-white"})}),g.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Smart Campus"}),g.jsx("p",{className:"text-gray-600",children:"Service Request Management System"})]}),g.jsxs("div",{className:"flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg",children:[g.jsx("button",{onClick:()=>t(!1),className:`flex-1 py-2 rounded-md transition-all ${e?"text-gray-600 hover:text-gray-900":"bg-white text-blue-600 shadow-sm"}`,children:"Login"}),g.jsx("button",{onClick:()=>t(!0),className:`flex-1 py-2 rounded-md transition-all ${e?"bg-white text-blue-600 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:"Sign Up"})]}),_&&g.jsx("div",{children:I?g.jsxs("div",{className:"text-center py-4",children:[g.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:g.jsx("svg",{className:"w-8 h-8 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),g.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-2",children:"Email Sent!"}),g.jsxs("p",{className:"text-gray-600 text-sm mb-6",children:["If ",g.jsx("strong",{children:F})," is registered, you'll receive a password reset link shortly. Check your inbox and spam folder."]}),g.jsx("button",{onClick:()=>{E(!1),A(!1),q(""),h("")},className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium",children:"Back to Login"})]}):g.jsxs("form",{onSubmit:Q,className:"space-y-4",children:[g.jsxs("div",{className:"text-center mb-4",children:[g.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Reset Password"}),g.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Enter your email and we'll send you a reset link."})]}),l&&g.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm",children:l}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),g.jsxs("div",{className:"relative",children:[g.jsx(Ds,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),g.jsx("input",{type:"email",required:!0,value:F,onChange:ie=>q(ie.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",placeholder:"Enter your registered email",disabled:f})]})]}),g.jsx("button",{type:"submit",disabled:f,className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed",children:f?"Sending...":"Send Reset Link"}),g.jsx("button",{type:"button",onClick:()=>{E(!1),h("")},className:"w-full text-center text-sm text-blue-600 hover:underline font-medium py-1",children:"← Back to Login"})]})}),!_&&l&&g.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm",children:l}),!_&&g.jsxs("form",{onSubmit:$,className:"space-y-4",children:[e&&g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),g.jsxs("div",{className:"relative",children:[g.jsx(Ds,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),g.jsx("input",{type:"text",required:e,value:s.name,onChange:ie=>o({...s,name:ie.target.value}),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",placeholder:"Enter your full name",disabled:f})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),g.jsxs("div",{className:"relative",children:[g.jsx(Ds,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),g.jsx("input",{type:"email",required:!0,value:s.email,onChange:ie=>o({...s,email:ie.target.value}),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100",placeholder:"Enter your email",disabled:f})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),g.jsxs("div",{className:"relative",children:[g.jsx(jN,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),g.jsx("input",{type:"password",required:!0,value:s.password,onChange:ie=>o({...s,password:ie.target.value}),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100",placeholder:"Enter your password",disabled:f})]})]}),!e&&g.jsx("div",{className:"text-right",children:g.jsx("button",{type:"button",onClick:()=>{E(!0),h("")},className:"text-sm text-blue-600 hover:underline font-medium",children:"Forgot Password?"})}),e&&g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Role"}),g.jsxs("select",{value:s.role,onChange:ie=>o({...s,role:ie.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100",disabled:f,children:[g.jsx("option",{value:"Student",children:"Student"}),g.jsx("option",{value:"Staff",children:"Staff"}),g.jsx("option",{value:"Admin",children:"Admin"})]})]}),g.jsx("button",{type:"submit",disabled:f,className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed",children:f?"Processing...":e?"Create Account":"Login"})]}),!_&&g.jsx("div",{className:"mt-6 text-center text-sm text-gray-600",children:e?g.jsxs("p",{children:["Already have an account?"," ",g.jsx("button",{onClick:()=>t(!1),className:"text-blue-600 hover:underline font-medium",children:"Login here"})]}):g.jsxs("p",{children:["Don't have an account?"," ",g.jsx("button",{onClick:()=>t(!0),className:"text-blue-600 hover:underline font-medium",children:"Sign up here"})]})})]})})}const aC=["Electrical","Internet","Hostel","Classroom","Plumbing","Other"],lC=2*1024*1024,uC=["image/jpeg","image/png"];function cC({studentId:r,studentName:e,onSubmit:t,onCancel:s}){const[o,l]=he.useState({category:"Electrical",description:"",location:""}),[h,f]=he.useState(null),[y,_]=he.useState(""),[E,I]=he.useState(""),[A,F]=he.useState(!1),q=he.useRef(null),Q=V=>{const G=V.target.files?.[0];if(I(""),!G){f(null),_("");return}if(!uC.includes(G.type)){I("Only JPG and PNG images are allowed"),f(null),_("");return}if(G.size>lC){I("Image size must be less than 2MB"),f(null),_("");return}const H=new FileReader;H.onload=ee=>{_(ee.target?.result)},H.readAsDataURL(G),f(G)},$=()=>{f(null),_(""),q.current&&(q.current.value="")},ie=async V=>{if(V.preventDefault(),I(""),F(!0),!tC(o.description)){I("Description must be between 5 and 5000 characters"),F(!1);return}if(!nC(o.location)){I("Location must be between 3 and 200 characters"),F(!1);return}if(!["Electrical","Internet","Hostel","Classroom","Plumbing","Other"].includes(o.category)){I("Invalid category selected"),F(!1);return}const H=Do(o.description),ee=Do(o.location);try{const re=new Date,N=re.toISOString().slice(0,10).replace(/-/g,""),T=Math.floor(100+Math.random()*900),R=`REQ-${N}-${T}`;let b;if(h){if(!rC(h.size,2)){I("Image size must be less than 2MB"),F(!1);return}if(!sC(h.type,["image/jpeg","image/png"])){I("Only JPG and PNG images are allowed"),F(!1);return}try{const L=Date.now(),k=`requests/${r}/${R}_${L}`,ze=dN(_N,k),ft=cN(ze,h);await Promise.race([ft,new Promise((Ke,se)=>setTimeout(()=>se(new Error("Upload timeout")),3e4))]),b=await hN(ze),console.log("Image uploaded successfully:",b)}catch(L){console.error("Image upload failed:",L),I("Image upload failed, but request will be saved without image."),b=void 0}}const P=zo(gn,"service_requests");await Q0(P,{ticketNumber:R,category:o.category,description:H,location:ee,studentId:r,studentName:Do(e),status:"Pending",dateSubmitted:re.toISOString(),imageUrl:b||null,statusUpdates:[{status:"Pending",timestamp:re.toISOString(),note:"Request submitted"}]}),console.log("Request saved to Firestore"),t(o),l({category:"Electrical",description:"",location:""}),f(null),_(""),I("")}catch(re){console.error("Error saving request:",re),I("Failed to submit request. Please try again.")}finally{F(!1)}};return g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",children:[g.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between",children:[g.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Raise New Service Request"}),g.jsx("button",{onClick:s,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:g.jsx(xp,{className:"w-5 h-5 text-gray-500"})})]}),g.jsxs("form",{onSubmit:ie,className:"p-6 space-y-6",children:[E&&g.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2",children:[g.jsx("span",{className:"font-medium",children:"⚠"}),E]}),g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[g.jsx(yw,{className:"w-4 h-4"}),"Category"]}),g.jsx("select",{required:!0,value:o.category,onChange:V=>l({...o,category:V.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",children:aC.map(V=>g.jsx("option",{value:V,children:V},V))})]}),g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[g.jsx(bs,{className:"w-4 h-4"}),"Description"]}),g.jsx("textarea",{required:!0,value:o.description,onChange:V=>l({...o,description:V.target.value}),rows:5,placeholder:"Please describe the issue in detail...",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Provide as much detail as possible to help us resolve your issue quickly"})]}),g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[g.jsx(mw,{className:"w-4 h-4"}),"Location"]}),g.jsx("input",{type:"text",required:!0,value:o.location,onChange:V=>l({...o,location:V.target.value}),placeholder:"e.g., Building A, Room 301",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Specify the exact location where the issue is occurring"})]}),g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[g.jsx(ON,{className:"w-4 h-4"}),"Attach Image ",g.jsx("span",{className:"text-xs text-gray-500 font-normal",children:"(Optional)"})]}),y?g.jsx("div",{className:"bg-gray-50 border border-gray-300 rounded-lg p-4",children:g.jsxs("div",{className:"flex items-start gap-4",children:[g.jsx("img",{src:y,alt:"Preview",className:"w-20 h-20 object-cover rounded-lg border border-gray-200"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("p",{className:"text-sm font-medium text-gray-900",children:h?.name}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:(h?.size||0)/1024<1024?`${((h?.size||0)/1024).toFixed(1)} KB`:`${((h?.size||0)/1024/1024).toFixed(1)} MB`}),g.jsx("button",{type:"button",onClick:$,className:"text-sm text-red-600 hover:text-red-700 mt-2 font-medium",children:"Remove Image"})]}),g.jsx("button",{type:"button",onClick:()=>q.current?.click(),className:"px-3 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-lg text-sm font-medium transition-colors",children:"Change"})]})}):g.jsxs("div",{onClick:()=>q.current?.click(),className:"w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors",children:[g.jsx(QN,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),g.jsx("p",{className:"text-sm font-medium text-gray-700",children:"Click to upload image"}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"JPG or PNG • Max 2MB"})]}),g.jsx("input",{ref:q,type:"file",accept:"image/jpeg,image/png",onChange:Q,className:"hidden"}),g.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Images help technicians better understand the issue and provide faster resolution."})]}),g.jsxs("div",{className:"flex gap-3 pt-4",children:[g.jsx("button",{type:"button",onClick:s,disabled:A,className:"flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:"Cancel"}),g.jsx("button",{type:"submit",disabled:A,className:"flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed",children:A?"Submitting...":"Submit Request"})]})]})]})})}function hC({user:r,requests:e,onAddRequest:t,onViewDetails:s,onLogout:o}){const[l,h]=he.useState(!1),f=E=>{switch(E){case"Pending":return g.jsx(ml,{className:"w-5 h-5 text-yellow-500"});case"In Progress":return g.jsx(Bo,{className:"w-5 h-5 text-blue-500"});case"Resolved":return g.jsx($o,{className:"w-5 h-5 text-green-500"});default:return null}},y=E=>{switch(E){case"Pending":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"In Progress":return"bg-blue-100 text-blue-800 border-blue-200";case"Resolved":return"bg-green-100 text-green-800 border-green-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},_=E=>{t({...E,studentName:r.name,studentId:r.id}),h(!1)};return g.jsxs("div",{className:"min-h-screen bg-gray-50",children:[g.jsx("header",{className:"bg-white border-b border-gray-200 shadow-sm",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:g.jsx(bs,{className:"w-6 h-6 text-white"})}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"Smart Campus"}),g.jsx("p",{className:"text-sm text-gray-500",children:"Service Request System"})]})]}),g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg",children:[g.jsx(Ds,{className:"w-5 h-5 text-blue-600"}),g.jsxs("div",{className:"text-right",children:[g.jsx("p",{className:"text-sm font-medium text-gray-900",children:r.name}),g.jsx("p",{className:"text-xs text-gray-500",children:r.role})]})]}),g.jsxs("button",{onClick:o,className:"flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[g.jsx(Ep,{className:"w-5 h-5"}),g.jsx("span",{className:"text-sm",children:"Logout"})]})]})]})})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Total Requests"}),g.jsx("p",{className:"text-3xl font-bold text-gray-900",children:e.length})]}),g.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:g.jsx(bs,{className:"w-6 h-6 text-blue-600"})})]})}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"In Progress"}),g.jsx("p",{className:"text-3xl font-bold text-blue-600",children:e.filter(E=>E.status==="In Progress").length})]}),g.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:g.jsx(Bo,{className:"w-6 h-6 text-blue-600"})})]})}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Resolved"}),g.jsx("p",{className:"text-3xl font-bold text-green-600",children:e.filter(E=>E.status==="Resolved").length})]}),g.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center",children:g.jsx($o,{className:"w-6 h-6 text-green-600"})})]})})]}),g.jsx("div",{className:"mb-6",children:g.jsxs("button",{onClick:()=>h(!0),className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm",children:[g.jsx(gw,{className:"w-5 h-5"}),"Raise New Request"]})}),g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:[g.jsx("div",{className:"px-6 py-4 border-b border-gray-200 bg-gray-50",children:g.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"My Service Requests"})}),g.jsx("div",{className:"divide-y divide-gray-200",children:e.length===0?g.jsxs("div",{className:"px-6 py-12 text-center",children:[g.jsx(bs,{className:"w-12 h-12 text-gray-300 mx-auto mb-3"}),g.jsx("p",{className:"text-gray-500",children:"No service requests yet"}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:'Click "Raise New Request" to submit your first request'})]}):e.map(E=>g.jsx("div",{className:"px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer",onClick:()=>s(E.id),children:g.jsxs("div",{className:"flex items-start justify-between gap-4",children:[g.jsxs("div",{className:"flex-1",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[g.jsx("span",{className:"text-sm font-mono text-gray-500",children:E.ticketNumber??E.id}),g.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium border ${y(E.status)}`,children:E.status}),g.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium",children:E.category})]}),g.jsx("h3",{className:"font-medium text-gray-900 mb-1",children:E.description}),g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:E.location}),g.jsxs("p",{className:"text-xs text-gray-500",children:["Submitted on ",E.dateSubmitted]})]}),g.jsxs("div",{className:"flex items-center gap-3 flex-shrink-0",children:[E.imageUrl&&g.jsx("img",{src:E.imageUrl,alt:"Request",className:"w-16 h-16 object-cover rounded-lg border border-gray-200"}),f(E.status)]})]})},E.id))})]})]}),l&&g.jsx(cC,{studentId:r.id,studentName:r.name,onSubmit:_,onCancel:()=>h(!1)})]})}function dC({onClose:r}){const[e,t]=he.useState([]),[s,o]=he.useState(!0),[l,h]=he.useState(!1),[f,y]=he.useState(null),[_,E]=he.useState({name:"",email:"",role:"Staff"}),[I,A]=he.useState(""),[F,q]=he.useState("");he.useEffect(()=>{(async()=>{try{const ee=zo(gn,"users"),N=(await pp(ee)).docs.map(T=>({id:T.id,...T.data()}));t(N),o(!1)}catch(ee){console.error("Error fetching users:",ee),o(!1)}})()},[]);const Q=async H=>{if(H.preventDefault(),A(""),q(""),!_w(_.name)){A("Name must be between 2 and 100 characters");return}if(!mf(_.email)){A("Please enter a valid email address");return}if(!iC(_.role)){A("Invalid role selected");return}const ee=Do(_.name),re=gf(_.email);try{if(e.find(T=>T.email===re)&&!f){A("Email already exists");return}if(f){const T=Rs(gn,"users",f);await G0(T,{name:ee,role:_.role}),t(e.map(R=>R.id===f?{...R,name:ee,role:_.role}:R)),q("User updated successfully")}else{const T={name:ee,email:re,role:_.role,createdAt:new Date().toISOString()},R=await Q0(zo(gn,"users"),T);t([...e,{id:R.id,...T}]),q("User added successfully")}E({name:"",email:"",role:"Staff"}),y(null),h(!1)}catch(N){const T=N;console.error("Error saving user:",N);const R=T?.message||"Failed to save user. Make sure Firestore is enabled.";A(R)}},$=H=>{E({name:H.name,email:H.email,role:H.role}),y(H.id),h(!0)},ie=async H=>{if(confirm("Are you sure you want to delete this user?"))try{await ZR(Rs(gn,"users",H)),t(e.filter(ee=>ee.id!==H)),q("User deleted successfully")}catch(ee){const re=ee;console.error("Error deleting user:",ee),A(re?.message||"Failed to delete user")}},V=()=>{h(!1),y(null),E({name:"",email:"",role:"Staff"}),A("")},G=H=>{const{name:ee,value:re}=H.currentTarget;E(N=>({...N,[ee]:re}))};return g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto",children:g.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-5xl my-6",children:[g.jsxs("div",{className:"flex justify-between items-center gap-4 px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"User Management"}),g.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Manage team members and their access roles"})]}),g.jsx("button",{onClick:r,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600","aria-label":"Close",children:g.jsx(xp,{className:"w-6 h-6"})})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-8 max-h-[calc(90vh-100px)]",children:[F&&g.jsxs("div",{className:"mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3 text-sm",children:[g.jsx("div",{className:"w-2 h-2 bg-green-600 rounded-full"}),g.jsx("span",{className:"font-medium",children:F})]}),l&&g.jsxs("div",{className:"mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-6",children:f?"✎ Edit User":"+ Add New User"}),g.jsxs("form",{onSubmit:Q,className:"space-y-5",children:[g.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Full Name"}),g.jsx("input",{type:"text",name:"name",value:_.name,onChange:G,className:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"e.g., Dr. Kira"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Email"}),g.jsx("input",{type:"email",name:"email",value:_.email,onChange:G,disabled:!!f,className:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-500",placeholder:"e.g., kira@campus.edu"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Role"}),g.jsxs("select",{name:"role",value:_.role,onChange:G,className:"w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",children:[g.jsx("option",{value:"Staff",children:"Staff"}),g.jsx("option",{value:"Technician",children:"Technician"}),g.jsx("option",{value:"Admin",children:"Admin"})]})]}),I&&g.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-3",children:[g.jsx("div",{className:"w-2 h-2 bg-red-600 rounded-full"}),I]}),g.jsxs("div",{className:"flex gap-3 pt-2",children:[g.jsx("button",{type:"submit",className:"flex-1 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold",children:f?"Update User":"Add User"}),g.jsx("button",{type:"button",onClick:V,className:"flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg hover:bg-gray-50 transition-colors font-semibold",children:"Cancel"})]})]})]}),!l&&g.jsxs("button",{onClick:()=>{h(!0),y(null),E({name:"",email:"",role:"Staff"})},className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold mb-6",children:[g.jsx(gw,{className:"w-5 h-5"}),"Add New User"]}),s?g.jsxs("div",{className:"text-center py-12",children:[g.jsx("div",{className:"inline-block w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-gray-500",children:"Loading users..."})]}):e.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx("div",{className:"text-4xl mb-3",children:"👥"}),g.jsx("p",{className:"text-gray-600 font-medium",children:"No users found"}),g.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Add users to get started"})]}):g.jsx("div",{className:"overflow-hidden border border-gray-200 rounded-xl",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full",children:[g.jsx("thead",{className:"bg-gray-50 border-b border-gray-200",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",children:"Name"}),g.jsx("th",{className:"px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",children:"Email"}),g.jsx("th",{className:"px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",children:"Role"}),g.jsx("th",{className:"px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",children:"Created"}),g.jsx("th",{className:"px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",children:"Actions"})]})}),g.jsx("tbody",{className:"divide-y divide-gray-200",children:e.map((H,ee)=>g.jsxs("tr",{className:`${ee%2===0?"bg-white":"bg-gray-50"} hover:bg-blue-50 transition-colors`,children:[g.jsx("td",{className:"px-6 py-4",children:g.jsx("p",{className:"text-sm font-semibold text-gray-900",children:H.name})}),g.jsx("td",{className:"px-6 py-4",children:g.jsx("p",{className:"text-sm text-gray-600",children:H.email})}),g.jsx("td",{className:"px-6 py-4",children:g.jsx("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${H.role==="Admin"?"bg-red-100 text-red-800":H.role==="Technician"?"bg-purple-100 text-purple-800":"bg-green-100 text-green-800"}`,children:H.role})}),g.jsx("td",{className:"px-6 py-4",children:g.jsx("p",{className:"text-sm text-gray-600",children:new Date(H.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})})}),g.jsxs("td",{className:"px-6 py-4 flex gap-3",children:[g.jsx("button",{onClick:()=>$(H),className:"p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors",title:"Edit user",children:g.jsx($N,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>ie(H.id),className:"p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors",title:"Delete user",children:g.jsx(KN,{className:"w-4 h-4"})})]})]},H.id))})]})})})]})]})})}const fC=he.memo(({user:r,requests:e,onUpdateRequest:t,onViewDetails:s,onLogout:o})=>{const[l,h]=he.useState("All"),[f,y]=he.useState("All"),[_,E]=he.useState(!1),[I,A]=he.useState([]);he.useEffect(()=>{(async()=>{try{const G=zo(gn,"users"),ee=(await pp(G)).docs.map(re=>({id:re.id,...re.data()})).filter(re=>re.role==="Staff"||re.role==="Technician");A(ee),console.log("Loaded staff members:",ee)}catch(G){console.error("Error fetching staff:",G),A([])}})()},[]);const F=he.useMemo(()=>["All","Electrical","Internet","Hostel","Classroom","Plumbing","Other"],[]),q=he.useMemo(()=>["All","Pending","In Progress","Resolved"],[]),Q=he.useMemo(()=>e.filter(V=>{const G=l==="All"||V.status===l,H=f==="All"||V.category===f;return G&&H}),[e,l,f]),$=he.useCallback((V,G)=>{t(V,{assignedTo:G})},[t]),ie=V=>{switch(V){case"Pending":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"In Progress":return"bg-blue-100 text-blue-800 border-blue-200";case"Resolved":return"bg-green-100 text-green-800 border-green-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return g.jsxs("div",{className:"min-h-screen bg-gray-50",children:[g.jsx("header",{className:"bg-white border-b border-gray-200 shadow-sm",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 py-4",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:g.jsx(bs,{className:"w-6 h-6 text-white"})}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"Smart Campus - Admin Panel"}),g.jsx("p",{className:"text-sm text-gray-500",children:"Service Request Management"})]})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("button",{onClick:()=>E(!0),className:"flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg transition-colors font-medium text-sm",children:[g.jsx(XN,{className:"w-5 h-5"}),g.jsx("span",{children:"Manage Users"})]}),g.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg",children:[g.jsx(Ds,{className:"w-5 h-5 text-blue-600"}),g.jsxs("div",{className:"text-right",children:[g.jsx("p",{className:"text-sm font-medium text-gray-900",children:r.name}),g.jsx("p",{className:"text-xs text-gray-500",children:r.role})]})]}),g.jsxs("button",{onClick:o,className:"flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium",children:[g.jsx(Ep,{className:"w-5 h-5"}),g.jsx("span",{children:"Logout"})]})]})]})})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",marginBottom:"2rem"},children:[g.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Total Requests"}),g.jsx("p",{className:"text-3xl font-bold text-gray-900",children:e.length})]}),g.jsx("div",{className:"w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0",children:g.jsx(bs,{className:"w-5 h-5 text-gray-400"})})]})}),g.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Pending"}),g.jsx("p",{className:"text-3xl font-bold text-yellow-600",children:e.filter(V=>V.status==="Pending").length})]}),g.jsx("div",{className:"w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0",children:g.jsx(ml,{className:"w-5 h-5 text-yellow-600"})})]})}),g.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"In Progress"}),g.jsx("p",{className:"text-3xl font-bold text-blue-600",children:e.filter(V=>V.status==="In Progress").length})]}),g.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",children:g.jsx(Bo,{className:"w-5 h-5 text-blue-600"})})]})}),g.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Resolved"}),g.jsx("p",{className:"text-3xl font-bold text-green-600",children:e.filter(V=>V.status==="Resolved").length})]}),g.jsx("div",{className:"w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0",children:g.jsx($o,{className:"w-5 h-5 text-green-600"})})]})})]}),g.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[g.jsx(DN,{className:"w-5 h-5 text-gray-600"}),g.jsx("h2",{className:"font-semibold text-gray-900",children:"Filters"})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Status"}),g.jsx("select",{value:l,onChange:V=>h(V.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",children:q.map(V=>g.jsx("option",{value:V,children:V},V))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Category"}),g.jsx("select",{value:f,onChange:V=>y(V.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",children:F.map(V=>g.jsx("option",{value:V,children:V},V))})]})]})]}),g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:[g.jsx("div",{className:"px-6 py-4 border-b border-gray-200 bg-gray-50",children:g.jsxs("h2",{className:"text-lg font-semibold text-gray-900",children:["All Service Requests (",Q.length,")"]})}),g.jsxs("div",{className:"overflow-x-auto",children:[g.jsxs("table",{className:"w-full",children:[g.jsx("thead",{className:"bg-gray-50 border-b border-gray-200",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Request ID"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Student"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Description"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Image"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Assign To"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),g.jsx("tbody",{className:"divide-y divide-gray-200",children:Q.map(V=>g.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[g.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:g.jsx("span",{className:"text-sm font-mono text-gray-900",children:V.ticketNumber??V.id})}),g.jsx("td",{className:"px-6 py-4",children:g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-gray-900",children:V.studentName}),g.jsx("p",{className:"text-xs text-gray-500",children:V.studentId})]})}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:g.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium",children:V.category})}),g.jsxs("td",{className:"px-6 py-4",children:[g.jsx("p",{className:"text-sm text-gray-900 max-w-xs truncate",children:V.description}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:V.location})]}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:V.imageUrl?g.jsx("img",{src:V.imageUrl,alt:"Request",loading:"lazy",className:"w-12 h-12 object-cover rounded border border-gray-200 cursor-pointer hover:opacity-80",onClick:()=>s(V.id)}):g.jsx("span",{className:"text-xs text-gray-500",children:"No image"})}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:g.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium border ${ie(V.status)}`,children:V.status})}),g.jsx("td",{className:"px-6 py-4",children:g.jsxs("select",{value:V.assignedTo||"",onChange:G=>$(V.id,G.target.value),className:"text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",children:[g.jsx("option",{value:"",children:"Unassigned"}),I.map(G=>g.jsx("option",{value:G.name,children:G.name},G.id))]})}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:g.jsx("button",{onClick:()=>s(V.id),className:"text-sm text-blue-600 hover:text-blue-800 font-medium",children:"View Details"})})]},V.id))})]}),Q.length===0&&g.jsxs("div",{className:"px-6 py-12 text-center",children:[g.jsx(bs,{className:"w-12 h-12 text-gray-300 mx-auto mb-3"}),g.jsx("p",{className:"text-gray-500",children:"No requests found"}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Try adjusting your filters"})]})]})]})]}),_&&g.jsx(dC,{onClose:()=>E(!1)})]})}),pC=he.memo(({user:r,requests:e,onUpdateRequest:t,onViewDetails:s,onLogout:o})=>{const[l,h]=he.useState(null),[f,y]=he.useState(null),[_,E]=he.useState(""),I=he.useMemo(()=>e.filter(V=>V.assignedTo===r.name),[e,r.name]),A=he.useMemo(()=>e.filter(V=>!V.assignedTo&&V.status!=="Resolved"),[e]),F=V=>{switch(V){case"Pending":return"bg-yellow-100 text-yellow-800";case"In Progress":return"bg-blue-100 text-blue-800";case"Resolved":return"bg-green-100 text-green-800";default:return"bg-gray-100 text-gray-800"}},q=he.useCallback(async(V,G,H)=>{h(V);try{const ee=e.find(T=>T.id===V);if(!ee){console.error("Request not found:",V),h(null);return}const re=new Date().toLocaleString(),N={status:G,statusUpdates:[...ee.statusUpdates||[],{status:G,timestamp:re,note:H}]};t(V,N),y(null),E("")}catch(ee){console.error("Error updating request:",ee)}h(null)},[e,t]),Q=he.useCallback(async V=>{h(V);try{const G=new Date().toLocaleString(),H=e.find(re=>re.id===V),ee={assignedTo:r.name,status:"In Progress",statusUpdates:[...H?.statusUpdates||[],{status:"In Progress",timestamp:G,note:`Picked up by ${r.name}`}]};t(V,ee)}catch(G){console.error("Error picking up task:",G)}h(null)},[e,r.name,t]),$=he.useCallback(V=>{y({requestId:V.id,description:V.description}),E("")},[]),ie=he.useCallback(()=>{f&&_.trim()&&q(f.requestId,"Resolved",_)},[f,_,q]);return g.jsxs("div",{className:"min-h-screen bg-gray-50",children:[g.jsx("header",{className:"bg-white border-b border-gray-200 shadow-sm",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 py-4",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:g.jsx(bs,{className:"w-6 h-6 text-white"})}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"Smart Campus Service Management"}),g.jsx("p",{className:"text-sm text-gray-500",children:"Staff Dashboard"})]})]}),g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg",children:[g.jsx(Ds,{className:"w-5 h-5 text-blue-600"}),g.jsxs("div",{className:"text-right",children:[g.jsx("p",{className:"text-sm font-medium text-gray-900",children:r.name}),g.jsx("p",{className:"text-xs text-gray-500",children:r.role})]})]}),g.jsxs("button",{onClick:o,className:"flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[g.jsx(Ep,{className:"w-5 h-5"}),g.jsx("span",{className:"text-sm",children:"Logout"})]})]})]})})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[g.jsxs("div",{className:"grid grid-cols-3 gap-6 mb-8",children:[g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"My Tasks"}),g.jsx("p",{className:"text-3xl font-bold text-gray-900",children:I.length})]}),g.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center",children:g.jsx(ml,{className:"w-6 h-6 text-gray-600"})})]})}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"In Progress"}),g.jsx("p",{className:"text-3xl font-bold text-blue-600",children:I.filter(V=>V.status==="In Progress").length})]}),g.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:g.jsx(Bo,{className:"w-6 h-6 text-blue-600"})})]})}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Resolved"}),g.jsx("p",{className:"text-3xl font-bold text-green-600",children:I.filter(V=>V.status==="Resolved").length})]}),g.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center",children:g.jsx($o,{className:"w-6 h-6 text-green-600"})})]})})]}),g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8",children:[g.jsxs("div",{className:"px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Available Tasks"}),g.jsx("p",{className:"text-sm text-gray-500",children:"Unassigned requests you can pick up"})]}),g.jsxs("span",{className:"text-sm text-gray-500",children:[A.length," available"]})]}),g.jsx("div",{className:"divide-y divide-gray-200",children:A.length===0?g.jsx("div",{className:"px-6 py-8 text-center text-gray-500 text-sm",children:"All requests are currently assigned."}):A.map(V=>g.jsx("div",{className:"px-6 py-4 hover:bg-gray-50 transition-colors",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center gap-2 justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-sm font-mono text-gray-500",children:V.ticketNumber??V.id}),g.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium border ${F(V.status)}`,children:V.status}),g.jsx("span",{className:"px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium",children:V.category})]}),V.imageUrl&&g.jsx("img",{src:V.imageUrl,alt:"Request",loading:"lazy",className:"w-12 h-12 object-cover rounded border border-gray-200"})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-medium text-gray-900 mb-1",children:V.description}),g.jsx("p",{className:"text-sm text-gray-600",children:V.location}),g.jsxs("p",{className:"text-xs text-gray-500",children:["Submitted on ",V.dateSubmitted]})]}),g.jsx("button",{onClick:()=>Q(V.id),disabled:l===V.id,className:"px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 transition-colors disabled:bg-gray-300 font-medium text-sm",children:l===V.id?"Picking Up...":"Pick Up Task"})]})},V.id))})]}),g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:[g.jsx("div",{className:"px-6 py-4 border-b border-gray-200 bg-gray-50",children:g.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"My Tasks"})}),g.jsx("div",{className:"divide-y divide-gray-200",children:I.length===0?g.jsx("div",{className:"px-6 py-8 text-center text-gray-500 text-sm",children:"No tasks assigned to you yet."}):I.map(V=>g.jsx("div",{className:"px-6 py-4 hover:bg-gray-50 transition-colors",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center gap-2 justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-sm font-mono text-gray-500",children:V.ticketNumber??V.id}),g.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium border ${F(V.status)}`,children:V.status}),g.jsx("span",{className:"px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium",children:V.category})]}),V.imageUrl&&g.jsx("img",{src:V.imageUrl,alt:"Request",loading:"lazy",className:"w-12 h-12 object-cover rounded border border-gray-200"})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-medium text-gray-900 mb-1",children:V.description}),g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:V.location}),g.jsxs("p",{className:"text-xs text-gray-500",children:["Submitted on ",V.dateSubmitted]})]}),g.jsxs("div",{children:[V.status==="Pending"&&g.jsx("button",{onClick:()=>q(V.id,"In Progress","Started working"),disabled:l===V.id,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 font-medium text-sm",children:l===V.id?"Starting...":"Start Work"}),V.status==="In Progress"&&g.jsx("button",{onClick:()=>$(V),disabled:l===V.id,className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 font-medium text-sm",children:l===V.id?"Completing...":"Mark as Complete"}),V.status==="Resolved"&&g.jsx("span",{className:"inline-block px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium border border-green-200",children:"✓ Completed"})]})]})},V.id))})]})]}),f&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:g.jsxs("div",{className:"bg-white rounded-lg shadow-xl w-full max-w-md",children:[g.jsxs("div",{className:"flex items-center justify-between p-4 border-b",children:[g.jsx("h2",{className:"text-lg font-semibold",children:"Complete Task"}),g.jsx("button",{onClick:()=>y(null),className:"text-gray-400 hover:text-gray-600",children:g.jsx(xp,{className:"w-5 h-5"})})]}),g.jsxs("div",{className:"p-4",children:[g.jsx("div",{className:"bg-gray-50 rounded p-3 mb-4",children:g.jsxs("p",{className:"text-sm text-gray-600",children:["Task: ",f.description]})}),g.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[g.jsx(zN,{className:"w-4 h-4 inline mr-1"}),"Completion Note *"]}),g.jsx("textarea",{value:_,onChange:V=>E(V.target.value),placeholder:"Describe what was done to resolve this issue...",className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",rows:3}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"This note will be visible to the student and admin"})]}),g.jsxs("div",{className:"flex gap-3 p-4 border-t",children:[g.jsx("button",{onClick:()=>y(null),className:"flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium",children:"Cancel"}),g.jsx("button",{onClick:ie,disabled:!_.trim(),className:"flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium",children:"Mark Complete"})]})]})})]})}),mC=he.memo(({request:r,onBack:e,isAdmin:t,onUpdateRequest:s})=>{const[o,l]=he.useState([]);he.useEffect(()=>{if(!t)return;(async()=>{try{const E=(await pp(zo(gn,"users"))).docs.map(I=>({id:I.id,...I.data()})).filter(I=>I.role==="Staff"||I.role==="Technician");l(E)}catch(_){console.error("Failed to load staff list:",_)}})()},[t]);const h=he.useCallback(y=>{r&&s(r.id,{status:y})},[r,s]);if(!r)return g.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"text-6xl mb-4",children:"🔍"}),g.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Request Not Found"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"The request you're looking for doesn't exist or has been removed."}),g.jsxs("button",{onClick:e,className:"flex items-center gap-2 mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[g.jsx(I_,{className:"w-5 h-5"}),"Back to Dashboard"]})]})});const f=y=>{switch(y){case"Pending":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"In Progress":return"bg-blue-100 text-blue-800 border-blue-200";case"Resolved":return"bg-green-100 text-green-800 border-green-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return g.jsxs("div",{className:"min-h-screen bg-gray-50",children:[g.jsx("header",{className:"bg-white border-b border-gray-200 shadow-sm",children:g.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-4",children:[g.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 text-base",children:[g.jsx(I_,{className:"w-5 h-5"}),g.jsx("span",{className:"font-medium",children:"Back to Dashboard"})]}),g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-1",children:"Request Details"}),g.jsxs("p",{className:"text-sm text-gray-500",children:["Request ID: ",r.ticketNumber??r.id]})]}),g.jsx("span",{className:`px-4 py-2 rounded-lg text-sm font-medium border whitespace-nowrap ${f(r.status)}`,children:r.status})]})]})}),g.jsx("main",{className:"max-w-5xl mx-auto px-4 py-8",children:g.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[g.jsxs("div",{className:"col-span-2 space-y-6",children:[g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Request Information"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(yw,{className:"w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Category"}),g.jsx("span",{className:"px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium inline-block",children:r.category})]})]}),g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(mw,{className:"w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Location"}),g.jsx("p",{className:"text-sm text-gray-900 break-words",children:r.location})]})]}),g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(SN,{className:"w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Date Submitted"}),g.jsx("p",{className:"text-sm text-gray-900",children:new Date(r.dateSubmitted).toLocaleDateString()})]})]}),g.jsxs("div",{className:"pt-4 border-t border-gray-200",children:[g.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Description"}),g.jsx("p",{className:"text-sm text-gray-900 leading-relaxed whitespace-pre-wrap break-words",children:r.description})]})]})]}),r.imageUrl&&g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Attached Image"}),g.jsx("img",{src:r.imageUrl,alt:"Request",loading:"lazy",className:"w-full h-auto rounded-lg border border-gray-200 object-cover max-h-96"})]}),g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Status Updates"}),g.jsx("div",{className:"space-y-4",children:r.statusUpdates.map((y,_)=>g.jsxs("div",{className:"flex gap-4",children:[g.jsxs("div",{className:"flex flex-col items-center flex-shrink-0",children:[g.jsxs("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${y.status==="Resolved"?"bg-green-100":y.status==="In Progress"?"bg-blue-100":"bg-yellow-100"}`,children:[y.status==="Resolved"&&g.jsx($o,{className:"w-4 h-4 text-green-600"}),y.status==="In Progress"&&g.jsx(Bo,{className:"w-4 h-4 text-blue-600"}),y.status==="Pending"&&g.jsx(ml,{className:"w-4 h-4 text-yellow-600"})]}),_<r.statusUpdates.length-1&&g.jsx("div",{className:"w-0.5 h-12 bg-gray-200 my-1"})]}),g.jsxs("div",{className:"flex-1 pb-4 min-w-0",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[g.jsx("span",{className:"text-sm font-medium text-gray-900",children:y.status}),g.jsx("span",{className:"text-xs text-gray-500",children:y.timestamp})]}),g.jsx("p",{className:"text-sm text-gray-600 break-words",children:y.note})]})]},_))})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Student Information"}),g.jsx("div",{className:"space-y-3",children:g.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[g.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0",children:g.jsx(Ds,{className:"w-5 h-5 text-blue-600"})}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:r.studentName}),g.jsx("p",{className:"text-xs text-gray-500 truncate",children:r.studentId})]})]})})]}),t&&g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Assignment"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Assigned To"}),g.jsxs("select",{value:r.assignedTo||"",onChange:y=>s(r.id,{assignedTo:y.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm",children:[g.jsx("option",{value:"",children:"Unassigned"}),o.length===0?g.jsx("option",{disabled:!0,children:"Loading staff..."}):o.map(y=>g.jsxs("option",{value:y.name,children:[y.name," (",y.role,")"]},y.id))]})]}),r.assignedTo&&g.jsxs("div",{className:"pt-3 border-t border-gray-200",children:[g.jsx("p",{className:"text-xs text-gray-600 mb-2",children:"Currently assigned to:"}),g.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg",children:[g.jsx(Ds,{className:"w-4 h-4 text-blue-600"}),g.jsx("p",{className:"text-sm font-medium text-blue-900",children:r.assignedTo})]})]})]})]}),t&&g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Update Status"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("button",{onClick:()=>h("Pending"),disabled:r.status==="Pending",className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[g.jsx(ml,{className:"w-4 h-4"}),"Mark as Pending"]}),g.jsxs("button",{onClick:()=>h("In Progress"),disabled:r.status==="In Progress",className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[g.jsx(Bo,{className:"w-4 h-4"}),"Mark as In Progress"]}),g.jsxs("button",{onClick:()=>h("Resolved"),disabled:r.status==="Resolved",className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[g.jsx($o,{className:"w-4 h-4"}),"Mark as Resolved"]})]})]})]})]})})]})});function gC(){const[r,e]=he.useState(null),[t,s]=he.useState("login"),[o,l]=he.useState(null),[h,f]=he.useState(!0),[y,_]=he.useState([]),[E,I]=he.useState(!1);he.useEffect(()=>{I(!0);try{const G=JR(zo(gn,"service_requests"));return ek(G,ee=>{const re=ee.docs.map(N=>{const T=N.data(),R=typeof T.dateSubmitted=="string"?T.dateSubmitted:void 0,b=R?`REQ-${R.slice(0,10).replace(/-/g,"")}-${N.id.slice(0,4).toUpperCase()}`:`REQ-${N.id.slice(0,6).toUpperCase()}`;return{id:N.id,ticketNumber:T.ticketNumber||b,category:T.category||"",description:T.description||"",location:T.location||"",status:T.status||"Pending",studentName:T.studentName||"",studentId:T.studentId||"",dateSubmitted:T.dateSubmitted||"",assignedTo:T.assignedTo,imageUrl:T.imageUrl,statusUpdates:T.statusUpdates||[]}});_(re),I(!1),console.log("✓ Loaded requests from Firestore:",re.length)},ee=>{console.error("Error fetching requests:",ee),I(!1)})}catch(G){console.error("Error setting up Firestore listener:",G),I(!1)}},[]),he.useEffect(()=>EI(il,H=>{H||(e(null),s("login"),l(null)),f(!1)}),[]);const A=he.useCallback((G,H,ee)=>{e({name:G,role:H,id:ee}),s(H==="Admin"?"admin-dashboard":H==="Staff"||H==="Technician"?"staff-dashboard":"student-dashboard")},[]),F=he.useCallback(async()=>{try{await xI(il),e(null),s("login"),l(null),_([]),localStorage.clear()}catch(G){console.error("Logout error:",G)}},[]),q=he.useCallback(G=>{const H=`REQ${String(y.length+1).padStart(3,"0")}`,ee={...G,id:H,ticketNumber:H,status:"Pending",dateSubmitted:new Date().toISOString().split("T")[0],statusUpdates:[{status:"Pending",timestamp:new Date().toLocaleString(),note:"Request submitted"}]};_([ee,...y])},[y]),Q=he.useCallback(async(G,H)=>{_(ee=>ee.map(re=>{if(re.id===G){const N={...re,...H};return H.status&&H.status!==re.status&&(N.statusUpdates=[...re.statusUpdates,{status:H.status,timestamp:new Date().toLocaleString(),note:`Status updated to ${H.status}`}]),N}return re}));try{const ee={updatedAt:new Date};H.status&&(ee.status=H.status),H.assignedTo!==void 0&&(ee.assignedTo=H.assignedTo),H.statusUpdates&&(ee.statusUpdates=H.statusUpdates),await G0(Rs(gn,"service_requests",G),ee),console.log(`✓ Request ${G} updated in Firestore`)}catch(ee){console.error("Failed to persist update to Firestore:",ee)}},[]),$=he.useCallback(G=>{l(G),s("request-details")},[]),ie=he.useCallback(()=>{l(null),r?.role==="Admin"?s("admin-dashboard"):r?.role==="Staff"||r?.role==="Technician"?s("staff-dashboard"):s("student-dashboard")},[r?.role]),V=he.useMemo(()=>y.filter(G=>r&&G.studentId===r.id),[y,r?.id]);return g.jsx("div",{className:"min-h-screen bg-gray-50",children:h||E?g.jsx("div",{className:"flex items-center justify-center min-h-screen",children:g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"inline-block w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"}),g.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):g.jsxs(g.Fragment,{children:[t==="login"&&g.jsx(oC,{onLogin:A}),t==="student-dashboard"&&r&&g.jsx(hC,{user:r,requests:V,onAddRequest:q,onViewDetails:$,onLogout:F}),t==="admin-dashboard"&&r&&g.jsx(fC,{user:r,requests:y,onUpdateRequest:Q,onViewDetails:$,onLogout:F}),t==="staff-dashboard"&&r&&g.jsx(pC,{user:r,requests:y,onUpdateRequest:Q,onViewDetails:$,onLogout:F}),t==="request-details"&&o&&g.jsx(mC,{request:y.find(G=>G.id===o),onBack:ie,isAdmin:r?.role==="Admin",onUpdateRequest:Q})]})})}DE.createRoot(document.getElementById("root")).render(g.jsx(gC,{}));
