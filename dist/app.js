(()=>{var wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},td=0,jc=1,nd=2;var ts=1,id=2,$s=3,Ni=0,$t=1,Tn=2,Jn=0,Ys=1,ns=2,Zc=3,Jc=4,sd=5;var is=100,rd=101,ad=102,od=103,ld=104,cd=200,hd=201,ud=202,dd=203,Kc=204,Qc=205,fd=206,pd=207,md=208,gd=209,_d=210,xd=211,vd=212,yd=213,bd=214,so=0,ro=1,ao=2,Ps=3,oo=4,lo=5,co=6,ho=7,Vo=0,Md=1,Sd=2,zn=0,eh=1,th=2,nh=3,ea=4,ih=5,sh=6,rh=7;var ah=300,Ui=301,ss=302,Go=303,Wo=304,ta=306,uo=1e3,$n=1001,fo=1002,Vt=1003,Ed=1004;var na=1005;var qt=1006,Xo=1007;var Fi=1008;var cn=1009,oh=1010,lh=1011,js=1012,qo=1013,kn=1014,An=1015,Hn=1016,$o=1017,Yo=1018,Zs=1020,ch=35902,hh=35899,uh=1021,dh=1022,Cn=1023,Yn=1026,Oi=1027,jo=1028,Zo=1029,Bi=1030,Jo=1031;var Ko=1033,ia=33776,sa=33777,ra=33778,aa=33779,Qo=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37488,ol=37489,oa=37490,ll=37491,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,bl=37820,Ml=37821,Sl=36492,El=36494,wl=36495,Tl=36283,Al=36284,la=36285,Cl=36286;var Tr=2300,po=2301,no=2302,Oc=2303,Bc=2400,zc=2401,kc=2402;var wd=3200;var ca=0,Td=1,gi="",tn="srgb",Ar="srgb-linear",Cr="linear",ft="srgb";var io=7680;var Ad=519,Cd=512,Rd=513,Pd=514,Rl=515,Id=516,Ld=517,Pl=518,Dd=519,Nd=35044;var fh="300 es",Nn=2e3,Is=2001;function Fp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Op(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ud(){let s=Rr("canvas");return s.style.display="block",s}var bu={},Ls=null;function ph(...s){let e="THREE."+s.shift();Ls?Ls("log",e,...s):console.log(e,...s)}function Fd(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ge(...s){s=Fd(s);let e="THREE."+s.shift();if(Ls)Ls("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function We(...s){s=Fd(s);let e="THREE."+s.shift();if(Ls)Ls("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Zi(...s){let e=s.join(" ");e in bu||(bu[e]=!0,Ge(...s))}function Od(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Bd={[so]:ro,[ao]:co,[oo]:ho,[Ps]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:Ps},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,Mr=Math.PI/180,Ds=180/Math.PI;function rs(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function mh(s,e){return(s%e+e)%e}function Bp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function zp(s,e,t){return s!==e?(t-s)/(e-s):0}function Sr(s,e,t){return(1-t)*s+t*e}function kp(s,e,t,n){return Sr(s,e,1-Math.exp(-t*n))}function Hp(s,e=1){return e-Math.abs(mh(s,e*2)-e)}function Vp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Gp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Xp(s,e){return s+Math.random()*(e-s)}function qp(s){return s*(.5-Math.random())}function $p(s){s!==void 0&&(Mu=s);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yp(s){return s*Mr}function jp(s){return s*Ds}function Zp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Jp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ha={DEG2RAD:Mr,RAD2DEG:Ds,generateUUID:rs,clamp:et,euclideanModulo:mh,mapLinear:Bp,inverseLerp:zp,lerp:Sr,damp:kp,pingpong:Hp,smoothstep:Vp,smootherstep:Gp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:$p,degToRad:Yp,radToDeg:jp,isPowerOfTwo:Zp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Kp,setQuaternionFromProperEuler:Qp,normalize:en,denormalize:Cs},bh=class bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bh.prototype.isVector2=!0;var re=bh,mt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),y=Math.sin(b);p=Math.sin(p*b)/y,o=Math.sin(o*b)/y,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+_*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+_*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mh=class Mh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mh.prototype.isVector3=!0;var A=Mh,fc=new A,Su=new mt,Sh=class Sh{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],b=i[1],y=i[4],x=i[7],S=i[2],w=i[5],C=i[8];return r[0]=a*_+o*b+l*S,r[3]=a*g+o*y+l*w,r[6]=a*p+o*x+l*C,r[1]=c*_+h*b+d*S,r[4]=c*g+h*y+d*w,r[7]=c*p+h*x+d*C,r[2]=u*_+f*b+m*S,r[5]=u*g+f*y+m*w,r[8]=u*p+f*x+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=t*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pc.makeScale(e,t)),this}rotate(e){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;var $e=Sh,pc=new $e,Eu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){let s={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Cr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ar]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}var ot=em();function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ps,mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Rr("canvas")),ps.width=e.width,ps.height=e.height;let i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tm=0,Ns=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(mc(i[a].image)):r.push(mc(i[a]))}else r=mc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function mc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var nm=0,gc=new A,on=class s extends Un{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=$n,i=$n,r=qt,a=Fi,o=Cn,l=cn,c=s.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=rs(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ah;on.DEFAULT_ANISOTROPY=1;var Eh=class Eh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(f+1)/2,S=(p+1)/2,w=(h+u)/4,C=(d+_)/4,v=(m+g)/4;return y>x&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=C/n):x>S?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=v/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=v/r),this.set(n,i,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;var wt=Eh,go=class extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new on(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pr=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ho=class Ho{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,m,_,g)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ho().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(im,e,sm)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),bi.crossVectors(n,fn),bi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),bi.crossVectors(n,fn)),bi.normalize(),La.crossVectors(fn,bi),i[0]=bi.x,i[4]=La.x,i[8]=fn.x,i[1]=bi.y,i[5]=La.y,i[9]=fn.y,i[2]=bi.z,i[6]=La.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],y=n[7],x=n[11],S=n[15],w=i[0],C=i[4],v=i[8],T=i[12],I=i[1],L=i[5],U=i[9],z=i[13],D=i[2],P=i[6],F=i[10],k=i[14],Q=i[3],q=i[7],V=i[11],j=i[15];return r[0]=a*w+o*I+l*D+c*Q,r[4]=a*C+o*L+l*P+c*q,r[8]=a*v+o*U+l*F+c*V,r[12]=a*T+o*z+l*k+c*j,r[1]=h*w+d*I+u*D+f*Q,r[5]=h*C+d*L+u*P+f*q,r[9]=h*v+d*U+u*F+f*V,r[13]=h*T+d*z+u*k+f*j,r[2]=m*w+_*I+g*D+p*Q,r[6]=m*C+_*L+g*P+p*q,r[10]=m*v+_*U+g*F+p*V,r[14]=m*T+_*z+g*k+p*j,r[3]=b*w+y*I+x*D+S*Q,r[7]=b*C+y*L+x*P+S*q,r[11]=b*v+y*U+x*F+S*V,r[15]=b*T+y*z+x*k+S*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],b=l*f-c*u,y=o*f-c*d,x=o*u-l*d,S=a*f-c*h,w=a*u-l*h,C=a*d-o*h;return t*(_*b-g*y+p*x)-n*(m*b-g*S+p*w)+i*(m*y-_*S+p*C)-r*(m*x-_*w+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],b=t*o-n*a,y=t*l-i*a,x=t*c-r*a,S=n*l-i*o,w=n*c-r*o,C=i*c-r*l,v=h*_-d*m,T=h*g-u*m,I=h*p-f*m,L=d*g-u*_,U=d*p-f*_,z=u*p-f*g,D=b*z-y*U+x*L+S*I-w*T+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/D;return e[0]=(o*z-l*U+c*L)*P,e[1]=(i*U-n*z-r*L)*P,e[2]=(_*C-g*w+p*S)*P,e[3]=(u*w-d*C-f*S)*P,e[4]=(l*I-a*z-c*T)*P,e[5]=(t*z-i*I+r*T)*P,e[6]=(g*x-m*C-p*y)*P,e[7]=(h*C-u*x+f*y)*P,e[8]=(a*U-o*I+c*v)*P,e[9]=(n*I-t*U-r*v)*P,e[10]=(m*w-_*x+p*b)*P,e[11]=(d*x-h*w-f*b)*P,e[12]=(o*T-a*L-l*v)*P,e[13]=(t*L-n*T+i*v)*P,e[14]=(_*y-m*S-g*b)*P,e[15]=(h*S-d*y+u*b)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,_=a*h,g=a*d,p=o*d,b=l*c,y=l*h,x=l*d,S=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*S,i[1]=(f+x)*S,i[2]=(m-y)*S,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(u+p))*w,i[6]=(g+b)*w,i[7]=0,i[8]=(m+y)*C,i[9]=(g-b)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ms.set(i[0],i[1],i[2]).length(),o=ms.set(i[4],i[5],i[6]).length(),l=ms.set(i[8],i[9],i[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,h=1/o,d=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Nn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Nn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Is)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Nn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Nn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Is)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ho.prototype.isMatrix4=!0;var Je=Ho,ms=new A,In=new Je,im=new A(0,0,0),sm=new A(1,1,1),bi=new A,La=new A,fn=new A,Tu=new Je,Au=new mt,Sn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rm=0,Cu=new A,gs=new mt,ri=new Je,Da=new A,mr=new A,am=new A,om=new mt,Ru=new A(1,0,0),Pu=new A(0,1,0),Iu=new A(0,0,1),Lu={type:"added"},lm={type:"removed"},_s={type:"childadded",child:null},_c={type:"childremoved",child:null},It=class s extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new A,t=new Sn,n=new mt,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new $e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Ru,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ru,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(mr,Da,this.up):ri.lookAt(Da,mr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(ri),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),_s.child=e,this.dispatchEvent(_s),_s.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lm),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new A(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},cm={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=mh(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xc(a,r,e+1/3),this.g=xc(a,r,e),this.b=xc(a,r,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return ot.workingToColorSpace(Zt.copy(this),e),Math.round(et(Zt.r*255,0,255))*65536+Math.round(et(Zt.g*255,0,255))*256+Math.round(et(Zt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Zt.copy(this),t);let n=Zt.r,i=Zt.g,r=Zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=tn){ot.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,i=Zt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Na);let n=Sr(Mi.h,Na.h,t),i=Sr(Mi.s,Na.s,t),r=Sr(Mi.l,Na.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new me;me.NAMES=zd;var Ir=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Os=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new A,ai=new A,vc=new A,oi=new A,xs=new A,vs=new A,Du=new A,yc=new A,bc=new A,Mc=new A,Sc=new wt,Ec=new wt,wc=new wt,Ti=class s{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ln.subVectors(i,t),ai.subVectors(n,t),vc.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(ai),l=Ln.dot(vc),c=ai.dot(ai),h=ai.dot(vc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Sc.setScalar(0),Ec.setScalar(0),wc.setScalar(0),Sc.fromBufferAttribute(e,t),Ec.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Sc,r.x),a.addScaledVector(Ec,r.y),a.addScaledVector(wc,r.z),a}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),ai.subVectors(e,t),Ln.cross(ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Ln.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;xs.subVectors(i,n),vs.subVectors(r,n),yc.subVectors(e,n);let l=xs.dot(yc),c=vs.dot(yc);if(l<=0&&c<=0)return t.copy(n);bc.subVectors(e,i);let h=xs.dot(bc),d=vs.dot(bc);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xs,a);Mc.subVectors(e,r);let f=xs.dot(Mc),m=vs.dot(Mc);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(vs,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Du.subVectors(r,i),o=(d-h)/(d-h+(f-m)),t.copy(i).addScaledVector(Du,o);let p=1/(g+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},En=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Fa.subVectors(this.max,gr),ys.subVectors(e.a,gr),bs.subVectors(e.b,gr),Ms.subVectors(e.c,gr),Si.subVectors(bs,ys),Ei.subVectors(Ms,bs),Xi.subVectors(ys,Ms);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Xi.z,Xi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Xi.z,0,-Xi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Xi.y,Xi.x,0];return!Tc(t,ys,bs,Ms,Fa)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,ys,bs,Ms,Fa))?!1:(Oa.crossVectors(Si,Ei),t=[Oa.x,Oa.y,Oa.z],Tc(t,ys,bs,Ms,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new A,new A,new A,new A,new A,new A,new A,new A],Dn=new A,Ua=new En,ys=new A,bs=new A,Ms=new A,Si=new A,Ei=new A,Xi=new A,gr=new A,Fa=new A,Oa=new A,qi=new A;function Tc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){qi.fromArray(s,r);let o=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nt=new A,Ba=new re,hm=0,Rt=class extends Un{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nd,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Lr=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},um=new En,_r=new A,Ac=new A,ui=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):um.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Ac)),this.expandByPoint(_r.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dm=0,Mn=new Je,Cc=new It,Ss=new A,pn=new En,xr=new En,Ht=new A,gt=class s extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?Dr:Lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(pn.min,xr.min),pn.expandByPoint(Ht),Ht.addVectors(pn.max,xr.max),pn.expandByPoint(Ht)):(pn.expandByPoint(xr.min),pn.expandByPoint(xr.max))}pn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(e,c),Ht.add(Ss)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new A,l[v]=new A;let c=new A,h=new A,d=new A,u=new re,f=new re,m=new re,_=new A,g=new A;function p(v,T,I){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[v].add(_),o[T].add(_),o[I].add(_),l[v].add(g),l[T].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,T=b.length;v<T;++v){let I=b[v],L=I.start,U=I.count;for(let z=L,D=L+U;z<D;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new A,x=new A,S=new A,w=new A;function C(v){S.fromBufferAttribute(i,v),w.copy(S);let T=o[v];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(w,T);let L=x.dot(l[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,L)}for(let v=0,T=b.length;v<T;++v){let I=b[v],L=I.start,U=I.count;for(let z=L,D=L+U;z<D;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,d=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Rt(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rc=new A,fm=new A,pm=new $e,nn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Rc.subVectors(n,t).cross(fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pm.getNormalMatrix(e),i=this.coplanarPoint(Rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},mm=0,jn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Ys,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Qc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new A,Pc=new A,za=new A,ka=new A,Ai=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),ka.copy(this.origin).sub(Pc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=ka.dot(this.direction),l=-ka.dot(za),c=ka.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pc).addScaledVector(za,u),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,_=t.y-a.y,g=t.z-a.z,p=n.x-a.x,b=n.y-a.y,y=n.z-a.z,x=Math.abs(l),S=Math.abs(c),w=Math.abs(h),C,v,T,I,L,U,z,D,P,F,k,Q;if(x>=S&&x>=w?(T=l,U=d,P=m,Q=p,l>=0?(C=c,v=h,I=u,L=f,z=_,D=g,F=b,k=y):(C=h,v=c,I=f,L=u,z=g,D=_,F=y,k=b)):S>=w?(T=c,U=u,P=_,Q=b,c>=0?(C=h,v=l,I=f,L=d,z=g,D=m,F=y,k=p):(C=l,v=h,I=d,L=f,z=m,D=g,F=p,k=y)):(T=h,U=f,P=g,Q=y,h>=0?(C=l,v=c,I=d,L=u,z=m,D=_,F=p,k=b):(C=c,v=l,I=u,L=d,z=_,D=m,F=b,k=p)),T===0)return null;let q=C/T,V=v/T,j=1/T,Ae=I-q*U,de=L-V*U,st=z-q*P,ze=D-V*P,je=F-q*Q,Y=k-V*Q,ee=je*ze-Y*st,ge=Ae*Y-de*je,ke=st*de-ze*Ae;if(i){if(ee<0||ge<0||ke<0)return null}else if((ee<0||ge<0||ke<0)&&(ee>0||ge>0||ke>0))return null;let we=ee+ge+ke;if(we===0)return null;let Xe=j*(ee*U+ge*P+ke*Q);return(we>0?Xe<0:Xe>0)?null:this.at(Xe/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nu=new Je,$i=new Ai,Ha=new ui,Uu=new A,Va=new A,Ga=new A,Wa=new A,Ic=new A,Xa=new A,Fu=new A,qa=new A,tt=class extends It{constructor(e=new gt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ic.fromBufferAttribute(d,e),a?Xa.addScaledVector(Ic,h):Xa.addScaledVector(Ic.sub(t),h))}t.add(Xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Ha.containsPoint($i.origin)===!1&&($i.intersectSphere(Ha,Uu)===null||$i.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,S=y;x<S;x+=3){let w=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);i=$a(this,p,e,n,c,h,d,w,C,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);i=$a(this,a,e,n,c,h,d,b,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,S=y;x<S;x+=3){let w=x,C=x+1,v=x+2;i=$a(this,p,e,n,c,h,d,w,C,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=g,y=g+1,x=g+2;i=$a(this,a,e,n,c,h,d,b,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function gm(s,e,t,n,i,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ni,o),l===null)return null;qa.copy(o),qa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:s}}function $a(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Va),s.getVertexPosition(l,Ga),s.getVertexPosition(c,Wa);let h=gm(s,e,t,n,Va,Ga,Wa,Fu);if(h){let d=new A;Ti.getBarycoord(Fu,Va,Ga,Wa,d),i&&(h.uv=Ti.getInterpolatedAttribute(i,o,l,c,d,new re)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,o,l,c,d,new re)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new A,materialIndex:0};Ti.getNormal(Va,Ga,Wa,u.normal),h.face=u,h.barycoord=d}return h}var Nr=class extends on{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Vt,h=Vt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Es=new Je,Ou=new Je,Ya=[],Bu=new En,_m=new Je,vr=new tt,yr=new ui,di=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_m)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),Bu.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(Bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),yr.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),Ou.multiplyMatrices(n,Es),vr.matrixWorld=Ou,vr.raycast(e,Ya);for(let a=0,o=Ya.length;a<o;a++){let l=Ya[a];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(i*this.count),i,this.count,jo,An));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yi=new ui,xm=new re(.5,.5),ja=new A,zs=class{constructor(e=new nn,t=new nn,n=new nn,i=new nn,r=new nn,a=new nn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],b=r[12],y=r[13],x=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,p-m,S-b).normalize(),i[1].setComponents(c+a,f+h,p+m,S+b).normalize(),i[2].setComponents(c+o,f+d,p+_,S+y).normalize(),i[3].setComponents(c-o,f-d,p-_,S-y).normalize(),n)i[4].setComponents(l,u,g,x).normalize(),i[5].setComponents(c-l,f-u,p-g,S-x).normalize();else if(i[4].setComponents(c-l,f-u,p-g,S-x).normalize(),t===Nn)i[5].setComponents(c+l,f+u,p+g,S+x).normalize();else if(t===Is)i[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);let t=xm.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ja.x=i.normal.x>0?e.max.x:e.min.x,ja.y=i.normal.y>0?e.max.y:e.min.y,ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ji=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zu=new Je,Hc=new Ai,Za=new ui,Ja=new A,Ci=class extends It{constructor(e=new gt,t=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;zu.copy(i).invert(),Hc.copy(e.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,_=f;m<_;m++){let g=c.getX(m);Ja.fromBufferAttribute(d,g),ku(Ja,g,l,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,_=f;m<_;m++)Ja.fromBufferAttribute(d,m),ku(Ja,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ku(s,e,t,n,i,r,a){let o=Hc.distanceSqToPoint(s);if(o<t){let l=new A;Hc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ur=class extends on{constructor(e=[],t=Ui,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ri=class extends on{constructor(e,t,n=kn,i,r,a,o=Vt,l=Vt,c,h=Yn,d=1){if(h!==Yn&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xo=class extends Ri{constructor(e,t=kn,n=Ui,i,r,a=Vt,o=Vt,l,c=Yn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fr=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zn=class s extends gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function m(_,g,p,b,y,x,S,w,C,v,T){let I=x/C,L=S/v,U=x/2,z=S/2,D=w/2,P=C+1,F=v+1,k=0,Q=0,q=new A;for(let V=0;V<F;V++){let j=V*L-z;for(let Ae=0;Ae<P;Ae++){let de=Ae*I-U;q[_]=de*b,q[g]=j*y,q[p]=D,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ae/C),d.push(1-V/v),k+=1}}for(let V=0;V<v;V++)for(let j=0;j<C;j++){let Ae=u+j+P*V,de=u+j+P*(V+1),st=u+(j+1)+P*(V+1),ze=u+(j+1)+P*V;l.push(Ae,de,ze),l.push(de,st,ze),Q+=6}o.addGroup(f,Q,T),f+=Q,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fi=class s extends gt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],g=n/2,p=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function b(){let x=new A,S=new A,w=0,C=(t-e)/n;for(let v=0;v<=r;v++){let T=[],I=v/r,L=I*(t-e)+e;for(let U=0;U<=i;U++){let z=U/i,D=z*l+o,P=Math.sin(D),F=Math.cos(D);S.x=L*P,S.y=-I*n+g,S.z=L*F,d.push(S.x,S.y,S.z),x.set(P,C,F).normalize(),u.push(x.x,x.y,x.z),f.push(z,1-I),T.push(m++)}_.push(T)}for(let v=0;v<i;v++)for(let T=0;T<r;T++){let I=_[T][v],L=_[T+1][v],U=_[T+1][v+1],z=_[T][v+1];(e>0||T!==0)&&(h.push(I,L,z),w+=3),(t>0||T!==r-1)&&(h.push(L,U,z),w+=3)}c.addGroup(p,w,0),p+=w}function y(x){let S=m,w=new re,C=new A,v=0,T=x===!0?e:t,I=x===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),m++;let L=m;for(let U=0;U<=i;U++){let D=U/i*l+o,P=Math.cos(D),F=Math.sin(D);C.x=T*F,C.y=g*I,C.z=T*P,d.push(C.x,C.y,C.z),u.push(0,I,0),w.x=P*.5+.5,w.y=F*.5*I+.5,f.push(w.x,w.y),m++}for(let U=0;U<i;U++){let z=S+U,D=L+U;x===!0?h.push(D,D+1,z):h.push(D+1,D,z),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class s extends fi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vo=class s extends gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new A,x=new A,S=new A;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],x),f(t[w+2],S),l(y,x,S,b)}function l(b,y,x,S){let w=S+1,C=[];for(let v=0;v<=w;v++){C[v]=[];let T=b.clone().lerp(x,v/w),I=y.clone().lerp(x,v/w),L=w-v;for(let U=0;U<=L;U++)U===0&&v===w?C[v][U]=T:C[v][U]=T.clone().lerp(I,U/L)}for(let v=0;v<w;v++)for(let T=0;T<2*(w-v)-1;T++){let I=Math.floor(T/2);T%2===0?(u(C[v][I+1]),u(C[v+1][I]),u(C[v][I])):(u(C[v][I+1]),u(C[v+1][I+1]),u(C[v+1][I]))}}function c(b){let y=new A;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(b),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let b=new A;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let x=g(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;a.push(x,1-S)}m(),d()}function d(){for(let b=0;b<a.length;b+=6){let y=a[b+0],x=a[b+2],S=a[b+4],w=Math.max(y,x,S),C=Math.min(y,x,S);w>.9&&C<.1&&(y<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,y){let x=b*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function m(){let b=new A,y=new A,x=new A,S=new A,w=new re,C=new re,v=new re;for(let T=0,I=0;T<r.length;T+=9,I+=6){b.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(a[I+0],a[I+1]),C.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),S.copy(b).add(y).add(x).divideScalar(3);let L=g(S);_(w,I+0,b,L),_(C,I+2,y,L),_(v,I+4,x,L)}}function _(b,y,x,S){S<0&&b.x===1&&(a[y]=b.x-1),x.x===0&&x.z===0&&(a[y]=S/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,i=[],r=[],a=[],o=new A,l=new Je;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(et(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ks=class extends mn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yo=class extends ks{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Hu=new A,Vu=new A,Lc=new gh,Dc=new gh,Nc=new gh,Fn=class extends mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Vu.subVectors(i[0],i[1]).add(i[0]),c=Vu);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Hu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Lc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,g),Dc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,g),Nc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Dc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Nc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Lc.calc(l),Dc.calc(l),Nc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gu(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function vm(s,e){let t=1-s;return t*t*e}function ym(s,e){return 2*(1-s)*s*e}function bm(s,e){return s*s*e}function Er(s,e,t,n){return vm(s,e)+ym(s,t)+bm(s,n)}function Mm(s,e){let t=1-s;return t*t*t*e}function Sm(s,e){let t=1-s;return 3*t*t*s*e}function Em(s,e){return 3*(1-s)*s*s*e}function wm(s,e){return s*s*s*e}function wr(s,e,t,n,i){return Mm(s,e)+Sm(s,t)+Em(s,n)+wm(s,i)}var Br=class extends mn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,a.x,o.x),wr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bo=class extends mn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,a.x,o.x),wr(e,i.y,r.y,a.y,o.y),wr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zr=class extends mn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends mn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends mn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Er(e,i.x,r.x,a.x),Er(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends mn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Er(e,i.x,r.x,a.x),Er(e,i.y,r.y,a.y),Er(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Gu(o,l.x,c.x,h.x,d.x),Gu(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},So=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:Fn,CubicBezierCurve:Br,CubicBezierCurve3:bo,EllipseCurve:ks,LineCurve:zr,LineCurve3:Mo,QuadraticBezierCurve:kr,QuadraticBezierCurve3:Hr,SplineCurve:Vr}),Eo=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new So[i.type]().fromJSON(i))}return this}},Gr=class extends Eo{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new zr(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new kr(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Br(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Vr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new ks(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pi=class extends Gr{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Gr().fromJSON(i))}return this}};function Tm(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=kd(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Im(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,d=l;for(let u=t;u<i;u+=t){let f=s[u],m=s[u+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Wr(r,a,t,o,l,c,0),a}function kd(s,e,t,n,i){let r;if(i===Vm(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Wu(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Wu(a/n|0,s[a],s[a+1],r);return r&&Hs(r,r.next)&&(qr(r),r=r.next),r}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||At(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Fm(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Cm(s,n,i,r):Am(s)){e.push(l.i,s.i,c.i),qr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Rm(Ki(s),e),Wr(s,e,t,n,i,r,2)):a===2&&Pm(s,e,t,n,i,r):Wr(Ki(s),e,t,n,i,r,1);break}}}function Am(s){let e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&br(i,o,r,l,a,c,m.x,m.y)&&At(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Cm(s,e,t,n){let i=s.prev,r=s,a=s.next;if(At(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),m=Math.min(h,d,u),_=Math.max(o,l,c),g=Math.max(h,d,u),p=Vc(f,m,e,t,n),b=Vc(_,g,e,t,n),y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&br(o,h,l,d,c,u,y.x,y.y)&&At(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&br(o,h,l,d,c,u,x.x,x.y)&&At(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&br(o,h,l,d,c,u,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&br(o,h,l,d,c,u,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Rm(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Hs(n,i)&&Vd(n,t,t.next,i)&&Xr(n,i)&&Xr(i,n)&&(e.push(n.i,t.i,i.i),qr(t),qr(t.next),t=s=i),t=t.next}while(t!==s);return Ki(t)}function Pm(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zm(a,o)){let l=Gd(a,o);a=Ki(a,a.next),l=Ki(l,l.next),Wr(a,e,t,n,i,r,0),Wr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Im(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=kd(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Bm(c))}i.sort(Lm);for(let r=0;r<i.length;r++)t=Dm(i[r],t);return t}function Lm(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Dm(s,e){let t=Nm(s,e);if(!t)return e;let n=Gd(t,s);return Ki(n,n.next),Ki(t,t.next)}function Nm(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(Hs(s,t))return t;do{if(Hs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Hd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);Xr(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Um(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Um(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function Fm(s,e,t,n){let i=s;do i.z===0&&(i.z=Vc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Om(i)}function Om(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Vc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Bm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Hd(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function br(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Hd(s,e,t,n,i,r,a,o)}function zm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!km(s,e)&&(Xr(s,e)&&Xr(e,s)&&Hm(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||Hs(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Hs(s,e){return s.x===e.x&&s.y===e.y}function Vd(s,e,t,n){let i=Qa(At(s,e,t)),r=Qa(At(s,e,n)),a=Qa(At(t,n,s)),o=Qa(At(t,n,e));return!!(i!==r&&a!==o||i===0&&Ka(s,t,e)||r===0&&Ka(s,n,e)||a===0&&Ka(t,s,n)||o===0&&Ka(t,e,n))}function Ka(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qa(s){return s>0?1:s<0?-1:0}function km(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Xr(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function Hm(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Gd(s,e){let t=Gc(s.i,s.x,s.y),n=Gc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wu(s,e,t,n){let i=Gc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Gc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vm(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Wc=class{static triangulate(e,t,n=2){return Tm(e,t,n)}},ji=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Xu(e),qu(n,e);let a=e.length;t.forEach(Xu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,qu(n,t[l]);let o=Wc.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xu(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Qi=class s extends gt{constructor(e=new Pi([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ke(i,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Gm,y,x=!1,S,w,C,v;if(p){y=p.getSpacedPoints(h),x=!0,u=!1;let ie=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,ie),w=new A,C=new A,v=new A}u||(g=0,f=0,m=0,_=0);let T=o.extractPoints(c),I=T.shape,L=T.holes;if(!ji.isClockWise(I)){I=I.reverse();for(let ie=0,ae=L.length;ie<ae;ie++){let ce=L[ie];ji.isClockWise(ce)&&(L[ie]=ce.reverse())}}function z(ie){let ce=10000000000000001e-36,he=ie[0];for(let pe=1;pe<=ie.length;pe++){let He=pe%ie.length,Be=ie[He],qe=Be.x-he.x,Ye=Be.y-he.y,N=qe*qe+Ye*Ye,ht=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(he.x),Math.abs(he.y)),rt=ce*ht*ht;if(N<=rt){ie.splice(He,1),pe--;continue}he=Be}}z(I),L.forEach(z);let D=L.length,P=I;for(let ie=0;ie<D;ie++){let ae=L[ie];I=I.concat(ae)}function F(ie,ae,ce){return ae||We("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ae,ce)}let k=I.length;function Q(ie,ae,ce){let he,pe,He,Be=ie.x-ae.x,qe=ie.y-ae.y,Ye=ce.x-ie.x,N=ce.y-ie.y,ht=Be*Be+qe*qe,rt=Be*N-qe*Ye;if(Math.abs(rt)>Number.EPSILON){let R=Math.sqrt(ht),M=Math.sqrt(Ye*Ye+N*N),H=ae.x-qe/R,X=ae.y+Be/R,Z=ce.x-N/M,ue=ce.y+Ye/M,fe=((Z-H)*N-(ue-X)*Ye)/(Be*N-qe*Ye);he=H+Be*fe-ie.x,pe=X+qe*fe-ie.y;let J=he*he+pe*pe;if(J<=2)return new re(he,pe);He=Math.sqrt(J/2)}else{let R=!1;Be>Number.EPSILON?Ye>Number.EPSILON&&(R=!0):Be<-Number.EPSILON?Ye<-Number.EPSILON&&(R=!0):Math.sign(qe)===Math.sign(N)&&(R=!0),R?(he=-qe,pe=Be,He=Math.sqrt(ht)):(he=Be,pe=qe,He=Math.sqrt(ht/2))}return new re(he/He,pe/He)}let q=[];for(let ie=0,ae=P.length,ce=ae-1,he=ie+1;ie<ae;ie++,ce++,he++)ce===ae&&(ce=0),he===ae&&(he=0),q[ie]=Q(P[ie],P[ce],P[he]);let V=[],j,Ae=q.concat();for(let ie=0,ae=D;ie<ae;ie++){let ce=L[ie];j=[];for(let he=0,pe=ce.length,He=pe-1,Be=he+1;he<pe;he++,He++,Be++)He===pe&&(He=0),Be===pe&&(Be=0),j[he]=Q(ce[he],ce[He],ce[Be]);V.push(j),Ae=Ae.concat(j)}let de;if(g===0)de=ji.triangulateShape(P,L);else{let ie=[],ae=[];for(let ce=0;ce<g;ce++){let he=ce/g,pe=f*Math.cos(he*Math.PI/2),He=m*Math.sin(he*Math.PI/2)+_;for(let Be=0,qe=P.length;Be<qe;Be++){let Ye=F(P[Be],q[Be],He);ge(Ye.x,Ye.y,-pe),he===0&&ie.push(Ye)}for(let Be=0,qe=D;Be<qe;Be++){let Ye=L[Be];j=V[Be];let N=[];for(let ht=0,rt=Ye.length;ht<rt;ht++){let R=F(Ye[ht],j[ht],He);ge(R.x,R.y,-pe),he===0&&N.push(R)}he===0&&ae.push(N)}}de=ji.triangulateShape(ie,ae)}let st=de.length,ze=m+_;for(let ie=0;ie<k;ie++){let ae=u?F(I[ie],Ae[ie],ze):I[ie];x?(C.copy(S.normals[0]).multiplyScalar(ae.x),w.copy(S.binormals[0]).multiplyScalar(ae.y),v.copy(y[0]).add(C).add(w),ge(v.x,v.y,v.z)):ge(ae.x,ae.y,0)}for(let ie=1;ie<=h;ie++)for(let ae=0;ae<k;ae++){let ce=u?F(I[ae],Ae[ae],ze):I[ae];x?(C.copy(S.normals[ie]).multiplyScalar(ce.x),w.copy(S.binormals[ie]).multiplyScalar(ce.y),v.copy(y[ie]).add(C).add(w),ge(v.x,v.y,v.z)):ge(ce.x,ce.y,d/h*ie)}for(let ie=g-1;ie>=0;ie--){let ae=ie/g,ce=f*Math.cos(ae*Math.PI/2),he=m*Math.sin(ae*Math.PI/2)+_;for(let pe=0,He=P.length;pe<He;pe++){let Be=F(P[pe],q[pe],he);ge(Be.x,Be.y,d+ce)}for(let pe=0,He=L.length;pe<He;pe++){let Be=L[pe];j=V[pe];for(let qe=0,Ye=Be.length;qe<Ye;qe++){let N=F(Be[qe],j[qe],he);x?ge(N.x,N.y+y[h-1].y,y[h-1].x+ce):ge(N.x,N.y,d+ce)}}}je(),Y();function je(){let ie=i.length/3;if(u){let ae=0,ce=k*ae;for(let he=0;he<st;he++){let pe=de[he];ke(pe[2]+ce,pe[1]+ce,pe[0]+ce)}ae=h+g*2,ce=k*ae;for(let he=0;he<st;he++){let pe=de[he];ke(pe[0]+ce,pe[1]+ce,pe[2]+ce)}}else{for(let ae=0;ae<st;ae++){let ce=de[ae];ke(ce[2],ce[1],ce[0])}for(let ae=0;ae<st;ae++){let ce=de[ae];ke(ce[0]+k*h,ce[1]+k*h,ce[2]+k*h)}}n.addGroup(ie,i.length/3-ie,0)}function Y(){let ie=i.length/3,ae=0;ee(P,ae),ae+=P.length;for(let ce=0,he=L.length;ce<he;ce++){let pe=L[ce];ee(pe,ae),ae+=pe.length}n.addGroup(ie,i.length/3-ie,1)}function ee(ie,ae){let ce=ie.length;for(;--ce>=0;){let he=ce,pe=ce-1;pe<0&&(pe=ie.length-1);for(let He=0,Be=h+g*2;He<Be;He++){let qe=k*He,Ye=k*(He+1),N=ae+he+qe,ht=ae+pe+qe,rt=ae+pe+Ye,R=ae+he+Ye;we(N,ht,rt,R)}}}function ge(ie,ae,ce){l.push(ie),l.push(ae),l.push(ce)}function ke(ie,ae,ce){Xe(ie),Xe(ae),Xe(ce);let he=i.length/3,pe=b.generateTopUV(n,i,he-3,he-2,he-1);pt(pe[0]),pt(pe[1]),pt(pe[2])}function we(ie,ae,ce,he){Xe(ie),Xe(ae),Xe(he),Xe(ae),Xe(ce),Xe(he);let pe=i.length/3,He=b.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);pt(He[0]),pt(He[1]),pt(He[3]),pt(He[1]),pt(He[2]),pt(He[3])}function Xe(ie){i.push(l[ie*3+0]),i.push(l[ie*3+1]),i.push(l[ie*3+2])}function pt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new So[i.type]().fromJSON(i)),new s(n,e.options)}},Gm={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-d),new re(u,1-m),new re(_,1-p)]:[new re(o,1-l),new re(h,1-d),new re(f,1-m),new re(g,1-p)]}};function Wm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $r=class s extends vo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Yr=class s extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let b=p*u-a;for(let y=0;y<c;y++){let x=y*d-r;m.push(x,-b,0),_.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let y=b+c*p,x=b+c*(p+1),S=b+1+c*(p+1),w=b+1+c*p;f.push(y,x,w),f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var pi=class s extends gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new A,u=new A,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let b=[],y=p/n,x=a+y*o,S=e*Math.cos(x),w=Math.sqrt(e*e-S*S),C=0;p===0&&a===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){let T=v/t,I=i+T*r;d.x=-w*Math.cos(I),d.y=S,d.z=w*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+C,1-y),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let y=h[p][b+1],x=h[p][b],S=h[p+1][b],w=h[p+1][b+1];(p!==0||a>0)&&f.push(y,x,w),(p!==n-1||l<Math.PI)&&f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mi=class s extends gt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new A,f=new A,m=new A;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=i;p++){let b=p/i*r;f.x=(e+t*Math.cos(g))*Math.cos(b),f.y=(e+t*Math.cos(g))*Math.sin(b),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let p=(i+1)*_+g-1,b=(i+1)*(_-1)+g-1,y=(i+1)*(_-1)+g,x=(i+1)*_+g;l.push(p,b,x),l.push(b,y,x)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Vs=class s extends gt{constructor(e=new Hr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new re,h=new A,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function _(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),b(),p()}function g(y){h=e.getPointAt(y/t,h);let x=a.normals[y],S=a.binormals[y];for(let w=0;w<=i;w++){let C=w/i*Math.PI*2,v=Math.sin(C),T=-Math.cos(C);l.x=T*x.x+v*S.x,l.y=T*x.y+v*S.y,l.z=T*x.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=i;x++){let S=(i+1)*(y-1)+(x-1),w=(i+1)*y+(x-1),C=(i+1)*y+x,v=(i+1)*(y-1)+x;m.push(S,w,v),m.push(w,C,v)}}function b(){for(let y=0;y<=t;y++)for(let x=0;x<=i;x++)c.x=y/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new So[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function as(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if($u(i))i.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if($u(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Jt(s){let e={};for(let t=0;t<s.length;t++){let n=as(s[t]);for(let i in n)e[i]=n[i]}return e}function $u(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Xm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function _h(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Wd={clone:as,merge:Jt},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new A().fromArray(i.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wo=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jr=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var On=class extends jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},To=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ao=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ws(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Uc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends Ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zc:r=e,o=2*t-n;break;case kc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:a=e,l=2*n-t;break;case kc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,b=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+b*a[c+S]+y*a[l+S]+x*a[d+S];return r}},Ro=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Po=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Io=class extends Ii{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(i-t),_=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*m;return r}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],p=f*u+m*2,b=d[p],y=d[p+1],x=e*u+m*2,S=h[x],w=h[x+1],C=jm(n,t,b,S,i);r[m]=Xd(C,_,y,w,g)}return r}};function Xd(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Ym(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function jm(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Xd(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Ym(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Uc(e.settings)&&(n.settings={inTangents:ws(e.settings.inTangents,Array),outTangents:ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case no:t=this.InterpolantFactoryMethodSmooth;break;case Oc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return no;case this.InterpolantFactoryMethodBezier:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Uc(this.settings)&&(Yu(this.settings.inTangents,e),Yu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Op(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===no,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=t[d+m];if(_!==t[u+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Uc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Yu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=po;var Li=class extends gn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Tr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};Lo.prototype.ValueTypeName="color";var Do=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};Do.prototype.ValueTypeName="number";var No=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)mt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zr=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends gn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Tr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};Uo.prototype.ValueTypeName="vector";var Fo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qd=new Fo,Oo=class{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gs=class extends Jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new Je,ju=new A,Zu=new A,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eo=new A,to=new mt,qn=new A,Kr=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(eo,to,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(eo,to,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new A,Ju=new re,Ku=new re,Xt=class extends Kr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,Ku),t.subVectors(Ku,Ju)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ws=class extends Kr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xc=class extends Bo{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ts=-90,As=1,zo=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(Ts,As,e,t);i.layers=this.layers,this.add(i);let r=new Xt(Ts,As,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Ts,As,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Ts,As,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Ts,As,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ko=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xh="\\[\\]\\.:\\/",Zm=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",Jm="[^"+xh.replace("\\.","")+"]",Km=/((?:WC+[\/:])*)/.source.replace("WC",vh),Qm=/(WCOD+)?/.source.replace("WCOD",Jm),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),t0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),n0=new RegExp("^"+Km+Qm+e0+t0+"$"),i0=["material","materials","bones","map"],qc=class{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zm,"")}static parseTrackName(e){let t=n0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);i0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=qc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zy=new Float32Array(1);var Qu=new Je,es=class{constructor(e,t,n=0,i=1/0){this.ray=new Ai(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(e,t=!0,n=[]){return $c(e,this,n,t),n.sort(ed),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)$c(e[i],this,n,t);return n.sort(ed),n}};function ed(s,e){return s.distance-e.distance}function $c(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)$c(r[a],e,t,!0)}}var qs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var wh=class wh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};wh.prototype.isMatrix2=!0;var Yc=wh;var Qr=class extends Un{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function yh(s,e,t,n){let i=s0(n);switch(t){case uh:return s*e;case jo:return s*e/i.components*i.byteLength;case Zo:return s*e/i.components*i.byteLength;case Bi:return s*e*2/i.components*i.byteLength;case Jo:return s*e*2/i.components*i.byteLength;case dh:return s*e*3/i.components*i.byteLength;case Cn:return s*e*4/i.components*i.byteLength;case Ko:return s*e*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ra:case aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(s,16)*Math.max(e,8)/4;case Qo:case tl:return Math.max(s,8)*Math.max(e,8)/2;case il:case sl:case al:case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rl:case oa:case ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sl:case El:case wl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tl:case Al:return Math.ceil(s/4)*Math.ceil(e/4)*8;case la:case Cl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s0(s){switch(s){case cn:case oh:return{byteLength:1,components:1};case js:case lh:case Hn:return{byteLength:2,components:1};case $o:case Yo:return{byteLength:2,components:4};case kn:case qo:case An:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mf(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function u0(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,hg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ug=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,v_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
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
}`,w_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,P_=`#define MATCAP
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
}`,I_=`#define MATCAP
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
}`,L_=`#define NORMAL
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
}`,D_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N_=`#define PHONG
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
}`,U_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,F_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,B_=`#define TOON
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
}`,z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,k_=`uniform float size;
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
}`,H_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,G_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,W_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,X_=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:d0,alphahash_pars_fragment:f0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:x0,aomap_pars_fragment:v0,batching_pars_vertex:y0,batching_vertex:b0,begin_vertex:M0,beginnormal_vertex:S0,bsdfs:E0,iridescence_fragment:w0,bumpmap_pars_fragment:T0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:P0,color_fragment:I0,color_pars_fragment:L0,color_pars_vertex:D0,color_vertex:N0,common:U0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:sg,envmap_vertex:Y0,fog_vertex:j0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:K0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:dg,lights_fragment_end:fg,lightprobes_pars_fragment:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:yg,map_particle_fragment:bg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:wg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Cg,morphtarget_vertex:Rg,normal_fragment_begin:Pg,normal_fragment_maps:Ig,normal_pars_fragment:Lg,normal_pars_vertex:Dg,normal_vertex:Ng,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:kg,packing:Hg,premultiplied_alpha_fragment:Vg,project_vertex:Gg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Kg,skinning_pars_vertex:Qg,skinning_vertex:e_,skinnormal_vertex:t_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:a_,transmission_pars_fragment:o_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:h_,worldpos_vertex:u_,background_vert:d_,background_frag:f_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:__,depth_vert:x_,depth_frag:v_,distance_vert:y_,distance_frag:b_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:E_,linedashed_frag:w_,meshbasic_vert:T_,meshbasic_frag:A_,meshlambert_vert:C_,meshlambert_frag:R_,meshmatcap_vert:P_,meshmatcap_frag:I_,meshnormal_vert:L_,meshnormal_frag:D_,meshphong_vert:N_,meshphong_frag:U_,meshphysical_vert:F_,meshphysical_frag:O_,meshtoon_vert:B_,meshtoon_frag:z_,points_vert:k_,points_frag:H_,shadow_vert:V_,shadow_frag:G_,sprite_vert:W_,sprite_frag:X_},Me={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Qn={basic:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new me(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Jt([Me.points,Me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Jt([Me.common,Me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Jt([Me.sprite,Me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Jt([Me.common,Me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Jt([Me.lights,Me.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Qn.physical={uniforms:Jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Il={r:0,b:0,g:0},q_=new Je,gf=new $e;gf.set(-1,0,0,0,1,0,0,0,1);function $_(s,e,t,n,i,r){let a=new me(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){let x=b.backgroundBlurriness>0;y=e.get(y,x)}return y}function m(b){let y=!1,x=f(b);x===null?g(a,o):x&&x.isColor&&(g(x,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(b,y){let x=f(y);x&&(x.isCubeTexture||x.mapping===ta)?(c===void 0&&(c=new tt(new Zn(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:as(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gf),c.material.toneMapped=ot.getTransfer(x.colorSpace)!==ft,(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new tt(new Yr(2,2),new Ft({name:"BackgroundMaterial",uniforms:as(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,y){b.getRGB(Il,_h(s)),t.buffers.color.setClear(Il.r,Il.g,Il.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:_,dispose:p}}function Y_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(L,U,z,D,P){let F=!1,k=d(L,D,z,U);r!==k&&(r=k,c(r.object)),F=f(L,D,z,P),F&&m(L,D,z,P),P!==null&&e.update(P,s.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(L,U,z,D),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,U,z,D){let P=D.wireframe===!0,F=n[U.id];F===void 0&&(F={},n[U.id]=F);let k=L.isInstancedMesh===!0?L.id:0,Q=F[k];Q===void 0&&(Q={},F[k]=Q);let q=Q[z.id];q===void 0&&(q={},Q[z.id]=q);let V=q[P];return V===void 0&&(V=u(l()),q[P]=V),V}function u(L){let U=[],z=[],D=[];for(let P=0;P<t;P++)U[P]=0,z[P]=0,D[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,U,z,D){let P=r.attributes,F=U.attributes,k=0,Q=z.getAttributes();for(let q in Q)if(Q[q].location>=0){let j=P[q],Ae=F[q];if(Ae===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),j===void 0||j.attribute!==Ae||Ae&&j.data!==Ae.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function m(L,U,z,D){let P={},F=U.attributes,k=0,Q=z.getAttributes();for(let q in Q)if(Q[q].location>=0){let j=F[q];j===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let Ae={};Ae.attribute=j,j&&j.data&&(Ae.data=j.data),P[q]=Ae,k++}r.attributes=P,r.attributesNum=k,r.index=D}function _(){let L=r.newAttributes;for(let U=0,z=L.length;U<z;U++)L[U]=0}function g(L){p(L,0)}function p(L,U){let z=r.newAttributes,D=r.enabledAttributes,P=r.attributeDivisors;z[L]=1,D[L]===0&&(s.enableVertexAttribArray(L),D[L]=1),P[L]!==U&&(s.vertexAttribDivisor(L,U),P[L]=U)}function b(){let L=r.newAttributes,U=r.enabledAttributes;for(let z=0,D=U.length;z<D;z++)U[z]!==L[z]&&(s.disableVertexAttribArray(z),U[z]=0)}function y(L,U,z,D,P,F,k){k===!0?s.vertexAttribIPointer(L,U,z,P,F):s.vertexAttribPointer(L,U,z,D,P,F)}function x(L,U,z,D){_();let P=D.attributes,F=z.getAttributes(),k=U.defaultAttributeValues;for(let Q in F){let q=F[Q];if(q.location>=0){let V=P[Q];if(V===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let j=V.normalized,Ae=V.itemSize,de=e.get(V);if(de===void 0)continue;let st=de.buffer,ze=de.type,je=de.bytesPerElement,Y=ze===s.INT||ze===s.UNSIGNED_INT||V.gpuType===qo;if(V.isInterleavedBufferAttribute){let ee=V.data,ge=ee.stride,ke=V.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)p(q.location+we,ee.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<q.locationSize;we++)g(q.location+we);s.bindBuffer(s.ARRAY_BUFFER,st);for(let we=0;we<q.locationSize;we++)y(q.location+we,Ae/q.locationSize,ze,j,ge*je,(ke+Ae/q.locationSize*we)*je,Y)}else{if(V.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)p(q.location+ee,V.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ee=0;ee<q.locationSize;ee++)g(q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ee=0;ee<q.locationSize;ee++)y(q.location+ee,Ae/q.locationSize,ze,j,Ae*je,Ae/q.locationSize*ee*je,Y)}}else if(k!==void 0){let j=k[Q];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(q.location,j);break;case 3:s.vertexAttrib3fv(q.location,j);break;case 4:s.vertexAttrib4fv(q.location,j);break;default:s.vertexAttrib1fv(q.location,j)}}}}b()}function S(){T();for(let L in n){let U=n[L];for(let z in U){let D=U[z];for(let P in D){let F=D[P];for(let k in F)h(F[k].object),delete F[k];delete D[P]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let z in U){let D=U[z];for(let P in D){let F=D[P];for(let k in F)h(F[k].object),delete F[k];delete D[P]}}delete n[L.id]}function C(L){for(let U in n){let z=n[U];for(let D in z){let P=z[D];if(P[L.id]===void 0)continue;let F=P[L.id];for(let k in F)h(F[k].object),delete F[k];delete P[L.id]}}}function v(L){for(let U in n){let z=n[U],D=L.isInstancedMesh===!0?L.id:0,P=z[D];if(P!==void 0){for(let F in P){let k=P[F];for(let Q in k)h(k[Q].object),delete k[Q];delete P[F]}delete z[D],Object.keys(z).length===0&&delete n[U]}}}function T(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function j_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Z_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Cn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cn&&C!==An&&!v&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:w}}function J_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new nn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,y=b*4,x=p.clippingState||null;l.value=x,x=h(m,u,y,f);for(let S=0;S!==y;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(d[y]).applyMatrix4(b,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Ks=4,K_=6,Q_=20,ex=256,ua=new Ws,$d=new me,Th=null,Ah=0,Ch=0,Rh=!1,tx=new A,os=new A,Dl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=tx}=r;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Ch),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Hn,format:Cn,colorSpace:Ar,depthBuffer:!1},i=Yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nx(r)),this._blurMaterial=sx(r,e,t),this._ggxMaterial=ix(r,e,t)}return i}_compileMaterial(e){let t=new tt(new gt,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,i,r){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor($d),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Zn,new sn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy($d),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;Js(i,x*S,y>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ui||e.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Ks?n-m+Ks:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Js(r,g,p,3*_,2*_),i.setRenderTarget(r),i.render(o,ua),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Js(e,g,p,3*_,2*_),i.setRenderTarget(e),i.render(o,ua)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Ks?i-this._lodMax+Ks:0),u=4*(this._cubeSize-h);Js(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,ua)}};function nx(s){let e=[],t=[],n=s,i=s-Ks+1+K_;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,y=p>2?0:-1,x=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];m.set(x,f*u*p);for(let S=0;S<u;S++){let w=h[S*2]*2-1,C=h[S*2+1]*2-1;p===0?os.set(1,C,w):p===1?os.set(-w,1,-C):p===2?os.set(-w,C,1):p===3?os.set(-1,C,-w):p===4?os.set(-w,-1,C):os.set(w,C,-1),os.toArray(_,(p*u+S)*f)}}let g=new gt;g.setAttribute("position",new Rt(m,f)),g.setAttribute("outputDirection",new Rt(_,f)),t.push(new tt(g,null)),n>Ks&&n--}return{lodMeshes:t,sizeLods:e}}function Yd(s,e,t){let n=new ln(s,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ix(s,e,t){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ex,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function sx(s,e,t){return new Ft({name:"SphericalGaussianBlur",defines:{SAMPLES:Q_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function jd(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Zd(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nl=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ur(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zn(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Jn});r.uniforms.tEquirect.value=t;let a=new tt(i,r),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=qt),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function rx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Go||f===Wo)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Nl(m.height);return _.fromEquirectangularTexture(s,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===Go||f===Wo,_=f===Ui||f===ss;if(m||_){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Dl(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return m&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Dl(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Go?u.mapping=Ui:f===Wo&&(u.mapping=ss),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ax(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Zi("WebGLRenderer: "+n+" extension not supported."),i}}}function ox(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let y=0,x=b.length;y<x;y+=3){let S=b[y+0],w=b[y+1],C=b[y+2];u.push(S,w,w,C,C,S)}}else{let b=m.array;_=m.version;for(let y=0,x=b.length/3-1;y<x;y+=3){let S=y+0,w=y+1,C=y+2;u.push(S,w,w,C,C,S)}}let g=new(m.count>=65535?Dr:Lr)(u,1);g.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function lx(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hx(s,e,t){let n=new WeakMap,i=new wt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*S*4*d),C=new Pr(w,x,S,d);C.type=An,C.needsUpdate=!0;let v=y*4;for(let I=0;I<d;I++){let L=g[I],U=p[I],z=b[I],D=x*S*4*I;for(let P=0;P<L.count;P++){let F=P*v;f===!0&&(i.fromBufferAttribute(L,P),w[D+F+0]=i.x,w[D+F+1]=i.y,w[D+F+2]=i.z,w[D+F+3]=0),m===!0&&(i.fromBufferAttribute(U,P),w[D+F+4]=i.x,w[D+F+5]=i.y,w[D+F+6]=i.z,w[D+F+7]=0),_===!0&&(i.fromBufferAttribute(z,P),w[D+F+8]=i.x,w[D+F+9]=i.y,w[D+F+10]=i.z,w[D+F+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new re(x,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ux(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var dx={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ea]:"ACES_FILMIC_TONE_MAPPING",[sh]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function fx(s,e,t,n,i,r){let a=new ln(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new gt;c.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let h=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new tt(c,h),u=new Ws(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,p=null,b=[],y=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),l!==null&&l.setSize(x,S);for(let w=0;w<b.length;w++){let C=b[w];C.setSize&&C.setSize(x,S)}},this.setEffects=function(x){b=x,y=b.length>0&&b[0].isRenderPass===!0;let S=a.width,w=a.height;b.length>0&&o===null&&(o=new ln(S,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new ln(S,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let v=b[C];v.setSize&&v.setSize(S,w)}},this.begin=function(x,S){if(_||x.toneMapping===zn&&b.length===0)return!1;if(p=S,S!==null){let w=S.width,C=S.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return y===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return y},this.end=function(x,S){x.toneMapping=g,_=!0;let w=a,C=o;for(let v=0;v<b.length;v++){let T=b[v];T.enabled!==!1&&(T.render(x,C,w,S),T.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,h.defines={},ot.getTransfer(f)===ft&&(h.defines.SRGB_TRANSFER="");let v=dx[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(p),x.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var _f=new on,Lh=new Ri(1,1),xf=new Pr,vf=new _o,yf=new Ur,Jd=[],Kd=[],Qd=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function er(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Jd[i];if(r===void 0&&(r=new Float32Array(i),Jd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fl(s,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function px(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function _x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function xx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;tf.set(n),s.uniformMatrix2fv(this.addr,!1,tf),Bt(t,n)}}function vx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;ef.set(n),s.uniformMatrix3fv(this.addr,!1,ef),Bt(t,n)}}function yx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Qd.set(n),s.uniformMatrix4fv(this.addr,!1,Qd),Bt(t,n)}}function bx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function Sx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function Ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function wx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function Ax(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function Cx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function Rx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Lh.compareFunction=t.isReversedDepthBuffer()?Pl:Rl,r=Lh):r=_f,t.setTexture2D(e||r,i)}function Px(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vf,i)}function Ix(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yf,i)}function Lx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xf,i)}function Dx(s){switch(s){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return bx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return Ex;case 5125:return wx;case 36294:return Tx;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Lx}}function Nx(s,e){s.uniform1fv(this.addr,e)}function Ux(s,e){let t=er(e,this.size,2);s.uniform2fv(this.addr,t)}function Fx(s,e){let t=er(e,this.size,3);s.uniform3fv(this.addr,t)}function Ox(s,e){let t=er(e,this.size,4);s.uniform4fv(this.addr,t)}function Bx(s,e){let t=er(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zx(s,e){let t=er(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kx(s,e){let t=er(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Hx(s,e){s.uniform1iv(this.addr,e)}function Vx(s,e){s.uniform2iv(this.addr,e)}function Gx(s,e){s.uniform3iv(this.addr,e)}function Wx(s,e){s.uniform4iv(this.addr,e)}function Xx(s,e){s.uniform1uiv(this.addr,e)}function qx(s,e){s.uniform2uiv(this.addr,e)}function $x(s,e){s.uniform3uiv(this.addr,e)}function Yx(s,e){s.uniform4uiv(this.addr,e)}function jx(s,e,t){let n=this.cache,i=e.length,r=Fl(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Lh:a=_f;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Zx(s,e,t){let n=this.cache,i=e.length,r=Fl(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vf,r[a])}function Jx(s,e,t){let n=this.cache,i=e.length,r=Fl(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yf,r[a])}function Kx(s,e,t){let n=this.cache,i=e.length,r=Fl(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xf,r[a])}function Qx(s){switch(s){case 5126:return Nx;case 35664:return Ux;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return kx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return $x;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return Kx}}var Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dx(t.type)}},Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qx(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function nf(s,e){s.seq.push(e),s.map[e.id]=e}function ev(s,e,t){let n=s.name,i=n.length;for(Ph.lastIndex=0;;){let r=Ph.exec(n),a=Ph.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nf(t,c===void 0?new Dh(o,s,e):new Nh(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Uh(o),nf(t,d)),t=d}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ev(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function sf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var tv=37297,nv=0;function iv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var rf=new $e;function sv(s){ot._getMatrix(rf,ot.workingColorSpace,s);let e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case Cr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function af(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iv(s.getShaderSource(e),o)}else return r}function rv(s,e){let t=sv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var av={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[ea]:"ACESFilmic",[sh]:"AgX",[rh]:"Neutral",[ih]:"Custom"};function ov(s,e){let t=av[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new A;function lv(){ot.getLuminanceCoefficients(Ll);let s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function hv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function fa(s){return s!==""}function of(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(s){return s.replace(dv,pv)}var fv=new Map;function pv(s,e){let t=nt[e];if(t===void 0){let n=fv.get(e);if(n!==void 0)t=nt[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(t)}var mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(s){return s.replace(mv,gv)}function gv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _v={[ts]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function xv(s){return _v[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vv={[Ui]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function yv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":vv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var bv={[ss]:"ENVMAP_MODE_REFRACTION"};function Mv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sv={[Vo]:"ENVMAP_BLENDING_MULTIPLY",[Md]:"ENVMAP_BLENDING_MIX",[Sd]:"ENVMAP_BLENDING_ADD"};function Ev(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Sv[s.combine]||"ENVMAP_BLENDING_NONE"}function wv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=xv(t),c=yv(t),h=Mv(t),d=Ev(t),u=wv(t),f=cv(t),m=hv(r),_=i.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(g=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?nt.tonemapping_pars_fragment:"",t.toneMapping!==zn?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=Fh(a),a=of(a,t),a=lf(a,t),o=Fh(o),o=of(o,t),o=lf(o,t),a=cf(a),o=cf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+g+a,x=b+p+o,S=sf(i,i.VERTEX_SHADER,y),w=sf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,S),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(L){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(S)||"",D=i.getShaderInfoLog(w)||"",P=U.trim(),F=z.trim(),k=D.trim(),Q=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,w);else{let V=af(i,S,"vertex"),j=af(i,w,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+V+`
`+j)}else P!==""?Ge("WebGLProgram: Program Info Log:",P):(F===""||k==="")&&(q=!1);q&&(L.diagnostics={runnable:Q,programLog:P,vertexShader:{log:F,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(S),i.deleteShader(w),v=new Qs(i,_),T=uv(i,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(_,tv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}var Av=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=Av++,this.code=e,this.usedTimes=0}};function Cv(s){return s===Bi||s===oa||s===la}function Rv(s,e,t,n,i,r){let a=new Us,o=new Oh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,I,L,U,z){let D=L.fog,P=U.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||F,k),q=Q&&Q.mapping===ta?Q.image.height:null,V=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Ae=j!==void 0?j.length:0,de=0;P.morphAttributes.position!==void 0&&(de=1),P.morphAttributes.normal!==void 0&&(de=2),P.morphAttributes.color!==void 0&&(de=3);let st,ze,je,Y;if(V){let bt=Qn[V];st=bt.vertexShader,ze=bt.fragmentShader}else{st=v.vertexShader,ze=v.fragmentShader;let bt=o.getVertexShaderStage(v),ut=o.getFragmentShaderStage(v);o.update(v,bt,ut),je=bt.id,Y=ut.id}let ee=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),ke=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,Xe=!!v.map,pt=!!v.matcap,ie=!!Q,ae=!!v.aoMap,ce=!!v.lightMap,he=!!v.bumpMap&&v.wireframe===!1,pe=!!v.normalMap,He=!!v.displacementMap,Be=!!v.emissiveMap,qe=!!v.metalnessMap,Ye=!!v.roughnessMap,N=v.anisotropy>0,ht=v.clearcoat>0,rt=v.dispersion>0,R=v.retroreflectivity>0,M=v.iridescence>0,H=v.sheen>0,X=v.transmission>0,Z=N&&!!v.anisotropyMap,ue=ht&&!!v.clearcoatMap,fe=ht&&!!v.clearcoatNormalMap,J=ht&&!!v.clearcoatRoughnessMap,ne=M&&!!v.iridescenceMap,_e=M&&!!v.iridescenceThicknessMap,Ne=H&&!!v.sheenColorMap,be=H&&!!v.sheenRoughnessMap,xe=!!v.specularMap,Ue=!!v.specularColorMap,Ve=!!v.specularIntensityMap,Ze=X&&!!v.transmissionMap,B=X&&!!v.thicknessMap,ve=!!v.gradientMap,te=!!v.alphaMap,ye=v.alphaTest>0,Te=!!v.alphaHash,se=!!v.extensions,Fe=zn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=s.toneMapping);let Le={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:st,fragmentShader:ze,defines:v.defines,customVertexShaderID:je,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:ke,instancingColor:ke&&U.instanceColor!==null,instancingMorph:ke&&U.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:pt,envMap:ie,envMapMode:ie&&Q.mapping,envMapCubeUVHeight:q,aoMap:ae,lightMap:ce,bumpMap:he,normalMap:pe,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:pe&&v.normalMapType===Td,normalMapTangentSpace:pe&&v.normalMapType===ca,packedNormalMap:pe&&v.normalMapType===ca&&Cv(v.normalMap.format),metalnessMap:qe,roughnessMap:Ye,anisotropy:N,anisotropyMap:Z,clearcoat:ht,clearcoatMap:ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:J,dispersion:rt,retroreflection:R,iridescence:M,iridescenceMap:ne,iridescenceThicknessMap:_e,sheen:H,sheenColorMap:Ne,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Ue,specularIntensityMap:Ve,transmission:X,transmissionMap:Ze,thicknessMap:B,gradientMap:ve,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:ye,alphaHash:Te,combine:v.combine,mapUv:Xe&&m(v.map.channel),aoMapUv:ae&&m(v.aoMap.channel),lightMapUv:ce&&m(v.lightMap.channel),bumpMapUv:he&&m(v.bumpMap.channel),normalMapUv:pe&&m(v.normalMap.channel),displacementMapUv:He&&m(v.displacementMap.channel),emissiveMapUv:Be&&m(v.emissiveMap.channel),metalnessMapUv:qe&&m(v.metalnessMap.channel),roughnessMapUv:Ye&&m(v.roughnessMap.channel),anisotropyMapUv:Z&&m(v.anisotropyMap.channel),clearcoatMapUv:ue&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(v.sheenRoughnessMap.channel),specularMapUv:xe&&m(v.specularMap.channel),specularColorMapUv:Ue&&m(v.specularColorMap.channel),specularIntensityMapUv:Ve&&m(v.specularIntensityMap.channel),transmissionMapUv:Ze&&m(v.transmissionMap.channel),thicknessMapUv:B&&m(v.thicknessMap.channel),alphaMapUv:te&&m(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(pe||N),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(Xe||te),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:de,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:Be&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(T,v),b(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){let T=f[v.type],I;if(T){let L=Qn[T];I=Wd.clone(L.uniforms)}else I=v.uniforms;return I}function x(v,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Tv(s,T,v,i),c.push(I),h.set(T,I)),I}function S(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:C}}function Pv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Iv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function uf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function df(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,_,g,p){let b=s[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=m,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=g,b.group=p),e++,b}function l(u,f,m,_,g,p,b){b.reversedDepth===!0&&(g=-g);let y=o(u,f,m,_,g,p);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):t.push(y)}function c(u,f,m,_,g,p){let b=o(u,f,m,_,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||Iv),n.length>1&&n.sort(f||uf),i.length>1&&i.sort(f||uf)}function d(){for(let u=e,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Lv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new df,s.set(n,[a])):i>=r.length?(a=new df,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Dv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new me};break;case"SpotLight":t={position:new A,direction:new A,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function Nv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Uv=0;function Fv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ov(s){let e=new Dv,t=Nv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let i=new A,r=new Je,a=new Je;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,b=0,y=0,x=0,S=0,w=0,C=0,v=0,T=0,I=0;c.sort(Fv);for(let U=0,z=c.length;U<z;U++){let D=c[U],P=D.color,F=D.intensity,k=D.distance,Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bi?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=P.r*F,d+=P.g*F,u+=P.b*F;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],F);I++}else if(D.isSunLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,j=t.get(D);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=Q;let Ae=V.getViewportCount();for(let de=0;de<Ae;de++)n.sunShadowMatrix[_+de]=V.getMatrix(de),n.sunShadowCascade[_+de]=V._cascadeData[de];_+=Ae,m++}n.sun[f]=q,f++}else if(D.isDirectionalLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,j=t.get(D);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=Q,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=q,g++}else if(D.isSpotLight){let q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(P).multiplyScalar(F),q.distance=k,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[b]=q;let V=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,V.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[b]=V.matrix,D.castShadow){let j=t.get(D);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=Q,C++}b++}else if(D.isRectAreaLight){let q=e.get(D);q.color.copy(P).multiplyScalar(F),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=q,y++}else if(D.isPointLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let V=D.shadow,j=t.get(D);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=q,p++}else if(D.isHemisphereLight){let q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(F),q.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[x]=q,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==y||L.hemiLength!==x||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==C||L.numSpotMaps!==v||L.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=b,n.rectArea.length=y,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=b,L.rectAreaLength=y,L.hemiLength=x,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=C,L.numSpotMaps=v,L.numLightProbes=I,n.version=Uv++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let b=0,y=c.length;b<y;b++){let x=c[b];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(x.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function ff(s){let e=new Ov(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Bv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new ff(s),e.set(i,[o])):r>=a.length?(o=new ff(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Vv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],pf=new Je,da=new A,Ih=new A;function Gv(s,e,t){let n=new zs,i=new re,r=new re,a=new wt,o=new To,l=new Ao,c={},h=t.maxTextureSize,d={[Ni]:$t,[$t]:Ni,[Tn]:Tn},u=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:zv,fragmentShader:kv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new gt;m.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new tt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let p=this.type;this.render=function(w,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===id&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);let T=s.getRenderTarget(),I=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=p!==this.type;z&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(P=>P.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,P=w.length;D<P;D++){let F=w[D],k=F.shadow;if(k===void 0){Ge("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Q=k.getFrameExtents();i.multiply(Q),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,k.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===$s){if(F.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ln(i.x,i.y,{format:Bi,type:Hn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new Ri(i.x,i.y,An),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=Yn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt}else F.isPointLight?(k.map=new Nl(i.x),k.map.depthTexture=new xo(i.x,kn)):(k.map=new ln(i.x,i.y),k.map.depthTexture=new Ri(i.x,i.y,kn)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=Yn,this.type===ts?(k.map.depthTexture.compareFunction=q?Pl:Rl,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let V=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,v);for(let j=0;j<V;j++){let Ae=k.getCamera(j);if(F.isPointLight){let de=k.camera,st=k.matrix,ze=F.distance||de.far;ze!==de.far&&(de.far=ze,de.updateProjectionMatrix()),da.setFromMatrixPosition(F.matrixWorld),de.position.copy(da),Ih.copy(de.position),Ih.add(Hv[j]),de.up.copy(Vv[j]),de.lookAt(Ih),de.updateMatrixWorld(),st.makeTranslation(-da.x,-da.y,-da.z),pf.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(pf,de.coordinateSystem,de.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,j),s.clear();else{j===0&&(s.setRenderTarget(k.map),s.clear());let de=k.getViewport(j);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),U.viewport(a)}n=k.getFrustum(j),x(C,v,Ae,F,this.type)}k.isPointLightShadow!==!0&&this.type===$s&&b(k,v),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,I,L)};function b(w,C){let v=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ln(i.x,i.y,{format:Bi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,v,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,v,f,_,null)}function y(w,C,v,T){let I=null,L=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)I=L;else if(I=v.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=I.uuid,z=C.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let P=D[z];P===void 0&&(P=I.clone(),D[z]=P,C.addEventListener("dispose",S)),I=P}if(I.visible=C.visible,I.wireframe=C.wireframe,T===$s?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let U=s.properties.get(I);U.light=v}return I}function x(w,C,v,T,I){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===$s)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let z=e.update(w),D=w.material;if(Array.isArray(D)){let P=z.groups;for(let F=0,k=P.length;F<k;F++){let Q=P[F],q=D[Q.materialIndex];if(q&&q.visible){let V=y(w,q,T,I);w.onBeforeShadow(s,w,C,v,z,V,Q),s.renderBufferDirect(v,null,z,V,w,Q),w.onAfterShadow(s,w,C,v,z,V,Q)}}}else if(D.visible){let P=y(w,D,T,I);w.onBeforeShadow(s,w,C,v,z,P,null),s.renderBufferDirect(v,null,z,P,w,null),w.onAfterShadow(s,w,C,v,z,P,null)}}let U=w.children;for(let z=0,D=U.length;z<D;z++)x(U[z],C,v,T,I)}function S(w){w.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],I=w.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function Wv(s,e){function t(){let B=!1,ve=new wt,te=null,ye=new wt(0,0,0,0);return{setMask:function(Te){te!==Te&&!B&&(s.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){B=Te},setClear:function(Te,se,Fe,Le,bt){bt===!0&&(Te*=Le,se*=Le,Fe*=Le),ve.set(Te,se,Fe,Le),ye.equals(ve)===!1&&(s.clearColor(Te,se,Fe,Le),ye.copy(ve))},reset:function(){B=!1,te=null,ye.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,te=null,ye=null,Te=null;return{setReversed:function(se){if(ve!==se){let Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let Le=Te;Te=null,this.setClear(Le)}},getReversed:function(){return ve},setTest:function(se){se?ee(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(se){te!==se&&!B&&(s.depthMask(se),te=se)},setFunc:function(se){if(ve&&(se=Bd[se]),ye!==se){switch(se){case so:s.depthFunc(s.NEVER);break;case ro:s.depthFunc(s.ALWAYS);break;case ao:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case oo:s.depthFunc(s.EQUAL);break;case lo:s.depthFunc(s.GEQUAL);break;case co:s.depthFunc(s.GREATER);break;case ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=se}},setLocked:function(se){B=se},setClear:function(se){Te!==se&&(Te=se,ve&&(se=1-se),s.clearDepth(se))},reset:function(){B=!1,te=null,ye=null,Te=null,ve=!1}}}function i(){let B=!1,ve=null,te=null,ye=null,Te=null,se=null,Fe=null,Le=null,bt=null;return{setTest:function(ut){B||(ut?ee(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(ut){ve!==ut&&!B&&(s.stencilMask(ut),ve=ut)},setFunc:function(ut,Pn,Wn){(te!==ut||ye!==Pn||Te!==Wn)&&(s.stencilFunc(ut,Pn,Wn),te=ut,ye=Pn,Te=Wn)},setOp:function(ut,Pn,Wn){(se!==ut||Fe!==Pn||Le!==Wn)&&(s.stencilOp(ut,Pn,Wn),se=ut,Fe=Pn,Le=Wn)},setLocked:function(ut){B=ut},setClear:function(ut){bt!==ut&&(s.clearStencil(ut),bt=ut)},reset:function(){B=!1,ve=null,te=null,ye=null,Te=null,se=null,Fe=null,Le=null,bt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,y=null,x=null,S=null,w=null,C=null,v=new me(0,0,0),T=0,I=!1,L=null,U=null,z=null,D=null,P=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=Q>=2);let V=null,j={},Ae=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),st=new wt().fromArray(Ae),ze=new wt().fromArray(de);function je(B,ve,te,ye){let Te=new Uint8Array(4),se=s.createTexture();s.bindTexture(B,se),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<te;Fe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(ve+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return se}let Y={};Y[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(Ps),he(!1),pe(jc),ee(s.CULL_FACE),ae(Jn);function ee(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function ge(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function ke(B,ve){return u[B]!==ve?(s.bindFramebuffer(B,ve),u[B]=ve,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ve),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function we(B,ve){let te=m,ye=!1;if(B){te=f.get(ve),te===void 0&&(te=[],f.set(ve,te));let Te=B.textures;if(te.length!==Te.length||te[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Fe=Te.length;se<Fe;se++)te[se]=s.COLOR_ATTACHMENT0+se;te.length=Te.length,ye=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,ye=!0);ye&&s.drawBuffers(te)}function Xe(B){return _!==B?(s.useProgram(B),_=B,!0):!1}let pt={[is]:s.FUNC_ADD,[rd]:s.FUNC_SUBTRACT,[ad]:s.FUNC_REVERSE_SUBTRACT};pt[od]=s.MIN,pt[ld]=s.MAX;let ie={[cd]:s.ZERO,[hd]:s.ONE,[ud]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[_d]:s.SRC_ALPHA_SATURATE,[md]:s.DST_COLOR,[fd]:s.DST_ALPHA,[dd]:s.ONE_MINUS_SRC_COLOR,[Qc]:s.ONE_MINUS_SRC_ALPHA,[gd]:s.ONE_MINUS_DST_COLOR,[pd]:s.ONE_MINUS_DST_ALPHA,[xd]:s.CONSTANT_COLOR,[vd]:s.ONE_MINUS_CONSTANT_COLOR,[yd]:s.CONSTANT_ALPHA,[bd]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(B,ve,te,ye,Te,se,Fe,Le,bt,ut){if(B===Jn){g===!0&&(ge(s.BLEND),g=!1);return}if(g===!1&&(ee(s.BLEND),g=!0),B!==sd){if(B!==p||ut!==I){if((b!==is||S!==is)&&(s.blendEquation(s.FUNC_ADD),b=is,S=is),ut)switch(B){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ns:s.blendFunc(s.ONE,s.ONE);break;case Zc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",B);break}else switch(B){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",B);break}y=null,x=null,w=null,C=null,v.set(0,0,0),T=0,p=B,I=ut}return}Te=Te||ve,se=se||te,Fe=Fe||ye,(ve!==b||Te!==S)&&(s.blendEquationSeparate(pt[ve],pt[Te]),b=ve,S=Te),(te!==y||ye!==x||se!==w||Fe!==C)&&(s.blendFuncSeparate(ie[te],ie[ye],ie[se],ie[Fe]),y=te,x=ye,w=se,C=Fe),(Le.equals(v)===!1||bt!==T)&&(s.blendColor(Le.r,Le.g,Le.b,bt),v.copy(Le),T=bt),p=B,I=!1}function ce(B,ve){B.side===Tn?ge(s.CULL_FACE):ee(s.CULL_FACE);let te=B.side===$t;ve&&(te=!te),he(te),B.blending===Ys&&B.transparent===!1?ae(Jn):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ye=B.stencilWrite;o.setTest(ye),ye&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(B){L!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),L=B)}function pe(B){B!==td?(ee(s.CULL_FACE),B!==U&&(B===jc?s.cullFace(s.BACK):B===nd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),U=B}function He(B){B!==z&&(k&&s.lineWidth(B),z=B)}function Be(B,ve,te){B?(ee(s.POLYGON_OFFSET_FILL),(D!==ve||P!==te)&&(D=ve,P=te,a.getReversed()&&(ve=-ve),s.polygonOffset(ve,te))):ge(s.POLYGON_OFFSET_FILL)}function qe(B){B?ee(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function Ye(B){B===void 0&&(B=s.TEXTURE0+F-1),V!==B&&(s.activeTexture(B),V=B)}function N(B,ve,te){te===void 0&&(V===null?te=s.TEXTURE0+F-1:te=V);let ye=j[te];ye===void 0&&(ye={type:void 0,texture:void 0},j[te]=ye),(ye.type!==B||ye.texture!==ve)&&(V!==te&&(s.activeTexture(te),V=te),s.bindTexture(B,ve||Y[B]),ye.type=B,ye.texture=ve)}function ht(){let B=j[V];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function M(){try{s.texSubImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function H(){try{s.texSubImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function ue(){try{s.texStorage2D(...arguments)}catch(B){We("WebGLState:",B)}}function fe(){try{s.texStorage3D(...arguments)}catch(B){We("WebGLState:",B)}}function J(){try{s.texImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function ne(){try{s.texImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function _e(B){return d[B]!==void 0?d[B]:s.getParameter(B)}function Ne(B,ve){d[B]!==ve&&(s.pixelStorei(B,ve),d[B]=ve)}function be(B){st.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),st.copy(B))}function xe(B){ze.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),ze.copy(B))}function Ue(B,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let ye=te.get(B);ye===void 0&&(ye=s.getUniformBlockIndex(ve,B.name),te.set(B,ye))}function Ve(B,ve){let ye=c.get(ve).get(B);l.get(ve)!==ye&&(s.uniformBlockBinding(ve,ye,B.__bindingPointIndex),l.set(ve,ye))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,j={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,y=null,x=null,S=null,w=null,C=null,v=new me(0,0,0),T=0,I=!1,L=null,U=null,z=null,D=null,P=null,st.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:ke,drawBuffers:we,useProgram:Xe,setBlending:ae,setMaterial:ce,setFlipSided:he,setCullFace:pe,setLineWidth:He,setPolygonOffset:Be,setScissorTest:qe,activeTexture:Ye,bindTexture:N,unbindTexture:ht,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:J,texImage3D:ne,pixelStorei:Ne,getParameter:_e,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:ue,texStorage3D:fe,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:be,viewport:xe,reset:Ze}}function Xv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return m?new OffscreenCanvas(R,M):Rr("canvas")}function g(R,M,H){let X=1,Z=rt(R);if((Z.width>H||Z.height>H)&&(X=H/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ue=Math.floor(X*Z.width),fe=Math.floor(X*Z.height);u===void 0&&(u=_(ue,fe));let J=M?_(ue,fe):u;return J.width=ue,J.height=fe,J.getContext("2d").drawImage(R,0,0,ue,fe),Ge("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ue+"x"+fe+")."),J}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,M,H,X,Z,ue=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;X&&(fe=e.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8),H===s.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),H===s.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),M===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8),H===s.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),H===s.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),M===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGB8UI),H===s.UNSIGNED_SHORT&&(J=s.RGB16UI),H===s.UNSIGNED_INT&&(J=s.RGB32UI),H===s.BYTE&&(J=s.RGB8I),H===s.SHORT&&(J=s.RGB16I),H===s.INT&&(J=s.RGB32I)),M===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),H===s.UNSIGNED_INT&&(J=s.RGBA32UI),H===s.BYTE&&(J=s.RGBA8I),H===s.SHORT&&(J=s.RGBA16I),H===s.INT&&(J=s.RGBA32I)),M===s.RGB&&(H===s.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),H===s.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),M===s.RGBA){let ne=ue?Cr:ot.getTransfer(Z);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=ne===ft?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),H===s.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,M){let H;return R?M===null||M===kn||M===Zs?H=s.DEPTH24_STENCIL8:M===An?H=s.DEPTH32F_STENCIL8:M===js&&(H=s.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===kn||M===Zs?H=s.DEPTH_COMPONENT24:M===An?H=s.DEPTH_COMPONENT32F:M===js&&(H=s.DEPTH_COMPONENT16),H}function w(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function v(R){let M=R.target;M.removeEventListener("dispose",v),L(M)}function T(R){let M=n.get(R);if(M.__webglInit===void 0)return;let H=R.source,X=f.get(H);if(X){let Z=X[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(R),Object.keys(X).length===0&&f.delete(H)}n.remove(R)}function I(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let H=R.source,X=f.get(H);delete X[M.__cacheKey],a.memory.textures--}function L(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Z=0;Z<M.__webglFramebuffer[X].length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[X][Z]);else s.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)s.deleteFramebuffer(M.__webglFramebuffer[X]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=R.textures;for(let X=0,Z=H.length;X<Z;X++){let ue=n.get(H[X]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(R)}let U=0;function z(){U=0}function D(){return U}function P(R){U=R}function F(){let R=U;return R>=i.maxTextures&&Ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,R}function k(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Q(R,M){let H=n.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let X=R.image;if(X===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,R,M);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function q(R,M){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ge(H,R,M);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function V(R,M){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ge(H,R,M);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function j(R,M){let H=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){ke(H,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}let Ae={[uo]:s.REPEAT,[$n]:s.CLAMP_TO_EDGE,[fo]:s.MIRRORED_REPEAT},de={[Vt]:s.NEAREST,[Ed]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[Xo]:s.LINEAR_MIPMAP_NEAREST,[Fi]:s.LINEAR_MIPMAP_LINEAR},st={[Cd]:s.NEVER,[Dd]:s.ALWAYS,[Rd]:s.LESS,[Rl]:s.LEQUAL,[Pd]:s.EQUAL,[Pl]:s.GEQUAL,[Id]:s.GREATER,[Ld]:s.NOTEQUAL};function ze(R,M){if(M.type===An&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qt||M.magFilter===Xo||M.magFilter===na||M.magFilter===Fi||M.minFilter===qt||M.minFilter===Xo||M.minFilter===na||M.minFilter===Fi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ae[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ae[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ae[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,de[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vt||M.minFilter!==na&&M.minFilter!==Fi||M.type===An&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function je(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let X=M.source,Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));let ue=k(M);if(ue!==R.__cacheKey){Z[ue]===void 0&&(Z[ue]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[ue].usedTimes++;let fe=Z[R.__cacheKey];fe!==void 0&&(Z[R.__cacheKey].usedTimes--,fe.usedTimes===0&&I(M)),R.__cacheKey=ue,R.__webglTexture=Z[ue].texture}return H}function Y(R,M,H){return Math.floor(Math.floor(R/H)/M)}function ee(R,M,H,X){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,H,X,M.data);else{ue.sort((Ne,be)=>Ne.start-be.start);let fe=0;for(let Ne=1;Ne<ue.length;Ne++){let be=ue[fe],xe=ue[Ne],Ue=be.start+be.count,Ve=Y(xe.start,M.width,4),Ze=Y(be.start,M.width,4);xe.start<=Ue+1&&Ve===Ze&&Y(xe.start+xe.count-1,M.width,4)===Ve?be.count=Math.max(be.count,xe.start+xe.count-be.start):(++fe,ue[fe]=xe)}ue.length=fe+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),_e=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ne=0,be=ue.length;Ne<be;Ne++){let xe=ue[Ne],Ue=Math.floor(xe.start/4),Ve=Math.ceil(xe.count/4),Ze=Ue%M.width,B=Math.floor(Ue/M.width),ve=Ve,te=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,Ze,B,ve,te,H,X,M.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function ge(R,M,H){let X=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=s.TEXTURE_3D);let Z=je(R,M),ue=M.source;t.bindTexture(X,R.__webglTexture,s.TEXTURE0+H);let fe=n.get(ue);if(ue.version!==fe.__version||Z===!0){if(t.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let te=ot.getPrimaries(ot.workingColorSpace),ye=M.colorSpace===gi?null:ot.getPrimaries(M.colorSpace),Te=M.colorSpace===gi||te===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=g(M.image,!1,i.maxTextureSize);ne=ht(M,ne);let _e=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),be=x(M.internalFormat,_e,Ne,M.normalized,M.colorSpace,M.isVideoTexture);ze(X,M);let xe,Ue=M.mipmaps,Ve=M.isVideoTexture!==!0,Ze=fe.__version===void 0||Z===!0,B=ue.dataReady,ve=w(M,ne);if(M.isDepthTexture)be=S(M.format===Oi,M.type),Ze&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,be,ne.width,ne.height,0,_e,Ne,null));else if(M.isDataTexture)if(Ue.length>0){Ve&&Ze&&t.texStorage2D(s.TEXTURE_2D,ve,be,Ue[0].width,Ue[0].height);for(let te=0,ye=Ue.length;te<ye;te++)xe=Ue[te],Ve?B&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,xe.width,xe.height,_e,Ne,xe.data):t.texImage2D(s.TEXTURE_2D,te,be,xe.width,xe.height,0,_e,Ne,xe.data);M.generateMipmaps=!1}else Ve?(Ze&&t.texStorage2D(s.TEXTURE_2D,ve,be,ne.width,ne.height),B&&ee(M,ne,_e,Ne)):t.texImage2D(s.TEXTURE_2D,0,be,ne.width,ne.height,0,_e,Ne,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,be,Ue[0].width,Ue[0].height,ne.depth);for(let te=0,ye=Ue.length;te<ye;te++)if(xe=Ue[te],M.format!==Cn)if(_e!==null)if(Ve){if(B)if(M.layerUpdates.size>0){let Te=yh(xe.width,xe.height,M.format,M.type);for(let se of M.layerUpdates){let Fe=xe.data.subarray(se*Te/xe.data.BYTES_PER_ELEMENT,(se+1)*Te/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,se,xe.width,xe.height,1,_e,Fe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,_e,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,be,xe.width,xe.height,ne.depth,0,xe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,_e,Ne,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,be,xe.width,xe.height,ne.depth,0,_e,Ne,xe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ve&&Ze&&t.texStorage2D(s.TEXTURE_2D,ve,be,Ue[0].width,Ue[0].height);for(let te=0,ye=Ue.length;te<ye;te++)xe=Ue[te],M.format!==Cn?_e!==null?Ve?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,be,xe.width,xe.height,0,xe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,xe.width,xe.height,_e,Ne,xe.data):t.texImage2D(s.TEXTURE_2D,te,be,xe.width,xe.height,0,_e,Ne,xe.data)}else if(M.isDataArrayTexture)if(Ve){if(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,be,ne.width,ne.height,ne.depth),B)if(M.layerUpdates.size>0){let te=yh(ne.width,ne.height,M.format,M.type);for(let ye of M.layerUpdates){let Te=ne.data.subarray(ye*te/ne.data.BYTES_PER_ELEMENT,(ye+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,ne.width,ne.height,1,_e,Ne,Te)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ne,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,_e,Ne,ne.data);else if(M.isData3DTexture)Ve?(Ze&&t.texStorage3D(s.TEXTURE_3D,ve,be,ne.width,ne.height,ne.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ne,ne.data)):t.texImage3D(s.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,_e,Ne,ne.data);else if(M.isFramebufferTexture){if(Ze)if(Ve)t.texStorage2D(s.TEXTURE_2D,ve,be,ne.width,ne.height);else{let te=ne.width,ye=ne.height;for(let Te=0;Te<ve;Te++)t.texImage2D(s.TEXTURE_2D,Te,be,te,ye,0,_e,Ne,null),te>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let te=s.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(M),te.onpaint=ye=>{let Te=ye.changedElements;for(let se of d)Te.includes(se.image)&&(se.needsUpdate=!0)},te.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{let Te=s.RGBA,se=s.RGBA,Fe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,se,Fe,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ve&&Ze){let te=rt(Ue[0]);t.texStorage2D(s.TEXTURE_2D,ve,be,te.width,te.height)}for(let te=0,ye=Ue.length;te<ye;te++)xe=Ue[te],Ve?B&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,_e,Ne,xe):t.texImage2D(s.TEXTURE_2D,te,be,_e,Ne,xe);M.generateMipmaps=!1}else if(Ve){if(Ze){let te=rt(ne);t.texStorage2D(s.TEXTURE_2D,ve,be,te.width,te.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,Ne,ne)}else t.texImage2D(s.TEXTURE_2D,0,be,_e,Ne,ne);p(M)&&b(X),fe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ke(R,M,H){if(M.image.length!==6)return;let X=je(R,M),Z=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let ue=n.get(Z);if(Z.version!==ue.__version||X===!0){t.activeTexture(s.TEXTURE0+H);let fe=ot.getPrimaries(ot.workingColorSpace),J=M.colorSpace===gi?null:ot.getPrimaries(M.colorSpace),ne=M.colorSpace===gi||fe===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!_e&&!Ne?be[se]=g(M.image[se],!0,i.maxCubemapSize):be[se]=Ne?M.image[se].image:M.image[se],be[se]=ht(M,be[se]);let xe=be[0],Ue=r.convert(M.format,M.colorSpace),Ve=r.convert(M.type),Ze=x(M.internalFormat,Ue,Ve,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,ve=ue.__version===void 0||X===!0,te=Z.dataReady,ye=w(M,xe);ze(s.TEXTURE_CUBE_MAP,M);let Te;if(_e){B&&ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ze,xe.width,xe.height);for(let se=0;se<6;se++){Te=be[se].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){let Le=Te[Fe];M.format!==Cn?Ue!==null?B?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ze,Le.width,Le.height,0,Le.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Le.width,Le.height,Ue,Ve,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ze,Le.width,Le.height,0,Ue,Ve,Le.data)}}}else{if(Te=M.mipmaps,B&&ve){Te.length>0&&ye++;let se=rt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Ue,Ve,be[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,be[se].width,be[se].height,0,Ue,Ve,be[se].data);for(let Fe=0;Fe<Te.length;Fe++){let bt=Te[Fe].image[se].image;B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,bt.width,bt.height,Ue,Ve,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ze,bt.width,bt.height,0,Ue,Ve,bt.data)}}else{B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,Ve,be[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Ue,Ve,be[se]);for(let Fe=0;Fe<Te.length;Fe++){let Le=Te[Fe];B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,Ue,Ve,Le.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ze,Ue,Ve,Le.image[se])}}}p(M)&&b(s.TEXTURE_CUBE_MAP),ue.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function we(R,M,H,X,Z,ue){let fe=r.convert(H.format,H.colorSpace),J=r.convert(H.type),ne=x(H.internalFormat,fe,J,H.normalized,H.colorSpace),_e=n.get(M),Ne=n.get(H);if(Ne.__renderTarget=M,!_e.__hasExternalTextures){let be=Math.max(1,M.width>>ue),xe=Math.max(1,M.height>>ue);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,ue,ne,be,xe,M.depth,0,fe,J,null):t.texImage2D(Z,ue,ne,be,xe,0,fe,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Z,Ne.__webglTexture,0,qe(M)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Z,Ne.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(R,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let X=M.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ue=S(M.stencilBuffer,Z),fe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ye(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(M),ue,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(M),ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,R)}else{let X=M.textures;for(let Z=0;Z<X.length;Z++){let ue=X[Z],fe=r.convert(ue.format,ue.colorSpace),J=r.convert(ue.type),ne=x(ue.internalFormat,fe,J,ue.normalized,ue.colorSpace);Ye(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(M),ne,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(M),ne,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ne,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(R,M,H){let X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M.depthTexture);let _e=r.convert(M.depthTexture.format),Ne=r.convert(M.depthTexture.type),be;M.depthTexture.format===Yn?be=s.DEPTH_COMPONENT24:M.depthTexture.format===Oi&&(be=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,be,M.width,M.height,0,_e,Ne,null)}}else Q(M.depthTexture,0);let ue=Z.__webglTexture,fe=qe(M),J=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ne=M.depthTexture.format===Oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Yn)Ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,J,ue,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,J,ue,0);else if(M.depthTexture.format===Oi)Ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,J,ue,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,J,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(R){let M=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=X}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)pt(M.__webglFramebuffer[X],R,X);else{let X=R.texture.mipmaps;X&&X.length>0?pt(M.__webglFramebuffer[0],R,0):pt(M.__webglFramebuffer,R,0)}else if(H){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=s.createRenderbuffer(),Xe(M.__webglDepthbuffer[X],R,!1);else{let Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ue)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Xe(M.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(R,M,H){let X=n.get(R);M!==void 0&&we(X.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&ie(R)}function ce(R){let M=R.texture,H=n.get(R),X=n.get(M);R.addEventListener("dispose",v);let Z=R.textures,ue=R.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=M.version,a.memory.textures++),ue){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ne=0;ne<M.mipmaps.length;ne++)H.__webglFramebuffer[J][ne]=s.createFramebuffer()}else H.__webglFramebuffer[J]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)H.__webglFramebuffer[J]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(fe)for(let J=0,ne=Z.length;J<ne;J++){let _e=n.get(Z[J]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Ye(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ne=Z[J];H.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let _e=r.convert(ne.format,ne.colorSpace),Ne=r.convert(ne.type),be=x(ne.internalFormat,_e,Ne,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),xe=qe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,be,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,H.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)we(H.__webglFramebuffer[J][ne],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else we(H.__webglFramebuffer[J],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(M)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let J=0,ne=Z.length;J<ne;J++){let _e=Z[J],Ne=n.get(_e),be=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,Ne.__webglTexture),ze(be,_e),we(H.__webglFramebuffer,R,_e,s.COLOR_ATTACHMENT0+J,be,0),p(_e)&&b(be)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),ze(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)we(H.__webglFramebuffer[ne],R,M,s.COLOR_ATTACHMENT0,J,ne);else we(H.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,J,0);p(M)&&b(J),t.unbindTexture()}R.depthBuffer&&ie(R)}function he(R){let M=R.textures;for(let H=0,X=M.length;H<X;H++){let Z=M[H];if(p(Z)){let ue=y(R),fe=n.get(Z).__webglTexture;t.bindTexture(ue,fe),b(ue),t.unbindTexture()}}}let pe=[],He=[];function Be(R){if(R.samples>0){if(Ye(R)===!1){let M=R.textures,H=R.width,X=R.height,Z=s.COLOR_BUFFER_BIT,ue=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(R),J=M.length>1;if(J)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);let Ne=n.get(M[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,H,X,0,0,H,X,Z,s.NEAREST),l===!0&&(pe.length=0,He.length=0,pe.push(s.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(pe.push(ue),He.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);let Ne=n.get(M[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function qe(R){return Math.min(i.maxSamples,R.samples)}function Ye(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ht(R,M){let H=R.colorSpace,X=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ar&&H!==gi&&(ot.getTransfer(H)===ft?(X!==Cn||Z!==cn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",H)),M}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=P,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=ae,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qv(s,e){function t(n,i=gi){let r,a=ot.getTransfer(i);if(n===cn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return s.BYTE;if(n===lh)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===qo)return s.INT;if(n===kn)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===uh)return s.ALPHA;if(n===dh)return s.RGB;if(n===Cn)return s.RGBA;if(n===Yn)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===jo)return s.RED;if(n===Zo)return s.RED_INTEGER;if(n===Bi)return s.RG;if(n===Jo)return s.RG_INTEGER;if(n===Ko)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl||n===al||n===ol||n===oa||n===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===al)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===bl||n===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===El||n===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Al||n===la||n===Cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var $v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
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

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:$v,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends Un{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new zh,p={},b=t.getContextAttributes(),y=null,x=null,S=[],w=[],C=new re,v=null,T=null,I=new Xt;I.viewport=new wt;let L=new Xt;L.viewport=new wt;let U=[I,L],z=new ko,D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=S[Y];return ee===void 0&&(ee=new Fs,S[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=S[Y];return ee===void 0&&(ee=new Fs,S[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=S[Y];return ee===void 0&&(ee=new Fs,S[Y]=ee),ee.getHandSpace()};function F(Y){let ee=w.indexOf(Y.inputSource);if(ee===-1)return;let ge=S[ee];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<S.length;Y++){let ee=w[Y];ee!==null&&(w[Y]=null,S[Y].disconnect(ee))}D=null,P=null,g.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(y),f=null,u=null,d=null,i=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ke=null,we=null;b.depth&&(we=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=b.stencil?Oi:Yn,ke=b.stencil?Zs:kn);let Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ln(u.textureWidth,u.textureHeight,{format:Cn,type:cn,depthTexture:new Ri(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ln(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(Y){for(let ee=0;ee<Y.removed.length;ee++){let ge=Y.removed[ee],ke=w.indexOf(ge);ke>=0&&(w[ke]=null,S[ke].disconnect(ge))}for(let ee=0;ee<Y.added.length;ee++){let ge=Y.added[ee],ke=w.indexOf(ge);if(ke===-1){for(let Xe=0;Xe<S.length;Xe++)if(Xe>=w.length){w.push(ge),ke=Xe;break}else if(w[Xe]===null){w[Xe]=ge,ke=Xe;break}if(ke===-1)break}let we=S[ke];we&&we.connect(ge)}}let q=new A,V=new A;function j(Y,ee,ge){q.setFromMatrixPosition(ee.matrixWorld),V.setFromMatrixPosition(ge.matrixWorld);let ke=q.distanceTo(V),we=ee.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,pt=we[14]/(we[10]-1),ie=we[14]/(we[10]+1),ae=(we[9]+1)/we[5],ce=(we[9]-1)/we[5],he=(we[8]-1)/we[0],pe=(Xe[8]+1)/Xe[0],He=pt*he,Be=pt*pe,qe=ke/(-he+pe),Ye=qe*-he;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ye),Y.translateZ(qe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let N=pt+qe,ht=ie+qe,rt=He-Ye,R=Be+(ke-Ye),M=ae*ie/ht*N,H=ce*ie/ht*N;Y.projectionMatrix.makePerspective(rt,R,M,H,N,ht),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ae(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ee=Y.near,ge=Y.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),z.near=L.near=I.near=ee,z.far=L.far=I.far=ge,(D!==z.near||P!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,P=z.far),z.layers.mask=Y.layers.mask|6,I.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let ke=Y.parent,we=z.cameras;Ae(z,ke);for(let Xe=0;Xe<we.length;Xe++)Ae(we[Xe],ke);we.length===2?j(z,I,L):z.projectionMatrix.copy(I.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),de(Y,z,ke)};function de(Y,ee,ge){ge===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ds*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Y){return p[Y]};let st=null;function ze(Y,ee){if(h=ee.getViewerPose(c||a),m=ee,h!==null){let ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ke=!1;ge.length!==z.cameras.length&&(z.cameras.length=0,ke=!0);for(let ie=0;ie<ge.length;ie++){let ae=ge[ie],ce=null;if(f!==null)ce=f.getViewport(ae);else{let pe=d.getViewSubImage(u,ae);ce=pe.viewport,ie===0&&(e.setRenderTargetTextures(x,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(x))}let he=U[ie];he===void 0&&(he=new Xt,he.layers.enable(ie),he.viewport=new wt,U[ie]=he),he.matrix.fromArray(ae.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ae.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ce.x,ce.y,ce.width,ce.height),ie===0&&(z.matrix.copy(he.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ke===!0&&z.cameras.push(he)}let we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let ie=d.getDepthInformation(ge[0]);ie&&ie.isValid&&ie.texture&&g.init(ie,i.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ie=0;ie<ge.length;ie++){let ae=ge[ie].camera;if(ae){let ce=p[ae];ce||(ce=new Fr,p[ae]=ce);let he=d.getCameraImage(ae);ce.sourceTexture=he}}}}for(let ge=0;ge<S.length;ge++){let ke=w[ge],we=S[ge];ke!==null&&we!==void 0&&we.update(ke,ee,c||a)}st&&st(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let je=new mf;je.setAnimationLoop(ze),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}},jv=new Je,bf=new $e;bf.set(-1,0,0,0,1,0,0,0,1);function Zv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_h(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,y,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),y=b.envMap,x=b.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jv(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let w=S.program;n.uniformBlockBinding(x,w)}function c(x,S){let w=i[x.id];w===void 0&&(g(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(x,C);let v=e.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let S=d();x.__bindingPointIndex=S;let w=s.createBuffer(),C=x.__size,v=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,C,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=i[x.id],w=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let v=0,T=w.length;v<T;v++){let I=w[v];if(Array.isArray(I))for(let L=0,U=I.length;L<U;L++)f(I[L],v,L,C);else f(I,v,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,w,C){if(_(x,S,w,C)===!0){let v=x.__offset,T=x.value;if(Array.isArray(T)){let I=0;for(let L=0;L<T.length;L++){let U=T[L],z=p(U);m(U,x.__data,I),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,x.__data)}}function m(x,S,w){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,w)}function _(x,S,w,C){let v=x.value,T=S+"_"+w;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{let I=C[T];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(x){let S=x.uniforms,w=0,C=16;for(let T=0,I=S.length;T<I;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let U=0,z=L.length;U<z;U++){let D=L[U],P=Array.isArray(D.value)?D.value:[D.value];for(let F=0,k=P.length;F<k;F++){let Q=P[F],q=p(Q),V=w%C,j=V%q.boundary,Ae=V+j;w+=j,Ae!==0&&C-Ae<q.storage&&(w+=C-Ae),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=q.storage}}}let v=w%C;return v>0&&(w+=C-v),x.__size=w,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){let S=x.target;S.removeEventListener("dispose",b);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function y(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:y}}var Kv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function Qv(){return Kn===null&&(Kn=new Nr(Kv,16,16,Bi,Hn),Kn.name="DFG_LUT",Kn.minFilter=qt,Kn.magFilter=qt,Kn.wrapS=$n,Kn.wrapT=$n,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var pa=class{constructor(e={}){let{canvas:t=Ud(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,g=new Set([Ko,Jo,Zo]),p=new Set([cn,kn,js,Zs,$o,Yo]),b=new Uint32Array(4),y=new Int32Array(4),x=new A,S=null,w=null,C=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,U=null,z=null,D=null,P=null;this._outputColorSpace=tn;let F=0,k=0,Q=null,q=-1,V=null,j=new wt,Ae=new wt,de=null,st=new me(0),ze=0,je=t.width,Y=t.height,ee=1,ge=null,ke=null,we=new wt(0,0,je,Y),Xe=new wt(0,0,je,Y),pt=!1,ie=new zs,ae=!1,ce=!1,he=new Je,pe=new A,He=new wt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Ye(){return Q===null?ee:1}let N=n;function ht(E,O){return t.getContext(E,O)}let rt,R,M,H,X,Z,ue,fe,J,ne,_e,Ne,be,xe,Ue,Ve,Ze,B,ve,te,ye,Te,se;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),N===null){let O="webgl2";if(N=ht(O,E),N===null)throw ht(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(E){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),We("WebGLRenderer: "+E.message),E}function Fe(){rt=new ax(N),rt.init(),ye=new qv(N,rt),R=new Z_(N,rt,e,ye),M=new Wv(N,rt),R.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),z=N.createFramebuffer(),D=N.createFramebuffer(),P=N.createFramebuffer(),H=new cx(N),X=new Pv,Z=new Xv(N,rt,M,X,R,ye,H),ue=new rx(I),fe=new u0(N),Te=new Y_(N,fe),J=new ox(N,fe,H,Te),ne=new ux(N,J,fe,Te,H),B=new hx(N,R,Z),Ue=new J_(X),_e=new Rv(I,ue,rt,R,Te,Ue),Ne=new Zv(I,X),be=new Lv,xe=new Bv(rt),Ze=new $_(I,ue,M,ne,m,l),Ve=new Gv(I,ne,R),se=new Jv(N,H,R,M),ve=new j_(N,rt,H),te=new lx(N,rt,H),H.programs=_e.programs,I.capabilities=R,I.extensions=rt,I.properties=X,I.renderLists=be,I.shadowMap=Ve,I.state=M,I.info=H}_!==cn&&(T=new fx(_,t.width,t.height,o,i,r));let Le=new kh(I,N);this.xr=Le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(je,Y,!1))},this.getSize=function(E){return E.set(je,Y)},this.setSize=function(E,O,$=!0){if(Le.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}je=E,Y=O,t.width=Math.floor(E*ee),t.height=Math.floor(O*ee),$===!0&&(t.style.width=E+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(je*ee,Y*ee).floor()},this.setDrawingBufferSize=function(E,O,$){je=E,Y=O,ee=$,t.width=Math.floor(E*$),t.height=Math.floor(O*$),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===cn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,O,$,G){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,O,$,G),M.viewport(j.copy(we).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(Xe)},this.setScissor=function(E,O,$,G){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,O,$,G),M.scissor(Ae.copy(Xe).multiplyScalar(ee).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(E){M.setScissorTest(pt=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,$=!0){let G=0;if(E){let W=!1;if(Q!==null){let Ee=Q.texture.format;W=g.has(Ee)}if(W){let Ee=Q.texture.type,Re=p.has(Ee),Se=Ze.getClearColor(),Pe=Ze.getClearAlpha(),De=Se.r,Qe=Se.g,at=Se.b;Re?(b[0]=De,b[1]=Qe,b[2]=at,b[3]=Pe,N.clearBufferuiv(N.COLOR,0,b)):(y[0]=De,y[1]=Qe,y[2]=at,y[3]=Pe,N.clearBufferiv(N.COLOR,0,y))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Ze.dispose(),be.dispose(),xe.dispose(),X.dispose(),ue.dispose(),ne.dispose(),Te.dispose(),se.dispose(),_e.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",du),Le.removeEventListener("sessionend",fu),Wi.stop()};function bt(E){E.preventDefault(),ph("WebGLRenderer: Context Lost."),L=!0}function ut(){ph("WebGLRenderer: Context Restored."),L=!1;let E=H.autoReset,O=Ve.enabled,$=Ve.autoUpdate,G=Ve.needsUpdate,W=Ve.type;Fe(),H.autoReset=E,Ve.enabled=O,Ve.autoUpdate=$,Ve.needsUpdate=G,Ve.type=W}function Pn(E){We("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wn(E){let O=E.target;O.removeEventListener("dispose",Wn),Rp(O)}function Rp(E){Pp(E),X.remove(E)}function Pp(E){let O=X.get(E).programs;O!==void 0&&(O.forEach(function($){_e.releaseProgram($)}),E.isShaderMaterial&&_e.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,$,G,W,Ee){O===null&&(O=Be);let Re=W.isMesh&&W.matrixWorld.determinantAffine()<0,Se=Dp(E,O,$,G,W);M.setMaterial(G,Re);let Pe=$.index,De=1;if(G.wireframe===!0){if(Pe=J.getWireframeAttribute($),Pe===void 0)return;De=2}let Qe=$.drawRange,at=$.attributes.position,Ie=Qe.start*De,dt=(Qe.start+Qe.count)*De;Ee!==null&&(Ie=Math.max(Ie,Ee.start*De),dt=Math.min(dt,(Ee.start+Ee.count)*De)),Pe!==null?(Ie=Math.max(Ie,0),dt=Math.min(dt,Pe.count)):at!=null&&(Ie=Math.max(Ie,0),dt=Math.min(dt,at.count));let Dt=dt-Ie;if(Dt<0||Dt===1/0)return;Te.setup(W,G,Se,$,Pe);let St,yt=ve;if(Pe!==null&&(St=fe.get(Pe),yt=te,yt.setIndex(St)),W.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*Ye()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if(W.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),M.setLineWidth(Yt*Ye()),W.isLineSegments?yt.setMode(N.LINES):W.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else W.isPoints?yt.setMode(N.POINTS):W.isSprite&&yt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Yt=W._multiDrawStarts,Ce=W._multiDrawCounts,Qt=W._multiDrawCount,ct=Pe?fe.get(Pe).bytesPerElement:1,bn=X.get(G).currentProgram.getUniforms();for(let Xn=0;Xn<Qt;Xn++)bn.setValue(N,"_gl_DrawID",Xn),yt.render(Yt[Xn]/ct,Ce[Xn])}else if(W.isInstancedMesh)yt.renderInstances(Ie,Dt,W.count);else if($.isInstancedBufferGeometry){let Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,Yt);yt.renderInstances(Ie,Dt,Ce)}else yt.render(Ie,Dt)};function uu(E,O,$,G){U!==null&&E.isNodeMaterial&&U.setObject(G,E),ae===!0&&Ue.setState(E,$,!1),E.transparent===!0&&E.side===Tn&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,Ia(E,O,G),E.side=Ni,E.needsUpdate=!0,Ia(E,O,G),E.side=Tn):Ia(E,O,G)}this.compile=function(E,O,$=null){$===null&&($=E),U!==null&&U.renderStart(E,O,$),w=xe.get($),w.init(O),v.push(w),$.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),ce=this.localClippingEnabled,ae=Ue.init(this.clippingPlanes,ce),ae===!0&&Ue.setGlobalState(this.clippingPlanes,O),U!==null&&Ve.render(w.state.shadowsArray,$,O);let G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){let Se=Ee[Re];uu(Se,$,O,W),G.add(Se)}else uu(Ee,$,O,W),G.add(Ee)}),w=v.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(E,O,$=null){let G=this.compile(E,O,$);return new Promise(W=>{function Ee(){if(G.forEach(function(Re){let Pe=X.get(Re).currentProgram;(Pe===void 0||Pe.isReady())&&G.delete(Re)}),G.size===0){W(E);return}setTimeout(Ee,10)}rt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let uc=null;function Ip(E){uc&&uc(E)}function du(){Wi.stop()}function fu(){Wi.start()}let Wi=new mf;Wi.setAnimationLoop(Ip),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(E){uc=E,Le.setAnimationLoop(E),E===null?Wi.stop():Wi.start()},Le.addEventListener("sessionstart",du),Le.addEventListener("sessionend",fu),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(E,O);let $=Le.enabled===!0&&Le.isPresenting===!0,G=T!==null&&(Q===null||$)&&T.begin(I,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(O),O=Le.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,O,Q),w=xe.get(E,v.length),w.init(O),w.state.textureUnits=Z.getTextureUnits(),v.push(w),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ie.setFromProjectionMatrix(he,Nn,O.reversedDepth),ce=this.localClippingEnabled,ae=Ue.init(this.clippingPlanes,ce),S=be.get(E,C.length),S.init(),C.push(S),Le.enabled===!0&&Le.isPresenting===!0){let Re=I.xr.getDepthSensingMesh();Re!==null&&dc(Re,O,-1/0,I.sortObjects)}dc(E,O,0,I.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),I.sortObjects===!0&&S.sort(ge,ke),qe=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,qe&&Ze.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ue.beginShadows();let W=w.state.shadowsArray;if(Ve.render(W,E,O),ae===!0&&Ue.endShadows(),(G&&T.hasRenderPass())===!1){let Re=S.opaque,Se=S.transmissive;if(w.setupLights(),O.isArrayCamera){let Pe=O.cameras;if(Se.length>0)for(let De=0,Qe=Pe.length;De<Qe;De++){let at=Pe[De];mu(Re,Se,E,at)}qe&&Ze.render(E);for(let De=0,Qe=Pe.length;De<Qe;De++){let at=Pe[De];pu(S,E,at,at.viewport)}}else Se.length>0&&mu(Re,Se,E,O),qe&&Ze.render(E),pu(S,E,O)}Q!==null&&k===0&&(Z.updateMultisampleRenderTarget(Q),Z.updateRenderTargetMipmap(Q)),G&&T.end(I),E.isScene===!0&&E.onAfterRender(I,E,O),Te.resetDefaultState(),q=-1,V=null,v.pop(),v.length>0?(w=v[v.length-1],Z.setTextureUnits(w.state.textureUnits),ae===!0&&Ue.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,U!==null&&U.renderEnd()};function dc(E,O,$,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ie)){G&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);let Re=ne.update(E),Se=E.material;Se.visible&&S.push(E,Re,Se,$,He.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ie))){let Re=ne.update(E),Se=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),He.copy(Re.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(Se)){let Pe=Re.groups;for(let De=0,Qe=Pe.length;De<Qe;De++){let at=Pe[De],Ie=Se[at.materialIndex];Ie&&Ie.visible&&S.push(E,Re,Ie,$,He.z,at,O)}}else Se.visible&&S.push(E,Re,Se,$,He.z,null,O)}}let Ee=E.children;for(let Re=0,Se=Ee.length;Re<Se;Re++)dc(Ee[Re],O,$,G)}function pu(E,O,$,G){let{opaque:W,transmissive:Ee,transparent:Re}=E;w.setupLightsView($),ae===!0&&Ue.setGlobalState(I.clippingPlanes,$),G&&M.viewport(j.copy(G)),W.length>0&&Pa(W,O,$),Ee.length>0&&Pa(Ee,O,$),Re.length>0&&Pa(Re,O,$),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function mu(E,O,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Ie=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new ln(1,1,{generateMipmaps:!0,type:Ie?Hn:cn,minFilter:Fi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Ee=w.state.transmissionRenderTarget[G.id],Re=G.viewport||j;Ee.setSize(Re.z*I.transmissionResolutionScale,Re.w*I.transmissionResolutionScale);let Se=I.getRenderTarget(),Pe=I.getActiveCubeFace(),De=I.getActiveMipmapLevel();I.setRenderTarget(Ee),I.getClearColor(st),ze=I.getClearAlpha(),ze<1&&I.setClearColor(16777215,.5),I.clear(),qe&&Ze.render($);let Qe=I.toneMapping;I.toneMapping=zn;let at=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),ae===!0&&Ue.setGlobalState(I.clippingPlanes,G),Pa(E,$,G),Z.updateMultisampleRenderTarget(Ee),Z.updateRenderTargetMipmap(Ee),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let dt=0,Dt=O.length;dt<Dt;dt++){let St=O[dt],{object:yt,geometry:Yt,material:Ce,group:Qt}=St;if(Ce.side===Tn&&yt.layers.test(G.layers)){let ct=Ce.side;Ce.side=$t,Ce.needsUpdate=!0,gu(yt,$,G,Yt,Ce,Qt),Ce.side=ct,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(Z.updateMultisampleRenderTarget(Ee),Z.updateRenderTargetMipmap(Ee))}I.setRenderTarget(Se,Pe,De),I.setClearColor(st,ze),at!==void 0&&(G.viewport=at),I.toneMapping=Qe}function Pa(E,O,$){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ee=E.length;W<Ee;W++){let Re=E[W],{object:Se,geometry:Pe,group:De}=Re,Qe=Re.material;Qe.allowOverride===!0&&G!==null&&(Qe=G),Se.layers.test($.layers)&&gu(Se,O,$,Pe,Qe,De)}}function gu(E,O,$,G,W,Ee){U!==null&&W.isNodeMaterial&&U.setObject(E,W),E.onBeforeRender(I,O,$,G,W,Ee),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(I,O,$,G,E,Ee),W.transparent===!0&&W.side===Tn&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,I.renderBufferDirect($,O,G,W,E,Ee),W.side=Ni,W.needsUpdate=!0,I.renderBufferDirect($,O,G,W,E,Ee),W.side=Tn):I.renderBufferDirect($,O,G,W,E,Ee),E.onAfterRender(I,O,$,G,W,Ee)}function Ia(E,O,$){O.isScene!==!0&&(O=Be);let G=X.get(E),W=w.state.lights,Ee=w.state.shadowsArray,Re=W.state.version,Se=_e.getParameters(E,W.state,Ee,O,$,w.state.lightProbeGridArray),Pe=_e.getProgramCacheKey(Se),De=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ue.get(E.envMap||G.environment,Qe),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Wn),De=new Map,G.programs=De);let at=De.get(Pe);if(at!==void 0){if(G.currentProgram===at&&G.lightsStateVersion===Re)return xu(E,Se),at}else Se.uniforms=_e.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,$,Se),E.onBeforeCompile(Se,I),at=_e.acquireProgram(Se,Pe),De.set(Pe,at),G.uniforms=Se.uniforms;let Ie=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Ue.uniform),xu(E,Se),G.needsLights=Up(E),G.lightsStateVersion=Re,G.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.sunLights.value=W.state.sun,Ie.sunLightShadows.value=W.state.sunShadow,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.sunShadowMatrix.value=W.state.sunShadowMatrix,Ie.sunShadowCascade.value=W.state.sunShadowCascade,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=at,G.uniformsList=null,at}function _u(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Qs.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function xu(E,O){let $=X.get(E);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Lp(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let $=0,G=E.length;$<G;$++){let W=E[$];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Dp(E,O,$,G,W){O.isScene!==!0&&(O=Be),Z.resetTextureUnits();let Ee=O.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Se=Q===null?I.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ot.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=ue.get(G.envMap||Re,Pe),Qe=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,at=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color,St=zn;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(St=I.toneMapping);let yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Yt=yt!==void 0?yt.length:0,Ce=X.get(G),Qt=w.state.lights;if(ae===!0&&(ce===!0||E!==V)){let Mt=E===V&&G.id===q;Ue.setState(G,E,Mt)}let ct=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Qt.state.version||Ce.outputColorSpace!==Se||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==De||G.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ue.numPlanes||Ce.numIntersection!==Ue.numIntersection)||Ce.vertexAlphas!==Qe||Ce.vertexTangents!==at||Ce.morphTargets!==Ie||Ce.morphNormals!==dt||Ce.morphColors!==Dt||Ce.toneMapping!==St||Ce.morphTargetsCount!==Yt||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ce.__version=G.version);let bn=Ce.currentProgram;ct===!0&&(bn=Ia(G,O,W),U&&G.isNodeMaterial&&U.onUpdateProgram(G,bn,Ce));let Xn=!1,xi=!1,ds=!1,xt=bn.getUniforms(),Pt=Ce.uniforms;if(M.useProgram(bn.program)&&(Xn=!0,xi=!0,ds=!0),G.id!==q&&(q=G.id,xi=!0),Ce.needsLights){let Mt=Lp(w.state.lightProbeGridArray,W);Ce.lightProbeGrid!==Mt&&(Ce.lightProbeGrid=Mt,xi=!0)}if(Xn||V!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(N,"projectionMatrix",E.projectionMatrix),xt.setValue(N,"viewMatrix",E.matrixWorldInverse);let yi=xt.map.cameraPosition;yi!==void 0&&yi.setValue(N,pe.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,xi=!0,ds=!0)}if(Ce.needsLights&&(Qt.state.sunShadowMap.length>0&&xt.setValue(N,"sunShadowMap",Qt.state.sunShadowMap,Z),Qt.state.directionalShadowMap.length>0&&xt.setValue(N,"directionalShadowMap",Qt.state.directionalShadowMap,Z),Qt.state.spotShadowMap.length>0&&xt.setValue(N,"spotShadowMap",Qt.state.spotShadowMap,Z),Qt.state.pointShadowMap.length>0&&xt.setValue(N,"pointShadowMap",Qt.state.pointShadowMap,Z)),W.isSkinnedMesh){xt.setOptional(N,W,"bindMatrix"),xt.setOptional(N,W,"bindMatrixInverse");let Mt=W.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(N,"boneTexture",Mt.boneTexture,Z))}W.isBatchedMesh&&(xt.setOptional(N,W,"batchingTexture"),xt.setValue(N,"batchingTexture",W._matricesTexture,Z),xt.setOptional(N,W,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",W._indirectTexture,Z),xt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",W._colorsTexture,Z));let vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&B.update(W,$,bn),(xi||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,xt.setValue(N,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Qv()),xi){if(xt.setValue(N,"toneMappingExposure",I.toneMappingExposure),Ce.needsLights&&Np(Pt,ds),Ee&&G.fog===!0&&Ne.refreshFogUniforms(Pt,Ee),Ne.refreshMaterialUniforms(Pt,G,ee,Y,w.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.lightProbeGrid){let Mt=Ce.lightProbeGrid;Pt.probesSH.value=Mt.texture,Pt.probesMin.value.copy(Mt.boundingBox.min),Pt.probesMax.value.copy(Mt.boundingBox.max),Pt.probesResolution.value.copy(Mt.resolution)}Qs.upload(N,_u(Ce),Pt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qs.upload(N,_u(Ce),Pt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(N,"center",W.center),xt.setValue(N,"modelViewMatrix",W.modelViewMatrix),xt.setValue(N,"normalMatrix",W.normalMatrix),xt.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Mt=G.uniformsGroups;for(let yi=0,fs=Mt.length;yi<fs;yi++){let yu=Mt[yi];se.update(yu,bn),se.bind(yu,bn)}}return bn}function Np(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Up(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,O,$){let G=X.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=O,X.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let $=X.get(E);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,$=0){Q=E,F=O,k=$;let G=null,W=!1,Ee=!1;if(E){let Se=X.get(E);if(Se.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(N.FRAMEBUFFER,Se.__webglFramebuffer),j.copy(E.viewport),Ae.copy(E.scissor),de=E.scissorTest,M.viewport(j),M.scissor(Ae),M.setScissorTest(de),q=-1;return}else if(Se.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(Se.__hasExternalTextures)Z.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Qe=E.depthTexture;if(Se.__boundDepthTexture!==Qe){if(Qe!==null&&X.has(Qe)&&(E.width!==Qe.image.width||E.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);let De=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[O])?G=De[O][$]:G=De[O],W=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?G=X.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[$]:G=De,j.copy(E.viewport),Ae.copy(E.scissor),de=E.scissorTest}else j.copy(we).multiplyScalar(ee).floor(),Ae.copy(Xe).multiplyScalar(ee).floor(),de=pt;if($!==0&&(G=z),M.bindFramebuffer(N.FRAMEBUFFER,G)&&M.drawBuffers(E,G),M.viewport(j),M.scissor(Ae),M.setScissorTest(de),W){let Se=X.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,$)}else if(Ee){let Se=O;for(let Pe=0;Pe<E.textures.length;Pe++){let De=X.get(E.textures[Pe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pe,De.__webglTexture,$,Se)}}else if(E!==null&&$!==0){let Se=X.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,$)}q=-1};function vu(E){let O=X.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=R.textureFormatReadable(E.format),O.__typeReadable=R.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,$,G,W,Ee,Re,Se=0){if(!(E&&E.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){M.bindFramebuffer(N.FRAMEBUFFER,Pe);try{let De=E.textures[Se],Qe=De.format,at=De.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se);let Ie=vu(De);if(Ie.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&$>=0&&$<=E.height-W&&N.readPixels(O,$,G,W,ye.convert(Qe),ye.convert(at),Ee)}finally{let De=Q!==null?X.get(Q).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,O,$,G,W,Ee,Re,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(O>=0&&O<=E.width-G&&$>=0&&$<=E.height-W){M.bindFramebuffer(N.FRAMEBUFFER,Pe);let De=E.textures[Se],Qe=De.format,at=De.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se);let Ie=vu(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.bufferData(N.PIXEL_PACK_BUFFER,Ee.byteLength,N.STREAM_READ),N.readPixels(O,$,G,W,ye.convert(Qe),ye.convert(at),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Dt=Q!==null?X.get(Q).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,Dt);let St=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Od(N,St,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ee),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(dt),N.deleteSync(St),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,$=0){let G=Math.pow(2,-$),W=Math.floor(E.image.width*G),Ee=Math.floor(E.image.height*G),Re=O!==null?O.x:0,Se=O!==null?O.y:0;Z.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Re,Se,W,Ee),M.unbindTexture()},this.copyTextureToTexture=function(E,O,$=null,G=null,W=0,Ee=0){let Re,Se,Pe,De,Qe,at,Ie,dt,Dt,St=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if($!==null)Re=$.max.x-$.min.x,Se=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,De=$.min.x,Qe=$.min.y,at=$.isBox3?$.min.z:0;else{let Pt=Math.pow(2,-W);Re=Math.floor(St.width*Pt),Se=Math.floor(St.height*Pt),E.isDataArrayTexture?Pe=St.depth:E.isData3DTexture?Pe=Math.floor(St.depth*Pt):Pe=1,De=0,Qe=0,at=0}G!==null?(Ie=G.x,dt=G.y,Dt=G.z):(Ie=0,dt=0,Dt=0);let yt=ye.convert(O.format),Yt=ye.convert(O.type),Ce;O.isData3DTexture?(Z.setTexture3D(O,0),Ce=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),Ce=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),Ce=N.TEXTURE_2D),M.activeTexture(N.TEXTURE0),M.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let Qt=M.getParameter(N.UNPACK_ROW_LENGTH),ct=M.getParameter(N.UNPACK_IMAGE_HEIGHT),bn=M.getParameter(N.UNPACK_SKIP_PIXELS),Xn=M.getParameter(N.UNPACK_SKIP_ROWS),xi=M.getParameter(N.UNPACK_SKIP_IMAGES);M.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),M.pixelStorei(N.UNPACK_SKIP_PIXELS,De),M.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),M.pixelStorei(N.UNPACK_SKIP_IMAGES,at);let ds=E.isDataArrayTexture||E.isData3DTexture,xt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Pt=X.get(E),vi=X.get(O),Mt=X.get(Pt.__renderTarget),yi=X.get(vi.__renderTarget);M.bindFramebuffer(N.READ_FRAMEBUFFER,Mt.__webglFramebuffer),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let fs=0;fs<Pe;fs++)ds&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(E).__webglTexture,W,at+fs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(O).__webglTexture,Ee,Dt+fs)),N.blitFramebuffer(De,Qe,Re,Se,Ie,dt,Re,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||X.has(E)){let Pt=X.get(E),vi=X.get(O);M.bindFramebuffer(N.READ_FRAMEBUFFER,D),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,P);for(let Mt=0;Mt<Pe;Mt++)ds?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,W,at+Mt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,W),xt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vi.__webglTexture,Ee,Dt+Mt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vi.__webglTexture,Ee),W!==0?N.blitFramebuffer(De,Qe,Re,Se,Ie,dt,Re,Se,N.COLOR_BUFFER_BIT,N.NEAREST):xt?N.copyTexSubImage3D(Ce,Ee,Ie,dt,Dt+Mt,De,Qe,Re,Se):N.copyTexSubImage2D(Ce,Ee,Ie,dt,De,Qe,Re,Se);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Ce,Ee,Ie,dt,Dt,Re,Se,Pe,yt,Yt,St.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,Ee,Ie,dt,Dt,Re,Se,Pe,yt,St.data):N.texSubImage3D(Ce,Ee,Ie,dt,Dt,Re,Se,Pe,yt,Yt,St):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ee,Ie,dt,Re,Se,yt,Yt,St.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ee,Ie,dt,St.width,St.height,yt,St.data):N.texSubImage2D(N.TEXTURE_2D,Ee,Ie,dt,Re,Se,yt,Yt,St);M.pixelStorei(N.UNPACK_ROW_LENGTH,Qt),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),M.pixelStorei(N.UNPACK_SKIP_PIXELS,bn),M.pixelStorei(N.UNPACK_SKIP_ROWS,Xn),M.pixelStorei(N.UNPACK_SKIP_IMAGES,xi),Ee===0&&O.generateMipmaps&&N.generateMipmap(Ce),M.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){F=0,k=0,Q=null,M.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Mf={type:"change"},Vh={type:"start"},Ef={type:"end"},Ol=new Ai,Sf=new nn,ey=Math.cos(70*ha.DEG2RAD),zt=new A,hn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6,Bl=class extends Qr{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:Bn.ROTATE,TWO:Bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new mt,this._lastTargetPosition=new A,this._quat=new mt().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qs,this._sphericalDelta=new qs,this._scale=1,this._panOffset=new A,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new A,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ny.bind(this),this._onPointerDown=ty.bind(this),this._onPointerUp=iy.bind(this),this._onContextMenu=hy.bind(this),this._onMouseWheel=ay.bind(this),this._onKeyDown=oy.bind(this),this._onTouchStart=ly.bind(this),this._onTouchMove=cy.bind(this),this._onMouseDown=sy.bind(this),this._onMouseMove=ry.bind(this),this._interceptControlDown=uy.bind(this),this._interceptControlUp=dy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=_t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mf),this.update(),this.state=_t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=zt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ol.origin.copy(this.object.position),Ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ol.direction))<ey?this.object.lookAt(this.target):(Sf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ol.intersectPlane(Sf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(Mf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;zt.copy(i).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ty(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ny(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function iy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ef),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sy(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=_t.DOLLY;break;case wn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}break;case wn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Vh)}function ry(s){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ay(s){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(s.preventDefault(),this.dispatchEvent(Vh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ef))}function oy(s){this.enabled!==!1&&this._handleKeyDown(s)}function ly(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Bn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=_t.TOUCH_ROTATE;break;case Bn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Bn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=_t.TOUCH_DOLLY_PAN;break;case Bn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Vh)}function cy(s){switch(this._trackPointer(s),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=_t.NONE}}function hy(s){this.enabled!==!1&&s.preventDefault()}function uy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gh=new nn,zl=new es,tr=new re,Wh=new A,kl=class extends Bl{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:wn.PAN,MIDDLE:wn.DOLLY,RIGHT:wn.ROTATE},this.touches={ONE:Bn.PAN,TWO:Bn.DOLLY_ROTATE},this._panWorldStart=new A}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Gh.setFromNormalAndCoplanarPoint(this.object.up,this.target);let n=this.domElement.getBoundingClientRect();tr.x=(e.clientX-n.left)/n.width*2-1,tr.y=-((e.clientY-n.top)/n.height)*2+1,zl.setFromCamera(tr,this.object),zl.ray.intersectPlane(Gh,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}let n=this.domElement.getBoundingClientRect();tr.x=(e.clientX-n.left)/n.width*2-1,tr.y=-((e.clientY-n.top)/n.height)*2+1,zl.setFromCamera(tr,this.object),zl.ray.intersectPlane(Gh,Wh)&&(Wh.sub(this._panWorldStart),this._panOffset.copy(Wh).negate(),this.update())}};var Vn=class extends It{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new re(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},nr=new A,wf=new Je,Tf=new Je,Af=new A,Cf=new A,Hl=class{constructor(e={}){let t=this,n,i,r,a,o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),wf.copy(_.matrixWorldInverse),Tf.multiplyMatrices(_.projectionMatrix,wf),h(m,m,_),this.sortObjects&&f(m)},this.setSize=function(m,_){n=m,i=_,r=n/2,a=i/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)c(m.children[_])}function h(m,_,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){nr.setFromMatrixPosition(m.matrixWorld),nr.applyMatrix4(Tf);let p=nr.z>=-1&&nr.z<=1&&m.layers.test(g.layers)===!0,b=m.element;if(b.style.display=p===!0?"":"none",p===!0){m.onBeforeRender(t,_,g);let x=100*m.center.x,S=100*m.center.y;b.style.transformOrigin=`${x}% ${S}%`;let w=-m.rotation2D,C=nr.x*r+r,v=-nr.y*a+a;b.style.transform=`translate(${-x}%, ${-S}%) translate(${C}px, ${v}px) rotate(${w}rad)`,b.parentNode!==l&&l.appendChild(b),m.onAfterRender(t,_,g)}let y={distanceToCameraSquared:d(g,m)};o.objects.set(m,y)}for(let p=0,b=m.children.length;p<b;p++)h(m.children[p],_,g)}function d(m,_){return Af.setFromMatrixPosition(m.matrixWorld),Cf.setFromMatrixPosition(_.matrixWorld),Af.distanceToSquared(Cf)}function u(m){let _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(m){let _=u(m).sort(function(p,b){if(p.renderOrder!==b.renderOrder)return b.renderOrder-p.renderOrder;let y=o.objects.get(p).distanceToCameraSquared,x=o.objects.get(b).distanceToCameraSquared;return y-x}),g=_.length;for(let p=0,b=_.length;p<b;p++)_[p].element.style.zIndex=g-p}}};function Xh(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new gt,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Rf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][u]);let m=Rf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Rf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Rt(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let _=h.getComponent(u,m);o.setComponent(u+d,m,_)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}var Vl=new Je,ma=new mt,qh=new Sn,Gl=new A,ir=new A,Wl=new me,Lt={};function Pf(){return Lt.solid=new On({vertexColors:!0,flatShading:!0}),Lt.glow=new sn({vertexColors:!0,toneMapped:!1}),Lt.glass=new On({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.55,depthWrite:!1}),Lt}function fy(s){let e=s.index?s.toNonIndexed():s;e===s&&(e=s.clone());for(let t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&e.deleteAttribute(t);return e.attributes.normal||e.computeVertexNormals(),e}function py(s,e){Wl.set(e);let t=s.attributes.position.count,n=new Float32Array(t*3);for(let i=0;i<t;i++)n[i*3]=Wl.r,n[i*3+1]=Wl.g,n[i*3+2]=Wl.b;s.setAttribute("color",new Rt(n,3))}var lt=class{constructor(){this.parts={solid:[],glow:[],glass:[]}}add(e,t,n={}){let i=fy(e),r=n.p||[0,0,0];if(Gl.set(r[0],r[1],r[2]),n.q)ma.copy(n.q);else{let o=n.r||[0,0,0];qh.set(o[0],o[1],o[2],n.order||"XYZ"),ma.setFromEuler(qh)}let a=n.s===void 0?1:n.s;return typeof a=="number"?ir.set(a,a,a):ir.set(a[0],a[1],a[2]),Vl.compose(Gl,ma,ir),i.applyMatrix4(Vl),py(i,t),this.parts[n.layer||"solid"].push(i),this}box(e,t,n,i,r){return this.add(new Zn(e,t,n),i,r)}cyl(e,t,n,i,r,a){return this.add(new fi(e,t,n,i),r,a)}sphere(e,t,n,i){return this.add(new $r(e,t),n,i)}cone(e,t,n,i,r){return this.add(new Or(e,t,n),i,r)}roof(e,t,n,i,r={}){let a=new Pi;a.moveTo(-t/2,0),a.lineTo(t/2,0),a.lineTo(0,n),a.closePath();let o=new Qi(a,{depth:e,bevelEnabled:!1});return o.translate(0,0,-e/2),o.rotateY(Math.PI/2),this.add(o,i,r)}merge(e,t={}){let n=t.p||[0,0,0],i=t.r||[0,0,0],r=t.s===void 0?1:t.s;Gl.set(n[0],n[1],n[2]),ma.setFromEuler(qh.set(i[0],i[1],i[2])),typeof r=="number"?ir.set(r,r,r):ir.set(r[0],r[1],r[2]),Vl.compose(Gl,ma,ir);for(let a of Object.keys(this.parts))for(let o of e.parts[a]){let l=o.clone();l.applyMatrix4(Vl),this.parts[a].push(l)}return this}geometry(e="solid"){let t=this.parts[e];return t.length?Xh(t,!1):null}build({castShadow:e=!0,receiveShadow:t=!1}={}){let n=new vt,i=this.geometry("solid");if(i){let o=new tt(i,Lt.solid);o.castShadow=e,o.receiveShadow=t,n.add(o)}let r=this.geometry("glow");r&&n.add(new tt(r,Lt.glow));let a=this.geometry("glass");if(a){let o=new tt(a,Lt.glass);o.renderOrder=2,n.add(o)}return n}};function If(s,{castShadow:e=!0,receiveShadow:t=!0}={}){let n=new Map;for(let r of s)r.updateMatrixWorld(!0),r.traverse(a=>{if(!a.isMesh||a.isInstancedMesh)return;let o=a.geometry.clone();o.applyMatrix4(a.matrixWorld),n.has(a.material)||n.set(a.material,[]),n.get(a.material).push(o)});let i=new vt;for(let[r,a]of n){let o=new tt(Xh(a,!1),r);o.castShadow=e&&r===Lt.solid,o.receiveShadow=t,r===Lt.glass&&(o.renderOrder=2),i.add(o),a.forEach(l=>l.dispose())}return i}function ei(s,e){let t=new me(s),n={};return t.getHSL(n),t.setHSL(n.h,n.s,ha.clamp(n.l+e,0,1)),"#"+t.getHexString()}var ti={green:"#6DB843",greenDark:"#4E9A2E",dark:"#1D1D1B",gray:"#8A8C8E"},ga={metro:{vmax:20,accel:7,dwell:2.2},tram:{vmax:8,accel:3,dwell:2.6},bus:{vmax:9,accel:3.5,dwell:1.8},lrt:{vmax:11,accel:4,dwell:2.4},feeder:{vmax:6.5,accel:3,dwell:1.5},cable:{v:4.2,stationFactor:.22}},_a={metro:{vmax:42,accel:16,dwell:1.1},tram:{vmax:18,accel:8,dwell:1.1},bus:{vmax:22,accel:9,dwell:1},lrt:{vmax:24,accel:10,dwell:1.1},cable:{v:9,stationFactor:.28},walk:2.2},$h=2048;function Kt(s){let e=s>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var _n=(s,e,t)=>s<e?e:s>t?t:s,sr=(s,e,t)=>s+(e-s)*t;function Ct(s,e,t){let n=_n((t-s)/(e-s),0,1);return n*n*(3-2*n)}var xa=class{constructor(e=1){let t=Kt(e),n=new Uint8Array(256);for(let i=0;i<256;i++)n[i]=i;for(let i=255;i>0;i--){let r=Math.floor(t()*(i+1)),a=n[i];n[i]=n[r],n[r]=a}this.perm=new Uint8Array(512);for(let i=0;i<512;i++)this.perm[i]=n[i&255]}grad(e,t,n){switch(e&7){case 0:return t+n;case 1:return-t+n;case 2:return t-n;case 3:return-t-n;case 4:return t;case 5:return-t;case 6:return n;default:return-n}}noise(e,t){let n=Math.floor(e)&255,i=Math.floor(t)&255,r=e-Math.floor(e),a=t-Math.floor(t),o=r*r*r*(r*(r*6-15)+10),l=a*a*a*(a*(a*6-15)+10),c=this.perm,h=c[c[n]+i],d=c[c[n]+i+1],u=c[c[n+1]+i],f=c[c[n+1]+i+1],m=sr(this.grad(h,r,a),this.grad(u,r-1,a),o),_=sr(this.grad(d,r,a-1),this.grad(f,r-1,a-1),o);return sr(m,_,l)}fbm(e,t,n=4){let i=.5,r=1,a=0,o=0;for(let l=0;l<n;l++)a+=i*this.noise(e*r,t*r),o+=i,i*=.5,r*=2.03;return a/o}};var Lf=6.245,Df=-75.575,Nf=110660,Uf=110574;function un(s,e){return{x:(e-Df)*Nf/10,z:-(s-Lf)*Uf/10}}function Xl(s,e){return{lat:Lf-e*10/Uf,lon:Df+s*10/Nf}}var ql=s=>(s-1400)/10*1.7;var _y=[[6.07,-75.648],[6.1,-75.642],[6.125,-75.635],[6.14,-75.6315],[6.152,-75.628],[6.1565,-75.6185],[6.162,-75.6068],[6.1725,-75.5975],[6.185,-75.5875],[6.1935,-75.584],[6.205,-75.5815],[6.213,-75.58],[6.225,-75.5785],[6.235,-75.578],[6.245,-75.5775],[6.253,-75.5745],[6.261,-75.5715],[6.27,-75.568],[6.276,-75.5665],[6.285,-75.5625],[6.295,-75.5575],[6.305,-75.5545],[6.316,-75.552],[6.326,-75.549],[6.337,-75.541],[6.35,-75.532],[6.37,-75.52],[6.4,-75.502],[6.44,-75.47],[6.48,-75.44]],va=_y.map(([s,e])=>un(s,e)),ls=[[6.05,1760],[6.1,1660],[6.125,1610],[6.15,1572],[6.19,1522],[6.23,1498],[6.26,1480],[6.3,1458],[6.34,1436],[6.4,1410],[6.5,1385]];function xy(s){if(s<=ls[0][0])return ls[0][1];for(let e=1;e<ls.length;e++){let[t,n]=ls[e],[i,r]=ls[e-1];if(s<=t)return sr(r,n,(s-i)/(t-i))}return ls[ls.length-1][1]}function cs(s,e){let t=1/0,n=1;for(let i=0;i<va.length-1;i++){let r=va[i],a=va[i+1],o=a.x-r.x,l=a.z-r.z,c=o*o+l*l,h=((s-r.x)*o+(e-r.z)*l)/c;h=_n(h,0,1);let d=r.x+o*h-s,u=r.z+l*h-e,f=d*d+u*u;f<t&&(t=f,n=o*(e-r.z)-l*(s-r.x)>0?1:-1)}return Math.sqrt(t)*10*n}var vy=[[6.33775,-75.5439,1438,700],[6.3302,-75.5536,1445,600],[6.31544,-75.55519,1452,600],[6.30045,-75.55826,1460,500],[6.29047,-75.56478,1466,600],[6.27768,-75.56947,1472,600],[6.26915,-75.56588,1476,500],[6.26362,-75.56352,1480,500],[6.25698,-75.56627,1485,500],[6.25018,-75.56839,1490,500],[6.2472,-75.5699,1492,500],[6.24253,-75.5715,1494,500],[6.23788,-75.57287,1496,500],[6.22967,-75.57581,1500,600],[6.2125,-75.5781,1510,600],[6.1937,-75.5822,1522,600],[6.1861,-75.5856,1530,600],[6.1734,-75.5958,1545,600],[6.1628,-75.6053,1552,600],[6.1584,-75.6174,1560,600],[6.1525,-75.6263,1575,700],[6.2489,-75.5763,1492,500],[6.2533,-75.5831,1497,600],[6.2528,-75.588,1502,600],[6.2587,-75.5976,1515,600],[6.2583,-75.6047,1535,500],[6.2561,-75.6134,1570,500],[6.259,-75.62,1660,450],[6.2655,-75.6255,1760,450],[6.273,-75.631,1850,500],[6.2984,-75.5525,1560,400],[6.2966,-75.5465,1700,400],[6.2935,-75.541,1860,450],[6.2885,-75.522,2260,900],[6.2812,-75.5,2440,900],[6.2986,-75.5665,1540,400],[6.2958,-75.5745,1670,400],[6.2929,-75.5822,1790,450],[6.2472,-75.5642,1500,400],[6.2469,-75.5615,1508,400],[6.2463,-75.5586,1520,400],[6.245,-75.5552,1538,400],[6.2433,-75.5513,1560,400],[6.2425,-75.548,1580,400],[6.242,-75.5445,1600,400],[6.2415,-75.5405,1622,450],[6.2445,-75.5345,1740,400],[6.247,-75.529,1860,450],[6.2472,-75.5478,1640,380],[6.2505,-75.545,1730,400],[6.264,-75.5552,1510,450],[6.2678,-75.5556,1520,450],[6.271,-75.5558,1528,450],[6.275,-75.556,1538,450],[6.2788,-75.5558,1545,450],[6.2815,-75.5578,1538,450],[6.254,-75.562,1492,450],[6.2425,-75.5655,1500,450],[6.2355,-75.568,1505,450],[6.2295,-75.5705,1502,450],[6.2318,-75.583,1502,500],[6.2325,-75.592,1510,500],[6.2332,-75.601,1525,500],[6.2318,-75.61,1545,500],[6.2795,-75.5755,1480,500],[6.2802,-75.5805,1495,500],[6.2788,-75.585,1510,450],[6.2762,-75.5888,1520,450],[6.2728,-75.5918,1530,450],[6.2672,-75.594,1525,450],[6.2626,-75.5958,1520,450],[6.2528,-75.5988,1520,450],[6.247,-75.5995,1522,450],[6.242,-75.5998,1525,450],[6.2375,-75.6002,1527,450],[6.2275,-75.6005,1535,450],[6.2205,-75.6,1545,450],[6.214,-75.599,1545,450],[6.209,-75.595,1535,450],[6.204,-75.5905,1528,450],[6.1985,-75.587,1524,450],[6.2087,-75.5675,1560,500],[6.2,-75.556,1720,700],[6.215,-75.552,1700,600],[6.265,-75.581,1628,380],[6.2362,-75.5795,1580,260],[6.256,-75.526,2120,650],[6.298,-75.593,2030,500],[6.2345,-75.615,1830,350],[6.233,-75.562,1630,280],[6.229,-75.544,1760,420],[6.367,-75.578,2850,1600],[6.205,-75.505,2520,2200],[6.25,-75.665,2900,2600]],Yh=vy.map(([s,e,t,n])=>{let i=un(s,e);return{x:i.x,z:i.z,e:t,r2:(n/10)**2,lim2:(n*3/10)**2,delta:0}}),Ff=new xa(20251030),Of=new xa(7);function Bf(s,e){let{lat:t}=Xl(s,e),n=cs(s,e),i=xy(t),r;if(n>=0)r=430*Ct(700,4600,n)+680*Ct(3500,9500,n);else{let o=Ct(6.27,6.33,t),l=1-Ct(6.17,6.22,t),c=sr(1,.6,Math.max(o,l*.8)),h=-n/c;r=260*Ct(1400,5200,h)+1300*Ct(4200,11500,h)}let a=Math.abs(n)<120?-4*(1-Math.abs(n)/120):0;return i+r+a}for(let s of Yh)s.delta=s.e-Bf(s.x,s.z);function $l(s,e){let t=Bf(s,e),n=0,i=0;for(let a=0;a<Yh.length;a++){let o=Yh[a],l=s-o.x,c=e-o.z,h=l*l+c*c;if(h>o.lim2)continue;let d=Math.exp(-h/o.r2);n+=d,i+=d*o.delta}t+=i/(n+.06);let r=Ct(1560,2350,t);return t+=Ff.fbm(s/55,e/55,4)*(5+75*r),t+=Of.fbm(s/420,e/420,3)*260*Ct(1750,2400,t),t}function ya(s,e,t){let{lat:n,lon:i}=Xl(s,e),r=1-Ct(1880,2060,t);r*=Ct(6.128,6.152,n)*(1-Ct(6.352,6.372,n)),r*=Ct(-75.652,-75.636,i)*(1-Ct(-75.527,-75.512,i));let a=Of.fbm(s/70+13.1,e/70-4.7,3);return r*=_n(.78+a*1.4,0,1),r}function jh(s,e,t=1){return Ff.noise(s/t+91.7,e/t-33.1)}var xn=s=>new me(s),Rn={city:xn("#d9cdb8"),city2:xn("#cbbfa9"),brick:xn("#c98a5e"),brick2:xn("#b9744b"),grass:xn("#93c65a"),grass2:xn("#7fb84e"),forest:xn("#4f9a3c"),forest2:xn("#3f8435"),high:xn("#6f9a48"),paramo:xn("#9aa56a"),rock:xn("#9b8f7c"),sand:xn("#e3d6b0"),park:xn("#71b84a")},yy=[[6.265,-75.581,42],[6.2362,-75.5795,26],[6.2712,-75.5634,16],[6.2738,-75.5672,10],[6.2567,-75.5903,16],[6.256,-75.526,55],[6.298,-75.593,38],[6.2345,-75.615,30],[6.233,-75.562,26],[6.229,-75.544,32],[6.2197,-75.5905,14]].map(([s,e,t])=>({...un(s,e),r:t}));function ba(s,e){let t=0;for(let n of yy){let i=Math.hypot(s-n.x,e-n.z);t=Math.max(t,1-Ct(n.r*.7,n.r,i))}return t}function by(s,e,t,n,i){let r=ya(s,e,t)*(1-ba(s,e)),a=jh(s,e,9),o=jh(s+500,e,25),l=Rn.grass.clone().lerp(Rn.grass2,_n(.5+a,0,1)),c=Rn.forest.clone().lerp(Rn.forest2,_n(.5+o*1.5,0,1)),h=l.lerp(c,Ct(1580,1950,t));h.lerp(Rn.high,Ct(2250,2750,t)*.8),h.lerp(Rn.paramo,Ct(2750,3050,t)),n>1.6&&h.lerp(Rn.rock,Ct(1.6,2.6,n)*.6);let d=Ct(1540,1640,t),u=Rn.city.clone().lerp(Rn.city2,_n(.5+a,0,1)),f=Rn.brick.clone().lerp(Rn.brick2,_n(.5+a,0,1));u.lerp(f,d);let m=_n(r*1.25-.1+a*.25,0,1);i.copy(h).lerp(u,m);let _=Math.abs(cs(s,e));return _<90&&i.lerp(Rn.sand,(1-_/90)*.6),i}var Yl=class{constructor(){this.group=new vt}buildCore(e,t){let{x0:n,x1:i,z0:r,z1:a}=e,o=Math.ceil((i-n)/t),l=Math.ceil((a-r)/t);this.x0=n,this.z0=r,this.cell=t,this.nx=o,this.nz=l;let c=new Float32Array((o+1)*(l+1)),h=new Float32Array((o+1)*(l+1));for(let u=0;u<=l;u++)for(let f=0;f<=o;f++){let m=n+f*t,_=r+u*t,g=$l(m,_);h[u*(o+1)+f]=g,c[u*(o+1)+f]=ql(g)}this.H=c,this.E=h;let d=this._mesh(o,l,t,n,r,(u,f)=>c[f*(o+1)+u],(u,f)=>h[f*(o+1)+u]);return d.receiveShadow=!0,this.core=d,this.group.add(d),d}buildRing(e,t){let{x0:n,x1:i,z0:r,z1:a}=e,o=Math.ceil((i-n)/t),l=Math.ceil((a-r)/t),c=this.x0+t*.5,h=this.z0+t*.5,d=this.x0+this.nx*this.cell-t*.5,u=this.z0+this.nz*this.cell-t*.5,f=new Float32Array((o+1)*(l+1)),m=new Float32Array((o+1)*(l+1));for(let p=0;p<=l;p++)for(let b=0;b<=o;b++){let y=n+b*t,x=r+p*t,S=$l(y,x),w=y>this.x0&&y<this.x0+this.nx*this.cell&&x>this.z0&&x<this.z0+this.nz*this.cell;m[p*(o+1)+b]=S,f[p*(o+1)+b]=ql(S)-(w?6:0)}let _=(p,b)=>{let y=n+p*t,x=r+b*t;return y>=c&&y+t<=d&&x>=h&&x+t<=u},g=this._mesh(o,l,t,n,r,(p,b)=>f[b*(o+1)+p],(p,b)=>m[b*(o+1)+p],_);return g.receiveShadow=!1,this.group.add(g),g}_mesh(e,t,n,i,r,a,o,l){let c=[],h=[],d=new me,u=(_,g,p,b,y,x,S,w,C,v)=>{c.push(_,g,p,b,y,x,S,w,C);let T=(_+b+S)/3,I=(p+x+C)/3,L=Math.max(g,y,w),U=Math.min(g,y,w),z=(L-U)/n;by(T,I,v,z,d);for(let D=0;D<3;D++)h.push(d.r,d.g,d.b)};for(let _=0;_<t;_++)for(let g=0;g<e;g++){if(l&&l(g,_))continue;let p=i+g*n,b=p+n,y=r+_*n,x=y+n,S=a(g,_),w=a(g+1,_),C=a(g,_+1),v=a(g+1,_+1),T=(o(g,_)+o(g+1,_)+o(g,_+1)+o(g+1,_+1))/4;(g+_&1)===0?(u(p,S,y,p,C,x,b,w,y,T),u(b,w,y,p,C,x,b,v,x,T)):(u(p,S,y,b,v,x,b,w,y,T),u(p,S,y,p,C,x,b,v,x,T))}let f=new gt;f.setAttribute("position",new Ke(c,3)),f.setAttribute("color",new Ke(h,3)),f.computeVertexNormals();let m=new On({vertexColors:!0,flatShading:!0});return new tt(f,m)}heightAt(e,t){let n=(e-this.x0)/this.cell,i=(t-this.z0)/this.cell,r=Math.floor(n),a=Math.floor(i);if(r<0||a<0||r>=this.nx||a>=this.nz)return ql($l(e,t));let o=n-r,l=i-a,c=this.nx+1,h=this.H,d=h[a*c+r],u=h[a*c+r+1],f=h[(a+1)*c+r],m=h[(a+1)*c+r+1];return(r+a&1)===0?o+l<=1?d+(u-d)*o+(f-d)*l:m+(f-m)*(1-o)+(u-m)*(1-l):o>=l?d+(u-d)*o+(m-u)*l:d+(f-d)*l+(m-f)*o}elevationAt(e,t){let n=(e-this.x0)/this.cell,i=(t-this.z0)/this.cell,r=_n(Math.round(n),0,this.nx),a=_n(Math.round(i),0,this.nz);return this.E[a*(this.nx+1)+r]}inBounds(e,t,n=0){return e>this.x0+n&&e<this.x0+this.nx*this.cell-n&&t>this.z0+n&&t<this.z0+this.nz*this.cell-n}};var K=(s,e,t,n={})=>({key:s,lat:e,lon:t,...n}),Gt=(s,e)=>({wp:!0,lat:s,lon:e}),ki={metro:{label:"Metro",sub:"Tren urbano"},cable:{label:"Metrocable",sub:"Cable a\xE9reo"},tram:{label:"Tranv\xEDa",sub:"Tranv\xEDa de Ayacucho"},bus:{label:"Metropl\xFAs",sub:"Buses BRT y padrones"},lrt:{label:"Metro de la 80",sub:"En construcci\xF3n"},feeder:{label:"Rutas alimentadoras",sub:"Rutas integradas"}},rr=[{id:"A",mode:"metro",vehicle:"train",color:"#0E5AA7",name:"L\xEDnea A",title:"Niqu\xEDa - La Estrella",facts:{tipo:"F\xE9rreo",longitud:"25,6 km",estaciones:"21 (8 elevadas)",tiempo:"42 min (1 trayecto)",velocidad:"40 km/h (m\xE1x. 80 km/h)",capacidadVehiculo:"300 usuarios por coche",flota:"80 trenes de 3 coches (240 coches) compartidos con la L\xEDnea B",frecuencia:"2:50 min (hora pico)",capacidadHora:"48.653 pasajeros/hora/sentido",inicio:"30 de noviembre de 1995",transferencias:"Acevedo, San Antonio, Hospital, Industriales"},minutes:42,headway:2.83,sim:{count:16},route:[K("niquia",6.33775,-75.5439),K("bello",6.3302,-75.5536),K("madera",6.31544,-75.55519),K("acevedo",6.30045,-75.55826),K("tricentenario",6.29047,-75.56478),K("caribe",6.27768,-75.56947,{elev:1}),Gt(6.2735,-75.5678),K("universidad",6.26915,-75.56588,{elev:1}),K("hospital",6.26362,-75.56352,{elev:1}),K("prado",6.25698,-75.56627,{elev:1}),K("parque_berrio",6.25018,-75.56839,{elev:1}),K("san_antonio",6.2472,-75.5699,{elev:1}),K("alpujarra",6.24253,-75.5715,{elev:1}),K("exposiciones",6.23788,-75.57287,{elev:1}),K("industriales",6.22967,-75.57581),K("poblado",6.2125,-75.5781),K("aguacatala",6.1937,-75.5822),K("ayura",6.1861,-75.5856),K("envigado",6.1734,-75.5958),K("itagui",6.1628,-75.6053),K("sabaneta",6.1584,-75.6174),K("la_estrella",6.1525,-75.6263)]},{id:"B",mode:"metro",vehicle:"train",color:"#F28C1E",name:"L\xEDnea B",title:"San Antonio - San Javier",facts:{tipo:"F\xE9rreo",longitud:"5,5 km",estaciones:"6 (5 elevadas)",tiempo:"10,5 min (1 trayecto)",velocidad:"40 km/h (m\xE1x. 80 km/h)",capacidadVehiculo:"300 usuarios por coche",flota:"80 trenes de 3 coches compartidos con la L\xEDnea A",frecuencia:"3:50 min (hora pico)",capacidadHora:"16.231 pasajeros/hora/sentido",inicio:"29 de febrero de 1996",transferencias:"San Antonio, San Javier"},minutes:10.5,headway:3.83,sim:{count:4},route:[K("san_antonio",6.24738,-75.57065,{elev:1}),K("cisneros",6.2489,-75.5763,{elev:1}),K("suramericana",6.2533,-75.5831,{elev:1}),K("estadio",6.2528,-75.588,{elev:1}),K("floresta",6.2587,-75.5976,{elev:1}),K("santa_lucia",6.2583,-75.6047,{elev:1}),K("san_javier",6.2561,-75.6134)]},{id:"T",mode:"tram",vehicle:"tram",color:"#17A340",name:"L\xEDnea T-A",title:"San Antonio - Oriente",facts:{tipo:"F\xE9rreo (tranv\xEDa)",longitud:"4,2 km",estaciones:"3 estaciones y 6 paradas",tiempo:"19 min",velocidad:"16 km/h (m\xE1x. 80 km/h)",capacidadVehiculo:"300 usuarios por veh\xEDculo",flota:"12 tranv\xEDas",frecuencia:"4:44 min (hora pico)",capacidadHora:"3.807 pasajeros/hora/sentido",inicio:"31 de marzo de 2016",transferencias:"San Antonio, Miraflores, Oriente"},minutes:19,headway:4.73,sim:{count:6},route:[K("san_antonio",6.247,-75.5686),K("san_jose",6.2472,-75.5642),K("pabellon_agua",6.2469,-75.5615),K("bicentenario",6.2463,-75.5586),K("buenos_aires",6.245,-75.5552),K("miraflores",6.2433,-75.5513),K("loyola",6.2425,-75.548),K("alejandro_echavarria",6.242,-75.5445),K("oriente",6.2415,-75.5405)]},{id:"H",mode:"cable",vehicle:"gondola",color:"#E6007E",name:"L\xEDnea H",title:"Oriente - Villa Sierra",facts:{tipo:"Cable a\xE9reo",longitud:"1,4 km",estaciones:"3",tiempo:"5 min",velocidad:"18 km/h",capacidadVehiculo:"10 usuarios por telecabina (8 sentados, 2 de pie)",flota:"44 telecabinas",pilonas:10,frecuencia:"0:13 min (hora pico)",capacidadHora:"1.800 pasajeros/hora/sentido",inicio:"17 de diciembre de 2016",transferencias:"Oriente"},minutes:5,headway:.22,cabins:44,pylons:10,route:[K("oriente",6.24185,-75.5399),K("las_torres",6.2445,-75.5345),K("villa_sierra",6.247,-75.529)]},{id:"J",mode:"cable",vehicle:"gondola",color:"#FFC20E",name:"L\xEDnea J",title:"San Javier - La Aurora",facts:{tipo:"Cable a\xE9reo",longitud:"2,7 km",estaciones:"4",tiempo:"12 min",velocidad:"18 km/h",capacidadVehiculo:"10 usuarios por telecabina (8 sentados, 2 de pie)",flota:"119 telecabinas",pilonas:31,frecuencia:"0:12 min (hora pico)",capacidadHora:"3.000 pasajeros/hora/sentido",inicio:"3 de marzo de 2008",transferencias:"San Javier"},minutes:12,headway:.2,cabins:119,pylons:31,route:[K("san_javier",6.2556,-75.6142),K("juan_xxiii",6.259,-75.62),K("vallejuelos",6.2655,-75.6255),K("la_aurora",6.273,-75.631)]},{id:"K",mode:"cable",vehicle:"gondola",color:"#A6CE39",name:"L\xEDnea K",title:"Acevedo - Santo Domingo",facts:{tipo:"Cable a\xE9reo",longitud:"2 km",estaciones:"4",tiempo:"9 min",velocidad:"18 km/h",capacidadVehiculo:"10 usuarios por telecabina (8 sentados, 2 de pie)",flota:"93 telecabinas",pilonas:20,frecuencia:"0:12 min (hora pico)",capacidadHora:"3.000 pasajeros/hora/sentido",inicio:"7 de agosto de 2004",transferencias:"Acevedo, Santo Domingo"},minutes:9,headway:.2,cabins:93,pylons:20,route:[K("acevedo",6.3002,-75.5572),K("andalucia",6.2984,-75.5525),K("popular",6.2966,-75.5465),K("santo_domingo",6.2935,-75.541)]},{id:"L",mode:"cable",vehicle:"gondola",color:"#8C5B23",name:"L\xEDnea L",title:"Santo Domingo - Arv\xED",facts:{tipo:"Cable a\xE9reo (tur\xEDstico)",longitud:"4,6 km",estaciones:"2",tiempo:"15 min",velocidad:"18 km/h",capacidadVehiculo:"10 usuarios por telecabina (8 sentados, 2 de pie)",flota:"55 telecabinas",pilonas:23,frecuencia:"0:14 min (hora pico)",capacidadHora:"1.200 pasajeros/hora/sentido",inicio:"9 de febrero de 2010",transferencias:"Santo Domingo",horario:"No presta servicio el primer d\xEDa h\xE1bil de la semana. Primer viaje 9:00 a.m. (domingos y festivos 8:30 a.m.), \xFAltimo 6:00 p.m."},minutes:15,headway:.23,cabins:55,pylons:23,route:[K("santo_domingo",6.2931,-75.5402),K("arvi",6.2812,-75.5)]},{id:"M",mode:"cable",vehicle:"gondola",color:"#6F2C91",name:"L\xEDnea M",title:"Miraflores - Trece de Noviembre",facts:{tipo:"Cable a\xE9reo",longitud:"1,05 km",estaciones:"3",tiempo:"4 min",velocidad:"18 km/h",capacidadVehiculo:"10 usuarios por telecabina (8 sentados, 2 de pie)",flota:"51 telecabinas",pilonas:11,frecuencia:"0:09 min (hora pico)",capacidadHora:"2.500 pasajeros/hora/sentido",inicio:"28 de febrero de 2019",transferencias:"Miraflores"},minutes:4,headway:.15,cabins:51,pylons:11,route:[K("miraflores",6.2439,-75.5507),K("el_pinal",6.2472,-75.5478),K("trece_noviembre",6.2505,-75.545)]},{id:"P",mode:"cable",vehicle:"gondola",color:"#E30613",name:"L\xEDnea P",title:"Acevedo - El Progreso",facts:{tipo:"Cable a\xE9reo",longitud:"2,7 km",estaciones:"4",tiempo:"10 min",velocidad:"19 km/h",capacidadVehiculo:"12 usuarios por telecabina",flota:"137 telecabinas",pilonas:29,frecuencia:"0:11 min (hora pico)",capacidadHora:"4.000 pasajeros/hora/sentido",inicio:"10 de junio de 2021",transferencias:"Acevedo"},minutes:10,headway:.18,cabins:137,pylons:29,route:[K("acevedo",6.3008,-75.5594),K("sena",6.2986,-75.5665),K("doce_octubre",6.2958,-75.5745),K("el_progreso",6.2929,-75.5822)]},{id:"1",mode:"bus",vehicle:"articulated",color:"#00788A",name:"L\xEDnea 1",title:"U. de M. - Parque Aranjuez",subtitle:"Metropl\xFAs por la Av. del Ferrocarril",laneShift:-1.4,liftBias:0,facts:{tipo:"BRT (Bus Rapid Transit)",longitud:"12,5 km",estaciones:"20 (San Pedro fuera de servicio)",tiempo:"45 min",velocidad:"16 km/h (m\xE1x. 60 km/h)",capacidadVehiculo:"154 por bus articulado",flota:"30 buses articulados a gas y 1 el\xE9ctrico",frecuencia:"2:45 min (hora pico)",capacidadHora:"3.270 pasajeros/hora/sentido",inicio:"22 de diciembre de 2011",transferencias:"Hospital, Cisneros, Industriales"},minutes:45,headway:2.75,sim:{count:9},route:[K("u_de_m",6.2318,-75.61),K("los_alpes",6.2328,-75.6052),K("la_palma",6.2332,-75.601),K("parque_belen",6.2329,-75.5965),K("rosales",6.2325,-75.592),K("fatima",6.2322,-75.5872),K("nutibara",6.2318,-75.583),Gt(6.2312,-75.5792),Gt(6.2304,-75.5765),K("industriales",6.2299,-75.5748),Gt(6.2335,-75.5752),Gt(6.2385,-75.5758),K("plaza_mayor",6.244,-75.5756),K("cisneros",6.2495,-75.5744),K("minorista",6.2545,-75.5719),K("chagualo",6.2588,-75.5696),Gt(6.2622,-75.568),K("ruta_n",6.2634,-75.5668),K("hospital",6.2633,-75.563),K("san_pedro",6.2638,-75.559,{closed:!0}),K("palos_verdes",6.264,-75.5552),K("gardel",6.2678,-75.5556),K("manrique",6.271,-75.5558),K("las_esmeraldas",6.275,-75.556),K("berlin",6.2788,-75.5558),Gt(6.2808,-75.5562),K("parque_aranjuez",6.2815,-75.5578)]},{id:"2",mode:"bus",vehicle:"padron",color:"#5CB1B6",name:"L\xEDnea 2",title:"U. de M. - Parque Aranjuez",subtitle:"Por la Av. Oriental",laneShift:1.4,liftBias:.025,facts:{tipo:"Buses padr\xF3n",longitud:"13,5 km",estaciones:"19",tiempo:"52 min",velocidad:"13 km/h (m\xE1x. 60 km/h)",capacidadVehiculo:"90 por bus padr\xF3n",flota:"47 buses a gas y 64 el\xE9ctricos (compartidos con la L\xEDnea O)",frecuencia:"4:17 min (hora pico)",capacidadHora:"1.417 pasajeros/hora/sentido",inicio:"22 de abril de 2013",transferencias:"Industriales"},minutes:52,headway:4.28,sim:{count:8},route:[K("u_de_m",6.2318,-75.61),K("los_alpes",6.2328,-75.6052),K("la_palma",6.2332,-75.601),K("parque_belen",6.2329,-75.5965),K("rosales",6.2325,-75.592),K("fatima",6.2322,-75.5872),K("nutibara",6.2318,-75.583),Gt(6.2312,-75.5792),Gt(6.2304,-75.5765),K("industriales",6.2299,-75.5748),Gt(6.2297,-75.5728),K("barrio_colombia",6.2295,-75.5705),Gt(6.2322,-75.5692),K("perpetuo_socorro",6.2355,-75.568),K("barrio_colon",6.2425,-75.5655),K("san_jose",6.2468,-75.5638),K("la_playa",6.2495,-75.5625),K("catedral",6.254,-75.562),Gt(6.2585,-75.5595),Gt(6.262,-75.5565),K("palos_verdes",6.264,-75.5552),K("gardel",6.2678,-75.5556),K("manrique",6.271,-75.5558),K("las_esmeraldas",6.275,-75.556),K("berlin",6.2788,-75.5558),Gt(6.2808,-75.5562),K("parque_aranjuez",6.2815,-75.5578)]},{id:"O",mode:"bus",vehicle:"padron",color:"#F39A94",name:"L\xEDnea O",title:"Caribe - La Palma",subtitle:"Por la Avenida 80",laneShift:-2.8,liftBias:.05,facts:{tipo:"Buses padr\xF3n (tr\xE1nsito r\xE1pido)",longitud:"9,2 km",estaciones:"27 paraderos",tiempo:"45 min",velocidad:"13 km/h (m\xE1x. 60 km/h)",capacidadVehiculo:"80 por bus padr\xF3n",flota:"47 buses a gas y 64 el\xE9ctricos (entre las l\xEDneas 2 y O)",frecuencia:"6:00 min (hora pico); 11:00 min promedio",capacidadHora:"800 pasajeros/hora/sentido",inicio:"30 de noviembre de 2019",transferencias:"Caribe, Floresta, La Palma"},minutes:45,headway:6,sim:{count:7},route:[K("caribe",6.278,-75.5708),K("universal",6.2795,-75.5755),K("cordoba",6.2802,-75.5805),K("pilarica",6.2788,-75.585),K("ciudadela_universitaria",6.2762,-75.5888),K("facultad_minas",6.2728,-75.5918),K("los_colores",6.2672,-75.594),K("calasanz",6.2626,-75.5958),K("floresta",6.259,-75.597),K("los_pinos",6.2528,-75.5988),K("laureles",6.247,-75.5995),K("santa_gema",6.242,-75.5998),K("villa_aburra",6.2375,-75.6002),K("la_palma",6.2338,-75.6008)]},{id:"E",mode:"lrt",vehicle:"lrt",color:"#EF7FAF",name:"L\xEDnea E",title:"Metro de la 80: Caribe - Aguacatala",construction:!0,liftBias:.08,facts:{tipo:"Metro ligero, a nivel (San Germ\xE1n ser\xE1 subterr\xE1nea)",longitud:"13,25 km",estaciones:"17 accesos: 3 estaciones (Caribe, San Germ\xE1n, Aguacatala) y 14 paradas",tiempo:"\u224833 min (estimado para esta simulaci\xF3n)",estado:"En construcci\xF3n: la obra supera el 40 % de ejecuci\xF3n",identidad:"Identificada con el color rosado",integracion:"Con el Metro en Caribe, Floresta y Aguacatala, y con la L\xEDnea 1 en La Palma",inicio:"Operaci\xF3n estimada: 2028",recorrido:"Caribe - Transversal 73 - Calle 65 - Avenida 80/81 - Aguacatala"},minutes:33,headway:5,sim:{count:5},route:[K("caribe",6.2772,-75.5712),Gt(6.278,-75.5755),K("cordoba",6.2797,-75.5795),K("ciudadela_educativa",6.277,-75.5845),K("san_german",6.2725,-75.588,{underground:!0}),Gt(6.2708,-75.5922),Gt(6.266,-75.5948),K("colombia",6.2605,-75.5966),K("floresta",6.2585,-75.5972),K("los_pinos",6.253,-75.5984),K("san_juan",6.249,-75.599),K("villa_aburra",6.2378,-75.5998),K("la_palma",6.2335,-75.6004),K("san_bernardo",6.2275,-75.6007),K("loma_bernal",6.2205,-75.6002),K("la_mota",6.214,-75.599),K("cristo_rey",6.209,-75.595),K("guayabal",6.204,-75.5905),K("apolo",6.1985,-75.587),Gt(6.1955,-75.585),K("aguacatala",6.1933,-75.5829)]}],Gn=Object.fromEntries(rr.map(s=>[s.id,s]));var zf={lineas:"12 l\xEDneas en 4 modos (+ L\xEDnea E en construcci\xF3n)",longitud:"85,12 km",desglose:[["Metro","31,3 km"],["Cable a\xE9reo","14,62 km"],["Troncal BRT","12,5 km"],["Pretroncal padrones","22,5 km"],["Tranv\xEDa","4,2 km"]],flota:[["Coches de tren","240"],["Telecabinas","499"],["Buses articulados","31"],["Buses padrones","111"],["Veh\xEDculos tranviarios","12"]],accesos:[["Estaciones","42"],["Paradas","28"],["Paraderos","24"]],capacidad:"86.078 pasajeros por hora por sentido"};var kf={pac:"Punto de Atenci\xF3n al Cliente",civica:"M\xE1quinas de recarga C\xEDvica",bici:"Parqueadero de bicicletas / EnCicla",banos:"Ba\xF1os p\xFAblicos",bibliometro:"BiblioMetro",acceso:"Elementos de accesibilidad",cajeros:"Cajeros autom\xE1ticos",sala:"Sala de exposiciones",computo:"Sala de c\xF3mputo",comercio:"Locales comerciales",ascensor:"Ascensor"},le=(s,e={})=>({name:s,pois:[],services:[],routes:[],...e}),Hf={niquia:le("Niqu\xEDa",{address:"Diagonal 50A 37-01, Bello",pois:["C\xE1mara de Comercio de Medell\xEDn","Cerro Quitasol","Hospital Marco Fidel Su\xE1rez","Unidad Deportiva Tulio Ospina"],services:["pac","civica","bici","banos","acceso"],routes:["C1-006","C2-010","C1-002","C1-003","C1-004","C7-001 a C7-009","C1-017","C1-018","C1-011","U1-002","U2-003","U1-004","U2-004","C1-001","C1-005","C1-019","U2-002"]}),bello:le("Bello",{address:"Calle 44 46-001, Bello",pois:["Museo Choza Marco Fidel Su\xE1rez","Sede Administrativa del Metro"],services:["bici","banos","acceso","cajeros"],routes:["1006","1010 a 1027","P\xE9rez","Potrerito","Trapiche","Pe\xF1a Verde"]}),madera:le("Madera",{address:"Carrera 49 25B-20, Bello",pois:["Hospital Mental de Antioquia","Interactuar"],services:["banos","acceso","cajeros"],routes:["1040 a 1045","2.002"]}),acevedo:le("Acevedo",{address:"Carrera 63 103G-202 / 103G-86, Medell\xEDn",pois:["Parque Juanes de la Paz"],services:["civica","bibliometro","acceso","cajeros"],routes:["C6-001","270i","283i"]}),tricentenario:le("Tricentenario",{address:"Carrera 63 94A-518, Medell\xEDn",pois:["Parque Juanes de la Paz"],services:["civica","acceso","cajeros"],routes:["263i","C6-013","C6-018"]}),caribe:le("Caribe",{address:"Carrera 64 75B-600, Medell\xEDn",pois:["Terminal de Transporte Norte"],services:["civica","acceso","cajeros"],routes:["306A","306B"]}),universidad:le("Universidad",{address:"Calle 73 52-40, Medell\xEDn",pois:["Jard\xEDn Bot\xE1nico","Parque de los Deseos","Parque Explora","Parque Norte","Planetario","Ruta N","Universidad de Antioquia"],services:["civica","acceso","cajeros"],routes:["C6-020","261i Derecha","261i Izquierda"]}),hospital:le("Hospital",{address:"Carrera 51 65-85, Medell\xEDn",pois:["Cl\xEDnica Le\xF3n XIII","Hospital Infantil","Hospital Universitario San Vicente Fundaci\xF3n","Museo Cementerio San Pedro"],services:["cajeros"],routes:["254i","C6-002","C6-003","C6-016"]}),prado:le("Prado",{address:"Carrera 51D 57-100, Medell\xEDn",pois:["Catedral Metropolitana","Parque de Bol\xEDvar"],services:["banos","acceso"],routes:["C6-008","C6-009","C6-022"]}),parque_berrio:le("Parque Berr\xEDo",{address:"Carrera 51 50-26, Medell\xEDn",pois:["Plaza Botero","Museo de Antioquia","Palacio de la Cultura Rafael Uribe Uribe","Calle Jun\xEDn","Edificio Coltejer","Bas\xEDlica de Nuestra Se\xF1ora de la Candelaria","Hotel Nutibara","Palacio Nacional","Sal\xF3n Versalles"],services:["civica","banos","acceso","cajeros"],routes:["C6-006","C6-008"]}),san_antonio:le("San Antonio",{address:"Carrera 51A 46-08, Medell\xEDn",pois:["Parque San Antonio","Paseo peatonal Carabobo","Villa Suram\xE9rica"],services:["pac","civica","banos","bibliometro","acceso","cajeros","comercio"],routes:["C6-005","C6-005a","C6-007"]}),alpujarra:le("Alpujarra",{address:"Carrera 51 41-43, Medell\xEDn",pois:["Centro Administrativo La Alpujarra","Edificio EPM","Parque Pies Descalzos","Plaza de la Libertad","Plaza Mayor","\xC1rea Metropolitana","Teleantioquia"],services:["banos","acceso"],routes:["C6-010"]}),exposiciones:le("Exposiciones",{address:"Carrera 51 37-00, Medell\xEDn",pois:["Centro Comercial Sandiego","Hospital General de Medell\xEDn","Plaza Mayor","Pueblito Paisa","Teatro Metropolitano"],services:["banos","acceso"],routes:["C6-004"]}),industriales:le("Industriales",{address:"Carrera 49 24-435, Medell\xEDn",pois:["Museo de Arte Moderno de Medell\xEDn (MAMM)","Pueblito Paisa","Mercado del R\xEDo"],services:["acceso","cajeros"],routes:["130i","136i"]}),poblado:le("El Poblado",{address:"Carrera 49 9-69, Medell\xEDn",pois:["Aeropuerto Olaya Herrera","Parque de El Poblado","V\xEDa Primavera","Astorga","La Buena Mesa - Manila","La Milla de Oro","Terminal de Transporte Sur"],services:["bici","acceso"],routes:["133i","134i","134ii"]}),aguacatala:le("Aguacatala",{address:"Carrera 48C 12Sur-50, Medell\xEDn",pois:["Museo El Castillo","Unidad Deportiva Mar\xEDa Luisa Calle"],services:["civica","acceso"],routes:["C3-001","C3-002","132i","133ii","135i","143i"],notes:"Futura integraci\xF3n con el Metro de la 80 (L\xEDnea E)."}),ayura:le("Ayur\xE1",{address:"Carrera 49 25A Sur-35, Medell\xEDn",pois:["Barrio Jardines","Casa Museo Fernando Gonz\xE1lez Otraparte"],services:["civica","acceso"],routes:["6380","6405","6402-1","C-ITA"]}),envigado:le("Envigado",{address:"Carrera 42 59A-291, Envigado",pois:["Biblioteca y Parque Cultural D\xE9bora Arango","Casa de la Cultura Miguel Uribe Restrepo","Centro Comercial Viva Envigado"],services:["civica","bici","banos","acceso","cajeros"],routes:["6403 a 6410","6402-2","Arenales","Calatrava","Palmas","Alto de las Flores"]}),itagui:le("Itag\xFC\xED",{address:"Carrera 49 50Sur-80, Itag\xFC\xED",pois:["Mayorca Outlet","V\xEDa de la Moda"],services:["pac","bici","banos","bibliometro","sala","acceso","cajeros"],routes:["317","5420","5422","5423","6420","7423","C-SAB-1","Estrella 7"]}),sabaneta:le("Sabaneta",{address:"Carrera 49 67 Sur, Sabaneta",pois:["Iglesia Mar\xEDa Auxiliadora","La Centralidad Sur","Centro Comercial Aves Mar\xEDa"],services:["acceso"],routes:["318","319","Inmaculada","Aves Mar\xEDa","Casimbas","Santa Mar\xEDa La Nueva","Villa L\xEDa"]}),la_estrella:le("La Estrella",{address:"Carrera 49 77 Sur, Sabaneta",pois:["Centralidad Sur","Centro Comercial Aves Mar\xEDa"],services:["civica","acceso","ascensor"],routes:["7420","7421","9420","9422","318i","Estrella 3","Estrella 5","Estrella 7A","Pueblo Viejo","San Jos\xE9"]}),cisneros:le("Cisneros",{address:"Carrera 57 45A-50, Medell\xEDn",pois:["Biblioteca EPM","Centro Administrativo La Alpujarra","Parque Pies Descalzos","Plaza de Cisneros (Parque de las Luces)","SENA"],services:["acceso"]}),suramericana:le("Suramericana",{address:"Carrera 65 47D-15, Medell\xEDn",pois:["Barrio Carlos E. Restrepo","Biblioteca P\xFAblica Piloto","Universidad Nacional","EnCicla"],services:["bici","sala","acceso"],routes:["253i"]}),estadio:le("Estadio",{address:"Carrera 70 47D-15, Medell\xEDn",pois:["Unidad Deportiva Atanasio Girardot","Boulevard de la 70","EnCicla"],services:["bici","banos","acceso"],routes:["193i","193ii"]}),floresta:le("Floresta",{address:"Carrera 80 47D-30, Medell\xEDn",pois:["Cuarta Brigada"],services:["bici","acceso"],routes:["246i","250i"],notes:"Futura integraci\xF3n con el Metro de la 80 (L\xEDnea E)."}),santa_lucia:le("Santa Luc\xEDa",{address:"Calle 47DD 86-53, Medell\xEDn",services:["acceso","cajeros"],routes:["195i","195ii","202i","243i","311i","311ii"]}),san_javier:le("San Javier",{address:"Calle 45 98-80, Medell\xEDn",pois:["Escaleras el\xE9ctricas de la Comuna 13 (ruta integrada 221i)"],services:["pac","civica","acceso","cajeros"],routes:["C23ii","201i","221i","225i","226i","227i","227-IA","227IB","228i","243iD"]}),san_jose:le("San Jos\xE9"),pabellon_agua:le("Pabell\xF3n del Agua EPM"),bicentenario:le("Bicentenario",{pois:["Museo Casa de la Memoria","Parque Bicentenario"]}),buenos_aires:le("Buenos Aires"),miraflores:le("Miraflores",{services:["acceso"]}),loyola:le("Loyola"),alejandro_echavarria:le("Alejandro Echavarr\xEDa"),oriente:le("Oriente",{address:"Calle 50 Carrera 13, Medell\xEDn",services:["acceso"]}),las_torres:le("Las Torres",{services:["acceso"]}),villa_sierra:le("Villa Sierra",{services:["acceso"]}),juan_xxiii:le("Juan XXIII",{address:"Carrera 99CD con Calle 48B",services:["acceso"]}),vallejuelos:le("Vallejuelos",{address:"Calle 61B con Carrera 104",services:["acceso","computo"]}),la_aurora:le("La Aurora",{address:"Calle 64 con Carrera 104",services:["acceso"],routes:["250i La Aurora - Carretera al Mar","250ii La Aurora - Las Hamacas","250iii Aurora - Tulipanes"]}),andalucia:le("Andaluc\xEDa",{address:"Carrera 46A 107-3, Medell\xEDn",services:["acceso"]}),popular:le("Popular",{address:"Carrera 42B 107-61, Medell\xEDn",services:["acceso"]}),santo_domingo:le("Santo Domingo",{pois:["Parque Biblioteca Espa\xF1a"],services:["acceso","cajeros"]}),arvi:le("Arv\xED",{pois:["Parque Arv\xED","Mercado campesino de Arv\xED","Senderos ecol\xF3gicos"],notes:"L\xEDnea tur\xEDstica. No presta servicio el primer d\xEDa h\xE1bil de la semana."}),el_pinal:le("El Pinal",{services:["acceso"]}),trece_noviembre:le("Trece de Noviembre",{services:["acceso"]}),sena:le("SENA"),doce_octubre:le("Doce de Octubre"),el_progreso:le("El Progreso",{pois:["Cerro El Picacho"]}),u_de_m:le("U. de M.",{address:"Carrera 87 29A-28",pois:["Universidad de Medell\xEDn"],services:["acceso"],routes:["C3-004","C3-005","C3-006"]}),los_alpes:le("Los Alpes",{address:"Calle 30 82C-00",pois:["Centro Comercial Los Molinos"],services:["acceso"]}),la_palma:le("La Palma",{address:"Calle 30 80-00",services:["acceso"],notes:"Futura integraci\xF3n con el Metro de la 80 (L\xEDnea E)."}),parque_belen:le("Parque Bel\xE9n",{address:"Calle 30 76-00",services:["acceso"],routes:["C3-003"]}),rosales:le("Rosales",{address:"Calle 30 70-01",services:["acceso"],routes:["C3-002"]}),fatima:le("F\xE1tima",{address:"Calle 30 66B-01",pois:["Bolera Suramericana","Pista de BMX Mariana Paj\xF3n"],services:["acceso"]}),nutibara:le("Nutibara",{address:"Calle 30 65-01",pois:["Pueblito Paisa (Cerro Nutibara)"],services:["acceso"]}),plaza_mayor:le("Plaza Mayor",{pois:["Plaza Mayor","Teatro Metropolitano"]}),minorista:le("Minorista",{pois:["Plaza Minorista Jos\xE9 Mar\xEDa Villa"]}),chagualo:le("Chagualo"),ruta_n:le("Ruta N - U. de A.",{pois:["Ruta N","Universidad de Antioquia","Jard\xEDn Bot\xE1nico"]}),san_pedro:le("San Pedro",{closed:!0,notes:"Parada fuera de servicio.",pois:["Museo Cementerio San Pedro"]}),palos_verdes:le("Palos Verdes",{address:"Carrera 45 66-01",routes:["C6-016"]}),gardel:le("Gardel",{address:"Carrera 45 72-00",pois:["Casa Gardeliana"],routes:["C6-019","C6-022"]}),manrique:le("Manrique"),las_esmeraldas:le("Las Esmeraldas",{address:"Carrera 45 85-00",services:["acceso"],routes:["C6-015 (Granizal - Esmeraldas)"]}),berlin:le("Berl\xEDn",{address:"Carrera 45A 90-00",services:["acceso"]}),parque_aranjuez:le("Parque Aranjuez",{address:"Carrera 49A 93-00",pois:["Iglesia San Nicol\xE1s de Tolentino","Museo Pedro Nel G\xF3mez"],services:["acceso"]}),catedral:le("Catedral",{pois:["Catedral Metropolitana","Parque de Bol\xEDvar"],services:["acceso"]}),la_playa:le("La Playa",{services:["acceso"]}),barrio_colon:le("Barrio Col\xF3n",{services:["acceso"]}),perpetuo_socorro:le("Perpetuo Socorro",{services:["acceso"]}),barrio_colombia:le("Barrio Colombia",{services:["acceso"]}),universal:le("Universal"),cordoba:le("C\xF3rdoba"),pilarica:le("Pilarica"),ciudadela_universitaria:le("Ciudadela Universitaria"),facultad_minas:le("Facultad de Minas",{pois:["Universidad Nacional, Facultad de Minas"]}),los_colores:le("Los Colores"),calasanz:le("Calasanz"),los_pinos:le("Los Pinos"),laureles:le("Laureles"),santa_gema:le("Santa Gema"),villa_aburra:le("Villa de Aburr\xE1"),ciudadela_educativa:le("Ciudadela Educativa",{construction:!0}),san_german:le("San Germ\xE1n",{construction:!0,notes:"Ser\xE1 la primera estaci\xF3n subterr\xE1nea de un sistema f\xE9rreo en Colombia."}),colombia:le("Colombia",{construction:!0}),san_juan:le("San Juan",{construction:!0}),san_bernardo:le("San Bernardo",{construction:!0}),loma_bernal:le("Loma de Los Bernal",{construction:!0}),la_mota:le("La Mota",{construction:!0}),cristo_rey:le("Cristo Rey",{construction:!0}),guayabal:le("Guayabal",{construction:!0}),apolo:le("Apolo",{construction:!0})};var Vf=[{station:"niquia",code:"C1-006",name:"Niqu\xEDa - barrios de Bello",size:95,seed:11},{station:"acevedo",code:"270i",name:"Acevedo - Comuna 1",size:70,seed:12},{station:"tricentenario",code:"263i",name:"Tricentenario - Castilla",size:60,seed:13},{station:"universidad",code:"261i",name:"Universidad - circular",size:65,seed:14},{station:"hospital",code:"254i",name:"Hospital - Comuna 4",size:60,seed:15},{station:"gardel",code:"C6-019",name:"Gardel - Manrique",size:55,seed:16},{station:"las_esmeraldas",code:"C6-015",name:"Granizal - Esmeraldas",size:60,seed:17},{station:"san_javier",code:"221i",name:"San Javier - Comuna 13 (escaleras el\xE9ctricas)",size:60,seed:18},{station:"la_aurora",code:"250i",name:"La Aurora - Carretera al Mar",size:70,seed:19},{station:"santa_lucia",code:"195i",name:"Santa Luc\xEDa - Robledo",size:60,seed:20},{station:"estadio",code:"193i",name:"Estadio - Laureles",size:55,seed:21},{station:"industriales",code:"136i",name:"Industriales - Guayabal",size:60,seed:22},{station:"poblado",code:"133i",name:"Poblado - Loma de El Poblado",size:70,seed:23},{station:"aguacatala",code:"C3-001",name:"Aguacatala - Bel\xE9n",size:75,seed:24},{station:"envigado",code:"Palmas",name:"Envigado - Las Palmas",size:70,seed:25},{station:"itagui",code:"5420",name:"Itag\xFC\xED - centro",size:65,seed:26},{station:"sabaneta",code:"318",name:"Sabaneta - parque principal",size:55,seed:27},{station:"la_estrella",code:"7420",name:"La Estrella - Pueblo Viejo",size:70,seed:28},{station:"u_de_m",code:"C3-004",name:"U. de M. - Bel\xE9n alto",size:60,seed:29}];var qf=new A(0,1,0),vn=class{constructor(e,t=!1){this.points=e,this.closed=t;let n=e.length;this.cum=new Float32Array(n);for(let i=1;i<n;i++)this.cum[i]=this.cum[i-1]+e[i].distanceTo(e[i-1]);this.length=this.cum[n-1]}_seg(e){let t=this.cum;if(e<=0)return 0;if(e>=this.length)return t.length-2;let n=0,i=t.length-1;for(;i-n>1;){let r=n+i>>1;t[r]<=e?n=r:i=r}return n}wrap(e){if(!this.closed)return Math.min(Math.max(e,0),this.length);let t=this.length;return(e%t+t)%t}pointAt(e,t=new A){e=this.wrap(e);let n=this._seg(e),i=this.points[n],r=this.points[n+1],a=this.cum[n+1]-this.cum[n],o=a>0?(e-this.cum[n])/a:0;return t.copy(i).lerp(r,Math.min(Math.max(o,0),1))}tangentAt(e,t=new A){e=this.wrap(e);let n=this._seg(e);return t.subVectors(this.points[n+1],this.points[n]).normalize()}smoothTangentAt(e,t=1.5,n=new A){let i=this.pointAt(e-t,My),r=this.pointAt(e+t,Sy);return n.subVectors(r,i),n.lengthSq()<1e-8?this.tangentAt(e,n):n.normalize()}rightAt(e,t=new A){return this.smoothTangentAt(e,1.5,t),t.cross(qf),t.y=0,t.normalize()}laneAt(e,t,n=new A){return this.pointAt(e,n),t!==0&&(this.rightAt(e,Gf),n.addScaledVector(Gf,t)),n}nearestS(e){let t=1/0,n=0;for(let i=0;i<this.points.length;i++){let r=this.points[i].distanceToSquared(e);r<t&&(t=r,n=this.cum[i])}return n}},My=new A,Sy=new A,Gf=new A;var ar=new A,Wf=new A,or=new A,Xf=new Je;function jl(s,e=new mt,t=!1){return ar.copy(s),t&&(ar.y=0),ar.normalize(),or.crossVectors(ar,qf),or.lengthSq()<1e-8&&or.set(0,0,1),or.normalize(),Wf.crossVectors(or,ar).normalize(),Xf.makeBasis(ar,Wf,or),e.setFromRotationMatrix(Xf)}var Ut={metro:{lane:.62,half:1.45,lift:.35,elevH:2.6},tram:{lane:.5,half:1.25,lift:.1},bus:{lane:.95,half:1.35,lift:.1},lrt:{lane:.55,half:1.3,lift:.1},cable:{lane:1,stationH:2.8,floor:1.9},feeder:{lane:.3,half:.45,lift:.08}},Hi=(s,e,t)=>new A(s,e,t),Zl=class{constructor(e){this.terrain=e,this.lines={},this.complexes={},this.feeders=[],this.segIndex=new Map,this.segCell=40}build(e={}){for(let t of rr){let n=t.mode==="cable"?this._buildCable(t):this._buildLinear(t);this.lines[t.id]=n;for(let i=0;i<n.stops.length;i++){let r=n.stops[i],a=this.complexes[r.key];if(!a){let l=Hf[r.key]||{name:r.key,pois:[],services:[],routes:[]};a=this.complexes[r.key]={key:r.key,name:l.name,info:l,stops:[],lines:[],modes:new Set,pos:r.pos.clone(),primaryMode:t.mode}}a.stops.push({line:t.id,idx:i,pos:r.pos}),a.lines.includes(t.id)||a.lines.push(t.id),a.modes.add(t.mode);let o={metro:0,tram:1,cable:2,bus:3,lrt:4};o[t.mode]<o[a.primaryMode]&&(a.primaryMode=t.mode,a.pos.copy(r.pos))}}for(let t of Object.values(this.complexes))t.construction=t.lines.every(n=>this.lines[n].def.construction);return e.feeders!==!1&&this._buildFeeders(),this._indexSegments(),this}_buildLinear(e){let t=Ut[e.mode],n=e.route.map(y=>{let x=un(y.lat,y.lon);return Hi(x.x,0,x.z)}),i=new Fn(n,!1,"centripetal",.5),r=n.length,a=[],o=[];for(let y=0;y<r-1;y++){let x=n[y].distanceTo(n[y+1]),S=Math.max(2,Math.ceil(x/1));for(let w=0;w<S;w++){let C=(y+w/S)/(r-1);w===0&&(o[y]=a.length),a.push(i.getPoint(C))}}o[r-1]=a.length,a.push(n[r-1].clone());let l=e.mode==="bus"?8:14,c=a[0].clone().sub(a[Math.min(3,a.length-1)]).setY(0).normalize(),h=a[a.length-1].clone().sub(a[Math.max(0,a.length-4)]).setY(0).normalize();for(let y=1;y<=l;y++)a.unshift(a[0].clone().addScaledVector(c,1)),a.push(a[a.length-1].clone().addScaledVector(h,1));for(let y=0;y<o.length;y++)o[y]+=l;let d=e.laneShift||0;if(d){let y=a.map((x,S)=>{let w=a[Math.max(0,S-2)],C=a[Math.min(a.length-1,S+2)],v=Hi(C.x-w.x,0,C.z-w.z).normalize();return Hi(x.x-v.z*d,0,x.z+v.x*d)});for(let x=0;x<a.length;x++)a[x].copy(y[x])}let u=this.terrain,f=new Float32Array(a.length);for(let y=0;y<a.length;y++){let x=a[y],S=a[Math.max(0,y-1)],w=a[Math.min(a.length-1,y+1)],C=w.x-S.x,v=w.z-S.z,T=Math.hypot(C,v)||1,I=-v/T*(t.half||1),L=C/T*(t.half||1);f[y]=Math.max(u.heightAt(x.x,x.z),u.heightAt(x.x+I,x.z+L),u.heightAt(x.x-I,x.z-L))}let m=e.route.map((y,x)=>({r:y,k:x})).filter(y=>!y.r.wp),_=new Float32Array(a.length);if(e.mode==="metro"){let y=new Float32Array(a.length);for(let x=0;x<m.length-1;x++){let S=o[m[x].k],w=o[m[x+1].k],C=m[x].r.elev?1:0,v=m[x+1].r.elev?1:0;for(let T=S;T<=w;T++){let I=(T-S)/Math.max(1,w-S),L=I*I*(3-2*I);y[T]=C+(v-C)*L}}for(let x=0;x<a.length;x++)_[x]=f[x]+t.lift+y[x]*t.elevH;_=Ma(_,22);for(let x=0;x<a.length;x++)_[x]=Math.max(_[x],f[x]+t.lift);this._elevFactor=y}else{let y=t.lift+(e.liftBias||0);for(let x=0;x<a.length;x++)_[x]=f[x]+y;_=Ma(_,3);for(let x=0;x<a.length;x++)_[x]=Math.max(_[x],f[x]+t.lift*.8)}for(let y=0;y<a.length;y++)a[y].y=_[y];let g=new vn(a),p=m.map(({r:y,k:x})=>{let S=o[x];return{key:y.key,s:g.cum[S],pos:a[S].clone(),ground:f[S],elev:!!y.elev,closed:!!y.closed,underground:!!y.underground}}),b=e.mode==="metro"?this._elevFactor:null;return{def:e,id:e.id,mode:e.mode,color:e.color,path:g,stops:p,ground:f,elevated:b,lane:t.lane,half:t.half}}_buildCable(e){let t=this.terrain,n=Ut.cable,i=e.route.map(P=>{let F=un(P.lat,P.lon),k=t.heightAt(F.x,F.z);return{key:P.key,x:F.x,z:F.z,ground:k,y:k+n.stationH}}),r=[],a=0;for(let P=0;P<i.length-1;P++){let F=Math.hypot(i[P+1].x-i[P].x,i[P+1].z-i[P].z);r.push(F),a+=F}let o=e.pylons||Math.round(a/12),l=r.map(P=>Math.max(1,Math.round(o*P/a))),c=[];for(let P=0;P<i.length;P++)if(c.push({type:"station",x:i[P].x,z:i[P].z,ground:i[P].ground,y:i[P].y,key:i[P].key}),P<i.length-1){let F=l[P];for(let k=1;k<=F;k++){let Q=k/(F+1),q=i[P].x+(i[P+1].x-i[P].x)*Q,V=i[P].z+(i[P+1].z-i[P].z)*Q,j=t.heightAt(q,V);c.push({type:"tower",x:q,z:V,ground:j,y:j+3.2})}}let h=3.4;for(let P=0;P<8;P++)for(let F=0;F<c.length-1;F++){let k=c[F],Q=c[F+1];for(let q=1;q<12;q++){let V=q/12,j=k.x+(Q.x-k.x)*V,Ae=k.z+(Q.z-k.z)*V,de=t.heightAt(j,Ae)+h,st=k.y+(Q.y-k.y)*V-$f(k,Q,V),ze=de-st;if(ze>0)if(k.type==="tower"&&Q.type==="tower")k.y+=ze,Q.y+=ze;else if(k.type==="tower")k.y+=ze/Math.max(.25,1-V);else if(Q.type==="tower")Q.y+=ze/Math.max(.25,V);else{c.splice(F+1,0,{type:"tower",x:j,z:Ae,ground:t.heightAt(j,Ae),y:de+.5});break}}}for(let P of c)P.type==="tower"&&(P.height=P.y-P.ground);let d=[],u=[];for(let P=0;P<c.length-1;P++){let F=c[P],k=c[P+1],Q=Math.hypot(k.x-F.x,k.z-F.z),q=Math.max(2,Math.ceil(Q/1.5));for(let V=0;V<q;V++){let j=V/q;V===0&&u.push(d.length),d.push(Hi(F.x+(k.x-F.x)*j,F.y+(k.y-F.y)*j-$f(F,k,j),F.z+(k.z-F.z)*j))}}u.push(d.length);let f=c[c.length-1];d.push(Hi(f.x,f.y,f.z));let m=new vn(d);for(let P=0;P<c.length;P++)c[P].s=m.cum[u[P]];let g=c.filter(P=>P.type==="station").map(P=>({key:P.key,s:P.s,pos:Hi(P.x,P.y,P.z),ground:P.ground,cableY:P.y})),p=n.lane,b=[],y=[],x=new A,S=1;for(let P=0;P<=m.length;P+=S)b.push(m.laneAt(P,p,new A));b.push(m.laneAt(m.length,p,new A));for(let P=m.length;P>=0;P-=S)y.push(m.laneAt(P,-p,new A));y.push(m.laneAt(0,-p,new A));let w=m.pointAt(m.length,new A),C=m.pointAt(0,new A),v=m.tangentAt(m.length-.01,new A).setY(0).normalize(),T=m.tangentAt(0,new A).setY(0).normalize().negate(),I=[...b,...Yf(w,v,p,10),...y,...Yf(C,T,p,10)],L=new vn(I,!0),U=new vn(b).length,z=Math.PI*p,D=U+z;for(let P of g)P.loopFwd=P.s*(U/m.length),P.loopBwd=D+(m.length-P.s)*(U/m.length);return{def:e,id:e.id,mode:"cable",color:e.color,path:m,stops:g,supports:c,loopPath:L,lane:p,half:1.2,fwdLen:U,bwdStart:D}}_buildFeeders(){let e=this.terrain;for(let t of Vf){let n=this.complexes[t.station];if(!n)continue;let i=Kt(t.seed*7919),r=n.pos,a=-1/0,o=0;for(let b=0;b<16;b++){let y=b/16*Math.PI*2,S=e.heightAt(r.x+Math.cos(y)*t.size*.6,r.z+Math.sin(y)*t.size*.6)+i()*2;S>a&&(a=S,o=y)}let l=t.size*.42,c=Hi(r.x+Math.cos(o)*(l+6),0,r.z+Math.sin(o)*(l+6)),h=[],d=9,u=o+Math.PI;for(let b=0;b<d;b++){let y=u+b/d*Math.PI*2,x=l*(.75+i()*.5)*(b===0?.8:1);h.push(Hi(c.x+Math.cos(y)*x,0,c.z+Math.sin(y)*x*(.8+i()*.4)))}h[0].set(r.x+Math.cos(o)*5,0,r.z+Math.sin(o)*5);let f=new Fn(h,!0,"centripetal"),m=f.getLength(),_=f.getSpacedPoints(Math.ceil(m/1));_.pop();for(let b of _)b.y=e.heightAt(b.x,b.z)+Ut.feeder.lift;let g=Ma(Float32Array.from(_.map(b=>b.y)),2);_.forEach((b,y)=>b.y=Math.max(g[y],e.heightAt(b.x,b.z)+.06));let p=new vn([..._,_[0].clone()],!0);this.feeders.push({...t,path:p,complex:n.key,color:"#56B04B"})}}_indexSegments(){let e=(t,n,i)=>{let r=Math.min(t.x,n.x)-i,a=Math.max(t.x,n.x)+i,o=Math.min(t.z,n.z)-i,l=Math.max(t.z,n.z)+i,c=this.segCell;for(let h=Math.floor(r/c);h<=Math.floor(a/c);h++)for(let d=Math.floor(o/c);d<=Math.floor(l/c);d++){let u=h*73856093^d*19349663,f=this.segIndex.get(u);f||this.segIndex.set(u,f=[]),f.push({ax:t.x,az:t.z,bx:n.x,bz:n.z,r:i})}};for(let t of Object.values(this.lines)){let n=t.path.points,i=t.mode==="cable"?1.6:(t.half||1.3)+.6,r=3;for(let a=0;a<n.length-1;a+=r)e(n[a],n[Math.min(n.length-1,a+r)],i);for(let a of t.stops)e(a.pos,a.pos,t.mode==="cable"?6:8)}for(let t of this.feeders){let n=t.path.points;for(let i=0;i<n.length-1;i+=3)e(n[i],n[Math.min(n.length-1,i+3)],.9)}}distToNetwork(e,t){let n=this.segCell,i=Math.floor(e/n)*73856093^Math.floor(t/n)*19349663,r=this.segIndex.get(i);if(!r)return 1/0;let a=1/0;for(let o of r){let l=o.bx-o.ax,c=o.bz-o.az,h=l*l+c*c,d=h>0?((e-o.ax)*l+(t-o.az)*c)/h:0;d=d<0?0:d>1?1:d;let u=Math.hypot(o.ax+l*d-e,o.az+c*d-t)-o.r;u<a&&(a=u)}return a}};function $f(s,e,t){return .012*Math.hypot(e.x-s.x,e.z-s.z)*4*t*(1-t)}function Yf(s,e,t,n){let i=[],r=new A().crossVectors(e,new A(0,1,0)).normalize();for(let a=1;a<n;a++){let o=a/n*Math.PI;i.push(new A(s.x+r.x*Math.cos(o)*t+e.x*Math.sin(o)*t,s.y,s.z+r.z*Math.cos(o)*t+e.z*Math.sin(o)*t))}return i}function Ma(s,e){let t=s.length,n=new Float32Array(t),i=new Float64Array(t+1);for(let r=0;r<t;r++)i[r+1]=i[r]+s[r];for(let r=0;r<t;r++){let a=Math.max(0,r-e),o=Math.min(t-1,r+e);n[r]=(i[o+1]-i[a])/(o-a+1)}return n}var Ey=new A(0,1,0),Sa=class{constructor(){this.pos=[],this.col=[],this._c=new me}quad(e,t,n,i,r){this._c.set(r);let{r:a,g:o,b:l}=this._c;this.pos.push(e.x,e.y,e.z,t.x,t.y,t.z,n.x,n.y,n.z,e.x,e.y,e.z,n.x,n.y,n.z,i.x,i.y,i.z);for(let c=0;c<6;c++)this.col.push(a,o,l)}geometry(){let e=new gt;return e.setAttribute("position",new Ke(this.pos,3)),e.setAttribute("color",new Ke(this.col,3)),e.computeVertexNormals(),e}};function hs(s,e){let t=s[Math.max(0,e-1)],n=s[Math.min(s.length-1,e+1)],i=new A(n.x-t.x,0,n.z-t.z).normalize(),r=new A().crossVectors(i,Ey).normalize();return{t:i,r}}function lr(s,e,t,n){let{half:i,top:r,side:a,stripe:o,beamT:l=.55,offset:c=0,lift:h=0,bandEvery:d=0,band2:u}=n,f=e.length,m=[],_=[];for(let p=0;p<f;p++){let{r:b}=hs(e,p),y=e[p],x=y.x+b.x*c,S=y.z+b.z*c,w=y.y+h,C=new A(x-b.x*i,w,S-b.z*i),v=new A(x+b.x*i,w,S+b.z*i),T=t.heightAt(C.x,C.z),I=t.heightAt(v.x,v.z),L=w-Math.min(T,I)>1.3;m.push({top:C,bot:new A(C.x,L?w-l:T-.4,C.z),elevated:L}),_.push({top:v,bot:new A(v.x,L?w-l:I-.4,v.z),elevated:L})}let g=0;for(let p=0;p<f-1;p++){let b=m[p],y=m[p+1],x=_[p],S=_[p+1];g+=e[p].distanceTo(e[p+1]);let w=r;if(d&&u&&Math.floor(g/d)%2===1&&(w=u),s.quad(b.top,x.top,S.top,y.top,w),s.quad(y.top,y.bot,b.bot,b.top,a),s.quad(x.top,x.bot,S.bot,S.top,a),(b.elevated||y.elevated)&&s.quad(b.bot,y.bot,S.bot,x.bot,a),o){let I=(L,U,z)=>{let{r:D}=hs(e,L===b||L===x?p:p+1);return new A(L.top.x+D.x*.02*U,L.top.y-z,L.top.z+D.z*.02*U)};s.quad(I(y,-1,.14),I(y,-1,.34),I(b,-1,.34),I(b,-1,.14),o),s.quad(I(x,1,.14),I(x,1,.34),I(S,1,.34),I(S,1,.14),o)}}}function an(s,e,t,n,i,r,a=0){let o=0;for(let l=0;l<e.length-1;l++){let c=e[l].distanceTo(e[l+1]);if(o+=c,a&&Math.floor(o/a)%2===1)continue;let h=hs(e,l),d=hs(e,l+1),u=e[l],f=e[l+1],m=new A(u.x+h.r.x*(t-n),u.y+i,u.z+h.r.z*(t-n)),_=new A(u.x+h.r.x*(t+n),u.y+i,u.z+h.r.z*(t+n)),g=new A(f.x+d.r.x*(t+n),f.y+i,f.z+d.r.z*(t+n)),p=new A(f.x+d.r.x*(t-n),f.y+i,f.z+d.r.z*(t-n));s.quad(m,_,g,p,r)}}function jf(s,e){let t=new vt;t.name="infra-"+s.id;let n=new Sa,i=new lt,r=s.path.points,a=Ut[s.mode];if(s.mode==="metro"){lr(n,r,e,{half:a.half,top:ei(s.color,.08),side:"#dcd8cf",stripe:s.color});for(let l of[-a.lane,a.lane])an(n,r,l,.3,.03,"#7d776d"),an(n,r,l-.2,.045,.07,"#3f4146"),an(n,r,l+.2,.045,.07,"#3f4146");for(let l=3;l<s.path.length;l+=7){let c=s.path.pointAt(l),h=e.heightAt(c.x,c.z),d=c.y-.55-h;if(d<.8)continue;let u=s.path.tangentAt(l),f=Math.atan2(-u.z,u.x);i.cyl(.32,.4,d+.4,6,"#d6d1c7",{p:[c.x,h-.2+(d+.4)/2,c.z]}),i.box(.5,.3,2.6,"#cfcac0",{p:[c.x,c.y-.7,c.z],r:[0,f,0]})}}else if(s.mode==="tram"){lr(n,r,e,{half:a.half,top:"#77736d",side:"#8d877e"}),an(n,r,-a.half+.14,.14,.02,s.color),an(n,r,a.half-.14,.14,.02,s.color);for(let c of[-a.lane,a.lane])an(n,r,c-.17,.035,.03,"#3e3e42"),an(n,r,c+.17,.035,.03,"#3e3e42");an(n,r,0,.05,.025,"#e8e3d6",1.5);let l=null;for(let c=2;c<s.path.length;c+=8){let h=s.path.pointAt(c),d=s.path.rightAt(c),u=s.path.tangentAt(c),f=Math.atan2(-u.z,u.x),m=Math.floor(c/8)%2?1:-1,_=h.x+d.x*(a.half+.15)*m,g=h.z+d.z*(a.half+.15)*m;i.box(.09,1.7,.09,"#5a5f66",{p:[_,h.y+.85,g]}),i.box(.05,.05,a.half*2+.3,"#5a5f66",{p:[h.x,h.y+1.6,h.z],r:[0,f,0]});let p=[-a.lane,a.lane].map(b=>new A(h.x+d.x*b,h.y+1.5,h.z+d.z*b));if(l)for(let b=0;b<2;b++){let y=l[b],x=p[b],S=y.clone().add(x).multiplyScalar(.5),w=y.distanceTo(x),C=x.clone().sub(y).normalize(),v=new mt().setFromUnitVectors(new A(1,0,0),C);i.box(w,.025,.025,"#2d2f33",{p:[S.x,S.y,S.z],q:v})}l=p}}else if(s.mode==="bus")lr(n,r,e,{half:a.half,top:"#5c6066",side:"#7a7b7c"}),an(n,r,-a.half+.2,.2,.02,s.color),an(n,r,a.half-.2,.2,.02,s.color),an(n,r,0,.04,.02,"#f1efe6",1.2);else if(s.mode==="lrt"){lr(n,r,e,{half:a.half,top:s.color,band2:"#f6f1ee",bandEvery:2.2,side:"#b8aa9c"});for(let l of[-a.lane,a.lane])an(n,r,l-.17,.035,.03,"#6c6468"),an(n,r,l+.17,.035,.03,"#6c6468");for(let l=5;l<s.path.length;l+=11){let c=s.path.pointAt(l),h=s.path.rightAt(l),d=s.path.tangentAt(l),u=Math.atan2(-d.z,d.x);for(let f of[-1,1]){let m=c.x+h.x*(a.half+.35)*f,_=c.z+h.z*(a.half+.35)*f,g=e.heightAt(m,_);(Math.floor(l/11)+(f>0?1:0))%2?(i.cone(.14,.4,6,"#ff7a1a",{p:[m,g+.2,_]}),i.cyl(.1,.12,.08,6,"#ffffff",{p:[m,g+.22,_]})):(i.box(1.6,.35,.08,"#f4f4f4",{p:[m,g+.45,_],r:[0,u,0]}),i.box(1.6,.1,.09,"#ff5a1f",{p:[m,g+.5,_],r:[0,u,0]}),i.box(.08,.45,.08,"#555555",{p:[m,g+.2,_],r:[0,u,0]}))}}}else s.mode==="cable"&&wy(s,e,i);if(n.pos.length){let l=new tt(n.geometry(),Lt.solid);l.receiveShadow=!0,l.castShadow=s.mode==="metro",t.add(l)}let o=i.build({castShadow:!0});return t.add(o),t}function wy(s,e,t){let n=s.lane,i=s.supports,r=l=>{let c=i[Math.max(0,l-1)],h=i[Math.min(i.length-1,l+1)];return new A(h.x-c.x,0,h.z-c.z).normalize()};for(let l=0;l<i.length;l++){let c=i[l];if(c.type!=="tower")continue;let h=r(l),d=Math.atan2(-h.z,h.x),u=c.height;t.cyl(.22,.5,u-.25,4,"#e8e6e1",{p:[c.x,c.ground+(u-.25)/2,c.z],r:[0,d+Math.PI/4,0]}),t.box(.9,.35,.9,"#bcb6ab",{p:[c.x,c.ground+.15,c.z],r:[0,d,0]}),t.box(.35,.28,n*2+.7,s.color,{p:[c.x,c.y+.02,c.z],r:[0,d,0]});for(let f of[-1,1]){let m=Math.sin(d)*n*f,_=Math.cos(d)*n*f;t.box(.9,.12,.16,"#3a3d42",{p:[c.x+m,c.y-.06,c.z+_],r:[0,d,0]})}}let a=new A,o=new A;for(let l of[-n,n])for(let h=0;h<s.path.length-.01;h+=3){let d=Math.min(s.path.length,h+3);s.path.laneAt(h,l,a),s.path.laneAt(d,l,o);let u=a.clone().add(o).multiplyScalar(.5),f=a.distanceTo(o),m=o.clone().sub(a).normalize(),_=new mt().setFromUnitVectors(new A(1,0,0),m);t.box(f+.02,.08,.08,ei(s.color,-.12),{p:[u.x,u.y+.02,u.z],q:_})}}function Zf(s,e){let t=new Sa,n=s.path.points;lr(t,n,e,{half:Ut.feeder.half,top:"#8a857d",side:"#9b958b"}),an(t,n,0,.1,.02,s.color,1.4);let i=new tt(t.geometry(),Lt.solid);return i.receiveShadow=!0,i}function Jf(s){let e=va.map(u=>new A(u.x,0,u.z)),t=new Fn(e,!1,"centripetal"),n=t.getLength(),r=t.getSpacedPoints(Math.ceil(n/2)).filter(u=>s.inBounds(u.x,u.z,2)),a=2.8,o=r.map((u,f)=>{let{r:m}=hs(r,f);return Math.max(s.heightAt(u.x,u.z),s.heightAt(u.x+m.x*a,u.z+m.z*a),s.heightAt(u.x-m.x*a,u.z-m.z*a))}),l=Ma(Float32Array.from(o),3);r.forEach((u,f)=>u.y=Math.max(l[f],o[f])+.22);let c=new Sa;lr(c,r,s,{half:a,top:"#3f9fd6",side:"#6c9a6a"}),an(c,r,0,.9,.01,"#5ab4e6",0);let h=new jr({vertexColors:!0,flatShading:!0,roughness:.25,metalness:.1}),d=new tt(c.geometry(),h);return d.receiveShadow=!0,d.name="rio",{mesh:d,path:new vn(r)}}var Jl={uWidth:{value:3},uOpacity:{value:0}},Ty=`
attribute vec3 aLat;
uniform float uWidth;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vec3 p = position + aLat * uWidth;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  #include <logdepthbuf_vertex>
}`,Ay=`
uniform vec3 uColor; uniform float uOpacity;
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  gl_FragColor = vec4(uColor, uOpacity);
  #include <colorspace_fragment>
}`;function Kf(s,e=1,t=0){let n=s.mode==="cable"?s.path.points:s.path.points.filter((d,u)=>u%2===0),i=[],r=[],a=0,o=s.mode==="cable"?.2:2.2;for(let d=0;d<n.length-1;d++){let u=n[d],f=n[d+1];if(a+=u.distanceTo(f),t&&Math.floor(a/t)%2===1)continue;let m=hs(n,d).r.multiplyScalar(e),_=hs(n,d+1).r.multiplyScalar(e),g=[u.x,u.y+o,u.z],p=[f.x,f.y+o,f.z];i.push(...g,...g,...p,...g,...p,...p),r.push(-m.x,0,-m.z,m.x,0,m.z,_.x,0,_.z,-m.x,0,-m.z,_.x,0,_.z,-_.x,0,-_.z)}let l=new gt;l.setAttribute("position",new Ke(i,3)),l.setAttribute("aLat",new Ke(r,3));let c=new Ft({uniforms:{...Jl,uColor:{value:new me(s.color)}},vertexShader:Ty,fragmentShader:Ay,transparent:!0,depthWrite:!1,side:Tn}),h=new tt(l,c);return h.renderOrder=3,h.frustumCulled=!1,h.name="mapline-"+s.id,h}var Qf=["#b5623a","#c47148","#a9552f","#cc7a4f","#d08a5c","#b86d45"],ep=["#f2c14e","#f28c8c","#7cc0e0","#8fd18a","#f3efe4","#e7a1d0","#f59e42","#a78bfa"],Kl=["#ece6d8","#d8cbb4","#c98e6a","#e0d6c2","#bfb3a1","#dcdcd6","#c4704a","#f0e9dc"],Ql=["#f4f1ea","#e6e8ea","#ddd6cb","#cdd7df","#f6efe1","#bcc7cf","#e9dfcf"],tp=["#b8bcc0","#a3abb1","#c9ccc4","#9aa6ad"];function np(s,e,t,{density:n=1}={}){let i=Kt(424242),r=un(6.2502,-75.5684),a=t.map(z=>({x:z.pos.x,z:z.pos.z,r:z.def.clear||6})),o=(z,D)=>a.some(P=>(z-P.x)**2+(D-P.z)**2<P.r*P.r),l=[],c=[],h=[],d=s.x0+8,u=s.z0+8,f=s.x0+s.nx*s.cell-8,m=s.z0+s.nz*s.cell-8,_=6.6/Math.sqrt(n),g=1.12;for(let z=u;z<m;z+=_)for(let D=d;D<f;D+=_){let P=D+(i()-.5)*_*.7,F=z+(i()-.5)*_*.7,k=s.elevationAt(P,F),Q=ya(P,F,k)*(1-ba(P,F));if(Q<.05||i()>Q*1.05||e.distToNetwork(P,F)<3.4||Math.abs(cs(P,F))<55||o(P,F))continue;let q=s.heightAt(P,F),{lat:V}=Xl(P,F),j=Math.hypot(P-r.x,F-r.z),Ae=cs(P,F)>0,de=(i()-.5)*.25+(i()<.5?0:Math.PI/2),st=Math.abs(s.heightAt(P+1.5,F)-s.heightAt(P-1.5,F))+Math.abs(s.heightAt(P,F+1.5)-s.heightAt(P,F-1.5)),ze,je,Y,ee,ge="flat";j<115&&i()<.8?(ze=2.2+i()*1.2,je=2.2+i()*1.2,Y=1.6+i()*i()*7.5,ee=i()<.3?Kl[Math.floor(i()*Kl.length)]:Ql[Math.floor(i()*Ql.length)]):Ae&&V>6.188&&V<6.222&&k<1860&&k>1512?(ze=2+i()*1,je=2+i()*1,Y=i()<.55?3.5+i()*8:1.2+i()*2.5,ee=Ql[Math.floor(i()*Ql.length)]):k<1548?!Ae&&V>6.19&&V<6.225&&i()<.5?(ze=3.2+i()*2,je=2.6+i()*1.6,Y=.8+i()*1.2,ee=tp[Math.floor(i()*tp.length)]):(ze=2+i()*1.1,je=2+i()*1.1,Y=.8+i()*i()*3.2,ee=Kl[Math.floor(i()*Kl.length)],Y<1.6&&i()<.45&&(ge="house")):(ze=1.5+i()*.9,je=1.5+i()*.9,Y=.6+i()*.9+(k<1700?i()*.6:0),ee=i()<.62?Qf[Math.floor(i()*Qf.length)]:ep[Math.floor(i()*ep.length)],i()<.18&&(ge="house")),Y*=1.15,ze*=g,je*=g;let ke=q-.6-st*.6,we=Y+(q-ke);ge==="house"?c.push([P,ke,F,ze,we,je,de,ee]):l.push([P,ke,F,ze,we,je,de,ee]),i()<.55&&h.push(P+(i()-.5)*ze,q+Math.min(Y,2+i()*Y)*.9,F+(i()-.5)*je)}let p=new vt;p.name="city";let b=new Zn(1,1,1);b.translate(0,.5,0);let y=new On({flatShading:!0}),x=(z,D,P)=>{let F=new di(D,y,z.length),k=new Je,Q=new mt,q=new A,V=new A,j=new me,Ae=new A(0,1,0);return z.forEach((de,st)=>{V.set(de[0],de[1],de[2]),Q.setFromAxisAngle(Ae,de[6]),q.set(de[3],de[4],de[5]),k.compose(V,Q,q),F.setMatrixAt(st,k),F.setColorAt(st,j.set(P||de[7]))}),F.castShadow=!1,F.receiveShadow=!0,F.instanceMatrix.needsUpdate=!0,F};if(l.length&&p.add(x(l,b)),c.length){p.add(x(c,b));let z=new Pi;z.moveTo(-.55,0),z.lineTo(.55,0),z.lineTo(0,.45),z.closePath();let D=new Qi(z,{depth:1.08,bevelEnabled:!1});D.translate(0,0,-.54);let P=c.map(V=>[V[0],V[1]+V[4],V[2],V[3],Math.min(V[3],V[5])*.9,V[5],V[6],"#a8452d"]),F=new di(D,y,P.length),k=new Je,Q=new mt,q=new me;P.forEach((V,j)=>{Q.setFromAxisAngle(new A(0,1,0),V[6]),k.compose(new A(V[0],V[1],V[2]),Q,new A(V[3],V[4],V[5])),F.setMatrixAt(j,k),F.setColorAt(j,q.set(j%5===0?"#8f3a26":"#b24f32"))}),F.castShadow=!1,F.receiveShadow=!0,p.add(F)}let S=[],w=[],C=9.5;for(let z=u;z<m;z+=C)for(let D=d;D<f;D+=C){let P=D+(i()-.5)*C,F=z+(i()-.5)*C,k=s.elevationAt(P,F),Q=ya(P,F,k)*(1-ba(P,F)),q=ba(P,F),V=Math.abs(cs(P,F)),j=(1-Q)*(.12+.6*Ct(1650,2150,k))+q*.55+(V>35&&V<130?.4:0)+Q*.04;if(k>2750&&(j*=.4),i()>j||e.distToNetwork(P,F)<1.2||V<30||o(P,F))continue;let Ae=s.heightAt(P,F),de=1.6+i()*1.8;k>2050||k>1850&&i()<.5?w.push([P,Ae-.1,F,de*1.2]):S.push([P,Ae-.1,F,de])}let v=Cy(S,w);p.add(v);let T=new gt;T.setAttribute("position",new Ke(h,3));let I=[],L=[new me("#ffd27a"),new me("#fff1c9"),new me("#ffb85c"),new me("#cfe6ff")];for(let z=0;z<h.length/3;z++){let D=L[Math.floor(i()*L.length)];I.push(D.r,D.g,D.b)}T.setAttribute("color",new Ke(I,3));let U=new Ci(T,new Ji({size:1.6,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:ns,sizeAttenuation:!0}));return U.visible=!1,U.name="cityLights",p.add(U),{group:p,lightPts:U,count:l.length+c.length,trees:S.length+w.length}}function Cy(s,e){let t=new vt,n=new A(0,1,0),i=(o,l,c)=>{let h=new di(l,Lt.solid,o.length),d=new Je,u=new mt,f=new me,m=Kt(o.length+7);return o.forEach((_,g)=>{u.setFromAxisAngle(n,m()*Math.PI*2),d.compose(new A(_[0],_[1],_[2]),u,new A(_[3],_[3]*(.85+m()*.4),_[3])),h.setMatrixAt(g,d),h.setColorAt(g,f.set(c[Math.floor(m()*c.length)]))}),h.castShadow=!1,h.receiveShadow=!0,h},r=new lt;r.add(new fi(.07,.1,.6,3,1,!0),"#7a5a3a",{p:[0,.3,0]}),r.sphere(.55,0,"#ffffff",{p:[0,1,0]});let a=new lt;return a.add(new fi(.07,.09,.5,3,1,!0),"#7a5a3a",{p:[0,.25,0]}),a.cone(.5,1.5,5,"#ffffff",{p:[0,1.15,0]}),s.length&&t.add(i(s,r.geometry(),["#5dae45","#4f9d3a","#6bbd4f","#3f8a33","#7cc35a","#e07bb0","#f2c14e"])),e.length&&t.add(i(e,a.geometry(),["#2f6b35","#3a7d3c","#285e2f","#35743a"])),t}function ip(){let s=new pi(9e3,32,16),e=new Ft({side:$t,depthWrite:!1,fog:!1,uniforms:{top:{value:new me("#3f9be0")},horizon:{value:new me("#d6eefc")},bottom:{value:new me("#e9f5ee")}},vertexShader:`varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      #include <logdepthbuf_vertex>
    }`.replace("#include <logdepthbuf_vertex>",""),fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(clamp(h*1.6,0.0,1.0), 0.7)) : mix(horizon, bottom, clamp(-h*3.0,0.0,1.0));
      gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}),t=new tt(s,e);t.frustumCulled=!1,t.renderOrder=-10;let n=[],i=Kt(99);for(let o=0;o<1500;o++){let l=i()*Math.PI*2,c=Math.acos(i()*.95);n.push(Math.sin(c)*Math.cos(l)*8e3,Math.cos(c)*8e3,Math.sin(c)*Math.sin(l)*8e3)}let r=new gt;r.setAttribute("position",new Ke(n,3));let a=new Ci(r,new Ji({color:"#ffffff",size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return a.frustumCulled=!1,{sky:t,stars:a}}function sp(s){let e=new vt,t=Kt(555),n=[],i=new On({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.92});for(let a=0;a<16;a++){let o=new lt,l=4+Math.floor(t()*4);for(let h=0;h<l;h++)o.sphere(10+t()*12,0,"#ffffff",{p:[h*12-l*6,t()*5,(t()-.5)*14],s:[1.3,.7,1]});let c=new tt(o.geometry(),i);c.castShadow=!0,c.position.set(s.x0+t()*(s.x1-s.x0),290+t()*70,s.z0+t()*(s.z1-s.z0)),c.userData.v=3+t()*4,e.add(c),n.push(c)}return{group:e,update:a=>{for(let o of n)o.position.x+=o.userData.v*a,o.position.x>s.x1+200&&(o.position.x=s.x0-200)},mat:i}}var Ea="#e4dfd5",wa="#f7f6f2",ec="#fff1c2";function ap(s){return Math.atan2(-s.z,s.x)}function op(s,e,t,n=[]){let i=new lt,r=Ut.metro,a=18,o=r.lane+1,l=e.pos.y-e.ground;for(let c of[-1,1]){i.box(a,.35,.95,"#d6d0c4",{p:[0,.12,c*o]}),i.box(a,.04,.12,"#f2c94c",{p:[0,.31,c*(o-.42)]});let h=Math.max(.3,l+.1);i.box(a,h,.95,Ea,{p:[0,-h/2-.05,c*o]})}i.box(a+1,.14,o*2+1.5,wa,{p:[0,2.15,0]}),i.box(a+1.4,.18,o*2+1.1,ei(wa,-.06),{p:[0,2.3,0]});for(let c of[-1,1])i.box(a+1,.3,.08,s.color,{p:[0,2.02,c*(o+.75)]});n.forEach((c,h)=>{for(let d of[-1,1])i.box(a*.3,.3,.09,c,{p:[-a/2+2+h*1.6,1.72,d*(o+.76)]})});for(let c=-a/2+1;c<=a/2-1;c+=4)for(let h of[-1,1])i.box(.14,1.9,.14,"#cfd2d6",{p:[c,1.2,h*(o+.35)]});for(let c of[-1,1])i.box(a-1,.05,.12,ec,{p:[0,2.06,c*o],layer:"glow"});for(let c of[-a/2+2,a/2-2])for(let h of[-1,1])i.box(1.6,.35,.05,s.color,{p:[c,1.55,h*(o+.43)]});if(l>1.3){let c=l-.7;i.box(7,c,o*2+1.2,Ea,{p:[0,-l+c/2,0]}),i.box(7.02,c*.35,o*2+1.22,"#6a8aa6",{p:[0,-l+c*.6,0],layer:"glass"}),i.box(7.1,.25,o*2+1.3,s.color,{p:[0,-l+c+.05,0]});for(let h of[-1,1])i.box(4.5,.2,1.1,"#bdb6aa",{p:[h*5.5,-l/2-.2,o+1.4],r:[0,0,h*-Math.atan2(l,4.5)*.9]})}else{i.box(1.4,.2,o*2+3,Ea,{p:[a/2-2,3.1,0]});for(let c of[-1,1])i.box(1.4,3.2,1.2,Ea,{p:[a/2-2,1.5,c*(o+1.6)]}),i.box(1.42,.6,1.22,"#6a8aa6",{p:[a/2-2,2.5,c*(o+1.6)],layer:"glass"});i.box(1.45,.25,o*2+3.05,s.color,{p:[a/2-2,3.3,0]})}return Ta(i,e,s)}function lp(s,e){let t=new lt,n=Ut.tram,i=9,r=n.lane+.75;for(let a of[-1,1]){t.box(i,.28,.75,"#d9d3c7",{p:[0,.05,a*r]}),t.box(i,.03,.1,"#f2c94c",{p:[0,.2,a*(r-.32)]}),t.box(4.2,.08,.95,s.color,{p:[0,1.55,a*r]}),t.box(4.2,.04,.9,wa,{p:[0,1.61,a*r]});for(let o of[-1.9,1.9])t.box(.08,1.4,.08,"#5a5f66",{p:[o,.85,a*(r+.3)]});t.box(4,1,.04,"#9ec9e0",{p:[0,.8,a*(r+.34)],layer:"glass"}),t.box(3.9,.04,.6,ec,{p:[0,1.5,a*r],layer:"glow"})}return Ta(t,e,s)}function cp(s,e,t){let n=new lt,i=9,r=1.1,a=t?t.color:s.color;n.box(i,.3,r,"#d4cec3",{p:[0,.1,0]}),n.box(i,1.2,r-.1,"#8fc6dc",{p:[0,.85,0],layer:"glass"});for(let o=-i/2+.3;o<=i/2;o+=2.1)n.box(.08,1.25,r,"#e9ecef",{p:[o,.85,0]});return n.box(i+.6,.12,r+.5,wa,{p:[0,1.52,0]}),n.box(i+.62,.22,r+.1,s.color,{p:[0,1.4,0]}),t&&n.box(i*.5,.23,r+.12,a,{p:[i*.2,1.4,0]}),n.box(i-.4,.04,r-.3,ec,{p:[0,1.44,0],layer:"glow"}),n.box(1.2,.4,.06,ti.green,{p:[-i/2+.8,1.8,0]}),Ta(n,e,s,!0)}function hp(s,e){let t=new lt,n=Ut.bus;for(let i of[-1,1]){let r=i*(n.half+.55);t.box(3.2,.2,.9,"#d4cec3",{p:[0,.05,r]}),t.box(3,.07,.9,s.color,{p:[0,1.25,r]}),t.box(2.8,.9,.04,"#9ec9e0",{p:[0,.7,r+i*.4],layer:"glass"});for(let a of[-1.3,1.3])t.box(.07,1.15,.07,"#5a5f66",{p:[a,.65,r+i*.38]})}return Ta(t,e,s)}function up(s,e,t){let n=new lt,i=Ut.lrt,r=t?14:10,a=i.lane+.8;for(let o of[-1,1]){n.box(r,.28,.8,"#e6d8d5",{p:[0,.05,o*a]}),n.box(r*.55,.08,1,s.color,{p:[0,1.6,o*a]});for(let l of[-r*.25,r*.25])n.box(.08,1.5,.08,"#6b6b6b",{p:[l,.85,o*(a+.3)]});n.box(r,.5,.05,"#f4f4f4",{p:[0,.45,o*(a+.9)]}),n.box(r,.12,.06,"#ff5a1f",{p:[0,.55,o*(a+.9)]})}return t&&rp(n,-r/2-3,a+3,s.color),e.underground&&(n.box(4,1.2,3,"#cfc8bd",{p:[0,.6,0]}),n.box(3,.9,2,"#2d2f33",{p:[.6,.8,0]}),rp(n,4,-a-4,s.color)),Ta(n,e,s)}function rp(s,e,t,n){s.box(.45,9,.45,"#f2b705",{p:[e,9/2,t]});for(let r=1;r<9;r+=1.2)s.box(.5,.08,.5,"#d49d00",{p:[e,r,t]});s.box(9,.35,.35,"#f2b705",{p:[e+3,9+.2,t]}),s.box(3,.35,.35,"#f2b705",{p:[e-2.2,9+.2,t]}),s.box(1,.8,.8,"#7d7d7d",{p:[e-3.2,9-.1,t]}),s.box(.8,.8,.7,n,{p:[e+.2,9-.5,t+.55]}),s.box(.04,3,.04,"#333333",{p:[e+6,9-1.3,t]}),s.box(.5,.3,.5,"#555555",{p:[e+6,9-2.9,t]}),s.box(.1,.1,.1,"#ff3b30",{p:[e+7.4,9+.45,t],layer:"glow"})}function dp(s,e,t,n,i){let r=new lt,a=t===0||t===n-1,o=Ut.cable.lane,l=e.cableY-e.ground,c=a?7.5:8.5,h=o*2+2.6,d=l-Ut.cable.floor;r.box(c,d,h,Ea,{p:[0,-l+d/2,0]}),r.box(c+.05,d*.3,h+.05,"#c8c1b4",{p:[0,-l+d*.25,0]}),r.box(c-.4,.18,h-.4,"#d8d2c6",{p:[0,-l+d+.09,0]});for(let m of[-c/2+.3,c/2-.3])for(let _ of[-1,1])r.box(.3,2.95,.3,"#f0eeea",{p:[m,-l+d+1.45,_*(h/2-.2)]});r.box(c+1.4,.35,h+1.2,s.color,{p:[0,1,0]}),r.box(c+.8,.25,h+.6,wa,{p:[0,1.28,0]}),r.box(c-.2,1.4,.05,"#9ec9e0",{p:[0,-l+d+.9,h/2-.25],layer:"glass"}),r.box(c-.2,1.4,.05,"#9ec9e0",{p:[0,-l+d+.9,-h/2+.25],layer:"glass"});for(let m of[-1,1])r.box(c,.12,.2,"#5d6168",{p:[0,.12,m*o]});if(r.box(c-.6,.05,h-1,ec,{p:[0,.82,0],layer:"glow"}),a){let m=t===0?-1:1;r.add(new mi(o,.14,6,16),"#3b3f45",{p:[m*(c/2-.2),.15,0],r:[Math.PI/2,0,0]}),r.cyl(.35,.35,.5,8,"#5d6168",{p:[m*(c/2-.2),.3,0]}),r.box(1.6,.8,h-.6,ei(s.color,-.12),{p:[m*(c/2+.7),.55,0]})}r.box(2.2,.55,.06,s.color,{p:[0,-l+d+2,h/2+.05]}),r.box(2.2,.55,.06,s.color,{p:[0,-l+d+2,-h/2-.05]}),r.box(3,.2,1.2,"#bdb6aa",{p:[-c/2-1.2,-l+d/2,h/2-.8],r:[0,0,Math.atan2(d,3)]});let u=s.path.smoothTangentAt(e.s,3).setY(0).normalize(),f=r.build({castShadow:!0});return f.position.copy(e.pos),f.rotation.y=ap(u),f}function Ta(s,e,t,n){let i=s.build({castShadow:!0}),r=t.path.smoothTangentAt(e.s,4).setY(0).normalize();return i.position.copy(e.pos),n&&i.position.copy(e.center||e.pos),i.rotation.y=ap(r),i}var fp=["#2f6b35","#3a7d3c","#285e2f"],pp=["#4f9d3a","#5cad45","#3f8a33","#6bb84f"];function cr(s,e,t,n,i=1,r=!1,a=Math.random){r?(s.cyl(.08*i,.1*i,.6*i,5,"#6b4a2b",{p:[e,t+.3*i,n]}),s.cone(.55*i,1.6*i,6,fp[Math.floor(a()*fp.length)],{p:[e,t+1.3*i,n]})):(s.cyl(.08*i,.1*i,.7*i,5,"#6b4a2b",{p:[e,t+.35*i,n]}),s.sphere(.55*i,0,pp[Math.floor(a()*pp.length)],{p:[e,t+1*i,n]}))}function mp(s,e){let t=un(s.lat,s.lon),n=e.heightAt(t.x,t.z),i=new lt,r=Kt(s.id.length*977+13),a=(d,u)=>e.heightAt(t.x+d,t.z+u)-n,o=6,l=null,c=[];switch(s.model){case"arvi":{for(let d=0;d<70;d++){let u=r()*Math.PI*2,f=4+r()*26,m=Math.cos(u)*f,_=Math.sin(u)*f;cr(i,m,a(m,_)-.1,_,2.2+r()*1.4,r()<.7,r)}i.box(5,1.8,3.5,"#8b5a2b",{p:[0,.9,0]}),i.roof(5.6,4.2,1.6,"#a0522d",{p:[0,1.8,0]}),i.box(1.2,1.1,.1,"#f2e6c9",{p:[0,1,1.8]}),i.box(3.6,.9,.2,ti.green,{p:[4,1.8,3]}),i.box(.2,1.6,.2,"#6b4a2b",{p:[4,.8,3]}),o=8;break}case"biblioteca":{[[-2.6,0,.3,3.2,4.2,3.4],[.8,.3,-.4,3.6,5,3.6],[3.8,.7,.6,2.8,3.6,3]].forEach(([u,f,m,_,g,p],b)=>{i.box(_,g,p,"#34353a",{p:[u,a(u,0)+g/2-.4+f,0],r:[.12*(b-1),.3*b,m*.3]}),i.box(_*.9,.12,p*.3,"#f5d77a",{p:[u,a(u,0)+g*.55+f,p*.45],r:[.12*(b-1),.3*b,m*.3],layer:"glow"})}),i.box(10,.3,5,"#cfc6b8",{p:[.4,a(0,0)-.1,3.6]}),o=7;break}case"botero":{i.box(16,.25,12,"#e6dccb",{p:[0,.1,0]});for(let u=0;u<6;u++)for(let f=0;f<3;f++)i.box(1.5,1.4,5,(u+f)%2?"#1f1f1f":"#f2f2ee",{p:[-7+u*1.5+.75,.9+f*1.4,-8.5]});i.box(9,.4,5.2,"#2a2a2a",{p:[-2.5,5.2,-8.5]});for(let u of[-6.4,-2.5,1.4])i.cone(.6,2.6,4,"#2a2a2a",{p:[u,6.6,-8.5]});i.box(8,3.4,5,"#d9c7a4",{p:[8,1.8,-7]}),i.box(8.2,.4,5.2,"#b89c6e",{p:[8,3.6,-7]}),[[-4,2],[-1,-2],[2,3],[5,-1],[-6,-3],[1,0],[6,4]].forEach(([u,f],m)=>{let _=.9+m%3*.25;i.box(1*_,.4,1*_,"#8c8579",{p:[u,.4,f]}),i.sphere(.95*_,1,"#5e3f25",{p:[u,1.5*_+.3,f],s:[1,1.15,.9]}),i.sphere(.42*_,1,"#6b4a2c",{p:[u,2.7*_+.35,f]})});for(let u=0;u<6;u++)cr(i,-7+u*2.8,.2,5.2,1.3,!1,r);o=8;break}case"coltejer":{i.box(4.2,12,3.4,"#e9e7e2",{p:[0,6,0]});for(let d=1;d<12;d+=.9)i.box(4.25,.35,3.45,"#7f98ad",{p:[0,d,0],layer:"glass"});i.cyl(.01,2.1,6.5,4,"#f2f1ec",{p:[0,15.2,0],r:[0,Math.PI/4,0],s:[1,1,.8]}),i.box(.35,4.2,1.2,"#35414d",{p:[0,14.3,0]}),i.cyl(.04,.04,1.8,4,"#d0d0d0",{p:[0,19.2,0]}),i.sphere(.12,0,"#ff3b30",{p:[0,20.1,0],layer:"glow"}),i.box(8,1.6,6,"#cfcac1",{p:[0,.8,0]}),o=21;break}case"catedral":{i.box(9,3.2,4.5,"#a4553a",{p:[0,1.6,0]}),i.roof(9.2,4.8,1.6,"#6e3b2b",{p:[0,3.2,0]}),i.box(2.2,7.5,2.2,"#b05e40",{p:[5,3.75,0]}),i.cone(1.5,2.4,4,"#6e3b2b",{p:[5,8.7,0],r:[0,Math.PI/4,0]}),i.sphere(1.6,1,"#9a4d34",{p:[-3,4.2,0],s:[1,.8,1]}),i.box(.9,1.5,.1,"#3a2419",{p:[5,.8,1.15]}),i.sphere(.3,0,"#f6d77a",{p:[5,6.5,1.12],layer:"glow"}),i.box(10,.15,8,"#8fc05a",{p:[-2,.05,7]});for(let d=0;d<8;d++)cr(i,-6+d%4*3,.1,5+Math.floor(d/4)*4,1.4,!1,r);o=10;break}case"pueblito":{i.box(2.6,2.4,3.6,"#fbfaf5",{p:[0,1.2,0]}),i.roof(3.8,2.8,1.4,"#b5452f",{p:[0,2.4,0],r:[0,Math.PI/2,0]}),i.box(1.2,4.5,1.2,"#fbfaf5",{p:[0,2.25,-2.2]}),i.cone(.95,1.6,4,"#b5452f",{p:[0,5.3,-2.2],r:[0,Math.PI/4,0]});let d=["#2f80ed","#27ae60","#eb5757","#f2c94c","#9b51e0"];for(let u=0;u<8;u++){let f=u/8*Math.PI*2+.3,m=Math.cos(f)*5.5,_=Math.sin(f)*5.5,g=a(m,_);i.box(2,1.4,1.6,"#fbfaf5",{p:[m,g+.7,_],r:[0,-f,0]}),i.roof(2.2,1.9,.8,"#b5452f",{p:[m,g+1.4,_],r:[0,-f,0]}),i.box(2.02,.5,.3,d[u%d.length],{p:[m,g+.45,_],r:[0,-f,0]})}o=7;break}case"estadio":{for(let u=0;u<28;u++){let f=u/28*Math.PI*2,m=9.5,_=7,g=Math.cos(f)*m,p=Math.sin(f)*_,b=2*Math.PI/28*8.5;i.box(b,2.4,2.2,u%2?"#d9d4ca":"#e6e1d7",{p:[g,1.2,p],r:[0,-f+Math.PI/2,0]}),i.box(b,.3,2.6,u%7===0?"#e30613":"#1d56a5",{p:[g*.97,2.5,p*.97],r:[0,-f+Math.PI/2,0]})}i.cyl(7.6,7.6,.15,24,"#4caf50",{p:[0,.15,0],s:[1,1,.68]}),i.box(10,.02,.1,"#ffffff",{p:[0,.25,0],r:[0,Math.PI/2,0]});for(let[u,f]of[[-10.5,-8],[10.5,-8],[-10.5,8],[10.5,8]])i.box(.3,7,.3,"#bfc4c9",{p:[u,3.5,f]}),i.box(1.6,.9,.3,"#ffffff",{p:[u,7.2,f],layer:"glow"});o=9;break}case"explora":{[[-3,0,4.5,3.2,4],[1.8,-1,3.5,4.2,3.5],[0,3.5,5,2.6,3],[4.5,2.5,3,3.5,3]].forEach(([u,f,m,_,g])=>i.box(m,_,g,"#d7262e",{p:[u,_/2,f]})),i.box(12,.9,9,"#2b2b2e",{p:[.8,.45,1.2]}),i.box(3,.1,2,"#46b3e6",{p:[-3,.95,4.5],layer:"glow"}),o=6;break}case"orquideorama":{for(let d=0;d<7;d++){let u=d/6*Math.PI*2,f=d===6?0:Math.cos(u)*3.4,m=d===6?0:Math.sin(u)*3.4;i.cyl(.25,.4,3.4,6,"#b88a52",{p:[f,1.7,m]}),i.cyl(1.95,.6,.6,6,"#c99b5f",{p:[f,3.6,m]}),i.cyl(1.9,1.9,.08,6,"#e7c98f",{p:[f,3.93,m]})}for(let d=0;d<26;d++){let u=r()*Math.PI*2,f=6+r()*7;cr(i,Math.cos(u)*f,0,Math.sin(u)*f,1.3+r(),!1,r)}i.box(4,.1,3,"#5fb2e0",{p:[8,.1,-6]}),o=6;break}case"parque_norte":{let d=new lt;d.add(new mi(3.2,.12,5,20),"#ffffff",{});for(let f=0;f<10;f++){let m=f/10*Math.PI*2;d.box(6.4,.08,.08,"#e0e0e0",{r:[0,0,m]}),d.box(.5,.45,.5,["#eb5757","#f2c94c","#2f80ed","#27ae60","#9b51e0"][f%5],{p:[Math.cos(m)*3.2,Math.sin(m)*3.2-.35,0]})}let u=d.build();u.position.set(0,4.3,0),c.push(u),l=f=>u.rotation.z=f*.25;for(let f of[-1,1])i.box(.25,4.6,.25,"#bdbdbd",{p:[f*1.2,2.2,0],r:[0,0,f*.28]});for(let f=0;f<12;f++){let m=3+f*.8,_=1.2+Math.sin(f*.9)*1.1+1.2;i.box(.12,_,.12,"#f2994a",{p:[m,_/2,3]}),i.box(.85,.12,.6,"#eb5757",{p:[m,_,3],r:[0,0,Math.cos(f*.9)*.6]})}o=8;break}case"comuna13":{let d=["#e74c3c","#f1c40f","#3498db","#9b59b6","#1abc9c","#e67e22","#ff6b9d","#2ecc71"];for(let u=0;u<36;u++){let f=-7+u%6*2.6+r()*.6,m=-7+Math.floor(u/6)*2.6+r()*.6,_=a(f,m),g=1.2+r()*1.4;i.box(2.1,g,2.1,d[u%d.length],{p:[f,_+g/2-.3,m]}),i.box(2.2,.15,2.2,"#b5552f",{p:[f,_+g-.25,m]})}for(let u=0;u<4;u++){let m=-6+u*4,_=a(8.5,m),g=a(8.5,m+3.4),p=Math.atan2(g-_,3.4);i.box(1,.25,3.8,"#9a9a9a",{p:[8.5,(_+g)/2+.3,m+1.7],r:[-p,0,0]}),i.box(1.4,.1,3.8,"#f28c28",{p:[8.5,(_+g)/2+1.5,m+1.7],r:[-p,0,0]})}o=6;break}case"epm":{i.box(6,11,5,"#3f5b6f",{p:[0,5.5,0]});for(let d=.5;d<11;d+=1.1)i.box(6.05,.18,5.05,"#e8eaec",{p:[0,d,0]});i.box(6.4,.5,5.4,"#e8eaec",{p:[0,11.2,0]}),i.box(7,.8,1,ti.green,{p:[0,10.1,2.8],layer:"glow"}),i.box(9,.15,5,"#5fb2e0",{p:[-9,.12,3]}),i.box(6,.12,4,"#e8d9a8",{p:[-8,.1,-3]});for(let d=0;d<12;d++)i.cyl(.12,.12,3,5,"#9bc45a",{p:[-12+d%4*1.1,1.5,-5+Math.floor(d/4)*1.1]});i.cyl(4.5,5,3.5,8,"#b5613e",{p:[9,1.75,-2],r:[0,.3,0],s:[1,1,.7]}),o=13;break}case"luces":{i.box(12,.1,9,"#d8d3c8",{p:[0,.05,0]});for(let d=0;d<7;d++)for(let u=0;u<5;u++){let f=-5+d*1.65,m=-3.4+u*1.7;i.box(.1,4,.1,"#f4f4f4",{p:[f,2,m]}),i.box(.22,.4,.22,"#ffffff",{p:[f,4.1,m],layer:"glow"})}i.box(5,5,3,"#c9a27a",{p:[-8.5,2.5,-5]}),i.box(5,5,3,"#c9a27a",{p:[8.5,2.5,-5]}),o=6;break}case"memoria":{i.box(7,3,4.5,"#cfc8bc",{p:[0,1.5,0]});for(let d=0;d<9;d++)i.box(.15,3.1,4.6,"#a7a095",{p:[-3.3+d*.82,1.55,0]});i.box(8,.1,7,"#8fc05a",{p:[0,.05,5]}),o=5;break}case"cerro":{for(let d=0;d<90;d++){let u=r()*Math.PI*2,f=r()*22,m=Math.cos(u)*f,_=Math.sin(u)*f;cr(i,m,a(m,_)-.1,_,1.6+r()*1.2,!1,r)}i.box(.15,3,.15,"#dddddd",{p:[0,a(0,0)+1.5,0]}),i.box(1.4,.8,.05,ti.green,{p:[.7,a(0,0)+2.6,0]}),o=7;break}case"aeropuerto":{for(let f=0;f<3;f++){let _=-75+50*(f+.5),g=Math.sin(.14)*_,p=Math.cos(.14)*_;i.box(4.5,.3,50+.5,"#4d4f54",{p:[g,a(g,p)+.05,p],r:[0,.14,0]}),i.box(.25,.32,50*.9,"#f5f5f5",{p:[g,a(g,p)+.07,p],r:[0,.14,0]}),i.box(1.5,.28,50+.5,"#6b6d70",{p:[g+5.5,a(g+5.5,p)+.04,p],r:[0,.14,0]})}i.box(10,2.6,4,"#f4efe4",{p:[13,a(13,0)+1.3,2],r:[0,.14,0]}),i.box(3,4,3,"#f4efe4",{p:[13,a(13,0)+2,2],r:[0,.14,0]}),i.box(10.2,.4,4.2,"#3d78b8",{p:[13,a(13,0)+2.7,2],r:[0,.14,0]}),i.box(1.2,2,1.2,"#f4efe4",{p:[16,a(16,-6)+3,-6]}),i.box(2,1,2,"#6b8fa8",{p:[16,a(16,-6)+4.4,-6],layer:"glass"}),o=6;break}case"poblado":{let d=["#f4efe6","#e9e2d2","#dfe6ea","#f1e7d9","#c9d6de"];for(let u=0;u<12;u++){let f=-8+u%4*5.3+r()*1.2,m=-6+Math.floor(u/4)*5.5+r(),_=8+r()*10,g=a(f,m);i.box(3,_,3,d[u%d.length],{p:[f,g+_/2-.3,m]});for(let p=1.5;p<_;p+=1.4)i.box(3.05,.25,3.05,"#8fa9bd",{p:[f,g+p,m],layer:"glass"})}i.box(6,.12,5,"#8fc05a",{p:[0,a(0,0)+.06,0]});for(let u=0;u<6;u++){let f=-2+u%3*2,m=-1.5+Math.floor(u/3)*3;i.cyl(.07,.1,2.4,5,"#8b6b4a",{p:[f,a(f,m)+1.2,m]});for(let _=0;_<5;_++){let g=_/5*Math.PI*2;i.box(1.1,.06,.3,"#3f9a3a",{p:[f+Math.cos(g)*.5,a(f,m)+2.4,m+Math.sin(g)*.5],r:[0,-g,-.35]})}}o=20;break}case"castillo":{i.box(5,3.5,5,"#b9b2a4",{p:[0,1.75,0]});for(let d=0;d<5;d++)i.box(.6,.5,5.1,"#b9b2a4",{p:[-2.2+d*1.1,3.75,0]});for(let[d,u]of[[-2.5,-2.5],[2.5,-2.5],[-2.5,2.5],[2.5,2.5]])i.cyl(.9,.9,5,8,"#c4bdaf",{p:[d,2.5,u]}),i.cone(1.1,1.8,8,"#5a6b7c",{p:[d,5.9,u]});i.box(.05,1.2,.05,"#555555",{p:[2.5,7.3,2.5]}),i.box(.7,.4,.04,"#d6282c",{p:[2.85,7.6,2.5]});for(let d=0;d<10;d++)cr(i,-7+r()*14,0,5+r()*4,1.2,r()<.3,r);o=8;break}case"mamm":{i.box(6,3.5,5,"#a44f34",{p:[0,1.75,0]}),i.box(4,2.2,4,"#7c4225",{p:[4.2,4.5,1],r:[0,.2,0]}),i.box(3.5,2,3.5,"#8b4a2b",{p:[1.5,5.2,-1.4],r:[0,-.15,0]}),o=7;break}default:i.box(3,3,3,"#cccccc",{p:[0,1.5,0]})}let h=i.build({castShadow:!0,receiveShadow:!0});for(let d of c)h.add(d);return h.position.set(t.x,n,t.z),{group:h,anim:l,top:o,pos:new A(t.x,n,t.z)}}var Ry=.27,hr={estudiante:{label:"Estudiante",desc:"Mochila al hombro, rumbo a la U.",skin:"#c98e62",hair:"#2b1d14",shirt:"#2f80ed",pants:"#2c3e63",shoes:"#f2f2f2",acc:"mochila",accColor:"#f2994a"},turista:{label:"Turista",desc:"C\xE1mara lista para Plaza Botero.",skin:"#f0c7a0",hair:"#c9a25e",shirt:"#f2c94c",pants:"#6fcf97",shoes:"#8d5a3b",acc:"camara",accColor:"#e8e2d0"},paisa:{label:"Arriero paisa",desc:"Sombrero aguade\xF1o, carriel y ruana.",skin:"#b97d52",hair:"#1f1a17",shirt:"#ffffff",pants:"#3d3d45",shoes:"#4a2f1e",acc:"paisa",accColor:"#a33a2d"}};function gp(s){let e=new lt;s(e);let t=new tt(e.geometry(),Lt.solid);return t.castShadow=!0,t}function Aa(s){let e=new vt,t=new vt;e.add(t);let n=gp(c=>{c.box(.28,.62,.44,s.shirt,{p:[0,1.14,0]}),c.box(.26,.14,.4,s.pants,{p:[0,.8,0]}),c.box(.12,.08,.12,s.skin,{p:[0,1.48,0]}),c.sphere(.17,1,s.skin,{p:[0,1.66,0]}),c.sphere(.175,1,s.hair,{p:[-.02,1.72,0],s:[1,.62,1]}),c.box(.03,.04,.05,"#1a1a1a",{p:[.16,1.68,.06]}),c.box(.03,.04,.05,"#1a1a1a",{p:[.16,1.68,-.06]}),s.acc==="mochila"?(c.box(.2,.42,.34,s.accColor,{p:[-.24,1.15,0]}),c.box(.08,.15,.3,"#d17a31",{p:[-.36,1.05,0]})):s.acc==="camara"?(c.cyl(.32,.32,.03,10,s.accColor,{p:[0,1.82,0]}),c.cyl(.17,.19,.16,10,s.accColor,{p:[0,1.9,0]}),c.box(.12,.1,.16,"#333333",{p:[.18,1.12,0]}),c.cyl(.04,.04,.06,8,"#111111",{p:[.26,1.12,0],r:[0,0,Math.PI/2]})):s.acc==="paisa"?(c.cyl(.36,.36,.03,12,"#f6f1e3",{p:[0,1.82,0]}),c.cyl(.16,.19,.17,12,"#f6f1e3",{p:[0,1.91,0]}),c.cyl(.192,.192,.05,12,"#1d1d1d",{p:[0,1.86,0]}),c.box(.34,.36,.62,s.accColor,{p:[0,1.32,0]}),c.box(.36,.06,.64,"#f2e9d8",{p:[0,1.16,0]}),c.box(.16,.18,.06,"#7a4a25",{p:[.02,.98,.26]})):s.acc==="bolso"&&c.box(.14,.2,.06,s.accColor,{p:[.02,.98,.25]})});t.add(n);let i=(c,h,d,u)=>{let f=new vt,m=gp(_=>{_.box(d,h,d,c,{p:[0,-h/2,0]}),u&&_.box(d*.9,.1,d*.9,u,{p:[0,-h-.03,0]})});return f.add(m),f},r=i(s.shirt,.55,.11,s.skin),a=i(s.shirt,.55,.11,s.skin);r.position.set(0,1.42,-.29),a.position.set(0,1.42,.29);let o=i(s.pants,.72,.14,s.shoes),l=i(s.pants,.72,.14,s.shoes);return o.position.set(0,.8,-.11),l.position.set(0,.8,.11),t.add(r,a,o,l),e.scale.setScalar(Ry),e.userData.rig={body:t,armL:r,armR:a,legL:o,legR:l,phase:Math.random()*10},e}function Ca(s,e,t,n=1){let i=s.userData.rig;if(!i)return;let r=e*7*n+i.phase;if(t){let a=Math.sin(r);i.legL.rotation.z=a*.55,i.legR.rotation.z=-a*.55,i.armL.rotation.z=-a*.45,i.armR.rotation.z=a*.45,i.body.position.y=Math.abs(Math.cos(r))*.05}else i.legL.rotation.z*=1-.15,i.legR.rotation.z*=1-.15,i.armL.rotation.z=i.armL.rotation.z*(1-.15)+Math.sin(e*1.3+i.phase)*.04*.15,i.armR.rotation.z=i.armR.rotation.z*(1-.15)-Math.sin(e*1.3+i.phase)*.04*.15,i.body.position.y=Math.sin(e*2+i.phase)*.01}var _p=["#eb5757","#2f80ed","#27ae60","#f2c94c","#9b51e0","#ffffff","#f2994a","#56ccf2","#e84393","#1abc9c"],Py=["#2c3e50","#34495e","#4f4f4f","#6d4c41","#1e3a5f","#8e8e8e"],Iy=["#f1c27d","#e0ac69","#c68642","#8d5524","#ffdbac","#b97d52"],Ly=["#1f1a17","#3b2a20","#6b4a2b","#c9a25e","#2b1d14","#8a8a8a"];function xp(s){let e=Kt(s),t=i=>i[Math.floor(e()*i.length)],n=["none","none","mochila","bolso","camara"];return{skin:t(Iy),hair:t(Ly),shirt:t(_p),pants:t(Py),shoes:"#2b2b2b",acc:t(n),accColor:t(_p)}}var ur=.25,Zh=.4,Wt="#f3f5f6",ni="#253240",eu="#2b2e33",Dy="#1c1d20";function us(s,e,t,n=.45,i=.45){for(let r of e)for(let a of[-t,t])s.cyl(n,n,.3,8,Dy,{p:[r,i,a],r:[Math.PI/2,0,0]})}function nc(s,e,t,n,i="#fff3c0"){for(let r of[-1,1])s.box(.12,.25,.45,i,{p:[e,t,n*r],layer:"glow"})}function Jh(s,e){let t=new lt,n=21.6,i=3.1;t.box(n-1.2,.55,i-.4,"#3b3f45",{p:[0,.78,0]});for(let r of[-n/2+3.4,n/2-3.4])t.box(3,.5,i-.5,eu,{p:[r,.45,0]}),us(t,[r-.9,r+.9],1,.42,.42);t.box(n,1.35,i,Wt,{p:[0,1.72,0]}),t.box(n-1.2,1.05,i+.02,ni,{p:[0,2.9,0]});for(let r=-n/2+1.6;r<n/2-1;r+=2.5)t.box(.3,1.06,i+.04,Wt,{p:[r,2.9,0]});t.box(n,.6,i,Wt,{p:[0,3.72,0]}),t.box(n-.6,.32,i-.5,"#d4d8dc",{p:[0,4.15,0]}),t.box(n+.03,.3,i+.05,s,{p:[0,1.5,0]}),t.box(n+.03,.12,i+.05,ti.green,{p:[0,1.2,0]});for(let r of[-7.3,-2.45,2.45,7.3])t.box(1.45,2.35,i+.06,"#c3cad1",{p:[r,2.15,0]}),t.box(1,.8,i+.08,ni,{p:[r,2.85,0]});for(let r of[-5,0,5])t.box(2.2,.35,1.6,"#c5c9ce",{p:[r,4.45,0]});for(let r of[-1,1])t.box(.5,2.6,2.3,"#3a3a3e",{p:[r*(n/2+.2),2.3,0]});return e==="mid"&&(t.box(.2,.9,.12,"#55595f",{p:[-1,4.9,0],r:[0,0,.6]}),t.box(.2,.9,.12,"#55595f",{p:[-.4,5.2,0],r:[0,0,-.6]}),t.box(.2,.08,2,"#55595f",{p:[.1,5.55,0]})),e==="head"&&(t.box(1.6,3,i,Wt,{p:[n/2+.55,2.2,0]}),t.box(.35,1.3,i-.35,ni,{p:[n/2+1.25,3,0],r:[0,0,-.28]}),t.box(.3,.9,i-.2,s,{p:[n/2+1.3,1.55,0]}),nc(t,n/2+1.42,1.9,1.05),t.box(.2,.35,1.8,"#1e2126",{p:[n/2+1.25,3.85,0],layer:"glow"})),t}function Ny(s){let e=ur,t=Jh(s,"head").build(),n=Jh(s,"mid").build(),r=new lt().merge(Jh(s,"head"),{r:[0,Math.PI,0]}).build(),a=[t,n,r];for(let o of a)o.scale.setScalar(e);return{cars:a,lengths:[22.6*e,22*e,22.6*e],gap:.6*e,kind:"train"}}function Kh(s,e){let t=new lt,n=e==="mid"?8.5:11,i=2.3;t.box(n,.5,i-.2,eu,{p:[0,.4,0]}),t.box(n,1.2,i,Wt,{p:[0,1.25,0]}),t.box(n-.6,1.25,i+.02,ni,{p:[0,2.45,0]});for(let r=-n/2+1.2;r<n/2-.6;r+=2.2)t.box(.25,1.26,i+.04,Wt,{p:[r,2.45,0]});t.box(n,.45,i,Wt,{p:[0,3.25,0]}),t.box(n-.8,.3,i-.5,"#d9dde0",{p:[0,3.6,0]}),t.box(n+.02,.45,i+.05,s,{p:[0,.85,0]}),t.box(n+.02,.1,i+.05,ei(s,.2),{p:[0,1.75,0]}),us(t,[-n/2+1.8],.85,.38,.38),e==="mid"&&(t.box(.2,.8,.1,"#55595f",{p:[-.6,4.1,0],r:[0,0,.6]}),t.box(.2,.8,.1,"#55595f",{p:[-.1,4.35,0],r:[0,0,-.6]}),t.box(.2,.06,1.6,"#55595f",{p:[.3,4.72,0]}));for(let r of[-1,1])t.box(.4,2.4,1.9,"#3c3c40",{p:[r*(n/2+.15),1.9,0]});return e==="head"&&(t.cyl(i/2,i/2,3,8,Wt,{p:[n/2+.2,1.95,0],s:[.9,1,1]}),t.box(.5,1.5,i-.3,ni,{p:[n/2+1,2.65,0],r:[0,0,-.25]}),t.box(.4,.5,i-.4,s,{p:[n/2+1.05,.9,0]}),nc(t,n/2+1.12,1.35,.72)),{b:t,L:n}}function Uy(s){let e=ur,t=Kh(s,"head"),n=Kh(s,"mid"),i=Kh(s,"head"),r=new lt().merge(i.b,{r:[0,Math.PI,0]}).build(),a=[t.b.build(),n.b.build(),r];for(let o of a)o.scale.setScalar(e);return{cars:a,lengths:[(t.L+1.2)*e,n.L*e,(i.L+1.2)*e],gap:.5*e,kind:"tram"}}function ic(s){let e=new lt;e.box(1,.4,.45,"#4a4e55",{p:[0,.05,0]}),e.box(.18,1.9,.18,"#8b9097",{p:[0,-.95,0]}),e.box(.18,.18,1,"#8b9097",{p:[0,-1.9,0]}),e.box(.12,.35,.12,"#8b9097",{p:[0,-2.05,.45]}),e.box(.12,.35,.12,"#8b9097",{p:[0,-2.05,-.45]});let t=Math.PI/8;e.cyl(.95,1.3,.35,8,Wt,{p:[0,-2.35,0],r:[0,t,0]}),e.cyl(1.3,1.3,1,8,"#3f5f7a",{p:[0,-3.05,0],r:[0,t,0]});for(let i=0;i<8;i++){let r=i/8*Math.PI*2;e.box(.14,1,.14,Wt,{p:[Math.cos(r)*1.22,-3.05,Math.sin(r)*1.22]})}e.cyl(1.3,1.1,1.05,8,s,{p:[0,-4.07,0],r:[0,t,0]}),e.cyl(1.1,.8,.25,8,ei(s,-.15),{p:[0,-4.72,0],r:[0,t,0]}),e.box(.05,.6,1.3,"#ffffff",{p:[1.26,-4,0]});let n=e.geometry();return n.scale(Zh,Zh,Zh),n}function tc(s,e,t,n,i,r={}){let a=r.H||3.1;s.box(e,.9,t,i,{p:[0,.95,0]}),s.box(e,a-1.4-.5,t,i,{p:[0,1.4+(a-1.9)/2+.35,0]}),s.box(e-.4,1.15,t+.02,ni,{p:[0,2.1,0]});for(let o=-e/2+1.2;o<e/2-.5;o+=1.9)s.box(.18,1.16,t+.04,i,{p:[o,2.1,0]});s.box(e,.4,t,i,{p:[0,a-.2,0]}),s.box(e-.6,.12,t+.04,n,{p:[0,1.55,0]}),s.box(e+.02,.35,t+.03,n,{p:[0,.7,0]})}function tu(s,e,t,n){s.box(.25,1.4,t-.2,ni,{p:[e/2+.05,2.05,0]}),s.box(.2,.5,t-.6,"#1e2126",{p:[e/2+.06,2.95,0],layer:"glow"}),nc(s,e/2+.08,.95,.9),s.box(.15,.3,t-.3,n,{p:[e/2+.05,.65,0]})}function Fy(s){let e=ur,t=2.55,n=new lt;tc(n,11.5,t,s,Wt),tu(n,11.5,t,s),us(n,[3.6,-2.6],1.15,.5,.5),n.box(3,.35,1.2,"#cfd3d6",{p:[-1,3.25,0]});let i=new lt;tc(i,6.5,t,s,Wt),us(i,[-1.8],1.15,.5,.5),i.box(.8,2.6,2.3,"#2f3033",{p:[3.4,1.7,0]});let r=[n.build(),i.build()];for(let a of r)a.scale.setScalar(e);return{cars:r,lengths:[11.6*e,7.2*e],gap:.1*e,kind:"bus"}}function vp(s){let e=ur,t=2.5,n=new lt;tc(n,12,t,s,Wt),tu(n,12,t,s),us(n,[3.9,-3.3],1.12,.5,.5),n.box(4,.35,1.6,"#9fd3a8",{p:[-1,3.25,0]});let i=n.build();return i.scale.setScalar(e),{cars:[i],lengths:[12.2*e],gap:0,kind:"bus"}}function yp(s){let e=ur,t=2.4,n=new lt;tc(n,9.5,t,Wt,s,{H:3}),tu(n,9.5,t,Wt),us(n,[3,-2.6],1.1,.48,.48),n.box(9.2,.14,t+.02,"#ffffff",{p:[0,2.95,0]});let i=n.build();return i.scale.setScalar(e),{cars:[i],lengths:[9.7*e],gap:0,kind:"feeder"}}function Qh(s,e){let t=new lt,n=e==="mid"?9:12,i=2.65;t.box(n,.55,i-.2,eu,{p:[0,.45,0]}),t.box(n,1.25,i,Wt,{p:[0,1.35,0]}),t.box(n-.6,1.3,i+.02,ni,{p:[0,2.6,0]});for(let r=-n/2+1.1;r<n/2-.6;r+=2.4)t.box(.22,1.31,i+.04,Wt,{p:[r,2.6,0]});t.box(n,.5,i,Wt,{p:[0,3.5,0]}),t.box(n+.02,.4,i+.05,s,{p:[0,1.15,0]}),t.box(n+.02,.18,i+.05,s,{p:[0,3.35,0]}),us(t,[-n/2+2],1,.4,.4);for(let r of[-1,1])t.box(.4,2.6,2.1,"#3c3c40",{p:[r*(n/2+.15),2,0]});return e==="mid"&&(t.box(.2,.8,.1,"#55595f",{p:[-.6,4.2,0],r:[0,0,.6]}),t.box(.2,.06,1.6,"#55595f",{p:[0,4.6,0]})),e==="head"&&(t.box(1.4,3.1,i,s,{p:[n/2+.6,1.95,0]}),t.box(.4,1.6,i-.3,ni,{p:[n/2+1.25,2.7,0],r:[0,0,-.3]}),nc(t,n/2+1.35,1.2,.9)),{b:t,L:n}}function Oy(s){let e=ur,t=Qh(s,"head"),n=Qh(s,"mid"),i=Qh(s,"head"),r=new lt().merge(i.b,{r:[0,Math.PI,0]}).build(),a=[t.b.build(),n.b.build(),r];for(let o of a)o.scale.setScalar(e);return{cars:a,lengths:[(t.L+1.3)*e,n.L*e,(i.L+1.3)*e],gap:.4*e,kind:"lrt"}}function bp(s){switch(s.def.vehicle){case"train":return Ny(s.color);case"tram":return Uy(s.color);case"articulated":return Fy(s.color);case"padron":return vp(s.color);case"lrt":return Oy(s.color);default:return vp(s.color)}}function Mp(){let s=new lt;s.cyl(1.1,1.1,14,8,"#f4f4f4",{r:[0,0,Math.PI/2]}),s.cone(1.1,2.5,8,"#f4f4f4",{p:[8.2,0,0],r:[0,0,-Math.PI/2]}),s.cone(1.1,3,8,"#f4f4f4",{p:[-8.5,.3,0],r:[0,0,Math.PI/2]}),s.box(3.2,.25,16,"#dfe3e6",{p:[.5,-.3,0]}),s.box(2,.2,6,"#dfe3e6",{p:[-8.5,.6,0]}),s.box(2.2,3,.25,ti.green,{p:[-8.8,2,0]}),s.box(13,.35,2.25,ti.green,{p:[0,-.2,0]}),s.box(9,.45,2.24,ni,{p:[.5,.45,0]});for(let t of[-4,4])s.cyl(.5,.5,2,8,"#9aa0a6",{p:[1.2,-.9,t],r:[0,0,Math.PI/2]});let e=s.build();return e.scale.setScalar(.3),e}var nu=[{id:"arvi",name:"Parque Arv\xED",lat:6.2835,lon:-75.4965,model:"arvi",category:"Naturaleza",station:"arvi",clear:30,desc:"Parque ecotur\xEDstico de bosque andino en el corregimiento de Santa Elena, con senderos y mercado campesino. Se llega en la L\xEDnea L del Metrocable."},{id:"biblioteca_espana",name:"Parque Biblioteca Espa\xF1a",lat:6.2947,lon:-75.5424,model:"biblioteca",category:"Arquitectura",station:"santo_domingo",clear:7,desc:"Sus tres vol\xFAmenes oscuros, que parecen rocas, se volvieron un \xEDcono de la transformaci\xF3n de Santo Domingo Savio junto a la L\xEDnea K."},{id:"plaza_botero",name:"Plaza Botero y Museo de Antioquia",lat:6.2523,lon:-75.5688,model:"botero",category:"Arte y cultura",station:"parque_berrio",clear:9,desc:"Veintitr\xE9s esculturas monumentales de Fernando Botero frente al Museo de Antioquia y el Palacio de la Cultura Rafael Uribe Uribe."},{id:"coltejer",name:"Edificio Coltejer",lat:6.2507,lon:-75.5661,model:"coltejer",category:"Arquitectura",station:"parque_berrio",clear:5,desc:"Rascacielos de 175 m cuya c\xFAspide evoca una aguja de tejer. Es un s\xEDmbolo de la industria textil antioque\xF1a."},{id:"catedral",name:"Catedral Metropolitana",lat:6.2542,lon:-75.5641,model:"catedral",category:"Patrimonio",station:"prado",clear:6,desc:"Una de las iglesias de ladrillo cocido m\xE1s grandes del mundo, frente al Parque de Bol\xEDvar."},{id:"pueblito_paisa",name:"Pueblito Paisa (Cerro Nutibara)",lat:6.2362,lon:-75.5795,model:"pueblito",category:"Mirador",station:"industriales",clear:14,desc:"R\xE9plica de un pueblo antioque\xF1o tradicional en la cima del Cerro Nutibara, con vista panor\xE1mica del valle."},{id:"estadio",name:"Estadio Atanasio Girardot",lat:6.2567,lon:-75.5903,model:"estadio",category:"Deporte",station:"estadio",clear:22,desc:"Coraz\xF3n de la Unidad Deportiva Atanasio Girardot, casa del f\xFAtbol de la ciudad. Queda junto a la estaci\xF3n Estadio de la L\xEDnea B."},{id:"explora",name:"Parque Explora",lat:6.2703,lon:-75.5652,model:"explora",category:"Ciencia",station:"universidad",clear:9,desc:"Museo interactivo de ciencia y tecnolog\xEDa con acuario y vivario. Sus vol\xFAmenes rojos lo hacen inconfundible."},{id:"jardin_botanico",name:"Jard\xEDn Bot\xE1nico (Orquideorama)",lat:6.2712,lon:-75.5634,model:"orquideorama",category:"Naturaleza",station:"universidad",clear:10,desc:"Pulm\xF3n verde del norte de la ciudad. El Orquideorama tiene cubiertas hexagonales en forma de flor."},{id:"parque_norte",name:"Parque Norte",lat:6.2738,lon:-75.5672,model:"parque_norte",category:"Recreaci\xF3n",station:"universidad",clear:8,desc:"Parque de diversiones tradicional cerca de la estaci\xF3n Universidad."},{id:"comuna13",name:"Comuna 13: escaleras el\xE9ctricas",lat:6.2553,lon:-75.6212,model:"comuna13",category:"Cultura urbana",station:"san_javier",clear:8,desc:"Galer\xEDa de grafitis y escaleras el\xE9ctricas al aire libre en el barrio Las Independencias. Se llega por la ruta integrada 221i desde San Javier."},{id:"pies_descalzos",name:"Parque de los Pies Descalzos y Edificio EPM",lat:6.2443,lon:-75.5782,model:"epm",category:"Espacio p\xFAblico",station:"alpujarra",clear:10,desc:"Espacio p\xFAblico con fuentes y arena junto al Edificio Inteligente de EPM y el Teatro Metropolitano."},{id:"plaza_luz",name:"Plaza de Cisneros (Parque de las Luces)",lat:6.2466,lon:-75.5722,model:"luces",category:"Espacio p\xFAblico",station:"cisneros",clear:6,desc:"Bosque de postes de luz frente a los edificios V\xE1squez y Carr\xE9 y a la Biblioteca EPM."},{id:"casa_memoria",name:"Museo Casa de la Memoria",lat:6.2458,lon:-75.5592,model:"memoria",category:"Memoria",station:"bicentenario",clear:5,desc:"Museo dedicado a la memoria del conflicto armado, en el Parque Bicentenario junto al tranv\xEDa."},{id:"volador",name:"Cerro El Volador",lat:6.265,lon:-75.581,model:"cerro",category:"Naturaleza",station:"suramericana",clear:26,desc:"Cerro tutelar y parque natural regional metropolitano, con senderos y vista de 360\xB0 sobre el valle."},{id:"olaya",name:"Aeropuerto Olaya Herrera",lat:6.2197,lon:-75.5905,model:"aeropuerto",category:"Transporte",station:"poblado",clear:32,desc:"Aeropuerto regional con una terminal art d\xE9co que es Monumento Nacional. Est\xE1 entre El Poblado y Guayabal."},{id:"milla_oro",name:"Parque Lleras y Milla de Oro",lat:6.2092,lon:-75.567,model:"poblado",category:"Gastronom\xEDa",station:"poblado",clear:10,desc:"Zona gastron\xF3mica y de vida nocturna de El Poblado, rodeada por las torres de la Milla de Oro."},{id:"castillo",name:"Museo El Castillo",lat:6.1985,lon:-75.5705,model:"castillo",category:"Museo",station:"aguacatala",clear:6,desc:"Castillo de estilo g\xF3tico medieval rodeado de jardines, abierto como museo."},{id:"mamm",name:"Museo de Arte Moderno (MAMM)",lat:6.2233,lon:-75.5738,model:"mamm",category:"Arte",station:"industriales",clear:6,desc:"Museo en un antiguo edificio industrial de Ciudad del R\xEDo, cerca del Mercado del R\xEDo."}];var dr={patrimonio:{label:"Historia y patrimonio",color:"#b5651d"},memoria:{label:"Historia, memoria y resiliencia",color:"#a0522d"},museo:{label:"Museo",color:"#8e44ad"},cultura:{label:"Arte y cultura",color:"#d63384"},parque:{label:"Parques y naturaleza",color:"#2e9d4a"},deporte:{label:"Recreaci\xF3n y deporte",color:"#0d9488"},mesa:{label:"Medell\xEDn en la mesa",color:"#e67e22"},compras:{label:"De compras en la ciudad\u2013regi\xF3n",color:"#d35400"},educacion:{label:"Educaci\xF3n",color:"#2f6fd6"},ciencia:{label:"Ciencia e innovaci\xF3n",color:"#0891b2"},salud:{label:"Salud",color:"#dc3545"},institucional:{label:"Institucional",color:"#5b6b7f"},transporte:{label:"Transporte",color:"#34495e"},otro:{label:"Sitio de inter\xE9s",color:"#6b7078"}},oe=(s,e,t={})=>({cat:s,desc:e,...t}),By={"C\xE1mara de Comercio de Medell\xEDn":oe("institucional","Sede de la C\xE1mara de Comercio de Medell\xEDn para Antioquia en el norte del valle. Atiende tr\xE1mites de registro mercantil y ofrece servicios a empresas."),"Cerro Quitasol":oe("parque","Cerro tutelar de Bello y una de las cumbres m\xE1s altas del norte del Valle de Aburr\xE1. Es un destino de caminatas ecol\xF3gicas con vista sobre el valle.",{lat:6.367,lon:-75.578}),"Hospital Marco Fidel Su\xE1rez":oe("salud","Hospital p\xFAblico de Bello y uno de los principales centros de atenci\xF3n en salud del norte del valle."),"Unidad Deportiva Tulio Ospina":oe("deporte","Complejo deportivo de Bello con escenarios para varias disciplinas."),"Museo Choza Marco Fidel Su\xE1rez":oe("museo","R\xE9plica de la casa campesina donde naci\xF3 Marco Fidel Su\xE1rez, presidente de Colombia entre 1918 y 1921. Funciona como museo en Bello."),"Sede Administrativa del Metro":oe("institucional","Sede administrativa de la Empresa de Transporte Masivo del Valle de Aburr\xE1 (Metro de Medell\xEDn), en Bello."),"Hospital Mental de Antioquia":oe("salud","Instituci\xF3n p\xFAblica especializada en salud mental, ubicada en Bello."),Interactuar:oe("institucional","Entidad que apoya a micro y peque\xF1os empresarios con cr\xE9dito, formaci\xF3n y acompa\xF1amiento empresarial."),"Parque Juanes de la Paz":oe("deporte","Parque de la zona norte con canchas, zonas verdes y escenario para eventos. Lleva el nombre del cantante Juanes.",{lat:6.2948,lon:-75.5628}),"Terminal de Transporte Norte":oe("transporte","Terminal de buses intermunicipales hacia el norte y el occidente de Antioquia y la costa Caribe. Est\xE1 junto a la estaci\xF3n Caribe.",{lat:6.2787,lon:-75.5716}),"Jard\xEDn Bot\xE1nico":oe("parque","Jard\xEDn Bot\xE1nico de Medell\xEDn, pulm\xF3n verde del norte con colecciones de plantas, lago y el Orquideorama.",{lm:"jardin_botanico"}),"Parque de los Deseos":oe("cultura","Plaza p\xFAblica frente al Planetario dedicada a la astronom\xEDa, con cine al aire libre y actividades culturales.",{lat:6.2688,lon:-75.5661}),"Parque Explora":oe("ciencia","Museo interactivo de ciencia y tecnolog\xEDa con acuario, vivario y salas de experimentaci\xF3n.",{lm:"explora"}),"Parque Norte":oe("deporte","Parque de diversiones tradicional de la ciudad, con atracciones mec\xE1nicas y zonas verdes.",{lm:"parque_norte"}),Planetario:oe("ciencia","Planetario de Medell\xEDn: domo de proyecci\xF3n y salas interactivas sobre astronom\xEDa y ciencias del espacio.",{lat:6.2694,lon:-75.5654}),"Ruta N":oe("ciencia","Centro de innovaci\xF3n y negocios de Medell\xEDn. Re\xFAne empresas de tecnolog\xEDa, emprendimientos y programas de ciencia, tecnolog\xEDa e innovaci\xF3n.",{lat:6.2646,lon:-75.5667}),"Universidad de Antioquia":oe("educacion","Ciudad Universitaria de la Universidad de Antioquia, la principal universidad p\xFAblica del departamento, fundada en 1803.",{lat:6.2672,lon:-75.5689}),"Cl\xEDnica Le\xF3n XIII":oe("salud","Cl\xEDnica de alta complejidad vinculada a la red de salud de la Universidad de Antioquia.",{lat:6.2645,lon:-75.5618}),"Hospital Infantil":oe("salud","Hospital pedi\xE1trico del complejo hospitalario San Vicente Fundaci\xF3n.",{lat:6.2622,lon:-75.5632}),"Hospital Universitario San Vicente Fundaci\xF3n":oe("salud","Hospital universitario de alta complejidad, referente nacional, con pabellones de arquitectura de comienzos del siglo XX.",{lat:6.2629,lon:-75.5642}),"Museo Cementerio San Pedro":oe("museo","Cementerio del siglo XIX convertido en museo, con mausoleos y esculturas funerarias de gran valor art\xEDstico. Ofrece recorridos guiados y nocturnos.",{lat:6.2679,lon:-75.5642}),"Catedral Metropolitana":oe("patrimonio","Catedral Bas\xEDlica Metropolitana de Medell\xEDn, una de las iglesias de ladrillo cocido m\xE1s grandes del mundo, frente al Parque de Bol\xEDvar.",{lm:"catedral"}),"Parque de Bol\xEDvar":oe("parque","Parque tradicional del centro, frente a la Catedral Metropolitana, con la estatua ecuestre de Sim\xF3n Bol\xEDvar.",{lat:6.2541,lon:-75.5653}),"Plaza Botero":oe("memoria","Plaza con 23 esculturas monumentales donadas por Fernando Botero, frente al Museo de Antioquia y el Palacio de la Cultura.",{lm:"plaza_botero"}),"Museo de Antioquia":oe("museo","Uno de los museos m\xE1s antiguos del pa\xEDs. Tiene la mayor colecci\xF3n p\xFAblica de obras de Fernando Botero y arte antioque\xF1o.",{lm:"plaza_botero"}),"Palacio de la Cultura Rafael Uribe Uribe":oe("patrimonio","Edificio de estilo neog\xF3tico con franjas blancas y negras, dise\xF1ado por el arquitecto belga Agust\xEDn Goovaerts. Hoy es un centro cultural del departamento.",{lat:6.2521,lon:-75.5697}),"Calle Jun\xEDn":oe("compras","Tradicional calle peatonal y comercial del centro. \xABJuniniar\xBB era el paseo social de los medellinenses por esta v\xEDa.",{lat:6.249,lon:-75.5658}),"Edificio Coltejer":oe("patrimonio","Rascacielos de 175 m cuya c\xFAspide evoca una aguja de tejer. Es un s\xEDmbolo de la industria textil antioque\xF1a.",{lm:"coltejer"}),"Bas\xEDlica de Nuestra Se\xF1ora de la Candelaria":oe("memoria","Templo del Parque Berr\xEDo que fue la catedral de la ciudad hasta que se inaugur\xF3 la Catedral Metropolitana. Es uno de los templos m\xE1s antiguos de Medell\xEDn.",{lat:6.2503,lon:-75.5681}),"Hotel Nutibara":oe("memoria","Hotel hist\xF3rico del centro, frente a la Plaza Nutibara y cerca de la Plaza Botero. Es un referente de la arquitectura de mediados del siglo XX.",{lat:6.2513,lon:-75.5693}),"Palacio Nacional":oe("compras","Edificio patrimonial de estilo republicano en el centro, adaptado como centro comercial.",{lat:6.2478,lon:-75.5704}),"Sal\xF3n Versalles":oe("mesa","Tradicional pasteler\xEDa y restaurante del centro, conocido por sus empanadas y su ambiente de tertulia, en el pasaje Jun\xEDn.",{lat:6.2497,lon:-75.566}),"Parque San Antonio":oe("memoria","Plaza con esculturas de Fernando Botero. All\xED conviven los dos \xABP\xE1jaros de Paz\xBB: el que destruy\xF3 el atentado de 1995 y el nuevo que el artista don\xF3 como s\xEDmbolo de memoria.",{lat:6.2452,lon:-75.5667}),"Paseo peatonal Carabobo":oe("compras","Eje peatonal del centro que conecta la Plaza Botero con el sector de San Antonio y Guayaquil, lleno de comercio popular.",{lat:6.2478,lon:-75.5698}),"Villa Suram\xE9rica":oe("otro","Sitio de inter\xE9s que el Metro de Medell\xEDn registra para la estaci\xF3n San Antonio (L\xEDnea B)."),"Centro Administrativo La Alpujarra":oe("institucional","Centro pol\xEDtico y administrativo donde funcionan la Gobernaci\xF3n de Antioquia, la Alcald\xEDa de Medell\xEDn y el Concejo.",{lat:6.2445,lon:-75.574}),"Edificio EPM":oe("institucional","Edificio Inteligente, sede de Empresas P\xFAblicas de Medell\xEDn, junto al Parque de los Pies Descalzos.",{lm:"pies_descalzos"}),"Parque Pies Descalzos":oe("parque","Parque para recorrer descalzo, con fuentes, arena y un bosque de guadua, frente al Edificio EPM.",{lm:"pies_descalzos"}),"Plaza de la Libertad":oe("institucional","Conjunto de edificios y plazoletas junto a La Alpujarra, con oficinas p\xFAblicas, instituciones educativas y espacio p\xFAblico.",{lat:6.2432,lon:-75.5753}),"Plaza Mayor":oe("cultura","Centro de convenciones y exposiciones de Medell\xEDn, sede de ferias como Colombiatex y Colombiamoda.",{lat:6.2412,lon:-75.5771}),"\xC1rea Metropolitana":oe("institucional","Sede del \xC1rea Metropolitana del Valle de Aburr\xE1, autoridad ambiental y de transporte que articula los 10 municipios del valle."),Teleantioquia:oe("institucional","Canal regional de televisi\xF3n p\xFAblica de Antioquia."),"Centro Comercial Sandiego":oe("compras","Uno de los centros comerciales m\xE1s tradicionales de la ciudad."),"Hospital General de Medell\xEDn":oe("salud","Hospital p\xFAblico de alta complejidad de la ciudad."),"Pueblito Paisa":oe("memoria","R\xE9plica de un pueblo antioque\xF1o tradicional en la cima del Cerro Nutibara, con vista panor\xE1mica del valle.",{lm:"pueblito_paisa"}),"Pueblito Paisa (Cerro Nutibara)":oe("memoria","R\xE9plica de un pueblo antioque\xF1o tradicional en la cima del Cerro Nutibara, con vista panor\xE1mica del valle.",{lm:"pueblito_paisa"}),"Teatro Metropolitano":oe("cultura","Principal teatro de la ciudad y sede de la Orquesta Filarm\xF3nica de Medell\xEDn, en un edificio de ladrillo a la vista.",{lat:6.2424,lon:-75.5779}),"Museo de Arte Moderno de Medell\xEDn (MAMM)":oe("museo","Museo de arte moderno y contempor\xE1neo en un antiguo edificio industrial de Ciudad del R\xEDo.",{lm:"mamm"}),"Mercado del R\xEDo":oe("mesa","Mercado gastron\xF3mico en una antigua bodega industrial de Ciudad del R\xEDo, con decenas de restaurantes.",{lat:6.2256,lon:-75.5741}),"Aeropuerto Olaya Herrera":oe("transporte","Aeropuerto regional de la ciudad. Su terminal art d\xE9co es Monumento Nacional.",{lm:"olaya"}),"Parque de El Poblado":oe("patrimonio","Parque donde, en 1616, se fund\xF3 el poblado de San Lorenzo de Aburr\xE1, origen de la ciudad.",{lat:6.21,lon:-75.5711}),"V\xEDa Primavera":oe("compras","Calle de El Poblado con tiendas de dise\xF1o local, caf\xE9s y restaurantes.",{lat:6.2088,lon:-75.5663}),Astorga:oe("mesa","Sector de El Poblado con oferta gastron\xF3mica y comercial."),"La Buena Mesa - Manila":oe("mesa","Corredor gastron\xF3mico del barrio Manila, en El Poblado, con restaurantes y caf\xE9s.",{lat:6.2118,lon:-75.5712}),"La Milla de Oro":oe("mesa","Eje de la avenida El Poblado con torres empresariales, hoteles, restaurantes y centros comerciales.",{lm:"milla_oro"}),"Terminal de Transporte Sur":oe("transporte","Terminal de buses intermunicipales hacia el sur y el suroeste de Antioquia y el Eje Cafetero, junto al aeropuerto Olaya Herrera.",{lat:6.2168,lon:-75.5876}),"Museo El Castillo":oe("museo","Castillo de estilo g\xF3tico medieval rodeado de jardines. Funciona como museo y es escenario de conciertos.",{lm:"castillo"}),"Unidad Deportiva Mar\xEDa Luisa Calle":oe("deporte","Escenario deportivo que lleva el nombre de la ciclista medellinense y medallista ol\xEDmpica Mar\xEDa Luisa Calle."),"Barrio Jardines":oe("otro","Barrio residencial de Envigado cercano a la estaci\xF3n Ayur\xE1."),"Casa Museo Fernando Gonz\xE1lez Otraparte":oe("museo","Casa donde vivi\xF3 el fil\xF3sofo y escritor envigade\xF1o Fernando Gonz\xE1lez. Hoy es casa museo y centro cultural."),"Biblioteca y Parque Cultural D\xE9bora Arango":oe("cultura","Biblioteca y parque cultural de Envigado en honor a la pintora D\xE9bora Arango, pionera del arte moderno colombiano."),"Casa de la Cultura Miguel Uribe Restrepo":oe("cultura","Casa de la cultura de Envigado, con programaci\xF3n art\xEDstica y talleres de formaci\xF3n."),"Centro Comercial Viva Envigado":oe("compras","Uno de los centros comerciales m\xE1s grandes del pa\xEDs, cerca de la estaci\xF3n Envigado.",{lat:6.1757,lon:-75.5918}),"Mayorca Outlet":oe("compras","Centro comercial Mayorca, conectado con la estaci\xF3n Itag\xFC\xED.",{lat:6.1612,lon:-75.6048}),"V\xEDa de la Moda":oe("compras","Corredor comercial de Itag\xFC\xED especializado en ropa y confecciones."),"Iglesia Mar\xEDa Auxiliadora":oe("patrimonio","Santuario de Mar\xEDa Auxiliadora en Sabaneta, muy visitado por peregrinos, sobre todo los d\xEDas 24 de cada mes.",{lat:6.1514,lon:-75.6166}),"La Centralidad Sur":oe("otro","Sector de desarrollo urbano del sur del valle, con oferta comercial y de servicios."),"Centralidad Sur":oe("otro","Sector de desarrollo urbano del sur del valle, con oferta comercial y de servicios."),"Centro Comercial Aves Mar\xEDa":oe("compras","Centro comercial de Sabaneta, entre las estaciones Sabaneta y La Estrella."),"Biblioteca EPM":oe("cultura","Biblioteca p\xFAblica de EPM dedicada a la ciencia, la tecnolog\xEDa y el medio ambiente, en la Plaza de Cisneros.",{lat:6.2455,lon:-75.5716}),"Plaza de Cisneros (Parque de las Luces)":oe("memoria","Plaza con un bosque de postes de luz, frente a los edificios patrimoniales V\xE1squez y Carr\xE9.",{lm:"plaza_luz"}),SENA:oe("educacion","Sede del Servicio Nacional de Aprendizaje (SENA), instituci\xF3n p\xFAblica de formaci\xF3n t\xE9cnica y tecnol\xF3gica."),"Barrio Carlos E. Restrepo":oe("patrimonio","Barrio de arquitectura moderna en ladrillo, con plazoleta, caf\xE9s y ambiente universitario.",{lat:6.2562,lon:-75.5832}),"Biblioteca P\xFAblica Piloto":oe("cultura","Biblioteca P\xFAblica Piloto de Medell\xEDn para Am\xE9rica Latina, creada en 1952 con apoyo de la UNESCO. Guarda un valioso archivo fotogr\xE1fico.",{lat:6.2565,lon:-75.5815}),"Universidad Nacional":oe("educacion","Sede Medell\xEDn de la Universidad Nacional de Colombia, junto al Cerro El Volador.",{lat:6.2612,lon:-75.5776}),EnCicla:oe("transporte","Sistema de bicicletas p\xFAblicas del \xC1rea Metropolitana, integrado con el Metro. Hay estaciones de pr\xE9stamo cerca de esta parada."),"Unidad Deportiva Atanasio Girardot":oe("deporte","Complejo deportivo con el Estadio Atanasio Girardot, coliseos, piscinas y pistas. Sede de conciertos de la Feria de las Flores.",{lm:"estadio"}),"Boulevard de la 70":oe("mesa","Corredor de la carrera 70, en Laureles, con restaurantes, bares y hoteles.",{lat:6.2522,lon:-75.5896}),"Cuarta Brigada":oe("institucional","Sede de la Cuarta Brigada del Ej\xE9rcito Nacional."),"Escaleras el\xE9ctricas de la Comuna 13 (ruta integrada 221i)":oe("memoria","Escaleras el\xE9ctricas al aire libre y galer\xEDa de grafitis del barrio Las Independencias, s\xEDmbolo de transformaci\xF3n urbana. Se llega con la ruta integrada 221i desde San Javier.",{lm:"comuna13"}),"Museo Casa de la Memoria":oe("memoria","Museo dedicado a la memoria del conflicto armado en Antioquia y Colombia, en el Parque Bicentenario.",{lm:"casa_memoria"}),"Parque Bicentenario":oe("parque","Parque urbano del barrio Boston, junto al tranv\xEDa de Ayacucho.",{lat:6.2461,lon:-75.5597}),"Parque Biblioteca Espa\xF1a":oe("memoria","Parque biblioteca de vol\xFAmenes oscuros que evocan rocas, \xEDcono de la transformaci\xF3n de Santo Domingo Savio.",{lm:"biblioteca_espana"}),"Parque Arv\xED":oe("parque","Parque ecotur\xEDstico de bosque andino en el corregimiento de Santa Elena, con senderos, mercado campesino y actividades al aire libre.",{lm:"arvi"}),"Mercado campesino de Arv\xED":oe("mesa","Mercado de productos campesinos de Santa Elena, cerca de la estaci\xF3n Arv\xED.",{lm:"arvi"}),"Senderos ecol\xF3gicos":oe("parque","Red de caminos por el bosque del Parque Arv\xED, algunos de origen prehisp\xE1nico.",{lm:"arvi"}),"Cerro El Picacho":oe("parque","Cerro tutelar del noroccidente de Medell\xEDn, cerca de la L\xEDnea P, con senderos y vistas sobre el valle.",{lat:6.298,lon:-75.593}),"Universidad de Medell\xEDn":oe("educacion","Universidad privada fundada en 1950, con campus en el sector de Bel\xE9n Los Alpes.",{lat:6.2312,lon:-75.6104}),"Centro Comercial Los Molinos":oe("compras","Centro comercial del sector de Bel\xE9n.",{lat:6.2326,lon:-75.6054}),"Bolera Suramericana":oe("deporte","Escenario deportivo para la pr\xE1ctica de bolos."),"Pista de BMX Mariana Paj\xF3n":oe("deporte","Pista de BMX que lleva el nombre de la bicampeona ol\xEDmpica medellinense Mariana Paj\xF3n."),"Plaza Minorista Jos\xE9 Mar\xEDa Villa":oe("compras","Principal plaza de mercado de la ciudad, con frutas, verduras y productos de todo el departamento.",{lat:6.2552,lon:-75.5738}),"Casa Gardeliana":oe("museo","Casa museo dedicada a Carlos Gardel en Manrique, barrio tanguero de la ciudad. Gardel muri\xF3 en Medell\xEDn en 1935.",{lat:6.2702,lon:-75.555}),"Iglesia San Nicol\xE1s de Tolentino":oe("patrimonio","Templo del barrio Aranjuez, frente al parque principal del sector.",{lat:6.2818,lon:-75.5585}),"Museo Pedro Nel G\xF3mez":oe("museo","Casa museo del muralista, pintor y arquitecto Pedro Nel G\xF3mez, en Aranjuez. Conserva gran parte de su obra."),"Universidad Nacional, Facultad de Minas":oe("educacion","Facultad de Minas de la Universidad Nacional, heredera de la Escuela Nacional de Minas fundada en 1887.",{lat:6.2738,lon:-75.592})};function Vi(s){return By[s]||oe("otro","Sitio de inter\xE9s publicado por el Metro de Medell\xEDn para esta estaci\xF3n.")}var Sp={industriales:["Alumbrados navide\xF1os"],suramericana:["Festivales de m\xFAsica electr\xF3nica"],la_playa:["Semana del Teatro"],san_antonio:["Desfile de silleteros (Feria de las Flores, agosto)"],universidad:["Exposiciones de la Feria de las Flores (agosto)"],estadio:["Conciertos de la Feria de las Flores (agosto)"],exposiciones:["Colombiatex","Colombiamoda"],plaza_mayor:["Colombiatex","Colombiamoda"]};var ii=new A,Gi=new A,iu=new A,Ep=new mt,fr=class{constructor(e){this.group=new vt,this.cars=e.cars.map(t=>t.clone()),this.lengths=e.lengths,this.gap=e.gap,this.kind=e.kind,this.total=this.lengths.reduce((t,n)=>t+n,0)+this.gap*(this.lengths.length-1);for(let t of this.cars)this.group.add(t)}place(e,t,n,i){let r=0;for(let a=0;a<this.cars.length;a++){let o=this.lengths[a],l=t+n*(this.total/2-(r+o/2));r+=o+this.gap,e.laneAt(l-n*o*.42,i*n,ii),e.laneAt(l+n*o*.42,i*n,Gi);let c=this.cars[a];c.position.addVectors(ii,Gi).multiplyScalar(.5),iu.subVectors(Gi,ii),iu.lengthSq()>1e-6&&jl(iu,c.quaternion)}}rear(e,t,n,i,r){return e.laneAt(t-n*(this.total/2+.2),i*n,r)}},su=class{constructor(e,t,n){this.rt=e,this.p=t,this.rnd=n||Math.random,this.stops=e.stops.map((i,r)=>({s:i.s,i:r,closed:i.closed})).filter(i=>!i.closed),this.speed=0,this.state="run",this.dwell=0}initAt(e){let t=this.stops,n=t[0].s,i=t[t.length-1].s,r=i-n;e=e*r*2,e<r?(this.dir=1,this.s=n+e):(this.dir=-1,this.s=i-(e-r));let a=this.dir>0?t.findIndex(o=>o.s>this.s+.01):zy(t,o=>o.s<this.s-.01);a<0&&(a=this.dir>0?t.length-1:0),this.ti=a,this.speed=this.p.vmax*.6}update(e,t=1){let n=this.p;if(this.state==="dwell")return this.dwell-=e,this.dwell<=0&&(this.state="run"),"dwell";let i=this.stops,r=i[this.ti].s,a=Math.abs(r-this.s),o=n.vmax*t,l=n.accel*t,c=Math.min(o,Math.sqrt(2*l*a));this.speed<c?this.speed=Math.min(c,this.speed+l*e):this.speed=c;let h=this.speed*e;if(h>=a||a<.02){this.s=r,this.speed=0,this.state="dwell",this.dwell=n.dwell*(.8+this.rnd()*.4);let d=this.ti;return(d+this.dir<0||d+this.dir>=i.length)&&(this.dir=-this.dir),this.ti=d+this.dir,"arrive"}return this.s+=h*this.dir,"run"}};function zy(s,e){for(let t=s.length-1;t>=0;t--)if(e(s[t]))return t;return-1}var Ra=class{constructor(e=0){this.th=0,this.om=0,this.ph=e*1.7,this.vPrev=0,this.slopePrev=0}step(e,t,n,i){if(e<=0)return;let r=(t-this.vPrev)/e,a=(n-this.slopePrev)/e;this.vPrev=t,this.slopePrev=n;let o=5.5,l=1.1,c=-r*.06-a*.35;this.om+=(-o*this.th-l*this.om+c)*e,this.th+=this.om*e,this.th=Math.max(-.35,Math.min(.35,this.th)),this.roll=Math.sin(i*1.3+this.ph)*.025+Math.sin(i*.37+this.ph*2)*.015}},ky=new A(0,1,0),Hy=new A(0,0,1),Vy=new A(1,0,0),wp=new mt,Tp=new mt,Ap=new mt,sc=new A;function au(s,e,t,n){s.pointAt(e,ii),s.smoothTangentAt(e,1.2,sc);let i=sc.y,r=Math.atan2(-sc.z,sc.x);return wp.setFromAxisAngle(ky,r),Tp.setFromAxisAngle(Hy,t.th),Ap.setFromAxisAngle(Vy,t.roll||0),Ep.copy(wp).multiply(Tp).multiply(Ap),n.compose(ii,Ep,Gi.set(1,1,1)),i}function ou(s,e,t){let n=s.loopPath.length,i=0;for(let r of s.stops)for(let a of[r.loopFwd,r.loopBwd]){let o=Math.abs(e-a);o=Math.min(o,n-o);let l=o<2.5?1:o<7?1-(o-2.5)/4.5:0;l>i&&(i=l)}return 1-(1-t)*i}var ru=class{constructor(e,t){this.rt=e;let n=e.def.cabins||40;this.n=n,this.mesh=new di(ic(e.color),Lt.solid,n),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.mesh.name="gondolas-"+e.id,this.s=new Float32Array(n),this.sw=[];let i=e.loopPath.length;for(let r=0;r<n;r++)this.s[r]=r/n*i,this.sw.push(new Ra(r));t.add(this.mesh),this._m=new Je}update(e,t){let n=this.rt,i=n.loopPath.length,r=ga.cable;for(let a=0;a<this.n;a++){let o=ou(n,this.s[a],r.stationFactor),l=r.v*o;this.s[a]=(this.s[a]+l*e)%i;let c=this.sw[a],h=au(n.loopPath,this.s[a],c,this._m);c.step(e,l,h,t),this.mesh.setMatrixAt(a,this._m)}this.mesh.instanceMatrix.needsUpdate=!0}},rc=class{constructor(e,t,n){this.scene=e,this.net=t,this.particles=n,this.vehicles=[],this.gondolas=[],this.feeders=[],this.templates={},this.hidden=new Set}template(e){return this.templates[e.id]||(this.templates[e.id]=bp(e)),this.templates[e.id]}build(){let e=Kt(31337);for(let n of Object.values(this.net.lines)){if(n.mode==="cable"){this.gondolas.push(new ru(n,this.scene));continue}let i=n.def.sim?.count||4,r=ga[n.mode]||ga.bus;for(let a=0;a<i;a++){let o=new fr(this.template(n));o.group.name="veh-"+n.id;let l=new su(n,r,e);l.initAt((a+e()*.3)/i),this.scene.add(o.group),this.vehicles.push({rt:n,rig:o,mover:l})}}let t=yp("#56B04B");for(let n of this.net.feeders)for(let i=0;i<2;i++){let r=new fr(t);this.scene.add(r.group),this.feeders.push({f:n,rig:r,s:i/2*n.path.length+e()*5,speed:0,dwell:0})}}setLineVisible(e,t){t?this.hidden.delete(e):this.hidden.add(e);for(let n of this.vehicles)n.rt.id===e&&(n.rig.group.visible=t);for(let n of this.gondolas)n.rt.id===e&&(n.mesh.visible=t)}setFeedersVisible(e){this.feedersHidden=!e;for(let t of this.feeders)t.rig.group.visible=e}update(e,t){let n=this.particles;for(let i of this.vehicles){let{rt:r,rig:a,mover:o}=i;if(o.update(e),a.place(r.path,o.s,o.dir,r.lane),!(this.hidden.has(r.id)||!a.group.visible)){if(a.kind==="train"&&o.speed>o.p.vmax*.55)a.rear(r.path,o.s,o.dir,r.lane,ii),ii.y+=.35,Gi.set((Math.random()-.5)*.6,Math.random()*.5,(Math.random()-.5)*.6),n.emit(ii,Gi,Math.random()<.5?r.color:"#ffffff",.9,.55);else if(a.kind==="tram"&&o.speed>1&&Math.random()<.04){a.cars[1].localToWorld(ii.set(.2,4.8,0));for(let l=0;l<4;l++)Gi.set((Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2),n.emit(ii,Gi,"#bfe3ff",.35,.35,4)}}}for(let i of this.gondolas)i.mesh.visible&&i.update(e,t);if(!this.feedersHidden){let i=ga.feeder;for(let r of this.feeders){let a=r.f.path.length;if(r.dwell>0)r.dwell-=e;else{let o=a-r.s%a,l=Math.min(i.vmax,Math.sqrt(2*i.accel*Math.max(.01,o))+.3);r.speed=r.speed<l?Math.min(l,r.speed+i.accel*e):l,r.s+=r.speed*e,r.s>=a&&(r.s-=a,r.dwell=i.dwell,r.speed=0)}r.rig.place(r.f.path,r.s,1,.3)}}}};var Gy=`
attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
varying float vAlpha; varying vec3 vColor;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vAlpha = aAlpha; vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (300.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}`,Wy=`
varying float vAlpha; varying vec3 vColor;
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  vec2 c = gl_PointCoord - 0.5; float d = length(c);
  if (d > 0.5) discard;
  float a = vAlpha * smoothstep(0.5, 0.1, d);
  gl_FragColor = vec4(vColor, a);
}`,ac=class{constructor(e=4e3){this.max=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.size0=new Float32Array(e),this.next=0;let t=new gt;t.setAttribute("position",new Rt(this.pos,3)),t.setAttribute("aColor",new Rt(this.col,3)),t.setAttribute("aSize",new Rt(this.size,1)),t.setAttribute("aAlpha",new Rt(this.alpha,1)),this.geo=t,this.mat=new Ft({vertexShader:Gy,fragmentShader:Wy,transparent:!0,depthWrite:!1,blending:ns}),this.points=new Ci(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this._c=new me}emit(e,t,n,i,r,a=0){let o=this.next;this.next=(this.next+1)%this.max,this.pos[o*3]=e.x,this.pos[o*3+1]=e.y,this.pos[o*3+2]=e.z,this.vel[o*3]=t.x,this.vel[o*3+1]=t.y,this.vel[o*3+2]=t.z,this._c.set(n),this.col[o*3]=this._c.r,this.col[o*3+1]=this._c.g,this.col[o*3+2]=this._c.b,this.size0[o]=i,this.size[o]=i,this.life[o]=r,this.maxLife[o]=r,this.alpha[o]=1,this.grav[o]=a}update(e){let t=this.max;for(let n=0;n<t;n++){if(this.life[n]<=0){this.alpha[n]!==0&&(this.alpha[n]=0,this.size[n]=0);continue}this.life[n]-=e;let i=Math.max(0,this.life[n]/this.maxLife[n]);this.vel[n*3+1]-=this.grav[n]*e,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.alpha[n]=i,this.size[n]=this.size0[n]*(.4+.6*i)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0}};var Xy=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,oc=class{constructor(e,t){this.camera=e,this.controls=t,this.fly=null,this.follow=null,this.cinematic=!0,this._prevTarget=new A,this.userActive=!1,t.addEventListener("start",()=>{this.userActive=!0,this.fly&&this.fly.interruptible&&this.cancelFly(),this.follow&&this.cinematic&&(this.cinematic=!1,this.onManual&&this.onManual())}),t.addEventListener("end",()=>this.userActive=!1)}flyTo(e,t,n=2,i={}){let a={p:this.camera.position.clone(),t:this.controls.target.clone()},o=a.p.distanceTo(t);return new Promise(l=>{this.fly={from:a,to:{p:t.clone(),t:e.clone()},time:0,duration:n,lift:i.lift??Math.min(500,o*.25),resolve:l,interruptible:i.interruptible!==!1}})}cancelFly(){if(this.fly){let e=this.fly.resolve;this.fly=null,e(!1)}}viewOf(e,t=60,n=.75,i=null){let r=this.camera,a=new A().subVectors(r.position,this.controls.target),o=i??Math.atan2(a.x,a.z);return new A(e.x+Math.sin(o)*Math.cos(n)*t,e.y+Math.sin(n)*t,e.z+Math.cos(o)*Math.cos(n)*t)}startFollow(e,t={}){this.follow={getTarget:e,manual:!1,dist:t.dist??26,height:t.height??.45,side:t.side??.35,getDir:t.getDir,smooth:t.smooth??2.5},this._prevTarget.copy(e())}setFollowOpts(e){this.follow&&Object.assign(this.follow,e)}stopFollow(){this.follow=null}update(e){let t=this.camera,n=this.controls;if(this.fly){let i=this.fly;i.time+=e;let r=Math.min(1,i.time/i.duration),a=Xy(r);n.target.lerpVectors(i.from.t,i.to.t,a),t.position.lerpVectors(i.from.p,i.to.p,a),t.position.y+=Math.sin(Math.PI*a)*i.lift,r>=1&&(this.fly=null,i.resolve(!0));return}if(this.follow){let i=this.follow,r=i.getTarget(),a=new A().subVectors(r,this._prevTarget);t.position.add(a),n.target.add(a),this._prevTarget.copy(r);let o=1-Math.exp(-e*6),l=new A().subVectors(r,n.target).multiplyScalar(o);if(n.target.add(l),t.position.add(l),this.cinematic&&i.getDir){let c=i.getDir();if(c){let h=c.clone().setY(0).normalize(),d=new A(-h.z,0,h.x),u=r.clone().addScaledVector(h,-i.dist*Math.cos(i.height)).addScaledVector(d,i.dist*i.side).add(new A(0,i.dist*Math.sin(i.height)+2,0)),f=1-Math.exp(-e*i.smooth);t.position.lerp(u,f)}}}}};var lc=class{constructor(e){this.net=e}_graph(e){let t=new Map,n=(r,a,o,l)=>{t.has(r)||t.set(r,[]),t.get(r).push({to:a,w:o,kind:l})},i=Object.values(this.net.lines).filter(r=>e||!r.def.construction);for(let r of i){let a=r.path.length,o=r.stops.map((l,c)=>({s:l,i:c})).filter(l=>!l.s.closed);for(let l=0;l<o.length-1;l++){let c=o[l],h=o[l+1],d=r.def.minutes*(h.s.s-c.s.s)/a;n(`${r.id}|${c.i}`,`${r.id}|${h.i}`,d,"ride"),n(`${r.id}|${h.i}`,`${r.id}|${c.i}`,d,"ride")}}for(let r of Object.values(this.net.complexes)){let a=r.stops.filter(o=>i.some(l=>l.id===o.line)&&!this.net.lines[o.line].stops[o.idx].closed);for(let o of a)for(let l of a){if(o.line===l.line)continue;let c=this.net.lines[o.line],h=this.net.lines[l.line],u=1.5+o.pos.distanceTo(l.pos)*.035+(c.mode!==h.mode?1:0),f=(h.def.headway||3)/2;n(`${o.line}|${o.idx}`,`${l.line}|${l.idx}`,u+f+1.5,"transfer")}}return t}route(e,t,{includeE:n=!0}={}){if(e===t)return null;let i=this._graph(n),r=this.net.complexes[e],a=this.net.complexes[t];if(!r||!a)return null;let o=new Map,l=new Map,c=new lu,h=p=>n||!this.net.lines[p].def.construction;for(let p of r.stops){if(!h(p.line)||this.net.lines[p.line].stops[p.idx].closed)continue;let b=`${p.line}|${p.idx}`,y=(this.net.lines[p.line].def.headway||3)/2;o.set(b,y),c.push(b,y)}let d=new Set(a.stops.filter(p=>h(p.line)).map(p=>`${p.line}|${p.idx}`)),u=null;for(;c.size;){let{key:p,pri:b}=c.pop();if(!(b>(o.get(p)??1/0))){if(d.has(p)){u=p;break}for(let y of i.get(p)||[]){let x=b+y.w;x<(o.get(y.to)??1/0)&&(o.set(y.to,x),l.set(y.to,p),c.push(y.to,x))}}}if(!u)return null;let f=[];for(let p=u;p;p=l.get(p))f.unshift(p);let m=[];for(let p of f){let[b,y]=p.split("|"),x=+y,S=m[m.length-1];S&&S.line===b?S.stops.push(x):m.push({line:b,stops:[x]})}let _=m.filter(p=>p.stops.length>1);for(let p of _){let b=this.net.lines[p.line];p.from=p.stops[0],p.to=p.stops[p.stops.length-1],p.dir=p.to>p.from?1:-1;let y=[];for(let x=p.from;x!==p.to+p.dir;x+=p.dir)y.push(x);p.all=y,p.minutes=b.def.minutes*Math.abs(b.stops[p.to].s-b.stops[p.from].s)/b.path.length,p.fromKey=b.stops[p.from].key,p.toKey=b.stops[p.to].key}let g=o.get(u);return{legs:_,minutes:g,transfers:Math.max(0,_.length-1),from:e,to:t}}},lu=class{constructor(){this.a=[]}get size(){return this.a.length}push(e,t){let n=this.a;n.push({key:e,pri:t});let i=n.length-1;for(;i>0;){let r=i-1>>1;if(n[r].pri<=n[i].pri)break;[n[r],n[i]]=[n[i],n[r]],i=r}}pop(){let e=this.a,t=e[0],n=e.pop();if(e.length){e[0]=n;let i=0;for(;;){let r=i*2+1,a=r+1,o=i;if(r<e.length&&e[r].pri<e[o].pri&&(o=r),a<e.length&&e[a].pri<e[o].pri&&(o=a),o===i)break;[e[o],e[i]]=[e[i],e[o]],i=o}}return t}};var _i=new A,pr=new A,cc=class{constructor(e){this.app=e,this.active=!1,this.tasks=[],this.speed=1,this.paused=!1,this.time=0}frame(e){return new Promise(t=>{if(this.cancelled)return t(!1);this.tasks.push({fn:e,resolve:t})})}wait(e){let t=0;return this.frame(n=>(t+=n)>=e)}update(e){if(!this.active)return;let t=this.paused?0:e*this.speed;this.time+=t;let n=[];for(let i of this.tasks)i.fn(t,e)&&n.push(i);if(n.length){this.tasks=this.tasks.filter(i=>!n.includes(i));for(let i of n)i.resolve(!0)}this.avatar&&Ca(this.avatar,this.time,this.walking,1),this.markerAnchor&&this.markerTarget&&this.markerTarget(this.markerAnchor.position),this.routeMat&&(this.routeMat.opacity=.35+Math.sin(performance.now()/300)*.2)}async start(e,t){this.active&&this.cancel(),await new Promise(i=>setTimeout(i,0));let n=this.app;this.route=e,this.active=!0,this.finished=!1,this.cancelled=!1,this.tasks=[],this.time=0,this.paused=!1,this.skipPreviewFlag=!1,this.elapsedMin=0,this.avatarKey=t,this.avatar=Aa(hr[t]),this.avatar.scale.multiplyScalar(1.5),n.scene.add(this.avatar),this.avatar.visible=!1,this._buildRouteGlow(),this._buildMarker(),n.ui.journeyStarted(e),n.director.stopFollow();try{await this._run()}catch(i){console.error(i)}}cancel(){if(this.active){this.cancelled=!0;for(let e of this.tasks)e.resolve(!1);this.tasks=[],this._cleanup(),this.app.ui.journeyEnded(!1)}}_cleanup(){let e=this.app;this.active=!1,e.director.stopFollow(),this.avatar&&e.scene.remove(this.avatar),this.avatar=null,this.vehicle&&this._removeVehicle(this.vehicle),this.vehicle=null;for(let t of this.departing||[])this._removeVehicle(t);this.departing=[],this.routeGroup&&(e.scene.remove(this.routeGroup),this.routeGroup.traverse(t=>t.geometry&&t.geometry.dispose())),this.routeGroup=null,this.routeMat=null,this.markerAnchor&&(this.markerAnchor.remove(this.markerObj),e.scene.remove(this.markerAnchor),this.markerObj.element.remove()),this.markerAnchor=null,this.markerTarget=null,e.setRouteFocus(null)}lineOf(e){return this.app.network.lines[e.line]}platformPoint(e,t,n,i=new A){let r=e.stops[t],a=Ut[e.mode];if(e.mode==="cable")return e.path.laneAt(r.s,(e.lane+.75)*n,i),i.y=r.cableY-Ut.cable.floor+.18,i;let o=0,l=.3;return e.mode==="metro"?o=a.lane+1:e.mode==="tram"?(o=a.lane+.75,l=.2):e.mode==="lrt"?(o=a.lane+.8,l=.2):e.mode==="bus"&&(e.id==="O"?(o=a.half+.55,l=.15):(o=0,l=.25)),e.path.laneAt(r.s,o*n,i),i.y=r.pos.y+l,i}doorPoint(e,t,n,i=new A){let r=Ut[e.mode],a=r.lane+.35;e.mode==="bus"&&e.id!=="O"&&(a=r.lane-.35),e.path.laneAt(t,a*n,i);let o=e.stops.reduce((l,c)=>Math.abs(c.s-t)<Math.abs(l.s-t)?c:l);return i.y=e.mode==="cable"?o.cableY-Ut.cable.floor+.18:o.pos.y+(e.mode==="metro"?.3:.2),i}groundNear(e,t,n,i=5){let r=e.stops[t],a=this.app.terrain,o=e.path.laneAt(r.s,(e.mode==="cable"?e.lane+3.2:(e.half||1.3)+i)*n,new A);return o.y=a.heightAt(o.x,o.z),o}walkPath(e){let t=this.app.terrain,n=[];for(let i=0;i<e.length-1;i++){let r=e[i],a=e[i+1],o=Math.max(1,Math.ceil(r.distanceTo(a)/1.5));for(let l=0;l<o;l++){let c=r.clone().lerp(a,l/o);r.ground&&a.ground&&(c.y=t.heightAt(c.x,c.z)),n.push(c)}}return n.push(e[e.length-1].clone()),new vn(n)}walk(e,t=1){let n=this.walkPath(e),i=0,r=this.avatar;return r.visible=!0,this.walking=!0,this.frame(a=>(i+=_a.walk*t*a,n.pointAt(i,r.position),n.tangentAt(i,_i),_i.lengthSq()>.001&&jl(_i,r.quaternion,!0),i>=n.length?(this.walking=!1,!0):!1))}async _run(){let e=this.app,t=this.route;if(await this._preview(),this.cancelled)return;let n=null;for(let c=0;c<t.legs.length;c++){let h=t.legs[c],d=this.lineOf(h),u=this.platformPoint(d,h.from,h.dir);if(e.ui.journeyLeg(c,h),c===0){let f=this.groundNear(d,h.from,h.dir,6);f.ground=!0;let m=this.groundNear(d,h.from,h.dir,2.2);m.ground=!0,this.avatar.position.copy(f),this.avatar.visible=!0,this.markerTarget=g=>g.copy(this.avatar.position).y+=1.6;let _=e.director.viewOf(f,26,.55);if(await e.director.flyTo(f,_,1.8,{interruptible:!1}),this.cancelled||(e.director.startFollow(()=>this.avatar.position,{dist:16,height:.5,side:.4,getDir:()=>this._avatarDir()}),e.ui.journeyStatus(`Caminando hacia la estaci\xF3n ${e.network.complexes[h.fromKey].name}`),await this.walk([f,m,u]),this.cancelled))return;await this._validate()}else{let f=this.lineOf(t.legs[c-1]),m=t.legs[c-1];e.ui.journeyTransfer(f,d,e.network.complexes[h.fromKey].name);let _=this.groundNear(f,m.to,m.dir,2.2);_.ground=!0;let g=this.groundNear(d,h.from,h.dir,2.2);if(g.ground=!0,e.director.startFollow(()=>this.avatar.position,{dist:18,height:.55,side:.4,getDir:()=>this._avatarDir()}),this.markerTarget=p=>p.copy(this.avatar.position).y+=1.6,await this.walk([n,_,g,u]),this.cancelled)return;this.elapsedMin+=2+(d.def.headway||3)/2,await this._validate(!0)}if(this.cancelled||(await(d.mode==="cable"?this._rideCable(h,d,u):this._rideLinear(h,d,u)),this.cancelled))return;n=this.platformPoint(d,h.to,h.dir)}let i=t.legs[t.legs.length-1],r=this.lineOf(i),a=this.groundNear(r,i.to,i.dir,6);a.ground=!0;let o=this.groundNear(r,i.to,i.dir,2.2);if(o.ground=!0,e.ui.journeyStatus(`Saliendo de la estaci\xF3n ${e.network.complexes[i.toKey].name}`),await this.walk([n,o,a]),this.cancelled)return;this.elapsedMin=t.minutes,this._celebrate(a),e.director.stopFollow();let l=e.director.viewOf(a,30,.5);e.director.flyTo(a,l,2),e.ui.journeyArrived(t,this.elapsedMin),await this.wait(1.5),this.active=!0,this.finished=!0}_avatarDir(){return pr.set(1,0,0).applyQuaternion(this.avatar.quaternion)}async _validate(e=!1){this.app.ui.journeyStatus(e?"Transbordo integrado con la tarjeta C\xEDvica":"Validando la tarjeta C\xEDvica en el torniquete\u2026");let t=this.avatar.position.clone();t.y+=1.2;for(let n=0;n<18;n++)this.app.particles.emit(t,new A((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3),n%2?"#6DB843":"#ffffff",.7,.7,2);this.app.ui.civicaPop(),await this.wait(.9)}async _rideLinear(e,t,n){let i=this.app,r=_a[t.mode]||_a.bus,a=e.dir,o=t.stops,l=new fr(i.traffic.template(t));l.group.name="journey-vehicle",i.scene.add(l.group);let c=l.total/2+.5,h=t.path.length-l.total/2-.5,d=o[e.from].s,u=d-a*55;u=Math.max(c,Math.min(h,u));let f={rig:l,rt:t,s:u,dir:a,speed:r.vmax*.6,kind:"linear"};if(this.vehicle=f,l.place(t.path,f.s,a,t.lane),i.ui.journeyStatus(`Esperando ${t.def.name} en el and\xE9n (frecuencia ${t.def.facts.frecuencia})`),i.director.startFollow(()=>this.avatar.position,{dist:20,height:.35,side:.8,getDir:()=>t.path.tangentAt(d,pr).multiplyScalar(a)}),await this._driveTo(f,d,r),this.cancelled)return;let m=this.doorPoint(t,f.s,a);if(i.ui.journeyStatus(`Abordando ${t.def.name} hacia ${i.network.complexes[o[e.to].key].name}`),await this.walk([this.avatar.position.clone(),m],.8),this.cancelled)return;this.avatar.visible=!1,this.markerTarget=S=>S.copy(l.cars[0].position).y+=1.9,i.director.startFollow(()=>l.cars[Math.floor(l.cars.length/2)].position,{dist:t.mode==="metro"?34:24,height:.42,side:.3,getDir:()=>t.path.tangentAt(f.s,pr).multiplyScalar(f.dir)}),await this.wait(r.dwell*.6);let _=this.elapsedMin,g=o[e.from].s,p=o[e.to].s,b=e.all;for(let S=1;S<b.length;S++){let w=b[S],C=o[w],v=i.network.complexes[C.key].name+(C.closed?" (fuera de servicio, no se detiene)":"");i.ui.journeyRide({rt:t,leg:e,k:S,next:v,progressFn:()=>Math.abs(f.s-g)/Math.abs(p-g)});let T=C.closed;if(await this._driveTo(f,C.s,r,T,()=>{this.elapsedMin=_+e.minutes*Math.abs(f.s-g)/Math.abs(p-g||1)}),this.cancelled)return;!T&&S<b.length-1&&(i.ui.journeyStatus(`Parada en ${v}`),i.ui.stationToast(v,t.color),await this.wait(r.dwell))}this.elapsedMin=_+e.minutes;let y=this.doorPoint(t,f.s,a),x=this.platformPoint(t,e.to,a);this.avatar.position.copy(y),this.avatar.visible=!0,this.markerTarget=S=>S.copy(this.avatar.position).y+=1.6,i.director.startFollow(()=>this.avatar.position,{dist:16,height:.5,side:.5,getDir:()=>this._avatarDir()}),i.ui.journeyStatus(`Llegaste a ${i.network.complexes[o[e.to].key].name}`),await this.walk([y,x],.8),this._depart(f,r),this.vehicle=null}_driveTo(e,t,n,i=!1,r){let a=e.rt,o=this.app;return this.frame(l=>{let c=Math.abs(t-e.s),h=i?n.vmax*.5:Math.min(n.vmax,Math.sqrt(2*n.accel*c));e.speed=e.speed<h?Math.min(h,e.speed+n.accel*l):h;let d=e.speed*l,u=!1;if(d>=c?(e.s=t,i||(e.speed=0),u=!0):e.s+=d*e.dir,e.rig.place(a.path,e.s,e.dir,a.lane),r&&r(),e.rig.kind==="train"&&e.speed>n.vmax*.45&&l>0)for(let f=0;f<2;f++)e.rig.rear(a.path,e.s,e.dir,a.lane,_i),_i.y+=.3+Math.random()*.5,o.particles.emit(_i,pr.set(Math.random()-.5,Math.random()*.6,Math.random()-.5),f?a.color:"#ffffff",1.1,.6);return u})}_depart(e,t){this.departing=this.departing||[],this.departing.push(e);let n=e.rt,i=0,r=n.path.length-e.rig.total/2,a=e.rig.total/2;this.frame(o=>(i+=o,e.speed=Math.min(t.vmax,e.speed+t.accel*o),e.s=Math.max(a,Math.min(r,e.s+e.speed*o*e.dir)),e.rig.place(n.path,e.s,e.dir,n.lane),i>5?(this._removeVehicle(e),this.departing=this.departing.filter(l=>l!==e),!0):!1))}_removeVehicle(e){e.kind==="gondola"?this.app.scene.remove(e.mesh):e.rig&&this.app.scene.remove(e.rig.group)}async _rideCable(e,t,n){let i=this.app,r=_a.cable,a=e.dir,o=t.stops[e.from],l=t.stops[e.to],c=t.loopPath.length,h=a>0?o.loopFwd:o.loopBwd,d=a>0?l.loopFwd:l.loopBwd;d<h&&(d+=c);let u=new tt(ic(t.color),Lt.solid);u.castShadow=!0,u.matrixAutoUpdate=!1,i.scene.add(u);let f={kind:"gondola",mesh:u,s:h-14,sw:new Ra(3),v:0};this.vehicle=f;let m=()=>{let C=au(t.loopPath,(f.s%c+c)%c,f.sw,u.matrix);return u.matrixWorldNeedsUpdate=!0,C};m(),i.ui.journeyStatus(`Esperando la telecabina de la ${t.def.name}`),i.director.startFollow(()=>this.avatar.position,{dist:16,height:.4,side:.9,getDir:()=>t.path.tangentAt(o.s,pr).multiplyScalar(a)});let _=(C,v,T)=>this.frame(I=>{let L=ou(t,(f.s%c+c)%c,r.stationFactor),U=r.v*L,z=C-f.s;v&&(U=Math.min(U,Math.max(.4,z*1.2))),f.v=U;let D=U*I,P=!1;D>=z?(f.s=C,P=!0):f.s+=D;let F=m();return f.sw.step(I,U,F,this.time),T&&T(),P});if(await _(h,!0),this.cancelled)return;i.ui.journeyStatus(`Abordando la telecabina hacia ${i.network.complexes[l.key].name}`);let g=new A;if(t.loopPath.pointAt((f.s%c+c)%c,g),g.y=o.cableY-Ut.cable.floor+.18,await this.walk([this.avatar.position.clone(),g],.7),this.cancelled)return;this.avatar.visible=!1,this.markerTarget=C=>C.setFromMatrixPosition(u.matrix).y+=.6;let p=new A;i.director.startFollow(()=>p.setFromMatrixPosition(u.matrix).add(_i.set(0,-1.1,0)),{dist:17,height:.18,side:1.1,smooth:1.6,getDir:()=>t.loopPath.tangentAt((f.s%c+c)%c,pr)});let b=this.elapsedMin,y=e.from;if(await _(d,!0,()=>{let C=(f.s-h)/(d-h);this.elapsedMin=b+e.minutes*C;for(let I of e.all){let L=t.stops[I],U=a>0?L.loopFwd:L.loopBwd;if(U<h-.1&&(U+=c),I!==y&&Math.abs(f.s-U)<1.5){y=I;let z=i.network.complexes[L.key].name;I!==e.to&&(i.ui.stationToast(z,t.color),i.ui.journeyStatus(`Pasando por la estaci\xF3n ${z}`))}}let v=e.all.find(I=>{let L=t.stops[I],U=a>0?L.loopFwd:L.loopBwd;return U<h-.1&&(U+=c),U>f.s+1.5}),T=i.network.complexes[t.stops[v??e.to].key].name;i.ui.journeyRideCable({rt:t,leg:e,next:T,progress:C})}),this.cancelled)return;this.elapsedMin=b+e.minutes;let x=new A().setFromMatrixPosition(u.matrix);x.y=l.cableY-Ut.cable.floor+.18;let S=this.platformPoint(t,e.to,a);this.avatar.position.copy(x),this.avatar.visible=!0,this.markerTarget=C=>C.copy(this.avatar.position).y+=1.6,i.director.startFollow(()=>this.avatar.position,{dist:16,height:.5,side:.5,getDir:()=>this._avatarDir()}),i.ui.journeyStatus(`Llegaste a ${i.network.complexes[l.key].name}`),await this.walk([x,S],.8),this.departing=this.departing||[],this.departing.push(f);let w=0;this.frame(C=>{w+=C,f.s+=r.v*C;let v=m();return f.sw.step(C,r.v,v,this.time),w>4?(this._removeVehicle(f),!0):!1}),this.vehicle=null}async _preview(){let e=this.app,t=[];for(let _ of this.route.legs){let g=this.lineOf(_),p=g.stops[_.from].s,b=g.stops[_.to].s,y=Math.max(2,Math.ceil(Math.abs(b-p)/4));for(let x=0;x<=y;x++)t.push(g.path.pointAt(p+(b-p)*x/y))}let n=new vn(t),i=new En().setFromPoints(t),r=i.getCenter(new A),a=i.getSize(new A).length();e.ui.journeyStatus("Vista previa de la ruta"),e.ui.showSkipPreview(!0);let o=new A(r.x,r.y+Math.max(160,a*.75),r.z+Math.max(150,a*.6));if(await e.director.flyTo(r,o,2,{interruptible:!1}),this.cancelled||this.skipPreviewFlag)return e.ui.showSkipPreview(!1);let l=Math.min(11,Math.max(5,n.length/170)),c=0,h=e.camera,d=e.controls,u=new A,f=new A,m=new A;await this.frame((_,g)=>{c+=g;let p=Math.min(1,c/l),y=(p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2)*n.length;n.pointAt(y,u),n.pointAt(Math.min(n.length,y+25),m),f.subVectors(m,n.pointAt(Math.max(0,y-25),_i)).setY(0),f.lengthSq()<1e-4&&f.set(0,0,-1),f.normalize(),m.copy(u).addScaledVector(f,-110).add(_i.set(-f.z*40,85,f.x*40));let x=1-Math.exp(-g*2.2);return d.target.lerp(u,x),h.position.lerp(m,x),p>=1||this.skipPreviewFlag||this.cancelled}),e.ui.showSkipPreview(!1)}skipPreview(){this.skipPreviewFlag=!0}_buildRouteGlow(){let e=this.app,t=new vt;t.name="route-glow",this.routeMat=new sn({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1});for(let n of this.route.legs){let i=this.lineOf(n),r=i.stops[n.from].s,a=i.stops[n.to].s,o=Math.max(3,Math.ceil(Math.abs(a-r)/3)),l=[];for(let m=0;m<=o;m++){let _=i.path.pointAt(r+(a-r)*m/o);_.y+=i.mode==="cable"?-.2:1.3,l.push(_)}let c=new Fn(l),h=i.mode==="cable"?.09:.16,d=new Vs(c,o*2,h,5,!1),u=new tt(d,new sn({color:i.color,toneMapped:!1})),f=new tt(new Vs(c,o*2,h*2.2,6,!1),this.routeMat);t.add(u,f)}e.scene.add(t),this.routeGroup=t,e.setRouteFocus(this.route)}_buildMarker(){let e=document.createElement("div");e.className="you-marker";let t=this.app.ui.portraits?.[this.avatarKey];e.innerHTML=`${t?`<img src="${t}" alt="">`:""}<span>T\xFA</span>`,this.markerObj=new Vn(e),this.markerAnchor=new It,this.markerAnchor.add(this.markerObj),this.app.scene.add(this.markerAnchor)}_celebrate(e){let t=["#6DB843","#0E5AA7","#F28C1E","#E6007E","#FFC20E","#ffffff","#6F2C91"],n=e.clone();n.y+=1.5;for(let i=0;i<160;i++)this.app.particles.emit(n,new A((Math.random()-.5)*9,4+Math.random()*7,(Math.random()-.5)*9),t[i%t.length],.8,2.2,7)}finish(){for(let e of this.tasks)e.resolve(!1);this.tasks=[],this.cancelled=!0,this._cleanup()}};var Tt=(s,e="0 0 24 24")=>`<svg viewBox="${e}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${s}</svg>`,it={metro:Tt('<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8.5 14.5h.01M15.5 14.5h.01M8 21l2-4M16 21l-2-4"/>'),cable:Tt('<path d="M3 4l18 3M12 5.5V9"/><rect x="6" y="9" width="12" height="10" rx="2.5"/><path d="M6 13h12"/>'),tram:Tt('<path d="M9 2h6M12 2v3"/><rect x="5" y="5" width="14" height="13" rx="3"/><path d="M5 12h14M8 21l1.5-3M16 21l-1.5-3M9 15h.01M15 15h.01"/>'),bus:Tt('<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M8 21v-3M16 21v-3M8 14.5h.01M16 14.5h.01"/>'),lrt:Tt('<rect x="4" y="4" width="16" height="13" rx="4"/><path d="M4 11h16M9 21l1-4M15 21l-1-4"/><path d="M2 21h20" stroke-dasharray="2 2"/>'),feeder:Tt('<rect x="3" y="6" width="15" height="11" rx="2.5"/><path d="M18 9h2l1 3v5h-3M7 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'),star:Tt('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),pin:Tt('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),swap:Tt('<path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"/>'),close:Tt('<path d="M6 6l12 12M18 6L6 18"/>'),home:Tt('<path d="M3 11l9-7 9 7M5 10v10h14V10"/>'),moon:Tt('<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>'),sun:Tt('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),info:Tt('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>'),chart:Tt('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),help:Tt('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 114 2c-1 .7-1.5 1.2-1.5 2.5M12 17h.01"/>'),play:Tt('<path d="M7 4l13 8-13 8z" fill="currentColor"/>'),pause:Tt('<path d="M7 4h4v16H7zM14 4h4v16h-4z" fill="currentColor" stroke="none"/>'),camera:Tt('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),route:Tt('<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 000-6H9a3 3 0 010-6h6.5"/>'),layers:Tt('<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"/>'),zoom:Tt('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3M11 8v6M8 11h6"/>'),walk:Tt('<circle cx="13" cy="4" r="2"/><path d="M10 21l2-6 3 3v3M9 11l3-4 3 3 3 1M12 7l-2 5 3 3"/>'),skip:Tt('<path d="M5 5l9 7-9 7zM17 5v14"/>')},cu={metro:it.metro,cable:it.cable,tram:it.tram,bus:it.bus,lrt:it.lrt,feeder:it.feeder};var Oe=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Cp=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),qy=s=>{let e=new me(s);return .2126*e.r+.7152*e.g+.0722*e.b>.36?"#1d1d1b":"#ffffff"},dn=(s,e=!1)=>{let t=Gn[s];return`<span class="chip${e?" sm":""}" style="background:${t.color};color:${qy(t.color)}" title="${Oe(t.name)}: ${Oe(t.title)}">${Oe(s)}</span>`},$y=["metro","cable","tram","bus","lrt"],Yy={metro:"Metro",cable:"Metrocable",tram:"Tranv\xEDa",bus:"Metropl\xFAs",lrt:"Metro de la 80"},hc=class{constructor(e){this.app=e,this.root=document.getElementById("ui"),this.avatar="estudiante",this.from=null,this.to=null,this.includeE=!0,this.portraits={},this.card=null,this.render()}render(){let e=$y.map(t=>{let n=rr.filter(i=>i.mode===t);return`<div class="lg-group"><div class="lg-head">${cu[t]}<span>${ki[t].label}</span><small>${ki[t].sub}</small></div>
        ${n.map(i=>`<label class="lg-row${i.construction?" cons":""}"><input type="checkbox" data-line="${i.id}" checked>${dn(i.id)}<span class="lg-name">${Oe(i.title)}</span><button class="lg-info" data-lineinfo="${i.id}" title="Ficha t\xE9cnica">${it.info}</button></label>`).join("")}</div>`}).join("");this.root.innerHTML=`
      <header class="brand">
        <div class="logo"><span class="l1">MAPA</span><span class="l2">METRO 3D</span></div>
        <div class="sub">Sistema Integrado de Transporte del Valle de Aburr\xE1<br><small>Datos: metrodemedellin.gov.co \xB7 metrodela80.gov.co</small></div>
      </header>

      <section class="panel planner" id="planner">
        <button class="panel-toggle" data-toggle="planner" title="Planea tu viaje">${it.route}</button>
        <div class="panel-body">
          <h2>${it.route} Planea tu viaje</h2>
          <div class="avatars" id="avatars">
            ${Object.entries(hr).map(([t,n])=>`<button class="avatar${t===this.avatar?" on":""}" data-avatar="${t}" title="${Oe(n.desc)}"><span class="ph" data-ph="${t}"></span><b>${Oe(n.label)}</b></button>`).join("")}
          </div>
          <div class="od">
            <div class="field"><span class="dot o"></span><input id="in-from" placeholder="Origen: escribe una estaci\xF3n" autocomplete="off"><div class="dd" id="dd-from"></div></div>
            <button class="swap" id="btn-swap" title="Intercambiar">${it.swap}</button>
            <div class="field"><span class="dot d"></span><input id="in-to" placeholder="Destino: escribe una estaci\xF3n" autocomplete="off"><div class="dd" id="dd-to"></div></div>
          </div>
          <label class="check"><input type="checkbox" id="chk-e" checked> Incluir el Metro de la 80 (proyectado, en construcci\xF3n)</label>
          <div id="route-result" class="route-result"><p class="hint">Elige origen y destino. Tambi\xE9n puedes tocar una estaci\xF3n en el mapa y usar <b>Salir de aqu\xED</b> o <b>Llegar aqu\xED</b>.</p></div>
        </div>
      </section>

      <section class="panel legend" id="legend">
        <button class="panel-toggle" data-toggle="legend" title="L\xEDneas y capas">${it.layers}</button>
        <div class="panel-body">
          <h2>${it.layers} L\xEDneas</h2>
          ${e}
          <div class="lg-group"><div class="lg-head">${it.feeder}<span>Capas</span></div>
            <label class="lg-row"><input type="checkbox" data-layer="feeders" checked><span class="chip" style="background:#56B04B;color:#fff">R</span><span class="lg-name">Rutas alimentadoras</span></label>
            <label class="lg-row"><input type="checkbox" data-layer="landmarks" checked><span class="chip star">${it.star}</span><span class="lg-name">Lugares tur\xEDsticos</span></label>
            <label class="lg-row"><input type="checkbox" data-layer="labels" checked><span class="chip lbl">Aa</span><span class="lg-name">Nombres de estaciones</span></label>
            <label class="lg-row"><input type="checkbox" data-layer="people" checked><span class="chip lbl">${it.walk}</span><span class="lg-name">Usuarios en estaciones</span></label>
          </div>
        </div>
      </section>

      <nav class="toolbar">
        <button id="btn-home" title="Vista general">${it.home}<span>Vista general</span></button>
        <button id="btn-night" title="D\xEDa / noche">${it.moon}<span>Noche</span></button>
        <button id="btn-facts" title="Datos del sistema">${it.chart}<span>Datos</span></button>
        <button id="btn-help" title="Ayuda">${it.help}<span>Ayuda</span></button>
      </nav>

      <button class="compass" id="compass" title="Orientar al norte"><span class="needle"></span><b>N</b></button>

      <div class="hud" id="hud" hidden>
        <div class="hud-top">
          <div class="hud-line" id="hud-line"></div>
          <div class="hud-status" id="hud-status"></div>
          <div class="hud-time" id="hud-time"></div>
        </div>
        <div class="hud-progress"><div class="bar" id="hud-bar"></div><div class="stops" id="hud-stops"></div></div>
        <div class="hud-ctrl">
          <button id="hud-pause" title="Pausa">${it.pause}</button>
          <div class="speeds" id="hud-speeds">${[.5,1,2,4].map(t=>`<button data-speed="${t}" class="${t===1?"on":""}">${t}x</button>`).join("")}</div>
          <button id="hud-cam" class="on" title="C\xE1mara cinematogr\xE1fica">${it.camera}<span>Cinem\xE1tica</span></button>
          <button id="hud-stop" title="Terminar viaje">${it.close}<span>Terminar</span></button>
        </div>
      </div>
      <button class="skip" id="btn-skip" hidden>${it.skip} Saltar vista previa</button>

      <div class="toasts" id="toasts"></div>
      <div class="tooltip" id="tooltip" hidden></div>
      <div class="civica" id="civica" hidden><div class="card-c"><b>C\xEDvica</b><span>\xA1Bip! Viaje validado</span></div></div>
      <div class="modal" id="modal" hidden><div class="modal-box" id="modal-box"></div></div>
    `,this.bind(),window.innerWidth>0&&window.innerWidth<760&&(document.getElementById("planner").classList.add("collapsed"),document.getElementById("legend").classList.add("collapsed"))}bind(){let e=t=>document.getElementById(t);this.root.querySelectorAll("[data-toggle]").forEach(t=>t.addEventListener("click",()=>{let n=document.getElementById(t.dataset.toggle);if(n.classList.toggle("collapsed"),window.innerWidth<760&&!n.classList.contains("collapsed")){let i=t.dataset.toggle==="planner"?"legend":"planner";document.getElementById(i).classList.add("collapsed")}})),this.root.querySelectorAll("[data-avatar]").forEach(t=>t.addEventListener("click",()=>{this.avatar=t.dataset.avatar,this.root.querySelectorAll("[data-avatar]").forEach(n=>n.classList.toggle("on",n===t))})),this.root.querySelectorAll("[data-line]").forEach(t=>t.addEventListener("change",()=>this.app.setLineVisible(t.dataset.line,t.checked))),this.root.querySelectorAll("[data-layer]").forEach(t=>t.addEventListener("change",()=>this.app.setLayer(t.dataset.layer,t.checked))),this.root.querySelectorAll("[data-lineinfo]").forEach(t=>t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.showLine(t.dataset.lineinfo)})),this.combo(e("in-from"),e("dd-from"),t=>this.setFrom(t)),this.combo(e("in-to"),e("dd-to"),t=>this.setTo(t)),e("btn-swap").addEventListener("click",()=>{let t=this.from;this.setFrom(this.to,!1),this.setTo(t)}),e("chk-e").addEventListener("change",t=>{this.includeE=t.target.checked,this.updateRoute()}),e("btn-home").addEventListener("click",()=>this.app.overview()),e("btn-night").addEventListener("click",()=>{let t=this.app.toggleNight();e("btn-night").innerHTML=t?`${it.sun}<span>D\xEDa</span>`:`${it.moon}<span>Noche</span>`}),e("btn-facts").addEventListener("click",()=>this.showFacts()),e("btn-help").addEventListener("click",()=>this.showHelp()),e("compass").addEventListener("click",()=>this.app.faceNorth()),e("modal").addEventListener("click",t=>{t.target.id==="modal"&&this.closeModal()}),e("hud-pause").addEventListener("click",()=>{let t=this.app.journey;t.paused=!t.paused,e("hud-pause").innerHTML=t.paused?it.play:it.pause}),e("hud-speeds").addEventListener("click",t=>{let n=t.target.closest("[data-speed]");n&&(this.app.journey.speed=+n.dataset.speed,e("hud-speeds").querySelectorAll("button").forEach(i=>i.classList.toggle("on",i===n)))}),e("hud-cam").addEventListener("click",()=>{let t=this.app.director;t.cinematic=!t.cinematic,e("hud-cam").classList.toggle("on",t.cinematic)}),this.app.director.onManual=()=>e("hud-cam").classList.remove("on"),e("hud-stop").addEventListener("click",()=>this.app.journey.cancel()),e("btn-skip").addEventListener("click",()=>this.app.journey.skipPreview()),window.addEventListener("keydown",t=>{t.key==="Escape"&&(e("modal").hidden?this.closeCard():this.closeModal())})}combo(e,t,n){let i=[],r=-1,a=()=>Object.values(this.app.network.complexes).filter(l=>!l.info.closed).sort((l,c)=>l.name.localeCompare(c.name,"es")),o=()=>{let l=Cp(e.value.trim());i=a().filter(c=>!l||Cp(c.name).includes(l)).slice(0,60),r=Math.min(r,i.length-1),t.innerHTML=i.map((c,h)=>`<div class="dd-item${h===r?" hi":""}" data-k="${c.key}"><span>${Oe(c.name)}</span><span class="chips">${c.lines.map(d=>dn(d,!0)).join("")}</span></div>`).join("")||'<div class="dd-empty">Sin resultados</div>',t.classList.add("open")};e.addEventListener("focus",()=>{e.select(),o()}),e.addEventListener("input",()=>{r=0,o()}),e.addEventListener("keydown",l=>{l.key==="ArrowDown"?(r=Math.min(i.length-1,r+1),o(),l.preventDefault()):l.key==="ArrowUp"?(r=Math.max(0,r-1),o(),l.preventDefault()):l.key==="Enter"&&i[r]?(n(i[r].key),t.classList.remove("open"),e.blur()):l.key==="Escape"&&t.classList.remove("open")}),e.addEventListener("blur",()=>setTimeout(()=>t.classList.remove("open"),150)),t.addEventListener("mousedown",l=>{let c=l.target.closest("[data-k]");c&&(l.preventDefault(),n(c.dataset.k),t.classList.remove("open"),e.blur())})}setFrom(e,t=!0){this.from=e,document.getElementById("in-from").value=e?this.app.network.complexes[e].name:"",this.app.setEndpoints(this.from,this.to),t&&this.updateRoute()}setTo(e,t=!0){this.to=e,document.getElementById("in-to").value=e?this.app.network.complexes[e].name:"",this.app.setEndpoints(this.from,this.to),t&&this.updateRoute()}updateRoute(){let e=document.getElementById("route-result");if(this.route=null,!this.from||!this.to)return;if(this.from===this.to){e.innerHTML='<p class="hint">El origen y el destino son la misma estaci\xF3n.</p>';return}let t=this.app.router.route(this.from,this.to,{includeE:this.includeE});if(!t){e.innerHTML=`<p class="hint warn">No hay conexi\xF3n con las l\xEDneas activas${this.includeE?"":". Prueba incluir el Metro de la 80"}.</p>`;return}this.route=t;let n=this.app.network,i=t.legs.map((r,a)=>{let o=Gn[r.line],l=r.all.length-1;return`${a>0?`<div class="leg-transfer">${it.walk} Transbordo en <b>${Oe(n.complexes[r.fromKey].name)}</b></div>`:""}
        <div class="leg" style="--c:${o.color}">
          <div class="leg-ico">${cu[o.mode]}</div>
          <div class="leg-txt">${dn(r.line)} <b>${Oe(n.complexes[r.fromKey].name)}</b> \u2192 <b>${Oe(n.complexes[r.toKey].name)}</b>
          <small>${Yy[o.mode]} \xB7 ${l} ${l===1?"parada":"paradas"} \xB7 \u2248${Math.max(1,Math.round(r.minutes))} min${o.construction?" \xB7 proyectado":""}</small></div>
        </div>`}).join("");e.innerHTML=`
      <div class="route-sum"><div><b>\u2248 ${Math.round(t.minutes)} min</b><small>tiempo estimado</small></div>
      <div><b>${t.transfers}</b><small>${t.transfers===1?"transbordo":"transbordos"}</small></div>
      <div><b>${t.legs.reduce((r,a)=>r+a.all.length-1,0)}</b><small>paradas</small></div></div>
      <div class="legs">${i}</div>
      <button class="primary" id="btn-go">${it.play} Iniciar recorrido 3D</button>
      <p class="fine">Tiempos calculados con los tiempos de recorrido y frecuencias oficiales por l\xEDnea. Incluye espera promedio y caminata en transbordos.</p>`,document.getElementById("btn-go").addEventListener("click",()=>this.app.startJourney(t,this.avatar))}closeCard(e=!1){this.card&&(this.card.parent?.remove(this.card),this.card.element.remove(),this.card=null,this.app.highlight(null)),e||this.app.clearPoiPins?.()}_cardShell(e,t,n="",i=!1){this.closeCard(i);let r=document.createElement("div");r.className="anchor",r.innerHTML=`<div class="card3d ${n}">${t}</div>`;let a=new Vn(r);return a.position.copy(e),this.app.scene.add(a),this.card=a,r.querySelector(".x")?.addEventListener("click",()=>this.closeCard()),r.addEventListener("pointerdown",o=>o.stopPropagation()),r.addEventListener("wheel",o=>o.stopPropagation(),{passive:!0}),r}updateCard(){if(!this.card)return;let e=this.card.element.querySelector(".card3d");if(!e)return;let t=this.card.getWorldPosition(new A).project(this.app.camera);if(t.z>1)return;let n=window.innerWidth,i=window.innerHeight,r=(t.x*.5+.5)*n,a=(-t.y*.5+.5)*i,o=e.offsetWidth,l=e.offsetHeight,c=Math.max(12-r,Math.min(-o/2,n-12-o-r)),h=64,d=n<760?190:90,u=Math.max(220,i-h-d),f=Math.min(l,u),m=a-16-h,_=i-d-a-16,g=m>=f||m>=_,p;e.style.left=c+"px",e.style.maxHeight=u+"px",g?(p=Math.max(0,h-(a-16-f)),e.style.bottom=16-p+"px",e.style.top="auto"):(p=Math.max(0,a+16+f-(i-d)),e.style.top=16-p+"px",e.style.bottom="auto"),this.card.element.classList.toggle("below",!g),this.card.element.classList.toggle("shifted",p>0)}showStation(e){let t=this.app.network,n=t.complexes[e];if(!n)return;let i=n.info,r=n.lines.map(y=>Gn[y]),a=n.construction?"Proyectada \xB7 Metro de la 80 (en construcci\xF3n)":r.length>1?"Estaci\xF3n de transferencia":n.modes.has("metro")?"Estaci\xF3n de metro":n.modes.has("cable")?"Estaci\xF3n de Metrocable":n.modes.has("tram")?"Parada de tranv\xEDa":"Parada de Metropl\xFAs",o=r.map(y=>{let x=n.lines.length>1,S=x&&(()=>{let w=n.stops.filter(v=>v.line!==y.id).map(v=>v.pos),C=n.stops.find(v=>v.line===y.id).pos;return Math.min(...w.map(v=>v.distanceTo(C)))>14})();return`<li>${dn(y.id)}<div><b>${Oe(y.name)}</b> \xB7 ${Oe(y.title)}<small>${ki[y.mode].label}${x?S?" \xB7 transferencia peatonal":" \xB7 transferencia directa":""}${y.construction?" \xB7 en construcci\xF3n":""}</small></div></li>`}).join(""),l=i.pois||[],c=new Set(l.map(y=>Vi(y).lm).filter(Boolean)),h=this.app.landmarksNear(n.pos,110).filter(y=>!c.has(y.def.id)),d=t.feeders.filter(y=>y.complex===e),u=Sp[e]||[],f=l.map(y=>{let x=dr[Vi(y).cat];return`<li class="poi" data-poi="${Oe(y)}" title="Ver informaci\xF3n del lugar"><i class="pdot" style="background:${x.color}"></i><span class="pt"><b>${Oe(y)}</b><small>${Oe(x.label)}</small></span><span class="go">\u203A</span></li>`}).join(""),m=h.map(y=>`<li class="poi lm" data-lm="${y.def.id}"><i class="pdot star">${it.star}</i><span class="pt"><b>${Oe(y.def.name)}</b><small>${Oe(y.def.category)}</small></span><span class="go">\u203A</span></li>`).join(""),_=(i.services||[]).map(y=>`<span class="svc">${Oe(kf[y]||y)}</span>`).join(""),g=`
      <div class="c-head" style="--c:${r[0].color}">
        <div class="chips">${n.lines.map(y=>dn(y)).join("")}</div>
        <button class="x" title="Cerrar">${it.close}</button>
        <h3>${Oe(n.name)}</h3><small>${a}</small>
      </div>
      <div class="c-body">
        ${i.closed?'<p class="warn">Parada fuera de servicio.</p>':""}
        ${i.notes?`<p class="note">${Oe(i.notes)}</p>`:""}
        <h4>Conexiones y transbordos</h4><ul class="conns">${o}</ul>
        ${i.routes&&i.routes.length||d.length?`<h4>Rutas integradas y alimentadoras</h4><div class="routes">${[...new Set([...i.routes||[],...d.map(y=>y.code)])].map(y=>`<span class="rt">${Oe(y)}</span>`).join("")}</div>`:""}
        <h4>Puntos de inter\xE9s cercanos <span class="hint-s">toca uno para ver su informaci\xF3n</span></h4>
        ${l.length||h.length?`<ul class="pois">${f}${m}</ul>`:'<p class="muted">Sin sitios registrados en la fuente oficial.</p>'}
        ${u.length?`<h4>Eventos de ciudad</h4><div class="routes">${u.map(y=>`<span class="ev">${Oe(y)}</span>`).join("")}</div>`:""}
        ${_?`<h4>Servicios</h4><div class="svcs">${_}</div>`:""}
        ${i.address?`<p class="addr">${it.pin} ${Oe(i.address)}</p>`:""}
      </div>
      <div class="c-actions">
        <button data-act="from">Salir de aqu\xED</button>
        <button data-act="to" class="primary">Llegar aqu\xED</button>
      </div>`,p=n.pos.clone();p.y+=n.modes.has("cable")&&!n.modes.has("metro")?2.5:4;let b=this._cardShell(p,g);b.querySelector('[data-act="from"]').addEventListener("click",()=>{this.setFrom(e),this.openPlanner()}),b.querySelector('[data-act="to"]').addEventListener("click",()=>{this.setTo(e),this.openPlanner()}),b.querySelectorAll("[data-lm]").forEach(y=>y.addEventListener("click",()=>this.app.focusLandmark(y.dataset.lm))),b.querySelectorAll("[data-poi]").forEach(y=>y.addEventListener("click",()=>this.app.focusPoi(y.dataset.poi,e))),this.app.highlight(e),this.app.showPoiPins(e)}walkText(e){let t=e*10;if(t<1500)return`\u2248 ${Math.max(50,Math.round(t/50)*50)} m \xB7 ${Math.max(1,Math.round(t/75))} min a pie`;let n=(t/1e3).toFixed(1).replace(".",",");return t>2500?`\u2248 ${n} km \xB7 mejor en ruta integrada o bus`:`\u2248 ${n} km \xB7 ${Math.round(t/75)} min a pie`}showPoi(e,t,n){let i=this.app.network,r=Vi(e),a=dr[r.cat],o=i.complexes[t],l=n?n.pos:o.pos,c=Object.values(i.complexes).filter(g=>(g.info.pois||[]).includes(e)).map(g=>({c:g,d:Math.hypot(g.pos.x-l.x,g.pos.z-l.z)})).sort((g,p)=>n?g.d-p.d:g.c.key===t?-1:1),h=c[0]?.c||o,d=c.map(({c:g,d:p},b)=>`<li class="st-link" data-st="${g.key}">${g.lines.map(y=>dn(y,!0)).join("")}<div><b>${Oe(g.name)}</b>${b===0&&c.length>1&&n?' <span class="best">m\xE1s cercana</span>':""}<small>${n?this.walkText(p):"Estaci\xF3n recomendada por el Metro"}</small></div></li>`).join(""),u=n?n.kind==="lm"?"Lugar modelado en 3D en el mapa.":"Ubicaci\xF3n aproximada en el mapa.":"Sin ubicaci\xF3n exacta en el mapa: se se\xF1ala junto a la estaci\xF3n.",f=`
      <div class="c-head poih" style="--c:${a.color}">
        <div class="chips"><span class="chip poi-ico" style="color:${a.color}">${it.pin}</span><span class="cat">${Oe(a.label)}</span></div>
        <button class="x" title="Cerrar">${it.close}</button>
        <h3>${Oe(e)}</h3><small>Punto de inter\xE9s \xB7 estaci\xF3n ${Oe(o.name)}</small>
      </div>
      <div class="c-body">
        <p>${Oe(r.desc)}</p>
        <h4>C\xF3mo llegar</h4><ul class="conns">${d}</ul>
        <p class="fine">${u} Figura como sitio de inter\xE9s de la estaci\xF3n en metrodemedellin.gov.co.</p>
      </div>
      <div class="c-actions">
        <button data-act="back">\u2039 ${Oe(o.name)}</button>
        <button data-act="to" class="primary">Llegar aqu\xED</button>
      </div>`,m=l.clone();m.y+=n?n.kind==="lm"?1:2.4:4;let _=this._cardShell(m,f,"poicard",!0);_.querySelector('[data-act="back"]').addEventListener("click",()=>this.app.focusStation(t)),_.querySelector('[data-act="to"]').addEventListener("click",()=>{this.setTo(h.key),this.openPlanner()}),_.querySelectorAll("[data-st]").forEach(g=>g.addEventListener("click",()=>this.app.focusStation(g.dataset.st))),this.app.selectPoiPin(e)}showLandmark(e){let t=this.app.landmarks.find(l=>l.def.id===e);if(!t)return;let n=t.def,i=this.app.network.complexes[n.station],r=`
      <div class="c-head lmh">
        <div class="chips"><span class="chip star">${it.star}</span><span class="cat">${Oe(n.category)}</span></div>
        <button class="x" title="Cerrar">${it.close}</button>
        <h3>${Oe(n.name)}</h3><small>Lugar tur\xEDstico y representativo</small>
      </div>
      <div class="c-body">
        <p>${Oe(n.desc)}</p>
        ${i?`<h4>C\xF3mo llegar</h4><ul class="conns"><li class="st-link" data-st="${i.key}">${i.lines.map(l=>dn(l)).join("")}<div><b>${Oe(i.name)}</b><small>Estaci\xF3n recomendada \xB7 ${this.walkText(Math.hypot(i.pos.x-t.pos.x,i.pos.z-t.pos.z))}</small></div></li></ul>`:""}
      </div>
      <div class="c-actions">
        ${i?'<button data-act="st">Ver estaci\xF3n</button><button data-act="to" class="primary">Llegar aqu\xED</button>':""}
      </div>`,a=t.pos.clone();a.y+=t.top+1;let o=this._cardShell(a,r,"lmcard");o.querySelector('[data-act="to"]')?.addEventListener("click",()=>{this.setTo(n.station),this.openPlanner()}),o.querySelector('[data-act="st"]')?.addEventListener("click",()=>this.app.focusStation(n.station)),o.querySelectorAll("[data-st]").forEach(l=>l.addEventListener("click",()=>this.app.focusStation(l.dataset.st)))}openPlanner(){document.getElementById("planner").classList.remove("collapsed"),window.innerWidth<760&&document.getElementById("legend").classList.add("collapsed")}makeStationLabel(e){let t=document.createElement("div");return t.className="st-label"+(e.construction?" cons":"")+(e.lines.length>1?" major":""),t.innerHTML=`<span class="dots">${e.lines.map(n=>`<i style="background:${Gn[n].color}"></i>`).join("")}</span><b>${Oe(e.name)}</b>`,t.addEventListener("click",()=>this.app.focusStation(e.key)),t}makeLandmarkLabel(e){let t=document.createElement("div");return t.className="lm-label",t.innerHTML=`${it.star}<b>${Oe(e.name)}</b>`,t.addEventListener("click",()=>this.app.focusLandmark(e.id)),t}tooltip(e,t,n){let i=document.getElementById("tooltip");if(!e)return i.hidden=!0;i.hidden=!1,i.innerHTML=e,i.style.left=t+14+"px",i.style.top=n+14+"px"}modal(e,t=""){let n=document.getElementById("modal"),i=document.getElementById("modal-box");return i.className="modal-box "+t,i.innerHTML=`<button class="x mx" title="Cerrar">${it.close}</button>${e}`,i.querySelector(".mx").addEventListener("click",()=>this.closeModal()),n.hidden=!1,i}closeModal(){if(document.getElementById("modal").hidden=!0,this._onModalClose){let e=this._onModalClose;this._onModalClose=null,e()}}showLine(e){let t=Gn[e],n=t.facts,i={tipo:"Tipo de sistema",longitud:"Longitud",estaciones:"Estaciones",tiempo:"Tiempo de recorrido",velocidad:"Velocidad comercial",capacidadVehiculo:"Capacidad",flota:"Flota",pilonas:"N\xFAmero de pilonas",frecuencia:"Frecuencia m\xEDnima",capacidadHora:"Capacidad (pasajeros/hora/sentido)",inicio:"Inicio de operaci\xF3n",transferencias:"Estaciones de transferencia",horario:"Horario",estado:"Estado",identidad:"Identidad",integracion:"Integraci\xF3n",recorrido:"Recorrido"},r=this.app.network.lines[e],a=r.stops.map(l=>this.app.network.complexes[l.key]);this.modal(`
      <div class="m-head" style="--c:${t.color}">${dn(e)}<div><h2>${Oe(t.name)}: ${Oe(t.title)}</h2><small>${ki[t.mode].label}${t.subtitle?" \xB7 "+Oe(t.subtitle):""}</small></div></div>
      <table class="facts">${Object.entries(n).map(([l,c])=>`<tr><th>${Oe(i[l]||l)}</th><td>${Oe(c)}</td></tr>`).join("")}</table>
      <h4>Recorrido</h4>
      <ol class="stops-list" style="--c:${t.color}">${a.map((l,c)=>`<li data-k="${l.key}"${r.stops[c].closed?' class="closed"':""}>${Oe(l.name)}${l.lines.length>1?`<span class="chips">${l.lines.filter(h=>h!==e).map(h=>dn(h,!0)).join("")}</span>`:""}</li>`).join("")}</ol>
      <p class="fine">Fuente: ${t.construction?"metrodela80.gov.co":"metrodemedellin.gov.co / Sistema integrado"}.</p>`,"wide").querySelectorAll("[data-k]").forEach(l=>l.addEventListener("click",()=>{this.closeModal(),this.app.focusStation(l.dataset.k)}))}showFacts(){let e=zf,t=rr.map(i=>`<tr data-l="${i.id}"><td>${dn(i.id)}</td><td>${Oe(i.title)}</td><td>${Oe(ki[i.mode].label)}</td><td>${Oe(i.facts.longitud)}</td><td>${Oe(i.facts.tiempo)}</td><td>${Oe(i.facts.frecuencia||"\u2014")}</td><td>${Oe(i.facts.capacidadHora||"\u2014")}</td><td>${Oe(i.facts.inicio)}</td></tr>`).join("");this.modal(`
      <h2>Datos del sistema</h2>
      <div class="kpis">
        <div><b>${Oe(e.longitud)}</b><small>de red en operaci\xF3n</small></div>
        <div><b>12</b><small>l\xEDneas en 4 modos</small></div>
        <div><b>86.078</b><small>pasajeros/hora/sentido</small></div>
        <div><b>13,25 km</b><small>Metro de la 80 en obra</small></div>
      </div>
      <div class="facts-grid">
        <div><h4>Longitud por modo</h4><table class="facts">${e.desglose.map(([i,r])=>`<tr><th>${i}</th><td>${r}</td></tr>`).join("")}</table></div>
        <div><h4>Flota</h4><table class="facts">${e.flota.map(([i,r])=>`<tr><th>${i}</th><td>${r}</td></tr>`).join("")}</table></div>
        <div><h4>Accesos</h4><table class="facts">${e.accesos.map(([i,r])=>`<tr><th>${i}</th><td>${r}</td></tr>`).join("")}</table></div>
      </div>
      <h4>L\xEDneas</h4>
      <div class="tbl-wrap"><table class="lines-tbl"><thead><tr><th></th><th>Recorrido</th><th>Modo</th><th>Longitud</th><th>Tiempo</th><th>Frecuencia pico</th><th>Capacidad</th><th>Inicio</th></tr></thead><tbody>${t}</tbody></table></div>
      <p class="fine">Fuente: metrodemedellin.gov.co (Sistema integrado e infograf\xEDa "Datos del sistema") y metrodela80.gov.co.</p>`,"wide").querySelectorAll("[data-l]").forEach(i=>i.addEventListener("click",()=>this.showLine(i.dataset.l)))}showHelp(){this.modal(`
      <h2>C\xF3mo usar el mapa</h2>
      <ul class="help">
        <li><b>Mover el mapa:</b> arrastra con el bot\xF3n izquierdo (un dedo en pantallas t\xE1ctiles).</li>
        <li><b>Girar e inclinar:</b> arrastra con el bot\xF3n derecho (dos dedos en pantallas t\xE1ctiles).</li>
        <li><b>Acercar o alejar:</b> usa la rueda del rat\xF3n o pellizca la pantalla.</li>
        <li><b>Estaciones:</b> toca un modelo o su nombre para ver conexiones, puntos de inter\xE9s y servicios.</li>
        <li><b>Lugares tur\xEDsticos</b> (\u2605): se ven a lo lejos y tambi\xE9n se pueden tocar.</li>
        <li><b>Recorrido 3D:</b> elige tu viajero, el origen y el destino, y pulsa <i>Iniciar recorrido 3D</i>. La c\xE1mara vuela por la ruta y luego sigue al pasajero. Durante el viaje puedes orbitar con el rat\xF3n, pausar o cambiar la velocidad.</li>
        <li><b>L\xEDneas:</b> mu\xE9stralas u oc\xFAltalas desde la leyenda. Con \u24D8 ves la ficha t\xE9cnica oficial.</li>
      </ul>
      <p class="fine">La escala vertical del relieve est\xE1 exagerada (\xD71,7) y los veh\xEDculos se dibujan m\xE1s grandes que su tama\xF1o real para que se lean en el mapa. El trazado de las rutas alimentadoras es ilustrativo.</p>`)}journeyStarted(e){this.closeCard(),document.getElementById("hud").hidden=!1,document.body.classList.add("in-journey"),this.totalMin=e.minutes;let t=[];e.legs.forEach((i,r)=>{i.all.forEach((a,o)=>{if(r>0&&o===0)return;let l=this.app.network.lines[i.line];t.push({key:l.stops[a].key,color:l.def.color,leg:r,k:o})})}),this.hudStops=t;let n=document.getElementById("hud-stops");n.innerHTML=t.map((i,r)=>`<i style="left:${r/Math.max(1,t.length-1)*100}%;background:${i.color}" title="${Oe(this.app.network.complexes[i.key].name)}"></i>`).join(""),this._setBar(0),this.journeyStatus("Preparando el viaje\u2026"),document.getElementById("hud-time").textContent=`\u2248 ${Math.round(e.minutes)} min`,document.getElementById("planner").classList.add("collapsed")}_setBar(e){document.getElementById("hud-bar").style.width=Math.max(0,Math.min(1,e))*100+"%"}journeyStatus(e){document.getElementById("hud-status").textContent=e;let t=this.app.journey;t&&t.active&&(document.getElementById("hud-time").textContent=`${Math.round(t.elapsedMin)} / \u2248${Math.round(this.totalMin)} min`)}journeyLeg(e,t){let n=Gn[t.line];document.getElementById("hud-line").innerHTML=`${dn(t.line)}<span>${ki[n.mode].label}</span>`,this._legBase=this.hudStops.findIndex(i=>i.leg===e),this._legBase<0&&(this._legBase=this.hudStops.length-1),e>0&&(this._legBase=Math.max(0,this.hudStops.findIndex(i=>i.leg===e)-1))}journeyRide({rt:e,leg:t,k:n,next:i,progressFn:r}){let a=this.hudStops.length-1,o=this._legBase,l=r();this._setBar((o+l*(t.all.length-1))/Math.max(1,a)),this.journeyStatus(`${e.def.name} \u2192 pr\xF3xima: ${i}`);let c=this.app.journey,h=()=>{!c.active||!c.vehicle||c.vehicle.kind!=="linear"||(this._setBar((o+r()*(t.all.length-1))/Math.max(1,a)),document.getElementById("hud-time").textContent=`${Math.round(c.elapsedMin)} / \u2248${Math.round(this.totalMin)} min`,this._raf=requestAnimationFrame(h))};cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame(h)}journeyRideCable({rt:e,leg:t,next:n,progress:i}){let r=this.hudStops.length-1;this._setBar((this._legBase+i*(t.all.length-1))/Math.max(1,r)),document.getElementById("hud-status").textContent=`${e.def.name} (Metrocable) \u2192 pr\xF3xima: ${n}`,document.getElementById("hud-time").textContent=`${Math.round(this.app.journey.elapsedMin)} / \u2248${Math.round(this.totalMin)} min`}journeyTransfer(e,t,n){this.toast(`${it.walk}<span>Transbordo en <b>${Oe(n)}</b>: de ${dn(e.id,!0)} a ${dn(t.id,!0)} ${Oe(ki[t.mode].label)}</span>`,3200),this.journeyStatus(`Transbordo a ${t.def.name} en ${n}`)}stationToast(e,t){this.toast(`<i class="tdot" style="background:${t}"></i><span>${Oe(e)}</span>`,1500,"st")}civicaPop(){let e=document.getElementById("civica");e.hidden=!1,e.classList.remove("go"),e.offsetWidth,e.classList.add("go"),clearTimeout(this._civ),this._civ=setTimeout(()=>e.hidden=!0,1300)}showSkipPreview(e){document.getElementById("btn-skip").hidden=!e}journeyArrived(e,t){this._setBar(1);let n=this.app.network;this.journeyStatus(`\xA1Llegaste a ${n.complexes[e.to].name}!`);let i=e.legs.reduce((r,a)=>{let o=n.lines[a.line];return r+Math.abs(o.stops[a.to].s-o.stops[a.from].s)*.01},0);setTimeout(()=>{this.modal(`
        <div class="arrive">
          <div class="big">${this.portraits[this.avatar]?`<img src="${this.portraits[this.avatar]}" alt="">`:""}</div>
          <h2>\xA1Llegaste a ${Oe(n.complexes[e.to].name)}!</h2>
          <p>Viaje desde <b>${Oe(n.complexes[e.from].name)}</b></p>
          <div class="kpis"><div><b>\u2248 ${Math.round(e.minutes)} min</b><small>tiempo estimado</small></div>
          <div><b>${i.toFixed(1).replace(".",",")} km</b><small>recorridos</small></div>
          <div><b>${e.transfers}</b><small>transbordos</small></div>
          <div><b>${e.legs.length}</b><small>${e.legs.length===1?"l\xEDnea":"l\xEDneas"}</small></div></div>
          <div class="chips big-chips">${e.legs.map(a=>dn(a.line)).join('<span class="arr">\u2192</span>')}</div>
          <p class="fine">Con la tarjeta C\xEDvica los transbordos del sistema integrado se validan en cada acceso.</p>
          <button class="primary" id="btn-done">Explorar el mapa</button>
        </div>`).querySelector("#btn-done").addEventListener("click",()=>this.closeModal()),this._onModalClose=()=>this.app.endJourney()},1600)}journeyEnded(){document.getElementById("hud").hidden=!0,document.body.classList.remove("in-journey"),this.showSkipPreview(!1),cancelAnimationFrame(this._raf)}toast(e,t=2500,n=""){let i=document.getElementById("toasts"),r=document.createElement("div");for(r.className="toast "+n,r.innerHTML=e,i.appendChild(r);i.children.length>4;)i.firstChild.remove();setTimeout(()=>{r.classList.add("out"),setTimeout(()=>r.remove(),400)},t)}setPortraits(e){this.portraits=e,this.root.querySelectorAll("[data-ph]").forEach(t=>{e[t.dataset.ph]&&(t.innerHTML=`<img src="${e[t.dataset.ph]}" alt="">`)})}setCompass(e){let t=document.getElementById("compass");t&&t.style.setProperty("--rot",`${e}rad`)}};var yn=()=>new Promise(s=>setTimeout(s,16)),kt={hemiSky:new me("#d2ebff"),hemiGround:new me("#7d9a55"),hemi:1.25,sun:2.7,sunColor:new me("#fff0d6"),top:new me("#3f9be0"),horizon:new me("#d6eefc"),bottom:new me("#eaf5ee"),cloud:new me("#ffffff"),exposure:1},si={hemiSky:new me("#44569a"),hemiGround:new me("#1b2233"),hemi:.42,sun:.45,sunColor:new me("#a9b9ff"),top:new me("#070b24"),horizon:new me("#2b2d5c"),bottom:new me("#15172b"),cloud:new me("#6a7299"),exposure:1.15},hu=class{constructor(){this.loadingEl=document.getElementById("loading"),this.stepEl=document.getElementById("load-step"),this.barEl=document.getElementById("load-bar"),this.visibleLines=new Set(Object.keys(Gn)),this.layers={feeders:!0,landmarks:!0,labels:!0,people:!0},this.night=!1,this.nightT=0,this.stationGroups={},this.labels=[],this.pickables=[],this.people=[],this.anims=[],this.poiPins=[]}progress(e,t){this.stepEl&&(this.stepEl.textContent=e),this.barEl&&(this.barEl.style.width=t+"%")}async init(){this.progress("Preparando el motor 3D\u2026",4),await yn();let e=document.getElementById("scene"),t=new pa({antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,1.75));let n=window.innerWidth||1280,i=window.innerHeight||720;t.setSize(n,i),t.shadowMap.enabled=!0,t.shadowMap.type=ts,t.toneMapping=ea,t.toneMappingExposure=1,e.appendChild(t.domElement),this.renderer=t;let r=new Hl;r.setSize(n,i),r.domElement.className="labels-layer",e.appendChild(r.domElement),this.labelRenderer=r;let a=new Os;this.scene=a;let o=new Xt(45,n/i,.3,2e4);this.camera=o,Pf(),this.hemi=new Gs(kt.hemiSky,kt.hemiGround,kt.hemi),a.add(this.hemi);let l=new Xs(kt.sunColor,kt.sun);l.castShadow=!0,l.shadow.mapSize.set($h,$h),l.shadow.bias=-4e-4,l.shadow.normalBias=.25,l.shadow.camera.near=10,l.shadow.camera.far=3e3,a.add(l,l.target),this.sun=l,this.sunOffset=new A(420,700,260);let{sky:c,stars:h}=ip();a.add(c,h),this.sky=c,this.stars=h,a.fog=new Ir(kt.horizon.clone(),1600,6500),this.progress("Modelando el relieve del Valle de Aburr\xE1\u2026",10),await yn();let d=new Yl;d.buildCore({x0:-1010,x1:1160,z0:-1260,z1:1260},8),this.progress("Levantando las monta\xF1as lejanas\u2026",22),await yn(),d.buildRing({x0:-4300,x1:4500,z0:-4700,z1:4700},60),a.add(d.group),this.terrain=d,this.progress("Trazando las 13 l\xEDneas del sistema\u2026",30),await yn();let u=new Zl(d).build();this.network=u,this.router=new lc(u),this.progress("Construyendo viaductos, rieles y cables\u2026",38),await yn(),this.infra={};for(let g of Object.values(u.lines)){let p=jf(g,d),b=g.mode==="metro"?1.25:g.mode==="bus"?.7:g.mode==="cable"?.85:.9;p.add(Kf(g,b,g.def.construction?6:0)),a.add(p),this.infra[g.id]=p}this.feederGroup=new vt;for(let g of u.feeders)this.feederGroup.add(Zf(g,d));a.add(this.feederGroup);let f=Jf(d);a.add(f.mesh),this.progress("Levantando estaciones\u2026",46),await yn(),this.buildStations(),this.progress("Ubicando lugares emblem\xE1ticos\u2026",52),await yn(),this.landmarks=nu.map(g=>{let p=mp(g,d);return p.def=g,a.add(p.group),p.anim&&this.anims.push(p.anim),p}),this.progress("Construyendo la ciudad\u2026",58),await yn();let m=np(d,u,this.landmarks,{density:1});a.add(m.group),this.city=m,this.progress("Sembrando nubes\u2026",74),await yn(),this.clouds=sp({x0:-1600,x1:1800,z0:-1800,z1:1800}),a.add(this.clouds.group),this.progress("Poniendo a rodar trenes, tranv\xEDas, buses y telecabinas\u2026",80),await yn(),this.particles=new ac(5e3),a.add(this.particles.points),this.traffic=new rc(a,u,this.particles),this.traffic.build(),this.buildPlane();let _=new kl(o,r.domElement);_.enableDamping=!0,_.dampingFactor=.08,_.screenSpacePanning=!1,_.maxPolarAngle=1.42,_.minDistance=3,_.maxDistance=4200,_.zoomToCursor=!0,_.zoomSpeed=1.2,this.controls=_,this.director=new oc(o,_),this.journey=new cc(this),this.progress("Invitando a los usuarios del Metro\u2026",88),await yn(),this.ui=new hc(this),this.buildLabels(),this.buildPeople(),this.buildPins(),this.progress("Retratando a los viajeros\u2026",94),await yn(),this.ui.setPortraits(this.renderPortraits()),this.bindEvents(),_.target.set(40,20,60),o.position.set(-900,3200,3600),this.progress("\xA1Listo!",100),await yn(),this.loadingEl.classList.add("done"),setTimeout(()=>this.loadingEl.remove(),900),this.clock={last:performance.now(),elapsedTime:0,getDelta(){let g=performance.now(),p=(g-this.last)/1e3;return this.last=g,this.elapsedTime+=p,p}},t.setAnimationLoop(()=>this.loop()),this.overview(3.2),window.__app=this}buildStations(){let e=this.network,t=this.terrain,n=new sn({visible:!1}),i=new pi(1,8,6);for(let r of Object.values(e.lines)){let a=[];r.stops.forEach((l,c)=>{let h=e.complexes[l.key],d;if(r.mode==="metro"){let m=h.lines.filter(_=>_!==r.id).map(_=>Gn[_].color);d=op(r,l,t,m)}else r.mode==="tram"?d=lp(r,l):r.mode==="bus"?d=r.id==="O"?hp(r,l):cp(r,l):r.mode==="lrt"?d=up(r,l,["caribe","aguacatala"].includes(l.key)):r.mode==="cable"&&(d=dp(r,l,c,r.stops.length,t));if(!d)return;a.push(d);let u=new tt(i,n),f=r.mode==="metro"?6:r.mode==="cable"?4.5:3.2;u.scale.setScalar(f),u.position.copy(l.pos),u.position.y+=r.mode==="metro"?.8:r.mode==="cable"?-.4:.8,u.userData={type:"station",key:l.key,line:r.id},this.scene.add(u),this.pickables.push(u)});let o=If(a);o.name="stations-"+r.id,this.scene.add(o),this.stationGroups[r.id]=[o]}}buildLabels(){for(let e of Object.values(this.network.complexes)){let t=this.ui.makeStationLabel(e),n=new Vn(t);n.position.copy(e.pos),n.position.y+=e.primaryMode==="metro"?3.4:e.primaryMode==="cable"?2.2:2.4,n.center.set(.5,1),this.scene.add(n);let i=e.lines.length>1||e.primaryMode==="metro"?1:e.primaryMode==="cable"?2:3;this.labels.push({obj:n,el:t,cx:e,tier:i,kind:"station"})}for(let e of this.landmarks){let t=this.ui.makeLandmarkLabel(e.def),n=new Vn(t);n.position.copy(e.pos),n.position.y+=e.top+1.5,n.center.set(.5,1),this.scene.add(n),this.labels.push({obj:n,el:t,lm:e,tier:0,kind:"landmark"});let i=new tt(new pi(1,8,6),new sn({visible:!1})),r=Math.max(6,Math.min(24,(e.def.clear||8)*.9));i.scale.setScalar(r),i.position.copy(e.pos),i.position.y+=e.top*.4,i.userData={type:"landmark",id:e.def.id},this.scene.add(i),this.pickables.push(i),e.proxy=i}}buildPeople(){let e=Kt(2024),t=this.network,n=this.terrain,i=[];for(let r of Object.values(t.complexes)){if(r.construction)continue;let a=r.lines.length>1?5:r.primaryMode==="metro"?3:r.primaryMode==="cable"?2:1;for(let o=0;o<a;o++)i.push(r.pos)}for(let r of this.landmarks)for(let a=0;a<5;a++)i.push(r.pos);for(let r of i){let a=Aa(xp(Math.floor(e()*1e9))),o=e()*Math.PI*2,l=4+e()*5,c=r.x+Math.cos(o)*l,h=r.z+Math.sin(o)*l;a.position.set(c,n.heightAt(c,h),h),a.rotation.y=e()*Math.PI*2;let d=e()<.5,u=d?{x:c+(e()-.5)*8,z:h+(e()-.5)*8}:null;this.scene.add(a),this.people.push({p:a,walker:d,a:{x:c,z:h},b:u,t:e()*10,home:r})}}buildPins(){let e=(n,i)=>{let r=new lt;r.cone(.9,2.2,10,n,{p:[0,1.1,0],r:[Math.PI,0,0]}),r.sphere(1.25,1,n,{p:[0,2.9,0]}),r.sphere(.55,1,"#ffffff",{p:[0,2.95,.72],layer:"glow"});let a=r.build();a.visible=!1,a.scale.setScalar(.75),this.scene.add(a);let o=document.createElement("div");o.className="pin-label",o.style.background=n,o.textContent=i;let l=new Vn(o);return l.position.set(0,4.6,0),a.add(l),a};this.pinFrom=e("#6DB843","Origen"),this.pinTo=e("#E6007E","Destino");let t=new tt(new mi(5,.35,6,32),new sn({color:"#ffffff",transparent:!0,opacity:.85,toneMapped:!1}));t.rotation.x=Math.PI/2,t.visible=!1,this.scene.add(t),this.ring=t}setEndpoints(e,t){let n=(i,r)=>{if(!r)return i.visible=!1;let a=this.network.complexes[r];i.visible=!0,i.position.copy(a.pos),i.position.y+=a.primaryMode==="cable"?2:3.5,i.userData.baseY=i.position.y,i.children.forEach(o=>o.isCSS2DObject&&(o.visible=!0))};n(this.pinFrom,e),n(this.pinTo,t),[this.pinFrom,this.pinTo].forEach(i=>i.traverse(r=>r.isCSS2DObject&&(r.visible=i.visible)))}highlight(e){if(!e)return this.ring.visible=!1;let t=this.network.complexes[e];this.ring.visible=!0,this.ring.position.copy(t.pos),this.ring.position.y=this.terrain.heightAt(t.pos.x,t.pos.z)+.4,this.ring.userData.t=0}setRouteFocus(e){let t=e?new Set(e.legs.flatMap(n=>n.all.map(i=>this.network.lines[n.line].stops[i].key))):null;this.routeKeys=t;for(let n of this.labels)n.kind==="station"&&n.el.classList.toggle("on-route",!!t&&t.has(n.cx.key))}poiLocation(e){let t=Vi(e);if(t.lm){let n=this.landmarks.find(i=>i.def.id===t.lm);if(n)return{kind:"lm",pos:n.pos.clone().setY(n.pos.y+n.top),lm:n}}if(t.lat){let n=un(t.lat,t.lon);return{kind:"coord",pos:new A(n.x,this.terrain.heightAt(n.x,n.z),n.z)}}return null}clearPoiPins(){for(let e of this.poiPins){this.scene.remove(e.group),e.label.element.remove();let t=this.pickables.indexOf(e.proxy);t>=0&&this.pickables.splice(t,1)}this.poiPins=[],this.poiPinStation=null}showPoiPins(e){if(this.poiPinStation===e)return;this.clearPoiPins();let t=this.network.complexes[e];if(t){this.poiPinStation=e;for(let n of t.info.pois||[]){let i=this.poiLocation(n);if(!i||i.kind!=="coord")continue;let r=dr[Vi(n).cat].color,a=new lt;a.cyl(.08,.08,2.2,5,"#ffffff",{p:[0,1.1,0]}),a.cone(.55,1.1,8,r,{p:[0,2.6,0],r:[Math.PI,0,0]}),a.sphere(.7,1,r,{p:[0,3.35,0]}),a.sphere(.3,0,"#ffffff",{p:[0,3.4,.45],layer:"glow"});let o=a.build();o.position.copy(i.pos),this.scene.add(o);let l=document.createElement("div");l.className="poi-label",l.innerHTML=`<i style="background:${r}"></i>${n}`,l.addEventListener("click",()=>this.focusPoi(n,e));let c=new Vn(l);c.position.set(0,4.6,0),c.center.set(.5,1),o.add(c);let h=new tt(new pi(2,6,4),new sn({visible:!1}));h.userData={type:"poi",name:n,station:e},h.position.set(0,2.5,0),o.add(h),this.pickables.push(h),this.poiPins.push({name:n,group:o,label:c,proxy:h,base:i.pos.y})}}}selectPoiPin(e){for(let t of this.poiPins){let n=t.name===e;t.group.scale.setScalar(n?1.5:1),t.label.element.classList.toggle("on",n)}}async focusPoi(e,t){let n=this.network.complexes[t];if(!n)return;this.showPoiPins(t);let i=this.poiLocation(e);if(this.ui.showPoi(e,t,i),this.journey.active&&!this.journey.finished)return;let r,a;i&&i.kind==="lm"?(r=i.lm.pos.clone(),r.y+=i.lm.top*.35,a=Math.max(45,(i.lm.def.clear||8)*3.2+i.lm.top*2)):i?(r=i.pos.clone().lerp(n.pos,.35),a=Math.min(900,Math.max(60,i.pos.distanceTo(n.pos)*1.4))):(r=n.pos.clone(),a=55),await this.director.flyTo(r,this.director.viewOf(r,a,.62),1.6)}landmarksNear(e,t){return this.landmarks.filter(n=>Math.hypot(n.pos.x-e.x,n.pos.z-e.z)<t)}buildPlane(){let e=Mp(),t=un(6.2197,-75.5905),n=this.terrain.heightAt(t.x,t.z);this.scene.add(e),e.traverse(i=>i.castShadow=!0),this.anims.push(i=>{let r=i*.12,a=170;e.position.set(t.x+Math.cos(r)*a,n+95+Math.sin(i*.3)*12,t.z+Math.sin(r)*a*1.3);let o=-Math.sin(r)*a,l=Math.cos(r)*a*1.3;e.rotation.set(0,Math.atan2(-l,o),0),e.rotateX(-.28)})}renderPortraits(){let e={};try{let t=new pa({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(128,128),t.setPixelRatio(1),t.outputColorSpace=tn;let n=new Os;n.add(new Gs("#ffffff","#888888",2.2));let i=new Xs("#ffffff",2);i.position.set(3,4,5),n.add(i);let r=new Xt(30,1,.01,50);for(let[a,o]of Object.entries(hr)){let l=Aa(o);l.scale.setScalar(1),l.rotation.y=-Math.PI/2+.5,n.add(l),r.position.set(.9,1.55,3),r.lookAt(0,1.25,0),t.render(n,r),e[a]=t.domElement.toDataURL("image/png"),n.remove(l)}t.dispose(),t.forceContextLoss()}catch(t){console.warn("No se pudieron generar retratos",t)}return e}bindEvents(){let e=this.labelRenderer.domElement,t=new es,n=new re,i=null,r=o=>{let l=e.getBoundingClientRect();n.set((o.clientX-l.left)/l.width*2-1,-((o.clientY-l.top)/l.height)*2+1),t.setFromCamera(n,this.camera);let c=this.pickables.filter(d=>this.isPickable(d));return t.intersectObjects(c,!1)[0]?.object};e.addEventListener("pointerdown",o=>i={x:o.clientX,y:o.clientY,t:performance.now()}),e.addEventListener("pointerup",o=>{if(!i)return;let l=Math.hypot(o.clientX-i.x,o.clientY-i.y),c=performance.now()-i.t;if(i=null,l>6||c>600||o.button!==0)return;let h=r(o);if(!h)return this.ui.closeCard();h.userData.type==="station"?this.focusStation(h.userData.key):h.userData.type==="landmark"?this.focusLandmark(h.userData.id):h.userData.type==="poi"&&this.focusPoi(h.userData.name,h.userData.station)});let a=0;e.addEventListener("pointermove",o=>{let l=performance.now();if(l-a<50||o.buttons)return;a=l;let c=r(o);if(!c)return e.style.cursor="",this.ui.tooltip(null);if(e.style.cursor="pointer",c.userData.type==="station"){let h=this.network.complexes[c.userData.key];this.ui.tooltip(`<b>${h.name}</b><span>${h.lines.map(d=>Gn[d].name).join(" \xB7 ")}</span>`,o.clientX,o.clientY)}else if(c.userData.type==="poi")this.ui.tooltip(`<b>${c.userData.name}</b><span>${dr[Vi(c.userData.name).cat].label}</span>`,o.clientX,o.clientY);else{let h=this.landmarks.find(d=>d.def.id===c.userData.id);this.ui.tooltip(`<b>\u2605 ${h.def.name}</b><span>${h.def.category}</span>`,o.clientX,o.clientY)}}),e.addEventListener("pointerleave",()=>this.ui.tooltip(null)),window.addEventListener("resize",()=>{let o=window.innerWidth,l=window.innerHeight;!o||!l||(this.camera.aspect=o/l,this.camera.updateProjectionMatrix(),this.renderer.setSize(o,l),this.labelRenderer.setSize(o,l))})}isPickable(e){let t=e.userData;return t.type==="poi"?!0:t.type==="landmark"?this.layers.landmarks:this.network.complexes[t.key].lines.some(i=>this.visibleLines.has(i))&&this.visibleLines.has(t.line)}async focusStation(e){let t=this.network.complexes[e];if(!t)return;if(this.ui.closeCard(),this.journey.active&&!this.journey.finished){this.ui.showStation(e);return}let n=t.pos.clone(),i=this.director.viewOf(n,t.primaryMode==="metro"?55:42,.62);this.ui.showStation(e),await this.director.flyTo(n,i,1.6)}async focusLandmark(e){let t=this.landmarks.find(r=>r.def.id===e);if(!t)return;let n=t.pos.clone();n.y+=t.top*.35;let i=Math.max(45,(t.def.clear||8)*3.2+t.top*2);this.ui.showLandmark(e),!(this.journey.active&&!this.journey.finished)&&await this.director.flyTo(n,this.director.viewOf(n,i,.5),1.8)}overview(e=2.2){this.ui?.closeCard();let t=new A(40,20,60),n=new A(-360,1750,1500);return this.director.flyTo(t,n,e,{lift:0})}faceNorth(){let e=this.controls.target.clone(),t=this.camera.position.clone().sub(e),n=t.length(),i=Math.asin(t.y/n);this.director.flyTo(e,this.director.viewOf(e,n,i,0),1,{lift:0})}startJourney(e,t){this.ui.closeModal(),this.director.cinematic=!0,document.getElementById("hud-cam")?.classList.add("on"),this.journey.start(e,t)}endJourney(){this.journey.finish(),this.ui.journeyEnded(!0)}setLineVisible(e,t){t?this.visibleLines.add(e):this.visibleLines.delete(e),this.infra[e]&&(this.infra[e].visible=t);for(let n of this.stationGroups[e]||[])n.visible=t;this.traffic.setLineVisible(e,t)}setLayer(e,t){if(this.layers[e]=t,e==="feeders")this.feederGroup.visible=t,this.traffic.setFeedersVisible(t);else if(e==="landmarks")for(let n of this.landmarks)n.group.visible=t;else if(e==="people")for(let n of this.people)n.p.visible=t}toggleNight(){return this.night=!this.night,this.night}applyNight(e){let t=(i,r)=>i.clone().lerp(r,e);this.hemi.color.copy(t(kt.hemiSky,si.hemiSky)),this.hemi.groundColor.copy(t(kt.hemiGround,si.hemiGround)),this.hemi.intensity=kt.hemi+(si.hemi-kt.hemi)*e,this.sun.intensity=kt.sun+(si.sun-kt.sun)*e,this.sun.color.copy(t(kt.sunColor,si.sunColor));let n=this.sky.material.uniforms;n.top.value.copy(t(kt.top,si.top)),n.horizon.value.copy(t(kt.horizon,si.horizon)),n.bottom.value.copy(t(kt.bottom,si.bottom)),this.scene.fog.color.copy(n.horizon.value),this.clouds.mat.color.copy(t(kt.cloud,si.cloud)),this.renderer.toneMappingExposure=kt.exposure+(si.exposure-kt.exposure)*e,this.stars.material.opacity=Math.max(0,e*1.2-.2),this.city.lightPts.visible=e>.15,this.city.lightPts.material.opacity=Math.min(1,e*1.3),document.body.classList.toggle("night",e>.5)}loop(){let e=this.clock.getDelta(),t=Math.min(.05,e),n=this.clock.elapsedTime;this.fps=(this.fps||30)*.95+1/Math.max(e,.001)*.05,this.journey.update(t),this.traffic.update(t,n);for(let _ of this.anims)_(n);this.clouds.update(t),this.particles.update(t),this.controls.enabled=!this.director.fly,this.director.update(t),this.controls.update(t);let i=this.controls.target;i.x=Math.max(-1e3,Math.min(1150,i.x)),i.z=Math.max(-1250,Math.min(1250,i.z));let r=this.camera,a=this.terrain.heightAt(r.position.x,r.position.z);r.position.y<a+1.5&&(r.position.y=a+1.5);let o=this.night?1:0;Math.abs(this.nightT-o)>.001&&(this.nightT+=Math.sign(o-this.nightT)*Math.min(Math.abs(o-this.nightT),t*.7),this.applyNight(this.nightT));let l=r.position.distanceTo(i),c=Math.max(45,Math.min(520,l*.75)),h=this.sun.shadow.camera;Math.abs(h.right-c)>c*.08&&(h.left=-c,h.right=c,h.top=c,h.bottom=-c,h.updateProjectionMatrix());let d=c/256;if(this.sun.target.position.set(Math.round(i.x/d)*d,i.y,Math.round(i.z/d)*d),this.sun.position.copy(this.sun.target.position).add(this.sunOffset),Jl.uWidth.value=Math.max(1.2,Math.min(9,l*.0045)),Jl.uOpacity.value=Math.max(0,Math.min(.92,(l-260)/600)),this.scene.fog.near=l*.9+500,this.scene.fog.far=l*3+3500,this.ring.visible){this.ring.userData.t=(this.ring.userData.t||0)+t;let _=this.ring.userData.t%1.4/1.4;this.ring.scale.setScalar(.6+_*1.2),this.ring.material.opacity=.9*(1-_)}for(let _ of[this.pinFrom,this.pinTo])_.visible&&(_.position.y=_.userData.baseY+Math.sin(n*3)*.3);for(let _ of this.poiPins)_.group.position.y=_.base+Math.abs(Math.sin(n*2.2+_.base))*.35;let u=r.position;for(let _ of this.people){let g=this.layers.people&&Math.abs(_.home.x-u.x)<260&&Math.abs(_.home.z-u.z)<260&&l<400;if(_.p.visible=g,!!g)if(_.t+=t,_.walker){let p=(Math.sin(_.t*.35)+1)/2,b=_.a.x+(_.b.x-_.a.x)*p,y=_.a.z+(_.b.z-_.a.z)*p,x=Math.cos(_.t*.35)>=0?1:-1;_.p.position.set(b,this.terrain.heightAt(b,y),y),_.p.rotation.y=Math.atan2(-(_.b.z-_.a.z)*x,(_.b.x-_.a.x)*x),Ca(_.p,_.t,!0,.8)}else Ca(_.p,_.t,!1)}this._lf=(this._lf||0)+1,this._lf%4===0&&this.updateLabels(),this.ui.updateCard();let f=this.journey.active&&!this.journey.finished;f?(this.pinFrom.visible=!1,this.pinTo.visible=!1):this._pinsHidden&&this.setEndpoints(this.ui.from,this.ui.to),this._pinsHidden=f;let m=r.position.clone().sub(i);this.ui.setCompass(Math.atan2(m.x,m.z)),this.renderer.render(this.scene,r),this.labelRenderer.render(this.scene,r)}updateLabels(){let e=this.camera.position,t=this.controls.target,n=e.distanceTo(t);for(let i of this.labels){let r;if(i.kind==="landmark"){let a=e.distanceTo(i.obj.position);r=this.layers.landmarks&&a<3600,i.el.classList.toggle("compact",a>900)}else{let a=i.cx,o=a.lines.some(d=>this.visibleLines.has(d)),l=e.distanceTo(i.obj.position),c=i.tier===1?900:i.tier===2?520:260,h=this.routeKeys&&this.routeKeys.has(a.key);r=this.layers.labels&&o&&(l<c||h&&l<3e3),n>1300&&i.tier>1&&!h&&(r=!1)}i.obj.visible=r}}},jy=new hu;jy.init().catch(s=>{console.error(s);let e=document.getElementById("load-step");e&&(e.textContent="Error al iniciar: "+s.message)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=app.js.map
