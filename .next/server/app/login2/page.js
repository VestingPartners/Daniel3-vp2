(()=>{var e={};e.id=595,e.ids=[595],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},87517:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),r(43089),r(11506),r(35866);var i=r(23191),s=r(88716),n=r(37922),o=r.n(n),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["login2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,43089)),"C:\\Users\\despi\\source\\repos\\daniel3-vp2\\app\\login2\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"C:\\Users\\despi\\source\\repos\\daniel3-vp2\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\despi\\source\\repos\\daniel3-vp2\\app\\login2\\page.tsx"],u="/login2/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/login2/page",pathname:"/login2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4391:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},15169:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23))},44368:()=>{},10221:(e,t,r)=>{"use strict";let{createProxy:i}=r(68570);e.exports=i("C:\\Users\\despi\\source\\repos\\Daniel3-vp2\\node_modules\\next\\dist\\client\\image-component.js")},670:(e,t,r)=>{"use strict";let{createProxy:i}=r(68570);e.exports=i("C:\\Users\\despi\\source\\repos\\Daniel3-vp2\\node_modules\\next\\dist\\client\\link.js")},79241:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(96501);let i=r(95728),s=r(29472);function n(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:c,sizes:u,unoptimized:m=!1,priority:p=!1,loading:g,className:f,quality:h,width:x,height:b,fill:v=!1,style:w,overrideSrc:y,onLoad:j,onLoadingComplete:P,placeholder:_="empty",blurDataURL:C,fetchPriority:S,layout:N,objectFit:E,objectPosition:z,lazyBoundary:k,lazyRoot:O,...M}=e,{imgConf:q,showAltText:I,blurComplete:G,defaultLoader:A}=t,R=q||s.imageConfigDefault;if("allSizes"in R)a=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);a={...R,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=M.loader||A;delete M.loader,delete M.srcSet;let F="__next_img_default"in D;if(F){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(N){"fill"===N&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!u&&(u=t)}let B="",U=o(x),L=o(b);if("object"==typeof(r=c)&&(n(r)||void 0!==r.src)){let e=n(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,B=e.src,!v){if(U||L){if(U&&!L){let t=U/e.width;L=Math.round(e.height*t)}else if(!U&&L){let t=L/e.height;U=Math.round(e.width*t)}}else U=e.width,L=e.height}}let V=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(m=!0,V=!1),a.unoptimized&&(m=!0),F&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(m=!0),p&&(S="high");let W=o(h),T=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:z}:{},I?{}:{color:"transparent"},w),J=G||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:U,heightInt:L,blurWidth:l,blurHeight:d,blurDataURL:C||"",objectFit:T.objectFit})+'")':'url("'+_+'")',Y=J?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:n,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:n,width:l[c]})}}({config:a,src:c,unoptimized:m,width:U,quality:W,sizes:u,loader:D});return{props:{...M,loading:V?"lazy":g,fetchPriority:S,width:U,height:L,decoding:"async",className:f,style:{...T,...Y},sizes:$.sizes,srcSet:$.srcSet,src:y||$.src},meta:{unoptimized:m,priority:p,placeholder:_,fill:v}}}},95728:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:n,objectFit:o}=e,a=i?40*i:t,l=s?40*s:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},29472:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},66794:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(53370),s=r(79241),n=r(10221),o=i._(r(52049));function a(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},52049:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},96501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},11506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>o});var i=r(19510),s=r(15204),n=r.n(s);r(67272);let o={title:"Vesting Partners",description:"Generated by create next app"};function a({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{className:`${n().variable} font-sans`,children:e})})}},43089:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(19510);r(71159);var s=r(670),n=r.n(s),o=r(66794),a=r.n(o);function l(){return(0,i.jsxs)("div",{className:"relative h-screen w-full flex items-center justify-center",children:[i.jsx(a(),{src:"/Vesting Partners.png",layout:"fill",objectFit:"cover",alt:"Background",priority:!0,className:"z-0"}),i.jsx("div",{className:"z-10 w-full max-w-md px-6 py-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg",children:(0,i.jsxs)("div",{className:"w-full max-w-md",children:[i.jsx(a(),{src:"/vp.png",width:300,height:300,alt:"Logo de Capital Storage",className:"mx-auto my-4 max-w-xs sm:max-w-sm md:max-w-md"}),(0,i.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-sm w-full",children:[(0,i.jsxs)("h2",{className:"text-xl mb-6 text-center",children:["Ingresar a"," ",i.jsx("span",{className:"font-semibold text-[#25567c]",children:"Nikolas"})]}),(0,i.jsxs)("form",{className:"space-y-4",children:[(0,i.jsxs)("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),i.jsx("input",{id:"email",name:"email",type:"email",required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"Ingrese su correo"})]}),(0,i.jsxs)("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Contrase\xf1a"}),i.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"••••••••"})]}),i.jsx("button",{type:"submit",className:"w-full bg-[#25567c] text-white py-2 px-4 rounded-md hover:bg-[#1e4569] transition duration-300",children:"Iniciar Sesion"})]}),i.jsx("div",{className:"mt-4 text-center",children:i.jsx(n(),{href:"/forgot-password",className:"text-sm text-blue-600 hover:underline",children:"Cambia tu contrase\xf1a"})})]}),(0,i.jsxs)("p",{className:"mt-8 text-center text-sm text-gray-600 max-w-md",children:["Bienvenido a Nikolas, el portal de gesti\xf3n financiera de Vesting. Este sitio web es de uso exclusivo para miembros y socios. Para mayor informaci\xf3n o para solicitar acceso, por favor contacte a"," ",i.jsx("a",{href:"mailto:contacto@vestingpartners.cl",className:"text-blue-600 hover:underline",children:"contacto@vestingpartners.cl"})]})]})})]})}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(66621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,44,621,162],()=>r(87517));module.exports=i})();