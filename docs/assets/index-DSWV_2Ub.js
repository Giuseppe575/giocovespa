var Ld=Object.defineProperty;var Id=(n,e,t)=>e in n?Ld(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var $e=(n,e,t)=>Id(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="163",Dd=0,uc=1,Ud=2,fh=1,ph=2,Rn=3,Qn=0,zt=1,Ft=2,$n=0,ss=1,fc=2,pc=3,mc=4,Nd=5,_i=100,kd=101,Hd=102,Od=103,Fd=104,zd=200,Bd=201,Gd=202,Vd=203,_o=204,vo=205,Wd=206,Xd=207,qd=208,Yd=209,$d=210,Zd=211,Jd=212,Kd=213,jd=214,Qd=0,eu=1,tu=2,qa=3,nu=4,iu=5,su=6,au=7,mh=0,ru=1,ou=2,Zn=0,cu=1,lu=2,hu=3,gh=4,du=5,uu=6,fu=7,_h=300,os=301,cs=302,xo=303,yo=304,hr=306,Ya=1e3,Mi=1001,Mo=1002,Wt=1003,pu=1004,ra=1005,sn=1006,br=1007,Si=1008,Jn=1009,mu=1010,gu=1011,vh=1012,xh=1013,ls=1014,Un=1015,$a=1016,yh=1017,Mh=1018,ea=1020,_u=35902,vu=1021,xu=1022,mn=1023,yu=1024,Mu=1025,as=1026,qs=1027,Sh=1028,Eh=1029,Su=1030,wh=1031,bh=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,gc=35840,_c=35841,vc=35842,xc=35843,Th=36196,yc=37492,Mc=37496,Sc=37808,Ec=37809,wc=37810,bc=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Ic=37818,Dc=37819,Uc=37820,Nc=37821,Pr=36492,kc=36494,Hc=36495,Eu=36283,Oc=36284,Fc=36285,zc=36286,wu=3200,bu=3201,Ah=0,Tu=1,qn="",Vt="srgb",ni="srgb-linear",Bo="display-p3",dr="display-p3-linear",Za="linear",rt="srgb",Ja="rec709",Ka="p3",Li=7680,Bc=519,Au=512,Ru=513,Cu=514,Rh=515,Pu=516,Lu=517,Iu=518,Du=519,Gc=35044,Vc=35048,Wc="300 es",Nn=2e3,ja=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xc=1234567;const Ns=Math.PI/180,Ys=180/Math.PI;function Ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Go(n,e){return(n%e+e)%e}function Uu(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nu(n,e,t){return n!==e?(t-n)/(e-n):0}function ks(n,e,t){return(1-t)*n+t*e}function ku(n,e,t,i){return ks(n,e,1-Math.exp(-t*i))}function Hu(n,e=1){return e-Math.abs(Go(n,e*2)-e)}function Ou(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bu(n,e){return n+Math.random()*(e-n)}function Gu(n){return n*(.5-Math.random())}function Vu(n){n!==void 0&&(Xc=n);let e=Xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wu(n){return n*Ns}function Xu(n){return n*Ys}function qu(n){return(n&n-1)===0&&n!==0}function Yu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $u(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zu(n,e,t,i,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+i)/2),h=r((e+i)/2),d=a((e-i)/2),f=r((e-i)/2),p=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":n.set(o*h,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qc={DEG2RAD:Ns,RAD2DEG:Ys,generateUUID:Ci,clamp:Mt,euclideanModulo:Go,mapLinear:Uu,inverseLerp:Nu,lerp:ks,damp:ku,pingpong:Hu,smoothstep:Ou,smootherstep:Fu,randInt:zu,randFloat:Bu,randFloatSpread:Gu,seededRandom:Vu,degToRad:Wu,radToDeg:Xu,isPowerOfTwo:qu,ceilPowerOfTwo:Yu,floorPowerOfTwo:$u,setQuaternionFromProperEuler:Zu,normalize:kt,denormalize:ji};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,s,a,r,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l)}set(e,t,i,s,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=s[0],u=s[3],m=s[6],M=s[1],v=s[4],w=s[7],L=s[2],A=s[5],T=s[8];return a[0]=r*_+o*M+c*L,a[3]=r*u+o*v+c*A,a[6]=r*m+o*w+c*T,a[1]=l*_+h*M+d*L,a[4]=l*u+h*v+d*A,a[7]=l*m+h*w+d*T,a[2]=f*_+p*M+g*L,a[5]=f*u+p*v+g*A,a[8]=f*m+p*w+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-i*a*h+i*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*r-o*l,f=o*c-h*a,p=l*a-r*c,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*r)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*a-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(r*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Xe;function Ch(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ju(){const n=Qa("canvas");return n.style.display="block",n}const Yc={};function Ku(n){n in Yc||(Yc[n]=!0,console.warn(n))}const $c=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zc=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oa={[ni]:{transfer:Za,primaries:Ja,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:rt,primaries:Ja,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[dr]:{transfer:Za,primaries:Ka,toReference:n=>n.applyMatrix3(Zc),fromReference:n=>n.applyMatrix3($c)},[Bo]:{transfer:rt,primaries:Ka,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zc),fromReference:n=>n.applyMatrix3($c).convertLinearToSRGB()}},ju=new Set([ni,dr]),nt={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ju.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=oa[e].toReference,s=oa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return oa[n].primaries},getTransfer:function(n){return n===qn?Za:oa[n].transfer}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class Qu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Qa("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=rs(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e1=0;class Ph{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Dr(s[r].image)):a.push(Dr(s[r]))}else a=Dr(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Dr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t1=0;class Nt extends gs{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Mi,s=Mi,a=sn,r=Si,o=mn,c=Jn,l=Nt.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Ci(),this.name="",this.source=new Ph(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=_h;Nt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],u=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+u)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,w=(p+1)/2,L=(m+1)/2,A=(h+f)/4,T=(d+_)/4,D=(g+u)/4;return v>w&&v>L?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=A/i,a=T/i):w>L?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=A/s,a=D/s):L<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(L),i=T/a,s=D/a),this.set(i,s,a,t),this}let M=Math.sqrt((u-g)*(u-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(u-g)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n1 extends gs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new Nt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ph(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends n1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lh extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i1 extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const f=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==p||h!==g){let u=1-o;const m=c*f+l*p+h*g+d*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const L=Math.sqrt(v),A=Math.atan2(L,m*M);u=Math.sin(u*A)/L,o=Math.sin(o*A)/L}const w=o*M;if(c=c*u+f*w,l=l*u+p*w,h=h*u+g*w,d=d*u+_*w,u===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,a,r){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+h*d+c*p-l*f,e[t+1]=c*g+h*f+l*d-o*p,e[t+2]=l*g+h*p+o*f-c*d,e[t+3]=h*g-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(a/2),f=c(i/2),p=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"YZX":this._x=f*h*d+l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d-f*p*g;break;case"XZY":this._x=f*h*d-l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(r-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(a-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-i*l,this._z=a*h+r*l+i*c-s*o,this._w=r*h-i*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+i*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*i),h=2*(o*t-a*s),d=2*(a*i-r*t);return this.x=t+c*l+r*d-o*h,this.y=i+c*h+o*l-a*d,this.z=s+c*d+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new C,Jc=new ta;class Pi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,en):en.fromBufferAttribute(a,r),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ca.copy(i.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),la.subVectors(this.max,xs),Di.subVectors(e.a,xs),Ui.subVectors(e.b,xs),Ni.subVectors(e.c,xs),Fn.subVectors(Ui,Di),zn.subVectors(Ni,Ui),oi.subVectors(Di,Ni);let t=[0,-Fn.z,Fn.y,0,-zn.z,zn.y,0,-oi.z,oi.y,Fn.z,0,-Fn.x,zn.z,0,-zn.x,oi.z,0,-oi.x,-Fn.y,Fn.x,0,-zn.y,zn.x,0,-oi.y,oi.x,0];return!Nr(t,Di,Ui,Ni,la)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,Di,Ui,Ni,la))?!1:(ha.crossVectors(Fn,zn),t=[ha.x,ha.y,ha.z],Nr(t,Di,Ui,Ni,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,ca=new Pi,Di=new C,Ui=new C,Ni=new C,Fn=new C,zn=new C,oi=new C,xs=new C,la=new C,ha=new C,ci=new C;function Nr(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){ci.fromArray(n,a);const o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),h=i.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const s1=new Pi,ys=new C,kr=new C;class na{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s1.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(kr)),this.expandByPoint(ys.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new C,Hr=new C,da=new C,Bn=new C,Or=new C,ua=new C,Fr=new C;class a1{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hr.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Hr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(da),o=Bn.dot(this.direction),c=-Bn.dot(da),l=Bn.lengthSq(),h=Math.abs(1-r*r);let d,f,p,g;if(h>0)if(d=r*c-o,f=r*o-c,g=a*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+r*f+2*o)+f*(r*d+f+2*c)+l}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hr).addScaledVector(da,f),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(a=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,s,a){Or.subVectors(t,e),ua.subVectors(i,e),Fr.crossVectors(Or,ua);let r=this.direction.dot(Fr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Bn.subVectors(this.origin,e);const c=o*this.direction.dot(ua.crossVectors(Bn,ua));if(c<0)return null;const l=o*this.direction.dot(Or.cross(Bn));if(l<0||c+l>r)return null;const h=-o*Bn.dot(Fr);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,a,r,o,c,l,h,d,f,p,g,_,u){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l,h,d,f,p,g,_,u)}set(e,t,i,s,a,r,o,c,l,h,d,f,p,g,_,u){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),a=1/ki.setFromMatrixColumn(e,1).length(),r=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=r*h,p=r*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,g=l*h,_=l*d;t[0]=f+_*o,t[4]=g*o-p,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,g=l*h,_=l*d;t[0]=f-_*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=_-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*h,p=r*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,p=r*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=r*c,p=r*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+_,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r1,e,o1)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Gn.crossVectors(i,Yt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Gn.crossVectors(i,Yt)),Gn.normalize(),fa.crossVectors(Yt,Gn),s[0]=Gn.x,s[4]=fa.x,s[8]=Yt.x,s[1]=Gn.y,s[5]=fa.y,s[9]=Yt.y,s[2]=Gn.z,s[6]=fa.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],u=i[10],m=i[14],M=i[3],v=i[7],w=i[11],L=i[15],A=s[0],T=s[4],D=s[8],S=s[12],y=s[1],I=s[5],z=s[9],P=s[13],G=s[2],W=s[6],J=s[10],j=s[14],B=s[3],ie=s[7],ne=s[11],ve=s[15];return a[0]=r*A+o*y+c*G+l*B,a[4]=r*T+o*I+c*W+l*ie,a[8]=r*D+o*z+c*J+l*ne,a[12]=r*S+o*P+c*j+l*ve,a[1]=h*A+d*y+f*G+p*B,a[5]=h*T+d*I+f*W+p*ie,a[9]=h*D+d*z+f*J+p*ne,a[13]=h*S+d*P+f*j+p*ve,a[2]=g*A+_*y+u*G+m*B,a[6]=g*T+_*I+u*W+m*ie,a[10]=g*D+_*z+u*J+m*ne,a[14]=g*S+_*P+u*j+m*ve,a[3]=M*A+v*y+w*G+L*B,a[7]=M*T+v*I+w*W+L*ie,a[11]=M*D+v*z+w*J+L*ne,a[15]=M*S+v*P+w*j+L*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],u=e[11],m=e[15];return g*(+a*c*d-s*l*d-a*o*f+i*l*f+s*o*p-i*c*p)+_*(+t*c*p-t*l*f+a*r*f-s*r*p+s*l*h-a*c*h)+u*(+t*l*d-t*o*p-a*r*d+i*r*p+a*o*h-i*l*h)+m*(-s*o*h-t*c*d+t*o*f+s*r*d-i*r*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],u=e[14],m=e[15],M=d*u*l-_*f*l+_*c*p-o*u*p-d*c*m+o*f*m,v=g*f*l-h*u*l-g*c*p+r*u*p+h*c*m-r*f*m,w=h*_*l-g*d*l+g*o*p-r*_*p-h*o*m+r*d*m,L=g*d*c-h*_*c-g*o*f+r*_*f+h*o*u-r*d*u,A=t*M+i*v+s*w+a*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(_*f*a-d*u*a-_*s*p+i*u*p+d*s*m-i*f*m)*T,e[2]=(o*u*a-_*c*a+_*s*l-i*u*l-o*s*m+i*c*m)*T,e[3]=(d*c*a-o*f*a-d*s*l+i*f*l+o*s*p-i*c*p)*T,e[4]=v*T,e[5]=(h*u*a-g*f*a+g*s*p-t*u*p-h*s*m+t*f*m)*T,e[6]=(g*c*a-r*u*a-g*s*l+t*u*l+r*s*m-t*c*m)*T,e[7]=(r*f*a-h*c*a+h*s*l-t*f*l-r*s*p+t*c*p)*T,e[8]=w*T,e[9]=(g*d*a-h*_*a-g*i*p+t*_*p+h*i*m-t*d*m)*T,e[10]=(r*_*a-g*o*a+g*i*l-t*_*l-r*i*m+t*o*m)*T,e[11]=(h*o*a-r*d*a-h*i*l+t*d*l+r*i*p-t*o*p)*T,e[12]=L*T,e[13]=(h*_*s-g*d*s+g*i*f-t*_*f-h*i*u+t*d*u)*T,e[14]=(g*o*s-r*_*s-g*i*c+t*_*c+r*i*u-t*o*u)*T,e[15]=(r*d*s-h*o*s+h*i*c-t*d*c-r*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,d=o+o,f=a*l,p=a*h,g=a*d,_=r*h,u=r*d,m=o*d,M=c*l,v=c*h,w=c*d,L=i.x,A=i.y,T=i.z;return s[0]=(1-(_+m))*L,s[1]=(p+w)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(p-w)*A,s[5]=(1-(f+m))*A,s[6]=(u+M)*A,s[7]=0,s[8]=(g+v)*T,s[9]=(u-M)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=ki.set(s[0],s[1],s[2]).length();const r=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);const l=1/a,h=1/r,d=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),i.x=a,i.y=r,i.z=o,this}makePerspective(e,t,i,s,a,r,o=Nn){const c=this.elements,l=2*a/(t-e),h=2*a/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,g;if(o===Nn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===ja)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=Nn){const c=this.elements,l=1/(t-e),h=1/(i-s),d=1/(r-a),f=(t+e)*l,p=(i+s)*h;let g,_;if(o===Nn)g=(r+a)*d,_=-2*d;else if(o===ja)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new C,tn=new ct,r1=new C(0,0,0),o1=new C(1,1,1),Gn=new C,fa=new C,Yt=new C,Kc=new ct,jc=new ta;class _n{constructor(e=0,t=0,i=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c1=0;const Qc=new C,Hi=new ta,wn=new ct,pa=new C,Ms=new C,l1=new C,h1=new ta,el=new C(1,0,0),tl=new C(0,1,0),nl=new C(0,0,1),il={type:"added"},d1={type:"removed"},Oi={type:"childadded",child:null},zr={type:"childremoved",child:null};class je extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const e=new C,t=new _n,i=new ta,s=new C(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Xe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pa.copy(e):pa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ms,pa,this.up):wn.lookAt(pa,Ms,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(wn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d1),zr.child=e,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,l1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,h1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++){const o=s[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}je.DEFAULT_UP=new C(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new C,bn=new C,Br=new C,Tn=new C,Fi=new C,zi=new C,sl=new C,Gr=new C,Vr=new C,Wr=new C;class fn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),nn.subVectors(e,t),s.cross(nn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){nn.subVectors(s,t),bn.subVectors(i,t),Br.subVectors(e,t);const r=nn.dot(nn),o=nn.dot(bn),c=nn.dot(Br),l=bn.dot(bn),h=bn.dot(Br),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,p=(l*c-o*h)*f,g=(r*h-o*c)*f;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,i,s,a,r,o,c){return this.getBarycoord(e,t,i,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Tn.x),c.addScaledVector(r,Tn.y),c.addScaledVector(o,Tn.z),c)}static isFrontFacing(e,t,i,s){return nn.subVectors(i,t),bn.subVectors(e,t),nn.cross(bn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),nn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let r,o;Fi.subVectors(s,i),zi.subVectors(a,i),Gr.subVectors(e,i);const c=Fi.dot(Gr),l=zi.dot(Gr);if(c<=0&&l<=0)return t.copy(i);Vr.subVectors(e,s);const h=Fi.dot(Vr),d=zi.dot(Vr);if(h>=0&&d<=h)return t.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(i).addScaledVector(Fi,r);Wr.subVectors(e,a);const p=Fi.dot(Wr),g=zi.dot(Wr);if(g>=0&&p<=g)return t.copy(a);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(zi,o);const u=h*g-p*d;if(u<=0&&d-h>=0&&p-g>=0)return sl.subVectors(a,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(sl,o);const m=1/(u+_+f);return r=_*m,o=f*m,t.copy(i).addScaledVector(Fi,r).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Xr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Go(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=Xr(r,a,e+1/3),this.g=Xr(r,a,e),this.b=Xr(r,a,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=Dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return nt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Mt(Ut.r*255,0,255))*65536+Math.round(Mt(Ut.g*255,0,255))*256+Math.round(Mt(Ut.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,s=Ut.g,a=Ut.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case i:c=(s-a)/d+(s<a?6:0);break;case s:c=(a-i)/d+2;break;case a:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Vt){nt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,s=Ut.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(ma);const i=ks(Vn.h,ma.h,t),s=ks(Vn.s,ma.s,t),a=ks(Vn.l,ma.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new ze;ze.NAMES=Dh;let u1=0;class ia extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ss,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=vo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_o&&(i.blendSrc=this.blendSrc),this.blendDst!==vo&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uh extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new C,ga=new te;class Bt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ku("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class Nh extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kh extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ze extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let f1=0;const Kt=new ct,qr=new je,Bi=new C,$t=new Pi,Ss=new Pi,Tt=new C;class wt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?kh:Nh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Xe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return qr.lookAt(e),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors($t.min,Ss.min),$t.expandByPoint(Tt),Tt.addVectors($t.max,Ss.max),$t.expandByPoint(Tt)):($t.expandByPoint(Ss.min),$t.expandByPoint(Ss.max))}$t.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Tt.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Tt.fromBufferAttribute(o,l),c&&(Bi.fromBufferAttribute(e,l),Tt.add(Bi)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<i.count;D++)o[D]=new C,c[D]=new C;const l=new C,h=new C,d=new C,f=new te,p=new te,g=new te,_=new C,u=new C;function m(D,S,y){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,y),f.fromBufferAttribute(a,D),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,y),h.sub(l),d.sub(l),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),u.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[D].add(_),o[S].add(_),o[y].add(_),c[D].add(u),c[S].add(u),c[y].add(u))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const y=M[D],I=y.start,z=y.count;for(let P=I,G=I+z;P<G;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new C,w=new C,L=new C,A=new C;function T(D){L.fromBufferAttribute(s,D),A.copy(L);const S=o[D];v.copy(S),v.sub(L.multiplyScalar(L.dot(S))).normalize(),w.crossVectors(A,S);const I=w.dot(c[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,I)}for(let D=0,S=M.length;D<S;++D){const y=M[D],I=y.start,z=y.count;for(let P=I,G=I+z;P<G;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new C,a=new C,r=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),u=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,u),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,u),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(u,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,u=c.length;_<u;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[p++]}return new Bt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],d=a[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new ct,li=new a1,_a=new na,rl=new C,Gi=new C,Vi=new C,Wi=new C,Yr=new C,va=new C,xa=new te,ya=new te,Ma=new te,ol=new C,cl=new C,ll=new C,Sa=new C,Ea=new C;class ee extends je{constructor(e=new wt,t=new Uh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){va.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],d=a[c];h!==0&&(Yr.fromBufferAttribute(d,e),r?va.addScaledVector(Yr,h):va.addScaledVector(Yr.sub(t),h))}t.add(va)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(a),li.copy(e.ray).recast(e.near),!(_a.containsPoint(li.origin)===!1&&(li.intersectSphere(_a,rl)===null||li.origin.distanceToSquared(rl)>(e.far-e.near)**2))&&(al.copy(a).invert(),li.copy(e.ray).applyMatrix4(al),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,i){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const u=f[g],m=r[u.materialIndex],M=Math.max(u.start,p.start),v=Math.min(o.count,Math.min(u.start+u.count,p.start+p.count));for(let w=M,L=v;w<L;w+=3){const A=o.getX(w),T=o.getX(w+1),D=o.getX(w+2);s=wa(this,m,e,i,l,h,d,A,T,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let u=g,m=_;u<m;u+=3){const M=o.getX(u),v=o.getX(u+1),w=o.getX(u+2);s=wa(this,r,e,i,l,h,d,M,v,w),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const u=f[g],m=r[u.materialIndex],M=Math.max(u.start,p.start),v=Math.min(c.count,Math.min(u.start+u.count,p.start+p.count));for(let w=M,L=v;w<L;w+=3){const A=w,T=w+1,D=w+2;s=wa(this,m,e,i,l,h,d,A,T,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let u=g,m=_;u<m;u+=3){const M=u,v=u+1,w=u+2;s=wa(this,r,e,i,l,h,d,M,v,w),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function p1(n,e,t,i,s,a,r,o){let c;if(e.side===zt?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,e.side===Qn,o),c===null)return null;Ea.copy(o),Ea.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ea);return l<t.near||l>t.far?null:{distance:l,point:Ea.clone(),object:n}}function wa(n,e,t,i,s,a,r,o,c,l){n.getVertexPosition(o,Gi),n.getVertexPosition(c,Vi),n.getVertexPosition(l,Wi);const h=p1(n,e,t,i,Gi,Vi,Wi,Sa);if(h){s&&(xa.fromBufferAttribute(s,o),ya.fromBufferAttribute(s,c),Ma.fromBufferAttribute(s,l),h.uv=fn.getInterpolation(Sa,Gi,Vi,Wi,xa,ya,Ma,new te)),a&&(xa.fromBufferAttribute(a,o),ya.fromBufferAttribute(a,c),Ma.fromBufferAttribute(a,l),h.uv1=fn.getInterpolation(Sa,Gi,Vi,Wi,xa,ya,Ma,new te)),r&&(ol.fromBufferAttribute(r,o),cl.fromBufferAttribute(r,c),ll.fromBufferAttribute(r,l),h.normal=fn.getInterpolation(Sa,Gi,Vi,Wi,ol,cl,ll,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};fn.getNormal(Gi,Vi,Wi,d.normal),h.face=d}return h}class Ue extends wt{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2));function g(_,u,m,M,v,w,L,A,T,D,S){const y=w/T,I=L/D,z=w/2,P=L/2,G=A/2,W=T+1,J=D+1;let j=0,B=0;const ie=new C;for(let ne=0;ne<J;ne++){const ve=ne*I-P;for(let Be=0;Be<W;Be++){const et=Be*y-z;ie[_]=et*M,ie[u]=ve*v,ie[m]=G,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[u]=0,ie[m]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),d.push(Be/T),d.push(1-ne/D),j+=1}}for(let ne=0;ne<D;ne++)for(let ve=0;ve<T;ve++){const Be=f+ve+W*ne,et=f+ve+W*(ne+1),X=f+(ve+1)+W*(ne+1),ae=f+(ve+1)+W*ne;c.push(Be,et,ae),c.push(et,X,ae),B+=6}o.addGroup(p,B,S),p+=B,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ue(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=hs(n[t]);for(const s in i)e[s]=i[s]}return e}function m1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Oh={clone:hs,merge:Ht};var g1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=m1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fh extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new C,hl=new te,dl=new te;class Qt extends Fh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,hl,dl),t.subVectors(dl,hl)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class v1 extends je{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(Xi,qi,e,t);s.layers=this.layers,this.add(s);const a=new Qt(Xi,qi,e,t);a.layers=this.layers,this.add(a);const r=new Qt(Xi,qi,e,t);r.layers=this.layers,this.add(r);const o=new Qt(Xi,qi,e,t);o.layers=this.layers,this.add(o);const c=new Qt(Xi,qi,e,t);c.layers=this.layers,this.add(c);const l=new Qt(Xi,qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zh extends Nt{constructor(e,t,i,s,a,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,i,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x1 extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new zh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),a=new kn({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:$n});a.uniforms.tEquirect.value=t;const r=new ee(s,a),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=sn),new v1(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}}const $r=new C,y1=new C,M1=new Xe;class mi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$r.subVectors(i,t).cross(y1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($r),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||M1.getNormalMatrix(e),s=this.coplanarPoint($r).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new na,ba=new C;class Vo{constructor(e=new mi,t=new mi,i=new mi,s=new mi,a=new mi,r=new mi){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn){const i=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],u=s[11],m=s[12],M=s[13],v=s[14],w=s[15];if(i[0].setComponents(c-a,f-l,u-p,w-m).normalize(),i[1].setComponents(c+a,f+l,u+p,w+m).normalize(),i[2].setComponents(c+r,f+h,u+g,w+M).normalize(),i[3].setComponents(c-r,f-h,u-g,w-M).normalize(),i[4].setComponents(c-o,f-d,u-_,w-v).normalize(),t===Nn)i[5].setComponents(c+o,f+d,u+_,w+v).normalize();else if(t===ja)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ba.x=s.normal.x>0?e.max.x:e.min.x,ba.y=s.normal.y>0?e.max.y:e.min.y,ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let n=null,e=!1,t=null,i=null;function s(a,r){t(a,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function S1(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,o),d.count===-1&&f.length===0&&n.bufferSubData(l,0,h),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class vn extends wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=e/o,f=t/c,p=[],g=[],_=[],u=[];for(let m=0;m<h;m++){const M=m*f-r;for(let v=0;v<l;v++){const w=v*d-a;g.push(w,-M,0),_.push(0,0,1),u.push(v/o),u.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){const v=M+l*m,w=M+l*(m+1),L=M+1+l*(m+1),A=M+1+l*m;p.push(v,w,A),p.push(w,L,A)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var E1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w1=`#ifdef USE_ALPHAHASH
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
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
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
#endif`,P1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L1=`#ifdef USE_BATCHING
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
#endif`,I1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,H1=`#ifdef USE_BUMPMAP
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
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,q1=`#define PI 3.141592653589793
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
} // validated`,Y1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$1=`vec3 transformedNormal = objectNormal;
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
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`
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
}`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,uf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,wf=`
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ff=`#ifdef USE_MORPHNORMALS
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
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l2=`float getShadowMask() {
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
}`,h2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d2=`#ifdef USE_SKINNING
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
#endif`,u2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f2=`#ifdef USE_SKINNING
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
#endif`,p2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v2=`#ifdef USE_TRANSMISSION
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
#endif`,x2=`#ifdef USE_TRANSMISSION
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
#endif`,y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b2=`uniform sampler2D t2D;
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
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`#include <common>
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
}`,L2=`#if DEPTH_PACKING == 3200
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
}`,I2=`#define DISTANCE
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
}`,D2=`#define DISTANCE
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
}`,U2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`uniform float scale;
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
}`,H2=`uniform vec3 diffuse;
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
}`,O2=`#include <common>
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
}`,F2=`uniform vec3 diffuse;
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
}`,z2=`#define LAMBERT
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
}`,B2=`#define LAMBERT
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
}`,G2=`#define MATCAP
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
}`,V2=`#define MATCAP
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
}`,W2=`#define NORMAL
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
}`,X2=`#define NORMAL
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
}`,q2=`#define PHONG
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
}`,Y2=`#define PHONG
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
}`,$2=`#define STANDARD
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
}`,Z2=`#define STANDARD
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
}`,J2=`#define TOON
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
}`,K2=`#define TOON
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
}`,j2=`uniform float size;
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
}`,Q2=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,tp=`uniform vec3 color;
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
}`,np=`uniform float rotation;
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
}`,ip=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:E1,alphahash_pars_fragment:w1,alphamap_fragment:b1,alphamap_pars_fragment:T1,alphatest_fragment:A1,alphatest_pars_fragment:R1,aomap_fragment:C1,aomap_pars_fragment:P1,batching_pars_vertex:L1,batching_vertex:I1,begin_vertex:D1,beginnormal_vertex:U1,bsdfs:N1,iridescence_fragment:k1,bumpmap_pars_fragment:H1,clipping_planes_fragment:O1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:z1,clipping_planes_vertex:B1,color_fragment:G1,color_pars_fragment:V1,color_pars_vertex:W1,color_vertex:X1,common:q1,cube_uv_reflection_fragment:Y1,defaultnormal_vertex:$1,displacementmap_pars_vertex:Z1,displacementmap_vertex:J1,emissivemap_fragment:K1,emissivemap_pars_fragment:j1,colorspace_fragment:Q1,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:af,envmap_physical_pars_fragment:_f,envmap_vertex:rf,fog_vertex:of,fog_pars_vertex:cf,fog_fragment:lf,fog_pars_fragment:hf,gradientmap_pars_fragment:df,lightmap_fragment:uf,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:xf,lights_phong_fragment:yf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:wf,lights_fragment_maps:bf,lights_fragment_end:Tf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:If,map_particle_fragment:Df,map_particle_pars_fragment:Uf,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Hf,morphcolor_vertex:Of,morphnormal_vertex:Ff,morphtarget_pars_vertex:zf,morphtarget_vertex:Bf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:Kf,opaque_fragment:jf,packing:Qf,premultiplied_alpha_fragment:e2,project_vertex:t2,dithering_fragment:n2,dithering_pars_fragment:i2,roughnessmap_fragment:s2,roughnessmap_pars_fragment:a2,shadowmap_pars_fragment:r2,shadowmap_pars_vertex:o2,shadowmap_vertex:c2,shadowmask_pars_fragment:l2,skinbase_vertex:h2,skinning_pars_vertex:d2,skinning_vertex:u2,skinnormal_vertex:f2,specularmap_fragment:p2,specularmap_pars_fragment:m2,tonemapping_fragment:g2,tonemapping_pars_fragment:_2,transmission_fragment:v2,transmission_pars_fragment:x2,uv_pars_fragment:y2,uv_pars_vertex:M2,uv_vertex:S2,worldpos_vertex:E2,background_vert:w2,background_frag:b2,backgroundCube_vert:T2,backgroundCube_frag:A2,cube_vert:R2,cube_frag:C2,depth_vert:P2,depth_frag:L2,distanceRGBA_vert:I2,distanceRGBA_frag:D2,equirect_vert:U2,equirect_frag:N2,linedashed_vert:k2,linedashed_frag:H2,meshbasic_vert:O2,meshbasic_frag:F2,meshlambert_vert:z2,meshlambert_frag:B2,meshmatcap_vert:G2,meshmatcap_frag:V2,meshnormal_vert:W2,meshnormal_frag:X2,meshphong_vert:q2,meshphong_frag:Y2,meshphysical_vert:$2,meshphysical_frag:Z2,meshtoon_vert:J2,meshtoon_frag:K2,points_vert:j2,points_frag:Q2,shadow_vert:ep,shadow_frag:tp,sprite_vert:np,sprite_frag:ip},de={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},dn={basic:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ht([de.common,de.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ht([de.lights,de.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};dn.physical={uniforms:Ht([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ta={r:0,b:0,g:0},di=new _n,sp=new ct;function ap(n,e,t,i,s,a,r){const o=new ze(0);let c=a===!0?0:1,l,h,d=null,f=0,p=null;function g(u,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===hr)?(h===void 0&&(h=new ee(new Ue(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:hs(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),di.copy(m.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(di)),h.material.toneMapped=nt.getTransfer(v.colorSpace)!==rt,(d!==v||f!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ee(new vn(2,2),new kn({name:"BackgroundMaterial",uniforms:hs(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=nt.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),l.layers.enableAll(),u.unshift(l,l.geometry,l.material,0,0,null))}function _(u,m){u.getRGB(Ta,Hh(n)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,m,r)}return{getClearColor:function(){return o},setClearColor:function(u,m=1){o.set(u),c=m,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(u){c=u,_(o,c)},render:g}}function rp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let a=s,r=!1;function o(y,I,z,P,G){let W=!1;const J=d(P,z,I);a!==J&&(a=J,l(a.object)),W=p(y,P,z,G),W&&g(y,P,z,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,w(y,I,z,P),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,I,z){const P=z.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let W=G[I.id];W===void 0&&(W={},G[I.id]=W);let J=W[P];return J===void 0&&(J=f(c()),W[P]=J),J}function f(y){const I=[],z=[],P=[];for(let G=0;G<t;G++)I[G]=0,z[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:P,object:y,attributes:{},index:null}}function p(y,I,z,P){const G=a.attributes,W=I.attributes;let J=0;const j=z.getAttributes();for(const B in j)if(j[B].location>=0){const ne=G[B];let ve=W[B];if(ve===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;J++}return a.attributesNum!==J||a.index!==P}function g(y,I,z,P){const G={},W=I.attributes;let J=0;const j=z.getAttributes();for(const B in j)if(j[B].location>=0){let ne=W[B];ne===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),G[B]=ve,J++}a.attributes=G,a.attributesNum=J,a.index=P}function _(){const y=a.newAttributes;for(let I=0,z=y.length;I<z;I++)y[I]=0}function u(y){m(y,0)}function m(y,I){const z=a.newAttributes,P=a.enabledAttributes,G=a.attributeDivisors;z[y]=1,P[y]===0&&(n.enableVertexAttribArray(y),P[y]=1),G[y]!==I&&(n.vertexAttribDivisor(y,I),G[y]=I)}function M(){const y=a.newAttributes,I=a.enabledAttributes;for(let z=0,P=I.length;z<P;z++)I[z]!==y[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function v(y,I,z,P,G,W,J){J===!0?n.vertexAttribIPointer(y,I,z,G,W):n.vertexAttribPointer(y,I,z,P,G,W)}function w(y,I,z,P){_();const G=P.attributes,W=z.getAttributes(),J=I.defaultAttributeValues;for(const j in W){const B=W[j];if(B.location>=0){let ie=G[j];if(ie===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const ne=ie.normalized,ve=ie.itemSize,Be=e.get(ie);if(Be===void 0)continue;const et=Be.buffer,X=Be.type,ae=Be.bytesPerElement,xe=X===n.INT||X===n.UNSIGNED_INT||ie.gpuType===xh;if(ie.isInterleavedBufferAttribute){const oe=ie.data,Ie=oe.stride,Ge=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let ke=0;ke<B.locationSize;ke++)m(B.location+ke,oe.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ke=0;ke<B.locationSize;ke++)u(B.location+ke);n.bindBuffer(n.ARRAY_BUFFER,et);for(let ke=0;ke<B.locationSize;ke++)v(B.location+ke,ve/B.locationSize,X,ne,Ie*ae,(Ge+ve/B.locationSize*ke)*ae,xe)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<B.locationSize;oe++)m(B.location+oe,ie.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<B.locationSize;oe++)u(B.location+oe);n.bindBuffer(n.ARRAY_BUFFER,et);for(let oe=0;oe<B.locationSize;oe++)v(B.location+oe,ve/B.locationSize,X,ne,ve*ae,ve/B.locationSize*oe*ae,xe)}}else if(J!==void 0){const ne=J[j];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(B.location,ne);break;case 3:n.vertexAttrib3fv(B.location,ne);break;case 4:n.vertexAttrib4fv(B.location,ne);break;default:n.vertexAttrib1fv(B.location,ne)}}}}M()}function L(){D();for(const y in i){const I=i[y];for(const z in I){const P=I[z];for(const G in P)h(P[G].object),delete P[G];delete I[z]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const z in I){const P=I[z];for(const G in P)h(P[G].object),delete P[G];delete I[z]}delete i[y.id]}function T(y){for(const I in i){const z=i[I];if(z[y.id]===void 0)continue;const P=z[y.id];for(const G in P)h(P[G].object),delete P[G];delete z[y.id]}}function D(){S(),r=!0,a!==s&&(a=s,l(a.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:u,disableUnusedAttributes:M}}function op(n,e,t){let i;function s(c){i=c}function a(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function r(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],l[f]);else{d.multiDrawArraysWEBGL(i,c,0,l,0,h);let f=0;for(let p=0;p<h;p++)f+=l[p];t.update(f,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function cp(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=t.precision!==void 0?t.precision:"highp";const o=a(r);o!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",o,"instead."),r=o);const c=t.logarithmicDepthBuffer===!0,l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:u,vertexTextures:m,maxSamples:M}}function lp(n){const e=this;let t=null,i=0,s=!1,a=!1;const r=new mi,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,u=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||a&&!u)a?h(null):l();else{const M=a?0:i,v=M*4;let w=m.clippingState||null;c.value=w,w=h(g,f,v,p);for(let L=0;L!==v;++L)w[L]=t[L];m.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let u=null;if(_!==0){if(u=c.value,g!==!0||u===null){const m=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(u===null||u.length<m)&&(u=new Float32Array(m));for(let v=0,w=p;v!==_;++v,w+=4)r.copy(d[v]).applyMatrix4(M,o),r.normal.toArray(u,w),u[w+3]=r.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function hp(n){let e=new WeakMap;function t(r,o){return o===xo?r.mapping=os:o===yo&&(r.mapping=cs),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===xo||o===yo)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new x1(c.height);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Gh extends Fh{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,r=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,ul=[.125,.215,.35,.446,.526,.582],vi=20,Zr=new Gh,fl=new ze;let Jr=null,Kr=0,jr=0,Qr=!1;const gi=(1+Math.sqrt(5))/2,Yi=1/gi,pl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,gi,Yi),new C(0,gi,-Yi),new C(Yi,0,gi),new C(-Yi,0,gi),new C(gi,Yi,0),new C(-gi,Yi,0)];class So{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Jr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Kr,jr),this._renderer.xr.enabled=Qr,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:$a,format:mn,colorSpace:ni,depthBuffer:!1},s=ml(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(a)),this._blurMaterial=up(a,e,t)}return s}_compileMaterial(e){const t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,s){const o=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(fl),h.toneMapping=Zn,h.autoClear=!1;const p=new Uh({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new ee(new Ue,p);let _=!1;const u=e.background;u?u.isColor&&(p.color.copy(u),e.background=null,_=!0):(p.color.copy(fl),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):M===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const v=this._cubeSize;Aa(s,M*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===os||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new ee(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Aa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,Zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=pl[(s-1)%pl.length];this._blur(e,s-1,s,a,r)}t.autoClear=i}_blur(e,t,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",a),this._halfBlur(r,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ee(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*vi-1),_=a/g,u=isFinite(a)?1+Math.floor(h*_):vi;u>vi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${vi}`);const m=[];let M=0;for(let T=0;T<vi;++T){const D=T/_,S=Math.exp(-D*D/2);m.push(S),T===0?M+=S:T<u&&(M+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=m,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const w=this._sizeLods[s],L=3*w*(s>v-ts?s-v+ts:0),A=4*(this._cubeSize-w);Aa(t,L,A,3*w,2*w),c.setRenderTarget(t),c.render(d,Zr)}}function dp(n){const e=[],t=[],i=[];let s=n;const a=n-ts+1+ul.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>n-ts?c=ul[r-n+ts-1]:r===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,u=2,m=1,M=new Float32Array(_*g*p),v=new Float32Array(u*g*p),w=new Float32Array(m*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,D=A>2?0:-1,S=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];M.set(S,_*g*A),v.set(f,u*g*A);const y=[A,A,A,A,A,A];w.set(y,m*g*A)}const L=new wt;L.setAttribute("position",new Bt(M,_)),L.setAttribute("uv",new Bt(v,u)),L.setAttribute("faceIndex",new Bt(w,m)),e.push(L),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ml(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function up(n,e,t){const i=new Float32Array(vi),s=new C(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function gl(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function _l(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function fp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===xo||c===yo,h=c===os||c===cs;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new So(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new So(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function pp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function mp(n,e,t,i){const s={},a=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let u=0,m=_.length;u<m;u++)e.remove(_[u])}f.removeEventListener("dispose",r),delete s[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let u=0,m=_.length;u<m;u++)e.update(_[u],n.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,w=M.length;v<w;v+=3){const L=M[v+0],A=M[v+1],T=M[v+2];f.push(L,A,A,T,T,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,w=M.length/3-1;v<w;v+=3){const L=v+0,A=v+1,T=v+2;f.push(L,A,A,T,T,L)}}else return;const u=new(Ch(f)?kh:Nh)(f,1);u.version=_;const m=a.get(d);m&&e.remove(m),a.set(d,u)}function h(d){const f=a.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function gp(n,e,t){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,a,d*r),t.update(f,i,1)}function l(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,a,d*r,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(d[_]/r,f[_]);else{g.multiDrawElementsWEBGL(i,f,0,a,d,0,p);let _=0;for(let u=0;u<p;u++)_+=f[u];t.update(_,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function _p(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vp(n,e,t){const i=new WeakMap,s=new At;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),u===!0&&(w=3);let L=o.attributes.position.count*w,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*A*4*d),D=new Lh(T,L,A,d);D.type=Un,D.needsUpdate=!0;const S=w*4;for(let I=0;I<d;I++){const z=m[I],P=M[I],G=v[I],W=L*A*4*I;for(let J=0;J<z.count;J++){const j=J*S;g===!0&&(s.fromBufferAttribute(z,J),T[W+j+0]=s.x,T[W+j+1]=s.y,T[W+j+2]=s.z,T[W+j+3]=0),_===!0&&(s.fromBufferAttribute(P,J),T[W+j+4]=s.x,T[W+j+5]=s.y,T[W+j+6]=s.z,T[W+j+7]=0),u===!0&&(s.fromBufferAttribute(G,J),T[W+j+8]=s.x,T[W+j+9]=s.y,T[W+j+10]=s.z,T[W+j+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new te(L,A)},i.set(o,f),o.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let g=0;for(let u=0;u<l.length;u++)g+=l[u];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function xp(n,e,t,i){let s=new WeakMap;function a(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class Vh extends Nt{constructor(e,t,i,s,a,r,o,c,l,h){if(h=h!==void 0?h:as,h!==as&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=ls),i===void 0&&h===qs&&(i=ea),super(null,s,a,r,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wh=new Nt,Xh=new Vh(1,1);Xh.compareFunction=Rh;const qh=new Lh,Yh=new i1,$h=new zh,vl=[],xl=[],yl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=vl[s];if(a===void 0&&(a=new Float32Array(s),vl[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ur(n,e){let t=xl[e];t===void 0&&(t=new Int32Array(e),xl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Sl.set(i),n.uniformMatrix2fv(this.addr,!1,Sl),Et(t,i)}}function bp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Ml.set(i),n.uniformMatrix3fv(this.addr,!1,Ml),Et(t,i)}}function Tp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;yl.set(i),n.uniformMatrix4fv(this.addr,!1,yl),Et(t,i)}}function Ap(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Lp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Np(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const a=this.type===n.SAMPLER_2D_SHADOW?Xh:Wh;t.setTexture2D(e||a,s)}function kp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yh,s)}function Hp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$h,s)}function Op(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qh,s)}function Fp(n){switch(n){case 5126:return yp;case 35664:return Mp;case 35665:return Sp;case 35666:return Ep;case 35674:return wp;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Ip;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Op}}function zp(n,e){n.uniform1fv(this.addr,e)}function Bp(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function Gp(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function Vp(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function Wp(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xp(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qp(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yp(n,e){n.uniform1iv(this.addr,e)}function $p(n,e){n.uniform2iv(this.addr,e)}function Zp(n,e){n.uniform3iv(this.addr,e)}function Jp(n,e){n.uniform4iv(this.addr,e)}function Kp(n,e){n.uniform1uiv(this.addr,e)}function jp(n,e){n.uniform2uiv(this.addr,e)}function Qp(n,e){n.uniform3uiv(this.addr,e)}function em(n,e){n.uniform4uiv(this.addr,e)}function tm(n,e,t){const i=this.cache,s=e.length,a=ur(t,s);St(i,a)||(n.uniform1iv(this.addr,a),Et(i,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Wh,a[r])}function nm(n,e,t){const i=this.cache,s=e.length,a=ur(t,s);St(i,a)||(n.uniform1iv(this.addr,a),Et(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Yh,a[r])}function im(n,e,t){const i=this.cache,s=e.length,a=ur(t,s);St(i,a)||(n.uniform1iv(this.addr,a),Et(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||$h,a[r])}function sm(n,e,t){const i=this.cache,s=e.length,a=ur(t,s);St(i,a)||(n.uniform1iv(this.addr,a),Et(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||qh,a[r])}function am(n){switch(n){case 5126:return zp;case 35664:return Bp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return $p;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Kp;case 36294:return jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}class rm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fp(t.type)}}class om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=am(t.type)}}class cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],i)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function El(n,e){n.seq.push(e),n.map[e.id]=e}function lm(n,e,t){const i=n.name,s=i.length;for(eo.lastIndex=0;;){const a=eo.exec(i),r=eo.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){El(t,l===void 0?new rm(o,n,e):new om(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new cm(o),El(t,d)),t=d}}}class za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);lm(a,r,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function wl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hm=37297;let dm=0;function um(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function fm(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Ka&&t===Ja?i="LinearDisplayP3ToLinearSRGB":e===Ja&&t===Ka&&(i="LinearSRGBToLinearDisplayP3"),n){case ni:case dr:return[i,"LinearTransferOETF"];case Vt:case Bo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+um(n.getShaderSource(e),r)}else return s}function pm(n,e){const t=fm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mm(n,e){let t;switch(e){case cu:t="Linear";break;case lu:t="Reinhard";break;case hu:t="OptimizedCineon";break;case gh:t="ACESFilmic";break;case uu:t="AgX";break;case fu:t="Neutral";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function _m(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Is(n){return n!==""}function Tl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(n){return n.replace(xm,Mm)}const ym=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mm(n,e){let t=We[e];if(t===void 0){const i=ym.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eo(t)}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(n){return n.replace(Sm,Em)}function Em(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Cl(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function bm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case cs:e="ENVMAP_TYPE_CUBE";break;case hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Am(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mh:e="ENVMAP_BLENDING_MULTIPLY";break;case ru:e="ENVMAP_BLENDING_MIX";break;case ou:e="ENVMAP_BLENDING_ADD";break}return e}function Rm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cm(n,e,t,i){const s=n.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=wm(t),l=bm(t),h=Tm(t),d=Am(t),f=Rm(t),p=gm(t),g=_m(a),_=s.createProgram();let u,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),u.length>0&&(u+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(u=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?We.tonemapping_pars_fragment:"",t.toneMapping!==Zn?mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,pm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),r=Eo(r),r=Tl(r,t),r=Al(r,t),o=Eo(o),o=Tl(o,t),o=Al(o,t),r=Rl(r),o=Rl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+u+r,w=M+m+o,L=wl(s,s.VERTEX_SHADER,v),A=wl(s,s.FRAGMENT_SHADER,w);s.attachShader(_,L),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(I){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(A).trim();let W=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,A);else{const j=bl(s,L,"vertex"),B=bl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+j+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(P===""||G==="")&&(J=!1);J&&(I.diagnostics={runnable:W,programLog:z,vertexShader:{log:P,prefix:u},fragmentShader:{log:G,prefix:m}})}s.deleteShader(L),s.deleteShader(A),D=new za(s,_),S=vm(s,_)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,hm)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Im(e),t.set(e,i)),i}}class Im{constructor(e){this.id=Pm++,this.code=e,this.usedTimes=0}}function Dm(n,e,t,i,s,a,r){const o=new Ih,c=new Lm,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function u(S,y,I,z,P){const G=z.fog,W=P.geometry,J=S.isMeshStandardMaterial?z.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),B=j&&j.mapping===hr?j.image.height:null,ie=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=ne!==void 0?ne.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let et,X,ae,xe;if(ie){const Lt=dn[ie];et=Lt.vertexShader,X=Lt.fragmentShader}else et=S.vertexShader,X=S.fragmentShader,c.update(S),ae=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);const oe=n.getRenderTarget(),Ie=P.isInstancedMesh===!0,Ge=P.isBatchedMesh===!0,ke=!!S.map,N=!!S.matcap,$=!!j,Y=!!S.aoMap,re=!!S.lightMap,Q=!!S.bumpMap,se=!!S.normalMap,b=!!S.displacementMap,x=!!S.emissiveMap,k=!!S.metalnessMap,V=!!S.roughnessMap,q=S.anisotropy>0,Z=S.clearcoat>0,Te=S.iridescence>0,K=S.sheen>0,Se=S.transmission>0,Re=q&&!!S.anisotropyMap,ce=Z&&!!S.clearcoatMap,_e=Z&&!!S.clearcoatNormalMap,Ne=Z&&!!S.clearcoatRoughnessMap,ye=Te&&!!S.iridescenceMap,Me=Te&&!!S.iridescenceThicknessMap,qe=K&&!!S.sheenColorMap,Ye=K&&!!S.sheenRoughnessMap,tt=!!S.specularMap,Je=!!S.specularColorMap,lt=!!S.specularIntensityMap,we=Se&&!!S.transmissionMap,R=Se&&!!S.thicknessMap,he=!!S.gradientMap,le=!!S.alphaMap,be=S.alphaTest>0,Ae=!!S.alphaHash,st=!!S.extensions;let ht=Zn;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ht=n.toneMapping);const mt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:X,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ge,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ni,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:N,envMap:$,envMapMode:$&&j.mapping,envMapCubeUVHeight:B,aoMap:Y,lightMap:re,bumpMap:Q,normalMap:se,displacementMap:f&&b,emissiveMap:x,normalMapObjectSpace:se&&S.normalMapType===Tu,normalMapTangentSpace:se&&S.normalMapType===Ah,metalnessMap:k,roughnessMap:V,anisotropy:q,anisotropyMap:Re,clearcoat:Z,clearcoatMap:ce,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ne,iridescence:Te,iridescenceMap:ye,iridescenceThicknessMap:Me,sheen:K,sheenColorMap:qe,sheenRoughnessMap:Ye,specularMap:tt,specularColorMap:Je,specularIntensityMap:lt,transmission:Se,transmissionMap:we,thicknessMap:R,gradientMap:he,opaque:S.transparent===!1&&S.blending===ss&&S.alphaToCoverage===!1,alphaMap:le,alphaTest:be,alphaHash:Ae,combine:S.combine,mapUv:ke&&_(S.map.channel),aoMapUv:Y&&_(S.aoMap.channel),lightMapUv:re&&_(S.lightMap.channel),bumpMapUv:Q&&_(S.bumpMap.channel),normalMapUv:se&&_(S.normalMap.channel),displacementMapUv:b&&_(S.displacementMap.channel),emissiveMapUv:x&&_(S.emissiveMap.channel),metalnessMapUv:k&&_(S.metalnessMap.channel),roughnessMapUv:V&&_(S.roughnessMap.channel),anisotropyMapUv:Re&&_(S.anisotropyMap.channel),clearcoatMapUv:ce&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(S.sheenRoughnessMap.channel),specularMapUv:tt&&_(S.specularMap.channel),specularColorMapUv:Je&&_(S.specularColorMap.channel),specularIntensityMapUv:lt&&_(S.specularIntensityMap.channel),transmissionMapUv:we&&_(S.transmissionMap.channel),thicknessMapUv:R&&_(S.thicknessMap.channel),alphaMapUv:le&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(se||q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&(ke||le),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:st&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),S.push(o.mask)}function w(S){const y=g[S.type];let I;if(y){const z=dn[y];I=Oh.clone(z.uniforms)}else I=S.uniforms;return I}function L(S,y){let I;for(let z=0,P=h.length;z<P;z++){const G=h[z];if(G.cacheKey===y){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Cm(n,y,S,a),h.push(I)),I}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function D(){c.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:w,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:D}}function Um(){let n=new WeakMap;function e(a){let r=n.get(a);return r===void 0&&(r={},n.set(a,r)),r}function t(a){n.delete(a)}function i(a,r,o){n.get(a)[r]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Nm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ll(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(d,f,p,g,_,u){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:u},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=u),e++,m}function o(d,f,p,g,_,u){const m=r(d,f,p,g,_,u);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function c(d,f,p,g,_,u){const m=r(d,f,p,g,_,u);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function l(d,f){t.length>1&&t.sort(d||Nm),i.length>1&&i.sort(f||Pl),s.length>1&&s.sort(f||Pl)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function km(){let n=new WeakMap;function e(i,s){const a=n.get(i);let r;return a===void 0?(r=new Ll,n.set(i,[r])):s>=a.length?(r=new Ll,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Hm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ze};break;case"SpotLight":t={position:new C,direction:new C,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Om(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fm=0;function zm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bm(n){const e=new Hm,t=Om(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,a=new ct,r=new ct;function o(l,h){let d=0,f=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let g=0,_=0,u=0,m=0,M=0,v=0,w=0,L=0,A=0,T=0,D=0;l.sort(zm);const S=h===!0?Math.PI:1;for(let I=0,z=l.length;I<z;I++){const P=l[I],G=P.color,W=P.intensity,J=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*W*S,f+=G.g*W*S,p+=G.b*W*S;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],W);D++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const ie=P.shadow,ne=t.get(P);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=P.shadow.matrix,v++}i.directional[g]=B,g++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(G).multiplyScalar(W*S),B.distance=J,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[u]=B;const ie=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,ie.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[u]=ie.matrix,P.castShadow){const ne=t.get(P);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,i.spotShadow[u]=ne,i.spotShadowMap[u]=j,L++}u++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(G).multiplyScalar(W),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*S),B.distance=P.distance,B.decay=P.decay,P.castShadow){const ie=P.shadow,ne=t.get(P);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,ne.shadowCameraNear=ie.camera.near,ne.shadowCameraFar=ie.camera.far,i.pointShadow[_]=ne,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=P.shadow.matrix,w++}i.point[_]=B,_++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(W*S),B.groundColor.copy(P.groundColor).multiplyScalar(W*S),i.hemi[M]=B,M++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==u||y.rectAreaLength!==m||y.hemiLength!==M||y.numDirectionalShadows!==v||y.numPointShadows!==w||y.numSpotShadows!==L||y.numSpotMaps!==A||y.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=m,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,y.directionalLength=g,y.pointLength=_,y.spotLength=u,y.rectAreaLength=m,y.hemiLength=M,y.numDirectionalShadows=v,y.numPointShadows=w,y.numSpotShadows=L,y.numSpotMaps=A,y.numLightProbes=D,i.version=Fm++)}function c(l,h){let d=0,f=0,p=0,g=0,_=0;const u=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const v=l[m];if(v.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),d++}else if(v.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),p++}else if(v.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),r.identity(),a.copy(v.matrixWorld),a.premultiply(u),r.extractRotation(a),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),f++}else if(v.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),_++}}}return{setup:o,setupView:c,state:i}}function Il(n){const e=new Bm(n),t=[],i=[];function s(){t.length=0,i.length=0}function a(h){t.push(h)}function r(h){i.push(h)}function o(h){e.setup(t,h)}function c(h){e.setupView(t,h)}return{init:s,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Gm(n){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Il(n),e.set(s,[o])):a>=r.length?(o=new Il(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Vm extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function Ym(n,e,t){let i=new Vo;const s=new te,a=new te,r=new At,o=new Vm({depthPacking:bu}),c=new Wm,l={},h=t.maxTextureSize,d={[Qn]:zt,[zt]:Qn,[Ft]:Ft},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(g,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let m=this.type;this.render=function(A,T,D){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending($n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const P=m!==Rn&&this.type===Rn,G=m===Rn&&this.type!==Rn;for(let W=0,J=A.length;W<J;W++){const j=A[W],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ie=B.getFrameExtents();if(s.multiply(ie),a.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ie.x),s.x=a.x*ie.x,B.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ie.y),s.y=a.y*ie.y,B.mapSize.y=a.y)),B.map===null||P===!0||G===!0){const ve=this.type!==Rn?{minFilter:Wt,magFilter:Wt}:{};B.map!==null&&B.map.dispose(),B.map=new bi(s.x,s.y,ve),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ne=B.getViewportCount();for(let ve=0;ve<ne;ve++){const Be=B.getViewport(ve);r.set(a.x*Be.x,a.y*Be.y,a.x*Be.z,a.y*Be.w),z.viewport(r),B.updateMatrices(j,ve),i=B.getFrustum(),w(T,D,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===Rn&&M(B,D),B.needsUpdate=!1}m=this.type,u.needsUpdate=!1,n.setRenderTarget(S,y,I)};function M(A,T){const D=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,D,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,D,p,_,null)}function v(A,T,D,S){let y=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=D.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=y.uuid,P=T.uuid;let G=l[z];G===void 0&&(G={},l[z]=G);let W=G[P];W===void 0&&(W=y.clone(),G[P]=W,T.addEventListener("dispose",L)),y=W}if(y.visible=T.visible,y.wireframe=T.wireframe,S===Rn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=D}return y}function w(A,T,D,S,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Rn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const P=e.update(A),G=A.material;if(Array.isArray(G)){const W=P.groups;for(let J=0,j=W.length;J<j;J++){const B=W[J],ie=G[B.materialIndex];if(ie&&ie.visible){const ne=v(A,ie,S,y);A.onBeforeShadow(n,A,T,D,P,ne,B),n.renderBufferDirect(D,null,P,ne,A,B),A.onAfterShadow(n,A,T,D,P,ne,B)}}}else if(G.visible){const W=v(A,G,S,y);A.onBeforeShadow(n,A,T,D,P,W,null),n.renderBufferDirect(D,null,P,W,A,null),A.onAfterShadow(n,A,T,D,P,W,null)}}const z=A.children;for(let P=0,G=z.length;P<G;P++)w(z[P],T,D,S,y)}function L(A){A.target.removeEventListener("dispose",L);for(const D in l){const S=l[D],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function $m(n){function e(){let R=!1;const he=new At;let le=null;const be=new At(0,0,0,0);return{setMask:function(Ae){le!==Ae&&!R&&(n.colorMask(Ae,Ae,Ae,Ae),le=Ae)},setLocked:function(Ae){R=Ae},setClear:function(Ae,st,ht,mt,Lt){Lt===!0&&(Ae*=mt,st*=mt,ht*=mt),he.set(Ae,st,ht,mt),be.equals(he)===!1&&(n.clearColor(Ae,st,ht,mt),be.copy(he))},reset:function(){R=!1,le=null,be.set(-1,0,0,0)}}}function t(){let R=!1,he=null,le=null,be=null;return{setTest:function(Ae){Ae?xe(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(Ae){he!==Ae&&!R&&(n.depthMask(Ae),he=Ae)},setFunc:function(Ae){if(le!==Ae){switch(Ae){case Qd:n.depthFunc(n.NEVER);break;case eu:n.depthFunc(n.ALWAYS);break;case tu:n.depthFunc(n.LESS);break;case qa:n.depthFunc(n.LEQUAL);break;case nu:n.depthFunc(n.EQUAL);break;case iu:n.depthFunc(n.GEQUAL);break;case su:n.depthFunc(n.GREATER);break;case au:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Ae}},setLocked:function(Ae){R=Ae},setClear:function(Ae){be!==Ae&&(n.clearDepth(Ae),be=Ae)},reset:function(){R=!1,he=null,le=null,be=null}}}function i(){let R=!1,he=null,le=null,be=null,Ae=null,st=null,ht=null,mt=null,Lt=null;return{setTest:function(at){R||(at?xe(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(at){he!==at&&!R&&(n.stencilMask(at),he=at)},setFunc:function(at,on,cn){(le!==at||be!==on||Ae!==cn)&&(n.stencilFunc(at,on,cn),le=at,be=on,Ae=cn)},setOp:function(at,on,cn){(st!==at||ht!==on||mt!==cn)&&(n.stencilOp(at,on,cn),st=at,ht=on,mt=cn)},setLocked:function(at){R=at},setClear:function(at){Lt!==at&&(n.clearStencil(at),Lt=at)},reset:function(){R=!1,he=null,le=null,be=null,Ae=null,st=null,ht=null,mt=null,Lt=null}}}const s=new e,a=new t,r=new i,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,f=[],p=null,g=!1,_=null,u=null,m=null,M=null,v=null,w=null,L=null,A=new ze(0,0,0),T=0,D=!1,S=null,y=null,I=null,z=null,P=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=J>=2);let B=null,ie={};const ne=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Be=new At().fromArray(ne),et=new At().fromArray(ve);function X(R,he,le,be){const Ae=new Uint8Array(4),st=n.createTexture();n.bindTexture(R,st),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ht=0;ht<le;ht++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(he+ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return st}const ae={};ae[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),xe(n.DEPTH_TEST),a.setFunc(qa),Q(!1),se(uc),xe(n.CULL_FACE),Y($n);function xe(R){l[R]!==!0&&(n.enable(R),l[R]=!0)}function oe(R){l[R]!==!1&&(n.disable(R),l[R]=!1)}function Ie(R,he){return h[R]!==he?(n.bindFramebuffer(R,he),h[R]=he,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Ge(R,he){let le=f,be=!1;if(R){le=d.get(he),le===void 0&&(le=[],d.set(he,le));const Ae=R.textures;if(le.length!==Ae.length||le[0]!==n.COLOR_ATTACHMENT0){for(let st=0,ht=Ae.length;st<ht;st++)le[st]=n.COLOR_ATTACHMENT0+st;le.length=Ae.length,be=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,be=!0);be&&n.drawBuffers(le)}function ke(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const N={[_i]:n.FUNC_ADD,[kd]:n.FUNC_SUBTRACT,[Hd]:n.FUNC_REVERSE_SUBTRACT};N[Od]=n.MIN,N[Fd]=n.MAX;const $={[zd]:n.ZERO,[Bd]:n.ONE,[Gd]:n.SRC_COLOR,[_o]:n.SRC_ALPHA,[$d]:n.SRC_ALPHA_SATURATE,[qd]:n.DST_COLOR,[Wd]:n.DST_ALPHA,[Vd]:n.ONE_MINUS_SRC_COLOR,[vo]:n.ONE_MINUS_SRC_ALPHA,[Yd]:n.ONE_MINUS_DST_COLOR,[Xd]:n.ONE_MINUS_DST_ALPHA,[Zd]:n.CONSTANT_COLOR,[Jd]:n.ONE_MINUS_CONSTANT_COLOR,[Kd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(R,he,le,be,Ae,st,ht,mt,Lt,at){if(R===$n){g===!0&&(oe(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),R!==Nd){if(R!==_||at!==D){if((u!==_i||v!==_i)&&(n.blendEquation(n.FUNC_ADD),u=_i,v=_i),at)switch(R){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}m=null,M=null,w=null,L=null,A.set(0,0,0),T=0,_=R,D=at}return}Ae=Ae||he,st=st||le,ht=ht||be,(he!==u||Ae!==v)&&(n.blendEquationSeparate(N[he],N[Ae]),u=he,v=Ae),(le!==m||be!==M||st!==w||ht!==L)&&(n.blendFuncSeparate($[le],$[be],$[st],$[ht]),m=le,M=be,w=st,L=ht),(mt.equals(A)===!1||Lt!==T)&&(n.blendColor(mt.r,mt.g,mt.b,Lt),A.copy(mt),T=Lt),_=R,D=!1}function re(R,he){R.side===Ft?oe(n.CULL_FACE):xe(n.CULL_FACE);let le=R.side===zt;he&&(le=!le),Q(le),R.blending===ss&&R.transparent===!1?Y($n):Y(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const be=R.stencilWrite;r.setTest(be),be&&(r.setMask(R.stencilWriteMask),r.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),r.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),x(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(R){S!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),S=R)}function se(R){R!==Dd?(xe(n.CULL_FACE),R!==y&&(R===uc?n.cullFace(n.BACK):R===Ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),y=R}function b(R){R!==I&&(W&&n.lineWidth(R),I=R)}function x(R,he,le){R?(xe(n.POLYGON_OFFSET_FILL),(z!==he||P!==le)&&(n.polygonOffset(he,le),z=he,P=le)):oe(n.POLYGON_OFFSET_FILL)}function k(R){R?xe(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function V(R){R===void 0&&(R=n.TEXTURE0+G-1),B!==R&&(n.activeTexture(R),B=R)}function q(R,he,le){le===void 0&&(B===null?le=n.TEXTURE0+G-1:le=B);let be=ie[le];be===void 0&&(be={type:void 0,texture:void 0},ie[le]=be),(be.type!==R||be.texture!==he)&&(B!==le&&(n.activeTexture(le),B=le),n.bindTexture(R,he||ae[R]),be.type=R,be.texture=he)}function Z(){const R=ie[B];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(R){Be.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Be.copy(R))}function tt(R){et.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),et.copy(R))}function Je(R,he){let le=c.get(he);le===void 0&&(le=new WeakMap,c.set(he,le));let be=le.get(R);be===void 0&&(be=n.getUniformBlockIndex(he,R.name),le.set(R,be))}function lt(R,he){const be=c.get(he).get(R);o.get(he)!==be&&(n.uniformBlockBinding(he,be,R.__bindingPointIndex),o.set(he,be))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},B=null,ie={},h={},d=new WeakMap,f=[],p=null,g=!1,_=null,u=null,m=null,M=null,v=null,w=null,L=null,A=new ze(0,0,0),T=0,D=!1,S=null,y=null,I=null,z=null,P=null,Be.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:xe,disable:oe,bindFramebuffer:Ie,drawBuffers:Ge,useProgram:ke,setBlending:Y,setMaterial:re,setFlipSided:Q,setCullFace:se,setLineWidth:b,setPolygonOffset:x,setScissorTest:k,activeTexture:V,bindTexture:q,unbindTexture:Z,compressedTexImage2D:Te,compressedTexImage3D:K,texImage2D:Me,texImage3D:qe,updateUBOMapping:Je,uniformBlockBinding:lt,texStorage2D:Ne,texStorage3D:ye,texSubImage2D:Se,texSubImage3D:Re,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:Ye,viewport:tt,reset:we}}function Zm(n,e,t,i,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new te,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Qa("canvas")}function _(b,x,k){let V=1;const q=se(b);if((q.width>k||q.height>k)&&(V=k/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(V*q.width),Te=Math.floor(V*q.height);d===void 0&&(d=g(Z,Te));const K=x?g(Z,Te):d;return K.width=Z,K.height=Te,K.getContext("2d").drawImage(b,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+Z+"x"+Te+")."),K}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),b;return b}function u(b){return b.generateMipmaps&&b.minFilter!==Wt&&b.minFilter!==sn}function m(b){n.generateMipmap(b)}function M(b,x,k,V,q=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),x===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),x===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){const Te=q?Za:nt.getTransfer(V);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(b,x){return u(b)===!0||b.isFramebufferTexture&&b.minFilter!==Wt&&b.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){const x=b.target;x.removeEventListener("dispose",w),A(x),x.isVideoTexture&&h.delete(x)}function L(b){const x=b.target;x.removeEventListener("dispose",L),D(x)}function A(b){const x=i.get(b);if(x.__webglInit===void 0)return;const k=b.source,V=f.get(k);if(V){const q=V[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&T(b),Object.keys(V).length===0&&f.delete(k)}i.remove(b)}function T(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const k=b.source,V=f.get(k);delete V[x.__cacheKey],r.memory.textures--}function D(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let q=0;q<x.__webglFramebuffer[V].length;q++)n.deleteFramebuffer(x.__webglFramebuffer[V][q]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=b.textures;for(let V=0,q=k.length;V<q;V++){const Z=i.get(k[V]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(k[V])}i.remove(b)}let S=0;function y(){S=0}function I(){const b=S;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),S+=1,b}function z(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function P(b,x){const k=i.get(b);if(b.isVideoTexture&&re(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(k,b,x);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function G(b,x){const k=i.get(b);if(b.version>0&&k.__version!==b.version){Be(k,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function W(b,x){const k=i.get(b);if(b.version>0&&k.__version!==b.version){Be(k,b,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function J(b,x){const k=i.get(b);if(b.version>0&&k.__version!==b.version){et(k,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const j={[Ya]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},B={[Wt]:n.NEAREST,[pu]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[br]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},ie={[Au]:n.NEVER,[Du]:n.ALWAYS,[Ru]:n.LESS,[Rh]:n.LEQUAL,[Cu]:n.EQUAL,[Iu]:n.GEQUAL,[Pu]:n.GREATER,[Lu]:n.NOTEQUAL};function ne(b,x){if(x.type===Un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===br||x.magFilter===ra||x.magFilter===Si||x.minFilter===sn||x.minFilter===br||x.minFilter===ra||x.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,j[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,j[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,j[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,B[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,B[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Wt||x.minFilter!==ra&&x.minFilter!==Si||x.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ve(b,x){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",w));const V=x.source;let q=f.get(V);q===void 0&&(q={},f.set(V,q));const Z=z(x);if(Z!==b.__cacheKey){q[Z]===void 0&&(q[Z]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,k=!0),q[Z].usedTimes++;const Te=q[b.__cacheKey];Te!==void 0&&(q[b.__cacheKey].usedTimes--,Te.usedTimes===0&&T(x)),b.__cacheKey=Z,b.__webglTexture=q[Z].texture}return k}function Be(b,x,k){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const q=ve(b,x),Z=x.source;t.bindTexture(V,b.__webglTexture,n.TEXTURE0+k);const Te=i.get(Z);if(Z.version!==Te.__version||q===!0){t.activeTexture(n.TEXTURE0+k);const K=nt.getPrimaries(nt.workingColorSpace),Se=x.colorSpace===qn?null:nt.getPrimaries(x.colorSpace),Re=x.colorSpace===qn||K===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ce=_(x.image,!1,s.maxTextureSize);ce=Q(x,ce);const _e=a.convert(x.format,x.colorSpace),Ne=a.convert(x.type);let ye=M(x.internalFormat,_e,Ne,x.colorSpace,x.isVideoTexture);ne(V,x);let Me;const qe=x.mipmaps,Ye=x.isVideoTexture!==!0&&ye!==Th,tt=Te.__version===void 0||q===!0,Je=Z.dataReady,lt=v(x,ce);if(x.isDepthTexture)ye=n.DEPTH_COMPONENT16,x.type===Un?ye=n.DEPTH_COMPONENT32F:x.type===ls?ye=n.DEPTH_COMPONENT24:x.type===ea&&(ye=n.DEPTH24_STENCIL8),tt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ye,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ye,ce.width,ce.height,0,_e,Ne,null));else if(x.isDataTexture)if(qe.length>0){Ye&&tt&&t.texStorage2D(n.TEXTURE_2D,lt,ye,qe[0].width,qe[0].height);for(let we=0,R=qe.length;we<R;we++)Me=qe[we],Ye?Je&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Me.width,Me.height,_e,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,we,ye,Me.width,Me.height,0,_e,Ne,Me.data);x.generateMipmaps=!1}else Ye?(tt&&t.texStorage2D(n.TEXTURE_2D,lt,ye,ce.width,ce.height),Je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,_e,Ne,ce.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ce.width,ce.height,0,_e,Ne,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ye,qe[0].width,qe[0].height,ce.depth);for(let we=0,R=qe.length;we<R;we++)Me=qe[we],x.format!==mn?_e!==null?Ye?Je&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Me.width,Me.height,ce.depth,_e,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,we,ye,Me.width,Me.height,ce.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Me.width,Me.height,ce.depth,_e,Ne,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,we,ye,Me.width,Me.height,ce.depth,0,_e,Ne,Me.data)}else{Ye&&tt&&t.texStorage2D(n.TEXTURE_2D,lt,ye,qe[0].width,qe[0].height);for(let we=0,R=qe.length;we<R;we++)Me=qe[we],x.format!==mn?_e!==null?Ye?Je&&t.compressedTexSubImage2D(n.TEXTURE_2D,we,0,0,Me.width,Me.height,_e,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,we,ye,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Je&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Me.width,Me.height,_e,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,we,ye,Me.width,Me.height,0,_e,Ne,Me.data)}else if(x.isDataArrayTexture)Ye?(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ye,ce.width,ce.height,ce.depth),Je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ne,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ce.width,ce.height,ce.depth,0,_e,Ne,ce.data);else if(x.isData3DTexture)Ye?(tt&&t.texStorage3D(n.TEXTURE_3D,lt,ye,ce.width,ce.height,ce.depth),Je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ne,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ce.width,ce.height,ce.depth,0,_e,Ne,ce.data);else if(x.isFramebufferTexture){if(tt)if(Ye)t.texStorage2D(n.TEXTURE_2D,lt,ye,ce.width,ce.height);else{let we=ce.width,R=ce.height;for(let he=0;he<lt;he++)t.texImage2D(n.TEXTURE_2D,he,ye,we,R,0,_e,Ne,null),we>>=1,R>>=1}}else if(qe.length>0){if(Ye&&tt){const we=se(qe[0]);t.texStorage2D(n.TEXTURE_2D,lt,ye,we.width,we.height)}for(let we=0,R=qe.length;we<R;we++)Me=qe[we],Ye?Je&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,_e,Ne,Me):t.texImage2D(n.TEXTURE_2D,we,ye,_e,Ne,Me);x.generateMipmaps=!1}else if(Ye){if(tt){const we=se(ce);t.texStorage2D(n.TEXTURE_2D,lt,ye,we.width,we.height)}Je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ne,ce)}else t.texImage2D(n.TEXTURE_2D,0,ye,_e,Ne,ce);u(x)&&m(V),Te.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function et(b,x,k){if(x.image.length!==6)return;const V=ve(b,x),q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const Z=i.get(q);if(q.version!==Z.__version||V===!0){t.activeTexture(n.TEXTURE0+k);const Te=nt.getPrimaries(nt.workingColorSpace),K=x.colorSpace===qn?null:nt.getPrimaries(x.colorSpace),Se=x.colorSpace===qn||Te===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let R=0;R<6;R++)!Re&&!ce?_e[R]=_(x.image[R],!0,s.maxCubemapSize):_e[R]=ce?x.image[R].image:x.image[R],_e[R]=Q(x,_e[R]);const Ne=_e[0],ye=a.convert(x.format,x.colorSpace),Me=a.convert(x.type),qe=M(x.internalFormat,ye,Me,x.colorSpace),Ye=x.isVideoTexture!==!0,tt=Z.__version===void 0||V===!0,Je=q.dataReady;let lt=v(x,Ne);ne(n.TEXTURE_CUBE_MAP,x);let we;if(Re){Ye&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,qe,Ne.width,Ne.height);for(let R=0;R<6;R++){we=_e[R].mipmaps;for(let he=0;he<we.length;he++){const le=we[he];x.format!==mn?ye!==null?Ye?Je&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,0,0,le.width,le.height,ye,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,qe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,0,0,le.width,le.height,ye,Me,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,qe,le.width,le.height,0,ye,Me,le.data)}}}else{if(we=x.mipmaps,Ye&&tt){we.length>0&&lt++;const R=se(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,qe,R.width,R.height)}for(let R=0;R<6;R++)if(ce){Ye?Je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,_e[R].width,_e[R].height,ye,Me,_e[R].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,qe,_e[R].width,_e[R].height,0,ye,Me,_e[R].data);for(let he=0;he<we.length;he++){const be=we[he].image[R].image;Ye?Je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,0,0,be.width,be.height,ye,Me,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,qe,be.width,be.height,0,ye,Me,be.data)}}else{Ye?Je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ye,Me,_e[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,qe,ye,Me,_e[R]);for(let he=0;he<we.length;he++){const le=we[he];Ye?Je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,0,0,ye,Me,le.image[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,qe,ye,Me,le.image[R])}}}u(x)&&m(n.TEXTURE_CUBE_MAP),Z.__version=q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function X(b,x,k,V,q,Z){const Te=a.convert(k.format,k.colorSpace),K=a.convert(k.type),Se=M(k.internalFormat,Te,K,k.colorSpace);if(!i.get(x).__hasExternalTextures){const ce=Math.max(1,x.width>>Z),_e=Math.max(1,x.height>>Z);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,Z,Se,ce,_e,x.depth,0,Te,K,null):t.texImage2D(q,Z,Se,ce,_e,0,Te,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,q,i.get(k).__webglTexture,0,$(x)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,q,i.get(k).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(b,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let V=n.DEPTH_COMPONENT24;if(k||Y(x)){const q=x.depthTexture;q&&q.isDepthTexture&&(q.type===Un?V=n.DEPTH_COMPONENT32F:q.type===ls&&(V=n.DEPTH_COMPONENT24));const Z=$(x);Y(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,V,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,V,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const V=$(x);k&&Y(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):Y(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const V=x.textures;for(let q=0;q<V.length;q++){const Z=V[q],Te=a.convert(Z.format,Z.colorSpace),K=a.convert(Z.type),Se=M(Z.internalFormat,Te,K,Z.colorSpace),Re=$(x);k&&Y(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Se,x.width,x.height):Y(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Se,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),P(x.depthTexture,0);const V=i.get(x.depthTexture).__webglTexture,q=$(x);if(x.depthTexture.format===as)Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(x.depthTexture.format===qs)Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function oe(b){const x=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");xe(x.__webglFramebuffer,b)}else if(k){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[V],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,x,k){const V=i.get(b);x!==void 0&&X(V.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&oe(b)}function Ge(b){const x=b.texture,k=i.get(b),V=i.get(x);b.addEventListener("dispose",L);const q=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Te=q.length>1;if(Te||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,r.memory.textures++),Z){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let Se=0;Se<x.mipmaps.length;Se++)k.__webglFramebuffer[K][Se]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Te)for(let K=0,Se=q.length;K<Se;K++){const Re=i.get(q[K]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),r.memory.textures++)}if(b.samples>0&&Y(b)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const Se=q[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const Re=a.convert(Se.format,Se.colorSpace),ce=a.convert(Se.type),_e=M(Se.internalFormat,Re,ce,Se.colorSpace,b.isXRRenderTarget===!0),Ne=$(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,_e,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ne(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)X(k.__webglFramebuffer[K][Se],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se);else X(k.__webglFramebuffer[K],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);u(x)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let K=0,Se=q.length;K<Se;K++){const Re=q[K],ce=i.get(Re);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),ne(n.TEXTURE_2D,Re),X(k.__webglFramebuffer,b,Re,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,0),u(Re)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,V.__webglTexture),ne(K,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)X(k.__webglFramebuffer[Se],b,x,n.COLOR_ATTACHMENT0,K,Se);else X(k.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,K,0);u(x)&&m(K),t.unbindTexture()}b.depthBuffer&&oe(b)}function ke(b){const x=b.textures;for(let k=0,V=x.length;k<V;k++){const q=x[k];if(u(q)){const Z=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(q).__webglTexture;t.bindTexture(Z,Te),m(Z),t.unbindTexture()}}}function N(b){if(b.samples>0&&Y(b)===!1){const x=b.textures,k=b.width,V=b.height;let q=n.COLOR_BUFFER_BIT;const Z=[],Te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=i.get(b),Se=x.length>1;if(Se)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){Z.push(n.COLOR_ATTACHMENT0+Re),b.depthBuffer&&Z.push(Te);const ce=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(ce===!1&&(b.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&K.__isTransmissionRenderTarget!==!0&&(q|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,K.__webglColorRenderbuffer[Re]),ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Se){const _e=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,k,V,0,0,k,V,q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const ce=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function $(b){return Math.min(s.maxSamples,b.samples)}function Y(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function re(b){const x=r.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Q(b,x){const k=b.colorSpace,V=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==ni&&k!==qn&&(nt.getTransfer(k)===rt?(V!==mn||q!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function se(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=y,this.setTexture2D=P,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Ie,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Y}function Jm(n,e){function t(i,s=qn){let a;const r=nt.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===yh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_u)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mu)return n.BYTE;if(i===gu)return n.SHORT;if(i===vh)return n.UNSIGNED_SHORT;if(i===xh)return n.INT;if(i===ls)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===$a)return n.HALF_FLOAT;if(i===vu)return n.ALPHA;if(i===xu)return n.RGB;if(i===mn)return n.RGBA;if(i===yu)return n.LUMINANCE;if(i===Mu)return n.LUMINANCE_ALPHA;if(i===as)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===Eh)return n.RED_INTEGER;if(i===Su)return n.RG;if(i===wh)return n.RG_INTEGER;if(i===bh)return n.RGBA_INTEGER;if(i===Tr||i===Ar||i===Rr||i===Cr)if(r===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Tr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Tr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===_c||i===vc||i===xc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===gc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===yc||i===Mc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===yc)return r===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Mc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sc||i===Ec||i===wc||i===bc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Sc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pr||i===kc||i===Hc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Pr)return r===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===Oc||i===Fc||i===zc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Pr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Oc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Km extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class it extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const u=t.getJointPose(_,i),m=this._getHandJoint(l,_);u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=u.radius),m.visible=u!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e3=`
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

}`;class t3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Nt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new kn({vertexShader:Qm,fragmentShader:e3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ee(new vn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class n3 extends gs{constructor(e,t){super();const i=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,g=null;const _=new t3,u=t.getContextAttributes();let m=null,M=null;const v=[],w=[],L=new te;let A=null;const T=new Qt;T.layers.enable(1),T.viewport=new At;const D=new Qt;D.layers.enable(2),D.viewport=new At;const S=[T,D],y=new Km;y.layers.enable(1),y.layers.enable(2);let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ae=v[X];return ae===void 0&&(ae=new to,v[X]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(X){let ae=v[X];return ae===void 0&&(ae=new to,v[X]=ae),ae.getGripSpace()},this.getHand=function(X){let ae=v[X];return ae===void 0&&(ae=new to,v[X]=ae),ae.getHandSpace()};function P(X){const ae=w.indexOf(X.inputSource);if(ae===-1)return;const xe=v[ae];xe!==void 0&&(xe.update(X.inputSource,X.frame,l||r),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",W);for(let X=0;X<v.length;X++){const ae=w[X];ae!==null&&(w[X]=null,v[X].disconnect(ae))}I=null,z=null,_.reset(),e.setRenderTarget(m),p=null,f=null,d=null,s=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",G),s.addEventListener("inputsourceschange",W),u.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const ae={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new bi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let ae=null,xe=null,oe=null;u.depth&&(oe=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=u.stencil?qs:as,xe=u.stencil?ea:ls);const Ie={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new bi(f.textureWidth,f.textureHeight,{format:mn,type:Jn,depthTexture:new Vh(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0});const Ge=e.properties.get(M);Ge.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function W(X){for(let ae=0;ae<X.removed.length;ae++){const xe=X.removed[ae],oe=w.indexOf(xe);oe>=0&&(w[oe]=null,v[oe].disconnect(xe))}for(let ae=0;ae<X.added.length;ae++){const xe=X.added[ae];let oe=w.indexOf(xe);if(oe===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=w.length){w.push(xe),oe=Ge;break}else if(w[Ge]===null){w[Ge]=xe,oe=Ge;break}if(oe===-1)break}const Ie=v[oe];Ie&&Ie.connect(xe)}}const J=new C,j=new C;function B(X,ae,xe){J.setFromMatrixPosition(ae.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);const oe=J.distanceTo(j),Ie=ae.projectionMatrix.elements,Ge=xe.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),N=Ie[14]/(Ie[10]+1),$=(Ie[9]+1)/Ie[5],Y=(Ie[9]-1)/Ie[5],re=(Ie[8]-1)/Ie[0],Q=(Ge[8]+1)/Ge[0],se=ke*re,b=ke*Q,x=oe/(-re+Q),k=x*-re;ae.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(k),X.translateZ(x),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const V=ke+x,q=N+x,Z=se-k,Te=b+(oe-k),K=$*N/q*V,Se=Y*N/q*V;X.projectionMatrix.makePerspective(Z,Te,K,Se,V,q),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ie(X,ae){ae===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ae.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),y.near=D.near=T.near=X.near,y.far=D.far=T.far=X.far,(I!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,z=y.far,T.near=I,T.far=z,D.near=I,D.far=z,T.updateProjectionMatrix(),D.updateProjectionMatrix(),X.updateProjectionMatrix());const ae=X.parent,xe=y.cameras;ie(y,ae);for(let oe=0;oe<xe.length;oe++)ie(xe[oe],ae);xe.length===2?B(y,T,D):y.projectionMatrix.copy(T.projectionMatrix),ne(X,y,ae)};function ne(X,ae,xe){xe===null?X.matrix.copy(ae.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ae.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ae.projectionMatrix),X.projectionMatrixInverse.copy(ae.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ys*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null};let ve=null;function Be(X,ae){if(h=ae.getViewerPose(l||r),g=ae,h!==null){const xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let oe=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Ge=0;Ge<xe.length;Ge++){const ke=xe[Ge];let N=null;if(p!==null)N=p.getViewport(ke);else{const Y=d.getViewSubImage(f,ke);N=Y.viewport,Ge===0&&(e.setRenderTargetTextures(M,Y.colorTexture,f.ignoreDepthValues?void 0:Y.depthStencilTexture),e.setRenderTarget(M))}let $=S[Ge];$===void 0&&($=new Qt,$.layers.enable(Ge),$.viewport=new At,S[Ge]=$),$.matrix.fromArray(ke.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ke.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(N.x,N.y,N.width,N.height),Ge===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push($)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ge=d.getDepthInformation(xe[0]);Ge&&Ge.isValid&&Ge.texture&&_.init(e,Ge,s.renderState)}}for(let xe=0;xe<v.length;xe++){const oe=w[xe],Ie=v[xe];oe!==null&&Ie!==void 0&&Ie.update(oe,ae,l||r)}_.render(e,y),ve&&ve(X,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const et=new Bh;et.setAnimationLoop(Be),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const ui=new _n,i3=new ct;function s3(n,e){function t(u,m){u.matrixAutoUpdate===!0&&u.updateMatrix(),m.value.copy(u.matrix)}function i(u,m){m.color.getRGB(u.fogColor.value,Hh(n)),m.isFog?(u.fogNear.value=m.near,u.fogFar.value=m.far):m.isFogExp2&&(u.fogDensity.value=m.density)}function s(u,m,M,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(u,m):m.isMeshToonMaterial?(a(u,m),d(u,m)):m.isMeshPhongMaterial?(a(u,m),h(u,m)):m.isMeshStandardMaterial?(a(u,m),f(u,m),m.isMeshPhysicalMaterial&&p(u,m,w)):m.isMeshMatcapMaterial?(a(u,m),g(u,m)):m.isMeshDepthMaterial?a(u,m):m.isMeshDistanceMaterial?(a(u,m),_(u,m)):m.isMeshNormalMaterial?a(u,m):m.isLineBasicMaterial?(r(u,m),m.isLineDashedMaterial&&o(u,m)):m.isPointsMaterial?c(u,m,M,v):m.isSpriteMaterial?l(u,m):m.isShadowMaterial?(u.color.value.copy(m.color),u.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(u,m){u.opacity.value=m.opacity,m.color&&u.diffuse.value.copy(m.color),m.emissive&&u.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(u.map.value=m.map,t(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.bumpMap&&(u.bumpMap.value=m.bumpMap,t(m.bumpMap,u.bumpMapTransform),u.bumpScale.value=m.bumpScale,m.side===zt&&(u.bumpScale.value*=-1)),m.normalMap&&(u.normalMap.value=m.normalMap,t(m.normalMap,u.normalMapTransform),u.normalScale.value.copy(m.normalScale),m.side===zt&&u.normalScale.value.negate()),m.displacementMap&&(u.displacementMap.value=m.displacementMap,t(m.displacementMap,u.displacementMapTransform),u.displacementScale.value=m.displacementScale,u.displacementBias.value=m.displacementBias),m.emissiveMap&&(u.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,u.emissiveMapTransform)),m.specularMap&&(u.specularMap.value=m.specularMap,t(m.specularMap,u.specularMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,w=M.envMapRotation;if(v&&(u.envMap.value=v,ui.copy(w),ui.x*=-1,ui.y*=-1,ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.envMapRotation.value.setFromMatrix4(i3.makeRotationFromEuler(ui)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=m.reflectivity,u.ior.value=m.ior,u.refractionRatio.value=m.refractionRatio),m.lightMap){u.lightMap.value=m.lightMap;const L=n._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=m.lightMapIntensity*L,t(m.lightMap,u.lightMapTransform)}m.aoMap&&(u.aoMap.value=m.aoMap,u.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,u.aoMapTransform))}function r(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,m.map&&(u.map.value=m.map,t(m.map,u.mapTransform))}function o(u,m){u.dashSize.value=m.dashSize,u.totalSize.value=m.dashSize+m.gapSize,u.scale.value=m.scale}function c(u,m,M,v){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.size.value=m.size*M,u.scale.value=v*.5,m.map&&(u.map.value=m.map,t(m.map,u.uvTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function l(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.rotation.value=m.rotation,m.map&&(u.map.value=m.map,t(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function h(u,m){u.specular.value.copy(m.specular),u.shininess.value=Math.max(m.shininess,1e-4)}function d(u,m){m.gradientMap&&(u.gradientMap.value=m.gradientMap)}function f(u,m){u.metalness.value=m.metalness,m.metalnessMap&&(u.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,u.metalnessMapTransform)),u.roughness.value=m.roughness,m.roughnessMap&&(u.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,u.roughnessMapTransform)),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)}function p(u,m,M){u.ior.value=m.ior,m.sheen>0&&(u.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),u.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(u.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,u.sheenColorMapTransform)),m.sheenRoughnessMap&&(u.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,u.sheenRoughnessMapTransform))),m.clearcoat>0&&(u.clearcoat.value=m.clearcoat,u.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(u.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,u.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(u.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&u.clearcoatNormalScale.value.negate())),m.iridescence>0&&(u.iridescence.value=m.iridescence,u.iridescenceIOR.value=m.iridescenceIOR,u.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(u.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,u.iridescenceMapTransform)),m.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),m.transmission>0&&(u.transmission.value=m.transmission,u.transmissionSamplerMap.value=M.texture,u.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(u.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,u.transmissionMapTransform)),u.thickness.value=m.thickness,m.thicknessMap&&(u.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=m.attenuationDistance,u.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(u.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(u.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=m.specularIntensity,u.specularColor.value.copy(m.specularColor),m.specularColorMap&&(u.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,u.specularColorMapTransform)),m.specularIntensityMap&&(u.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,m){m.matcap&&(u.matcap.value=m.matcap)}function _(u,m){const M=e.get(m).light;u.referencePosition.value.setFromMatrixPosition(M.matrixWorld),u.nearDistance.value=M.shadow.camera.near,u.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function a3(n,e,t,i){let s={},a={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const w=v.program;i.uniformBlockBinding(M,w)}function l(M,v){let w=s[M.id];w===void 0&&(g(M),w=h(M),s[M.id]=w,M.addEventListener("dispose",u));const L=v.program;i.updateUBOMapping(M,L);const A=e.render.frame;a[M.id]!==A&&(f(M),a[M.id]=A)}function h(M){const v=d();M.__bindingPointIndex=v;const w=n.createBuffer(),L=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function d(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],w=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,T=w.length;A<T;A++){const D=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,y=D.length;S<y;S++){const I=D[S];if(p(I,A,S,L)===!0){const z=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let W=0;W<P.length;W++){const J=P[W],j=_(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,z+G,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,v,w,L){const A=M.value,T=v+"_"+w;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const D=L[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return L[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(M){const v=M.uniforms;let w=0;const L=16;for(let T=0,D=v.length;T<D;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,I=S.length;y<I;y++){const z=S[y],P=Array.isArray(z.value)?z.value:[z.value];for(let G=0,W=P.length;G<W;G++){const J=P[G],j=_(J),B=w%L;B!==0&&L-B<j.boundary&&(w+=L-B),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=j.storage}}}const A=w%L;return A>0&&(w+=L-A),M.__size=w,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function u(M){const v=M.target;v.removeEventListener("dispose",u);const w=r.indexOf(v.__bindingPointIndex);r.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function m(){for(const M in s)n.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:c,update:l,dispose:m}}class Dl{constructor(e={}){const{canvas:t=Ju(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,u=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const v=this;let w=!1,L=0,A=0,T=null,D=-1,S=null;const y=new At,I=new At;let z=null;const P=new ze(0);let G=0,W=t.width,J=t.height,j=1,B=null,ie=null;const ne=new At(0,0,W,J),ve=new At(0,0,W,J);let Be=!1;const et=new Vo;let X=!1,ae=!1;const xe=new ct,oe=new te,Ie=new C,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return T===null?j:1}let N=i;function $(E,U){const O=t.getContext(E,U);return O!==null?O:null}try{const E={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",be,!1),N===null){const U="webgl2";if(N=$(U,E),N===null)throw $(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,re,Q,se,b,x,k,V,q,Z,Te,K,Se,Re,ce,_e,Ne,ye,Me,qe,Ye,tt,Je,lt;function we(){Y=new pp(N),Y.init(),re=new cp(N,Y,e),tt=new Jm(N,Y),Q=new $m(N),se=new _p(N),b=new Um,x=new Zm(N,Y,Q,b,re,tt,se),k=new hp(v),V=new fp(v),q=new S1(N),Je=new rp(N,q),Z=new mp(N,q,se,Je),Te=new xp(N,Z,q,se),Me=new vp(N,re,x),_e=new lp(b),K=new Dm(v,k,V,Y,re,Je,_e),Se=new s3(v,b),Re=new km,ce=new Gm(Y),ye=new ap(v,k,V,Q,Te,f,c),Ne=new Ym(v,Te,re),lt=new a3(N,se,re,Q),qe=new op(N,Y,se),Ye=new gp(N,Y,se),se.programs=K.programs,v.capabilities=re,v.extensions=Y,v.properties=b,v.renderLists=Re,v.shadowMap=Ne,v.state=Q,v.info=se}we();const R=new n3(v,N);this.xr=R,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(W,J,!1))},this.getSize=function(E){return E.set(W,J)},this.setSize=function(E,U,O=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,J=U,t.width=Math.floor(E*j),t.height=Math.floor(U*j),O===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*j,J*j).floor()},this.setDrawingBufferSize=function(E,U,O){W=E,J=U,j=O,t.width=Math.floor(E*O),t.height=Math.floor(U*O),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,U,O,F){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,U,O,F),Q.viewport(y.copy(ne).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(ve)},this.setScissor=function(E,U,O,F){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,U,O,F),Q.scissor(I.copy(ve).multiplyScalar(j).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){Q.setScissorTest(Be=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(E=!0,U=!0,O=!0){let F=0;if(E){let H=!1;if(T!==null){const fe=T.texture.format;H=fe===bh||fe===wh||fe===Eh}if(H){const fe=T.texture.type,Ee=fe===Jn||fe===ls||fe===vh||fe===ea||fe===yh||fe===Mh,Ce=ye.getClearColor(),De=ye.getClearAlpha(),Oe=Ce.r,He=Ce.g,Fe=Ce.b;Ee?(p[0]=Oe,p[1]=He,p[2]=Fe,p[3]=De,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Oe,g[1]=He,g[2]=Fe,g[3]=De,N.clearBufferiv(N.COLOR,0,g))}else F|=N.COLOR_BUFFER_BIT}U&&(F|=N.DEPTH_BUFFER_BIT),O&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Re.dispose(),ce.dispose(),b.dispose(),k.dispose(),V.dispose(),Te.dispose(),Je.dispose(),lt.dispose(),K.dispose(),R.dispose(),R.removeEventListener("sessionstart",on),R.removeEventListener("sessionend",cn),ai.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=se.autoReset,U=Ne.enabled,O=Ne.autoUpdate,F=Ne.needsUpdate,H=Ne.type;we(),se.autoReset=E,Ne.enabled=U,Ne.autoUpdate=O,Ne.needsUpdate=F,Ne.type=H}function be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){const U=E.target;U.removeEventListener("dispose",Ae),st(U)}function st(E){ht(E),b.remove(E)}function ht(E){const U=b.get(E).programs;U!==void 0&&(U.forEach(function(O){K.releaseProgram(O)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,O,F,H,fe){U===null&&(U=Ge);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,Ce=Ad(E,U,O,F,H);Q.setMaterial(F,Ee);let De=O.index,Oe=1;if(F.wireframe===!0){if(De=Z.getWireframeAttribute(O),De===void 0)return;Oe=2}const He=O.drawRange,Fe=O.attributes.position;let vt=He.start*Oe,qt=(He.start+He.count)*Oe;fe!==null&&(vt=Math.max(vt,fe.start*Oe),qt=Math.min(qt,(fe.start+fe.count)*Oe)),De!==null?(vt=Math.max(vt,0),qt=Math.min(qt,De.count)):Fe!=null&&(vt=Math.max(vt,0),qt=Math.min(qt,Fe.count));const bt=qt-vt;if(bt<0||bt===1/0)return;Je.setup(H,F,Ce,O,De);let Mn,gt=qe;if(De!==null&&(Mn=q.get(De),gt=Ye,gt.setIndex(Mn)),H.isMesh)F.wireframe===!0?(Q.setLineWidth(F.wireframeLinewidth*ke()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(H.isLine){let Ve=F.linewidth;Ve===void 0&&(Ve=1),Q.setLineWidth(Ve*ke()),H.isLineSegments?gt.setMode(N.LINES):H.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else H.isPoints?gt.setMode(N.POINTS):H.isSprite&&gt.setMode(N.TRIANGLES);if(H.isBatchedMesh)gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)gt.renderInstances(vt,bt,H.count);else if(O.isInstancedBufferGeometry){const Ve=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Mr=Math.min(O.instanceCount,Ve);gt.renderInstances(vt,bt,Mr)}else gt.render(vt,bt)};function mt(E,U,O){E.transparent===!0&&E.side===Ft&&E.forceSinglePass===!1?(E.side=zt,E.needsUpdate=!0,aa(E,U,O),E.side=Qn,E.needsUpdate=!0,aa(E,U,O),E.side=Ft):aa(E,U,O)}this.compile=function(E,U,O=null){O===null&&(O=E),u=ce.get(O),u.init(),M.push(u),O.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),E!==O&&E.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights(v._useLegacyLights);const F=new Set;return E.traverse(function(H){const fe=H.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){const Ce=fe[Ee];mt(Ce,O,H),F.add(Ce)}else mt(fe,O,H),F.add(fe)}),M.pop(),u=null,F},this.compileAsync=function(E,U,O=null){const F=this.compile(E,U,O);return new Promise(H=>{function fe(){if(F.forEach(function(Ee){b.get(Ee).currentProgram.isReady()&&F.delete(Ee)}),F.size===0){H(E);return}setTimeout(fe,10)}Y.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Lt=null;function at(E){Lt&&Lt(E)}function on(){ai.stop()}function cn(){ai.start()}const ai=new Bh;ai.setAnimationLoop(at),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){Lt=E,R.setAnimationLoop(E),E===null?ai.stop():ai.start()},R.addEventListener("sessionstart",on),R.addEventListener("sessionend",cn),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(U),U=R.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,T),u=ce.get(E,M.length),u.init(),M.push(u),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(xe),ae=this.localClippingEnabled,X=_e.init(this.clippingPlanes,ae),_=Re.get(E,m.length),_.init(),m.push(_),ac(E,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(B,ie),this.info.render.frame++,X===!0&&_e.beginShadows();const O=u.state.shadowsArray;if(Ne.render(O,E,U),X===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1)&&ye.render(_,E),u.setupLights(v._useLegacyLights),U.isArrayCamera){const F=U.cameras;for(let H=0,fe=F.length;H<fe;H++){const Ee=F[H];rc(_,E,Ee,Ee.viewport)}}else rc(_,E,U);T!==null&&(x.updateMultisampleRenderTarget(T),x.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,U),Je.resetDefaultState(),D=-1,S=null,M.pop(),M.length>0?u=M[M.length-1]:u=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ac(E,U,O,F){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){F&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xe);const Ee=Te.update(E),Ce=E.material;Ce.visible&&_.push(E,Ee,Ce,O,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const Ee=Te.update(E),Ce=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ie.copy(Ee.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){const De=Ee.groups;for(let Oe=0,He=De.length;Oe<He;Oe++){const Fe=De[Oe],vt=Ce[Fe.materialIndex];vt&&vt.visible&&_.push(E,Ee,vt,O,Ie.z,Fe)}}else Ce.visible&&_.push(E,Ee,Ce,O,Ie.z,null)}}const fe=E.children;for(let Ee=0,Ce=fe.length;Ee<Ce;Ee++)ac(fe[Ee],U,O,F)}function rc(E,U,O,F){const H=E.opaque,fe=E.transmissive,Ee=E.transparent;u.setupLightsView(O),X===!0&&_e.setGlobalState(v.clippingPlanes,O),fe.length>0&&Td(H,fe,U,O),F&&Q.viewport(y.copy(F)),H.length>0&&sa(H,U,O),fe.length>0&&sa(fe,U,O),Ee.length>0&&sa(Ee,U,O),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Td(E,U,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(u.state.transmissionRenderTarget===null){u.state.transmissionRenderTarget=new bi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?$a:Jn,minFilter:Si,samples:4,stencilBuffer:a});const Oe=b.get(u.state.transmissionRenderTarget);Oe.__isTransmissionRenderTarget=!0}const fe=u.state.transmissionRenderTarget;v.getDrawingBufferSize(oe),fe.setSize(oe.x,oe.y);const Ee=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(P),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Zn,sa(E,O,F),x.updateMultisampleRenderTarget(fe),x.updateRenderTargetMipmap(fe);let De=!1;for(let Oe=0,He=U.length;Oe<He;Oe++){const Fe=U[Oe],vt=Fe.object,qt=Fe.geometry,bt=Fe.material,Mn=Fe.group;if(bt.side===Ft&&vt.layers.test(F.layers)){const gt=bt.side;bt.side=zt,bt.needsUpdate=!0,oc(vt,O,F,qt,bt,Mn),bt.side=gt,bt.needsUpdate=!0,De=!0}}De===!0&&(x.updateMultisampleRenderTarget(fe),x.updateRenderTargetMipmap(fe)),v.setRenderTarget(Ee),v.setClearColor(P,G),v.toneMapping=Ce}function sa(E,U,O){const F=U.isScene===!0?U.overrideMaterial:null;for(let H=0,fe=E.length;H<fe;H++){const Ee=E[H],Ce=Ee.object,De=Ee.geometry,Oe=F===null?Ee.material:F,He=Ee.group;Ce.layers.test(O.layers)&&oc(Ce,U,O,De,Oe,He)}}function oc(E,U,O,F,H,fe){E.onBeforeRender(v,U,O,F,H,fe),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,U,O,F,E,fe),H.transparent===!0&&H.side===Ft&&H.forceSinglePass===!1?(H.side=zt,H.needsUpdate=!0,v.renderBufferDirect(O,U,F,H,E,fe),H.side=Qn,H.needsUpdate=!0,v.renderBufferDirect(O,U,F,H,E,fe),H.side=Ft):v.renderBufferDirect(O,U,F,H,E,fe),E.onAfterRender(v,U,O,F,H,fe)}function aa(E,U,O){U.isScene!==!0&&(U=Ge);const F=b.get(E),H=u.state.lights,fe=u.state.shadowsArray,Ee=H.state.version,Ce=K.getParameters(E,H.state,fe,U,O),De=K.getProgramCacheKey(Ce);let Oe=F.programs;F.environment=E.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(E.isMeshStandardMaterial?V:k).get(E.envMap||F.environment),F.envMapRotation=F.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",Ae),Oe=new Map,F.programs=Oe);let He=Oe.get(De);if(He!==void 0){if(F.currentProgram===He&&F.lightsStateVersion===Ee)return lc(E,Ce),He}else Ce.uniforms=K.getUniforms(E),E.onBuild(O,Ce,v),E.onBeforeCompile(Ce,v),He=K.acquireProgram(Ce,De),Oe.set(De,He),F.uniforms=Ce.uniforms;const Fe=F.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=_e.uniform),lc(E,Ce),F.needsLights=Cd(E),F.lightsStateVersion=Ee,F.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),F.currentProgram=He,F.uniformsList=null,He}function cc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=za.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function lc(E,U){const O=b.get(E);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Ad(E,U,O,F,H){U.isScene!==!0&&(U=Ge),x.resetTextureUnits();const fe=U.fog,Ee=F.isMeshStandardMaterial?U.environment:null,Ce=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ni,De=(F.isMeshStandardMaterial?V:k).get(F.envMap||Ee),Oe=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,He=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Fe=!!O.morphAttributes.position,vt=!!O.morphAttributes.normal,qt=!!O.morphAttributes.color;let bt=Zn;F.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(bt=v.toneMapping);const Mn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,gt=Mn!==void 0?Mn.length:0,Ve=b.get(F),Mr=u.state.lights;if(X===!0&&(ae===!0||E!==S)){const Jt=E===S&&F.id===D;_e.setState(F,E,Jt)}let dt=!1;F.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Mr.state.version||Ve.outputColorSpace!==Ce||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==De||F.fog===!0&&Ve.fog!==fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==_e.numPlanes||Ve.numIntersection!==_e.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==He||Ve.morphTargets!==Fe||Ve.morphNormals!==vt||Ve.morphColors!==qt||Ve.toneMapping!==bt||Ve.morphTargetsCount!==gt)&&(dt=!0):(dt=!0,Ve.__version=F.version);let ri=Ve.currentProgram;dt===!0&&(ri=aa(F,U,H));let hc=!1,vs=!1,Sr=!1;const It=ri.getUniforms(),On=Ve.uniforms;if(Q.useProgram(ri.program)&&(hc=!0,vs=!0,Sr=!0),F.id!==D&&(D=F.id,vs=!0),hc||S!==E){It.setValue(N,"projectionMatrix",E.projectionMatrix),It.setValue(N,"viewMatrix",E.matrixWorldInverse);const Jt=It.map.cameraPosition;Jt!==void 0&&Jt.setValue(N,Ie.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&It.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&It.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,vs=!0,Sr=!0)}if(H.isSkinnedMesh){It.setOptional(N,H,"bindMatrix"),It.setOptional(N,H,"bindMatrixInverse");const Jt=H.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),It.setValue(N,"boneTexture",Jt.boneTexture,x))}H.isBatchedMesh&&(It.setOptional(N,H,"batchingTexture"),It.setValue(N,"batchingTexture",H._matricesTexture,x));const Er=O.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Me.update(H,O,ri),(vs||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,It.setValue(N,"receiveShadow",H.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(On.envMap.value=De,On.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(On.envMapIntensity.value=U.environmentIntensity),vs&&(It.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Rd(On,Sr),fe&&F.fog===!0&&Se.refreshFogUniforms(On,fe),Se.refreshMaterialUniforms(On,F,j,J,u.state.transmissionRenderTarget),za.upload(N,cc(Ve),On,x)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(za.upload(N,cc(Ve),On,x),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&It.setValue(N,"center",H.center),It.setValue(N,"modelViewMatrix",H.modelViewMatrix),It.setValue(N,"normalMatrix",H.normalMatrix),It.setValue(N,"modelMatrix",H.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Jt=F.uniformsGroups;for(let wr=0,Pd=Jt.length;wr<Pd;wr++){const dc=Jt[wr];lt.update(dc,ri),lt.bind(dc,ri)}}return ri}function Rd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Cd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,O){b.get(E.texture).__webglTexture=U,b.get(E.depthTexture).__webglTexture=O;const F=b.get(E);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const O=b.get(E);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,O=0){T=E,L=U,A=O;let F=!0,H=null,fe=!1,Ee=!1;if(E){const De=b.get(E);De.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(N.FRAMEBUFFER,null),F=!1):De.__webglFramebuffer===void 0?x.setupRenderTarget(E):De.__hasExternalTextures&&x.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const He=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[U])?H=He[U][O]:H=He[U],fe=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?H=b.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[O]:H=He,y.copy(E.viewport),I.copy(E.scissor),z=E.scissorTest}else y.copy(ne).multiplyScalar(j).floor(),I.copy(ve).multiplyScalar(j).floor(),z=Be;if(Q.bindFramebuffer(N.FRAMEBUFFER,H)&&F&&Q.drawBuffers(E,H),Q.viewport(y),Q.scissor(I),Q.setScissorTest(z),fe){const De=b.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,O)}else if(Ee){const De=b.get(E.texture),Oe=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,O||0,Oe)}D=-1},this.readRenderTargetPixels=function(E,U,O,F,H,fe,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Q.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const De=E.texture,Oe=De.format,He=De.type;if(Oe!==mn&&tt.convert(Oe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=He===$a&&(Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float"));if(He!==Jn&&tt.convert(He)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&He!==Un&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-F&&O>=0&&O<=E.height-H&&N.readPixels(U,O,F,H,tt.convert(Oe),tt.convert(He),fe)}finally{const De=T!==null?b.get(T).__webglFramebuffer:null;Q.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(E,U,O=0){const F=Math.pow(2,-O),H=Math.floor(U.image.width*F),fe=Math.floor(U.image.height*F);x.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,E.x,E.y,H,fe),Q.unbindTexture()},this.copyTextureToTexture=function(E,U,O,F=0){const H=U.image.width,fe=U.image.height,Ee=tt.convert(O.format),Ce=tt.convert(O.type);x.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,E.x,E.y,H,fe,Ee,Ce,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Ee,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,F,E.x,E.y,Ee,Ce,U.image),F===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,U,O,F,H=0){const fe=Math.round(E.max.x-E.min.x),Ee=Math.round(E.max.y-E.min.y),Ce=E.max.z-E.min.z+1,De=tt.convert(F.format),Oe=tt.convert(F.type);let He;if(F.isData3DTexture)x.setTexture3D(F,0),He=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)x.setTexture2DArray(F,0),He=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Fe=N.getParameter(N.UNPACK_ROW_LENGTH),vt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),qt=N.getParameter(N.UNPACK_SKIP_PIXELS),bt=N.getParameter(N.UNPACK_SKIP_ROWS),Mn=N.getParameter(N.UNPACK_SKIP_IMAGES),gt=O.isCompressedTexture?O.mipmaps[H]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(He,H,U.x,U.y,U.z,fe,Ee,Ce,De,Oe,gt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(He,H,U.x,U.y,U.z,fe,Ee,Ce,De,gt.data):N.texSubImage3D(He,H,U.x,U.y,U.z,fe,Ee,Ce,De,Oe,gt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Fe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Mn),H===0&&F.generateMipmaps&&N.generateMipmap(He),Q.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,Q.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bo?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===dr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fr{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new fr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zh extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class r3 extends Nt{constructor(e=null,t=1,i=1,s,a,r,o,c,l=Wt,h=Wt,d,f){super(null,r,o,c,l,h,s,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new ct,Nl=new ct,Ra=[],kl=new Pi,o3=new ct,Es=new ee,ws=new na;class er extends ee{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,o3)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),kl.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new na),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),ws.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(i),e.ray.intersectsSphere(ws)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,$i),Nl.multiplyMatrices(i,$i),Es.matrixWorld=Nl,Es.raycast(e,Ra);for(let r=0,o=Ra.length;r<o;r++){const c=Ra[r];c.instanceId=a,c.object=this,t.push(c)}Ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new r3(new Float32Array(s*this.count),s,this.count,Sh,Un));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;a[c]=o,a.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xo extends Nt{constructor(e,t,i,s,a,r,o,c,l){super(e,t,i,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const a=i.length;let r;t?r=t:r=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(a-1);const h=i[s],f=i[s+1]-h,p=(r-h)/f;return(s+p)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new te:new C);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,s=[],a=[],r=[],o=new C,c=new ct;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new C)}a[0]=new C,r[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mt(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(t===!0){let p=Math.acos(Mt(a[0].dot(a[e]),-1,1));p/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qo extends yn{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new te){const i=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c3 extends qo{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Yo(){let n=0,e=0,t=0,i=0;function s(a,r,o,c){n=a,e=o,t=-3*a+3*r-2*o-c,i=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,d){let f=(r-a)/l-(o-a)/(l+h)+(o-r)/h,p=(o-r)/h-(c-r)/(h+d)+(c-o)/d;f*=h,p*=h,s(r,o,f,p)},calc:function(a){const r=a*a,o=r*a;return n+e*a+t*r+i*o}}}const Ca=new C,no=new Yo,io=new Yo,so=new Yo;class Jh extends yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){const i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%a]:(Ca.subVectors(s[0],s[1]).add(s[0]),l=Ca);const d=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Ca.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),u=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),u<1e-4&&(u=_),no.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,_,u),io.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,_,u),so.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,_,u)}else this.curveType==="catmullrom"&&(no.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),io.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),so.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return i.set(no.calc(c),io.calc(c),so.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hl(n,e,t,i,s){const a=(i-e)*.5,r=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+r)*c+(-3*t+3*i-2*a-r)*o+a*n+t}function l3(n,e){const t=1-n;return t*t*e}function h3(n,e){return 2*(1-n)*n*e}function d3(n,e){return n*n*e}function Hs(n,e,t,i){return l3(n,e)+h3(n,t)+d3(n,i)}function u3(n,e){const t=1-n;return t*t*t*e}function f3(n,e){const t=1-n;return 3*t*t*n*e}function p3(n,e){return 3*(1-n)*n*n*e}function m3(n,e){return n*n*n*e}function Os(n,e,t,i,s){return u3(n,e)+f3(n,t)+p3(n,i)+m3(n,s)}class Kh extends yn{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){const i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Os(e,s.x,a.x,r.x,o.x),Os(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g3 extends yn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){const i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Os(e,s.x,a.x,r.x,o.x),Os(e,s.y,a.y,r.y,o.y),Os(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jh extends yn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _3 extends yn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends yn{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){const i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Hs(e,s.x,a.x,r.x),Hs(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends yn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Hs(e,s.x,a.x,r.x),Hs(e,s.y,a.y,r.y),Hs(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(Hl(o,c.x,l.x,h.x,d.x),Hl(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new te().fromArray(s))}return this}}var tr=Object.freeze({__proto__:null,ArcCurve:c3,CatmullRomCurve3:Jh,CubicBezierCurve:Kh,CubicBezierCurve3:g3,EllipseCurve:qo,LineCurve:jh,LineCurve3:_3,QuadraticBezierCurve:Qh,QuadraticBezierCurve3:ed,SplineCurve:td});class v3 extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tr[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const r=s[a]-i,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new tr[s.type]().fromJSON(s))}return this}}class wo extends v3{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new jh(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const a=new Qh(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){const o=new Kh(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new td(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,a,r,o,c),this}absellipse(e,t,i,s,a,r,o,c){const l=new qo(e,t,i,s,a,r,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $o extends wt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Mt(s,0,Math.PI*2);const a=[],r=[],o=[],c=[],l=[],h=1/t,d=new C,f=new te,p=new C,g=new C,_=new C;let u=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:u=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-u,p.z=m*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:u=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-u,p.z=m*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=t;M++){const v=i+M*h*s,w=Math.sin(v),L=Math.cos(v);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*w,d.y=e[A].y,d.z=e[A].x*L,r.push(d.x,d.y,d.z),f.x=M/t,f.y=A/(e.length-1),o.push(f.x,f.y);const T=c[3*A+0]*w,D=c[3*A+1],S=c[3*A+0]*L;l.push(T,D,S)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){const w=v+M*e.length,L=w,A=w+e.length,T=w+e.length+1,D=w+1;a.push(L,A,D),a.push(T,D,A)}this.setIndex(a),this.setAttribute("position",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.points,e.segments,e.phiStart,e.phiLength)}}class Fs extends $o{constructor(e=1,t=1,i=4,s=8){const a=new wo;a.absarc(0,-t/2,e,Math.PI*1.5,0),a.absarc(0,t/2,e,0,Math.PI*.5),super(a.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new Fs(e.radius,e.length,e.capSegments,e.radialSegments)}}class nr extends wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new C,h=new te;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=i+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qe extends wt{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],f=[],p=[];let g=0;const _=[],u=i/2;let m=0;M(),r===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(p,2));function M(){const w=new C,L=new C;let A=0;const T=(t-e)/i;for(let D=0;D<=a;D++){const S=[],y=D/a,I=y*(t-e)+e;for(let z=0;z<=s;z++){const P=z/s,G=P*c+o,W=Math.sin(G),J=Math.cos(G);L.x=I*W,L.y=-y*i+u,L.z=I*J,d.push(L.x,L.y,L.z),w.set(W,T,J).normalize(),f.push(w.x,w.y,w.z),p.push(P,1-y),S.push(g++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<a;S++){const y=_[S][D],I=_[S+1][D],z=_[S+1][D+1],P=_[S][D+1];h.push(y,I,P),h.push(I,z,P),A+=6}l.addGroup(m,A,0),m+=A}function v(w){const L=g,A=new te,T=new C;let D=0;const S=w===!0?e:t,y=w===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,u*y,0),f.push(0,y,0),p.push(.5,.5),g++;const I=g;for(let z=0;z<=s;z++){const G=z/s*c+o,W=Math.cos(G),J=Math.sin(G);T.x=S*J,T.y=u*y,T.z=S*W,d.push(T.x,T.y,T.z),f.push(0,y,0),A.x=W*.5+.5,A.y=J*.5*y+.5,p.push(A.x,A.y),g++}for(let z=0;z<s;z++){const P=L+z,G=I+z;w===!0?h.push(G,G+1,P):h.push(G+1,G,P),D+=3}l.addGroup(m,D,w===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends Qe{constructor(e=1,t=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ei(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends wo{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new wo().fromJSON(s))}return this}}const x3={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let a=nd(n,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l,h,d,f,p;if(i&&(a=w3(n,e,a,t)),n.length>80*t){o=l=n[0],c=h=n[1];for(let g=t;g<s;g+=t)d=n[g],f=n[g+1],d<o&&(o=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return $s(a,r,t,o,c,p,0),r}};function nd(n,e,t,i,s){let a,r;if(s===N3(n,e,t,i)>0)for(a=e;a<t;a+=i)r=Ol(a,n[a],n[a+1],r);else for(a=t-i;a>=e;a-=i)r=Ol(a,n[a],n[a+1],r);return r&&pr(r,r.next)&&(Js(r),r=r.next),r}function Ti(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(pr(t,t.next)||_t(t.prev,t,t.next)===0)){if(Js(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $s(n,e,t,i,s,a,r){if(!n)return;!r&&a&&C3(n,i,s,a);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,a?M3(n,i,s,a):y3(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Js(n),n=l.next,o=l.next;continue}if(n=l,n===o){r?r===1?(n=S3(Ti(n),e,t),$s(n,e,t,i,s,a,2)):r===2&&E3(n,e,t,i,s,a):$s(Ti(n),e,t,i,s,a,1);break}}}function y3(n){const e=n.prev,t=n,i=n.next;if(_t(e,t,i)>=0)return!1;const s=e.x,a=t.x,r=i.x,o=e.y,c=t.y,l=i.y,h=s<a?s<r?s:r:a<r?a:r,d=o<c?o<l?o:l:c<l?c:l,f=s>a?s>r?s:r:a>r?a:r,p=o>c?o>l?o:l:c>l?c:l;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=p&&ns(s,o,a,c,r,l,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function M3(n,e,t,i){const s=n.prev,a=n,r=n.next;if(_t(s,a,r)>=0)return!1;const o=s.x,c=a.x,l=r.x,h=s.y,d=a.y,f=r.y,p=o<c?o<l?o:l:c<l?c:l,g=h<d?h<f?h:f:d<f?d:f,_=o>c?o>l?o:l:c>l?c:l,u=h>d?h>f?h:f:d>f?d:f,m=bo(p,g,e,t,i),M=bo(_,u,e,t,i);let v=n.prevZ,w=n.nextZ;for(;v&&v.z>=m&&w&&w.z<=M;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=u&&v!==s&&v!==r&&ns(o,h,c,d,l,f,v.x,v.y)&&_t(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=p&&w.x<=_&&w.y>=g&&w.y<=u&&w!==s&&w!==r&&ns(o,h,c,d,l,f,w.x,w.y)&&_t(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=u&&v!==s&&v!==r&&ns(o,h,c,d,l,f,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=M;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=u&&w!==s&&w!==r&&ns(o,h,c,d,l,f,w.x,w.y)&&_t(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function S3(n,e,t){let i=n;do{const s=i.prev,a=i.next.next;!pr(s,a)&&id(s,i,i.next,a)&&Zs(s,a)&&Zs(a,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Js(i),Js(i.next),i=n=a),i=i.next}while(i!==n);return Ti(i)}function E3(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&I3(r,o)){let c=sd(r,o);r=Ti(r,r.next),c=Ti(c,c.next),$s(r,e,t,i,s,a,0),$s(c,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function w3(n,e,t,i){const s=[];let a,r,o,c,l;for(a=0,r=e.length;a<r;a++)o=e[a]*i,c=a<r-1?e[a+1]*i:n.length,l=nd(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(L3(l));for(s.sort(b3),a=0;a<s.length;a++)t=T3(s[a],t);return t}function b3(n,e){return n.x-e.x}function T3(n,e){const t=A3(n,e);if(!t)return e;const i=sd(t,n);return Ti(i,i.next),Ti(t,t.next)}function A3(n,e){let t=e,i=-1/0,s;const a=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=a&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===a))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,d;t=s;do a>=t.x&&t.x>=c&&a!==t.x&&ns(r<l?a:i,r,c,l,r<l?i:a,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(a-t.x),Zs(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&R3(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function R3(n,e){return _t(n.prev,n,e.prev)<0&&_t(e.next,n,n.next)<0}function C3(n,e,t,i){let s=n;do s.z===0&&(s.z=bo(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,P3(s)}function P3(n){let e,t,i,s,a,r,o,c,l=1;do{for(t=n,n=null,a=null,r=0;t;){for(r++,i=t,o=0,e=0;e<l&&(o++,i=i.nextZ,!!i);e++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;t=i}a.nextZ=null,l*=2}while(r>1);return n}function bo(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function L3(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ns(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function I3(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!D3(n,e)&&(Zs(n,e)&&Zs(e,n)&&U3(n,e)&&(_t(n.prev,n,e.prev)||_t(n,e.prev,e))||pr(n,e)&&_t(n.prev,n,n.next)>0&&_t(e.prev,e,e.next)>0)}function _t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function pr(n,e){return n.x===e.x&&n.y===e.y}function id(n,e,t,i){const s=La(_t(n,e,t)),a=La(_t(n,e,i)),r=La(_t(t,i,n)),o=La(_t(t,i,e));return!!(s!==a&&r!==o||s===0&&Pa(n,t,e)||a===0&&Pa(n,i,e)||r===0&&Pa(t,n,i)||o===0&&Pa(t,e,i))}function Pa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function La(n){return n>0?1:n<0?-1:0}function D3(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&id(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zs(n,e){return _t(n.prev,n,n.next)<0?_t(n,e,n.next)>=0&&_t(n,n.prev,e)>=0:_t(n,e,n.prev)<0||_t(n,n.next,e)<0}function U3(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function sd(n,e){const t=new To(n.i,n.x,n.y),i=new To(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Ol(n,e,t,i){const s=new To(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function To(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function N3(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}class Kn{static area(e){const t=e.length;let i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return Kn.area(e)<0}static triangulateShape(e,t){const i=[],s=[],a=[];Fl(e),zl(i,e);let r=e.length;t.forEach(Fl);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,zl(i,t[c]);const o=x3.triangulate(i,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function Fl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class mr extends wt{constructor(e=new ds([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];r(l)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(a,2)),this.computeVertexNormals();function r(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,u=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:k3;let v,w=!1,L,A,T,D;m&&(v=m.getSpacedPoints(h),w=!0,f=!1,L=m.computeFrenetFrames(h,!1),A=new C,T=new C,D=new C),f||(u=0,p=0,g=0,_=0);const S=o.extractPoints(l);let y=S.shape;const I=S.holes;if(!Kn.isClockWise(y)){y=y.reverse();for(let $=0,Y=I.length;$<Y;$++){const re=I[$];Kn.isClockWise(re)&&(I[$]=re.reverse())}}const P=Kn.triangulateShape(y,I),G=y;for(let $=0,Y=I.length;$<Y;$++){const re=I[$];y=y.concat(re)}function W($,Y,re){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(Y,re)}const J=y.length,j=P.length;function B($,Y,re){let Q,se,b;const x=$.x-Y.x,k=$.y-Y.y,V=re.x-$.x,q=re.y-$.y,Z=x*x+k*k,Te=x*q-k*V;if(Math.abs(Te)>Number.EPSILON){const K=Math.sqrt(Z),Se=Math.sqrt(V*V+q*q),Re=Y.x-k/K,ce=Y.y+x/K,_e=re.x-q/Se,Ne=re.y+V/Se,ye=((_e-Re)*q-(Ne-ce)*V)/(x*q-k*V);Q=Re+x*ye-$.x,se=ce+k*ye-$.y;const Me=Q*Q+se*se;if(Me<=2)return new te(Q,se);b=Math.sqrt(Me/2)}else{let K=!1;x>Number.EPSILON?V>Number.EPSILON&&(K=!0):x<-Number.EPSILON?V<-Number.EPSILON&&(K=!0):Math.sign(k)===Math.sign(q)&&(K=!0),K?(Q=-k,se=x,b=Math.sqrt(Z)):(Q=x,se=k,b=Math.sqrt(Z/2))}return new te(Q/b,se/b)}const ie=[];for(let $=0,Y=G.length,re=Y-1,Q=$+1;$<Y;$++,re++,Q++)re===Y&&(re=0),Q===Y&&(Q=0),ie[$]=B(G[$],G[re],G[Q]);const ne=[];let ve,Be=ie.concat();for(let $=0,Y=I.length;$<Y;$++){const re=I[$];ve=[];for(let Q=0,se=re.length,b=se-1,x=Q+1;Q<se;Q++,b++,x++)b===se&&(b=0),x===se&&(x=0),ve[Q]=B(re[Q],re[b],re[x]);ne.push(ve),Be=Be.concat(ve)}for(let $=0;$<u;$++){const Y=$/u,re=p*Math.cos(Y*Math.PI/2),Q=g*Math.sin(Y*Math.PI/2)+_;for(let se=0,b=G.length;se<b;se++){const x=W(G[se],ie[se],Q);oe(x.x,x.y,-re)}for(let se=0,b=I.length;se<b;se++){const x=I[se];ve=ne[se];for(let k=0,V=x.length;k<V;k++){const q=W(x[k],ve[k],Q);oe(q.x,q.y,-re)}}}const et=g+_;for(let $=0;$<J;$++){const Y=f?W(y[$],Be[$],et):y[$];w?(T.copy(L.normals[0]).multiplyScalar(Y.x),A.copy(L.binormals[0]).multiplyScalar(Y.y),D.copy(v[0]).add(T).add(A),oe(D.x,D.y,D.z)):oe(Y.x,Y.y,0)}for(let $=1;$<=h;$++)for(let Y=0;Y<J;Y++){const re=f?W(y[Y],Be[Y],et):y[Y];w?(T.copy(L.normals[$]).multiplyScalar(re.x),A.copy(L.binormals[$]).multiplyScalar(re.y),D.copy(v[$]).add(T).add(A),oe(D.x,D.y,D.z)):oe(re.x,re.y,d/h*$)}for(let $=u-1;$>=0;$--){const Y=$/u,re=p*Math.cos(Y*Math.PI/2),Q=g*Math.sin(Y*Math.PI/2)+_;for(let se=0,b=G.length;se<b;se++){const x=W(G[se],ie[se],Q);oe(x.x,x.y,d+re)}for(let se=0,b=I.length;se<b;se++){const x=I[se];ve=ne[se];for(let k=0,V=x.length;k<V;k++){const q=W(x[k],ve[k],Q);w?oe(q.x,q.y+v[h-1].y,v[h-1].x+re):oe(q.x,q.y,d+re)}}}X(),ae();function X(){const $=s.length/3;if(f){let Y=0,re=J*Y;for(let Q=0;Q<j;Q++){const se=P[Q];Ie(se[2]+re,se[1]+re,se[0]+re)}Y=h+u*2,re=J*Y;for(let Q=0;Q<j;Q++){const se=P[Q];Ie(se[0]+re,se[1]+re,se[2]+re)}}else{for(let Y=0;Y<j;Y++){const re=P[Y];Ie(re[2],re[1],re[0])}for(let Y=0;Y<j;Y++){const re=P[Y];Ie(re[0]+J*h,re[1]+J*h,re[2]+J*h)}}i.addGroup($,s.length/3-$,0)}function ae(){const $=s.length/3;let Y=0;xe(G,Y),Y+=G.length;for(let re=0,Q=I.length;re<Q;re++){const se=I[re];xe(se,Y),Y+=se.length}i.addGroup($,s.length/3-$,1)}function xe($,Y){let re=$.length;for(;--re>=0;){const Q=re;let se=re-1;se<0&&(se=$.length-1);for(let b=0,x=h+u*2;b<x;b++){const k=J*b,V=J*(b+1),q=Y+Q+k,Z=Y+se+k,Te=Y+se+V,K=Y+Q+V;Ge(q,Z,Te,K)}}}function oe($,Y,re){c.push($),c.push(Y),c.push(re)}function Ie($,Y,re){ke($),ke(Y),ke(re);const Q=s.length/3,se=M.generateTopUV(i,s,Q-3,Q-2,Q-1);N(se[0]),N(se[1]),N(se[2])}function Ge($,Y,re,Q){ke($),ke(Y),ke(Q),ke(Y),ke(re),ke(Q);const se=s.length/3,b=M.generateSideWallUV(i,s,se-6,se-3,se-2,se-1);N(b[0]),N(b[1]),N(b[3]),N(b[1]),N(b[2]),N(b[3])}function ke($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function N($){a.push($.x),a.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return H3(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,r=e.shapes.length;a<r;a++){const o=t[e.shapes[a]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tr[s.type]().fromJSON(s)),new mr(i,e.options)}}const k3={generateTopUV:function(n,e,t,i,s){const a=e[t*3],r=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new te(a,r),new te(o,c),new te(l,h)]},generateSideWallUV:function(n,e,t,i,s,a){const r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],d=e[i*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[a*3],u=e[a*3+1],m=e[a*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new te(r,1-c),new te(l,1-d),new te(f,1-g),new te(_,1-m)]:[new te(o,1-c),new te(h,1-d),new te(p,1-g),new te(u,1-m)]}};function H3(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ir extends wt{constructor(e=new ds([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],a=[],r=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(r,2));function l(h){const d=s.length/3,f=h.extractPoints(t);let p=f.shape;const g=f.holes;Kn.isClockWise(p)===!1&&(p=p.reverse());for(let u=0,m=g.length;u<m;u++){const M=g[u];Kn.isClockWise(M)===!0&&(g[u]=M.reverse())}const _=Kn.triangulateShape(p,g);for(let u=0,m=g.length;u<m;u++){const M=g[u];p=p.concat(M)}for(let u=0,m=p.length;u<m;u++){const M=p[u];s.push(M.x,M.y,0),a.push(0,0,1),r.push(M.x,M.y)}for(let u=0,m=_.length;u<m;u++){const M=_[u],v=M[0]+d,w=M[1]+d,L=M[2]+d;i.push(v,w,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return O3(t,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const r=t[e.shapes[s]];i.push(r)}return new ir(i,e.curveSegments)}}function O3(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Gt extends wt{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(r+o,Math.PI);let l=0;const h=[],d=new C,f=new C,p=[],g=[],_=[],u=[];for(let m=0;m<=i;m++){const M=[],v=m/i;let w=0;m===0&&r===0?w=.5/t:m===i&&c===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(s+A*a)*Math.sin(r+v*o),d.y=e*Math.cos(r+v*o),d.z=e*Math.sin(s+A*a)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),u.push(A+w,1-v),M.push(l++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const v=h[m][M+1],w=h[m][M],L=h[m+1][M],A=h[m+1][M+1];(m!==0||r>0)&&p.push(v,w,A),(m!==i-1||c<Math.PI)&&p.push(w,L,A)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ii extends wt{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const r=[],o=[],c=[],l=[],h=new C,d=new C,f=new C;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*a,u=p/i*Math.PI*2;d.x=(e+t*Math.cos(u))*Math.cos(_),d.y=(e+t*Math.cos(u))*Math.sin(_),d.z=t*Math.sin(u),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,u=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,M=(s+1)*p+g;r.push(_,u,M),r.push(u,m,M)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zo extends wt{constructor(e=new ed(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:a};const r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new C,c=new C,l=new te;let h=new C;const d=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(p,2));function _(){for(let v=0;v<t;v++)u(v);u(a===!1?t:0),M(),m()}function u(v){h=e.getPointAt(v/t,h);const w=r.normals[v],L=r.binormals[v];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,D=Math.sin(T),S=-Math.cos(T);c.x=S*w.x+D*L.x,c.y=S*w.y+D*L.y,c.z=S*w.z+D*L.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=t;v++)for(let w=1;w<=s;w++){const L=(s+1)*(v-1)+(w-1),A=(s+1)*v+(w-1),T=(s+1)*v+w,D=(s+1)*(v-1)+w;g.push(L,A,D),g.push(A,T,D)}}function M(){for(let v=0;v<=t;v++)for(let w=0;w<=s;w++)l.x=v/t,l.y=w/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zo(new tr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ge extends ia{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bl extends ge{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ad extends je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class F3 extends ad{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ao=new ct,Gl=new C,Vl=new C;class z3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B3 extends z3{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G3 extends ad{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new B3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);class gr extends ee{constructor(){const e=gr.SkyShader,t=new kn({name:e.name,uniforms:Oh.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:zt,depthWrite:!1});super(new Ue(1,1,1),t),this.isSky=!0}}gr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},up:{value:new C(0,1,0)}},vertexShader:`
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

		}`};const rd={value:0};let bs;function Ao(){return bs||(bs=new ge({color:1734272,metalness:.15,roughness:.3,envMapIntensity:.75}),bs.onBeforeCompile=n=>{n.uniforms.coastTime=rd,n.vertexShader=`varying vec3 coastPosition;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 coastPosition = (modelMatrix * vec4(position,1.0)).xyz;`),n.fragmentShader=`uniform float coastTime;
varying vec3 coastPosition;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
      float drift=sin(coastPosition.x*.63+coastPosition.z*.39+coastTime*.3);
      float waveA=cos(coastPosition.x*2.8+coastPosition.z*1.1+drift+coastTime*.9);
      float waveB=sin(coastPosition.z*4.5-coastPosition.x*.7+drift-coastTime*1.4);
      vec3 waveNormal=normalize(vec3(waveA*.032,1.,waveB*.024));
      normal=normalize(mat3(viewMatrix)*waveNormal);
    `)},bs)}function W3(n){rd.value=n}function X3(n,e){const t=new gr;t.scale.setScalar(450),t.material.uniforms.turbidity.value=3.4,t.material.uniforms.rayleigh.value=1.3,t.material.uniforms.mieCoefficient.value=.004,t.material.uniforms.mieDirectionalG.value=.82,t.material.uniforms.sunPosition.value.set(-.55,.48,-.68);const i=new Zh;i.add(t);const s=new So(e),a=s.fromScene(i,.025,.1,1e3);n.environment=a.texture,n.environmentIntensity=.55,n.userData.environmentTarget=a,s.dispose(),n.add(t),n.background=null,n.fog=new fr(13096662,32,180);const r=new ee(new vn(650,650),new ge({color:12037778,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,-.24,-150),r.receiveShadow=!0,n.add(r),n.add(new F3(14282239,10653040,1.15));const o=new G3(16770237,3.1);o.position.set(-32,48,-4),o.target.position.set(0,0,-38),o.castShadow=!0;const c=window.matchMedia("(pointer: coarse)").matches;o.shadow.mapSize.setScalar(c?1024:2048),Object.assign(o.shadow.camera,{near:1,far:130,left:-30,right:30,top:48,bottom:-48}),o.shadow.normalBias=.035,o.shadow.bias=-12e-5,o.shadow.radius=2,n.add(o,o.target)}function od(n,e,t){n.cancelScheduledValues(e),t?n.setTargetAtTime(1,e,.04):n.setValueAtTime(0,e)}class q3{constructor(){$e(this,"pending",new WeakMap)}resume(e,t){if(!t||e.state==="closed")return Promise.resolve(!1);if(e.state==="running")return Promise.resolve(!0);const i=this.pending.get(e);if(i)return i;let s;const a=Promise.race([e.resume().then(()=>e.state==="running",()=>!1),new Promise(r=>{s=setTimeout(()=>r(!1),1500)})]);return this.pending.set(e,a),a.finally(()=>{clearTimeout(s),this.pending.get(e)===a&&this.pending.delete(e)}),a}}class Y3{constructor(e){$e(this,"element");$e(this,"source");$e(this,"gain");$e(this,"pending",null);$e(this,"wanted",!1);this.context=e,this.element=new Audio(new URL("audio/carefree.mp3",document.baseURI).href),this.element.loop=!0,this.element.preload="none",this.element.setAttribute("playsinline",""),this.source=e.createMediaElementSource(this.element),this.gain=e.createGain(),this.gain.gain.value=0,this.source.connect(this.gain).connect(e.destination)}sync(e){if(this.wanted=e,this.gain.gain.cancelScheduledValues(this.context.currentTime),this.gain.gain.setValueAtTime(e?.16:0,this.context.currentTime),!e){this.element.pause();return}!this.element.paused||this.pending||(this.pending=this.element.play().catch(()=>{}).finally(()=>{this.pending=null,this.wanted||this.element.pause()}))}dispose(){this.wanted=!1,this.element.pause(),this.element.removeAttribute("src"),this.element.load(),this.source.disconnect(),this.gain.disconnect()}}const Ks=1800,Ro="vespa_best_lap_seconds";class cd{constructor(e=Ks){$e(this,"distance",0);$e(this,"elapsed",0);this.length=e}get finished(){return this.distance>=this.length}reset(){this.distance=0,this.elapsed=0}advance(e,t,i=e){if(this.finished||e<=0)return 0;const s=t>0?Math.min(e,(this.length-this.distance)/t):e;return this.distance=Math.min(this.length,this.distance+Math.max(0,t)*s),this.elapsed+=Math.max(0,i)*s/e,s}}function Co(n){if(n==null||!Number.isFinite(n)||n<0)return"—";const e=Math.floor(n*100);return`${Math.floor(e/6e3)}:${String(Math.floor(e/100)%60).padStart(2,"0")}.${String(e%100).padStart(2,"0")}`}function $3(n){const e=Number(n);return Number.isFinite(e)&&e>0?e:null}const Z3=2003.4,J3={coordinates:[[11.257831,43.772579],[11.257836,43.77255],[11.257837,43.772537],[11.257857,43.772346],[11.257868,43.772255],[11.257875,43.772165],[11.257889,43.771976],[11.257904,43.771775],[11.257923,43.771517],[11.257927,43.771494],[11.257928,43.771391],[11.257926,43.771217],[11.257896,43.770935],[11.257894,43.770914],[11.257893,43.770907],[11.257891,43.770891],[11.257846,43.770619],[11.257915,43.770614],[11.258511,43.770572],[11.258656,43.770562],[11.258713,43.770558],[11.258762,43.770554],[11.259929,43.770463],[11.26026,43.770436],[11.260544,43.770411],[11.260602,43.770406],[11.261448,43.770256],[11.261545,43.77024],[11.261631,43.770221],[11.262035,43.770139],[11.262076,43.77013],[11.262519,43.770031],[11.262754,43.769979],[11.263613,43.7698],[11.263723,43.769775],[11.263816,43.769755],[11.264278,43.769658],[11.264298,43.769654],[11.265431,43.769426],[11.26549,43.769413],[11.265926,43.769327],[11.267922,43.768918],[11.268156,43.768872],[11.268285,43.768846],[11.268324,43.768838],[11.2695,43.768608],[11.269533,43.768602],[11.269661,43.768574],[11.269531,43.768348],[11.269513,43.768319],[11.269341,43.768033],[11.269142,43.767688],[11.268889,43.767271],[11.268691,43.766955],[11.268568,43.766773],[11.268219,43.766414],[11.26813,43.766328],[11.268111,43.766298],[11.268098,43.766269],[11.268091,43.766242],[11.268097,43.766209],[11.268106,43.766184],[11.268128,43.766159],[11.268141,43.76615],[11.268163,43.766141],[11.268191,43.766131],[11.268588,43.766086],[11.268792,43.766074],[11.269042,43.76605],[11.269363,43.766021],[11.270579,43.765944],[11.270598,43.765943],[11.270688,43.765939],[11.271231,43.765908],[11.271338,43.765905],[11.271468,43.765899],[11.271814,43.765869],[11.274156,43.765737],[11.274232,43.765732],[11.274365,43.765724]]},K3=[{name:"Via del Proconsolo",distanceMeters:218.4},{name:"Via Ghibellina",distanceMeters:980.4},{name:"Viale della Giovine Italia",distanceMeters:196.1},{name:"Piazza Piave",distanceMeters:109.2},{name:"Lungarno Guglielmo Pecori Giraldi",distanceMeters:254.7},{name:"Lungarno del Tempio",distanceMeters:244.6}],j3=[{id:41,name:"Ghibellina–Verdi",coordinates:[11.26152109,43.77023235],approximateDistanceMeters:517},{id:218,name:"Pecori Giraldi–Giovine Italia",coordinates:[11.26856838,43.76620768],approximateDistanceMeters:1528},{id:217,name:"Pecori Giraldi–Amendola",coordinates:[11.27133575,43.76589819],approximateDistanceMeters:1756}],_r={distanceMeters:Z3,geometry:J3,streets:K3,trafficSignals:j3},Q3=[{id:"42919426",name:"",points:[[966.2,-483.2],[1035.7,-494.5],[1039.3,-472.3],[966.4,-460.6],[959.1,-478.1],[966.7,-479.2],[966.2,-483.2]],height:14,estimatedHeight:!0,at:1225,kind:"yes"},{id:"43768260",name:"Cattedrale di Santa Maria del Fiore",points:[[-178,85.5],[-179,41.3],[-98.9,39.4],[-98.2,38.2],[-94,34.1],[-90,34.1],[-90.6,23.2],[-79.4,11.7],[-63.9,11.2],[-53.8,22],[-53.8,32.7],[-50.4,32.7],[-45.1,36.7],[-45,41.6],[-34.9,41.2],[-23.6,51.4],[-22.9,66.8],[-33.1,77.8],[-44.3,78.2],[-44.5,83.5],[-48.3,87.3],[-51.9,87.4],[-51.6,97.1],[-61.8,108.1],[-77.6,108.4],[-87.8,98.6],[-88.3,88.9],[-92.6,89.1],[-96.7,86.1],[-97.9,83.6],[-178,85.5]],height:25,estimatedHeight:!1,at:0,kind:"cathedral"},{id:"72905106",name:"Torre della Zecca",points:[[844.2,-684.4],[843.1,-694.3],[852,-695.2],[853,-685.4],[844.2,-684.4]],height:14,estimatedHeight:!0,at:1460,kind:"yes"},{id:"73028002",name:"Archivio di Stato di Firenze",points:[[1047.4,-336],[1051,-405.8],[1048.8,-420.7],[1051,-421],[1048.4,-436.5],[1045.6,-437.9],[1040.2,-437.4],[1039.3,-441.3],[1034.1,-440.7],[1033.4,-445],[1010.2,-441.4],[1012,-428.3],[1007,-427.5],[1004.6,-440.7],[1002.9,-443.7],[985.2,-432.9],[986.6,-424.6],[988.2,-424.7],[991.4,-405.7],[993,-405.9],[996.1,-385.8],[1018.5,-333],[1024.1,-332.7],[1031.5,-333.3],[1047.4,-336]],height:14,estimatedHeight:!0,at:1199,kind:"yes"},{id:"114220146",name:"Palazzo dei Canonici",points:[[-85.6,-10.9],[-90.9,-12],[-95.7,-12.2],[-99.5,-11],[-99.1,-7.4],[-107,-7.5],[-107.1,-10.1],[-122,-9],[-120.6,1.6],[-85.8,.8],[-85.6,-10.9]],height:13.2,estimatedHeight:!1,at:0,kind:"yes"},{id:"114369699",name:"",points:[[-45.2,-29.1],[-39.5,-29],[-39.5,-28],[-32.6,-28.3],[-35.2,-44],[-46.8,-40.7],[-45.2,-29.1]],height:13.2,estimatedHeight:!1,at:26,kind:"yes"},{id:"114369700",name:"",points:[[-35.8,-.3],[-2.8,-2.9],[-1.3,-24.9],[-22.7,-23],[-22.7,-13.7],[-35.5,-13.2],[-35.8,-.3]],height:9.899999999999999,estimatedHeight:!1,at:3,kind:"apartments"},{id:"114639704",name:"",points:[[204.3,-235.9],[197.6,-234.9],[200.7,-228.4],[206.5,-231.7],[204.3,-235.9]],height:14,estimatedHeight:!0,at:423,kind:"apartments"},{id:"114689027",name:"",points:[[91.7,-319.7],[77.8,-318],[79.1,-307.5],[80.3,-307.6],[82.2,-291.4],[98.1,-293.3],[96.3,-305.1],[91,-304.2],[90.6,-308],[93.1,-308.8],[91.7,-319.7]],height:14,estimatedHeight:!0,at:307,kind:"yes"},{id:"114689045",name:"",points:[[81.9,-277],[81.6,-267.7],[90.5,-267.1],[90.9,-278],[86.7,-277.8],[81.8,-278],[81.9,-277]],height:14,estimatedHeight:!0,at:313,kind:"yes"},{id:"115065314",name:"",points:[[862.5,-280.7],[902.2,-290.6],[890.8,-334.7],[883.6,-332.9],[881,-344],[848.9,-336.1],[862.5,-280.7]],height:4.5,estimatedHeight:!1,at:1072,kind:"commercial"},{id:"115065316",name:"",points:[[744.9,-315.9],[735.5,-313.9],[749.7,-279.8],[753.7,-281.1],[744.9,-315.9]],height:14,estimatedHeight:!0,at:956,kind:"apartments"},{id:"115065318",name:"",points:[[674.7,-259.1],[672.8,-264.7],[669.5,-263.8],[668.5,-266.7],[664.7,-265.4],[665.5,-263.2],[663.7,-262.8],[664.3,-261.3],[649.1,-256.9],[651.4,-250.4],[674.7,-259.1]],height:13.2,estimatedHeight:!1,at:880,kind:"apartments"},{id:"115065320",name:"",points:[[905.6,-343.4],[925.3,-296.6],[957.4,-311.4],[954.9,-317.3],[982.5,-329],[967.5,-364.8],[938.1,-357.5],[936.7,-363.3],[906,-355.3],[907,-350.9],[909.4,-351.6],[911.8,-349.9],[922.6,-352.9],[923.8,-351.8],[935.1,-324.3],[940.3,-326.8],[944.2,-318.7],[932.3,-312.8],[933.2,-310.3],[925,-306.8],[922.5,-312.7],[924.4,-314],[913,-346],[905.6,-343.4]],height:14,estimatedHeight:!0,at:1133,kind:"yes"},{id:"115661856",name:"Ufficio Tecnico Erariale",points:[[357.3,-171.6],[371.2,-174.9],[362.3,-189.9],[375.1,-196.3],[381.7,-181.5],[396.1,-187.2],[407.7,-190.6],[410,-191],[410.8,-187.1],[423.5,-189.6],[417.3,-224],[401.1,-220.5],[383.7,-215],[374.6,-211.2],[366,-207.3],[358.5,-203.3],[344,-194.5],[357.3,-171.6]],height:9.899999999999999,estimatedHeight:!1,at:607,kind:"government"},{id:"115661884",name:"Casa del boia",points:[[456.8,-327.3],[464.1,-311.7],[478,-316],[470.3,-332.6],[456.8,-327.3]],height:14,estimatedHeight:!0,at:709,kind:"apartments"},{id:"115661885",name:"",points:[[315.8,-260.9],[304.6,-257.5],[311.5,-246.2],[321,-252.9],[315.8,-260.9]],height:16.5,estimatedHeight:!1,at:537,kind:"apartments"},{id:"115661901",name:"",points:[[366,-363.6],[351.5,-357.6],[354.7,-349.1],[338.1,-343.1],[342.6,-331.6],[347.5,-333.4],[346.8,-335],[359.3,-339.7],[372.7,-346.6],[366,-363.6]],height:14,estimatedHeight:!0,at:584,kind:"yes"},{id:"115821787",name:"",points:[[684.3,-462.9],[675.5,-452.7],[672.4,-455],[669.1,-451.2],[664.2,-459],[677.5,-465.8],[684.3,-462.9]],height:14,estimatedHeight:!0,at:936,kind:"apartments"},{id:"115891393",name:"",points:[[989.1,-516.2],[1012.1,-520.2],[1007.9,-544.1],[1003.6,-543.4],[997.3,-579.1],[978.6,-575.8],[989.1,-516.2]],height:14,estimatedHeight:!0,at:1248,kind:"yes"},{id:"115891395",name:"",points:[[961.5,-580.8],[959.9,-593.1],[1013,-600],[1014.6,-587.7],[961.5,-580.8]],height:14,estimatedHeight:!0,at:1318,kind:"yes"},{id:"115941612",name:"",points:[[907.5,-476.5],[902.9,-487.2],[915.3,-492.4],[919.8,-481.7],[907.5,-476.5]],height:14,estimatedHeight:!0,at:1256,kind:"yes"},{id:"115941618",name:"Villino Coppini",points:[[888.6,-493.4],[900,-497.8],[897.6,-503.5],[902.1,-505.1],[893.9,-524.8],[878.3,-518.3],[888.6,-493.4]],height:14,estimatedHeight:!0,at:1294,kind:"yes"},{id:"115941629",name:"",points:[[850.5,-499.2],[861.8,-503.6],[856.5,-516.9],[845.2,-512.4],[850.5,-499.2]],height:14,estimatedHeight:!0,at:1301,kind:"yes"},{id:"204127867",name:"",points:[[-58.1,-155.2],[-72.2,-154.8],[-72.8,-161.8],[-58.6,-161.8],[-58.1,-155.2]],height:14,estimatedHeight:!0,at:161,kind:"yes"},{id:"204144329",name:"Casa Buonarroti",points:[[451.9,-302.1],[456.1,-290.5],[467.8,-294.6],[472.1,-283.2],[481.1,-286.5],[472.4,-308.7],[451.9,-302.1]],height:14,estimatedHeight:!0,at:701,kind:"public"},{id:"249686037",name:"Badia Fiorentina",points:[[-6.1,-243.4],[-5.1,-223.5],[-10.7,-223.3],[-10.7,-221.5],[-11.4,-221.6],[-11.5,-217.6],[-19.6,-217.5],[-26.1,-217.9],[-24.4,-219],[-24.5,-222.7],[-27.6,-224.7],[-38.8,-224.6],[-38.8,-237],[-30,-237.1],[-30.1,-243.4],[-6.1,-243.4]],height:14,estimatedHeight:!0,at:219,kind:"church"},{id:"249686038",name:"",points:[[-28.1,-216.9],[-24.4,-219],[-24.5,-222.7],[-27.6,-224.7],[-31.4,-222.6],[-31.3,-218.9],[-28.1,-216.9]],height:70,estimatedHeight:!1,at:219,kind:"yes"},{id:"306156985",name:"",points:[[123.8,-328.7],[118.8,-337.3],[106.9,-332.5],[106.4,-334],[80,-327.7],[82.5,-322.1],[95.4,-323.2],[123.8,-328.7]],height:13.2,estimatedHeight:!1,at:324,kind:"yes"},{id:"306156988",name:"Palazzo dell'Arte dei Giudici e Notai",points:[[27.3,-187.5],[7.2,-185.3],[9,-171.3],[29.2,-173.5],[27.3,-187.5]],height:19.799999999999997,estimatedHeight:!1,at:186,kind:"yes"},{id:"306156989",name:"Ex chiesa di San Procolo",points:[[69.8,-204.5],[70.5,-191.7],[45.1,-190.9],[44.5,-203.1],[69.8,-204.5]],height:14,estimatedHeight:!0,at:261,kind:"church"},{id:"306156992",name:"Chiesa di Santa Maria in Campo",points:[[18.3,-47.4],[18.2,-41],[37.1,-40.7],[37.1,-47.1],[18.3,-47.4]],height:14,estimatedHeight:!0,at:48,kind:"church"},{id:"306156993",name:"",points:[[42.1,-270.2],[65.6,-269.5],[65.1,-276.9],[55.5,-276.5],[55.1,-279.3],[47.6,-279.4],[47.4,-277.1],[43.6,-276.6],[43.5,-272.3],[42.4,-272.2],[42.1,-270.2]],height:14,estimatedHeight:!0,at:288,kind:"yes"},{id:"306156995",name:"Chiesa evangelica dei fratelli",points:[[36.4,-270.6],[31.1,-289.2],[19.1,-285.8],[24,-270.2],[36.4,-270.6]],height:14,estimatedHeight:!0,at:259,kind:"church"},{id:"306156999",name:"",points:[[75.8,-327.1],[76.5,-321.7],[82.5,-322.1],[80,-327.7],[75.8,-327.1]],height:13.2,estimatedHeight:!1,at:311,kind:"bridge"},{id:"306984385",name:"Palazzo Baroncini",points:[[127.9,-235],[127.3,-246.4],[129.6,-247.4],[129.3,-251],[121.3,-251],[115.9,-250.1],[116,-245.3],[112.2,-245.1],[112,-249.9],[110,-249.9],[110.9,-233.1],[127.9,-235]],height:14,estimatedHeight:!0,at:330,kind:"yes"},{id:"306984386",name:"",points:[[339.6,-298],[336.8,-305.1],[326.7,-301.4],[330.5,-293.6],[339.6,-298]],height:14,estimatedHeight:!0,at:560,kind:"apartments"},{id:"306984391",name:"",points:[[253.5,-140.7],[245.1,-140.5],[245.5,-124.1],[253.9,-123.9],[253.5,-140.7]],height:13.2,estimatedHeight:!1,at:442,kind:"apartments"},{id:"306984392",name:"",points:[[155.6,-229.6],[166.5,-231.4],[167.6,-191.1],[156.1,-191.1],[155.6,-229.6]],height:14,estimatedHeight:!0,at:385,kind:"apartments"},{id:"306984399",name:"Palazzo Covoni delle Burella",points:[[78.8,-288.5],[68.2,-287.6],[70.5,-267.5],[81.6,-267.7],[81.9,-277],[80.3,-277],[78.8,-288.5]],height:14,estimatedHeight:!0,at:304,kind:"yes"},{id:"306984401",name:"Palazzo Salviati-Quaratesi",points:[[240.8,-214.2],[251.9,-220.8],[250.1,-224.1],[253.1,-225.7],[252.4,-227.3],[256,-228.7],[251.3,-244.5],[226.6,-239.1],[240.8,-214.2]],height:14,estimatedHeight:!0,at:445,kind:"apartments"},{id:"306984402",name:"Palazzo Barucci",points:[[82.4,-244.9],[82.3,-264.1],[71,-264.6],[72.1,-244.2],[75.4,-244.5],[75.3,-246.5],[78.6,-246.7],[78.7,-244.7],[82.4,-244.9]],height:14,estimatedHeight:!0,at:303,kind:"yes"},{id:"306984403",name:"",points:[[269.3,-189.7],[259.5,-186.3],[267.4,-175.1],[273.7,-176.9],[269.3,-189.7]],height:9.899999999999999,estimatedHeight:!1,at:475,kind:"apartments"},{id:"306984404",name:"Palazzo della Banca d'Italia",points:[[74.2,-14.9],[76.6,-35.4],[87.2,-38.2],[87.6,-41.2],[88.8,-42],[89.4,-39.7],[104.2,-43.6],[103.3,-46.6],[105,-46.6],[106.6,-44],[111.3,-44.8],[114.1,-44.4],[118.7,-45.5],[118.6,-44],[123,-44.4],[124,-38.6],[126.2,-37.5],[128.5,-28.9],[74.2,-14.9]],height:9.899999999999999,estimatedHeight:!1,at:21,kind:"yes"},{id:"306984405",name:"",points:[[231.3,-123.2],[242.3,-123.4],[245.5,-124.1],[245.1,-140.5],[240.7,-140.2],[240.3,-143.2],[235.7,-142.8],[235.2,-145.1],[240.4,-145.8],[239.5,-152.9],[236.6,-152.3],[236.4,-156.6],[229.1,-155.5],[230.4,-140.9],[231.3,-123.2]],height:14,estimatedHeight:!0,at:442,kind:"apartments"},{id:"306984407",name:"Palazzo Covoni",points:[[73,-228.8],[88.4,-231],[87,-243.3],[84.8,-243.2],[84.8,-245],[78.7,-244.7],[78.9,-243.1],[75.5,-242.9],[75.4,-244.5],[72.1,-244.2],[73,-228.8]],height:14,estimatedHeight:!0,at:292,kind:"yes"},{id:"306984411",name:"Palazzo Gherardi",points:[[402.2,-267.8],[396,-285.2],[371,-277],[373.8,-268.8],[387,-272.9],[390.5,-263.7],[392.6,-264.1],[399.3,-266.5],[402.2,-267.8]],height:14,estimatedHeight:!0,at:621,kind:"yes"},{id:"306984414",name:"Palazzo Da Cintoia",points:[[205.9,-263.4],[195.9,-279],[183.1,-272],[192.9,-255.9],[205.9,-263.4]],height:14,estimatedHeight:!0,at:414,kind:"yes"},{id:"306984415",name:"Casa natale di Giovanni da Verrazzano",points:[[330.5,-293.6],[338.9,-276.2],[347.8,-278.8],[345.4,-284.5],[343.9,-283.8],[338.8,-295.4],[340.4,-296.1],[339.6,-298],[330.5,-293.6]],height:14,estimatedHeight:!0,at:573,kind:"apartments"},{id:"306984416",name:"Oratorio di San Niccolò del Ceppo",points:[[322.9,-207.8],[318.7,-212.4],[320.9,-213.6],[306,-231.6],[298.8,-224.9],[301.6,-222.3],[311.2,-211.1],[305.7,-209.6],[308.3,-204.2],[322.9,-207.8]],height:14,estimatedHeight:!0,at:520,kind:"church"},{id:"306984417",name:"Palazzo Jacometti Ciofi",points:[[336.8,-305.1],[347.8,-278.8],[363.8,-283.6],[357.1,-299.4],[349.3,-296.4],[347,-301.4],[354.8,-304.5],[351.6,-311.7],[336.8,-305.1]],height:14,estimatedHeight:!0,at:590,kind:"hotel"},{id:"306984418",name:"",points:[[8.5,-70.9],[8.5,-65.2],[29.4,-66.4],[29.7,-71.6],[16.8,-71.3],[8.5,-70.9]],height:16.5,estimatedHeight:!1,at:71,kind:"yes"},{id:"306984422",name:"",points:[[276.7,-152.7],[274.4,-158.7],[267.1,-155.3],[269.6,-149.9],[276.7,-152.7]],height:14,estimatedHeight:!0,at:473,kind:"apartments"},{id:"306984425",name:"Palazzo Ramirez de Montalvo",points:[[72.1,-118.1],[73,-96.8],[77.3,-97],[79.4,-95.2],[80.8,-84.9],[87,-85.3],[87.2,-75.9],[82.3,-74.3],[82.9,-70],[89.3,-72.6],[88.1,-87.3],[93,-87.3],[92.8,-91.2],[88.5,-90.7],[87.4,-98.9],[90.4,-99.3],[89.8,-118.3],[72.1,-118.1]],height:14,estimatedHeight:!0,at:121,kind:"yes"},{id:"306984428",name:"",points:[[295.7,-200.1],[308.3,-204.2],[305.7,-209.6],[301.3,-217.5],[289,-213.2],[295.7,-200.1]],height:9.899999999999999,estimatedHeight:!1,at:513,kind:"apartments"},{id:"306984429",name:"",points:[[309.6,-227.2],[320.9,-213.6],[322.8,-214.8],[312.4,-230],[309.6,-227.2]],height:14,estimatedHeight:!0,at:525,kind:"yes"},{id:"306984430",name:"",points:[[114.1,-46.6],[103.3,-46.6],[90.4,-43.1],[84,-39.3],[80.7,-39.7],[78.5,-46.6],[81.1,-66.6],[88.7,-68.3],[88.3,-71.8],[91.7,-71.8],[90.6,-86.4],[116.1,-86.4],[116.7,-70],[118,-55.2],[114.1,-55.6],[114.1,-46.6]],height:14,estimatedHeight:!0,at:51,kind:"yes"},{id:"306985690",name:"Ex chiesa dei Santi Jacopo e Lorenzo",points:[[714.7,-415.9],[705.7,-410.1],[721,-385.3],[729.7,-387.7],[714.7,-415.9]],height:14,estimatedHeight:!0,at:971,kind:"church"},{id:"306985705",name:"Villino Travaglini",points:[[928.2,-461.5],[909.3,-453.9],[915.2,-440],[934.8,-445.4],[928.2,-461.5]],height:14,estimatedHeight:!0,at:1164,kind:"yes"},{id:"306985707",name:"",points:[[928.2,-461.5],[922,-476.3],[914.6,-473.3],[915.2,-472.2],[905.3,-468],[908.6,-459.6],[909.5,-460],[911.5,-454.8],[928.2,-461.5]],height:14,estimatedHeight:!0,at:1238,kind:"yes"},{id:"307104280",name:"Palazzo di Maffeo Barberini",points:[[292.9,-355],[283.9,-373.9],[277.1,-371],[282.9,-356.6],[286,-351.1],[292.9,-355]],height:13.2,estimatedHeight:!1,at:533,kind:"apartments"},{id:"307104289",name:"Palazzo Bargellini",points:[[406.3,-377.7],[421.4,-385.9],[410.7,-407.3],[395.1,-399.8],[395.6,-398],[393.3,-397],[395.8,-391],[401.7,-393.4],[403.4,-389.1],[398.5,-387.1],[402.9,-376.3],[406.3,-377.7]],height:14,estimatedHeight:!0,at:653,kind:"apartments"},{id:"307104292",name:"Casa del Diluvio",points:[[253.5,-343.6],[262.7,-350.4],[256.1,-361.9],[245.6,-356.9],[253.5,-343.6]],height:9.899999999999999,estimatedHeight:!1,at:496,kind:"apartments"},{id:"307104293",name:"Palazzo Bartolini Salimbeni-Lenzoni",points:[[242.5,-330.3],[248.2,-320.5],[254.6,-325.9],[240.3,-350.1],[240,-354.5],[233.6,-364.4],[221.7,-354.3],[226.7,-346.7],[235.4,-331.2],[240.3,-333.8],[242.5,-330.3]],height:13.2,estimatedHeight:!1,at:486,kind:"apartments"},{id:"307126295",name:"Chiesa dei Santi Simone e Giuda",points:[[235.2,-312.4],[225.5,-325.4],[195,-303.6],[203.9,-291.2],[235.2,-312.4]],height:14,estimatedHeight:!0,at:429,kind:"church"},{id:"307126296",name:"Spedale della Santissima Trinità dei Calzolai",points:[[235.2,-312.4],[248.2,-320.5],[242.5,-330.3],[231,-322.9],[228.7,-326.7],[225.5,-325.4],[235.2,-312.4]],height:14,estimatedHeight:!0,at:471,kind:"yes"},{id:"307126298",name:"",points:[[124.7,-356.2],[131.4,-345.5],[140.4,-334.6],[154.4,-343.8],[143.4,-363.2],[139,-360.2],[138.1,-362],[124.7,-356.2]],height:14,estimatedHeight:!0,at:370,kind:"yes"},{id:"307129113",name:"",points:[[808.8,-624.5],[820.3,-629.7],[817.7,-645],[805.1,-643.8],[808.8,-624.5]],height:14,estimatedHeight:!0,at:1443,kind:"yes"},{id:"307129116",name:"",points:[[765.2,-672.8],[767.4,-649.9],[779.1,-650.2],[778.6,-658.4],[775.1,-658.3],[774.3,-673.4],[765.2,-672.8]],height:14,estimatedHeight:!0,at:1481,kind:"yes"},{id:"307276584",name:"",points:[[503.2,-231.8],[497.7,-229.2],[496.4,-232.7],[494.1,-231.8],[494.9,-228.6],[488.4,-227],[485.8,-235.8],[478.4,-233.6],[481.4,-223.9],[475.2,-222],[469.9,-239.5],[496.2,-247.8],[503.2,-231.8]],height:6.6,estimatedHeight:!1,at:707,kind:"kindergarten"},{id:"307277597",name:"Palazzo Pepi-Ferri",points:[[366.8,-321.9],[380,-327.1],[372.7,-346.6],[359.3,-339.7],[361.9,-332.8],[366.8,-321.9]],height:14,estimatedHeight:!0,at:604,kind:"yes"},{id:"307544507",name:"Torre dei Pierozzi",points:[[-97.9,-29.2],[-85.7,-29],[-85.5,-21.7],[-98.4,-20.8],[-97.9,-29.2]],height:16.5,estimatedHeight:!1,at:15,kind:"yes"},{id:"307544508",name:"Bottega dell'Opera del Duomo",points:[[-96.9,-43.3],[-86.8,-44.7],[-86.1,-44],[-86,-32.9],[-95.1,-31.8],[-96.9,-43.3]],height:3.3,estimatedHeight:!1,at:26,kind:"yes"},{id:"307544514",name:"",points:[[-117.1,-76],[-97.8,-74.9],[-97.4,-83.7],[-102.9,-84.6],[-103,-87.6],[-106.4,-87.6],[-105.7,-98.3],[-116.6,-98.9],[-117.1,-76]],height:14,estimatedHeight:!0,at:70,kind:"yes"},{id:"307544518",name:"",points:[[-83.1,-124.2],[-82.6,-137.4],[-85,-137.5],[-85,-131.8],[-87.6,-131.7],[-87.5,-124.3],[-83.1,-124.2]],height:14,estimatedHeight:!0,at:139,kind:"yes"},{id:"307544525",name:"Torre dei Donati",points:[[-83.1,-124.2],[-76.1,-124.1],[-76.3,-142.8],[-82.6,-142.8],[-82.6,-137.4],[-83.1,-124.2]],height:14,estimatedHeight:!0,at:119,kind:"yes"},{id:"307544531",name:"Studio Fiorentino",points:[[-97.8,-74.9],[-93.2,-74.9],[-92.6,-66.7],[-87.7,-66.5],[-87.7,-60.7],[-81.7,-60.8],[-78.6,-84.1],[-87.6,-84.4],[-87.6,-83.1],[-97.4,-83.7],[-97.8,-74.9]],height:14,estimatedHeight:!0,at:80,kind:"yes"},{id:"307544546",name:"Chiesa di Santa Margherita in Santa Maria de' Ricci",points:[[-104.2,-119.9],[-104.3,-106.8],[-105,-103.7],[-105.9,-97.1],[-104,-97.1],[-104.4,-88.5],[-94.5,-88.9],[-93.7,-120.1],[-104.2,-119.9]],height:14,estimatedHeight:!0,at:84,kind:"church"},{id:"307545799",name:"Santa Margherita dei Cerchi",points:[[-56.1,-140.6],[-56,-149.6],[-43.8,-150.1],[-43.4,-141.2],[-56.1,-140.6]],height:14,estimatedHeight:!0,at:142,kind:"church"},{id:"307545803",name:"Torre della Castagna",points:[[-70.2,-194.7],[-69.8,-189],[-76.9,-188.5],[-77.3,-194.2],[-70.2,-194.7]],height:14,estimatedHeight:!0,at:204,kind:"yes"},{id:"307545805",name:"Palazzo Rinuccini",points:[[-107.4,-245.5],[-107.3,-229.5],[-92.7,-228.2],[-92.8,-244.7],[-97,-244.7],[-97,-241.6],[-98.4,-241.6],[-98.4,-246.1],[-104.4,-246],[-107.4,-245.5]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"307545809",name:"",points:[[-92.8,-244.7],[-92.7,-228.2],[-80.5,-227],[-80,-246],[-89.5,-245.6],[-89.6,-244.6],[-92.8,-244.7]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"307553013",name:"",points:[[82.1,-222],[73.6,-220.9],[75.6,-190.8],[93.4,-190.7],[91.8,-203],[83.1,-203.1],[82.1,-222]],height:13.2,estimatedHeight:!1,at:300,kind:"apartments"},{id:"321893763",name:"",points:[[467.7,-338.5],[470.3,-332.6],[466.4,-331.3],[465.5,-333.1],[459.5,-330.9],[460.5,-329],[456.8,-327.3],[453.1,-334.3],[467.7,-338.5]],height:14,estimatedHeight:!0,at:691,kind:"apartments"},{id:"340622071",name:"",points:[[1267.5,-641.8],[1261.5,-679.2],[1246.1,-676.8],[1252,-639.2],[1267.5,-641.8]],height:14,estimatedHeight:!0,at:1931,kind:"yes"},{id:"340622073",name:"",points:[[1182.7,-687.5],[1217,-690.3],[1219.2,-653],[1209.1,-652.2],[1209.6,-644.8],[1193.6,-643.6],[1192.4,-658.8],[1198.2,-659.3],[1197.2,-675.9],[1181.5,-674.4],[1180.8,-683.8],[1182.9,-684],[1182.7,-687.5]],height:14,estimatedHeight:!0,at:1887,kind:"yes"},{id:"340622097",name:"",points:[[1188.8,-701.6],[1186.7,-727],[1221,-729.9],[1222.3,-710.8],[1224.6,-711],[1225.2,-702.8],[1214.4,-702.1],[1213.6,-714.1],[1200.6,-713.1],[1201,-702.1],[1188.8,-701.6]],height:14,estimatedHeight:!0,at:1894,kind:"yes"},{id:"340622099",name:"",points:[[1180.8,-683.8],[1183.7,-649.6],[1175.7,-649.3],[1175,-659.9],[1171.9,-659.6],[1171,-673.6],[1156.6,-673],[1152.7,-679.6],[1149.8,-678.1],[1149.2,-682.9],[1147.1,-682.7],[1145.3,-687.7],[1157.8,-688.5],[1156.3,-707.1],[1167.5,-707.9],[1169,-683.1],[1180.8,-683.8]],height:14,estimatedHeight:!0,at:1828,kind:"yes"},{id:"340622105",name:"",points:[[1138.8,-704.7],[1137.5,-719.4],[1179.9,-722.7],[1182.9,-684],[1169,-683.1],[1167.5,-707.9],[1156.3,-707.1],[1157.8,-688.5],[1143.5,-687.6],[1142,-705],[1138.8,-704.7]],height:14,estimatedHeight:!0,at:1853,kind:"yes"},{id:"361442655",name:"Chiesa di San Filippo Neri",points:[[28.9,-324.4],[26.3,-333.5],[17.8,-331.1],[20.4,-321.9],[-.6,-315.9],[3.9,-300.2],[42.5,-311.2],[38,-327],[28.9,-324.4]],height:14,estimatedHeight:!0,at:230,kind:"church"},{id:"361442656",name:"",points:[[82.2,-291.4],[68.5,-289.8],[67.3,-300.9],[80.9,-302.4],[82.2,-291.4]],height:14,estimatedHeight:!0,at:294,kind:"yes"},{id:"361442657",name:"",points:[[26.6,-223.9],[23,-234.5],[19,-253.4],[17.7,-263.6],[-1.3,-260.5],[5,-228.4],[12.7,-228.9],[13.1,-222.3],[26.6,-223.9]],height:14,estimatedHeight:!0,at:231,kind:"yes"},{id:"361442658",name:"Torre Volognana",points:[[5.4,-221.8],[13.1,-222.3],[12.7,-228.9],[5,-228.4],[5.4,-221.8]],height:57,estimatedHeight:!1,at:231,kind:"yes"},{id:"397848200",name:"Cupola del Brunelleschi",points:[[-80.1,86.9],[-93.4,74],[-96.2,71.8],[-97.2,50.3],[-95.1,47.8],[-81.5,33.8],[-60.3,33.2],[-47.1,45.6],[-44.4,48.8],[-44.1,70.5],[-59.3,86.4],[-80.1,86.9]],height:114.5,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010693",name:"",points:[[-80.1,86.9],[-80,94.8],[-73.7,100.2],[-65.1,100.1],[-59.2,94.2],[-59.3,86.4],[-80.1,86.9]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010694",name:"",points:[[-44.1,70.5],[-36.6,70.4],[-30.6,63.7],[-30.7,54.7],[-37.2,48.4],[-44.4,48.8],[-44.1,70.5]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010695",name:"",points:[[-81.5,33.8],[-81.8,26.4],[-77.1,20.7],[-66.9,20.4],[-60.6,25.5],[-60.3,33.2],[-81.5,33.8]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010697",name:"",points:[[-45.2,75.6],[-44.6,78],[-44.8,80.4],[-45.8,82.7],[-47.4,84.5],[-49.6,85.6],[-52,86],[-54.4,85.5],[-57,84.2],[-47,73.7],[-45.2,75.6]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010698",name:"",points:[[-56.2,34],[-53.8,33.2],[-51.2,33.4],[-48.9,34.3],[-47,36],[-45.7,38.2],[-45.3,40.7],[-45.7,43.3],[-47.1,45.6],[-58.1,35.3],[-56.2,34]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398010699",name:"",points:[[-88,35],[-90.5,34.5],[-93,34.8],[-95.2,36],[-96.9,37.8],[-97.9,40.1],[-98.1,42.6],[-97.4,45.1],[-95.1,47.8],[-84.8,37.2],[-88,35]],height:45,estimatedHeight:!1,at:0,kind:"yes"},{id:"398015279",name:"",points:[[-72.9,64.3],[-75.3,61.9],[-75.2,58.6],[-72.8,56.3],[-69.4,56.4],[-67.1,58.8],[-67.2,62.1],[-69.6,64.4],[-72.9,64.3]],height:16.5,estimatedHeight:!1,at:0,kind:"yes"},{id:"424428393",name:"",points:[[1426.6,-736.6],[1428.8,-723.8],[1440.6,-725.8],[1438.4,-738.5],[1426.6,-736.6]],height:14,estimatedHeight:!0,at:2003,kind:"apartments"},{id:"442953940",name:"",points:[[1098.5,-624.2],[1099.7,-651],[1116.5,-652],[1115.4,-623.2],[1098.5,-624.2]],height:14,estimatedHeight:!0,at:1768,kind:"yes"},{id:"442953975",name:"",points:[[1280.1,-611.6],[1272.9,-653.9],[1287,-656.3],[1289.6,-640.7],[1292.9,-641.3],[1292.7,-642.8],[1304.6,-644.8],[1304.9,-643.2],[1307.2,-643.6],[1304.7,-658.2],[1317.8,-660.4],[1324.7,-619],[1311.5,-616.8],[1309.5,-628.2],[1292.3,-625.3],[1294.2,-614],[1280.1,-611.6]],height:14,estimatedHeight:!0,at:1986,kind:"yes"},{id:"443009763",name:"",points:[[626.2,-352],[613.4,-348.7],[619,-334.4],[631,-338.2],[626.2,-352]],height:14,estimatedHeight:!0,at:848,kind:"apartments"},{id:"443009764",name:"",points:[[649.9,-328.4],[651.9,-322.6],[655.3,-323.7],[657.6,-318],[653.9,-316.9],[656.1,-310.9],[659.9,-312.1],[668.5,-315.9],[661.3,-332],[657,-330.6],[658.8,-326.7],[656,-325.5],[654.3,-329.7],[649.9,-328.4]],height:14,estimatedHeight:!0,at:889,kind:"yes"},{id:"443009765",name:"",points:[[624.2,-321.5],[630.1,-306.4],[632.7,-307.3],[632,-309.2],[634.8,-310.7],[633.9,-313.8],[642.7,-316.8],[639.7,-326.6],[624.2,-321.5]],height:13.2,estimatedHeight:!1,at:867,kind:"apartments"},{id:"443009766",name:"",points:[[639.1,-355.4],[645.2,-340.9],[647.4,-342],[648.2,-340],[651.2,-341.1],[653.6,-334.5],[659.3,-336.3],[649.5,-358.1],[639.1,-355.4]],height:14,estimatedHeight:!0,at:875,kind:"yes"},{id:"443009767",name:"",points:[[619,-334.4],[624.2,-321.5],[639.7,-326.6],[638.8,-328.4],[640.2,-329.5],[637.8,-334.2],[635.3,-333.1],[636.1,-330.3],[634.8,-330],[633.1,-334.9],[630.7,-334],[630,-336.1],[626.4,-335.1],[625.9,-336.6],[619,-334.4]],height:16.5,estimatedHeight:!1,at:857,kind:"apartments"},{id:"443009768",name:"",points:[[656.1,-310.9],[653.9,-316.9],[651,-315.9],[649.8,-319.4],[650.7,-319.7],[650,-322],[651.9,-322.6],[649.9,-328.4],[645.7,-327],[655.5,-300],[659.5,-301],[656.1,-310.9]],height:14,estimatedHeight:!0,at:878,kind:"yes"},{id:"443009770",name:"",points:[[668.5,-315.9],[659.9,-312.1],[663.7,-302.1],[673.8,-304.8],[668.5,-315.9]],height:14,estimatedHeight:!0,at:892,kind:"yes"},{id:"443009772",name:"",points:[[661.3,-332],[659.3,-336.3],[650.5,-333.7],[647.4,-342],[645.2,-340.9],[640.9,-339.5],[641.8,-337],[639.2,-335.9],[643.3,-327],[641.9,-326.6],[643.2,-323.2],[640.9,-322.7],[641.4,-320.9],[642.9,-321.3],[643.2,-320],[647.7,-321.7],[645.7,-327],[661.3,-332]],height:14,estimatedHeight:!0,at:879,kind:"yes"},{id:"443464404",name:"",points:[[808.8,-651.4],[808.7,-666.5],[806.6,-666.6],[805.1,-672],[802.3,-670.9],[803,-664.1],[794.5,-663.3],[794.4,-659.5],[784.2,-658.2],[784.7,-650.5],[808.8,-651.4]],height:14,estimatedHeight:!0,at:1473,kind:"yes"},{id:"443464407",name:"",points:[[765.2,-672.8],[772.2,-673.3],[772,-675.8],[776.2,-676.4],[774.5,-688.9],[763.8,-688.2],[765.2,-672.8]],height:14,estimatedHeight:!0,at:1486,kind:"yes"},{id:"443464412",name:"",points:[[779.1,-650.2],[784.7,-650.5],[783.2,-676.6],[778.4,-676.3],[778.8,-670.6],[777.9,-670.6],[779.1,-650.2]],height:14,estimatedHeight:!0,at:1480,kind:"yes"},{id:"443464414",name:"",points:[[808.7,-666.5],[808.8,-651.4],[817.5,-651.5],[817.4,-666.5],[808.7,-666.5]],height:14,estimatedHeight:!0,at:1461,kind:"yes"},{id:"443464416",name:"",points:[[791.3,-690.1],[776,-689.2],[776.7,-676.3],[787.1,-677],[787.3,-674.5],[796.1,-675.3],[795.7,-679.2],[792.7,-679],[792.4,-682.9],[795.5,-683.1],[795.1,-688.7],[791.3,-688.5],[791.3,-690.1]],height:14,estimatedHeight:!0,at:1482,kind:"apartments"},{id:"443464417",name:"",points:[[795.9,-677.5],[806.6,-678.1],[806.9,-672.8],[817.2,-673.4],[816.1,-691.8],[795,-690.5],[795.9,-677.5]],height:14,estimatedHeight:!0,at:1480,kind:"apartments"},{id:"456578417",name:"",points:[[-19.2,85.2],[-8.9,94.5],[-14.5,99],[-12.1,101.6],[-19.2,107.3],[-25.4,113.3],[-34.4,103],[-29.3,96.7],[-19.2,85.2]],height:9.899999999999999,estimatedHeight:!1,at:0,kind:"apartments"},{id:"456578419",name:"Museo dell'Opera del Duomo",points:[[47.2,90.9],[41.3,81.3],[48.9,77],[36.4,57.6],[28.4,62.4],[16.2,43.7],[8.8,48.1],[-2.1,44],[-8.8,71.2],[-10.3,75.1],[-19.2,85.2],[-8.9,94.5],[-14.5,99],[-12.1,101.6],[6,125.7],[8.3,124.4],[9,125.5],[21.7,116],[19.1,113.4],[35.3,102],[42.8,111.5],[57.8,101.3],[49.9,88.9],[47.2,90.9]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"456578420",name:"",points:[[111.4,22.8],[79.4,36.9],[75,26.4],[88.7,20.8],[106.6,13.9],[111.4,22.8]],height:14,estimatedHeight:!0,at:0,kind:"office"},{id:"456578423",name:"",points:[[99.4,89.6],[91.1,95.2],[73.8,68.9],[62.2,48.8],[65.3,46.9],[76.9,68],[81.5,65.9],[88.2,79.4],[90.8,77.9],[99.4,89.6]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"456578425",name:"",points:[[100.2,3],[106.6,13.9],[88.7,20.8],[86.4,15.5],[81.2,17.8],[83.5,23.1],[75,26.4],[71.7,15.9],[77.9,13.1],[78.9,15],[86.5,11.5],[85.3,9.4],[100.2,3]],height:14,estimatedHeight:!0,at:0,kind:"apartments"},{id:"456578428",name:"",points:[[111.4,22.8],[114.4,28.1],[102.5,34.3],[101.7,31.8],[92.4,35.2],[94,39.1],[83.9,44.7],[79.8,38],[79.4,36.9],[111.4,22.8]],height:14,estimatedHeight:!0,at:0,kind:"apartments"},{id:"456578429",name:"",points:[[60,78.7],[55.5,81.1],[42.6,61.7],[40.3,63.7],[36.4,57.6],[44.1,51.9],[46.9,55.5],[57.9,48.4],[66.3,61.1],[53.1,69.5],[60,78.7]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"456578430",name:"",points:[[79.8,38],[62.2,48.8],[58.1,42.3],[64.7,36.7],[61.6,6.1],[51.7,6.7],[48.2,-4.4],[70.4,-6.9],[73.7,4.4],[70.5,5.7],[71.7,15.9],[75,26.4],[79.8,38]],height:14,estimatedHeight:!0,at:8,kind:"yes"},{id:"462600381",name:"",points:[[453.8,-380.1],[456.4,-374.6],[469.3,-380.9],[468,-383.5],[469.2,-384.1],[470.6,-381.4],[473.2,-382.8],[471.6,-385.9],[469.3,-389.2],[465.9,-387.6],[466.6,-386],[453.8,-380.1]],height:14,estimatedHeight:!0,at:705,kind:"yes"},{id:"462600382",name:"",points:[[472.8,-428.2],[457,-421.2],[458.2,-418.4],[456,-417],[457.3,-414],[475.1,-422.8],[472.8,-428.2]],height:14,estimatedHeight:!0,at:716,kind:"yes"},{id:"462600383",name:"",points:[[452.3,-413.2],[449.4,-412],[446.8,-417.2],[445.4,-416.5],[444.3,-418.9],[438.1,-416.6],[444.5,-401.6],[457.4,-407.8],[455.2,-412.2],[457.5,-413.5],[456,-417],[458.2,-418.4],[455.8,-423.9],[454,-423.3],[453.2,-424.5],[447.8,-421.9],[449.6,-417.4],[450.7,-417.9],[451.5,-416.3],[450.7,-415.9],[452.3,-413.2]],height:14,estimatedHeight:!0,at:702,kind:"yes"},{id:"462600384",name:"",points:[[485.1,-400],[479.2,-412.9],[462.8,-405.5],[466.7,-395],[468.3,-391.5],[485.1,-400]],height:14,estimatedHeight:!0,at:720,kind:"apartments"},{id:"462600385",name:"",points:[[489.1,-390.6],[487.1,-395.3],[473,-388.8],[473.8,-386.9],[471.6,-385.9],[474.1,-380.9],[477.2,-382.3],[476.7,-383.3],[476,-382.9],[475.4,-384.4],[489.1,-390.6]],height:14,estimatedHeight:!0,at:723,kind:"apartments"},{id:"462600389",name:"",points:[[462.2,-361.5],[465.1,-354.9],[483.9,-364.5],[481.5,-370.2],[462.2,-361.5]],height:14,estimatedHeight:!0,at:707,kind:"yes"},{id:"462600390",name:"",points:[[444.5,-401.6],[446.5,-396.8],[459.9,-403.7],[458.7,-405.9],[461.9,-407.4],[460.8,-409.7],[457.4,-407.8],[444.5,-401.6]],height:14,estimatedHeight:!0,at:703,kind:"yes"},{id:"462600391",name:"",points:[[490.7,-386.3],[489.1,-390.6],[475.4,-384.4],[476,-382.9],[476.7,-383.3],[478,-380.5],[490.7,-386.3]],height:14,estimatedHeight:!0,at:727,kind:"apartments"},{id:"462600392",name:"",points:[[471.8,-339.7],[473.6,-335.6],[486.5,-341.3],[485.8,-343.1],[487,-343.7],[485.6,-346.6],[471.8,-339.7]],height:14,estimatedHeight:!0,at:710,kind:"yes"},{id:"462600393",name:"",points:[[505.3,-352],[503.7,-355.8],[485.6,-346.6],[487.7,-342.3],[492.5,-344.5],[492.1,-345.4],[505.3,-352]],height:13.2,estimatedHeight:!1,at:725,kind:"apartments"},{id:"462600395",name:"",points:[[473.6,-335.6],[475.3,-331.1],[489.5,-337.2],[489.2,-338.1],[491.5,-339.5],[489.8,-343.3],[487.7,-342.3],[486.5,-341.3],[473.6,-335.6]],height:14,estimatedHeight:!0,at:710,kind:"yes"},{id:"462600396",name:"",points:[[477.2,-417.1],[460.8,-409.7],[462.8,-405.5],[479.2,-412.9],[477.2,-417.1]],height:14,estimatedHeight:!0,at:719,kind:"yes"},{id:"462600397",name:"",points:[[507.6,-346],[505.3,-352],[492.1,-345.4],[494.4,-340],[507.6,-346]],height:13.2,estimatedHeight:!1,at:731,kind:"apartments"},{id:"462600398",name:"",points:[[449.1,-391],[451.8,-384.6],[468,-392.2],[466.7,-395],[462.6,-393.1],[461,-396.5],[449.1,-391]],height:14,estimatedHeight:!0,at:703,kind:"yes"},{id:"462600399",name:"",points:[[471.8,-339.7],[484.4,-346.2],[481.2,-353],[483.3,-353.7],[481.6,-356.8],[467.4,-349.7],[471.8,-339.7]],height:14,estimatedHeight:!0,at:709,kind:"yes"},{id:"462600401",name:"",points:[[467.4,-349.7],[473.2,-352.6],[472.4,-354.9],[473.7,-355.5],[474.9,-353.5],[480.2,-356.1],[479.1,-358.7],[481.5,-360.3],[480.2,-362.4],[465.1,-354.9],[467.4,-349.7]],height:14,estimatedHeight:!0,at:708,kind:"yes"},{id:"462600403",name:"",points:[[462.2,-361.5],[477.9,-368.6],[474.1,-376.2],[471.2,-374.7],[470.1,-376.8],[458.1,-371],[462.2,-361.5]],height:14,estimatedHeight:!0,at:706,kind:"yes"},{id:"462600405",name:"",points:[[503.7,-355.8],[501.7,-360.4],[489.9,-354.3],[490.2,-353.2],[486.1,-351],[487.8,-347.8],[503.7,-355.8]],height:16.5,estimatedHeight:!1,at:727,kind:"apartments"},{id:"462600406",name:"",points:[[497.2,-370.6],[494.9,-376.3],[481.5,-370.2],[482.3,-368.3],[484.5,-369.5],[485.2,-367.5],[483.1,-366.5],[483.9,-364.5],[497.2,-370.6]],height:13.2,estimatedHeight:!1,at:728,kind:"apartments"},{id:"462600407",name:"",points:[[456.4,-374.6],[458.1,-371],[470.1,-376.8],[469.7,-378.3],[474.5,-380.2],[473.2,-382.8],[456.4,-374.6]],height:14,estimatedHeight:!0,at:705,kind:"yes"},{id:"462600408",name:"",points:[[506.5,-324.2],[515.7,-327.3],[512.8,-334],[504.2,-331],[506.5,-324.2]],height:6.6,estimatedHeight:!1,at:738,kind:"apartments"},{id:"462600409",name:"",points:[[490.7,-386.3],[478,-380.5],[480.3,-375.3],[493.1,-381.1],[490.7,-386.3]],height:14,estimatedHeight:!0,at:727,kind:"apartments"},{id:"462600412",name:"",points:[[475.1,-422.8],[457.3,-414],[457.5,-413.5],[456.1,-412.7],[457.1,-410.8],[460.8,-412.4],[461.8,-410.2],[477.2,-417.1],[475.1,-422.8]],height:14,estimatedHeight:!0,at:719,kind:"yes"},{id:"462600413",name:"",points:[[446.5,-396.8],[449.1,-391],[461,-396.5],[458,-402.7],[446.5,-396.8]],height:14,estimatedHeight:!0,at:703,kind:"yes"},{id:"462600415",name:"",points:[[487.1,-395.3],[485.1,-400],[468.3,-391.5],[469.3,-389.2],[472.5,-390.9],[473.5,-389.1],[487.1,-395.3]],height:14,estimatedHeight:!0,at:725,kind:"apartments"},{id:"462600416",name:"",points:[[451.8,-384.6],[453.8,-380.1],[466.6,-386],[465.9,-387.6],[469.3,-389.2],[468,-392.2],[451.8,-384.6]],height:14,estimatedHeight:!0,at:704,kind:"yes"},{id:"462600417",name:"",points:[[501.7,-360.4],[497.2,-370.6],[483.9,-364.5],[480.2,-362.4],[481.5,-360.3],[482.6,-360.5],[484,-358.1],[481.6,-356.8],[483.3,-353.7],[484.7,-350.6],[486.1,-351],[490.2,-353.2],[489.9,-354.3],[501.7,-360.4]],height:13.2,estimatedHeight:!1,at:725,kind:"apartments"},{id:"462600418",name:"",points:[[507.6,-346],[497.3,-341.2],[499.3,-336.1],[505.4,-338.6],[505.8,-337.1],[502.3,-335.5],[504.2,-331],[512.8,-334],[507.6,-346]],height:9.899999999999999,estimatedHeight:!1,at:738,kind:"apartments"},{id:"462600420",name:"",points:[[494.9,-376.3],[493.1,-381.1],[480.3,-375.3],[480.8,-374],[476.2,-372.1],[477.9,-368.6],[494.9,-376.3]],height:16.5,estimatedHeight:!1,at:723,kind:"apartments"},{id:"464087306",name:"",points:[[1357.4,-666.1],[1353,-682.1],[1365.2,-685.5],[1369.5,-669.2],[1357.4,-666.1]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087323",name:"",points:[[1331.1,-665.6],[1332.7,-654.8],[1348.9,-655],[1346.6,-668],[1331.1,-665.6]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087327",name:"",points:[[1364.7,-693.5],[1388.2,-700.6],[1390.9,-692.1],[1396.9,-693.8],[1394.8,-707.7],[1387.4,-705.7],[1386,-711],[1381.3,-709.5],[1382.5,-705.4],[1378.8,-704.4],[1377.6,-708.2],[1369.3,-705.5],[1370.3,-701.8],[1366.7,-700.8],[1365.5,-704.2],[1361.8,-703],[1364.7,-693.5]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087331",name:"",points:[[1378.3,-711.1],[1373.4,-727.5],[1380.2,-729.5],[1382.3,-723],[1384.8,-723.8],[1385.8,-720.6],[1383.4,-719.8],[1385.3,-713.3],[1378.3,-711.1]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087345",name:"",points:[[1358.5,-654.8],[1355.9,-663.5],[1366.8,-666.2],[1370.4,-654.9],[1358.5,-654.8]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087347",name:"",points:[[1328.8,-681.6],[1325.9,-699.1],[1338.9,-701.3],[1341.9,-683.8],[1328.8,-681.6]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087352",name:"",points:[[1376,-742.4],[1390.7,-743.2],[1391.6,-727.6],[1392.1,-724.9],[1387.9,-724.5],[1387.4,-730.7],[1379.7,-730.1],[1378.7,-732.2],[1376,-742.4]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087361",name:"",points:[[1349.4,-689.4],[1347.4,-701.5],[1352.5,-702.1],[1353.5,-698.1],[1356.7,-698.8],[1355.7,-702.4],[1361.8,-703],[1364.7,-693.5],[1349.4,-689.4]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087362",name:"",points:[[1099.9,-663],[1102.3,-709.1],[1110.2,-708.9],[1109.9,-702.5],[1115,-702.3],[1115.2,-715.6],[1130.2,-716.7],[1130,-699.2],[1132.9,-693.9],[1128,-691.6],[1124.4,-690.9],[1119.6,-690.9],[1119.7,-693.2],[1113,-693.4],[1112.4,-677.4],[1117.7,-677.1],[1117.8,-678.7],[1123.7,-678.8],[1137.1,-686.8],[1142,-677.8],[1126.5,-669.5],[1125.6,-671.7],[1111.6,-672.2],[1111.3,-664.4],[1103,-662.5],[1099.9,-663]],height:14,estimatedHeight:!0,at:1786,kind:"yes"},{id:"464087384",name:"",points:[[1319.1,-736.4],[1323.3,-711.4],[1331.9,-712.4],[1330.6,-719.9],[1336.1,-720.9],[1337.5,-715.2],[1345,-717.2],[1342.8,-726.4],[1338.2,-725.3],[1337.3,-729.2],[1341.8,-730.3],[1339.5,-737.9],[1319.1,-736.4]],height:14,estimatedHeight:!0,at:1993,kind:"yes"},{id:"464087403",name:"",points:[[1237.8,-713.1],[1240.4,-684.8],[1254.8,-685.7],[1253,-711.5],[1267.4,-712.4],[1267.5,-711],[1288.1,-712.3],[1287.1,-726.5],[1281.7,-726.1],[1281.1,-733.4],[1268.3,-732.4],[1268.6,-729.1],[1239.8,-727],[1240,-725.2],[1233.3,-724.7],[1234.2,-712.9],[1237.8,-713.1]],height:14,estimatedHeight:!0,at:1942,kind:"yes"},{id:"464087404",name:"",points:[[1331.1,-665.6],[1328.7,-680.3],[1344.2,-682.8],[1346.6,-668],[1331.1,-665.6]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087408",name:"",points:[[1367.5,-676.7],[1376.3,-679],[1377.7,-673.4],[1376.3,-673],[1376.8,-671.1],[1369.5,-669.2],[1367.5,-676.7]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087415",name:"",points:[[1377.7,-673.4],[1388,-676.1],[1386.5,-681.7],[1397.8,-684.7],[1402.7,-666.4],[1391.3,-663.4],[1390.5,-666.4],[1378.8,-663.4],[1376.3,-673],[1377.7,-673.4]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087419",name:"",points:[[1339.5,-737.9],[1356.3,-740.1],[1359.1,-729.7],[1354.3,-728.5],[1354.9,-726.6],[1348,-724.9],[1347.6,-726.5],[1343.2,-725.1],[1339.5,-737.9]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087421",name:"",points:[[1410.4,-688.6],[1406.4,-713],[1417.3,-714.8],[1421.3,-690.4],[1410.4,-688.6]],height:14,estimatedHeight:!0,at:2003,kind:"apartments"},{id:"464087428",name:"",points:[[1147.3,-626.3],[1138.1,-645.3],[1126.1,-639.2],[1124.8,-641.8],[1120.6,-639.7],[1116,-639.7],[1116.4,-648.9],[1118.7,-648.8],[1120.4,-649.5],[1119.1,-652.1],[1141,-662.9],[1146.7,-651],[1151,-653.1],[1160.4,-632.4],[1147.3,-626.3]],height:14,estimatedHeight:!0,at:1809,kind:"yes"},{id:"464087434",name:"",points:[[1390.7,-743.2],[1402.2,-743.9],[1402.5,-734.7],[1403.7,-734.7],[1404.1,-728.3],[1391.6,-727.6],[1390.7,-743.2]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"464087450",name:"",points:[[1362,-731],[1361.2,-741.7],[1376,-742.4],[1378.7,-732.2],[1362,-731]],height:14,estimatedHeight:!0,at:2003,kind:"yes"},{id:"474220872",name:"",points:[[86.2,-121],[105.9,-121.1],[105.8,-129.2],[107.1,-129.2],[106.8,-144],[102.1,-144.1],[102.2,-141.2],[96.7,-141.2],[96.9,-138.9],[93,-138.9],[92.8,-142.3],[85.9,-142.5],[86.2,-121]],height:14,estimatedHeight:!0,at:142,kind:"apartments"},{id:"474220873",name:"",points:[[159.1,-143.9],[159.3,-135.8],[160.3,-135.8],[160.2,-134],[168.9,-133.5],[168.7,-143.9],[159.1,-143.9]],height:14,estimatedHeight:!0,at:368,kind:"apartments"},{id:"474220874",name:"",points:[[105.9,-121.1],[114.9,-121.1],[114.8,-137.5],[116.8,-137.7],[116.8,-139.8],[111.2,-139.6],[111.1,-143.6],[116.7,-143.6],[116.2,-156.6],[112.2,-156.4],[112.1,-160.1],[105.7,-159.9],[105.9,-158.3],[102.3,-157.6],[101.9,-153.3],[106,-153.2],[106.2,-150.2],[107,-150.2],[107.1,-129.2],[105.8,-129.2],[105.9,-121.1]],height:14,estimatedHeight:!0,at:317,kind:"yes"},{id:"474220875",name:"",points:[[114.9,-121.1],[124.5,-121.2],[124,-140.9],[123.7,-144.8],[116.7,-144.7],[116.8,-137.7],[114.8,-137.5],[114.9,-121.1]],height:14,estimatedHeight:!0,at:326,kind:"yes"},{id:"474220876",name:"",points:[[116,-167.9],[115.5,-187.2],[131.2,-186.9],[132,-167],[125.4,-166.6],[125.4,-167.8],[116,-167.9]],height:14,estimatedHeight:!0,at:329,kind:"yes"},{id:"474220877",name:"",points:[[124,-140.9],[122.6,-158.9],[132.5,-159.8],[132.2,-143.8],[127.6,-143.6],[127.5,-141],[124,-140.9]],height:14,estimatedHeight:!0,at:333,kind:"yes"},{id:"474220878",name:"",points:[[162,-187],[154.3,-187.1],[154.5,-171.1],[162,-171.2],[162,-187]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"474220879",name:"",points:[[93.3,-187],[93.9,-178.6],[84.1,-178.2],[84.4,-170.8],[76,-170.7],[75,-186.7],[93.3,-187]],height:14,estimatedHeight:!0,at:289,kind:"yes"},{id:"474220880",name:"",points:[[93.3,-187],[104.6,-187.2],[104.9,-177.5],[103.7,-177.4],[103.7,-174.8],[98.7,-174.8],[98.9,-171.7],[89.5,-171.5],[89.5,-170.4],[84.4,-170.2],[84.1,-178.2],[93.9,-178.6],[93.3,-187]],height:14,estimatedHeight:!0,at:307,kind:"yes"},{id:"474220881",name:"",points:[[138.8,-121.5],[151,-121.9],[150.4,-138.1],[138.2,-137.7],[138.8,-121.5]],height:14,estimatedHeight:!0,at:347,kind:"yes"},{id:"474220882",name:"",points:[[168.9,-180.3],[168.8,-187.1],[162,-187],[162.1,-180.2],[168.9,-180.3]],height:14,estimatedHeight:!0,at:376,kind:"apartments"},{id:"474220883",name:"",points:[[132,-165.7],[131.2,-186.9],[154.3,-187.1],[154.5,-165.4],[132,-165.7]],height:14,estimatedHeight:!0,at:345,kind:"yes"},{id:"474220884",name:"",points:[[168.9,-158.4],[168.9,-180.3],[162.1,-180.2],[162,-167.3],[159.8,-167.3],[159.8,-171.1],[154.5,-171.1],[154.5,-165.4],[153.4,-165.5],[153.4,-158.5],[168.9,-158.4]],height:14,estimatedHeight:!0,at:375,kind:"apartments"},{id:"474220885",name:"",points:[[77.3,-152.1],[78.2,-142.1],[87.4,-142.5],[87.4,-143.8],[89.7,-144],[89.6,-142.4],[97.1,-142.3],[97.1,-145.1],[106.8,-145.2],[107,-150.2],[96.1,-150.5],[96,-152.2],[77.3,-152.1]],height:14,estimatedHeight:!0,at:152,kind:"yes"},{id:"474220886",name:"",points:[[116,-167.9],[119.7,-167.9],[119.7,-164.1],[125.3,-164],[125.4,-166.6],[132,-167],[132,-165.7],[137.6,-165.6],[137.6,-162.3],[132.5,-162],[132.5,-159.8],[122.6,-158.9],[123.2,-151.9],[119,-151.6],[119.1,-148],[123.5,-148],[123.7,-144.8],[116.7,-144.7],[116,-167.9]],height:14,estimatedHeight:!0,at:328,kind:"yes"},{id:"474220887",name:"",points:[[157.4,-143.9],[157.4,-148.9],[168.7,-148.9],[168.7,-143.9],[157.4,-143.9]],height:14,estimatedHeight:!0,at:367,kind:"yes"},{id:"474220888",name:"",points:[[169,-127.4],[168.9,-133.5],[157.2,-134.2],[157.3,-129.1],[158.3,-129.2],[158.3,-127.2],[169,-127.4]],height:14,estimatedHeight:!0,at:365,kind:"yes"},{id:"474220889",name:"",points:[[97.3,-153.2],[96.3,-157.5],[96.5,-161.7],[100.9,-162.7],[105.5,-161.8],[105.9,-158.3],[102.3,-157.6],[101.9,-153.3],[97.3,-153.2]],height:14,estimatedHeight:!0,at:312,kind:"yes"},{id:"474220890",name:"",points:[[76.7,-161.1],[77.3,-152.1],[96,-152.2],[96,-155.9],[91.4,-156],[91.4,-157.7],[88.9,-157.5],[88.8,-160.9],[76.7,-161.1]],height:14,estimatedHeight:!0,at:289,kind:"yes"},{id:"474220891",name:"",points:[[151,-121.9],[169.1,-121.7],[169,-127.4],[158.3,-127.2],[158.3,-129.2],[157.3,-129.1],[157.3,-133.2],[150.6,-133],[151,-121.9]],height:14,estimatedHeight:!0,at:359,kind:"yes"},{id:"474220892",name:"",points:[[133.4,-121.4],[124.5,-121.2],[124,-140.9],[130.1,-141],[130.3,-142.2],[132.9,-142.3],[133.4,-121.4]],height:14,estimatedHeight:!0,at:339,kind:"yes"},{id:"474220893",name:"",points:[[79.5,-120.8],[78.2,-142.1],[85.9,-142.5],[86.2,-121],[79.5,-120.8]],height:14,estimatedHeight:!0,at:142,kind:"apartments"},{id:"474220894",name:"",points:[[150.6,-133],[150.4,-138.1],[144.1,-137.9],[144.3,-143],[150.4,-143.7],[150.3,-147.5],[151.1,-149],[157.4,-148.9],[157.4,-143.9],[159.1,-143.9],[159.3,-135.8],[157.1,-136.1],[157.3,-133.2],[150.6,-133]],height:14,estimatedHeight:!0,at:361,kind:"yes"},{id:"474220895",name:"",points:[[76,-170.7],[76.7,-161.1],[95.9,-160.7],[95.9,-164.6],[97.3,-164.6],[97.2,-167],[99,-167],[98.9,-171.7],[91.1,-171.5],[91.4,-168.5],[84.5,-168.3],[84.4,-170.8],[76,-170.7]],height:14,estimatedHeight:!0,at:289,kind:"yes"},{id:"474220896",name:"",points:[[138.2,-137.7],[138.8,-121.5],[133.4,-121.4],[132.9,-138.1],[137.1,-138.3],[137.1,-137.7],[138.2,-137.7]],height:14,estimatedHeight:!0,at:342,kind:"yes"},{id:"474220897",name:"",points:[[137.6,-165.6],[137.6,-159.7],[132.5,-159.8],[132.2,-143.8],[136.5,-144],[137.1,-137.7],[142,-137.8],[142.1,-145],[144.3,-144.9],[144.3,-143],[150.4,-143.7],[150.3,-147.5],[151.1,-149],[151,-165.5],[144.8,-165.6],[144.8,-162.7],[140.5,-162.4],[140.4,-165.6],[137.6,-165.6]],height:14,estimatedHeight:!0,at:349,kind:"yes"},{id:"474220898",name:"",points:[[151,-153.4],[158.2,-153.4],[158.3,-148.9],[168.7,-148.9],[168.9,-158.4],[153.4,-158.5],[153.4,-162.2],[151,-162.2],[151,-153.4]],height:14,estimatedHeight:!0,at:362,kind:"apartments"},{id:"474220899",name:"",points:[[104.6,-187.2],[115.5,-187.2],[116.2,-156.6],[112.2,-156.4],[112,-162.6],[104.2,-162.3],[103.7,-177.4],[104.9,-177.5],[104.6,-187.2]],height:14,estimatedHeight:!0,at:319,kind:"yes"},{id:"476740625",name:"",points:[[596.4,-471.5],[592,-469.6],[594.4,-464.3],[588,-460.6],[589.9,-457],[584.5,-454.2],[588.1,-447.2],[590.5,-448.6],[592.5,-444.7],[594.7,-445.6],[596.9,-441],[607.9,-446.6],[596.4,-471.5]],height:14,estimatedHeight:!0,at:856,kind:"yes"},{id:"476740626",name:"",points:[[590.1,-422.8],[586.8,-429.1],[577.2,-424],[580.5,-417.7],[590.1,-422.8]],height:14,estimatedHeight:!0,at:835,kind:"apartments"},{id:"476740627",name:"",points:[[778.5,-485.3],[768.9,-481.5],[771.2,-476],[772,-473.3],[774.7,-466.7],[784.6,-470.7],[778.5,-485.3]],height:14,estimatedHeight:!0,at:1036,kind:"yes"},{id:"476740628",name:"",points:[[623.4,-457.9],[618.8,-466.4],[625.3,-469.1],[621.9,-476.6],[627.2,-479],[635.4,-463.8],[623.4,-457.9]],height:14,estimatedHeight:!0,at:887,kind:"yes"},{id:"476740629",name:"",points:[[577.2,-424],[593.6,-432.6],[592,-436],[597.7,-439.1],[596.9,-441],[596.4,-441.7],[589.6,-437.7],[590.1,-436.8],[574.8,-429.2],[577.2,-424]],height:14,estimatedHeight:!0,at:833,kind:"apartments"},{id:"476740630",name:"",points:[[822.5,-413.5],[846.7,-420.7],[842.5,-432.3],[841.4,-432],[840.5,-434.2],[818.1,-428.1],[822.5,-413.5]],height:14,estimatedHeight:!0,at:1067,kind:"yes"},{id:"476740633",name:"",points:[[795.5,-443.8],[797.3,-438.8],[808.7,-433],[812.6,-434.7],[807.5,-448.8],[795.5,-443.8]],height:14,estimatedHeight:!0,at:1059,kind:"yes"},{id:"476740634",name:"",points:[[570.4,-438],[588.1,-447.2],[583.7,-455.7],[565.9,-446.6],[570.4,-438]],height:14,estimatedHeight:!0,at:830,kind:"apartments"},{id:"476740636",name:"",points:[[765.8,-446.3],[768.7,-452.7],[775.2,-451.8],[773.2,-448],[770.1,-449.3],[768.3,-445.3],[765.8,-446.3]],height:14,estimatedHeight:!0,at:1024,kind:"yes"},{id:"476740637",name:"",points:[[928.6,-434.9],[930.4,-428.8],[939.4,-431.4],[937.6,-437.6],[928.6,-434.9]],height:14,estimatedHeight:!0,at:1185,kind:"yes"},{id:"476740638",name:"",points:[[822.5,-413.5],[819.2,-424.6],[813,-422.7],[810.1,-416.2],[811.4,-411.2],[815.6,-412.4],[815.8,-411.7],[822.5,-413.5]],height:14,estimatedHeight:!0,at:1067,kind:"apartments"},{id:"476740640",name:"",points:[[768.9,-481.5],[759,-477.2],[765.2,-462.7],[774.7,-466.7],[772,-473.3],[770.6,-472.7],[769.6,-475.3],[771.2,-476],[768.9,-481.5]],height:14,estimatedHeight:!0,at:1025,kind:"yes"},{id:"476740641",name:"",points:[[612.8,-448.8],[617.9,-437.7],[638.3,-448.4],[632.9,-458.2],[636.1,-459.9],[634.2,-463.3],[623.4,-457.9],[624.8,-455.4],[612.8,-448.8]],height:14,estimatedHeight:!0,at:876,kind:"apartments"},{id:"476740644",name:"",points:[[873.5,-443.3],[871.2,-448.6],[869.4,-454.8],[857.7,-481],[863.4,-483.4],[862.8,-485.1],[869,-487.8],[877.9,-464.9],[885,-448.1],[873.5,-443.3]],height:14,estimatedHeight:!0,at:1124,kind:"yes"},{id:"476740646",name:"",points:[[785.5,-426.7],[790.8,-424.4],[796.2,-436.4],[790.5,-438.9],[785.5,-426.7]],height:14,estimatedHeight:!0,at:1040,kind:"apartments"},{id:"476740648",name:"",points:[[761.8,-436.4],[767.5,-433.9],[771.6,-444],[765.8,-446.3],[761.8,-436.4]],height:14,estimatedHeight:!0,at:1020,kind:"yes"},{id:"476740649",name:"",points:[[890.9,-433.3],[885,-448.1],[873.5,-443.3],[879.5,-429.6],[890.9,-433.3]],height:14,estimatedHeight:!0,at:1126,kind:"yes"},{id:"476740650",name:"Convento delle Fanciulle del Ceppo",points:[[630.2,-509],[663.7,-478.9],[657.2,-471.7],[623.7,-501.8],[630.2,-509]],height:14,estimatedHeight:!0,at:924,kind:"apartments"},{id:"476740652",name:"",points:[[641.8,-485.6],[651,-467.9],[632.9,-458.2],[638.3,-448.4],[675.3,-467.9],[663.7,-478.9],[657.2,-471.7],[641.8,-485.6]],height:14,estimatedHeight:!0,at:899,kind:"yes"},{id:"476740653",name:"",points:[[810.1,-416.2],[814.3,-425.6],[806.5,-429],[802.3,-419.7],[810.1,-416.2]],height:14,estimatedHeight:!0,at:1056,kind:"yes"},{id:"476740658",name:"",points:[[877.9,-464.9],[885,-448.1],[890.9,-433.3],[901.2,-436.1],[888.8,-469.7],[877.9,-464.9]],height:14,estimatedHeight:!0,at:1138,kind:"yes"},{id:"476740660",name:"",points:[[712.8,-456.8],[735.8,-446.9],[740,-457.2],[730.2,-460.8],[728.6,-464.3],[712.9,-458.4],[712.8,-456.8]],height:14,estimatedHeight:!0,at:993,kind:"apartments"},{id:"476740663",name:"",points:[[828,-456.8],[862.1,-471.4],[869.4,-454.8],[865,-452.9],[864,-455.3],[860.8,-453.9],[857.5,-461.7],[836.3,-452.7],[839.4,-445.5],[833.7,-443.2],[828,-456.8]],height:14,estimatedHeight:!0,at:1086,kind:"yes"},{id:"476740665",name:"",points:[[790.8,-424.4],[802.3,-419.7],[807.4,-431.4],[803.8,-433],[802.9,-431.3],[798.8,-432.7],[800.9,-437],[797.3,-438.8],[790.8,-424.4]],height:14,estimatedHeight:!0,at:1049,kind:"apartments"},{id:"476740666",name:"",points:[[740,-457.2],[742.9,-456],[744,-459.2],[749.8,-461.7],[750.9,-457.9],[752.1,-457.4],[754.7,-458.2],[748.5,-472.7],[737.2,-467.8],[740.9,-458.6],[740,-457.2]],height:14,estimatedHeight:!0,at:1011,kind:"yes"},{id:"476740667",name:"",points:[[835.7,-438.1],[833.7,-443.2],[836.5,-444.2],[838.5,-439.2],[835.7,-438.1]],height:14,estimatedHeight:!0,at:1087,kind:"yes"},{id:"476740668",name:"",points:[[631.6,-494.7],[621.4,-489.5],[622.1,-487.9],[599.3,-477.6],[612.8,-448.8],[624.8,-455.4],[615,-473.4],[641.8,-485.6],[631.6,-494.7]],height:14,estimatedHeight:!0,at:874,kind:"yes"},{id:"476740669",name:"",points:[[565.9,-446.6],[587.7,-457.8],[586.6,-460],[581.1,-457.3],[578.5,-462.5],[562.3,-454],[565.9,-446.6]],height:13.2,estimatedHeight:!1,at:828,kind:"apartments"},{id:"476740670",name:"",points:[[767.5,-433.9],[774.7,-431.1],[779.4,-442.6],[772.2,-445.6],[767.5,-433.9]],height:14,estimatedHeight:!0,at:1026,kind:"apartments"},{id:"476740671",name:"",points:[[820.5,-454],[816,-465.5],[811,-463.5],[815.5,-452.1],[820.5,-454]],height:14,estimatedHeight:!0,at:1071,kind:"yes"},{id:"476740672",name:"",points:[[820.4,-436.5],[833.7,-443.2],[828,-456.8],[815.5,-452.1],[820.4,-436.5]],height:14,estimatedHeight:!0,at:1071,kind:"yes"},{id:"476740673",name:"",points:[[795.5,-443.8],[792.6,-450.7],[796.9,-452.7],[788.9,-472.5],[804.4,-478.7],[811,-463.5],[815.5,-452.1],[795.5,-443.8]],height:14,estimatedHeight:!0,at:1049,kind:"yes"},{id:"476740674",name:"",points:[[735.8,-446.9],[746.1,-442.8],[750.3,-452.9],[740,-457.2],[735.8,-446.9]],height:14,estimatedHeight:!0,at:1002,kind:"apartments"},{id:"476740675",name:"",points:[[756.6,-438.5],[761.8,-436.4],[766.1,-447.1],[760.9,-449.2],[756.6,-438.5]],height:14,estimatedHeight:!0,at:1015,kind:"yes"},{id:"476740676",name:"",points:[[746.1,-442.8],[756.6,-438.5],[760.7,-448.6],[750.3,-452.9],[746.1,-442.8]],height:14,estimatedHeight:!0,at:1010,kind:"apartments"},{id:"476740678",name:"",points:[[759,-477.2],[748.5,-472.7],[754.7,-458.2],[765.2,-462.7],[759,-477.2]],height:14,estimatedHeight:!0,at:1014,kind:"yes"},{id:"476740681",name:"",points:[[774.7,-431.1],[785.5,-426.7],[789.5,-436.3],[781.3,-439.6],[782,-441.5],[779.4,-442.6],[774.7,-431.1]],height:14,estimatedHeight:!0,at:1035,kind:"apartments"},{id:"476740682",name:"",points:[[863,-425.1],[856.7,-439.7],[861.5,-441.6],[856,-454.5],[838.8,-446.8],[839.4,-445.5],[836.5,-444.2],[841.4,-432],[842.5,-432.3],[846.7,-420.7],[863,-425.1]],height:14,estimatedHeight:!0,at:1109,kind:"yes"},{id:"476740685",name:"",points:[[879.4,-429.4],[871.2,-448.6],[860.4,-444.2],[861.5,-441.6],[856.7,-439.7],[863.3,-424.6],[879.4,-429.4]],height:14,estimatedHeight:!0,at:1109,kind:"yes"},{id:"476740687",name:"",points:[[804.4,-478.7],[798.5,-493.5],[778.5,-485.3],[784.6,-470.7],[804.4,-478.7]],height:14,estimatedHeight:!0,at:1046,kind:"yes"},{id:"476740689",name:"",points:[[607.9,-446.6],[599.1,-442.1],[600,-440.4],[592,-436],[593.6,-432.6],[586.8,-429.1],[590.1,-422.8],[613,-435.5],[607.9,-446.6]],height:14,estimatedHeight:!0,at:847,kind:"apartments"},{id:"476740691",name:"",points:[[574.8,-429.2],[590.1,-436.8],[589.6,-437.7],[594.5,-440.6],[590.5,-448.6],[588.1,-447.2],[570.4,-438],[574.8,-429.2]],height:14,estimatedHeight:!0,at:832,kind:"apartments"},{id:"476740692",name:"",points:[[820.4,-458.3],[815.5,-470.5],[823.7,-473.8],[822.1,-477.8],[848.7,-488.5],[849.5,-486.5],[851.3,-487.2],[855,-477.5],[856.8,-473.5],[847.1,-469.6],[846.5,-471.2],[829.6,-464.4],[830.4,-462.4],[820.4,-458.3]],height:14,estimatedHeight:!0,at:1077,kind:"yes"},{id:"476740694",name:"",points:[[812.6,-434.7],[820.4,-436.5],[815.5,-452.1],[807.5,-448.8],[812.6,-434.7]],height:14,estimatedHeight:!0,at:1071,kind:"yes"},{id:"476740695",name:"",points:[[858.6,-469.8],[855,-477.5],[858.6,-479.2],[862.1,-471.4],[858.6,-469.8]],height:14,estimatedHeight:!0,at:1117,kind:"yes"},{id:"476894503",name:"",points:[[559.6,-236.8],[576.3,-243.6],[577.8,-239.8],[594.5,-246.5],[593.1,-249.7],[588,-247.7],[585.6,-253.1],[575.2,-248.9],[573.4,-252.4],[556.1,-245.3],[559.6,-236.8]],height:13.2,estimatedHeight:!1,at:783,kind:"apartments"},{id:"476894504",name:"",points:[[581.6,-276.9],[588.5,-259.8],[590.7,-260.7],[592.8,-255.1],[595.4,-256.2],[586.5,-278.1],[581.6,-276.9]],height:14,estimatedHeight:!0,at:798,kind:"apartments"},{id:"476894506",name:"",points:[[558.5,-271.2],[562.1,-262.3],[564.7,-263.4],[566.1,-259.1],[569.9,-260.7],[571.4,-257.1],[573.9,-257.9],[574.6,-256.1],[576.5,-256.8],[569.3,-273.9],[558.5,-271.2]],height:14,estimatedHeight:!0,at:774,kind:"apartments"},{id:"476894511",name:"",points:[[569.3,-273.9],[575.5,-259.2],[578.8,-260.7],[581.6,-253.8],[587.2,-256.1],[588.2,-253.5],[590.6,-254.5],[581.6,-276.9],[569.3,-273.9]],height:14,estimatedHeight:!0,at:785,kind:"apartments"},{id:"476894512",name:"",points:[[675.6,-299.3],[680.8,-282.7],[683.8,-283.6],[684.1,-282.4],[687.1,-283.1],[681.3,-300.8],[675.6,-299.3]],height:14,estimatedHeight:!0,at:894,kind:"yes"},{id:"476894514",name:"",points:[[696.8,-267.3],[701.4,-269],[698.2,-278.9],[693.7,-277.1],[696.8,-267.3]],height:14,estimatedHeight:!0,at:911,kind:"yes"},{id:"476894515",name:"",points:[[653.2,-293.7],[657.7,-279.5],[658.7,-279.9],[660.2,-275.6],[661.8,-276],[661.6,-277.4],[664,-278],[658.1,-294.9],[653.2,-293.7]],height:14,estimatedHeight:!0,at:872,kind:"yes"},{id:"476894517",name:"",points:[[692.7,-265.9],[696.8,-267.3],[691.2,-284.4],[687.1,-283.1],[692.7,-265.9]],height:14,estimatedHeight:!0,at:905,kind:"yes"},{id:"476894520",name:"",points:[[710.4,-272.4],[704.4,-287.3],[700.9,-286],[705.6,-270.6],[710.4,-272.4]],height:14,estimatedHeight:!0,at:919,kind:"yes"},{id:"476894521",name:"",points:[[730.2,-291.6],[722.1,-311],[718.5,-310],[724.9,-291.9],[722,-290.9],[723,-289.1],[730.2,-291.6]],height:14,estimatedHeight:!0,at:939,kind:"yes"},{id:"476894523",name:"",points:[[663.7,-296.3],[670.9,-277.5],[675.6,-279.7],[669.8,-297.9],[663.7,-296.3]],height:14,estimatedHeight:!0,at:883,kind:"yes"},{id:"476894526",name:"",points:[[642.6,-274.9],[645.4,-267.4],[661.8,-271.5],[659.9,-276.5],[649.7,-273.4],[648.7,-276.5],[642.6,-274.9]],height:14,estimatedHeight:!0,at:857,kind:"apartments"},{id:"476894528",name:"",points:[[648.3,-292.5],[652.3,-278.7],[650.4,-277.9],[651,-276],[654.1,-277],[653.8,-277.8],[654.9,-278.3],[655.9,-275.4],[658.7,-276.2],[653.2,-293.7],[648.3,-292.5]],height:14,estimatedHeight:!0,at:867,kind:"yes"},{id:"476894537",name:"",points:[[551,-257.7],[562.1,-262.3],[559.6,-268.4],[548.5,-263.7],[551,-257.7]],height:13.2,estimatedHeight:!1,at:774,kind:"apartments"},{id:"476894538",name:"",points:[[694.5,-304.1],[698.6,-292.5],[701,-293.2],[701.3,-291.7],[699.1,-291.1],[700.9,-286],[704.4,-287.3],[700.8,-297.4],[698.5,-305.1],[694.5,-304.1]],height:14,estimatedHeight:!0,at:914,kind:"yes"},{id:"476894540",name:"",points:[[674.7,-259.1],[682.3,-261.9],[677.3,-275.6],[663.9,-272.1],[666,-265.9],[668.5,-266.7],[669.5,-263.8],[672.8,-264.7],[674.7,-259.1]],height:14,estimatedHeight:!0,at:876,kind:"yes"},{id:"476894542",name:"",points:[[602.2,-282],[597.1,-280.7],[601.5,-268.3],[606.4,-270],[602.2,-282]],height:14,estimatedHeight:!0,at:814,kind:"yes"},{id:"476894543",name:"",points:[[681.3,-300.8],[686.5,-285.1],[688.1,-285.7],[688.7,-283.6],[691.2,-284.4],[685.2,-301.7],[681.3,-300.8]],height:14,estimatedHeight:!0,at:900,kind:"yes"},{id:"476894545",name:"",points:[[682.3,-261.9],[686.9,-263.6],[682,-278.3],[677,-276.6],[682.3,-261.9]],height:14,estimatedHeight:!0,at:895,kind:"yes"},{id:"476894546",name:"",points:[[647.5,-261.4],[649.1,-256.9],[664.3,-261.3],[663.7,-262.8],[665.5,-263.2],[664.7,-265.4],[663.5,-265.3],[663.2,-266.2],[647.5,-261.4]],height:14,estimatedHeight:!0,at:874,kind:"yes"},{id:"476894548",name:"",points:[[648.3,-292.5],[643.7,-291.3],[647.5,-279.9],[648.9,-280.3],[649.5,-277.6],[652.3,-278.7],[648.3,-292.5]],height:14,estimatedHeight:!0,at:862,kind:"yes"},{id:"476894549",name:"",points:[[710.4,-272.4],[714.5,-273.9],[711.2,-282.9],[706.8,-281.2],[710.4,-272.4]],height:14,estimatedHeight:!0,at:924,kind:"yes"},{id:"476894551",name:"",points:[[685.2,-301.7],[692.5,-280.5],[694,-281.3],[693,-283.9],[694.9,-284.5],[693.8,-288.2],[694.8,-288.5],[689.7,-302.8],[685.2,-301.7]],height:14,estimatedHeight:!0,at:904,kind:"yes"},{id:"476894552",name:"",points:[[703.4,-306.3],[710.7,-284.6],[714.9,-286],[707.4,-307.3],[703.4,-306.3]],height:14,estimatedHeight:!0,at:923,kind:"yes"},{id:"476894554",name:"",points:[[669.8,-297.9],[675.9,-278.2],[678.7,-279.1],[677.9,-282.5],[680.6,-283.4],[675.6,-299.3],[669.8,-297.9]],height:14,estimatedHeight:!0,at:888,kind:"yes"},{id:"476894560",name:"",points:[[627.4,-252.2],[605.4,-245.3],[609.7,-234.1],[630.4,-241.2],[627.4,-252.2]],height:14,estimatedHeight:!0,at:836,kind:"yes"},{id:"476894562",name:"",points:[[564.8,-224.3],[585.7,-232.9],[584.2,-236.6],[563.1,-228.4],[564.8,-224.3]],height:13.2,estimatedHeight:!1,at:790,kind:"apartments"},{id:"476894563",name:"",points:[[718.9,-275.5],[734.4,-281.3],[730.2,-291.6],[720.9,-288.3],[721.6,-286.1],[715.9,-284.2],[718.9,-275.5]],height:14,estimatedHeight:!0,at:945,kind:"yes"},{id:"476894566",name:"",points:[[558.5,-271.2],[546.7,-268.1],[548.5,-263.7],[559.6,-268.4],[558.5,-271.2]],height:13.2,estimatedHeight:!1,at:762,kind:"apartments"},{id:"476894568",name:"",points:[[561.2,-233],[574.6,-238.3],[573.1,-242.2],[559.6,-236.8],[561.2,-233]],height:14,estimatedHeight:!0,at:780,kind:"apartments"},{id:"476894571",name:"",points:[[563.1,-228.4],[580.9,-235.3],[580.2,-237.2],[577.1,-235.9],[575.8,-239],[574.6,-238.3],[561.2,-233],[563.1,-228.4]],height:14,estimatedHeight:!0,at:782,kind:"apartments"},{id:"476894576",name:"",points:[[591.3,-279.3],[598.7,-261.1],[603.7,-262.3],[597.1,-280.7],[591.3,-279.3]],height:14,estimatedHeight:!0,at:808,kind:"apartments"},{id:"476894588",name:"",points:[[642.1,-262.2],[625.9,-257.1],[627.4,-252.2],[643.8,-257.3],[642.1,-262.2]],height:14,estimatedHeight:!0,at:853,kind:"apartments"},{id:"476894590",name:"",points:[[586.5,-278.1],[595.4,-256.2],[598,-257.4],[596.1,-262],[598.1,-262.6],[591.3,-279.3],[586.5,-278.1]],height:14,estimatedHeight:!0,at:803,kind:"semidetached_house"},{id:"476894594",name:"",points:[[601.6,-253.6],[603,-250.1],[611.4,-253],[610,-256.6],[601.6,-253.6]],height:14,estimatedHeight:!0,at:820,kind:"yes"},{id:"476894599",name:"",points:[[638.6,-271.3],[627.5,-267.3],[628.1,-266],[626,-265.1],[625.2,-266.5],[622,-265.1],[622.5,-263.6],[619.6,-262.5],[620.4,-260.4],[627,-262.7],[628.5,-257.9],[642.1,-262.2],[638.6,-271.3]],height:14,estimatedHeight:!0,at:852,kind:"yes"},{id:"476894604",name:"",points:[[554.2,-250],[571.4,-257.1],[569.9,-260.7],[552.7,-253.5],[554.2,-250]],height:16.5,estimatedHeight:!1,at:782,kind:"apartments"},{id:"476894605",name:"",points:[[638.6,-271.3],[632.2,-289.4],[622.2,-286.9],[625.9,-276.7],[628.4,-277.7],[629.1,-276.1],[626.5,-275.2],[629.2,-267.8],[638.6,-271.3]],height:14,estimatedHeight:!0,at:840,kind:"apartments"},{id:"476894606",name:"",points:[[580.9,-235.3],[579.1,-240.4],[594.5,-246.5],[596.6,-241.4],[580.9,-235.3]],height:14,estimatedHeight:!0,at:802,kind:"yes"},{id:"476894608",name:"",points:[[598.7,-261.1],[601.6,-253.6],[611.7,-257.3],[609.4,-262.5],[604.3,-260.8],[603.7,-262.3],[598.7,-261.1]],height:14,estimatedHeight:!0,at:810,kind:"yes"},{id:"476894609",name:"",points:[[643.7,-291.3],[637.3,-289.7],[642.6,-274.9],[648.7,-276.5],[643.7,-291.3]],height:14,estimatedHeight:!0,at:856,kind:"apartments"},{id:"476894615",name:"",points:[[698.5,-305.1],[705.2,-285.4],[707.5,-286.3],[708.3,-283.9],[710.7,-284.6],[703.4,-306.3],[698.5,-305.1]],height:14,estimatedHeight:!0,at:918,kind:"yes"},{id:"476894617",name:"",points:[[612.4,-284.5],[607.9,-283.4],[613.7,-267.9],[617.5,-269.6],[612.4,-284.5]],height:14,estimatedHeight:!0,at:825,kind:"yes"},{id:"476894620",name:"",points:[[556.1,-245.3],[573.4,-252.4],[571.4,-257.1],[554.2,-250],[556.1,-245.3]],height:13.2,estimatedHeight:!1,at:783,kind:"apartments"},{id:"476894624",name:"",points:[[625.1,-262.1],[626.7,-257.4],[625.9,-257.1],[626.3,-256],[622.5,-254.6],[620.4,-260.4],[625.1,-262.1]],height:14,estimatedHeight:!0,at:836,kind:"yes"},{id:"476894625",name:"",points:[[622.2,-286.9],[618.1,-285.9],[625.2,-266.5],[629.2,-267.8],[622.2,-286.9]],height:14,estimatedHeight:!0,at:836,kind:"yes"},{id:"476894626",name:"",points:[[645.4,-267.4],[647.5,-261.4],[663.2,-266.2],[661.8,-271.5],[645.4,-267.4]],height:14,estimatedHeight:!0,at:857,kind:"apartments"},{id:"476894629",name:"",points:[[618.1,-285.9],[612.4,-284.5],[618.4,-266.8],[620.8,-267.9],[622,-265.1],[625.2,-266.5],[618.1,-285.9]],height:14,estimatedHeight:!0,at:830,kind:"yes"},{id:"476894630",name:"",points:[[552.7,-253.5],[564.3,-258.4],[563.5,-260.6],[565.4,-261.3],[564.7,-263.4],[551,-257.7],[552.7,-253.5]],height:16.5,estimatedHeight:!1,at:778,kind:"apartments"},{id:"476894631",name:"",points:[[643.8,-257.3],[627.4,-252.2],[629,-246.8],[645.7,-252.1],[643.8,-257.3]],height:14,estimatedHeight:!0,at:853,kind:"apartments"},{id:"476894633",name:"",points:[[701.4,-269],[703.8,-269.9],[702,-276.1],[699.4,-275.3],[701.4,-269]],height:14,estimatedHeight:!0,at:913,kind:"yes"},{id:"476894636",name:"",points:[[686.9,-263.6],[692.7,-265.9],[687.1,-283.1],[684.1,-282.4],[684.8,-280.5],[681.7,-279.3],[686.9,-263.6]],height:14,estimatedHeight:!0,at:898,kind:"yes"},{id:"476894637",name:"",points:[[658.1,-294.9],[664,-278],[668,-279.3],[669.1,-276.7],[670.9,-277.5],[663.7,-296.3],[658.1,-294.9]],height:14,estimatedHeight:!0,at:877,kind:"yes"},{id:"476894638",name:"",points:[[645.7,-252.1],[629,-246.8],[631.6,-236.7],[633.8,-237.2],[635,-232.7],[651.1,-237.7],[645.7,-252.1]],height:14,estimatedHeight:!0,at:854,kind:"apartments"},{id:"476894640",name:"",points:[[607.9,-283.4],[602.2,-282],[608.4,-264.5],[611.9,-265.7],[612.3,-264.5],[614.7,-265.2],[607.9,-283.4]],height:14,estimatedHeight:!0,at:819,kind:"yes"},{id:"476952759",name:"",points:[[343.4,-181.9],[333.7,-178.2],[335,-174.9],[327.6,-172.8],[327.5,-171.6],[332.2,-151.4],[346.5,-154.4],[347.3,-149.8],[359.4,-152.7],[354.2,-167.3],[349.6,-173.7],[347.1,-172.8],[343.4,-181.9]],height:13.2,estimatedHeight:!1,at:542,kind:"apartments"},{id:"476952763",name:"",points:[[272.3,-168.2],[275,-164.3],[286.3,-170],[293.9,-172.9],[292.8,-176.6],[286.1,-174.5],[278.8,-171.8],[279.1,-170.6],[272.3,-168.2]],height:14,estimatedHeight:!0,at:495,kind:"yes"},{id:"476952764",name:"",points:[[275,-164.3],[277.9,-160.7],[287.7,-167.8],[286.3,-170],[275,-164.3]],height:14,estimatedHeight:!0,at:487,kind:"yes"},{id:"476952769",name:"",points:[[298.6,-196.7],[288.3,-194.3],[291.4,-183.2],[301,-185.9],[298.6,-196.7]],height:14,estimatedHeight:!0,at:495,kind:"apartments"},{id:"476952770",name:"",points:[[447,-190.7],[437.4,-217.6],[453.8,-222.5],[450.1,-234.7],[421.5,-225.9],[434.9,-187.8],[447,-190.7]],height:16.5,estimatedHeight:!1,at:659,kind:"apartments"},{id:"476952771",name:"",points:[[457.4,-193.6],[449.8,-221.3],[453.8,-222.5],[461.2,-194.6],[457.4,-193.6]],height:14,estimatedHeight:!0,at:659,kind:"garages"},{id:"476952774",name:"",points:[[296,-145.8],[293.8,-153.2],[295.8,-154],[295.2,-155.1],[291.2,-153.7],[283.1,-150.4],[286.2,-143.5],[296,-145.8]],height:14,estimatedHeight:!0,at:492,kind:"yes"},{id:"476952776",name:"",points:[[342.4,-148.7],[341.6,-153.2],[332.2,-151.4],[327.5,-171.6],[318.9,-169.2],[326.5,-144.2],[342.4,-148.7]],height:6.6,estimatedHeight:!1,at:520,kind:"retail"},{id:"476952779",name:"",points:[[317.7,-201.4],[320.6,-191.5],[326.3,-193.3],[327.6,-188.9],[322,-187.3],[323.5,-182.2],[341,-187.8],[330.8,-204.5],[317.7,-201.4]],height:14,estimatedHeight:!0,at:521,kind:"apartments"},{id:"476952781",name:"",points:[[298.6,-196.7],[301,-185.9],[308.4,-188],[306,-198.5],[298.6,-196.7]],height:14,estimatedHeight:!0,at:505,kind:"apartments"},{id:"476952782",name:"",points:[[273.7,-176.9],[267.4,-175.1],[272.3,-168.2],[279.1,-170.6],[278.8,-171.8],[286.1,-174.5],[284.5,-179.5],[273.7,-176.9]],height:14,estimatedHeight:!0,at:487,kind:"yes"},{id:"476952787",name:"",points:[[308.4,-188],[291.4,-183.2],[292.8,-176.6],[293.9,-172.9],[299.3,-150.6],[297.2,-150.1],[296.7,-151.8],[294.5,-150.9],[296,-145.8],[301.2,-147.2],[301.6,-145.6],[311.9,-148.2],[313.7,-141.3],[320.6,-143],[318.3,-152.4],[312.7,-151.6],[308.4,-165.9],[313.1,-167.4],[308.4,-188]],height:13.2,estimatedHeight:!1,at:514,kind:"apartments"},{id:"476952788",name:"",points:[[288.3,-194.3],[269.3,-189.7],[273.7,-176.9],[291.8,-181.6],[288.3,-194.3]],height:14,estimatedHeight:!0,at:475,kind:"apartments"},{id:"476952793",name:"",points:[[341,-187.8],[327.4,-183.4],[329.4,-176.6],[343.4,-181.9],[341,-187.8]],height:14,estimatedHeight:!0,at:542,kind:"apartments"},{id:"476952798",name:"",points:[[283.1,-150.4],[291.2,-153.7],[296.6,-155.6],[292,-170.6],[277.9,-160.7],[279.7,-158],[283.1,-150.4]],height:14,estimatedHeight:!0,at:493,kind:"yes"},{id:"476952801",name:"",points:[[317.7,-201.4],[310.8,-199.8],[318.9,-169.2],[327.5,-171.6],[327.6,-172.8],[326.7,-175.8],[329.4,-176.6],[327.4,-183.4],[323.5,-182.2],[322,-187.3],[327.6,-188.9],[326.3,-193.3],[320.6,-191.5],[317.7,-201.4]],height:13.2,estimatedHeight:!1,at:519,kind:"apartments"},{id:"478224226",name:"",points:[[442.3,-395.7],[434.4,-391.4],[428.8,-404.5],[436.7,-408.2],[442.3,-395.7]],height:14,estimatedHeight:!0,at:687,kind:"yes"},{id:"478224227",name:"",points:[[433.3,-415.5],[436.7,-408.2],[427.7,-403.9],[424.2,-410.8],[426.2,-411.8],[427.2,-409.6],[429,-410.7],[428,-412.8],[433.3,-415.5]],height:14,estimatedHeight:!0,at:685,kind:"yes"},{id:"478224228",name:"",points:[[535.2,-282.8],[521.2,-278.5],[522.1,-275],[520.8,-274.9],[521.4,-273.5],[537.1,-277.7],[535.2,-282.8]],height:14,estimatedHeight:!0,at:755,kind:"apartments"},{id:"478224229",name:"",points:[[509.2,-318.8],[515.8,-303.8],[517.5,-304.4],[516.2,-307],[518.9,-308.1],[513.9,-319.8],[509.2,-318.8]],height:14,estimatedHeight:!0,at:739,kind:"apartments"},{id:"478224231",name:"",points:[[489.4,-277.3],[501,-282.1],[500.1,-284.4],[501.7,-285.2],[502.6,-282.8],[506.2,-284.2],[503.3,-291],[502.3,-290.2],[486.5,-284],[489.4,-277.3]],height:14,estimatedHeight:!0,at:726,kind:"apartments"},{id:"478224233",name:"",points:[[533.7,-287.1],[516.6,-281.7],[517.3,-279.7],[515.8,-279.1],[515.1,-281.2],[509.4,-280.2],[511.4,-275.5],[535.2,-282.8],[533.7,-287.1]],height:14,estimatedHeight:!0,at:729,kind:"apartments"},{id:"478224234",name:"",points:[[418.8,-399.3],[428.8,-404.5],[434.4,-391.4],[425.3,-386.5],[418.8,-399.3]],height:14,estimatedHeight:!0,at:677,kind:"apartments"},{id:"478224237",name:"",points:[[458.6,-358.7],[460.6,-354.2],[446.5,-347],[444.2,-351.1],[458.6,-358.7]],height:14,estimatedHeight:!0,at:687,kind:"apartments"},{id:"478224238",name:"",points:[[481.5,-296.3],[487.7,-298.7],[482.9,-311.1],[476.3,-309],[481.5,-296.3]],height:14,estimatedHeight:!0,at:712,kind:"apartments"},{id:"478224239",name:"",points:[[438.2,-362.5],[446.3,-367],[448.3,-362.8],[446.4,-361.8],[446.8,-360.7],[448.7,-361.8],[450,-359.3],[442.1,-355.1],[438.2,-362.5]],height:14,estimatedHeight:!0,at:685,kind:"apartments"},{id:"478224240",name:"",points:[[482.9,-311.1],[487.7,-298.7],[489.2,-295.9],[492.7,-297.3],[493.3,-296],[494.8,-296.6],[498.5,-288.7],[502.3,-290.2],[498.1,-298],[494.6,-306.3],[492.2,-314],[482.9,-311.1]],height:14,estimatedHeight:!0,at:722,kind:"apartments"},{id:"478224241",name:"",points:[[417.5,-424.2],[424.2,-410.8],[421.1,-409.1],[423.5,-403.3],[425,-404],[425.7,-402.7],[418.8,-399.3],[407.7,-419.3],[417.5,-424.2]],height:14,estimatedHeight:!0,at:675,kind:"apartments"},{id:"478224242",name:"",points:[[537.1,-277.7],[525.2,-274.5],[527.1,-268],[539.4,-271.5],[537.1,-277.7]],height:13.2,estimatedHeight:!1,at:742,kind:"apartments"},{id:"478224243",name:"",points:[[524.9,-307.1],[519,-320.9],[513.9,-319.8],[520.2,-305.4],[524.9,-307.1]],height:9.899999999999999,estimatedHeight:!1,at:744,kind:"apartments"},{id:"478224244",name:"",points:[[444,-392.2],[446.4,-386.9],[430,-377.4],[427.1,-383],[444,-392.2]],height:14,estimatedHeight:!0,at:679,kind:"apartments"},{id:"478224245",name:"",points:[[458.6,-358.7],[444.2,-351.1],[442.1,-355.1],[456.7,-362.9],[458.6,-358.7]],height:14,estimatedHeight:!0,at:686,kind:"apartments"},{id:"478224246",name:"",points:[[527.8,-300.1],[524.9,-307.1],[515.8,-303.8],[518.5,-296.6],[527.8,-300.1]],height:14,estimatedHeight:!0,at:751,kind:"apartments"},{id:"478224247",name:"",points:[[529.5,-295.9],[511.5,-289.8],[513,-285.4],[531.8,-291],[529.5,-295.9]],height:14,estimatedHeight:!0,at:753,kind:"apartments"},{id:"478224248",name:"",points:[[444,-392.2],[427.1,-383],[425.3,-386.5],[442.3,-395.7],[444,-392.2]],height:14,estimatedHeight:!0,at:678,kind:"apartments"},{id:"478224249",name:"",points:[[494.4,-265.5],[508.6,-270.7],[507.1,-274.1],[508.6,-274.5],[510.3,-271.3],[512.8,-272.7],[510.7,-277.1],[492.3,-270.4],[494.4,-265.5]],height:14,estimatedHeight:!0,at:729,kind:"apartments"},{id:"478224252",name:"",points:[[515.4,-264.6],[513.5,-271],[512.8,-272.7],[510.3,-271.3],[510.6,-270.2],[508.9,-269.6],[508.6,-270.7],[494.4,-265.5],[497.1,-259.3],[515.4,-264.6]],height:14,estimatedHeight:!0,at:730,kind:"apartments"},{id:"478224253",name:"",points:[[527.8,-300.1],[518.5,-296.6],[515.8,-295.4],[516.3,-293.8],[514.1,-293],[515,-291],[529.5,-295.9],[527.8,-300.1]],height:14,estimatedHeight:!0,at:752,kind:"apartments"},{id:"478224254",name:"",points:[[490.7,-274.2],[501.4,-278.3],[501.2,-279.6],[503.5,-280.5],[504,-279.3],[508.9,-281.2],[507.3,-284.7],[489.4,-277.3],[490.7,-274.2]],height:14,estimatedHeight:!0,at:728,kind:"apartments"},{id:"478224255",name:"",points:[[503.1,-317],[512.9,-295.6],[515.4,-296.5],[515.8,-295.4],[518.5,-296.6],[516.4,-302.2],[513.2,-301],[512.5,-302.7],[515.8,-303.8],[509.2,-318.8],[503.1,-317]],height:14,estimatedHeight:!0,at:733,kind:"apartments"},{id:"478224257",name:"",points:[[492.2,-314],[494.6,-306.3],[498.1,-298],[502.3,-290.2],[503.3,-291],[504.8,-287.2],[510,-289.3],[505.8,-298.1],[502.2,-296.6],[501.1,-299.1],[504.4,-300.4],[497.6,-315.8],[492.2,-314]],height:14,estimatedHeight:!0,at:727,kind:"apartments"},{id:"478224258",name:"",points:[[527.1,-268],[525.2,-274.5],[521.4,-273.5],[520,-278.1],[511.4,-275.5],[513.5,-271],[515.4,-264.6],[527.1,-268]],height:14,estimatedHeight:!0,at:738,kind:"apartments"},{id:"478224259",name:"",points:[[453.1,-370.9],[456.7,-362.9],[450,-359.3],[446.3,-367],[453.1,-370.9]],height:14,estimatedHeight:!0,at:695,kind:"yes"},{id:"478224261",name:"",points:[[531.8,-291],[519,-287.2],[519.3,-285.6],[517.5,-285],[517.1,-286.6],[513,-285.4],[514.2,-281],[533.7,-287.1],[531.8,-291]],height:14,estimatedHeight:!0,at:754,kind:"apartments"},{id:"478224263",name:"",points:[[492.3,-270.4],[510.7,-277.1],[508.9,-281.2],[490.7,-274.2],[492.3,-270.4]],height:14,estimatedHeight:!0,at:728,kind:"apartments"},{id:"478224264",name:"",points:[[481.5,-296.3],[486.5,-284],[498.5,-288.7],[496.4,-293.1],[491.8,-291.3],[490.1,-296.3],[489.2,-295.9],[487.7,-298.7],[481.5,-296.3]],height:14,estimatedHeight:!0,at:713,kind:"apartments"},{id:"479774481",name:"",points:[[-29.4,-160.3],[-24.5,-137.2],[-13.4,-137.7],[-13.4,-145.8],[-10.1,-146.1],[-10.3,-149.4],[-13,-152],[-16.4,-152],[-17.4,-155.8],[-12.9,-156],[-12.9,-158.4],[-14.3,-158.4],[-14.6,-162.1],[-19.6,-162.4],[-19.6,-160.3],[-29.4,-160.3]],height:14,estimatedHeight:!0,at:147,kind:"house"},{id:"479774482",name:"",points:[[69.5,-210.5],[69.1,-220.6],[61.3,-219.8],[61.9,-209.5],[69.5,-210.5]],height:14,estimatedHeight:!0,at:287,kind:"yes"},{id:"479774483",name:"",points:[[33.2,-189.7],[45.1,-190.9],[44.1,-207.6],[40.4,-207.5],[41.2,-200.6],[36,-199.9],[35.3,-201.9],[31.9,-202],[33.2,-189.7]],height:14,estimatedHeight:!0,at:257,kind:"yes"},{id:"479774484",name:"",points:[[7.2,-195.1],[7.8,-186.8],[19.1,-188.1],[18.4,-196.6],[7.2,-195.1]],height:13.2,estimatedHeight:!1,at:187,kind:"yes"},{id:"479774485",name:"",points:[[28.1,-216.4],[28.4,-206.2],[36.9,-205.7],[36.1,-217.2],[28.1,-216.4]],height:14,estimatedHeight:!0,at:246,kind:"yes"},{id:"479774486",name:"",points:[[25.9,-188.9],[33.2,-189.7],[32.3,-196.5],[30,-196.2],[29.5,-198.2],[32.1,-198.4],[31.9,-202],[25.4,-201.8],[25.9,-188.9]],height:14,estimatedHeight:!0,at:242,kind:"yes"},{id:"479774487",name:"",points:[[7.2,-195.1],[25.6,-197.6],[25.4,-201.8],[24.7,-206],[28.4,-206.2],[28.1,-216.4],[5.9,-214.6],[7.2,-195.1]],height:9.899999999999999,estimatedHeight:!1,at:195,kind:"yes"},{id:"479774488",name:"",points:[[4.4,-158.8],[-12.9,-158.4],[-13,-152],[-10.3,-149.4],[-10.1,-146.1],[-13.4,-145.8],[-13.4,-139.9],[-7.2,-139.9],[-7.6,-133.5],[-13.6,-133.9],[-14,-122.9],[3.3,-122.6],[5.4,-148.9],[4.4,-158.8]],height:14,estimatedHeight:!0,at:149,kind:"apartments"},{id:"479774489",name:"",points:[[69.8,-204.5],[69.5,-210.5],[51.4,-208.1],[51.7,-203.5],[69.8,-204.5]],height:14,estimatedHeight:!0,at:286,kind:"yes"},{id:"479774490",name:"",points:[[19.1,-188.1],[25.9,-188.9],[25.6,-197.6],[18.4,-196.6],[19.1,-188.1]],height:14,estimatedHeight:!0,at:188,kind:"yes"},{id:"479774491",name:"",points:[[-13.6,-133.9],[-13.4,-137.7],[-24.5,-137.2],[-22.9,-129.6],[-23.1,-123.1],[-14,-122.9],[-13.6,-133.9]],height:14,estimatedHeight:!0,at:138,kind:"apartments"},{id:"479774492",name:"",points:[[42.6,-217.8],[42.9,-207.6],[51.4,-208.1],[61.9,-209.5],[61.3,-219.8],[42.6,-217.8]],height:14,estimatedHeight:!0,at:279,kind:"yes"},{id:"479774493",name:"",points:[[4.4,-158.8],[1.9,-185.4],[-30.5,-185.7],[-30.7,-166.2],[-29.4,-160.3],[-19.6,-160.3],[-19.7,-165.8],[-14.9,-165.8],[-14.3,-158.4],[4.4,-158.8]],height:14,estimatedHeight:!0,at:160,kind:"apartments"},{id:"479774494",name:"",points:[[36.1,-217.2],[36.9,-205.7],[34.8,-205.9],[35.3,-201.9],[36,-199.9],[41.2,-200.6],[40.4,-207.5],[42.9,-207.6],[42.6,-217.8],[36.1,-217.2]],height:14,estimatedHeight:!0,at:260,kind:"yes"},{id:"480014067",name:"",points:[[265.8,-171.3],[255.1,-185],[239.3,-185.1],[243.2,-171.6],[243.4,-168.5],[243.8,-167.3],[250,-168.5],[250.2,-166.9],[265.8,-171.3]],height:14,estimatedHeight:!0,at:445,kind:"apartments"},{id:"480014068",name:"",points:[[203.5,-222.1],[209.8,-225.2],[206.5,-231.7],[200.7,-228.4],[203.5,-222.1]],height:14,estimatedHeight:!0,at:425,kind:"yes"},{id:"480014069",name:"",points:[[200.3,-185.6],[188.6,-185.8],[188.5,-177.5],[188.7,-169.7],[194.4,-169.8],[194.6,-161.7],[189.3,-162.1],[188.6,-161.4],[188.9,-148.9],[197,-148.2],[203.1,-148.4],[202.8,-157.2],[197.5,-157],[197.4,-159.1],[202.8,-160],[200.3,-185.6]],height:14,estimatedHeight:!0,at:402,kind:"apartments"},{id:"480014070",name:"",points:[[209,-236.7],[204.3,-235.9],[209.8,-225.2],[214.7,-227.1],[209,-236.7]],height:14,estimatedHeight:!0,at:428,kind:"yes"},{id:"480014071",name:"",points:[[176.3,-191.2],[175.8,-211.9],[170.7,-211.7],[171.1,-191.2],[176.3,-191.2]],height:14,estimatedHeight:!0,at:387,kind:"yes"},{id:"480014072",name:"",points:[[185.9,-234.2],[170.3,-231.7],[170.7,-211.7],[184.9,-212.3],[184.1,-216.1],[182.1,-215.5],[181.9,-218.2],[185.5,-218.5],[185.3,-219.5],[190.4,-219.8],[185.9,-234.2]],height:14,estimatedHeight:!0,at:405,kind:"yes"},{id:"480014073",name:"",points:[[172.2,-159.7],[181.9,-160],[188.6,-161.4],[189.3,-162.1],[189,-168.9],[184.8,-168.8],[184.6,-171.8],[171.8,-171.6],[172.2,-159.7]],height:14,estimatedHeight:!0,at:384,kind:"apartments"},{id:"480014075",name:"",points:[[188.6,-185.8],[171.2,-186.2],[171.7,-177.4],[188.5,-177.5],[188.6,-185.8]],height:14,estimatedHeight:!0,at:385,kind:"apartments"},{id:"480014076",name:"",points:[[225.2,-185.4],[229.7,-161.7],[235.5,-162.7],[235.9,-160.1],[248.3,-162.5],[247,-167.8],[243.8,-167.3],[243.4,-168.5],[240.7,-167.9],[240.1,-171.5],[243.2,-171.6],[239.3,-185.1],[225.2,-185.4]],height:14,estimatedHeight:!0,at:438,kind:"apartments"},{id:"480014079",name:"",points:[[200.3,-185.6],[202.8,-160],[220,-161.4],[217.2,-185.3],[200.3,-185.6]],height:14,estimatedHeight:!0,at:413,kind:"apartments"},{id:"480014080",name:"",points:[[276.9,-133],[263.1,-132],[261,-144.5],[258.9,-144.3],[257.9,-150.5],[252.8,-149.5],[253.5,-140.7],[253.9,-123.9],[278,-124.1],[276.9,-133]],height:13.2,estimatedHeight:!1,at:449,kind:"apartments"},{id:"480014081",name:"",points:[[171.7,-177.4],[171.8,-171.6],[183.9,-171.7],[183.8,-177.4],[171.7,-177.4]],height:14,estimatedHeight:!0,at:384,kind:"apartments"},{id:"480014082",name:"",points:[[192,-122],[190.6,-138.1],[188.8,-137.9],[188.8,-135.7],[185.5,-135.7],[185.6,-137.1],[183.9,-137.1],[183.8,-140.2],[182.9,-140.2],[182.7,-146.6],[172.5,-147],[172.1,-134.7],[178.3,-135],[178.9,-121.7],[192,-122]],height:14,estimatedHeight:!0,at:382,kind:"apartments"},{id:"480014083",name:"",points:[[261,-144.5],[263.1,-132],[276.9,-133],[275.6,-147.7],[278.7,-148.8],[276.7,-152.7],[269.6,-149.9],[260.9,-148.8],[262.3,-144.7],[261,-144.5]],height:14,estimatedHeight:!0,at:473,kind:"apartments"},{id:"480014085",name:"",points:[[211.5,-205.1],[219.7,-209.8],[220.5,-208.9],[225.5,-211.3],[221,-219.2],[215.2,-215.7],[212.9,-219.8],[206.2,-216.4],[211.5,-205.1]],height:14,estimatedHeight:!0,at:430,kind:"yes"},{id:"480014086",name:"",points:[[229.6,-226.2],[221.4,-238.6],[209,-236.7],[219.1,-220],[223.9,-222.7],[229.6,-226.2]],height:14,estimatedHeight:!0,at:440,kind:"yes"},{id:"480014087",name:"",points:[[243.2,-205],[240,-209.8],[230.2,-204.9],[229.8,-205.8],[226.3,-204.6],[229.1,-198],[243.2,-205]],height:14,estimatedHeight:!0,at:451,kind:"apartments"},{id:"480014088",name:"",points:[[229.6,-226.2],[223.9,-222.7],[225.9,-219.6],[231.6,-223.1],[229.6,-226.2]],height:14,estimatedHeight:!0,at:445,kind:"apartments"},{id:"480014089",name:"",points:[[193.1,-191.2],[192.7,-213],[188.7,-212.1],[188.7,-208.1],[190.1,-208.1],[190,-206.1],[186.4,-206.2],[186.2,-208.5],[184.9,-208.3],[184.8,-191.2],[193.1,-191.2]],height:14,estimatedHeight:!0,at:409,kind:"apartments"},{id:"480014090",name:"",points:[[243.2,-205],[235.9,-201],[236.8,-198.9],[234.2,-197.6],[233.3,-199.8],[229.1,-198],[226.3,-204.6],[223.7,-203.7],[221.6,-209.4],[220.5,-208.9],[219.7,-209.8],[211.5,-205.1],[217.9,-190],[242.7,-190],[250.8,-193.2],[243.2,-205]],height:13.2,estimatedHeight:!1,at:435,kind:"apartments"},{id:"480014091",name:"",points:[[203.3,-216.7],[194.7,-235.6],[185.9,-234.2],[190.4,-219.8],[194.4,-220.1],[196.2,-215.1],[203.3,-216.7]],height:14,estimatedHeight:!0,at:413,kind:"yes"},{id:"480014092",name:"",points:[[207.4,-191.1],[214.9,-191.1],[203.3,-216.7],[196.2,-215.1],[194.5,-215],[193.1,-220],[185.3,-219.5],[187.4,-211.8],[192.7,-213],[192.8,-207.9],[200,-208.4],[199.7,-204.6],[200.3,-201.8],[204.7,-202.1],[207.4,-191.1]],height:14,estimatedHeight:!0,at:402,kind:"apartments"},{id:"480014093",name:"",points:[[240,-209.8],[235.7,-216.5],[225.2,-209.2],[228.1,-205.2],[229.8,-205.8],[230.2,-204.9],[240,-209.8]],height:14,estimatedHeight:!0,at:449,kind:"apartments"},{id:"480014095",name:"",points:[[269.6,-149.9],[267.1,-155.3],[274.4,-158.7],[271.1,-164.6],[265.8,-171.3],[250.2,-166.9],[251.9,-161.6],[253.2,-155.1],[259.2,-155.4],[260.9,-148.8],[269.6,-149.9]],height:14,estimatedHeight:!0,at:467,kind:"yes"},{id:"480014096",name:"",points:[[184.8,-191.2],[184.9,-205.3],[182.4,-205.4],[182.2,-208],[184.9,-208.3],[184.9,-212.3],[175.8,-211.9],[176.3,-191.2],[184.8,-191.2]],height:14,estimatedHeight:!0,at:392,kind:"office"},{id:"480014097",name:"",points:[[182.7,-146.6],[182.9,-140.2],[188.8,-140.4],[188.9,-148.9],[188.6,-161.4],[181.9,-160],[172.2,-159.7],[172.5,-147],[182.7,-146.6]],height:14,estimatedHeight:!0,at:383,kind:"apartments"},{id:"480014098",name:"",points:[[235.7,-216.5],[231.6,-223.1],[222.2,-217.1],[225.5,-211.3],[226.1,-209.8],[235.7,-216.5]],height:14,estimatedHeight:!0,at:446,kind:"apartments"},{id:"480014099",name:"",points:[[206.2,-216.4],[214.3,-220.5],[216.5,-216.6],[219.8,-218.6],[214.7,-227.1],[209.8,-225.2],[203.5,-222.1],[206.2,-216.4]],height:14,estimatedHeight:!0,at:432,kind:"yes"},{id:"480014457",name:"",points:[[634.1,-390.4],[619.8,-385.1],[621.7,-380.9],[636,-385.9],[634.1,-390.4]],height:14,estimatedHeight:!0,at:864,kind:"yes"},{id:"480014459",name:"",points:[[626.6,-406.6],[622.2,-416.1],[610.4,-408.6],[609.9,-409.4],[608,-408.3],[609.6,-405.5],[608,-404.5],[610.9,-398.1],[613.6,-399.2],[613.3,-400],[626.6,-406.6]],height:14,estimatedHeight:!0,at:859,kind:"yes"},{id:"480014460",name:"",points:[[603.4,-369.5],[615.4,-373.4],[615,-374.9],[620.3,-376.6],[619.2,-379.8],[601.1,-374.4],[603.4,-369.5]],height:14,estimatedHeight:!0,at:844,kind:"apartments"},{id:"480014461",name:"",points:[[594.9,-387.9],[610.3,-392.3],[608.6,-397],[610.9,-398.1],[606.7,-407.5],[609.9,-409.4],[607.6,-413.3],[605.2,-412.4],[600.9,-410.1],[598.9,-409.3],[588.1,-402.3],[594.9,-387.9]],height:13.2,estimatedHeight:!1,at:841,kind:"apartments"},{id:"480014462",name:"",points:[[596.9,-383.5],[613.6,-388.2],[611.7,-392.8],[594.9,-387.9],[596.9,-383.5]],height:14,estimatedHeight:!0,at:856,kind:"apartments"},{id:"480014463",name:"",points:[[601.1,-374.4],[618.2,-379.5],[616.8,-384.4],[599.2,-378.6],[601.1,-374.4]],height:14,estimatedHeight:!0,at:843,kind:"apartments"},{id:"480014464",name:"",points:[[602.2,-426.3],[598.1,-424.1],[602.7,-414.7],[606,-416.2],[606.8,-417.6],[602.2,-426.3]],height:14,estimatedHeight:!0,at:855,kind:"apartments"},{id:"480014465",name:"",points:[[599.2,-378.6],[609.3,-382],[609.1,-383.5],[612.1,-384.4],[611.3,-387.5],[596.9,-383.5],[599.2,-378.6]],height:14,estimatedHeight:!0,at:842,kind:"apartments"},{id:"480014466",name:"",points:[[594.5,-422.1],[590.6,-420],[595.8,-410],[598.2,-411.1],[598.9,-409.3],[600.9,-410.1],[594.5,-422.1]],height:14,estimatedHeight:!0,at:850,kind:"terrace"},{id:"480014467",name:"",points:[[631.9,-395.4],[618,-389.3],[619.8,-385.1],[634.1,-390.4],[631.9,-395.4]],height:14,estimatedHeight:!0,at:864,kind:"yes"},{id:"480014468",name:"",points:[[598.1,-424.1],[594.5,-422.1],[600.9,-410.1],[605.2,-412.4],[604,-415.3],[602.7,-414.7],[598.1,-424.1]],height:14,estimatedHeight:!0,at:852,kind:"apartments"},{id:"480014469",name:"",points:[[602.2,-426.3],[606.8,-417.6],[606,-416.2],[610.4,-408.6],[622.2,-416.1],[614.6,-433.1],[602.2,-426.3]],height:14,estimatedHeight:!0,at:861,kind:"apartments"},{id:"480014471",name:"",points:[[590.6,-420],[582.2,-415.5],[588.1,-402.3],[596.9,-408],[590.6,-420]],height:14,estimatedHeight:!0,at:838,kind:"apartments"},{id:"480014472",name:"",points:[[626.6,-406.6],[618.1,-402.4],[619.4,-399.6],[614.5,-397.4],[613.6,-399.2],[609.7,-397.6],[613.9,-387.5],[631.9,-395.4],[626.6,-406.6]],height:14,estimatedHeight:!0,at:859,kind:"yes"},{id:"480206995",name:"",points:[[71.7,15.9],[71.2,10.5],[79,5.4],[77.5,2.3],[73.7,4.4],[70.4,-6.9],[75.3,-7.6],[92.5,-11.6],[100.2,3],[85.3,9.4],[77.9,13.1],[71.7,15.9]],height:13.2,estimatedHeight:!1,at:12,kind:"apartments"},{id:"481858161",name:"",points:[[609.1,-288.7],[613.8,-289.9],[607.2,-307.2],[605.3,-306.4],[602.9,-313],[600,-311.7],[609.1,-288.7]],height:14,estimatedHeight:!0,at:828,kind:"yes"},{id:"481858162",name:"",points:[[533.5,-300.2],[549,-304.8],[548.4,-306.6],[550.6,-307.2],[549.9,-309.1],[547.6,-308.2],[547,-309.2],[545.3,-308.6],[544.8,-309.7],[531.4,-304.7],[533.5,-300.2]],height:13.2,estimatedHeight:!1,at:771,kind:"apartments"},{id:"481858163",name:"",points:[[585.7,-340.2],[590,-327],[592.8,-327.7],[594.2,-323.6],[596.3,-324.6],[589.6,-341.3],[585.7,-340.2]],height:14,estimatedHeight:!0,at:823,kind:"yes"},{id:"481858164",name:"",points:[[595.4,-285.3],[599.7,-286.4],[593.9,-301.6],[589.5,-299.9],[595.4,-285.3]],height:14,estimatedHeight:!0,at:816,kind:"yes"},{id:"481858165",name:"",points:[[576.3,-280.5],[568.4,-300.2],[563.3,-298.6],[566,-291.3],[558,-288.8],[562.3,-277.1],[576.3,-280.5]],height:14,estimatedHeight:!0,at:791,kind:"apartments"},{id:"481858166",name:"",points:[[615.9,-329.8],[600.1,-324.9],[602.5,-320.4],[617.5,-325.6],[615.9,-329.8]],height:14,estimatedHeight:!0,at:845,kind:"apartments"},{id:"481858167",name:"",points:[[555.4,-295.7],[561,-297.6],[556.2,-308.8],[550.6,-307.2],[552,-302.1],[553.7,-302.6],[553.1,-305],[555.1,-305.7],[556.6,-301],[553.7,-300],[554.8,-296.8],[555.4,-295.7]],height:14,estimatedHeight:!0,at:782,kind:"yes"},{id:"481858168",name:"",points:[[540.8,-281.9],[558.5,-287.5],[558,-288.8],[559.3,-289.2],[554.8,-296.8],[537.1,-291.2],[540.8,-281.9]],height:14,estimatedHeight:!0,at:777,kind:"semidetached_house"},{id:"481858169",name:"",points:[[615.9,-329.8],[609.3,-346.9],[598.2,-343.7],[603.1,-331.5],[604.3,-331.9],[606.6,-327],[615.9,-329.8]],height:14,estimatedHeight:!0,at:843,kind:"apartments"},{id:"481858170",name:"",points:[[542.5,-277.6],[554,-281.4],[556.2,-275.5],[562.3,-277.1],[558.5,-287.5],[540.8,-281.9],[542.5,-277.6]],height:13.2,estimatedHeight:!1,at:778,kind:"apartments"},{id:"481858171",name:"",points:[[585.7,-340.2],[566.6,-334.7],[573.9,-316.8],[577.2,-317.7],[576.3,-319.8],[585.7,-322.7],[586.3,-321],[589.6,-322],[589,-323.8],[593.6,-325.2],[592.8,-327.7],[590,-327],[585.7,-340.2]],height:14,estimatedHeight:!0,at:819,kind:"yes"},{id:"481858172",name:"",points:[[585,-282.7],[595.4,-285.3],[589,-301],[583.9,-299.4],[582.6,-304.2],[577.3,-302.6],[579.7,-297.4],[585,-282.7]],height:14,estimatedHeight:!0,at:806,kind:"apartments"},{id:"481858173",name:"",points:[[577.5,-308.9],[580.8,-309.9],[578.1,-317.9],[573.9,-316.8],[577.5,-308.9]],height:14,estimatedHeight:!0,at:805,kind:"yes"},{id:"481858174",name:"",points:[[623,-292.2],[615.8,-309.6],[611.7,-308.3],[612.8,-305.1],[610,-304.3],[609.1,-306.5],[610.7,-306.9],[610.4,-307.8],[607.2,-307.2],[613.8,-289.9],[623,-292.2]],height:14,estimatedHeight:!0,at:840,kind:"yes"},{id:"481858175",name:"",points:[[619.4,-320.6],[602.8,-315.5],[604.4,-310.7],[605.4,-311.4],[607.2,-307.2],[613.2,-308.8],[612.1,-313.2],[613.2,-313.4],[614.4,-309.1],[622.9,-311.6],[619.4,-320.6]],height:14,estimatedHeight:!0,at:845,kind:"apartments"},{id:"481858176",name:"",points:[[580.6,-281.6],[585,-282.7],[579.7,-297.4],[575.4,-295.9],[580.6,-281.6]],height:14,estimatedHeight:!0,at:802,kind:"apartments"},{id:"481858177",name:"",points:[[557.7,-332.2],[547.9,-329.4],[552.8,-317.2],[554.1,-317.6],[555.7,-313.8],[558.3,-315],[559.6,-313.1],[564.7,-314.5],[562.9,-319],[559.9,-317.9],[559.1,-320.2],[561.7,-321],[557.7,-332.2]],height:14,estimatedHeight:!0,at:790,kind:"yes"},{id:"481858178",name:"",points:[[587.1,-311.5],[584.9,-316.2],[583.1,-321.9],[585.7,-322.7],[586.3,-321],[589.6,-322],[590.2,-321],[594.7,-322.6],[594.2,-323.6],[597.3,-325],[600.1,-318.2],[595.5,-316.6],[596.5,-313.7],[587.1,-311.5]],height:14,estimatedHeight:!0,at:814,kind:"yes"},{id:"481858179",name:"",points:[[593.7,-342.5],[600.3,-326],[600.9,-325.2],[605.2,-326.5],[598.2,-343.7],[593.7,-342.5]],height:14,estimatedHeight:!0,at:832,kind:"apartments"},{id:"481858180",name:"",points:[[589.6,-341.3],[596.3,-324.6],[600.3,-326],[593.7,-342.5],[589.6,-341.3]],height:14,estimatedHeight:!0,at:827,kind:"apartments"},{id:"481858181",name:"",points:[[537.1,-291.2],[554.8,-296.8],[553.7,-300],[550.8,-298.9],[550.1,-301.4],[552,-302.1],[551.1,-305.4],[533.5,-300.2],[537.1,-291.2]],height:16.5,estimatedHeight:!1,at:776,kind:"apartments"},{id:"481858182",name:"",points:[[557.9,-304.8],[560.3,-305.6],[559.2,-308.6],[571.5,-312.2],[575.4,-302.1],[580.5,-303.5],[577.5,-308.9],[573.9,-316.8],[570.9,-315.9],[570.6,-316.7],[569.4,-316.4],[567.9,-320.4],[567.1,-320.2],[566.4,-322.6],[564.1,-321.8],[564.7,-319.5],[562.9,-319],[564.7,-314.5],[559.6,-313.1],[558.3,-315],[555.7,-313.8],[554.1,-317.6],[552.8,-317.2],[557.9,-304.8]],height:14,estimatedHeight:!0,at:796,kind:"yes"},{id:"481858183",name:"",points:[[622.9,-311.6],[615.8,-309.6],[623,-292.2],[629.8,-293.9],[622.9,-311.6]],height:14,estimatedHeight:!0,at:840,kind:"apartments"},{id:"481858185",name:"",points:[[597.6,-307.3],[594.9,-313.4],[577.5,-308.9],[580.5,-303.5],[586.3,-305.4],[587.1,-304.1],[597.6,-307.3]],height:14,estimatedHeight:!0,at:806,kind:"yes"},{id:"481858186",name:"",points:[[617.5,-325.6],[602.5,-320.4],[603,-319.2],[595.5,-316.6],[596.5,-313.7],[602.8,-315.5],[619.4,-320.6],[617.5,-325.6]],height:14,estimatedHeight:!0,at:845,kind:"apartments"},{id:"481858188",name:"",points:[[542.5,-277.6],[544.6,-272.5],[556.2,-275.5],[554,-281.4],[542.5,-277.6]],height:9.899999999999999,estimatedHeight:!1,at:773,kind:"apartments"},{id:"481858190",name:"",points:[[547.9,-329.4],[537.5,-326.4],[545.3,-308.6],[547,-309.2],[547.6,-308.2],[549.9,-309.1],[550.6,-307.2],[556.2,-308.8],[547.9,-329.4]],height:9.899999999999999,estimatedHeight:!1,at:780,kind:"apartments"},{id:"481858194",name:"",points:[[566.6,-334.7],[557.7,-332.2],[561.7,-321],[566.4,-322.6],[567.1,-320.2],[569.2,-320.8],[570.9,-315.9],[573.9,-316.8],[566.6,-334.7]],height:14,estimatedHeight:!0,at:799,kind:"yes"},{id:"481858197",name:"",points:[[576.3,-280.5],[580.6,-281.6],[573.6,-300.5],[568.9,-298.9],[576.3,-280.5]],height:14,estimatedHeight:!0,at:797,kind:"apartments"},{id:"482814871",name:"",points:[[59,-45.9],[59.9,-53.4],[79,-50.9],[78.2,-44.6],[65.6,-46.3],[65.5,-45],[59,-45.9]],height:14,estimatedHeight:!0,at:49,kind:"yes"},{id:"482814874",name:"",points:[[59.1,-12.5],[74.2,-14.9],[77.2,-40.3],[59.1,-42.8],[58.2,-36.1],[61.5,-35.8],[61.6,-32.2],[58.1,-31.6],[57.7,-26],[59.1,-12.5]],height:9.899999999999999,estimatedHeight:!1,at:39,kind:"apartments"},{id:"482814879",name:"",points:[[5.4,-10.4],[6.7,-26.7],[25.5,-28],[25.9,-24.6],[29.2,-25.1],[29.5,-19.9],[25.4,-19.3],[24.9,-21.9],[21.7,-21.5],[21.6,-16.6],[25.1,-16.8],[25,-17.7],[33.4,-19],[33.3,-14.1],[30.7,-14.3],[30.7,-11.4],[5.4,-10.4]],height:13.2,estimatedHeight:!1,at:11,kind:"yes"},{id:"482814880",name:"",points:[[35.3,-8.8],[46.7,-10.6],[47.7,-36.9],[38.5,-36.8],[38.5,-30.6],[42,-30.4],[41.5,-22.9],[36.6,-22.7],[35.3,-8.8]],height:13.2,estimatedHeight:!1,at:11,kind:"apartments"},{id:"482814881",name:"",points:[[8.5,-65.2],[8.3,-47.5],[18.4,-49.3],[18.3,-47.4],[24.3,-47.3],[25,-61.8],[21.2,-61.7],[21,-66],[8.5,-65.2]],height:9.899999999999999,estimatedHeight:!1,at:66,kind:"apartments"},{id:"482814896",name:"",points:[[6.7,-26.7],[7.5,-36],[18.3,-37],[18.2,-41],[21.2,-41],[20.8,-33],[32.9,-34.7],[33,-29.9],[31,-29.7],[31,-27.5],[25.6,-26.9],[25.5,-28],[6.7,-26.7]],height:16.5,estimatedHeight:!1,at:27,kind:"apartments"},{id:"482814903",name:"",points:[[59.9,-53.4],[61.2,-63.4],[80.3,-60.9],[79,-50.9],[59.9,-53.4]],height:14,estimatedHeight:!0,at:57,kind:"yes"},{id:"482814914",name:"",points:[[29.5,-19.9],[31.6,-20],[32,-22.9],[38.2,-22.8],[38.5,-36.8],[47.7,-36.9],[47.8,-39.3],[49.2,-39.3],[48.9,-41.9],[41.8,-42.5],[42.1,-47.1],[37.1,-47.1],[37.1,-40.7],[31.4,-40.8],[31.3,-34.5],[32.9,-34.7],[33,-29.9],[31,-29.7],[31,-27.5],[29.4,-27.3],[29.2,-25.1],[29.5,-19.9]],height:14,estimatedHeight:!0,at:28,kind:"yes"},{id:"482814915",name:"",points:[[4.7,-3.5],[5.4,-10.4],[30.7,-11.4],[30.7,-14.3],[33.3,-14.1],[33.5,-22.8],[36.6,-22.7],[35.3,-8.8],[4.7,-3.5]],height:16.5,estimatedHeight:!1,at:4,kind:"yes"},{id:"482840915",name:"",points:[[20.1,-300.7],[8.9,-296.2],[14.4,-281.5],[17.4,-282.5],[16.5,-284.9],[24,-287.2],[20.1,-300.7]],height:14,estimatedHeight:!0,at:238,kind:"apartments"},{id:"482840916",name:"",points:[[1.9,-276.8],[5.9,-265.9],[24,-270.2],[22.6,-274.7],[20.2,-274.3],[17.4,-282.5],[14.4,-281.5],[13.7,-283.4],[6.2,-280.8],[6.8,-278.7],[1.9,-276.8]],height:9.899999999999999,estimatedHeight:!1,at:228,kind:"apartments"},{id:"482840917",name:"",points:[[57.3,-312.7],[47,-309.2],[49.4,-297.6],[54,-298.6],[53.8,-299.7],[57,-300.4],[56.8,-301.6],[59.7,-302.4],[57.3,-312.7]],height:14,estimatedHeight:!0,at:275,kind:"apartments"},{id:"482840918",name:"",points:[[65.1,-276.9],[64.2,-295.3],[62.1,-314],[57.3,-312.7],[59.7,-302.4],[56.8,-301.6],[57.2,-299.3],[49.4,-297.6],[49.4,-296.2],[44,-294.6],[44.3,-291.8],[42,-291.3],[43.1,-276.6],[47.4,-277.1],[47.6,-279.4],[47.2,-280.5],[54.8,-281.9],[55.5,-276.5],[65.1,-276.9]],height:14,estimatedHeight:!0,at:288,kind:"apartments"},{id:"482840920",name:"",points:[[47,-309.2],[27.1,-302.7],[31.3,-288.2],[44.3,-291.8],[44,-294.6],[49.4,-296.2],[49.4,-297.6],[47,-309.2]],height:14,estimatedHeight:!0,at:256,kind:"apartments"},{id:"482840921",name:"",points:[[27.1,-302.7],[20.1,-300.7],[24,-287.2],[31.1,-289.2],[27.1,-302.7]],height:14,estimatedHeight:!0,at:248,kind:"apartments"},{id:"482840922",name:"",points:[[8.9,-296.2],[-4.5,-290.7],[1.9,-276.8],[6.8,-278.7],[6.2,-280.8],[13.7,-283.4],[8.9,-296.2]],height:16.5,estimatedHeight:!1,at:225,kind:"apartments"},{id:"482842285",name:"",points:[[-67.5,-278],[-63.5,-279],[-64,-285.1],[-69,-284.3],[-67.5,-278]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"483268319",name:"",points:[[378.5,-223.4],[371.7,-238.3],[370.1,-237.6],[369.4,-239.4],[366.4,-238.2],[374,-222.1],[378.5,-223.4]],height:14,estimatedHeight:!0,at:582,kind:"apartments"},{id:"483268320",name:"",points:[[450.6,-245.4],[455.2,-246.8],[448.1,-265.1],[443.3,-263.3],[450.6,-245.4]],height:14,estimatedHeight:!0,at:664,kind:"apartments"},{id:"483268321",name:"",points:[[451.9,-302.1],[444.7,-299.8],[454.4,-274.6],[461.5,-277.1],[459.6,-282.1],[454.1,-280.6],[453.3,-283.5],[457.1,-284.8],[457.4,-283.6],[470.1,-288.5],[467.8,-294.6],[456.1,-290.5],[451.9,-302.1]],height:14,estimatedHeight:!0,at:680,kind:"apartments"},{id:"483268322",name:"",points:[[455.2,-246.8],[460.2,-248.3],[453.3,-267.2],[448.1,-265.1],[455.2,-246.8]],height:14,estimatedHeight:!0,at:671,kind:"apartments"},{id:"483268323",name:"",points:[[316.7,-238.1],[327.4,-246.1],[325.5,-248.8],[324.4,-247.8],[323.5,-249.1],[314.3,-242],[316.7,-238.1]],height:14,estimatedHeight:!0,at:541,kind:"apartments"},{id:"483268324",name:"",points:[[322.4,-228.8],[328.1,-219.5],[338.5,-229],[338,-229.7],[339.1,-230.6],[332.9,-238.4],[331.3,-236.4],[322.4,-228.8]],height:14,estimatedHeight:!0,at:547,kind:"yes"},{id:"483268325",name:"",points:[[353.2,-243.3],[351.1,-247.7],[341.9,-239.3],[345.2,-236.1],[353.2,-243.3]],height:14,estimatedHeight:!0,at:567,kind:"apartments"},{id:"483268326",name:"",points:[[326.3,-263.8],[315.8,-260.9],[324.4,-247.8],[326.9,-249.8],[328.7,-247],[329.5,-247.7],[333.9,-250.9],[326.3,-263.8]],height:14,estimatedHeight:!0,at:548,kind:"apartments"},{id:"483268327",name:"",points:[[481.1,-286.5],[472.1,-283.2],[466.7,-281.5],[464.7,-286.4],[458.8,-284],[461.5,-277.1],[463.8,-269.4],[469.3,-271.4],[467.1,-277.2],[470.6,-278.8],[471,-277.6],[483,-282.1],[481.1,-286.5]],height:14,estimatedHeight:!0,at:687,kind:"apartments"},{id:"483268328",name:"",points:[[435.1,-296.8],[441.7,-279],[442.4,-277.7],[447.1,-279.2],[440.6,-298.5],[435.1,-296.8]],height:14,estimatedHeight:!0,at:668,kind:"apartments"},{id:"483268329",name:"",points:[[440.6,-298.5],[449.2,-273.6],[451,-273.5],[454.4,-274.6],[452.2,-280],[450.7,-279.7],[449.5,-282.7],[450.8,-283.3],[444.7,-299.8],[440.6,-298.5]],height:14,estimatedHeight:!0,at:672,kind:"apartments"},{id:"483268330",name:"",points:[[349.7,-270.5],[354.9,-258.1],[358.8,-259.2],[360.9,-254.4],[364.7,-255.8],[358,-273],[349.7,-270.5]],height:14,estimatedHeight:!0,at:572,kind:"apartments"},{id:"483268331",name:"",points:[[413,-247.3],[417.5,-235.5],[435.4,-240.8],[430.8,-253.2],[413,-247.3]],height:14,estimatedHeight:!0,at:646,kind:"apartments"},{id:"483268332",name:"",points:[[356.6,-236.2],[353.2,-243.3],[338,-229.7],[339.3,-228.1],[342.6,-231.3],[345.8,-228.2],[356.6,-236.2]],height:14,estimatedHeight:!0,at:568,kind:"apartments"},{id:"483268333",name:"",points:[[403.6,-287.3],[398.4,-285.7],[404.1,-270.6],[409.4,-272.6],[403.6,-287.3]],height:14,estimatedHeight:!0,at:629,kind:"yes"},{id:"483268334",name:"",points:[[387.5,-264.2],[388.8,-260.9],[387,-260.4],[388.8,-254.8],[404.7,-259.4],[402.2,-267.8],[399.3,-266.5],[399.9,-264.6],[393.1,-262.5],[392.6,-264.1],[390.5,-263.7],[390,-265.2],[387.5,-264.2]],height:14,estimatedHeight:!0,at:609,kind:"yes"},{id:"483268337",name:"",points:[[326.3,-263.8],[333.9,-250.9],[336.8,-253.2],[337.6,-252.5],[340.4,-254.6],[333.7,-265.7],[326.3,-263.8]],height:14,estimatedHeight:!0,at:548,kind:"apartments"},{id:"483268338",name:"",points:[[484.9,-277.2],[473,-272.8],[474.5,-268.9],[473.6,-268.5],[474.1,-267],[479.2,-268.8],[480.4,-264.9],[488.7,-267.9],[484.9,-277.2]],height:14,estimatedHeight:!0,at:704,kind:"apartments"},{id:"483268339",name:"",points:[[419,-292.1],[413.8,-290.4],[418.7,-275.4],[417.6,-274.9],[419.1,-270.7],[422.4,-271.5],[420.8,-276],[423.9,-276.8],[419,-292.1]],height:14,estimatedHeight:!0,at:645,kind:"yes"},{id:"483268340",name:"",points:[[441.7,-279],[445.4,-272.5],[440.1,-270.9],[438.6,-275.4],[439.5,-275.7],[438.8,-277.8],[441.7,-279]],height:14,estimatedHeight:!0,at:663,kind:"yes"},{id:"483268341",name:"",points:[[476.2,-253.1],[493.1,-258.2],[489.3,-268.1],[483.6,-266.1],[484.1,-265],[480.8,-263.8],[479.2,-268.8],[471.4,-266],[476.2,-253.1]],height:13.2,estimatedHeight:!1,at:696,kind:"apartments"},{id:"483268342",name:"",points:[[483,-282.1],[471,-277.6],[472.1,-275],[468.5,-273.6],[469.3,-271.4],[484.9,-277.2],[483,-282.1]],height:14,estimatedHeight:!0,at:704,kind:"apartments"},{id:"483268343",name:"",points:[[348.5,-253.2],[345.7,-258.8],[337.6,-252.5],[341.6,-247.4],[348.5,-253.2]],height:14,estimatedHeight:!0,at:565,kind:"apartments"},{id:"483268344",name:"",points:[[398.7,-229.4],[414.7,-234.4],[410,-246.3],[397.6,-242.7],[398.6,-240],[395.2,-238.9],[398.7,-229.4]],height:14,estimatedHeight:!0,at:610,kind:"apartments"},{id:"483268345",name:"",points:[[408.1,-250.9],[392.2,-246.7],[393.7,-243.1],[396.1,-243.9],[396.5,-242.5],[410,-246.3],[408.1,-250.9]],height:14,estimatedHeight:!0,at:606,kind:"apartments"},{id:"483268346",name:"",points:[[377.7,-236.8],[381.2,-238.2],[378.3,-245.5],[382.3,-246.8],[381,-250.3],[377.5,-249.2],[378.2,-247.1],[374.3,-245.3],[377.7,-236.8]],height:14,estimatedHeight:!0,at:593,kind:"yes"},{id:"483268347",name:"",points:[[465.5,-249.9],[471.6,-251.7],[464.7,-269.8],[460.6,-268.4],[459.7,-271.2],[462.9,-272.3],[461.5,-277.1],[456.6,-275.3],[465.5,-249.9]],height:14,estimatedHeight:!0,at:682,kind:"apartments"},{id:"483268348",name:"",points:[[311.5,-246.2],[314.3,-242],[323.5,-249.1],[321,-252.9],[311.5,-246.2]],height:14,estimatedHeight:!0,at:540,kind:"yes"},{id:"483268349",name:"",points:[[345.7,-258.8],[341.4,-268.1],[333.7,-265.7],[340.4,-254.6],[345.7,-258.8]],height:14,estimatedHeight:!0,at:564,kind:"apartments"},{id:"483268351",name:"",points:[[435.4,-240.8],[439.7,-242.1],[434.7,-254.4],[430.8,-253.2],[435.4,-240.8]],height:14,estimatedHeight:!0,at:650,kind:"apartments"},{id:"483268352",name:"",points:[[358.7,-217.8],[355.7,-223],[354.5,-222.1],[353.5,-224.4],[346.6,-218.7],[342.9,-223.6],[340.5,-221.6],[339.4,-223.1],[341.9,-225.4],[338.5,-229],[328.1,-219.5],[333.9,-210.1],[358.7,-217.8]],height:14,estimatedHeight:!0,at:550,kind:"apartments"},{id:"483268353",name:"",points:[[349.7,-270.5],[344.1,-268.8],[350,-256.7],[354.9,-258.1],[349.7,-270.5]],height:14,estimatedHeight:!0,at:566,kind:"apartments"},{id:"483268354",name:"",points:[[391.9,-227.3],[398.7,-229.4],[394.4,-241.3],[391.3,-240.3],[390.8,-241.7],[394,-242.5],[392.2,-246.7],[388.7,-245.7],[387.8,-248.5],[390.3,-248.9],[388.6,-253],[383.3,-251.5],[383.5,-251],[381,-250.3],[382.3,-246.8],[383.8,-243.5],[384.8,-243.9],[391.9,-227.3]],height:14,estimatedHeight:!0,at:599,kind:"apartments"},{id:"483268355",name:"",points:[[350,-256.7],[351.9,-252.8],[357.7,-254.7],[357.4,-255.6],[359.9,-256.6],[358.8,-259.2],[350,-256.7]],height:14,estimatedHeight:!0,at:568,kind:"apartments"},{id:"483268356",name:"",points:[[316.7,-238.1],[319.8,-233],[328.4,-241.1],[329.7,-242.8],[327.4,-246.1],[316.7,-238.1]],height:14,estimatedHeight:!0,at:544,kind:"yes"},{id:"483268357",name:"",points:[[439.7,-242.1],[442.9,-243.1],[437.4,-260.4],[432.4,-258.8],[433.8,-255.1],[435.1,-255.4],[435.5,-254.7],[434.7,-254.4],[439.7,-242.1]],height:14,estimatedHeight:!0,at:654,kind:"apartments"},{id:"483268358",name:"",points:[[409.1,-288.9],[403.6,-287.3],[410.6,-269.3],[414.7,-270.7],[413.4,-273.6],[414.7,-273.9],[409.1,-288.9]],height:14,estimatedHeight:!0,at:635,kind:"yes"},{id:"483268359",name:"",points:[[351.9,-252.8],[356.2,-243.9],[367.7,-248.2],[364.7,-255.8],[360.1,-254.1],[361.7,-250.6],[359.8,-249.7],[357.7,-254.7],[351.9,-252.8]],height:14,estimatedHeight:!0,at:575,kind:"apartments"},{id:"483268360",name:"",points:[[423.9,-293.6],[434.6,-265.1],[438.4,-266.2],[437,-269.8],[440.1,-270.9],[438.6,-275.4],[434.1,-273.7],[432.5,-277.6],[437,-279],[437.6,-277.2],[441.7,-279],[435.1,-296.8],[423.9,-293.6]],height:14,estimatedHeight:!0,at:650,kind:"apartments"},{id:"483268361",name:"",points:[[378.5,-223.4],[386.8,-225.7],[381.2,-238.2],[377.7,-236.8],[372.7,-249.1],[370.4,-248.7],[370.8,-247.1],[368.4,-246.2],[370.8,-240],[378.5,-223.4]],height:14,estimatedHeight:!0,at:586,kind:"apartments"},{id:"483268364",name:"",points:[[404.1,-270.6],[407.8,-260.8],[427.7,-266.9],[424.8,-274.4],[421.6,-273.6],[422.4,-271.5],[419.1,-270.7],[418.7,-271.8],[410.6,-269.3],[409.4,-272.6],[404.1,-270.6]],height:14,estimatedHeight:!0,at:630,kind:"yes"},{id:"483268365",name:"",points:[[404.7,-259.4],[387.8,-254.3],[389.9,-249.9],[390.8,-250.1],[392.2,-246.7],[408.1,-250.9],[404.7,-259.4]],height:14,estimatedHeight:!0,at:605,kind:"apartments"},{id:"483268366",name:"",points:[[358.7,-217.8],[364.5,-219.7],[360.2,-228.7],[353.5,-224.4],[354.5,-222.1],[355.7,-223],[358.7,-217.8]],height:14,estimatedHeight:!0,at:570,kind:"apartments"},{id:"483268367",name:"",points:[[360.2,-228.7],[356.6,-236.2],[341.9,-225.4],[342.9,-223.6],[346.6,-218.7],[353.5,-224.4],[360.2,-228.7]],height:14,estimatedHeight:!0,at:569,kind:"apartments"},{id:"483268368",name:"",points:[[411.2,-251.9],[413,-247.3],[431.9,-253.6],[430.2,-258.1],[420.5,-254.9],[421,-253.5],[417.9,-252.4],[417.3,-253.9],[411.2,-251.9]],height:14,estimatedHeight:!0,at:646,kind:"apartments"},{id:"483268369",name:"",points:[[319.8,-233],[322.4,-228.8],[331.3,-236.4],[328.4,-241.1],[319.8,-233]],height:14,estimatedHeight:!0,at:544,kind:"yes"},{id:"483268370",name:"",points:[[374,-222.1],[367.8,-235.2],[364.6,-233.6],[365.5,-231.7],[362.7,-230.5],[367.7,-220.4],[374,-222.1]],height:14,estimatedHeight:!0,at:579,kind:"apartments"},{id:"483268371",name:"",points:[[453.3,-267.2],[451,-273.5],[449.2,-273.6],[440.1,-270.9],[443.3,-263.3],[446.6,-264.7],[445.3,-268.3],[449,-269.5],[450.1,-265.9],[453.3,-267.2]],height:14,estimatedHeight:!0,at:669,kind:"yes"},{id:"483268372",name:"",points:[[471.6,-251.7],[476.2,-253.1],[469.3,-271.4],[464.7,-269.8],[471.6,-251.7]],height:14,estimatedHeight:!0,at:688,kind:"apartments"},{id:"483268373",name:"",points:[[351.1,-247.7],[348.5,-253.2],[339.7,-245.8],[335.1,-251.7],[329.5,-247.7],[332.2,-244.8],[329.7,-242.8],[328.4,-241.1],[331.3,-236.4],[332.9,-238.4],[339.1,-230.6],[342.9,-234.1],[339.9,-237.5],[351.1,-247.7]],height:14,estimatedHeight:!0,at:553,kind:"apartments"},{id:"483268374",name:"",points:[[358,-273],[367.7,-248.2],[371.7,-249],[369.3,-255.6],[367.3,-254.5],[365.9,-258.4],[367.9,-259.4],[362.4,-274.3],[358,-273]],height:14,estimatedHeight:!0,at:581,kind:"apartments"},{id:"483268375",name:"",points:[[413.8,-290.4],[409.1,-288.9],[414.7,-273.9],[418.7,-275.4],[413.8,-290.4]],height:14,estimatedHeight:!0,at:640,kind:"yes"},{id:"483268376",name:"",points:[[407.8,-260.8],[411.2,-251.9],[437.4,-260.4],[437.9,-258.1],[440.5,-258.8],[439,-263.4],[437,-262.7],[436.2,-265.6],[426,-262.1],[424.6,-265.9],[407.8,-260.8]],height:14,estimatedHeight:!0,at:643,kind:"apartments"},{id:"483268377",name:"",points:[[465.5,-249.9],[459.1,-268.2],[456.1,-267.1],[455.1,-269.6],[458.2,-270.8],[456.6,-275.3],[451,-273.5],[460.2,-248.3],[465.5,-249.9]],height:14,estimatedHeight:!0,at:677,kind:"apartments"},{id:"483268378",name:"",points:[[386.8,-225.7],[391.9,-227.3],[384.8,-243.9],[383.8,-243.5],[382.3,-246.8],[378.3,-245.5],[381.2,-238.2],[386.8,-225.7]],height:14,estimatedHeight:!0,at:596,kind:"apartments"},{id:"483268379",name:"",points:[[442.9,-243.1],[450.6,-245.4],[440.1,-270.9],[437,-269.8],[438.7,-264.9],[440.9,-265.6],[442.1,-262.9],[439.4,-262.1],[440.5,-258.8],[441.9,-255.7],[439,-254.8],[442.9,-243.1]],height:14,estimatedHeight:!0,at:660,kind:"apartments"},{id:"483268380",name:"",points:[[356.2,-243.9],[362.7,-230.5],[365.5,-231.7],[364.6,-233.6],[367.8,-235.2],[366.4,-238.2],[370.8,-240],[367.7,-248.2],[356.2,-243.9]],height:14,estimatedHeight:!0,at:583,kind:"apartments"},{id:"483746894",name:"",points:[[656.4,-454.9],[659.4,-448.6],[663.5,-450.9],[664.1,-449.1],[666.5,-444.6],[654.2,-437.9],[653.4,-439.3],[649.3,-437],[643.2,-448.1],[656.4,-454.9]],height:14,estimatedHeight:!0,at:912,kind:"yes"},{id:"483746895",name:"",points:[[628.7,-413.9],[642.2,-422.8],[641.6,-423.9],[646.4,-426.5],[652.2,-416],[646.1,-412.4],[648.5,-408.9],[634.6,-401.2],[628.7,-413.9]],height:14,estimatedHeight:!0,at:882,kind:"yes"},{id:"483746896",name:"",points:[[769.8,-398.4],[768,-404.6],[772.8,-406.5],[772.1,-408.7],[786.8,-412.7],[786.6,-420.2],[805.4,-413.1],[805.6,-409.1],[769.8,-398.4]],height:14,estimatedHeight:!0,at:1012,kind:"yes"},{id:"483746897",name:"",points:[[769.8,-398.4],[759.2,-395.3],[757.3,-402.2],[767.8,-405.3],[769.8,-398.4]],height:14,estimatedHeight:!0,at:1001,kind:"yes"},{id:"483746898",name:"",points:[[710.6,-429.6],[702.7,-435.8],[709,-444.9],[707.4,-446.5],[711.7,-452],[723.2,-446.4],[710.6,-429.6]],height:14,estimatedHeight:!0,at:964,kind:"yes"},{id:"483746899",name:"",points:[[668.1,-369.5],[658.8,-388.6],[659.9,-389.6],[657.5,-394.4],[661.3,-396.7],[664.9,-389.5],[666.7,-390.4],[667.4,-388],[666,-387.3],[673.9,-371.8],[668.1,-369.5]],height:14,estimatedHeight:!0,at:906,kind:"yes"},{id:"483746900",name:"",points:[[707.7,-381.4],[699.3,-399.3],[695.2,-397.6],[691.1,-404.9],[702,-412],[707.8,-403.7],[703.9,-401.2],[713.9,-383.2],[707.7,-381.4]],height:14,estimatedHeight:!0,at:948,kind:"yes"},{id:"483746901",name:"",points:[[654.2,-386.9],[652.3,-390.6],[649.6,-396.9],[653,-399],[655.6,-393.4],[657.5,-394.4],[659.9,-389.6],[658.8,-388.6],[654.2,-386.9]],height:14,estimatedHeight:!0,at:898,kind:"yes"},{id:"483746902",name:"",points:[[678.9,-372.8],[673.9,-371.8],[666,-387.3],[668.6,-388.7],[670.1,-389.2],[678.9,-372.8]],height:14,estimatedHeight:!0,at:918,kind:"yes"},{id:"483746903",name:"",points:[[759.7,-431.2],[766.9,-427.6],[772.8,-406.5],[768,-404.6],[767.8,-405.3],[763.8,-404.1],[762.9,-407.3],[760.4,-406.4],[757.7,-415.5],[763.1,-417.5],[759.7,-431.2]],height:14,estimatedHeight:!0,at:1012,kind:"yes"},{id:"483746904",name:"",points:[[657.6,-366.8],[651.2,-381.3],[652.7,-382.1],[652.2,-382.9],[654.6,-383.9],[662.7,-368.2],[657.6,-366.8]],height:14,estimatedHeight:!0,at:901,kind:"yes"},{id:"483746905",name:"",points:[[641.8,-385.4],[650.3,-389.4],[652.2,-385],[651.2,-384.7],[652.7,-382.1],[644.9,-378.6],[641.8,-385.4]],height:14,estimatedHeight:!0,at:886,kind:"yes"},{id:"483746906",name:"",points:[[636,-444.5],[644,-427.7],[640.9,-426.4],[639.2,-429.6],[638.3,-428.8],[637.5,-430.7],[634.3,-428.9],[635.4,-426.6],[625.4,-421.4],[619.1,-435.8],[636,-444.5]],height:14,estimatedHeight:!0,at:879,kind:"apartments"},{id:"483746907",name:"",points:[[688.3,-375.5],[678.9,-372.8],[670.1,-389.2],[679.5,-393.8],[688.3,-375.5]],height:14,estimatedHeight:!0,at:918,kind:"yes"},{id:"483746908",name:"",points:[[639,-391.5],[634.6,-401.2],[648.5,-408.9],[649.6,-406.7],[654.8,-409.5],[658.9,-402.1],[653,-399],[652.6,-399.8],[650.5,-399],[651,-397.8],[639,-391.5]],height:14,estimatedHeight:!0,at:884,kind:"yes"},{id:"483746909",name:"",points:[[662.7,-368.2],[654.6,-383.9],[654,-385.6],[652.2,-385],[650.3,-389.4],[652.3,-390.6],[654.2,-386.9],[658.8,-388.6],[668.1,-369.5],[662.7,-368.2]],height:14,estimatedHeight:!0,at:906,kind:"yes"},{id:"483746910",name:"",points:[[654.8,-409.5],[651.3,-415.4],[654.1,-417.2],[672.2,-427.2],[686.8,-399.5],[682.4,-397.1],[678.6,-405],[675.1,-403],[674.8,-403.8],[666.1,-399.2],[662,-406.5],[661.2,-405.8],[660.3,-407.6],[656.8,-406],[654.8,-409.5]],height:14,estimatedHeight:!0,at:928,kind:"yes"},{id:"483746911",name:"",points:[[644.9,-378.6],[651.2,-381.3],[657.6,-366.8],[651.1,-365.1],[644.9,-378.6]],height:14,estimatedHeight:!0,at:896,kind:"yes"},{id:"483746912",name:"",points:[[641.8,-385.4],[639,-391.5],[649.6,-396.9],[652.3,-390.6],[650.3,-389.4],[641.8,-385.4]],height:14,estimatedHeight:!0,at:885,kind:"yes"},{id:"483746913",name:"",points:[[690.9,-425.7],[701.2,-415.8],[699.7,-414],[702,-412],[707.8,-403.7],[709.1,-404.6],[705.7,-410.1],[713.2,-414.9],[711.9,-415.8],[712.7,-416.7],[708.8,-420.4],[709.3,-421.3],[714.1,-417.4],[717,-421.3],[711.1,-425.5],[707.7,-428.3],[709.3,-430.6],[702.7,-435.8],[701.8,-433.4],[700.3,-434.3],[698.8,-432.1],[698.1,-432.7],[690.9,-425.7]],height:14,estimatedHeight:!0,at:954,kind:"yes"},{id:"483746914",name:"",points:[[625.4,-421.4],[635.4,-426.6],[639.2,-429.6],[640.9,-426.4],[638.8,-424.9],[640,-423.1],[641.6,-423.9],[642.2,-422.8],[628.7,-413.9],[625.4,-421.4]],height:14,estimatedHeight:!0,at:880,kind:"yes"},{id:"483746915",name:"",points:[[655.6,-393.4],[653,-399],[658.9,-402.1],[661.3,-396.7],[655.6,-393.4]],height:14,estimatedHeight:!0,at:901,kind:"yes"},{id:"483746916",name:"",points:[[684.3,-462.9],[709.1,-452.3],[694.4,-436.7],[698.1,-432.7],[686,-420.9],[671.4,-448],[684.3,-462.9]],height:14,estimatedHeight:!0,at:938,kind:"parking"},{id:"483746917",name:"",points:[[664.2,-459],[669.1,-451.2],[664.1,-449.1],[663.5,-450.9],[659.4,-448.6],[656.4,-454.9],[664.2,-459]],height:14,estimatedHeight:!0,at:924,kind:"yes"},{id:"483746918",name:"",points:[[688.3,-375.5],[675.1,-403],[678.6,-405],[682.4,-397.1],[686.8,-399.5],[689.5,-395.3],[699.3,-399.3],[707.7,-381.4],[688.3,-375.5]],height:14,estimatedHeight:!0,at:927,kind:"yes"},{id:"483746919",name:"",points:[[723.6,-446.8],[743.6,-438.5],[736.4,-431.1],[733.4,-434.3],[732.3,-432.2],[728,-435.8],[724.1,-430.3],[717.6,-434.9],[711.1,-425.5],[707.7,-428.3],[709.3,-430.6],[710.6,-429.6],[723.6,-446.8]],height:14,estimatedHeight:!0,at:989,kind:"yes"},{id:"483746920",name:"",points:[[759.2,-395.3],[751.2,-393.2],[748,-403.5],[744.5,-402.4],[743.5,-408],[740.8,-410.6],[741.5,-411.9],[752.2,-415.4],[752.6,-413.8],[757.7,-415.5],[760.4,-406.4],[756.6,-405.3],[759.2,-395.3]],height:14,estimatedHeight:!0,at:1001,kind:"yes"},{id:"483746921",name:"",points:[[654.1,-417.2],[649.8,-425.3],[658.9,-430.2],[663.2,-422.1],[654.1,-417.2]],height:14,estimatedHeight:!0,at:906,kind:"yes"},{id:"483746922",name:"",points:[[679.5,-393.8],[674.8,-403.8],[661.3,-396.7],[664.9,-389.5],[666.7,-390.4],[668.6,-388.7],[670.1,-389.2],[679.5,-393.8]],height:14,estimatedHeight:!0,at:914,kind:"yes"},{id:"483746923",name:"",points:[[735.6,-388.6],[729.7,-387.7],[721.8,-402.4],[725.4,-403.8],[729.5,-398.9],[735.6,-388.6]],height:14,estimatedHeight:!0,at:977,kind:"yes"},{id:"483746924",name:"",points:[[721,-385.3],[713.9,-383.2],[705.3,-398.7],[710.4,-402.5],[721,-385.3]],height:14,estimatedHeight:!0,at:954,kind:"yes"},{id:"483746925",name:"",points:[[636,-444.5],[643.2,-448.1],[649.3,-437],[653.4,-439.3],[656.2,-434],[644.4,-426.3],[644,-427.7],[636,-444.5]],height:14,estimatedHeight:!0,at:899,kind:"yes"},{id:"483746926",name:"",points:[[751.2,-393.2],[735.6,-388.6],[729.5,-398.9],[744.3,-403.5],[744.5,-402.4],[748,-403.5],[751.2,-393.2]],height:14,estimatedHeight:!0,at:977,kind:"yes"},{id:"483746927",name:"",points:[[759.7,-431.2],[763.1,-417.5],[752.6,-413.8],[749.1,-426.7],[751.1,-427.5],[750.3,-431.1],[754.6,-433.5],[759.7,-431.2]],height:14,estimatedHeight:!0,at:1e3,kind:"yes"},{id:"483746928",name:"",points:[[754.6,-433.5],[750.3,-431.1],[751.1,-427.5],[749.1,-426.7],[752.2,-415.4],[749.1,-414.3],[745.8,-424.1],[738.9,-418.8],[739.9,-417.3],[736,-413.9],[735.3,-415.1],[730.5,-411.4],[739,-401.8],[729.5,-398.9],[725.4,-403.8],[718.1,-409.4],[717,-411.4],[743.6,-438.5],[754.6,-433.5]],height:14,estimatedHeight:!0,at:973,kind:"yes"},{id:"484324877",name:"",points:[[414.7,-342.4],[419.4,-344.5],[413.2,-359.3],[409,-357.3],[414.7,-342.4]],height:14,estimatedHeight:!0,at:655,kind:"apartments"},{id:"484324878",name:"",points:[[342.2,-332.7],[336.4,-330.6],[332.3,-329.5],[329,-338.3],[334,-340.1],[333,-342.3],[337.8,-344.4],[342.2,-332.7]],height:14,estimatedHeight:!0,at:577,kind:"yes"},{id:"484324879",name:"",points:[[388,-411.7],[379.6,-408.8],[386.1,-392.9],[390.3,-394.7],[389.1,-397.6],[392.9,-399.2],[388,-411.7]],height:14,estimatedHeight:!0,at:641,kind:"apartments"},{id:"484324880",name:"",points:[[376,-344.3],[392.8,-351.8],[392.5,-352.9],[396.9,-354.9],[393.6,-362],[390.2,-360.4],[372.4,-354.4],[376,-344.3]],height:14,estimatedHeight:!0,at:619,kind:"yes"},{id:"484324881",name:"",points:[[406.7,-339],[414.7,-342.4],[408.4,-358.7],[400.1,-355],[406.7,-339]],height:14,estimatedHeight:!0,at:646,kind:"apartments"},{id:"484324882",name:"",points:[[298.2,-357.6],[300.4,-353.1],[308.9,-356.5],[307.1,-361.3],[298.2,-357.6]],height:14,estimatedHeight:!0,at:547,kind:"apartments"},{id:"484324883",name:"",points:[[297.1,-379],[289,-376],[294.6,-364.7],[302.5,-368],[297.1,-379]],height:13.2,estimatedHeight:!1,at:545,kind:"apartments"},{id:"484324884",name:"",points:[[282.9,-356.6],[277.1,-371],[270.7,-368.2],[281,-348.8],[286,-351.1],[284.1,-354.8],[280.7,-353.2],[279.9,-355.6],[282.9,-356.6]],height:16.5,estimatedHeight:!1,at:527,kind:"apartments"},{id:"484324885",name:"",points:[[257,-337.7],[263.2,-327],[280.4,-337.4],[275.4,-345.4],[272,-343.6],[270.9,-345.6],[257,-337.7]],height:14,estimatedHeight:!0,at:502,kind:"yes"},{id:"484324887",name:"",points:[[277.5,-303.8],[280.7,-298.7],[291.2,-306.1],[289.3,-309.1],[284.2,-306.2],[283.4,-307.2],[277.5,-303.8]],height:14,estimatedHeight:!0,at:512,kind:"apartments"},{id:"484324888",name:"",points:[[301.6,-336.4],[298,-342.9],[286.3,-335.8],[285.9,-336.6],[282,-334.5],[285.3,-329.3],[294.2,-334.5],[295.2,-332.7],[301.6,-336.4]],height:14,estimatedHeight:!0,at:527,kind:"apartments"},{id:"484324889",name:"",points:[[326.7,-389.9],[333.3,-375.6],[335.9,-377.1],[337.3,-373.1],[339.4,-373.9],[331.6,-391.8],[326.7,-389.9]],height:13.2,estimatedHeight:!1,at:591,kind:"apartments"},{id:"484324890",name:"",points:[[427.3,-374.7],[425.1,-378.8],[412.4,-372.3],[413.1,-370.5],[408.9,-368.7],[410.2,-365.9],[427.3,-374.7]],height:14,estimatedHeight:!0,at:657,kind:"apartments"},{id:"484324891",name:"",points:[[395.1,-334],[391,-343.5],[389.5,-342.9],[389.2,-343.8],[378.1,-338.8],[382.1,-328.2],[395.1,-334]],height:14,estimatedHeight:!0,at:620,kind:"yes"},{id:"484324892",name:"",points:[[366,-363.6],[364,-369.1],[346.4,-362.3],[347.7,-359.4],[350.5,-360.5],[351.5,-357.6],[366,-363.6]],height:14,estimatedHeight:!0,at:600,kind:"yes"},{id:"484324893",name:"",points:[[433.7,-362.4],[429.2,-370.9],[424.2,-368.5],[424.5,-367.6],[417.1,-364.2],[418.3,-361.4],[423.7,-363.6],[425.5,-358.7],[433.7,-362.4]],height:14,estimatedHeight:!0,at:670,kind:"apartments"},{id:"484324894",name:"",points:[[362.9,-320.8],[358.2,-331.3],[354.5,-329.8],[355.2,-327.6],[350.9,-325.6],[354.7,-317],[362.9,-320.8]],height:14,estimatedHeight:!0,at:591,kind:"yes"},{id:"484324895",name:"",points:[[257,-337.7],[274.2,-347.6],[272.4,-351],[266.3,-347.8],[264.9,-346.8],[262.7,-350.4],[253.5,-343.6],[257,-337.7]],height:9.899999999999999,estimatedHeight:!1,at:498,kind:"apartments"},{id:"484324896",name:"",points:[[406.3,-377.7],[408,-374.8],[423.2,-382.5],[421.4,-385.9],[406.3,-377.7]],height:14,estimatedHeight:!0,at:657,kind:"apartments"},{id:"484324898",name:"",points:[[331.6,-391.8],[339.4,-373.9],[337.3,-373.1],[336.4,-375.6],[334,-374.5],[339.5,-361.5],[346.1,-364],[343.6,-370],[346.9,-371.4],[345.1,-375],[348.6,-376.3],[341.3,-395.6],[331.6,-391.8]],height:13.2,estimatedHeight:!1,at:590,kind:"apartments"},{id:"484324900",name:"",points:[[263.2,-327],[265.4,-323.1],[282.9,-333.1],[281.1,-336.2],[279.6,-335.1],[278.9,-336.5],[263.2,-327]],height:14,estimatedHeight:!0,at:503,kind:"apartments"},{id:"484324901",name:"",points:[[433.7,-362.4],[425.5,-358.7],[423.7,-363.6],[413.2,-359.3],[419.4,-344.5],[438.9,-352.8],[433.7,-362.4]],height:14,estimatedHeight:!0,at:660,kind:"apartments"},{id:"484324902",name:"",points:[[303.2,-347.5],[308.1,-337.5],[326.7,-344.5],[324.8,-348.2],[320.9,-346.4],[317.5,-353.9],[303.2,-347.5]],height:14,estimatedHeight:!0,at:550,kind:"apartments"},{id:"484324903",name:"",points:[[346,-312.9],[339.5,-328.6],[336.7,-327.2],[337.4,-325.4],[335.9,-324.6],[336.9,-321],[333.2,-319.5],[335.1,-315.5],[321.9,-310.4],[325.3,-303.8],[346,-312.9]],height:14,estimatedHeight:!0,at:558,kind:"apartments"},{id:"484324904",name:"",points:[[297.1,-379],[302.5,-368],[306.3,-369.6],[306.8,-368.6],[310.4,-370.1],[309.1,-373.3],[312.3,-374.4],[309.4,-383.4],[297.1,-379]],height:13.2,estimatedHeight:!1,at:558,kind:"apartments"},{id:"484324905",name:"",points:[[310.4,-320.1],[301.6,-336.4],[289.3,-329.4],[297.7,-313.5],[310.4,-320.1]],height:14,estimatedHeight:!0,at:534,kind:"apartments"},{id:"484324906",name:"",points:[[406.7,-339],[399.7,-355.8],[396.9,-354.9],[394.5,-353.8],[396.7,-348.9],[401.6,-336.8],[406.7,-339]],height:14,estimatedHeight:!0,at:641,kind:"yes"},{id:"484324907",name:"",points:[[298.2,-357.6],[310,-362.5],[312.3,-358],[318.1,-360.1],[313.5,-371.3],[306.8,-368.6],[306.3,-369.6],[294.6,-364.7],[298.2,-357.6]],height:14,estimatedHeight:!0,at:562,kind:"apartments"},{id:"484324908",name:"",points:[[341.3,-395.6],[348.6,-376.3],[359.5,-380.5],[351.5,-399.6],[341.3,-395.6]],height:16.5,estimatedHeight:!1,at:602,kind:"apartments"},{id:"484324909",name:"",points:[[362.9,-320.8],[366.8,-321.9],[361.9,-332.8],[358.2,-331.3],[362.9,-320.8]],height:14,estimatedHeight:!0,at:604,kind:"yes"},{id:"484324910",name:"",points:[[262.2,-364.5],[256.1,-361.9],[264.9,-346.8],[266.3,-347.8],[264.7,-351],[266.7,-352],[268.5,-349],[272.4,-351],[268.3,-358.9],[265.5,-357.6],[262.2,-364.5]],height:13.2,estimatedHeight:!1,at:508,kind:"apartments"},{id:"484324911",name:"",points:[[350,-314.6],[343.8,-329.8],[339.8,-327.7],[346,-312.9],[350,-314.6]],height:14,estimatedHeight:!0,at:581,kind:"yes"},{id:"484324912",name:"",points:[[319.3,-315.4],[333.2,-319.5],[336.9,-321],[335.9,-324.6],[334.6,-324.5],[334.1,-325.4],[316.8,-319.9],[319.3,-315.4]],height:14,estimatedHeight:!0,at:571,kind:"apartments"},{id:"484324914",name:"",points:[[292.9,-355],[286,-351.1],[281,-348.8],[282.5,-344.1],[277.8,-342.1],[282,-334.5],[285.9,-336.6],[286.3,-335.8],[298,-342.9],[292.9,-355]],height:14,estimatedHeight:!0,at:526,kind:"apartments"},{id:"484324915",name:"",points:[[337.8,-344.4],[334.1,-351.8],[329.7,-349.9],[328,-353.8],[322.9,-351.6],[327.2,-343.2],[329.1,-344],[330,-341.7],[333,-342.3],[337.8,-344.4]],height:14,estimatedHeight:!0,at:578,kind:"yes"},{id:"484324916",name:"",points:[[289,-324.5],[291.5,-325.3],[288.6,-331.2],[285.3,-329.3],[289,-324.5]],height:14,estimatedHeight:!0,at:529,kind:"yes"},{id:"484324917",name:"",points:[[300.4,-353.1],[303.2,-347.5],[317.5,-353.9],[315.4,-359.2],[300.4,-353.1]],height:14,estimatedHeight:!0,at:548,kind:"apartments"},{id:"484324918",name:"",points:[[321.9,-310.4],[335.1,-315.5],[333.2,-319.5],[319.3,-315.4],[321.9,-310.4]],height:14,estimatedHeight:!0,at:556,kind:"apartments"},{id:"484324919",name:"",points:[[309.4,-383.4],[318.8,-387],[326.3,-368.6],[322.7,-366.9],[324.1,-363.9],[327.9,-365.5],[334.1,-351.8],[329.7,-349.9],[328,-353.8],[322.9,-351.6],[318.1,-360.1],[309.4,-383.4]],height:13.2,estimatedHeight:!1,at:577,kind:"apartments"},{id:"484324921",name:"",points:[[378.1,-338.8],[389.2,-343.8],[390.9,-345.2],[390.9,-346.5],[390,-348.5],[393.1,-349.6],[392.8,-351.8],[376,-344.3],[378.1,-338.8]],height:14,estimatedHeight:!0,at:620,kind:"yes"},{id:"484324922",name:"",points:[[308.1,-337.5],[309.9,-333.9],[328.6,-339.4],[326.7,-344.5],[308.1,-337.5]],height:14,estimatedHeight:!0,at:551,kind:"apartments"},{id:"484324923",name:"",points:[[425.1,-378.8],[423.2,-382.5],[407.2,-374.4],[409.3,-369.7],[412.8,-371.1],[412.4,-372.3],[425.1,-378.8]],height:14,estimatedHeight:!0,at:657,kind:"apartments"},{id:"484324925",name:"",points:[[429.2,-370.9],[427.3,-374.7],[418.3,-370.1],[419.1,-368.2],[417.9,-367.4],[416.9,-369.4],[410.2,-365.9],[412.1,-361.9],[424.5,-367.6],[424.2,-368.5],[429.2,-370.9]],height:14,estimatedHeight:!0,at:658,kind:"apartments"},{id:"484324926",name:"",points:[[270.7,-368.2],[262.2,-364.5],[265.5,-357.6],[268.3,-358.9],[275.4,-345.4],[276.8,-343.6],[281.9,-346.3],[281,-348.8],[270.7,-368.2]],height:13.2,estimatedHeight:!1,at:524,kind:"apartments"},{id:"484324927",name:"",points:[[270.8,-314.7],[281.1,-320.3],[281.5,-319.6],[289,-324.5],[285.3,-329.3],[282.9,-333.1],[265.4,-323.1],[270.8,-314.7]],height:14,estimatedHeight:!0,at:506,kind:"apartments"},{id:"484324928",name:"",points:[[316.8,-319.9],[334.1,-325.4],[334.6,-324.5],[335.9,-324.6],[337.4,-325.4],[336.7,-327.2],[336.4,-330.6],[314.4,-324.7],[316.8,-319.9]],height:14,estimatedHeight:!0,at:575,kind:"apartments"},{id:"484324929",name:"",points:[[359.5,-380.5],[345.1,-375],[346.9,-371.4],[348.2,-367.6],[345.1,-366.5],[346.1,-364],[346.4,-362.3],[364,-369.1],[359.5,-380.5]],height:14,estimatedHeight:!0,at:596,kind:"yes"},{id:"484324930",name:"",points:[[318.8,-387],[326.7,-389.9],[333.3,-375.6],[331.9,-374.9],[332.4,-373.8],[334,-374.5],[339.5,-361.5],[335.3,-359.7],[338.1,-353.3],[334.1,-351.8],[326.3,-368.6],[318.8,-387]],height:16.5,estimatedHeight:!1,at:581,kind:"apartments"},{id:"484324931",name:"",points:[[309.9,-333.9],[312.1,-329.4],[324.9,-333.5],[324.6,-334.3],[329.7,-335.8],[328.6,-339.4],[309.9,-333.9]],height:14,estimatedHeight:!0,at:552,kind:"apartments"},{id:"484324932",name:"",points:[[310.4,-320.1],[292.9,-311],[294.7,-307],[291.9,-304.8],[291.2,-306.1],[280.7,-298.7],[301,-267.3],[332.1,-275.6],[327.4,-285.6],[323.9,-291.2],[310.7,-284.1],[298.2,-304.3],[314.4,-313],[310.4,-320.1]],height:16.5,estimatedHeight:!1,at:557,kind:"apartments"},{id:"484324933",name:"",points:[[401.6,-336.8],[396.7,-348.9],[390.9,-346.5],[391,-343.5],[395.1,-334],[401.6,-336.8]],height:14,estimatedHeight:!0,at:634,kind:"yes"},{id:"484324934",name:"",points:[[354.7,-317],[350.9,-325.6],[347.7,-331.6],[343.8,-329.8],[350,-314.6],[354.7,-317]],height:14,estimatedHeight:!0,at:586,kind:"yes"},{id:"484324935",name:"",points:[[314.4,-324.7],[332.3,-329.5],[330.9,-332.6],[328.2,-332],[327.4,-335.1],[324.6,-334.3],[324.9,-333.5],[312.1,-329.4],[314.4,-324.7]],height:14,estimatedHeight:!0,at:573,kind:"apartments"},{id:"485724370",name:"",points:[[565.9,-358.1],[556.1,-355.4],[555.2,-358.2],[553.6,-362.2],[554.5,-362.4],[554.1,-363.6],[563.3,-366.1],[565.9,-358.1]],height:14,estimatedHeight:!0,at:805,kind:"yes"},{id:"485724371",name:"",points:[[530.7,-330.8],[525.7,-343.1],[528.6,-344.3],[527.3,-347.4],[531.2,-348.6],[535.7,-332.2],[530.7,-330.8]],height:14,estimatedHeight:!0,at:769,kind:"yes"},{id:"485724372",name:"",points:[[481.6,-422.1],[476,-435.1],[485.1,-439.4],[484.6,-441.3],[493.2,-445.6],[494.6,-442.6],[503.7,-448],[507.1,-442.3],[499,-439.1],[501.2,-434.5],[495.2,-431.9],[495.9,-430.1],[481.6,-422.1]],height:14,estimatedHeight:!0,at:742,kind:"yes"},{id:"485724374",name:"",points:[[554.3,-337.3],[548.4,-355.1],[542.7,-370.4],[550.6,-374.8],[554.5,-362.4],[549.9,-361],[551.4,-356.9],[555.2,-358.2],[557.1,-352.2],[563.5,-354.2],[567.6,-341],[554.3,-337.3]],height:14,estimatedHeight:!0,at:799,kind:"yes"},{id:"485724376",name:"",points:[[555.8,-364.1],[552.4,-375.1],[559.2,-379.1],[563.3,-366.1],[555.8,-364.1]],height:14,estimatedHeight:!0,at:804,kind:"yes"},{id:"485724377",name:"",points:[[514.2,-342.8],[526.8,-348.5],[528.6,-344.3],[525.7,-343.1],[530.7,-330.8],[520.4,-327.9],[514.2,-342.8]],height:13.2,estimatedHeight:!1,at:763,kind:"apartments"},{id:"485724379",name:"",points:[[515.9,-426.3],[510.8,-436.9],[510.1,-437.8],[517.2,-440.8],[518.1,-439],[519.6,-439.7],[524,-430.2],[515.9,-426.3]],height:14,estimatedHeight:!0,at:775,kind:"yes"},{id:"485724381",name:"",points:[[539,-437.4],[534.5,-446.6],[521.6,-440.6],[526.3,-431.3],[539,-437.4]],height:14,estimatedHeight:!0,at:786,kind:"yes"},{id:"485724382",name:"",points:[[535.7,-332.2],[531.2,-348.6],[532.1,-348.8],[535.8,-350.1],[536.5,-352.7],[537.5,-352.3],[540.1,-342],[541.4,-342.1],[543.7,-334.4],[535.7,-332.2]],height:14,estimatedHeight:!0,at:777,kind:"yes"},{id:"485724383",name:"",points:[[548,-373.3],[550.6,-374.8],[552.4,-375.1],[570,-385],[573.5,-387.5],[571.3,-392.5],[565.5,-388.9],[563.6,-394.5],[562,-393.9],[561,-395.8],[553.8,-392.4],[554.3,-390.5],[551.5,-389.2],[553.1,-386.1],[551.7,-385],[549.8,-389.1],[538.1,-382.9],[541.8,-375.6],[545.5,-377.7],[548,-373.3]],height:14,estimatedHeight:!0,at:791,kind:"yes"},{id:"485724386",name:"",points:[[543.7,-334.4],[541.4,-342.1],[540.1,-342],[537.5,-352.3],[543.2,-354.3],[548.5,-335.7],[543.7,-334.4]],height:14,estimatedHeight:!0,at:782,kind:"yes"},{id:"485724387",name:"",points:[[583.4,-345.5],[580,-357],[582,-358.1],[582.8,-356],[584.3,-356.3],[584,-357.7],[588.6,-358.9],[591.8,-347.9],[583.4,-345.5]],height:14,estimatedHeight:!0,at:818,kind:"apartments"},{id:"485724388",name:"",points:[[494.5,-390.5],[490.6,-400.1],[505.6,-406.8],[508.1,-401.9],[509.1,-402.4],[508.1,-404.2],[515,-407.2],[517.6,-401.6],[516.6,-400.8],[494.5,-390.5]],height:9.899999999999999,estimatedHeight:!1,at:745,kind:"apartments"},{id:"485724389",name:"",points:[[539,-437.4],[537,-441.7],[543.6,-444.7],[545.5,-440.6],[539,-437.4]],height:14,estimatedHeight:!0,at:800,kind:"yes"},{id:"485724391",name:"",points:[[516.6,-400.8],[517.6,-401.6],[523.7,-404.6],[516.2,-417.2],[520.1,-419.3],[527.4,-406.3],[529.7,-401.6],[520.3,-397],[519.6,-398.6],[518,-397.7],[516.6,-400.8]],height:14,estimatedHeight:!0,at:771,kind:"yes"},{id:"485724392",name:"",points:[[506,-362.5],[527.3,-372.8],[530.8,-365.2],[523.5,-361.9],[522,-365],[519.7,-363.9],[521.4,-360.1],[509.5,-354.1],[506,-362.5]],height:9.899999999999999,estimatedHeight:!1,at:749,kind:"apartments"},{id:"485724393",name:"",points:[[483.7,-416.8],[481.6,-422.1],[497,-430.7],[498.5,-428],[500.7,-429.2],[499.8,-431.6],[502,-433],[503.6,-429.9],[507.8,-431.8],[506.6,-434.7],[510.8,-436.9],[513.6,-431],[508.5,-428.3],[501.9,-425.6],[483.7,-416.8]],height:14,estimatedHeight:!0,at:742,kind:"yes"},{id:"485724394",name:"",points:[[567.6,-341],[563.5,-354.2],[562.4,-353.9],[561.6,-356.9],[565.9,-358.1],[563.3,-366.1],[576.2,-370],[578.6,-361.2],[576,-360.7],[577.1,-356.2],[580,-357],[583.4,-345.5],[567.6,-341]],height:14,estimatedHeight:!0,at:802,kind:"yes"},{id:"485724395",name:"",points:[[591.5,-366.7],[591,-369.3],[597.9,-371.2],[607.4,-352.3],[596.5,-349.2],[591.5,-366.7]],height:14,estimatedHeight:!0,at:832,kind:"apartments"},{id:"485724396",name:"",points:[[596.5,-349.2],[591.8,-347.9],[588.6,-358.9],[584,-357.7],[583.7,-358.6],[582,-358.1],[580,-357],[577.2,-366.3],[585.9,-369],[586.7,-365.1],[591.5,-366.7],[596.5,-349.2]],height:14,estimatedHeight:!0,at:827,kind:"apartments"},{id:"485724397",name:"",points:[[509.5,-354.1],[521.4,-360.1],[521,-360.9],[530.8,-365.2],[533.3,-357.5],[534.7,-358.2],[536.5,-352.7],[535.8,-350.1],[532.1,-348.8],[531.1,-352.2],[529.8,-351.9],[529.3,-353.3],[524,-350.7],[525.2,-347.9],[514.2,-342.8],[509.5,-354.1]],height:13.2,estimatedHeight:!1,at:751,kind:"apartments"},{id:"485724402",name:"",points:[[485.5,-412.4],[483.7,-416.8],[501.9,-425.6],[504,-421.8],[499.2,-419.5],[498.4,-421.5],[497.2,-420.9],[498.1,-418.5],[485.5,-412.4]],height:14,estimatedHeight:!0,at:743,kind:"yes"},{id:"485724403",name:"",points:[[530.8,-365.2],[542.5,-371.5],[542.7,-370.4],[548,-373.3],[545.5,-377.7],[541.8,-375.6],[539.9,-379],[527.3,-372.8],[530.8,-365.2]],height:14,estimatedHeight:!0,at:773,kind:"yes"},{id:"485724406",name:"",points:[[548.5,-335.7],[546.3,-343.3],[549.8,-344.4],[549.1,-346.3],[545.7,-345.4],[543.2,-354.3],[548.4,-355.1],[554.3,-337.3],[548.5,-335.7]],height:14,estimatedHeight:!0,at:788,kind:"yes"},{id:"486624923",name:"",points:[[187.5,-317.8],[176.6,-310.4],[186,-298],[197.2,-305.1],[187.5,-317.8]],height:14,estimatedHeight:!0,at:412,kind:"yes"},{id:"486624925",name:"",points:[[192.2,-325.8],[184.1,-340.1],[188.6,-343.2],[187,-345.8],[189.2,-347.6],[199.8,-331.8],[192.2,-325.8]],height:14,estimatedHeight:!0,at:422,kind:"yes"},{id:"486624926",name:"",points:[[199.8,-331.8],[203.6,-335.6],[192.7,-347.5],[190.3,-345.7],[199.8,-331.8]],height:14,estimatedHeight:!0,at:430,kind:"yes"},{id:"486624928",name:"",points:[[192.5,-321.1],[187.5,-317.8],[197.2,-305.1],[201.9,-308.5],[192.5,-321.1]],height:14,estimatedHeight:!0,at:424,kind:"yes"},{id:"486624931",name:"",points:[[152.4,-324.3],[158,-321.5],[163.4,-319.6],[164.8,-335.9],[160.8,-335.9],[159.5,-340.2],[156.5,-339.5],[156.3,-335.8],[155,-335.9],[152.4,-324.3]],height:14,estimatedHeight:!0,at:392,kind:"yes"},{id:"486624935",name:"",points:[[171.8,-344.9],[180.6,-348.9],[181.4,-343.4],[175,-341.1],[172.7,-340.8],[171.8,-344.9]],height:14,estimatedHeight:!0,at:403,kind:"yes"},{id:"486624936",name:"",points:[[217.1,-349.9],[211.8,-342.5],[225.5,-325.4],[230.5,-327.6],[232.6,-329.4],[217.1,-349.9]],height:14,estimatedHeight:!0,at:465,kind:"yes"},{id:"486624938",name:"",points:[[203.4,-329.3],[200.1,-326.3],[209.4,-313.9],[212.9,-316.4],[203.4,-329.3]],height:14,estimatedHeight:!0,at:446,kind:"yes"},{id:"486624939",name:"",points:[[203.6,-335.6],[206.3,-339.8],[195.3,-349.8],[192.7,-347.5],[203.6,-335.6]],height:14,estimatedHeight:!0,at:434,kind:"yes"},{id:"486624942",name:"",points:[[206.3,-339.8],[208.8,-345],[210.7,-350.5],[195.4,-358.5],[189.2,-351],[191.4,-348.2],[193.1,-349.9],[194.1,-348.8],[195.3,-349.8],[206.3,-339.8]],height:14,estimatedHeight:!0,at:450,kind:"yes"},{id:"486624946",name:"",points:[[144.2,-330.5],[156.5,-339.5],[156.3,-335.8],[155,-335.9],[152.4,-324.3],[148.6,-326.8],[144.2,-330.5]],height:14,estimatedHeight:!0,at:381,kind:"apartments"},{id:"486624947",name:"",points:[[221.7,-354.3],[217.1,-349.9],[232.6,-329.4],[235.4,-331.2],[226.7,-346.7],[221.7,-354.3]],height:14,estimatedHeight:!0,at:473,kind:"yes"},{id:"486624949",name:"",points:[[196.7,-323.7],[192.5,-321.1],[201.9,-308.5],[206,-311.5],[196.7,-323.7]],height:14,estimatedHeight:!0,at:429,kind:"yes"},{id:"486624950",name:"",points:[[176.4,-319.4],[180.9,-320.4],[175,-341.1],[171.6,-340.6],[172.3,-335.3],[176.4,-319.4]],height:14,estimatedHeight:!0,at:405,kind:"yes"},{id:"486624952",name:"",points:[[163.4,-319.6],[176.4,-319.4],[172.3,-335.3],[164.8,-335.9],[163.4,-319.6]],height:14,estimatedHeight:!0,at:405,kind:"yes"},{id:"486624953",name:"",points:[[206.1,-332.5],[203.4,-329.3],[212.9,-316.4],[216.5,-319],[215.6,-320.4],[206.1,-332.5]],height:14,estimatedHeight:!0,at:450,kind:"yes"},{id:"486624955",name:"",points:[[165.6,-344.7],[168.8,-346.8],[171.5,-346.1],[172.7,-340.8],[171.6,-340.6],[172.3,-335.3],[167.2,-335.7],[165.6,-344.7]],height:14,estimatedHeight:!0,at:402,kind:"yes"},{id:"486624958",name:"",points:[[207.7,-335.8],[206.1,-332.5],[215.6,-320.4],[218,-322.1],[207.7,-335.8]],height:14,estimatedHeight:!0,at:454,kind:"yes"},{id:"486624959",name:"",points:[[211.8,-342.5],[207.7,-335.8],[217.2,-323.2],[223.5,-327.9],[211.8,-342.5]],height:14,estimatedHeight:!0,at:456,kind:"yes"},{id:"486624961",name:"",points:[[200.1,-326.3],[196.7,-323.7],[206,-311.5],[209.4,-313.9],[200.1,-326.3]],height:14,estimatedHeight:!0,at:434,kind:"yes"},{id:"491889265",name:"",points:[[-25.4,-119.7],[4.4,-119.2],[3.3,-89.5],[.1,-89.3],[.1,-90],[-5.7,-90],[-5.8,-91.2],[-11,-91],[-11.3,-96.8],[-15.2,-96.5],[-15,-90.8],[-27.6,-89.8],[-28,-103.2],[-25.6,-103.2],[-25.4,-119.7]],height:14,estimatedHeight:!0,at:90,kind:"yes"},{id:"491889267",name:"",points:[[-42.2,-45.5],[-43.7,-45.3],[-43.9,-43.3],[-60,-40.3],[-81.3,-39.4],[-78.8,-64.4],[-60.3,-63.4],[-62.1,-52.5],[-48.3,-52.7],[-48.2,-51.5],[-42.8,-51.9],[-42.2,-45.5]],height:13.2,estimatedHeight:!1,at:43,kind:"yes"},{id:"491889269",name:"",points:[[-60.5,-18.4],[-60.9,-26.6],[-45.9,-28.2],[-44.7,-19.5],[-60.5,-18.4]],height:16.5,estimatedHeight:!1,at:16,kind:"yes"},{id:"491889270",name:"",points:[[-76.8,-76.7],[-65.6,-74.6],[-65.7,-72.6],[-61.2,-72.6],[-61.5,-75.5],[-58.6,-75.9],[-57.5,-66.8],[-59.7,-67.2],[-60.3,-63.4],[-78.8,-64.4],[-76.8,-76.7]],height:14,estimatedHeight:!0,at:64,kind:"yes"},{id:"491889271",name:"",points:[[-70.1,-11.5],[-70.5,-17],[-80.7,-16.8],[-80.7,-38.1],[-74.1,-38.3],[-73.4,-27.6],[-61,-28.6],[-60.5,-18.4],[-44.7,-19.5],[-44.1,-12.8],[-70.1,-11.5]],height:14,estimatedHeight:!0,at:9,kind:"yes"},{id:"491889272",name:"",points:[[-75.4,-89.1],[-61.1,-89.5],[-59,-79],[-61.6,-78.5],[-61.5,-75.5],[-65.6,-74.6],[-76.8,-76.7],[-75.4,-89.1]],height:14,estimatedHeight:!0,at:76,kind:"yes"},{id:"491889273",name:"",points:[[3.3,-89.5],[2.8,-80.9],[-14.8,-81.3],[-15,-90.8],[-5.8,-91.2],[-5.7,-90],[.1,-90],[.1,-89.3],[3.3,-89.5]],height:14,estimatedHeight:!0,at:90,kind:"yes"},{id:"491889276",name:"",points:[[-96.9,-43.3],[-97.2,-45.4],[-111.1,-43.1],[-108.5,-30.2],[-95.1,-31.8],[-96.9,-43.3]],height:13.2,estimatedHeight:!1,at:25,kind:"yes"},{id:"491889281",name:"",points:[[-15,-90.8],[-14.9,-84.1],[-27.3,-83.5],[-27.6,-89.8],[-15,-90.8]],height:14,estimatedHeight:!0,at:83,kind:"yes"},{id:"491889282",name:"",points:[[-25.9,-55.5],[-25.1,-71.3],[-29.1,-71.1],[-28.5,-69.2],[-26.4,-68.7],[-28.7,-48],[-42.2,-45.5],[-42.8,-51.9],[-48.2,-51.5],[-48.3,-52.7],[-62.1,-52.5],[-59.7,-67.2],[-57.5,-66.8],[-59,-79],[-51.3,-80],[-50.8,-74.7],[-26.5,-76.9],[-27.3,-83.5],[-14.9,-84.1],[-14.3,-61.6],[-16.4,-61.6],[-16.2,-55.7],[-25.9,-55.5]],height:6.6,estimatedHeight:!1,at:61,kind:"yes"},{id:"491889284",name:"",points:[[-.5,-36],[-1.2,-26.4],[-20.5,-26.3],[-22,-34.2],[-10.4,-35.5],[-.5,-36]],height:13.2,estimatedHeight:!1,at:26,kind:"apartments"},{id:"491889285",name:"",points:[[-43.5,-29.1],[-42.5,-14.9],[-37.6,-15.2],[-37.5,-16.3],[-35.1,-16.9],[-30.2,-20.4],[-28,-22.6],[-27.1,-24.5],[-26.6,-26.1],[-26.4,-29.3],[-32.6,-28.3],[-39.5,-28],[-39.5,-29],[-43.5,-29.1]],height:6.6,estimatedHeight:!1,at:24,kind:"yes"},{id:"491889286",name:"",points:[[-35.2,-44],[-28.4,-45.9],[-24,-29.6],[-32.6,-28.3],[-35.2,-44]],height:13.2,estimatedHeight:!1,at:27,kind:"yes"},{id:"491889288",name:"",points:[[1.5,-62.6],[-7,-62.6],[-7.3,-59.8],[-9.1,-59.9],[-9,-55.9],[-16.2,-55.7],[-16.4,-61.6],[-14.3,-61.6],[-14.8,-81.3],[2.8,-80.9],[1.5,-62.6]],height:16.5,estimatedHeight:!1,at:81,kind:"yes"},{id:"491889292",name:"",points:[[-80.5,.7],[-80.6,-11],[-58.6,-12.1],[-58.5,-8.7],[-54.4,-9.1],[-54.5,-12.4],[-44.1,-12.8],[-43.5,-.1],[-80.5,.7]],height:13.2,estimatedHeight:!1,at:0,kind:"yes"},{id:"491889294",name:"",points:[[-74.1,-38.3],[-60.2,-38.8],[-60,-28.6],[-73.4,-27.6],[-74.1,-38.3]],height:9.899999999999999,estimatedHeight:!1,at:24,kind:"yes"},{id:"491891365",name:"",points:[[110.3,-291.7],[89.8,-289.4],[90.9,-278],[93.9,-278],[93.7,-281.4],[98.7,-282.3],[98.8,-274.3],[109.5,-274.4],[109.1,-280.7],[110.6,-280.8],[110.3,-291.7]],height:14,estimatedHeight:!0,at:333,kind:"yes"},{id:"491891366",name:"",points:[[126.9,-296.8],[134.5,-297.7],[133.9,-304.3],[133.2,-323.2],[127.4,-322.9],[127.5,-310],[125.8,-310],[126.9,-296.8]],height:14,estimatedHeight:!0,at:353,kind:"yes"},{id:"491891367",name:"",points:[[184.6,-277.2],[180,-283.7],[173,-279.5],[169.4,-284.3],[165.9,-281.9],[168.9,-272.8],[176.4,-273.3],[184.6,-277.2]],height:14,estimatedHeight:!0,at:399,kind:"yes"},{id:"491891368",name:"",points:[[116.7,-295.5],[126.9,-296.8],[126,-307.7],[123.9,-307.6],[123.7,-309.9],[127.5,-310],[127.4,-322.9],[115.6,-322.2],[117.2,-311.3],[115.3,-311.2],[116.7,-295.5]],height:14,estimatedHeight:!0,at:342,kind:"yes"},{id:"491891369",name:"",points:[[99.5,-266.9],[110.1,-266.5],[109.5,-274.4],[98.8,-274.3],[99.5,-266.9]],height:14,estimatedHeight:!0,at:333,kind:"yes"},{id:"491891371",name:"",points:[[152,-270.5],[156,-271.1],[153,-281.6],[149.6,-281.1],[152,-270.5]],height:14,estimatedHeight:!0,at:375,kind:"yes"},{id:"491891372",name:"",points:[[127.6,-293.5],[119.6,-292.7],[120.5,-284.3],[121.9,-284.4],[122.3,-279.3],[128.7,-280.3],[127.6,-293.5]],height:14,estimatedHeight:!0,at:346,kind:"yes"},{id:"491891373",name:"",points:[[149.3,-296],[152.7,-283.8],[159.4,-284.8],[158.6,-288.6],[162.4,-289.7],[157.7,-297.5],[149.3,-296]],height:14,estimatedHeight:!0,at:377,kind:"yes"},{id:"491891375",name:"",points:[[116.7,-295.5],[115.3,-311.2],[107.5,-310.3],[108,-306.4],[104.4,-306.2],[106.1,-294.3],[116.7,-295.5]],height:14,estimatedHeight:!0,at:332,kind:"yes"},{id:"491891376",name:"",points:[[187.9,-289.3],[180,-283.7],[184.6,-277.2],[192.5,-282.7],[187.9,-289.3]],height:14,estimatedHeight:!0,at:408,kind:"apartments"},{id:"491891377",name:"",points:[[131.5,-294],[127.6,-293.5],[128.7,-280.3],[133.1,-280.9],[131.5,-294]],height:14,estimatedHeight:!0,at:353,kind:"yes"},{id:"491891378",name:"",points:[[115.6,-322.2],[100.6,-320.6],[102.4,-308.4],[107.8,-308.6],[107.5,-310.3],[117.2,-311.3],[115.6,-322.2]],height:14,estimatedHeight:!0,at:335,kind:"apartments"},{id:"491891379",name:"",points:[[180.8,-297.5],[173.3,-306.4],[164,-300.8],[166.7,-296.6],[163.6,-293.7],[166.2,-290.4],[167.7,-291.4],[169.3,-288.8],[180.8,-297.5]],height:16.5,estimatedHeight:!1,at:394,kind:"apartments"},{id:"491891380",name:"",points:[[163.4,-272.1],[168.9,-272.8],[162.4,-289.7],[158.6,-288.6],[158.9,-287.4],[160.4,-287.6],[161.7,-285],[159.4,-284.8],[163.4,-272.1]],height:14,estimatedHeight:!0,at:386,kind:"yes"},{id:"491891382",name:"",points:[[140.5,-269.2],[145.5,-269.7],[142.6,-282.2],[138,-281.4],[140.5,-269.2]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"491891383",name:"",points:[[119.6,-292.7],[110.3,-291.7],[110.5,-284],[113.9,-284.3],[114.1,-278],[116.3,-278],[116.2,-276],[118.5,-276.3],[118.3,-278.8],[121,-278.8],[119.6,-292.7]],height:14,estimatedHeight:!0,at:342,kind:"yes"},{id:"491891384",name:"",points:[[110.1,-266.5],[126.6,-267.7],[125.5,-279.8],[122.3,-279.3],[121,-278.8],[118.3,-278.8],[118.5,-276.3],[116.2,-276],[116.3,-278],[114.1,-278],[114,-281.2],[109.1,-280.7],[110.1,-266.5]],height:14,estimatedHeight:!0,at:349,kind:"yes"},{id:"491891385",name:"",points:[[163.4,-272.1],[159.4,-284.8],[151.3,-283.7],[151.7,-281.4],[153,-281.6],[156,-271.1],[163.4,-272.1]],height:14,estimatedHeight:!0,at:379,kind:"yes"},{id:"491891386",name:"",points:[[164,-300.8],[157.7,-297.5],[162.4,-289.7],[164.6,-285.3],[169.3,-288.8],[167.7,-291.4],[166.2,-290.4],[163.6,-293.7],[166.7,-296.6],[164,-300.8]],height:14,estimatedHeight:!0,at:389,kind:"yes"},{id:"491891387",name:"",points:[[100.6,-320.6],[91.7,-319.7],[93.1,-308.8],[93.3,-304.7],[102.7,-305.9],[100.6,-320.6]],height:14,estimatedHeight:!0,at:320,kind:"apartments"},{id:"491891388",name:"",points:[[141.8,-295.3],[143.4,-282.3],[149,-283.5],[152.7,-283.8],[149.3,-296],[141.8,-295.3]],height:14,estimatedHeight:!0,at:367,kind:"yes"},{id:"491891389",name:"",points:[[126.6,-267.7],[132,-268.1],[128.7,-280.3],[125.5,-279.8],[126.6,-267.7]],height:14,estimatedHeight:!0,at:355,kind:"yes"},{id:"491891390",name:"",points:[[145.5,-269.7],[152,-270.5],[149,-283.5],[142.6,-282.2],[145.5,-269.7]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"491891391",name:"",points:[[131.5,-294],[133.1,-280.9],[138,-281.4],[140.7,-281.9],[140.3,-284.5],[143.1,-285],[141.8,-295.3],[131.5,-294]],height:14,estimatedHeight:!0,at:362,kind:"yes"},{id:"491891392",name:"",points:[[180.8,-297.5],[167.2,-287.2],[169.8,-284.1],[172.5,-280.2],[177.5,-283.2],[178.1,-282.6],[180,-283.7],[187.9,-289.3],[180.8,-297.5]],height:14,estimatedHeight:!0,at:396,kind:"apartments"},{id:"491891393",name:"",points:[[81.9,-277],[81.8,-278],[83.1,-277.9],[83.1,-280.8],[86.7,-280.8],[86.7,-277.8],[90.9,-278],[89.8,-289.4],[78.8,-288.5],[80.3,-277],[81.9,-277]],height:14,estimatedHeight:!0,at:306,kind:"yes"},{id:"491891394",name:"",points:[[106.1,-294.3],[104.4,-306.2],[96.3,-305.1],[98.1,-293.3],[106.1,-294.3]],height:14,estimatedHeight:!0,at:323,kind:"yes"},{id:"491891395",name:"",points:[[99.5,-266.9],[98.8,-275.2],[93.9,-275.4],[93.9,-278],[90.9,-278],[90.5,-267.1],[99.5,-266.9]],height:14,estimatedHeight:!0,at:322,kind:"yes"},{id:"491891396",name:"",points:[[132,-268.1],[140.5,-269.2],[138,-281.4],[131.4,-280.7],[132.1,-277.5],[129.6,-276.9],[132,-268.1]],height:14,estimatedHeight:!0,at:355,kind:"yes"},{id:"491891885",name:"",points:[[127.3,-329.6],[120.5,-343.2],[117.1,-341.9],[118.8,-337.3],[123.8,-328.7],[127.3,-329.6]],height:14,estimatedHeight:!0,at:353,kind:"yes"},{id:"491891887",name:"",points:[[128.1,-348.3],[123.4,-345.8],[123.8,-344.6],[121.7,-344],[121.3,-345.1],[118.7,-344.3],[119.3,-342.8],[120.5,-343.2],[127.3,-329.6],[137.7,-332.3],[137.9,-333.9],[132.3,-341.8],[128.1,-348.3]],height:14,estimatedHeight:!0,at:357,kind:"yes"},{id:"491891890",name:"",points:[[113.4,-359.5],[103.7,-355.7],[107.2,-343.4],[109,-343.9],[109.8,-340.2],[105,-338.7],[106.9,-332.5],[118.8,-337.3],[117.1,-341.9],[117.8,-342.2],[113.4,-359.5]],height:14,estimatedHeight:!0,at:337,kind:"yes"},{id:"491926107",name:"",points:[[157.5,-267.9],[161.5,-268.4],[163.7,-251.9],[162.3,-251.8],[162.1,-254.5],[159.6,-254.1],[157.5,-267.9]],height:14,estimatedHeight:!0,at:384,kind:"yes"},{id:"491926108",name:"",points:[[98,-263.7],[102,-263.8],[102.6,-249.4],[98.3,-249.2],[98,-263.7]],height:14,estimatedHeight:!0,at:323,kind:"yes"},{id:"491926109",name:"",points:[[251.7,-252.4],[243.7,-250.2],[241.4,-259.4],[248.5,-263],[251.7,-252.4]],height:14,estimatedHeight:!0,at:464,kind:"yes"},{id:"491926110",name:"",points:[[243.7,-250.2],[222.8,-244.7],[220.7,-249],[241.4,-259.4],[243.7,-250.2]],height:14,estimatedHeight:!0,at:443,kind:"yes"},{id:"491926111",name:"",points:[[218.2,-243.9],[210.5,-256.8],[205.6,-253.9],[211.4,-242.8],[218.2,-243.9]],height:14,estimatedHeight:!0,at:431,kind:"yes"},{id:"491926112",name:"",points:[[116.9,-264.1],[120.2,-264.2],[121.3,-251],[117.2,-250.3],[116.9,-264.1]],height:14,estimatedHeight:!0,at:338,kind:"yes"},{id:"491926113",name:"",points:[[120.2,-264.2],[128.8,-264.8],[129.3,-251],[121.3,-251],[120.2,-264.2]],height:14,estimatedHeight:!0,at:350,kind:"yes"},{id:"491926114",name:"",points:[[102,-263.8],[109.3,-263.9],[110,-249.9],[102.6,-249.4],[102,-263.8]],height:14,estimatedHeight:!0,at:331,kind:"yes"},{id:"491926115",name:"",points:[[176.8,-269.7],[179.9,-270.6],[184.8,-259],[180.4,-258.2],[176.8,-269.7]],height:14,estimatedHeight:!0,at:402,kind:"yes"},{id:"491926116",name:"",points:[[205.5,-242],[176.8,-240],[175.1,-253.8],[176.9,-253.9],[176.4,-257.7],[180.4,-258.2],[180.8,-256.5],[185.6,-257.4],[185.8,-256.4],[189.2,-256.1],[190.5,-247.6],[195.7,-248.2],[201,-251.2],[205.5,-242]],height:14,estimatedHeight:!0,at:425,kind:"yes"},{id:"491926117",name:"",points:[[128.8,-264.8],[132.8,-265],[134,-250.1],[132.5,-250.1],[132.5,-251.2],[129.3,-251],[128.8,-264.8]],height:14,estimatedHeight:!0,at:355,kind:"yes"},{id:"491926118",name:"",points:[[173.2,-239.6],[176.8,-240],[175.1,-253.8],[173.7,-253.5],[173,-257.2],[170.9,-257.1],[173.2,-239.6]],height:14,estimatedHeight:!0,at:393,kind:"yes"},{id:"491926119",name:"",points:[[211.4,-242.8],[205.5,-242],[201,-251.2],[205.6,-253.9],[211.4,-242.8]],height:14,estimatedHeight:!0,at:425,kind:"yes"},{id:"491926120",name:"",points:[[165.9,-238.7],[173.2,-239.6],[171.4,-252.5],[163.7,-251.9],[165.9,-238.7]],height:14,estimatedHeight:!0,at:385,kind:"yes"},{id:"491926121",name:"",points:[[109.3,-263.9],[116.9,-264.1],[117.2,-250.3],[110,-249.9],[109.3,-263.9]],height:14,estimatedHeight:!0,at:337,kind:"yes"},{id:"491926122",name:"",points:[[162.2,-238],[165.9,-238.7],[163.7,-251.9],[160,-251.6],[162.2,-238]],height:14,estimatedHeight:!0,at:381,kind:"yes"},{id:"491926123",name:"",points:[[172.3,-269.1],[176.8,-269.7],[180.4,-258.2],[174.5,-257.4],[172.3,-269.1]],height:14,estimatedHeight:!0,at:396,kind:"yes"},{id:"491926124",name:"",points:[[147.9,-266.8],[152.1,-267.3],[153.9,-252.9],[149.2,-252.1],[147.9,-266.8]],height:14,estimatedHeight:!0,at:371,kind:"yes"},{id:"491926125",name:"",points:[[136.8,-265.4],[140.7,-265.7],[142.2,-256],[142.3,-251.8],[138.6,-251],[136.8,-265.4]],height:14,estimatedHeight:!0,at:359,kind:"yes"},{id:"491926126",name:"",points:[[143.8,-236.3],[152,-237],[150.4,-252.3],[149.2,-252.1],[149.1,-255.1],[146.8,-254.7],[146.1,-256.5],[142.2,-256],[142.3,-251.8],[143.8,-236.3]],height:14,estimatedHeight:!0,at:371,kind:"yes"},{id:"491926127",name:"",points:[[87,-264],[92.1,-263.7],[92.9,-247.3],[90.9,-247.1],[90.7,-250.7],[89.1,-250.7],[89.1,-244.6],[87.6,-244.3],[87,-264]],height:14,estimatedHeight:!0,at:308,kind:"yes"},{id:"491926128",name:"",points:[[210.5,-256.8],[205.9,-263.4],[192.9,-255.9],[191.8,-257.9],[189.2,-256.1],[190.5,-247.6],[195.7,-248.2],[210.5,-256.8]],height:14,estimatedHeight:!0,at:416,kind:"yes"},{id:"491926129",name:"",points:[[179.9,-270.6],[183.1,-272],[190.2,-260.4],[184.8,-259],[179.9,-270.6]],height:14,estimatedHeight:!0,at:406,kind:"yes"},{id:"491926130",name:"",points:[[152.1,-267.3],[157.5,-267.9],[159.6,-254.1],[153.9,-252.9],[152.1,-267.3]],height:14,estimatedHeight:!0,at:375,kind:"yes"},{id:"491926131",name:"",points:[[82.3,-264.1],[87,-264],[87.4,-249.1],[84.8,-249.1],[84.8,-245],[82.4,-244.9],[82.3,-264.1]],height:14,estimatedHeight:!0,at:305,kind:"yes"},{id:"491926132",name:"",points:[[135.4,-235.6],[143.8,-236.3],[142.3,-251.8],[138.6,-251],[138.8,-246.9],[136.8,-247],[134.2,-246.8],[135.4,-235.6]],height:14,estimatedHeight:!0,at:363,kind:"yes"},{id:"491926133",name:"",points:[[282.3,-270.1],[287.1,-261.8],[270.7,-257.2],[268.8,-268.3],[275.2,-270.8],[277,-267.6],[282.3,-270.1]],height:14,estimatedHeight:!0,at:492,kind:"apartments"},{id:"491926134",name:"",points:[[140.7,-265.7],[147.9,-266.8],[149.1,-255.1],[146.8,-254.7],[146.1,-256.5],[142.2,-256],[140.7,-265.7]],height:14,estimatedHeight:!0,at:368,kind:"yes"},{id:"491926135",name:"",points:[[134,-250.1],[132.8,-265],[136.8,-265.4],[138.6,-251],[136.6,-250.3],[134,-250.1]],height:14,estimatedHeight:!0,at:357,kind:"yes"},{id:"491926136",name:"",points:[[169.1,-268.9],[172.3,-269.1],[173.5,-263],[171.8,-262.7],[172,-260.4],[173.9,-260.9],[174.5,-257.4],[170.9,-257.1],[169.1,-268.9]],height:14,estimatedHeight:!0,at:394,kind:"yes"},{id:"491926137",name:"",points:[[127.9,-235],[135.4,-235.6],[134.2,-246.8],[136.8,-247],[136.6,-250.3],[132.5,-250.1],[132.9,-247.6],[129.6,-247.4],[127.3,-246.4],[127.9,-235]],height:14,estimatedHeight:!0,at:354,kind:"yes"},{id:"491926138",name:"",points:[[270.7,-257.2],[251.7,-252.4],[248.5,-263],[254.7,-266.1],[268.6,-272.1],[270.6,-268.9],[268.8,-268.3],[270.7,-257.2]],height:14,estimatedHeight:!0,at:473,kind:"yes"},{id:"491926139",name:"",points:[[152,-237],[162.2,-238],[159.6,-254.1],[157.4,-253.6],[157.6,-252.2],[150.5,-251.1],[152,-237]],height:14,estimatedHeight:!0,at:381,kind:"yes"},{id:"491926140",name:"",points:[[161.5,-268.4],[169.1,-268.9],[170.9,-257.1],[166,-256.7],[166.6,-252.2],[163.7,-251.9],[161.5,-268.4]],height:14,estimatedHeight:!0,at:387,kind:"yes"},{id:"491926141",name:"",points:[[92.1,-263.7],[98,-263.7],[98.3,-249.2],[92.8,-248.8],[92.1,-263.7]],height:14,estimatedHeight:!0,at:319,kind:"yes"},{id:"495062037",name:"",points:[[-35.7,-294.8],[-34.6,-305.6],[-62.8,-306.6],[-62.7,-299.7],[-61.8,-295.1],[-65.7,-293.9],[-65,-290],[-60.6,-291.8],[-53.4,-293],[-52.3,-288.4],[-48.8,-288.9],[-49.2,-293.2],[-35.7,-294.8]],height:16.5,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062038",name:"",points:[[-71.7,-283.8],[-72.6,-289],[-65,-290],[-64,-285.1],[-71.7,-283.8]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062039",name:"",points:[[-83.2,-285.5],[-80.2,-266.3],[-88.4,-265.1],[-90.2,-276.9],[-91.3,-276.8],[-92.2,-284.2],[-83.2,-285.5]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062040",name:"",points:[[-80.8,-287.8],[-83.3,-295],[-78.1,-297],[-76.8,-292.3],[-74,-293.2],[-72.6,-289],[-80.8,-287.8]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062041",name:"",points:[[-103.3,-261],[-102.7,-248.5],[-98.9,-248.6],[-99.1,-261],[-103.3,-261]],height:16.5,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062042",name:"",points:[[-79.8,-246],[-79.6,-252.6],[-79.8,-262.9],[-99.1,-261],[-98.9,-248.6],[-92.9,-248.8],[-92.8,-244.7],[-89.6,-244.6],[-89.5,-245.6],[-79.8,-246]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062044",name:"",points:[[-78.5,-275.3],[-79.4,-281.7],[-68.5,-282.3],[-67.5,-278],[-78.5,-275.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062046",name:"",points:[[-34.7,-278.7],[-48.5,-273.7],[-50,-283.7],[-46.4,-284.4],[-47.1,-287.5],[-48.7,-287.4],[-49.2,-293.2],[-35.7,-294.8],[-36.2,-288.6],[-34.7,-278.7]],height:16.5,estimatedHeight:!1,at:219,kind:"hotel"},{id:"495062048",name:"",points:[[-48.5,-273.7],[-62.8,-269.4],[-64.8,-276.7],[-60,-278],[-61,-285.9],[-62.3,-291.1],[-60.6,-291.8],[-53.4,-293],[-52.3,-288.4],[-52.1,-286.6],[-49.8,-287.1],[-49,-283.9],[-50,-283.7],[-48.5,-273.7]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062049",name:"",points:[[-102.3,-264.3],[-102.6,-274],[-99.6,-274.1],[-99.8,-276.7],[-102.7,-276.5],[-102.7,-278.8],[-93.4,-279.2],[-93.1,-276.5],[-90.2,-276.9],[-88.4,-265.1],[-102.3,-264.3]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062051",name:"",points:[[-83.3,-295],[-85.2,-299.6],[-71.2,-304],[-70.3,-302.8],[-65.7,-304.2],[-62.7,-304.5],[-62.7,-299.7],[-66.2,-299.5],[-65,-290],[-72.6,-289],[-74,-293.2],[-76.8,-292.3],[-78.1,-297],[-83.3,-295]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"495062052",name:"",points:[[-77,-266.7],[-78.5,-275.3],[-67.5,-278],[-65.1,-269],[-77,-266.7]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"495062053",name:"",points:[[-79.4,-281.7],[-80.8,-287.8],[-72.6,-289],[-71.7,-283.8],[-70.6,-284],[-70.2,-282.2],[-79.4,-281.7]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263196",name:"",points:[[-46.6,-123.7],[-25.7,-122.9],[-26.7,-136.9],[-28.7,-144.7],[-36.6,-143.7],[-43.5,-143.3],[-43.4,-141.2],[-47.6,-141],[-46.6,-123.7]],height:14,estimatedHeight:!0,at:123,kind:"yes"},{id:"497263202",name:"",points:[[-85.9,-169.7],[-85.2,-160.7],[-74.9,-161.9],[-75.5,-171],[-85.9,-169.7]],height:14,estimatedHeight:!0,at:178,kind:"yes"},{id:"497263204",name:"",points:[[-117.7,-202.3],[-117.5,-206.1],[-116.9,-209.2],[-109.9,-214.5],[-97.8,-214],[-98.5,-200.1],[-97.5,-199.5],[-97.9,-191.8],[-103.3,-192.5],[-114.7,-192.8],[-114.8,-202.1],[-117.7,-202.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263214",name:"",points:[[-53.2,-123.8],[-46.6,-123.7],[-47.6,-141],[-56.1,-140.6],[-55.9,-135.6],[-53.8,-134.4],[-53.2,-123.8]],height:14,estimatedHeight:!0,at:119,kind:"apartments"},{id:"497263216",name:"",points:[[-77.7,-185.7],[-71.6,-186.7],[-71.9,-171.5],[-77,-171],[-77.7,-185.7]],height:14,estimatedHeight:!0,at:196,kind:"apartments"},{id:"497263225",name:"",points:[[-56,-149.6],[-55.8,-159.5],[-38.5,-158.5],[-36.6,-143.7],[-43.5,-143.3],[-43.8,-150.1],[-56,-149.6]],height:14,estimatedHeight:!0,at:145,kind:"house"},{id:"497263233",name:"",points:[[-89.7,-183.8],[-86.4,-184.3],[-85.9,-169.7],[-88,-169.2],[-89.7,-183.8]],height:14,estimatedHeight:!0,at:196,kind:"apartments"},{id:"497263237",name:"",points:[[-70.6,-143.1],[-76.3,-142.8],[-76.1,-124.1],[-70.2,-124],[-69.8,-135.3],[-70.6,-143.1]],height:14,estimatedHeight:!0,at:136,kind:"yes"},{id:"497263239",name:"",points:[[-58.6,-161.8],[-58.7,-172.6],[-65.5,-172.7],[-65.2,-182.7],[-66.8,-182.7],[-66.6,-186.6],[-71.6,-186.7],[-71.9,-171.5],[-75.5,-171],[-74.9,-161.9],[-58.6,-161.8]],height:14,estimatedHeight:!0,at:178,kind:"yes"},{id:"497263241",name:"",points:[[-65.2,-124.2],[-60.4,-124.1],[-60.4,-135.6],[-65,-135.5],[-65.2,-124.2]],height:14,estimatedHeight:!0,at:119,kind:"house"},{id:"497263242",name:"",points:[[-100.3,-124.7],[-100.1,-141.1],[-89.2,-140.9],[-89.4,-124.6],[-100.3,-124.7]],height:14,estimatedHeight:!0,at:142,kind:"house"},{id:"497263244",name:"",points:[[-95.9,-225.3],[-97.8,-214],[-109.9,-214.5],[-116.9,-209.2],[-116.1,-226],[-110.6,-226.2],[-95.9,-225.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263247",name:"",points:[[-98.8,-168.3],[-98.8,-163.8],[-101.9,-163.4],[-102.8,-171.3],[-100,-171.5],[-99.6,-168.5],[-98.8,-168.3]],height:14,estimatedHeight:!0,at:177,kind:"yes"},{id:"497263249",name:"",points:[[-86.4,-184.3],[-77.7,-185.7],[-77,-171],[-85.9,-169.7],[-86.4,-184.3]],height:14,estimatedHeight:!0,at:196,kind:"apartments"},{id:"497263252",name:"",points:[[-104,-182.3],[-98.6,-182.7],[-89.7,-183.8],[-88,-169.2],[-96.5,-168.3],[-99.6,-168.5],[-100,-171.5],[-102.8,-171.3],[-104,-182.3]],height:14,estimatedHeight:!0,at:177,kind:"yes"},{id:"497263258",name:"",points:[[-96.5,-168.3],[-96.4,-162.7],[-85.4,-163.1],[-85.9,-169.7],[-88,-169.2],[-96.5,-168.3]],height:14,estimatedHeight:!0,at:177,kind:"yes"},{id:"497263260",name:"",points:[[-57.9,-143.7],[-58,-140.2],[-56,-140.2],[-55.9,-135.6],[-53.8,-134.4],[-53.2,-123.8],[-60.4,-124.1],[-60.4,-135.6],[-69.8,-135.3],[-70.6,-143.1],[-57.9,-143.7]],height:14,estimatedHeight:!0,at:119,kind:"yes"},{id:"497263261",name:"",points:[[-58.1,-155.2],[-57.9,-143.7],[-69.1,-143.2],[-68.9,-148.3],[-72.3,-148.1],[-72.2,-154.8],[-58.1,-155.2]],height:14,estimatedHeight:!0,at:161,kind:"yes"},{id:"497263268",name:"",points:[[-38.5,-158.5],[-32,-159.2],[-29.8,-144.5],[-36.6,-143.7],[-38.5,-158.5]],height:13.2,estimatedHeight:!1,at:145,kind:"house"},{id:"497263270",name:"",points:[[-70.2,-124],[-65.2,-124.2],[-65,-135.5],[-69.8,-135.3],[-70.2,-124]],height:14,estimatedHeight:!0,at:137,kind:"yes"},{id:"497263271",name:"",points:[[-96.4,-162.7],[-85.4,-163.1],[-84.7,-152.8],[-86,-152.8],[-86.2,-140.7],[-100.1,-141.1],[-100.8,-158.4],[-96.8,-158.6],[-97.2,-162.6],[-96.4,-162.7]],height:14,estimatedHeight:!0,at:168,kind:"house"},{id:"497263272",name:"",points:[[-95.9,-225.3],[-80.2,-224.5],[-79.7,-200],[-90.2,-200.4],[-90.4,-199],[-97.5,-199.5],[-98.5,-200.1],[-97.8,-214],[-95.9,-225.3]],height:14,estimatedHeight:!0,at:219,kind:"yes"},{id:"497263274",name:"",points:[[-86.4,-200.2],[-86.6,-186.1],[-104.2,-184.6],[-103.3,-192.5],[-97.9,-191.8],[-97.5,-199.5],[-90.4,-199],[-90.2,-200.4],[-86.4,-200.2]],height:14,estimatedHeight:!0,at:212,kind:"yes"},{id:"517872144",name:"",points:[[714.9,-316.1],[713.6,-319.8],[731.4,-323.9],[732.9,-320.7],[714.9,-316.1]],height:14,estimatedHeight:!0,at:937,kind:"yes"},{id:"517872148",name:"",points:[[947,-373.7],[945.2,-382],[958.8,-384.7],[961.8,-377.3],[947,-373.7]],height:14,estimatedHeight:!0,at:1177,kind:"yes"},{id:"518023522",name:"",points:[[741.2,-351.7],[730.7,-348.2],[727.1,-358.8],[730.2,-359.7],[731.2,-355.8],[734.7,-356.8],[734.2,-357.9],[737.4,-358.9],[737,-359.9],[738.6,-360.7],[741.2,-351.7]],height:14,estimatedHeight:!0,at:964,kind:"yes"},{id:"518023524",name:"",points:[[720.4,-345.9],[712.8,-345.2],[707.4,-354.4],[711.9,-356.8],[712.6,-355.4],[713.4,-355.8],[714.5,-353.8],[721.4,-354.7],[721.7,-353.7],[725.3,-354.4],[726,-347],[720.4,-345.9]],height:14,estimatedHeight:!0,at:945,kind:"yes"},{id:"518023525",name:"",points:[[733.3,-381.9],[738.6,-360.7],[737,-359.9],[737.4,-358.9],[734.2,-357.9],[727.6,-380.3],[733.3,-381.9]],height:14,estimatedHeight:!0,at:967,kind:"yes"},{id:"518023526",name:"",points:[[699.1,-351.3],[697.5,-354],[704.9,-358.4],[712.8,-345.2],[703.5,-344.4],[699.1,-351.3]],height:14,estimatedHeight:!0,at:939,kind:"yes"},{id:"518023529",name:"",points:[[688.6,-369.2],[698.2,-372],[704.9,-358.4],[697.5,-354],[688.6,-369.2]],height:14,estimatedHeight:!0,at:926,kind:"yes"},{id:"518023530",name:"",points:[[727.6,-380.3],[734.7,-356.8],[731.2,-355.8],[730.2,-359.7],[727.1,-358.8],[721.5,-378.6],[727.6,-380.3]],height:14,estimatedHeight:!0,at:960,kind:"yes"},{id:"518023532",name:"",points:[[721.5,-378.6],[727.1,-358.8],[724.5,-357.9],[725.3,-354.4],[721.7,-353.7],[714.7,-376.7],[721.5,-378.6]],height:14,estimatedHeight:!0,at:953,kind:"yes"},{id:"518023533",name:"",points:[[720.4,-345.9],[726,-347],[725.3,-354.4],[724.5,-357.9],[727.1,-358.8],[730.7,-348.2],[729,-347.7],[740.5,-322.4],[732.9,-320.7],[720.4,-345.9]],height:14,estimatedHeight:!0,at:960,kind:"yes"},{id:"518023535",name:"",points:[[714.7,-376.7],[721.4,-354.7],[714.5,-353.8],[713.4,-355.8],[712.6,-355.4],[704,-373.6],[714.7,-376.7]],height:14,estimatedHeight:!0,at:953,kind:"yes"},{id:"518023537",name:"",points:[[698.2,-372],[704,-373.6],[710.5,-359.4],[707.8,-358.4],[709.5,-355.5],[707.4,-354.4],[704.9,-358.4],[698.2,-372]],height:14,estimatedHeight:!0,at:936,kind:"yes"},{id:"518287971",name:"",points:[[9.8,-162.2],[9,-171.3],[26.9,-173.3],[27.5,-166.7],[23.1,-166.3],[23.3,-163.8],[9.8,-162.2]],height:19.799999999999997,estimatedHeight:!1,at:172,kind:"yes"},{id:"518287972",name:"",points:[[27.5,-166.7],[37.6,-167.8],[37.9,-165.6],[47.2,-166.6],[46.2,-177.9],[41.9,-188.9],[32.4,-188.3],[32.4,-186.5],[27.4,-186.2],[29.2,-173.5],[26.9,-173.3],[27.5,-166.7]],height:14,estimatedHeight:!0,at:172,kind:"yes"},{id:"518287973",name:"",points:[[72.5,-161.2],[71.5,-185.9],[58.3,-185.7],[58.3,-186.8],[56.4,-186.8],[56.9,-173.8],[57.9,-173.8],[58.1,-169.4],[57,-169.4],[57.2,-164.9],[55.7,-164.8],[56.1,-156.1],[67,-156.5],[66.9,-160.9],[72.5,-161.2]],height:14,estimatedHeight:!0,at:271,kind:"yes"},{id:"518287974",name:"",points:[[72.8,-156.7],[72.5,-161.2],[66.9,-160.9],[67,-156.5],[72.8,-156.7]],height:14,estimatedHeight:!0,at:152,kind:"yes"},{id:"518287975",name:"",points:[[49,-137.7],[56.8,-138],[55.7,-164.8],[40.8,-163.7],[42.1,-137.3],[49,-137.7]],height:14,estimatedHeight:!0,at:162,kind:"yes"},{id:"518287976",name:"Museo delle illusioni",points:[[49.7,-121.2],[56.1,-121],[56.8,-138],[49,-137.7],[49.7,-121.2]],height:14,estimatedHeight:!0,at:138,kind:"yes"},{id:"518287977",name:"",points:[[56.1,-121],[74.9,-120.8],[72.8,-156.7],[56.1,-156.1],[56.6,-142.4],[63.9,-142.8],[64.1,-134.8],[56.7,-134.7],[56.1,-121]],height:14,estimatedHeight:!0,at:122,kind:"yes"},{id:"518287978",name:"",points:[[41.9,-188.9],[50.5,-189],[50.5,-186.5],[56.4,-186.8],[56.9,-173.8],[57.9,-173.8],[58.1,-169.4],[49.1,-169],[48.8,-172.7],[46.7,-172.6],[46.2,-177.9],[41.9,-188.9]],height:14,estimatedHeight:!0,at:257,kind:"yes"},{id:"542315398",name:"",points:[[-103.6,-75.2],[-93.2,-74.9],[-92.3,-60.9],[-94.4,-61],[-94.5,-59.9],[-99.2,-59.9],[-99.6,-66],[-102,-66.5],[-103.7,-66.3],[-103.6,-75.2]],height:14,estimatedHeight:!0,at:56,kind:"yes"},{id:"542315417",name:"",points:[[-100.2,-47.8],[-94.2,-48.7],[-94.5,-59.9],[-99.2,-59.9],[-99.6,-66],[-102,-66.5],[-102.1,-64.2],[-100.2,-47.8]],height:14,estimatedHeight:!0,at:43,kind:"yes"},{id:"542315423",name:"",points:[[-104.1,-47],[-100.2,-47.8],[-102.1,-64.2],[-106.1,-64.1],[-106.1,-58.6],[-104.1,-47]],height:14,estimatedHeight:!0,at:42,kind:"yes"},{id:"542315432",name:"",points:[[-94.2,-48.7],[-82.9,-50.3],[-81.7,-60.8],[-87.7,-60.7],[-87.7,-66.5],[-92.6,-66.7],[-92.3,-60.9],[-94.4,-61],[-94.2,-48.7]],height:13.2,estimatedHeight:!1,at:56,kind:"yes"},{id:"542316319",name:"",points:[[-48.8,-269.5],[-58.7,-266.2],[-58.2,-259.5],[-56.7,-259.5],[-56.7,-236.6],[-46.3,-237.5],[-46.9,-260],[-45.7,-260.2],[-48.8,-269.5]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316320",name:"",points:[[-36.3,-274.4],[-30.2,-276.8],[-17.6,-262.4],[-22.5,-258.3],[-30.5,-258.1],[-30.7,-262.1],[-32.1,-261.9],[-36.3,-274.4]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316321",name:"",points:[[-17.6,-262.4],[-8.6,-251.5],[-6.1,-243.4],[-30.1,-243.4],[-30.5,-258.1],[-22.5,-258.3],[-17.6,-262.4]],height:9.899999999999999,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316323",name:"",points:[[-15.1,-187.1],[2.3,-186.9],[.7,-201.8],[-2.3,-201.8],[-5.1,-223.5],[-10.7,-223.3],[-10.7,-221.5],[-11.4,-221.6],[-11.5,-217.6],[-19.6,-217.5],[-19.8,-198.7],[-15.1,-196.2],[-15.1,-187.1]],height:14,estimatedHeight:!0,at:203,kind:"yes"},{id:"542316328",name:"",points:[[-48.8,-269.5],[-45.7,-260.2],[-32.1,-261.9],[-36.3,-274.4],[-48.8,-269.5]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"542316331",name:"",points:[[-71.8,-263.2],[-77.9,-262.9],[-78.3,-235.8],[-69.6,-236.4],[-71.8,-263.2]],height:13.2,estimatedHeight:!1,at:219,kind:"apartments"},{id:"675879822",name:"",points:[[322.8,-214.8],[318.7,-212.4],[322.9,-207.8],[326.9,-208.1],[322.8,-214.8]],height:9.899999999999999,estimatedHeight:!1,at:531,kind:"apartments"},{id:"675886588",name:"",points:[[30.9,-323.8],[30.6,-324.9],[35.7,-326.3],[36.1,-325.3],[30.9,-323.8]],height:14,estimatedHeight:!0,at:259,kind:"yes"},{id:"675886591",name:"",points:[[35.1,-309.1],[30.9,-323.8],[36.1,-325.3],[35.7,-326.3],[38,-327],[42.5,-311.2],[35.1,-309.1]],height:14,estimatedHeight:!0,at:262,kind:"yes"},{id:"686161423",name:"",points:[[659.5,-301],[663.7,-302.1],[659.9,-312.1],[656.1,-310.9],[659.5,-301]],height:14,estimatedHeight:!0,at:883,kind:"yes"},{id:"686161424",name:"",points:[[655.5,-300],[650,-315.5],[645.4,-314.1],[650.4,-298.7],[655.5,-300]],height:14,estimatedHeight:!0,at:875,kind:"yes"},{id:"686161425",name:"",points:[[650,-315.5],[647.7,-321.7],[646.3,-321.2],[647.1,-318.2],[644.3,-317.3],[645.4,-314.1],[650,-315.5]],height:14,estimatedHeight:!0,at:874,kind:"yes"},{id:"756472868",name:"",points:[[-73.9,53.5],[-68.4,53.3],[-64.5,57.4],[-64.4,62.6],[-68.4,67.2],[-73.6,67.5],[-77.7,63.4],[-77.8,57.8],[-73.9,53.5]],height:14,estimatedHeight:!0,at:0,kind:"yes"},{id:"778074889",name:"",points:[[754.3,-642],[754.4,-634.6],[776.8,-635.1],[776.7,-642.8],[754.3,-642]],height:14,estimatedHeight:!0,at:1465,kind:"yes"},{id:"778074900",name:"",points:[[726.8,-641],[727,-634.1],[748.3,-634.8],[748,-641.8],[726.8,-641]],height:14,estimatedHeight:!0,at:1479,kind:"yes"},{id:"780143567",name:"",points:[[1006.6,-685.6],[1003.5,-712.8],[1016.9,-714.2],[1019.9,-687.1],[1006.6,-685.6]],height:14,estimatedHeight:!0,at:1689,kind:"yes"},{id:"780143569",name:"Caserma Baldisserra",points:[[1006.4,-687.1],[981.8,-684.3],[978.9,-710],[1003.5,-712.8],[1004.4,-704.9],[986.6,-702.9],[987.8,-692.6],[1005.5,-694.6],[1006.4,-687.1]],height:14,estimatedHeight:!0,at:1676,kind:"yes"},{id:"780143573",name:"",points:[[961.4,-680.6],[958.5,-707.6],[978.9,-710],[982,-682.9],[961.4,-680.6]],height:14,estimatedHeight:!0,at:1651,kind:"yes"},{id:"780143575",name:"",points:[[1030.3,-601],[1035.4,-685.5],[1056.9,-684.2],[1051.7,-599.8],[1030.3,-601]],height:14,estimatedHeight:!0,at:1706,kind:"yes"},{id:"780143585",name:"",points:[[1065.7,-689.6],[1035.6,-691.5],[1037.1,-716.6],[1043.2,-716.6],[1046.4,-716.3],[1049.6,-715.6],[1052.3,-714.7],[1055.2,-712.9],[1059.9,-708.1],[1061.7,-705.1],[1065.3,-695.4],[1065.7,-689.6]],height:14,estimatedHeight:!0,at:1710,kind:"yes"},{id:"780143587",name:"",points:[[892.3,-654.4],[920,-586.4],[914.7,-584.2],[886.4,-651.9],[892.3,-654.4]],height:14,estimatedHeight:!0,at:1340,kind:"yes"},{id:"780143588",name:"",points:[[945.8,-588.2],[926.2,-579.9],[893.4,-658],[912.9,-666.3],[945.8,-588.2]],height:14,estimatedHeight:!0,at:1332,kind:"yes"},{id:"780143590",name:"",points:[[911.2,-671.8],[888.3,-662],[884.2,-671.6],[887.6,-673],[882.9,-684.1],[902.4,-692.4],[911.2,-671.8]],height:14,estimatedHeight:!0,at:1418,kind:"yes"},{id:"780143591",name:"",points:[[950.4,-576],[982.6,-497.8],[963.6,-489.9],[931.3,-568.2],[950.4,-576]],height:14,estimatedHeight:!0,at:1234,kind:"yes"},{id:"780143593",name:"",points:[[922.2,-566.2],[926.7,-568.1],[960.4,-486.3],[956.5,-484.3],[922.2,-566.2]],height:14,estimatedHeight:!0,at:1232,kind:"yes"},{id:"780143594",name:"",points:[[923.2,-675.8],[919.9,-703.3],[933.4,-705],[936.6,-677.4],[923.2,-675.8]],height:14,estimatedHeight:!0,at:1605,kind:"yes"},{id:"780143595",name:"Comando 6°Battaglione Carabinieri Toscana",points:[[936.5,-678.8],[935.7,-685.7],[953.3,-687.7],[952,-698.7],[934.4,-696.6],[933.4,-705],[958.5,-707.6],[961.3,-681.6],[936.5,-678.8]],height:14,estimatedHeight:!0,at:1630,kind:"yes"},{id:"780143596",name:"",points:[[1049.2,-559],[1045.5,-503.5],[1024,-505],[1029.7,-590.3],[1051.1,-589.2],[1049.2,-559]],height:14,estimatedHeight:!0,at:1225,kind:"yes"},{id:"780143598",name:"",points:[[1035.7,-494.5],[1049.8,-496.8],[1053.4,-474.5],[1039.3,-472.3],[1035.7,-494.5]],height:14,estimatedHeight:!0,at:1199,kind:"yes"},{id:"780297788",name:"",points:[[765.6,-306.3],[762.1,-320.2],[744.9,-315.9],[748.3,-302.7],[754.5,-304.2],[755.6,-299.7],[766.5,-302.5],[765.6,-306.3]],height:14,estimatedHeight:!0,at:966,kind:"apartments"},{id:"781515669",name:"",points:[[412.1,-338.2],[402.3,-334.5],[406.9,-322.2],[416.7,-326],[412.1,-338.2]],height:14,estimatedHeight:!0,at:642,kind:"yes"},{id:"781515670",name:"",points:[[406.9,-322.2],[416.7,-326],[425,-300.5],[415.9,-297.6],[406.9,-322.2]],height:14,estimatedHeight:!0,at:644,kind:"yes"},{id:"951519923",name:"La Habana",points:[[891.2,-743.9],[890.7,-746.7],[901.4,-747.9],[900.1,-756.9],[903.9,-757.6],[905.4,-748.3],[925,-750.4],[923.5,-759.3],[927.2,-759.7],[929,-747.9],[891.2,-743.9]],height:14,estimatedHeight:!0,at:1604,kind:"yes"},{id:"1302843770",name:"",points:[[830.9,-291.9],[845.6,-295.8],[840.4,-316.6],[825.6,-312.6],[830.9,-291.9]],height:4,estimatedHeight:!1,at:1043,kind:"yes"}],e0=[{id:"307416178",points:[[-400,-538],[-267,-600.6],[29.5,-764.9],[77.8,-778.1],[98.8,-775.4],[149.5,-759.9],[243.1,-756.8],[338.6,-757],[387.8,-754.1],[470.7,-759.8],[496.5,-762.7],[524.4,-765.4],[556.7,-769],[596.2,-776.3],[631,-788.8],[642.7,-794.9],[664.4,-810.8],[678.8,-822.1],[683.2,-826.9],[690.7,-834.5],[693.8,-842],[964.2,-899.1],[1077.9,-921.5],[1150.7,-932.3],[1296.3,-928.8],[1483.5,-928.8],[1483.7,-926.9],[1520.8,-929.9],[1521.6,-926.1],[1533.3,-932.6],[1716.3,-930.6],[1800,-920.5],[1800,-832.1],[1711.2,-839.5],[1591.4,-840.5],[1228.7,-837.1],[1089.4,-828.5],[1064.8,-827.7],[1017,-819.8],[978.4,-809.1],[938.8,-797],[886.2,-775.5],[865.5,-755.2],[849.3,-754.6],[839.2,-758.7],[831,-758.5],[809.1,-738.4],[802.2,-734.1],[712.2,-719.5],[429.2,-681.1],[336.4,-671.2],[158.2,-650.4],[97.5,-646.1],[81.3,-643.7],[52.8,-641.8],[22.7,-631.3],[-53.4,-616.1],[-68.3,-603.4],[-152.7,-578],[-163.3,-572.9],[-191.7,-560.1],[-208,-552.3],[-215.3,-549.7],[-232.2,-540.9],[-244,-534.6],[-265.8,-522],[-288.4,-499.6],[-400,-441]]}],t0=[{id:"1049963747",coordinates:[11.2684906,43.766798],at:1419,signals:!1,markings:"zebra"},{id:"1049963796",coordinates:[11.2695328,43.7686018],at:1188,signals:!0,markings:"unknown"},{id:"4703737960",coordinates:[11.2605443,43.7704112],at:437,signals:!1,markings:"yes"},{id:"4703737963",coordinates:[11.2614477,43.7702563],at:512,signals:!0,markings:"traffic_signals"},{id:"4703737994",coordinates:[11.2615039,43.7701951],at:518,signals:!0,markings:"traffic_signals"},{id:"5052873900",coordinates:[11.2683242,43.7688384],at:1087,signals:!1,markings:"zebra"},{id:"5052873903",coordinates:[11.2679052,43.7688854],at:1053,signals:!1,markings:"unknown"},{id:"6118955764",coordinates:[11.2742321,43.765732],at:1993,signals:!1,markings:"unknown"},{id:"6306728160",coordinates:[11.257896,43.7709346],at:184,signals:!1,markings:"yes"},{id:"6306728922",coordinates:[11.257837,43.7725371],at:5,signals:!1,markings:"uncontrolled;marked"},{id:"6329692667",coordinates:[11.2616313,43.7702213],at:527,signals:!0,markings:"traffic_signals"},{id:"7047528508",coordinates:[11.2620954,43.7701564],at:565,signals:!1,markings:"unknown"},{id:"7047528509",coordinates:[11.2654904,43.7694131],at:850,signals:!1,markings:"zebra"},{id:"7047528534",coordinates:[11.2620162,43.7701085],at:560,signals:!1,markings:"unknown"},{id:"7047528556",coordinates:[11.2654207,43.7694105],at:845,signals:!1,markings:"zebra"},{id:"7047528567",coordinates:[11.2642784,43.769658],at:749,signals:!1,markings:"unknown"},{id:"7047528582",coordinates:[11.2638071,43.7697399],at:710,signals:!1,markings:"no"},{id:"7047539292",coordinates:[11.2636017,43.7697843],at:693,signals:!1,markings:"unknown"},{id:"7047539294",coordinates:[11.262743,43.7699584],at:621,signals:!1,markings:"no"},{id:"7221154458",coordinates:[11.2637339,43.769794],at:703,signals:!1,markings:"unknown"},{id:"7221154474",coordinates:[11.2627688,43.7700071],at:622,signals:!1,markings:"unknown"},{id:"7227925336",coordinates:[11.2579232,43.7715172],at:119,signals:!1,markings:"uncontrolled"},{id:"7227925358",coordinates:[11.257908,43.7725738],at:1,signals:!1,markings:"zebra"},{id:"7284475720",coordinates:[11.2694997,43.7686077],at:1185,signals:!1,markings:"zebra"},{id:"7294708535",coordinates:[11.264288,43.7696376],at:751,signals:!1,markings:"no"},{id:"7294708553",coordinates:[11.2606148,43.7704222],at:442,signals:!1,markings:"yes"},{id:"7294708569",coordinates:[11.2599292,43.7704832],at:387,signals:!1,markings:"unknown"},{id:"7294710015",coordinates:[11.2605869,43.7703895],at:441,signals:!1,markings:"yes"},{id:"8243813901",coordinates:[11.2579148,43.7706138],at:224,signals:!1,markings:"yes"},{id:"9935368966",coordinates:[11.2602673,43.7704487],at:415,signals:!1,markings:"yes"},{id:"9935368969",coordinates:[11.258715,43.770582],at:289,signals:!1,markings:"yes"},{id:"9935368970",coordinates:[11.2587621,43.7705541],at:293,signals:!1,markings:"yes"},{id:"9935368971",coordinates:[11.2586561,43.770562],at:284,signals:!1,markings:"yes"},{id:"9935368973",coordinates:[11.2578905,43.7708909],at:188,signals:!1,markings:"yes"},{id:"9935368975",coordinates:[11.2578938,43.7709137],at:186,signals:!1,markings:"yes"}],Jo={buildings:Q3,water:e0,crossings:t0},ld=_r.distanceMeters,Xl=Jo,n0=(n,e)=>({x:(n-11.257831)*80300,z:-(e-43.772579)*111195}),xi=_r.geometry.coordinates.map(([n,e])=>n0(n,e)),Ln=[0];for(let n=1;n<xi.length;n++)Ln.push(Ln[n-1]+Math.hypot(xi[n].x-xi[n-1].x,xi[n].z-xi[n-1].z));const i0=Ln[Ln.length-1]/ld;function ro(n){const e=n*i0;let t=0,i=Ln.length-1;for(;i-t>1;){const o=t+i>>1;Ln[o]<=e?t=o:i=o}const s=xi[t],a=xi[i],r=(e-Ln[t])/(Ln[i]-Ln[t]||1);return{x:s.x+(a.x-s.x)*r,z:s.z+(a.z-s.z)*r}}function hd(n){const e=ro(n),t=ro(n-5),i=ro(n+5);return{...e,heading:Math.atan2(-(i.x-t.x),-(i.z-t.z))}}function dd(n){let e=0;for(const t of _r.streets)if(e+=t.distanceMeters,n<e)return t.name;return"Lungarno del Tempio"}const Ko=Jo.crossings.filter(n=>n.markings!=="no"&&n.markings!=="unknown").map(n=>({id:n.id,at:n.at,signal:n.signals,source:"OpenStreetMap"}));for(const n of _r.trafficSignals)Ko.push({id:`signal-${n.id}`,at:n.approximateDistanceMeters,signal:!0,source:"Comune di Firenze"});for(const n of Jo.crossings.filter(e=>e.signals))Ko.push({id:n.id,at:n.at,signal:!0,source:"OpenStreetMap"});const zs=[];for(const n of Ko.sort((e,t)=>e.at-t.at)){const e=zs[zs.length-1];e&&n.at-e.at<16?(e.signal||(e.signal=n.signal),n.source==="Comune di Firenze"&&(e.at=n.at,e.source=n.source)):zs.push({...n})}const Ia=Math.PI*2;let ud="city";function s0(n){ud=n}function yt(){return ud==="florence"}function Zt(n){if(yt()){const s=Math.max(0,Math.min(1,(n-1170)/80));return{halfWidth:2.8+1.6*s,laneSpacing:1.3+.9*s,lanes:[0,2],narrow:1,plaza:!1,church:!1}}const e=(n%1800+1800)%1800,t=s=>{const a=Math.max(0,Math.min(1,s));return a*a*(3-2*a)},i=e<300?1:e<420?1-t((e-300)/120):e>1720?t((e-1720)/80):0;return{halfWidth:5.1-1.9*i,laneSpacing:2.4-.9*i,lanes:i>.5?[0,2]:[0,1,2],narrow:i,plaza:e>=110&&e<=180,church:Math.abs(e-150)<.1}}function sr(n){if(yt())return hd(n);const e=n*Ia/600,t=n*Ia/900,i=36*Math.sin(e)+18*Math.sin(t),s=36*Ia/600*Math.cos(e)+18*Ia/900*Math.cos(t);return{x:i,z:-n,heading:-Math.atan(s)}}function In(n,e,t){const i=sr(n),s=sr(t),a=i.x-s.x+e*Math.cos(i.heading),r=i.z-s.z-e*Math.sin(i.heading),o=Math.cos(s.heading),c=Math.sin(s.heading);return{x:o*a-c*r,z:c*a+o*r-5,heading:i.heading-s.heading}}class a0{constructor(){$e(this,"crossings",[])}reset(e=zs){this.crossings=e.map(t=>({...t,phase:"waiting",elapsed:0,progress:0,light:t.signal?"red":"green",served:!1}))}update(e,t,i){for(const s of this.crossings){if(s.served||s.at-e>70)continue;const a=Math.max(0,s.at-7);s.phase==="waiting"&&e>=a-.25&&t<.15&&(s.phase="crossing"),s.phase==="crossing"&&(s.elapsed+=i,s.progress=Math.min(1,s.elapsed/6),s.elapsed>=7&&(s.phase="clear",s.light="green",s.served=!0))}}next(e){return this.crossings.find(t=>!t.served&&t.at>=e-1)}limitSpeed(e,t,i){const s=this.next(e);if(!s)return t;const a=Math.max(0,s.at-7-e);return a<.04?0:Math.min(t,Math.sqrt(2*6*a),a/Math.max(i,.001))}message(e){const t=this.next(e);return!t||t.at-e>65?"":t.phase==="crossing"?"Pedoni in attraversamento · attendi":t.signal?"Semaforo rosso · frenata assistita":"Strisce pedonali · lascia passare"}}function fd(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),a={},r={},o=n[0].morphTargetsRelative,c=new wt;let l=0;for(let h=0;h<n.length;++h){const d=n[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(d)}for(const h in a){const d=ql(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let _=0;_<r[h].length;++_)p.push(r[h][_][f]);const g=ql(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ql(n){let e,t,i,s=-1,a=0;for(let l=0;l<n.length;++l){const h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new Bt(r,t,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const d=c/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);o.setComponent(f+d,g,_)}}else r.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const r0=new Gt(1,12,10),o0=new Qe(1,1,1,10),oo=new ge({color:12160112,roughness:.85}),co=new ge({color:3419174,roughness:1}),Yl=[7568240,10447183,4545644,12957336].map(n=>new ge({color:n,roughness:.95})),Da=new ge({color:3422781,roughness:.95});function fi(n,e,t,i,s,a,r,o){const c=new ee(r0,e);return c.position.set(t,i,s),c.scale.set(a,r,o),c.castShadow=!0,n.add(c),c}function Ts(n,e,t,i,s){const a=new ee(o0,e);a.position.copy(t).add(i).multiplyScalar(.5),a.scale.set(s,t.distanceTo(i),s),a.quaternion.setFromUnitVectors(new C(0,1,0),i.clone().sub(t).normalize()),a.castShadow=!0,n.add(a)}const lo=new Map;function js(n,e){const t=e%Yl.length;if(n&&lo.has(t))return lo.get(t).clone(!0);const i=new it,s=Yl[t],a=n?.55:.9;fi(i,s,0,a+.28,0,.2,.3,.12),fi(i,oo,0,a+.71,-.015,.105,.135,.11),fi(i,co,0,a+.78,.016,.108,.085,.105),fi(i,Da,0,a,0,.17,.12,.12);for(const c of[-1,1]){const l=new it;l.name=c===-1?"leg-left":"leg-right",l.position.set(c*.095,a,0),i.add(l),n?(Ts(l,Da,new C,new C(0,-.1,-.32),.075),Ts(l,Da,new C(0,-.1,-.32),new C(0,-.5,-.32),.055),fi(l,co,0,-.51,-.39,.07,.045,.13)):(Ts(l,Da,new C,new C(0,-.76,0),.065),fi(l,co,0,-.8,-.06,.07,.055,.13));const h=new it;h.name=c===-1?"arm-left":"arm-right",h.position.set(c*.2,a+.42,0),i.add(h);const d=new C(c*.035,-.23,n?-.12:0),f=new C(c*.015,n?-.27:-.48,n?-.3:-.015);Ts(h,s,new C,d,.054),Ts(h,oo,d,f,.039),fi(h,oo,f.x,f.y,f.z,.043,.06,.035)}if(!n)return i;i.updateMatrixWorld(!0);const r=new Map;i.traverse(c=>{if(!(c instanceof ee))return;const l=c.material;r.has(l)||r.set(l,[]),r.get(l).push(c.geometry.clone().applyMatrix4(c.matrixWorld))});const o=new it;for(const[c,l]of r){const h=fd(l);if(l.forEach(d=>d.dispose()),h){const d=new ee(h,c);d.castShadow=!0,o.add(d)}}return lo.set(t,o),o.clone(!0)}function pd(n,e){const t=Math.sin(e*4.8)*.38;for(const[i,s]of[["leg-left",t],["leg-right",-t],["arm-left",-t*.7],["arm-right",t*.7]]){const a=n.getObjectByName(i);a&&(a.rotation.x=s)}}class c0{constructor(e){$e(this,"root",new it);$e(this,"rows",[]);e.add(this.root);const t=new ge({color:15657430,roughness:.9}),i=new ge({color:2698795,roughness:.7});zs.forEach((s,a)=>{const r=new it,o=Zt(s.at).halfWidth;for(let d=-.92;d<1;d+=.2){const f=new ee(new Ue(.11,.016,3.4),t);f.position.set(d,.092,0),r.add(f)}const c=new ee(new Ue(2,.016,.22),t);c.position.set(0,.095,7),r.add(c);const l=[];if(s.signal)for(const d of[-1,1]){const f=new ee(new Qe(.045,.05,3.5,8),i);f.position.set(d*1.17,1.75,-.7),r.add(f);const p=new ee(new Ue(.1,1,.25),i);p.position.set(d*1.17,3,-.7),r.add(p);for(let g=0;g<3;g++){const _=new ge({color:1844513,emissive:0}),u=new ee(new Gt(.12,10,8),_);u.scale.x=1/o,u.position.set(d*1.17,3.32-g*.3,-.54),r.add(u),l.push(u)}}const h=[js(!1,a),js(!1,a+2)];for(const d of h)this.root.add(d);this.root.add(r),this.rows.push({root:r,people:h,lamps:l})})}update(e,t,i){this.root.visible=i,i&&this.rows.forEach((s,a)=>{const r=t.crossings[a];if(!r)return;const o=r.at-e>-20&&r.at-e<170;if(s.root.visible=o,s.people.forEach(h=>h.visible=o),!o)return;const c=Zt(r.at).halfWidth,l=In(r.at,0,e);s.root.position.set(l.x,0,l.z),s.root.rotation.y=l.heading,s.root.scale.x=c,s.lamps.forEach((h,d)=>{const f=h.material,p=d%3===(r.light==="red"?0:2),g=d%3===0?16724003:d%3===1?16759848:3337864;f.color.setHex(p?g:2502699),f.emissive.setHex(p?g:0),f.emissiveIntensity=p?2:0}),s.people.forEach((h,d)=>{const f=r.phase==="waiting"?0:r.phase==="clear"?1:Math.min(1,Math.max(0,(r.elapsed-d*.5)/6)),p=(c+.65)*(1-2*f),g=In(r.at+(d-.5)*1.1,p,e);h.position.set(g.x,f>0&&f<1?.1:.28,g.z),h.rotation.y=g.heading+Math.PI/2,pd(h,r.phase==="crossing"?r.elapsed*1.6+d:0)})})}}const md=(n,e)=>{if(!Number.isFinite(n)||n<=0)throw new RangeError(`${e} must be a finite positive number`)};function l0(n){if(!n.id.trim())throw new Error("Circuit id cannot be empty");if(!n.name.trim())throw new Error("Circuit name cannot be empty");if(n.districts.length===0)throw new Error("Circuit requires at least one district");let e=0;const t=new Set,i=n.districts.map((s,a)=>{if(md(s.length,`District ${s.id} length`),!s.id.trim()||!s.name.trim())throw new Error(`District at index ${a} requires an id and name`);if(!s.milestone.id.trim()||!s.milestone.label.trim())throw new Error(`District ${s.id} requires a milestone`);if(t.has(s.milestone.id))throw new Error(`Duplicate milestone id: ${s.milestone.id}`);t.add(s.milestone.id);const r={...s.milestone,distance:e,districtId:s.id};return e+=s.length,Object.freeze(r)});return Object.freeze({id:n.id,name:n.name,districts:Object.freeze([...n.districts]),totalLength:e,milestones:Object.freeze(i)})}function jo(n,e=h0){if(!Number.isFinite(n)||n<0)throw new RangeError("Distance must be a finite non-negative number");md(e.totalLength,"Circuit total length");const t=Math.floor(n/e.totalLength),i=n%e.totalLength;let s=0;for(let a=0;a<e.districts.length;a+=1){const r=e.districts[a],o=s+r.length;if(i<o){const c=i-s;return{absoluteDistance:n,lap:t,lapDistance:i,districtIndex:a,district:r,districtDistance:c,districtProgress:c/r.length,currentMilestone:e.milestones[a],nextMilestone:e.milestones[(a+1)%e.milestones.length]}}s=o}throw new Error("Circuit districts do not cover the declared total length")}const h0=l0({id:"vespa-city-loop",name:"Giro della Citta",districts:[{id:"historic-center",name:"Centro storico",length:420,palette:{sky:"#79C8E8",road:"#454B56",roadside:"#D99863",accent:"#F6C453"},decorations:["facciate","balconi","piazzetta","lampioni"],difficulty:{trafficMultiplier:.85,hazardMultiplier:.8,speedMultiplier:.92},milestone:{id:"old-town-gate",label:"Porta del centro"}},{id:"seafront",name:"Lungomare",length:520,palette:{sky:"#79C8E8",road:"#505966",roadside:"#E9D28F",accent:"#177E78"},decorations:["mare","spiaggia","palme","cabine"],difficulty:{trafficMultiplier:.9,hazardMultiplier:.85,speedMultiplier:1.06},milestone:{id:"seafront-promenade",label:"Passeggiata sul mare"}},{id:"market",name:"Mercato",length:360,palette:{sky:"#74BED9",road:"#424A54",roadside:"#C96F4A",accent:"#F05A47"},decorations:["bancarelle","tende","cassette","insegne"],difficulty:{trafficMultiplier:1.12,hazardMultiplier:1.15,speedMultiplier:.94},milestone:{id:"market-arches",label:"Archi del mercato"}},{id:"hillside",name:"Collina",length:500,palette:{sky:"#82BBD4",road:"#3F4650",roadside:"#788C5C",accent:"#FFF5DD"},decorations:["cipressi","muretti","ville","belvedere"],difficulty:{trafficMultiplier:.95,hazardMultiplier:1.08,speedMultiplier:1.02},milestone:{id:"hilltop-view",label:"Belvedere"}}]});function As(n){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");let i=1947;n(t,()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296);const a=new Xo(e);return a.wrapS=a.wrapT=Ya,a.colorSpace=Vt,a.anisotropy=4,a}function Ua(n,e,t,i){for(let s=0;s<t;s++)n.fillStyle=`rgba(${e()>.5?"255,249,229":"20,22,21"},${e()*i})`,n.fillRect(e()*512,e()*512,1+e()*2,1+e()*2)}let d0;function Ot(){return d0??(d0=u0())}function u0(){const n=As((a,r)=>{a.fillStyle="#737675",a.fillRect(0,0,512,512),Ua(a,r,62e3,.4),a.strokeStyle="rgba(25,28,28,.2)",a.lineWidth=1,a.beginPath(),a.moveTo(65,0),a.lineTo(73,88),a.lineTo(55,160),a.lineTo(80,209),a.stroke()});n.repeat.set(2,4);const e=As((a,r)=>{a.fillStyle="#c6bca5",a.fillRect(0,0,512,512);for(let o=0;o<8;o++)for(let c=-1;c<5;c++){const l=c*128+o%2*64,h=Math.floor(r()*15);a.fillStyle=`rgb(${192+h},${182+h},${162+h})`,a.fillRect(l+2,o*64+2,124,60)}Ua(a,r,26e3,.18)});e.repeat.set(1,8);const t=As((a,r)=>{a.fillStyle="#e3cb9f",a.fillRect(0,0,512,512),Ua(a,r,44e3,.22);for(let o=0;o<24;o++)a.strokeStyle="rgba(255,245,210,.13)",a.beginPath(),a.moveTo(0,o*24),a.bezierCurveTo(140,o*24-15,370,o*24+15,512,o*24),a.stroke()});t.repeat.set(3,2);const i=As((a,r)=>{a.fillStyle="#845643",a.fillRect(0,0,512,512);for(let o=0;o<512;o+=32)for(let c=0;c<512;c+=32){const l=a.createLinearGradient(c,0,c+30,0);l.addColorStop(0,"#81523f"),l.addColorStop(.5,`hsl(19 34% ${42+r()*12}%)`),l.addColorStop(1,"#654537"),a.fillStyle=l,a.fillRect(c+1,o+1,30,30)}}),s=["#d4b295","#dfd5bc","#b6c0b3","#d5bf95"].map((a,r)=>As((o,c)=>{o.fillStyle=a,o.fillRect(0,0,512,512),Ua(o,c,24e3,.065),o.fillStyle="rgba(68,52,34,.19)",o.fillRect(0,0,512,13),o.fillStyle="#e6dbc6",o.fillRect(0,13,512,10);for(const l of[76,332]){o.fillStyle="rgba(45,40,29,.16)",o.fillRect(l-22,88,158,315),o.fillStyle="#eee1c7",o.fillRect(l-12,78,126,298),o.fillStyle="#253c40",o.fillRect(l,90,102,270);const h=o.createLinearGradient(l,90,l+102,350);h.addColorStop(0,"#7b979c"),h.addColorStop(.45,"#425f64"),h.addColorStop(1,"#273c40"),o.fillStyle=h,o.fillRect(l+5,94,92,258),o.fillStyle="rgba(222,229,217,.27)",o.fillRect(l+8,99,32,238),o.fillStyle="#c3bdab",o.fillRect(l+48,92,5,266),o.fillRect(l+3,205,96,5),o.fillStyle=r===2?"#626c65":"#48675e",o.fillRect(l-42,91,27,268),o.fillRect(l+116,91,27,268),o.strokeStyle="rgba(13,37,32,.4)",o.lineWidth=2;for(let d=100;d<355;d+=12)o.beginPath(),o.moveTo(l-39,d),o.lineTo(l-18,d),o.moveTo(l+119,d),o.lineTo(l+140,d),o.stroke();o.fillStyle="#f0e5ce",o.fillRect(l-21,364,145,15),o.fillStyle="rgba(52,41,30,.25)",o.fillRect(l-17,379,140,8)}}));return{asphalt:new ge({color:7830136,map:n,bumpMap:n,bumpScale:.024,roughness:.89}),pavement:new ge({map:e,bumpMap:e,bumpScale:.018,roughness:.94}),sand:new ge({map:t,bumpMap:t,bumpScale:.035,roughness:1}),roof:new ge({map:i,bumpMap:i,bumpScale:.06,roughness:.88}),facades:s.map(a=>new ge({map:a,bumpMap:a,bumpScale:.025,roughness:.88})),stone:new ge({color:13155756,roughness:.93}),iron:new ge({color:3426628,metalness:.65,roughness:.45})}}function Qo(n,e,t){const i=new Ue(n,e,t),s=i.attributes.uv;for(let a=0;a<6;a++){const r=a<2?t:n;for(let o=a*4;o<a*4+4;o++)s.setXY(o,s.getX(o)*r/4,s.getY(o)*e/3)}return i}class f0{constructor(e){$e(this,"root",new it);$e(this,"chunks",[]);e.add(this.root);const t=new Map;for(const a of Xl.buildings){if(a.points.length<3)continue;const r=Math.floor(a.at/100);let o=t.get(r);o||(o={at:r*100+50,root:new it,walls:[[],[],[],[]],roofs:[]},t.set(r,o),this.root.add(o.root));const c=a.points,l=a.name==="Torre della Zecca"?25:a.name==="Cupola del Brunelleschi"?38:a.height;if(a.name==="Cupola del Brunelleschi"){const M=c.map(S=>S[0]),v=c.map(S=>S[1]),w=(Math.min(...M)+Math.max(...M))/2,L=-(Math.min(...v)+Math.max(...v))/2,A=new ee(new Qe(22,22,18,8),Ot().stone);A.position.set(w,44,L),o.root.add(A);const T=new ee(new Gt(22,16,16,0,Math.PI*2,0,Math.PI/2),Ot().roof);T.scale.y=1.65,T.position.set(w,53,L),o.root.add(T);const D=new ee(new Qe(2.5,4,14,8),Ot().stone);D.position.set(w,96,L),o.root.add(D);continue}const h=[],d=[],f=[];for(let M=0;M<c.length-1;M++){const v=c[M],w=c[M+1],L=Math.hypot(w[0]-v[0],w[1]-v[1]);if(L<.05)continue;const A=h.length/3;h.push(v[0],0,-v[1],w[0],0,-w[1],v[0],l,-v[1],w[0],l,-w[1]),d.push(0,0,L/4,0,0,l/3.4,L/4,l/3.4),f.push(A,A+2,A+1,A+1,A+2,A+3)}const p=new wt;if(p.setAttribute("position",new Ze(h,3)),p.setAttribute("uv",new Ze(d,2)),p.setIndex(f),p.computeVertexNormals(),/Torre della Zecca|Torre Volognana|Cattedrale/.test(a.name)){const M=Ot().stone.clone();M.side=Ft,M.color.setHex(a.name.includes("Cattedrale")?14934225:10259056);const v=new ee(p,M);if(v.castShadow=!0,v.receiveShadow=!0,o.root.add(v),a.name.startsWith("Torre")){const w=c.map(I=>I[0]),L=c.map(I=>-I[1]),A=Math.min(...w),T=Math.max(...w),D=Math.min(...L),S=Math.max(...L),y=[];for(let I=0;I<5;I++)for(const z of[D,S]){const P=new Ue((T-A)/9,1.3,.65);P.translate(A+(T-A)*I/4,l+.6,z),y.push(P)}this.merge(o.root,y,M)}}else o.walls[Number(a.id)%4].push(p);const _=new ds(c.map(M=>new te(M[0],M[1]))),u=new ir(_);u.rotateX(-Math.PI/2),u.translate(0,l+.05,0);const m=u.attributes.uv;for(let M=0;M<m.count;M++)m.setXY(M,m.getX(M)/5,m.getY(M)/5);o.roofs.push(u)}const i=Ot().facades.map(a=>{const r=a.clone();return r.side=Ft,r});for(const a of t.values()){for(let r=0;r<4;r++)this.merge(a.root,a.walls[r],i[r]);this.merge(a.root,a.roofs,Ot().roof),this.chunks.push(a)}const s=Ao().clone();s.color.setHex(4353641),s.onBeforeCompile=Ao().onBeforeCompile;for(const a of Xl.water){const r=new ds(a.points.map(h=>new te(h[0],h[1]))),o=new ir(r);o.rotateX(-Math.PI/2);const c=new ee(o,s);c.position.y=-.12,this.root.add(c);const l=[];for(let h=1;h<a.points.length;h++){const d=a.points[h-1],f=a.points[h],p=Math.hypot(f[0]-d[0],f[1]-d[1]);if(p>180||p<.1)continue;const g=new Ue(.65,1.05,p);g.rotateY(Math.atan2(f[0]-d[0],-(f[1]-d[1]))),g.translate((d[0]+f[0])/2,.25,-(d[1]+f[1])/2),l.push(g)}this.merge(this.root,l,Ot().stone)}}merge(e,t,i){if(!t.length)return;const s=fd(t);t.forEach(r=>r.dispose());const a=new ee(s,i);a.castShadow=!0,a.receiveShadow=!0,e.add(a)}update(e,t){if(this.root.visible=t,!t)return;const i=hd(e),s=Math.cos(i.heading),a=Math.sin(i.heading);this.root.rotation.y=-i.heading,this.root.position.set(-s*i.x+a*i.z,0,-a*i.x-s*i.z-5);for(const r of this.chunks)r.root.visible=Math.abs(r.at-e)<260}}const p0=new ge({color:7956816,roughness:1}),m0=new ge({color:4549433,roughness:.85,side:Ft}),g0=new Qe(.11,.19,4.3,10,5),_0=(()=>{const n=[],e=[];for(let i=0;i<19;i++){const s=i/18,a=s*2.4,r=Math.sin(s*Math.PI)*.45-s*s*.65,o=Math.sin(s*Math.PI)*.42+.015,c=n.length/3;n.push(0,r,a,-o,r-.07,a-.12,o,r-.07,a-.12),i>0&&e.push(c-3,c,c+1,c-3,c+2,c)}const t=new wt;return t.setAttribute("position",new Ze(n,3)),t.setIndex(e),t.computeVertexNormals(),t})();new ei(1.2,.42,24,1,!0);[15327176,7442314,11696473].map(n=>new ge({color:n,roughness:.95,side:Ft}));function $l(){const n=new it,e=new ee(g0,p0);e.position.set(.13,2.15,0),e.rotation.z=-.055,e.castShadow=!0,n.add(e);const t=new er(_0,m0,9),i=new je;for(let s=0;s<9;s++)i.position.set(.25,4.3,0),i.rotation.set(s%3*.09,s*Math.PI*2/9,0),i.updateMatrix(),t.setMatrixAt(s,i.matrix);return t.castShadow=!0,n.add(t),n}const Cn=new Ue(1,1,1),Zl=new Map,Jl=new Map,pi=new ge({color:14997439,roughness:.88}),v0=new ge({color:11388100,roughness:.2,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1}),Rs=new ge({color:3157030,roughness:.9}),ar=[12084808,6717305,13873779,8151636].map(n=>new ge({color:n,roughness:.94})),Kl=[12887148,10379847,7439738].map(n=>new ge({color:n,roughness:1,side:Ft})),x0=new ge({color:3560251,roughness:1}),jl=new ge({color:13944488,roughness:.9}),y0=new ei(1.35,.46,20,1,!0),M0=new Qe(.025,.035,1.9,8),S0=[15130058,12086864].map(n=>new ge({color:n,roughness:.95,side:Ft}));function E0(n){let e=Jl.get(n);if(e)return e;let t=Zl.get(n);if(!t){const i=document.createElement("canvas");i.width=512,i.height=128;const s=i.getContext("2d");s.fillStyle="#35463f",s.fillRect(0,0,512,128),s.strokeStyle="#d6bd8d",s.lineWidth=7,s.strokeRect(7,7,498,114),s.fillStyle="#f4ead4",s.font="bold 56px Georgia",s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,66,460),t=new Xo(i),t.colorSpace=Vt,t.anisotropy=4,Zl.set(n,t)}return e=new ge({map:t,roughness:.72}),Jl.set(n,e),e}function jn(n,e,t,i,s,a,r=1,o=1,c=1){const l=new ee(n,e);return l.position.set(i,s,a),l.scale.set(r,o,c),l.castShadow=!0,l.receiveShadow=!0,l.userData.sharedResources=!0,t.add(l),l}function ut(n,e,t,i,s,a,r,o){return jn(Cn,e,n,t,i,s,a,r,o)}function un(n,e,t,i){const s=new er(e,t,i.length);i.forEach((a,r)=>s.setMatrixAt(r,a)),s.castShadow=!0,s.receiveShadow=!0,s.userData.sharedResources=!0,n.add(s)}function gd(n){return-n}function Ql(n,e,t,i,s){const a=Ot(),r=gd(e),o=s*2.5+.25,c=a.facades[(t+1)%a.facades.length];jn(Qo(3.8,o-2.7,9.5),c,n,0,2.7+(o-2.7)/2,0),ut(n,a.stone,0,.17,0,4.05,.34,9.75),ut(n,a.roof,0,o+.12,0,4.05,.24,9.75),ut(n,pi,r*1.96,o+.34,0,.12,.2,9.8),ut(n,pi,-r*1.7,1.45,0,.16,2.6,9.5),ut(n,a.pavement,0,.28,0,3.8,.15,9.5),ut(n,pi,0,1.45,-4.68,3.8,2.6,.15),ut(n,pi,0,1.45,4.68,3.8,2.6,.15);const l=[];for(const _ of[-4.5,-1.5,1.5,4.5]){const u=new je;u.position.set(r*1.85,1.48,_),u.scale.set(.38,2.55,.35),u.updateMatrix(),l.push(u.matrix.clone())}un(n,Cn,a.stone,l),ut(n,Rs,-r*.6,.8,0,.6,1.1,3.6),ut(n,jl,-r*.6,1.39,0,.75,.1,3.8);for(const _ of[-3,3]){const u=ut(n,v0,r*1.9,1.45,_,.025,1.65,1.1);u.castShadow=!1,ut(n,Rs,r*1.92,.64,_,.045,.045,1.2),ut(n,Rs,r*1.92,2.27,_,.045,.045,1.2)}ut(n,pi,r*2,2.52,0,.2,.3,9.65),ut(n,Rs,r*2.08,2.68,0,.12,.58,3.9);const h=jn(new vn(3.7,.46),E0(i),n,r*2.15,2.68,0,1,1,1);h.rotation.y=r*Math.PI/2;const d=[[],[]];for(let _=0;_<12;_++){const u=new je;u.position.set(r*2.48,2.48,-3.3+_*.6),u.rotation.z=r*.13,u.scale.set(1.1,.1,.6),u.updateMatrix(),d[_%2].push(u.matrix.clone())}un(n,Cn,ar[t%ar.length],d[0]),un(n,Cn,pi,d[1]);const f=[];for(let _=0;_<s;_++)for(let u=0;u<3;u++){const m=2.65+_*2.5,M=-3+u*3;if((_+u+t)%3===0){const v=new je;v.position.set(r*2.13,m-.48,M),v.rotation.y=r*Math.PI/2,v.scale.set(1.4,.08,.32),v.updateMatrix(),f.push(v.matrix.clone())}}f.length&&un(n,Cn,a.iron,f);const p=[],g=[];for(const _ of[-3.4,3.3]){const u=new je;u.position.set(r*2.65,1,_),u.scale.set(.72,.09,.72),u.updateMatrix(),g.push(u.matrix.clone());for(const m of[-.24,.24]){const M=new je;M.position.set(r*2.65,.64,_+m),M.scale.set(.06,.7,.06),M.updateMatrix(),p.push(M.matrix.clone())}for(const m of[-.62,.62]){const M=new je;M.position.set(r*2.65,.71,_+m),M.scale.set(.44,.08,.44),M.updateMatrix(),g.push(M.matrix.clone());const v=new je;v.position.set(r*2.65,.49,_+m),v.scale.set(.06,.42,.06),v.updateMatrix(),p.push(v.matrix.clone())}}if(un(n,Cn,jl,g),un(n,Cn,Rs,p),i!=="BOTTEGA")for(const[_,u]of[-3.4,3.3].entries()){const m=js(!0,t+_);m.position.set(r*2.65,.28,u+.62),n.add(m);const M=jn(new Qe(.045,.035,.1,10),pi,n,r*2.65,1.11,u);M.castShadow=!1}}function w0(n,e,t){const i=Ot();jn(Qo(4,7.5,9.5),i.facades[t%4],n,e*5,3.75,0),ut(n,i.roof,e*5,7.65,0,4.25,.3,9.8),ut(n,i.pavement,0,.04,0,4.1,.08,10);for(let s=0;s<2;s++){const a=s?2.45:-2.45,r=Kl[(t+s)%Kl.length];ut(n,i.stone,0,.65,a,1.15,1.2,3.8),ut(n,r,0,2.35,a,2.5,.12,4.5);const o=[];for(const l of[-1.05,1.05])for(const h of[-1.95,1.95]){const d=new je;d.position.set(l,1.17,a+h),d.scale.set(.07,2.34,.07),d.updateMatrix(),o.push(d.matrix.clone())}un(n,Cn,i.iron,o);const c=[];for(let l=0;l<6;l++){const h=new je;h.position.set(-.18+l%3*.18,1.32+l%2*.08,a-1.2+Math.floor(l/3)*.55),h.scale.set(.16,.16,.16),h.updateMatrix(),c.push(h.matrix.clone())}un(n,new Gt(.5,8,6),ar[(t+s)%ar.length],c)}}function b0(n,e,t){const i=Ot(),s=gd(e),a=i.facades[(t+2)%i.facades.length];jn(Qo(3.35,4.5,7.2),a,n,0,2.25,0),ut(n,i.roof,0,4.62,0,3.7,.35,7.6),ut(n,i.stone,s*2,.48,0,.55,.96,9.8);const r=new ei(.65,5.7,7);for(const o of[-3.4,3.5])jn(r,x0,n,s*2.7,2.85,o,1,1,1);ut(n,i.iron,s*2.15,1.22,0,.08,.08,8.4)}function T0(n,e){const t=Ot();ut(n,t.sand,3.2,.015,0,8.5,.03,10),ut(n,Ao(),62.45,.02,0,110,.06,24);const i=$l();i.position.set(2.9,0,e%2?-3.7:3.7),i.scale.setScalar(.82),i.userData.sharedResources=!0,n.add(i);const s=$l();s.position.set(11.5,0,e%2?3.7:-3.7),s.scale.setScalar(.72),s.userData.sharedResources=!0,n.add(s);const a=[];for(const o of[-2.65,2.65]){const c=jn(y0,S0[(e+(o>0?1:0))%2],n,4.65,2.15,o);c.rotation.y=o>0?.35:-.25;const l=new je;l.position.set(4.65,1,o),l.updateMatrix(),a.push(l.matrix.clone())}un(n,M0,t.iron,a),ut(n,t.stone,.5,.5,0,.18,.18,9.8);const r=[];for(let o=0;o<9;o++){const c=new je;c.position.set(.5,.28,-4.4+o*1.1),c.scale.set(.2,.55,.2),c.updateMatrix(),r.push(c.matrix.clone())}un(n,Cn,t.stone,r)}function A0(n,e,t){const i=new it;return i.userData.sharedResources=!0,n==="historic-center"?Ql(i,e,t,["BAR","BOTTEGA","RISTORANTE","CAFFÈ"][t%4],2+t%3):n==="market"?w0(i,e,t):n==="hillside"?b0(i,e,t):e===1?T0(i,t):Ql(i,e,t,t%2?"ALBERGO":"RISTORANTE",2),i}const R0=new Ue(1,1,1),eh=new ge({color:14273456,roughness:.95}),Zi=new ge({color:5324844,roughness:.8}),th=new ge({color:5535618,metalness:.2,roughness:.25});function Rt(n,e,t,i,s,a,r,o){const c=new ee(R0,e);return c.position.set(t,i,s),c.scale.set(a,r,o),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function C0(n,e){const t=n/2,i=new ds;return i.moveTo(-t,0),i.lineTo(t,0),i.lineTo(t,e-t),i.absarc(0,e-t,t,0,Math.PI,!1),i.closePath(),new mr(i,{depth:.12,bevelEnabled:!1,curveSegments:16})}function P0(n,e){const t=new it,i=Ot();if(Rt(t,i.pavement,n*7,.13,0,21,.26,10),!e)return t;const s=new it;s.position.set(n*12,0,0),s.rotation.y=-n*Math.PI/2,t.add(s),Rt(s,eh,0,4.8,0,8.5,9.6,12),Rt(s,i.stone,0,.32,6.3,9.2,.3,1.5),Rt(s,i.stone,0,.15,7,9.8,.3,1.8);const a=new ee(new ei(6.9,3.6,4),i.roof);a.rotation.y=Math.PI/4,a.scale.z=1.42,a.position.y=11.35,a.castShadow=!0,s.add(a);const r=new ee(C0(2.1,3.7),Zi);r.position.set(0,.45,6.025),s.add(r),Rt(s,i.stone,0,.44,6.12,2.6,.12,.2);for(const p of[-3.5,3.5])Rt(s,i.stone,p,4.8,6.1,.34,9.6,.25),Rt(s,i.stone,p,8.4,6.17,.65,.25,.35);const o=new ee(new nr(1.03,32),th);o.position.set(0,6.4,6.08),s.add(o);const c=new ee(new ii(1.08,.14,8,32),i.stone);c.position.copy(o.position),s.add(c);for(let p=0;p<8;p++){const g=Rt(s,i.stone,0,6.4,6.12,.07,2,.08);g.rotation.z=p*Math.PI/4}Rt(s,Zi,0,13.5,0,.14,1.4,.14),Rt(s,Zi,0,13.8,0,.85,.14,.14),Rt(s,eh,5.5,6,-2.5,2.7,12,2.7),Rt(s,Zi,5.5,13.1,-2.5,2.1,2.2,2.1);for(const p of[4.25,6.75])for(const g of[-3.75,-1.25])Rt(s,i.stone,p,13.2,g,.32,2.4,.32);Rt(s,i.stone,5.5,14.5,-2.5,3.15,.35,3.15);const l=new ee(new ei(2.2,2.1,4),i.roof);l.rotation.y=Math.PI/4,l.position.set(5.5,15.7,-2.5),s.add(l);const h=new ee(new Qe(1.65,1.8,.45,24),i.stone);h.position.set(n*3,.35,-2),t.add(h);const d=new ee(new nr(1.45,32),th);d.rotation.x=-Math.PI/2,d.position.set(n*3,.59,-2),t.add(d),Rt(t,i.stone,n*3,1.05,-2,.35,1,.35),Rt(t,Zi,n*3,.62,3,2.4,.14,.6),Rt(t,Zi,n*3,.98,3.25,2.4,.7,.08);const f=js(!0,1);return f.position.set(n*3,.24,3),t.add(f),t}function L0(){const n=new it,e=document.createElement("canvas");e.width=1024,e.height=192;const t=e.getContext("2d");t.fillStyle="#fffdf3",t.fillRect(0,0,1024,192),t.fillStyle="#16272b";for(let c=0;c<6;c++)for(let l=0;l<32;l++)(c+l)%2===0&&(l<6||l>25)&&t.fillRect(l*32,c*32,32,32);t.font="900 128px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("FINISH",512,104);const i=new Xo(e);i.colorSpace=Vt;const s=new ee(new Ue(2,1.15,.08),new ge({map:i,roughness:.7}));s.position.y=4.2,n.add(s);const a=new ge({color:6120807,metalness:.65,roughness:.35});for(const c of[-1,1]){const l=new ee(new Qe(.035,.045,4.85,8),a);l.position.set(c*1.04,2.425,0),n.add(l)}const r=new ge({color:16447206,roughness:.9}),o=new ge({color:2107178,roughness:.9});for(let c=0;c<2;c++)for(let l=0;l<16;l++){const h=new ee(new Ue(.125,.014,.38),(c+l)%2?r:o);h.position.set(-1+(l+.5)/8,.095,(c-.5)*.38),n.add(h)}return n}const Po=-24,I0=216,Ba=2,ho=10,Ji=(I0-Po)/Ba+1;class D0{constructor(e){$e(this,"ribbons",[]);$e(this,"scenery",[]);$e(this,"templates",new Map);$e(this,"lines");$e(this,"matrix",new je);$e(this,"pedestrians",[]);$e(this,"time",0);$e(this,"finish",L0());$e(this,"finishDistance",Ks);$e(this,"florence",null);this.scene=e,e.add(this.finish),this.ribbon(e,-5.1,5.1,.065,Ot().asphalt);for(const t of[-1,1])this.ribbon(e,t*5.1,t*6.9,.28,Ot().pavement),this.ribbon(e,t*5.1,t*5.27,.31,Ot().stone);this.lines=new er(new Ue(.09,.018,1.8),new ge({color:15590863,roughness:.9}),120),this.lines.frustumCulled=!1,e.add(this.lines);for(let t=-2;t<24;t++)for(const i of[-1,1]){const s=new it;e.add(s),this.scenery.push({root:s,index:t,side:i,key:""})}for(let t=0;t<12;t++){const i=js(!1,t);e.add(i),this.pedestrians.push({root:i,s:t*20,side:t%2?1:-1,direction:t%3?1:-1,phase:t*1.7})}this.update(0)}ribbon(e,t,i,s,a){t>i&&([t,i]=[i,t]);const r=new wt;r.setAttribute("position",new Bt(new Float32Array(Ji*6),3).setUsage(Vc)),r.setAttribute("uv",new Bt(new Float32Array(Ji*4),2).setUsage(Vc));const o=new Float32Array(Ji*6);for(let h=0;h<Ji*2;h++)o[h*3+1]=1;r.setAttribute("normal",new Bt(o,3));const c=[];for(let h=0;h<Ji-1;h++){const d=h*2;c.push(d,d+1,d+2,d+1,d+3,d+2)}r.setIndex(c);const l=new ee(r,a);l.frustumCulled=!1,l.receiveShadow=!0,e.add(l),this.ribbons.push({mesh:l,left:t,right:i,height:s})}reset(e=0,t=Ks){this.finishDistance=e+t,yt()&&!this.florence&&(this.florence=new f0(this.scene)),this.scenery.forEach((i,s)=>{i.index=Math.floor(e/ho)+Math.floor(s/2)-2,i.key=""}),this.pedestrians.forEach((i,s)=>{i.s=e+s*20}),this.update(e)}update(e,t=0){var a;if((a=this.florence)==null||a.update(e,yt()),this.finish.visible=this.finishDistance-e<210,this.finish.visible){const r=In(this.finishDistance,0,e);this.finish.position.set(r.x,0,r.z),this.finish.rotation.y=r.heading,this.finish.scale.x=Zt(this.finishDistance).halfWidth}this.time+=t;const i=Math.floor(e/Ba)*Ba+Po;for(const r of this.ribbons){const o=r.mesh.geometry,c=o.attributes.position,l=o.attributes.uv;for(let h=0;h<Ji;h++)for(let d=0;d<2;d++){const f=i+h*Ba,p=d?r.right:r.left,g=Zt(f),_=Math.sign(p)*(Math.abs(p)-5.1+g.halfWidth),u=In(f,_,e);c.setXYZ(h*2+d,u.x,r.height,u.z),l.setXY(h*2+d,d,f/20)}c.needsUpdate=!0,l.needsUpdate=!0}const s=Math.floor((e+Po)/4)*4;for(let r=0;r<120;r++){const o=s+Math.floor(r/2)*4,c=Zt(o),l=In(o,(r%2?1.2:-1.2)*(1-c.narrow),e);this.matrix.position.set(l.x,.085,l.z),this.matrix.scale.setScalar(r%2===1?1-c.narrow:1),this.matrix.rotation.set(0,l.heading,0),this.matrix.updateMatrix(),this.lines.setMatrixAt(r,this.matrix.matrix)}this.lines.instanceMatrix.needsUpdate=!0;for(const r of this.scenery){if(r.root.visible=!yt(),yt())continue;for(;r.index*ho-e<-25;)r.index+=26;const o=r.index*ho,c=jo(Math.max(0,o)).district.id,l=Zt(o),h=(r.index%3+3)%3,d=l.plaza?`piazza:${r.side}:${l.church}`:`${c}:${r.side}:${h}`;if(r.key!==d){let p=this.templates.get(d);p||(p=l.plaza?P0(r.side,l.church&&r.side===1):A0(c,r.side,h),this.templates.set(d,p)),r.root.traverse(g=>{g instanceof er&&g.dispose()}),r.root.clear(),r.root.add(p.clone(!0)),r.key=d}const f=In(o,r.side*(l.halfWidth+3.4),e);r.root.position.set(f.x,0,f.z),r.root.rotation.y=f.heading}for(const r of this.pedestrians){for(r.s+=r.direction*.75*t;r.s-e<-24;)r.s+=240;const o=Zt(r.s),c=In(r.s,r.side*(o.halfWidth+.65),e);r.root.position.set(c.x,.28,c.z),r.root.rotation.y=c.heading+(r.direction<0?Math.PI:0),pd(r.root,this.time+r.phase)}}}const Cs=new C;function jt(n,e,t,i,s,a){const r=2*Math.PI*s/4,o=Math.max(a-2*s,0),c=Math.PI/4;Cs.copy(e),Cs[i]=0,Cs.normalize();const l=.5*r/(r+o),h=1-Cs.angleTo(n)/c;return Math.sign(Cs[t])===1?h*l:o/(r+o)+l+l*(1-h)}class ec extends Ue{constructor(e=1,t=1,i=1,s=2,a=.1){if(s=s*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const o=new C,c=new C,l=new C(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new C,_=.5/s;for(let u=0,m=0;u<h.length;u+=3,m+=2)switch(o.fromArray(h,u),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[u+0]=l.x*Math.sign(o.x)+c.x*a,h[u+1]=l.y*Math.sign(o.y)+c.y*a,h[u+2]=l.z*Math.sign(o.z)+c.z*a,d[u+0]=c.x,d[u+1]=c.y,d[u+2]=c.z,Math.floor(u/p)){case 0:g.set(1,0,0),f[m+0]=jt(g,c,"z","y",a,i),f[m+1]=1-jt(g,c,"y","z",a,t);break;case 1:g.set(-1,0,0),f[m+0]=1-jt(g,c,"z","y",a,i),f[m+1]=1-jt(g,c,"y","z",a,t);break;case 2:g.set(0,1,0),f[m+0]=1-jt(g,c,"x","z",a,e),f[m+1]=jt(g,c,"z","x",a,i);break;case 3:g.set(0,-1,0),f[m+0]=1-jt(g,c,"x","z",a,e),f[m+1]=1-jt(g,c,"z","x",a,i);break;case 4:g.set(0,0,1),f[m+0]=1-jt(g,c,"x","y",a,e),f[m+1]=1-jt(g,c,"y","x",a,t);break;case 5:g.set(0,0,-1),f[m+0]=jt(g,c,"x","y",a,e),f[m+1]=1-jt(g,c,"y","x",a,t);break}}}const rr={red:12126482,white:15657697,gray:6843762};function U0(){const n=new it;n.name="classic-scooter";const e=new Bl({color:rr.red,metalness:.16,roughness:.33,clearcoat:.8,clearcoatRoughness:.26,envMapIntensity:.4});e.name="scooter-paint";const t=new ge({color:12568263,metalness:.93,roughness:.18}),i=new ge({color:1579805,roughness:.9}),s=new ge({color:2106922,roughness:.57}),a=new Bl({color:8061445,roughness:.22,clearcoat:1,emissive:11667210,emissiveIntensity:.45}),r=new Gt(1,32,24),o=(p,g,_,u,m)=>{const M=new ee(p,g);return M.position.set(_,u,m),M.castShadow=!0,M.receiveShadow=!0,n.add(M),M},c=(p,g,_,u=.06)=>new ec(p,g,_,4,u);o(c(.54,.17,1.22),e,0,.48,.01);const l=o(c(.58,.76,.18,.085),e,0,.84,-.49);l.rotation.x=.15;for(const p of[-1,1]){o(r,e,p*.18,.64,.46).scale.set(.2,.325,.5);const _=new Jh([new C(p*.3,.89,.37),new C(p*.402,.67,.76),new C(p*.33,.34,.72)]);o(new Zo(_,24,.014,8,!1),t,0,0,0);const u=o(new Qe(.014,.014,.27,10),t,p*.34,1.22,-.47);u.rotation.z=-p*.22,o(new Gt(.085,24,16),t,p*.39,1.36,-.47).scale.set(1,1,.22),o(c(.14,.065,.095,.025),i,p*.3,1.15,-.49)}o(c(.29,.66,.25,.12),e,0,.62,.79),o(c(.49,.14,.71,.065),s,0,1,.29),o(c(.5,.024,.69,.01),t,0,.929,.3),o(c(.24,.25,.055,.025),t,0,.61,.952),o(c(.19,.2,.058,.024),a,0,.61,.988),o(c(.7,.07,.09,.03),e,0,1.15,-.48);const h=o(new Qe(.1,.1,.07,24),t,0,1.16,-.56);h.rotation.x=Math.PI/2;for(const p of[-.63,.65]){const g=o(new Qe(.235,.235,.145,32),i,0,.255,p);g.rotation.z=Math.PI/2;const _=o(new Qe(.12,.12,.15,24),t,0,.255,p);_.rotation.z=Math.PI/2}o(r,e,0,.49,-.63).scale.set(.14,.09,.31);const f=o(new Qe(.055,.065,.49,20),t,.26,.25,.59);return f.rotation.x=Math.PI/2,n}function nh(n,e){n.traverse(t=>{if(t instanceof ee)for(const i of Array.isArray(t.material)?t.material:[t.material])i instanceof ge&&i.name==="scooter-paint"&&i.color.setHex(rr[e])})}function ln(n,e,t){const i=new ee(new Gt(1,24,16),n);return i.position.set(...e),i.scale.set(...t),i.castShadow=!0,i.receiveShadow=!0,i}function Ps(n,e,t,i,s){const a=new C(...e),r=new C(...t),o=new ee(new Qe(i,s,a.distanceTo(r),14),n);return o.position.copy(a).add(r).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new C(0,1,0),a.sub(r).normalize()),o.castShadow=!0,o.receiveShadow=!0,o}function N0(){const n=new it;n.name="rider";const e=new ge({color:480356,roughness:.88}),t=new ge({color:1324091,roughness:.9}),i=new ge({color:2503224,roughness:.94}),s=new ge({color:1645597,roughness:.76}),a=new ge({color:1645597,roughness:.8}),r=new ge({color:15329247,metalness:.2,roughness:.31}),o=new ge({color:1980480,metalness:.18,roughness:.16});n.add(ln(i,[0,.9,.23],[.23,.13,.19]));const c=ln(e,[0,1.22,.2],[.23,.33,.15]);c.rotation.x=-.13,n.add(c),n.add(ln(t,[0,1,.2],[.23,.045,.15])),n.add(Ps(t,[0,1.46,.18],[0,1.53,.14],.075,.066));for(const h of[-1,1]){const d=h*.17;n.add(Ps(i,[d,.89,.25],[h*.24,.68,-.04],.11,.09)),n.add(ln(i,[h*.24,.67,-.04],[.095,.095,.095])),n.add(Ps(i,[h*.24,.65,-.04],[h*.22,.39,-.11],.09,.07)),n.add(ln(s,[h*.22,.34,-.2],[.095,.065,.17])),n.add(ln(e,[h*.23,1.39,.17],[.105,.11,.105])),n.add(Ps(e,[h*.25,1.38,.15],[h*.27,1.15,-.1],.086,.068)),n.add(ln(t,[h*.27,1.14,-.1],[.067,.07,.067])),n.add(Ps(e,[h*.27,1.14,-.1],[h*.28,1.08,-.43],.066,.052)),n.add(ln(a,[h*.28,1.08,-.46],[.064,.041,.077]))}n.add(ln(r,[0,1.65,.12],[.155,.17,.155])),n.add(ln(o,[0,1.65,-.02],[.126,.067,.026]));const l=new ee(new ii(.136,.012,8,36,Math.PI),t);return l.position.set(0,1.6,-.02),l.rotation.z=Math.PI,l.castShadow=!0,n.add(l),n}async function k0(n){const e=U0(),t=N0();n.clear(),n.add(e,t)}const Le={lanes:3,laneWidth:2.4,baseSpeed:18,maxSpeed:52,minSpeed:6,lateralSpeed:18,jumpVelocity:12.2,gravity:28,jumpSafeHeight:.9,turboBoost:16,turboDuration:.5,turboRechargeRate:.12,comboTimeout:2.1,coinSpawnDistanceMin:24,coinSpawnDistanceMax:55,coinValue:14,cameraBaseOffset:new C(0,3.5,8.2),cameraLookAt:new C(0,1.5,-6),fov:60,fogNear:8,fogFar:160,cityFogColor:12115455},gn={HIGH_SCORE:"vespa_city_highscore",MUTE:"vespa_city_mute"},_d=n=>n[Math.floor(Math.random()*n.length)],Na=(n,e,t)=>n+(e-n)*t,H0=(n,e,t)=>n.lerp(e,t),Pn=(n,e,t)=>n<e?e:n>t?t:n,xn=()=>performance.now()/1e3,ti=(n,e=1)=>new ge({color:new ze(n).multiplyScalar(.2),emissive:new ze(n),emissiveIntensity:e,metalness:.1,roughness:.4}),Ga=n=>new ge({color:n,metalness:.7,roughness:.35}),an=n=>new ge({color:n,metalness:.05,roughness:.85}),ih=(n,e)=>(Math.sin(n*43.7)+Math.sin(n*31.1))*.5*e,rn=new ge({color:14213598,metalness:.86,roughness:.22}),O0=new ge({color:2106406,metalness:.02,roughness:.92}),uo=new ge({color:10471881,metalness:.15,roughness:.19,transparent:!0,opacity:.72}),sh=new ge({color:2239533,roughness:.72}),F0=new ge({color:16777215,metalness:.38,roughness:.29}),z0=new Qe(.13,.13,.17,20),B0=(()=>{const n=new ds,e=.6,t=1,i=.16;n.moveTo(-e+i,-t),n.lineTo(e-i,-t),n.quadraticCurveTo(e,-t,e,-t+i),n.lineTo(e,t-i),n.quadraticCurveTo(e,t,e-i,t),n.lineTo(-e+i,t),n.quadraticCurveTo(-e,t,-e,t-i),n.lineTo(-e,-t+i),n.quadraticCurveTo(-e,-t,-e+i,-t);const s=new mr(n,{depth:.35,bevelEnabled:!0,bevelSegments:2,bevelSize:.045,bevelThickness:.035,curveSegments:5});return s.rotateX(-Math.PI/2),s.translate(0,-.175,0),s})(),G0=new Qe(.018,.022,.24,8),V0=new Gt(.105,16,10),W0=new ge({color:11451578,metalness:.8,roughness:.27}),X0=new ii(.135,.018,6,18),q0=new vn(.72,.31),Y0=new vn(.68,.27),$0=new Ue(.018,.27,.58),Z0=new Ue(.012,.24,.012),J0=new Ue(.035,.025,.11),ah=new Ue(1.12,.075,.12),K0=new Ue(.34,.12,.025),j0=new Gt(.045,12,8),Q0=new Ue(.3,.09,.018),e4=new ge({color:15328726,roughness:.6}),t4=new ii(.12,.025,8,24),n4=new Qe(.035,.045,.58,10),i4=new Qe(.018,.018,.78,8),s4=new ec(.42,.035,.44,2,.015),a4=new Qe(.045,.045,.2,10),r4=new ii(.265,.035,7,24,Math.PI),rh=new Map;function Ct(n,e,t,i){const s=new ee(n,e);return s.position.copy(t),s.name=i,s.castShadow=!0,s.receiveShadow=!0,s}function Lo(n,e,t,i,s){const a=Ct(G0,rn,new C(e,t,i),`${s}-stem`);a.rotation.z=e<0?.38:-.38;const r=Ct(V0,rn,new C(e*1.22,t+.11,i-.04),`${s}-mirror`);r.scale.set(1.25,.78,.42),n.add(a,r)}function o4(n){const e=n.children.find(t=>!(t instanceof ee)||!(t.geometry instanceof Ue)?!1:Math.abs(t.position.y-.4)<.02);e&&(e.geometry.dispose(),e.geometry=B0,e.material instanceof ge&&(e.material.roughness=.3,e.material.metalness=.34))}function c4(n){if(n.userData.vehicleDetailsEnhanced)return;n.userData.vehicleDetailsEnhanced=!0,o4(n),n.traverse(c=>{if(!(c instanceof ee))return;const l=Array.isArray(c.material)?c.material:[c.material];for(const h of l)h instanceof ge&&h.roughness>.65&&c.position.y>.25&&(h.roughness=.3,h.metalness=.34)});const e=Ct(q0,uo,new C(0,.76,-.515),"car-windshield");e.rotation.set(.24,Math.PI,0),e.castShadow=!1;const t=Ct(Y0,uo,new C(0,.76,.315),"car-rear-glass");t.rotation.x=-.24,t.castShadow=!1,n.add(e,t);for(const c of[-1,1]){const l=Ct($0,uo,new C(c*.458,.77,-.1),`car-side-glass-${c}`);l.castShadow=!1,Lo(n,c*.57,.78,-.39,`car-mirror-${c}`);const h=Ct(Z0,sh,new C(c*.603,.42,.02),`car-door-seam-${c}`),d=Ct(J0,rn,new C(c*.611,.49,-.16),`car-door-handle-${c}`);n.add(l,h,d)}const i=Ct(ah,rn,new C(0,.24,-1.01),"car-front-bumper"),s=Ct(ah,rn,new C(0,.24,1.01),"car-rear-bumper"),a=Ct(K0,sh,new C(0,.36,-1.025),"car-grille"),r=Ct(j0,rn,new C(0,.37,-1.045),"car-grille-badge"),o=Ct(Q0,e4,new C(0,.34,1.024),"car-rear-plate");n.add(i,s,a,r,o);for(const c of n.userData.wheels??[]){const l=Ct(z0,W0,c.position.clone(),"car-wheel-hub");l.rotation.z=Math.PI/2,l.scale.y=1.2;const h=Ct(X0,rn,c.position.clone(),"car-wheel-hub-ring");h.rotation.y=Math.PI/2,h.scale.x=1.2,n.add(l,h)}}function l4(n){if(n.userData.vehicleDetailsEnhanced)return;n.userData.vehicleDetailsEnhanced=!0;for(const o of n.children)if(o instanceof ee){if(o.geometry instanceof Ue){const{width:c,height:l,depth:h}=o.geometry.parameters,d=Math.min(c,l,h)*.22,f=`${c}:${l}:${h}:${d}`;let p=rh.get(f);p||(p=new ec(c,l,h,3,d),rh.set(f,p)),o.geometry.dispose(),o.geometry=p}o.material instanceof ge&&o.position.y>.48&&o.position.y<1.4&&o.position.z<.6&&o.material.roughness<.5&&(o.material.roughness=.28,o.material.metalness=.42)}const e=Ct(t4,rn,new C(0,1.2,-.595),"scooter-headlamp-bezel"),t=new it;for(const o of[-1,1]){const c=Ct(n4,rn,new C(o*.09,.59,-.55),`scooter-fork-${o}`);c.rotation.x=-.13,t.add(c)}const i=new ee(i4,rn);i.rotation.x=Math.PI/2,i.position.set(.31,.7,.47),i.name="scooter-side-rail";const s=new ee(s4,rn);s.position.set(0,1.08,.69),s.name="scooter-rear-carrier";const a=new ee(a4,O0);a.rotation.z=Math.PI/2,a.position.set(.34,1.18,-.45),a.name="scooter-handle-grips",n.add(e,t,i,s,a),Lo(n,-.38,1.27,-.45,"scooter-mirror-left"),Lo(n,.38,1.27,-.45,"scooter-mirror-right");const r=Ct(r4,F0,new C(0,.34,-.55),"scooter-front-fender");r.rotation.y=Math.PI/2,r.rotation.z=Math.PI,n.add(r)}const fo=(...n)=>{},Pt={sky:10344936,haze:12181983,lane:16774095,coral:15167313,cream:15851453,petrol:1534834,sage:7902575,hazardRed:15088434,hazardAmber:16756736},ka={laneDash:new Ue(.09,.025,1.35),coinRim:new ii(.27,.055,10,28),coinFace:new Qe(.225,.225,.055,28),coinInset:new Qe(.155,.155,.062,24),coinMark:new Ue(.055,.22,.035),beachBlock:new Ue(8.5,.12,5),seaBlock:new vn(110,5),foamBlock:new vn(.38,5)},Ha={rim:new ge({color:16765786,emissive:10179072,emissiveIntensity:.65,metalness:.82,roughness:.2}),face:new ge({color:16165147,emissive:8008960,emissiveIntensity:.35,metalness:.72,roughness:.27}),inset:new ge({color:16769674,emissive:11689216,emissiveIntensity:.5,metalness:.68,roughness:.22}),mark:new ge({color:16774077,emissive:16753951,emissiveIntensity:.8,metalness:.5,roughness:.25})};new ge({color:15334389,emissive:11068383,emissiveIntensity:.25,roughness:.75});function h4(){const n=a=>{const r=document.createElement("div");r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.background="rgba(255, 0, 0, 0.9)",r.style.color="white",r.style.padding="20px",r.style.borderRadius="10px",r.style.zIndex="9999",r.style.maxWidth="90%",r.style.textAlign="center",r.innerHTML=`
      <h3>Errore WebGL</h3>
      <p>${a}</p>
      <p style="font-size: 12px; margin-top: 10px;">Prova a ricaricare la pagina o abilita WebGL nelle impostazioni del browser.</p>
    `,document.body.appendChild(r)},e={antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1};let t=null;try{t=new Dl(e),fo("createRenderer() - WebGLRenderer creato")}catch(a){console.warn("createRenderer() - WebGLRenderer fallito, provo WebGL1 con canvas manuale",a);try{const r=document.createElement("canvas"),o=r.getContext("webgl",{antialias:!0,preserveDrawingBuffer:!1});if(!o)throw new Error("Fallback WebGL context non disponibile");t=new Dl({...e,canvas:r,context:o}),fo("createRenderer() - Renderer creato con contesto WebGL1 fallback")}catch(r){throw console.error("ERRORE nella creazione del renderer WebGL:",r),n("Il tuo dispositivo non riesce a creare un contesto WebGL."),r}}if(!t.getContext())throw console.error("createRenderer() - Context WebGL non disponibile"),n("Impossibile inizializzare WebGL: contesto non disponibile."),new Error("WebGL context unavailable");t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,window.matchMedia("(pointer: coarse)").matches?1.5:1.75)),t.shadowMap.enabled=!0,t.shadowMap.type=ph,t.outputColorSpace=Vt,t.toneMapping=gh,t.toneMappingExposure=.95,t.setClearColor(new ze(Pt.sky)),t.domElement.addEventListener("webglcontextlost",a=>{a.preventDefault(),console.error("WebGL context lost - mostro messaggio all'utente"),n("Il rendering 3D e stato disattivato dal browser (contesto WebGL perso). Chiudi altre app o ricarica la pagina.")},{passive:!1});const i=t.domElement;i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.zIndex="0",i.id="game-canvas";const s=document.getElementById("hud");return s&&s.parentNode?s.parentNode.insertBefore(i,s):document.body.insertBefore(i,document.body.firstChild),fo(`Canvas dimensioni: ${i.width}x${i.height}, style: ${i.style.width}x${i.style.height}`),t}function d4(){return new Qt(Le.fov,window.innerWidth/window.innerHeight,.1,700)}function u4(){const n=new Zh;return n.background=new ze(Pt.sky),n.fog=new fr(Pt.haze,Le.fogNear,Le.fogFar),n}function f4(){const n=new it,e=Ga(Pt.coral),t=Ga(2504762),i=new ee(new Ue(.6,.25,1.3),e);i.position.set(0,.6,0),i.castShadow=!0,i.receiveShadow=!0,n.add(i);const s=new ee(new Ue(.5,.9,.18),e);s.position.set(0,.9,-.45),s.castShadow=!0,n.add(s);const a=new ee(new Ue(.5,.06,.9),t);a.position.set(0,.5,.1),a.castShadow=!0,a.receiveShadow=!0,n.add(a);const r=new ee(new Gt(1,28,20),e);r.scale.set(.34,.29,.42),r.position.set(0,.8,.5),r.castShadow=!0,n.add(r);const o=new ee(new Ue(.5,.12,.7),an(1118481));o.position.set(0,1.05,.3),o.castShadow=!0,n.add(o);const c=Ga(1118481),l=new Qe(.23,.23,.14,16),h=new ee(l,c);h.rotation.z=Math.PI/2,h.position.set(0,.32,-.55),h.castShadow=!0;const d=new ee(l,c);d.rotation.z=Math.PI/2,d.position.set(0,.32,.55),d.castShadow=!0,n.add(h,d);const f=new ee(new Ue(.7,.08,.08),e);f.position.set(0,1.18,-.45),f.castShadow=!0,n.add(f);const p=new ee(new Qe(.11,.11,.09,20),ti(16775377,3.2));p.rotation.x=Math.PI/2,p.position.set(0,1.2,-.54),p.castShadow=!1,n.add(p);const g=new ee(new Ue(.22,.14,.04),ti(16721472,1.2));g.position.set(0,.9,.9),n.add(g);const _=an(16042405),u=an(Pt.petrol),m=an(2504762),M=new ge({color:15525849,roughness:.28,metalness:.15}),v=new Fs(.065,.27,4,10),w=new ee(v,m);w.position.set(-.09,.8,.15),w.rotation.x=-.45;const L=w.clone();L.position.x=.09;const A=new ee(new Fs(.155,.2,6,12),u);A.position.set(0,1.25,.1),A.scale.z=.7,A.rotation.x=-.15;const T=new Fs(.055,.28,4,10),D=new ee(T,u);D.position.set(-.26,1.3,-.2),D.rotation.x=-.9,D.rotation.z=-.2;const S=D.clone();S.position.x=.26,S.rotation.z=.2;const y=new ee(new Gt(.12,16,16),_);y.position.set(0,1.6,-.02);const I=new ee(new Gt(.14,20,20,0,Math.PI*2,0,Math.PI/1.2),M);I.position.copy(y.position),I.position.y+=.01;const z=new ee(new Ue(.16,.06,.02),an(1719119));return z.position.set(0,1.58,-.13),[w,L,A,D,S,y,I,z].forEach(P=>{P.castShadow=!0,n.add(P)}),n.position.set(0,0,-5),n.traverse(P=>{P.isMesh&&(P.receiveShadow=!0)}),l4(n),n}function p4(){const n=new it,e=_d([Pt.coral,Pt.petrol,Pt.cream,Pt.sage]),t=new ee(new Ue(1.2,.35,2),an(e));t.position.y=.4,t.castShadow=!0,n.add(t);const i=new ee(new Ue(.9,.4,.8),an(2504762));i.position.set(0,.75,-.1),i.castShadow=!0,n.add(i);const s=new Qe(.22,.22,.15,12),a=Ga(1381653),r=[[-.5,.22,-.8],[.5,.22,-.8],[-.5,.22,.8],[.5,.22,.8]],o=[];r.forEach(([p,g,_])=>{const u=new ee(s,a);u.rotation.z=Math.PI/2,u.position.set(p,g,_),u.castShadow=!0,u.name="traffic-car-wheel",o.push(u),n.add(u)}),n.userData.wheels=o,n.userData.trafficCruiseSpeed=8+Math.random()*5,n.userData.motionPhase=Math.random()*Math.PI*2;const c=new ee(new Ue(.18,.08,.04),ti(16776145,1.6));c.position.set(.32,.4,-1.02);const l=c.clone();l.position.set(-.32,.4,-1.02);const h=ti(15746104,1.35),d=new ee(new Ue(.22,.1,.045),h);d.position.set(.36,.42,1.02);const f=d.clone();return f.position.x=-.36,n.add(c,l,d,f),c4(n),n}function m4(){const n=new it,e=new ee(new Ue(1.6,.5,.4),an(Pt.cream));e.castShadow=!0,e.receiveShadow=!0;const t=new ee(new Ue(1.6,.22,.42),ti(Pt.hazardRed,.45));t.position.y=.16,t.castShadow=!0;const i=ti(Pt.hazardAmber,1.2),s=new Gt(.09,8,6),a=new ee(s,i);a.position.set(-.62,.38,0);const r=a.clone();return r.position.x=.62,n.add(e,t,a,r),n}function g4(){const n=new it,e=new ee(new Qe(.12,.18,.06,16),an(Pt.cream));e.position.y=.03;const t=new ee(new ei(.16,.42,16),ti(Pt.hazardAmber,.25));t.position.y=.27,t.castShadow=!0,e.castShadow=!0;const i=new ee(new Qe(.13,.15,.08,12),an(Pt.cream));return i.position.y=.25,n.add(e,t,i),n}function _4(){const n=new it,e=an(Pt.petrol),t=new ee(new Ue(1.8,.2,2.5),e);t.position.y=.09,t.castShadow=!0,t.receiveShadow=!0;const i=new ee(new Ue(1.8,.32,1.9),e);i.position.set(0,.32,-.25),i.rotation.x=-Math.PI/10,i.castShadow=!0;const s=new ee(new Ue(.7,.035,.35),ti(Pt.lane,.65));return s.position.set(0,.51,-.45),s.rotation.x=i.rotation.x,n.add(t,i,s),n}function v4(){const n=new it,e=new ee(ka.coinRim,Ha.rim),t=new ee(ka.coinFace,Ha.face),i=new ee(ka.coinInset,Ha.inset);t.rotation.x=Math.PI/2,i.rotation.x=Math.PI/2,i.position.z=.035;const s=new ee(ka.coinMark,Ha.mark);s.position.set(-.052,.01,.075),s.rotation.z=-.43;const a=s.clone();return a.position.x=.052,a.rotation.z=.43,n.add(t,e,i,s,a),n}function tc(n,e,t,i=new Set){const s=Zt(n.trackDistance-5-e).lanes,a=new Map;for(let l=0;l<Le.lanes;l++)a.set(l,0);for(const l of n.obstacles){if(l.type==="COIN")continue;const h=l.mesh.userData.trackZ??l.mesh.position.z;if(Math.abs(h-e)<t){const d=l.laneIndex;a.set(d,(a.get(d)||0)+1)}}const r=[];for(let l=0;l<Le.lanes;l++)s.includes(l)&&a.get(l)===0&&!i.has(l)&&r.push(l);if(r.length>0)return r[Math.floor(Math.random()*r.length)];let o=1/0,c=0;for(let l=0;l<Le.lanes;l++){if(!s.includes(l)||i.has(l))continue;const h=a.get(l)||0;h<o&&(o=h,c=l)}return c}function x4(n,e,t=[]){const i=_d(["CAR","BARRIER","CONE"]);let s,a=2,r=2;i==="CAR"?(s=p4(),a=3,r=1.8):i==="BARRIER"?(s=m4(),a=1.6,r=1.4):(s=g4(),a=.6,r=.8);const c=tc(n,e,35,new Set(t)),l=(c-(Le.lanes-1)/2)*Le.laneWidth;s.position.set(l,0,e),s.userData.trackZ=e,s.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),n.scene.add(s);const h={mesh:s,type:i,laneOffset:l,laneIndex:c,length:a,collisionRadius:r,passed:!1,awarded:!1};return n.obstacles.push(h),h}function y4(n,e,t=[]){const i=_4(),a=tc(n,e,30,new Set(t)),r=(a-(Le.lanes-1)/2)*Le.laneWidth;i.position.set(r,0,e),i.userData.trackZ=e,i.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),n.scene.add(i);const o={mesh:i,type:"RAMP",laneOffset:r,laneIndex:a,length:2.5,collisionRadius:1.5,passed:!1,awarded:!1};return n.obstacles.push(o),o}function Oa(n,e,t){const i=v4(),s=typeof t=="number"?t:tc(n,e,20),a=(s-(Le.lanes-1)/2)*Le.laneWidth;i.position.set(a,.6,e),i.userData.trackZ=e,i.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scene.add(i);const r={mesh:i,type:"COIN",laneOffset:a,laneIndex:s,length:.2,collisionRadius:.6,passed:!1,awarded:!1};return n.obstacles.push(r),r}const Yn={async setItem(n,e){localStorage.setItem(n,e)},async getItem(n){return localStorage.getItem(n)},async removeItem(n){localStorage.removeItem(n)},async clear(){localStorage.clear()}};let pe=null;const Ke=n=>{const e=document.getElementById(n);if(!e)throw new Error(`Elemento UI mancante: #${n}`);return e},us=(n,e)=>{n.classList.toggle("visible",e),n.style.display=e?"flex":"none",n.setAttribute("aria-hidden",e?"false":"true")},oh=(n,e,t,i)=>{const s=Math.max(0,Math.min(t,i)),a=i>0?s/i*100:0;e.style.width=`${a}%`,n.setAttribute("aria-valuenow",`${Math.round(s)}`)},po=n=>{window.dispatchEvent(new KeyboardEvent(n,{code:"Space",key:" ",bubbles:!0,cancelable:!0}))},M4=n=>{const e=i=>{var s;i.preventDefault(),i.stopPropagation(),n.classList.add("is-pressed"),(s=n.setPointerCapture)==null||s.call(n,i.pointerId),po("keydown")},t=i=>{i.preventDefault(),i.stopPropagation(),n.classList.remove("is-pressed"),po("keyup")};n.addEventListener("pointerdown",e),n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("lostpointercapture",()=>{n.classList.remove("is-pressed"),po("keyup")})},S4=n=>{const e=()=>{var t;((t=n.textContent)==null?void 0:t.trim())==="GIOCA"&&(n.innerHTML='<span>Parti</span><span aria-hidden="true">→</span>',pe!=null&&pe.menuOverlay.classList.contains("visible")&&n.focus())};new MutationObserver(e).observe(n,{childList:!0,characterData:!0,subtree:!0}),e()};async function E4(){if(pe)return pe;const n=Ke("mission-progress"),e=Ke("turbo-progress");pe={score:Ke("score-value"),speed:Ke("speed-value"),streak:Ke("streak-value"),coins:Ke("coins-value"),message:Ke("message"),highScore:Ke("highscore-value"),menuHighScore:Ke("menu-highscore-value"),menuOverlay:Ke("menu-overlay"),gameOverOverlay:Ke("game-over-overlay"),playBtn:Ke("play-btn"),restartBtn:Ke("restart-btn"),finalScore:Ke("final-score"),bestScore:Ke("best-score"),muteBtn:Ke("mute-btn"),mobileAccelerate:Ke("mobile-accelerate"),mobileBrake:Ke("mobile-brake"),mobileTurbo:Ke("mobile-turbo"),missionValue:Ke("mission-value"),missionProgress:n,missionProgressFill:n.querySelector(".progress-fill"),turboValue:Ke("turbo-value"),turboProgress:e,turboProgressFill:e.querySelector(".progress-fill"),recapDistance:Ke("recap-distance"),recapCoins:Ke("recap-coins"),recapNearMisses:Ke("recap-near-misses"),recapBestCombo:Ke("recap-best-combo"),recapMission:Ke("recap-mission")};const[t,i]=await Promise.all([Yn.getItem(gn.HIGH_SCORE),Yn.getItem(gn.MUTE)]);t&&(pe.highScore.textContent=t,pe.menuHighScore.textContent=t);const s=i==="1";return pe.muteBtn.setAttribute("aria-pressed",s?"true":"false"),pe.muteBtn.setAttribute("aria-label",s?"Attiva audio":"Disattiva audio"),M4(pe.mobileTurbo),S4(pe.playBtn),pe}function ch(){pe&&(us(pe.menuOverlay,!0),us(pe.gameOverOverlay,!1),window.setTimeout(()=>pe==null?void 0:pe.playBtn.focus(),0))}function vd(){var n;if(!pe){console.error("hideMenu: ui e null!");return}us(pe.menuOverlay,!1),pe.menuOverlay.contains(document.activeElement)&&((n=document.activeElement)==null||n.blur())}function xd(n){if(!pe)return;const e=n,t=e.raceDistance,i=Math.floor(e.score),s=Math.floor(e.highScore),a=Math.max(0,Math.floor(e.distance)),r=e.lapCompleted;Ke("game-over-title").textContent=r?"Giro completato!":"Corsa interrotta",Ke("recap-time").textContent=Co(e.elapsedSeconds),Ke("recap-best-time").textContent=Co(e.bestLapSeconds),us(pe.gameOverOverlay,!0),us(pe.menuOverlay,!1),pe.finalScore.innerHTML=`Punteggio <strong>${i}</strong>`,pe.bestScore.textContent=i>=s&&i>0?`Nuovo record · ${s}`:`Record · ${s}`,pe.recapDistance.textContent=`${a} m`,pe.recapCoins.textContent=`${e.coins}`,pe.recapNearMisses.textContent=`${e.nearMisses??0}`,pe.recapBestCombo.textContent=`x${(e.bestCombo??e.combo).toFixed(1)}`,pe.recapMission.textContent=r?e.newBestLap?"Nuovo record sul giro!":"Traguardo raggiunto. Bellissima guida!":`Mancavano ${Math.max(0,t-a)} m al traguardo.`,pe.recapMission.classList.toggle("is-complete",r),window.setTimeout(()=>pe==null?void 0:pe.restartBtn.focus(),0)}function yd(){var n;pe&&(us(pe.gameOverOverlay,!1),pe.gameOverOverlay.contains(document.activeElement)&&((n=document.activeElement)==null||n.blur()))}function nc(n,e,t){if(!pe)return;const i=Math.floor(n.score),s=n.raceDistance;pe.missionProgress.setAttribute("aria-valuemax",String(s));const a=Math.max(0,n.distance),r=Math.round(Math.max(0,Math.min(t,1))*100),o=a>=s;pe.score.textContent=`${i}`,Ke("race-time").textContent=Co(n.elapsedSeconds),pe.speed.textContent=`${Math.round(e*3)} km/h`,pe.streak.textContent=`x${n.combo.toFixed(1)}`,pe.coins.textContent=`${n.coins}`,pe.highScore.textContent=`${Math.floor(n.highScore)}`,pe.menuHighScore.textContent=`${Math.floor(n.highScore)}`,pe.turboValue.textContent=`${r}%`,oh(pe.turboProgress,pe.turboProgressFill,r,100),oh(pe.missionProgress,pe.missionProgressFill,a,s),pe.missionValue.textContent=o?"FINISH · Giro completato!":`${Math.floor(a)} / ${Math.round(s)} m`,pe.missionProgress.classList.toggle("is-complete",o),pe.turboProgress.classList.toggle("is-ready",t>=.99),t>=.99?(pe.message.textContent="Turbo pronto — Spazio o pulsante ⚡",pe.message.style.opacity="1"):t>.3?(pe.message.textContent="Sfiora gli ostacoli e carica il turbo",pe.message.style.opacity="0.82"):(pe.message.textContent="Segui le curve fino al traguardo",pe.message.style.opacity="0.7")}async function Md(n,e=gn.HIGH_SCORE){const t=await Yn.getItem(e),i=t?parseFloat(t):0;return n>i?(await Yn.setItem(e,Math.floor(n).toString()),n):i}function ic(n,e=.2,t=1.2){n.style.transition="transform 0.12s ease-out",n.style.transform=`scale(${t})`,window.setTimeout(()=>{n.style.transform="scale(1)"},e*1e3)}function Hn(n,e=.8){pe&&(pe.message.textContent=n,pe.message.style.opacity="1",pe.message.style.transition="opacity 0.3s ease",window.setTimeout(()=>{pe&&(pe.message.style.opacity="0.75")},e*1e3))}function Ai(){return pe}const lh={MENU:{START:"RUNNING"},RUNNING:{FINISH:"FINISHED",CRASH:"GAME_OVER",RETURN_TO_MENU:"MENU"},GAME_OVER:{RESTART:"RUNNING",RETURN_TO_MENU:"MENU"},FINISHED:{RESTART:"RUNNING",RETURN_TO_MENU:"MENU"}};class w4{constructor(e="MENU"){$e(this,"currentState");$e(this,"listeners",new Set);this.currentState=e}get state(){return this.currentState}can(e){return lh[this.currentState][e]!==void 0}dispatch(e){const t=this.currentState,i=lh[t][e]??t,s={from:t,to:i,event:e,changed:t!==i};if(s.changed){this.currentState=i;for(const a of this.listeners)a(s)}return s}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}}const Sd={distanceScoreFactor:.35,coinValue:14,nearMissValue:25,comboStep:.15,maxCombo:6,comboWindowSeconds:2.1},hn=(n,e)=>{if(!Number.isFinite(n)||n<0)throw new RangeError(`${e} must be a finite non-negative number`);return n},b4=n=>{if(!n)return;if(!n.id.trim())throw new Error("Mission id cannot be empty");const e=[n.targetScore,n.targetDistance,n.targetCoins,n.targetNearMisses].filter(t=>t!==void 0);if(e.length===0)throw new Error("Mission requires at least one target");for(const t of e)hn(t,"Mission target")};class T4{constructor(e=null,t=Sd){$e(this,"score",0);$e(this,"distance",0);$e(this,"coins",0);$e(this,"nearMisses",0);$e(this,"combo",1);$e(this,"maxCombo",1);$e(this,"comboTimeRemaining",0);if(this.mission=e,this.rules=t,b4(e),hn(t.distanceScoreFactor,"distanceScoreFactor"),hn(t.coinValue,"coinValue"),hn(t.nearMissValue,"nearMissValue"),hn(t.comboStep,"comboStep"),hn(t.maxCombo,"maxCombo"),hn(t.comboWindowSeconds,"comboWindowSeconds"),t.maxCombo<1)throw new RangeError("maxCombo must be at least 1")}apply(e){switch(e.type){case"TICK":this.advance(e.deltaSeconds,e.speed);break;case"COIN":this.collectCoin(e.count);break;case"NEAR_MISS":this.registerNearMiss();break;case"BONUS":this.awardBonus(e.points);break;case"RESET":this.reset();break}return this.snapshot()}advance(e,t){hn(e,"deltaSeconds"),hn(t,"speed");const i=t*e;return this.distance+=i,this.score+=i*this.rules.distanceScoreFactor*this.combo,this.comboTimeRemaining=Math.max(0,this.comboTimeRemaining-e),this.comboTimeRemaining===0&&(this.combo=1),this.snapshot()}collectCoin(e=1){if(!Number.isInteger(e)||e<=0)throw new RangeError("Coin count must be a positive integer");return this.coins+=e,this.score+=this.rules.coinValue*e*this.combo,this.increaseCombo(this.rules.comboStep*e),this.snapshot()}registerNearMiss(){return this.nearMisses+=1,this.score+=this.rules.nearMissValue*this.combo,this.increaseCombo(this.rules.comboStep),this.snapshot()}awardBonus(e){return hn(e,"Bonus points"),this.score+=e,this.snapshot()}reset(){return this.score=0,this.distance=0,this.coins=0,this.nearMisses=0,this.combo=1,this.maxCombo=1,this.comboTimeRemaining=0,this.snapshot()}snapshot(){return{score:this.score,distance:this.distance,coins:this.coins,nearMisses:this.nearMisses,combo:this.combo,maxCombo:this.maxCombo,mission:this.missionProgress()}}increaseCombo(e){this.combo=Math.min(this.rules.maxCombo,this.combo+e),this.maxCombo=Math.max(this.maxCombo,this.combo),this.comboTimeRemaining=this.rules.comboWindowSeconds}missionProgress(){if(!this.mission)return null;const e=(this.mission.targetScore===void 0||this.score>=this.mission.targetScore)&&(this.mission.targetDistance===void 0||this.distance>=this.mission.targetDistance)&&(this.mission.targetCoins===void 0||this.coins>=this.mission.targetCoins)&&(this.mission.targetNearMisses===void 0||this.nearMisses>=this.mission.targetNearMisses);return{id:this.mission.id,completed:e,score:this.score,distance:this.distance,coins:this.coins,nearMisses:this.nearMisses}}}const A4=(n=null,e=Sd)=>new T4(n,e),An=(n,e,t)=>n+(e-n)*t;function Ed(n,e=18,t=52){const i=Math.max(0,Math.min(n/900,1)),s=i*i*(3-2*i);return{cruiseSpeed:An(e,28,s),maxSpeed:An(34,t,s),maxHazards:n<250?2:n<600?3:4,hazardSpacingMin:An(58,32,s),hazardSpacingMax:An(76,44,s),hazardSpawnAheadMin:An(82,96,s),hazardSpawnAheadMax:An(98,116,s),rampSpacingMin:An(115,78,s),rampSpacingMax:An(145,105,s),rampChance:An(.32,.52,s)}}let ue;const si=new w4;let pt=si.state;si.subscribe(({to:n})=>{pt=n});let ot={left:!1,right:!1,up:!1,down:!1,turbo:!1},Pe={raceDistance:Ks,elapsedSeconds:0,lapCompleted:!1,bestLapSeconds:null,newBestLap:!1,score:0,highScore:0,distance:0,coins:0,nearMisses:0,combo:1,bestCombo:1,missionCompleted:!1,lastComboTime:0};const Qs=A4({id:"lungomare-750",targetDistance:750},{distanceScoreFactor:.7,coinValue:Le.coinValue,nearMissValue:75,comboStep:.15,maxCombo:6,comboWindowSeconds:Le.comboTimeout});let me={context:null,muted:!1,engineNode:null,engineOvertone:null,engineGain:null,engineOutputGain:null,engineFilter:null,lastWhooshTime:0},Ds=0,Va=0,Qi=0,es=[],fs=xn(),Us=0,ps=0,pn=0,or=!1,wi=0,Wa=0;const R4=1/20;let ft=0,Xt=new cd;const ms=new a0;let Bs,Io=Ro,cr=gn.HIGH_SCORE,vr,Gs,Do="";const C4=new q3;let Ei=null,Xn=!0,Vs=!1,Dn=document.hidden,lr=!1;function Ri(){me.context&&me.engineOutputGain&&od(me.engineOutputGain.gain,me.context.currentTime,!1),lr=!1}const Ls=new C,Fa=new C,hh=new C;function is(n){return n.mesh.userData.trackZ}function Uo(n){return n==="CAR"||n==="BARRIER"||n==="CONE"}function Ki(n,e){return n+Math.random()*(e-n)}const P4=.22;function L4(n,e,t){const i=typeof n.userData.trafficCruiseSpeed=="number"?n.userData.trafficCruiseSpeed:10,s=Math.min(i,Math.max(2.5,e*.72)),a=(typeof n.userData.motionPhase=="number"?n.userData.motionPhase:0)+t*(3.2+s*.08);n.userData.motionPhase=a;const r=s/P4*t,o=n.userData.wheels;return o==null||o.forEach(c=>{c.rotateY(r)}),n.position.y=Math.sin(a*2)*.012,n.rotation.x=Math.sin(a)*.007,n.rotation.z=Math.sin(a*.7)*.012,s}function No(n,e=16){const t=new Set;for(const i of ue.obstacles)Uo(i.type)&&Math.abs(is(i)-n)<=e/2&&t.add(i.laneIndex);return t}function I4(n){const e=No(n,20),t=[],i=Zt(ft-5-n).lanes;for(const a of i)e.has(a)||t.push(a);const s=t.length>0?t:i;return s[Math.floor(Math.random()*s.length)]}function xr(n){var e;Pe.score=n.score,Pe.distance=n.distance,Pe.coins=n.coins,Pe.nearMisses=n.nearMisses,Pe.combo=n.combo,Pe.bestCombo=n.maxCombo,Pe.missionCompleted=((e=n.mission)==null?void 0:e.completed)??!1,Pe.lastComboTime=xn()}function D4(){const n=window.AudioContext||window.webkitAudioContext;if(!n){console.warn("AudioContext non supportato, avvio senza audio.");return}try{me.context=new n}catch(l){console.warn("Impossibile creare l'audio, il gioco prosegue silenzioso.",l);return}const e=me.context;if(!e)return;const t=e.createOscillator();t.type="sawtooth";const i=e.createOscillator();i.type="triangle",i.detune.value=-120;const s=e.createOscillator();s.type="sine",s.frequency.value=22;const a=e.createGain();a.gain.value=.025;const r=e.createGain();r.gain.value=.11;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=320,o.Q.value=.9,s.connect(a).connect(r.gain),t.connect(r),i.connect(r);const c=e.createGain();c.gain.value=0,r.connect(o).connect(c).connect(e.destination),me.engineOutputGain=c,t.start(),i.start(),s.start(),me.engineNode=t,me.engineOvertone=i,me.engineGain=r,me.engineFilter=o,lr=!1,Ei==null||Ei.dispose(),Ei=new Y3(e),e.onstatechange=()=>{e===me.context&&(e.state!=="running"?Ri():(ue&&sc(ue.player.speed),Ws()))},me.muted&&(r.gain.value=0)}function Ws(){Ei==null||Ei.sync(Vs&&Xn&&!me.muted&&!Dn)}function yi(){if(me.muted||Dn)return;Vs=!0,(!me.context||me.context.state==="closed")&&D4();const n=me.context;n&&(C4.resume(n,!0).then(e=>{e&&n===me.context&&ue&&sc(ue.player.speed)}),Ws())}function sc(n){if(!me.context||!me.engineNode||!me.engineGain||!me.engineOvertone||!me.engineFilter)return;if(me.muted||pt!=="RUNNING"||Dn||me.context.state!=="running"){Ri();return}me.engineOutputGain&&!lr&&(od(me.engineOutputGain.gain,me.context.currentTime,!0),lr=!0);const e=Pn((n-Le.minSpeed)/(Le.maxSpeed-Le.minSpeed),0,1),t=85+e*150,i=70+e*90,s=.11+e*.07;me.engineNode.frequency.setTargetAtTime(t,me.context.currentTime,.12),me.engineOvertone.frequency.setTargetAtTime(t*.52,me.context.currentTime,.14),me.engineGain.gain.setTargetAtTime(s,me.context.currentTime,.16),me.engineFilter.frequency.setTargetAtTime(380+e*320,me.context.currentTime,.18),me.engineFilter.Q.setTargetAtTime(.9+e*.6,me.context.currentTime,.16),me.engineOvertone.detune.setTargetAtTime(i*-.1,me.context.currentTime,.18)}function wd(){if(!me.context||me.muted)return;const n=me.context.currentTime;if(n-me.lastWhooshTime<.3)return;me.lastWhooshTime=n;const e=me.context.createOscillator(),t=me.context.createGain();e.type="square",e.frequency.setValueAtTime(280,n),e.frequency.exponentialRampToValueAtTime(80,n+.25),t.gain.setValueAtTime(.18,n),t.gain.exponentialRampToValueAtTime(1e-4,n+.25),e.connect(t).connect(me.context.destination),e.start(n),e.stop(n+.26)}function U4(){if(!me.context||me.muted)return;const n=me.context.currentTime,e=2*me.context.sampleRate,t=me.context.createBuffer(1,e,me.context.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*(1-o/e);const s=me.context.createBufferSource();s.buffer=t;const a=me.context.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1200,n),a.frequency.exponentialRampToValueAtTime(90,n+.6);const r=me.context.createGain();r.gain.setValueAtTime(.6,n),r.gain.exponentialRampToValueAtTime(.01,n+.6),s.connect(a).connect(r).connect(me.context.destination),s.start(n),s.stop(n+.7)}async function N4(){var A;const n=u4(),e=d4(),t=h4(),i=new V3;k4();const s=new ze(Le.cityFogColor),a=f4();await k0(a);let r="red";try{const T=localStorage.getItem("vespa_body_color");T&&T in rr&&(r=T)}catch{}nh(a,r),document.querySelectorAll('input[name="scooter-color"]').forEach(T=>{T.checked=T.value===r,T.addEventListener("change",()=>{if(T.value in rr){nh(a,T.value);try{localStorage.setItem("vespa_body_color",T.value)}catch{}}})});const o={mesh:a,speed:Le.baseSpeed,targetSpeed:Le.baseSpeed,maxSpeed:Le.maxSpeed,minSpeed:Le.minSpeed,lateralSpeed:Le.lateralSpeed,laneWidth:Le.laneWidth,laneX:0,verticalVelocity:0,isJumping:!1,turboCharge:0,turboActive:!1};n.add(o.mesh);const c=[],l=[],h=[];Gs=new D0(n),Bs=new c0(n),X3(n,t),ue={trackDistance:0,scene:n,camera:e,renderer:t,clock:i,player:o,obstacles:[],roadSegments:c,buildings:l,streetLights:h,vehiclesPool:[],cityFogColor:s},await E4();const f=await Yn.getItem(gn.MUTE);try{Xn=localStorage.getItem("vespa_music_enabled")!=="0"}catch{}const p=document.getElementById("music-enabled");p.checked=Xn;const g=document.getElementById("music-btn"),_=()=>{p.checked=Xn,g.setAttribute("aria-pressed",String(Xn)),g.setAttribute("aria-label",Xn?"Disattiva musica":"Attiva musica")},u=T=>{Xn=T;try{localStorage.setItem("vespa_music_enabled",T?"1":"0")}catch{}_(),T?yi():Ws()};p.addEventListener("change",()=>u(p.checked)),g.addEventListener("click",()=>u(!Xn)),_(),f==="1"&&(me.muted=!0);const m=await Yn.getItem(gn.HIGH_SCORE);m&&(Pe.highScore=parseFloat(m));const M=Ai();M&&((A=document.getElementById("menu-return-btn"))==null||A.addEventListener("click",()=>{pt!=="RUNNING"&&(clearTimeout(vr),si.dispatch("RETURN_TO_MENU"),Xs(),ch())}),M.muteBtn.setAttribute("aria-pressed",me.muted?"true":"false"),M.muteBtn.setAttribute("aria-label",me.muted?"Attiva audio":"Disattiva audio"),M.muteBtn.onclick=async()=>{me.muted=!me.muted,M.muteBtn.setAttribute("aria-pressed",me.muted?"true":"false"),M.muteBtn.setAttribute("aria-label",me.muted?"Attiva audio":"Disattiva audio"),me.muted||yi(),me.muted?(Ri(),Ws(),await Yn.setItem(gn.MUTE,"1").catch(()=>{})):await Yn.setItem(gn.MUTE,"0").catch(()=>{})},dh(M.mobileAccelerate,()=>ot.up=!0,()=>{ot.up=!1}),dh(M.mobileBrake,()=>ot.down=!0,()=>{ot.down=!1})),Xs(),ch();const v=document.getElementById("route-select"),w=()=>{const T=v.value==="florence",D=document.getElementById("route-summary");D&&(D.textContent=T?"Firenze · 2003 m":"Un giro · 1800 m");const S=document.getElementById("route-description");S&&(S.textContent=T?"Dal Duomo all'Arno, con fermate e attraversamenti.":"Quattro quartieri, un traguardo. Batti il tuo tempo!"),document.querySelector(".route-note").hidden=!T};v.addEventListener("change",()=>{w(),pt==="MENU"&&Xs()}),w(),window.addEventListener("resize",uh),document.addEventListener("visibilitychange",()=>{Dn=document.hidden,Dn&&(Ri(),yr()),Ws(),fs=xn(),!Dn&&Vs&&yi(),!Dn&&pt==="RUNNING"&&Hn("Bentornato — riprendi la corsa",1.1)});const L=()=>{(Vs||pt==="RUNNING")&&yi()};window.addEventListener("pointerdown",L,{passive:!0}),window.addEventListener("touchend",L,{passive:!0}),window.addEventListener("keydown",L),window.addEventListener("pageshow",()=>{Dn=document.hidden,Vs&&yi()}),uh(),or&&(or=!1,Ho()),bd()}function k4(){window.addEventListener("keydown",n=>{(n.code==="ArrowLeft"||n.code==="KeyA")&&(ot.left=!0),(n.code==="ArrowRight"||n.code==="KeyD")&&(ot.right=!0),(n.code==="ArrowUp"||n.code==="KeyW")&&(ot.up=!0),(n.code==="ArrowDown"||n.code==="KeyS")&&(ot.down=!0),n.code==="Space"&&(ot.turbo=!0,pt==="MENU"?ko().catch(e=>console.error("Errore avvio gioco:",e)):(pt==="GAME_OVER"||pt==="FINISHED")&&ps<=0&&H4().catch(e=>console.error("Errore riavvio gioco:",e))),n.code==="Enter"&&pt==="MENU"&&ko().catch(e=>console.error("Errore avvio gioco:",e))}),window.addEventListener("keyup",n=>{(n.code==="ArrowLeft"||n.code==="KeyA")&&(ot.left=!1),(n.code==="ArrowRight"||n.code==="KeyD")&&(ot.right=!1),(n.code==="ArrowUp"||n.code==="KeyW")&&(ot.up=!1),(n.code==="ArrowDown"||n.code==="KeyS")&&(ot.down=!1),n.code==="Space"&&(ot.turbo=!1)}),window.addEventListener("mousemove",n=>{var t,i,s;if(!ue||pt!=="RUNNING"||(t=n.sourceCapabilities)!=null&&t.firesTouchEvents||(s=(i=n.target)==null?void 0:i.closest)!=null&&s.call(i,"button, #mobile-controls"))return;const e=n.clientX/window.innerWidth*2-1;ue.player.laneX=qc.lerp(ue.player.laneX,e*Le.laneWidth,.06)}),window.addEventListener("touchmove",n=>{if(!ue||pt!=="RUNNING")return;const e=Array.from(n.touches).find(i=>{var s,a;return!((a=(s=i.target)==null?void 0:s.closest)!=null&&a.call(s,"button, #mobile-controls"))});if(!e)return;const t=e.clientX/window.innerWidth*2-1;ue.player.laneX=qc.lerp(ue.player.laneX,t*Le.laneWidth,.12)}),window.addEventListener("blur",yr)}function Xs(){var i,s;clearTimeout(vr);const n=((i=document.getElementById("route-select"))==null?void 0:i.value)??"0";s0(n==="florence"?"florence":"city"),Xt=new cd(yt()?ld:Ks),ms.reset(),Pe.raceDistance=Xt.length,Io=yt()?`${Ro}_florence_v1`:Ro,cr=yt()?`${gn.HIGH_SCORE}_florence_v1`:gn.HIGH_SCORE,Pe.elapsedSeconds=0,Pe.lapCompleted=!1,Pe.newBestLap=!1;try{Pe.bestLapSeconds=$3(localStorage.getItem(Io)),Pe.highScore=Math.max(0,Number(localStorage.getItem(cr))||0)}catch{Pe.bestLapSeconds=null,Pe.highScore=0}Ri(),Pe.score=0,Pe.distance=0,Pe.coins=0,Pe.nearMisses=0,Pe.combo=1,Pe.bestCombo=1,Pe.missionCompleted=!1,Pe.lastComboTime=xn(),xr(Qs.reset()),Us=0,pn=0,ps=0,wi=2.5,Wa=0;const e=Number(n);ft=[0,120,420,940,1300].includes(e)?e:0,Do="",Gs==null||Gs.reset(ft,Xt.length),Bs==null||Bs.update(ft,ms,yt());const t=document.getElementById("district-value");if(t&&(t.textContent=yt()?dd(0):jo(ft).district.name),(s=document.getElementById("route-attribution"))==null||s.classList.toggle("visible",yt()),ot.left=!1,ot.right=!1,ot.up=!1,ot.down=!1,ot.turbo=!1,!!ue){ue.trackDistance=ft;for(let a=ue.obstacles.length-1;a>=0;a--)ue.scene.remove(ue.obstacles[a].mesh);ue.obstacles.length=0,ue.player.speed=Le.baseSpeed,ue.player.targetSpeed=Le.baseSpeed,ue.player.turboCharge=0,ue.player.turboActive=!1,ue.player.laneX=0,ue.player.isJumping=!1,ue.player.verticalVelocity=0,ue.player.mesh.position.set(0,0,-5),ue.player.mesh.rotation.set(0,0,0),Ds=52,Va=18,Qi=105,es=[],fs=xn()}}async function ko(){ue&&(Xs(),vd(),yd(),si.dispatch(pt==="MENU"?"START":"RESTART"),fs=xn(),Hn("Vai! Evita auto e ostacoli - Carica il turbo",1.8),yi())}let mo=!1;function Ho(){if(!ue){or=!0;return}mo||(or=!1,(pt==="MENU"||pt==="GAME_OVER"||pt==="FINISHED")&&(mo=!0,Xs(),vd(),yd(),si.dispatch(pt==="MENU"?"START":"RESTART"),fs=xn(),Hn("Vai! Evita auto e ostacoli - Carica il turbo",1.8),yi(),mo=!1))}async function H4(){await ko()}function dh(n,e,t){const i=a=>{a.preventDefault(),a.stopPropagation(),pt==="RUNNING"&&(n.setPointerCapture(a.pointerId),n.classList.add("is-pressed"),e())},s=a=>{a.preventDefault(),a.stopPropagation(),n.classList.remove("is-pressed"),t()};n.addEventListener("pointerdown",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("lostpointercapture",s)}function yr(){ot={left:!1,right:!1,up:!1,down:!1,turbo:!1},document.querySelectorAll(".is-pressed").forEach(n=>n.classList.remove("is-pressed"))}function uh(){if(!ue)return;const{camera:n,renderer:e}=ue;n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function bd(){if(requestAnimationFrame(bd),!ue)return;const n=xn(),e=Math.max(0,n-fs),t=Math.min(.05,e);if(fs=n,Dn){ue.renderer.render(ue.scene,ue.camera);return}if(wi>0&&pt==="RUNNING"&&(wi=Math.max(0,wi-t)),pt==="RUNNING"){O4(t);const i=Xt.advance(t,ue.player.speed,e);Pe.elapsedSeconds=Xt.elapsed,F4(i),z4(i),V4(),Xt.finished&&si.state==="RUNNING"&&q4()}else(pt==="GAME_OVER"||pt==="FINISHED")&&ps>0&&(ps-=t);X4(t),W3(n),ue.renderer.render(ue.scene,ue.camera)}function O4(n){const e=ue.player;yt()&&ms.update(ft,e.speed,n);const t=Ed(Pe.distance,Le.baseSpeed,Le.maxSpeed);if(e.maxSpeed=t.maxSpeed,yt()&&(e.maxSpeed=24),ot.up&&(e.targetSpeed+=18*n),ot.down?e.targetSpeed-=26*n:!e.turboActive&&e.targetSpeed<t.cruiseSpeed&&(e.targetSpeed=Na(e.targetSpeed,t.cruiseSpeed,.45*n)),e.targetSpeed=Pn(e.targetSpeed,e.minSpeed,e.maxSpeed),ot.turbo&&!e.turboActive&&e.turboCharge>=.999){e.turboActive=!0,Us=Le.turboDuration,e.turboCharge=0,e.targetSpeed=Pn(e.targetSpeed+Le.turboBoost,e.minSpeed,e.maxSpeed+Le.turboBoost),pn=.6,wd(),Hn("TURBO!",.5);const c=Ai();c&&ic(c.score)}if(e.turboActive?(Us-=n,Us<=0&&(e.turboActive=!1,e.targetSpeed=Pn(e.targetSpeed,e.minSpeed,e.maxSpeed))):e.turboCharge=Pn(e.turboCharge+Le.turboRechargeRate*n,0,1),e.speed=Na(e.speed,e.targetSpeed,.9*n),yt()){const c=ms.limitSpeed(ft,e.speed,n);c<e.speed&&(e.targetSpeed=Math.min(e.targetSpeed,Math.max(c,e.minSpeed)),e.turboActive=!1,Us=0),e.speed=c}e.isJumping&&(e.verticalVelocity-=Le.gravity*n,e.mesh.position.y+=e.verticalVelocity*n,e.mesh.position.y<=0&&(e.mesh.position.y=0,e.verticalVelocity=0,e.isJumping=!1));let i=0;ot.left&&(i-=1),ot.right&&(i+=1);const s=Zt(ft).laneSpacing+.4;e.laneX+=i*e.lateralSpeed*n,e.laneX=Pn(e.laneX,-s,s),e.mesh.position.x=e.laneX;const a=sr(ft+5).heading-sr(ft).heading,r=e.speed<.1?0:-i*.25+Pn(Math.atan2(Math.sin(a),Math.cos(a))*2,-.28,.28);e.mesh.rotation.z=Na(e.mesh.rotation.z,r,10*n);const o=e.speed<.1?0:-.05-(e.speed-Le.baseSpeed)*.002;e.mesh.rotation.x=Na(e.mesh.rotation.x,o,2*n),sc(e.speed),Wa+=n,Wa>=R4&&(Wa=0,Ai()&&nc(Pe,e.speed,e.turboCharge))}function F4(n){const e=ue.player,t=ue.player.mesh.position.z+4,i=Ed(Pe.distance,Le.baseSpeed,Le.maxSpeed),s=e.speed*n;Ds-=s,Qi-=s,Va-=s,ft+=s,ue.trackDistance=ft,Gs.update(ft,n),Bs.update(ft,ms,yt());const a=jo(ft),r=document.getElementById("district-value"),o=yt()?dd(ft):a.district.name;if(Do!==o&&(Do=o,r&&(r.textContent=o),Hn(o,1.8)),yt()){const _=ms.message(ft);if(_){const u=Ai();u&&(u.message.textContent=_,u.message.style.opacity="1")}}const c=i.maxHazards,l=3,h=30;let d=0,f=0,p=0;for(const _ of ue.obstacles)Uo(_.type)?d++:_.type==="RAMP"?f++:_.type==="COIN"&&p++;let g=!1;if(!yt()&&Xt.distance<Xt.length-160&&wi<=0&&Ds<=0&&d<c){const _=t-Ki(i.hazardSpawnAheadMin,i.hazardSpawnAheadMax);if(No(_).size<Zt(ft-5-_).lanes.length-1){const m=x4(ue,_,es);g=!0,es.push(m.laneIndex),es.length>2&&es.shift(),Ds=Ki(i.hazardSpacingMin,i.hazardSpacingMax)}else Ds=12}if(wi<=0&&!yt()&&Xt.distance<Xt.length-160&&!g&&f<l&&Qi<=0){const _=t-Ki(i.hazardSpawnAheadMin,i.hazardSpawnAheadMax),u=No(_);Qi=Ki(i.rampSpacingMin,i.rampSpacingMax),u.size<Zt(ft-5-_).lanes.length-1&&Math.random()<i.rampChance&&y4(ue,_,es)}else g&&Qi<=0&&(Qi=10);if(p<h&&Va<=0){const _=t-Ki(Le.coinSpawnDistanceMin,Le.coinSpawnDistanceMax);Va=Ki(22,34);const u=I4(_);Oa(ue,_,u),Oa(ue,_-1.6,u),Oa(ue,_-3.2,u),Oa(ue,_-4.8,u)}for(let _=ue.obstacles.length-1;_>=0;_--){const u=ue.obstacles[_];u.mesh.userData.previousZ=is(u);const m=u.type==="CAR"?Math.max(0,e.speed-L4(u.mesh,e.speed,n))*n:s;u.mesh.userData.trackZ+=m;const M=ft-5-is(u);u.laneOffset=(u.laneIndex-1)*Zt(M).laneSpacing;const v=In(M,u.laneOffset,ft);if(u.mesh.position.x=v.x,u.mesh.position.z=v.z,u.type!=="COIN"&&(u.mesh.rotation.y=v.heading),u.type==="COIN"&&(u.mesh.rotation.y+=n*3,u.mesh.position.y=.6+Math.sin((xn()+u.mesh.position.z)*2)*.08),is(u)>e.mesh.position.z+10){ue.scene.remove(u.mesh),ue.obstacles.splice(_,1);continue}if(!u.passed&&is(u)>e.mesh.position.z&&(u.passed=!0,Uo(u.type))){const w=Math.abs(e.laneX-u.laneOffset),L=u.collisionRadius+1.15;if(!e.isJumping&&w>u.collisionRadius&&w<=L){xr(Qs.registerNearMiss()),e.turboCharge=Pn(e.turboCharge+.12,0,1),Hn("BELLA FIGURA · NEAR-MISS +75",.9);const A=Ai();A&&ic(A.streak,.18,1.22)}}}}function z4(n){var i;const e=Pe.missionCompleted;let t=Qs.advance(n,ue.player.speed);!e&&((i=t.mission)!=null&&i.completed)&&(t=Qs.awardBonus(500),Hn("MISSIONE COMPLETATA · +500",1.8)),xr(t)}function B4(){xr(Qs.collectCoin());const n=Ai();n&&ic(n.score,.12,1.1)}function G4(){const n=ue.player;n.isJumping||(n.isJumping=!0,n.verticalVelocity=Le.jumpVelocity,pn=Math.max(pn,.4),wd(),Hn("SALTO!",.6))}function V4(){if(wi>0)return;const n=ue.player,e=n.laneX,t=n.mesh.position.z,i=n.mesh.position.y;for(let s=ue.obstacles.length-1;s>=0;s--){const a=ue.obstacles[s],r=is(a),o=r-t,l=(typeof a.mesh.userData.previousZ=="number"?a.mesh.userData.previousZ:r)-t,h=a.collisionRadius,f=l*o<=0?0:Math.abs(l)<Math.abs(o)?l:o;if(Math.abs(f)>h*2.5)continue;const p=a.laneOffset,g=e-p;if(g*g+f*f<h*h){if(a.type==="COIN"){a.awarded||(a.awarded=!0,B4()),ue.scene.remove(a.mesh),ue.obstacles.splice(s,1);continue}if(a.type==="RAMP"){ue.scene.remove(a.mesh),ue.obstacles.splice(s,1),G4();continue}if(i>Le.jumpSafeHeight)continue;W4();return}}}async function W4(){if(pt!=="RUNNING")return;si.dispatch("CRASH"),Ri(),yr(),ue.player.speed=0,ue.player.targetSpeed=0,ue.player.turboActive=!1,nc(Pe,0,ue.player.turboCharge),ps=.5,pn=1.2,U4();const n=Pe.score,e=await Md(n,cr).catch(()=>Pe.highScore);Pe.highScore=Math.max(e,n),Ai()&&(vr=setTimeout(()=>{xd(Pe)},400))}function X4(n){const e=ue.player,t=ue.camera;Ls.copy(Le.cameraBaseOffset);const i=Pn((e.speed-Le.baseSpeed)/(Le.maxSpeed+Le.turboBoost-Le.baseSpeed),0,1);if(Ls.z=7.4+i*2.5,Ls.y=3.2+i*.7,Fa.set(e.mesh.position.x*.35,e.mesh.position.y+Ls.y,e.mesh.position.z+Ls.z),pn>0){const s=xn()*8;Fa.x+=ih(s,.25*pn),Fa.y+=ih(s+10,.18*pn),pn=Math.max(0,pn-n*2.3)}H0(t.position,Fa,5*n),hh.set(e.mesh.position.x*.5+In(ft+20,0,ft).x*.45,e.mesh.position.y+1.5,e.mesh.position.z-10),t.lookAt(hh)}function q4(){if(pt==="RUNNING"){if(si.dispatch("FINISH"),Ri(),yr(),ue.player.speed=ue.player.targetSpeed=0,ue.player.turboActive=!1,ue.player.mesh.position.y=0,ue.player.mesh.rotation.set(0,0,0),Pe.distance=Xt.length,Pe.lapCompleted=!0,Pe.newBestLap=Pe.bestLapSeconds===null||Xt.elapsed<Pe.bestLapSeconds,Pe.newBestLap){Pe.bestLapSeconds=Xt.elapsed;try{localStorage.setItem(Io,String(Xt.elapsed))}catch{}}Pe.highScore=Math.max(Pe.highScore,Pe.score),Md(Pe.score,cr).catch(()=>{}),ps=1.2,nc(Pe,0,ue.player.turboCharge),Hn("FINISH · Giro completato!",1.2),vr=setTimeout(()=>xd(Pe),1200)}}let Xa=!1,Oo=!1,go=null;function Y4(){const n=document.getElementById("play-btn"),e=document.getElementById("restart-btn");let t=!1,i=!1,s=!1,a=!1;const r=document.getElementById("menu-overlay"),o=document.getElementById("game-over-overlay"),c=()=>{r&&(r.classList.remove("visible"),r.style.display="none"),o&&(o.classList.remove("visible"),o.style.display="none")},l=()=>{if(t=!0,c(),Xa){s=!0,Oo||Fo();return}if(!i){s=!0;return}Ho()};n&&(n.disabled=!0,n.textContent="CARICAMENTO...",n.addEventListener("touchstart",g=>{g.preventDefault(),l()},{passive:!1,capture:!0}),n.addEventListener("click",l,{capture:!0})),e&&(e.disabled=!0,e.addEventListener("touchstart",g=>{g.preventDefault(),l()},{passive:!1,capture:!0}),e.addEventListener("click",l,{capture:!0}));const h=()=>{a=!0,i=!0,Xa=!1,n&&(n.disabled=!1,n.textContent="GIOCA"),e&&(e.disabled=!1),t&&c(),s&&(s=!1,c(),Ho())},d=()=>{i=!1,Xa=!0,a=!0,n&&(n.disabled=!1,n.textContent="RIPROVA"),e&&(e.disabled=!1)},f=window.setTimeout(()=>{a||(console.warn("Timeout di sicurezza: riattivo il pulsante GIOCA."),h())},4e3);return{markReady:h,clearSafety:()=>{window.clearTimeout(f)},markFailed:d}}const $4=()=>(go||(go=Y4()),go);async function Fo(){const n=$4();Oo=!0,Xa=!1;try{await N4(),n==null||n.markReady()}catch(e){console.error("Errore inizializzazione:",e),n==null||n.markFailed()}finally{Oo=!1,n==null||n.clearSafety()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fo,{once:!0}):Fo();
