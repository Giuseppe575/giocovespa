var qd=Object.defineProperty;var Yd=(n,t,e)=>t in n?qd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Yt=(n,t,e)=>Yd(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="163",$d=0,Mc=1,Zd=2,wl=1,bl=2,Ln=3,ii=0,Be=1,Pe=2,Kn=0,ls=1,Sc=2,Ec=3,wc=4,Jd=5,Si=100,Kd=101,jd=102,Qd=103,tu=104,eu=200,nu=201,iu=202,su=203,wo=204,bo=205,au=206,ru=207,ou=208,cu=209,hu=210,lu=211,du=212,uu=213,fu=214,pu=0,mu=1,gu=2,Qa=3,_u=4,vu=5,xu=6,yu=7,Tl=0,Mu=1,Su=2,jn=0,Eu=1,wu=2,bu=3,Al=4,Tu=5,Au=6,Ru=7,Rl=300,ps=301,ms=302,To=303,Ao=304,gr=306,Js=1e3,Ti=1001,Ro=1002,Xe=1003,Cu=1004,fa=1005,sn=1006,Ir=1007,Ai=1008,Qn=1009,Pu=1010,Lu=1011,Cl=1012,Pl=1013,gs=1014,Nn=1015,tr=1016,Ll=1017,Il=1018,ra=1020,Iu=35902,Du=1021,Uu=1022,xn=1023,ku=1024,Nu=1025,ds=1026,Ks=1027,Dl=1028,Ul=1029,Hu=1030,kl=1031,Nl=1033,Dr=33776,Ur=33777,kr=33778,Nr=33779,bc=35840,Tc=35841,Ac=35842,Rc=35843,Hl=36196,Cc=37492,Pc=37496,Lc=37808,Ic=37809,Dc=37810,Uc=37811,kc=37812,Nc=37813,Hc=37814,Oc=37815,Fc=37816,zc=37817,Bc=37818,Gc=37819,Vc=37820,Wc=37821,Hr=36492,Xc=36494,qc=36495,Ou=36283,Yc=36284,$c=36285,Zc=36286,Fu=3200,zu=3201,Ol=0,Bu=1,Zn="",He="srgb",ri="srgb-linear",Jo="display-p3",_r="display-p3-linear",er="linear",oe="srgb",nr="rec709",ir="p3",Hi=7680,Jc=519,Gu=512,Vu=513,Wu=514,Fl=515,Xu=516,qu=517,Yu=518,$u=519,Kc=35044,jc=35048,Qc="300 es",Hn=2e3,sr=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const Fs=Math.PI/180,js=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function Ko(n,t){return(n%t+t)%t}function Zu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ju(n,t,e){return n!==t?(e-n)/(t-n):0}function zs(n,t,e){return(1-e)*n+e*t}function Ku(n,t,e,i){return zs(n,t,1-Math.exp(-e*i))}function ju(n,t=1){return t-Math.abs(Ko(n,t*2)-t)}function Qu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function t1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function e1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function n1(n,t){return n+Math.random()*(t-n)}function i1(n){return n*(.5-Math.random())}function s1(n){n!==void 0&&(th=n);let t=th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function a1(n){return n*Fs}function r1(n){return n*js}function o1(n){return(n&n-1)===0&&n!==0}function c1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function h1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function l1(n,t,e,i,s){const a=Math.cos,r=Math.sin,o=a(e/2),c=r(e/2),h=a((t+i)/2),l=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":n.set(o*l,c*d,c*f,o*h);break;case"YZY":n.set(c*f,o*l,c*d,o*h);break;case"ZXZ":n.set(c*d,c*f,o*l,o*h);break;case"XZX":n.set(o*l,c*g,c*p,o*h);break;case"YXY":n.set(c*p,o*l,c*g,o*h);break;case"ZYZ":n.set(c*g,c*p,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const eh={DEG2RAD:Fs,RAD2DEG:js,generateUUID:ki,clamp:Me,euclideanModulo:Ko,mapLinear:Zu,inverseLerp:Ju,lerp:zs,damp:Ku,pingpong:ju,smoothstep:Qu,smootherstep:t1,randInt:e1,randFloat:n1,randFloatSpread:i1,seededRandom:s1,degToRad:a1,radToDeg:r1,isPowerOfTwo:o1,ceilPowerOfTwo:c1,floorPowerOfTwo:h1,setQuaternionFromProperEuler:l1,normalize:Oe,denormalize:ss};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,s,a,r,o,c,h){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,c,h)}set(t,e,i,s,a,r,o,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=a,l[5]=c,l[6]=i,l[7]=r,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],c=i[6],h=i[1],l=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=s[0],u=s[3],m=s[6],S=s[1],v=s[4],w=s[7],U=s[2],R=s[5],T=s[8];return a[0]=r*_+o*S+c*U,a[3]=r*u+o*v+c*R,a[6]=r*m+o*w+c*T,a[1]=h*_+l*S+d*U,a[4]=h*u+l*v+d*R,a[7]=h*m+l*w+d*T,a[2]=f*_+p*S+g*U,a[5]=f*u+p*v+g*R,a[8]=f*m+p*w+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*r*l-e*o*h-i*a*l+i*o*c+s*a*h-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=l*r-o*h,f=o*c-l*a,p=h*a-r*c,g=e*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*h-l*i)*_,t[2]=(o*i-s*r)*_,t[3]=f*_,t[4]=(l*e-s*c)*_,t[5]=(s*a-o*e)*_,t[6]=p*_,t[7]=(i*c-h*e)*_,t[8]=(r*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){const c=Math.cos(a),h=Math.sin(a);return this.set(i*c,i*h,-i*(c*r+h*o)+r+t,-s*h,s*c,-s*(-h*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new Xt;function zl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d1(){const n=Qs("canvas");return n.style.display="block",n}const nh={};function u1(n){n in nh||(nh[n]=!0,console.warn(n))}const ih=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pa={[ri]:{transfer:er,primaries:nr,toReference:n=>n,fromReference:n=>n},[He]:{transfer:oe,primaries:nr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_r]:{transfer:er,primaries:ir,toReference:n=>n.applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih)},[Jo]:{transfer:oe,primaries:ir,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih).convertLinearToSRGB()}},f1=new Set([ri,_r]),se={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!f1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=pa[t].toReference,s=pa[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return pa[n].primaries},getTransfer:function(n){return n===Zn?er:pa[n].transfer}};function us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class p1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Qs("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=us(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(us(e[i]/255)*255):e[i]=us(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let m1=0;class Bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(zr(s[r].image)):a.push(zr(s[r]))}else a=zr(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function zr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?p1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g1=0;class Ie extends Ms{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=Ti,s=Ti,a=sn,r=Ai,o=xn,c=Qn,h=Ie.DEFAULT_ANISOTROPY,l=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=ki(),this.name="",this.source=new Bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Rl;Ie.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const c=t.elements,h=c[0],l=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],u=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(l+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+u)<.1&&Math.abs(h+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(h+1)/2,w=(p+1)/2,U=(m+1)/2,R=(l+f)/4,T=(d+_)/4,I=(g+u)/4;return v>w&&v>U?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=R/i,a=T/i):w>U?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=R/s,a=I/s):U<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(U),i=T/a,s=I/a),this.set(i,s,a,e),this}let S=Math.sqrt((u-g)*(u-g)+(d-_)*(d-_)+(f-l)*(f-l));return Math.abs(S)<.001&&(S=1),this.x=(u-g)/S,this.y=(d-_)/S,this.z=(f-l)/S,this.w=Math.acos((h+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _1 extends Ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new Ie(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends _1{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gl extends Ie{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v1 extends Ie{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let c=i[s+0],h=i[s+1],l=i[s+2],d=i[s+3];const f=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||h!==p||l!==g){let u=1-o;const m=c*f+h*p+l*g+d*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const U=Math.sqrt(v),R=Math.atan2(U,m*S);u=Math.sin(u*R)/U,o=Math.sin(o*R)/U}const w=o*S;if(c=c*u+f*w,h=h*u+p*w,l=l*u+g*w,d=d*u+_*w,u===1-o){const U=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=U,h*=U,l*=U,d*=U}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,a,r){const o=i[s],c=i[s+1],h=i[s+2],l=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+l*d+c*p-h*f,t[e+1]=c*g+l*f+h*d-o*p,t[e+2]=h*g+l*p+o*f-c*d,t[e+3]=l*g-o*d-c*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,h=o(i/2),l=o(s/2),d=o(a/2),f=c(i/2),p=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=f*l*d+h*p*g,this._y=h*p*d-f*l*g,this._z=h*l*g+f*p*d,this._w=h*l*d-f*p*g;break;case"YXZ":this._x=f*l*d+h*p*g,this._y=h*p*d-f*l*g,this._z=h*l*g-f*p*d,this._w=h*l*d+f*p*g;break;case"ZXY":this._x=f*l*d-h*p*g,this._y=h*p*d+f*l*g,this._z=h*l*g+f*p*d,this._w=h*l*d-f*p*g;break;case"ZYX":this._x=f*l*d-h*p*g,this._y=h*p*d+f*l*g,this._z=h*l*g-f*p*d,this._w=h*l*d+f*p*g;break;case"YZX":this._x=f*l*d+h*p*g,this._y=h*p*d+f*l*g,this._z=h*l*g-f*p*d,this._w=h*l*d-f*p*g;break;case"XZY":this._x=f*l*d-h*p*g,this._y=h*p*d-f*l*g,this._z=h*l*g+f*p*d,this._w=h*l*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],c=e[9],h=e[2],l=e[6],d=e[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(a-h)*p,this._z=(r-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(l-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+h)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(a-h)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=i*l+r*o+s*h-a*c,this._y=s*l+r*c+a*o-i*h,this._z=a*l+r*h+i*c-s*o,this._w=r*l-i*o-s*c-a*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),d=Math.sin((1-e)*l)/h,f=Math.sin(e*l)/h;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,c=t.w,h=2*(r*s-o*i),l=2*(o*e-a*s),d=2*(a*i-r*e);return this.x=e+c*h+r*d-o*l,this.y=i+c*l+o*h-a*d,this.z=s+c*d+a*l-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new P,ah=new oa;class Ni{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,tn):tn.fromBufferAttribute(a,r),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ga.subVectors(this.max,ws),Fi.subVectors(t.a,ws),zi.subVectors(t.b,ws),Bi.subVectors(t.c,ws),Gn.subVectors(zi,Fi),Vn.subVectors(Bi,zi),di.subVectors(Fi,Bi);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-di.z,di.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,di.z,0,-di.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-di.y,di.x,0];return!Gr(e,Fi,zi,Bi,ga)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,Fi,zi,Bi,ga))?!1:(_a.crossVectors(Gn,Vn),e=[_a.x,_a.y,_a.z],Gr(e,Fi,zi,Bi,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new P,new P,new P,new P,new P,new P,new P,new P],tn=new P,ma=new Ni,Fi=new P,zi=new P,Bi=new P,Gn=new P,Vn=new P,di=new P,ws=new P,ga=new P,_a=new P,ui=new P;function Gr(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){ui.fromArray(n,a);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),h=e.dot(ui),l=i.dot(ui);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const x1=new Ni,bs=new P,Vr=new P;class ca{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):x1.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Vr)),this.expandByPoint(bs.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new P,Wr=new P,va=new P,Wn=new P,Xr=new P,xa=new P,qr=new P;class y1{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wr.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(Wr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(va),o=Wn.dot(this.direction),c=-Wn.dot(va),h=Wn.lengthSq(),l=Math.abs(1-r*r);let d,f,p,g;if(l>0)if(d=r*c-o,f=r*o-c,g=a*l,d>=0)if(f>=-g)if(f<=g){const _=1/l;d*=_,f*=_,p=d*(d+r*f+2*o)+f*(r*d+f+2*c)+h}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+h;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+h;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+h):f<=g?(d=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+h):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+h);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wr).addScaledVector(va,f),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,c;const h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),l>=0?(a=(t.min.y-f.y)*l,r=(t.max.y-f.y)*l):(a=(t.max.y-f.y)*l,r=(t.min.y-f.y)*l),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,s,a){Xr.subVectors(e,t),xa.subVectors(i,t),qr.crossVectors(Xr,xa);let r=this.direction.dot(qr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Wn.subVectors(this.origin,t);const c=o*this.direction.dot(xa.crossVectors(Wn,xa));if(c<0)return null;const h=o*this.direction.dot(Xr.cross(Wn));if(h<0||c+h>r)return null;const l=-o*Wn.dot(qr);return l<0?null:this.at(l/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,a,r,o,c,h,l,d,f,p,g,_,u){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,c,h,l,d,f,p,g,_,u)}set(t,e,i,s,a,r,o,c,h,l,d,f,p,g,_,u){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=h,m[6]=l,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),a=1/Gi.setFromMatrixColumn(t,1).length(),r=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s),l=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const f=r*l,p=r*d,g=o*l,_=o*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=p+g*h,e[5]=f-_*h,e[9]=-o*c,e[2]=_-f*h,e[6]=g+p*h,e[10]=r*c}else if(t.order==="YXZ"){const f=c*l,p=c*d,g=h*l,_=h*d;e[0]=f+_*o,e[4]=g*o-p,e[8]=r*h,e[1]=r*d,e[5]=r*l,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=r*c}else if(t.order==="ZXY"){const f=c*l,p=c*d,g=h*l,_=h*d;e[0]=f-_*o,e[4]=-r*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*l,e[9]=_-f*o,e[2]=-r*h,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const f=r*l,p=r*d,g=o*l,_=o*d;e[0]=c*l,e[4]=g*h-p,e[8]=f*h+_,e[1]=c*d,e[5]=_*h+f,e[9]=p*h-g,e[2]=-h,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*h,g=o*c,_=o*h;e[0]=c*l,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=r*l,e[9]=-o*l,e[2]=-h*l,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=r*c,p=r*h,g=o*c,_=o*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=f*d+_,e[5]=r*l,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*l,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M1,t,S1)}lookAt(t,e,i){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Xn.crossVectors(i,$e),Xn.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Xn.crossVectors(i,$e)),Xn.normalize(),ya.crossVectors($e,Xn),s[0]=Xn.x,s[4]=ya.x,s[8]=$e.x,s[1]=Xn.y,s[5]=ya.y,s[9]=$e.y,s[2]=Xn.z,s[6]=ya.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],c=i[8],h=i[12],l=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],u=i[10],m=i[14],S=i[3],v=i[7],w=i[11],U=i[15],R=s[0],T=s[4],I=s[8],M=s[12],y=s[1],L=s[5],D=s[9],A=s[13],O=s[2],N=s[6],X=s[10],Y=s[14],z=s[3],j=s[7],K=s[11],ct=s[15];return a[0]=r*R+o*y+c*O+h*z,a[4]=r*T+o*L+c*N+h*j,a[8]=r*I+o*D+c*X+h*K,a[12]=r*M+o*A+c*Y+h*ct,a[1]=l*R+d*y+f*O+p*z,a[5]=l*T+d*L+f*N+p*j,a[9]=l*I+d*D+f*X+p*K,a[13]=l*M+d*A+f*Y+p*ct,a[2]=g*R+_*y+u*O+m*z,a[6]=g*T+_*L+u*N+m*j,a[10]=g*I+_*D+u*X+m*K,a[14]=g*M+_*A+u*Y+m*ct,a[3]=S*R+v*y+w*O+U*z,a[7]=S*T+v*L+w*N+U*j,a[11]=S*I+v*D+w*X+U*K,a[15]=S*M+v*A+w*Y+U*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],c=t[9],h=t[13],l=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],u=t[11],m=t[15];return g*(+a*c*d-s*h*d-a*o*f+i*h*f+s*o*p-i*c*p)+_*(+e*c*p-e*h*f+a*r*f-s*r*p+s*h*l-a*c*l)+u*(+e*h*d-e*o*p-a*r*d+i*r*p+a*o*l-i*h*l)+m*(-s*o*l-e*c*d+e*o*f+s*r*d-i*r*f+i*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],u=t[14],m=t[15],S=d*u*h-_*f*h+_*c*p-o*u*p-d*c*m+o*f*m,v=g*f*h-l*u*h-g*c*p+r*u*p+l*c*m-r*f*m,w=l*_*h-g*d*h+g*o*p-r*_*p-l*o*m+r*d*m,U=g*d*c-l*_*c-g*o*f+r*_*f+l*o*u-r*d*u,R=e*S+i*v+s*w+a*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=S*T,t[1]=(_*f*a-d*u*a-_*s*p+i*u*p+d*s*m-i*f*m)*T,t[2]=(o*u*a-_*c*a+_*s*h-i*u*h-o*s*m+i*c*m)*T,t[3]=(d*c*a-o*f*a-d*s*h+i*f*h+o*s*p-i*c*p)*T,t[4]=v*T,t[5]=(l*u*a-g*f*a+g*s*p-e*u*p-l*s*m+e*f*m)*T,t[6]=(g*c*a-r*u*a-g*s*h+e*u*h+r*s*m-e*c*m)*T,t[7]=(r*f*a-l*c*a+l*s*h-e*f*h-r*s*p+e*c*p)*T,t[8]=w*T,t[9]=(g*d*a-l*_*a-g*i*p+e*_*p+l*i*m-e*d*m)*T,t[10]=(r*_*a-g*o*a+g*i*h-e*_*h-r*i*m+e*o*m)*T,t[11]=(l*o*a-r*d*a-l*i*h+e*d*h+r*i*p-e*o*p)*T,t[12]=U*T,t[13]=(l*_*s-g*d*s+g*i*f-e*_*f-l*i*u+e*d*u)*T,t[14]=(g*o*s-r*_*s-g*i*c+e*_*c+r*i*u-e*o*u)*T,t[15]=(r*d*s-l*o*s+l*i*c-e*d*c-r*i*f+e*o*f)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,c=t.z,h=a*r,l=a*o;return this.set(h*r+i,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+i,l*c-s*r,0,h*c-s*o,l*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,h=a+a,l=r+r,d=o+o,f=a*h,p=a*l,g=a*d,_=r*l,u=r*d,m=o*d,S=c*h,v=c*l,w=c*d,U=i.x,R=i.y,T=i.z;return s[0]=(1-(_+m))*U,s[1]=(p+w)*U,s[2]=(g-v)*U,s[3]=0,s[4]=(p-w)*R,s[5]=(1-(f+m))*R,s[6]=(u+S)*R,s[7]=0,s[8]=(g+v)*T,s[9]=(u-S)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=Gi.set(s[0],s[1],s[2]).length();const r=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const h=1/a,l=1/r,d=1/o;return en.elements[0]*=h,en.elements[1]*=h,en.elements[2]*=h,en.elements[4]*=l,en.elements[5]*=l,en.elements[6]*=l,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,e.setFromRotationMatrix(en),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,s,a,r,o=Hn){const c=this.elements,h=2*a/(e-t),l=2*a/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(o===Hn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===sr)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Hn){const c=this.elements,h=1/(e-t),l=1/(i-s),d=1/(r-a),f=(e+t)*h,p=(i+s)*l;let g,_;if(o===Hn)g=(r+a)*d,_=-2*d;else if(o===sr)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Gi=new P,en=new le,M1=new P(0,0,0),S1=new P(1,1,1),Xn=new P,ya=new P,$e=new P,rh=new le,oh=new oa;class Mn{constructor(t=0,e=0,i=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],c=s[1],h=s[5],l=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let E1=0;const ch=new P,Vi=new oa,An=new le,Ma=new P,Ts=new P,w1=new P,b1=new oa,hh=new P(1,0,0),lh=new P(0,1,0),dh=new P(0,0,1),uh={type:"added"},T1={type:"removed"},Wi={type:"childadded",child:null},Yr={type:"childremoved",child:null};class ee extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ee.DEFAULT_UP.clone();const t=new P,e=new Mn,i=new oa,s=new P(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Xt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ts,Ma,this.up):An.lookAt(Ma,Ts,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(An),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(T1),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,w1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,b1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++){const o=s[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const d=c[h];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(a(t.materials,this.material[c]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),h=r(t.textures),l=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ee.DEFAULT_UP=new P(0,1,0);ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new P,Rn=new P,$r=new P,Cn=new P,Xi=new P,qi=new P,fh=new P,Zr=new P,Jr=new P,Kr=new P;class mn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),nn.subVectors(t,e),s.cross(nn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){nn.subVectors(s,e),Rn.subVectors(i,e),$r.subVectors(t,e);const r=nn.dot(nn),o=nn.dot(Rn),c=nn.dot($r),h=Rn.dot(Rn),l=Rn.dot($r),d=r*h-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,p=(h*c-o*l)*f,g=(r*l-o*c)*f;return a.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,i,s,a,r,o,c){return this.getBarycoord(t,e,i,s,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Cn.x),c.addScaledVector(r,Cn.y),c.addScaledVector(o,Cn.z),c)}static isFrontFacing(t,e,i,s){return nn.subVectors(i,e),Rn.subVectors(t,e),nn.cross(Rn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),nn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let r,o;Xi.subVectors(s,i),qi.subVectors(a,i),Zr.subVectors(t,i);const c=Xi.dot(Zr),h=qi.dot(Zr);if(c<=0&&h<=0)return e.copy(i);Jr.subVectors(t,s);const l=Xi.dot(Jr),d=qi.dot(Jr);if(l>=0&&d<=l)return e.copy(s);const f=c*d-l*h;if(f<=0&&c>=0&&l<=0)return r=c/(c-l),e.copy(i).addScaledVector(Xi,r);Kr.subVectors(t,a);const p=Xi.dot(Kr),g=qi.dot(Kr);if(g>=0&&p<=g)return e.copy(a);const _=p*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(qi,o);const u=l*g-p*d;if(u<=0&&d-l>=0&&p-g>=0)return fh.subVectors(a,s),o=(d-l)/(d-l+(p-g)),e.copy(s).addScaledVector(fh,o);const m=1/(u+_+f);return r=_*m,o=f*m,e.copy(i).addScaledVector(Xi,r).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function jr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Ko(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=jr(r,a,t+1/3),this.g=jr(r,a,t),this.b=jr(r,a,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const i=Wl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return se.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Me(Ne.r*255,0,255))*65536+Math.round(Me(Ne.g*255,0,255))*256+Math.round(Me(Ne.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,s=Ne.g,a=Ne.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let c,h;const l=(o+r)/2;if(o===r)c=0,h=0;else{const d=r-o;switch(h=l<=.5?d/(r+o):d/(2-r-o),r){case i:c=(s-a)/d+(s<a?6:0);break;case s:c=(a-i)/d+2;break;case a:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=He){se.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,s=Ne.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Sa);const i=zs(qn.h,Sa.h,e),s=zs(qn.s,Sa.s,e),a=zs(qn.l,Sa.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Gt;Gt.NAMES=Wl;let A1=0;class ha extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ls,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=bo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wo&&(i.blendSrc=this.blendSrc),this.blendDst!==bo&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xl extends ha{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new P,Ea=new et;class Ge{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return u1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),a=Oe(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}}class ql extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yl extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Jt extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}}let R1=0;const Ke=new le,Qr=new ee,Yi=new P,Ze=new Ni,As=new Ni,Te=new P;class we extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zl(t)?Yl:ql)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Xt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Ze.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ze.min,As.min),Ze.expandByPoint(Te),Te.addVectors(Ze.max,As.max),Ze.expandByPoint(Te)):(Ze.expandByPoint(As.min),Ze.expandByPoint(As.max))}Ze.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Te.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Te));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Te.fromBufferAttribute(o,h),c&&(Yi.fromBufferAttribute(t,h),Te.add(Yi)),s=Math.max(s,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new P,c[I]=new P;const h=new P,l=new P,d=new P,f=new et,p=new et,g=new et,_=new P,u=new P;function m(I,M,y){h.fromBufferAttribute(i,I),l.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),f.fromBufferAttribute(a,I),p.fromBufferAttribute(a,M),g.fromBufferAttribute(a,y),l.sub(h),d.sub(h),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),u.copy(d).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(L),o[I].add(_),o[M].add(_),o[y].add(_),c[I].add(u),c[M].add(u),c[y].add(u))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,M=S.length;I<M;++I){const y=S[I],L=y.start,D=y.count;for(let A=L,O=L+D;A<O;A+=3)m(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const v=new P,w=new P,U=new P,R=new P;function T(I){U.fromBufferAttribute(s,I),R.copy(U);const M=o[I];v.copy(M),v.sub(U.multiplyScalar(U.dot(M))).normalize(),w.crossVectors(R,M);const L=w.dot(c[I])<0?-1:1;r.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,M=S.length;I<M;++I){const y=S[I],L=y.start,D=y.count;for(let A=L,O=L+D;A<O;A+=3)T(t.getX(A+0)),T(t.getX(A+1)),T(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new P,a=new P,r=new P,o=new P,c=new P,h=new P,l=new P,d=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),u=t.getX(f+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,u),l.subVectors(r,a),d.subVectors(s,a),l.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,u),o.add(l),c.add(l),h.add(l),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(u,h.x,h.y,h.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),l.subVectors(r,a),d.subVectors(s,a),l.cross(d),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const h=o.array,l=o.itemSize,d=o.normalized,f=new h.constructor(c.length*l);let p=0,g=0;for(let _=0,u=c.length;_<u;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*l;for(let m=0;m<l;m++)f[g++]=h[p++]}return new Ge(f,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=t(c,i);e.setAttribute(o,h)}const a=this.morphAttributes;for(const o in a){const c=[],h=a[o];for(let l=0,d=h.length;l<d;l++){const f=h[l],p=t(f,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const h=r[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let d=0,f=h.length;d<f;d++){const p=h[d];l.push(p.toJSON(t.data))}l.length>0&&(s[c]=l,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const a=t.morphAttributes;for(const h in a){const l=[],d=a[h];for(let f=0,p=d.length;f<p;f++)l.push(d[f].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,l=r.length;h<l;h++){const d=r[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new le,fi=new y1,wa=new ca,mh=new P,$i=new P,Zi=new P,Ji=new P,to=new P,ba=new P,Ta=new et,Aa=new et,Ra=new et,gh=new P,_h=new P,vh=new P,Ca=new P,Pa=new P;class Q extends ee{constructor(t=new we,e=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){ba.set(0,0,0);for(let c=0,h=a.length;c<h;c++){const l=o[c],d=a[c];l!==0&&(to.fromBufferAttribute(d,t),r?ba.addScaledVector(to,l):ba.addScaledVector(to.sub(e),l))}e.add(ba)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(a),fi.copy(t.ray).recast(t.near),!(wa.containsPoint(fi.origin)===!1&&(fi.intersectSphere(wa,mh)===null||fi.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(a).invert(),fi.copy(t.ray).applyMatrix4(ph),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,i){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,h=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const u=f[g],m=r[u.materialIndex],S=Math.max(u.start,p.start),v=Math.min(o.count,Math.min(u.start+u.count,p.start+p.count));for(let w=S,U=v;w<U;w+=3){const R=o.getX(w),T=o.getX(w+1),I=o.getX(w+2);s=La(this,m,t,i,h,l,d,R,T,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let u=g,m=_;u<m;u+=3){const S=o.getX(u),v=o.getX(u+1),w=o.getX(u+2);s=La(this,r,t,i,h,l,d,S,v,w),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const u=f[g],m=r[u.materialIndex],S=Math.max(u.start,p.start),v=Math.min(c.count,Math.min(u.start+u.count,p.start+p.count));for(let w=S,U=v;w<U;w+=3){const R=w,T=w+1,I=w+2;s=La(this,m,t,i,h,l,d,R,T,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let u=g,m=_;u<m;u+=3){const S=u,v=u+1,w=u+2;s=La(this,r,t,i,h,l,d,S,v,w),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function C1(n,t,e,i,s,a,r,o){let c;if(t.side===Be?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,t.side===ii,o),c===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Pa);return h<e.near||h>e.far?null:{distance:h,point:Pa.clone(),object:n}}function La(n,t,e,i,s,a,r,o,c,h){n.getVertexPosition(o,$i),n.getVertexPosition(c,Zi),n.getVertexPosition(h,Ji);const l=C1(n,t,e,i,$i,Zi,Ji,Ca);if(l){s&&(Ta.fromBufferAttribute(s,o),Aa.fromBufferAttribute(s,c),Ra.fromBufferAttribute(s,h),l.uv=mn.getInterpolation(Ca,$i,Zi,Ji,Ta,Aa,Ra,new et)),a&&(Ta.fromBufferAttribute(a,o),Aa.fromBufferAttribute(a,c),Ra.fromBufferAttribute(a,h),l.uv1=mn.getInterpolation(Ca,$i,Zi,Ji,Ta,Aa,Ra,new et)),r&&(gh.fromBufferAttribute(r,o),_h.fromBufferAttribute(r,c),vh.fromBufferAttribute(r,h),l.normal=mn.getInterpolation(Ca,$i,Zi,Ji,gh,_h,vh,new P),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new P,materialIndex:0};mn.getNormal($i,Zi,Ji,d.normal),l.face=d}return l}class wt extends we{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],h=[],l=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(d,2));function g(_,u,m,S,v,w,U,R,T,I,M){const y=w/T,L=U/I,D=w/2,A=U/2,O=R/2,N=T+1,X=I+1;let Y=0,z=0;const j=new P;for(let K=0;K<X;K++){const ct=K*L-A;for(let Rt=0;Rt<N;Rt++){const qt=Rt*y-D;j[_]=qt*S,j[u]=ct*v,j[m]=O,h.push(j.x,j.y,j.z),j[_]=0,j[u]=0,j[m]=R>0?1:-1,l.push(j.x,j.y,j.z),d.push(Rt/T),d.push(1-K/I),Y+=1}}for(let K=0;K<I;K++)for(let ct=0;ct<T;ct++){const Rt=f+ct+N*K,qt=f+ct+N*(K+1),V=f+(ct+1)+N*(K+1),it=f+(ct+1)+N*K;c.push(Rt,qt,it),c.push(qt,V,it),z+=6}o.addGroup(p,z,M),p+=z,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _s(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=_s(n[e]);for(const s in i)t[s]=i[s]}return t}function P1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $l(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Zl={clone:_s,merge:Fe};var L1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ha{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L1,this.fragmentShader=I1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=P1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jl extends ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new P,xh=new et,yh=new et;class Qe extends Jl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,xh,yh),e.subVectors(yh,xh)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,h=r.fullHeight;a+=r.offsetX*s/c,e-=r.offsetY*i/h,s*=r.width/c,i*=r.height/h}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,ji=1;class D1 extends ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Ki,ji,t,e);s.layers=this.layers,this.add(s);const a=new Qe(Ki,ji,t,e);a.layers=this.layers,this.add(a);const r=new Qe(Ki,ji,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Ki,ji,t,e);o.layers=this.layers,this.add(o);const c=new Qe(Ki,ji,t,e);c.layers=this.layers,this.add(c);const h=new Qe(Ki,ji,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,c]=e;for(const h of e)this.remove(h);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,h,l]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,l),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kl extends Ie{constructor(t,e,i,s,a,r,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,i,s,a,r,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class U1 extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wt(5,5,5),a=new Fn({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Kn});a.uniforms.tEquirect.value=e;const r=new Q(s,a),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=sn),new D1(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}}const eo=new P,k1=new P,N1=new Xt;class yi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=eo.subVectors(i,e).cross(k1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(eo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||N1.getNormalMatrix(t),s=this.coplanarPoint(eo).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ca,Ia=new P;class jo{constructor(t=new yi,e=new yi,i=new yi,s=new yi,a=new yi,r=new yi){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn){const i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],c=s[3],h=s[4],l=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],u=s[11],m=s[12],S=s[13],v=s[14],w=s[15];if(i[0].setComponents(c-a,f-h,u-p,w-m).normalize(),i[1].setComponents(c+a,f+h,u+p,w+m).normalize(),i[2].setComponents(c+r,f+l,u+g,w+S).normalize(),i[3].setComponents(c-r,f-l,u-g,w-S).normalize(),i[4].setComponents(c-o,f-d,u-_,w-v).normalize(),e===Hn)i[5].setComponents(c+o,f+d,u+_,w+v).normalize();else if(e===sr)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jl(){let n=null,t=!1,e=null,i=null;function s(a,r){e(a,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function H1(n){const t=new WeakMap;function e(o,c){const h=o.array,l=o.usage,d=h.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,h,l),o.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,h){const l=c.array,d=c._updateRange,f=c.updateRanges;if(n.bindBuffer(h,o),d.count===-1&&f.length===0&&n.bufferSubData(h,0,l),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(h,d.offset*l.BYTES_PER_ELEMENT,l,d.offset,d.count),d.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,c),h.version=o.version}}return{get:s,remove:a,update:r}}class on extends we{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(i),c=Math.floor(s),h=o+1,l=c+1,d=t/o,f=e/c,p=[],g=[],_=[],u=[];for(let m=0;m<l;m++){const S=m*f-r;for(let v=0;v<h;v++){const w=v*d-a;g.push(w,-S,0),_.push(0,0,1),u.push(v/o),u.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const v=S+h*m,w=S+h*(m+1),U=S+1+h*(m+1),R=S+1+h*m;p.push(v,w,R),p.push(w,U,R)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}var O1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,r2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,o2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p2="gl_FragColor = linearToOutputTexel( gl_FragColor );",m2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,g2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,If=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Df=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$f=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,op=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:O1,alphahash_pars_fragment:F1,alphamap_fragment:z1,alphamap_pars_fragment:B1,alphatest_fragment:G1,alphatest_pars_fragment:V1,aomap_fragment:W1,aomap_pars_fragment:X1,batching_pars_vertex:q1,batching_vertex:Y1,begin_vertex:$1,beginnormal_vertex:Z1,bsdfs:J1,iridescence_fragment:K1,bumpmap_pars_fragment:j1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:t2,clipping_planes_pars_vertex:e2,clipping_planes_vertex:n2,color_fragment:i2,color_pars_fragment:s2,color_pars_vertex:a2,color_vertex:r2,common:o2,cube_uv_reflection_fragment:c2,defaultnormal_vertex:h2,displacementmap_pars_vertex:l2,displacementmap_vertex:d2,emissivemap_fragment:u2,emissivemap_pars_fragment:f2,colorspace_fragment:p2,colorspace_pars_fragment:m2,envmap_fragment:g2,envmap_common_pars_fragment:_2,envmap_pars_fragment:v2,envmap_pars_vertex:x2,envmap_physical_pars_fragment:L2,envmap_vertex:y2,fog_vertex:M2,fog_pars_vertex:S2,fog_fragment:E2,fog_pars_fragment:w2,gradientmap_pars_fragment:b2,lightmap_fragment:T2,lightmap_pars_fragment:A2,lights_lambert_fragment:R2,lights_lambert_pars_fragment:C2,lights_pars_begin:P2,lights_toon_fragment:I2,lights_toon_pars_fragment:D2,lights_phong_fragment:U2,lights_phong_pars_fragment:k2,lights_physical_fragment:N2,lights_physical_pars_fragment:H2,lights_fragment_begin:O2,lights_fragment_maps:F2,lights_fragment_end:z2,logdepthbuf_fragment:B2,logdepthbuf_pars_fragment:G2,logdepthbuf_pars_vertex:V2,logdepthbuf_vertex:W2,map_fragment:X2,map_pars_fragment:q2,map_particle_fragment:Y2,map_particle_pars_fragment:$2,metalnessmap_fragment:Z2,metalnessmap_pars_fragment:J2,morphinstance_vertex:K2,morphcolor_vertex:j2,morphnormal_vertex:Q2,morphtarget_pars_vertex:tf,morphtarget_vertex:ef,normal_fragment_begin:nf,normal_fragment_maps:sf,normal_pars_fragment:af,normal_pars_vertex:rf,normal_vertex:of,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:df,iridescence_pars_fragment:uf,opaque_fragment:ff,packing:pf,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:_f,dithering_pars_fragment:vf,roughnessmap_fragment:xf,roughnessmap_pars_fragment:yf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Sf,shadowmap_vertex:Ef,shadowmask_pars_fragment:wf,skinbase_vertex:bf,skinning_pars_vertex:Tf,skinning_vertex:Af,skinnormal_vertex:Rf,specularmap_fragment:Cf,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:If,transmission_fragment:Df,transmission_pars_fragment:Uf,uv_pars_fragment:kf,uv_pars_vertex:Nf,uv_vertex:Hf,worldpos_vertex:Of,background_vert:Ff,background_frag:zf,backgroundCube_vert:Bf,backgroundCube_frag:Gf,cube_vert:Vf,cube_frag:Wf,depth_vert:Xf,depth_frag:qf,distanceRGBA_vert:Yf,distanceRGBA_frag:$f,equirect_vert:Zf,equirect_frag:Jf,linedashed_vert:Kf,linedashed_frag:jf,meshbasic_vert:Qf,meshbasic_frag:tp,meshlambert_vert:ep,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:sp,meshnormal_vert:ap,meshnormal_frag:rp,meshphong_vert:op,meshphong_frag:cp,meshphysical_vert:hp,meshphysical_frag:lp,meshtoon_vert:dp,meshtoon_frag:up,points_vert:fp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:vp},pt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},un={basic:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Fe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Fe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Fe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Fe([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Fe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Fe([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Fe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Fe([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Fe([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Fe([pt.lights,pt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};un.physical={uniforms:Fe([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Da={r:0,b:0,g:0},mi=new Mn,xp=new le;function yp(n,t,e,i,s,a,r){const o=new Gt(0);let c=a===!0?0:1,h,l,d=null,f=0,p=null;function g(u,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gr)?(l===void 0&&(l=new Q(new wt(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:_s(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),mi.copy(m.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xp.makeRotationFromEuler(mi)),l.material.toneMapped=se.getTransfer(v.colorSpace)!==oe,(d!==v||f!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),l.layers.enableAll(),u.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Q(new on(2,2),new Fn({name:"BackgroundMaterial",uniforms:_s(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=se.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null))}function _(u,m){u.getRGB(Da,$l(n)),i.buffers.color.setClear(Da.r,Da.g,Da.b,m,r)}return{getClearColor:function(){return o},setClearColor:function(u,m=1){o.set(u),c=m,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(u){c=u,_(o,c)},render:g}}function Mp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let a=s,r=!1;function o(y,L,D,A,O){let N=!1;const X=d(A,D,L);a!==X&&(a=X,h(a.object)),N=p(y,A,D,O),N&&g(y,A,D,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,w(y,L,D,A),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function h(y){return n.bindVertexArray(y)}function l(y){return n.deleteVertexArray(y)}function d(y,L,D){const A=D.wireframe===!0;let O=i[y.id];O===void 0&&(O={},i[y.id]=O);let N=O[L.id];N===void 0&&(N={},O[L.id]=N);let X=N[A];return X===void 0&&(X=f(c()),N[A]=X),X}function f(y){const L=[],D=[],A=[];for(let O=0;O<e;O++)L[O]=0,D[O]=0,A[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:A,object:y,attributes:{},index:null}}function p(y,L,D,A){const O=a.attributes,N=L.attributes;let X=0;const Y=D.getAttributes();for(const z in Y)if(Y[z].location>=0){const K=O[z];let ct=N[z];if(ct===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),K===void 0||K.attribute!==ct||ct&&K.data!==ct.data)return!0;X++}return a.attributesNum!==X||a.index!==A}function g(y,L,D,A){const O={},N=L.attributes;let X=0;const Y=D.getAttributes();for(const z in Y)if(Y[z].location>=0){let K=N[z];K===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const ct={};ct.attribute=K,K&&K.data&&(ct.data=K.data),O[z]=ct,X++}a.attributes=O,a.attributesNum=X,a.index=A}function _(){const y=a.newAttributes;for(let L=0,D=y.length;L<D;L++)y[L]=0}function u(y){m(y,0)}function m(y,L){const D=a.newAttributes,A=a.enabledAttributes,O=a.attributeDivisors;D[y]=1,A[y]===0&&(n.enableVertexAttribArray(y),A[y]=1),O[y]!==L&&(n.vertexAttribDivisor(y,L),O[y]=L)}function S(){const y=a.newAttributes,L=a.enabledAttributes;for(let D=0,A=L.length;D<A;D++)L[D]!==y[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function v(y,L,D,A,O,N,X){X===!0?n.vertexAttribIPointer(y,L,D,O,N):n.vertexAttribPointer(y,L,D,A,O,N)}function w(y,L,D,A){_();const O=A.attributes,N=D.getAttributes(),X=L.defaultAttributeValues;for(const Y in N){const z=N[Y];if(z.location>=0){let j=O[Y];if(j===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const K=j.normalized,ct=j.itemSize,Rt=t.get(j);if(Rt===void 0)continue;const qt=Rt.buffer,V=Rt.type,it=Rt.bytesPerElement,ut=V===n.INT||V===n.UNSIGNED_INT||j.gpuType===Pl;if(j.isInterleavedBufferAttribute){const rt=j.data,Tt=rt.stride,Pt=j.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<z.locationSize;Nt++)m(z.location+Nt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<z.locationSize;Nt++)u(z.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Nt=0;Nt<z.locationSize;Nt++)v(z.location+Nt,ct/z.locationSize,V,K,Tt*it,(Pt+ct/z.locationSize*Nt)*it,ut)}else{if(j.isInstancedBufferAttribute){for(let rt=0;rt<z.locationSize;rt++)m(z.location+rt,j.meshPerAttribute);y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let rt=0;rt<z.locationSize;rt++)u(z.location+rt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let rt=0;rt<z.locationSize;rt++)v(z.location+rt,ct/z.locationSize,V,K,ct*it,ct/z.locationSize*rt*it,ut)}}else if(X!==void 0){const K=X[Y];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(z.location,K);break;case 3:n.vertexAttrib3fv(z.location,K);break;case 4:n.vertexAttrib4fv(z.location,K);break;default:n.vertexAttrib1fv(z.location,K)}}}}S()}function U(){I();for(const y in i){const L=i[y];for(const D in L){const A=L[D];for(const O in A)l(A[O].object),delete A[O];delete L[D]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const D in L){const A=L[D];for(const O in A)l(A[O].object),delete A[O];delete L[D]}delete i[y.id]}function T(y){for(const L in i){const D=i[L];if(D[y.id]===void 0)continue;const A=D[y.id];for(const O in A)l(A[O].object),delete A[O];delete D[y.id]}}function I(){M(),r=!0,a!==s&&(a=s,h(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:u,disableUnusedAttributes:S}}function Sp(n,t,e){let i;function s(c){i=c}function a(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,l){l!==0&&(n.drawArraysInstanced(i,c,h,l),e.update(h,i,l))}function o(c,h,l){if(l===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<l;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(i,c,0,h,0,l);let f=0;for(let p=0;p<l;p++)f+=h[p];e.update(f,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Ep(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=e.precision!==void 0?e.precision:"highp";const o=a(r);o!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",o,"instead."),r=o);const c=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),l=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=l>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:l,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:u,vertexTextures:m,maxSamples:S}}function wp(n){const t=this;let e=null,i=0,s=!1,a=!1;const r=new yi,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){e=l(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,u=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||a&&!u)a?l(null):h();else{const S=a?0:i,v=S*4;let w=m.clippingState||null;c.value=w,w=l(g,f,v,p);for(let U=0;U!==v;++U)w[U]=e[U];m.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(d,f,p,g){const _=d!==null?d.length:0;let u=null;if(_!==0){if(u=c.value,g!==!0||u===null){const m=p+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(u===null||u.length<m)&&(u=new Float32Array(m));for(let v=0,w=p;v!==_;++v,w+=4)r.copy(d[v]).applyMatrix4(S,o),r.normal.toArray(u,w),u[w+3]=r.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,u}}function bp(n){let t=new WeakMap;function e(r,o){return o===To?r.mapping=ps:o===Ao&&(r.mapping=ms),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===To||o===Ao)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const h=new U1(c.height);return h.fromEquirectangularTexture(n,r),t.set(r,h),r.addEventListener("dispose",s),e(h.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Ql extends Jl{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,r=a+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const os=4,Mh=[.125,.215,.35,.446,.526,.582],Ei=20,no=new Ql,Sh=new Gt;let io=null,so=0,ao=0,ro=!1;const Mi=(1+Math.sqrt(5))/2,Qi=1/Mi,Eh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Mi,Qi),new P(0,Mi,-Qi),new P(Qi,0,Mi),new P(-Qi,0,Mi),new P(Mi,Qi,0),new P(-Mi,Qi,0)];class Co{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(io,so,ao),this._renderer.xr.enabled=ro,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:tr,format:xn,colorSpace:ri,depthBuffer:!1},s=wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(a)),this._blurMaterial=Ap(a,t,e)}return s}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,i,s){const o=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,f=l.toneMapping;l.getClearColor(Sh),l.toneMapping=jn,l.autoClear=!1;const p=new Xl({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Q(new wt,p);let _=!1;const u=t.background;u?u.isColor&&(p.color.copy(u),t.background=null,_=!0):(p.color.copy(Sh),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,c[m],0),o.lookAt(h[m],0,0)):S===1?(o.up.set(0,0,c[m]),o.lookAt(0,h[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,h[m]));const v=this._cubeSize;Ua(s,S*v,m>2?v:0,v,v),l.setRenderTarget(s),_&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=d,t.background=u}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Q(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;Ua(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,no)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Eh[(s-1)%Eh.length];this._blur(t,s-1,s,a,r)}e.autoClear=i}_blur(t,e,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,r,o){const c=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Q(this._lodPlanes[s],h),f=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),_=a/g,u=isFinite(a)?1+Math.floor(l*_):Ei;u>Ei&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Ei}`);const m=[];let S=0;for(let T=0;T<Ei;++T){const I=T/_,M=Math.exp(-I*I/2);m.push(M),T===0?S+=M:T<u&&(S+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;f.envMap.value=t.texture,f.samples.value=u,f.weights.value=m,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const w=this._sizeLods[s],U=3*w*(s>v-os?s-v+os:0),R=4*(this._cubeSize-w);Ua(e,U,R,3*w,2*w),c.setRenderTarget(e),c.render(d,no)}}function Tp(n){const t=[],e=[],i=[];let s=n;const a=n-os+1+Mh.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let c=1/o;r>n-os?c=Mh[r-n+os-1]:r===0&&(c=0),i.push(c);const h=1/(o-2),l=-h,d=1+h,f=[l,l,d,l,d,d,l,l,d,d,l,d],p=6,g=6,_=3,u=2,m=1,S=new Float32Array(_*g*p),v=new Float32Array(u*g*p),w=new Float32Array(m*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,I=R>2?0:-1,M=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];S.set(M,_*g*R),v.set(f,u*g*R);const y=[R,R,R,R,R,R];w.set(y,m*g*R)}const U=new we;U.setAttribute("position",new Ge(S,_)),U.setAttribute("uv",new Ge(v,u)),U.setAttribute("faceIndex",new Ge(w,m)),t.push(U),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wh(n,t,e){const i=new Li(n,t,e);return i.texture.mapping=gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ap(n,t,e){const i=new Float32Array(Ei),s=new P(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function bh(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Th(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,h=c===To||c===Ao,l=c===ps||c===ms;if(h||l){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Co(n)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return h&&p&&p.height>0||l&&p&&s(p)?(e===null&&(e=new Co(n)),d=h?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function a(o){const c=o.target;c.removeEventListener("dispose",a);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Cp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Pp(n,t,e,i){const s={},a=new WeakMap;function r(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let u=0,m=_.length;u<m;u++)t.remove(_[u])}f.removeEventListener("dispose",r),delete s[f.id];const p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let u=0,m=_.length;u<m;u++)t.update(_[u],n.ARRAY_BUFFER)}}function h(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let v=0,w=S.length;v<w;v+=3){const U=S[v+0],R=S[v+1],T=S[v+2];f.push(U,R,R,T,T,U)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,w=S.length/3-1;v<w;v+=3){const U=v+0,R=v+1,T=v+2;f.push(U,R,R,T,T,U)}}else return;const u=new(zl(f)?Yl:ql)(f,1);u.version=_;const m=a.get(d);m&&t.remove(m),a.set(d,u)}function l(d){const f=a.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&h(d)}else h(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function Lp(n,t,e){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,a,d*r),e.update(f,i,1)}function h(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,a,d*r,p),e.update(f,i,p))}function l(d,f,p){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(d[_]/r,f[_]);else{g.multiDrawElementsWEBGL(i,f,0,a,d,0,p);let _=0;for(let u=0;u<p;u++)_+=f[u];e.update(_,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function Ip(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Dp(n,t,e){const i=new WeakMap,s=new Ae;function a(r,o,c){const h=r.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),u===!0&&(w=3);let U=o.attributes.position.count*w,R=1;U>t.maxTextureSize&&(R=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const T=new Float32Array(U*R*4*d),I=new Gl(T,U,R,d);I.type=Nn,I.needsUpdate=!0;const M=w*4;for(let L=0;L<d;L++){const D=m[L],A=S[L],O=v[L],N=U*R*4*L;for(let X=0;X<D.count;X++){const Y=X*M;g===!0&&(s.fromBufferAttribute(D,X),T[N+Y+0]=s.x,T[N+Y+1]=s.y,T[N+Y+2]=s.z,T[N+Y+3]=0),_===!0&&(s.fromBufferAttribute(A,X),T[N+Y+4]=s.x,T[N+Y+5]=s.y,T[N+Y+6]=s.z,T[N+Y+7]=0),u===!0&&(s.fromBufferAttribute(O,X),T[N+Y+8]=s.x,T[N+Y+9]=s.y,T[N+Y+10]=s.z,T[N+Y+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new et(U,R)},i.set(o,f),o.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let g=0;for(let u=0;u<h.length;u++)g+=h[u];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function Up(n,t,e,i){let s=new WeakMap;function a(c){const h=i.render.frame,l=c.geometry,d=t.get(c,l);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function r(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:r}}class td extends Ie{constructor(t,e,i,s,a,r,o,c,h,l){if(l=l!==void 0?l:ds,l!==ds&&l!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===ds&&(i=gs),i===void 0&&l===Ks&&(i=ra),super(null,s,a,r,o,c,l,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ed=new Ie,nd=new td(1,1);nd.compareFunction=Fl;const id=new Gl,sd=new v1,ad=new Kl,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function Ss(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=Ah[s];if(a===void 0&&(a=new Float32Array(s),Ah[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vr(n,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Np(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function Hp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Op(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Fp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Ee(e,i)}}function zp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Ee(e,i)}}function Bp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Ee(e,i)}}function Gp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function Wp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function Xp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function qp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Yp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function $p(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Zp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function Jp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const a=this.type===n.SAMPLER_2D_SHADOW?nd:ed;e.setTexture2D(t||a,s)}function Kp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sd,s)}function jp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ad,s)}function Qp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||id,s)}function t4(n){switch(n){case 5126:return kp;case 35664:return Np;case 35665:return Hp;case 35666:return Op;case 35674:return Fp;case 35675:return zp;case 35676:return Bp;case 5124:case 35670:return Gp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return $p;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function e4(n,t){n.uniform1fv(this.addr,t)}function n4(n,t){const e=Ss(t,this.size,2);n.uniform2fv(this.addr,e)}function i4(n,t){const e=Ss(t,this.size,3);n.uniform3fv(this.addr,e)}function s4(n,t){const e=Ss(t,this.size,4);n.uniform4fv(this.addr,e)}function a4(n,t){const e=Ss(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function r4(n,t){const e=Ss(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function o4(n,t){const e=Ss(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function c4(n,t){n.uniform1iv(this.addr,t)}function h4(n,t){n.uniform2iv(this.addr,t)}function l4(n,t){n.uniform3iv(this.addr,t)}function d4(n,t){n.uniform4iv(this.addr,t)}function u4(n,t){n.uniform1uiv(this.addr,t)}function f4(n,t){n.uniform2uiv(this.addr,t)}function p4(n,t){n.uniform3uiv(this.addr,t)}function m4(n,t){n.uniform4uiv(this.addr,t)}function g4(n,t,e){const i=this.cache,s=t.length,a=vr(e,s);Se(i,a)||(n.uniform1iv(this.addr,a),Ee(i,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||ed,a[r])}function _4(n,t,e){const i=this.cache,s=t.length,a=vr(e,s);Se(i,a)||(n.uniform1iv(this.addr,a),Ee(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||sd,a[r])}function v4(n,t,e){const i=this.cache,s=t.length,a=vr(e,s);Se(i,a)||(n.uniform1iv(this.addr,a),Ee(i,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||ad,a[r])}function x4(n,t,e){const i=this.cache,s=t.length,a=vr(e,s);Se(i,a)||(n.uniform1iv(this.addr,a),Ee(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||id,a[r])}function y4(n){switch(n){case 5126:return e4;case 35664:return n4;case 35665:return i4;case 35666:return s4;case 35674:return a4;case 35675:return r4;case 35676:return o4;case 5124:case 35670:return c4;case 35667:case 35671:return h4;case 35668:case 35672:return l4;case 35669:case 35673:return d4;case 5125:return u4;case 36294:return f4;case 36295:return p4;case 36296:return m4;case 35678:case 36198:case 36298:case 36306:case 35682:return g4;case 35679:case 36299:case 36307:return _4;case 35680:case 36300:case 36308:case 36293:return v4;case 36289:case 36303:case 36311:case 36292:return x4}}class M4{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=t4(e.type)}}class S4{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y4(e.type)}}class E4{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],i)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Ih(n,t){n.seq.push(t),n.map[t.id]=t}function w4(n,t,e){const i=n.name,s=i.length;for(oo.lastIndex=0;;){const a=oo.exec(i),r=oo.lastIndex;let o=a[1];const c=a[2]==="]",h=a[3];if(c&&(o=o|0),h===void 0||h==="["&&r+2===s){Ih(e,h===void 0?new M4(o,n,t):new S4(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new E4(o),Ih(e,d)),e=d}}}class Ya{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);w4(a,r,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Dh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const b4=37297;let T4=0;function A4(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function R4(n){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(n);let i;switch(t===e?i="":t===ir&&e===nr?i="LinearDisplayP3ToLinearSRGB":t===nr&&e===ir&&(i="LinearSRGBToLinearDisplayP3"),n){case ri:case _r:return[i,"LinearTransferOETF"];case He:case Jo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+A4(n.getShaderSource(t),r)}else return s}function C4(n,t){const e=R4(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function P4(n,t){let e;switch(t){case Eu:e="Linear";break;case wu:e="Reinhard";break;case bu:e="OptimizedCineon";break;case Al:e="ACESFilmic";break;case Au:e="AgX";break;case Ru:e="Neutral";break;case Tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function L4(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function I4(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function D4(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Ns(n){return n!==""}function kh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U4=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(n){return n.replace(U4,N4)}const k4=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N4(n,t){let e=Wt[t];if(e===void 0){const i=k4.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Po(e)}const H4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(n){return n.replace(H4,O4)}function O4(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Oh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F4(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function z4(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B4(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function G4(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tl:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function V4(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function W4(n,t,e,i){const s=n.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=F4(e),h=z4(e),l=B4(e),d=G4(e),f=V4(e),p=L4(e),g=I4(a),_=s.createProgram();let u,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),u.length>0&&(u+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(u=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==jn?P4("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,C4("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),r=Po(r),r=kh(r,e),r=Nh(r,e),o=Po(o),o=kh(o,e),o=Nh(o,e),r=Hh(r),o=Hh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=S+u+r,w=S+m+o,U=Dh(s,s.VERTEX_SHADER,v),R=Dh(s,s.FRAGMENT_SHADER,w);s.attachShader(_,U),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(L){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),A=s.getShaderInfoLog(U).trim(),O=s.getShaderInfoLog(R).trim();let N=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,R);else{const Y=Uh(s,U,"vertex"),z=Uh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+Y+`
`+z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(A===""||O==="")&&(X=!1);X&&(L.diagnostics={runnable:N,programLog:D,vertexShader:{log:A,prefix:u},fragmentShader:{log:O,prefix:m}})}s.deleteShader(U),s.deleteShader(R),I=new Ya(s,_),M=D4(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,b4)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T4++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}let X4=0;class q4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Y4(t),e.set(t,i)),i}}class Y4{constructor(t){this.id=X4++,this.code=t,this.usedTimes=0}}function $4(n,t,e,i,s,a,r){const o=new Vl,c=new q4,h=new Set,l=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function u(M,y,L,D,A){const O=D.fog,N=A.geometry,X=M.isMeshStandardMaterial?D.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),z=Y&&Y.mapping===gr?Y.image.height:null,j=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ct=K!==void 0?K.length:0;let Rt=0;N.morphAttributes.position!==void 0&&(Rt=1),N.morphAttributes.normal!==void 0&&(Rt=2),N.morphAttributes.color!==void 0&&(Rt=3);let qt,V,it,ut;if(j){const De=un[j];qt=De.vertexShader,V=De.fragmentShader}else qt=M.vertexShader,V=M.fragmentShader,c.update(M),it=c.getVertexShaderID(M),ut=c.getFragmentShaderID(M);const rt=n.getRenderTarget(),Tt=A.isInstancedMesh===!0,Pt=A.isBatchedMesh===!0,Nt=!!M.map,H=!!M.matcap,Z=!!Y,J=!!M.aoMap,ht=!!M.lightMap,st=!!M.bumpMap,at=!!M.normalMap,b=!!M.displacementMap,x=!!M.emissiveMap,F=!!M.metalnessMap,q=!!M.roughnessMap,$=M.anisotropy>0,tt=M.clearcoat>0,Ct=M.iridescence>0,nt=M.sheen>0,St=M.transmission>0,It=$&&!!M.anisotropyMap,lt=tt&&!!M.clearcoatMap,xt=tt&&!!M.clearcoatNormalMap,Ot=tt&&!!M.clearcoatRoughnessMap,yt=Ct&&!!M.iridescenceMap,Mt=Ct&&!!M.iridescenceThicknessMap,$t=nt&&!!M.sheenColorMap,Zt=nt&&!!M.sheenRoughnessMap,ne=!!M.specularMap,Qt=!!M.specularColorMap,de=!!M.specularIntensityMap,bt=St&&!!M.transmissionMap,C=St&&!!M.thicknessMap,ft=!!M.gradientMap,dt=!!M.alphaMap,At=M.alphaTest>0,Lt=!!M.alphaHash,ae=!!M.extensions;let ue=jn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=n.toneMapping);const ge={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:qt,fragmentShader:V,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pt,instancing:Tt,instancingColor:Tt&&A.instanceColor!==null,instancingMorph:Tt&&A.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ri,alphaToCoverage:!!M.alphaToCoverage,map:Nt,matcap:H,envMap:Z,envMapMode:Z&&Y.mapping,envMapCubeUVHeight:z,aoMap:J,lightMap:ht,bumpMap:st,normalMap:at,displacementMap:f&&b,emissiveMap:x,normalMapObjectSpace:at&&M.normalMapType===Bu,normalMapTangentSpace:at&&M.normalMapType===Ol,metalnessMap:F,roughnessMap:q,anisotropy:$,anisotropyMap:It,clearcoat:tt,clearcoatMap:lt,clearcoatNormalMap:xt,clearcoatRoughnessMap:Ot,iridescence:Ct,iridescenceMap:yt,iridescenceThicknessMap:Mt,sheen:nt,sheenColorMap:$t,sheenRoughnessMap:Zt,specularMap:ne,specularColorMap:Qt,specularIntensityMap:de,transmission:St,transmissionMap:bt,thicknessMap:C,gradientMap:ft,opaque:M.transparent===!1&&M.blending===ls&&M.alphaToCoverage===!1,alphaMap:dt,alphaTest:At,alphaHash:Lt,combine:M.combine,mapUv:Nt&&_(M.map.channel),aoMapUv:J&&_(M.aoMap.channel),lightMapUv:ht&&_(M.lightMap.channel),bumpMapUv:st&&_(M.bumpMap.channel),normalMapUv:at&&_(M.normalMap.channel),displacementMapUv:b&&_(M.displacementMap.channel),emissiveMapUv:x&&_(M.emissiveMap.channel),metalnessMapUv:F&&_(M.metalnessMap.channel),roughnessMapUv:q&&_(M.roughnessMap.channel),anisotropyMapUv:It&&_(M.anisotropyMap.channel),clearcoatMapUv:lt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&_(M.sheenRoughnessMap.channel),specularMapUv:ne&&_(M.specularMap.channel),specularColorMapUv:Qt&&_(M.specularColorMap.channel),specularIntensityMapUv:de&&_(M.specularIntensityMap.channel),transmissionMapUv:bt&&_(M.transmissionMap.channel),thicknessMapUv:C&&_(M.thicknessMap.channel),alphaMapUv:dt&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(at||$),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!N.attributes.uv&&(Nt||dt),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:A.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Nt&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pe,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=h.has(1),ge.vertexUv2s=h.has(2),ge.vertexUv3s=h.has(3),h.clear(),ge}function m(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(y,M),v(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),M.push(o.mask)}function w(M){const y=g[M.type];let L;if(y){const D=un[y];L=Zl.clone(D.uniforms)}else L=M.uniforms;return L}function U(M,y){let L;for(let D=0,A=l.length;D<A;D++){const O=l[D];if(O.cacheKey===y){L=O,++L.usedTimes;break}}return L===void 0&&(L=new W4(n,y,M,a),l.push(L)),L}function R(M){if(--M.usedTimes===0){const y=l.indexOf(M);l[y]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function I(){c.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:w,acquireProgram:U,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:I}}function Z4(){let n=new WeakMap;function t(a){let r=n.get(a);return r===void 0&&(r={},n.set(a,r)),r}function e(a){n.delete(a)}function i(a,r,o){n.get(a)[r]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function J4(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Fh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zh(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(d,f,p,g,_,u){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:u},n[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=u),t++,m}function o(d,f,p,g,_,u){const m=r(d,f,p,g,_,u);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(d,f,p,g,_,u){const m=r(d,f,p,g,_,u);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function h(d,f){e.length>1&&e.sort(d||J4),i.length>1&&i.sort(f||Fh),s.length>1&&s.sort(f||Fh)}function l(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:o,unshift:c,finish:l,sort:h}}function K4(){let n=new WeakMap;function t(i,s){const a=n.get(i);let r;return a===void 0?(r=new zh,n.set(i,[r])):s>=a.length?(r=new zh,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function j4(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Q4(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let t3=0;function e3(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function n3(n){const t=new j4,e=Q4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,a=new le,r=new le;function o(h,l){let d=0,f=0,p=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let g=0,_=0,u=0,m=0,S=0,v=0,w=0,U=0,R=0,T=0,I=0;h.sort(e3);const M=l===!0?Math.PI:1;for(let L=0,D=h.length;L<D;L++){const A=h[L],O=A.color,N=A.intensity,X=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=O.r*N*M,f+=O.g*N*M,p+=O.b*N*M;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],N);I++}else if(A.isDirectionalLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity*M),A.castShadow){const j=A.shadow,K=e.get(A);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=A.shadow.matrix,v++}i.directional[g]=z,g++}else if(A.isSpotLight){const z=t.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(O).multiplyScalar(N*M),z.distance=X,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[u]=z;const j=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,j.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[u]=j.matrix,A.castShadow){const K=e.get(A);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.spotShadow[u]=K,i.spotShadowMap[u]=Y,U++}u++}else if(A.isRectAreaLight){const z=t.get(A);z.color.copy(O).multiplyScalar(N),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=z,m++}else if(A.isPointLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity*M),z.distance=A.distance,z.decay=A.decay,A.castShadow){const j=A.shadow,K=e.get(A);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=A.shadow.matrix,w++}i.point[_]=z,_++}else if(A.isHemisphereLight){const z=t.get(A);z.skyColor.copy(A.color).multiplyScalar(N*M),z.groundColor.copy(A.groundColor).multiplyScalar(N*M),i.hemi[S]=z,S++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==u||y.rectAreaLength!==m||y.hemiLength!==S||y.numDirectionalShadows!==v||y.numPointShadows!==w||y.numSpotShadows!==U||y.numSpotMaps!==R||y.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=m,i.point.length=_,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=U+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,y.directionalLength=g,y.pointLength=_,y.spotLength=u,y.rectAreaLength=m,y.hemiLength=S,y.numDirectionalShadows=v,y.numPointShadows=w,y.numSpotShadows=U,y.numSpotMaps=R,y.numLightProbes=I,i.version=t3++)}function c(h,l){let d=0,f=0,p=0,g=0,_=0;const u=l.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){const v=h[m];if(v.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),d++}else if(v.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),p++}else if(v.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),r.identity(),a.copy(v.matrixWorld),a.premultiply(u),r.extractRotation(a),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),f++}else if(v.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),_++}}}return{setup:o,setupView:c,state:i}}function Bh(n){const t=new n3(n),e=[],i=[];function s(){e.length=0,i.length=0}function a(l){e.push(l)}function r(l){i.push(l)}function o(l){t.setup(e,l)}function c(l){t.setupView(e,l)}return{init:s,state:{lightsArray:e,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function i3(n){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Bh(n),t.set(s,[o])):a>=r.length?(o=new Bh(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class s3 extends ha{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class a3 extends ha{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c3(n,t,e){let i=new jo;const s=new et,a=new et,r=new Ae,o=new s3({depthPacking:zu}),c=new a3,h={},l=e.maxTextureSize,d={[ii]:Be,[Be]:ii,[Pe]:Pe},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:r3,fragmentShader:o3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Q(g,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let m=this.type;this.render=function(R,T,I){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Kn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const A=m!==Ln&&this.type===Ln,O=m===Ln&&this.type!==Ln;for(let N=0,X=R.length;N<X;N++){const Y=R[N],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),a.copy(z.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(a.x=Math.floor(l/j.x),s.x=a.x*j.x,z.mapSize.x=a.x),s.y>l&&(a.y=Math.floor(l/j.y),s.y=a.y*j.y,z.mapSize.y=a.y)),z.map===null||A===!0||O===!0){const ct=this.type!==Ln?{minFilter:Xe,magFilter:Xe}:{};z.map!==null&&z.map.dispose(),z.map=new Li(s.x,s.y,ct),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const K=z.getViewportCount();for(let ct=0;ct<K;ct++){const Rt=z.getViewport(ct);r.set(a.x*Rt.x,a.y*Rt.y,a.x*Rt.z,a.y*Rt.w),D.viewport(r),z.updateMatrices(Y,ct),i=z.getFrustum(),w(T,I,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Ln&&S(z,I),z.needsUpdate=!1}m=this.type,u.needsUpdate=!1,n.setRenderTarget(M,y,L)};function S(R,T){const I=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Li(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,I,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,I,p,_,null)}function v(R,T,I,M){let y=null;const L=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=y.uuid,A=T.uuid;let O=h[D];O===void 0&&(O={},h[D]=O);let N=O[A];N===void 0&&(N=y.clone(),O[A]=N,T.addEventListener("dispose",U)),y=N}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Ln?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=I}return y}function w(R,T,I,M,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Ln)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const A=t.update(R),O=R.material;if(Array.isArray(O)){const N=A.groups;for(let X=0,Y=N.length;X<Y;X++){const z=N[X],j=O[z.materialIndex];if(j&&j.visible){const K=v(R,j,M,y);R.onBeforeShadow(n,R,T,I,A,K,z),n.renderBufferDirect(I,null,A,K,R,z),R.onAfterShadow(n,R,T,I,A,K,z)}}}else if(O.visible){const N=v(R,O,M,y);R.onBeforeShadow(n,R,T,I,A,N,null),n.renderBufferDirect(I,null,A,N,R,null),R.onAfterShadow(n,R,T,I,A,N,null)}}const D=R.children;for(let A=0,O=D.length;A<O;A++)w(D[A],T,I,M,y)}function U(R){R.target.removeEventListener("dispose",U);for(const I in h){const M=h[I],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function h3(n){function t(){let C=!1;const ft=new Ae;let dt=null;const At=new Ae(0,0,0,0);return{setMask:function(Lt){dt!==Lt&&!C&&(n.colorMask(Lt,Lt,Lt,Lt),dt=Lt)},setLocked:function(Lt){C=Lt},setClear:function(Lt,ae,ue,ge,De){De===!0&&(Lt*=ge,ae*=ge,ue*=ge),ft.set(Lt,ae,ue,ge),At.equals(ft)===!1&&(n.clearColor(Lt,ae,ue,ge),At.copy(ft))},reset:function(){C=!1,dt=null,At.set(-1,0,0,0)}}}function e(){let C=!1,ft=null,dt=null,At=null;return{setTest:function(Lt){Lt?ut(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(Lt){ft!==Lt&&!C&&(n.depthMask(Lt),ft=Lt)},setFunc:function(Lt){if(dt!==Lt){switch(Lt){case pu:n.depthFunc(n.NEVER);break;case mu:n.depthFunc(n.ALWAYS);break;case gu:n.depthFunc(n.LESS);break;case Qa:n.depthFunc(n.LEQUAL);break;case _u:n.depthFunc(n.EQUAL);break;case vu:n.depthFunc(n.GEQUAL);break;case xu:n.depthFunc(n.GREATER);break;case yu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=Lt}},setLocked:function(Lt){C=Lt},setClear:function(Lt){At!==Lt&&(n.clearDepth(Lt),At=Lt)},reset:function(){C=!1,ft=null,dt=null,At=null}}}function i(){let C=!1,ft=null,dt=null,At=null,Lt=null,ae=null,ue=null,ge=null,De=null;return{setTest:function(re){C||(re?ut(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(re){ft!==re&&!C&&(n.stencilMask(re),ft=re)},setFunc:function(re,cn,hn){(dt!==re||At!==cn||Lt!==hn)&&(n.stencilFunc(re,cn,hn),dt=re,At=cn,Lt=hn)},setOp:function(re,cn,hn){(ae!==re||ue!==cn||ge!==hn)&&(n.stencilOp(re,cn,hn),ae=re,ue=cn,ge=hn)},setLocked:function(re){C=re},setClear:function(re){De!==re&&(n.clearStencil(re),De=re)},reset:function(){C=!1,ft=null,dt=null,At=null,Lt=null,ae=null,ue=null,ge=null,De=null}}}const s=new t,a=new e,r=new i,o=new WeakMap,c=new WeakMap;let h={},l={},d=new WeakMap,f=[],p=null,g=!1,_=null,u=null,m=null,S=null,v=null,w=null,U=null,R=new Gt(0,0,0),T=0,I=!1,M=null,y=null,L=null,D=null,A=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=X>=2);let z=null,j={};const K=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),Rt=new Ae().fromArray(K),qt=new Ae().fromArray(ct);function V(C,ft,dt,At){const Lt=new Uint8Array(4),ae=n.createTexture();n.bindTexture(C,ae),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<dt;ue++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(ft+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return ae}const it={};it[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ut(n.DEPTH_TEST),a.setFunc(Qa),st(!1),at(Mc),ut(n.CULL_FACE),J(Kn);function ut(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function rt(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function Tt(C,ft){return l[C]!==ft?(n.bindFramebuffer(C,ft),l[C]=ft,C===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=ft),C===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function Pt(C,ft){let dt=f,At=!1;if(C){dt=d.get(ft),dt===void 0&&(dt=[],d.set(ft,dt));const Lt=C.textures;if(dt.length!==Lt.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,ue=Lt.length;ae<ue;ae++)dt[ae]=n.COLOR_ATTACHMENT0+ae;dt.length=Lt.length,At=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,At=!0);At&&n.drawBuffers(dt)}function Nt(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const H={[Si]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[jd]:n.FUNC_REVERSE_SUBTRACT};H[Qd]=n.MIN,H[tu]=n.MAX;const Z={[eu]:n.ZERO,[nu]:n.ONE,[iu]:n.SRC_COLOR,[wo]:n.SRC_ALPHA,[hu]:n.SRC_ALPHA_SATURATE,[ou]:n.DST_COLOR,[au]:n.DST_ALPHA,[su]:n.ONE_MINUS_SRC_COLOR,[bo]:n.ONE_MINUS_SRC_ALPHA,[cu]:n.ONE_MINUS_DST_COLOR,[ru]:n.ONE_MINUS_DST_ALPHA,[lu]:n.CONSTANT_COLOR,[du]:n.ONE_MINUS_CONSTANT_COLOR,[uu]:n.CONSTANT_ALPHA,[fu]:n.ONE_MINUS_CONSTANT_ALPHA};function J(C,ft,dt,At,Lt,ae,ue,ge,De,re){if(C===Kn){g===!0&&(rt(n.BLEND),g=!1);return}if(g===!1&&(ut(n.BLEND),g=!0),C!==Jd){if(C!==_||re!==I){if((u!==Si||v!==Si)&&(n.blendEquation(n.FUNC_ADD),u=Si,v=Si),re)switch(C){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.ONE,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,S=null,w=null,U=null,R.set(0,0,0),T=0,_=C,I=re}return}Lt=Lt||ft,ae=ae||dt,ue=ue||At,(ft!==u||Lt!==v)&&(n.blendEquationSeparate(H[ft],H[Lt]),u=ft,v=Lt),(dt!==m||At!==S||ae!==w||ue!==U)&&(n.blendFuncSeparate(Z[dt],Z[At],Z[ae],Z[ue]),m=dt,S=At,w=ae,U=ue),(ge.equals(R)===!1||De!==T)&&(n.blendColor(ge.r,ge.g,ge.b,De),R.copy(ge),T=De),_=C,I=!1}function ht(C,ft){C.side===Pe?rt(n.CULL_FACE):ut(n.CULL_FACE);let dt=C.side===Be;ft&&(dt=!dt),st(dt),C.blending===ls&&C.transparent===!1?J(Kn):J(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const At=C.stencilWrite;r.setTest(At),At&&(r.setMask(C.stencilWriteMask),r.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),r.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),x(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(C){M!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),M=C)}function at(C){C!==$d?(ut(n.CULL_FACE),C!==y&&(C===Mc?n.cullFace(n.BACK):C===Zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),y=C}function b(C){C!==L&&(N&&n.lineWidth(C),L=C)}function x(C,ft,dt){C?(ut(n.POLYGON_OFFSET_FILL),(D!==ft||A!==dt)&&(n.polygonOffset(ft,dt),D=ft,A=dt)):rt(n.POLYGON_OFFSET_FILL)}function F(C){C?ut(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function q(C){C===void 0&&(C=n.TEXTURE0+O-1),z!==C&&(n.activeTexture(C),z=C)}function $(C,ft,dt){dt===void 0&&(z===null?dt=n.TEXTURE0+O-1:dt=z);let At=j[dt];At===void 0&&(At={type:void 0,texture:void 0},j[dt]=At),(At.type!==C||At.texture!==ft)&&(z!==dt&&(n.activeTexture(dt),z=dt),n.bindTexture(C,ft||it[C]),At.type=C,At.texture=ft)}function tt(){const C=j[z];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ct(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function yt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $t(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Zt(C){Rt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Rt.copy(C))}function ne(C){qt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),qt.copy(C))}function Qt(C,ft){let dt=c.get(ft);dt===void 0&&(dt=new WeakMap,c.set(ft,dt));let At=dt.get(C);At===void 0&&(At=n.getUniformBlockIndex(ft,C.name),dt.set(C,At))}function de(C,ft){const At=c.get(ft).get(C);o.get(ft)!==At&&(n.uniformBlockBinding(ft,At,C.__bindingPointIndex),o.set(ft,At))}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},z=null,j={},l={},d=new WeakMap,f=[],p=null,g=!1,_=null,u=null,m=null,S=null,v=null,w=null,U=null,R=new Gt(0,0,0),T=0,I=!1,M=null,y=null,L=null,D=null,A=null,Rt.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:ut,disable:rt,bindFramebuffer:Tt,drawBuffers:Pt,useProgram:Nt,setBlending:J,setMaterial:ht,setFlipSided:st,setCullFace:at,setLineWidth:b,setPolygonOffset:x,setScissorTest:F,activeTexture:q,bindTexture:$,unbindTexture:tt,compressedTexImage2D:Ct,compressedTexImage3D:nt,texImage2D:Mt,texImage3D:$t,updateUBOMapping:Qt,uniformBlockBinding:de,texStorage2D:Ot,texStorage3D:yt,texSubImage2D:St,texSubImage3D:It,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:Zt,viewport:ne,reset:bt}}function l3(n,t,e,i,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new et,l=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Qs("canvas")}function _(b,x,F){let q=1;const $=at(b);if(($.width>F||$.height>F)&&(q=F/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const tt=Math.floor(q*$.width),Ct=Math.floor(q*$.height);d===void 0&&(d=g(tt,Ct));const nt=x?g(tt,Ct):d;return nt.width=tt,nt.height=Ct,nt.getContext("2d").drawImage(b,0,0,tt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+tt+"x"+Ct+")."),nt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function u(b){return b.generateMipmaps&&b.minFilter!==Xe&&b.minFilter!==sn}function m(b){n.generateMipmap(b)}function S(b,x,F,q,$=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=x;if(x===n.RED&&(F===n.FLOAT&&(tt=n.R32F),F===n.HALF_FLOAT&&(tt=n.R16F),F===n.UNSIGNED_BYTE&&(tt=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.R8UI),F===n.UNSIGNED_SHORT&&(tt=n.R16UI),F===n.UNSIGNED_INT&&(tt=n.R32UI),F===n.BYTE&&(tt=n.R8I),F===n.SHORT&&(tt=n.R16I),F===n.INT&&(tt=n.R32I)),x===n.RG&&(F===n.FLOAT&&(tt=n.RG32F),F===n.HALF_FLOAT&&(tt=n.RG16F),F===n.UNSIGNED_BYTE&&(tt=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.RG8UI),F===n.UNSIGNED_SHORT&&(tt=n.RG16UI),F===n.UNSIGNED_INT&&(tt=n.RG32UI),F===n.BYTE&&(tt=n.RG8I),F===n.SHORT&&(tt=n.RG16I),F===n.INT&&(tt=n.RG32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),x===n.RGBA){const Ct=$?er:se.getTransfer(q);F===n.FLOAT&&(tt=n.RGBA32F),F===n.HALF_FLOAT&&(tt=n.RGBA16F),F===n.UNSIGNED_BYTE&&(tt=Ct===oe?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(b,x){return u(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xe&&b.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){const x=b.target;x.removeEventListener("dispose",w),R(x),x.isVideoTexture&&l.delete(x)}function U(b){const x=b.target;x.removeEventListener("dispose",U),I(x)}function R(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,q=f.get(F);if(q){const $=q[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(b),Object.keys(q).length===0&&f.delete(F)}i.remove(b)}function T(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,q=f.get(F);delete q[x.__cacheKey],r.memory.textures--}function I(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let $=0;$<x.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[q][$]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let q=0,$=F.length;q<$;q++){const tt=i.get(F[q]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),r.memory.textures--),i.remove(F[q])}i.remove(b)}let M=0;function y(){M=0}function L(){const b=M;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),M+=1,b}function D(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function A(b,x){const F=i.get(b);if(b.isVideoTexture&&ht(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(F,b,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function O(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Rt(F,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function N(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Rt(F,b,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function X(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){qt(F,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const Y={[Js]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[Ro]:n.MIRRORED_REPEAT},z={[Xe]:n.NEAREST,[Cu]:n.NEAREST_MIPMAP_NEAREST,[fa]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Ir]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},j={[Gu]:n.NEVER,[$u]:n.ALWAYS,[Vu]:n.LESS,[Fl]:n.LEQUAL,[Wu]:n.EQUAL,[Yu]:n.GEQUAL,[Xu]:n.GREATER,[qu]:n.NOTEQUAL};function K(b,x){if(x.type===Nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===Ir||x.magFilter===fa||x.magFilter===Ai||x.minFilter===sn||x.minFilter===Ir||x.minFilter===fa||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Y[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Y[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Y[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,z[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,z[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,j[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xe||x.minFilter!==fa&&x.minFilter!==Ai||x.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ct(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let $=f.get(q);$===void 0&&($={},f.set(q,$));const tt=D(x);if(tt!==b.__cacheKey){$[tt]===void 0&&($[tt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,F=!0),$[tt].usedTimes++;const Ct=$[b.__cacheKey];Ct!==void 0&&($[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&T(x)),b.__cacheKey=tt,b.__webglTexture=$[tt].texture}return F}function Rt(b,x,F){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const $=ct(b,x),tt=x.source;e.bindTexture(q,b.__webglTexture,n.TEXTURE0+F);const Ct=i.get(tt);if(tt.version!==Ct.__version||$===!0){e.activeTexture(n.TEXTURE0+F);const nt=se.getPrimaries(se.workingColorSpace),St=x.colorSpace===Zn?null:se.getPrimaries(x.colorSpace),It=x.colorSpace===Zn||nt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let lt=_(x.image,!1,s.maxTextureSize);lt=st(x,lt);const xt=a.convert(x.format,x.colorSpace),Ot=a.convert(x.type);let yt=S(x.internalFormat,xt,Ot,x.colorSpace,x.isVideoTexture);K(q,x);let Mt;const $t=x.mipmaps,Zt=x.isVideoTexture!==!0&&yt!==Hl,ne=Ct.__version===void 0||$===!0,Qt=tt.dataReady,de=v(x,lt);if(x.isDepthTexture)yt=n.DEPTH_COMPONENT16,x.type===Nn?yt=n.DEPTH_COMPONENT32F:x.type===gs?yt=n.DEPTH_COMPONENT24:x.type===ra&&(yt=n.DEPTH24_STENCIL8),ne&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,yt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,yt,lt.width,lt.height,0,xt,Ot,null));else if(x.isDataTexture)if($t.length>0){Zt&&ne&&e.texStorage2D(n.TEXTURE_2D,de,yt,$t[0].width,$t[0].height);for(let bt=0,C=$t.length;bt<C;bt++)Mt=$t[bt],Zt?Qt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,Mt.width,Mt.height,xt,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,bt,yt,Mt.width,Mt.height,0,xt,Ot,Mt.data);x.generateMipmaps=!1}else Zt?(ne&&e.texStorage2D(n.TEXTURE_2D,de,yt,lt.width,lt.height),Qt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,xt,Ot,lt.data)):e.texImage2D(n.TEXTURE_2D,0,yt,lt.width,lt.height,0,xt,Ot,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Zt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,de,yt,$t[0].width,$t[0].height,lt.depth);for(let bt=0,C=$t.length;bt<C;bt++)Mt=$t[bt],x.format!==xn?xt!==null?Zt?Qt&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,0,Mt.width,Mt.height,lt.depth,xt,Mt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,bt,yt,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?Qt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,0,Mt.width,Mt.height,lt.depth,xt,Ot,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,bt,yt,Mt.width,Mt.height,lt.depth,0,xt,Ot,Mt.data)}else{Zt&&ne&&e.texStorage2D(n.TEXTURE_2D,de,yt,$t[0].width,$t[0].height);for(let bt=0,C=$t.length;bt<C;bt++)Mt=$t[bt],x.format!==xn?xt!==null?Zt?Qt&&e.compressedTexSubImage2D(n.TEXTURE_2D,bt,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,bt,yt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?Qt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,Mt.width,Mt.height,xt,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,bt,yt,Mt.width,Mt.height,0,xt,Ot,Mt.data)}else if(x.isDataArrayTexture)Zt?(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,de,yt,lt.width,lt.height,lt.depth),Qt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,xt,Ot,lt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,lt.width,lt.height,lt.depth,0,xt,Ot,lt.data);else if(x.isData3DTexture)Zt?(ne&&e.texStorage3D(n.TEXTURE_3D,de,yt,lt.width,lt.height,lt.depth),Qt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,xt,Ot,lt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,lt.width,lt.height,lt.depth,0,xt,Ot,lt.data);else if(x.isFramebufferTexture){if(ne)if(Zt)e.texStorage2D(n.TEXTURE_2D,de,yt,lt.width,lt.height);else{let bt=lt.width,C=lt.height;for(let ft=0;ft<de;ft++)e.texImage2D(n.TEXTURE_2D,ft,yt,bt,C,0,xt,Ot,null),bt>>=1,C>>=1}}else if($t.length>0){if(Zt&&ne){const bt=at($t[0]);e.texStorage2D(n.TEXTURE_2D,de,yt,bt.width,bt.height)}for(let bt=0,C=$t.length;bt<C;bt++)Mt=$t[bt],Zt?Qt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,xt,Ot,Mt):e.texImage2D(n.TEXTURE_2D,bt,yt,xt,Ot,Mt);x.generateMipmaps=!1}else if(Zt){if(ne){const bt=at(lt);e.texStorage2D(n.TEXTURE_2D,de,yt,bt.width,bt.height)}Qt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Ot,lt)}else e.texImage2D(n.TEXTURE_2D,0,yt,xt,Ot,lt);u(x)&&m(q),Ct.__version=tt.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function qt(b,x,F){if(x.image.length!==6)return;const q=ct(b,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const tt=i.get($);if($.version!==tt.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const Ct=se.getPrimaries(se.workingColorSpace),nt=x.colorSpace===Zn?null:se.getPrimaries(x.colorSpace),St=x.colorSpace===Zn||Ct===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const It=x.isCompressedTexture||x.image[0].isCompressedTexture,lt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let C=0;C<6;C++)!It&&!lt?xt[C]=_(x.image[C],!0,s.maxCubemapSize):xt[C]=lt?x.image[C].image:x.image[C],xt[C]=st(x,xt[C]);const Ot=xt[0],yt=a.convert(x.format,x.colorSpace),Mt=a.convert(x.type),$t=S(x.internalFormat,yt,Mt,x.colorSpace),Zt=x.isVideoTexture!==!0,ne=tt.__version===void 0||q===!0,Qt=$.dataReady;let de=v(x,Ot);K(n.TEXTURE_CUBE_MAP,x);let bt;if(It){Zt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,de,$t,Ot.width,Ot.height);for(let C=0;C<6;C++){bt=xt[C].mipmaps;for(let ft=0;ft<bt.length;ft++){const dt=bt[ft];x.format!==xn?yt!==null?Zt?Qt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft,0,0,dt.width,dt.height,yt,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?Qt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft,0,0,dt.width,dt.height,yt,Mt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft,$t,dt.width,dt.height,0,yt,Mt,dt.data)}}}else{if(bt=x.mipmaps,Zt&&ne){bt.length>0&&de++;const C=at(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,de,$t,C.width,C.height)}for(let C=0;C<6;C++)if(lt){Zt?Qt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,xt[C].width,xt[C].height,yt,Mt,xt[C].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,$t,xt[C].width,xt[C].height,0,yt,Mt,xt[C].data);for(let ft=0;ft<bt.length;ft++){const At=bt[ft].image[C].image;Zt?Qt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft+1,0,0,At.width,At.height,yt,Mt,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft+1,$t,At.width,At.height,0,yt,Mt,At.data)}}else{Zt?Qt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,yt,Mt,xt[C]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,$t,yt,Mt,xt[C]);for(let ft=0;ft<bt.length;ft++){const dt=bt[ft];Zt?Qt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft+1,0,0,yt,Mt,dt.image[C]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft+1,$t,yt,Mt,dt.image[C])}}}u(x)&&m(n.TEXTURE_CUBE_MAP),tt.__version=$.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function V(b,x,F,q,$,tt){const Ct=a.convert(F.format,F.colorSpace),nt=a.convert(F.type),St=S(F.internalFormat,Ct,nt,F.colorSpace);if(!i.get(x).__hasExternalTextures){const lt=Math.max(1,x.width>>tt),xt=Math.max(1,x.height>>tt);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,tt,St,lt,xt,x.depth,0,Ct,nt,null):e.texImage2D($,tt,St,lt,xt,0,Ct,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),J(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,i.get(F).__webglTexture,0,Z(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,i.get(F).__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let q=n.DEPTH_COMPONENT24;if(F||J(x)){const $=x.depthTexture;$&&$.isDepthTexture&&($.type===Nn?q=n.DEPTH_COMPONENT32F:$.type===gs&&(q=n.DEPTH_COMPONENT24));const tt=Z(x);J(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,q,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,q,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const q=Z(x);F&&J(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,x.width,x.height):J(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const q=x.textures;for(let $=0;$<q.length;$++){const tt=q[$],Ct=a.convert(tt.format,tt.colorSpace),nt=a.convert(tt.type),St=S(tt.internalFormat,Ct,nt,tt.colorSpace),It=Z(x);F&&J(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,St,x.width,x.height):J(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,St,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,St,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),A(x.depthTexture,0);const q=i.get(x.depthTexture).__webglTexture,$=Z(x);if(x.depthTexture.format===ds)J(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(x.depthTexture.format===Ks)J(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function rt(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ut(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]=n.createRenderbuffer(),it(x.__webglDepthbuffer[q],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),it(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(b,x,F){const q=i.get(b);x!==void 0&&V(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&rt(b)}function Pt(b){const x=b.texture,F=i.get(b),q=i.get(x);b.addEventListener("dispose",U);const $=b.textures,tt=b.isWebGLCubeRenderTarget===!0,Ct=$.length>1;if(Ct||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,r.memory.textures++),tt){F.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[nt]=[];for(let St=0;St<x.mipmaps.length;St++)F.__webglFramebuffer[nt][St]=n.createFramebuffer()}else F.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)F.__webglFramebuffer[nt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let nt=0,St=$.length;nt<St;nt++){const It=i.get($[nt]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),r.memory.textures++)}if(b.samples>0&&J(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){const St=$[nt];F.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[nt]);const It=a.convert(St.format,St.colorSpace),lt=a.convert(St.type),xt=S(St.internalFormat,It,lt,St.colorSpace,b.isXRRenderTarget===!0),Ot=Z(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,xt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,F.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),it(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),K(n.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)V(F.__webglFramebuffer[nt][St],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St);else V(F.__webglFramebuffer[nt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);u(x)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let nt=0,St=$.length;nt<St;nt++){const It=$[nt],lt=i.get(It);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),K(n.TEXTURE_2D,It),V(F.__webglFramebuffer,b,It,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,0),u(It)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(nt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,q.__webglTexture),K(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)V(F.__webglFramebuffer[St],b,x,n.COLOR_ATTACHMENT0,nt,St);else V(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,nt,0);u(x)&&m(nt),e.unbindTexture()}b.depthBuffer&&rt(b)}function Nt(b){const x=b.textures;for(let F=0,q=x.length;F<q;F++){const $=x[F];if(u($)){const tt=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ct=i.get($).__webglTexture;e.bindTexture(tt,Ct),m(tt),e.unbindTexture()}}}function H(b){if(b.samples>0&&J(b)===!1){const x=b.textures,F=b.width,q=b.height;let $=n.COLOR_BUFFER_BIT;const tt=[],Ct=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=i.get(b),St=x.length>1;if(St)for(let It=0;It<x.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let It=0;It<x.length;It++){tt.push(n.COLOR_ATTACHMENT0+It),b.depthBuffer&&tt.push(Ct);const lt=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(lt===!1&&(b.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&nt.__isTransmissionRenderTarget!==!0&&($|=n.STENCIL_BUFFER_BIT)),St&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,nt.__webglColorRenderbuffer[It]),lt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ct]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ct])),St){const xt=i.get(x[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let It=0;It<x.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,nt.__webglColorRenderbuffer[It]);const lt=i.get(x[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function Z(b){return Math.min(s.maxSamples,b.samples)}function J(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ht(b){const x=r.render.frame;l.get(b)!==x&&(l.set(b,x),b.update())}function st(b,x){const F=b.colorSpace,q=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==ri&&F!==Zn&&(se.getTransfer(F)===oe?(q!==xn||$!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function at(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=y,this.setTexture2D=A,this.setTexture2DArray=O,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=Tt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=J}function d3(n,t){function e(i,s=Zn){let a;const r=se.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pu)return n.BYTE;if(i===Lu)return n.SHORT;if(i===Cl)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===gs)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===tr)return n.HALF_FLOAT;if(i===Du)return n.ALPHA;if(i===Uu)return n.RGB;if(i===xn)return n.RGBA;if(i===ku)return n.LUMINANCE;if(i===Nu)return n.LUMINANCE_ALPHA;if(i===ds)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===Hu)return n.RG;if(i===kl)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===Dr||i===Ur||i===kr||i===Nr)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Dr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Dr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===Tc||i===Ac||i===Rc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Cc||i===Pc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Cc)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Pc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Ic||i===Dc||i===Uc||i===kc||i===Nc||i===Hc||i===Oc||i===Fc||i===zc||i===Bc||i===Gc||i===Vc||i===Wc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Lc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hr||i===Xc||i===qc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Hr)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ou||i===Yc||i===$c||i===Zc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Hr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class u3 extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f3={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const _ of t.hand.values()){const u=e.getJointPose(_,i),m=this._getHandJoint(h,_);u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=u.radius),m.visible=u!==null}const l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=l.position.distanceTo(d.position),p=.02,g=.005;h.inputState.pinching&&f>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f3)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const p3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ie,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,s=new Fn({vertexShader:p3,fragmentShader:m3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Q(new on(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class _3 extends Ms{constructor(t,e){super();const i=this;let s=null,a=1,r=null,o="local-floor",c=1,h=null,l=null,d=null,f=null,p=null,g=null;const _=new g3,u=e.getContextAttributes();let m=null,S=null;const v=[],w=[],U=new et;let R=null;const T=new Qe;T.layers.enable(1),T.viewport=new Ae;const I=new Qe;I.layers.enable(2),I.viewport=new Ae;const M=[T,I],y=new u3;y.layers.enable(1),y.layers.enable(2);let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let it=v[V];return it===void 0&&(it=new co,v[V]=it),it.getTargetRaySpace()},this.getControllerGrip=function(V){let it=v[V];return it===void 0&&(it=new co,v[V]=it),it.getGripSpace()},this.getHand=function(V){let it=v[V];return it===void 0&&(it=new co,v[V]=it),it.getHandSpace()};function A(V){const it=w.indexOf(V.inputSource);if(it===-1)return;const ut=v[it];ut!==void 0&&(ut.update(V.inputSource,V.frame,h||r),ut.dispatchEvent({type:V.type,data:V.inputSource}))}function O(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",N);for(let V=0;V<v.length;V++){const it=w[V];it!==null&&(w[V]=null,v[V].disconnect(it))}L=null,D=null,_.reset(),t.setRenderTarget(m),p=null,f=null,d=null,s=null,S=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",O),s.addEventListener("inputsourceschange",N),u.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const it={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Li(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let it=null,ut=null,rt=null;u.depth&&(rt=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=u.stencil?Ks:ds,ut=u.stencil?ra:gs);const Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:a};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Li(f.textureWidth,f.textureHeight,{format:xn,type:Qn,depthTexture:new td(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0});const Pt=t.properties.get(S);Pt.__ignoreDepthValues=f.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(V){for(let it=0;it<V.removed.length;it++){const ut=V.removed[it],rt=w.indexOf(ut);rt>=0&&(w[rt]=null,v[rt].disconnect(ut))}for(let it=0;it<V.added.length;it++){const ut=V.added[it];let rt=w.indexOf(ut);if(rt===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=w.length){w.push(ut),rt=Pt;break}else if(w[Pt]===null){w[Pt]=ut,rt=Pt;break}if(rt===-1)break}const Tt=v[rt];Tt&&Tt.connect(ut)}}const X=new P,Y=new P;function z(V,it,ut){X.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(ut.matrixWorld);const rt=X.distanceTo(Y),Tt=it.projectionMatrix.elements,Pt=ut.projectionMatrix.elements,Nt=Tt[14]/(Tt[10]-1),H=Tt[14]/(Tt[10]+1),Z=(Tt[9]+1)/Tt[5],J=(Tt[9]-1)/Tt[5],ht=(Tt[8]-1)/Tt[0],st=(Pt[8]+1)/Pt[0],at=Nt*ht,b=Nt*st,x=rt/(-ht+st),F=x*-ht;it.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(F),V.translateZ(x),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const q=Nt+x,$=H+x,tt=at-F,Ct=b+(rt-F),nt=Z*H/$*q,St=J*H/$*q;V.projectionMatrix.makePerspective(tt,Ct,nt,St,q,$),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,it){it===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(it.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),y.near=I.near=T.near=V.near,y.far=I.far=T.far=V.far,(L!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,D=y.far,T.near=L,T.far=D,I.near=L,I.far=D,T.updateProjectionMatrix(),I.updateProjectionMatrix(),V.updateProjectionMatrix());const it=V.parent,ut=y.cameras;j(y,it);for(let rt=0;rt<ut.length;rt++)j(ut[rt],it);ut.length===2?z(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),K(V,y,it)};function K(V,it,ut){ut===null?V.matrix.copy(it.matrixWorld):(V.matrix.copy(ut.matrixWorld),V.matrix.invert(),V.matrix.multiply(it.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(it.projectionMatrix),V.projectionMatrixInverse.copy(it.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=js*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let ct=null;function Rt(V,it){if(l=it.getViewerPose(h||r),g=it,l!==null){const ut=l.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let rt=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Pt=0;Pt<ut.length;Pt++){const Nt=ut[Pt];let H=null;if(p!==null)H=p.getViewport(Nt);else{const J=d.getViewSubImage(f,Nt);H=J.viewport,Pt===0&&(t.setRenderTargetTextures(S,J.colorTexture,f.ignoreDepthValues?void 0:J.depthStencilTexture),t.setRenderTarget(S))}let Z=M[Pt];Z===void 0&&(Z=new Qe,Z.layers.enable(Pt),Z.viewport=new Ae,M[Pt]=Z),Z.matrix.fromArray(Nt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Nt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(H.x,H.y,H.width,H.height),Pt===0&&(y.matrix.copy(Z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Z)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=d.getDepthInformation(ut[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let ut=0;ut<v.length;ut++){const rt=w[ut],Tt=v[ut];rt!==null&&Tt!==void 0&&Tt.update(rt,it,h||r)}_.render(t,y),ct&&ct(V,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}const qt=new jl;qt.setAnimationLoop(Rt),this.setAnimationLoop=function(V){ct=V},this.dispose=function(){}}}const gi=new Mn,v3=new le;function x3(n,t){function e(u,m){u.matrixAutoUpdate===!0&&u.updateMatrix(),m.value.copy(u.matrix)}function i(u,m){m.color.getRGB(u.fogColor.value,$l(n)),m.isFog?(u.fogNear.value=m.near,u.fogFar.value=m.far):m.isFogExp2&&(u.fogDensity.value=m.density)}function s(u,m,S,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(u,m):m.isMeshToonMaterial?(a(u,m),d(u,m)):m.isMeshPhongMaterial?(a(u,m),l(u,m)):m.isMeshStandardMaterial?(a(u,m),f(u,m),m.isMeshPhysicalMaterial&&p(u,m,w)):m.isMeshMatcapMaterial?(a(u,m),g(u,m)):m.isMeshDepthMaterial?a(u,m):m.isMeshDistanceMaterial?(a(u,m),_(u,m)):m.isMeshNormalMaterial?a(u,m):m.isLineBasicMaterial?(r(u,m),m.isLineDashedMaterial&&o(u,m)):m.isPointsMaterial?c(u,m,S,v):m.isSpriteMaterial?h(u,m):m.isShadowMaterial?(u.color.value.copy(m.color),u.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(u,m){u.opacity.value=m.opacity,m.color&&u.diffuse.value.copy(m.color),m.emissive&&u.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(u.map.value=m.map,e(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,e(m.alphaMap,u.alphaMapTransform)),m.bumpMap&&(u.bumpMap.value=m.bumpMap,e(m.bumpMap,u.bumpMapTransform),u.bumpScale.value=m.bumpScale,m.side===Be&&(u.bumpScale.value*=-1)),m.normalMap&&(u.normalMap.value=m.normalMap,e(m.normalMap,u.normalMapTransform),u.normalScale.value.copy(m.normalScale),m.side===Be&&u.normalScale.value.negate()),m.displacementMap&&(u.displacementMap.value=m.displacementMap,e(m.displacementMap,u.displacementMapTransform),u.displacementScale.value=m.displacementScale,u.displacementBias.value=m.displacementBias),m.emissiveMap&&(u.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,u.emissiveMapTransform)),m.specularMap&&(u.specularMap.value=m.specularMap,e(m.specularMap,u.specularMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest);const S=t.get(m),v=S.envMap,w=S.envMapRotation;if(v&&(u.envMap.value=v,gi.copy(w),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.envMapRotation.value.setFromMatrix4(v3.makeRotationFromEuler(gi)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=m.reflectivity,u.ior.value=m.ior,u.refractionRatio.value=m.refractionRatio),m.lightMap){u.lightMap.value=m.lightMap;const U=n._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=m.lightMapIntensity*U,e(m.lightMap,u.lightMapTransform)}m.aoMap&&(u.aoMap.value=m.aoMap,u.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,u.aoMapTransform))}function r(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,m.map&&(u.map.value=m.map,e(m.map,u.mapTransform))}function o(u,m){u.dashSize.value=m.dashSize,u.totalSize.value=m.dashSize+m.gapSize,u.scale.value=m.scale}function c(u,m,S,v){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.size.value=m.size*S,u.scale.value=v*.5,m.map&&(u.map.value=m.map,e(m.map,u.uvTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,e(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function h(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.rotation.value=m.rotation,m.map&&(u.map.value=m.map,e(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,e(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function l(u,m){u.specular.value.copy(m.specular),u.shininess.value=Math.max(m.shininess,1e-4)}function d(u,m){m.gradientMap&&(u.gradientMap.value=m.gradientMap)}function f(u,m){u.metalness.value=m.metalness,m.metalnessMap&&(u.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,u.metalnessMapTransform)),u.roughness.value=m.roughness,m.roughnessMap&&(u.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,u.roughnessMapTransform)),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)}function p(u,m,S){u.ior.value=m.ior,m.sheen>0&&(u.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),u.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(u.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,u.sheenColorMapTransform)),m.sheenRoughnessMap&&(u.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,u.sheenRoughnessMapTransform))),m.clearcoat>0&&(u.clearcoat.value=m.clearcoat,u.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(u.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,u.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(u.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&u.clearcoatNormalScale.value.negate())),m.iridescence>0&&(u.iridescence.value=m.iridescence,u.iridescenceIOR.value=m.iridescenceIOR,u.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(u.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,u.iridescenceMapTransform)),m.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),m.transmission>0&&(u.transmission.value=m.transmission,u.transmissionSamplerMap.value=S.texture,u.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(u.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,u.transmissionMapTransform)),u.thickness.value=m.thickness,m.thicknessMap&&(u.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=m.attenuationDistance,u.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(u.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(u.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=m.specularIntensity,u.specularColor.value.copy(m.specularColor),m.specularColorMap&&(u.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,u.specularColorMapTransform)),m.specularIntensityMap&&(u.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,m){m.matcap&&(u.matcap.value=m.matcap)}function _(u,m){const S=t.get(m).light;u.referencePosition.value.setFromMatrixPosition(S.matrixWorld),u.nearDistance.value=S.shadow.camera.near,u.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function y3(n,t,e,i){let s={},a={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){const w=v.program;i.uniformBlockBinding(S,w)}function h(S,v){let w=s[S.id];w===void 0&&(g(S),w=l(S),s[S.id]=w,S.addEventListener("dispose",u));const U=v.program;i.updateUBOMapping(S,U);const R=t.render.frame;a[S.id]!==R&&(f(S),a[S.id]=R)}function l(S){const v=d();S.__bindingPointIndex=v;const w=n.createBuffer(),U=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function d(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=s[S.id],w=S.uniforms,U=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,T=w.length;R<T;R++){const I=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,y=I.length;M<y;M++){const L=I[M];if(p(L,R,M,U)===!0){const D=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let N=0;N<A.length;N++){const X=A[N],Y=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,D+O,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,v,w,U){const R=S.value,T=v+"_"+w;if(U[T]===void 0)return typeof R=="number"||typeof R=="boolean"?U[T]=R:U[T]=R.clone(),!0;{const I=U[T];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return U[T]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(S){const v=S.uniforms;let w=0;const U=16;for(let T=0,I=v.length;T<I;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,L=M.length;y<L;y++){const D=M[y],A=Array.isArray(D.value)?D.value:[D.value];for(let O=0,N=A.length;O<N;O++){const X=A[O],Y=_(X),z=w%U;z!==0&&U-z<Y.boundary&&(w+=U-z),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=Y.storage}}}const R=w%U;return R>0&&(w+=U-R),S.__size=w,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function u(S){const v=S.target;v.removeEventListener("dispose",u);const w=r.indexOf(v.__bindingPointIndex);r.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function m(){for(const S in s)n.deleteBuffer(s[S]);r=[],s={},a={}}return{bind:c,update:h,dispose:m}}class Gh{constructor(t={}){const{canvas:e=d1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,u=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const v=this;let w=!1,U=0,R=0,T=null,I=-1,M=null;const y=new Ae,L=new Ae;let D=null;const A=new Gt(0);let O=0,N=e.width,X=e.height,Y=1,z=null,j=null;const K=new Ae(0,0,N,X),ct=new Ae(0,0,N,X);let Rt=!1;const qt=new jo;let V=!1,it=!1;const ut=new le,rt=new et,Tt=new P,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return T===null?Y:1}let H=i;function Z(E,k){const G=e.getContext(E,k);return G!==null?G:null}try{const E={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",At,!1),H===null){const k="webgl2";if(H=Z(k,E),H===null)throw Z(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,ht,st,at,b,x,F,q,$,tt,Ct,nt,St,It,lt,xt,Ot,yt,Mt,$t,Zt,ne,Qt,de;function bt(){J=new Cp(H),J.init(),ht=new Ep(H,J,t),ne=new d3(H,J),st=new h3(H),at=new Ip(H),b=new Z4,x=new l3(H,J,st,b,ht,ne,at),F=new bp(v),q=new Rp(v),$=new H1(H),Qt=new Mp(H,$),tt=new Pp(H,$,at,Qt),Ct=new Up(H,tt,$,at),Mt=new Dp(H,ht,x),xt=new wp(b),nt=new $4(v,F,q,J,ht,Qt,xt),St=new x3(v,b),It=new K4,lt=new i3(J),yt=new yp(v,F,q,st,Ct,f,c),Ot=new c3(v,Ct,ht),de=new y3(H,at,ht,st),$t=new Sp(H,J,at),Zt=new Lp(H,J,at),at.programs=nt.programs,v.capabilities=ht,v.extensions=J,v.properties=b,v.renderLists=It,v.shadowMap=Ot,v.state=st,v.info=at}bt();const C=new _3(v,H);this.xr=C,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(N,X,!1))},this.getSize=function(E){return E.set(N,X)},this.setSize=function(E,k,G=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,X=k,e.width=Math.floor(E*Y),e.height=Math.floor(k*Y),G===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(N*Y,X*Y).floor()},this.setDrawingBufferSize=function(E,k,G){N=E,X=k,Y=G,e.width=Math.floor(E*G),e.height=Math.floor(k*G),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,k,G,W){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,k,G,W),st.viewport(y.copy(K).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,k,G,W){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,k,G,W),st.scissor(L.copy(ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(E){st.setScissorTest(Rt=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(E=!0,k=!0,G=!0){let W=0;if(E){let B=!1;if(T!==null){const gt=T.texture.format;B=gt===Nl||gt===kl||gt===Ul}if(B){const gt=T.texture.type,Et=gt===Qn||gt===gs||gt===Cl||gt===ra||gt===Ll||gt===Il,Dt=yt.getClearColor(),Ht=yt.getClearAlpha(),zt=Dt.r,Ft=Dt.g,Bt=Dt.b;Et?(p[0]=zt,p[1]=Ft,p[2]=Bt,p[3]=Ht,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=zt,g[1]=Ft,g[2]=Bt,g[3]=Ht,H.clearBufferiv(H.COLOR,0,g))}else W|=H.COLOR_BUFFER_BIT}k&&(W|=H.DEPTH_BUFFER_BIT),G&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),It.dispose(),lt.dispose(),b.dispose(),F.dispose(),q.dispose(),Ct.dispose(),Qt.dispose(),de.dispose(),nt.dispose(),C.dispose(),C.removeEventListener("sessionstart",cn),C.removeEventListener("sessionend",hn),hi.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=at.autoReset,k=Ot.enabled,G=Ot.autoUpdate,W=Ot.needsUpdate,B=Ot.type;bt(),at.autoReset=E,Ot.enabled=k,Ot.autoUpdate=G,Ot.needsUpdate=W,Ot.type=B}function At(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){const k=E.target;k.removeEventListener("dispose",Lt),ae(k)}function ae(E){ue(E),b.remove(E)}function ue(E){const k=b.get(E).programs;k!==void 0&&(k.forEach(function(G){nt.releaseProgram(G)}),E.isShaderMaterial&&nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,G,W,B,gt){k===null&&(k=Pt);const Et=B.isMesh&&B.matrixWorld.determinant()<0,Dt=Gd(E,k,G,W,B);st.setMaterial(W,Et);let Ht=G.index,zt=1;if(W.wireframe===!0){if(Ht=tt.getWireframeAttribute(G),Ht===void 0)return;zt=2}const Ft=G.drawRange,Bt=G.attributes.position;let xe=Ft.start*zt,Ye=(Ft.start+Ft.count)*zt;gt!==null&&(xe=Math.max(xe,gt.start*zt),Ye=Math.min(Ye,(gt.start+gt.count)*zt)),Ht!==null?(xe=Math.max(xe,0),Ye=Math.min(Ye,Ht.count)):Bt!=null&&(xe=Math.max(xe,0),Ye=Math.min(Ye,Bt.count));const be=Ye-xe;if(be<0||be===1/0)return;Qt.setup(B,W,Dt,G,Ht);let wn,_e=$t;if(Ht!==null&&(wn=$.get(Ht),_e=Zt,_e.setIndex(wn)),B.isMesh)W.wireframe===!0?(st.setLineWidth(W.wireframeLinewidth*Nt()),_e.setMode(H.LINES)):_e.setMode(H.TRIANGLES);else if(B.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),st.setLineWidth(Vt*Nt()),B.isLineSegments?_e.setMode(H.LINES):B.isLineLoop?_e.setMode(H.LINE_LOOP):_e.setMode(H.LINE_STRIP)}else B.isPoints?_e.setMode(H.POINTS):B.isSprite&&_e.setMode(H.TRIANGLES);if(B.isBatchedMesh)_e.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)_e.renderInstances(xe,be,B.count);else if(G.isInstancedBufferGeometry){const Vt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Rr=Math.min(G.instanceCount,Vt);_e.renderInstances(xe,be,Rr)}else _e.render(xe,be)};function ge(E,k,G){E.transparent===!0&&E.side===Pe&&E.forceSinglePass===!1?(E.side=Be,E.needsUpdate=!0,ua(E,k,G),E.side=ii,E.needsUpdate=!0,ua(E,k,G),E.side=Pe):ua(E,k,G)}this.compile=function(E,k,G=null){G===null&&(G=E),u=lt.get(G),u.init(),S.push(u),G.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),E!==G&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights(v._useLegacyLights);const W=new Set;return E.traverse(function(B){const gt=B.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){const Dt=gt[Et];ge(Dt,G,B),W.add(Dt)}else ge(gt,G,B),W.add(gt)}),S.pop(),u=null,W},this.compileAsync=function(E,k,G=null){const W=this.compile(E,k,G);return new Promise(B=>{function gt(){if(W.forEach(function(Et){b.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){B(E);return}setTimeout(gt,10)}J.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let De=null;function re(E){De&&De(E)}function cn(){hi.stop()}function hn(){hi.start()}const hi=new jl;hi.setAnimationLoop(re),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(E){De=E,C.setAnimationLoop(E),E===null?hi.stop():hi.start()},C.addEventListener("sessionstart",cn),C.addEventListener("sessionend",hn),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(k),k=C.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,T),u=lt.get(E,S.length),u.init(),S.push(u),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),qt.setFromProjectionMatrix(ut),it=this.localClippingEnabled,V=xt.init(this.clippingPlanes,it),_=It.get(E,m.length),_.init(),m.push(_),pc(E,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,j),this.info.render.frame++,V===!0&&xt.beginShadows();const G=u.state.shadowsArray;if(Ot.render(G,E,k),V===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1)&&yt.render(_,E),u.setupLights(v._useLegacyLights),k.isArrayCamera){const W=k.cameras;for(let B=0,gt=W.length;B<gt;B++){const Et=W[B];mc(_,E,Et,Et.viewport)}}else mc(_,E,k);T!==null&&(x.updateMultisampleRenderTarget(T),x.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,k),Qt.resetDefaultState(),I=-1,M=null,S.pop(),S.length>0?u=S[S.length-1]:u=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function pc(E,k,G,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qt.intersectsSprite(E)){W&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);const Et=Ct.update(E),Dt=E.material;Dt.visible&&_.push(E,Et,Dt,G,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qt.intersectsObject(E))){const Et=Ct.update(E),Dt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Tt.copy(Et.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(Dt)){const Ht=Et.groups;for(let zt=0,Ft=Ht.length;zt<Ft;zt++){const Bt=Ht[zt],xe=Dt[Bt.materialIndex];xe&&xe.visible&&_.push(E,Et,xe,G,Tt.z,Bt)}}else Dt.visible&&_.push(E,Et,Dt,G,Tt.z,null)}}const gt=E.children;for(let Et=0,Dt=gt.length;Et<Dt;Et++)pc(gt[Et],k,G,W)}function mc(E,k,G,W){const B=E.opaque,gt=E.transmissive,Et=E.transparent;u.setupLightsView(G),V===!0&&xt.setGlobalState(v.clippingPlanes,G),gt.length>0&&Bd(B,gt,k,G),W&&st.viewport(y.copy(W)),B.length>0&&da(B,k,G),gt.length>0&&da(gt,k,G),Et.length>0&&da(Et,k,G),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Bd(E,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(u.state.transmissionRenderTarget===null){u.state.transmissionRenderTarget=new Li(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?tr:Qn,minFilter:Ai,samples:4,stencilBuffer:a});const zt=b.get(u.state.transmissionRenderTarget);zt.__isTransmissionRenderTarget=!0}const gt=u.state.transmissionRenderTarget;v.getDrawingBufferSize(rt),gt.setSize(rt.x,rt.y);const Et=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(A),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Dt=v.toneMapping;v.toneMapping=jn,da(E,G,W),x.updateMultisampleRenderTarget(gt),x.updateRenderTargetMipmap(gt);let Ht=!1;for(let zt=0,Ft=k.length;zt<Ft;zt++){const Bt=k[zt],xe=Bt.object,Ye=Bt.geometry,be=Bt.material,wn=Bt.group;if(be.side===Pe&&xe.layers.test(W.layers)){const _e=be.side;be.side=Be,be.needsUpdate=!0,gc(xe,G,W,Ye,be,wn),be.side=_e,be.needsUpdate=!0,Ht=!0}}Ht===!0&&(x.updateMultisampleRenderTarget(gt),x.updateRenderTargetMipmap(gt)),v.setRenderTarget(Et),v.setClearColor(A,O),v.toneMapping=Dt}function da(E,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,gt=E.length;B<gt;B++){const Et=E[B],Dt=Et.object,Ht=Et.geometry,zt=W===null?Et.material:W,Ft=Et.group;Dt.layers.test(G.layers)&&gc(Dt,k,G,Ht,zt,Ft)}}function gc(E,k,G,W,B,gt){E.onBeforeRender(v,k,G,W,B,gt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,k,G,W,E,gt),B.transparent===!0&&B.side===Pe&&B.forceSinglePass===!1?(B.side=Be,B.needsUpdate=!0,v.renderBufferDirect(G,k,W,B,E,gt),B.side=ii,B.needsUpdate=!0,v.renderBufferDirect(G,k,W,B,E,gt),B.side=Pe):v.renderBufferDirect(G,k,W,B,E,gt),E.onAfterRender(v,k,G,W,B,gt)}function ua(E,k,G){k.isScene!==!0&&(k=Pt);const W=b.get(E),B=u.state.lights,gt=u.state.shadowsArray,Et=B.state.version,Dt=nt.getParameters(E,B.state,gt,k,G),Ht=nt.getProgramCacheKey(Dt);let zt=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?q:F).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Lt),zt=new Map,W.programs=zt);let Ft=zt.get(Ht);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===Et)return vc(E,Dt),Ft}else Dt.uniforms=nt.getUniforms(E),E.onBuild(G,Dt,v),E.onBeforeCompile(Dt,v),Ft=nt.acquireProgram(Dt,Ht),zt.set(Ht,Ft),W.uniforms=Dt.uniforms;const Bt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=xt.uniform),vc(E,Dt),W.needsLights=Wd(E),W.lightsStateVersion=Et,W.needsLights&&(Bt.ambientLightColor.value=B.state.ambient,Bt.lightProbe.value=B.state.probe,Bt.directionalLights.value=B.state.directional,Bt.directionalLightShadows.value=B.state.directionalShadow,Bt.spotLights.value=B.state.spot,Bt.spotLightShadows.value=B.state.spotShadow,Bt.rectAreaLights.value=B.state.rectArea,Bt.ltc_1.value=B.state.rectAreaLTC1,Bt.ltc_2.value=B.state.rectAreaLTC2,Bt.pointLights.value=B.state.point,Bt.pointLightShadows.value=B.state.pointShadow,Bt.hemisphereLights.value=B.state.hemi,Bt.directionalShadowMap.value=B.state.directionalShadowMap,Bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Bt.spotShadowMap.value=B.state.spotShadowMap,Bt.spotLightMatrix.value=B.state.spotLightMatrix,Bt.spotLightMap.value=B.state.spotLightMap,Bt.pointShadowMap.value=B.state.pointShadowMap,Bt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function _c(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Ya.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function vc(E,k){const G=b.get(E);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Gd(E,k,G,W,B){k.isScene!==!0&&(k=Pt),x.resetTextureUnits();const gt=k.fog,Et=W.isMeshStandardMaterial?k.environment:null,Dt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ri,Ht=(W.isMeshStandardMaterial?q:F).get(W.envMap||Et),zt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!G.morphAttributes.position,xe=!!G.morphAttributes.normal,Ye=!!G.morphAttributes.color;let be=jn;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(be=v.toneMapping);const wn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=wn!==void 0?wn.length:0,Vt=b.get(W),Rr=u.state.lights;if(V===!0&&(it===!0||E!==M)){const Je=E===M&&W.id===I;xt.setState(W,E,Je)}let fe=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Rr.state.version||Vt.outputColorSpace!==Dt||B.isBatchedMesh&&Vt.batching===!1||!B.isBatchedMesh&&Vt.batching===!0||B.isInstancedMesh&&Vt.instancing===!1||!B.isInstancedMesh&&Vt.instancing===!0||B.isSkinnedMesh&&Vt.skinning===!1||!B.isSkinnedMesh&&Vt.skinning===!0||B.isInstancedMesh&&Vt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Vt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Vt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Vt.instancingMorph===!1&&B.morphTexture!==null||Vt.envMap!==Ht||W.fog===!0&&Vt.fog!==gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==xt.numPlanes||Vt.numIntersection!==xt.numIntersection)||Vt.vertexAlphas!==zt||Vt.vertexTangents!==Ft||Vt.morphTargets!==Bt||Vt.morphNormals!==xe||Vt.morphColors!==Ye||Vt.toneMapping!==be||Vt.morphTargetsCount!==_e)&&(fe=!0):(fe=!0,Vt.__version=W.version);let li=Vt.currentProgram;fe===!0&&(li=ua(W,k,B));let xc=!1,Es=!1,Cr=!1;const Ue=li.getUniforms(),Bn=Vt.uniforms;if(st.useProgram(li.program)&&(xc=!0,Es=!0,Cr=!0),W.id!==I&&(I=W.id,Es=!0),xc||M!==E){Ue.setValue(H,"projectionMatrix",E.projectionMatrix),Ue.setValue(H,"viewMatrix",E.matrixWorldInverse);const Je=Ue.map.cameraPosition;Je!==void 0&&Je.setValue(H,Tt.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&Ue.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ue.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Es=!0,Cr=!0)}if(B.isSkinnedMesh){Ue.setOptional(H,B,"bindMatrix"),Ue.setOptional(H,B,"bindMatrixInverse");const Je=B.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ue.setValue(H,"boneTexture",Je.boneTexture,x))}B.isBatchedMesh&&(Ue.setOptional(H,B,"batchingTexture"),Ue.setValue(H,"batchingTexture",B._matricesTexture,x));const Pr=G.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Mt.update(B,G,li),(Es||Vt.receiveShadow!==B.receiveShadow)&&(Vt.receiveShadow=B.receiveShadow,Ue.setValue(H,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Bn.envMap.value=Ht,Bn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Bn.envMapIntensity.value=k.environmentIntensity),Es&&(Ue.setValue(H,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Vd(Bn,Cr),gt&&W.fog===!0&&St.refreshFogUniforms(Bn,gt),St.refreshMaterialUniforms(Bn,W,Y,X,u.state.transmissionRenderTarget),Ya.upload(H,_c(Vt),Bn,x)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ya.upload(H,_c(Vt),Bn,x),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ue.setValue(H,"center",B.center),Ue.setValue(H,"modelViewMatrix",B.modelViewMatrix),Ue.setValue(H,"normalMatrix",B.normalMatrix),Ue.setValue(H,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Je=W.uniformsGroups;for(let Lr=0,Xd=Je.length;Lr<Xd;Lr++){const yc=Je[Lr];de.update(yc,li),de.bind(yc,li)}}return li}function Vd(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Wd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,G){b.get(E.texture).__webglTexture=k,b.get(E.depthTexture).__webglTexture=G;const W=b.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const G=b.get(E);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,G=0){T=E,U=k,R=G;let W=!0,B=null,gt=!1,Et=!1;if(E){const Ht=b.get(E);Ht.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(H.FRAMEBUFFER,null),W=!1):Ht.__webglFramebuffer===void 0?x.setupRenderTarget(E):Ht.__hasExternalTextures&&x.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);const Ft=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[k])?B=Ft[k][G]:B=Ft[k],gt=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?B=b.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?B=Ft[G]:B=Ft,y.copy(E.viewport),L.copy(E.scissor),D=E.scissorTest}else y.copy(K).multiplyScalar(Y).floor(),L.copy(ct).multiplyScalar(Y).floor(),D=Rt;if(st.bindFramebuffer(H.FRAMEBUFFER,B)&&W&&st.drawBuffers(E,B),st.viewport(y),st.scissor(L),st.setScissorTest(D),gt){const Ht=b.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ht.__webglTexture,G)}else if(Et){const Ht=b.get(E.texture),zt=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.__webglTexture,G||0,zt)}I=-1},this.readRenderTargetPixels=function(E,k,G,W,B,gt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){st.bindFramebuffer(H.FRAMEBUFFER,Dt);try{const Ht=E.texture,zt=Ht.format,Ft=Ht.type;if(zt!==xn&&ne.convert(zt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ft===tr&&(J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float"));if(Ft!==Qn&&ne.convert(Ft)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&Ft!==Nn&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&G>=0&&G<=E.height-B&&H.readPixels(k,G,W,B,ne.convert(zt),ne.convert(Ft),gt)}finally{const Ht=T!==null?b.get(T).__webglFramebuffer:null;st.bindFramebuffer(H.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(E,k,G=0){const W=Math.pow(2,-G),B=Math.floor(k.image.width*W),gt=Math.floor(k.image.height*W);x.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,G,0,0,E.x,E.y,B,gt),st.unbindTexture()},this.copyTextureToTexture=function(E,k,G,W=0){const B=k.image.width,gt=k.image.height,Et=ne.convert(G.format),Dt=ne.convert(G.type);x.setTexture2D(G,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,E.x,E.y,B,gt,Et,Dt,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Et,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,W,E.x,E.y,Et,Dt,k.image),W===0&&G.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(E,k,G,W,B=0){const gt=Math.round(E.max.x-E.min.x),Et=Math.round(E.max.y-E.min.y),Dt=E.max.z-E.min.z+1,Ht=ne.convert(W.format),zt=ne.convert(W.type);let Ft;if(W.isData3DTexture)x.setTexture3D(W,0),Ft=H.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)x.setTexture2DArray(W,0),Ft=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Bt=H.getParameter(H.UNPACK_ROW_LENGTH),xe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ye=H.getParameter(H.UNPACK_SKIP_PIXELS),be=H.getParameter(H.UNPACK_SKIP_ROWS),wn=H.getParameter(H.UNPACK_SKIP_IMAGES),_e=G.isCompressedTexture?G.mipmaps[B]:G.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,_e.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,E.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,E.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?H.texSubImage3D(Ft,B,k.x,k.y,k.z,gt,Et,Dt,Ht,zt,_e.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Ft,B,k.x,k.y,k.z,gt,Et,Dt,Ht,_e.data):H.texSubImage3D(Ft,B,k.x,k.y,k.z,gt,Et,Dt,Ht,zt,_e),H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ye),H.pixelStorei(H.UNPACK_SKIP_ROWS,be),H.pixelStorei(H.UNPACK_SKIP_IMAGES,wn),B===0&&W.generateMipmaps&&H.generateMipmap(Ft),st.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),st.unbindTexture()},this.resetState=function(){U=0,R=0,T=null,st.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Jo?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===_r?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class la{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new la(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rd extends ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class M3 extends Ie{constructor(t=null,e=1,i=1,s,a,r,o,c,h=Xe,l=Xe,d,f){super(null,r,o,c,h,l,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vh extends Ge{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new le,Wh=new le,ka=[],Xh=new Ni,S3=new le,Rs=new Q,Cs=new ca;class ar extends Q{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,S3)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ts),Xh.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ca),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ts),Cs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(i),t.ray.intersectsSphere(Cs)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ts),Wh.multiplyMatrices(i,ts),Rs.matrixWorld=Wh,Rs.raycast(t,ka);for(let r=0,o=ka.length;r<o;r++){const c=ka[r];c.instanceId=a,c.object=this,e.push(c)}ka.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new M3(new Float32Array(s*this.count),s,this.count,Dl,Nn));const a=this.morphTexture.source.data.data;let r=0;for(let h=0;h<i.length;h++)r+=i[h];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*t;a[c]=o,a.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xr extends Ie{constructor(t,e,i,s,a,r,o,c,h){super(t,e,i,s,a,r,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,c=a-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=i[s]-r,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(a-1);const l=i[s],f=i[s+1]-l,p=(r-l)/f;return(s+p)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=e||(r.isVector2?new et:new P);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,s=[],a=[],r=[],o=new P,c=new le;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}a[0]=new P,r[0]=new P;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);l<=h&&(h=l,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),f<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Me(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(e===!0){let p=Math.acos(Me(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tc extends En{constructor(t=0,e=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new et){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=h-this.aY;c=f*l-p*d+this.aX,h=f*d+p*l+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class E3 extends tc{constructor(t,e,i,s,a,r){super(t,e,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ec(){let n=0,t=0,e=0,i=0;function s(a,r,o,c){n=a,t=o,e=-3*a+3*r-2*o-c,i=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,h){s(r,o,h*(o-a),h*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,h,l,d){let f=(r-a)/h-(o-a)/(h+l)+(o-r)/l,p=(o-r)/l-(c-r)/(l+d)+(c-o)/d;f*=l,p*=l,s(r,o,f,p)},calc:function(a){const r=a*a,o=r*a;return n+t*a+e*r+i*o}}}const Na=new P,ho=new ec,lo=new ec,uo=new ec;class od extends En{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let h,l;this.closed||o>0?h=s[(o-1)%a]:(Na.subVectors(s[0],s[1]).add(s[0]),h=Na);const d=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?l=s[(o+2)%a]:(Na.subVectors(s[a-1],s[a-2]).add(s[a-1]),l=Na),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),u=Math.pow(f.distanceToSquared(l),p);_<1e-4&&(_=1),g<1e-4&&(g=_),u<1e-4&&(u=_),ho.initNonuniformCatmullRom(h.x,d.x,f.x,l.x,g,_,u),lo.initNonuniformCatmullRom(h.y,d.y,f.y,l.y,g,_,u),uo.initNonuniformCatmullRom(h.z,d.z,f.z,l.z,g,_,u)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(h.x,d.x,f.x,l.x,this.tension),lo.initCatmullRom(h.y,d.y,f.y,l.y,this.tension),uo.initCatmullRom(h.z,d.z,f.z,l.z,this.tension));return i.set(ho.calc(c),lo.calc(c),uo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qh(n,t,e,i,s){const a=(i-t)*.5,r=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+a+r)*c+(-3*e+3*i-2*a-r)*o+a*n+e}function w3(n,t){const e=1-n;return e*e*t}function b3(n,t){return 2*(1-n)*n*t}function T3(n,t){return n*n*t}function Bs(n,t,e,i){return w3(n,t)+b3(n,e)+T3(n,i)}function A3(n,t){const e=1-n;return e*e*e*t}function R3(n,t){const e=1-n;return 3*e*e*n*t}function C3(n,t){return 3*(1-n)*n*n*t}function P3(n,t){return n*n*n*t}function Gs(n,t,e,i,s){return A3(n,t)+R3(n,e)+C3(n,i)+P3(n,s)}class cd extends En{constructor(t=new et,e=new et,i=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new et){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Gs(t,s.x,a.x,r.x,o.x),Gs(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class L3 extends En{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Gs(t,s.x,a.x,r.x,o.x),Gs(t,s.y,a.y,r.y,o.y),Gs(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hd extends En{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I3 extends En{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends En{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(Bs(t,s.x,a.x,r.x),Bs(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dd extends En{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(Bs(t,s.x,a.x,r.x),Bs(t,s.y,a.y,r.y),Bs(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const i=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],h=s[r],l=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(qh(o,c.x,h.x,l.x,d.x),qh(o,c.y,h.y,l.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var rr=Object.freeze({__proto__:null,ArcCurve:E3,CatmullRomCurve3:od,CubicBezierCurve:cd,CubicBezierCurve3:L3,EllipseCurve:tc,LineCurve:hd,LineCurve3:I3,QuadraticBezierCurve:ld,QuadraticBezierCurve3:dd,SplineCurve:ud});class D3 extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rr[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const r=s[a]-i,o=this.curves[a],c=o.getLength(),h=c===0?0:1-r/c;return o.getPointAt(h,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let h=0;h<c.length;h++){const l=c[h];i&&i.equals(l)||(e.push(l),i=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new rr[s.type]().fromJSON(s))}return this}}class or extends D3{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new hd(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new ld(this.currentPoint.clone(),new et(t,e),new et(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,r){const o=new cd(this.currentPoint.clone(),new et(t,e),new et(i,s),new et(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new ud(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,a,r),this}absarc(t,e,i,s,a,r){return this.absellipse(t,e,i,i,s,a,r),this}ellipse(t,e,i,s,a,r,o,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,i,s,a,r,o,c),this}absellipse(t,e,i,s,a,r,o,c){const h=new tc(t,e,i,s,a,r,o,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nc extends we{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Me(s,0,Math.PI*2);const a=[],r=[],o=[],c=[],h=[],l=1/e,d=new P,f=new et,p=new P,g=new P,_=new P;let u=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:u=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-u,p.z=m*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:u=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-u,p.z=m*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const v=i+S*l*s,w=Math.sin(v),U=Math.cos(v);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*w,d.y=t[R].y,d.z=t[R].x*U,r.push(d.x,d.y,d.z),f.x=S/e,f.y=R/(t.length-1),o.push(f.x,f.y);const T=c[3*R+0]*w,I=c[3*R+1],M=c[3*R+0]*U;h.push(T,I,M)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){const w=v+S*t.length,U=w,R=w+t.length,T=w+t.length+1,I=w+1;a.push(U,R,I),a.push(T,I,R)}this.setIndex(a),this.setAttribute("position",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.points,t.segments,t.phiStart,t.phiLength)}}class Vs extends nc{constructor(t=1,e=1,i=4,s=8){const a=new or;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Vs(t.radius,t.length,t.capSegments,t.radialSegments)}}class cr extends we{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],c=[],h=new P,l=new et;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=i+d/e*s;h.x=t*Math.cos(p),h.y=t*Math.sin(p),r.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(r[f]/t+1)/2,l.y=(r[f+1]/t+1)/2,c.push(l.x,l.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Kt extends we{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),a=Math.floor(a);const l=[],d=[],f=[],p=[];let g=0;const _=[],u=i/2;let m=0;S(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(l),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(p,2));function S(){const w=new P,U=new P;let R=0;const T=(e-t)/i;for(let I=0;I<=a;I++){const M=[],y=I/a,L=y*(e-t)+t;for(let D=0;D<=s;D++){const A=D/s,O=A*c+o,N=Math.sin(O),X=Math.cos(O);U.x=L*N,U.y=-y*i+u,U.z=L*X,d.push(U.x,U.y,U.z),w.set(N,T,X).normalize(),f.push(w.x,w.y,w.z),p.push(A,1-y),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<a;M++){const y=_[M][I],L=_[M+1][I],D=_[M+1][I+1],A=_[M][I+1];l.push(y,L,A),l.push(L,D,A),R+=6}h.addGroup(m,R,0),m+=R}function v(w){const U=g,R=new et,T=new P;let I=0;const M=w===!0?t:e,y=w===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,u*y,0),f.push(0,y,0),p.push(.5,.5),g++;const L=g;for(let D=0;D<=s;D++){const O=D/s*c+o,N=Math.cos(O),X=Math.sin(O);T.x=M*X,T.y=u*y,T.z=M*N,d.push(T.x,T.y,T.z),f.push(0,y,0),R.x=N*.5+.5,R.y=X*.5*y+.5,p.push(R.x,R.y),g++}for(let D=0;D<s;D++){const A=U+D,O=L+D;w===!0?l.push(O,O+1,A):l.push(O+1,O,A),I+=3}h.addGroup(m,I,w===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class si extends Kt{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new si(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ti extends or{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new or().fromJSON(s))}return this}}const U3={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let a=fd(n,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,h,l,d,f,p;if(i&&(a=F3(n,t,a,e)),n.length>80*e){o=h=n[0],c=l=n[1];for(let g=e;g<s;g+=e)d=n[g],f=n[g+1],d<o&&(o=d),f<c&&(c=f),d>h&&(h=d),f>l&&(l=f);p=Math.max(h-o,l-c),p=p!==0?32767/p:0}return ta(a,r,e,o,c,p,0),r}};function fd(n,t,e,i,s){let a,r;if(s===J3(n,t,e,i)>0)for(a=t;a<e;a+=i)r=Yh(a,n[a],n[a+1],r);else for(a=e-i;a>=t;a-=i)r=Yh(a,n[a],n[a+1],r);return r&&yr(r,r.next)&&(na(r),r=r.next),r}function Ii(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(yr(e,e.next)||ve(e.prev,e,e.next)===0)){if(na(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ta(n,t,e,i,s,a,r){if(!n)return;!r&&a&&W3(n,i,s,a);let o=n,c,h;for(;n.prev!==n.next;){if(c=n.prev,h=n.next,a?N3(n,i,s,a):k3(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),na(n),n=h.next,o=h.next;continue}if(n=h,n===o){r?r===1?(n=H3(Ii(n),t,e),ta(n,t,e,i,s,a,2)):r===2&&O3(n,t,e,i,s,a):ta(Ii(n),t,e,i,s,a,1);break}}}function k3(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const s=t.x,a=e.x,r=i.x,o=t.y,c=e.y,h=i.y,l=s<a?s<r?s:r:a<r?a:r,d=o<c?o<h?o:h:c<h?c:h,f=s>a?s>r?s:r:a>r?a:r,p=o>c?o>h?o:h:c>h?c:h;let g=i.next;for(;g!==t;){if(g.x>=l&&g.x<=f&&g.y>=d&&g.y<=p&&cs(s,o,a,c,r,h,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function N3(n,t,e,i){const s=n.prev,a=n,r=n.next;if(ve(s,a,r)>=0)return!1;const o=s.x,c=a.x,h=r.x,l=s.y,d=a.y,f=r.y,p=o<c?o<h?o:h:c<h?c:h,g=l<d?l<f?l:f:d<f?d:f,_=o>c?o>h?o:h:c>h?c:h,u=l>d?l>f?l:f:d>f?d:f,m=Lo(p,g,t,e,i),S=Lo(_,u,t,e,i);let v=n.prevZ,w=n.nextZ;for(;v&&v.z>=m&&w&&w.z<=S;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=u&&v!==s&&v!==r&&cs(o,l,c,d,h,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=p&&w.x<=_&&w.y>=g&&w.y<=u&&w!==s&&w!==r&&cs(o,l,c,d,h,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=u&&v!==s&&v!==r&&cs(o,l,c,d,h,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=S;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=u&&w!==s&&w!==r&&cs(o,l,c,d,h,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function H3(n,t,e){let i=n;do{const s=i.prev,a=i.next.next;!yr(s,a)&&pd(s,i,i.next,a)&&ea(s,a)&&ea(a,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(a.i/e|0),na(i),na(i.next),i=n=a),i=i.next}while(i!==n);return Ii(i)}function O3(n,t,e,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Y3(r,o)){let c=md(r,o);r=Ii(r,r.next),c=Ii(c,c.next),ta(r,t,e,i,s,a,0),ta(c,t,e,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function F3(n,t,e,i){const s=[];let a,r,o,c,h;for(a=0,r=t.length;a<r;a++)o=t[a]*i,c=a<r-1?t[a+1]*i:n.length,h=fd(n,o,c,i,!1),h===h.next&&(h.steiner=!0),s.push(q3(h));for(s.sort(z3),a=0;a<s.length;a++)e=B3(s[a],e);return e}function z3(n,t){return n.x-t.x}function B3(n,t){const e=G3(n,t);if(!e)return t;const i=md(e,n);return Ii(i,i.next),Ii(e,e.next)}function G3(n,t){let e=t,i=-1/0,s;const a=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=a&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===a))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,h=s.y;let l=1/0,d;e=s;do a>=e.x&&e.x>=c&&a!==e.x&&cs(r<h?a:i,r,c,h,r<h?i:a,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(a-e.x),ea(e,n)&&(d<l||d===l&&(e.x>s.x||e.x===s.x&&V3(s,e)))&&(s=e,l=d)),e=e.next;while(e!==o);return s}function V3(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function W3(n,t,e,i){let s=n;do s.z===0&&(s.z=Lo(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,X3(s)}function X3(n){let t,e,i,s,a,r,o,c,h=1;do{for(e=n,n=null,a=null,r=0;e;){for(r++,i=e,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(c=h;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;e=i}a.nextZ=null,h*=2}while(r>1);return n}function Lo(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function q3(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function cs(n,t,e,i,s,a,r,o){return(s-r)*(t-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(i-o)}function Y3(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!$3(n,t)&&(ea(n,t)&&ea(t,n)&&Z3(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||yr(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function yr(n,t){return n.x===t.x&&n.y===t.y}function pd(n,t,e,i){const s=Oa(ve(n,t,e)),a=Oa(ve(n,t,i)),r=Oa(ve(e,i,n)),o=Oa(ve(e,i,t));return!!(s!==a&&r!==o||s===0&&Ha(n,e,t)||a===0&&Ha(n,i,t)||r===0&&Ha(e,n,i)||o===0&&Ha(e,t,i))}function Ha(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Oa(n){return n>0?1:n<0?-1:0}function $3(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&pd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ea(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function Z3(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function md(n,t){const e=new Io(n.i,n.x,n.y),i=new Io(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function Yh(n,t,e,i){const s=new Io(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Io(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J3(n,t,e,i){let s=0;for(let a=t,r=e-i;a<e;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}class ei{static area(t){const e=t.length;let i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return ei.area(t)<0}static triangulateShape(t,e){const i=[],s=[],a=[];$h(t),Zh(i,t);let r=t.length;e.forEach($h);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Zh(i,e[c]);const o=U3.triangulate(i,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function $h(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Zh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Mr extends we{constructor(t=new ti([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],a=[];for(let o=0,c=t.length;o<c;o++){const h=t[o];r(h)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(a,2)),this.computeVertexNormals();function r(o){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,u=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:K3;let v,w=!1,U,R,T,I;m&&(v=m.getSpacedPoints(l),w=!0,f=!1,U=m.computeFrenetFrames(l,!1),R=new P,T=new P,I=new P),f||(u=0,p=0,g=0,_=0);const M=o.extractPoints(h);let y=M.shape;const L=M.holes;if(!ei.isClockWise(y)){y=y.reverse();for(let Z=0,J=L.length;Z<J;Z++){const ht=L[Z];ei.isClockWise(ht)&&(L[Z]=ht.reverse())}}const A=ei.triangulateShape(y,L),O=y;for(let Z=0,J=L.length;Z<J;Z++){const ht=L[Z];y=y.concat(ht)}function N(Z,J,ht){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(J,ht)}const X=y.length,Y=A.length;function z(Z,J,ht){let st,at,b;const x=Z.x-J.x,F=Z.y-J.y,q=ht.x-Z.x,$=ht.y-Z.y,tt=x*x+F*F,Ct=x*$-F*q;if(Math.abs(Ct)>Number.EPSILON){const nt=Math.sqrt(tt),St=Math.sqrt(q*q+$*$),It=J.x-F/nt,lt=J.y+x/nt,xt=ht.x-$/St,Ot=ht.y+q/St,yt=((xt-It)*$-(Ot-lt)*q)/(x*$-F*q);st=It+x*yt-Z.x,at=lt+F*yt-Z.y;const Mt=st*st+at*at;if(Mt<=2)return new et(st,at);b=Math.sqrt(Mt/2)}else{let nt=!1;x>Number.EPSILON?q>Number.EPSILON&&(nt=!0):x<-Number.EPSILON?q<-Number.EPSILON&&(nt=!0):Math.sign(F)===Math.sign($)&&(nt=!0),nt?(st=-F,at=x,b=Math.sqrt(tt)):(st=x,at=F,b=Math.sqrt(tt/2))}return new et(st/b,at/b)}const j=[];for(let Z=0,J=O.length,ht=J-1,st=Z+1;Z<J;Z++,ht++,st++)ht===J&&(ht=0),st===J&&(st=0),j[Z]=z(O[Z],O[ht],O[st]);const K=[];let ct,Rt=j.concat();for(let Z=0,J=L.length;Z<J;Z++){const ht=L[Z];ct=[];for(let st=0,at=ht.length,b=at-1,x=st+1;st<at;st++,b++,x++)b===at&&(b=0),x===at&&(x=0),ct[st]=z(ht[st],ht[b],ht[x]);K.push(ct),Rt=Rt.concat(ct)}for(let Z=0;Z<u;Z++){const J=Z/u,ht=p*Math.cos(J*Math.PI/2),st=g*Math.sin(J*Math.PI/2)+_;for(let at=0,b=O.length;at<b;at++){const x=N(O[at],j[at],st);rt(x.x,x.y,-ht)}for(let at=0,b=L.length;at<b;at++){const x=L[at];ct=K[at];for(let F=0,q=x.length;F<q;F++){const $=N(x[F],ct[F],st);rt($.x,$.y,-ht)}}}const qt=g+_;for(let Z=0;Z<X;Z++){const J=f?N(y[Z],Rt[Z],qt):y[Z];w?(T.copy(U.normals[0]).multiplyScalar(J.x),R.copy(U.binormals[0]).multiplyScalar(J.y),I.copy(v[0]).add(T).add(R),rt(I.x,I.y,I.z)):rt(J.x,J.y,0)}for(let Z=1;Z<=l;Z++)for(let J=0;J<X;J++){const ht=f?N(y[J],Rt[J],qt):y[J];w?(T.copy(U.normals[Z]).multiplyScalar(ht.x),R.copy(U.binormals[Z]).multiplyScalar(ht.y),I.copy(v[Z]).add(T).add(R),rt(I.x,I.y,I.z)):rt(ht.x,ht.y,d/l*Z)}for(let Z=u-1;Z>=0;Z--){const J=Z/u,ht=p*Math.cos(J*Math.PI/2),st=g*Math.sin(J*Math.PI/2)+_;for(let at=0,b=O.length;at<b;at++){const x=N(O[at],j[at],st);rt(x.x,x.y,d+ht)}for(let at=0,b=L.length;at<b;at++){const x=L[at];ct=K[at];for(let F=0,q=x.length;F<q;F++){const $=N(x[F],ct[F],st);w?rt($.x,$.y+v[l-1].y,v[l-1].x+ht):rt($.x,$.y,d+ht)}}}V(),it();function V(){const Z=s.length/3;if(f){let J=0,ht=X*J;for(let st=0;st<Y;st++){const at=A[st];Tt(at[2]+ht,at[1]+ht,at[0]+ht)}J=l+u*2,ht=X*J;for(let st=0;st<Y;st++){const at=A[st];Tt(at[0]+ht,at[1]+ht,at[2]+ht)}}else{for(let J=0;J<Y;J++){const ht=A[J];Tt(ht[2],ht[1],ht[0])}for(let J=0;J<Y;J++){const ht=A[J];Tt(ht[0]+X*l,ht[1]+X*l,ht[2]+X*l)}}i.addGroup(Z,s.length/3-Z,0)}function it(){const Z=s.length/3;let J=0;ut(O,J),J+=O.length;for(let ht=0,st=L.length;ht<st;ht++){const at=L[ht];ut(at,J),J+=at.length}i.addGroup(Z,s.length/3-Z,1)}function ut(Z,J){let ht=Z.length;for(;--ht>=0;){const st=ht;let at=ht-1;at<0&&(at=Z.length-1);for(let b=0,x=l+u*2;b<x;b++){const F=X*b,q=X*(b+1),$=J+st+F,tt=J+at+F,Ct=J+at+q,nt=J+st+q;Pt($,tt,Ct,nt)}}}function rt(Z,J,ht){c.push(Z),c.push(J),c.push(ht)}function Tt(Z,J,ht){Nt(Z),Nt(J),Nt(ht);const st=s.length/3,at=S.generateTopUV(i,s,st-3,st-2,st-1);H(at[0]),H(at[1]),H(at[2])}function Pt(Z,J,ht,st){Nt(Z),Nt(J),Nt(st),Nt(J),Nt(ht),Nt(st);const at=s.length/3,b=S.generateSideWallUV(i,s,at-6,at-3,at-2,at-1);H(b[0]),H(b[1]),H(b[3]),H(b[1]),H(b[2]),H(b[3])}function Nt(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function H(Z){a.push(Z.x),a.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return j3(e,i,t)}static fromJSON(t,e){const i=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rr[s.type]().fromJSON(s)),new Mr(i,t.options)}}const K3={generateTopUV:function(n,t,e,i,s){const a=t[e*3],r=t[e*3+1],o=t[i*3],c=t[i*3+1],h=t[s*3],l=t[s*3+1];return[new et(a,r),new et(o,c),new et(h,l)]},generateSideWallUV:function(n,t,e,i,s,a){const r=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[i*3],l=t[i*3+1],d=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[a*3],u=t[a*3+1],m=t[a*3+2];return Math.abs(o-l)<Math.abs(r-h)?[new et(r,1-c),new et(h,1-d),new et(f,1-g),new et(_,1-m)]:[new et(o,1-c),new et(l,1-d),new et(p,1-g),new et(u,1-m)]}};function j3(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const a=n[i];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class fs extends we{constructor(t=new ti([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],a=[],r=[];let o=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let l=0;l<t.length;l++)h(t[l]),this.addGroup(o,c,l),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(r,2));function h(l){const d=s.length/3,f=l.extractPoints(e);let p=f.shape;const g=f.holes;ei.isClockWise(p)===!1&&(p=p.reverse());for(let u=0,m=g.length;u<m;u++){const S=g[u];ei.isClockWise(S)===!0&&(g[u]=S.reverse())}const _=ei.triangulateShape(p,g);for(let u=0,m=g.length;u<m;u++){const S=g[u];p=p.concat(S)}for(let u=0,m=p.length;u<m;u++){const S=p[u];s.push(S.x,S.y,0),a.push(0,0,1),r.push(S.x,S.y)}for(let u=0,m=_.length;u<m;u++){const S=_[u],v=S[0]+d,w=S[1]+d,U=S[2]+d;i.push(v,w,U),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Q3(e,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const r=e[t.shapes[s]];i.push(r)}return new fs(i,t.curveSegments)}}function Q3(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Ve extends we{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+o,Math.PI);let h=0;const l=[],d=new P,f=new P,p=[],g=[],_=[],u=[];for(let m=0;m<=i;m++){const S=[],v=m/i;let w=0;m===0&&r===0?w=.5/e:m===i&&c===Math.PI&&(w=-.5/e);for(let U=0;U<=e;U++){const R=U/e;d.x=-t*Math.cos(s+R*a)*Math.sin(r+v*o),d.y=t*Math.cos(r+v*o),d.z=t*Math.sin(s+R*a)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),u.push(R+w,1-v),S.push(h++)}l.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){const v=l[m][S+1],w=l[m][S],U=l[m+1][S],R=l[m+1][S+1];(m!==0||r>0)&&p.push(v,w,R),(m!==i-1||c<Math.PI)&&p.push(w,U,R)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oi extends we{constructor(t=1,e=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const r=[],o=[],c=[],h=[],l=new P,d=new P,f=new P;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*a,u=p/i*Math.PI*2;d.x=(t+e*Math.cos(u))*Math.cos(_),d.y=(t+e*Math.cos(u))*Math.sin(_),d.z=e*Math.sin(u),o.push(d.x,d.y,d.z),l.x=t*Math.cos(_),l.y=t*Math.sin(_),f.subVectors(d,l).normalize(),c.push(f.x,f.y,f.z),h.push(g/s),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,u=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,S=(s+1)*p+g;r.push(_,u,S),r.push(u,m,S)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ic extends we{constructor(t=new dd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new P,c=new P,h=new et;let l=new P;const d=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(p,2));function _(){for(let v=0;v<e;v++)u(v);u(a===!1?e:0),S(),m()}function u(v){l=t.getPointAt(v/e,l);const w=r.normals[v],U=r.binormals[v];for(let R=0;R<=s;R++){const T=R/s*Math.PI*2,I=Math.sin(T),M=-Math.cos(T);c.x=M*w.x+I*U.x,c.y=M*w.y+I*U.y,c.z=M*w.z+I*U.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=l.x+i*c.x,o.y=l.y+i*c.y,o.z=l.z+i*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let w=1;w<=s;w++){const U=(s+1)*(v-1)+(w-1),R=(s+1)*v+(w-1),T=(s+1)*v+w,I=(s+1)*(v-1)+w;g.push(U,R,I),g.push(R,T,I)}}function S(){for(let v=0;v<=e;v++)for(let w=0;w<=s;w++)h.x=v/e,h.y=w/s,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ic(new rr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ot extends ha{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jh extends ot{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Kh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tm{constructor(t,e,i){const s=this;let a=!1,r=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,a===!1&&s.onStart!==void 0&&s.onStart(l,r,o),a=!0},this.itemEnd=function(l){r++,s.onProgress!==void 0&&s.onProgress(l,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){const d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,f=h.length;d<f;d+=2){const p=h[d],g=h[d+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null}}}const em=new tm;class sc{constructor(t){this.manager=t!==void 0?t:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sc.DEFAULT_MATERIAL_NAME="__DEFAULT";class nm extends sc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=Kh.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=Qs("img");function c(){l(),Kh.add(t,this),e&&e(this),a.manager.itemEnd(t)}function h(d){l(),s&&s(d),a.manager.itemError(t),a.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class im extends sc{constructor(t){super(t)}load(t,e,i,s){const a=new Ie,r=new nm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class gd extends ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class sm extends gd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fo=new le,jh=new P,Qh=new P;class am{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rm extends am{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class om extends gd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.target=new ee,this.shadow=new rm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=tl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);class Sr extends Q{constructor(){const t=Sr.SkyShader,e=new Fn({name:t.name,uniforms:Zl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Be,depthWrite:!1});super(new wt(1,1,1),e),this.isSky=!0}}Sr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const _d={value:0};let Ps;function Do(){return Ps||(Ps=new ot({color:1734272,metalness:.15,roughness:.3,envMapIntensity:.75}),Ps.onBeforeCompile=n=>{n.uniforms.coastTime=_d,n.vertexShader=`varying vec3 coastPosition;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 coastPosition = (modelMatrix * vec4(position,1.0)).xyz;`),n.fragmentShader=`uniform float coastTime;
varying vec3 coastPosition;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
      float drift=sin(coastPosition.x*.63+coastPosition.z*.39+coastTime*.3);
      float waveA=cos(coastPosition.x*2.8+coastPosition.z*1.1+drift+coastTime*.9);
      float waveB=sin(coastPosition.z*4.5-coastPosition.x*.7+drift-coastTime*1.4);
      vec3 waveNormal=normalize(vec3(waveA*.032,1.,waveB*.024));
      normal=normalize(mat3(viewMatrix)*waveNormal);
    `)},Ps)}function hm(n){_d.value=n}function lm(n,t){const e=new Sr;e.scale.setScalar(450),e.material.uniforms.turbidity.value=3.4,e.material.uniforms.rayleigh.value=1.3,e.material.uniforms.mieCoefficient.value=.004,e.material.uniforms.mieDirectionalG.value=.82,e.material.uniforms.sunPosition.value.set(-.55,.48,-.68);const i=new rd;i.add(e);const s=new Co(t),a=s.fromScene(i,.025,.1,1e3);n.environment=a.texture,n.environmentIntensity=.55,n.userData.environmentTarget=a,s.dispose(),n.add(e),n.background=null,n.fog=new la(13096662,32,180);const r=new Q(new on(650,650),new ot({color:12037778,roughness:1}));r.rotation.x=-Math.PI/2,r.name="city-ground",r.position.set(0,-.24,-150),r.receiveShadow=!0,n.add(r),n.add(new sm(14282239,10653040,1.15));const o=new om(16770237,3.1);o.position.set(-32,48,-4),o.target.position.set(0,0,-38),o.castShadow=!0;const c=window.matchMedia("(pointer: coarse)").matches;o.shadow.mapSize.setScalar(c?1024:2048),Object.assign(o.shadow.camera,{near:1,far:130,left:-30,right:30,top:48,bottom:-48}),o.shadow.normalBias=.035,o.shadow.bias=-12e-5,o.shadow.radius=2,n.add(o,o.target)}function vd(n,t,e){n.cancelScheduledValues(t),e?n.setTargetAtTime(1,t,.04):n.setValueAtTime(0,t)}class dm{constructor(){Yt(this,"pending",new WeakMap)}resume(t,e){if(!e||t.state==="closed")return Promise.resolve(!1);if(t.state==="running")return Promise.resolve(!0);const i=this.pending.get(t);if(i)return i;let s;const a=Promise.race([t.resume().then(()=>t.state==="running",()=>!1),new Promise(r=>{s=setTimeout(()=>r(!1),1500)})]);return this.pending.set(t,a),a.finally(()=>{clearTimeout(s),this.pending.get(t)===a&&this.pending.delete(t)}),a}}class um{constructor(t){Yt(this,"element");Yt(this,"source");Yt(this,"gain");Yt(this,"pending",null);Yt(this,"wanted",!1);this.context=t,this.element=new Audio(new URL("audio/carefree.mp3",document.baseURI).href),this.element.loop=!0,this.element.preload="none",this.element.setAttribute("playsinline",""),this.source=t.createMediaElementSource(this.element),this.gain=t.createGain(),this.gain.gain.value=0,this.source.connect(this.gain).connect(t.destination)}sync(t){if(this.wanted=t,this.gain.gain.cancelScheduledValues(this.context.currentTime),this.gain.gain.setValueAtTime(t?.16:0,this.context.currentTime),!t){this.element.pause();return}!this.element.paused||this.pending||(this.pending=this.element.play().catch(()=>{}).finally(()=>{this.pending=null,this.wanted||this.element.pause()}))}dispose(){this.wanted=!1,this.element.pause(),this.element.removeAttribute("src"),this.element.load(),this.source.disconnect(),this.gain.disconnect()}}const ia=1800,Uo="vespa_best_lap_seconds";class xd{constructor(t=ia){Yt(this,"distance",0);Yt(this,"elapsed",0);this.length=t}get finished(){return this.distance>=this.length}reset(){this.distance=0,this.elapsed=0}advance(t,e,i=t){if(this.finished||t<=0)return 0;const s=e>0?Math.min(t,(this.length-this.distance)/e):t;return this.distance=Math.min(this.length,this.distance+Math.max(0,e)*s),this.elapsed+=Math.max(0,i)*s/t,s}}function ko(n){if(n==null||!Number.isFinite(n)||n<0)return"—";const t=Math.floor(n*100);return`${Math.floor(t/6e3)}:${String(Math.floor(t/100)%60).padStart(2,"0")}.${String(t%100).padStart(2,"0")}`}function fm(n){const t=Number(n);return Number.isFinite(t)&&t>0?t:null}const pm=2003.4,mm={coordinates:[[11.257831,43.772579],[11.257836,43.77255],[11.257837,43.772537],[11.257857,43.772346],[11.257868,43.772255],[11.257875,43.772165],[11.257889,43.771976],[11.257904,43.771775],[11.257923,43.771517],[11.257927,43.771494],[11.257928,43.771391],[11.257926,43.771217],[11.257896,43.770935],[11.257894,43.770914],[11.257893,43.770907],[11.257891,43.770891],[11.257846,43.770619],[11.257915,43.770614],[11.258511,43.770572],[11.258656,43.770562],[11.258713,43.770558],[11.258762,43.770554],[11.259929,43.770463],[11.26026,43.770436],[11.260544,43.770411],[11.260602,43.770406],[11.261448,43.770256],[11.261545,43.77024],[11.261631,43.770221],[11.262035,43.770139],[11.262076,43.77013],[11.262519,43.770031],[11.262754,43.769979],[11.263613,43.7698],[11.263723,43.769775],[11.263816,43.769755],[11.264278,43.769658],[11.264298,43.769654],[11.265431,43.769426],[11.26549,43.769413],[11.265926,43.769327],[11.267922,43.768918],[11.268156,43.768872],[11.268285,43.768846],[11.268324,43.768838],[11.2695,43.768608],[11.269533,43.768602],[11.269661,43.768574],[11.269531,43.768348],[11.269513,43.768319],[11.269341,43.768033],[11.269142,43.767688],[11.268889,43.767271],[11.268691,43.766955],[11.268568,43.766773],[11.268219,43.766414],[11.26813,43.766328],[11.268111,43.766298],[11.268098,43.766269],[11.268091,43.766242],[11.268097,43.766209],[11.268106,43.766184],[11.268128,43.766159],[11.268141,43.76615],[11.268163,43.766141],[11.268191,43.766131],[11.268588,43.766086],[11.268792,43.766074],[11.269042,43.76605],[11.269363,43.766021],[11.270579,43.765944],[11.270598,43.765943],[11.270688,43.765939],[11.271231,43.765908],[11.271338,43.765905],[11.271468,43.765899],[11.271814,43.765869],[11.274156,43.765737],[11.274232,43.765732],[11.274365,43.765724]]},gm=[{name:"Via del Proconsolo",distanceMeters:218.4},{name:"Via Ghibellina",distanceMeters:980.4},{name:"Viale della Giovine Italia",distanceMeters:196.1},{name:"Piazza Piave",distanceMeters:109.2},{name:"Lungarno Guglielmo Pecori Giraldi",distanceMeters:254.7},{name:"Lungarno del Tempio",distanceMeters:244.6}],_m=[{id:41,name:"Ghibellina–Verdi",coordinates:[11.26152109,43.77023235],approximateDistanceMeters:517},{id:218,name:"Pecori Giraldi–Giovine Italia",coordinates:[11.26856838,43.76620768],approximateDistanceMeters:1528},{id:217,name:"Pecori Giraldi–Amendola",coordinates:[11.27133575,43.76589819],approximateDistanceMeters:1756}],Er={distanceMeters:pm,geometry:mm,streets:gm,trafficSignals:_m},vm=[{id:"42919426",name:"",points:[[966.2,-483.2],[1035.7,-494.5],[1039.3,-472.3],[966.4,-460.6],[959.1,-478.1],[966.7,-479.2],[966.2,-483.2]],height:14,estimatedHeight:!0,at:1225,kind:"yes"},{id:"43768260",name:"Cattedrale di Santa Maria del Fiore",points:[[-178,85.5],[-179,41.3],[-98.9,39.4],[-98.2,38.2],[-94,34.1],[-90,34.1],[-90.6,23.2],[-79.4,11.7],[-63.9,11.2],[-53.8,22],[-53.8,32.7],[-50.4,32.7],[-45.1,36.7],[-45,41.6],[-34.9,41.2],[-23.6,51.4],[-22.9,66.8],[-33.1,77.8],[-44.3,78.2],[-44.5,83.5],[-48.3,87.3],[-51.9,87.4],[-51.6,97.1],[-61.8,108.1],[-77.6,108.4],[-87.8,98.6],[-88.3,88.9],[-92.6,89.1],[-96.7,86.1],[-97.9,83.6],[-178,85.5]],height:25,estimatedHeight:!1,at:0,kind:"cathedral"},{id:"72905106",name:"Torre della Zecca",points:[[844.2,-684.4],[843.1,-694.3],[852,-695.2],[853,-685.4],[844.2,-684.4]],height:14,estimatedHeight:!0,at:1460,kind:"yes"},{id:"73028002",name:"Archivio di Stato di Firenze",points:[[1047.4,-336],[1051,-405.8],[1048.8,-420.7],[1051,-421],[1048.4,-436.5],[1045.6,-437.9],[1040.2,-437.4],[1039.3,-441.3],[1034.1,-440.7],[1033.4,-445],[1010.2,-441.4],[1012,-428.3],[1007,-427.5],[1004.6,-440.7],[1002.9,-443.7],[985.2,-432.9],[986.6,-424.6],[988.2,-424.7],[991.4,-405.7],[993,-405.9],[996.1,-385.8],[1018.5,-333],[1024.1,-332.7],[1031.5,-333.3],[1047.4,-336]],height:14,estimatedHeight:!0,at:1199,kind:"yes"},{id:"114220146",name:"Palazzo dei Canonici",points:[[-85.6,-10.9],[-90.9,-12],[-95.7,-12.2],[-99.5,-11],[-99.1,-7.4],[-107,-7.5],[-107.1,-10.1],[-122,-9],[-120.6,1.6],[-85.8,.8],[-85.6,-10.9]],height:13.2,estimatedHeight:!1,at:0,kind:"yes"},{id:"114369699",name:"",points:[[-45.2,-29.1],[-39.5,-29],[-39.5,-28],[-32.6,-28.3],[-35.2,-44],[-46.8,-40.7],[-45.2,-29.1]],height:13.2,estimatedHeight:!1,at:26,kind:"yes"},{id:"114369700",name:"",points:[[-35.8,-.3],[-2.8,-2.9],[-1.3,-24.9],[-22.7,-23],[-22.7,-13.7],[-35.5,-13.2],[-35.8,-.3]],height:9.899999999999999,estimatedHeight:!1,at:3,kind:"apartments"},{id:"114639704",name:"",points:[[204.3,-235.9],[197.6,-234.9],[200.7,-228.4],[206.5,-231.7],[204.3,-235.9]],height:14,estimatedHeight:!0,at:423,kind:"apartments"},{id:"114689027",name:"",points:[[91.7,-319.7],[77.8,-318],[79.1,-307.5],[80.3,-307.6],[82.2,-291.4],[98.1,-293.3],[96.3,-305.1],[91,-304.2],[90.6,-308],[93.1,-308.8],[91.7,-319.7]],height:14,estimatedHeight:!0,at:307,kind:"yes"},{id:"114689045",name:"",points:[[81.9,-277],[81.6,-267.7],[90.5,-267.1],[90.9,-278],[86.7,-277.8],[81.8,-278],[81.9,-277]],height:14,estimatedHeight:!0,at:313,kind:"yes"},{id:"115065314",name:"",points:[[862.5,-280.7],[902.2,-290.6],[890.8,-334.7],[883.6,-332.9],[881,-344],[848.9,-336.1],[862.5,-280.7]],height:4.5,estimatedHeight:!1,at:1072,kind:"commercial"},{id:"115065316",name:"",points:[[744.9,-315.9],[735.5,-313.9],[749.7,-279.8],[753.7,-281.1],[744.9,-315.9]],height:14,estimatedHeight:!0,at:956,kind:"apartments"},{id:"115065318",name:"",points:[[674.7,-259.1],[672.8,-264.7],[669.5,-263.8],[668.5,-266.7],[664.7,-265.4],[665.5,-263.2],[663.7,-262.8],[664.3,-261.3],[649.1,-256.9],[651.4,-250.4],[674.7,-259.1]],height:13.2,estimatedHeight:!1,at:880,kind:"apartments"},{id:"115065320",name:"",points:[[905.6,-343.4],[925.3,-296.6],[957.4,-311.4],[954.9,-317.3],[982.5,-329],[967.5,-364.8],[938.1,-357.5],[936.7,-363.3],[906,-355.3],[907,-350.9],[909.4,-351.6],[911.8,-349.9],[922.6,-352.9],[923.8,-351.8],[935.1,-324.3],[940.3,-326.8],[944.2,-318.7],[932.3,-312.8],[933.2,-310.3],[925,-306.8],[922.5,-312.7],[924.4,-314],[913,-346],[905.6,-343.4]],height:14,estimatedHeight:!0,at:1133,kind:"yes"},{id:"115661856",name:"Ufficio Tecnico Erariale",points:[[357.3,-171.6],[371.2,-174.9],[362.3,-189.9],[375.1,-196.3],[381.7,-181.5],[396.1,-187.2],[407.7,-190.6],[410,-191],[410.8,-187.1],[423.5,-189.6],[417.3,-224],[401.1,-220.5],[383.7,-215],[374.6,-211.2],[366,-207.3],[358.5,-203.3],[344,-194.5],[357.3,-171.6]],height:9.899999999999999,estimatedHeight:!1,at:607,kind:"government"},{id:"115661884",name:"Casa del boia",points:[[456.8,-327.3],[464.1,-311.7],[478,-316],[470.3,-332.6],[456.8,-327.3]],height:14,estimatedHeight:!0,at:709,kind:"apartments"},{id:"115661885",name:"",points:[[315.8,-260.9],[304.6,-257.5],[311.5,-246.2],[321,-252.9],[315.8,-260.9]],height:16.5,estimatedHeight:!1,at:537,kind:"apartments"},{id:"115661901",name:"",points:[[366,-363.6],[351.5,-357.6],[354.7,-349.1],[338.1,-343.1],[342.6,-331.6],[347.5,-333.4],[346.8,-335],[359.3,-339.7],[372.7,-346.6],[366,-363.6]],height:14,estimatedHeight:!0,at:584,kind:"yes"},{id:"115821787",name:"",points:[[684.3,-462.9],[675.5,-452.7],[672.4,-455],[669.1,-451.2],[664.2,-459],[677.5,-465.8],[684.3,-462.9]],height:14,estimatedHeight:!0,at:936,kind:"apartments"},{id:"115891393",name:"",points:[[989.1,-516.2],[1012.1,-520.2],[1007.9,-544.1],[1003.6,-543.4],[997.3,-579.1],[978.6,-575.8],[989.1,-516.2]],height:14,estimatedHeight:!0,at:1248,kind:"yes"},{id:"115891395",name:"",points:[[961.5,-580.8],[959.9,-593.1],[1013,-600],[1014.6,-587.7],[961.5,-580.8]],height:14,estimatedHeight:!0,at:1318,kind:"yes"},{id:"115941612",name:"",points:[[907.5,-476.5],[902.9,-487.2],[915.3,-492.4],[919.8,-481.7],[907.5,-476.5]],height:14,estimatedHeight:!0,at:1256,kind:"yes"},{id:"115941618",name:"Villino Coppini",points:[[888.6,-493.4],[900,-497.8],[897.6,-503.5],[902.1,-505.1],[893.9,-524.8],[878.3,-518.3],[888.6,-493.4]],height:14,estimatedHeight:!0,at:1294,kind:"yes"},{id:"115941629",name:"",points:[[850.5,-499.2],[861.8,-503.6],[856.5,-516.9],[845.2,-512.4],[850.5,-499.2]],height:14,estimatedHeight:!0,at:1301,kind:"yes"},{id:"204127867",name:"",points:[[-58.1,-155.2],[-72.2,-154.8],[-72.8,-161.8],[-58.6,-161.8],[-58.1,-155.2]],height:14,estimatedHeight:!0,at:161,kind:"yes"},{id:"204144329",name:"Casa Buonarroti",points:[[451.9,-302.1],[456.1,-290.5],[467.8,-294.6],[472.1,-283.2],[481.1,-286.5],[472.4,-308.7],[451.9,-302.1]],height:14,estimatedHeight:!0,at:701,kind:"public"},{id:"249686037",name:"Badia Fiorentina",points:[[-6.1,-243.4],[-5.1,-223.5],[-10.7,-223.3],[-10.7,-221.5],[-11.4,-221.6],[-11.5,-217.6],[-19.6,-217.5],[-26.1,-217.9],[-24.4,-219],[-24.5,-222.7],[-27.6,-224.7],[-38.8,-224.6],[-38.8,-237],[-30,-237.1],[-30.1,-243.4],[-6.1,-243.4]],height:14,estimatedHeight:!0,at:219,kind:"church"},{id:"249686038",name:"",points:[[-28.1,-216.9],[-24.4,-219],[-24.5,-222.7],[-27.6,-224.7],[-31.4,-222.6],[-31.3,-218.9],[-28.1,-216.9]],height:70,estimatedHeight:!1,at:219,kind:"yes"},{id:"306156985",name:"",points:[[123.8,-328.7],[118.8,-337.3],[106.9,-332.5],[106.4,-334],[80,-327.7],[82.5,-322.1],[95.4,-323.2],[123.8,-328.7]],height:13.2,estimatedHeight:!1,at:324,kind:"yes"},{id:"306156988",name:"Palazzo dell'Arte dei Giudici e Notai",points:[[27.3,-187.5],[7.2,-185.3],[9,-171.3],[29.2,-173.5],[27.3,-187.5]],height:19.799999999999997,estimatedHeight:!1,at:186,kind:"yes"},{id:"306156989",name:"Ex chiesa di San Procolo",points:[[69.8,-204.5],[70.5,-191.7],[45.1,-190.9],[44.5,-203.1],[69.8,-204.5]],height:14,estimatedHeight:!0,at:261,kind:"church"},{id:"306156992",name:"Chiesa di Santa Maria in Campo",points:[[18.3,-47.4],[18.2,-41],[37.1,-40.7],[37.1,-47.1],[18.3,-47.4]],height:14,estimatedHeight:!0,at:48,kind:"church"},{id:"306156993",name:"",points:[[42.1,-270.2],[65.6,-269.5],[65.1,-276.9],[55.5,-276.5],[55.1,-279.3],[47.6,-279.4],[47.4,-277.1],[43.6,-276.6],[43.5,-272.3],[42.4,-272.2],[42.1,-270.2]],height:14,estimatedHeight:!0,at:288,kind:"yes"},{id:"306156995",name:"Chiesa evangelica dei fratelli",points:[[36.4,-270.6],[31.1,-289.2],[19.1,-285.8],[24,-270.2],[36.4,-270.6]],height:14,estimatedHeight:!0,at:259,kind:"church"},{id:"306156999",name:"",points:[[75.8,-327.1],[76.5,-321.7],[82.5,-322.1],[80,-327.7],[75.8,-327.1]],height:13.2,estimatedHeight:!1,at:311,kind:"bridge"},{id:"306984385",name:"Palazzo Baroncini",points:[[127.9,-235],[127.3,-246.4],[129.6,-247.4],[129.3,-251],[121.3,-251],[115.9,-250.1],[116,-245.3],[112.2,-245.1],[112,-249.9],[110,-249.9],[110.9,-233.1],[127.9,-235]],height:14,estimatedHeight:!0,at:330,kind:"yes"},{id:"306984386",name:"",points:[[339.6,-298],[336.8,-305.1],[326.7,-301.4],[330.5,-293.6],[339.6,-298]],height:14,estimatedHeight:!0,at:560,kind:"apartments"},{id:"306984391",name:"",points:[[253.5,-140.7],[245.1,-140.5],[245.5,-124.1],[253.9,-123.9],[253.5,-140.7]],height:13.2,estimatedHeight:!1,at:442,kind:"apartments"},{id:"306984392",name:"",points:[[155.6,-229.6],[166.5,-231.4],[167.6,-191.1],[156.1,-191.1],[155.6,-229.6]],height:14,estimatedHeight:!0,at:385,kind:"apartments"},{id:"306984399",name:"Palazzo Covoni delle Burella",points:[[78.8,-288.5],[68.2,-287.6],[70.5,-267.5],[81.6,-267.7],[81.9,-277],[80.3,-277],[78.8,-288.5]],height:14,estimatedHeight:!0,at:304,kind:"yes"},{id:"306984401",name:"Palazzo Salviati-Quaratesi",points:[[240.8,-214.2],[251.9,-220.8],[250.1,-224.1],[253.1,-225.7],[252.4,-227.3],[256,-228.7],[251.3,-244.5],[226.6,-239.1],[240.8,-214.2]],height:14,estimatedHeight:!0,at:445,kind:"apartments"},{id:"306984402",name:"Palazzo Barucci",points:[[82.4,-244.9],[82.3,-264.1],[71,-264.6],[72.1,-244.2],[75.4,-244.5],[75.3,-246.5],[78.6,-246.7],[78.7,-244.7],[82.4,-244.9]],height:14,estimatedHeight:!0,at:303,kind:"yes"},{id:"306984403",name:"",points:[[269.3,-189.7],[259.5,-186.3],[267.4,-175.1],[273.7,-176.9],[269.3,-189.7]],height:9.899999999999999,estimatedHeight:!1,at:475,kind:"apartments"},{id:"306984404",name:"Palazzo della Banca d'Italia",points:[[74.2,-14.9],[76.6,-35.4],[87.2,-38.2],[87.6,-41.2],[88.8,-42],[89.4,-39.7],[104.2,-43.6],[103.3,-46.6],[105,-46.6],[106.6,-44],[111.3,-44.8],[114.1,-44.4],[118.7,-45.5],[118.6,-44],[123,-44.4],[124,-38.6],[126.2,-37.5],[128.5,-28.9],[74.2,-14.9]],height:9.899999999999999,estimatedHeight:!1,at:21,kind:"yes"},{id:"306984405",name:"",points:[[231.3,-123.2],[242.3,-123.4],[245.5,-124.1],[245.1,-140.5],[240.7,-140.2],[240.3,-143.2],[235.7,-142.8],[235.2,-145.1],[240.4,-145.8],[239.5,-152.9],[236.6,-152.3],[236.4,-156.6],[229.1,-155.5],[230.4,-140.9],[231.3,-123.2]],height:14,estimatedHeight:!0,at:442,kind:"apartments"},{id:"306984407",name:"Palazzo Covoni",points:[[73,-228.8],[88.4,-231],[87,-243.3],[84.8,-243.2],[84.8,-245],[78.7,-244.7],[78.9,-243.1],[75.5,-242.9],[75.4,-244.5],[72.1,-244.2],[73,-228.8]],height:14,estimatedHeight:!0,at:292,kind:"yes"},{id:"306984411",name:"Palazzo Gherardi",points:[[402.2,-267.8],[396,-285.2],[371,-277],[373.8,-268.8],[387,-272.9],[390.5,-263.7],[392.6,-264.1],[399.3,-266.5],[402.2,-267.8]],height:14,estimatedHeight:!0,at:621,kind:"yes"},{id:"306984414",name:"Palazzo Da Cintoia",points:[[205.9,-263.4],[195.9,-279],[183.1,-272],[192.9,-255.9],[205.9,-263.4]],height:14,estimatedHeight:!0,at:414,kind:"yes"},{id:"306984415",name:"Casa natale di Giovanni da Verrazzano",points:[[330.5,-293.6],[338.9,-276.2],[347.8,-278.8],[345.4,-284.5],[343.9,-283.8],[338.8,-295.4],[340.4,-296.1],[339.6,-298],[330.5,-293.6]],height:14,estimatedHeight:!0,at:573,kind:"apartments"},{id:"306984416",name:"Oratorio di San Niccolò del Ceppo",points:[[322.9,-207.8],[318.7,-212.4],[320.9,-213.6],[306,-231.6],[298.8,-224.9],[301.6,-222.3],[311.2,-211.1],[305.7,-209.6],[308.3,-204.2],[322.9,-207.8]],height:14,estimatedHeight:!0,at:520,kind:"church"},{id:"306984417",name:"Palazzo Jacometti Ciofi",points:[[336.8,-305.1],[347.8,-278.8],[363.8,-283.6],[357.1,-299.4],[349.3,-296.4],[347,-301.4],[354.8,-304.5],[351.6,-311.7],[336.8,-305.1]],height:14,estimatedHeight:!0,at:590,kind:"hotel"},{id:"306984418",name:"",points:[[8.5,-70.9],[8.5,-65.2],[29.4,-66.4],[29.7,-71.6],[16.8,-71.3],[8.5,-70.9]],height:16.5,estimatedHeight:!1,at:71,kind:"yes"},{id:"306984422",name:"",points:[[276.7,-152.7],[274.4,-158.7],[267.1,-155.3],[269.6,-149.9],[276.7,-152.7]],height:14,estimatedHeight:!0,at:473,kind:"apartments"},{id:"306984425",name:"Palazzo Ramirez de Montalvo",points:[[72.1,-118.1],[73,-96.8],[77.3,-97],[79.4,-95.2],[80.8,-84.9],[87,-85.3],[87.2,-75.9],[82.3,-74.3],[82.9,-70],[89.3,-72.6],[88.1,-87.3],[93,-87.3],[92.8,-91.2],[88.5,-90.7],[87.4,-98.9],[90.4,-99.3],[89.8,-118.3],[72.1,-118.1]],height:14,estimatedHeight:!0,at:121,kind:"yes"},{id:"306984428",name:"",points:[[295.7,-200.1],[308.3,-204.2],[305.7,-209.6],[301.3,-217.5],[289,-213.2],[295.7,-200.1]],height:9.899999999999999,estimatedHeight:!1,at:513,kind:"apartments"},{id:"306984429",name:"",points:[[309.6,-227.2],[320.9,-213.6],[322.8,-214.8],[312.4,-230],[309.6,-227.2]],height:14,estimatedHeight:!0,at:525,kind:"yes"},{id:"306984430",name:"",points:[[114.1,-46.6],[103.3,-46.6],[90.4,-43.1],[84,-39.3],[80.7,-39.7],[78.5,-46.6],[81.1,-66.6],[88.7,-68.3],[88.3,-71.8],[91.7,-71.8],[90.6,-86.4],[116.1,-86.4],[116.7,-70],[118,-55.2],[114.1,-55.6],[114.1,-46.6]],height:14,estimatedHeight:!0,at:51,kind:"yes"},{id:"306985690",name:"Ex chiesa dei Santi Jacopo e Lorenzo",points:[[714.7,-415.9],[705.7,-410.1],[721,-385.3],[729.7,-387.7],[714.7,-415.9]],height:14,estimatedHeight:!0,at:971,kind:"church"},{id:"306985705",name:"Villino Travaglini",points:[[928.2,-461.5],[909.3,-453.9],[915.2,-440],[934.8,-445.4],[928.2,-461.5]],height:14,estimatedHeight:!0,at:1164,kind:"yes"},{id:"306985707",name:"",points:[[928.2,-461.5],[922,-476.3],[914.6,-473.3],[915.2,-472.2],[905.3,-468],[908.6,-459.6],[909.5,-460],[911.5,-454.8],[928.2,-461.5]],height:14,estimatedHeight:!0,at:1238,kind:"yes"},{id:"307104280",name:"Palazzo di Maffeo Barberini",points:[[292.9,-355],[283.9,-373.9],[277.1,-371],[282.9,-356.6],[286,-351.1],[292.9,-355]],height:13.2,estimatedHeight:!1,at:533,kind:"apartments"},{id:"307104289",name:"Palazzo Bargellini",points:[[406.3,-377.7],[421.4,-385.9],[410.7,-407.3],[395.1,-399.8],[395.6,-398],[393.3,-397],[395.8,-391],[401.7,-393.4],[403.4,-389.1],[398.5,-387.1],[402.9,-376.3],[406.3,-377.7]],height:14,estimatedHeight:!0,at:653,kind:"apartments"},{id:"307104292",name:"Casa del Diluvio",points:[[253.5,-343.6],[262.7,-350.4],[256.1,-361.9],[245.6,-356.9],[253.5,-343.6]],height:9.899999999999999,estimatedHeight:!1,at:496,kind:"apartments"},{id:"307104293",name:"Palazzo Bartolini Salimbeni-Lenzoni",points:[[242.5,-330.3],[248.2,-320.5],[254.6,-325.9],[240.3,-350.1],[240,-354.5],[233.6,-364.4],[221.7,-354.3],[226.7,-346.7],[235.4,-331.2],[240.3,-333.8],[242.5,-330.3]],height:13.2,estimatedHeight:!1,at:486,kind:"apartments"},{id:"307126295",name:"Chiesa dei Santi Simone e Giuda",points:[[235.2,-312.4],[225.5,-325.4],[195,-303.6],[203.9,-291.2],[235.2,-312.4]],height:14,estimatedHeight:!0,at:429,kind:"church"},{id:"307126296",name:"Spedale della Santissima Trinità dei Calzolai",points:[[235.2,-312.4],[248.2,-320.5],[242.5,-330.3],[231,-322.9],[228.7,-326.7],[225.5,-325.4],[235.2,-312.4]],height:14,estimatedHeight:!0,at:471,kind:"yes"},{id:"307126298",name:"",points:[[124.7,-356.2],[131.4,-345.5],[140.4,-334.6],[154.4,-343.8],[143.4,-363.2],[139,-360.2],[138.1,-362],[124.7,-356.2]],height:14,estimatedHeight:!0,at:370,kind:"yes"},{id:"307129113",name:"",points:[[808.8,-624.5],[820.3,-629.7],[817.7,-645],[805.1,-643.8],[808.8,-624.5]],height:14,estimatedHeight:!0,at:1443,kind:"yes"},{id:"307129116",name:"",points:[[765.2,-672.8],[767.4,-649.9],[779.1,-650.2],[778.6,-658.4],[775.1,-658.3],[774.3,-673.4],[765.2,-672.8]],height:14,estimatedHeight:!0,at:1481,kind:"yes"},{id:"307276584",name:"",points:[[503.2,-231.8],[497.7,-229.2],[496.4,-232.7],[494.1,-231.8],[494.9,-228.6],[488.4,-227],[485.8,-235.8],[478.4,-233.6],[481.4,-223.9],[475.2,-222],[469.9,-239.5],[496.2,-247.8],[503.2,-231.8]],height:6.6,estimatedHeight:!1,at:707,kind:"kindergarten"},{id:"307277597",name:"Palazzo Pepi-Ferri",points:[[366.8,-321.9],[380,-327.1],[372.7,-346.6],[359.3,-339.7],[361.9,-332.8],[366.8,-321.9]],height:14,estimatedHeight:!0,at:604,kind:"yes"},{id:"307544507",name:"Torre dei Pierozzi",points:[[-97.9,-29.2],[-85.7,-29],[-85.5,-21.7],[-98.4,-20.8],[-97.9,-29.2]],height:16.5,estimatedHeight:!1,at:15,kind:"yes"},{id:"307544508",name:"Bottega dell'Opera del Duomo",points:[[-96.9,-43.3],[-86.8,-44.7],[-86.1,-44],[-86,-32.9],[-95.1,-31.8],[-96.9,-43.3]],height:3.3,estimatedHeight:!1,at:26,kind:"yes"},{id:"307544514",name:"",points:[[-117.1,-76],[-97.8,-74.9],[-97.4,-83.7],[-102.9,-84.6],[-103,-87.6],[-106.4,-87.6],[-105.7,-98.3],[-116.6,-98.9],[-117.1,-76]],height:14,estimatedHeight:!0,at:70,kind:"yes"},{id:"307544518",name:"",points:[[-83.1,-124.2],[-82.6,-137.4],[-85,-137.5],[-85,-131.8],[-87.6,-131.7],[-87.5,-124.3],[-83.1,-124.2]],height:14,estimatedHeight:!0,at:139,kind:"yes"},{id:"307544525",name:"Torre dei Donati",points:[[-83.1,-124.2],[-76.1,-124.1],[-76.3,-142.8],[-82.6,-142.8],[-82.6,-137.4],[-83.1,-124.2]],height:14,estimatedHeight:!0,at:119,kind:"yes"},{id:"307544531",name:"Studio Fiorentino",points:[[-97.8,-74.9],[-93.2,-74.9],[-92.6,-66.7],[-87.7,-66.5],[-87.7,-60.7],[-81.7,-60.8],[-78.6,-84.1],[-87.6,-84.4],[-87.6,-83.1],[-97.4,-83.7],[-97.8,-74.9]],height:14,estimatedHeight:!0,at:80,kind:"yes"},{id:"307544546",name:"Chiesa di Santa Margherita in Santa Maria de' Ricci",points:[[-104.2,-119.9],[-104.3,-106.8],[-105,-103.7],[-105.9,-97.1],[-104,-97.1],[-104.4,-88.5],[-94.5,-88.9],[-93.7,-120.1],[-104.2,-119.9]],height:14,estimatedHeight:!0,at:84,kind:"church"},{id:"307545799",name:"Santa Margherita dei Cerchi",points:[[-56.1,-140.6],[-56,-149.6],[-43.8,-150.1],[-43.4,-141.2],[-56.1,-140.6]],height:14,estimatedHeight:!0,at:142,kind:"church"},{id:"307545803",name:"Torre della Castagna",points:[[-70.2,-194.7],[-69.8,-189],[-76.9,-188.5],[-77.3,-194.2],[-70.2,-194.7]],height:14,estimatedHeight:!0,at:204,kind:"yes"},{id:"307545805",name:"Palazzo Rinuccini",points:[[-107.4,-245.5],[-107.3,-229.5],[-92.7,-228.2],[-92.8,-244.7],[-97,-244.7],[-97,-241.6],[-98.4,-241.6],[-98.4,-246.1],[-104.4,-246],[-107.4,-245.5]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"307545809",name:"",points:[[-92.8,-244.7],[-92.7,-228.2],[-80.5,-227],[-80,-246],[-89.5,-245.6],[-89.6,-244.6],[-92.8,-244.7]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"307553013",name:"",points:[[82.1,-222],[73.6,-220.9],[75.6,-190.8],[93.4,-190.7],[91.8,-203],[83.1,-203.1],[82.1,-222]],height:13.2,estimatedHeight:!1,at:300,kind:"apartments"},{id:"321893763",name:"",points:[[467.7,-338.5],[470.3,-332.6],[466.4,-331.3],[465.5,-333.1],[459.5,-330.9],[460.5,-329],[456.8,-327.3],[453.1,-334.3],[467.7,-338.5]],height:14,estimatedHeight:!0,at:691,kind:"apartments"},{id:"340622071",name:"",points:[[1267.5,-641.8],[1261.5,-679.2],[1246.1,-676.8],[1252,-639.2],[1267.5,-641.8]],height:14,estimatedHeight:!0,at:1931,kind:"yes"},{id:"340622073",name:"",points:[[1182.7,-687.5],[1217,-690.3],[1219.2,-653],[1209.1,-652.2],[1209.6,-644.8],[1193.6,-643.6],[1192.4,-658.8],[1198.2,-659.3],[1197.2,-675.9],[1181.5,-674.4],[1180.8,-683.8],[1182.9,-684],[1182.7,-687.5]],height:14,estimatedHeight:!0,at:1887,kind:"yes"},{id:"340622097",name:"",points:[[1188.8,-701.6],[1186.7,-727],[1221,-729.9],[1222.3,-710.8],[1224.6,-711],[1225.2,-702.8],[1214.4,-702.1],[1213.6,-714.1],[1200.6,-713.1],[1201,-702.1],[1188.8,-701.6]],height:14,estimatedHeight:!0,at:1894,kind:"yes"},{id:"340622099",name:"",points:[[1180.8,-683.8],[1183.7,-649.6],[1175.7,-649.3],[1175,-659.9],[1171.9,-659.6],[1171,-673.6],[1156.6,-673],[1152.7,-679.6],[1149.8,-678.1],[1149.2,-682.9],[1147.1,-682.7],[1145.3,-687.7],[1157.8,-688.5],[1156.3,-707.1],[1167.5,-707.9],[1169,-683.1],[1180.8,-683.8]],height:14,estimatedHeight:!0,at:1828,kind:"yes"},{id:"340622105",name:"",points:[[1138.8,-704.7],[1137.5,-719.4],[1179.9,-722.7],[1182.9,-684],[1169,-683.1],[1167.5,-707.9],[1156.3,-707.1],[1157.8,-688.5],[1143.5,-687.6],[1142,-705],[1138.8,-704.7]],height:14,estimatedHeight:!0,at:1853,kind:"yes"},{id:"361442655",name:"Chiesa di San Filippo Neri",points:[[28.9,-324.4],[26.3,-333.5],[17.8,-331.1],[20.4,-321.9],[-.6,-315.9],[3.9,-300.2],[42.5,-311.2],[38,-327],[28.9,-324.4]],height:14,estimatedHeight:!0,at:230,kind:"church"},{id:"361442656",name:"",points:[[82.2,-291.4],[68.5,-289.8],[67.3,-300.9],[80.9,-302.4],[82.2,-291.4]],height:14,estimatedHeight:!0,at:294,kind:"yes"},{id:"361442657",name:"",points:[[26.6,-223.9],[23,-234.5],[19,-253.4],[17.7,-263.6],[-1.3,-260.5],[5,-228.4],[12.7,-228.9],[13.1,-222.3],[26.6,-223.9]],height:14,estimatedHeight:!0,at:231,kind:"yes"},{id:"361442658",name:"Torre Volognana",points:[[5.4,-221.8],[13.1,-222.3],[12.7,-228.9],[5,-228.4],[5.4,-221.8]],height:57,estimatedHeight:!1,at:231,kind:"yes"},{id:"397848200",name:"Cupola del Brunelleschi",points:[[-80.1,86.9],[-93.4,74],[-96.2,71.8],[-97.2,50.3],[-95.1,47.8],[-81.5,33.8],[-60.3,33.2],[-47.1,45.6],[-44.4,48.8],[-44.1,70.5],[-59.3,86.4],[-80.1,86.9]],height:114.5,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010693",name:"",points:[[-80.1,86.9],[-80,94.8],[-73.7,100.2],[-65.1,100.1],[-59.2,94.2],[-59.3,86.4],[-80.1,86.9]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010694",name:"",points:[[-44.1,70.5],[-36.6,70.4],[-30.6,63.7],[-30.7,54.7],[-37.2,48.4],[-44.4,48.8],[-44.1,70.5]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010695",name:"",points:[[-81.5,33.8],[-81.8,26.4],[-77.1,20.7],[-66.9,20.4],[-60.6,25.5],[-60.3,33.2],[-81.5,33.8]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010697",name:"",points:[[-45.2,75.6],[-44.6,78],[-44.8,80.4],[-45.8,82.7],[-47.4,84.5],[-49.6,85.6],[-52,86],[-54.4,85.5],[-57,84.2],[-47,73.7],[-45.2,75.6]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010698",name:"",points:[[-56.2,34],[-53.8,33.2],[-51.2,33.4],[-48.9,34.3],[-47,36],[-45.7,38.2],[-45.3,40.7],[-45.7,43.3],[-47.1,45.6],[-58.1,35.3],[-56.2,34]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010699",name:"",points:[[-88,35],[-90.5,34.5],[-93,34.8],[-95.2,36],[-96.9,37.8],[-97.9,40.1],[-98.1,42.6],[-97.4,45.1],[-95.1,47.8],[-84.8,37.2],[-88,35]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398015279",name:"",points:[[-72.9,64.3],[-75.3,61.9],[-75.2,58.6],[-72.8,56.3],[-69.4,56.4],[-67.1,58.8],[-67.2,62.1],[-69.6,64.4],[-72.9,64.3]],height:16.5,estimatedHeight:!1,at:0,kind:"yes"},{id:"424428393",name:"",points:[[1426.6,-736.6],[1428.8,-723.8],[1440.6,-725.8],[1438.4,-738.5],[1426.6,-736.6]],height:14,estimatedHeight:!0,at:2003,kind:"apartments"},{id:"442953940",name:"",points:[[1098.5,-624.2],[1099.7,-651],[1116.5,-652],[1115.4,-623.2],[1098.5,-624.2]],height:14,estimatedHeight:!0,at:1768,kind:"yes"},{id:"442953975",name:"",points:[[1280.1,-611.6],[1272.9,-653.9],[1287,-656.3],[1289.6,-640.7],[1292.9,-641.3],[1292.7,-642.8],[1304.6,-644.8],[1304.9,-643.2],[1307.2,-643.6],[1304.7,-658.2],[1317.8,-660.4],[1324.7,-619],[1311.5,-616.8],[1309.5,-628.2],[1292.3,-625.3],[1294.2,-614],[1280.1,-611.6]],height:14,estimatedHeight:!0,at:1986,kind:"yes"},{id:"443009763",name:"",points:[[626.2,-352],[613.4,-348.7],[619,-334.4],[631,-338.2],[626.2,-352]],height:14,estimatedHeight:!0,at:848,kind:"apartments"},{id:"443009764",name:"",points:[[649.9,-328.4],[651.9,-322.6],[655.3,-323.7],[657.6,-318],[653.9,-316.9],[656.1,-310.9],[659.9,-312.1],[668.5,-315.9],[661.3,-332],[657,-330.6],[658.8,-326.7],[656,-325.5],[654.3,-329.7],[649.9,-328.4]],height:14,estimatedHeight:!0,at:889,kind:"yes"},{id:"443009765",name:"",points:[[624.2,-321.5],[630.1,-306.4],[632.7,-307.3],[632,-309.2],[634.8,-310.7],[633.9,-313.8],[642.7,-316.8],[639.7,-326.6],[624.2,-321.5]],height:13.2,estimatedHeight:!1,at:867,kind:"apartments"},{id:"443009766",name:"",points:[[639.1,-355.4],[645.2,-340.9],[647.4,-342],[648.2,-340],[651.2,-341.1],[653.6,-334.5],[659.3,-336.3],[649.5,-358.1],[639.1,-355.4]],height:14,estimatedHeight:!0,at:875,kind:"yes"},{id:"443009767",name:"",points:[[619,-334.4],[624.2,-321.5],[639.7,-326.6],[638.8,-328.4],[640.2,-329.5],[637.8,-334.2],[635.3,-333.1],[636.1,-330.3],[634.8,-330],[633.1,-334.9],[630.7,-334],[630,-336.1],[626.4,-335.1],[625.9,-336.6],[619,-334.4]],height:16.5,estimatedHeight:!1,at:857,kind:"apartments"},{id:"443009768",name:"",points:[[656.1,-310.9],[653.9,-316.9],[651,-315.9],[649.8,-319.4],[650.7,-319.7],[650,-322],[651.9,-322.6],[649.9,-328.4],[645.7,-327],[655.5,-300],[659.5,-301],[656.1,-310.9]],height:14,estimatedHeight:!0,at:878,kind:"yes"},{id:"443009770",name:"",points:[[668.5,-315.9],[659.9,-312.1],[663.7,-302.1],[673.8,-304.8],[668.5,-315.9]],height:14,estimatedHeight:!0,at:892,kind:"yes"},{id:"443009772",name:"",points:[[661.3,-332],[659.3,-336.3],[650.5,-333.7],[647.4,-342],[645.2,-340.9],[640.9,-339.5],[641.8,-337],[639.2,-335.9],[643.3,-327],[641.9,-326.6],[643.2,-323.2],[640.9,-322.7],[641.4,-320.9],[642.9,-321.3],[643.2,-320],[647.7,-321.7],[645.7,-327],[661.3,-332]],height:14,estimatedHeight:!0,at:879,kind:"yes"},{id:"443464404",name:"",points:[[808.8,-651.4],[808.7,-666.5],[806.6,-666.6],[805.1,-672],[802.3,-670.9],[803,-664.1],[794.5,-663.3],[794.4,-659.5],[784.2,-658.2],[784.7,-650.5],[808.8,-651.4]],height:14,estimatedHeight:!0,at:1473,kind:"yes"},{id:"443464407",name:"",points:[[765.2,-672.8],[772.2,-673.3],[772,-675.8],[776.2,-676.4],[774.5,-688.9],[763.8,-688.2],[765.2,-672.8]],height:14,estimatedHeight:!0,at:1486,kind:"yes"},{id:"443464412",name:"",points:[[779.1,-650.2],[784.7,-650.5],[783.2,-676.6],[778.4,-676.3],[778.8,-670.6],[777.9,-670.6],[779.1,-650.2]],height:14,estimatedHeight:!0,at:1480,kind:"yes"},{id:"443464414",name:"",points:[[808.7,-666.5],[808.8,-651.4],[817.5,-651.5],[817.4,-666.5],[808.7,-666.5]],height:14,estimatedHeight:!0,at:1461,kind:"yes"},{id:"443464416",name:"",points:[[791.3,-690.1],[776,-689.2],[776.7,-676.3],[787.1,-677],[787.3,-674.5],[796.1,-675.3],[795.7,-679.2],[792.7,-679],[792.4,-682.9],[795.5,-683.1],[795.1,-688.7],[791.3,-688.5],[791.3,-690.1]],height:14,estimatedHeight:!0,at:1482,kind:"apartments"},{id:"443464417",name:"",points:[[795.9,-677.5],[806.6,-678.1],[806.9,-672.8],[817.2,-673.4],[816.1,-691.8],[795,-690.5],[795.9,-677.5]],height:14,estimatedHeight:!0,at:1480,kind:"apartments"},{id:"456578417",name:"",points:[[-19.2,85.2],[-8.9,94.5],[-14.5,99],[-12.1,101.6],[-19.2,107.3],[-25.4,113.3],[-34.4,103],[-29.3,96.7],[-19.2,85.2]],height:9.899999999999999,estimatedHeight:!1,at:0,kind:"apartments"},{id:"456578419",name:"Museo dell'Opera del Duomo",points:[[47.2,90.9],[41.3,81.3],[48.9,77],[36.4,57.6],[28.4,62.4],[16.2,43.7],[8.8,48.1],[-2.1,44],[-8.8,71.2],[-10.3,75.1],[-19.2,85.2],[-8.9,94.5],[-14.5,99],[-12.1,101.6],[6,125.7],[8.3,124.4],[9,125.5],[21.7,116],[19.1,113.4],[35.3,102],[42.8,111.5],[57.8,101.3],[49.9,88.9],[47.2,90.9]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"456578420",name:"",points:[[111.4,22.8],[79.4,36.9],[75,26.4],[88.7,20.8],[106.6,13.9],[111.4,22.8]],height:14,estimatedHeight:!0,at:0,kind:"office"},{id:"456578423",name:"",points:[[99.4,89.6],[91.1,95.2],[73.8,68.9],[62.2,48.8],[65.3,46.9],[76.9,68],[81.5,65.9],[88.2,79.4],[90.8,77.9],[99.4,89.6]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"456578425",name:"",points:[[100.2,3],[106.6,13.9],[88.7,20.8],[86.4,15.5],[81.2,17.8],[83.5,23.1],[75,26.4],[71.7,15.9],[77.9,13.1],[78.9,15],[86.5,11.5],[85.3,9.4],[100.2,3]],height:14,estimatedHeight:!0,at:0,kind:"apartments"},{id:"456578428",name:"",points:[[111.4,22.8],[114.4,28.1],[102.5,34.3],[101.7,31.8],[92.4,35.2],[94,39.1],[83.9,44.7],[79.8,38],[79.4,36.9],[111.4,22.8]],height:14,estimatedHeight:!0,at:0,kind:"apartments"},{id:"456578429",name:"",points:[[60,78.7],[55.5,81.1],[42.6,61.7],[40.3,63.7],[36.4,57.6],[44.1,51.9],[46.9,55.5],[57.9,48.4],[66.3,61.1],[53.1,69.5],[60,78.7]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"456578430",name:"",points:[[79.8,38],[62.2,48.8],[58.1,42.3],[64.7,36.7],[61.6,6.1],[51.7,6.7],[48.2,-4.4],[70.4,-6.9],[73.7,4.4],[70.5,5.7],[71.7,15.9],[75,26.4],[79.8,38]],height:14,estimatedHeight:!0,at:8,kind:"yes"},{id:"462600381",name:"",points:[[453.8,-380.1],[456.4,-374.6],[469.3,-380.9],[468,-383.5],[469.2,-384.1],[470.6,-381.4],[473.2,-382.8],[471.6,-385.9],[469.3,-389.2],[465.9,-387.6],[466.6,-386],[453.8,-380.1]],height:14,estimatedHeight:!0,at:705,kind:"yes"},{id:"462600382",name:"",points:[[472.8,-428.2],[457,-421.2],[458.2,-418.4],[456,-417],[457.3,-414],[475.1,-422.8],[472.8,-428.2]],height:14,estimatedHeight:!0,at:716,kind:"yes"},{id:"462600383",name:"",points:[[452.3,-413.2],[449.4,-412],[446.8,-417.2],[445.4,-416.5],[444.3,-418.9],[438.1,-416.6],[444.5,-401.6],[457.4,-407.8],[455.2,-412.2],[457.5,-413.5],[456,-417],[458.2,-418.4],[455.8,-423.9],[454,-423.3],[453.2,-424.5],[447.8,-421.9],[449.6,-417.4],[450.7,-417.9],[451.5,-416.3],[450.7,-415.9],[452.3,-413.2]],height:14,estimatedHeight:!0,at:702,kind:"yes"},{id:"462600384",name:"",points:[[485.1,-400],[479.2,-412.9],[462.8,-405.5],[466.7,-395],[468.3,-391.5],[485.1,-400]],height:14,estimatedHeight:!0,at:720,kind:"apartments"},{id:"462600385",name:"",points:[[489.1,-390.6],[487.1,-395.3],[473,-388.8],[473.8,-386.9],[471.6,-385.9],[474.1,-380.9],[477.2,-382.3],[476.7,-383.3],[476,-382.9],[475.4,-384.4],[489.1,-390.6]],height:14,estimatedHeight:!0,at:723,kind:"apartments"},{id:"462600389",name:"",points:[[462.2,-361.5],[465.1,-354.9],[483.9,-364.5],[481.5,-370.2],[462.2,-361.5]],height:14,estimatedHeight:!0,at:707,kind:"yes"},{id:"462600390",name:"",points:[[444.5,-401.6],[446.5,-396.8],[459.9,-403.7],[458.7,-405.9],[461.9,-407.4],[460.8,-409.7],[457.4,-407.8],[444.5,-401.6]],height:14,estimatedHeight:!0,at:703,kind:"yes"},{id:"462600391",name:"",points:[[490.7,-386.3],[489.1,-390.6],[475.4,-384.4],[476,-382.9],[476.7,-383.3],[478,-380.5],[490.7,-386.3]],height:14,estimatedHeight:!0,at:727,kind:"apartments"},{id:"462600392",name:"",points:[[471.8,-339.7],[473.6,-335.6],[486.5,-341.3],[485.8,-343.1],[487,-343.7],[485.6,-346.6],[471.8,-339.7]],height:14,estimatedHeight:!0,at:710,kind:"yes"},{id:"462600393",name:"",points:[[505.3,-352],[503.7,-355.8],[485.6,-346.6],[487.7,-342.3],[492.5,-344.5],[492.1,-345.4],[505.3,-352]],height:13.2,estimatedHeight:!1,at:725,kind:"apartments"},{id:"462600395",name:"",points:[[473.6,-335.6],[475.3,-331.1],[489.5,-337.2],[489.2,-338.1],[491.5,-339.5],[489.8,-343.3],[487.7,-342.3],[486.5,-341.3],[473.6,-335.6]],height:14,estimatedHeight:!0,at:710,kind:"yes"},{id:"462600396",name:"",points:[[477.2,-417.1],[460.8,-409.7],[462.8,-405.5],[479.2,-412.9],[477.2,-417.1]],height:14,estimatedHeight:!0,at:719,kind:"yes"},{id:"462600397",name:"",points:[[507.6,-346],[505.3,-352],[492.1,-345.4],[494.4,-340],[507.6,-346]],height:13.2,estimatedHeight:!1,at:731,kind:"apartments"},{id:"462600398",name:"",points:[[449.1,-391],[451.8,-384.6],[468,-392.2],[466.7,-395],[462.6,-393.1],[461,-396.5],[449.1,-391]],height:14,estimatedHeight:!0,at:703,kind:"yes"},{id:"462600399",name:"",points:[[471.8,-339.7],[484.4,-346.2],[481.2,-353],[483.3,-353.7],[481.6,-356.8],[467.4,-349.7],[471.8,-339.7]],height:14,estimatedHeight:!0,at:709,kind:"yes"},{id:"462600401",name:"",points:[[467.4,-349.7],[473.2,-352.6],[472.4,-354.9],[473.7,-355.5],[474.9,-353.5],[480.2,-356.1],[479.1,-358.7],[481.5,-360.3],[480.2,-362.4],[465.1,-354.9],[467.4,-349.7]],height:14,estimatedHeight:!0,at:708,kind:"yes"},{id:"462600403",name:"",points:[[462.2,-361.5],[477.9,-368.6],[474.1,-376.2],[471.2,-374.7],[470.1,-376.8],[458.1,-371],[462.2,-361.5]],height:14,estimatedHeight:!0,at:706,kind:"yes"},{id:"462600405",name:"",points:[[503.7,-355.8],[501.7,-360.4],[489.9,-354.3],[490.2,-353.2],[486.1,-351],[487.8,-347.8],[503.7,-355.8]],height:16.5,estimatedHeight:!1,at:727,kind:"apartments"},{id:"462600406",name:"",points:[[497.2,-370.6],[494.9,-376.3],[481.5,-370.2],[482.3,-368.3],[484.5,-369.5],[485.2,-367.5],[483.1,-366.5],[483.9,-364.5],[497.2,-370.6]],height:13.2,estimatedHeight:!1,at:728,kind:"apartments"},{id:"462600407",name:"",points:[[456.4,-374.6],[458.1,-371],[470.1,-376.8],[469.7,-378.3],[474.5,-380.2],[473.2,-382.8],[456.4,-374.6]],height:14,estimatedHeight:!0,at:705,kind:"yes"},{id:"462600408",name:"",points:[[506.5,-324.2],[515.7,-327.3],[512.8,-334],[504.2,-331],[506.5,-324.2]],height:6.6,estimatedHeight:!1,at:738,kind:"apartments"},{id:"462600409",name:"",points:[[490.7,-386.3],[478,-380.5],[480.3,-375.3],[493.1,-381.1],[490.7,-386.3]],height:14,estimatedHeight:!0,at:727,kind:"apartments"},{id:"462600412",name:"",points:[[475.1,-422.8],[457.3,-414],[457.5,-413.5],[456.1,-412.7],[457.1,-410.8],[460.8,-412.4],[461.8,-410.2],[477.2,-417.1],[475.1,-422.8]],height:14,estimatedHeight:!0,at:719,kind:"yes"},{id:"462600413",name:"",points:[[446.5,-396.8],[449.1,-391],[461,-396.5],[458,-402.7],[446.5,-396.8]],height:14,estimatedHeight:!0,at:703,kind:"yes"},{id:"462600415",name:"",points:[[487.1,-395.3],[485.1,-400],[468.3,-391.5],[469.3,-389.2],[472.5,-390.9],[473.5,-389.1],[487.1,-395.3]],height:14,estimatedHeight:!0,at:725,kind:"apartments"},{id:"462600416",name:"",points:[[451.8,-384.6],[453.8,-380.1],[466.6,-386],[465.9,-387.6],[469.3,-389.2],[468,-392.2],[451.8,-384.6]],height:14,estimatedHeight:!0,at:704,kind:"yes"},{id:"462600417",name:"",points:[[501.7,-360.4],[497.2,-370.6],[483.9,-364.5],[480.2,-362.4],[481.5,-360.3],[482.6,-360.5],[484,-358.1],[481.6,-356.8],[483.3,-353.7],[484.7,-350.6],[486.1,-351],[490.2,-353.2],[489.9,-354.3],[501.7,-360.4]],height:13.2,estimatedHeight:!1,at:725,kind:"apartments"},{id:"462600418",name:"",points:[[507.6,-346],[497.3,-341.2],[499.3,-336.1],[505.4,-338.6],[505.8,-337.1],[502.3,-335.5],[504.2,-331],[512.8,-334],[507.6,-346]],height:9.899999999999999,estimatedHeight:!1,at:738,kind:"apartments"},{id:"462600420",name:"",points:[[494.9,-376.3],[493.1,-381.1],[480.3,-375.3],[480.8,-374],[476.2,-372.1],[477.9,-368.6],[494.9,-376.3]],height:16.5,estimatedHeight:!1,at:723,kind:"apartments"},{id:"464087306",name:"",points:[[1357.4,-666.1],[1353,-682.1],[1365.2,-685.5],[1369.5,-669.2],[1357.4,-666.1]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087323",name:"",points:[[1331.1,-665.6],[1332.7,-654.8],[1348.9,-655],[1346.6,-668],[1331.1,-665.6]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087327",name:"",points:[[1364.7,-693.5],[1388.2,-700.6],[1390.9,-692.1],[1396.9,-693.8],[1394.8,-707.7],[1387.4,-705.7],[1386,-711],[1381.3,-709.5],[1382.5,-705.4],[1378.8,-704.4],[1377.6,-708.2],[1369.3,-705.5],[1370.3,-701.8],[1366.7,-700.8],[1365.5,-704.2],[1361.8,-703],[1364.7,-693.5]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087331",name:"",points:[[1378.3,-711.1],[1373.4,-727.5],[1380.2,-729.5],[1382.3,-723],[1384.8,-723.8],[1385.8,-720.6],[1383.4,-719.8],[1385.3,-713.3],[1378.3,-711.1]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087345",name:"",points:[[1358.5,-654.8],[1355.9,-663.5],[1366.8,-666.2],[1370.4,-654.9],[1358.5,-654.8]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087347",name:"",points:[[1328.8,-681.6],[1325.9,-699.1],[1338.9,-701.3],[1341.9,-683.8],[1328.8,-681.6]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087352",name:"",points:[[1376,-742.4],[1390.7,-743.2],[1391.6,-727.6],[1392.1,-724.9],[1387.9,-724.5],[1387.4,-730.7],[1379.7,-730.1],[1378.7,-732.2],[1376,-742.4]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087361",name:"",points:[[1349.4,-689.4],[1347.4,-701.5],[1352.5,-702.1],[1353.5,-698.1],[1356.7,-698.8],[1355.7,-702.4],[1361.8,-703],[1364.7,-693.5],[1349.4,-689.4]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087362",name:"",points:[[1099.9,-663],[1102.3,-709.1],[1110.2,-708.9],[1109.9,-702.5],[1115,-702.3],[1115.2,-715.6],[1130.2,-716.7],[1130,-699.2],[1132.9,-693.9],[1128,-691.6],[1124.4,-690.9],[1119.6,-690.9],[1119.7,-693.2],[1113,-693.4],[1112.4,-677.4],[1117.7,-677.1],[1117.8,-678.7],[1123.7,-678.8],[1137.1,-686.8],[1142,-677.8],[1126.5,-669.5],[1125.6,-671.7],[1111.6,-672.2],[1111.3,-664.4],[1103,-662.5],[1099.9,-663]],height:14,estimatedHeight:!0,at:1786,kind:"yes"},{id:"464087384",name:"",points:[[1319.1,-736.4],[1323.3,-711.4],[1331.9,-712.4],[1330.6,-719.9],[1336.1,-720.9],[1337.5,-715.2],[1345,-717.2],[1342.8,-726.4],[1338.2,-725.3],[1337.3,-729.2],[1341.8,-730.3],[1339.5,-737.9],[1319.1,-736.4]],height:14,estimatedHeight:!0,at:1993,kind:"yes"},{id:"464087403",name:"",points:[[1237.8,-713.1],[1240.4,-684.8],[1254.8,-685.7],[1253,-711.5],[1267.4,-712.4],[1267.5,-711],[1288.1,-712.3],[1287.1,-726.5],[1281.7,-726.1],[1281.1,-733.4],[1268.3,-732.4],[1268.6,-729.1],[1239.8,-727],[1240,-725.2],[1233.3,-724.7],[1234.2,-712.9],[1237.8,-713.1]],height:14,estimatedHeight:!0,at:1942,kind:"yes"},{id:"464087404",name:"",points:[[1331.1,-665.6],[1328.7,-680.3],[1344.2,-682.8],[1346.6,-668],[1331.1,-665.6]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087408",name:"",points:[[1367.5,-676.7],[1376.3,-679],[1377.7,-673.4],[1376.3,-673],[1376.8,-671.1],[1369.5,-669.2],[1367.5,-676.7]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087415",name:"",points:[[1377.7,-673.4],[1388,-676.1],[1386.5,-681.7],[1397.8,-684.7],[1402.7,-666.4],[1391.3,-663.4],[1390.5,-666.4],[1378.8,-663.4],[1376.3,-673],[1377.7,-673.4]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087419",name:"",points:[[1339.5,-737.9],[1356.3,-740.1],[1359.1,-729.7],[1354.3,-728.5],[1354.9,-726.6],[1348,-724.9],[1347.6,-726.5],[1343.2,-725.1],[1339.5,-737.9]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087421",name:"",points:[[1410.4,-688.6],[1406.4,-713],[1417.3,-714.8],[1421.3,-690.4],[1410.4,-688.6]],height:14,estimatedHeight:!0,at:2003,kind:"apartments"},{id:"464087428",name:"",points:[[1147.3,-626.3],[1138.1,-645.3],[1126.1,-639.2],[1124.8,-641.8],[1120.6,-639.7],[1116,-639.7],[1116.4,-648.9],[1118.7,-648.8],[1120.4,-649.5],[1119.1,-652.1],[1141,-662.9],[1146.7,-651],[1151,-653.1],[1160.4,-632.4],[1147.3,-626.3]],height:14,estimatedHeight:!0,at:1809,kind:"yes"},{id:"464087434",name:"",points:[[1390.7,-743.2],[1402.2,-743.9],[1402.5,-734.7],[1403.7,-734.7],[1404.1,-728.3],[1391.6,-727.6],[1390.7,-743.2]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087450",name:"",points:[[1362,-731],[1361.2,-741.7],[1376,-742.4],[1378.7,-732.2],[1362,-731]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"474220872",name:"",points:[[86.2,-121],[105.9,-121.1],[105.8,-129.2],[107.1,-129.2],[106.8,-144],[102.1,-144.1],[102.2,-141.2],[96.7,-141.2],[96.9,-138.9],[93,-138.9],[92.8,-142.3],[85.9,-142.5],[86.2,-121]],height:14,estimatedHeight:!0,at:142,kind:"apartments"},{id:"474220873",name:"",points:[[159.1,-143.9],[159.3,-135.8],[160.3,-135.8],[160.2,-134],[168.9,-133.5],[168.7,-143.9],[159.1,-143.9]],height:14,estimatedHeight:!0,at:368,kind:"apartments"},{id:"474220874",name:"",points:[[105.9,-121.1],[114.9,-121.1],[114.8,-137.5],[116.8,-137.7],[116.8,-139.8],[111.2,-139.6],[111.1,-143.6],[116.7,-143.6],[116.2,-156.6],[112.2,-156.4],[112.1,-160.1],[105.7,-159.9],[105.9,-158.3],[102.3,-157.6],[101.9,-153.3],[106,-153.2],[106.2,-150.2],[107,-150.2],[107.1,-129.2],[105.8,-129.2],[105.9,-121.1]],height:14,estimatedHeight:!0,at:317,kind:"yes"},{id:"474220875",name:"",points:[[114.9,-121.1],[124.5,-121.2],[124,-140.9],[123.7,-144.8],[116.7,-144.7],[116.8,-137.7],[114.8,-137.5],[114.9,-121.1]],height:14,estimatedHeight:!0,at:326,kind:"yes"},{id:"474220876",name:"",points:[[116,-167.9],[115.5,-187.2],[131.2,-186.9],[132,-167],[125.4,-166.6],[125.4,-167.8],[116,-167.9]],height:14,estimatedHeight:!0,at:329,kind:"yes"},{id:"474220877",name:"",points:[[124,-140.9],[122.6,-158.9],[132.5,-159.8],[132.2,-143.8],[127.6,-143.6],[127.5,-141],[124,-140.9]],height:14,estimatedHeight:!0,at:333,kind:"yes"},{id:"474220878",name:"",points:[[162,-187],[154.3,-187.1],[154.5,-171.1],[162,-171.2],[162,-187]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"474220879",name:"",points:[[93.3,-187],[93.9,-178.6],[84.1,-178.2],[84.4,-170.8],[76,-170.7],[75,-186.7],[93.3,-187]],height:14,estimatedHeight:!0,at:289,kind:"yes"},{id:"474220880",name:"",points:[[93.3,-187],[104.6,-187.2],[104.9,-177.5],[103.7,-177.4],[103.7,-174.8],[98.7,-174.8],[98.9,-171.7],[89.5,-171.5],[89.5,-170.4],[84.4,-170.2],[84.1,-178.2],[93.9,-178.6],[93.3,-187]],height:14,estimatedHeight:!0,at:307,kind:"yes"},{id:"474220881",name:"",points:[[138.8,-121.5],[151,-121.9],[150.4,-138.1],[138.2,-137.7],[138.8,-121.5]],height:14,estimatedHeight:!0,at:347,kind:"yes"},{id:"474220882",name:"",points:[[168.9,-180.3],[168.8,-187.1],[162,-187],[162.1,-180.2],[168.9,-180.3]],height:14,estimatedHeight:!0,at:376,kind:"apartments"},{id:"474220883",name:"",points:[[132,-165.7],[131.2,-186.9],[154.3,-187.1],[154.5,-165.4],[132,-165.7]],height:14,estimatedHeight:!0,at:345,kind:"yes"},{id:"474220884",name:"",points:[[168.9,-158.4],[168.9,-180.3],[162.1,-180.2],[162,-167.3],[159.8,-167.3],[159.8,-171.1],[154.5,-171.1],[154.5,-165.4],[153.4,-165.5],[153.4,-158.5],[168.9,-158.4]],height:14,estimatedHeight:!0,at:375,kind:"apartments"},{id:"474220885",name:"",points:[[77.3,-152.1],[78.2,-142.1],[87.4,-142.5],[87.4,-143.8],[89.7,-144],[89.6,-142.4],[97.1,-142.3],[97.1,-145.1],[106.8,-145.2],[107,-150.2],[96.1,-150.5],[96,-152.2],[77.3,-152.1]],height:14,estimatedHeight:!0,at:152,kind:"yes"},{id:"474220886",name:"",points:[[116,-167.9],[119.7,-167.9],[119.7,-164.1],[125.3,-164],[125.4,-166.6],[132,-167],[132,-165.7],[137.6,-165.6],[137.6,-162.3],[132.5,-162],[132.5,-159.8],[122.6,-158.9],[123.2,-151.9],[119,-151.6],[119.1,-148],[123.5,-148],[123.7,-144.8],[116.7,-144.7],[116,-167.9]],height:14,estimatedHeight:!0,at:328,kind:"yes"},{id:"474220887",name:"",points:[[157.4,-143.9],[157.4,-148.9],[168.7,-148.9],[168.7,-143.9],[157.4,-143.9]],height:14,estimatedHeight:!0,at:367,kind:"yes"},{id:"474220888",name:"",points:[[169,-127.4],[168.9,-133.5],[157.2,-134.2],[157.3,-129.1],[158.3,-129.2],[158.3,-127.2],[169,-127.4]],height:14,estimatedHeight:!0,at:365,kind:"yes"},{id:"474220889",name:"",points:[[97.3,-153.2],[96.3,-157.5],[96.5,-161.7],[100.9,-162.7],[105.5,-161.8],[105.9,-158.3],[102.3,-157.6],[101.9,-153.3],[97.3,-153.2]],height:14,estimatedHeight:!0,at:312,kind:"yes"},{id:"474220890",name:"",points:[[76.7,-161.1],[77.3,-152.1],[96,-152.2],[96,-155.9],[91.4,-156],[91.4,-157.7],[88.9,-157.5],[88.8,-160.9],[76.7,-161.1]],height:14,estimatedHeight:!0,at:289,kind:"yes"},{id:"474220891",name:"",points:[[151,-121.9],[169.1,-121.7],[169,-127.4],[158.3,-127.2],[158.3,-129.2],[157.3,-129.1],[157.3,-133.2],[150.6,-133],[151,-121.9]],height:14,estimatedHeight:!0,at:359,kind:"yes"},{id:"474220892",name:"",points:[[133.4,-121.4],[124.5,-121.2],[124,-140.9],[130.1,-141],[130.3,-142.2],[132.9,-142.3],[133.4,-121.4]],height:14,estimatedHeight:!0,at:339,kind:"yes"},{id:"474220893",name:"",points:[[79.5,-120.8],[78.2,-142.1],[85.9,-142.5],[86.2,-121],[79.5,-120.8]],height:14,estimatedHeight:!0,at:142,kind:"apartments"},{id:"474220894",name:"",points:[[150.6,-133],[150.4,-138.1],[144.1,-137.9],[144.3,-143],[150.4,-143.7],[150.3,-147.5],[151.1,-149],[157.4,-148.9],[157.4,-143.9],[159.1,-143.9],[159.3,-135.8],[157.1,-136.1],[157.3,-133.2],[150.6,-133]],height:14,estimatedHeight:!0,at:361,kind:"yes"},{id:"474220895",name:"",points:[[76,-170.7],[76.7,-161.1],[95.9,-160.7],[95.9,-164.6],[97.3,-164.6],[97.2,-167],[99,-167],[98.9,-171.7],[91.1,-171.5],[91.4,-168.5],[84.5,-168.3],[84.4,-170.8],[76,-170.7]],height:14,estimatedHeight:!0,at:289,kind:"yes"},{id:"474220896",name:"",points:[[138.2,-137.7],[138.8,-121.5],[133.4,-121.4],[132.9,-138.1],[137.1,-138.3],[137.1,-137.7],[138.2,-137.7]],height:14,estimatedHeight:!0,at:342,kind:"yes"},{id:"474220897",name:"",points:[[137.6,-165.6],[137.6,-159.7],[132.5,-159.8],[132.2,-143.8],[136.5,-144],[137.1,-137.7],[142,-137.8],[142.1,-145],[144.3,-144.9],[144.3,-143],[150.4,-143.7],[150.3,-147.5],[151.1,-149],[151,-165.5],[144.8,-165.6],[144.8,-162.7],[140.5,-162.4],[140.4,-165.6],[137.6,-165.6]],height:14,estimatedHeight:!0,at:349,kind:"yes"},{id:"474220898",name:"",points:[[151,-153.4],[158.2,-153.4],[158.3,-148.9],[168.7,-148.9],[168.9,-158.4],[153.4,-158.5],[153.4,-162.2],[151,-162.2],[151,-153.4]],height:14,estimatedHeight:!0,at:362,kind:"apartments"},{id:"474220899",name:"",points:[[104.6,-187.2],[115.5,-187.2],[116.2,-156.6],[112.2,-156.4],[112,-162.6],[104.2,-162.3],[103.7,-177.4],[104.9,-177.5],[104.6,-187.2]],height:14,estimatedHeight:!0,at:319,kind:"yes"},{id:"476740625",name:"",points:[[596.4,-471.5],[592,-469.6],[594.4,-464.3],[588,-460.6],[589.9,-457],[584.5,-454.2],[588.1,-447.2],[590.5,-448.6],[592.5,-444.7],[594.7,-445.6],[596.9,-441],[607.9,-446.6],[596.4,-471.5]],height:14,estimatedHeight:!0,at:856,kind:"yes"},{id:"476740626",name:"",points:[[590.1,-422.8],[586.8,-429.1],[577.2,-424],[580.5,-417.7],[590.1,-422.8]],height:14,estimatedHeight:!0,at:835,kind:"apartments"},{id:"476740627",name:"",points:[[778.5,-485.3],[768.9,-481.5],[771.2,-476],[772,-473.3],[774.7,-466.7],[784.6,-470.7],[778.5,-485.3]],height:14,estimatedHeight:!0,at:1036,kind:"yes"},{id:"476740628",name:"",points:[[623.4,-457.9],[618.8,-466.4],[625.3,-469.1],[621.9,-476.6],[627.2,-479],[635.4,-463.8],[623.4,-457.9]],height:14,estimatedHeight:!0,at:887,kind:"yes"},{id:"476740629",name:"",points:[[577.2,-424],[593.6,-432.6],[592,-436],[597.7,-439.1],[596.9,-441],[596.4,-441.7],[589.6,-437.7],[590.1,-436.8],[574.8,-429.2],[577.2,-424]],height:14,estimatedHeight:!0,at:833,kind:"apartments"},{id:"476740630",name:"",points:[[822.5,-413.5],[846.7,-420.7],[842.5,-432.3],[841.4,-432],[840.5,-434.2],[818.1,-428.1],[822.5,-413.5]],height:14,estimatedHeight:!0,at:1067,kind:"yes"},{id:"476740633",name:"",points:[[795.5,-443.8],[797.3,-438.8],[808.7,-433],[812.6,-434.7],[807.5,-448.8],[795.5,-443.8]],height:14,estimatedHeight:!0,at:1059,kind:"yes"},{id:"476740634",name:"",points:[[570.4,-438],[588.1,-447.2],[583.7,-455.7],[565.9,-446.6],[570.4,-438]],height:14,estimatedHeight:!0,at:830,kind:"apartments"},{id:"476740636",name:"",points:[[765.8,-446.3],[768.7,-452.7],[775.2,-451.8],[773.2,-448],[770.1,-449.3],[768.3,-445.3],[765.8,-446.3]],height:14,estimatedHeight:!0,at:1024,kind:"yes"},{id:"476740637",name:"",points:[[928.6,-434.9],[930.4,-428.8],[939.4,-431.4],[937.6,-437.6],[928.6,-434.9]],height:14,estimatedHeight:!0,at:1185,kind:"yes"},{id:"476740638",name:"",points:[[822.5,-413.5],[819.2,-424.6],[813,-422.7],[810.1,-416.2],[811.4,-411.2],[815.6,-412.4],[815.8,-411.7],[822.5,-413.5]],height:14,estimatedHeight:!0,at:1067,kind:"apartments"},{id:"476740640",name:"",points:[[768.9,-481.5],[759,-477.2],[765.2,-462.7],[774.7,-466.7],[772,-473.3],[770.6,-472.7],[769.6,-475.3],[771.2,-476],[768.9,-481.5]],height:14,estimatedHeight:!0,at:1025,kind:"yes"},{id:"476740641",name:"",points:[[612.8,-448.8],[617.9,-437.7],[638.3,-448.4],[632.9,-458.2],[636.1,-459.9],[634.2,-463.3],[623.4,-457.9],[624.8,-455.4],[612.8,-448.8]],height:14,estimatedHeight:!0,at:876,kind:"apartments"},{id:"476740644",name:"",points:[[873.5,-443.3],[871.2,-448.6],[869.4,-454.8],[857.7,-481],[863.4,-483.4],[862.8,-485.1],[869,-487.8],[877.9,-464.9],[885,-448.1],[873.5,-443.3]],height:14,estimatedHeight:!0,at:1124,kind:"yes"},{id:"476740646",name:"",points:[[785.5,-426.7],[790.8,-424.4],[796.2,-436.4],[790.5,-438.9],[785.5,-426.7]],height:14,estimatedHeight:!0,at:1040,kind:"apartments"},{id:"476740648",name:"",points:[[761.8,-436.4],[767.5,-433.9],[771.6,-444],[765.8,-446.3],[761.8,-436.4]],height:14,estimatedHeight:!0,at:1020,kind:"yes"},{id:"476740649",name:"",points:[[890.9,-433.3],[885,-448.1],[873.5,-443.3],[879.5,-429.6],[890.9,-433.3]],height:14,estimatedHeight:!0,at:1126,kind:"yes"},{id:"476740650",name:"Convento delle Fanciulle del Ceppo",points:[[630.2,-509],[663.7,-478.9],[657.2,-471.7],[623.7,-501.8],[630.2,-509]],height:14,estimatedHeight:!0,at:924,kind:"apartments"},{id:"476740652",name:"",points:[[641.8,-485.6],[651,-467.9],[632.9,-458.2],[638.3,-448.4],[675.3,-467.9],[663.7,-478.9],[657.2,-471.7],[641.8,-485.6]],height:14,estimatedHeight:!0,at:899,kind:"yes"},{id:"476740653",name:"",points:[[810.1,-416.2],[814.3,-425.6],[806.5,-429],[802.3,-419.7],[810.1,-416.2]],height:14,estimatedHeight:!0,at:1056,kind:"yes"},{id:"476740658",name:"",points:[[877.9,-464.9],[885,-448.1],[890.9,-433.3],[901.2,-436.1],[888.8,-469.7],[877.9,-464.9]],height:14,estimatedHeight:!0,at:1138,kind:"yes"},{id:"476740660",name:"",points:[[712.8,-456.8],[735.8,-446.9],[740,-457.2],[730.2,-460.8],[728.6,-464.3],[712.9,-458.4],[712.8,-456.8]],height:14,estimatedHeight:!0,at:993,kind:"apartments"},{id:"476740663",name:"",points:[[828,-456.8],[862.1,-471.4],[869.4,-454.8],[865,-452.9],[864,-455.3],[860.8,-453.9],[857.5,-461.7],[836.3,-452.7],[839.4,-445.5],[833.7,-443.2],[828,-456.8]],height:14,estimatedHeight:!0,at:1086,kind:"yes"},{id:"476740665",name:"",points:[[790.8,-424.4],[802.3,-419.7],[807.4,-431.4],[803.8,-433],[802.9,-431.3],[798.8,-432.7],[800.9,-437],[797.3,-438.8],[790.8,-424.4]],height:14,estimatedHeight:!0,at:1049,kind:"apartments"},{id:"476740666",name:"",points:[[740,-457.2],[742.9,-456],[744,-459.2],[749.8,-461.7],[750.9,-457.9],[752.1,-457.4],[754.7,-458.2],[748.5,-472.7],[737.2,-467.8],[740.9,-458.6],[740,-457.2]],height:14,estimatedHeight:!0,at:1011,kind:"yes"},{id:"476740667",name:"",points:[[835.7,-438.1],[833.7,-443.2],[836.5,-444.2],[838.5,-439.2],[835.7,-438.1]],height:14,estimatedHeight:!0,at:1087,kind:"yes"},{id:"476740668",name:"",points:[[631.6,-494.7],[621.4,-489.5],[622.1,-487.9],[599.3,-477.6],[612.8,-448.8],[624.8,-455.4],[615,-473.4],[641.8,-485.6],[631.6,-494.7]],height:14,estimatedHeight:!0,at:874,kind:"yes"},{id:"476740669",name:"",points:[[565.9,-446.6],[587.7,-457.8],[586.6,-460],[581.1,-457.3],[578.5,-462.5],[562.3,-454],[565.9,-446.6]],height:13.2,estimatedHeight:!1,at:828,kind:"apartments"},{id:"476740670",name:"",points:[[767.5,-433.9],[774.7,-431.1],[779.4,-442.6],[772.2,-445.6],[767.5,-433.9]],height:14,estimatedHeight:!0,at:1026,kind:"apartments"},{id:"476740671",name:"",points:[[820.5,-454],[816,-465.5],[811,-463.5],[815.5,-452.1],[820.5,-454]],height:14,estimatedHeight:!0,at:1071,kind:"yes"},{id:"476740672",name:"",points:[[820.4,-436.5],[833.7,-443.2],[828,-456.8],[815.5,-452.1],[820.4,-436.5]],height:14,estimatedHeight:!0,at:1071,kind:"yes"},{id:"476740673",name:"",points:[[795.5,-443.8],[792.6,-450.7],[796.9,-452.7],[788.9,-472.5],[804.4,-478.7],[811,-463.5],[815.5,-452.1],[795.5,-443.8]],height:14,estimatedHeight:!0,at:1049,kind:"yes"},{id:"476740674",name:"",points:[[735.8,-446.9],[746.1,-442.8],[750.3,-452.9],[740,-457.2],[735.8,-446.9]],height:14,estimatedHeight:!0,at:1002,kind:"apartments"},{id:"476740675",name:"",points:[[756.6,-438.5],[761.8,-436.4],[766.1,-447.1],[760.9,-449.2],[756.6,-438.5]],height:14,estimatedHeight:!0,at:1015,kind:"yes"},{id:"476740676",name:"",points:[[746.1,-442.8],[756.6,-438.5],[760.7,-448.6],[750.3,-452.9],[746.1,-442.8]],height:14,estimatedHeight:!0,at:1010,kind:"apartments"},{id:"476740678",name:"",points:[[759,-477.2],[748.5,-472.7],[754.7,-458.2],[765.2,-462.7],[759,-477.2]],height:14,estimatedHeight:!0,at:1014,kind:"yes"},{id:"476740681",name:"",points:[[774.7,-431.1],[785.5,-426.7],[789.5,-436.3],[781.3,-439.6],[782,-441.5],[779.4,-442.6],[774.7,-431.1]],height:14,estimatedHeight:!0,at:1035,kind:"apartments"},{id:"476740682",name:"",points:[[863,-425.1],[856.7,-439.7],[861.5,-441.6],[856,-454.5],[838.8,-446.8],[839.4,-445.5],[836.5,-444.2],[841.4,-432],[842.5,-432.3],[846.7,-420.7],[863,-425.1]],height:14,estimatedHeight:!0,at:1109,kind:"yes"},{id:"476740685",name:"",points:[[879.4,-429.4],[871.2,-448.6],[860.4,-444.2],[861.5,-441.6],[856.7,-439.7],[863.3,-424.6],[879.4,-429.4]],height:14,estimatedHeight:!0,at:1109,kind:"yes"},{id:"476740687",name:"",points:[[804.4,-478.7],[798.5,-493.5],[778.5,-485.3],[784.6,-470.7],[804.4,-478.7]],height:14,estimatedHeight:!0,at:1046,kind:"yes"},{id:"476740689",name:"",points:[[607.9,-446.6],[599.1,-442.1],[600,-440.4],[592,-436],[593.6,-432.6],[586.8,-429.1],[590.1,-422.8],[613,-435.5],[607.9,-446.6]],height:14,estimatedHeight:!0,at:847,kind:"apartments"},{id:"476740691",name:"",points:[[574.8,-429.2],[590.1,-436.8],[589.6,-437.7],[594.5,-440.6],[590.5,-448.6],[588.1,-447.2],[570.4,-438],[574.8,-429.2]],height:14,estimatedHeight:!0,at:832,kind:"apartments"},{id:"476740692",name:"",points:[[820.4,-458.3],[815.5,-470.5],[823.7,-473.8],[822.1,-477.8],[848.7,-488.5],[849.5,-486.5],[851.3,-487.2],[855,-477.5],[856.8,-473.5],[847.1,-469.6],[846.5,-471.2],[829.6,-464.4],[830.4,-462.4],[820.4,-458.3]],height:14,estimatedHeight:!0,at:1077,kind:"yes"},{id:"476740694",name:"",points:[[812.6,-434.7],[820.4,-436.5],[815.5,-452.1],[807.5,-448.8],[812.6,-434.7]],height:14,estimatedHeight:!0,at:1071,kind:"yes"},{id:"476740695",name:"",points:[[858.6,-469.8],[855,-477.5],[858.6,-479.2],[862.1,-471.4],[858.6,-469.8]],height:14,estimatedHeight:!0,at:1117,kind:"yes"},{id:"476894503",name:"",points:[[559.6,-236.8],[576.3,-243.6],[577.8,-239.8],[594.5,-246.5],[593.1,-249.7],[588,-247.7],[585.6,-253.1],[575.2,-248.9],[573.4,-252.4],[556.1,-245.3],[559.6,-236.8]],height:13.2,estimatedHeight:!1,at:783,kind:"apartments"},{id:"476894504",name:"",points:[[581.6,-276.9],[588.5,-259.8],[590.7,-260.7],[592.8,-255.1],[595.4,-256.2],[586.5,-278.1],[581.6,-276.9]],height:14,estimatedHeight:!0,at:798,kind:"apartments"},{id:"476894506",name:"",points:[[558.5,-271.2],[562.1,-262.3],[564.7,-263.4],[566.1,-259.1],[569.9,-260.7],[571.4,-257.1],[573.9,-257.9],[574.6,-256.1],[576.5,-256.8],[569.3,-273.9],[558.5,-271.2]],height:14,estimatedHeight:!0,at:774,kind:"apartments"},{id:"476894511",name:"",points:[[569.3,-273.9],[575.5,-259.2],[578.8,-260.7],[581.6,-253.8],[587.2,-256.1],[588.2,-253.5],[590.6,-254.5],[581.6,-276.9],[569.3,-273.9]],height:14,estimatedHeight:!0,at:785,kind:"apartments"},{id:"476894512",name:"",points:[[675.6,-299.3],[680.8,-282.7],[683.8,-283.6],[684.1,-282.4],[687.1,-283.1],[681.3,-300.8],[675.6,-299.3]],height:14,estimatedHeight:!0,at:894,kind:"yes"},{id:"476894514",name:"",points:[[696.8,-267.3],[701.4,-269],[698.2,-278.9],[693.7,-277.1],[696.8,-267.3]],height:14,estimatedHeight:!0,at:911,kind:"yes"},{id:"476894515",name:"",points:[[653.2,-293.7],[657.7,-279.5],[658.7,-279.9],[660.2,-275.6],[661.8,-276],[661.6,-277.4],[664,-278],[658.1,-294.9],[653.2,-293.7]],height:14,estimatedHeight:!0,at:872,kind:"yes"},{id:"476894517",name:"",points:[[692.7,-265.9],[696.8,-267.3],[691.2,-284.4],[687.1,-283.1],[692.7,-265.9]],height:14,estimatedHeight:!0,at:905,kind:"yes"},{id:"476894520",name:"",points:[[710.4,-272.4],[704.4,-287.3],[700.9,-286],[705.6,-270.6],[710.4,-272.4]],height:14,estimatedHeight:!0,at:919,kind:"yes"},{id:"476894521",name:"",points:[[730.2,-291.6],[722.1,-311],[718.5,-310],[724.9,-291.9],[722,-290.9],[723,-289.1],[730.2,-291.6]],height:14,estimatedHeight:!0,at:939,kind:"yes"},{id:"476894523",name:"",points:[[663.7,-296.3],[670.9,-277.5],[675.6,-279.7],[669.8,-297.9],[663.7,-296.3]],height:14,estimatedHeight:!0,at:883,kind:"yes"},{id:"476894526",name:"",points:[[642.6,-274.9],[645.4,-267.4],[661.8,-271.5],[659.9,-276.5],[649.7,-273.4],[648.7,-276.5],[642.6,-274.9]],height:14,estimatedHeight:!0,at:857,kind:"apartments"},{id:"476894528",name:"",points:[[648.3,-292.5],[652.3,-278.7],[650.4,-277.9],[651,-276],[654.1,-277],[653.8,-277.8],[654.9,-278.3],[655.9,-275.4],[658.7,-276.2],[653.2,-293.7],[648.3,-292.5]],height:14,estimatedHeight:!0,at:867,kind:"yes"},{id:"476894537",name:"",points:[[551,-257.7],[562.1,-262.3],[559.6,-268.4],[548.5,-263.7],[551,-257.7]],height:13.2,estimatedHeight:!1,at:774,kind:"apartments"},{id:"476894538",name:"",points:[[694.5,-304.1],[698.6,-292.5],[701,-293.2],[701.3,-291.7],[699.1,-291.1],[700.9,-286],[704.4,-287.3],[700.8,-297.4],[698.5,-305.1],[694.5,-304.1]],height:14,estimatedHeight:!0,at:914,kind:"yes"},{id:"476894540",name:"",points:[[674.7,-259.1],[682.3,-261.9],[677.3,-275.6],[663.9,-272.1],[666,-265.9],[668.5,-266.7],[669.5,-263.8],[672.8,-264.7],[674.7,-259.1]],height:14,estimatedHeight:!0,at:876,kind:"yes"},{id:"476894542",name:"",points:[[602.2,-282],[597.1,-280.7],[601.5,-268.3],[606.4,-270],[602.2,-282]],height:14,estimatedHeight:!0,at:814,kind:"yes"},{id:"476894543",name:"",points:[[681.3,-300.8],[686.5,-285.1],[688.1,-285.7],[688.7,-283.6],[691.2,-284.4],[685.2,-301.7],[681.3,-300.8]],height:14,estimatedHeight:!0,at:900,kind:"yes"},{id:"476894545",name:"",points:[[682.3,-261.9],[686.9,-263.6],[682,-278.3],[677,-276.6],[682.3,-261.9]],height:14,estimatedHeight:!0,at:895,kind:"yes"},{id:"476894546",name:"",points:[[647.5,-261.4],[649.1,-256.9],[664.3,-261.3],[663.7,-262.8],[665.5,-263.2],[664.7,-265.4],[663.5,-265.3],[663.2,-266.2],[647.5,-261.4]],height:14,estimatedHeight:!0,at:874,kind:"yes"},{id:"476894548",name:"",points:[[648.3,-292.5],[643.7,-291.3],[647.5,-279.9],[648.9,-280.3],[649.5,-277.6],[652.3,-278.7],[648.3,-292.5]],height:14,estimatedHeight:!0,at:862,kind:"yes"},{id:"476894549",name:"",points:[[710.4,-272.4],[714.5,-273.9],[711.2,-282.9],[706.8,-281.2],[710.4,-272.4]],height:14,estimatedHeight:!0,at:924,kind:"yes"},{id:"476894551",name:"",points:[[685.2,-301.7],[692.5,-280.5],[694,-281.3],[693,-283.9],[694.9,-284.5],[693.8,-288.2],[694.8,-288.5],[689.7,-302.8],[685.2,-301.7]],height:14,estimatedHeight:!0,at:904,kind:"yes"},{id:"476894552",name:"",points:[[703.4,-306.3],[710.7,-284.6],[714.9,-286],[707.4,-307.3],[703.4,-306.3]],height:14,estimatedHeight:!0,at:923,kind:"yes"},{id:"476894554",name:"",points:[[669.8,-297.9],[675.9,-278.2],[678.7,-279.1],[677.9,-282.5],[680.6,-283.4],[675.6,-299.3],[669.8,-297.9]],height:14,estimatedHeight:!0,at:888,kind:"yes"},{id:"476894560",name:"",points:[[627.4,-252.2],[605.4,-245.3],[609.7,-234.1],[630.4,-241.2],[627.4,-252.2]],height:14,estimatedHeight:!0,at:836,kind:"yes"},{id:"476894562",name:"",points:[[564.8,-224.3],[585.7,-232.9],[584.2,-236.6],[563.1,-228.4],[564.8,-224.3]],height:13.2,estimatedHeight:!1,at:790,kind:"apartments"},{id:"476894563",name:"",points:[[718.9,-275.5],[734.4,-281.3],[730.2,-291.6],[720.9,-288.3],[721.6,-286.1],[715.9,-284.2],[718.9,-275.5]],height:14,estimatedHeight:!0,at:945,kind:"yes"},{id:"476894566",name:"",points:[[558.5,-271.2],[546.7,-268.1],[548.5,-263.7],[559.6,-268.4],[558.5,-271.2]],height:13.2,estimatedHeight:!1,at:762,kind:"apartments"},{id:"476894568",name:"",points:[[561.2,-233],[574.6,-238.3],[573.1,-242.2],[559.6,-236.8],[561.2,-233]],height:14,estimatedHeight:!0,at:780,kind:"apartments"},{id:"476894571",name:"",points:[[563.1,-228.4],[580.9,-235.3],[580.2,-237.2],[577.1,-235.9],[575.8,-239],[574.6,-238.3],[561.2,-233],[563.1,-228.4]],height:14,estimatedHeight:!0,at:782,kind:"apartments"},{id:"476894576",name:"",points:[[591.3,-279.3],[598.7,-261.1],[603.7,-262.3],[597.1,-280.7],[591.3,-279.3]],height:14,estimatedHeight:!0,at:808,kind:"apartments"},{id:"476894588",name:"",points:[[642.1,-262.2],[625.9,-257.1],[627.4,-252.2],[643.8,-257.3],[642.1,-262.2]],height:14,estimatedHeight:!0,at:853,kind:"apartments"},{id:"476894590",name:"",points:[[586.5,-278.1],[595.4,-256.2],[598,-257.4],[596.1,-262],[598.1,-262.6],[591.3,-279.3],[586.5,-278.1]],height:14,estimatedHeight:!0,at:803,kind:"semidetached_house"},{id:"476894594",name:"",points:[[601.6,-253.6],[603,-250.1],[611.4,-253],[610,-256.6],[601.6,-253.6]],height:14,estimatedHeight:!0,at:820,kind:"yes"},{id:"476894599",name:"",points:[[638.6,-271.3],[627.5,-267.3],[628.1,-266],[626,-265.1],[625.2,-266.5],[622,-265.1],[622.5,-263.6],[619.6,-262.5],[620.4,-260.4],[627,-262.7],[628.5,-257.9],[642.1,-262.2],[638.6,-271.3]],height:14,estimatedHeight:!0,at:852,kind:"yes"},{id:"476894604",name:"",points:[[554.2,-250],[571.4,-257.1],[569.9,-260.7],[552.7,-253.5],[554.2,-250]],height:16.5,estimatedHeight:!1,at:782,kind:"apartments"},{id:"476894605",name:"",points:[[638.6,-271.3],[632.2,-289.4],[622.2,-286.9],[625.9,-276.7],[628.4,-277.7],[629.1,-276.1],[626.5,-275.2],[629.2,-267.8],[638.6,-271.3]],height:14,estimatedHeight:!0,at:840,kind:"apartments"},{id:"476894606",name:"",points:[[580.9,-235.3],[579.1,-240.4],[594.5,-246.5],[596.6,-241.4],[580.9,-235.3]],height:14,estimatedHeight:!0,at:802,kind:"yes"},{id:"476894608",name:"",points:[[598.7,-261.1],[601.6,-253.6],[611.7,-257.3],[609.4,-262.5],[604.3,-260.8],[603.7,-262.3],[598.7,-261.1]],height:14,estimatedHeight:!0,at:810,kind:"yes"},{id:"476894609",name:"",points:[[643.7,-291.3],[637.3,-289.7],[642.6,-274.9],[648.7,-276.5],[643.7,-291.3]],height:14,estimatedHeight:!0,at:856,kind:"apartments"},{id:"476894615",name:"",points:[[698.5,-305.1],[705.2,-285.4],[707.5,-286.3],[708.3,-283.9],[710.7,-284.6],[703.4,-306.3],[698.5,-305.1]],height:14,estimatedHeight:!0,at:918,kind:"yes"},{id:"476894617",name:"",points:[[612.4,-284.5],[607.9,-283.4],[613.7,-267.9],[617.5,-269.6],[612.4,-284.5]],height:14,estimatedHeight:!0,at:825,kind:"yes"},{id:"476894620",name:"",points:[[556.1,-245.3],[573.4,-252.4],[571.4,-257.1],[554.2,-250],[556.1,-245.3]],height:13.2,estimatedHeight:!1,at:783,kind:"apartments"},{id:"476894624",name:"",points:[[625.1,-262.1],[626.7,-257.4],[625.9,-257.1],[626.3,-256],[622.5,-254.6],[620.4,-260.4],[625.1,-262.1]],height:14,estimatedHeight:!0,at:836,kind:"yes"},{id:"476894625",name:"",points:[[622.2,-286.9],[618.1,-285.9],[625.2,-266.5],[629.2,-267.8],[622.2,-286.9]],height:14,estimatedHeight:!0,at:836,kind:"yes"},{id:"476894626",name:"",points:[[645.4,-267.4],[647.5,-261.4],[663.2,-266.2],[661.8,-271.5],[645.4,-267.4]],height:14,estimatedHeight:!0,at:857,kind:"apartments"},{id:"476894629",name:"",points:[[618.1,-285.9],[612.4,-284.5],[618.4,-266.8],[620.8,-267.9],[622,-265.1],[625.2,-266.5],[618.1,-285.9]],height:14,estimatedHeight:!0,at:830,kind:"yes"},{id:"476894630",name:"",points:[[552.7,-253.5],[564.3,-258.4],[563.5,-260.6],[565.4,-261.3],[564.7,-263.4],[551,-257.7],[552.7,-253.5]],height:16.5,estimatedHeight:!1,at:778,kind:"apartments"},{id:"476894631",name:"",points:[[643.8,-257.3],[627.4,-252.2],[629,-246.8],[645.7,-252.1],[643.8,-257.3]],height:14,estimatedHeight:!0,at:853,kind:"apartments"},{id:"476894633",name:"",points:[[701.4,-269],[703.8,-269.9],[702,-276.1],[699.4,-275.3],[701.4,-269]],height:14,estimatedHeight:!0,at:913,kind:"yes"},{id:"476894636",name:"",points:[[686.9,-263.6],[692.7,-265.9],[687.1,-283.1],[684.1,-282.4],[684.8,-280.5],[681.7,-279.3],[686.9,-263.6]],height:14,estimatedHeight:!0,at:898,kind:"yes"},{id:"476894637",name:"",points:[[658.1,-294.9],[664,-278],[668,-279.3],[669.1,-276.7],[670.9,-277.5],[663.7,-296.3],[658.1,-294.9]],height:14,estimatedHeight:!0,at:877,kind:"yes"},{id:"476894638",name:"",points:[[645.7,-252.1],[629,-246.8],[631.6,-236.7],[633.8,-237.2],[635,-232.7],[651.1,-237.7],[645.7,-252.1]],height:14,estimatedHeight:!0,at:854,kind:"apartments"},{id:"476894640",name:"",points:[[607.9,-283.4],[602.2,-282],[608.4,-264.5],[611.9,-265.7],[612.3,-264.5],[614.7,-265.2],[607.9,-283.4]],height:14,estimatedHeight:!0,at:819,kind:"yes"},{id:"476952759",name:"",points:[[343.4,-181.9],[333.7,-178.2],[335,-174.9],[327.6,-172.8],[327.5,-171.6],[332.2,-151.4],[346.5,-154.4],[347.3,-149.8],[359.4,-152.7],[354.2,-167.3],[349.6,-173.7],[347.1,-172.8],[343.4,-181.9]],height:13.2,estimatedHeight:!1,at:542,kind:"apartments"},{id:"476952763",name:"",points:[[272.3,-168.2],[275,-164.3],[286.3,-170],[293.9,-172.9],[292.8,-176.6],[286.1,-174.5],[278.8,-171.8],[279.1,-170.6],[272.3,-168.2]],height:14,estimatedHeight:!0,at:495,kind:"yes"},{id:"476952764",name:"",points:[[275,-164.3],[277.9,-160.7],[287.7,-167.8],[286.3,-170],[275,-164.3]],height:14,estimatedHeight:!0,at:487,kind:"yes"},{id:"476952769",name:"",points:[[298.6,-196.7],[288.3,-194.3],[291.4,-183.2],[301,-185.9],[298.6,-196.7]],height:14,estimatedHeight:!0,at:495,kind:"apartments"},{id:"476952770",name:"",points:[[447,-190.7],[437.4,-217.6],[453.8,-222.5],[450.1,-234.7],[421.5,-225.9],[434.9,-187.8],[447,-190.7]],height:16.5,estimatedHeight:!1,at:659,kind:"apartments"},{id:"476952771",name:"",points:[[457.4,-193.6],[449.8,-221.3],[453.8,-222.5],[461.2,-194.6],[457.4,-193.6]],height:14,estimatedHeight:!0,at:659,kind:"garages"},{id:"476952774",name:"",points:[[296,-145.8],[293.8,-153.2],[295.8,-154],[295.2,-155.1],[291.2,-153.7],[283.1,-150.4],[286.2,-143.5],[296,-145.8]],height:14,estimatedHeight:!0,at:492,kind:"yes"},{id:"476952776",name:"",points:[[342.4,-148.7],[341.6,-153.2],[332.2,-151.4],[327.5,-171.6],[318.9,-169.2],[326.5,-144.2],[342.4,-148.7]],height:6.6,estimatedHeight:!1,at:520,kind:"retail"},{id:"476952779",name:"",points:[[317.7,-201.4],[320.6,-191.5],[326.3,-193.3],[327.6,-188.9],[322,-187.3],[323.5,-182.2],[341,-187.8],[330.8,-204.5],[317.7,-201.4]],height:14,estimatedHeight:!0,at:521,kind:"apartments"},{id:"476952781",name:"",points:[[298.6,-196.7],[301,-185.9],[308.4,-188],[306,-198.5],[298.6,-196.7]],height:14,estimatedHeight:!0,at:505,kind:"apartments"},{id:"476952782",name:"",points:[[273.7,-176.9],[267.4,-175.1],[272.3,-168.2],[279.1,-170.6],[278.8,-171.8],[286.1,-174.5],[284.5,-179.5],[273.7,-176.9]],height:14,estimatedHeight:!0,at:487,kind:"yes"},{id:"476952787",name:"",points:[[308.4,-188],[291.4,-183.2],[292.8,-176.6],[293.9,-172.9],[299.3,-150.6],[297.2,-150.1],[296.7,-151.8],[294.5,-150.9],[296,-145.8],[301.2,-147.2],[301.6,-145.6],[311.9,-148.2],[313.7,-141.3],[320.6,-143],[318.3,-152.4],[312.7,-151.6],[308.4,-165.9],[313.1,-167.4],[308.4,-188]],height:13.2,estimatedHeight:!1,at:514,kind:"apartments"},{id:"476952788",name:"",points:[[288.3,-194.3],[269.3,-189.7],[273.7,-176.9],[291.8,-181.6],[288.3,-194.3]],height:14,estimatedHeight:!0,at:475,kind:"apartments"},{id:"476952793",name:"",points:[[341,-187.8],[327.4,-183.4],[329.4,-176.6],[343.4,-181.9],[341,-187.8]],height:14,estimatedHeight:!0,at:542,kind:"apartments"},{id:"476952798",name:"",points:[[283.1,-150.4],[291.2,-153.7],[296.6,-155.6],[292,-170.6],[277.9,-160.7],[279.7,-158],[283.1,-150.4]],height:14,estimatedHeight:!0,at:493,kind:"yes"},{id:"476952801",name:"",points:[[317.7,-201.4],[310.8,-199.8],[318.9,-169.2],[327.5,-171.6],[327.6,-172.8],[326.7,-175.8],[329.4,-176.6],[327.4,-183.4],[323.5,-182.2],[322,-187.3],[327.6,-188.9],[326.3,-193.3],[320.6,-191.5],[317.7,-201.4]],height:13.2,estimatedHeight:!1,at:519,kind:"apartments"},{id:"478224226",name:"",points:[[442.3,-395.7],[434.4,-391.4],[428.8,-404.5],[436.7,-408.2],[442.3,-395.7]],height:14,estimatedHeight:!0,at:687,kind:"yes"},{id:"478224227",name:"",points:[[433.3,-415.5],[436.7,-408.2],[427.7,-403.9],[424.2,-410.8],[426.2,-411.8],[427.2,-409.6],[429,-410.7],[428,-412.8],[433.3,-415.5]],height:14,estimatedHeight:!0,at:685,kind:"yes"},{id:"478224228",name:"",points:[[535.2,-282.8],[521.2,-278.5],[522.1,-275],[520.8,-274.9],[521.4,-273.5],[537.1,-277.7],[535.2,-282.8]],height:14,estimatedHeight:!0,at:755,kind:"apartments"},{id:"478224229",name:"",points:[[509.2,-318.8],[515.8,-303.8],[517.5,-304.4],[516.2,-307],[518.9,-308.1],[513.9,-319.8],[509.2,-318.8]],height:14,estimatedHeight:!0,at:739,kind:"apartments"},{id:"478224231",name:"",points:[[489.4,-277.3],[501,-282.1],[500.1,-284.4],[501.7,-285.2],[502.6,-282.8],[506.2,-284.2],[503.3,-291],[502.3,-290.2],[486.5,-284],[489.4,-277.3]],height:14,estimatedHeight:!0,at:726,kind:"apartments"},{id:"478224233",name:"",points:[[533.7,-287.1],[516.6,-281.7],[517.3,-279.7],[515.8,-279.1],[515.1,-281.2],[509.4,-280.2],[511.4,-275.5],[535.2,-282.8],[533.7,-287.1]],height:14,estimatedHeight:!0,at:729,kind:"apartments"},{id:"478224234",name:"",points:[[418.8,-399.3],[428.8,-404.5],[434.4,-391.4],[425.3,-386.5],[418.8,-399.3]],height:14,estimatedHeight:!0,at:677,kind:"apartments"},{id:"478224237",name:"",points:[[458.6,-358.7],[460.6,-354.2],[446.5,-347],[444.2,-351.1],[458.6,-358.7]],height:14,estimatedHeight:!0,at:687,kind:"apartments"},{id:"478224238",name:"",points:[[481.5,-296.3],[487.7,-298.7],[482.9,-311.1],[476.3,-309],[481.5,-296.3]],height:14,estimatedHeight:!0,at:712,kind:"apartments"},{id:"478224239",name:"",points:[[438.2,-362.5],[446.3,-367],[448.3,-362.8],[446.4,-361.8],[446.8,-360.7],[448.7,-361.8],[450,-359.3],[442.1,-355.1],[438.2,-362.5]],height:14,estimatedHeight:!0,at:685,kind:"apartments"},{id:"478224240",name:"",points:[[482.9,-311.1],[487.7,-298.7],[489.2,-295.9],[492.7,-297.3],[493.3,-296],[494.8,-296.6],[498.5,-288.7],[502.3,-290.2],[498.1,-298],[494.6,-306.3],[492.2,-314],[482.9,-311.1]],height:14,estimatedHeight:!0,at:722,kind:"apartments"},{id:"478224241",name:"",points:[[417.5,-424.2],[424.2,-410.8],[421.1,-409.1],[423.5,-403.3],[425,-404],[425.7,-402.7],[418.8,-399.3],[407.7,-419.3],[417.5,-424.2]],height:14,estimatedHeight:!0,at:675,kind:"apartments"},{id:"478224242",name:"",points:[[537.1,-277.7],[525.2,-274.5],[527.1,-268],[539.4,-271.5],[537.1,-277.7]],height:13.2,estimatedHeight:!1,at:742,kind:"apartments"},{id:"478224243",name:"",points:[[524.9,-307.1],[519,-320.9],[513.9,-319.8],[520.2,-305.4],[524.9,-307.1]],height:9.899999999999999,estimatedHeight:!1,at:744,kind:"apartments"},{id:"478224244",name:"",points:[[444,-392.2],[446.4,-386.9],[430,-377.4],[427.1,-383],[444,-392.2]],height:14,estimatedHeight:!0,at:679,kind:"apartments"},{id:"478224245",name:"",points:[[458.6,-358.7],[444.2,-351.1],[442.1,-355.1],[456.7,-362.9],[458.6,-358.7]],height:14,estimatedHeight:!0,at:686,kind:"apartments"},{id:"478224246",name:"",points:[[527.8,-300.1],[524.9,-307.1],[515.8,-303.8],[518.5,-296.6],[527.8,-300.1]],height:14,estimatedHeight:!0,at:751,kind:"apartments"},{id:"478224247",name:"",points:[[529.5,-295.9],[511.5,-289.8],[513,-285.4],[531.8,-291],[529.5,-295.9]],height:14,estimatedHeight:!0,at:753,kind:"apartments"},{id:"478224248",name:"",points:[[444,-392.2],[427.1,-383],[425.3,-386.5],[442.3,-395.7],[444,-392.2]],height:14,estimatedHeight:!0,at:678,kind:"apartments"},{id:"478224249",name:"",points:[[494.4,-265.5],[508.6,-270.7],[507.1,-274.1],[508.6,-274.5],[510.3,-271.3],[512.8,-272.7],[510.7,-277.1],[492.3,-270.4],[494.4,-265.5]],height:14,estimatedHeight:!0,at:729,kind:"apartments"},{id:"478224252",name:"",points:[[515.4,-264.6],[513.5,-271],[512.8,-272.7],[510.3,-271.3],[510.6,-270.2],[508.9,-269.6],[508.6,-270.7],[494.4,-265.5],[497.1,-259.3],[515.4,-264.6]],height:14,estimatedHeight:!0,at:730,kind:"apartments"},{id:"478224253",name:"",points:[[527.8,-300.1],[518.5,-296.6],[515.8,-295.4],[516.3,-293.8],[514.1,-293],[515,-291],[529.5,-295.9],[527.8,-300.1]],height:14,estimatedHeight:!0,at:752,kind:"apartments"},{id:"478224254",name:"",points:[[490.7,-274.2],[501.4,-278.3],[501.2,-279.6],[503.5,-280.5],[504,-279.3],[508.9,-281.2],[507.3,-284.7],[489.4,-277.3],[490.7,-274.2]],height:14,estimatedHeight:!0,at:728,kind:"apartments"},{id:"478224255",name:"",points:[[503.1,-317],[512.9,-295.6],[515.4,-296.5],[515.8,-295.4],[518.5,-296.6],[516.4,-302.2],[513.2,-301],[512.5,-302.7],[515.8,-303.8],[509.2,-318.8],[503.1,-317]],height:14,estimatedHeight:!0,at:733,kind:"apartments"},{id:"478224257",name:"",points:[[492.2,-314],[494.6,-306.3],[498.1,-298],[502.3,-290.2],[503.3,-291],[504.8,-287.2],[510,-289.3],[505.8,-298.1],[502.2,-296.6],[501.1,-299.1],[504.4,-300.4],[497.6,-315.8],[492.2,-314]],height:14,estimatedHeight:!0,at:727,kind:"apartments"},{id:"478224258",name:"",points:[[527.1,-268],[525.2,-274.5],[521.4,-273.5],[520,-278.1],[511.4,-275.5],[513.5,-271],[515.4,-264.6],[527.1,-268]],height:14,estimatedHeight:!0,at:738,kind:"apartments"},{id:"478224259",name:"",points:[[453.1,-370.9],[456.7,-362.9],[450,-359.3],[446.3,-367],[453.1,-370.9]],height:14,estimatedHeight:!0,at:695,kind:"yes"},{id:"478224261",name:"",points:[[531.8,-291],[519,-287.2],[519.3,-285.6],[517.5,-285],[517.1,-286.6],[513,-285.4],[514.2,-281],[533.7,-287.1],[531.8,-291]],height:14,estimatedHeight:!0,at:754,kind:"apartments"},{id:"478224263",name:"",points:[[492.3,-270.4],[510.7,-277.1],[508.9,-281.2],[490.7,-274.2],[492.3,-270.4]],height:14,estimatedHeight:!0,at:728,kind:"apartments"},{id:"478224264",name:"",points:[[481.5,-296.3],[486.5,-284],[498.5,-288.7],[496.4,-293.1],[491.8,-291.3],[490.1,-296.3],[489.2,-295.9],[487.7,-298.7],[481.5,-296.3]],height:14,estimatedHeight:!0,at:713,kind:"apartments"},{id:"479774481",name:"",points:[[-29.4,-160.3],[-24.5,-137.2],[-13.4,-137.7],[-13.4,-145.8],[-10.1,-146.1],[-10.3,-149.4],[-13,-152],[-16.4,-152],[-17.4,-155.8],[-12.9,-156],[-12.9,-158.4],[-14.3,-158.4],[-14.6,-162.1],[-19.6,-162.4],[-19.6,-160.3],[-29.4,-160.3]],height:14,estimatedHeight:!0,at:147,kind:"house"},{id:"479774482",name:"",points:[[69.5,-210.5],[69.1,-220.6],[61.3,-219.8],[61.9,-209.5],[69.5,-210.5]],height:14,estimatedHeight:!0,at:287,kind:"yes"},{id:"479774483",name:"",points:[[33.2,-189.7],[45.1,-190.9],[44.1,-207.6],[40.4,-207.5],[41.2,-200.6],[36,-199.9],[35.3,-201.9],[31.9,-202],[33.2,-189.7]],height:14,estimatedHeight:!0,at:257,kind:"yes"},{id:"479774484",name:"",points:[[7.2,-195.1],[7.8,-186.8],[19.1,-188.1],[18.4,-196.6],[7.2,-195.1]],height:13.2,estimatedHeight:!1,at:187,kind:"yes"},{id:"479774485",name:"",points:[[28.1,-216.4],[28.4,-206.2],[36.9,-205.7],[36.1,-217.2],[28.1,-216.4]],height:14,estimatedHeight:!0,at:246,kind:"yes"},{id:"479774486",name:"",points:[[25.9,-188.9],[33.2,-189.7],[32.3,-196.5],[30,-196.2],[29.5,-198.2],[32.1,-198.4],[31.9,-202],[25.4,-201.8],[25.9,-188.9]],height:14,estimatedHeight:!0,at:242,kind:"yes"},{id:"479774487",name:"",points:[[7.2,-195.1],[25.6,-197.6],[25.4,-201.8],[24.7,-206],[28.4,-206.2],[28.1,-216.4],[5.9,-214.6],[7.2,-195.1]],height:9.899999999999999,estimatedHeight:!1,at:195,kind:"yes"},{id:"479774488",name:"",points:[[4.4,-158.8],[-12.9,-158.4],[-13,-152],[-10.3,-149.4],[-10.1,-146.1],[-13.4,-145.8],[-13.4,-139.9],[-7.2,-139.9],[-7.6,-133.5],[-13.6,-133.9],[-14,-122.9],[3.3,-122.6],[5.4,-148.9],[4.4,-158.8]],height:14,estimatedHeight:!0,at:149,kind:"apartments"},{id:"479774489",name:"",points:[[69.8,-204.5],[69.5,-210.5],[51.4,-208.1],[51.7,-203.5],[69.8,-204.5]],height:14,estimatedHeight:!0,at:286,kind:"yes"},{id:"479774490",name:"",points:[[19.1,-188.1],[25.9,-188.9],[25.6,-197.6],[18.4,-196.6],[19.1,-188.1]],height:14,estimatedHeight:!0,at:188,kind:"yes"},{id:"479774491",name:"",points:[[-13.6,-133.9],[-13.4,-137.7],[-24.5,-137.2],[-22.9,-129.6],[-23.1,-123.1],[-14,-122.9],[-13.6,-133.9]],height:14,estimatedHeight:!0,at:138,kind:"apartments"},{id:"479774492",name:"",points:[[42.6,-217.8],[42.9,-207.6],[51.4,-208.1],[61.9,-209.5],[61.3,-219.8],[42.6,-217.8]],height:14,estimatedHeight:!0,at:279,kind:"yes"},{id:"479774493",name:"",points:[[4.4,-158.8],[1.9,-185.4],[-30.5,-185.7],[-30.7,-166.2],[-29.4,-160.3],[-19.6,-160.3],[-19.7,-165.8],[-14.9,-165.8],[-14.3,-158.4],[4.4,-158.8]],height:14,estimatedHeight:!0,at:160,kind:"apartments"},{id:"479774494",name:"",points:[[36.1,-217.2],[36.9,-205.7],[34.8,-205.9],[35.3,-201.9],[36,-199.9],[41.2,-200.6],[40.4,-207.5],[42.9,-207.6],[42.6,-217.8],[36.1,-217.2]],height:14,estimatedHeight:!0,at:260,kind:"yes"},{id:"480014067",name:"",points:[[265.8,-171.3],[255.1,-185],[239.3,-185.1],[243.2,-171.6],[243.4,-168.5],[243.8,-167.3],[250,-168.5],[250.2,-166.9],[265.8,-171.3]],height:14,estimatedHeight:!0,at:445,kind:"apartments"},{id:"480014068",name:"",points:[[203.5,-222.1],[209.8,-225.2],[206.5,-231.7],[200.7,-228.4],[203.5,-222.1]],height:14,estimatedHeight:!0,at:425,kind:"yes"},{id:"480014069",name:"",points:[[200.3,-185.6],[188.6,-185.8],[188.5,-177.5],[188.7,-169.7],[194.4,-169.8],[194.6,-161.7],[189.3,-162.1],[188.6,-161.4],[188.9,-148.9],[197,-148.2],[203.1,-148.4],[202.8,-157.2],[197.5,-157],[197.4,-159.1],[202.8,-160],[200.3,-185.6]],height:14,estimatedHeight:!0,at:402,kind:"apartments"},{id:"480014070",name:"",points:[[209,-236.7],[204.3,-235.9],[209.8,-225.2],[214.7,-227.1],[209,-236.7]],height:14,estimatedHeight:!0,at:428,kind:"yes"},{id:"480014071",name:"",points:[[176.3,-191.2],[175.8,-211.9],[170.7,-211.7],[171.1,-191.2],[176.3,-191.2]],height:14,estimatedHeight:!0,at:387,kind:"yes"},{id:"480014072",name:"",points:[[185.9,-234.2],[170.3,-231.7],[170.7,-211.7],[184.9,-212.3],[184.1,-216.1],[182.1,-215.5],[181.9,-218.2],[185.5,-218.5],[185.3,-219.5],[190.4,-219.8],[185.9,-234.2]],height:14,estimatedHeight:!0,at:405,kind:"yes"},{id:"480014073",name:"",points:[[172.2,-159.7],[181.9,-160],[188.6,-161.4],[189.3,-162.1],[189,-168.9],[184.8,-168.8],[184.6,-171.8],[171.8,-171.6],[172.2,-159.7]],height:14,estimatedHeight:!0,at:384,kind:"apartments"},{id:"480014075",name:"",points:[[188.6,-185.8],[171.2,-186.2],[171.7,-177.4],[188.5,-177.5],[188.6,-185.8]],height:14,estimatedHeight:!0,at:385,kind:"apartments"},{id:"480014076",name:"",points:[[225.2,-185.4],[229.7,-161.7],[235.5,-162.7],[235.9,-160.1],[248.3,-162.5],[247,-167.8],[243.8,-167.3],[243.4,-168.5],[240.7,-167.9],[240.1,-171.5],[243.2,-171.6],[239.3,-185.1],[225.2,-185.4]],height:14,estimatedHeight:!0,at:438,kind:"apartments"},{id:"480014079",name:"",points:[[200.3,-185.6],[202.8,-160],[220,-161.4],[217.2,-185.3],[200.3,-185.6]],height:14,estimatedHeight:!0,at:413,kind:"apartments"},{id:"480014080",name:"",points:[[276.9,-133],[263.1,-132],[261,-144.5],[258.9,-144.3],[257.9,-150.5],[252.8,-149.5],[253.5,-140.7],[253.9,-123.9],[278,-124.1],[276.9,-133]],height:13.2,estimatedHeight:!1,at:449,kind:"apartments"},{id:"480014081",name:"",points:[[171.7,-177.4],[171.8,-171.6],[183.9,-171.7],[183.8,-177.4],[171.7,-177.4]],height:14,estimatedHeight:!0,at:384,kind:"apartments"},{id:"480014082",name:"",points:[[192,-122],[190.6,-138.1],[188.8,-137.9],[188.8,-135.7],[185.5,-135.7],[185.6,-137.1],[183.9,-137.1],[183.8,-140.2],[182.9,-140.2],[182.7,-146.6],[172.5,-147],[172.1,-134.7],[178.3,-135],[178.9,-121.7],[192,-122]],height:14,estimatedHeight:!0,at:382,kind:"apartments"},{id:"480014083",name:"",points:[[261,-144.5],[263.1,-132],[276.9,-133],[275.6,-147.7],[278.7,-148.8],[276.7,-152.7],[269.6,-149.9],[260.9,-148.8],[262.3,-144.7],[261,-144.5]],height:14,estimatedHeight:!0,at:473,kind:"apartments"},{id:"480014085",name:"",points:[[211.5,-205.1],[219.7,-209.8],[220.5,-208.9],[225.5,-211.3],[221,-219.2],[215.2,-215.7],[212.9,-219.8],[206.2,-216.4],[211.5,-205.1]],height:14,estimatedHeight:!0,at:430,kind:"yes"},{id:"480014086",name:"",points:[[229.6,-226.2],[221.4,-238.6],[209,-236.7],[219.1,-220],[223.9,-222.7],[229.6,-226.2]],height:14,estimatedHeight:!0,at:440,kind:"yes"},{id:"480014087",name:"",points:[[243.2,-205],[240,-209.8],[230.2,-204.9],[229.8,-205.8],[226.3,-204.6],[229.1,-198],[243.2,-205]],height:14,estimatedHeight:!0,at:451,kind:"apartments"},{id:"480014088",name:"",points:[[229.6,-226.2],[223.9,-222.7],[225.9,-219.6],[231.6,-223.1],[229.6,-226.2]],height:14,estimatedHeight:!0,at:445,kind:"apartments"},{id:"480014089",name:"",points:[[193.1,-191.2],[192.7,-213],[188.7,-212.1],[188.7,-208.1],[190.1,-208.1],[190,-206.1],[186.4,-206.2],[186.2,-208.5],[184.9,-208.3],[184.8,-191.2],[193.1,-191.2]],height:14,estimatedHeight:!0,at:409,kind:"apartments"},{id:"480014090",name:"",points:[[243.2,-205],[235.9,-201],[236.8,-198.9],[234.2,-197.6],[233.3,-199.8],[229.1,-198],[226.3,-204.6],[223.7,-203.7],[221.6,-209.4],[220.5,-208.9],[219.7,-209.8],[211.5,-205.1],[217.9,-190],[242.7,-190],[250.8,-193.2],[243.2,-205]],height:13.2,estimatedHeight:!1,at:435,kind:"apartments"},{id:"480014091",name:"",points:[[203.3,-216.7],[194.7,-235.6],[185.9,-234.2],[190.4,-219.8],[194.4,-220.1],[196.2,-215.1],[203.3,-216.7]],height:14,estimatedHeight:!0,at:413,kind:"yes"},{id:"480014092",name:"",points:[[207.4,-191.1],[214.9,-191.1],[203.3,-216.7],[196.2,-215.1],[194.5,-215],[193.1,-220],[185.3,-219.5],[187.4,-211.8],[192.7,-213],[192.8,-207.9],[200,-208.4],[199.7,-204.6],[200.3,-201.8],[204.7,-202.1],[207.4,-191.1]],height:14,estimatedHeight:!0,at:402,kind:"apartments"},{id:"480014093",name:"",points:[[240,-209.8],[235.7,-216.5],[225.2,-209.2],[228.1,-205.2],[229.8,-205.8],[230.2,-204.9],[240,-209.8]],height:14,estimatedHeight:!0,at:449,kind:"apartments"},{id:"480014095",name:"",points:[[269.6,-149.9],[267.1,-155.3],[274.4,-158.7],[271.1,-164.6],[265.8,-171.3],[250.2,-166.9],[251.9,-161.6],[253.2,-155.1],[259.2,-155.4],[260.9,-148.8],[269.6,-149.9]],height:14,estimatedHeight:!0,at:467,kind:"yes"},{id:"480014096",name:"",points:[[184.8,-191.2],[184.9,-205.3],[182.4,-205.4],[182.2,-208],[184.9,-208.3],[184.9,-212.3],[175.8,-211.9],[176.3,-191.2],[184.8,-191.2]],height:14,estimatedHeight:!0,at:392,kind:"office"},{id:"480014097",name:"",points:[[182.7,-146.6],[182.9,-140.2],[188.8,-140.4],[188.9,-148.9],[188.6,-161.4],[181.9,-160],[172.2,-159.7],[172.5,-147],[182.7,-146.6]],height:14,estimatedHeight:!0,at:383,kind:"apartments"},{id:"480014098",name:"",points:[[235.7,-216.5],[231.6,-223.1],[222.2,-217.1],[225.5,-211.3],[226.1,-209.8],[235.7,-216.5]],height:14,estimatedHeight:!0,at:446,kind:"apartments"},{id:"480014099",name:"",points:[[206.2,-216.4],[214.3,-220.5],[216.5,-216.6],[219.8,-218.6],[214.7,-227.1],[209.8,-225.2],[203.5,-222.1],[206.2,-216.4]],height:14,estimatedHeight:!0,at:432,kind:"yes"},{id:"480014457",name:"",points:[[634.1,-390.4],[619.8,-385.1],[621.7,-380.9],[636,-385.9],[634.1,-390.4]],height:14,estimatedHeight:!0,at:864,kind:"yes"},{id:"480014459",name:"",points:[[626.6,-406.6],[622.2,-416.1],[610.4,-408.6],[609.9,-409.4],[608,-408.3],[609.6,-405.5],[608,-404.5],[610.9,-398.1],[613.6,-399.2],[613.3,-400],[626.6,-406.6]],height:14,estimatedHeight:!0,at:859,kind:"yes"},{id:"480014460",name:"",points:[[603.4,-369.5],[615.4,-373.4],[615,-374.9],[620.3,-376.6],[619.2,-379.8],[601.1,-374.4],[603.4,-369.5]],height:14,estimatedHeight:!0,at:844,kind:"apartments"},{id:"480014461",name:"",points:[[594.9,-387.9],[610.3,-392.3],[608.6,-397],[610.9,-398.1],[606.7,-407.5],[609.9,-409.4],[607.6,-413.3],[605.2,-412.4],[600.9,-410.1],[598.9,-409.3],[588.1,-402.3],[594.9,-387.9]],height:13.2,estimatedHeight:!1,at:841,kind:"apartments"},{id:"480014462",name:"",points:[[596.9,-383.5],[613.6,-388.2],[611.7,-392.8],[594.9,-387.9],[596.9,-383.5]],height:14,estimatedHeight:!0,at:856,kind:"apartments"},{id:"480014463",name:"",points:[[601.1,-374.4],[618.2,-379.5],[616.8,-384.4],[599.2,-378.6],[601.1,-374.4]],height:14,estimatedHeight:!0,at:843,kind:"apartments"},{id:"480014464",name:"",points:[[602.2,-426.3],[598.1,-424.1],[602.7,-414.7],[606,-416.2],[606.8,-417.6],[602.2,-426.3]],height:14,estimatedHeight:!0,at:855,kind:"apartments"},{id:"480014465",name:"",points:[[599.2,-378.6],[609.3,-382],[609.1,-383.5],[612.1,-384.4],[611.3,-387.5],[596.9,-383.5],[599.2,-378.6]],height:14,estimatedHeight:!0,at:842,kind:"apartments"},{id:"480014466",name:"",points:[[594.5,-422.1],[590.6,-420],[595.8,-410],[598.2,-411.1],[598.9,-409.3],[600.9,-410.1],[594.5,-422.1]],height:14,estimatedHeight:!0,at:850,kind:"terrace"},{id:"480014467",name:"",points:[[631.9,-395.4],[618,-389.3],[619.8,-385.1],[634.1,-390.4],[631.9,-395.4]],height:14,estimatedHeight:!0,at:864,kind:"yes"},{id:"480014468",name:"",points:[[598.1,-424.1],[594.5,-422.1],[600.9,-410.1],[605.2,-412.4],[604,-415.3],[602.7,-414.7],[598.1,-424.1]],height:14,estimatedHeight:!0,at:852,kind:"apartments"},{id:"480014469",name:"",points:[[602.2,-426.3],[606.8,-417.6],[606,-416.2],[610.4,-408.6],[622.2,-416.1],[614.6,-433.1],[602.2,-426.3]],height:14,estimatedHeight:!0,at:861,kind:"apartments"},{id:"480014471",name:"",points:[[590.6,-420],[582.2,-415.5],[588.1,-402.3],[596.9,-408],[590.6,-420]],height:14,estimatedHeight:!0,at:838,kind:"apartments"},{id:"480014472",name:"",points:[[626.6,-406.6],[618.1,-402.4],[619.4,-399.6],[614.5,-397.4],[613.6,-399.2],[609.7,-397.6],[613.9,-387.5],[631.9,-395.4],[626.6,-406.6]],height:14,estimatedHeight:!0,at:859,kind:"yes"},{id:"480206995",name:"",points:[[71.7,15.9],[71.2,10.5],[79,5.4],[77.5,2.3],[73.7,4.4],[70.4,-6.9],[75.3,-7.6],[92.5,-11.6],[100.2,3],[85.3,9.4],[77.9,13.1],[71.7,15.9]],height:13.2,estimatedHeight:!1,at:12,kind:"apartments"},{id:"481858161",name:"",points:[[609.1,-288.7],[613.8,-289.9],[607.2,-307.2],[605.3,-306.4],[602.9,-313],[600,-311.7],[609.1,-288.7]],height:14,estimatedHeight:!0,at:828,kind:"yes"},{id:"481858162",name:"",points:[[533.5,-300.2],[549,-304.8],[548.4,-306.6],[550.6,-307.2],[549.9,-309.1],[547.6,-308.2],[547,-309.2],[545.3,-308.6],[544.8,-309.7],[531.4,-304.7],[533.5,-300.2]],height:13.2,estimatedHeight:!1,at:771,kind:"apartments"},{id:"481858163",name:"",points:[[585.7,-340.2],[590,-327],[592.8,-327.7],[594.2,-323.6],[596.3,-324.6],[589.6,-341.3],[585.7,-340.2]],height:14,estimatedHeight:!0,at:823,kind:"yes"},{id:"481858164",name:"",points:[[595.4,-285.3],[599.7,-286.4],[593.9,-301.6],[589.5,-299.9],[595.4,-285.3]],height:14,estimatedHeight:!0,at:816,kind:"yes"},{id:"481858165",name:"",points:[[576.3,-280.5],[568.4,-300.2],[563.3,-298.6],[566,-291.3],[558,-288.8],[562.3,-277.1],[576.3,-280.5]],height:14,estimatedHeight:!0,at:791,kind:"apartments"},{id:"481858166",name:"",points:[[615.9,-329.8],[600.1,-324.9],[602.5,-320.4],[617.5,-325.6],[615.9,-329.8]],height:14,estimatedHeight:!0,at:845,kind:"apartments"},{id:"481858167",name:"",points:[[555.4,-295.7],[561,-297.6],[556.2,-308.8],[550.6,-307.2],[552,-302.1],[553.7,-302.6],[553.1,-305],[555.1,-305.7],[556.6,-301],[553.7,-300],[554.8,-296.8],[555.4,-295.7]],height:14,estimatedHeight:!0,at:782,kind:"yes"},{id:"481858168",name:"",points:[[540.8,-281.9],[558.5,-287.5],[558,-288.8],[559.3,-289.2],[554.8,-296.8],[537.1,-291.2],[540.8,-281.9]],height:14,estimatedHeight:!0,at:777,kind:"semidetached_house"},{id:"481858169",name:"",points:[[615.9,-329.8],[609.3,-346.9],[598.2,-343.7],[603.1,-331.5],[604.3,-331.9],[606.6,-327],[615.9,-329.8]],height:14,estimatedHeight:!0,at:843,kind:"apartments"},{id:"481858170",name:"",points:[[542.5,-277.6],[554,-281.4],[556.2,-275.5],[562.3,-277.1],[558.5,-287.5],[540.8,-281.9],[542.5,-277.6]],height:13.2,estimatedHeight:!1,at:778,kind:"apartments"},{id:"481858171",name:"",points:[[585.7,-340.2],[566.6,-334.7],[573.9,-316.8],[577.2,-317.7],[576.3,-319.8],[585.7,-322.7],[586.3,-321],[589.6,-322],[589,-323.8],[593.6,-325.2],[592.8,-327.7],[590,-327],[585.7,-340.2]],height:14,estimatedHeight:!0,at:819,kind:"yes"},{id:"481858172",name:"",points:[[585,-282.7],[595.4,-285.3],[589,-301],[583.9,-299.4],[582.6,-304.2],[577.3,-302.6],[579.7,-297.4],[585,-282.7]],height:14,estimatedHeight:!0,at:806,kind:"apartments"},{id:"481858173",name:"",points:[[577.5,-308.9],[580.8,-309.9],[578.1,-317.9],[573.9,-316.8],[577.5,-308.9]],height:14,estimatedHeight:!0,at:805,kind:"yes"},{id:"481858174",name:"",points:[[623,-292.2],[615.8,-309.6],[611.7,-308.3],[612.8,-305.1],[610,-304.3],[609.1,-306.5],[610.7,-306.9],[610.4,-307.8],[607.2,-307.2],[613.8,-289.9],[623,-292.2]],height:14,estimatedHeight:!0,at:840,kind:"yes"},{id:"481858175",name:"",points:[[619.4,-320.6],[602.8,-315.5],[604.4,-310.7],[605.4,-311.4],[607.2,-307.2],[613.2,-308.8],[612.1,-313.2],[613.2,-313.4],[614.4,-309.1],[622.9,-311.6],[619.4,-320.6]],height:14,estimatedHeight:!0,at:845,kind:"apartments"},{id:"481858176",name:"",points:[[580.6,-281.6],[585,-282.7],[579.7,-297.4],[575.4,-295.9],[580.6,-281.6]],height:14,estimatedHeight:!0,at:802,kind:"apartments"},{id:"481858177",name:"",points:[[557.7,-332.2],[547.9,-329.4],[552.8,-317.2],[554.1,-317.6],[555.7,-313.8],[558.3,-315],[559.6,-313.1],[564.7,-314.5],[562.9,-319],[559.9,-317.9],[559.1,-320.2],[561.7,-321],[557.7,-332.2]],height:14,estimatedHeight:!0,at:790,kind:"yes"},{id:"481858178",name:"",points:[[587.1,-311.5],[584.9,-316.2],[583.1,-321.9],[585.7,-322.7],[586.3,-321],[589.6,-322],[590.2,-321],[594.7,-322.6],[594.2,-323.6],[597.3,-325],[600.1,-318.2],[595.5,-316.6],[596.5,-313.7],[587.1,-311.5]],height:14,estimatedHeight:!0,at:814,kind:"yes"},{id:"481858179",name:"",points:[[593.7,-342.5],[600.3,-326],[600.9,-325.2],[605.2,-326.5],[598.2,-343.7],[593.7,-342.5]],height:14,estimatedHeight:!0,at:832,kind:"apartments"},{id:"481858180",name:"",points:[[589.6,-341.3],[596.3,-324.6],[600.3,-326],[593.7,-342.5],[589.6,-341.3]],height:14,estimatedHeight:!0,at:827,kind:"apartments"},{id:"481858181",name:"",points:[[537.1,-291.2],[554.8,-296.8],[553.7,-300],[550.8,-298.9],[550.1,-301.4],[552,-302.1],[551.1,-305.4],[533.5,-300.2],[537.1,-291.2]],height:16.5,estimatedHeight:!1,at:776,kind:"apartments"},{id:"481858182",name:"",points:[[557.9,-304.8],[560.3,-305.6],[559.2,-308.6],[571.5,-312.2],[575.4,-302.1],[580.5,-303.5],[577.5,-308.9],[573.9,-316.8],[570.9,-315.9],[570.6,-316.7],[569.4,-316.4],[567.9,-320.4],[567.1,-320.2],[566.4,-322.6],[564.1,-321.8],[564.7,-319.5],[562.9,-319],[564.7,-314.5],[559.6,-313.1],[558.3,-315],[555.7,-313.8],[554.1,-317.6],[552.8,-317.2],[557.9,-304.8]],height:14,estimatedHeight:!0,at:796,kind:"yes"},{id:"481858183",name:"",points:[[622.9,-311.6],[615.8,-309.6],[623,-292.2],[629.8,-293.9],[622.9,-311.6]],height:14,estimatedHeight:!0,at:840,kind:"apartments"},{id:"481858185",name:"",points:[[597.6,-307.3],[594.9,-313.4],[577.5,-308.9],[580.5,-303.5],[586.3,-305.4],[587.1,-304.1],[597.6,-307.3]],height:14,estimatedHeight:!0,at:806,kind:"yes"},{id:"481858186",name:"",points:[[617.5,-325.6],[602.5,-320.4],[603,-319.2],[595.5,-316.6],[596.5,-313.7],[602.8,-315.5],[619.4,-320.6],[617.5,-325.6]],height:14,estimatedHeight:!0,at:845,kind:"apartments"},{id:"481858188",name:"",points:[[542.5,-277.6],[544.6,-272.5],[556.2,-275.5],[554,-281.4],[542.5,-277.6]],height:9.899999999999999,estimatedHeight:!1,at:773,kind:"apartments"},{id:"481858190",name:"",points:[[547.9,-329.4],[537.5,-326.4],[545.3,-308.6],[547,-309.2],[547.6,-308.2],[549.9,-309.1],[550.6,-307.2],[556.2,-308.8],[547.9,-329.4]],height:9.899999999999999,estimatedHeight:!1,at:780,kind:"apartments"},{id:"481858194",name:"",points:[[566.6,-334.7],[557.7,-332.2],[561.7,-321],[566.4,-322.6],[567.1,-320.2],[569.2,-320.8],[570.9,-315.9],[573.9,-316.8],[566.6,-334.7]],height:14,estimatedHeight:!0,at:799,kind:"yes"},{id:"481858197",name:"",points:[[576.3,-280.5],[580.6,-281.6],[573.6,-300.5],[568.9,-298.9],[576.3,-280.5]],height:14,estimatedHeight:!0,at:797,kind:"apartments"},{id:"482814871",name:"",points:[[59,-45.9],[59.9,-53.4],[79,-50.9],[78.2,-44.6],[65.6,-46.3],[65.5,-45],[59,-45.9]],height:14,estimatedHeight:!0,at:49,kind:"yes"},{id:"482814874",name:"",points:[[59.1,-12.5],[74.2,-14.9],[77.2,-40.3],[59.1,-42.8],[58.2,-36.1],[61.5,-35.8],[61.6,-32.2],[58.1,-31.6],[57.7,-26],[59.1,-12.5]],height:9.899999999999999,estimatedHeight:!1,at:39,kind:"apartments"},{id:"482814879",name:"",points:[[5.4,-10.4],[6.7,-26.7],[25.5,-28],[25.9,-24.6],[29.2,-25.1],[29.5,-19.9],[25.4,-19.3],[24.9,-21.9],[21.7,-21.5],[21.6,-16.6],[25.1,-16.8],[25,-17.7],[33.4,-19],[33.3,-14.1],[30.7,-14.3],[30.7,-11.4],[5.4,-10.4]],height:13.2,estimatedHeight:!1,at:11,kind:"yes"},{id:"482814880",name:"",points:[[35.3,-8.8],[46.7,-10.6],[47.7,-36.9],[38.5,-36.8],[38.5,-30.6],[42,-30.4],[41.5,-22.9],[36.6,-22.7],[35.3,-8.8]],height:13.2,estimatedHeight:!1,at:11,kind:"apartments"},{id:"482814881",name:"",points:[[8.5,-65.2],[8.3,-47.5],[18.4,-49.3],[18.3,-47.4],[24.3,-47.3],[25,-61.8],[21.2,-61.7],[21,-66],[8.5,-65.2]],height:9.899999999999999,estimatedHeight:!1,at:66,kind:"apartments"},{id:"482814896",name:"",points:[[6.7,-26.7],[7.5,-36],[18.3,-37],[18.2,-41],[21.2,-41],[20.8,-33],[32.9,-34.7],[33,-29.9],[31,-29.7],[31,-27.5],[25.6,-26.9],[25.5,-28],[6.7,-26.7]],height:16.5,estimatedHeight:!1,at:27,kind:"apartments"},{id:"482814903",name:"",points:[[59.9,-53.4],[61.2,-63.4],[80.3,-60.9],[79,-50.9],[59.9,-53.4]],height:14,estimatedHeight:!0,at:57,kind:"yes"},{id:"482814914",name:"",points:[[29.5,-19.9],[31.6,-20],[32,-22.9],[38.2,-22.8],[38.5,-36.8],[47.7,-36.9],[47.8,-39.3],[49.2,-39.3],[48.9,-41.9],[41.8,-42.5],[42.1,-47.1],[37.1,-47.1],[37.1,-40.7],[31.4,-40.8],[31.3,-34.5],[32.9,-34.7],[33,-29.9],[31,-29.7],[31,-27.5],[29.4,-27.3],[29.2,-25.1],[29.5,-19.9]],height:14,estimatedHeight:!0,at:28,kind:"yes"},{id:"482814915",name:"",points:[[4.7,-3.5],[5.4,-10.4],[30.7,-11.4],[30.7,-14.3],[33.3,-14.1],[33.5,-22.8],[36.6,-22.7],[35.3,-8.8],[4.7,-3.5]],height:16.5,estimatedHeight:!1,at:4,kind:"yes"},{id:"482840915",name:"",points:[[20.1,-300.7],[8.9,-296.2],[14.4,-281.5],[17.4,-282.5],[16.5,-284.9],[24,-287.2],[20.1,-300.7]],height:14,estimatedHeight:!0,at:238,kind:"apartments"},{id:"482840916",name:"",points:[[1.9,-276.8],[5.9,-265.9],[24,-270.2],[22.6,-274.7],[20.2,-274.3],[17.4,-282.5],[14.4,-281.5],[13.7,-283.4],[6.2,-280.8],[6.8,-278.7],[1.9,-276.8]],height:9.899999999999999,estimatedHeight:!1,at:228,kind:"apartments"},{id:"482840917",name:"",points:[[57.3,-312.7],[47,-309.2],[49.4,-297.6],[54,-298.6],[53.8,-299.7],[57,-300.4],[56.8,-301.6],[59.7,-302.4],[57.3,-312.7]],height:14,estimatedHeight:!0,at:275,kind:"apartments"},{id:"482840918",name:"",points:[[65.1,-276.9],[64.2,-295.3],[62.1,-314],[57.3,-312.7],[59.7,-302.4],[56.8,-301.6],[57.2,-299.3],[49.4,-297.6],[49.4,-296.2],[44,-294.6],[44.3,-291.8],[42,-291.3],[43.1,-276.6],[47.4,-277.1],[47.6,-279.4],[47.2,-280.5],[54.8,-281.9],[55.5,-276.5],[65.1,-276.9]],height:14,estimatedHeight:!0,at:288,kind:"apartments"},{id:"482840920",name:"",points:[[47,-309.2],[27.1,-302.7],[31.3,-288.2],[44.3,-291.8],[44,-294.6],[49.4,-296.2],[49.4,-297.6],[47,-309.2]],height:14,estimatedHeight:!0,at:256,kind:"apartments"},{id:"482840921",name:"",points:[[27.1,-302.7],[20.1,-300.7],[24,-287.2],[31.1,-289.2],[27.1,-302.7]],height:14,estimatedHeight:!0,at:248,kind:"apartments"},{id:"482840922",name:"",points:[[8.9,-296.2],[-4.5,-290.7],[1.9,-276.8],[6.8,-278.7],[6.2,-280.8],[13.7,-283.4],[8.9,-296.2]],height:16.5,estimatedHeight:!1,at:225,kind:"apartments"},{id:"482842285",name:"",points:[[-67.5,-278],[-63.5,-279],[-64,-285.1],[-69,-284.3],[-67.5,-278]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"483268319",name:"",points:[[378.5,-223.4],[371.7,-238.3],[370.1,-237.6],[369.4,-239.4],[366.4,-238.2],[374,-222.1],[378.5,-223.4]],height:14,estimatedHeight:!0,at:582,kind:"apartments"},{id:"483268320",name:"",points:[[450.6,-245.4],[455.2,-246.8],[448.1,-265.1],[443.3,-263.3],[450.6,-245.4]],height:14,estimatedHeight:!0,at:664,kind:"apartments"},{id:"483268321",name:"",points:[[451.9,-302.1],[444.7,-299.8],[454.4,-274.6],[461.5,-277.1],[459.6,-282.1],[454.1,-280.6],[453.3,-283.5],[457.1,-284.8],[457.4,-283.6],[470.1,-288.5],[467.8,-294.6],[456.1,-290.5],[451.9,-302.1]],height:14,estimatedHeight:!0,at:680,kind:"apartments"},{id:"483268322",name:"",points:[[455.2,-246.8],[460.2,-248.3],[453.3,-267.2],[448.1,-265.1],[455.2,-246.8]],height:14,estimatedHeight:!0,at:671,kind:"apartments"},{id:"483268323",name:"",points:[[316.7,-238.1],[327.4,-246.1],[325.5,-248.8],[324.4,-247.8],[323.5,-249.1],[314.3,-242],[316.7,-238.1]],height:14,estimatedHeight:!0,at:541,kind:"apartments"},{id:"483268324",name:"",points:[[322.4,-228.8],[328.1,-219.5],[338.5,-229],[338,-229.7],[339.1,-230.6],[332.9,-238.4],[331.3,-236.4],[322.4,-228.8]],height:14,estimatedHeight:!0,at:547,kind:"yes"},{id:"483268325",name:"",points:[[353.2,-243.3],[351.1,-247.7],[341.9,-239.3],[345.2,-236.1],[353.2,-243.3]],height:14,estimatedHeight:!0,at:567,kind:"apartments"},{id:"483268326",name:"",points:[[326.3,-263.8],[315.8,-260.9],[324.4,-247.8],[326.9,-249.8],[328.7,-247],[329.5,-247.7],[333.9,-250.9],[326.3,-263.8]],height:14,estimatedHeight:!0,at:548,kind:"apartments"},{id:"483268327",name:"",points:[[481.1,-286.5],[472.1,-283.2],[466.7,-281.5],[464.7,-286.4],[458.8,-284],[461.5,-277.1],[463.8,-269.4],[469.3,-271.4],[467.1,-277.2],[470.6,-278.8],[471,-277.6],[483,-282.1],[481.1,-286.5]],height:14,estimatedHeight:!0,at:687,kind:"apartments"},{id:"483268328",name:"",points:[[435.1,-296.8],[441.7,-279],[442.4,-277.7],[447.1,-279.2],[440.6,-298.5],[435.1,-296.8]],height:14,estimatedHeight:!0,at:668,kind:"apartments"},{id:"483268329",name:"",points:[[440.6,-298.5],[449.2,-273.6],[451,-273.5],[454.4,-274.6],[452.2,-280],[450.7,-279.7],[449.5,-282.7],[450.8,-283.3],[444.7,-299.8],[440.6,-298.5]],height:14,estimatedHeight:!0,at:672,kind:"apartments"},{id:"483268330",name:"",points:[[349.7,-270.5],[354.9,-258.1],[358.8,-259.2],[360.9,-254.4],[364.7,-255.8],[358,-273],[349.7,-270.5]],height:14,estimatedHeight:!0,at:572,kind:"apartments"},{id:"483268331",name:"",points:[[413,-247.3],[417.5,-235.5],[435.4,-240.8],[430.8,-253.2],[413,-247.3]],height:14,estimatedHeight:!0,at:646,kind:"apartments"},{id:"483268332",name:"",points:[[356.6,-236.2],[353.2,-243.3],[338,-229.7],[339.3,-228.1],[342.6,-231.3],[345.8,-228.2],[356.6,-236.2]],height:14,estimatedHeight:!0,at:568,kind:"apartments"},{id:"483268333",name:"",points:[[403.6,-287.3],[398.4,-285.7],[404.1,-270.6],[409.4,-272.6],[403.6,-287.3]],height:14,estimatedHeight:!0,at:629,kind:"yes"},{id:"483268334",name:"",points:[[387.5,-264.2],[388.8,-260.9],[387,-260.4],[388.8,-254.8],[404.7,-259.4],[402.2,-267.8],[399.3,-266.5],[399.9,-264.6],[393.1,-262.5],[392.6,-264.1],[390.5,-263.7],[390,-265.2],[387.5,-264.2]],height:14,estimatedHeight:!0,at:609,kind:"yes"},{id:"483268337",name:"",points:[[326.3,-263.8],[333.9,-250.9],[336.8,-253.2],[337.6,-252.5],[340.4,-254.6],[333.7,-265.7],[326.3,-263.8]],height:14,estimatedHeight:!0,at:548,kind:"apartments"},{id:"483268338",name:"",points:[[484.9,-277.2],[473,-272.8],[474.5,-268.9],[473.6,-268.5],[474.1,-267],[479.2,-268.8],[480.4,-264.9],[488.7,-267.9],[484.9,-277.2]],height:14,estimatedHeight:!0,at:704,kind:"apartments"},{id:"483268339",name:"",points:[[419,-292.1],[413.8,-290.4],[418.7,-275.4],[417.6,-274.9],[419.1,-270.7],[422.4,-271.5],[420.8,-276],[423.9,-276.8],[419,-292.1]],height:14,estimatedHeight:!0,at:645,kind:"yes"},{id:"483268340",name:"",points:[[441.7,-279],[445.4,-272.5],[440.1,-270.9],[438.6,-275.4],[439.5,-275.7],[438.8,-277.8],[441.7,-279]],height:14,estimatedHeight:!0,at:663,kind:"yes"},{id:"483268341",name:"",points:[[476.2,-253.1],[493.1,-258.2],[489.3,-268.1],[483.6,-266.1],[484.1,-265],[480.8,-263.8],[479.2,-268.8],[471.4,-266],[476.2,-253.1]],height:13.2,estimatedHeight:!1,at:696,kind:"apartments"},{id:"483268342",name:"",points:[[483,-282.1],[471,-277.6],[472.1,-275],[468.5,-273.6],[469.3,-271.4],[484.9,-277.2],[483,-282.1]],height:14,estimatedHeight:!0,at:704,kind:"apartments"},{id:"483268343",name:"",points:[[348.5,-253.2],[345.7,-258.8],[337.6,-252.5],[341.6,-247.4],[348.5,-253.2]],height:14,estimatedHeight:!0,at:565,kind:"apartments"},{id:"483268344",name:"",points:[[398.7,-229.4],[414.7,-234.4],[410,-246.3],[397.6,-242.7],[398.6,-240],[395.2,-238.9],[398.7,-229.4]],height:14,estimatedHeight:!0,at:610,kind:"apartments"},{id:"483268345",name:"",points:[[408.1,-250.9],[392.2,-246.7],[393.7,-243.1],[396.1,-243.9],[396.5,-242.5],[410,-246.3],[408.1,-250.9]],height:14,estimatedHeight:!0,at:606,kind:"apartments"},{id:"483268346",name:"",points:[[377.7,-236.8],[381.2,-238.2],[378.3,-245.5],[382.3,-246.8],[381,-250.3],[377.5,-249.2],[378.2,-247.1],[374.3,-245.3],[377.7,-236.8]],height:14,estimatedHeight:!0,at:593,kind:"yes"},{id:"483268347",name:"",points:[[465.5,-249.9],[471.6,-251.7],[464.7,-269.8],[460.6,-268.4],[459.7,-271.2],[462.9,-272.3],[461.5,-277.1],[456.6,-275.3],[465.5,-249.9]],height:14,estimatedHeight:!0,at:682,kind:"apartments"},{id:"483268348",name:"",points:[[311.5,-246.2],[314.3,-242],[323.5,-249.1],[321,-252.9],[311.5,-246.2]],height:14,estimatedHeight:!0,at:540,kind:"yes"},{id:"483268349",name:"",points:[[345.7,-258.8],[341.4,-268.1],[333.7,-265.7],[340.4,-254.6],[345.7,-258.8]],height:14,estimatedHeight:!0,at:564,kind:"apartments"},{id:"483268351",name:"",points:[[435.4,-240.8],[439.7,-242.1],[434.7,-254.4],[430.8,-253.2],[435.4,-240.8]],height:14,estimatedHeight:!0,at:650,kind:"apartments"},{id:"483268352",name:"",points:[[358.7,-217.8],[355.7,-223],[354.5,-222.1],[353.5,-224.4],[346.6,-218.7],[342.9,-223.6],[340.5,-221.6],[339.4,-223.1],[341.9,-225.4],[338.5,-229],[328.1,-219.5],[333.9,-210.1],[358.7,-217.8]],height:14,estimatedHeight:!0,at:550,kind:"apartments"},{id:"483268353",name:"",points:[[349.7,-270.5],[344.1,-268.8],[350,-256.7],[354.9,-258.1],[349.7,-270.5]],height:14,estimatedHeight:!0,at:566,kind:"apartments"},{id:"483268354",name:"",points:[[391.9,-227.3],[398.7,-229.4],[394.4,-241.3],[391.3,-240.3],[390.8,-241.7],[394,-242.5],[392.2,-246.7],[388.7,-245.7],[387.8,-248.5],[390.3,-248.9],[388.6,-253],[383.3,-251.5],[383.5,-251],[381,-250.3],[382.3,-246.8],[383.8,-243.5],[384.8,-243.9],[391.9,-227.3]],height:14,estimatedHeight:!0,at:599,kind:"apartments"},{id:"483268355",name:"",points:[[350,-256.7],[351.9,-252.8],[357.7,-254.7],[357.4,-255.6],[359.9,-256.6],[358.8,-259.2],[350,-256.7]],height:14,estimatedHeight:!0,at:568,kind:"apartments"},{id:"483268356",name:"",points:[[316.7,-238.1],[319.8,-233],[328.4,-241.1],[329.7,-242.8],[327.4,-246.1],[316.7,-238.1]],height:14,estimatedHeight:!0,at:544,kind:"yes"},{id:"483268357",name:"",points:[[439.7,-242.1],[442.9,-243.1],[437.4,-260.4],[432.4,-258.8],[433.8,-255.1],[435.1,-255.4],[435.5,-254.7],[434.7,-254.4],[439.7,-242.1]],height:14,estimatedHeight:!0,at:654,kind:"apartments"},{id:"483268358",name:"",points:[[409.1,-288.9],[403.6,-287.3],[410.6,-269.3],[414.7,-270.7],[413.4,-273.6],[414.7,-273.9],[409.1,-288.9]],height:14,estimatedHeight:!0,at:635,kind:"yes"},{id:"483268359",name:"",points:[[351.9,-252.8],[356.2,-243.9],[367.7,-248.2],[364.7,-255.8],[360.1,-254.1],[361.7,-250.6],[359.8,-249.7],[357.7,-254.7],[351.9,-252.8]],height:14,estimatedHeight:!0,at:575,kind:"apartments"},{id:"483268360",name:"",points:[[423.9,-293.6],[434.6,-265.1],[438.4,-266.2],[437,-269.8],[440.1,-270.9],[438.6,-275.4],[434.1,-273.7],[432.5,-277.6],[437,-279],[437.6,-277.2],[441.7,-279],[435.1,-296.8],[423.9,-293.6]],height:14,estimatedHeight:!0,at:650,kind:"apartments"},{id:"483268361",name:"",points:[[378.5,-223.4],[386.8,-225.7],[381.2,-238.2],[377.7,-236.8],[372.7,-249.1],[370.4,-248.7],[370.8,-247.1],[368.4,-246.2],[370.8,-240],[378.5,-223.4]],height:14,estimatedHeight:!0,at:586,kind:"apartments"},{id:"483268364",name:"",points:[[404.1,-270.6],[407.8,-260.8],[427.7,-266.9],[424.8,-274.4],[421.6,-273.6],[422.4,-271.5],[419.1,-270.7],[418.7,-271.8],[410.6,-269.3],[409.4,-272.6],[404.1,-270.6]],height:14,estimatedHeight:!0,at:630,kind:"yes"},{id:"483268365",name:"",points:[[404.7,-259.4],[387.8,-254.3],[389.9,-249.9],[390.8,-250.1],[392.2,-246.7],[408.1,-250.9],[404.7,-259.4]],height:14,estimatedHeight:!0,at:605,kind:"apartments"},{id:"483268366",name:"",points:[[358.7,-217.8],[364.5,-219.7],[360.2,-228.7],[353.5,-224.4],[354.5,-222.1],[355.7,-223],[358.7,-217.8]],height:14,estimatedHeight:!0,at:570,kind:"apartments"},{id:"483268367",name:"",points:[[360.2,-228.7],[356.6,-236.2],[341.9,-225.4],[342.9,-223.6],[346.6,-218.7],[353.5,-224.4],[360.2,-228.7]],height:14,estimatedHeight:!0,at:569,kind:"apartments"},{id:"483268368",name:"",points:[[411.2,-251.9],[413,-247.3],[431.9,-253.6],[430.2,-258.1],[420.5,-254.9],[421,-253.5],[417.9,-252.4],[417.3,-253.9],[411.2,-251.9]],height:14,estimatedHeight:!0,at:646,kind:"apartments"},{id:"483268369",name:"",points:[[319.8,-233],[322.4,-228.8],[331.3,-236.4],[328.4,-241.1],[319.8,-233]],height:14,estimatedHeight:!0,at:544,kind:"yes"},{id:"483268370",name:"",points:[[374,-222.1],[367.8,-235.2],[364.6,-233.6],[365.5,-231.7],[362.7,-230.5],[367.7,-220.4],[374,-222.1]],height:14,estimatedHeight:!0,at:579,kind:"apartments"},{id:"483268371",name:"",points:[[453.3,-267.2],[451,-273.5],[449.2,-273.6],[440.1,-270.9],[443.3,-263.3],[446.6,-264.7],[445.3,-268.3],[449,-269.5],[450.1,-265.9],[453.3,-267.2]],height:14,estimatedHeight:!0,at:669,kind:"yes"},{id:"483268372",name:"",points:[[471.6,-251.7],[476.2,-253.1],[469.3,-271.4],[464.7,-269.8],[471.6,-251.7]],height:14,estimatedHeight:!0,at:688,kind:"apartments"},{id:"483268373",name:"",points:[[351.1,-247.7],[348.5,-253.2],[339.7,-245.8],[335.1,-251.7],[329.5,-247.7],[332.2,-244.8],[329.7,-242.8],[328.4,-241.1],[331.3,-236.4],[332.9,-238.4],[339.1,-230.6],[342.9,-234.1],[339.9,-237.5],[351.1,-247.7]],height:14,estimatedHeight:!0,at:553,kind:"apartments"},{id:"483268374",name:"",points:[[358,-273],[367.7,-248.2],[371.7,-249],[369.3,-255.6],[367.3,-254.5],[365.9,-258.4],[367.9,-259.4],[362.4,-274.3],[358,-273]],height:14,estimatedHeight:!0,at:581,kind:"apartments"},{id:"483268375",name:"",points:[[413.8,-290.4],[409.1,-288.9],[414.7,-273.9],[418.7,-275.4],[413.8,-290.4]],height:14,estimatedHeight:!0,at:640,kind:"yes"},{id:"483268376",name:"",points:[[407.8,-260.8],[411.2,-251.9],[437.4,-260.4],[437.9,-258.1],[440.5,-258.8],[439,-263.4],[437,-262.7],[436.2,-265.6],[426,-262.1],[424.6,-265.9],[407.8,-260.8]],height:14,estimatedHeight:!0,at:643,kind:"apartments"},{id:"483268377",name:"",points:[[465.5,-249.9],[459.1,-268.2],[456.1,-267.1],[455.1,-269.6],[458.2,-270.8],[456.6,-275.3],[451,-273.5],[460.2,-248.3],[465.5,-249.9]],height:14,estimatedHeight:!0,at:677,kind:"apartments"},{id:"483268378",name:"",points:[[386.8,-225.7],[391.9,-227.3],[384.8,-243.9],[383.8,-243.5],[382.3,-246.8],[378.3,-245.5],[381.2,-238.2],[386.8,-225.7]],height:14,estimatedHeight:!0,at:596,kind:"apartments"},{id:"483268379",name:"",points:[[442.9,-243.1],[450.6,-245.4],[440.1,-270.9],[437,-269.8],[438.7,-264.9],[440.9,-265.6],[442.1,-262.9],[439.4,-262.1],[440.5,-258.8],[441.9,-255.7],[439,-254.8],[442.9,-243.1]],height:14,estimatedHeight:!0,at:660,kind:"apartments"},{id:"483268380",name:"",points:[[356.2,-243.9],[362.7,-230.5],[365.5,-231.7],[364.6,-233.6],[367.8,-235.2],[366.4,-238.2],[370.8,-240],[367.7,-248.2],[356.2,-243.9]],height:14,estimatedHeight:!0,at:583,kind:"apartments"},{id:"483746894",name:"",points:[[656.4,-454.9],[659.4,-448.6],[663.5,-450.9],[664.1,-449.1],[666.5,-444.6],[654.2,-437.9],[653.4,-439.3],[649.3,-437],[643.2,-448.1],[656.4,-454.9]],height:14,estimatedHeight:!0,at:912,kind:"yes"},{id:"483746895",name:"",points:[[628.7,-413.9],[642.2,-422.8],[641.6,-423.9],[646.4,-426.5],[652.2,-416],[646.1,-412.4],[648.5,-408.9],[634.6,-401.2],[628.7,-413.9]],height:14,estimatedHeight:!0,at:882,kind:"yes"},{id:"483746896",name:"",points:[[769.8,-398.4],[768,-404.6],[772.8,-406.5],[772.1,-408.7],[786.8,-412.7],[786.6,-420.2],[805.4,-413.1],[805.6,-409.1],[769.8,-398.4]],height:14,estimatedHeight:!0,at:1012,kind:"yes"},{id:"483746897",name:"",points:[[769.8,-398.4],[759.2,-395.3],[757.3,-402.2],[767.8,-405.3],[769.8,-398.4]],height:14,estimatedHeight:!0,at:1001,kind:"yes"},{id:"483746898",name:"",points:[[710.6,-429.6],[702.7,-435.8],[709,-444.9],[707.4,-446.5],[711.7,-452],[723.2,-446.4],[710.6,-429.6]],height:14,estimatedHeight:!0,at:964,kind:"yes"},{id:"483746899",name:"",points:[[668.1,-369.5],[658.8,-388.6],[659.9,-389.6],[657.5,-394.4],[661.3,-396.7],[664.9,-389.5],[666.7,-390.4],[667.4,-388],[666,-387.3],[673.9,-371.8],[668.1,-369.5]],height:14,estimatedHeight:!0,at:906,kind:"yes"},{id:"483746900",name:"",points:[[707.7,-381.4],[699.3,-399.3],[695.2,-397.6],[691.1,-404.9],[702,-412],[707.8,-403.7],[703.9,-401.2],[713.9,-383.2],[707.7,-381.4]],height:14,estimatedHeight:!0,at:948,kind:"yes"},{id:"483746901",name:"",points:[[654.2,-386.9],[652.3,-390.6],[649.6,-396.9],[653,-399],[655.6,-393.4],[657.5,-394.4],[659.9,-389.6],[658.8,-388.6],[654.2,-386.9]],height:14,estimatedHeight:!0,at:898,kind:"yes"},{id:"483746902",name:"",points:[[678.9,-372.8],[673.9,-371.8],[666,-387.3],[668.6,-388.7],[670.1,-389.2],[678.9,-372.8]],height:14,estimatedHeight:!0,at:918,kind:"yes"},{id:"483746903",name:"",points:[[759.7,-431.2],[766.9,-427.6],[772.8,-406.5],[768,-404.6],[767.8,-405.3],[763.8,-404.1],[762.9,-407.3],[760.4,-406.4],[757.7,-415.5],[763.1,-417.5],[759.7,-431.2]],height:14,estimatedHeight:!0,at:1012,kind:"yes"},{id:"483746904",name:"",points:[[657.6,-366.8],[651.2,-381.3],[652.7,-382.1],[652.2,-382.9],[654.6,-383.9],[662.7,-368.2],[657.6,-366.8]],height:14,estimatedHeight:!0,at:901,kind:"yes"},{id:"483746905",name:"",points:[[641.8,-385.4],[650.3,-389.4],[652.2,-385],[651.2,-384.7],[652.7,-382.1],[644.9,-378.6],[641.8,-385.4]],height:14,estimatedHeight:!0,at:886,kind:"yes"},{id:"483746906",name:"",points:[[636,-444.5],[644,-427.7],[640.9,-426.4],[639.2,-429.6],[638.3,-428.8],[637.5,-430.7],[634.3,-428.9],[635.4,-426.6],[625.4,-421.4],[619.1,-435.8],[636,-444.5]],height:14,estimatedHeight:!0,at:879,kind:"apartments"},{id:"483746907",name:"",points:[[688.3,-375.5],[678.9,-372.8],[670.1,-389.2],[679.5,-393.8],[688.3,-375.5]],height:14,estimatedHeight:!0,at:918,kind:"yes"},{id:"483746908",name:"",points:[[639,-391.5],[634.6,-401.2],[648.5,-408.9],[649.6,-406.7],[654.8,-409.5],[658.9,-402.1],[653,-399],[652.6,-399.8],[650.5,-399],[651,-397.8],[639,-391.5]],height:14,estimatedHeight:!0,at:884,kind:"yes"},{id:"483746909",name:"",points:[[662.7,-368.2],[654.6,-383.9],[654,-385.6],[652.2,-385],[650.3,-389.4],[652.3,-390.6],[654.2,-386.9],[658.8,-388.6],[668.1,-369.5],[662.7,-368.2]],height:14,estimatedHeight:!0,at:906,kind:"yes"},{id:"483746910",name:"",points:[[654.8,-409.5],[651.3,-415.4],[654.1,-417.2],[672.2,-427.2],[686.8,-399.5],[682.4,-397.1],[678.6,-405],[675.1,-403],[674.8,-403.8],[666.1,-399.2],[662,-406.5],[661.2,-405.8],[660.3,-407.6],[656.8,-406],[654.8,-409.5]],height:14,estimatedHeight:!0,at:928,kind:"yes"},{id:"483746911",name:"",points:[[644.9,-378.6],[651.2,-381.3],[657.6,-366.8],[651.1,-365.1],[644.9,-378.6]],height:14,estimatedHeight:!0,at:896,kind:"yes"},{id:"483746912",name:"",points:[[641.8,-385.4],[639,-391.5],[649.6,-396.9],[652.3,-390.6],[650.3,-389.4],[641.8,-385.4]],height:14,estimatedHeight:!0,at:885,kind:"yes"},{id:"483746913",name:"",points:[[690.9,-425.7],[701.2,-415.8],[699.7,-414],[702,-412],[707.8,-403.7],[709.1,-404.6],[705.7,-410.1],[713.2,-414.9],[711.9,-415.8],[712.7,-416.7],[708.8,-420.4],[709.3,-421.3],[714.1,-417.4],[717,-421.3],[711.1,-425.5],[707.7,-428.3],[709.3,-430.6],[702.7,-435.8],[701.8,-433.4],[700.3,-434.3],[698.8,-432.1],[698.1,-432.7],[690.9,-425.7]],height:14,estimatedHeight:!0,at:954,kind:"yes"},{id:"483746914",name:"",points:[[625.4,-421.4],[635.4,-426.6],[639.2,-429.6],[640.9,-426.4],[638.8,-424.9],[640,-423.1],[641.6,-423.9],[642.2,-422.8],[628.7,-413.9],[625.4,-421.4]],height:14,estimatedHeight:!0,at:880,kind:"yes"},{id:"483746915",name:"",points:[[655.6,-393.4],[653,-399],[658.9,-402.1],[661.3,-396.7],[655.6,-393.4]],height:14,estimatedHeight:!0,at:901,kind:"yes"},{id:"483746916",name:"",points:[[684.3,-462.9],[709.1,-452.3],[694.4,-436.7],[698.1,-432.7],[686,-420.9],[671.4,-448],[684.3,-462.9]],height:14,estimatedHeight:!0,at:938,kind:"parking"},{id:"483746917",name:"",points:[[664.2,-459],[669.1,-451.2],[664.1,-449.1],[663.5,-450.9],[659.4,-448.6],[656.4,-454.9],[664.2,-459]],height:14,estimatedHeight:!0,at:924,kind:"yes"},{id:"483746918",name:"",points:[[688.3,-375.5],[675.1,-403],[678.6,-405],[682.4,-397.1],[686.8,-399.5],[689.5,-395.3],[699.3,-399.3],[707.7,-381.4],[688.3,-375.5]],height:14,estimatedHeight:!0,at:927,kind:"yes"},{id:"483746919",name:"",points:[[723.6,-446.8],[743.6,-438.5],[736.4,-431.1],[733.4,-434.3],[732.3,-432.2],[728,-435.8],[724.1,-430.3],[717.6,-434.9],[711.1,-425.5],[707.7,-428.3],[709.3,-430.6],[710.6,-429.6],[723.6,-446.8]],height:14,estimatedHeight:!0,at:989,kind:"yes"},{id:"483746920",name:"",points:[[759.2,-395.3],[751.2,-393.2],[748,-403.5],[744.5,-402.4],[743.5,-408],[740.8,-410.6],[741.5,-411.9],[752.2,-415.4],[752.6,-413.8],[757.7,-415.5],[760.4,-406.4],[756.6,-405.3],[759.2,-395.3]],height:14,estimatedHeight:!0,at:1001,kind:"yes"},{id:"483746921",name:"",points:[[654.1,-417.2],[649.8,-425.3],[658.9,-430.2],[663.2,-422.1],[654.1,-417.2]],height:14,estimatedHeight:!0,at:906,kind:"yes"},{id:"483746922",name:"",points:[[679.5,-393.8],[674.8,-403.8],[661.3,-396.7],[664.9,-389.5],[666.7,-390.4],[668.6,-388.7],[670.1,-389.2],[679.5,-393.8]],height:14,estimatedHeight:!0,at:914,kind:"yes"},{id:"483746923",name:"",points:[[735.6,-388.6],[729.7,-387.7],[721.8,-402.4],[725.4,-403.8],[729.5,-398.9],[735.6,-388.6]],height:14,estimatedHeight:!0,at:977,kind:"yes"},{id:"483746924",name:"",points:[[721,-385.3],[713.9,-383.2],[705.3,-398.7],[710.4,-402.5],[721,-385.3]],height:14,estimatedHeight:!0,at:954,kind:"yes"},{id:"483746925",name:"",points:[[636,-444.5],[643.2,-448.1],[649.3,-437],[653.4,-439.3],[656.2,-434],[644.4,-426.3],[644,-427.7],[636,-444.5]],height:14,estimatedHeight:!0,at:899,kind:"yes"},{id:"483746926",name:"",points:[[751.2,-393.2],[735.6,-388.6],[729.5,-398.9],[744.3,-403.5],[744.5,-402.4],[748,-403.5],[751.2,-393.2]],height:14,estimatedHeight:!0,at:977,kind:"yes"},{id:"483746927",name:"",points:[[759.7,-431.2],[763.1,-417.5],[752.6,-413.8],[749.1,-426.7],[751.1,-427.5],[750.3,-431.1],[754.6,-433.5],[759.7,-431.2]],height:14,estimatedHeight:!0,at:1e3,kind:"yes"},{id:"483746928",name:"",points:[[754.6,-433.5],[750.3,-431.1],[751.1,-427.5],[749.1,-426.7],[752.2,-415.4],[749.1,-414.3],[745.8,-424.1],[738.9,-418.8],[739.9,-417.3],[736,-413.9],[735.3,-415.1],[730.5,-411.4],[739,-401.8],[729.5,-398.9],[725.4,-403.8],[718.1,-409.4],[717,-411.4],[743.6,-438.5],[754.6,-433.5]],height:14,estimatedHeight:!0,at:973,kind:"yes"},{id:"484324877",name:"",points:[[414.7,-342.4],[419.4,-344.5],[413.2,-359.3],[409,-357.3],[414.7,-342.4]],height:14,estimatedHeight:!0,at:655,kind:"apartments"},{id:"484324878",name:"",points:[[342.2,-332.7],[336.4,-330.6],[332.3,-329.5],[329,-338.3],[334,-340.1],[333,-342.3],[337.8,-344.4],[342.2,-332.7]],height:14,estimatedHeight:!0,at:577,kind:"yes"},{id:"484324879",name:"",points:[[388,-411.7],[379.6,-408.8],[386.1,-392.9],[390.3,-394.7],[389.1,-397.6],[392.9,-399.2],[388,-411.7]],height:14,estimatedHeight:!0,at:641,kind:"apartments"},{id:"484324880",name:"",points:[[376,-344.3],[392.8,-351.8],[392.5,-352.9],[396.9,-354.9],[393.6,-362],[390.2,-360.4],[372.4,-354.4],[376,-344.3]],height:14,estimatedHeight:!0,at:619,kind:"yes"},{id:"484324881",name:"",points:[[406.7,-339],[414.7,-342.4],[408.4,-358.7],[400.1,-355],[406.7,-339]],height:14,estimatedHeight:!0,at:646,kind:"apartments"},{id:"484324882",name:"",points:[[298.2,-357.6],[300.4,-353.1],[308.9,-356.5],[307.1,-361.3],[298.2,-357.6]],height:14,estimatedHeight:!0,at:547,kind:"apartments"},{id:"484324883",name:"",points:[[297.1,-379],[289,-376],[294.6,-364.7],[302.5,-368],[297.1,-379]],height:13.2,estimatedHeight:!1,at:545,kind:"apartments"},{id:"484324884",name:"",points:[[282.9,-356.6],[277.1,-371],[270.7,-368.2],[281,-348.8],[286,-351.1],[284.1,-354.8],[280.7,-353.2],[279.9,-355.6],[282.9,-356.6]],height:16.5,estimatedHeight:!1,at:527,kind:"apartments"},{id:"484324885",name:"",points:[[257,-337.7],[263.2,-327],[280.4,-337.4],[275.4,-345.4],[272,-343.6],[270.9,-345.6],[257,-337.7]],height:14,estimatedHeight:!0,at:502,kind:"yes"},{id:"484324887",name:"",points:[[277.5,-303.8],[280.7,-298.7],[291.2,-306.1],[289.3,-309.1],[284.2,-306.2],[283.4,-307.2],[277.5,-303.8]],height:14,estimatedHeight:!0,at:512,kind:"apartments"},{id:"484324888",name:"",points:[[301.6,-336.4],[298,-342.9],[286.3,-335.8],[285.9,-336.6],[282,-334.5],[285.3,-329.3],[294.2,-334.5],[295.2,-332.7],[301.6,-336.4]],height:14,estimatedHeight:!0,at:527,kind:"apartments"},{id:"484324889",name:"",points:[[326.7,-389.9],[333.3,-375.6],[335.9,-377.1],[337.3,-373.1],[339.4,-373.9],[331.6,-391.8],[326.7,-389.9]],height:13.2,estimatedHeight:!1,at:591,kind:"apartments"},{id:"484324890",name:"",points:[[427.3,-374.7],[425.1,-378.8],[412.4,-372.3],[413.1,-370.5],[408.9,-368.7],[410.2,-365.9],[427.3,-374.7]],height:14,estimatedHeight:!0,at:657,kind:"apartments"},{id:"484324891",name:"",points:[[395.1,-334],[391,-343.5],[389.5,-342.9],[389.2,-343.8],[378.1,-338.8],[382.1,-328.2],[395.1,-334]],height:14,estimatedHeight:!0,at:620,kind:"yes"},{id:"484324892",name:"",points:[[366,-363.6],[364,-369.1],[346.4,-362.3],[347.7,-359.4],[350.5,-360.5],[351.5,-357.6],[366,-363.6]],height:14,estimatedHeight:!0,at:600,kind:"yes"},{id:"484324893",name:"",points:[[433.7,-362.4],[429.2,-370.9],[424.2,-368.5],[424.5,-367.6],[417.1,-364.2],[418.3,-361.4],[423.7,-363.6],[425.5,-358.7],[433.7,-362.4]],height:14,estimatedHeight:!0,at:670,kind:"apartments"},{id:"484324894",name:"",points:[[362.9,-320.8],[358.2,-331.3],[354.5,-329.8],[355.2,-327.6],[350.9,-325.6],[354.7,-317],[362.9,-320.8]],height:14,estimatedHeight:!0,at:591,kind:"yes"},{id:"484324895",name:"",points:[[257,-337.7],[274.2,-347.6],[272.4,-351],[266.3,-347.8],[264.9,-346.8],[262.7,-350.4],[253.5,-343.6],[257,-337.7]],height:9.899999999999999,estimatedHeight:!1,at:498,kind:"apartments"},{id:"484324896",name:"",points:[[406.3,-377.7],[408,-374.8],[423.2,-382.5],[421.4,-385.9],[406.3,-377.7]],height:14,estimatedHeight:!0,at:657,kind:"apartments"},{id:"484324898",name:"",points:[[331.6,-391.8],[339.4,-373.9],[337.3,-373.1],[336.4,-375.6],[334,-374.5],[339.5,-361.5],[346.1,-364],[343.6,-370],[346.9,-371.4],[345.1,-375],[348.6,-376.3],[341.3,-395.6],[331.6,-391.8]],height:13.2,estimatedHeight:!1,at:590,kind:"apartments"},{id:"484324900",name:"",points:[[263.2,-327],[265.4,-323.1],[282.9,-333.1],[281.1,-336.2],[279.6,-335.1],[278.9,-336.5],[263.2,-327]],height:14,estimatedHeight:!0,at:503,kind:"apartments"},{id:"484324901",name:"",points:[[433.7,-362.4],[425.5,-358.7],[423.7,-363.6],[413.2,-359.3],[419.4,-344.5],[438.9,-352.8],[433.7,-362.4]],height:14,estimatedHeight:!0,at:660,kind:"apartments"},{id:"484324902",name:"",points:[[303.2,-347.5],[308.1,-337.5],[326.7,-344.5],[324.8,-348.2],[320.9,-346.4],[317.5,-353.9],[303.2,-347.5]],height:14,estimatedHeight:!0,at:550,kind:"apartments"},{id:"484324903",name:"",points:[[346,-312.9],[339.5,-328.6],[336.7,-327.2],[337.4,-325.4],[335.9,-324.6],[336.9,-321],[333.2,-319.5],[335.1,-315.5],[321.9,-310.4],[325.3,-303.8],[346,-312.9]],height:14,estimatedHeight:!0,at:558,kind:"apartments"},{id:"484324904",name:"",points:[[297.1,-379],[302.5,-368],[306.3,-369.6],[306.8,-368.6],[310.4,-370.1],[309.1,-373.3],[312.3,-374.4],[309.4,-383.4],[297.1,-379]],height:13.2,estimatedHeight:!1,at:558,kind:"apartments"},{id:"484324905",name:"",points:[[310.4,-320.1],[301.6,-336.4],[289.3,-329.4],[297.7,-313.5],[310.4,-320.1]],height:14,estimatedHeight:!0,at:534,kind:"apartments"},{id:"484324906",name:"",points:[[406.7,-339],[399.7,-355.8],[396.9,-354.9],[394.5,-353.8],[396.7,-348.9],[401.6,-336.8],[406.7,-339]],height:14,estimatedHeight:!0,at:641,kind:"yes"},{id:"484324907",name:"",points:[[298.2,-357.6],[310,-362.5],[312.3,-358],[318.1,-360.1],[313.5,-371.3],[306.8,-368.6],[306.3,-369.6],[294.6,-364.7],[298.2,-357.6]],height:14,estimatedHeight:!0,at:562,kind:"apartments"},{id:"484324908",name:"",points:[[341.3,-395.6],[348.6,-376.3],[359.5,-380.5],[351.5,-399.6],[341.3,-395.6]],height:16.5,estimatedHeight:!1,at:602,kind:"apartments"},{id:"484324909",name:"",points:[[362.9,-320.8],[366.8,-321.9],[361.9,-332.8],[358.2,-331.3],[362.9,-320.8]],height:14,estimatedHeight:!0,at:604,kind:"yes"},{id:"484324910",name:"",points:[[262.2,-364.5],[256.1,-361.9],[264.9,-346.8],[266.3,-347.8],[264.7,-351],[266.7,-352],[268.5,-349],[272.4,-351],[268.3,-358.9],[265.5,-357.6],[262.2,-364.5]],height:13.2,estimatedHeight:!1,at:508,kind:"apartments"},{id:"484324911",name:"",points:[[350,-314.6],[343.8,-329.8],[339.8,-327.7],[346,-312.9],[350,-314.6]],height:14,estimatedHeight:!0,at:581,kind:"yes"},{id:"484324912",name:"",points:[[319.3,-315.4],[333.2,-319.5],[336.9,-321],[335.9,-324.6],[334.6,-324.5],[334.1,-325.4],[316.8,-319.9],[319.3,-315.4]],height:14,estimatedHeight:!0,at:571,kind:"apartments"},{id:"484324914",name:"",points:[[292.9,-355],[286,-351.1],[281,-348.8],[282.5,-344.1],[277.8,-342.1],[282,-334.5],[285.9,-336.6],[286.3,-335.8],[298,-342.9],[292.9,-355]],height:14,estimatedHeight:!0,at:526,kind:"apartments"},{id:"484324915",name:"",points:[[337.8,-344.4],[334.1,-351.8],[329.7,-349.9],[328,-353.8],[322.9,-351.6],[327.2,-343.2],[329.1,-344],[330,-341.7],[333,-342.3],[337.8,-344.4]],height:14,estimatedHeight:!0,at:578,kind:"yes"},{id:"484324916",name:"",points:[[289,-324.5],[291.5,-325.3],[288.6,-331.2],[285.3,-329.3],[289,-324.5]],height:14,estimatedHeight:!0,at:529,kind:"yes"},{id:"484324917",name:"",points:[[300.4,-353.1],[303.2,-347.5],[317.5,-353.9],[315.4,-359.2],[300.4,-353.1]],height:14,estimatedHeight:!0,at:548,kind:"apartments"},{id:"484324918",name:"",points:[[321.9,-310.4],[335.1,-315.5],[333.2,-319.5],[319.3,-315.4],[321.9,-310.4]],height:14,estimatedHeight:!0,at:556,kind:"apartments"},{id:"484324919",name:"",points:[[309.4,-383.4],[318.8,-387],[326.3,-368.6],[322.7,-366.9],[324.1,-363.9],[327.9,-365.5],[334.1,-351.8],[329.7,-349.9],[328,-353.8],[322.9,-351.6],[318.1,-360.1],[309.4,-383.4]],height:13.2,estimatedHeight:!1,at:577,kind:"apartments"},{id:"484324921",name:"",points:[[378.1,-338.8],[389.2,-343.8],[390.9,-345.2],[390.9,-346.5],[390,-348.5],[393.1,-349.6],[392.8,-351.8],[376,-344.3],[378.1,-338.8]],height:14,estimatedHeight:!0,at:620,kind:"yes"},{id:"484324922",name:"",points:[[308.1,-337.5],[309.9,-333.9],[328.6,-339.4],[326.7,-344.5],[308.1,-337.5]],height:14,estimatedHeight:!0,at:551,kind:"apartments"},{id:"484324923",name:"",points:[[425.1,-378.8],[423.2,-382.5],[407.2,-374.4],[409.3,-369.7],[412.8,-371.1],[412.4,-372.3],[425.1,-378.8]],height:14,estimatedHeight:!0,at:657,kind:"apartments"},{id:"484324925",name:"",points:[[429.2,-370.9],[427.3,-374.7],[418.3,-370.1],[419.1,-368.2],[417.9,-367.4],[416.9,-369.4],[410.2,-365.9],[412.1,-361.9],[424.5,-367.6],[424.2,-368.5],[429.2,-370.9]],height:14,estimatedHeight:!0,at:658,kind:"apartments"},{id:"484324926",name:"",points:[[270.7,-368.2],[262.2,-364.5],[265.5,-357.6],[268.3,-358.9],[275.4,-345.4],[276.8,-343.6],[281.9,-346.3],[281,-348.8],[270.7,-368.2]],height:13.2,estimatedHeight:!1,at:524,kind:"apartments"},{id:"484324927",name:"",points:[[270.8,-314.7],[281.1,-320.3],[281.5,-319.6],[289,-324.5],[285.3,-329.3],[282.9,-333.1],[265.4,-323.1],[270.8,-314.7]],height:14,estimatedHeight:!0,at:506,kind:"apartments"},{id:"484324928",name:"",points:[[316.8,-319.9],[334.1,-325.4],[334.6,-324.5],[335.9,-324.6],[337.4,-325.4],[336.7,-327.2],[336.4,-330.6],[314.4,-324.7],[316.8,-319.9]],height:14,estimatedHeight:!0,at:575,kind:"apartments"},{id:"484324929",name:"",points:[[359.5,-380.5],[345.1,-375],[346.9,-371.4],[348.2,-367.6],[345.1,-366.5],[346.1,-364],[346.4,-362.3],[364,-369.1],[359.5,-380.5]],height:14,estimatedHeight:!0,at:596,kind:"yes"},{id:"484324930",name:"",points:[[318.8,-387],[326.7,-389.9],[333.3,-375.6],[331.9,-374.9],[332.4,-373.8],[334,-374.5],[339.5,-361.5],[335.3,-359.7],[338.1,-353.3],[334.1,-351.8],[326.3,-368.6],[318.8,-387]],height:16.5,estimatedHeight:!1,at:581,kind:"apartments"},{id:"484324931",name:"",points:[[309.9,-333.9],[312.1,-329.4],[324.9,-333.5],[324.6,-334.3],[329.7,-335.8],[328.6,-339.4],[309.9,-333.9]],height:14,estimatedHeight:!0,at:552,kind:"apartments"},{id:"484324932",name:"",points:[[310.4,-320.1],[292.9,-311],[294.7,-307],[291.9,-304.8],[291.2,-306.1],[280.7,-298.7],[301,-267.3],[332.1,-275.6],[327.4,-285.6],[323.9,-291.2],[310.7,-284.1],[298.2,-304.3],[314.4,-313],[310.4,-320.1]],height:16.5,estimatedHeight:!1,at:557,kind:"apartments"},{id:"484324933",name:"",points:[[401.6,-336.8],[396.7,-348.9],[390.9,-346.5],[391,-343.5],[395.1,-334],[401.6,-336.8]],height:14,estimatedHeight:!0,at:634,kind:"yes"},{id:"484324934",name:"",points:[[354.7,-317],[350.9,-325.6],[347.7,-331.6],[343.8,-329.8],[350,-314.6],[354.7,-317]],height:14,estimatedHeight:!0,at:586,kind:"yes"},{id:"484324935",name:"",points:[[314.4,-324.7],[332.3,-329.5],[330.9,-332.6],[328.2,-332],[327.4,-335.1],[324.6,-334.3],[324.9,-333.5],[312.1,-329.4],[314.4,-324.7]],height:14,estimatedHeight:!0,at:573,kind:"apartments"},{id:"485724370",name:"",points:[[565.9,-358.1],[556.1,-355.4],[555.2,-358.2],[553.6,-362.2],[554.5,-362.4],[554.1,-363.6],[563.3,-366.1],[565.9,-358.1]],height:14,estimatedHeight:!0,at:805,kind:"yes"},{id:"485724371",name:"",points:[[530.7,-330.8],[525.7,-343.1],[528.6,-344.3],[527.3,-347.4],[531.2,-348.6],[535.7,-332.2],[530.7,-330.8]],height:14,estimatedHeight:!0,at:769,kind:"yes"},{id:"485724372",name:"",points:[[481.6,-422.1],[476,-435.1],[485.1,-439.4],[484.6,-441.3],[493.2,-445.6],[494.6,-442.6],[503.7,-448],[507.1,-442.3],[499,-439.1],[501.2,-434.5],[495.2,-431.9],[495.9,-430.1],[481.6,-422.1]],height:14,estimatedHeight:!0,at:742,kind:"yes"},{id:"485724374",name:"",points:[[554.3,-337.3],[548.4,-355.1],[542.7,-370.4],[550.6,-374.8],[554.5,-362.4],[549.9,-361],[551.4,-356.9],[555.2,-358.2],[557.1,-352.2],[563.5,-354.2],[567.6,-341],[554.3,-337.3]],height:14,estimatedHeight:!0,at:799,kind:"yes"},{id:"485724376",name:"",points:[[555.8,-364.1],[552.4,-375.1],[559.2,-379.1],[563.3,-366.1],[555.8,-364.1]],height:14,estimatedHeight:!0,at:804,kind:"yes"},{id:"485724377",name:"",points:[[514.2,-342.8],[526.8,-348.5],[528.6,-344.3],[525.7,-343.1],[530.7,-330.8],[520.4,-327.9],[514.2,-342.8]],height:13.2,estimatedHeight:!1,at:763,kind:"apartments"},{id:"485724379",name:"",points:[[515.9,-426.3],[510.8,-436.9],[510.1,-437.8],[517.2,-440.8],[518.1,-439],[519.6,-439.7],[524,-430.2],[515.9,-426.3]],height:14,estimatedHeight:!0,at:775,kind:"yes"},{id:"485724381",name:"",points:[[539,-437.4],[534.5,-446.6],[521.6,-440.6],[526.3,-431.3],[539,-437.4]],height:14,estimatedHeight:!0,at:786,kind:"yes"},{id:"485724382",name:"",points:[[535.7,-332.2],[531.2,-348.6],[532.1,-348.8],[535.8,-350.1],[536.5,-352.7],[537.5,-352.3],[540.1,-342],[541.4,-342.1],[543.7,-334.4],[535.7,-332.2]],height:14,estimatedHeight:!0,at:777,kind:"yes"},{id:"485724383",name:"",points:[[548,-373.3],[550.6,-374.8],[552.4,-375.1],[570,-385],[573.5,-387.5],[571.3,-392.5],[565.5,-388.9],[563.6,-394.5],[562,-393.9],[561,-395.8],[553.8,-392.4],[554.3,-390.5],[551.5,-389.2],[553.1,-386.1],[551.7,-385],[549.8,-389.1],[538.1,-382.9],[541.8,-375.6],[545.5,-377.7],[548,-373.3]],height:14,estimatedHeight:!0,at:791,kind:"yes"},{id:"485724386",name:"",points:[[543.7,-334.4],[541.4,-342.1],[540.1,-342],[537.5,-352.3],[543.2,-354.3],[548.5,-335.7],[543.7,-334.4]],height:14,estimatedHeight:!0,at:782,kind:"yes"},{id:"485724387",name:"",points:[[583.4,-345.5],[580,-357],[582,-358.1],[582.8,-356],[584.3,-356.3],[584,-357.7],[588.6,-358.9],[591.8,-347.9],[583.4,-345.5]],height:14,estimatedHeight:!0,at:818,kind:"apartments"},{id:"485724388",name:"",points:[[494.5,-390.5],[490.6,-400.1],[505.6,-406.8],[508.1,-401.9],[509.1,-402.4],[508.1,-404.2],[515,-407.2],[517.6,-401.6],[516.6,-400.8],[494.5,-390.5]],height:9.899999999999999,estimatedHeight:!1,at:745,kind:"apartments"},{id:"485724389",name:"",points:[[539,-437.4],[537,-441.7],[543.6,-444.7],[545.5,-440.6],[539,-437.4]],height:14,estimatedHeight:!0,at:800,kind:"yes"},{id:"485724391",name:"",points:[[516.6,-400.8],[517.6,-401.6],[523.7,-404.6],[516.2,-417.2],[520.1,-419.3],[527.4,-406.3],[529.7,-401.6],[520.3,-397],[519.6,-398.6],[518,-397.7],[516.6,-400.8]],height:14,estimatedHeight:!0,at:771,kind:"yes"},{id:"485724392",name:"",points:[[506,-362.5],[527.3,-372.8],[530.8,-365.2],[523.5,-361.9],[522,-365],[519.7,-363.9],[521.4,-360.1],[509.5,-354.1],[506,-362.5]],height:9.899999999999999,estimatedHeight:!1,at:749,kind:"apartments"},{id:"485724393",name:"",points:[[483.7,-416.8],[481.6,-422.1],[497,-430.7],[498.5,-428],[500.7,-429.2],[499.8,-431.6],[502,-433],[503.6,-429.9],[507.8,-431.8],[506.6,-434.7],[510.8,-436.9],[513.6,-431],[508.5,-428.3],[501.9,-425.6],[483.7,-416.8]],height:14,estimatedHeight:!0,at:742,kind:"yes"},{id:"485724394",name:"",points:[[567.6,-341],[563.5,-354.2],[562.4,-353.9],[561.6,-356.9],[565.9,-358.1],[563.3,-366.1],[576.2,-370],[578.6,-361.2],[576,-360.7],[577.1,-356.2],[580,-357],[583.4,-345.5],[567.6,-341]],height:14,estimatedHeight:!0,at:802,kind:"yes"},{id:"485724395",name:"",points:[[591.5,-366.7],[591,-369.3],[597.9,-371.2],[607.4,-352.3],[596.5,-349.2],[591.5,-366.7]],height:14,estimatedHeight:!0,at:832,kind:"apartments"},{id:"485724396",name:"",points:[[596.5,-349.2],[591.8,-347.9],[588.6,-358.9],[584,-357.7],[583.7,-358.6],[582,-358.1],[580,-357],[577.2,-366.3],[585.9,-369],[586.7,-365.1],[591.5,-366.7],[596.5,-349.2]],height:14,estimatedHeight:!0,at:827,kind:"apartments"},{id:"485724397",name:"",points:[[509.5,-354.1],[521.4,-360.1],[521,-360.9],[530.8,-365.2],[533.3,-357.5],[534.7,-358.2],[536.5,-352.7],[535.8,-350.1],[532.1,-348.8],[531.1,-352.2],[529.8,-351.9],[529.3,-353.3],[524,-350.7],[525.2,-347.9],[514.2,-342.8],[509.5,-354.1]],height:13.2,estimatedHeight:!1,at:751,kind:"apartments"},{id:"485724402",name:"",points:[[485.5,-412.4],[483.7,-416.8],[501.9,-425.6],[504,-421.8],[499.2,-419.5],[498.4,-421.5],[497.2,-420.9],[498.1,-418.5],[485.5,-412.4]],height:14,estimatedHeight:!0,at:743,kind:"yes"},{id:"485724403",name:"",points:[[530.8,-365.2],[542.5,-371.5],[542.7,-370.4],[548,-373.3],[545.5,-377.7],[541.8,-375.6],[539.9,-379],[527.3,-372.8],[530.8,-365.2]],height:14,estimatedHeight:!0,at:773,kind:"yes"},{id:"485724406",name:"",points:[[548.5,-335.7],[546.3,-343.3],[549.8,-344.4],[549.1,-346.3],[545.7,-345.4],[543.2,-354.3],[548.4,-355.1],[554.3,-337.3],[548.5,-335.7]],height:14,estimatedHeight:!0,at:788,kind:"yes"},{id:"486624923",name:"",points:[[187.5,-317.8],[176.6,-310.4],[186,-298],[197.2,-305.1],[187.5,-317.8]],height:14,estimatedHeight:!0,at:412,kind:"yes"},{id:"486624925",name:"",points:[[192.2,-325.8],[184.1,-340.1],[188.6,-343.2],[187,-345.8],[189.2,-347.6],[199.8,-331.8],[192.2,-325.8]],height:14,estimatedHeight:!0,at:422,kind:"yes"},{id:"486624926",name:"",points:[[199.8,-331.8],[203.6,-335.6],[192.7,-347.5],[190.3,-345.7],[199.8,-331.8]],height:14,estimatedHeight:!0,at:430,kind:"yes"},{id:"486624928",name:"",points:[[192.5,-321.1],[187.5,-317.8],[197.2,-305.1],[201.9,-308.5],[192.5,-321.1]],height:14,estimatedHeight:!0,at:424,kind:"yes"},{id:"486624931",name:"",points:[[152.4,-324.3],[158,-321.5],[163.4,-319.6],[164.8,-335.9],[160.8,-335.9],[159.5,-340.2],[156.5,-339.5],[156.3,-335.8],[155,-335.9],[152.4,-324.3]],height:14,estimatedHeight:!0,at:392,kind:"yes"},{id:"486624935",name:"",points:[[171.8,-344.9],[180.6,-348.9],[181.4,-343.4],[175,-341.1],[172.7,-340.8],[171.8,-344.9]],height:14,estimatedHeight:!0,at:403,kind:"yes"},{id:"486624936",name:"",points:[[217.1,-349.9],[211.8,-342.5],[225.5,-325.4],[230.5,-327.6],[232.6,-329.4],[217.1,-349.9]],height:14,estimatedHeight:!0,at:465,kind:"yes"},{id:"486624938",name:"",points:[[203.4,-329.3],[200.1,-326.3],[209.4,-313.9],[212.9,-316.4],[203.4,-329.3]],height:14,estimatedHeight:!0,at:446,kind:"yes"},{id:"486624939",name:"",points:[[203.6,-335.6],[206.3,-339.8],[195.3,-349.8],[192.7,-347.5],[203.6,-335.6]],height:14,estimatedHeight:!0,at:434,kind:"yes"},{id:"486624942",name:"",points:[[206.3,-339.8],[208.8,-345],[210.7,-350.5],[195.4,-358.5],[189.2,-351],[191.4,-348.2],[193.1,-349.9],[194.1,-348.8],[195.3,-349.8],[206.3,-339.8]],height:14,estimatedHeight:!0,at:450,kind:"yes"},{id:"486624946",name:"",points:[[144.2,-330.5],[156.5,-339.5],[156.3,-335.8],[155,-335.9],[152.4,-324.3],[148.6,-326.8],[144.2,-330.5]],height:14,estimatedHeight:!0,at:381,kind:"apartments"},{id:"486624947",name:"",points:[[221.7,-354.3],[217.1,-349.9],[232.6,-329.4],[235.4,-331.2],[226.7,-346.7],[221.7,-354.3]],height:14,estimatedHeight:!0,at:473,kind:"yes"},{id:"486624949",name:"",points:[[196.7,-323.7],[192.5,-321.1],[201.9,-308.5],[206,-311.5],[196.7,-323.7]],height:14,estimatedHeight:!0,at:429,kind:"yes"},{id:"486624950",name:"",points:[[176.4,-319.4],[180.9,-320.4],[175,-341.1],[171.6,-340.6],[172.3,-335.3],[176.4,-319.4]],height:14,estimatedHeight:!0,at:405,kind:"yes"},{id:"486624952",name:"",points:[[163.4,-319.6],[176.4,-319.4],[172.3,-335.3],[164.8,-335.9],[163.4,-319.6]],height:14,estimatedHeight:!0,at:405,kind:"yes"},{id:"486624953",name:"",points:[[206.1,-332.5],[203.4,-329.3],[212.9,-316.4],[216.5,-319],[215.6,-320.4],[206.1,-332.5]],height:14,estimatedHeight:!0,at:450,kind:"yes"},{id:"486624955",name:"",points:[[165.6,-344.7],[168.8,-346.8],[171.5,-346.1],[172.7,-340.8],[171.6,-340.6],[172.3,-335.3],[167.2,-335.7],[165.6,-344.7]],height:14,estimatedHeight:!0,at:402,kind:"yes"},{id:"486624958",name:"",points:[[207.7,-335.8],[206.1,-332.5],[215.6,-320.4],[218,-322.1],[207.7,-335.8]],height:14,estimatedHeight:!0,at:454,kind:"yes"},{id:"486624959",name:"",points:[[211.8,-342.5],[207.7,-335.8],[217.2,-323.2],[223.5,-327.9],[211.8,-342.5]],height:14,estimatedHeight:!0,at:456,kind:"yes"},{id:"486624961",name:"",points:[[200.1,-326.3],[196.7,-323.7],[206,-311.5],[209.4,-313.9],[200.1,-326.3]],height:14,estimatedHeight:!0,at:434,kind:"yes"},{id:"491889265",name:"",points:[[-25.4,-119.7],[4.4,-119.2],[3.3,-89.5],[.1,-89.3],[.1,-90],[-5.7,-90],[-5.8,-91.2],[-11,-91],[-11.3,-96.8],[-15.2,-96.5],[-15,-90.8],[-27.6,-89.8],[-28,-103.2],[-25.6,-103.2],[-25.4,-119.7]],height:14,estimatedHeight:!0,at:90,kind:"yes"},{id:"491889267",name:"",points:[[-42.2,-45.5],[-43.7,-45.3],[-43.9,-43.3],[-60,-40.3],[-81.3,-39.4],[-78.8,-64.4],[-60.3,-63.4],[-62.1,-52.5],[-48.3,-52.7],[-48.2,-51.5],[-42.8,-51.9],[-42.2,-45.5]],height:13.2,estimatedHeight:!1,at:43,kind:"yes"},{id:"491889269",name:"",points:[[-60.5,-18.4],[-60.9,-26.6],[-45.9,-28.2],[-44.7,-19.5],[-60.5,-18.4]],height:16.5,estimatedHeight:!1,at:16,kind:"yes"},{id:"491889270",name:"",points:[[-76.8,-76.7],[-65.6,-74.6],[-65.7,-72.6],[-61.2,-72.6],[-61.5,-75.5],[-58.6,-75.9],[-57.5,-66.8],[-59.7,-67.2],[-60.3,-63.4],[-78.8,-64.4],[-76.8,-76.7]],height:14,estimatedHeight:!0,at:64,kind:"yes"},{id:"491889271",name:"",points:[[-70.1,-11.5],[-70.5,-17],[-80.7,-16.8],[-80.7,-38.1],[-74.1,-38.3],[-73.4,-27.6],[-61,-28.6],[-60.5,-18.4],[-44.7,-19.5],[-44.1,-12.8],[-70.1,-11.5]],height:14,estimatedHeight:!0,at:9,kind:"yes"},{id:"491889272",name:"",points:[[-75.4,-89.1],[-61.1,-89.5],[-59,-79],[-61.6,-78.5],[-61.5,-75.5],[-65.6,-74.6],[-76.8,-76.7],[-75.4,-89.1]],height:14,estimatedHeight:!0,at:76,kind:"yes"},{id:"491889273",name:"",points:[[3.3,-89.5],[2.8,-80.9],[-14.8,-81.3],[-15,-90.8],[-5.8,-91.2],[-5.7,-90],[.1,-90],[.1,-89.3],[3.3,-89.5]],height:14,estimatedHeight:!0,at:90,kind:"yes"},{id:"491889276",name:"",points:[[-96.9,-43.3],[-97.2,-45.4],[-111.1,-43.1],[-108.5,-30.2],[-95.1,-31.8],[-96.9,-43.3]],height:13.2,estimatedHeight:!1,at:25,kind:"yes"},{id:"491889281",name:"",points:[[-15,-90.8],[-14.9,-84.1],[-27.3,-83.5],[-27.6,-89.8],[-15,-90.8]],height:14,estimatedHeight:!0,at:83,kind:"yes"},{id:"491889282",name:"",points:[[-25.9,-55.5],[-25.1,-71.3],[-29.1,-71.1],[-28.5,-69.2],[-26.4,-68.7],[-28.7,-48],[-42.2,-45.5],[-42.8,-51.9],[-48.2,-51.5],[-48.3,-52.7],[-62.1,-52.5],[-59.7,-67.2],[-57.5,-66.8],[-59,-79],[-51.3,-80],[-50.8,-74.7],[-26.5,-76.9],[-27.3,-83.5],[-14.9,-84.1],[-14.3,-61.6],[-16.4,-61.6],[-16.2,-55.7],[-25.9,-55.5]],height:6.6,estimatedHeight:!1,at:61,kind:"yes"},{id:"491889284",name:"",points:[[-.5,-36],[-1.2,-26.4],[-20.5,-26.3],[-22,-34.2],[-10.4,-35.5],[-.5,-36]],height:13.2,estimatedHeight:!1,at:26,kind:"apartments"},{id:"491889285",name:"",points:[[-43.5,-29.1],[-42.5,-14.9],[-37.6,-15.2],[-37.5,-16.3],[-35.1,-16.9],[-30.2,-20.4],[-28,-22.6],[-27.1,-24.5],[-26.6,-26.1],[-26.4,-29.3],[-32.6,-28.3],[-39.5,-28],[-39.5,-29],[-43.5,-29.1]],height:6.6,estimatedHeight:!1,at:24,kind:"yes"},{id:"491889286",name:"",points:[[-35.2,-44],[-28.4,-45.9],[-24,-29.6],[-32.6,-28.3],[-35.2,-44]],height:13.2,estimatedHeight:!1,at:27,kind:"yes"},{id:"491889288",name:"",points:[[1.5,-62.6],[-7,-62.6],[-7.3,-59.8],[-9.1,-59.9],[-9,-55.9],[-16.2,-55.7],[-16.4,-61.6],[-14.3,-61.6],[-14.8,-81.3],[2.8,-80.9],[1.5,-62.6]],height:16.5,estimatedHeight:!1,at:81,kind:"yes"},{id:"491889292",name:"",points:[[-80.5,.7],[-80.6,-11],[-58.6,-12.1],[-58.5,-8.7],[-54.4,-9.1],[-54.5,-12.4],[-44.1,-12.8],[-43.5,-.1],[-80.5,.7]],height:13.2,estimatedHeight:!1,at:0,kind:"yes"},{id:"491889294",name:"",points:[[-74.1,-38.3],[-60.2,-38.8],[-60,-28.6],[-73.4,-27.6],[-74.1,-38.3]],height:9.899999999999999,estimatedHeight:!1,at:24,kind:"yes"},{id:"491891365",name:"",points:[[110.3,-291.7],[89.8,-289.4],[90.9,-278],[93.9,-278],[93.7,-281.4],[98.7,-282.3],[98.8,-274.3],[109.5,-274.4],[109.1,-280.7],[110.6,-280.8],[110.3,-291.7]],height:14,estimatedHeight:!0,at:333,kind:"yes"},{id:"491891366",name:"",points:[[126.9,-296.8],[134.5,-297.7],[133.9,-304.3],[133.2,-323.2],[127.4,-322.9],[127.5,-310],[125.8,-310],[126.9,-296.8]],height:14,estimatedHeight:!0,at:353,kind:"yes"},{id:"491891367",name:"",points:[[184.6,-277.2],[180,-283.7],[173,-279.5],[169.4,-284.3],[165.9,-281.9],[168.9,-272.8],[176.4,-273.3],[184.6,-277.2]],height:14,estimatedHeight:!0,at:399,kind:"yes"},{id:"491891368",name:"",points:[[116.7,-295.5],[126.9,-296.8],[126,-307.7],[123.9,-307.6],[123.7,-309.9],[127.5,-310],[127.4,-322.9],[115.6,-322.2],[117.2,-311.3],[115.3,-311.2],[116.7,-295.5]],height:14,estimatedHeight:!0,at:342,kind:"yes"},{id:"491891369",name:"",points:[[99.5,-266.9],[110.1,-266.5],[109.5,-274.4],[98.8,-274.3],[99.5,-266.9]],height:14,estimatedHeight:!0,at:333,kind:"yes"},{id:"491891371",name:"",points:[[152,-270.5],[156,-271.1],[153,-281.6],[149.6,-281.1],[152,-270.5]],height:14,estimatedHeight:!0,at:375,kind:"yes"},{id:"491891372",name:"",points:[[127.6,-293.5],[119.6,-292.7],[120.5,-284.3],[121.9,-284.4],[122.3,-279.3],[128.7,-280.3],[127.6,-293.5]],height:14,estimatedHeight:!0,at:346,kind:"yes"},{id:"491891373",name:"",points:[[149.3,-296],[152.7,-283.8],[159.4,-284.8],[158.6,-288.6],[162.4,-289.7],[157.7,-297.5],[149.3,-296]],height:14,estimatedHeight:!0,at:377,kind:"yes"},{id:"491891375",name:"",points:[[116.7,-295.5],[115.3,-311.2],[107.5,-310.3],[108,-306.4],[104.4,-306.2],[106.1,-294.3],[116.7,-295.5]],height:14,estimatedHeight:!0,at:332,kind:"yes"},{id:"491891376",name:"",points:[[187.9,-289.3],[180,-283.7],[184.6,-277.2],[192.5,-282.7],[187.9,-289.3]],height:14,estimatedHeight:!0,at:408,kind:"apartments"},{id:"491891377",name:"",points:[[131.5,-294],[127.6,-293.5],[128.7,-280.3],[133.1,-280.9],[131.5,-294]],height:14,estimatedHeight:!0,at:353,kind:"yes"},{id:"491891378",name:"",points:[[115.6,-322.2],[100.6,-320.6],[102.4,-308.4],[107.8,-308.6],[107.5,-310.3],[117.2,-311.3],[115.6,-322.2]],height:14,estimatedHeight:!0,at:335,kind:"apartments"},{id:"491891379",name:"",points:[[180.8,-297.5],[173.3,-306.4],[164,-300.8],[166.7,-296.6],[163.6,-293.7],[166.2,-290.4],[167.7,-291.4],[169.3,-288.8],[180.8,-297.5]],height:16.5,estimatedHeight:!1,at:394,kind:"apartments"},{id:"491891380",name:"",points:[[163.4,-272.1],[168.9,-272.8],[162.4,-289.7],[158.6,-288.6],[158.9,-287.4],[160.4,-287.6],[161.7,-285],[159.4,-284.8],[163.4,-272.1]],height:14,estimatedHeight:!0,at:386,kind:"yes"},{id:"491891382",name:"",points:[[140.5,-269.2],[145.5,-269.7],[142.6,-282.2],[138,-281.4],[140.5,-269.2]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"491891383",name:"",points:[[119.6,-292.7],[110.3,-291.7],[110.5,-284],[113.9,-284.3],[114.1,-278],[116.3,-278],[116.2,-276],[118.5,-276.3],[118.3,-278.8],[121,-278.8],[119.6,-292.7]],height:14,estimatedHeight:!0,at:342,kind:"yes"},{id:"491891384",name:"",points:[[110.1,-266.5],[126.6,-267.7],[125.5,-279.8],[122.3,-279.3],[121,-278.8],[118.3,-278.8],[118.5,-276.3],[116.2,-276],[116.3,-278],[114.1,-278],[114,-281.2],[109.1,-280.7],[110.1,-266.5]],height:14,estimatedHeight:!0,at:349,kind:"yes"},{id:"491891385",name:"",points:[[163.4,-272.1],[159.4,-284.8],[151.3,-283.7],[151.7,-281.4],[153,-281.6],[156,-271.1],[163.4,-272.1]],height:14,estimatedHeight:!0,at:379,kind:"yes"},{id:"491891386",name:"",points:[[164,-300.8],[157.7,-297.5],[162.4,-289.7],[164.6,-285.3],[169.3,-288.8],[167.7,-291.4],[166.2,-290.4],[163.6,-293.7],[166.7,-296.6],[164,-300.8]],height:14,estimatedHeight:!0,at:389,kind:"yes"},{id:"491891387",name:"",points:[[100.6,-320.6],[91.7,-319.7],[93.1,-308.8],[93.3,-304.7],[102.7,-305.9],[100.6,-320.6]],height:14,estimatedHeight:!0,at:320,kind:"apartments"},{id:"491891388",name:"",points:[[141.8,-295.3],[143.4,-282.3],[149,-283.5],[152.7,-283.8],[149.3,-296],[141.8,-295.3]],height:14,estimatedHeight:!0,at:367,kind:"yes"},{id:"491891389",name:"",points:[[126.6,-267.7],[132,-268.1],[128.7,-280.3],[125.5,-279.8],[126.6,-267.7]],height:14,estimatedHeight:!0,at:355,kind:"yes"},{id:"491891390",name:"",points:[[145.5,-269.7],[152,-270.5],[149,-283.5],[142.6,-282.2],[145.5,-269.7]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"491891391",name:"",points:[[131.5,-294],[133.1,-280.9],[138,-281.4],[140.7,-281.9],[140.3,-284.5],[143.1,-285],[141.8,-295.3],[131.5,-294]],height:14,estimatedHeight:!0,at:362,kind:"yes"},{id:"491891392",name:"",points:[[180.8,-297.5],[167.2,-287.2],[169.8,-284.1],[172.5,-280.2],[177.5,-283.2],[178.1,-282.6],[180,-283.7],[187.9,-289.3],[180.8,-297.5]],height:14,estimatedHeight:!0,at:396,kind:"apartments"},{id:"491891393",name:"",points:[[81.9,-277],[81.8,-278],[83.1,-277.9],[83.1,-280.8],[86.7,-280.8],[86.7,-277.8],[90.9,-278],[89.8,-289.4],[78.8,-288.5],[80.3,-277],[81.9,-277]],height:14,estimatedHeight:!0,at:306,kind:"yes"},{id:"491891394",name:"",points:[[106.1,-294.3],[104.4,-306.2],[96.3,-305.1],[98.1,-293.3],[106.1,-294.3]],height:14,estimatedHeight:!0,at:323,kind:"yes"},{id:"491891395",name:"",points:[[99.5,-266.9],[98.8,-275.2],[93.9,-275.4],[93.9,-278],[90.9,-278],[90.5,-267.1],[99.5,-266.9]],height:14,estimatedHeight:!0,at:322,kind:"yes"},{id:"491891396",name:"",points:[[132,-268.1],[140.5,-269.2],[138,-281.4],[131.4,-280.7],[132.1,-277.5],[129.6,-276.9],[132,-268.1]],height:14,estimatedHeight:!0,at:355,kind:"yes"},{id:"491891885",name:"",points:[[127.3,-329.6],[120.5,-343.2],[117.1,-341.9],[118.8,-337.3],[123.8,-328.7],[127.3,-329.6]],height:14,estimatedHeight:!0,at:353,kind:"yes"},{id:"491891887",name:"",points:[[128.1,-348.3],[123.4,-345.8],[123.8,-344.6],[121.7,-344],[121.3,-345.1],[118.7,-344.3],[119.3,-342.8],[120.5,-343.2],[127.3,-329.6],[137.7,-332.3],[137.9,-333.9],[132.3,-341.8],[128.1,-348.3]],height:14,estimatedHeight:!0,at:357,kind:"yes"},{id:"491891890",name:"",points:[[113.4,-359.5],[103.7,-355.7],[107.2,-343.4],[109,-343.9],[109.8,-340.2],[105,-338.7],[106.9,-332.5],[118.8,-337.3],[117.1,-341.9],[117.8,-342.2],[113.4,-359.5]],height:14,estimatedHeight:!0,at:337,kind:"yes"},{id:"491926107",name:"",points:[[157.5,-267.9],[161.5,-268.4],[163.7,-251.9],[162.3,-251.8],[162.1,-254.5],[159.6,-254.1],[157.5,-267.9]],height:14,estimatedHeight:!0,at:384,kind:"yes"},{id:"491926108",name:"",points:[[98,-263.7],[102,-263.8],[102.6,-249.4],[98.3,-249.2],[98,-263.7]],height:14,estimatedHeight:!0,at:323,kind:"yes"},{id:"491926109",name:"",points:[[251.7,-252.4],[243.7,-250.2],[241.4,-259.4],[248.5,-263],[251.7,-252.4]],height:14,estimatedHeight:!0,at:464,kind:"yes"},{id:"491926110",name:"",points:[[243.7,-250.2],[222.8,-244.7],[220.7,-249],[241.4,-259.4],[243.7,-250.2]],height:14,estimatedHeight:!0,at:443,kind:"yes"},{id:"491926111",name:"",points:[[218.2,-243.9],[210.5,-256.8],[205.6,-253.9],[211.4,-242.8],[218.2,-243.9]],height:14,estimatedHeight:!0,at:431,kind:"yes"},{id:"491926112",name:"",points:[[116.9,-264.1],[120.2,-264.2],[121.3,-251],[117.2,-250.3],[116.9,-264.1]],height:14,estimatedHeight:!0,at:338,kind:"yes"},{id:"491926113",name:"",points:[[120.2,-264.2],[128.8,-264.8],[129.3,-251],[121.3,-251],[120.2,-264.2]],height:14,estimatedHeight:!0,at:350,kind:"yes"},{id:"491926114",name:"",points:[[102,-263.8],[109.3,-263.9],[110,-249.9],[102.6,-249.4],[102,-263.8]],height:14,estimatedHeight:!0,at:331,kind:"yes"},{id:"491926115",name:"",points:[[176.8,-269.7],[179.9,-270.6],[184.8,-259],[180.4,-258.2],[176.8,-269.7]],height:14,estimatedHeight:!0,at:402,kind:"yes"},{id:"491926116",name:"",points:[[205.5,-242],[176.8,-240],[175.1,-253.8],[176.9,-253.9],[176.4,-257.7],[180.4,-258.2],[180.8,-256.5],[185.6,-257.4],[185.8,-256.4],[189.2,-256.1],[190.5,-247.6],[195.7,-248.2],[201,-251.2],[205.5,-242]],height:14,estimatedHeight:!0,at:425,kind:"yes"},{id:"491926117",name:"",points:[[128.8,-264.8],[132.8,-265],[134,-250.1],[132.5,-250.1],[132.5,-251.2],[129.3,-251],[128.8,-264.8]],height:14,estimatedHeight:!0,at:355,kind:"yes"},{id:"491926118",name:"",points:[[173.2,-239.6],[176.8,-240],[175.1,-253.8],[173.7,-253.5],[173,-257.2],[170.9,-257.1],[173.2,-239.6]],height:14,estimatedHeight:!0,at:393,kind:"yes"},{id:"491926119",name:"",points:[[211.4,-242.8],[205.5,-242],[201,-251.2],[205.6,-253.9],[211.4,-242.8]],height:14,estimatedHeight:!0,at:425,kind:"yes"},{id:"491926120",name:"",points:[[165.9,-238.7],[173.2,-239.6],[171.4,-252.5],[163.7,-251.9],[165.9,-238.7]],height:14,estimatedHeight:!0,at:385,kind:"yes"},{id:"491926121",name:"",points:[[109.3,-263.9],[116.9,-264.1],[117.2,-250.3],[110,-249.9],[109.3,-263.9]],height:14,estimatedHeight:!0,at:337,kind:"yes"},{id:"491926122",name:"",points:[[162.2,-238],[165.9,-238.7],[163.7,-251.9],[160,-251.6],[162.2,-238]],height:14,estimatedHeight:!0,at:381,kind:"yes"},{id:"491926123",name:"",points:[[172.3,-269.1],[176.8,-269.7],[180.4,-258.2],[174.5,-257.4],[172.3,-269.1]],height:14,estimatedHeight:!0,at:396,kind:"yes"},{id:"491926124",name:"",points:[[147.9,-266.8],[152.1,-267.3],[153.9,-252.9],[149.2,-252.1],[147.9,-266.8]],height:14,estimatedHeight:!0,at:371,kind:"yes"},{id:"491926125",name:"",points:[[136.8,-265.4],[140.7,-265.7],[142.2,-256],[142.3,-251.8],[138.6,-251],[136.8,-265.4]],height:14,estimatedHeight:!0,at:359,kind:"yes"},{id:"491926126",name:"",points:[[143.8,-236.3],[152,-237],[150.4,-252.3],[149.2,-252.1],[149.1,-255.1],[146.8,-254.7],[146.1,-256.5],[142.2,-256],[142.3,-251.8],[143.8,-236.3]],height:14,estimatedHeight:!0,at:371,kind:"yes"},{id:"491926127",name:"",points:[[87,-264],[92.1,-263.7],[92.9,-247.3],[90.9,-247.1],[90.7,-250.7],[89.1,-250.7],[89.1,-244.6],[87.6,-244.3],[87,-264]],height:14,estimatedHeight:!0,at:308,kind:"yes"},{id:"491926128",name:"",points:[[210.5,-256.8],[205.9,-263.4],[192.9,-255.9],[191.8,-257.9],[189.2,-256.1],[190.5,-247.6],[195.7,-248.2],[210.5,-256.8]],height:14,estimatedHeight:!0,at:416,kind:"yes"},{id:"491926129",name:"",points:[[179.9,-270.6],[183.1,-272],[190.2,-260.4],[184.8,-259],[179.9,-270.6]],height:14,estimatedHeight:!0,at:406,kind:"yes"},{id:"491926130",name:"",points:[[152.1,-267.3],[157.5,-267.9],[159.6,-254.1],[153.9,-252.9],[152.1,-267.3]],height:14,estimatedHeight:!0,at:375,kind:"yes"},{id:"491926131",name:"",points:[[82.3,-264.1],[87,-264],[87.4,-249.1],[84.8,-249.1],[84.8,-245],[82.4,-244.9],[82.3,-264.1]],height:14,estimatedHeight:!0,at:305,kind:"yes"},{id:"491926132",name:"",points:[[135.4,-235.6],[143.8,-236.3],[142.3,-251.8],[138.6,-251],[138.8,-246.9],[136.8,-247],[134.2,-246.8],[135.4,-235.6]],height:14,estimatedHeight:!0,at:363,kind:"yes"},{id:"491926133",name:"",points:[[282.3,-270.1],[287.1,-261.8],[270.7,-257.2],[268.8,-268.3],[275.2,-270.8],[277,-267.6],[282.3,-270.1]],height:14,estimatedHeight:!0,at:492,kind:"apartments"},{id:"491926134",name:"",points:[[140.7,-265.7],[147.9,-266.8],[149.1,-255.1],[146.8,-254.7],[146.1,-256.5],[142.2,-256],[140.7,-265.7]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"491926135",name:"",points:[[134,-250.1],[132.8,-265],[136.8,-265.4],[138.6,-251],[136.6,-250.3],[134,-250.1]],height:14,estimatedHeight:!0,at:357,kind:"yes"},{id:"491926136",name:"",points:[[169.1,-268.9],[172.3,-269.1],[173.5,-263],[171.8,-262.7],[172,-260.4],[173.9,-260.9],[174.5,-257.4],[170.9,-257.1],[169.1,-268.9]],height:14,estimatedHeight:!0,at:394,kind:"yes"},{id:"491926137",name:"",points:[[127.9,-235],[135.4,-235.6],[134.2,-246.8],[136.8,-247],[136.6,-250.3],[132.5,-250.1],[132.9,-247.6],[129.6,-247.4],[127.3,-246.4],[127.9,-235]],height:14,estimatedHeight:!0,at:354,kind:"yes"},{id:"491926138",name:"",points:[[270.7,-257.2],[251.7,-252.4],[248.5,-263],[254.7,-266.1],[268.6,-272.1],[270.6,-268.9],[268.8,-268.3],[270.7,-257.2]],height:14,estimatedHeight:!0,at:473,kind:"yes"},{id:"491926139",name:"",points:[[152,-237],[162.2,-238],[159.6,-254.1],[157.4,-253.6],[157.6,-252.2],[150.5,-251.1],[152,-237]],height:14,estimatedHeight:!0,at:381,kind:"yes"},{id:"491926140",name:"",points:[[161.5,-268.4],[169.1,-268.9],[170.9,-257.1],[166,-256.7],[166.6,-252.2],[163.7,-251.9],[161.5,-268.4]],height:14,estimatedHeight:!0,at:387,kind:"yes"},{id:"491926141",name:"",points:[[92.1,-263.7],[98,-263.7],[98.3,-249.2],[92.8,-248.8],[92.1,-263.7]],height:14,estimatedHeight:!0,at:319,kind:"yes"},{id:"495062037",name:"",points:[[-35.7,-294.8],[-34.6,-305.6],[-62.8,-306.6],[-62.7,-299.7],[-61.8,-295.1],[-65.7,-293.9],[-65,-290],[-60.6,-291.8],[-53.4,-293],[-52.3,-288.4],[-48.8,-288.9],[-49.2,-293.2],[-35.7,-294.8]],height:16.5,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062038",name:"",points:[[-71.7,-283.8],[-72.6,-289],[-65,-290],[-64,-285.1],[-71.7,-283.8]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062039",name:"",points:[[-83.2,-285.5],[-80.2,-266.3],[-88.4,-265.1],[-90.2,-276.9],[-91.3,-276.8],[-92.2,-284.2],[-83.2,-285.5]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062040",name:"",points:[[-80.8,-287.8],[-83.3,-295],[-78.1,-297],[-76.8,-292.3],[-74,-293.2],[-72.6,-289],[-80.8,-287.8]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062041",name:"",points:[[-103.3,-261],[-102.7,-248.5],[-98.9,-248.6],[-99.1,-261],[-103.3,-261]],height:16.5,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062042",name:"",points:[[-79.8,-246],[-79.6,-252.6],[-79.8,-262.9],[-99.1,-261],[-98.9,-248.6],[-92.9,-248.8],[-92.8,-244.7],[-89.6,-244.6],[-89.5,-245.6],[-79.8,-246]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062044",name:"",points:[[-78.5,-275.3],[-79.4,-281.7],[-68.5,-282.3],[-67.5,-278],[-78.5,-275.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062046",name:"",points:[[-34.7,-278.7],[-48.5,-273.7],[-50,-283.7],[-46.4,-284.4],[-47.1,-287.5],[-48.7,-287.4],[-49.2,-293.2],[-35.7,-294.8],[-36.2,-288.6],[-34.7,-278.7]],height:16.5,estimatedHeight:!1,at:219,kind:"hotel"},{id:"495062048",name:"",points:[[-48.5,-273.7],[-62.8,-269.4],[-64.8,-276.7],[-60,-278],[-61,-285.9],[-62.3,-291.1],[-60.6,-291.8],[-53.4,-293],[-52.3,-288.4],[-52.1,-286.6],[-49.8,-287.1],[-49,-283.9],[-50,-283.7],[-48.5,-273.7]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062049",name:"",points:[[-102.3,-264.3],[-102.6,-274],[-99.6,-274.1],[-99.8,-276.7],[-102.7,-276.5],[-102.7,-278.8],[-93.4,-279.2],[-93.1,-276.5],[-90.2,-276.9],[-88.4,-265.1],[-102.3,-264.3]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062051",name:"",points:[[-83.3,-295],[-85.2,-299.6],[-71.2,-304],[-70.3,-302.8],[-65.7,-304.2],[-62.7,-304.5],[-62.7,-299.7],[-66.2,-299.5],[-65,-290],[-72.6,-289],[-74,-293.2],[-76.8,-292.3],[-78.1,-297],[-83.3,-295]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062052",name:"",points:[[-77,-266.7],[-78.5,-275.3],[-67.5,-278],[-65.1,-269],[-77,-266.7]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062053",name:"",points:[[-79.4,-281.7],[-80.8,-287.8],[-72.6,-289],[-71.7,-283.8],[-70.6,-284],[-70.2,-282.2],[-79.4,-281.7]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263196",name:"",points:[[-46.6,-123.7],[-25.7,-122.9],[-26.7,-136.9],[-28.7,-144.7],[-36.6,-143.7],[-43.5,-143.3],[-43.4,-141.2],[-47.6,-141],[-46.6,-123.7]],height:14,estimatedHeight:!0,at:123,kind:"yes"},{id:"497263202",name:"",points:[[-85.9,-169.7],[-85.2,-160.7],[-74.9,-161.9],[-75.5,-171],[-85.9,-169.7]],height:14,estimatedHeight:!0,at:178,kind:"yes"},{id:"497263204",name:"",points:[[-117.7,-202.3],[-117.5,-206.1],[-116.9,-209.2],[-109.9,-214.5],[-97.8,-214],[-98.5,-200.1],[-97.5,-199.5],[-97.9,-191.8],[-103.3,-192.5],[-114.7,-192.8],[-114.8,-202.1],[-117.7,-202.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263214",name:"",points:[[-53.2,-123.8],[-46.6,-123.7],[-47.6,-141],[-56.1,-140.6],[-55.9,-135.6],[-53.8,-134.4],[-53.2,-123.8]],height:14,estimatedHeight:!0,at:119,kind:"apartments"},{id:"497263216",name:"",points:[[-77.7,-185.7],[-71.6,-186.7],[-71.9,-171.5],[-77,-171],[-77.7,-185.7]],height:14,estimatedHeight:!0,at:196,kind:"apartments"},{id:"497263225",name:"",points:[[-56,-149.6],[-55.8,-159.5],[-38.5,-158.5],[-36.6,-143.7],[-43.5,-143.3],[-43.8,-150.1],[-56,-149.6]],height:14,estimatedHeight:!0,at:145,kind:"house"},{id:"497263233",name:"",points:[[-89.7,-183.8],[-86.4,-184.3],[-85.9,-169.7],[-88,-169.2],[-89.7,-183.8]],height:14,estimatedHeight:!0,at:196,kind:"apartments"},{id:"497263237",name:"",points:[[-70.6,-143.1],[-76.3,-142.8],[-76.1,-124.1],[-70.2,-124],[-69.8,-135.3],[-70.6,-143.1]],height:14,estimatedHeight:!0,at:136,kind:"yes"},{id:"497263239",name:"",points:[[-58.6,-161.8],[-58.7,-172.6],[-65.5,-172.7],[-65.2,-182.7],[-66.8,-182.7],[-66.6,-186.6],[-71.6,-186.7],[-71.9,-171.5],[-75.5,-171],[-74.9,-161.9],[-58.6,-161.8]],height:14,estimatedHeight:!0,at:178,kind:"yes"},{id:"497263241",name:"",points:[[-65.2,-124.2],[-60.4,-124.1],[-60.4,-135.6],[-65,-135.5],[-65.2,-124.2]],height:14,estimatedHeight:!0,at:119,kind:"house"},{id:"497263242",name:"",points:[[-100.3,-124.7],[-100.1,-141.1],[-89.2,-140.9],[-89.4,-124.6],[-100.3,-124.7]],height:14,estimatedHeight:!0,at:142,kind:"house"},{id:"497263244",name:"",points:[[-95.9,-225.3],[-97.8,-214],[-109.9,-214.5],[-116.9,-209.2],[-116.1,-226],[-110.6,-226.2],[-95.9,-225.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263247",name:"",points:[[-98.8,-168.3],[-98.8,-163.8],[-101.9,-163.4],[-102.8,-171.3],[-100,-171.5],[-99.6,-168.5],[-98.8,-168.3]],height:14,estimatedHeight:!0,at:177,kind:"yes"},{id:"497263249",name:"",points:[[-86.4,-184.3],[-77.7,-185.7],[-77,-171],[-85.9,-169.7],[-86.4,-184.3]],height:14,estimatedHeight:!0,at:196,kind:"apartments"},{id:"497263252",name:"",points:[[-104,-182.3],[-98.6,-182.7],[-89.7,-183.8],[-88,-169.2],[-96.5,-168.3],[-99.6,-168.5],[-100,-171.5],[-102.8,-171.3],[-104,-182.3]],height:14,estimatedHeight:!0,at:177,kind:"yes"},{id:"497263258",name:"",points:[[-96.5,-168.3],[-96.4,-162.7],[-85.4,-163.1],[-85.9,-169.7],[-88,-169.2],[-96.5,-168.3]],height:14,estimatedHeight:!0,at:177,kind:"yes"},{id:"497263260",name:"",points:[[-57.9,-143.7],[-58,-140.2],[-56,-140.2],[-55.9,-135.6],[-53.8,-134.4],[-53.2,-123.8],[-60.4,-124.1],[-60.4,-135.6],[-69.8,-135.3],[-70.6,-143.1],[-57.9,-143.7]],height:14,estimatedHeight:!0,at:119,kind:"yes"},{id:"497263261",name:"",points:[[-58.1,-155.2],[-57.9,-143.7],[-69.1,-143.2],[-68.9,-148.3],[-72.3,-148.1],[-72.2,-154.8],[-58.1,-155.2]],height:14,estimatedHeight:!0,at:161,kind:"yes"},{id:"497263268",name:"",points:[[-38.5,-158.5],[-32,-159.2],[-29.8,-144.5],[-36.6,-143.7],[-38.5,-158.5]],height:13.2,estimatedHeight:!1,at:145,kind:"house"},{id:"497263270",name:"",points:[[-70.2,-124],[-65.2,-124.2],[-65,-135.5],[-69.8,-135.3],[-70.2,-124]],height:14,estimatedHeight:!0,at:137,kind:"yes"},{id:"497263271",name:"",points:[[-96.4,-162.7],[-85.4,-163.1],[-84.7,-152.8],[-86,-152.8],[-86.2,-140.7],[-100.1,-141.1],[-100.8,-158.4],[-96.8,-158.6],[-97.2,-162.6],[-96.4,-162.7]],height:14,estimatedHeight:!0,at:168,kind:"house"},{id:"497263272",name:"",points:[[-95.9,-225.3],[-80.2,-224.5],[-79.7,-200],[-90.2,-200.4],[-90.4,-199],[-97.5,-199.5],[-98.5,-200.1],[-97.8,-214],[-95.9,-225.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263274",name:"",points:[[-86.4,-200.2],[-86.6,-186.1],[-104.2,-184.6],[-103.3,-192.5],[-97.9,-191.8],[-97.5,-199.5],[-90.4,-199],[-90.2,-200.4],[-86.4,-200.2]],height:14,estimatedHeight:!0,at:212,kind:"yes"},{id:"517872144",name:"",points:[[714.9,-316.1],[713.6,-319.8],[731.4,-323.9],[732.9,-320.7],[714.9,-316.1]],height:14,estimatedHeight:!0,at:937,kind:"yes"},{id:"517872148",name:"",points:[[947,-373.7],[945.2,-382],[958.8,-384.7],[961.8,-377.3],[947,-373.7]],height:14,estimatedHeight:!0,at:1177,kind:"yes"},{id:"518023522",name:"",points:[[741.2,-351.7],[730.7,-348.2],[727.1,-358.8],[730.2,-359.7],[731.2,-355.8],[734.7,-356.8],[734.2,-357.9],[737.4,-358.9],[737,-359.9],[738.6,-360.7],[741.2,-351.7]],height:14,estimatedHeight:!0,at:964,kind:"yes"},{id:"518023524",name:"",points:[[720.4,-345.9],[712.8,-345.2],[707.4,-354.4],[711.9,-356.8],[712.6,-355.4],[713.4,-355.8],[714.5,-353.8],[721.4,-354.7],[721.7,-353.7],[725.3,-354.4],[726,-347],[720.4,-345.9]],height:14,estimatedHeight:!0,at:945,kind:"yes"},{id:"518023525",name:"",points:[[733.3,-381.9],[738.6,-360.7],[737,-359.9],[737.4,-358.9],[734.2,-357.9],[727.6,-380.3],[733.3,-381.9]],height:14,estimatedHeight:!0,at:967,kind:"yes"},{id:"518023526",name:"",points:[[699.1,-351.3],[697.5,-354],[704.9,-358.4],[712.8,-345.2],[703.5,-344.4],[699.1,-351.3]],height:14,estimatedHeight:!0,at:939,kind:"yes"},{id:"518023529",name:"",points:[[688.6,-369.2],[698.2,-372],[704.9,-358.4],[697.5,-354],[688.6,-369.2]],height:14,estimatedHeight:!0,at:926,kind:"yes"},{id:"518023530",name:"",points:[[727.6,-380.3],[734.7,-356.8],[731.2,-355.8],[730.2,-359.7],[727.1,-358.8],[721.5,-378.6],[727.6,-380.3]],height:14,estimatedHeight:!0,at:960,kind:"yes"},{id:"518023532",name:"",points:[[721.5,-378.6],[727.1,-358.8],[724.5,-357.9],[725.3,-354.4],[721.7,-353.7],[714.7,-376.7],[721.5,-378.6]],height:14,estimatedHeight:!0,at:953,kind:"yes"},{id:"518023533",name:"",points:[[720.4,-345.9],[726,-347],[725.3,-354.4],[724.5,-357.9],[727.1,-358.8],[730.7,-348.2],[729,-347.7],[740.5,-322.4],[732.9,-320.7],[720.4,-345.9]],height:14,estimatedHeight:!0,at:960,kind:"yes"},{id:"518023535",name:"",points:[[714.7,-376.7],[721.4,-354.7],[714.5,-353.8],[713.4,-355.8],[712.6,-355.4],[704,-373.6],[714.7,-376.7]],height:14,estimatedHeight:!0,at:953,kind:"yes"},{id:"518023537",name:"",points:[[698.2,-372],[704,-373.6],[710.5,-359.4],[707.8,-358.4],[709.5,-355.5],[707.4,-354.4],[704.9,-358.4],[698.2,-372]],height:14,estimatedHeight:!0,at:936,kind:"yes"},{id:"518287971",name:"",points:[[9.8,-162.2],[9,-171.3],[26.9,-173.3],[27.5,-166.7],[23.1,-166.3],[23.3,-163.8],[9.8,-162.2]],height:19.799999999999997,estimatedHeight:!1,at:172,kind:"yes"},{id:"518287972",name:"",points:[[27.5,-166.7],[37.6,-167.8],[37.9,-165.6],[47.2,-166.6],[46.2,-177.9],[41.9,-188.9],[32.4,-188.3],[32.4,-186.5],[27.4,-186.2],[29.2,-173.5],[26.9,-173.3],[27.5,-166.7]],height:14,estimatedHeight:!0,at:172,kind:"yes"},{id:"518287973",name:"",points:[[72.5,-161.2],[71.5,-185.9],[58.3,-185.7],[58.3,-186.8],[56.4,-186.8],[56.9,-173.8],[57.9,-173.8],[58.1,-169.4],[57,-169.4],[57.2,-164.9],[55.7,-164.8],[56.1,-156.1],[67,-156.5],[66.9,-160.9],[72.5,-161.2]],height:14,estimatedHeight:!0,at:271,kind:"yes"},{id:"518287974",name:"",points:[[72.8,-156.7],[72.5,-161.2],[66.9,-160.9],[67,-156.5],[72.8,-156.7]],height:14,estimatedHeight:!0,at:152,kind:"yes"},{id:"518287975",name:"",points:[[49,-137.7],[56.8,-138],[55.7,-164.8],[40.8,-163.7],[42.1,-137.3],[49,-137.7]],height:14,estimatedHeight:!0,at:162,kind:"yes"},{id:"518287976",name:"Museo delle illusioni",points:[[49.7,-121.2],[56.1,-121],[56.8,-138],[49,-137.7],[49.7,-121.2]],height:14,estimatedHeight:!0,at:138,kind:"yes"},{id:"518287977",name:"",points:[[56.1,-121],[74.9,-120.8],[72.8,-156.7],[56.1,-156.1],[56.6,-142.4],[63.9,-142.8],[64.1,-134.8],[56.7,-134.7],[56.1,-121]],height:14,estimatedHeight:!0,at:122,kind:"yes"},{id:"518287978",name:"",points:[[41.9,-188.9],[50.5,-189],[50.5,-186.5],[56.4,-186.8],[56.9,-173.8],[57.9,-173.8],[58.1,-169.4],[49.1,-169],[48.8,-172.7],[46.7,-172.6],[46.2,-177.9],[41.9,-188.9]],height:14,estimatedHeight:!0,at:257,kind:"yes"},{id:"542315398",name:"",points:[[-103.6,-75.2],[-93.2,-74.9],[-92.3,-60.9],[-94.4,-61],[-94.5,-59.9],[-99.2,-59.9],[-99.6,-66],[-102,-66.5],[-103.7,-66.3],[-103.6,-75.2]],height:14,estimatedHeight:!0,at:56,kind:"yes"},{id:"542315417",name:"",points:[[-100.2,-47.8],[-94.2,-48.7],[-94.5,-59.9],[-99.2,-59.9],[-99.6,-66],[-102,-66.5],[-102.1,-64.2],[-100.2,-47.8]],height:14,estimatedHeight:!0,at:43,kind:"yes"},{id:"542315423",name:"",points:[[-104.1,-47],[-100.2,-47.8],[-102.1,-64.2],[-106.1,-64.1],[-106.1,-58.6],[-104.1,-47]],height:14,estimatedHeight:!0,at:42,kind:"yes"},{id:"542315432",name:"",points:[[-94.2,-48.7],[-82.9,-50.3],[-81.7,-60.8],[-87.7,-60.7],[-87.7,-66.5],[-92.6,-66.7],[-92.3,-60.9],[-94.4,-61],[-94.2,-48.7]],height:13.2,estimatedHeight:!1,at:56,kind:"yes"},{id:"542316319",name:"",points:[[-48.8,-269.5],[-58.7,-266.2],[-58.2,-259.5],[-56.7,-259.5],[-56.7,-236.6],[-46.3,-237.5],[-46.9,-260],[-45.7,-260.2],[-48.8,-269.5]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316320",name:"",points:[[-36.3,-274.4],[-30.2,-276.8],[-17.6,-262.4],[-22.5,-258.3],[-30.5,-258.1],[-30.7,-262.1],[-32.1,-261.9],[-36.3,-274.4]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316321",name:"",points:[[-17.6,-262.4],[-8.6,-251.5],[-6.1,-243.4],[-30.1,-243.4],[-30.5,-258.1],[-22.5,-258.3],[-17.6,-262.4]],height:9.899999999999999,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316323",name:"",points:[[-15.1,-187.1],[2.3,-186.9],[.7,-201.8],[-2.3,-201.8],[-5.1,-223.5],[-10.7,-223.3],[-10.7,-221.5],[-11.4,-221.6],[-11.5,-217.6],[-19.6,-217.5],[-19.8,-198.7],[-15.1,-196.2],[-15.1,-187.1]],height:14,estimatedHeight:!0,at:203,kind:"yes"},{id:"542316328",name:"",points:[[-48.8,-269.5],[-45.7,-260.2],[-32.1,-261.9],[-36.3,-274.4],[-48.8,-269.5]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316331",name:"",points:[[-71.8,-263.2],[-77.9,-262.9],[-78.3,-235.8],[-69.6,-236.4],[-71.8,-263.2]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"675879822",name:"",points:[[322.8,-214.8],[318.7,-212.4],[322.9,-207.8],[326.9,-208.1],[322.8,-214.8]],height:9.899999999999999,estimatedHeight:!1,at:531,kind:"apartments"},{id:"675886588",name:"",points:[[30.9,-323.8],[30.6,-324.9],[35.7,-326.3],[36.1,-325.3],[30.9,-323.8]],height:14,estimatedHeight:!0,at:259,kind:"yes"},{id:"675886591",name:"",points:[[35.1,-309.1],[30.9,-323.8],[36.1,-325.3],[35.7,-326.3],[38,-327],[42.5,-311.2],[35.1,-309.1]],height:14,estimatedHeight:!0,at:262,kind:"yes"},{id:"686161423",name:"",points:[[659.5,-301],[663.7,-302.1],[659.9,-312.1],[656.1,-310.9],[659.5,-301]],height:14,estimatedHeight:!0,at:883,kind:"yes"},{id:"686161424",name:"",points:[[655.5,-300],[650,-315.5],[645.4,-314.1],[650.4,-298.7],[655.5,-300]],height:14,estimatedHeight:!0,at:875,kind:"yes"},{id:"686161425",name:"",points:[[650,-315.5],[647.7,-321.7],[646.3,-321.2],[647.1,-318.2],[644.3,-317.3],[645.4,-314.1],[650,-315.5]],height:14,estimatedHeight:!0,at:874,kind:"yes"},{id:"756472868",name:"",points:[[-73.9,53.5],[-68.4,53.3],[-64.5,57.4],[-64.4,62.6],[-68.4,67.2],[-73.6,67.5],[-77.7,63.4],[-77.8,57.8],[-73.9,53.5]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"778074889",name:"",points:[[754.3,-642],[754.4,-634.6],[776.8,-635.1],[776.7,-642.8],[754.3,-642]],height:14,estimatedHeight:!0,at:1465,kind:"yes"},{id:"778074900",name:"",points:[[726.8,-641],[727,-634.1],[748.3,-634.8],[748,-641.8],[726.8,-641]],height:14,estimatedHeight:!0,at:1479,kind:"yes"},{id:"780143567",name:"",points:[[1006.6,-685.6],[1003.5,-712.8],[1016.9,-714.2],[1019.9,-687.1],[1006.6,-685.6]],height:14,estimatedHeight:!0,at:1689,kind:"yes"},{id:"780143569",name:"Caserma Baldisserra",points:[[1006.4,-687.1],[981.8,-684.3],[978.9,-710],[1003.5,-712.8],[1004.4,-704.9],[986.6,-702.9],[987.8,-692.6],[1005.5,-694.6],[1006.4,-687.1]],height:14,estimatedHeight:!0,at:1676,kind:"yes"},{id:"780143573",name:"",points:[[961.4,-680.6],[958.5,-707.6],[978.9,-710],[982,-682.9],[961.4,-680.6]],height:14,estimatedHeight:!0,at:1651,kind:"yes"},{id:"780143575",name:"",points:[[1030.3,-601],[1035.4,-685.5],[1056.9,-684.2],[1051.7,-599.8],[1030.3,-601]],height:14,estimatedHeight:!0,at:1706,kind:"yes"},{id:"780143585",name:"",points:[[1065.7,-689.6],[1035.6,-691.5],[1037.1,-716.6],[1043.2,-716.6],[1046.4,-716.3],[1049.6,-715.6],[1052.3,-714.7],[1055.2,-712.9],[1059.9,-708.1],[1061.7,-705.1],[1065.3,-695.4],[1065.7,-689.6]],height:14,estimatedHeight:!0,at:1710,kind:"yes"},{id:"780143587",name:"",points:[[892.3,-654.4],[920,-586.4],[914.7,-584.2],[886.4,-651.9],[892.3,-654.4]],height:14,estimatedHeight:!0,at:1340,kind:"yes"},{id:"780143588",name:"",points:[[945.8,-588.2],[926.2,-579.9],[893.4,-658],[912.9,-666.3],[945.8,-588.2]],height:14,estimatedHeight:!0,at:1332,kind:"yes"},{id:"780143590",name:"",points:[[911.2,-671.8],[888.3,-662],[884.2,-671.6],[887.6,-673],[882.9,-684.1],[902.4,-692.4],[911.2,-671.8]],height:14,estimatedHeight:!0,at:1418,kind:"yes"},{id:"780143591",name:"",points:[[950.4,-576],[982.6,-497.8],[963.6,-489.9],[931.3,-568.2],[950.4,-576]],height:14,estimatedHeight:!0,at:1234,kind:"yes"},{id:"780143593",name:"",points:[[922.2,-566.2],[926.7,-568.1],[960.4,-486.3],[956.5,-484.3],[922.2,-566.2]],height:14,estimatedHeight:!0,at:1232,kind:"yes"},{id:"780143594",name:"",points:[[923.2,-675.8],[919.9,-703.3],[933.4,-705],[936.6,-677.4],[923.2,-675.8]],height:14,estimatedHeight:!0,at:1605,kind:"yes"},{id:"780143595",name:"Comando 6°Battaglione Carabinieri Toscana",points:[[936.5,-678.8],[935.7,-685.7],[953.3,-687.7],[952,-698.7],[934.4,-696.6],[933.4,-705],[958.5,-707.6],[961.3,-681.6],[936.5,-678.8]],height:14,estimatedHeight:!0,at:1630,kind:"yes"},{id:"780143596",name:"",points:[[1049.2,-559],[1045.5,-503.5],[1024,-505],[1029.7,-590.3],[1051.1,-589.2],[1049.2,-559]],height:14,estimatedHeight:!0,at:1225,kind:"yes"},{id:"780143598",name:"",points:[[1035.7,-494.5],[1049.8,-496.8],[1053.4,-474.5],[1039.3,-472.3],[1035.7,-494.5]],height:14,estimatedHeight:!0,at:1199,kind:"yes"},{id:"780297788",name:"",points:[[765.6,-306.3],[762.1,-320.2],[744.9,-315.9],[748.3,-302.7],[754.5,-304.2],[755.6,-299.7],[766.5,-302.5],[765.6,-306.3]],height:14,estimatedHeight:!0,at:966,kind:"apartments"},{id:"781515669",name:"",points:[[412.1,-338.2],[402.3,-334.5],[406.9,-322.2],[416.7,-326],[412.1,-338.2]],height:14,estimatedHeight:!0,at:642,kind:"yes"},{id:"781515670",name:"",points:[[406.9,-322.2],[416.7,-326],[425,-300.5],[415.9,-297.6],[406.9,-322.2]],height:14,estimatedHeight:!0,at:644,kind:"yes"},{id:"951519923",name:"La Habana",points:[[891.2,-743.9],[890.7,-746.7],[901.4,-747.9],[900.1,-756.9],[903.9,-757.6],[905.4,-748.3],[925,-750.4],[923.5,-759.3],[927.2,-759.7],[929,-747.9],[891.2,-743.9]],height:14,estimatedHeight:!0,at:1604,kind:"yes"},{id:"1302843770",name:"",points:[[830.9,-291.9],[845.6,-295.8],[840.4,-316.6],[825.6,-312.6],[830.9,-291.9]],height:4,estimatedHeight:!1,at:1043,kind:"yes"}],xm=[{id:"307416178",points:[[-400,-538],[-267,-600.6],[29.5,-764.9],[77.8,-778.1],[98.8,-775.4],[149.5,-759.9],[243.1,-756.8],[338.6,-757],[387.8,-754.1],[470.7,-759.8],[496.5,-762.7],[524.4,-765.4],[556.7,-769],[596.2,-776.3],[631,-788.8],[642.7,-794.9],[664.4,-810.8],[678.8,-822.1],[683.2,-826.9],[690.7,-834.5],[693.8,-842],[964.2,-899.1],[1077.9,-921.5],[1150.7,-932.3],[1296.3,-928.8],[1483.5,-928.8],[1483.7,-926.9],[1520.8,-929.9],[1521.6,-926.1],[1533.3,-932.6],[1716.3,-930.6],[1800,-920.5],[1800,-832.1],[1711.2,-839.5],[1591.4,-840.5],[1228.7,-837.1],[1089.4,-828.5],[1064.8,-827.7],[1017,-819.8],[978.4,-809.1],[938.8,-797],[886.2,-775.5],[865.5,-755.2],[849.3,-754.6],[839.2,-758.7],[831,-758.5],[809.1,-738.4],[802.2,-734.1],[712.2,-719.5],[429.2,-681.1],[336.4,-671.2],[158.2,-650.4],[97.5,-646.1],[81.3,-643.7],[52.8,-641.8],[22.7,-631.3],[-53.4,-616.1],[-68.3,-603.4],[-152.7,-578],[-163.3,-572.9],[-191.7,-560.1],[-208,-552.3],[-215.3,-549.7],[-232.2,-540.9],[-244,-534.6],[-265.8,-522],[-288.4,-499.6],[-400,-441]]}],ym=[{id:"1049963747",coordinates:[11.2684906,43.766798],at:1419,signals:!1,markings:"zebra"},{id:"1049963796",coordinates:[11.2695328,43.7686018],at:1188,signals:!0,markings:"unknown"},{id:"4703737960",coordinates:[11.2605443,43.7704112],at:437,signals:!1,markings:"yes"},{id:"4703737963",coordinates:[11.2614477,43.7702563],at:512,signals:!0,markings:"traffic_signals"},{id:"4703737994",coordinates:[11.2615039,43.7701951],at:518,signals:!0,markings:"traffic_signals"},{id:"5052873900",coordinates:[11.2683242,43.7688384],at:1087,signals:!1,markings:"zebra"},{id:"5052873903",coordinates:[11.2679052,43.7688854],at:1053,signals:!1,markings:"unknown"},{id:"6118955764",coordinates:[11.2742321,43.765732],at:1993,signals:!1,markings:"unknown"},{id:"6306728160",coordinates:[11.257896,43.7709346],at:184,signals:!1,markings:"yes"},{id:"6306728922",coordinates:[11.257837,43.7725371],at:5,signals:!1,markings:"uncontrolled;marked"},{id:"6329692667",coordinates:[11.2616313,43.7702213],at:527,signals:!0,markings:"traffic_signals"},{id:"7047528508",coordinates:[11.2620954,43.7701564],at:565,signals:!1,markings:"unknown"},{id:"7047528509",coordinates:[11.2654904,43.7694131],at:850,signals:!1,markings:"zebra"},{id:"7047528534",coordinates:[11.2620162,43.7701085],at:560,signals:!1,markings:"unknown"},{id:"7047528556",coordinates:[11.2654207,43.7694105],at:845,signals:!1,markings:"zebra"},{id:"7047528567",coordinates:[11.2642784,43.769658],at:749,signals:!1,markings:"unknown"},{id:"7047528582",coordinates:[11.2638071,43.7697399],at:710,signals:!1,markings:"no"},{id:"7047539292",coordinates:[11.2636017,43.7697843],at:693,signals:!1,markings:"unknown"},{id:"7047539294",coordinates:[11.262743,43.7699584],at:621,signals:!1,markings:"no"},{id:"7221154458",coordinates:[11.2637339,43.769794],at:703,signals:!1,markings:"unknown"},{id:"7221154474",coordinates:[11.2627688,43.7700071],at:622,signals:!1,markings:"unknown"},{id:"7227925336",coordinates:[11.2579232,43.7715172],at:119,signals:!1,markings:"uncontrolled"},{id:"7227925358",coordinates:[11.257908,43.7725738],at:1,signals:!1,markings:"zebra"},{id:"7284475720",coordinates:[11.2694997,43.7686077],at:1185,signals:!1,markings:"zebra"},{id:"7294708535",coordinates:[11.264288,43.7696376],at:751,signals:!1,markings:"no"},{id:"7294708553",coordinates:[11.2606148,43.7704222],at:442,signals:!1,markings:"yes"},{id:"7294708569",coordinates:[11.2599292,43.7704832],at:387,signals:!1,markings:"unknown"},{id:"7294710015",coordinates:[11.2605869,43.7703895],at:441,signals:!1,markings:"yes"},{id:"8243813901",coordinates:[11.2579148,43.7706138],at:224,signals:!1,markings:"yes"},{id:"9935368966",coordinates:[11.2602673,43.7704487],at:415,signals:!1,markings:"yes"},{id:"9935368969",coordinates:[11.258715,43.770582],at:289,signals:!1,markings:"yes"},{id:"9935368970",coordinates:[11.2587621,43.7705541],at:293,signals:!1,markings:"yes"},{id:"9935368971",coordinates:[11.2586561,43.770562],at:284,signals:!1,markings:"yes"},{id:"9935368973",coordinates:[11.2578905,43.7708909],at:188,signals:!1,markings:"yes"},{id:"9935368975",coordinates:[11.2578938,43.7709137],at:186,signals:!1,markings:"yes"}],ac={buildings:vm,water:xm,crossings:ym},yd=Er.distanceMeters,rc=ac,Mm=(n,t)=>({x:(n-11.257831)*80300,z:-(t-43.772579)*111195}),wi=Er.geometry.coordinates.map(([n,t])=>Mm(n,t)),Un=[0];for(let n=1;n<wi.length;n++)Un.push(Un[n-1]+Math.hypot(wi[n].x-wi[n-1].x,wi[n].z-wi[n-1].z));const Sm=Un[Un.length-1]/yd;function po(n){const t=n*Sm;let e=0,i=Un.length-1;for(;i-e>1;){const o=e+i>>1;Un[o]<=t?e=o:i=o}const s=wi[e],a=wi[i],r=(t-Un[e])/(Un[i]-Un[e]||1);return{x:s.x+(a.x-s.x)*r,z:s.z+(a.z-s.z)*r}}function Ci(n){const t=po(n),e=po(n-5),i=po(n+5);return{...t,heading:Math.atan2(-(i.x-e.x),-(i.z-e.z))}}function Md(n){let t=0;for(const e of Er.streets)if(t+=e.distanceMeters,n<t)return e.name;return"Lungarno del Tempio"}const oc=ac.crossings.filter(n=>n.markings!=="no"&&n.markings!=="unknown").map(n=>({id:n.id,at:n.at,signal:n.signals,source:"OpenStreetMap"}));for(const n of Er.trafficSignals)oc.push({id:`signal-${n.id}`,at:n.approximateDistanceMeters,signal:!0,source:"Comune di Firenze"});for(const n of ac.crossings.filter(t=>t.signals))oc.push({id:n.id,at:n.at,signal:!0,source:"OpenStreetMap"});const Ws=[];for(const n of oc.sort((t,e)=>t.at-e.at)){const t=Ws[Ws.length-1];t&&n.at-t.at<16?(t.signal||(t.signal=n.signal),n.source==="Comune di Firenze"&&(t.at=n.at,t.source=n.source)):Ws.push({...n})}const Fa=Math.PI*2;let Sd="city";function Em(n){Sd=n}function he(){return Sd==="florence"}function ze(n){if(he()){const s=Math.max(0,Math.min(1,(n-1170)/80));return{halfWidth:2.8+1.6*s,laneSpacing:1.3+.9*s,lanes:[0,2],narrow:1,plaza:!1,church:!1}}const t=(n%1800+1800)%1800,e=s=>{const a=Math.max(0,Math.min(1,s));return a*a*(3-2*a)},i=t<300?1:t<420?1-e((t-300)/120):t>1720?e((t-1720)/80):0;return{halfWidth:5.1-1.9*i,laneSpacing:2.4-.9*i,lanes:i>.5?[0,2]:[0,1,2],narrow:i,plaza:t>=110&&t<=180,church:Math.abs(t-150)<.1}}function hr(n){if(he())return Ci(n);const t=n*Fa/600,e=n*Fa/900,i=36*Math.sin(t)+18*Math.sin(e),s=36*Fa/600*Math.cos(t)+18*Fa/900*Math.cos(e);return{x:i,z:-n,heading:-Math.atan(s)}}function gn(n,t,e){const i=hr(n),s=hr(e),a=i.x-s.x+t*Math.cos(i.heading),r=i.z-s.z-t*Math.sin(i.heading),o=Math.cos(s.heading),c=Math.sin(s.heading);return{x:o*a-c*r,z:c*a+o*r-5,heading:i.heading-s.heading}}class wm{constructor(){Yt(this,"crossings",[])}reset(t=Ws,e=!1,i=()=>!0){this.crossings=t.map((s,a)=>{const r=(!e||a%2===1)&&i(s),o=!r&&!s.signal;return{...s,hasPedestrians:r,phase:o?"clear":"waiting",elapsed:0,progress:0,light:s.signal?"red":"green",served:o}})}update(t,e,i,s=!1){for(const a of this.crossings){if(a.served||a.at-t>70)continue;const r=Math.max(0,a.at-7);a.phase==="waiting"&&t>=r-(s?25:.25)&&e<.15&&(a.phase="crossing"),a.phase==="crossing"&&(a.elapsed+=i,a.progress=Math.min(1,a.elapsed/6),a.elapsed>=(a.hasPedestrians===!1?2:7)&&(a.phase="clear",a.light="green",a.served=!0))}}next(t){return this.crossings.find(e=>!e.served&&e.at>=t-1)}limitSpeed(t,e,i){const s=this.next(t);if(!s)return e;const a=Math.max(0,s.at-7-t);return a<.04?0:Math.min(e,Math.sqrt(2*6*a),a/Math.max(i,.001))}message(t){const e=this.next(t);return!e||e.at-t>65?"":e.phase==="crossing"?e.hasPedestrians===!1?"Semaforo rosso · attendi il verde":"Pedoni in attraversamento · attendi":e.signal?"Semaforo rosso · frenata assistita":"Strisce pedonali · lascia passare"}}const Ed=rc.buildings.map(n=>n.points.map(t=>({x:t[0],z:-t[1]}))),No=new Map;Ed.forEach((n,t)=>{const e=n.map(s=>s.x),i=n.map(s=>s.z);for(let s=Math.floor(Math.min(...e)/20);s<=Math.floor(Math.max(...e)/20);s++)for(let a=Math.floor(Math.min(...i)/20);a<=Math.floor(Math.max(...i)/20);a++){const r=`${s}:${a}`,o=No.get(r)||[];o.push(t),No.set(r,o)}});function bm(n,t,e){const i=e.x-t.x,s=e.z-t.z,a=Math.max(0,Math.min(1,((n.x-t.x)*i+(n.z-t.z)*s)/(i*i+s*s||1)));return Math.hypot(n.x-t.x-a*i,n.z-t.z-a*s)}function wd(n,t=.35){const e=new Set;for(let i=Math.floor((n.x-t)/20);i<=Math.floor((n.x+t)/20);i++)for(let s=Math.floor((n.z-t)/20);s<=Math.floor((n.z+t)/20);s++)for(const a of No.get(`${i}:${s}`)||[])e.add(a);for(const i of e){const s=Ed[i];let a=!1;for(let r=0,o=s.length-1;r<s.length;o=r++){const c=s[r],h=s[o];if(bm(n,c,h)<t)return!1;c.z>n.z!=h.z>n.z&&n.x<(h.x-c.x)*(n.z-c.z)/(h.z-c.z)+c.x&&(a=!a)}if(a)return!1}return!0}function bd(n,t){const e=Ci(n);return{x:e.x+Math.cos(e.heading)*t,z:e.z-Math.sin(e.heading)*t}}function Ho(n,t,e){for(const i of[.55,.35,.75,1,1.25]){const s=t*(e+i);if(wd(bd(n,s),.32))return s}return null}function Td(n,t){for(const e of[0,-1,1,-2,2,-3,3,-4,4]){const i=n+e,s=Ho(i,-1,t),a=Ho(i,1,t);if(s===null||a===null)continue;let r=!0;for(const o of[-.55,0,.55])for(let c=s;c<=a;c+=.3)if(!wd(bd(i+o,c),.32)){r=!1;break}if(r)return{distance:i,left:s,right:a}}return null}function lr(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),a={},r={},o=n[0].morphTargetsRelative,c=new we;let h=0;for(let l=0;l<n.length;++l){const d=n[l];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,p,l),h+=p}}if(e){let l=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+l);l+=n[f].attributes.position.count}c.setIndex(d)}for(const l in a){const d=el(a[l]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,d)}for(const l in r){const d=r[l][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let f=0;f<d;++f){const p=[];for(let _=0;_<r[l].length;++_)p.push(r[l][_][f]);const g=el(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function el(n){let t,e,i,s=-1,a=0;for(let h=0;h<n.length;++h){const l=n[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=l.count*e}const r=new t(a),o=new Ge(r,e,i);let c=0;for(let h=0;h<n.length;++h){const l=n[h];if(l.isInterleavedBufferAttribute){const d=c/e;for(let f=0,p=l.count;f<p;f++)for(let g=0;g<e;g++){const _=l.getComponent(f,g);o.setComponent(f+d,g,_)}}else r.set(l.array,c);c+=l.count*e}return s!==void 0&&(o.gpuType=s),o}const Tm=new Ve(1,12,10),Am=new Kt(1,1,1,10),mo=new ot({color:12160112,roughness:.85}),go=new ot({color:3419174,roughness:1}),nl=[7568240,10447183,4545644,12957336].map(n=>new ot({color:n,roughness:.95})),za=new ot({color:3422781,roughness:.95});function _i(n,t,e,i,s,a,r,o){const c=new Q(Tm,t);return c.position.set(e,i,s),c.scale.set(a,r,o),c.castShadow=!0,n.add(c),c}function Ls(n,t,e,i,s){const a=new Q(Am,t);a.position.copy(e).add(i).multiplyScalar(.5),a.scale.set(s,e.distanceTo(i),s),a.quaternion.setFromUnitVectors(new P(0,1,0),i.clone().sub(e).normalize()),a.castShadow=!0,n.add(a)}const _o=new Map;function sa(n,t){const e=t%nl.length;if(n&&_o.has(e))return _o.get(e).clone(!0);const i=new jt,s=nl[e],a=n?.55:.9;_i(i,s,0,a+.28,0,.2,.3,.12),_i(i,mo,0,a+.71,-.015,.105,.135,.11),_i(i,go,0,a+.78,.016,.108,.085,.105),_i(i,za,0,a,0,.17,.12,.12);for(const c of[-1,1]){const h=new jt;h.name=c===-1?"leg-left":"leg-right",h.position.set(c*.095,a,0),i.add(h),n?(Ls(h,za,new P,new P(0,-.1,-.32),.075),Ls(h,za,new P(0,-.1,-.32),new P(0,-.5,-.32),.055),_i(h,go,0,-.51,-.39,.07,.045,.13)):(Ls(h,za,new P,new P(0,-.76,0),.065),_i(h,go,0,-.8,-.06,.07,.055,.13));const l=new jt;l.name=c===-1?"arm-left":"arm-right",l.position.set(c*.2,a+.42,0),i.add(l);const d=new P(c*.035,-.23,n?-.12:0),f=new P(c*.015,n?-.27:-.48,n?-.3:-.015);Ls(l,s,new P,d,.054),Ls(l,mo,d,f,.039),_i(l,mo,f.x,f.y,f.z,.043,.06,.035)}if(!n)return i;i.updateMatrixWorld(!0);const r=new Map;i.traverse(c=>{if(!(c instanceof Q))return;const h=c.material;r.has(h)||r.set(h,[]),r.get(h).push(c.geometry.clone().applyMatrix4(c.matrixWorld))});const o=new jt;for(const[c,h]of r){const l=lr(h);if(h.forEach(d=>d.dispose()),l){const d=new Q(l,c);d.castShadow=!0,o.add(d)}}return _o.set(e,o),o.clone(!0)}function Ad(n,t){const e=Math.sin(t*4.8)*.38;for(const[i,s]of[["leg-left",e],["leg-right",-e],["arm-left",-e*.7],["arm-right",e*.7]]){const a=n.getObjectByName(i);a&&(a.rotation.x=s)}}class Rm{constructor(t){Yt(this,"root",new jt);Yt(this,"rows",[]);Yt(this,"paths",new Map);t.add(this.root);const e=new ot({color:15657430,roughness:.9}),i=new ot({color:2698795,roughness:.7});Ws.forEach((s,a)=>{const r=new jt,o=ze(s.at).halfWidth;for(let d=-.92;d<1;d+=.2){const f=new Q(new wt(.11,.016,3.4),e);f.position.set(d,.092,0),r.add(f)}const c=new Q(new wt(2,.016,.22),e);c.position.set(0,.095,7),r.add(c);const h=[];if(s.signal)for(const d of[-1,1]){const f=new Q(new Kt(.045,.05,3.5,8),i);f.position.set(d*1.17,1.75,-2.7),r.add(f);const p=new Q(new wt(.1,1,.25),i);p.position.set(d*1.17,3,-2.7),r.add(p);for(let g=0;g<3;g++){const _=new ot({color:1844513,emissive:0}),u=new Q(new Ve(.12,10,8),_);u.scale.x=1/o,u.position.set(d*1.17,3.32-g*.3,-2.54),r.add(u),h.push(u)}}const l=[sa(!1,a),sa(!1,a+2)];for(const d of l)this.root.add(d);this.root.add(r),this.rows.push({root:r,people:l,lamps:h})})}update(t,e,i){this.root.visible=i,i&&this.rows.forEach((s,a)=>{const r=e.crossings[a];if(!r)return;const o=r.at-t>-20&&r.at-t<170;if(s.root.visible=o,s.people.forEach(f=>f.visible=o),!o)return;const c=ze(r.at).halfWidth;this.paths.has(a)||this.paths.set(a,Td(r.at,c));const h=this.paths.get(a),l=(h==null?void 0:h.distance)??r.at,d=gn(l,0,t);s.root.position.set(d.x,0,d.z),s.root.rotation.y=d.heading,s.root.scale.x=c,s.lamps.forEach((f,p)=>{const g=f.material,_=p%3===(r.light==="red"?0:2),u=p%3===0?16724003:p%3===1?16759848:3337864;g.color.setHex(_?u:2502699),g.emissive.setHex(_?u:0),g.emissiveIntensity=_?2:0}),s.people.forEach((f,p)=>{if(f.visible=o&&!!h&&r.hasPedestrians!==!1,!h||r.hasPedestrians===!1)return;const g=r.phase==="waiting"?0:r.phase==="clear"?1:Math.min(1,Math.max(0,(r.elapsed-p*.5)/6)),_=h.right+(h.left-h.right)*g,u=gn(l+(p-.5)*.9,_,t);f.position.set(u.x,g>0&&g<1?.1:.28,u.z),f.rotation.y=u.heading+Math.PI/2,Ad(f,r.phase==="crossing"?r.elapsed*1.6+p:0)})})}}const Is=new P;function je(n,t,e,i,s,a){const r=2*Math.PI*s/4,o=Math.max(a-2*s,0),c=Math.PI/4;Is.copy(t),Is[i]=0,Is.normalize();const h=.5*r/(r+o),l=1-Is.angleTo(n)/c;return Math.sign(Is[e])===1?l*h:o/(r+o)+h+h*(1-l)}class wr extends wt{constructor(t=1,e=1,i=1,s=2,a=.1){if(s=s*2+1,a=Math.min(t/2,e/2,i/2,a),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const o=new P,c=new P,h=new P(t,e,i).divideScalar(2).subScalar(a),l=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=l.length/6,g=new P,_=.5/s;for(let u=0,m=0;u<l.length;u+=3,m+=2)switch(o.fromArray(l,u),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),l[u+0]=h.x*Math.sign(o.x)+c.x*a,l[u+1]=h.y*Math.sign(o.y)+c.y*a,l[u+2]=h.z*Math.sign(o.z)+c.z*a,d[u+0]=c.x,d[u+1]=c.y,d[u+2]=c.z,Math.floor(u/p)){case 0:g.set(1,0,0),f[m+0]=je(g,c,"z","y",a,i),f[m+1]=1-je(g,c,"y","z",a,e);break;case 1:g.set(-1,0,0),f[m+0]=1-je(g,c,"z","y",a,i),f[m+1]=1-je(g,c,"y","z",a,e);break;case 2:g.set(0,1,0),f[m+0]=1-je(g,c,"x","z",a,t),f[m+1]=je(g,c,"z","x",a,i);break;case 3:g.set(0,-1,0),f[m+0]=1-je(g,c,"x","z",a,t),f[m+1]=1-je(g,c,"z","x",a,i);break;case 4:g.set(0,0,1),f[m+0]=1-je(g,c,"x","y",a,t),f[m+1]=1-je(g,c,"y","x",a,e);break;case 5:g.set(0,0,-1),f[m+0]=je(g,c,"x","y",a,t),f[m+1]=1-je(g,c,"y","x",a,e);break}}}const Cm=9,Pm=10;function Lm(n,t,e,i,s=Number.POSITIVE_INFINITY){if(t<=0)return 0;const a=i.find(o=>!o.served&&o.at>=n-1);let r=t;return a&&!a.served&&a.phase!=="clear"&&(r=Oo(n,a.at-Cm,r,e)),Number.isFinite(s)&&(r=Oo(n,s-Pm,r,e)),r}function Im(n,t,e,i,s){if(e<=0)return 0;const a=s.filter(r=>r.distance>n&&Math.abs(r.laneX-t)<1.15).reduce((r,o)=>!r||o.distance<r.distance?o:r,void 0);return a?Oo(n,a.distance-5,e,i):e}function Dm(n,t,e,i,s){return e?s.some(a=>{const r=a.distance-n;return r<4.5||r>20||Math.abs(a.laneX-t)>=1.15||a.speed>=.15?!1:Rd(a,i,s,t,0)}):!1}function Rd(n,t,e,i,s){if(s>e.length)return!1;const a=t.find(r=>!r.served&&r.at>=n.distance-1);return a&&a.at-n.distance<=25&&Math.abs(a.at-9-n.distance)<=.5?!0:e.some(r=>r.distance>n.distance&&Math.abs(r.laneX-i)<1.15&&r.distance-n.distance<=11&&r.speed<.15&&Rd(r,t,e,i,s+1))}function Oo(n,t,e,i){const s=t-n;return s<=0?0:Math.min(e,Math.sqrt(2*5.5*s),s/Math.max(i,.016))}const an=new ot({color:14213598,metalness:.86,roughness:.22}),Um=new ot({color:2106406,metalness:.02,roughness:.92}),vo=new ot({color:10471881,metalness:.15,roughness:.19,transparent:!0,opacity:.72}),il=new ot({color:2239533,roughness:.72}),km=new ot({color:16777215,metalness:.38,roughness:.29}),Nm=new Kt(.13,.13,.17,20),Hm=(()=>{const n=new ti,t=.6,e=1,i=.16;n.moveTo(-t+i,-e),n.lineTo(t-i,-e),n.quadraticCurveTo(t,-e,t,-e+i),n.lineTo(t,e-i),n.quadraticCurveTo(t,e,t-i,e),n.lineTo(-t+i,e),n.quadraticCurveTo(-t,e,-t,e-i),n.lineTo(-t,-e+i),n.quadraticCurveTo(-t,-e,-t+i,-e);const s=new Mr(n,{depth:.35,bevelEnabled:!0,bevelSegments:2,bevelSize:.045,bevelThickness:.035,curveSegments:5});return s.rotateX(-Math.PI/2),s.translate(0,-.175,0),s})(),Om=new Kt(.018,.022,.24,8),Fm=new Ve(.105,16,10),zm=new ot({color:11451578,metalness:.8,roughness:.27}),Bm=new oi(.135,.018,6,18),Gm=new on(.72,.31),Vm=new on(.68,.27),Wm=new wt(.018,.27,.58),Xm=new wt(.012,.24,.012),qm=new wt(.035,.025,.11),sl=new wt(1.12,.075,.12),Ym=new wt(.34,.12,.025),$m=new Ve(.045,12,8),Zm=new wt(.3,.09,.018),Jm=new ot({color:15328726,roughness:.6}),Km=new oi(.12,.025,8,24),jm=new Kt(.035,.045,.58,10),Qm=new Kt(.018,.018,.78,8),t0=new wr(.42,.035,.44,2,.015),e0=new Kt(.045,.045,.2,10),n0=new oi(.265,.035,7,24,Math.PI),al=new Map;function Ce(n,t,e,i){const s=new Q(n,t);return s.position.copy(e),s.name=i,s.castShadow=!0,s.receiveShadow=!0,s}function Fo(n,t,e,i,s){const a=Ce(Om,an,new P(t,e,i),`${s}-stem`);a.rotation.z=t<0?.38:-.38;const r=Ce(Fm,an,new P(t*1.22,e+.11,i-.04),`${s}-mirror`);r.scale.set(1.25,.78,.42),n.add(a,r)}function i0(n){const t=n.children.find(e=>!(e instanceof Q)||!(e.geometry instanceof wt)?!1:Math.abs(e.position.y-.4)<.02);t&&(t.geometry.dispose(),t.geometry=Hm,t.material instanceof ot&&(t.material.roughness=.3,t.material.metalness=.34))}function Cd(n){if(n.userData.vehicleDetailsEnhanced)return;n.userData.vehicleDetailsEnhanced=!0,i0(n),n.traverse(c=>{if(!(c instanceof Q))return;const h=Array.isArray(c.material)?c.material:[c.material];for(const l of h)l instanceof ot&&l.roughness>.65&&c.position.y>.25&&(l.roughness=.3,l.metalness=.34)});const t=Ce(Gm,vo,new P(0,.76,-.515),"car-windshield");t.rotation.set(.24,Math.PI,0),t.castShadow=!1;const e=Ce(Vm,vo,new P(0,.76,.315),"car-rear-glass");e.rotation.x=-.24,e.castShadow=!1,n.add(t,e);for(const c of[-1,1]){const h=Ce(Wm,vo,new P(c*.458,.77,-.1),`car-side-glass-${c}`);h.castShadow=!1,Fo(n,c*.57,.78,-.39,`car-mirror-${c}`);const l=Ce(Xm,il,new P(c*.603,.42,.02),`car-door-seam-${c}`),d=Ce(qm,an,new P(c*.611,.49,-.16),`car-door-handle-${c}`);n.add(h,l,d)}const i=Ce(sl,an,new P(0,.24,-1.01),"car-front-bumper"),s=Ce(sl,an,new P(0,.24,1.01),"car-rear-bumper"),a=Ce(Ym,il,new P(0,.36,-1.025),"car-grille"),r=Ce($m,an,new P(0,.37,-1.045),"car-grille-badge"),o=Ce(Zm,Jm,new P(0,.34,1.024),"car-rear-plate");n.add(i,s,a,r,o);for(const c of n.userData.wheels??[]){const h=Ce(Nm,zm,c.position.clone(),"car-wheel-hub");h.rotation.z=Math.PI/2,h.scale.y=1.2;const l=Ce(Bm,an,c.position.clone(),"car-wheel-hub-ring");l.rotation.y=Math.PI/2,l.scale.x=1.2,n.add(h,l)}}function s0(n){if(n.userData.vehicleDetailsEnhanced)return;n.userData.vehicleDetailsEnhanced=!0;for(const o of n.children)if(o instanceof Q){if(o.geometry instanceof wt){const{width:c,height:h,depth:l}=o.geometry.parameters,d=Math.min(c,h,l)*.22,f=`${c}:${h}:${l}:${d}`;let p=al.get(f);p||(p=new wr(c,h,l,3,d),al.set(f,p)),o.geometry.dispose(),o.geometry=p}o.material instanceof ot&&o.position.y>.48&&o.position.y<1.4&&o.position.z<.6&&o.material.roughness<.5&&(o.material.roughness=.28,o.material.metalness=.42)}const t=Ce(Km,an,new P(0,1.2,-.595),"scooter-headlamp-bezel"),e=new jt;for(const o of[-1,1]){const c=Ce(jm,an,new P(o*.09,.59,-.55),`scooter-fork-${o}`);c.rotation.x=-.13,e.add(c)}const i=new Q(Qm,an);i.rotation.x=Math.PI/2,i.position.set(.31,.7,.47),i.name="scooter-side-rail";const s=new Q(t0,an);s.position.set(0,1.08,.69),s.name="scooter-rear-carrier";const a=new Q(e0,Um);a.rotation.z=Math.PI/2,a.position.set(.34,1.18,-.45),a.name="scooter-handle-grips",n.add(t,e,i,s,a),Fo(n,-.38,1.27,-.45,"scooter-mirror-left"),Fo(n,.38,1.27,-.45,"scooter-mirror-right");const r=Ce(n0,km,new P(0,.34,-.55),"scooter-front-fender");r.rotation.y=Math.PI/2,r.rotation.z=Math.PI,n.add(r)}const rl=[5406066,13153420,10182474,6847633,14538176];function a0(n){const t=new jt,e=new ot({color:rl[n%rl.length],roughness:.3,metalness:.34}),i=new ot({color:2504762,roughness:.4}),s=new ot({color:1514267,roughness:.88}),a=new Q(new wt(1.2,.35,2),e);a.position.y=.4,a.castShadow=!0,t.add(a);const r=new Q(new wr(.9,.4,.8,3,.1),i);r.position.set(0,.75,-.1),r.castShadow=!0,t.add(r);const o=[];for(const[l,d]of[[-.5,-.8],[.5,-.8],[-.5,.8],[.5,.8]]){const f=new Q(new Kt(.22,.22,.15,12),s);f.rotation.z=Math.PI/2,f.position.set(l,.22,d),f.scale.z=.56,f.castShadow=!0,o.push(f),t.add(f)}t.userData.wheels=o;const c=new ot({color:16776145,emissive:8943428,emissiveIntensity:.5}),h=new ot({color:14105650,emissive:5574668,emissiveIntensity:.5});for(const l of[-.32,.32]){const d=new Q(new wt(.18,.08,.04),c);d.position.set(l,.4,-1.02),t.add(d);const f=new Q(new wt(.2,.1,.045),h);f.position.set(l,.42,1.02),t.add(f)}return Cd(t),t.scale.set(1.375,1.45,1.8),t}class r0{constructor(t){Yt(this,"root",new jt);Yt(this,"cars",[]);Yt(this,"initialized",!1);Yt(this,"playerStopped",!1);t.add(this.root),this.cars=Array.from({length:4},(e,i)=>({mesh:a0(i),distance:0,speed:10.5+i*.7,phase:i*1.7,laneX:0,currentSpeed:0}));for(const e of this.cars)this.root.add(e.mesh)}reset(){this.initialized=!1,this.playerStopped=!1;for(const t of this.cars)t.distance=0,t.phase=0,t.currentSpeed=0}limitPlayerSpeed(t,e,i,s){const a=Im(t,e,i,s,this.carSnapshots());return this.playerStopped=a<.15,a}isQueued(t,e,i){return Dm(t,e,this.playerStopped,i.crossings,this.carSnapshots())}update(t,e,i,s){this.root.visible=s,this.initialized||(this.cars.forEach((r,o)=>{r.distance=t+30+o*34}),this.initialized=!0);const a=Math.min(Math.max(e,0),.1);this.cars.forEach((r,o)=>{r.laneX=this.laneFor(r.distance,o)});for(const[r,o]of this.cars.entries()){const c=this.cars.filter(p=>p!==o&&p.distance>o.distance&&Math.abs(p.laneX-o.laneX)<1.15).reduce((p,g)=>!p||g.distance<p.distance?g:p,void 0),h=Lm(o.distance,o.speed,a,i.crossings,c==null?void 0:c.distance);o.currentSpeed=h,o.distance+=h*a,o.distance<t-75&&(o.distance=t+250+Math.random()*110,o.currentSpeed=o.speed);const l=this.laneFor(o.distance,r);o.laneX=l;const d=gn(o.distance,l,t);o.mesh.position.set(d.x,0,d.z),o.mesh.rotation.y=d.heading;const f=h>0?h:0;o.phase+=f*a*1.8;for(const p of o.mesh.userData.wheels)p.rotation.x=o.phase;o.mesh.position.y=Math.sin(o.phase*2)*.008,o.mesh.visible=s&&d.z>-145&&d.z<24}}carSnapshots(){return this.cars.map(t=>({distance:t.distance,laneX:t.laneX,speed:t.currentSpeed}))}laneFor(t,e){const i=ze(t);return Math.min(1.05,i.halfWidth*.42)*(e%2?-1:1)}}const Pd=(n,t)=>{if(!Number.isFinite(n)||n<=0)throw new RangeError(`${t} must be a finite positive number`)};function o0(n){if(!n.id.trim())throw new Error("Circuit id cannot be empty");if(!n.name.trim())throw new Error("Circuit name cannot be empty");if(n.districts.length===0)throw new Error("Circuit requires at least one district");let t=0;const e=new Set,i=n.districts.map((s,a)=>{if(Pd(s.length,`District ${s.id} length`),!s.id.trim()||!s.name.trim())throw new Error(`District at index ${a} requires an id and name`);if(!s.milestone.id.trim()||!s.milestone.label.trim())throw new Error(`District ${s.id} requires a milestone`);if(e.has(s.milestone.id))throw new Error(`Duplicate milestone id: ${s.milestone.id}`);e.add(s.milestone.id);const r={...s.milestone,distance:t,districtId:s.id};return t+=s.length,Object.freeze(r)});return Object.freeze({id:n.id,name:n.name,districts:Object.freeze([...n.districts]),totalLength:t,milestones:Object.freeze(i)})}function cc(n,t=c0){if(!Number.isFinite(n)||n<0)throw new RangeError("Distance must be a finite non-negative number");Pd(t.totalLength,"Circuit total length");const e=Math.floor(n/t.totalLength),i=n%t.totalLength;let s=0;for(let a=0;a<t.districts.length;a+=1){const r=t.districts[a],o=s+r.length;if(i<o){const c=i-s;return{absoluteDistance:n,lap:e,lapDistance:i,districtIndex:a,district:r,districtDistance:c,districtProgress:c/r.length,currentMilestone:t.milestones[a],nextMilestone:t.milestones[(a+1)%t.milestones.length]}}s=o}throw new Error("Circuit districts do not cover the declared total length")}const c0=o0({id:"vespa-city-loop",name:"Giro della Citta",districts:[{id:"historic-center",name:"Centro storico",length:420,palette:{sky:"#79C8E8",road:"#454B56",roadside:"#D99863",accent:"#F6C453"},decorations:["facciate","balconi","piazzetta","lampioni"],difficulty:{trafficMultiplier:.85,hazardMultiplier:.8,speedMultiplier:.92},milestone:{id:"old-town-gate",label:"Porta del centro"}},{id:"seafront",name:"Lungomare",length:520,palette:{sky:"#79C8E8",road:"#505966",roadside:"#E9D28F",accent:"#177E78"},decorations:["mare","spiaggia","palme","cabine"],difficulty:{trafficMultiplier:.9,hazardMultiplier:.85,speedMultiplier:1.06},milestone:{id:"seafront-promenade",label:"Passeggiata sul mare"}},{id:"market",name:"Mercato",length:360,palette:{sky:"#74BED9",road:"#424A54",roadside:"#C96F4A",accent:"#F05A47"},decorations:["bancarelle","tende","cassette","insegne"],difficulty:{trafficMultiplier:1.12,hazardMultiplier:1.15,speedMultiplier:.94},milestone:{id:"market-arches",label:"Archi del mercato"}},{id:"hillside",name:"Collina",length:500,palette:{sky:"#82BBD4",road:"#3F4650",roadside:"#788C5C",accent:"#FFF5DD"},decorations:["cipressi","muretti","ville","belvedere"],difficulty:{trafficMultiplier:.95,hazardMultiplier:1.08,speedMultiplier:1.02},milestone:{id:"hilltop-view",label:"Belvedere"}}]});function Ds(n){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");let i=1947;n(e,()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296);const a=new xr(t);return a.wrapS=a.wrapT=Js,a.colorSpace=He,a.anisotropy=4,a}function Ba(n,t,e,i){for(let s=0;s<e;s++)n.fillStyle=`rgba(${t()>.5?"255,249,229":"20,22,21"},${t()*i})`,n.fillRect(t()*512,t()*512,1+t()*2,1+t()*2)}let h0;function We(){return h0??(h0=l0())}function l0(){const n=Ds((a,r)=>{a.fillStyle="#737675",a.fillRect(0,0,512,512),Ba(a,r,62e3,.4),a.strokeStyle="rgba(25,28,28,.2)",a.lineWidth=1,a.beginPath(),a.moveTo(65,0),a.lineTo(73,88),a.lineTo(55,160),a.lineTo(80,209),a.stroke()});n.repeat.set(2,4);const t=Ds((a,r)=>{a.fillStyle="#c6bca5",a.fillRect(0,0,512,512);for(let o=0;o<8;o++)for(let c=-1;c<5;c++){const h=c*128+o%2*64,l=Math.floor(r()*15);a.fillStyle=`rgb(${192+l},${182+l},${162+l})`,a.fillRect(h+2,o*64+2,124,60)}Ba(a,r,26e3,.18)});t.repeat.set(1,8);const e=Ds((a,r)=>{a.fillStyle="#e3cb9f",a.fillRect(0,0,512,512),Ba(a,r,44e3,.22);for(let o=0;o<24;o++)a.strokeStyle="rgba(255,245,210,.13)",a.beginPath(),a.moveTo(0,o*24),a.bezierCurveTo(140,o*24-15,370,o*24+15,512,o*24),a.stroke()});e.repeat.set(3,2);const i=Ds((a,r)=>{a.fillStyle="#845643",a.fillRect(0,0,512,512);for(let o=0;o<512;o+=32)for(let c=0;c<512;c+=32){const h=a.createLinearGradient(c,0,c+30,0);h.addColorStop(0,"#81523f"),h.addColorStop(.5,`hsl(19 34% ${42+r()*12}%)`),h.addColorStop(1,"#654537"),a.fillStyle=h,a.fillRect(c+1,o+1,30,30)}}),s=["#d4b295","#dfd5bc","#b6c0b3","#d5bf95"].map((a,r)=>Ds((o,c)=>{o.fillStyle=a,o.fillRect(0,0,512,512),Ba(o,c,24e3,.065),o.fillStyle="rgba(68,52,34,.19)",o.fillRect(0,0,512,13),o.fillStyle="#e6dbc6",o.fillRect(0,13,512,10);for(const h of[76,332]){o.fillStyle="rgba(45,40,29,.16)",o.fillRect(h-22,88,158,315),o.fillStyle="#eee1c7",o.fillRect(h-12,78,126,298),o.fillStyle="#253c40",o.fillRect(h,90,102,270);const l=o.createLinearGradient(h,90,h+102,350);l.addColorStop(0,"#7b979c"),l.addColorStop(.45,"#425f64"),l.addColorStop(1,"#273c40"),o.fillStyle=l,o.fillRect(h+5,94,92,258),o.fillStyle="rgba(222,229,217,.27)",o.fillRect(h+8,99,32,238),o.fillStyle="#c3bdab",o.fillRect(h+48,92,5,266),o.fillRect(h+3,205,96,5),o.fillStyle=r===2?"#626c65":"#48675e",o.fillRect(h-42,91,27,268),o.fillRect(h+116,91,27,268),o.strokeStyle="rgba(13,37,32,.4)",o.lineWidth=2;for(let d=100;d<355;d+=12)o.beginPath(),o.moveTo(h-39,d),o.lineTo(h-18,d),o.moveTo(h+119,d),o.lineTo(h+140,d),o.stroke();o.fillStyle="#f0e5ce",o.fillRect(h-21,364,145,15),o.fillStyle="rgba(52,41,30,.25)",o.fillRect(h-17,379,140,8)}}));return{asphalt:new ot({color:7830136,map:n,bumpMap:n,bumpScale:.024,roughness:.89}),pavement:new ot({map:t,bumpMap:t,bumpScale:.018,roughness:.94}),sand:new ot({map:e,bumpMap:e,bumpScale:.035,roughness:1}),roof:new ot({map:i,bumpMap:i,bumpScale:.06,roughness:.88}),facades:s.map(a=>new ot({map:a,bumpMap:a,bumpScale:.025,roughness:.88})),stone:new ot({color:13155756,roughness:.93}),iron:new ot({color:3426628,metalness:.65,roughness:.45})}}function hc(n,t,e){const i=new wt(n,t,e),s=i.attributes.uv;for(let a=0;a<6;a++){const r=a<2?e:n;for(let o=a*4;o<a*4+4;o++)s.setXY(o,s.getX(o)*r/4,s.getY(o)*t/3)}return i}let d0;function _n(){return d0??(d0=u0())}function u0(){const n=new im;function t(c,h,l=!1){const d=n.load(new URL(`textures/florence/${c}_${h}.jpg`,document.baseURI).href);return d.wrapS=d.wrapT=Js,d.anisotropy=4,l&&(d.colorSpace=He),d}const e=t("painted_plaster_wall","Diffuse",!0),i=t("painted_plaster_wall","nor_gl"),s=new ot({map:t("medieval_blocks_05","Diffuse",!0),normalMap:t("medieval_blocks_05","nor_gl"),normalScale:new et(.6,.6),roughness:.93,side:Pe}),a=new ot({color:11973804,map:t("aerial_asphalt_01","Diffuse",!0),normalMap:t("aerial_asphalt_01","nor_gl"),normalScale:new et(.4,.4),roughness:.9}),r=[13612945,12169373,14272422,12427911].map(c=>new ot({color:c,map:e,normalMap:i,normalScale:new et(.3,.3),roughness:.92,side:Pe})),o=new ot({map:t("grass_path_2","Diffuse",!0),color:7897955,roughness:1});return{stone:s,asphalt:a,walls:r,grass:o,trim:new ot({color:11772556,roughness:.86}),glass:new ot({color:2701110,metalness:.18,roughness:.3}),wood:new ot({color:3687483,roughness:.83})}}function f0(){const n=new jt;n.name="florence-river";const t=new ti([new et(-950,-1650),new et(2400,-1650),new et(2400,1050),new et(-950,1050)]),e=_n().stone,i=[],s=Do().clone();s.onBeforeCompile=Do().onBeforeCompile,s.color.setHex(4279592),s.roughness=.4,s.metalness=0,s.envMapIntensity=.3;const a=rc.water.map(L=>L.points);for(const L of a){t.holes.push(new or(L.map(N=>new et(N[0],N[1]))));const D=new ti(L.map(N=>new et(N[0],N[1]))),A=new fs(D);A.rotateX(-Math.PI/2);const O=new Q(A,s);O.name="arno-water",O.position.y=-4.5,n.add(O);for(let N=0;N<L.length;N++){const X=L[N],Y=L[(N+1)%L.length],z=Math.hypot(Y[0]-X[0],Y[1]-X[1]);if(z<.1)continue;const j=new wt(.7,5.1,z),K=j.attributes.uv;for(let ct=0;ct<K.count;ct++)K.setXY(ct,K.getX(ct)*z/4,K.getY(ct)*2);j.rotateY(Math.atan2(Y[0]-X[0],-(Y[1]-X[1]))),j.translate((X[0]+Y[0])/2,-2,-(X[1]+Y[1])/2),i.push(j)}}const r=new fs(t);r.rotateX(-Math.PI/2);const o=new Q(r,new ot({color:9670267,roughness:1}));if(o.position.y=-.06,o.receiveShadow=!0,n.add(o),i.length){const L=lr(i);i.forEach(A=>A.dispose());const D=new Q(L,e);D.castShadow=!0,D.receiveShadow=!0,n.add(D)}function c(L){const D=Ci(L),A=Math.cos(D.heading),O=-Math.sin(D.heading);let N=1/0;for(const X of a)for(let Y=0;Y<X.length;Y++){const z=X[Y],j=X[(Y+1)%X.length],K=j[0]-z[0],ct=-(j[1]-z[1]),Rt=z[0]-D.x,qt=-z[1]-D.z,V=A*ct-O*K;if(Math.abs(V)<1e-4)continue;const it=(Rt*ct-qt*K)/V,ut=(Rt*O-qt*A)/V;it>0&&ut>=0&&ut<=1&&(N=Math.min(N,it))}return N}const h=[],l=[],d=[],f=[];for(let L=1480;L<=2150;L+=10){const D=Ci(L),A=c(L);if(!Number.isFinite(A)||A<14||A>160)continue;const O=Math.cos(D.heading),N=-Math.sin(D.heading);if(h.push(new et(D.x+O*7,-D.z-N*7)),l.push(new et(D.x+O*(A-2),-D.z-N*(A-2))),L%30===10)for(const X of[12,Math.max(20,A-8)]){const Y=D.x+O*X,z=D.z+N*X,j=new Kt(.17,.3,5.8,7);j.translate(Y,2.9,z),d.push(j);for(let K=0;K<36;K++){const ct=K*2.39996,Rt=2.8*Math.sqrt((K+.5)/36),qt=5+Math.sin(K*1.71)*1.6,V=new on(2.4,2.4);V.rotateY(ct),V.rotateX(Math.sin(K)*.8),V.translate(Y+Math.cos(ct)*Rt,qt,z+Math.sin(ct)*Rt),f.push(V)}}}if(h.length>2){const L=new fs(new ti([...h,...l.reverse()]));L.rotateX(-Math.PI/2);const D=L.attributes.uv;for(let O=0;O<D.count;O++)D.setXY(O,D.getX(O)/2,D.getY(O)/2);const A=new Q(L,_n().grass);A.position.y=-.03,A.receiveShadow=!0,n.add(A)}const p=document.createElement("canvas");p.width=p.height=128;const g=p.getContext("2d");let _=42;const u=()=>(_=Math.imul(_,1664525)+1013904223>>>0)/4294967296;for(let L=0;L<230;L++){const D=u()*128,A=u()*128;Math.hypot(D-64,A-64)>59||(g.fillStyle=`hsl(${75+u()*25} 32% ${22+u()*23}%)`,g.beginPath(),g.ellipse(D,A,2+u()*5,1+u()*2,u()*Math.PI,0,Math.PI*2),g.fill())}const m=new xr(p);m.colorSpace=He;for(const[L,D]of[[d,new ot({color:6705725,roughness:.97})],[f,new ot({map:m,alphaTest:.45,side:Pe,roughness:.92})]])if(L.length){const A=lr(L);L.forEach(N=>N.dispose());const O=new Q(A,D);O.castShadow=!0,n.add(O)}const S=new jt;S.name="ponte-san-niccolo";const v=new P(1070.49,0,807.45),w=new P(1051.21,0,921.44),U=v.distanceTo(w);S.position.copy(v).add(w).multiplyScalar(.5),S.rotation.y=Math.atan2(w.x-v.x,w.z-v.z);const R=new ot({color:11183771,roughness:.85}),T=new Q(new wt(18,1.1,U),R);T.position.y=-.35,T.castShadow=!0,S.add(T);const I=new Q(new wt(14,.05,U),_n().asphalt);I.position.y=.24,S.add(I);for(const L of[-1,1]){const D=new Q(new wt(.23,.9,U),R);D.position.set(L*8.7,.6,0),S.add(D);const A=new Q(new wt(18,5.5,5),e);A.position.set(0,-2.3,L*(U/2-2)),S.add(A)}n.add(S);const M=new Q(new wt(12,.14,61),_n().asphalt);M.position.set(1077.3,.04,778),M.rotation.y=Math.atan2(1070.49-1084.19,807.45-747.91),n.add(M);const y=[[822.73,750.72],[743.34,788.55],[678.85,822.13]];for(let L=1;L<y.length;L++){const D=y[L-1],A=y[L],O=Math.hypot(A[0]-D[0],A[1]-D[1]),N=new Q(new wt(2.1,.12,O),new ot({color:13752260,roughness:.47}));N.rotation.y=Math.atan2(A[0]-D[0],A[1]-D[1]),N.position.set((D[0]+A[0])/2,-4.25,(D[1]+A[1])/2),n.add(N)}return n}const p0=[{at:1495,points:[[408.8,-913.9],[425.6,-910.7],[425,-886.3],[415,-885.9],[415.4,-888.8],[418.3,-888.9],[418.3,-891],[411.7,-891.6],[411.4,-889.3],[408.6,-889.5],[408.8,-890.8],[406.5,-890.9],[405.6,-891.1],[408.8,-913.9]],height:14,estimatedHeight:!0,name:"",id:"461735834",kind:"apartments"},{at:1495,points:[[438.5,-929.2],[431.6,-930.6],[430.3,-930.8],[430.4,-927.7],[429.5,-915.9],[437,-914.5],[438.5,-929.2]],height:14,estimatedHeight:!0,name:"",id:"461735850",kind:"apartments"},{at:1495,points:[[443,-913.6],[450.1,-912.3],[451.5,-925.8],[447.8,-926.6],[448.5,-931.4],[446.7,-931.8],[446.7,-930.3],[444.8,-930.4],[444.6,-927.3],[443,-913.6]],height:14,estimatedHeight:!0,name:"",id:"461735830",kind:"apartments"},{at:1495,points:[[460.8,-932.8],[461.6,-935.7],[460.4,-935.8],[460.8,-937.5],[456.8,-938.2],[456.4,-933.9],[452.2,-934.4],[451.5,-925.8],[450.1,-912.3],[458,-911.3],[460,-933.2],[460.8,-932.8]],height:14,estimatedHeight:!0,name:"",id:"461735829",kind:"apartments"},{at:1495,points:[[493.4,-908.2],[513.3,-907.1],[514.6,-925.1],[494.5,-925.7],[494.1,-918.5],[495.9,-918.4],[495.7,-913.8],[493.7,-914],[493.4,-908.2]],height:14,estimatedHeight:!0,name:"",id:"461735828",kind:"apartments"},{at:1495,points:[[463.6,-905],[462.6,-883.6],[462.4,-879.4],[457.6,-879.2],[457.7,-878.2],[453.1,-878.2],[452.9,-881.8],[457.5,-881.8],[457.6,-893.1],[458.3,-905.3],[463.6,-905]],height:14,estimatedHeight:!0,name:"",id:"461735859",kind:"yes"},{at:1495,points:[[463.5,-850.5],[449.4,-848.7],[449.3,-849.4],[447,-867.2],[461.8,-869.2],[463.4,-851.3],[463.5,-850.5]],height:14,estimatedHeight:!0,name:"",id:"461735824",kind:"yes"},{at:1495,points:[[443,-913.6],[444.6,-927.3],[443.4,-927.5],[444.8,-938.1],[446.3,-938],[446.6,-940.3],[440.8,-941.7],[438.5,-929.2],[437,-914.5],[443,-913.6]],height:14,estimatedHeight:!0,name:"",id:"461735823",kind:"apartments"},{at:1495,points:[[470.2,-852.2],[468.7,-863.6],[470,-863.8],[472.7,-864.1],[472.6,-874.6],[474.6,-874.7],[476.9,-853],[470.2,-852.2]],height:14,estimatedHeight:!0,name:"",id:"461735821",kind:"yes"},{at:1495,points:[[469.9,-867.7],[471.4,-867.7],[471.7,-879],[468.2,-879.2],[467.9,-869.1],[469.9,-869.1],[469.9,-867.7]],height:14,estimatedHeight:!0,name:"",id:"461735860",kind:"yes"},{at:1495,points:[[495.7,-901.8],[494.2,-881.5],[493.7,-877.7],[487.6,-878.2],[487.3,-879.6],[488.2,-902.4],[495.7,-901.8]],height:14,estimatedHeight:!0,name:"",id:"461735865",kind:"apartments"},{at:1495,points:[[447,-906.4],[458.3,-905.3],[457.6,-893.1],[455.4,-893.2],[454.7,-883.1],[448.3,-883.4],[448.3,-878.7],[445.3,-878.7],[445.9,-884.6],[446.1,-896.5],[446.3,-898.9],[447,-906.4]],height:14,estimatedHeight:!0,name:"",id:"461735866",kind:"apartments"},{at:1495,points:[[427.4,-941.4],[428.3,-944.5],[425.5,-945.2],[424.6,-941.7],[423.1,-941.9],[422.6,-938.7],[423.8,-938.4],[423.4,-936.1],[420.8,-936.8],[422,-942.2],[419.3,-942.9],[418.7,-940.2],[414.2,-918.8],[422.8,-917.2],[427.4,-941.4]],height:14,estimatedHeight:!0,name:"",id:"461735869",kind:"apartments"},{at:1495,points:[[484.2,-902.8],[483.4,-883.2],[482.1,-883.2],[478.8,-883.5],[479.2,-885.2],[474.1,-886],[475,-904.1],[484.2,-902.8]],height:14,estimatedHeight:!0,name:"",id:"461735873",kind:"apartments"},{at:1495,points:[[478.8,-923.6],[478,-909.5],[493.4,-908.2],[493.7,-914],[492.5,-914],[492.7,-918.6],[494.1,-918.5],[494.5,-925.7],[485.8,-926.1],[485.6,-921.5],[483,-921.6],[483.2,-926.7],[479,-926.7],[478.8,-923.6]],height:14,estimatedHeight:!0,name:"",id:"461735882",kind:"apartments"},{at:1495,points:[[478.8,-923.6],[472.8,-924.2],[471.7,-924],[471.7,-922.1],[468.8,-922.2],[467.8,-910.1],[478,-909.5],[478.8,-923.6]],height:14,estimatedHeight:!0,name:"",id:"461735885",kind:"apartments"},{at:1495,points:[[447,-906.4],[446.3,-898.9],[443.4,-899.1],[443.2,-896.5],[446.1,-896.5],[445.9,-884.6],[441.8,-884.9],[435,-885.7],[435.1,-908.7],[447,-906.4]],height:14,estimatedHeight:!0,name:"",id:"461735886",kind:"apartments"},{at:1495,points:[[427.4,-941.4],[422.8,-917.2],[429.5,-915.9],[430.4,-927.7],[427.8,-928.2],[428.6,-932.5],[431,-932],[432.8,-940.2],[427.4,-941.4]],height:14,estimatedHeight:!0,name:"",id:"461735892",kind:"apartments"},{at:1495,points:[[474.6,-874.7],[476.9,-853],[489.7,-854.8],[487.6,-878.2],[487.3,-879.6],[482.1,-879.8],[478.6,-879.8],[478.1,-874.9],[474.6,-874.7]],height:14,estimatedHeight:!0,name:"Museo Casa Rodolfo Siviero",id:"306694402",kind:"yes"},{at:1495,points:[[449.3,-849.4],[434.4,-847.5],[434.8,-869.8],[441.2,-869.9],[444.7,-869.6],[444.4,-867.1],[447,-867.2],[449.3,-849.4]],height:14,estimatedHeight:!0,name:"",id:"306694381",kind:"yes"},{at:1495,points:[[488.2,-902.4],[487.3,-879.6],[482.1,-879.8],[482.1,-883.2],[483.4,-883.2],[484.2,-902.8],[488.2,-902.4]],height:14,estimatedHeight:!0,name:"",id:"461735896",kind:"apartments"},{at:1495,points:[[433.8,-945.4],[441.4,-944],[442.1,-947.6],[434.5,-949.1],[433.8,-945.4]],height:14,estimatedHeight:!0,name:"",id:"119814743",kind:"yes"},{at:1495,points:[[441.8,-884.9],[445.9,-884.6],[445.3,-878.7],[444.7,-869.6],[441.2,-869.9],[441.8,-884.9]],height:14,estimatedHeight:!0,name:"",id:"461735897",kind:"yes"},{at:1495,points:[[474.7,-938.6],[480.9,-938.5],[479.7,-927.7],[473.4,-928.3],[473.9,-932],[474.7,-938.6]],height:14,estimatedHeight:!0,name:"",id:"119814737",kind:"yes"},{at:1495,points:[[460.8,-932.8],[460,-933.2],[458,-911.3],[467.8,-910.1],[468.8,-922.2],[463.9,-922.5],[463.9,-924.8],[468.8,-924.4],[469.2,-929.8],[464.3,-930.3],[464.4,-932.2],[460.8,-932.8]],height:14,estimatedHeight:!0,name:"",id:"461735838",kind:"apartments"},{at:1495,points:[[469.1,-904.4],[468.5,-883.7],[468.3,-880.6],[465,-880.7],[465.4,-883.6],[462.6,-883.6],[463.6,-905],[469.1,-904.4]],height:14,estimatedHeight:!0,name:"",id:"461735835",kind:"yes"},{at:1499,points:[[558.4,-892.7],[558.8,-901.5],[559,-908.4],[564.8,-908.2],[571.2,-908],[571,-900.9],[570.7,-892.3],[558.4,-892.7]],height:14,estimatedHeight:!0,name:"Torre San Niccolò",id:"72915036",kind:"yes"},{at:1499,points:[[545.3,-950.6],[545.3,-948.6],[545.2,-947],[548.4,-946.9],[548.6,-950.5],[545.3,-950.6]],height:14,estimatedHeight:!0,name:"",id:"690889355",kind:"service"},{at:1499,points:[[585.3,-944.6],[585.7,-947.7],[588.7,-947.4],[588.5,-945.4],[588.4,-944.2],[585.3,-944.6]],height:14,estimatedHeight:!0,name:"",id:"690889341",kind:"service"},{at:1500,points:[[696.2,-905.2],[696.2,-909.3],[702.1,-909.3],[702.1,-905.3],[696.2,-905.2]],height:14,estimatedHeight:!0,name:"",id:"119814740",kind:"yes"},{at:1500,points:[[665.3,-886.2],[659.8,-887.2],[651.7,-889.4],[653.6,-896.2],[654.7,-900.1],[657.6,-899.8],[658.2,-903],[669.2,-901.4],[668,-897.2],[665.3,-886.2]],height:9.899999999999999,estimatedHeight:!1,name:"",id:"461735849",kind:"apartments"},{at:1500,points:[[665.3,-886.2],[668,-897.2],[682.7,-895.1],[694.2,-894.7],[694.4,-898.3],[698,-898.3],[698,-895.4],[702.3,-895.7],[702.7,-882.6],[696.4,-883],[681.6,-883.8],[665.3,-886.2]],height:13.2,estimatedHeight:!1,name:"",id:"461735832",kind:"apartments"},{at:1500,points:[[702.7,-882.6],[702.3,-895.7],[702.1,-901.6],[717.8,-903.4],[718.6,-895.8],[715.3,-895.6],[715.5,-892.2],[719.2,-892.7],[719.4,-891],[719.8,-884.6],[712.6,-883.1],[706.9,-882.6],[702.7,-882.6]],height:14,estimatedHeight:!0,name:"",id:"461735852",kind:"apartments"},{at:1502,points:[[739.6,-889.3],[719.8,-884.6],[719.4,-891],[736.8,-895.2],[739.6,-889.3]],height:14,estimatedHeight:!0,name:"",id:"461735851",kind:"apartments"},{at:1505,points:[[760.5,-893.1],[739.6,-889.3],[736.8,-895.2],[736.3,-896.5],[747.4,-899.6],[757.9,-901.2],[759.5,-901.3],[761.5,-895.2],[760.5,-893.1]],height:14,estimatedHeight:!0,name:"",id:"461735826",kind:"yes"},{at:1505,points:[[763.4,-946.2],[762.7,-953.3],[772.4,-954.2],[772.9,-948.6],[773,-947],[771.8,-946.9],[763.4,-946.2]],height:14,estimatedHeight:!0,name:"",id:"686730294",kind:"yes"},{at:1505,points:[[810.3,-899.1],[805.8,-910.9],[811.3,-912.9],[816.3,-899.7],[810.3,-899.1]],height:14,estimatedHeight:!0,name:"",id:"443463113",kind:"yes"},{at:1505,points:[[810.3,-899.1],[798.1,-897.5],[796.2,-907.9],[805.8,-910.9],[810.3,-899.1]],height:14,estimatedHeight:!0,name:"",id:"443463099",kind:"yes"},{at:1505,points:[[818.1,-914.9],[822.8,-903],[823,-900.5],[816.3,-899.7],[811.3,-912.9],[818.1,-914.9]],height:14,estimatedHeight:!0,name:"",id:"443463102",kind:"apartments"},{at:1537,points:[[818.1,-914.9],[837.4,-921.4],[843.5,-906.5],[839.9,-905.4],[839.8,-903.1],[827.5,-901.3],[826.1,-904.3],[822.8,-903],[818.1,-914.9]],height:14,estimatedHeight:!0,name:"",id:"443463101",kind:"apartments"},{at:1553,points:[[850.2,-926],[861.2,-930],[866.7,-914.1],[856.4,-910.7],[850.2,-926]],height:14,estimatedHeight:!0,name:"",id:"443463120",kind:"apartments"},{at:1574,points:[[876,-978.8],[885,-969.8],[876.5,-962.6],[880.5,-954.8],[874.3,-951.6],[867.1,-965.8],[869.5,-968.1],[867.7,-970.7],[876,-978.8]],height:14,estimatedHeight:!0,name:"",id:"119836218",kind:"yes"},{at:1600,points:[[939.5,-965.5],[950.4,-970.8],[956.1,-958.2],[956.7,-956.8],[946.5,-951.8],[939.5,-965.5]],height:14,estimatedHeight:!0,name:"",id:"443463118",kind:"yes"},{at:1600,points:[[954,-940.7],[950.7,-947.4],[955.6,-948.1],[954.8,-949.7],[956.7,-950.3],[956.1,-951.7],[958.6,-952.9],[964.8,-940.9],[952.6,-934.1],[952.3,-937.7],[954.9,-937.9],[954,-940.7]],height:14,estimatedHeight:!0,name:"",id:"443463108",kind:"yes"},{at:1698,points:[[964.8,-940.9],[958.6,-952.9],[974,-960.7],[974.4,-959.6],[979.6,-949.2],[971.9,-944.4],[969.2,-941.3],[967.5,-943.1],[964.8,-940.9]],height:14,estimatedHeight:!0,name:"",id:"443463110",kind:"yes"},{at:1698,points:[[979.6,-949.2],[994.2,-960.1],[989.1,-982.1],[985.3,-981.8],[980.8,-981.6],[975.8,-980.8],[971.5,-980],[965.5,-978],[971.1,-965.7],[972.3,-963],[982.4,-967.1],[984,-964.1],[974.4,-959.6],[979.6,-949.2]],height:14,estimatedHeight:!0,name:"",id:"443463104",kind:"yes"},{at:2003,points:[[1514.2,-947.3],[1514.2,-951.3],[1545.5,-951.3],[1545.5,-947.3],[1514.2,-947.3]],height:14,estimatedHeight:!0,name:"",id:"465144271",kind:"yes"},{at:2003,points:[[1415.1,-939.4],[1415.4,-947.4],[1425.1,-947],[1424.8,-939],[1415.1,-939.4]],height:14,estimatedHeight:!0,name:"",id:"465144276",kind:"yes"},{at:2003,points:[[1448.3,-935.8],[1449,-947.1],[1455.8,-946.8],[1455.9,-952.1],[1475.7,-952],[1476.4,-940.7],[1463.1,-941],[1462.7,-934.2],[1448.3,-935.8]],height:14,estimatedHeight:!0,name:"",id:"465144290",kind:"yes"}],ol={buildings:p0};class m0{constructor(t){Yt(this,"root",new jt);Yt(this,"chunks",[]);t.add(this.root);const e=new Set(ol.buildings.map(a=>a.id)),i=new Map;for(const a of[...rc.buildings,...ol.buildings]){if(a.points.length<3)continue;const r=Math.floor(a.at/100);let o=i.get(r);o||(o={at:r*100+50,root:new jt,walls:Array.from({length:8},()=>[]),roofs:[],details:[[],[],[]]},i.set(r,o),this.root.add(o.root));const c=a.points,h=a.points.reduce((I,M)=>I+M[0],0)/a.points.length,l=-a.points.reduce((I,M)=>I+M[1],0)/a.points.length,d=Ci(a.at),f=(h-d.x)*Math.cos(d.heading)-(l-d.z)*Math.sin(d.heading),p=a.estimatedHeight&&a.at>1480&&f>8&&f<100,g=a.name==="Torre della Zecca"?25:a.name==="Cupola del Brunelleschi"?38:p?3.6:a.height;if(a.name==="Cupola del Brunelleschi"){const I=c.map(N=>N[0]),M=c.map(N=>N[1]),y=(Math.min(...I)+Math.max(...I))/2,L=-(Math.min(...M)+Math.max(...M))/2,D=new Q(new Kt(22,22,18,8),We().stone);D.position.set(y,44,L),o.root.add(D);const A=new Q(new Ve(22,16,16,0,Math.PI*2,0,Math.PI/2),We().roof);A.scale.y=1.65,A.position.set(y,53,L),o.root.add(A);const O=new Q(new Kt(2.5,4,14,8),We().stone);O.position.set(y,96,L),o.root.add(O);continue}const _=[],u=[],m=[],S=c.reduce((I,M,y)=>{const L=c[(y+1)%c.length];return I+M[0]*L[1]-L[0]*M[1]},0);for(let I=0;I<c.length-1;I++){const M=c[I],y=c[I+1],L=Math.hypot(y[0]-M[0],y[1]-M[1]);if(L<.05)continue;const D=_.length/3;_.push(M[0],0,-M[1],y[0],0,-y[1],M[0],g,-M[1],y[0],g,-y[1]),u.push(0,0,L/4,0,0,g/3.4,L/4,g/3.4),m.push(D,D+2,D+1,D+1,D+2,D+3);const A=(M[0]+y[0])/2,O=-(M[1]+y[1])/2,N=(y[1]-M[1])/L*Math.sign(S),X=(y[0]-M[0])/L*Math.sign(S),Y=Ci(a.at),z=(Y.x-A)*N+(Y.z-O)*X;if(L>2.7&&L<130&&z>0&&Math.hypot(Y.x-A,Y.z-O)<55&&g<45&&!/Torre|Cattedrale/.test(a.name)){const j=Math.atan2(N,X),K=Math.max(1,Math.floor(L/3.2)),ct=(Rt,qt,V,it,ut,rt,Tt)=>{const Pt=new wt(ut,rt,Tt);Pt.rotateY(j),Pt.translate(qt,V,it),o.details[Rt].push(Pt)};for(let Rt=0;Rt<K;Rt++){const qt=(Rt+.5)/K,V=M[0]+(y[0]-M[0])*qt,it=-M[1]-(y[1]-M[1])*qt;for(let ut=1.65;ut<g-1.1;ut+=3.3){const rt=ut<2,Tt=rt?1.5:1.05,Pt=rt?2.8:1.85;if(ct(0,V+N*.04,ut,it+X*.04,Tt+.32,Pt+.34,.17),ct(1,V+N*.14,ut,it+X*.14,Tt,Pt,.03),ct(0,V+N*.18,ut-Pt/2-.06,it+X*.18,Tt+.44,.13,.38),!rt){const Nt=Math.cos(j),H=-Math.sin(j);for(const Z of[-1,1])ct(2,V+N*.19+Z*Nt*(Tt/2+.34),ut,it+X*.19+Z*H*(Tt/2+.34),.42,Pt,.11);ct(0,V+N*.17,ut,it+X*.17,.05,Pt,.05)}}}ct(0,A+N*.1,g-.1,O+X*.1,L,.22,.4)}}const v=new we;if(v.setAttribute("position",new Jt(_,3)),v.setAttribute("uv",new Jt(u,2)),v.setIndex(m),v.computeVertexNormals(),/Torre della Zecca|Torre Volognana|Cattedrale/.test(a.name)){const I=_n().stone.clone();I.side=Pe,I.color.setHex(a.name.includes("Cattedrale")?14934225:10259056);const M=new Q(v,I);if(M.castShadow=!0,M.receiveShadow=!0,o.root.add(M),a.name.startsWith("Torre")){const y=c.map(Y=>Y[0]),L=c.map(Y=>-Y[1]),D=Math.min(...y),A=Math.max(...y),O=Math.min(...L),N=Math.max(...L),X=[];for(let Y=0;Y<5;Y++)for(const z of[O,N]){const j=new wt((A-D)/9,1.3,.65);j.translate(D+(A-D)*Y/4,g+.6,z),X.push(j)}this.merge(o.root,X,I)}}else o.walls[Number(a.id)%4+(e.has(a.id)?4:0)].push(v);const U=new ti(c.map(I=>new et(I[0],I[1]))),R=new fs(U);R.rotateX(-Math.PI/2),R.translate(0,g+.05,0);const T=R.attributes.uv;for(let I=0;I<T.count;I++)T.setXY(I,T.getX(I)/5,T.getY(I)/5);o.roofs.push(R)}const s=[..._n().walls,...We().facades];for(const a of i.values()){for(let r=0;r<8;r++)this.merge(a.root,a.walls[r],s[r]);this.merge(a.root,a.roofs,We().roof),this.chunks.push(a),[_n().trim,_n().glass,_n().wood].forEach((r,o)=>this.merge(a.root,a.details[o],r))}this.root.add(f0())}merge(t,e,i){if(!e.length)return;const s=lr(e);e.forEach(r=>r.dispose());const a=new Q(s,i);a.castShadow=!0,a.receiveShadow=!0,t.add(a)}update(t,e){if(this.root.visible=e,!e)return;const i=Ci(t),s=Math.cos(i.heading),a=Math.sin(i.heading);this.root.rotation.y=-i.heading,this.root.position.set(-s*i.x+a*i.z,0,-a*i.x-s*i.z-5);for(const r of this.chunks)r.root.visible=Math.abs(r.at-t)<560}}const g0=new ot({color:7956816,roughness:1}),_0=new ot({color:4549433,roughness:.85,side:Pe}),v0=new Kt(.11,.19,4.3,10,5),x0=(()=>{const n=[],t=[];for(let i=0;i<19;i++){const s=i/18,a=s*2.4,r=Math.sin(s*Math.PI)*.45-s*s*.65,o=Math.sin(s*Math.PI)*.42+.015,c=n.length/3;n.push(0,r,a,-o,r-.07,a-.12,o,r-.07,a-.12),i>0&&t.push(c-3,c,c+1,c-3,c+2,c)}const e=new we;return e.setAttribute("position",new Jt(n,3)),e.setIndex(t),e.computeVertexNormals(),e})();new si(1.2,.42,24,1,!0);[15327176,7442314,11696473].map(n=>new ot({color:n,roughness:.95,side:Pe}));function cl(){const n=new jt,t=new Q(v0,g0);t.position.set(.13,2.15,0),t.rotation.z=-.055,t.castShadow=!0,n.add(t);const e=new ar(x0,_0,9),i=new ee;for(let s=0;s<9;s++)i.position.set(.25,4.3,0),i.rotation.set(s%3*.09,s*Math.PI*2/9,0),i.updateMatrix(),e.setMatrixAt(s,i.matrix);return e.castShadow=!0,n.add(e),n}const In=new wt(1,1,1),hl=new Map,ll=new Map,vi=new ot({color:14997439,roughness:.88}),y0=new ot({color:11388100,roughness:.2,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),Us=new ot({color:3157030,roughness:.9}),dr=[12084808,6717305,13873779,8151636].map(n=>new ot({color:n,roughness:.94})),dl=[12887148,10379847,7439738].map(n=>new ot({color:n,roughness:1,side:Pe})),M0=new ot({color:3560251,roughness:1}),ul=new ot({color:13944488,roughness:.9}),S0=new si(1.35,.46,20,1,!0),E0=new Kt(.025,.035,1.9,8),w0=[15130058,12086864].map(n=>new ot({color:n,roughness:.95,side:Pe}));function b0(n){let t=ll.get(n);if(t)return t;let e=hl.get(n);if(!e){const i=document.createElement("canvas");i.width=512,i.height=128;const s=i.getContext("2d");s.fillStyle="#35463f",s.fillRect(0,0,512,128),s.strokeStyle="#d6bd8d",s.lineWidth=7,s.strokeRect(7,7,498,114),s.fillStyle="#f4ead4",s.font="bold 56px Georgia",s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,66,460),e=new xr(i),e.colorSpace=He,e.anisotropy=4,hl.set(n,e)}return t=new ot({map:e,roughness:.72}),ll.set(n,t),t}function ni(n,t,e,i,s,a,r=1,o=1,c=1){const h=new Q(n,t);return h.position.set(i,s,a),h.scale.set(r,o,c),h.castShadow=!0,h.receiveShadow=!0,h.userData.sharedResources=!0,e.add(h),h}function pe(n,t,e,i,s,a,r,o){return ni(In,t,n,e,i,s,a,r,o)}function fn(n,t,e,i){const s=new ar(t,e,i.length);i.forEach((a,r)=>s.setMatrixAt(r,a)),s.castShadow=!0,s.receiveShadow=!0,s.userData.sharedResources=!0,n.add(s)}function Ld(n){return-n}function fl(n,t,e,i,s){const a=We(),r=Ld(t),o=s*2.5+.25,c=a.facades[(e+1)%a.facades.length];ni(hc(3.8,o-2.7,9.5),c,n,0,2.7+(o-2.7)/2,0),pe(n,a.stone,0,.17,0,4.05,.34,9.75),pe(n,a.roof,0,o+.12,0,4.05,.24,9.75),pe(n,vi,r*1.96,o+.34,0,.12,.2,9.8),pe(n,vi,-r*1.7,1.45,0,.16,2.6,9.5),pe(n,a.pavement,0,.28,0,3.8,.15,9.5),pe(n,vi,0,1.45,-4.68,3.8,2.6,.15),pe(n,vi,0,1.45,4.68,3.8,2.6,.15);const h=[];for(const _ of[-4.5,-1.5,1.5,4.5]){const u=new ee;u.position.set(r*1.85,1.48,_),u.scale.set(.38,2.55,.35),u.updateMatrix(),h.push(u.matrix.clone())}fn(n,In,a.stone,h),pe(n,Us,-r*.6,.8,0,.6,1.1,3.6),pe(n,ul,-r*.6,1.39,0,.75,.1,3.8);for(const _ of[-3,3]){const u=pe(n,y0,r*1.9,1.45,_,.025,1.65,1.1);u.castShadow=!1,pe(n,Us,r*1.92,.64,_,.045,.045,1.2),pe(n,Us,r*1.92,2.27,_,.045,.045,1.2)}pe(n,vi,r*2,2.52,0,.2,.3,9.65),pe(n,Us,r*2.08,2.68,0,.12,.58,3.9);const l=ni(new on(3.7,.46),b0(i),n,r*2.15,2.68,0,1,1,1);l.rotation.y=r*Math.PI/2;const d=[[],[]];for(let _=0;_<12;_++){const u=new ee;u.position.set(r*2.48,2.48,-3.3+_*.6),u.rotation.z=r*.13,u.scale.set(1.1,.1,.6),u.updateMatrix(),d[_%2].push(u.matrix.clone())}fn(n,In,dr[e%dr.length],d[0]),fn(n,In,vi,d[1]);const f=[];for(let _=0;_<s;_++)for(let u=0;u<3;u++){const m=2.65+_*2.5,S=-3+u*3;if((_+u+e)%3===0){const v=new ee;v.position.set(r*2.13,m-.48,S),v.rotation.y=r*Math.PI/2,v.scale.set(1.4,.08,.32),v.updateMatrix(),f.push(v.matrix.clone())}}f.length&&fn(n,In,a.iron,f);const p=[],g=[];for(const _ of[-3.4,3.3]){const u=new ee;u.position.set(r*2.65,1,_),u.scale.set(.72,.09,.72),u.updateMatrix(),g.push(u.matrix.clone());for(const m of[-.24,.24]){const S=new ee;S.position.set(r*2.65,.64,_+m),S.scale.set(.06,.7,.06),S.updateMatrix(),p.push(S.matrix.clone())}for(const m of[-.62,.62]){const S=new ee;S.position.set(r*2.65,.71,_+m),S.scale.set(.44,.08,.44),S.updateMatrix(),g.push(S.matrix.clone());const v=new ee;v.position.set(r*2.65,.49,_+m),v.scale.set(.06,.42,.06),v.updateMatrix(),p.push(v.matrix.clone())}}if(fn(n,In,ul,g),fn(n,In,Us,p),i!=="BOTTEGA")for(const[_,u]of[-3.4,3.3].entries()){const m=sa(!0,e+_);m.position.set(r*2.65,.28,u+.62),n.add(m);const S=ni(new Kt(.045,.035,.1,10),vi,n,r*2.65,1.11,u);S.castShadow=!1}}function T0(n,t,e){const i=We();ni(hc(4,7.5,9.5),i.facades[e%4],n,t*5,3.75,0),pe(n,i.roof,t*5,7.65,0,4.25,.3,9.8),pe(n,i.pavement,0,.04,0,4.1,.08,10);for(let s=0;s<2;s++){const a=s?2.45:-2.45,r=dl[(e+s)%dl.length];pe(n,i.stone,0,.65,a,1.15,1.2,3.8),pe(n,r,0,2.35,a,2.5,.12,4.5);const o=[];for(const h of[-1.05,1.05])for(const l of[-1.95,1.95]){const d=new ee;d.position.set(h,1.17,a+l),d.scale.set(.07,2.34,.07),d.updateMatrix(),o.push(d.matrix.clone())}fn(n,In,i.iron,o);const c=[];for(let h=0;h<6;h++){const l=new ee;l.position.set(-.18+h%3*.18,1.32+h%2*.08,a-1.2+Math.floor(h/3)*.55),l.scale.set(.16,.16,.16),l.updateMatrix(),c.push(l.matrix.clone())}fn(n,new Ve(.5,8,6),dr[(e+s)%dr.length],c)}}function A0(n,t,e){const i=We(),s=Ld(t),a=i.facades[(e+2)%i.facades.length];ni(hc(3.35,4.5,7.2),a,n,0,2.25,0),pe(n,i.roof,0,4.62,0,3.7,.35,7.6),pe(n,i.stone,s*2,.48,0,.55,.96,9.8);const r=new si(.65,5.7,7);for(const o of[-3.4,3.5])ni(r,M0,n,s*2.7,2.85,o,1,1,1);pe(n,i.iron,s*2.15,1.22,0,.08,.08,8.4)}function R0(n,t){const e=We();pe(n,e.sand,3.2,.015,0,8.5,.03,10),pe(n,Do(),62.45,.02,0,110,.06,24);const i=cl();i.position.set(2.9,0,t%2?-3.7:3.7),i.scale.setScalar(.82),i.userData.sharedResources=!0,n.add(i);const s=cl();s.position.set(11.5,0,t%2?3.7:-3.7),s.scale.setScalar(.72),s.userData.sharedResources=!0,n.add(s);const a=[];for(const o of[-2.65,2.65]){const c=ni(S0,w0[(t+(o>0?1:0))%2],n,4.65,2.15,o);c.rotation.y=o>0?.35:-.25;const h=new ee;h.position.set(4.65,1,o),h.updateMatrix(),a.push(h.matrix.clone())}fn(n,E0,e.iron,a),pe(n,e.stone,.5,.5,0,.18,.18,9.8);const r=[];for(let o=0;o<9;o++){const c=new ee;c.position.set(.5,.28,-4.4+o*1.1),c.scale.set(.2,.55,.2),c.updateMatrix(),r.push(c.matrix.clone())}fn(n,In,e.stone,r)}function C0(n,t,e){const i=new jt;return i.userData.sharedResources=!0,n==="historic-center"?fl(i,t,e,["BAR","BOTTEGA","RISTORANTE","CAFFÈ"][e%4],2+e%3):n==="market"?T0(i,t,e):n==="hillside"?A0(i,t,e):t===1?R0(i,e):fl(i,t,e,e%2?"ALBERGO":"RISTORANTE",2),i}const P0=new wt(1,1,1),pl=new ot({color:14273456,roughness:.95}),es=new ot({color:5324844,roughness:.8}),ml=new ot({color:5535618,metalness:.2,roughness:.25});function Re(n,t,e,i,s,a,r,o){const c=new Q(P0,t);return c.position.set(e,i,s),c.scale.set(a,r,o),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function L0(n,t){const e=n/2,i=new ti;return i.moveTo(-e,0),i.lineTo(e,0),i.lineTo(e,t-e),i.absarc(0,t-e,e,0,Math.PI,!1),i.closePath(),new Mr(i,{depth:.12,bevelEnabled:!1,curveSegments:16})}function I0(n,t){const e=new jt,i=We();if(Re(e,i.pavement,n*7,.13,0,21,.26,10),!t)return e;const s=new jt;s.position.set(n*12,0,0),s.rotation.y=-n*Math.PI/2,e.add(s),Re(s,pl,0,4.8,0,8.5,9.6,12),Re(s,i.stone,0,.32,6.3,9.2,.3,1.5),Re(s,i.stone,0,.15,7,9.8,.3,1.8);const a=new Q(new si(6.9,3.6,4),i.roof);a.rotation.y=Math.PI/4,a.scale.z=1.42,a.position.y=11.35,a.castShadow=!0,s.add(a);const r=new Q(L0(2.1,3.7),es);r.position.set(0,.45,6.025),s.add(r),Re(s,i.stone,0,.44,6.12,2.6,.12,.2);for(const p of[-3.5,3.5])Re(s,i.stone,p,4.8,6.1,.34,9.6,.25),Re(s,i.stone,p,8.4,6.17,.65,.25,.35);const o=new Q(new cr(1.03,32),ml);o.position.set(0,6.4,6.08),s.add(o);const c=new Q(new oi(1.08,.14,8,32),i.stone);c.position.copy(o.position),s.add(c);for(let p=0;p<8;p++){const g=Re(s,i.stone,0,6.4,6.12,.07,2,.08);g.rotation.z=p*Math.PI/4}Re(s,es,0,13.5,0,.14,1.4,.14),Re(s,es,0,13.8,0,.85,.14,.14),Re(s,pl,5.5,6,-2.5,2.7,12,2.7),Re(s,es,5.5,13.1,-2.5,2.1,2.2,2.1);for(const p of[4.25,6.75])for(const g of[-3.75,-1.25])Re(s,i.stone,p,13.2,g,.32,2.4,.32);Re(s,i.stone,5.5,14.5,-2.5,3.15,.35,3.15);const h=new Q(new si(2.2,2.1,4),i.roof);h.rotation.y=Math.PI/4,h.position.set(5.5,15.7,-2.5),s.add(h);const l=new Q(new Kt(1.65,1.8,.45,24),i.stone);l.position.set(n*3,.35,-2),e.add(l);const d=new Q(new cr(1.45,32),ml);d.rotation.x=-Math.PI/2,d.position.set(n*3,.59,-2),e.add(d),Re(e,i.stone,n*3,1.05,-2,.35,1,.35),Re(e,es,n*3,.62,3,2.4,.14,.6),Re(e,es,n*3,.98,3.25,2.4,.7,.08);const f=sa(!0,1);return f.position.set(n*3,.24,3),e.add(f),e}function D0(){const n=new jt,t=document.createElement("canvas");t.width=1024,t.height=192;const e=t.getContext("2d");e.fillStyle="#fffdf3",e.fillRect(0,0,1024,192),e.fillStyle="#16272b";for(let c=0;c<6;c++)for(let h=0;h<32;h++)(c+h)%2===0&&(h<6||h>25)&&e.fillRect(h*32,c*32,32,32);e.font="900 128px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("FINISH",512,104);const i=new xr(t);i.colorSpace=He;const s=new Q(new wt(2,1.15,.08),new ot({map:i,roughness:.7}));s.position.y=4.2,n.add(s);const a=new ot({color:6120807,metalness:.65,roughness:.35});for(const c of[-1,1]){const h=new Q(new Kt(.035,.045,4.85,8),a);h.position.set(c*1.04,2.425,0),n.add(h)}const r=new ot({color:16447206,roughness:.9}),o=new ot({color:2107178,roughness:.9});for(let c=0;c<2;c++)for(let h=0;h<16;h++){const l=new Q(new wt(.125,.014,.38),(c+h)%2?r:o);l.position.set(-1+(h+.5)/8,.095,(c-.5)*.38),n.add(l)}return n}const zo=-24,U0=216,$a=2,xo=10,ns=(U0-zo)/$a+1;class k0{constructor(t){Yt(this,"ribbons",[]);Yt(this,"scenery",[]);Yt(this,"templates",new Map);Yt(this,"lines");Yt(this,"matrix",new ee);Yt(this,"pedestrians",[]);Yt(this,"time",0);Yt(this,"finish",D0());Yt(this,"finishDistance",ia);Yt(this,"florence",null);this.scene=t,t.add(this.finish),this.ribbon(t,-5.1,5.1,.065,We().asphalt);for(const e of[-1,1])this.ribbon(t,e*5.1,e*6.9,.28,We().pavement),this.ribbon(t,e*5.1,e*5.27,.31,We().stone);this.lines=new ar(new wt(.09,.018,1.8),new ot({color:15590863,roughness:.9}),120),this.lines.frustumCulled=!1,t.add(this.lines);for(let e=-2;e<24;e++)for(const i of[-1,1]){const s=new jt;t.add(s),this.scenery.push({root:s,index:e,side:i,key:""})}for(let e=0;e<12;e++){const i=sa(!1,e);t.add(i),this.pedestrians.push({root:i,s:e*20,side:e%2?1:-1,direction:e%3?1:-1,phase:e*1.7})}this.update(0)}ribbon(t,e,i,s,a){e>i&&([e,i]=[i,e]);const r=new we;r.setAttribute("position",new Ge(new Float32Array(ns*6),3).setUsage(jc)),r.setAttribute("uv",new Ge(new Float32Array(ns*4),2).setUsage(jc));const o=new Float32Array(ns*6);for(let l=0;l<ns*2;l++)o[l*3+1]=1;r.setAttribute("normal",new Ge(o,3));const c=[];for(let l=0;l<ns-1;l++){const d=l*2;c.push(d,d+1,d+2,d+1,d+3,d+2)}r.setIndex(c);const h=new Q(r,a);h.frustumCulled=!1,h.receiveShadow=!0,t.add(h),this.ribbons.push({mesh:h,left:e,right:i,height:s})}reset(t=0,e=ia){this.finishDistance=t+e,he()&&!this.florence&&(this.florence=new m0(this.scene)),this.scenery.forEach((i,s)=>{i.index=Math.floor(t/xo)+Math.floor(s/2)-2,i.key=""}),this.pedestrians.forEach((i,s)=>{i.s=t+s*20}),this.update(t)}update(t,e=0){var o;const i=he(),s=this.scene.getObjectByName("city-ground");if(s&&(s.visible=!i),this.scene.fog instanceof la&&(this.scene.fog.near=i?110:32,this.scene.fog.far=i?680:180),this.ribbons[0].mesh.material=i?_n().asphalt:We().asphalt,(o=this.florence)==null||o.update(t,he()),this.finish.visible=this.finishDistance-t<210,this.finish.visible){const c=gn(this.finishDistance,0,t);this.finish.position.set(c.x,0,c.z),this.finish.rotation.y=c.heading,this.finish.scale.x=ze(this.finishDistance).halfWidth}this.time+=e;const a=Math.floor(t/$a)*$a+zo;for(const c of this.ribbons){const h=c.mesh.geometry,l=h.attributes.position,d=h.attributes.uv;for(let f=0;f<ns;f++)for(let p=0;p<2;p++){const g=a+f*$a,_=p?c.right:c.left,u=ze(g),m=Math.sign(_)*(Math.abs(_)-5.1+u.halfWidth),S=gn(g,m,t);l.setXYZ(f*2+p,S.x,c.height,S.z),d.setXY(f*2+p,i?m/3:p,i?g/3:g/20)}l.needsUpdate=!0,d.needsUpdate=!0}const r=Math.floor((t+zo)/4)*4;for(let c=0;c<120;c++){const h=r+Math.floor(c/2)*4,l=ze(h),d=gn(h,(c%2?1.2:-1.2)*(1-l.narrow),t);this.matrix.position.set(d.x,.085,d.z),this.matrix.scale.setScalar(c%2===1?1-l.narrow:1),this.matrix.rotation.set(0,d.heading,0),this.matrix.updateMatrix(),this.lines.setMatrixAt(c,this.matrix.matrix)}this.lines.instanceMatrix.needsUpdate=!0;for(const c of this.scenery){if(c.root.visible=!he(),he())continue;for(;c.index*xo-t<-25;)c.index+=26;const h=c.index*xo,l=cc(Math.max(0,h)).district.id,d=ze(h),f=(c.index%3+3)%3,p=d.plaza?`piazza:${c.side}:${d.church}`:`${l}:${c.side}:${f}`;if(c.key!==p){let _=this.templates.get(p);_||(_=d.plaza?I0(c.side,d.church&&c.side===1):C0(l,c.side,f),this.templates.set(p,_)),c.root.traverse(u=>{u instanceof ar&&u.dispose()}),c.root.clear(),c.root.add(_.clone(!0)),c.key=p}const g=gn(h,c.side*(d.halfWidth+3.4),t);c.root.position.set(g.x,0,g.z),c.root.rotation.y=g.heading}for(const c of this.pedestrians){for(c.s+=c.direction*.75*e;c.s-t<-24;)c.s+=240;const h=ze(c.s),l=he()?Ho(c.s,c.side,h.halfWidth):c.side*(h.halfWidth+.65);if(c.root.visible=l!==null,l===null)continue;const d=gn(c.s,l,t);c.root.position.set(d.x,.28,d.z),c.root.rotation.y=d.heading+(c.direction<0?Math.PI:0),Ad(c.root,this.time+c.phase)}}}const ur={red:12126482,white:15657697,gray:6843762};function N0(){const n=new jt;n.name="classic-scooter";const t=new Jh({color:ur.red,metalness:.16,roughness:.33,clearcoat:.8,clearcoatRoughness:.26,envMapIntensity:.4});t.name="scooter-paint";const e=new ot({color:12568263,metalness:.93,roughness:.18}),i=new ot({color:1579805,roughness:.9}),s=new ot({color:2106922,roughness:.57}),a=new Jh({color:8061445,roughness:.22,clearcoat:1,emissive:11667210,emissiveIntensity:.45}),r=new Ve(1,32,24),o=(p,g,_,u,m)=>{const S=new Q(p,g);return S.position.set(_,u,m),S.castShadow=!0,S.receiveShadow=!0,n.add(S),S},c=(p,g,_,u=.06)=>new wr(p,g,_,4,u);o(c(.54,.17,1.22),t,0,.48,.01);const h=o(c(.58,.76,.18,.085),t,0,.84,-.49);h.rotation.x=.15;for(const p of[-1,1]){o(r,t,p*.18,.64,.46).scale.set(.2,.325,.5);const _=new od([new P(p*.3,.89,.37),new P(p*.402,.67,.76),new P(p*.33,.34,.72)]);o(new ic(_,24,.014,8,!1),e,0,0,0);const u=o(new Kt(.014,.014,.27,10),e,p*.34,1.22,-.47);u.rotation.z=-p*.22,o(new Ve(.085,24,16),e,p*.39,1.36,-.47).scale.set(1,1,.22),o(c(.14,.065,.095,.025),i,p*.3,1.15,-.49)}o(c(.29,.66,.25,.12),t,0,.62,.79),o(c(.49,.14,.71,.065),s,0,1,.29),o(c(.5,.024,.69,.01),e,0,.929,.3),o(c(.24,.25,.055,.025),e,0,.61,.952),o(c(.19,.2,.058,.024),a,0,.61,.988),o(c(.7,.07,.09,.03),t,0,1.15,-.48);const l=o(new Kt(.1,.1,.07,24),e,0,1.16,-.56);l.rotation.x=Math.PI/2;for(const p of[-.63,.65]){const g=o(new Kt(.235,.235,.145,32),i,0,.255,p);g.rotation.z=Math.PI/2;const _=o(new Kt(.12,.12,.15,24),e,0,.255,p);_.rotation.z=Math.PI/2}o(r,t,0,.49,-.63).scale.set(.14,.09,.31);const f=o(new Kt(.055,.065,.49,20),e,.26,.25,.59);return f.rotation.x=Math.PI/2,n}function gl(n,t){n.traverse(e=>{if(e instanceof Q)for(const i of Array.isArray(e.material)?e.material:[e.material])i instanceof ot&&i.name==="scooter-paint"&&i.color.setHex(ur[t])})}function ln(n,t,e){const i=new Q(new Ve(1,24,16),n);return i.position.set(...t),i.scale.set(...e),i.castShadow=!0,i.receiveShadow=!0,i}function ks(n,t,e,i,s){const a=new P(...t),r=new P(...e),o=new Q(new Kt(i,s,a.distanceTo(r),14),n);return o.position.copy(a).add(r).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new P(0,1,0),a.sub(r).normalize()),o.castShadow=!0,o.receiveShadow=!0,o}function H0(){const n=new jt;n.name="rider";const t=new ot({color:480356,roughness:.88}),e=new ot({color:1324091,roughness:.9}),i=new ot({color:2503224,roughness:.94}),s=new ot({color:1645597,roughness:.76}),a=new ot({color:1645597,roughness:.8}),r=new ot({color:15329247,metalness:.2,roughness:.31}),o=new ot({color:1980480,metalness:.18,roughness:.16});n.add(ln(i,[0,.9,.23],[.23,.13,.19]));const c=ln(t,[0,1.22,.2],[.23,.33,.15]);c.rotation.x=-.13,n.add(c),n.add(ln(e,[0,1,.2],[.23,.045,.15])),n.add(ks(e,[0,1.46,.18],[0,1.53,.14],.075,.066));for(const l of[-1,1]){const d=l*.17;n.add(ks(i,[d,.89,.25],[l*.24,.68,-.04],.11,.09)),n.add(ln(i,[l*.24,.67,-.04],[.095,.095,.095])),n.add(ks(i,[l*.24,.65,-.04],[l*.22,.39,-.11],.09,.07)),n.add(ln(s,[l*.22,.34,-.2],[.095,.065,.17])),n.add(ln(t,[l*.23,1.39,.17],[.105,.11,.105])),n.add(ks(t,[l*.25,1.38,.15],[l*.27,1.15,-.1],.086,.068)),n.add(ln(e,[l*.27,1.14,-.1],[.067,.07,.067])),n.add(ks(t,[l*.27,1.14,-.1],[l*.28,1.08,-.43],.066,.052)),n.add(ln(a,[l*.28,1.08,-.46],[.064,.041,.077]))}n.add(ln(r,[0,1.65,.12],[.155,.17,.155])),n.add(ln(o,[0,1.65,-.02],[.126,.067,.026]));const h=new Q(new oi(.136,.012,8,36,Math.PI),e);return h.position.set(0,1.6,-.02),h.rotation.z=Math.PI,h.castShadow=!0,n.add(h),n}async function O0(n){const t=N0(),e=H0();n.clear(),n.add(t,e)}const kt={lanes:3,laneWidth:2.4,baseSpeed:18,maxSpeed:52,minSpeed:6,lateralSpeed:18,jumpVelocity:12.2,gravity:28,jumpSafeHeight:.9,turboBoost:16,turboDuration:.5,turboRechargeRate:.12,comboTimeout:2.1,coinSpawnDistanceMin:24,coinSpawnDistanceMax:55,coinValue:14,cameraBaseOffset:new P(0,3.5,8.2),cameraLookAt:new P(0,1.5,-6),fov:60,fogNear:8,fogFar:160,cityFogColor:12115455},yn={HIGH_SCORE:"vespa_city_highscore",MUTE:"vespa_city_mute"},Id=n=>n[Math.floor(Math.random()*n.length)],Ga=(n,t,e)=>n+(t-n)*e,F0=(n,t,e)=>n.lerp(t,e),Dn=(n,t,e)=>n<t?t:n>e?e:n,Sn=()=>performance.now()/1e3,ai=(n,t=1)=>new ot({color:new Gt(n).multiplyScalar(.2),emissive:new Gt(n),emissiveIntensity:t,metalness:.1,roughness:.4}),Za=n=>new ot({color:n,metalness:.7,roughness:.35}),rn=n=>new ot({color:n,metalness:.05,roughness:.85}),_l=(n,t)=>(Math.sin(n*43.7)+Math.sin(n*31.1))*.5*t,yo=(...n)=>{},Le={sky:10344936,haze:12181983,lane:16774095,coral:15167313,cream:15851453,petrol:1534834,sage:7902575,hazardRed:15088434,hazardAmber:16756736},Va={laneDash:new wt(.09,.025,1.35),coinRim:new oi(.27,.055,10,28),coinFace:new Kt(.225,.225,.055,28),coinInset:new Kt(.155,.155,.062,24),coinMark:new wt(.055,.22,.035),beachBlock:new wt(8.5,.12,5),seaBlock:new on(110,5),foamBlock:new on(.38,5)},Wa={rim:new ot({color:16765786,emissive:10179072,emissiveIntensity:.65,metalness:.82,roughness:.2}),face:new ot({color:16165147,emissive:8008960,emissiveIntensity:.35,metalness:.72,roughness:.27}),inset:new ot({color:16769674,emissive:11689216,emissiveIntensity:.5,metalness:.68,roughness:.22}),mark:new ot({color:16774077,emissive:16753951,emissiveIntensity:.8,metalness:.5,roughness:.25})};new ot({color:15334389,emissive:11068383,emissiveIntensity:.25,roughness:.75});function z0(){const n=a=>{const r=document.createElement("div");r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.background="rgba(255, 0, 0, 0.9)",r.style.color="white",r.style.padding="20px",r.style.borderRadius="10px",r.style.zIndex="9999",r.style.maxWidth="90%",r.style.textAlign="center",r.innerHTML=`
      <h3>Errore WebGL</h3>
      <p>${a}</p>
      <p style="font-size: 12px; margin-top: 10px;">Prova a ricaricare la pagina o abilita WebGL nelle impostazioni del browser.</p>
    `,document.body.appendChild(r)},t={antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1};let e=null;try{e=new Gh(t),yo("createRenderer() - WebGLRenderer creato")}catch(a){console.warn("createRenderer() - WebGLRenderer fallito, provo WebGL1 con canvas manuale",a);try{const r=document.createElement("canvas"),o=r.getContext("webgl",{antialias:!0,preserveDrawingBuffer:!1});if(!o)throw new Error("Fallback WebGL context non disponibile");e=new Gh({...t,canvas:r,context:o}),yo("createRenderer() - Renderer creato con contesto WebGL1 fallback")}catch(r){throw console.error("ERRORE nella creazione del renderer WebGL:",r),n("Il tuo dispositivo non riesce a creare un contesto WebGL."),r}}if(!e.getContext())throw console.error("createRenderer() - Context WebGL non disponibile"),n("Impossibile inizializzare WebGL: contesto non disponibile."),new Error("WebGL context unavailable");e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,window.matchMedia("(pointer: coarse)").matches?1.5:1.75)),e.shadowMap.enabled=!0,e.shadowMap.type=bl,e.outputColorSpace=He,e.toneMapping=Al,e.toneMappingExposure=.95,e.setClearColor(new Gt(Le.sky)),e.domElement.addEventListener("webglcontextlost",a=>{a.preventDefault(),console.error("WebGL context lost - mostro messaggio all'utente"),n("Il rendering 3D e stato disattivato dal browser (contesto WebGL perso). Chiudi altre app o ricarica la pagina.")},{passive:!1});const i=e.domElement;i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.zIndex="0",i.id="game-canvas";const s=document.getElementById("hud");return s&&s.parentNode?s.parentNode.insertBefore(i,s):document.body.insertBefore(i,document.body.firstChild),yo(`Canvas dimensioni: ${i.width}x${i.height}, style: ${i.style.width}x${i.style.height}`),e}function B0(){return new Qe(kt.fov,window.innerWidth/window.innerHeight,.1,700)}function G0(){const n=new rd;return n.background=new Gt(Le.sky),n.fog=new la(Le.haze,kt.fogNear,kt.fogFar),n}function V0(){const n=new jt,t=Za(Le.coral),e=Za(2504762),i=new Q(new wt(.6,.25,1.3),t);i.position.set(0,.6,0),i.castShadow=!0,i.receiveShadow=!0,n.add(i);const s=new Q(new wt(.5,.9,.18),t);s.position.set(0,.9,-.45),s.castShadow=!0,n.add(s);const a=new Q(new wt(.5,.06,.9),e);a.position.set(0,.5,.1),a.castShadow=!0,a.receiveShadow=!0,n.add(a);const r=new Q(new Ve(1,28,20),t);r.scale.set(.34,.29,.42),r.position.set(0,.8,.5),r.castShadow=!0,n.add(r);const o=new Q(new wt(.5,.12,.7),rn(1118481));o.position.set(0,1.05,.3),o.castShadow=!0,n.add(o);const c=Za(1118481),h=new Kt(.23,.23,.14,16),l=new Q(h,c);l.rotation.z=Math.PI/2,l.position.set(0,.32,-.55),l.castShadow=!0;const d=new Q(h,c);d.rotation.z=Math.PI/2,d.position.set(0,.32,.55),d.castShadow=!0,n.add(l,d);const f=new Q(new wt(.7,.08,.08),t);f.position.set(0,1.18,-.45),f.castShadow=!0,n.add(f);const p=new Q(new Kt(.11,.11,.09,20),ai(16775377,3.2));p.rotation.x=Math.PI/2,p.position.set(0,1.2,-.54),p.castShadow=!1,n.add(p);const g=new Q(new wt(.22,.14,.04),ai(16721472,1.2));g.position.set(0,.9,.9),n.add(g);const _=rn(16042405),u=rn(Le.petrol),m=rn(2504762),S=new ot({color:15525849,roughness:.28,metalness:.15}),v=new Vs(.065,.27,4,10),w=new Q(v,m);w.position.set(-.09,.8,.15),w.rotation.x=-.45;const U=w.clone();U.position.x=.09;const R=new Q(new Vs(.155,.2,6,12),u);R.position.set(0,1.25,.1),R.scale.z=.7,R.rotation.x=-.15;const T=new Vs(.055,.28,4,10),I=new Q(T,u);I.position.set(-.26,1.3,-.2),I.rotation.x=-.9,I.rotation.z=-.2;const M=I.clone();M.position.x=.26,M.rotation.z=.2;const y=new Q(new Ve(.12,16,16),_);y.position.set(0,1.6,-.02);const L=new Q(new Ve(.14,20,20,0,Math.PI*2,0,Math.PI/1.2),S);L.position.copy(y.position),L.position.y+=.01;const D=new Q(new wt(.16,.06,.02),rn(1719119));return D.position.set(0,1.58,-.13),[w,U,R,I,M,y,L,D].forEach(A=>{A.castShadow=!0,n.add(A)}),n.position.set(0,0,-5),n.traverse(A=>{A.isMesh&&(A.receiveShadow=!0)}),s0(n),n}function W0(){const n=new jt,t=Id([Le.coral,Le.petrol,Le.cream,Le.sage]),e=new Q(new wt(1.2,.35,2),rn(t));e.position.y=.4,e.castShadow=!0,n.add(e);const i=new Q(new wt(.9,.4,.8),rn(2504762));i.position.set(0,.75,-.1),i.castShadow=!0,n.add(i);const s=new Kt(.22,.22,.15,12),a=Za(1381653),r=[[-.5,.22,-.8],[.5,.22,-.8],[-.5,.22,.8],[.5,.22,.8]],o=[];r.forEach(([p,g,_])=>{const u=new Q(s,a);u.rotation.z=Math.PI/2,u.position.set(p,g,_),u.castShadow=!0,u.name="traffic-car-wheel",o.push(u),n.add(u)}),n.userData.wheels=o,n.userData.trafficCruiseSpeed=8+Math.random()*5,n.userData.motionPhase=Math.random()*Math.PI*2;const c=new Q(new wt(.18,.08,.04),ai(16776145,1.6));c.position.set(.32,.4,-1.02);const h=c.clone();h.position.set(-.32,.4,-1.02);const l=ai(15746104,1.35),d=new Q(new wt(.22,.1,.045),l);d.position.set(.36,.42,1.02);const f=d.clone();return f.position.x=-.36,n.add(c,h,d,f),Cd(n),n}function X0(){const n=new jt,t=new Q(new wt(1.6,.5,.4),rn(Le.cream));t.castShadow=!0,t.receiveShadow=!0;const e=new Q(new wt(1.6,.22,.42),ai(Le.hazardRed,.45));e.position.y=.16,e.castShadow=!0;const i=ai(Le.hazardAmber,1.2),s=new Ve(.09,8,6),a=new Q(s,i);a.position.set(-.62,.38,0);const r=a.clone();return r.position.x=.62,n.add(t,e,a,r),n}function q0(){const n=new jt,t=new Q(new Kt(.12,.18,.06,16),rn(Le.cream));t.position.y=.03;const e=new Q(new si(.16,.42,16),ai(Le.hazardAmber,.25));e.position.y=.27,e.castShadow=!0,t.castShadow=!0;const i=new Q(new Kt(.13,.15,.08,12),rn(Le.cream));return i.position.y=.25,n.add(t,e,i),n}function Y0(){const n=new jt,t=rn(Le.petrol),e=new Q(new wt(1.8,.2,2.5),t);e.position.y=.09,e.castShadow=!0,e.receiveShadow=!0;const i=new Q(new wt(1.8,.32,1.9),t);i.position.set(0,.32,-.25),i.rotation.x=-Math.PI/10,i.castShadow=!0;const s=new Q(new wt(.7,.035,.35),ai(Le.lane,.65));return s.position.set(0,.51,-.45),s.rotation.x=i.rotation.x,n.add(e,i,s),n}function $0(){const n=new jt,t=new Q(Va.coinRim,Wa.rim),e=new Q(Va.coinFace,Wa.face),i=new Q(Va.coinInset,Wa.inset);e.rotation.x=Math.PI/2,i.rotation.x=Math.PI/2,i.position.z=.035;const s=new Q(Va.coinMark,Wa.mark);s.position.set(-.052,.01,.075),s.rotation.z=-.43;const a=s.clone();return a.position.x=.052,a.rotation.z=.43,n.add(e,t,i,s,a),n}function lc(n,t,e,i=new Set){const s=ze(n.trackDistance-5-t).lanes,a=new Map;for(let h=0;h<kt.lanes;h++)a.set(h,0);for(const h of n.obstacles){if(h.type==="COIN")continue;const l=h.mesh.userData.trackZ??h.mesh.position.z;if(Math.abs(l-t)<e){const d=h.laneIndex;a.set(d,(a.get(d)||0)+1)}}const r=[];for(let h=0;h<kt.lanes;h++)s.includes(h)&&a.get(h)===0&&!i.has(h)&&r.push(h);if(r.length>0)return r[Math.floor(Math.random()*r.length)];let o=1/0,c=0;for(let h=0;h<kt.lanes;h++){if(!s.includes(h)||i.has(h))continue;const l=a.get(h)||0;l<o&&(o=l,c=h)}return c}function Z0(n,t,e=[]){const i=Id(["CAR","BARRIER","CONE"]);let s,a=2,r=2;i==="CAR"?(s=W0(),a=3,r=1.8):i==="BARRIER"?(s=X0(),a=1.6,r=1.4):(s=q0(),a=.6,r=.8);const c=lc(n,t,35,new Set(e)),h=(c-(kt.lanes-1)/2)*kt.laneWidth;s.position.set(h,0,t),s.userData.trackZ=t,s.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),n.scene.add(s);const l={mesh:s,type:i,laneOffset:h,laneIndex:c,length:a,collisionRadius:r,passed:!1,awarded:!1};return n.obstacles.push(l),l}function J0(n,t,e=[]){const i=Y0(),a=lc(n,t,30,new Set(e)),r=(a-(kt.lanes-1)/2)*kt.laneWidth;i.position.set(r,0,t),i.userData.trackZ=t,i.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),n.scene.add(i);const o={mesh:i,type:"RAMP",laneOffset:r,laneIndex:a,length:2.5,collisionRadius:1.5,passed:!1,awarded:!1};return n.obstacles.push(o),o}function Xa(n,t,e){const i=$0(),s=typeof e=="number"?e:lc(n,t,20),a=(s-(kt.lanes-1)/2)*kt.laneWidth;i.position.set(a,.6,t),i.userData.trackZ=t,i.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scene.add(i);const r={mesh:i,type:"COIN",laneOffset:a,laneIndex:s,length:.2,collisionRadius:.6,passed:!1,awarded:!1};return n.obstacles.push(r),r}const Jn={async setItem(n,t){localStorage.setItem(n,t)},async getItem(n){return localStorage.getItem(n)},async removeItem(n){localStorage.removeItem(n)},async clear(){localStorage.clear()}};let _t=null;const te=n=>{const t=document.getElementById(n);if(!t)throw new Error(`Elemento UI mancante: #${n}`);return t},vs=(n,t)=>{n.classList.toggle("visible",t),n.style.display=t?"flex":"none",n.setAttribute("aria-hidden",t?"false":"true")},vl=(n,t,e,i)=>{const s=Math.max(0,Math.min(e,i)),a=i>0?s/i*100:0;t.style.width=`${a}%`,n.setAttribute("aria-valuenow",`${Math.round(s)}`)},Mo=n=>{window.dispatchEvent(new KeyboardEvent(n,{code:"Space",key:" ",bubbles:!0,cancelable:!0}))},K0=n=>{const t=i=>{var s;i.preventDefault(),i.stopPropagation(),n.classList.add("is-pressed"),(s=n.setPointerCapture)==null||s.call(n,i.pointerId),Mo("keydown")},e=i=>{i.preventDefault(),i.stopPropagation(),n.classList.remove("is-pressed"),Mo("keyup")};n.addEventListener("pointerdown",t),n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("lostpointercapture",()=>{n.classList.remove("is-pressed"),Mo("keyup")})},j0=n=>{const t=()=>{var e;((e=n.textContent)==null?void 0:e.trim())==="GIOCA"&&(n.innerHTML='<span>Parti</span><span aria-hidden="true">→</span>',_t!=null&&_t.menuOverlay.classList.contains("visible")&&n.focus())};new MutationObserver(t).observe(n,{childList:!0,characterData:!0,subtree:!0}),t()};async function Q0(){if(_t)return _t;const n=te("mission-progress"),t=te("turbo-progress");_t={score:te("score-value"),speed:te("speed-value"),streak:te("streak-value"),coins:te("coins-value"),message:te("message"),highScore:te("highscore-value"),menuHighScore:te("menu-highscore-value"),menuOverlay:te("menu-overlay"),gameOverOverlay:te("game-over-overlay"),playBtn:te("play-btn"),restartBtn:te("restart-btn"),finalScore:te("final-score"),bestScore:te("best-score"),muteBtn:te("mute-btn"),mobileAccelerate:te("mobile-accelerate"),mobileBrake:te("mobile-brake"),mobileTurbo:te("mobile-turbo"),missionValue:te("mission-value"),missionProgress:n,missionProgressFill:n.querySelector(".progress-fill"),turboValue:te("turbo-value"),turboProgress:t,turboProgressFill:t.querySelector(".progress-fill"),recapDistance:te("recap-distance"),recapCoins:te("recap-coins"),recapNearMisses:te("recap-near-misses"),recapBestCombo:te("recap-best-combo"),recapMission:te("recap-mission")};const[e,i]=await Promise.all([Jn.getItem(yn.HIGH_SCORE),Jn.getItem(yn.MUTE)]);e&&(_t.highScore.textContent=e,_t.menuHighScore.textContent=e);const s=i==="1";return _t.muteBtn.setAttribute("aria-pressed",s?"true":"false"),_t.muteBtn.setAttribute("aria-label",s?"Attiva audio":"Disattiva audio"),K0(_t.mobileTurbo),j0(_t.playBtn),_t}function xl(){_t&&(vs(_t.menuOverlay,!0),vs(_t.gameOverOverlay,!1),window.setTimeout(()=>_t==null?void 0:_t.playBtn.focus(),0))}function Dd(){var n;if(!_t){console.error("hideMenu: ui e null!");return}vs(_t.menuOverlay,!1),_t.menuOverlay.contains(document.activeElement)&&((n=document.activeElement)==null||n.blur())}function Ud(n){if(!_t)return;const t=n,e=t.raceDistance,i=Math.floor(t.score),s=Math.floor(t.highScore),a=Math.max(0,Math.floor(t.distance)),r=t.lapCompleted;te("game-over-title").textContent=r?"Giro completato!":"Corsa interrotta",te("recap-time").textContent=ko(t.elapsedSeconds),te("recap-best-time").textContent=ko(t.bestLapSeconds),vs(_t.gameOverOverlay,!0),vs(_t.menuOverlay,!1),_t.finalScore.innerHTML=`Punteggio <strong>${i}</strong>`,_t.bestScore.textContent=i>=s&&i>0?`Nuovo record · ${s}`:`Record · ${s}`,_t.recapDistance.textContent=`${a} m`,_t.recapCoins.textContent=`${t.coins}`,_t.recapNearMisses.textContent=`${t.nearMisses??0}`,_t.recapBestCombo.textContent=`x${(t.bestCombo??t.combo).toFixed(1)}`,_t.recapMission.textContent=r?t.newBestLap?"Nuovo record sul giro!":"Traguardo raggiunto. Bellissima guida!":`Mancavano ${Math.max(0,e-a)} m al traguardo.`,_t.recapMission.classList.toggle("is-complete",r),window.setTimeout(()=>_t==null?void 0:_t.restartBtn.focus(),0)}function kd(){var n;_t&&(vs(_t.gameOverOverlay,!1),_t.gameOverOverlay.contains(document.activeElement)&&((n=document.activeElement)==null||n.blur()))}function dc(n,t,e){if(!_t)return;const i=Math.floor(n.score),s=n.raceDistance;_t.missionProgress.setAttribute("aria-valuemax",String(s));const a=Math.max(0,n.distance),r=Math.round(Math.max(0,Math.min(e,1))*100),o=a>=s;_t.score.textContent=`${i}`,te("race-time").textContent=ko(n.elapsedSeconds),_t.speed.textContent=`${Math.round(t*3)} km/h`,_t.streak.textContent=`x${n.combo.toFixed(1)}`,_t.coins.textContent=`${n.coins}`,_t.highScore.textContent=`${Math.floor(n.highScore)}`,_t.menuHighScore.textContent=`${Math.floor(n.highScore)}`,_t.turboValue.textContent=`${r}%`,vl(_t.turboProgress,_t.turboProgressFill,r,100),vl(_t.missionProgress,_t.missionProgressFill,a,s),_t.missionValue.textContent=o?"FINISH · Giro completato!":`${Math.floor(a)} / ${Math.round(s)} m`,_t.missionProgress.classList.toggle("is-complete",o),_t.turboProgress.classList.toggle("is-ready",e>=.99),e>=.99?(_t.message.textContent="Turbo pronto — Spazio o pulsante ⚡",_t.message.style.opacity="1"):e>.3?(_t.message.textContent="Sfiora gli ostacoli e carica il turbo",_t.message.style.opacity="0.82"):(_t.message.textContent="Segui le curve fino al traguardo",_t.message.style.opacity="0.7")}async function Nd(n,t=yn.HIGH_SCORE){const e=await Jn.getItem(t),i=e?parseFloat(e):0;return n>i?(await Jn.setItem(t,Math.floor(n).toString()),n):i}function uc(n,t=.2,e=1.2){n.style.transition="transform 0.12s ease-out",n.style.transform=`scale(${e})`,window.setTimeout(()=>{n.style.transform="scale(1)"},t*1e3)}function zn(n,t=.8){_t&&(_t.message.textContent=n,_t.message.style.opacity="1",_t.message.style.transition="opacity 0.3s ease",window.setTimeout(()=>{_t&&(_t.message.style.opacity="0.75")},t*1e3))}function Di(){return _t}const yl={MENU:{START:"RUNNING"},RUNNING:{FINISH:"FINISHED",CRASH:"GAME_OVER",RETURN_TO_MENU:"MENU"},GAME_OVER:{RESTART:"RUNNING",RETURN_TO_MENU:"MENU"},FINISHED:{RESTART:"RUNNING",RETURN_TO_MENU:"MENU"}};class tg{constructor(t="MENU"){Yt(this,"currentState");Yt(this,"listeners",new Set);this.currentState=t}get state(){return this.currentState}can(t){return yl[this.currentState][t]!==void 0}dispatch(t){const e=this.currentState,i=yl[e][t]??e,s={from:e,to:i,event:t,changed:e!==i};if(s.changed){this.currentState=i;for(const a of this.listeners)a(s)}return s}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}}const Hd={distanceScoreFactor:.35,coinValue:14,nearMissValue:25,comboStep:.15,maxCombo:6,comboWindowSeconds:2.1},dn=(n,t)=>{if(!Number.isFinite(n)||n<0)throw new RangeError(`${t} must be a finite non-negative number`);return n},eg=n=>{if(!n)return;if(!n.id.trim())throw new Error("Mission id cannot be empty");const t=[n.targetScore,n.targetDistance,n.targetCoins,n.targetNearMisses].filter(e=>e!==void 0);if(t.length===0)throw new Error("Mission requires at least one target");for(const e of t)dn(e,"Mission target")};class ng{constructor(t=null,e=Hd){Yt(this,"score",0);Yt(this,"distance",0);Yt(this,"coins",0);Yt(this,"nearMisses",0);Yt(this,"combo",1);Yt(this,"maxCombo",1);Yt(this,"comboTimeRemaining",0);if(this.mission=t,this.rules=e,eg(t),dn(e.distanceScoreFactor,"distanceScoreFactor"),dn(e.coinValue,"coinValue"),dn(e.nearMissValue,"nearMissValue"),dn(e.comboStep,"comboStep"),dn(e.maxCombo,"maxCombo"),dn(e.comboWindowSeconds,"comboWindowSeconds"),e.maxCombo<1)throw new RangeError("maxCombo must be at least 1")}apply(t){switch(t.type){case"TICK":this.advance(t.deltaSeconds,t.speed);break;case"COIN":this.collectCoin(t.count);break;case"NEAR_MISS":this.registerNearMiss();break;case"BONUS":this.awardBonus(t.points);break;case"RESET":this.reset();break}return this.snapshot()}advance(t,e){dn(t,"deltaSeconds"),dn(e,"speed");const i=e*t;return this.distance+=i,this.score+=i*this.rules.distanceScoreFactor*this.combo,this.comboTimeRemaining=Math.max(0,this.comboTimeRemaining-t),this.comboTimeRemaining===0&&(this.combo=1),this.snapshot()}collectCoin(t=1){if(!Number.isInteger(t)||t<=0)throw new RangeError("Coin count must be a positive integer");return this.coins+=t,this.score+=this.rules.coinValue*t*this.combo,this.increaseCombo(this.rules.comboStep*t),this.snapshot()}registerNearMiss(){return this.nearMisses+=1,this.score+=this.rules.nearMissValue*this.combo,this.increaseCombo(this.rules.comboStep),this.snapshot()}awardBonus(t){return dn(t,"Bonus points"),this.score+=t,this.snapshot()}reset(){return this.score=0,this.distance=0,this.coins=0,this.nearMisses=0,this.combo=1,this.maxCombo=1,this.comboTimeRemaining=0,this.snapshot()}snapshot(){return{score:this.score,distance:this.distance,coins:this.coins,nearMisses:this.nearMisses,combo:this.combo,maxCombo:this.maxCombo,mission:this.missionProgress()}}increaseCombo(t){this.combo=Math.min(this.rules.maxCombo,this.combo+t),this.maxCombo=Math.max(this.maxCombo,this.combo),this.comboTimeRemaining=this.rules.comboWindowSeconds}missionProgress(){if(!this.mission)return null;const t=(this.mission.targetScore===void 0||this.score>=this.mission.targetScore)&&(this.mission.targetDistance===void 0||this.distance>=this.mission.targetDistance)&&(this.mission.targetCoins===void 0||this.coins>=this.mission.targetCoins)&&(this.mission.targetNearMisses===void 0||this.nearMisses>=this.mission.targetNearMisses);return{id:this.mission.id,completed:t,score:this.score,distance:this.distance,coins:this.coins,nearMisses:this.nearMisses}}}const ig=(n=null,t=Hd)=>new ng(n,t),Pn=(n,t,e)=>n+(t-n)*e;function Od(n,t=18,e=52){const i=Math.max(0,Math.min(n/900,1)),s=i*i*(3-2*i);return{cruiseSpeed:Pn(t,28,s),maxSpeed:Pn(34,e,s),maxHazards:n<250?2:n<600?3:4,hazardSpacingMin:Pn(58,32,s),hazardSpacingMax:Pn(76,44,s),hazardSpawnAheadMin:Pn(82,96,s),hazardSpawnAheadMax:Pn(98,116,s),rampSpacingMin:Pn(115,78,s),rampSpacingMax:Pn(145,105,s),rampChance:Pn(.32,.52,s)}}let mt;const ci=new tg;let me=ci.state;ci.subscribe(({to:n})=>{me=n});let ce={left:!1,right:!1,up:!1,down:!1,turbo:!1},Ut={raceDistance:ia,elapsedSeconds:0,lapCompleted:!1,bestLapSeconds:null,newBestLap:!1,score:0,highScore:0,distance:0,coins:0,nearMisses:0,combo:1,bestCombo:1,missionCompleted:!1,lastComboTime:0};const aa=ig({id:"lungomare-750",targetDistance:750},{distanceScoreFactor:.7,coinValue:kt.coinValue,nearMissValue:75,comboStep:.15,maxCombo:6,comboWindowSeconds:kt.comboTimeout});let vt={context:null,muted:!1,engineNode:null,engineOvertone:null,engineGain:null,engineOutputGain:null,engineFilter:null,lastWhooshTime:0},Hs=0,Ja=0,as=0,rs=[],xs=Sn(),Os=0,ys=0,vn=0,fr=!1,Pi=0,Ka=0;const sg=1/20;let ie=0,qe=new xd;const On=new wm;let Xs,pn,Bo=Uo,pr=yn.HIGH_SCORE,br,qs,Go="";const ag=new dm;let Ri=null,$n=!0,Ys=!1,kn=document.hidden,mr=!1;function Ui(){vt.context&&vt.engineOutputGain&&vd(vt.engineOutputGain.gain,vt.context.currentTime,!1),mr=!1}const xi=new P,qa=new P,Ml=new P;function hs(n){return n.mesh.userData.trackZ}function Vo(n){return n==="CAR"||n==="BARRIER"||n==="CONE"}function is(n,t){return n+Math.random()*(t-n)}const rg=.22;function og(n,t,e){const i=typeof n.userData.trafficCruiseSpeed=="number"?n.userData.trafficCruiseSpeed:10,s=Math.min(i,Math.max(2.5,t*.72)),a=(typeof n.userData.motionPhase=="number"?n.userData.motionPhase:0)+e*(3.2+s*.08);n.userData.motionPhase=a;const r=s/rg*e,o=n.userData.wheels;return o==null||o.forEach(c=>{c.rotateY(r)}),n.position.y=Math.sin(a*2)*.012,n.rotation.x=Math.sin(a)*.007,n.rotation.z=Math.sin(a*.7)*.012,s}function Wo(n,t=16){const e=new Set;for(const i of mt.obstacles)Vo(i.type)&&Math.abs(hs(i)-n)<=t/2&&e.add(i.laneIndex);return e}function cg(n){const t=Wo(n,20),e=[],i=ze(ie-5-n).lanes;for(const a of i)t.has(a)||e.push(a);const s=e.length>0?e:i;return s[Math.floor(Math.random()*s.length)]}function Tr(n){var t;Ut.score=n.score,Ut.distance=n.distance,Ut.coins=n.coins,Ut.nearMisses=n.nearMisses,Ut.combo=n.combo,Ut.bestCombo=n.maxCombo,Ut.missionCompleted=((t=n.mission)==null?void 0:t.completed)??!1,Ut.lastComboTime=Sn()}function hg(){const n=window.AudioContext||window.webkitAudioContext;if(!n){console.warn("AudioContext non supportato, avvio senza audio.");return}try{vt.context=new n}catch(h){console.warn("Impossibile creare l'audio, il gioco prosegue silenzioso.",h);return}const t=vt.context;if(!t)return;const e=t.createOscillator();e.type="sawtooth";const i=t.createOscillator();i.type="triangle",i.detune.value=-120;const s=t.createOscillator();s.type="sine",s.frequency.value=22;const a=t.createGain();a.gain.value=.025;const r=t.createGain();r.gain.value=.11;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=320,o.Q.value=.9,s.connect(a).connect(r.gain),e.connect(r),i.connect(r);const c=t.createGain();c.gain.value=0,r.connect(o).connect(c).connect(t.destination),vt.engineOutputGain=c,e.start(),i.start(),s.start(),vt.engineNode=e,vt.engineOvertone=i,vt.engineGain=r,vt.engineFilter=o,mr=!1,Ri==null||Ri.dispose(),Ri=new um(t),t.onstatechange=()=>{t===vt.context&&(t.state!=="running"?Ui():(mt&&fc(mt.player.speed),$s()))},vt.muted&&(r.gain.value=0)}function $s(){Ri==null||Ri.sync(Ys&&$n&&!vt.muted&&!kn)}function bi(){if(vt.muted||kn)return;Ys=!0,(!vt.context||vt.context.state==="closed")&&hg();const n=vt.context;n&&(ag.resume(n,!0).then(t=>{t&&n===vt.context&&mt&&fc(mt.player.speed)}),$s())}function fc(n){if(!vt.context||!vt.engineNode||!vt.engineGain||!vt.engineOvertone||!vt.engineFilter)return;if(vt.muted||me!=="RUNNING"||kn||vt.context.state!=="running"){Ui();return}vt.engineOutputGain&&!mr&&(vd(vt.engineOutputGain.gain,vt.context.currentTime,!0),mr=!0);const t=Dn((n-kt.minSpeed)/(kt.maxSpeed-kt.minSpeed),0,1),e=85+t*150,i=70+t*90,s=.11+t*.07;vt.engineNode.frequency.setTargetAtTime(e,vt.context.currentTime,.12),vt.engineOvertone.frequency.setTargetAtTime(e*.52,vt.context.currentTime,.14),vt.engineGain.gain.setTargetAtTime(s,vt.context.currentTime,.16),vt.engineFilter.frequency.setTargetAtTime(380+t*320,vt.context.currentTime,.18),vt.engineFilter.Q.setTargetAtTime(.9+t*.6,vt.context.currentTime,.16),vt.engineOvertone.detune.setTargetAtTime(i*-.1,vt.context.currentTime,.18)}function Fd(){if(!vt.context||vt.muted)return;const n=vt.context.currentTime;if(n-vt.lastWhooshTime<.3)return;vt.lastWhooshTime=n;const t=vt.context.createOscillator(),e=vt.context.createGain();t.type="square",t.frequency.setValueAtTime(280,n),t.frequency.exponentialRampToValueAtTime(80,n+.25),e.gain.setValueAtTime(.18,n),e.gain.exponentialRampToValueAtTime(1e-4,n+.25),t.connect(e).connect(vt.context.destination),t.start(n),t.stop(n+.26)}function lg(){if(!vt.context||vt.muted)return;const n=vt.context.currentTime,t=2*vt.context.sampleRate,e=vt.context.createBuffer(1,t,vt.context.sampleRate),i=e.getChannelData(0);for(let o=0;o<t;o++)i[o]=(Math.random()*2-1)*(1-o/t);const s=vt.context.createBufferSource();s.buffer=e;const a=vt.context.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1200,n),a.frequency.exponentialRampToValueAtTime(90,n+.6);const r=vt.context.createGain();r.gain.setValueAtTime(.6,n),r.gain.exponentialRampToValueAtTime(.01,n+.6),s.connect(a).connect(r).connect(vt.context.destination),s.start(n),s.stop(n+.7)}async function dg(){var R;const n=G0(),t=B0(),e=z0(),i=new cm;ug();const s=new Gt(kt.cityFogColor),a=V0();await O0(a);let r="red";try{const T=localStorage.getItem("vespa_body_color");T&&T in ur&&(r=T)}catch{}gl(a,r),document.querySelectorAll('input[name="scooter-color"]').forEach(T=>{T.checked=T.value===r,T.addEventListener("change",()=>{if(T.value in ur){gl(a,T.value);try{localStorage.setItem("vespa_body_color",T.value)}catch{}}})});const o={mesh:a,speed:kt.baseSpeed,targetSpeed:kt.baseSpeed,maxSpeed:kt.maxSpeed,minSpeed:kt.minSpeed,lateralSpeed:kt.lateralSpeed,laneWidth:kt.laneWidth,laneX:0,verticalVelocity:0,isJumping:!1,turboCharge:0,turboActive:!1};n.add(o.mesh);const c=[],h=[],l=[];qs=new k0(n),Xs=new Rm(n),pn=new r0(n),lm(n,e),mt={trackDistance:0,scene:n,camera:t,renderer:e,clock:i,player:o,obstacles:[],roadSegments:c,buildings:h,streetLights:l,vehiclesPool:[],cityFogColor:s},await Q0();const f=await Jn.getItem(yn.MUTE);try{$n=localStorage.getItem("vespa_music_enabled")!=="0"}catch{}const p=document.getElementById("music-enabled");p.checked=$n;const g=document.getElementById("music-btn"),_=()=>{p.checked=$n,g.setAttribute("aria-pressed",String($n)),g.setAttribute("aria-label",$n?"Disattiva musica":"Attiva musica")},u=T=>{$n=T;try{localStorage.setItem("vespa_music_enabled",T?"1":"0")}catch{}_(),T?bi():$s()};p.addEventListener("change",()=>u(p.checked)),g.addEventListener("click",()=>u(!$n)),_(),f==="1"&&(vt.muted=!0);const m=await Jn.getItem(yn.HIGH_SCORE);m&&(Ut.highScore=parseFloat(m));const S=Di();S&&((R=document.getElementById("menu-return-btn"))==null||R.addEventListener("click",()=>{me!=="RUNNING"&&(clearTimeout(br),ci.dispatch("RETURN_TO_MENU"),Zs(),xl())}),S.muteBtn.setAttribute("aria-pressed",vt.muted?"true":"false"),S.muteBtn.setAttribute("aria-label",vt.muted?"Attiva audio":"Disattiva audio"),S.muteBtn.onclick=async()=>{vt.muted=!vt.muted,S.muteBtn.setAttribute("aria-pressed",vt.muted?"true":"false"),S.muteBtn.setAttribute("aria-label",vt.muted?"Attiva audio":"Disattiva audio"),vt.muted||bi(),vt.muted?(Ui(),$s(),await Jn.setItem(yn.MUTE,"1").catch(()=>{})):await Jn.setItem(yn.MUTE,"0").catch(()=>{})},Sl(S.mobileAccelerate,()=>ce.up=!0,()=>{ce.up=!1}),Sl(S.mobileBrake,()=>ce.down=!0,()=>{ce.down=!1})),Zs(),xl();const v=document.getElementById("route-select"),w=()=>{const T=v.value==="florence",I=document.getElementById("route-summary");I&&(I.textContent=T?"Firenze · 2003 m":"Un giro · 1800 m");const M=document.getElementById("route-description");M&&(M.textContent=T?"Dal Duomo all'Arno, con fermate e attraversamenti.":"Quattro quartieri, un traguardo. Batti il tuo tempo!"),document.querySelector(".route-note").hidden=!T};v.addEventListener("change",()=>{w(),me==="MENU"&&Zs()}),w(),window.addEventListener("resize",El),document.addEventListener("visibilitychange",()=>{kn=document.hidden,kn&&(Ui(),Ar()),$s(),xs=Sn(),!kn&&Ys&&bi(),!kn&&me==="RUNNING"&&zn("Bentornato — riprendi la corsa",1.1)});const U=()=>{(Ys||me==="RUNNING")&&bi()};window.addEventListener("pointerdown",U,{passive:!0}),window.addEventListener("touchend",U,{passive:!0}),window.addEventListener("keydown",U),window.addEventListener("pageshow",()=>{kn=document.hidden,Ys&&bi()}),El(),fr&&(fr=!1,qo()),zd()}function ug(){window.addEventListener("keydown",n=>{(n.code==="ArrowLeft"||n.code==="KeyA")&&(ce.left=!0),(n.code==="ArrowRight"||n.code==="KeyD")&&(ce.right=!0),(n.code==="ArrowUp"||n.code==="KeyW")&&(ce.up=!0),(n.code==="ArrowDown"||n.code==="KeyS")&&(ce.down=!0),n.code==="Space"&&(ce.turbo=!0,me==="MENU"?Xo().catch(t=>console.error("Errore avvio gioco:",t)):(me==="GAME_OVER"||me==="FINISHED")&&ys<=0&&fg().catch(t=>console.error("Errore riavvio gioco:",t))),n.code==="Enter"&&me==="MENU"&&Xo().catch(t=>console.error("Errore avvio gioco:",t))}),window.addEventListener("keyup",n=>{(n.code==="ArrowLeft"||n.code==="KeyA")&&(ce.left=!1),(n.code==="ArrowRight"||n.code==="KeyD")&&(ce.right=!1),(n.code==="ArrowUp"||n.code==="KeyW")&&(ce.up=!1),(n.code==="ArrowDown"||n.code==="KeyS")&&(ce.down=!1),n.code==="Space"&&(ce.turbo=!1)}),window.addEventListener("mousemove",n=>{var e,i,s;if(!mt||me!=="RUNNING"||(e=n.sourceCapabilities)!=null&&e.firesTouchEvents||(s=(i=n.target)==null?void 0:i.closest)!=null&&s.call(i,"button, #mobile-controls"))return;const t=n.clientX/window.innerWidth*2-1;mt.player.laneX=eh.lerp(mt.player.laneX,t*kt.laneWidth,.06)}),window.addEventListener("touchmove",n=>{if(!mt||me!=="RUNNING")return;const t=Array.from(n.touches).find(i=>{var s,a;return!((a=(s=i.target)==null?void 0:s.closest)!=null&&a.call(s,"button, #mobile-controls"))});if(!t)return;const e=t.clientX/window.innerWidth*2-1;mt.player.laneX=eh.lerp(mt.player.laneX,e*kt.laneWidth,.12)}),window.addEventListener("blur",Ar)}function Zs(){var i,s;clearTimeout(br);const n=((i=document.getElementById("route-select"))==null?void 0:i.value)??"0";Em(n==="florence"?"florence":"city"),qe=new xd(he()?yd:ia),On.reset(void 0,!0,a=>Td(a.at,ze(a.at).halfWidth)!==null),pn==null||pn.reset(),Ut.raceDistance=qe.length,Bo=he()?`${Uo}_florence_v2`:Uo,pr=he()?`${yn.HIGH_SCORE}_florence_v2`:yn.HIGH_SCORE,Ut.elapsedSeconds=0,Ut.lapCompleted=!1,Ut.newBestLap=!1;try{Ut.bestLapSeconds=fm(localStorage.getItem(Bo)),Ut.highScore=Math.max(0,Number(localStorage.getItem(pr))||0)}catch{Ut.bestLapSeconds=null,Ut.highScore=0}Ui(),Ut.score=0,Ut.distance=0,Ut.coins=0,Ut.nearMisses=0,Ut.combo=1,Ut.bestCombo=1,Ut.missionCompleted=!1,Ut.lastComboTime=Sn(),Tr(aa.reset()),Os=0,vn=0,ys=0,Pi=2.5,Ka=0;const t=Number(n);ie=[0,120,420,940,1300].includes(t)?t:0,Go="",qs==null||qs.reset(ie,qe.length),Xs==null||Xs.update(ie,On,he()),pn==null||pn.update(ie,0,On,he());const e=document.getElementById("district-value");if(e&&(e.textContent=he()?Md(0):cc(ie).district.name),(s=document.getElementById("route-attribution"))==null||s.classList.toggle("visible",he()),ce.left=!1,ce.right=!1,ce.up=!1,ce.down=!1,ce.turbo=!1,!!mt){mt.trackDistance=ie;for(let a=mt.obstacles.length-1;a>=0;a--)mt.scene.remove(mt.obstacles[a].mesh);mt.obstacles.length=0,mt.player.speed=kt.baseSpeed,mt.player.targetSpeed=kt.baseSpeed,mt.player.turboCharge=0,mt.player.turboActive=!1,mt.player.laneX=0,mt.player.isJumping=!1,mt.player.verticalVelocity=0,mt.player.mesh.position.set(0,0,-5),mt.player.mesh.rotation.set(0,0,0),Hs=52,Ja=18,as=105,rs=[],xs=Sn()}}async function Xo(){mt&&(Zs(),Dd(),kd(),ci.dispatch(me==="MENU"?"START":"RESTART"),xs=Sn(),zn("Vai! Evita auto e ostacoli - Carica il turbo",1.8),bi())}let So=!1;function qo(){if(!mt){fr=!0;return}So||(fr=!1,(me==="MENU"||me==="GAME_OVER"||me==="FINISHED")&&(So=!0,Zs(),Dd(),kd(),ci.dispatch(me==="MENU"?"START":"RESTART"),xs=Sn(),zn("Vai! Evita auto e ostacoli - Carica il turbo",1.8),bi(),So=!1))}async function fg(){await Xo()}function Sl(n,t,e){const i=a=>{a.preventDefault(),a.stopPropagation(),me==="RUNNING"&&(n.setPointerCapture(a.pointerId),n.classList.add("is-pressed"),t())},s=a=>{a.preventDefault(),a.stopPropagation(),n.classList.remove("is-pressed"),e()};n.addEventListener("pointerdown",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("lostpointercapture",s)}function Ar(){ce={left:!1,right:!1,up:!1,down:!1,turbo:!1},document.querySelectorAll(".is-pressed").forEach(n=>n.classList.remove("is-pressed"))}function El(){if(!mt)return;const{camera:n,renderer:t}=mt;n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}function zd(){if(requestAnimationFrame(zd),!mt)return;const n=Sn(),t=Math.max(0,n-xs),e=Math.min(.05,t);if(xs=n,kn){mt.renderer.render(mt.scene,mt.camera);return}if(Pi>0&&me==="RUNNING"&&(Pi=Math.max(0,Pi-e)),me==="RUNNING"){pg(e);const i=qe.advance(e,mt.player.speed,t);Ut.elapsedSeconds=qe.elapsed,mg(i),gg(i),xg(),qe.finished&&ci.state==="RUNNING"&&Sg()}else(me==="GAME_OVER"||me==="FINISHED")&&ys>0&&(ys-=e);Mg(e),hm(n),mt.renderer.render(mt.scene,mt.camera)}function pg(n){const t=mt.player;he()&&On.update(ie,t.speed,n,pn.isQueued(ie,t.laneX,On));const e=Od(Ut.distance,kt.baseSpeed,kt.maxSpeed);if(t.maxSpeed=e.maxSpeed,he()&&(t.maxSpeed=24),ce.up&&(t.targetSpeed+=18*n),ce.down?t.targetSpeed-=26*n:!t.turboActive&&t.targetSpeed<e.cruiseSpeed&&(t.targetSpeed=Ga(t.targetSpeed,e.cruiseSpeed,.45*n)),t.targetSpeed=Dn(t.targetSpeed,t.minSpeed,t.maxSpeed),ce.turbo&&!t.turboActive&&t.turboCharge>=.999){t.turboActive=!0,Os=kt.turboDuration,t.turboCharge=0,t.targetSpeed=Dn(t.targetSpeed+kt.turboBoost,t.minSpeed,t.maxSpeed+kt.turboBoost),vn=.6,Fd(),zn("TURBO!",.5);const c=Di();c&&uc(c.score)}if(t.turboActive?(Os-=n,Os<=0&&(t.turboActive=!1,t.targetSpeed=Dn(t.targetSpeed,t.minSpeed,t.maxSpeed))):t.turboCharge=Dn(t.turboCharge+kt.turboRechargeRate*n,0,1),t.speed=Ga(t.speed,t.targetSpeed,.9*n),he()){const c=pn.limitPlayerSpeed(ie,t.laneX,On.limitSpeed(ie,t.speed,n),n);c<t.speed&&(t.targetSpeed=Math.min(t.targetSpeed,Math.max(c,t.minSpeed)),t.turboActive=!1,Os=0),t.speed=c}t.isJumping&&(t.verticalVelocity-=kt.gravity*n,t.mesh.position.y+=t.verticalVelocity*n,t.mesh.position.y<=0&&(t.mesh.position.y=0,t.verticalVelocity=0,t.isJumping=!1));let i=0;ce.left&&(i-=1),ce.right&&(i+=1);const s=ze(ie).laneSpacing+.4;t.laneX+=i*t.lateralSpeed*n,t.laneX=Dn(t.laneX,-s,s),t.mesh.position.x=t.laneX;const a=hr(ie+5).heading-hr(ie).heading,r=t.speed<.1?0:-i*.25+Dn(Math.atan2(Math.sin(a),Math.cos(a))*2,-.28,.28);t.mesh.rotation.z=Ga(t.mesh.rotation.z,r,10*n);const o=t.speed<.1?0:-.05-(t.speed-kt.baseSpeed)*.002;t.mesh.rotation.x=Ga(t.mesh.rotation.x,o,2*n),fc(t.speed),Ka+=n,Ka>=sg&&(Ka=0,Di()&&dc(Ut,t.speed,t.turboCharge))}function mg(n){const t=mt.player,e=mt.player.mesh.position.z+4,i=Od(Ut.distance,kt.baseSpeed,kt.maxSpeed),s=t.speed*n;Hs-=s,as-=s,Ja-=s,ie+=s,mt.trackDistance=ie,qs.update(ie,n),Xs.update(ie,On,he()),pn.update(ie,n,On,he());const a=cc(ie),r=document.getElementById("district-value"),o=he()?Md(ie):a.district.name;if(Go!==o&&(Go=o,r&&(r.textContent=o),zn(o,1.8)),he()){const _=On.message(ie);if(_){const u=Di();u&&(u.message.textContent=_,u.message.style.opacity="1")}}const c=i.maxHazards,h=3,l=30;let d=0,f=0,p=0;for(const _ of mt.obstacles)Vo(_.type)?d++:_.type==="RAMP"?f++:_.type==="COIN"&&p++;let g=!1;if(!he()&&qe.distance<qe.length-160&&Pi<=0&&Hs<=0&&d<c){const _=e-is(i.hazardSpawnAheadMin,i.hazardSpawnAheadMax);if(Wo(_).size<ze(ie-5-_).lanes.length-1){const m=Z0(mt,_,rs);g=!0,rs.push(m.laneIndex),rs.length>2&&rs.shift(),Hs=is(i.hazardSpacingMin,i.hazardSpacingMax)}else Hs=12}if(Pi<=0&&!he()&&qe.distance<qe.length-160&&!g&&f<h&&as<=0){const _=e-is(i.hazardSpawnAheadMin,i.hazardSpawnAheadMax),u=Wo(_);as=is(i.rampSpacingMin,i.rampSpacingMax),u.size<ze(ie-5-_).lanes.length-1&&Math.random()<i.rampChance&&J0(mt,_,rs)}else g&&as<=0&&(as=10);if(p<l&&Ja<=0){const _=e-is(kt.coinSpawnDistanceMin,kt.coinSpawnDistanceMax);Ja=is(22,34);const u=cg(_);Xa(mt,_,u),Xa(mt,_-1.6,u),Xa(mt,_-3.2,u),Xa(mt,_-4.8,u)}for(let _=mt.obstacles.length-1;_>=0;_--){const u=mt.obstacles[_];u.mesh.userData.previousZ=hs(u);const m=u.type==="CAR"?Math.max(0,t.speed-og(u.mesh,t.speed,n))*n:s;u.mesh.userData.trackZ+=m;const S=ie-5-hs(u);u.laneOffset=(u.laneIndex-1)*ze(S).laneSpacing;const v=gn(S,u.laneOffset,ie);if(u.mesh.position.x=v.x,u.mesh.position.z=v.z,u.type!=="COIN"&&(u.mesh.rotation.y=v.heading),u.type==="COIN"&&(u.mesh.rotation.y+=n*3,u.mesh.position.y=.6+Math.sin((Sn()+u.mesh.position.z)*2)*.08),hs(u)>t.mesh.position.z+10){mt.scene.remove(u.mesh),mt.obstacles.splice(_,1);continue}if(!u.passed&&hs(u)>t.mesh.position.z&&(u.passed=!0,Vo(u.type))){const w=Math.abs(t.laneX-u.laneOffset),U=u.collisionRadius+1.15;if(!t.isJumping&&w>u.collisionRadius&&w<=U){Tr(aa.registerNearMiss()),t.turboCharge=Dn(t.turboCharge+.12,0,1),zn("BELLA FIGURA · NEAR-MISS +75",.9);const R=Di();R&&uc(R.streak,.18,1.22)}}}}function gg(n){var i;const t=Ut.missionCompleted;let e=aa.advance(n,mt.player.speed);!t&&((i=e.mission)!=null&&i.completed)&&(e=aa.awardBonus(500),zn("MISSIONE COMPLETATA · +500",1.8)),Tr(e)}function _g(){Tr(aa.collectCoin());const n=Di();n&&uc(n.score,.12,1.1)}function vg(){const n=mt.player;n.isJumping||(n.isJumping=!0,n.verticalVelocity=kt.jumpVelocity,vn=Math.max(vn,.4),Fd(),zn("SALTO!",.6))}function xg(){if(Pi>0)return;const n=mt.player,t=n.laneX,e=n.mesh.position.z,i=n.mesh.position.y;for(let s=mt.obstacles.length-1;s>=0;s--){const a=mt.obstacles[s],r=hs(a),o=r-e,h=(typeof a.mesh.userData.previousZ=="number"?a.mesh.userData.previousZ:r)-e,l=a.collisionRadius,f=h*o<=0?0:Math.abs(h)<Math.abs(o)?h:o;if(Math.abs(f)>l*2.5)continue;const p=a.laneOffset,g=t-p;if(g*g+f*f<l*l){if(a.type==="COIN"){a.awarded||(a.awarded=!0,_g()),mt.scene.remove(a.mesh),mt.obstacles.splice(s,1);continue}if(a.type==="RAMP"){mt.scene.remove(a.mesh),mt.obstacles.splice(s,1),vg();continue}if(i>kt.jumpSafeHeight)continue;yg();return}}}async function yg(){if(me!=="RUNNING")return;ci.dispatch("CRASH"),Ui(),Ar(),mt.player.speed=0,mt.player.targetSpeed=0,mt.player.turboActive=!1,dc(Ut,0,mt.player.turboCharge),ys=.5,vn=1.2,lg();const n=Ut.score,t=await Nd(n,pr).catch(()=>Ut.highScore);Ut.highScore=Math.max(t,n),Di()&&(br=setTimeout(()=>{Ud(Ut)},400))}function Mg(n){const t=mt.player,e=mt.camera;xi.copy(kt.cameraBaseOffset);const i=Dn((t.speed-kt.baseSpeed)/(kt.maxSpeed+kt.turboBoost-kt.baseSpeed),0,1);xi.z=7.4+i*2.5,xi.y=3.2+i*.7;const s=he()?Math.max(0,Math.min(1,(ie-1360)/140)):0;if(xi.y+=s*7,xi.z+=s*7,qa.set(t.mesh.position.x*.35-s*3,t.mesh.position.y+xi.y,t.mesh.position.z+xi.z),vn>0){const a=Sn()*8;qa.x+=_l(a,.25*vn),qa.y+=_l(a+10,.18*vn),vn=Math.max(0,vn-n*2.3)}F0(e.position,qa,5*n),Ml.set(t.mesh.position.x*.5+gn(ie+20,0,ie).x*.45+s*4,t.mesh.position.y+1.5,t.mesh.position.z-10),e.lookAt(Ml)}function Sg(){if(me==="RUNNING"){if(ci.dispatch("FINISH"),Ui(),Ar(),mt.player.speed=mt.player.targetSpeed=0,mt.player.turboActive=!1,mt.player.mesh.position.y=0,mt.player.mesh.rotation.set(0,0,0),Ut.distance=qe.length,Ut.lapCompleted=!0,Ut.newBestLap=Ut.bestLapSeconds===null||qe.elapsed<Ut.bestLapSeconds,Ut.newBestLap){Ut.bestLapSeconds=qe.elapsed;try{localStorage.setItem(Bo,String(qe.elapsed))}catch{}}Ut.highScore=Math.max(Ut.highScore,Ut.score),Nd(Ut.score,pr).catch(()=>{}),ys=1.2,dc(Ut,0,mt.player.turboCharge),zn("FINISH · Giro completato!",1.2),br=setTimeout(()=>Ud(Ut),1200)}}let ja=!1,Yo=!1,Eo=null;function Eg(){const n=document.getElementById("play-btn"),t=document.getElementById("restart-btn");let e=!1,i=!1,s=!1,a=!1;const r=document.getElementById("menu-overlay"),o=document.getElementById("game-over-overlay"),c=()=>{r&&(r.classList.remove("visible"),r.style.display="none"),o&&(o.classList.remove("visible"),o.style.display="none")},h=()=>{if(e=!0,c(),ja){s=!0,Yo||$o();return}if(!i){s=!0;return}qo()};n&&(n.disabled=!0,n.textContent="CARICAMENTO...",n.addEventListener("touchstart",g=>{g.preventDefault(),h()},{passive:!1,capture:!0}),n.addEventListener("click",h,{capture:!0})),t&&(t.disabled=!0,t.addEventListener("touchstart",g=>{g.preventDefault(),h()},{passive:!1,capture:!0}),t.addEventListener("click",h,{capture:!0}));const l=()=>{a=!0,i=!0,ja=!1,n&&(n.disabled=!1,n.textContent="GIOCA"),t&&(t.disabled=!1),e&&c(),s&&(s=!1,c(),qo())},d=()=>{i=!1,ja=!0,a=!0,n&&(n.disabled=!1,n.textContent="RIPROVA"),t&&(t.disabled=!1)},f=window.setTimeout(()=>{a||(console.warn("Timeout di sicurezza: riattivo il pulsante GIOCA."),l())},4e3);return{markReady:l,clearSafety:()=>{window.clearTimeout(f)},markFailed:d}}const wg=()=>(Eo||(Eo=Eg()),Eo);async function $o(){const n=wg();Yo=!0,ja=!1;try{await dg(),n==null||n.markReady()}catch(t){console.error("Errore inizializzazione:",t),n==null||n.markFailed()}finally{Yo=!1,n==null||n.clearSafety()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$o,{once:!0}):$o();
