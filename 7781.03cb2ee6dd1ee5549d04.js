/*! For license information please see 7781.03cb2ee6dd1ee5549d04.js.LICENSE.txt */
(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[7781,3487],{99073:(e,t,n)=>{"use strict";n.d(t,{nq:()=>m,ms:()=>Q,tZ:()=>E,F4:()=>D});n(93219);var r=n(84390),A=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,n=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var A=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);A.insertRule(e,i?0:A.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=n(96612),o="/*|*/",s=o+"}";function a(e){e&&u.current.insert(e+"}")}var u={current:null},l=function(e,t,n,r,A,i,l,c,d,f){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return u.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===c)return t+o;break;case 3:switch(c){case 102:case 112:return u.current.insert(n[0]+t),"";default:return t+(0===f?o:"")}case-2:t.split(s).forEach(a)}};function c(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "})),r}var d=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var A=t;do{e.insert("."+r,A,e.sheet,!0),A=A.next}while(void 0!==A)}},f=n(47989),p=Object.prototype.hasOwnProperty,h=(0,r.createContext)("undefined"!=typeof HTMLElement?function(e){void 0===e&&(e={});var t,n=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var r,o=new i.Z(t),s={};r=e.container||document.head;var a,c=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(c,(function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach((function(e){s[e]=!0})),e.parentNode!==r&&r.appendChild(e)})),o.use(e.stylisPlugins)(l),a=function(e,t,n,r){var A=t.name;u.current=n,o(e,t.styles),r&&(d.inserted[A]=!0)};var d={key:n,sheet:new A({key:n,container:r,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:s,registered:{},insert:a};return d}():null),g=(0,r.createContext)({}),m=h.Provider,v=function(e){var t=function(t,n){return(0,r.createElement)(h.Consumer,null,(function(r){return e(t,r,n)}))};return(0,r.forwardRef)(t)},y="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",w=function(){return null},B=function(e,t,n,A){var i=null===n?t.css:t.css(n);"string"==typeof i&&void 0!==e.registered[i]&&(i=e.registered[i]);var o=t[y],s=[i],a="";"string"==typeof t.className?a=c(e.registered,s,t.className):null!=t.className&&(a=t.className+" ");var u=(0,f.O)(s);d(e,u,"string"==typeof o),a+=e.key+"-"+u.name;var l={};for(var h in t)p.call(t,h)&&"css"!==h&&h!==y&&(l[h]=t[h]);l.ref=A,l.className=a;var g=(0,r.createElement)(o,l),m=(0,r.createElement)(w,null);return(0,r.createElement)(r.Fragment,null,m,g)},b=v((function(e,t,n){return"function"==typeof e.css?(0,r.createElement)(g.Consumer,null,(function(r){return B(t,e,r,n)})):B(t,e,null,n)})),C=n(34086),E=function(e,t){var n=arguments;if(null==t||!p.call(t,"css"))return r.createElement.apply(void 0,n);var A=n.length,i=new Array(A);i[0]=b,i[1]=function(e,t){var n={};for(var r in t)p.call(t,r)&&(n[r]=t[r]);return n[y]=e,n}(e,t);for(var o=2;o<A;o++)i[o]=n[o];return r.createElement.apply(null,i)},D=(r.Component,function(){var e=C.Z.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}),F=function e(t){for(var n=t.length,r=0,A="";r<n;r++){var i=t[r];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var s in o="",i)i[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=i}o&&(A&&(A+=" "),A+=o)}}return A},x=function(){return null},Q=v((function(e,t){return(0,r.createElement)(g.Consumer,null,(function(n){var A=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var A=(0,f.O)(n,t.registered);return d(t,A,!1),t.key+"-"+A.name},i={css:A,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e,t,n){var r=[],A=c(e,r,n);return r.length<2?n:A+t(r)}(t.registered,A,F(n))},theme:n},o=e.children(i),s=(0,r.createElement)(x,null);return(0,r.createElement)(r.Fragment,null,s,o)}))}))},34086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(47989);const A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.O)(t)}},47989:(e,t,n)=>{"use strict";n.d(t,{O:()=>h});const r=function(e){for(var t,n=0,r=0,A=e.length;A>=4;++r,A-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(A){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)};var A,i=n(84380),o=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,a=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},l=(A={},function(e){return void 0===A[e]&&(A[e]=a(t=e)?t:t.replace(o,"-$&").toLowerCase()),A[e];var t}),c=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(s,(function(e,t,n){return f={name:t,styles:n,next:f},t}))}return 1===i.Z[e]||a(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,n,r){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return f={name:n.name,styles:n.styles,next:f},n.name;if(void 0!==n.styles){var A=n.next;if(void 0!==A)for(;void 0!==A;)f={name:A.name,styles:A.styles,next:f},A=A.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var A=0;A<n.length;A++)r+=d(e,t,n[A],!1);else for(var i in n){var o=n[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?r+=i+"{"+t[o]+"}":u(o)&&(r+=l(i)+":"+c(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=d(e,t,o,!1);switch(i){case"animation":case"animationName":r+=l(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var a=0;a<o.length;a++)u(o[a])&&(r+=l(i)+":"+c(i,o[a])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=f,o=n(e);return f=i,d(e,t,o,r)}}if(null==t)return n;var s=t[n];return void 0===s||r?n:s}var f,p=/label:\s*([^\s;\n{]+)\s*;/g,h=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var A=!0,i="";f=void 0;var o=e[0];null==o||void 0===o.raw?(A=!1,i+=d(n,t,o,!1)):i+=o[0];for(var s=1;s<e.length;s++)i+=d(n,t,e[s],46===i.charCodeAt(i.length-1)),A&&(i+=o[s]);p.lastIndex=0;for(var a,u="";null!==(a=p.exec(i));)u+="-"+a[1];return{name:r(i)+u,styles:i,next:f}}},66842:(e,t,n)=>{"use strict";n.d(t,{EY:()=>a});var r=Array.prototype.indexOf,A={};function i(e,t){var n=" ";return 0===r.call(t.parentNode.childNodes,t)&&(n="| "),n+(e=(e=e.replace(/\r\n/g,"\n").replace(/\n/g," ")).replace(/\|/g,"\\|"))+" |"}function o(e,t){var n=e.getAttribute("colspan")||1;return n<=1?"":(" "+t+" |").repeat(n-1)}function s(e){for(var t=e.parentNode;t;){if("TABLE"===t.nodeName)return!0;t=t.parentNode}return!1}function a(e){for(var t in e.keep((function(e){return"TABLE"===e.nodeName&&s(e)})),A)e.addRule(t,A[t])}A.tableCell={filter:["th","td"],replacement:function(e,t){return i(e,t)+o(t,"")}},A.tableRow={filter:"tr",replacement:function(e,t){var n,r,A,s="",a={left:":--",right:"--:",center:":-:"};if(r=(n=t).parentNode,A=r,"THEAD"!==r.nodeName&&"TFOOT"!==r.nodeName&&"TBODY"!==r.nodeName||(A=r.parentNode),"TABLE"===A.nodeName&&A.rows[0]===n)for(var u=0;u<t.childNodes.length;u++){var l="---",c=(t.childNodes[u].getAttribute("align")||"").toLowerCase();c&&(l=a[c]||l),s+=i(l,t.childNodes[u])+o(t.childNodes[u],l)}return"\n"+e+(s?"\n"+s:"")}},A.table={filter:function(e){return"TABLE"===e.nodeName&&!s(e)},replacement:function(e){return"\n\n"+(e=e.replace("\n\n","\n"))+"\n\n"}},A.tableSection={filter:["thead","tbody","tfoot"],replacement:function(e){return e}},A.captionSection={filter:"caption",replacement:function(e,t){return"TABLE"===t.parentNode.nodeName&&t.parentNode.childNodes[0]===t?e:""}}},69383:(e,t,n)=>{"use strict";n.d(t,{LR:()=>a,Sb:()=>o,IM:()=>d,wr:()=>l,vG:()=>s,ZP:()=>m});var r=n(84390),A=n.n(r),i=n(15710);const o=100,s=["h1","h2","h3","h4","h5","h6"],a={h1:800,h2:700,h3:600,h4:500,h5:400,h6:300},u=[0,25,50,75,100,200,300,400,500,600,700,800,900,1e3],l={0:{size:8,lineHeight:14},25:{size:10,lineHeight:16},50:{size:11,lineHeight:16},75:{size:12,lineHeight:16},100:{size:14,lineHeight:20},200:{size:16,lineHeight:24},300:{size:18,lineHeight:24},400:{size:20,lineHeight:28},500:{size:22,lineHeight:28},600:{size:25,lineHeight:30},700:{size:28,lineHeight:36},800:{size:32,lineHeight:40},900:{size:36,lineHeight:44},1e3:{size:40,lineHeight:48}};u.forEach((e=>{l[e].marginTop=i.cQ.getFontMargin(l[e].size,8/9),l[e].marginBottom=i.cQ.getFontMargin(l[e].size,.5)}));const c="h6",d="bold",f="both",p="inherit";var h=n(85939);const g=n.n(h)().h6.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e)&&t(e)})((({theme:e,inheritLineHeight:t,color:n,margin:r,size:A,weight:o})=>h.css`
        ${(({inheritLineHeight:e,size:t,weight:n})=>h.css`
    font-family: ${i.bH.heading};
    ${n?h.css`
              font-weight: ${i.Os[n]};
          `:null};
    ${i.cQ.isNumber(t)?h.css`
              font-size: ${l[t].size}px;
              line-height: ${e?"inherit":`${l[t].lineHeight}px`};
          `:null};
`)({inheritLineHeight:t,size:A,weight:o})};
        ${(({color:e,theme:t})=>"inherit"===e?h.css`
            color: inherit;
        `:i.cQ.isColor(e)?h.css`
            color: ${e};
        `:h.css`
        color: ${(null==t?void 0:t.text[e])||"inherit"};
    `)({color:n,theme:e})};
        ${(({margin:e,size:t})=>{if(!e||!t)return null;let n=`${l[t].marginTop}px 0 ${l[t].marginBottom}px`;switch(e){case"none":n="0";break;case"bottom":n=`0 0 ${l[t].marginBottom}px`;break;case"top":n=`${l[t].marginTop}px 0 0`}return h.css`
        margin: ${n};
    `})({margin:r,size:A})};

        // animation
        body.enable-animations & {
            transition: color ${e.animation.fastest} 0s ease-in-out;
        }
    `));const m=e=>{var{inheritLineHeight:t=!1,color:n=p,element:r=c,margin:a=f,size:l=o,weight:h=d}=e,m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var A=0;for(r=Object.getOwnPropertySymbols(e);A<r.length;A++)t.indexOf(r[A])<0&&Object.prototype.propertyIsEnumerable.call(e,r[A])&&(n[r[A]]=e[r[A]])}return n}(e,["inheritLineHeight","color","element","margin","size","weight"]);i.cQ.assert(s.includes(r)||A().isValidElement(r),`Compass Components: Heading component was used with an unsupported element '${r}'.\n                Please provide one from these available options: ${s.join(", ")}, or a valid \`ReactElement\`.`),i.cQ.assert(i.YS.includes(n)||i.cQ.isColor(n),`Compass Components - Heading: component was used with an unsupported color '${n}'.\n            Please provide one from these available options: ${i.YS.join(", ")}, or a valid CSS color value`,!0),i.cQ.assert(u.includes(l),`Compass Components - Heading: component was used with an unsupported size '${l}'.\n            Please provide one from these available options: ${u.join(", ")}.`,!0),i.cQ.assert(i.M9.includes(a),`Compass Components - Heading: component was used with an unsupported margin '${a}'.\n            Please provide one from these available options: ${i.M9.join(", ")}.`,!0),i.cQ.assert(i.Xw.includes(h),`Compass Components - Heading: component was used with an unsupported weight '${h}'.\n            Please provide one from these available options: ${i.Xw.join(", ")}.`,!0);const v=Object.assign({inheritLineHeight:t,color:n,margin:a,size:l,weight:h},m);return A().createElement(g,Object.assign({as:r},v))}},48332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>y});var r=n(84390),A=n.n(r),i=n(62329),o=n(15710);const s="md",a="button",u={xs:{compactSpacing:50,spacing:75,iconSize:12,fontSize:75},sm:{compactSpacing:75,spacing:100,iconSize:16,fontSize:100},md:{compactSpacing:100,spacing:125,iconSize:20,fontSize:100},lg:{compactSpacing:100,spacing:125,iconSize:28,fontSize:200}};var l=n(85939),c=n.n(l),d=n(15535),f=n(26621);const p={0:{offsetY:0,blurRadius:0},1:{offsetY:2,blurRadius:3},2:{offsetY:4,blurRadius:6},3:{offsetY:6,blurRadius:14},4:{offsetY:8,blurRadius:24},5:{offsetY:12,blurRadius:32},6:{offsetY:20,blurRadius:32}},h=[0,2,4,8,12,16,20,24,"circle","pill"],g=function({width:e,height:t,radius:n=4}){const r=o.cQ.isString(n)?n:"rectangle";"circle"===r&&o.cQ.assert(o.cQ.isNumber(e),"applyShape: When choosing `circle` as value for `radius` the width needs to be of type `number`"),o.cQ.assert(h.includes(n),`applyShape: Please provide a \`radius\` value that meets the requirement. Valid options are: ${h.join(", ")}.`);const A={rectangle:`${n}px`,circle:"50%",pill:"1000px"};return"circle"===r&&o.cQ.isNumber(e)&&e>=0?l.css`
            border-radius: ${A[r]};

            width: ${o.cQ.getPxValue(e)};
            height: ${o.cQ.getPxValue(e)};

            flex-basis: ${o.cQ.getPxValue(e)}; // adding this in for flex: 0 elements
        `:l.css`
        border-radius: ${A[r]};

        ${e?l.css`
                  width: ${o.cQ.getPxValue(e)};
                  flex-basis: ${o.cQ.getPxValue(e)};
              `:null};
        height: ${t?o.cQ.getPxValue(t):null};
    `};c().div.withConfig({shouldForwardProp:(e,t)=>o.cQ.blockProperty(e,["width","height","radius","elevation","element"])&&t(e)})((({radius:e,elevation:t,elevationOnHover:n,width:r,height:A,theme:i,padding:o,margin:s,backgroundColor:a=i.background.shape})=>l.css`
        display: flex;
        background-color: ${a};

        ${g({width:r,height:A,radius:e})};
        ${function({elevation:e=0,elevationOnHover:t=e},n){if(0===e&&0===t)return null;const{offsetY:r,blurRadius:A}=p[e],i=n?.32:.08;if(e!==t){const{offsetY:n,blurRadius:o}=p[t];return l.css`
            box-shadow: 0 ${r}px ${A}px rgba(0, 0, 0, ${i});
            z-index: ${e||0};

            &:hover {
                box-shadow: 0 ${n}px ${o}px rgba(0, 0, 0, ${i});
            }
        `}return l.css`
        box-shadow: 0 ${r}px ${A}px rgba(0, 0, 0, ${i});
        z-index: ${e||0};
    `}({elevation:t,elevationOnHover:n},"dark"===i.type)};

        ${o&&(0,f.Og)(o)};
        ${s&&(0,f.P3)(s)};
    `));var m=n(26603);const v=c().button.withConfig({shouldForwardProp:(e,t)=>o.cQ.blockProperty(e)&&t(e)})((({size:e,compact:t,inverted:n,toggled:r,active:A,destructive:i,disabled:s,theme:{palette:a,action:c,text:p,animation:h,noStyleReset:v}})=>{const y=!n&&!i&&!r,{main:w,contrast:B}=i&&!r?a.alert:a.primary,{spacing:b,compactSpacing:C,fontSize:E}=u[e],D={background:w,text:r?B:p.primary},F={background:{default:r?1:0,hover:r?.92:.08,active:n?.16:.08},text:{default:r?1:.56,hover:r?1:.72,active:1}};n&&(D.background=B,D.text=r?w:B),i&&!r&&(D.background=w,D.text=n?B:w,F.background.hover=n?.8:.08,F.background.active=n?1:.16),s&&(D.text=c.disabled,F.background.default=0,F.text.default=.32);const x=l.css`
            background: ${(0,o.uK)(D.background,F.background.active)};
            color: ${(0,o.uK)(n?B:w,F.text.active)};
        `,Q=s?l.css`
                  cursor: not-allowed;
              `:l.css`
                  :hover {
                      background: ${(0,o.uK)(y?c.hover:D.background,F.background.hover)};
                      color: ${(0,o.uK)(D.text,F.text.hover)};
                  }

                  :active {
                      ${x};
                  }

                  &:focus {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${i?a.alert.main:w};
                  }

                  &:focus:not(:focus-visible) {
                      box-shadow: none;
                  }

                  &:focus-visible {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${i?a.alert.main:w};
                  }
              `;return l.css`
            ${v&&d.P}

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            color: ${(0,o.uK)(D.text,F.text.default)};
            background: ${(0,o.uK)(D.background,F.background.default)};

            ${g({radius:4})};
            ${(0,f.Og)(f.ZP.all(t?C:b))};

            span {
                ${(0,f.P3)(f.ZP.only("left",75))};
                ${(0,m.R1)({size:E,weight:"bold",inheritLineHeight:!0})};
            }

            ${Q};

            ${A&&x}

            transition: background ${h.fast} ease-in-out,
                color ${h.fast} ease-in-out, box-shadow ${h.fast} ease-in-out;
        `}));const y=A().forwardRef(((e,t)=>{var{icon:n,element:r=a,size:l=s,compact:c=!1,inverted:d=!1,toggled:f=!1,active:p=!1,destructive:h=!1,disabled:g=!1,label:m,onClick:y}=e,w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var A=0;for(r=Object.getOwnPropertySymbols(e);A<r.length;A++)t.indexOf(r[A])<0&&Object.prototype.propertyIsEnumerable.call(e,r[A])&&(n[r[A]]=e[r[A]])}return n}(e,["icon","element","size","compact","inverted","toggled","active","destructive","disabled","label","onClick"]);o.cQ.assert(!h&&!f||h&&!f||f&&!h,"Compass Components: IconButton component was used with both `destructive` and `toggled` properties set to true. Please use only one of the options",!0);const B={size:l,compact:c,inverted:d,toggled:f,active:p,destructive:h,disabled:g||!o.cQ.isFunction(y),onClick:y};return A().createElement(v,Object.assign({ref:t,as:r},B,w),A().createElement(i.ZP,{glyph:n,size:u[l].iconSize}),m&&A().createElement("span",null,m))}))},72137:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>d});var r=n(84390),A=n.n(r);const i="md",o={xs:10,sm:12,md:16,lg:20,xl:32};var s=n(85939),a=n.n(s),u=n(62329),l=n(15710);const c=a()(u.ZP).withConfig({shouldForwardProp:(e,t)=>l.cQ.forceForwardProperty(e,["glyph","size"])||l.cQ.blockProperty(e)&&t(e)})((({theme:e,status:t})=>s.css`
        color: ${e.badges[t]};
    `));const d=e=>{var{status:t,size:n=i}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var A=0;for(r=Object.getOwnPropertySymbols(e);A<r.length;A++)t.indexOf(r[A])<0&&Object.prototype.propertyIsEnumerable.call(e,r[A])&&(n[r[A]]=e[r[A]])}return n}(e,["status","size"]);let s="circle-outline";switch(t){case"away":s="clock";break;case"dnd":s="minus-circle";break;case"online":s="check-circle"}const a=Object.assign({status:t,glyph:s,size:o[n]},r);return A().createElement(c,Object.assign({},a))}},26603:(e,t,n)=>{"use strict";n.d(t,{Z2:()=>s,lG:()=>c,nn:()=>h,R1:()=>m,ZP:()=>y});var r=n(84390),A=n.n(r),i=n(15710);const o=[25,50,75,100,200,300],s=100,a=["p","span","label"],u="p",l=["light","regular","bold"],c="regular",d=["none","both","bottom","top"],f="both",p="inherit",h={25:{size:10,lineHeight:16},50:{size:11,lineHeight:16},75:{size:12,lineHeight:16},100:{size:14,lineHeight:20},200:{size:16,lineHeight:24},300:{size:18,lineHeight:28}};o.forEach((e=>{h[e].margin=i.cQ.getFontMargin(h[e].size,.75)}));var g=n(85939);const m=({inheritLineHeight:e=!1,size:t=s,weight:n=c})=>{const r=e?"inherit":`${h[t].lineHeight}px`;return g.css`
        font-family: ${i.bH.body};
        font-weight: ${i.Os[n]};
        font-size: ${h[t].size}px;
        line-height: ${r};
    `},v=n.n(g)().p.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e,["color","size"])&&t(e)})((({theme:e,inheritLineHeight:t,color:n,margin:r,size:A,weight:o})=>g.css`
        ${m({inheritLineHeight:t,size:A,weight:o})};
        ${(({color:e,theme:t})=>"inherit"===e?g.css`
            color: inherit;
        `:i.cQ.isColor(e)?g.css`
            color: ${e};
        `:g.css`
        color: ${(null==t?void 0:t.text[e])||"inherit"};
    `)({color:n,theme:e})};
        ${(({margin:e=f,size:t=s})=>{if("none"===e)return g.css`
            margin: 0;
        `;let n=`${h[t].margin}px 0`;switch(e){case"bottom":n=`0 0 ${h[t].margin}px`;break;case"top":n=`${h[t].margin}px 0 0`}return g.css`
        margin: ${n};
    `})({margin:r,size:A})};

        body.enable-animations & {
            transition: color ${e.animation.fastest} 0s ease-in-out;
        }
    `));const y=e=>{var{inheritLineHeight:t=!1,color:n=p,element:r=u,margin:h=f,size:g=s,weight:m=c}=e,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var A=0;for(r=Object.getOwnPropertySymbols(e);A<r.length;A++)t.indexOf(r[A])<0&&Object.prototype.propertyIsEnumerable.call(e,r[A])&&(n[r[A]]=e[r[A]])}return n}(e,["inheritLineHeight","color","element","margin","size","weight"]);i.cQ.assert(a.includes(r)||A().isValidElement(r),`Compass Components - Text: component was used with an unsupported element '${r}'.\n            Please provide one from these available options: ${a.join(", ")}, or a valid \`ReactElement\``,!0),i.cQ.assert(i.YS.includes(n)||i.cQ.isColor(n),`Compass Components - Text: component was used with an unsupported color '${n}'.\n            Please provide one from these available options: ${l.join(", ")}, or a valid CSS color value`,!0),i.cQ.assert(o.includes(g),`Compass Components - Text: component was used with an unsupported size '${g}'.\n            Please provide one from these available options: ${o.join(", ")}.`,!0),i.cQ.assert(d.includes(h),`Compass Components - Text: component was used with an unsupported margin '${h}'.\n            Please provide one from these available options: ${d.join(", ")}.`,!0),i.cQ.assert(l.includes(m),`Compass Components - Text: component was used with an unsupported weight '${m}'.\n            Please provide one from these available options: ${l.join(", ")}.`,!0);const w=Object.assign({inheritLineHeight:t,color:n,margin:h,size:g,weight:m},y);return A().createElement(v,Object.assign({as:r},w))}},97387:(e,t,n)=>{"use strict";n.d(t,{iN:()=>r,ek:()=>A,QN:()=>i,n$:()=>o,$y:()=>s,jk:()=>a,Q6:()=>u,$C:()=>l,er:()=>c});const r={100:"rgb(165, 190, 243)",200:"rgb(129, 163, 239)",300:"rgb(93, 137, 234)",400:"rgb(56, 111, 229)",500:"rgb(28, 88, 217)",600:"rgb(23, 73, 181)",700:"rgb(19, 59, 144)",800:"rgb(14, 44, 108)"},A={100:"rgb(179, 230, 209)",200:"rgb(148, 219, 191)",300:"rgb(117, 209, 172)",400:"rgb(87, 199, 154)",500:"rgb(61, 184, 135)",600:"rgb(51, 153, 112)",700:"rgb(41, 122, 90)",800:"rgb(31, 92, 67)"},i={100:"rgb(116, 146, 210)",200:"rgb(60, 100, 185)",300:"rgb(50, 83, 154)",400:"rgb(40, 66, 123)",500:"rgb(30, 50, 92)",600:"rgb(20, 33, 62)",700:"rgb(15, 25, 46)",800:"rgb(10, 17, 31)"},o={0:"rgb(255, 255, 255)",50:"rgb(244, 244, 246)",100:"rgb(232, 233, 237)",150:"rgb(221, 223, 228)",200:"rgb(209, 212, 219)",250:"rgb(198, 201, 210)",300:"rgb(186, 190, 201)",350:"rgb(175, 179, 192)",400:"rgb(164, 169, 183)",450:"rgb(152, 158, 174)",500:"rgb(141, 147, 165)",550:"rgb(129, 136, 156)",600:"rgb(118, 125, 147)",650:"rgb(108, 115, 137)",700:"rgb(99, 105, 126)",750:"rgb(90, 96, 114)",800:"rgb(81, 86, 103)",850:"rgb(72, 77, 91)",900:"rgb(63, 67, 80)",950:"rgb(54, 58, 69)",1e3:"rgb(45, 48, 57)",1050:"rgb(36, 38, 46)",1100:"rgb(27, 29, 34)",1150:"rgb(18, 19, 23)",1200:"rgb(9, 10, 11)",1250:"rgb(0, 0, 0)"},s={100:"rgb(246, 201, 162)",200:"rgb(243, 180, 124)",300:"rgb(239, 158, 87)",400:"rgb(236, 137, 50)",500:"rgb(224, 116, 21)",600:"rgb(187, 96, 17)",700:"rgb(149, 77, 14)",800:"rgb(112, 58, 10)"},a={100:"rgb(183, 186, 225)",200:"rgb(154, 158, 213)",300:"rgb(126, 131, 201)",400:"rgb(97, 103, 189)",500:"rgb(72, 79, 173)",600:"rgb(60, 66, 144)",700:"rgb(48, 53, 115)",800:"rgb(36, 39, 86)"},u={100:"rgb(235, 173, 174)",200:"rgb(226, 141, 142)",300:"rgb(218, 108, 110)",400:"rgb(210, 75, 78)",500:"rgb(196, 49, 51)",600:"rgb(163, 41, 43)",700:"rgb(131, 33, 34)",800:"rgb(98, 24, 26)"},l={100:"rgb(164, 244, 244)",200:"rgb(127, 240, 240)",300:"rgb(91, 236, 236)",400:"rgb(54, 231, 231)",500:"rgb(26, 219, 219)",600:"rgb(21, 183, 183)",700:"rgb(17, 146, 146)",800:"rgb(13, 110, 110)"},c={100:"rgb(255, 224, 153)",200:"rgb(255, 212, 112)",300:"rgb(255, 200, 71)",400:"rgb(255, 188, 31)",500:"rgb(245, 171, 0)",600:"rgb(204, 143, 0)",700:"rgb(163, 114, 0)",800:"rgb(122, 86, 0)"}},62329:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>g});var r=n(84390),A=n.n(r),i=n(15710),o=n(85939),s=n.n(o),a=n(13693);const u=20,l={8:10,10:12,12:14,16:18,20:24,28:31,32:36,40:48,52:60,64:72,104:120},c=["none",...a.Z.map((e=>e))],d="mattermost",f="inherit";function p({size:e}){return o.css`
        height: ${e}px;
        width: ${e}px;

        &::before {
            font-size: ${l[e]}px;
            letter-spacing: ${l[e]}px;
        }
    `}const h=s().i.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e)&&t(e)})((({theme:e,color:t})=>o.css`
        // element container base styles
        position: relative;
        justify-content: center;
        width: 20px;
        height: 20px;
        padding: 0;

        display: inline-flex;
        align-items: center;

        color: inherit;

        // sub elements
        &::before {
            font-size: ${l[u]}px;
            line-height: 1;
            letter-spacing: ${l[u]}px;
            margin: 0; // remove margins added by fontello
        }

        ${p};

        ${t&&"inherit"!==t&&o.css`
            color: ${e.palette[t].main};
        `}

        // animation
        body.enable-animations & {
            transition: color ${e.animation.fastest} 0s ease-in-out;
        }
    `));const g=e=>{var{glyph:t=d,size:n=u,color:r=f,className:o=""}=e,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var A=0;for(r=Object.getOwnPropertySymbols(e);A<r.length;A++)t.indexOf(r[A])<0&&Object.prototype.propertyIsEnumerable.call(e,r[A])&&(n[r[A]]=e[r[A]])}return n}(e,["glyph","size","color","className"]);i.cQ.assert(c.includes(t),`Compass Components - Icon: please provide a valid option for the \`iconGlyph\` property. Choose from the following: ${c.join(", ")}.`);const a={size:n,color:r,glyph:t,className:`${o} icon-${t}`};return A().createElement(h,Object.assign({},a,s))}},15710:(e,t,n)=>{"use strict";n.d(t,{YS:()=>c,M9:()=>l,bH:()=>s,Xw:()=>a,Os:()=>u,cQ:()=>g,uK:()=>y});var r=n(59139),A=n.n(r),i=n(14206),o=n.n(i);const s={body:"Open Sans, sans-serif",heading:"Metropolis, sans-serif"},a=["light","regular","bold"],u={light:300,regular:400,bold:600},l=["none","both","bottom","top"],c=["primary","secondary","disabled","inherit"],d=["children","className","disabled","role","selected","type","onClick","checked","defaultChecked"],f=e=>"number"==typeof e,p=e=>"function"==typeof e;class h extends Error{constructor(e){super(e),this.name="CompassError"}}const g={warn:function(e,...t){console.warn(e,...t)},assert:function(e,t,n=!1){if(!e){if(n)return void console.warn(t);throw new h(t)}},clamp:function(e,t=0,n=1){if(e<t||e>n)throw new Error(`Compass Components: The value provided ${e} is out of range [${t}, ${n}].`);return Math.min(Math.max(t,e),n)},isColor:function(e){const t=(new Option).style;return t.color=e,t.color===e},isNumber:f,isFunction:p,isString:e=>"string"==typeof e,isFunctionalComponent:e=>p(e)&&!(e.prototype&&e.prototype.isReactComponent),blockProperty:(e,t=[])=>e.toString().startsWith("data-")||e.toString().startsWith("aria-")||d.includes(e.toString())||!t.includes(e.toString()),forceForwardProperty:(e,t=[])=>t.includes(e.toString()),getBase64:function(e){return o().get(e,{responseType:"arraybuffer"}).then((e=>{const t=Buffer.from(e.data,"binary").toString("base64");return`data:${e.headers["content-type"]};base64,${t}`}))},getStoryDocumentationUrl:function(e){const t=e.title.split("/").map((e=>A()(e))).join("-");return 0===e.includeStories.length?`/?path=/docs/${t}--page`:`/?path=/docs/${t}--${A()(e.includeStories[0])}`},hideComponentProperties:function(e=[]){return e.reduce(((e,t)=>Object.assign(e,{[t]:{table:{disable:!0}}})),{forwardedAs:{table:{disable:!0}},theme:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}})},getFontMargin:(e,t)=>Math.max(4*Math.round(e*t/4),8),getPxValue:e=>f(e)?`${e}px`:e,noop:function(){}},m=["rgb","rgba","hsl","hsla"];function v(e){if("#"===e.charAt(0))return v(function(e){const t=e.slice(1),n=new RegExp(`.{1,${t.length>=6?2:1}}`,"gu");let r=t.match(n);return r&&1===r[0].length&&(r=r.map((e=>e+e))),r?`rgb${4===r.length?"a":""}(${r.map(((e,t)=>t<3?Number.parseInt(e,16):Math.round(Number.parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),n=e.slice(0,Math.max(0,t));if(!m.includes(n))throw new Error("Compass Components: Unsupported `%s` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().");return{type:n,values:e.slice(t+1,-1).split(",").map((e=>Number.parseFloat(e)))}}function y(e,t){const n=v(e),r=g.clamp(t);return"rgb"!==n.type&&"hsl"!==n.type||(n.type+="a"),n.values[3]=r,function(e){const{type:t,values:n}=e;let r=n;return t.includes("rgb")?r=n.map(((e,t)=>t<3?Number.parseInt(e.toString(),10):e)):t.includes("hsl")&&(r[1]=`${n[1]}%`,r[2]=`${n[2]}%`),`${t}(${r.join(", ")})`}(n)}n(97387),n(84390)},15607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(84390),A=n.n(r),i=n(15710);const o=["div","span","article","aside","details","figcaption","figure","footer","header","main","mark","nav","section","summary","time","ul","li"],s="div",a=!1,u=!1,l="initial",c=["initial","baseline","flex-start","center","flex-end","stretch"],d="initial",f=["initial","flex-start","center","flex-end","stretch","space-around","space-between","space-evenly"],p="initial";var h=n(85939),g=n.n(h),m=n(26621);const v=g().div.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e,["flex","wrap","row","padding","margin","width","height"])&&t(e)})((({flex:e,wrap:t,row:n,justify:r,alignment:A,padding:o,margin:s,width:a,height:u})=>h.css`
        display: flex;
        flex: ${e};
        flex-wrap: ${t?"wrap":"nowrap"};
        flex-direction: ${n?"row":"column"};
        align-items: ${A};
        justify-content: ${r};
        padding: ${o?(0,m.ME)(o):"0"};
        margin: ${s?(0,m.ME)(s):"0"};
        ${(i.cQ.isNumber(a)||i.cQ.isString(a))&&h.css`
            max-width: ${i.cQ.getPxValue(a)};
        `}
        ${(i.cQ.isNumber(u)||i.cQ.isString(u))&&h.css`
            max-height: ${i.cQ.getPxValue(u)};
        `}
    `));const y=function(e){var{element:t=s,alignment:n=d,justify:r=p,flex:h=l,row:g=a,wrap:m=u}=e,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var A=0;for(r=Object.getOwnPropertySymbols(e);A<r.length;A++)t.indexOf(r[A])<0&&Object.prototype.propertyIsEnumerable.call(e,r[A])&&(n[r[A]]=e[r[A]])}return n}(e,["element","alignment","justify","flex","row","wrap"]);i.cQ.assert(c.includes(n),`Compass Components - Flex: incompatible alignment property (${n}) set on Flex component. Please choose from the following: ${c.join(", ")}`),i.cQ.assert(f.includes(r),`Compass Components - Flex: incompatible justify property (${r}) set on Flex component. Please choose from the following: ${f.join(", ")}`),i.cQ.assert(o.includes(t)||i.cQ.isFunctionalComponent(t),`Compass Components - Flex: incompatible element property (${t}) used in Flex component. Please choose from the following: ${o.join(", ")}`);const w=Object.assign({alignment:n,justify:r,flex:h,row:g,wrap:m},y);return A().createElement(v,Object.assign({},w,{as:t}))}},26621:(e,t,n)=>{"use strict";n.d(t,{P3:()=>u,Og:()=>a,ZP:()=>l,ME:()=>i});var r=n(15710);const A={0:0,25:2,50:4,75:6,100:8,125:10,150:12,175:16,200:20,250:24,300:28,350:32,400:40,450:48,500:56,600:64,700:72,800:80},i=e=>e.map((e=>e?r.cQ.getPxValue(A[e]):0)).join(" "),o={all:e=>[e,e,e,e],trbl:({top:e=0,right:t=0,bottom:n=0,left:r=0})=>[e,t,n,r],only(e,t){const n={top:0,right:0,bottom:0,left:0};return n[e]=t,this.trbl(n)},symmetric({vertical:e=0,horizontal:t=0}){return this.trbl({top:e,right:t,bottom:e,left:t})}};var s=n(85939);function a(e){return s.css`
        padding: ${i(e)};
    `}function u(e){return s.css`
        margin: ${i(e)};
    `}const l=o},15535:(e,t,n)=>{"use strict";n.d(t,{P:()=>A,Z:()=>i});var r=n(85939);const A=r.css`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
`,i=r.css`
    /* https://meyerweb.com/eric/tools/css/reset/
    v4.0 | 20180602
    License: none (public domain)
  */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
        display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* https://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
    html,
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    /* Additional resets */
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        ${A}
    }
    /* Fix antialiasing */
    *,
    *:before,
    *:after {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    /* Disable user select on everything but texts */
    *,
    *:before,
    *:after {
        user-select: none;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    blockquote,
    pre,
    ul,
    ol,
    li,
    table,
    tr,
    th,
    td,
    input,
    textarea {
        user-select: text;
    }
`},71554:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>S,Wb:()=>Q});var r=n(84390),A=n.n(r),i=n(85939),o=n(15710);const s=n.p+"files/015736ac96a0f4b445b5.woff2",a=n.p+"files/6f1462a75cab16ee77c8.woff2",u=n.p+"files/c7106e4ab743a4136ded.woff2",l=n.p+"files/d5daf742611b86ea2649.woff2",c=n.p+"files/53036a05f6557c05e491.woff2",d=n.p+"files/debacb904ea0289fc5c6.woff2",f=n.p+"files/df29fd5007ba01096d6b.woff2",p=n.p+"files/f356182e1dc28ee0d654.woff2",h=n.p+"files/0bcd8fb193ae33961ab2.woff2",g=n.p+"files/be7a481e724d47203afb.woff2",m=n.p+"files/7eaa3b990583dc1a5d69.woff2",v=n.p+"files/f9d11b5d4831f29245c8.woff2",y=i.css`
    // Metropolis font definitions
    @font-face {
        font-family: 'Metropolis';
        src: url(${s}) format('woff2');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${a}) format('woff2');
        font-weight: 600;
        font-style: italic;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${u}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${l}) format('woff2');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${c}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${d}) format('woff2');
        font-weight: 300;
        font-style: italic;
    }

    // OpenSans font definitions
    @font-face {
        font-family: 'Open Sans';
        src: url(${f}) format('woff2');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${p}) format('woff2');
        font-weight: 600;
        font-style: italic;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${h}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${g}) format('woff2');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${m}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${v}) format('woff2');
        font-weight: 300;
        font-style: italic;
    }
`;var w=n(15535),B=n(69383),b=n(26603);const C=i.css`
    font-family: ${o.bH.body};
    font-size: ${b.nn[b.Z2].size}px;
    font-weight: ${b.lG};
    line-height: ${b.nn[b.Z2].lineHeight}px;

    p,
    span,
    label {
        // set body type styles
        // - defaults
        margin: ${b.nn[b.Z2].margin}px 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        // set heading type styles
        // - defaults
        font-family: ${o.bH.heading};
        font-weight: ${B.IM};
        margin: ${B.wr[B.Sb].marginTop}px 0
            ${B.wr[B.Sb].marginBottom}px;
    }

    ${B.vG.map((e=>{const t=B.LR[e];return i.css`
            ${e} {
                font-size: ${B.wr[t].size}px;
                line-height: ${B.wr[t].lineHeight}px;
                margin: ${B.wr[t].marginTop}px 0
                    ${B.wr[t].marginBottom}px;
            }
        `}))}

    html, body {
        background: ${({theme:e})=>e.background.default};
    }
`,E=C,D=i.createGlobalStyle`
    ${({theme:e})=>e.noStyleReset?null:w.Z};
    ${({theme:e})=>e.noFontFaces?null:y};
    ${({theme:e})=>e.noDefaultStyle?null:E};

    // TODO@all: these styles need to be extracted (and adjusted) to the Skeleton component once it is ready to be built
    .skeleton {
        display: block;
        flex: 1;
        align-self: stretch;
        background: ${({theme:e})=>e.background.skeleton};
        overflow: hidden;
        position: relative;

        &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background: linear-gradient(
                    90deg,
                    ${({theme:e})=>(0,o.uK)(e.background.shimmer,0)} 0,
                    ${({theme:e})=>(0,o.uK)(e.background.shimmer,.25)} 40%,
                    ${({theme:e})=>(0,o.uK)(e.background.shimmer,.5)} 75%,
                    ${({theme:e})=>(0,o.uK)(e.background.shimmer,0)}
            );
            animation: shimmer 1.5s infinite;
            content: '';
        }
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
`,F=D;var x=n(97387);x.jk[200],x.jk[300],x.jk[500],x.jk[700],x.jk[800],x.n$[0],x.$C[200],x.$C[300],x.$C[500],x.$C[700],x.$C[800],x.n$[0],x.Q6[200],x.Q6[300],x.Q6[500],x.Q6[700],x.Q6[800],x.n$[0],x.$y[100],x.$y[200],x.$y[400],x.$y[600],x.$y[700],x.n$[0],x.ek[300],x.ek[400],x.ek[600],x.ek[700],x.ek[800],x.n$[0],x.QN[100],x.QN[200],x.QN[300],x.QN[500],x.QN[600],x.n$[0],x.n$[0],x.n$[100],x.ek[600],x.$y[400],x.Q6[500],(0,o.uK)(x.n$[350],.64),x.n$[150],x.n$[50],x.n$[300],x.n$[700],x.n$[100],x.n$[150],x.n$[50],x.n$[300],x.n$[700],x.n$[100],x.n$[1250],x.n$[1100],x.n$[1e3],x.n$[900],x.n$[800],x.n$[50],x.Q6[200];const Q={type:"light",elevationOpacity:.08,noStyleReset:!1,noFontFaces:!1,noDefaultStyle:!1,palette:{primary:{lighter:x.iN[300],light:x.iN[400],main:x.iN[500],dark:x.iN[600],darker:x.iN[700],contrast:x.n$[0]},secondary:{lighter:x.QN[300],light:x.QN[400],main:x.QN[500],dark:x.QN[600],darker:x.QN[700],contrast:x.n$[0]},alert:{lighter:x.Q6[200],light:x.Q6[300],main:x.Q6[500],dark:x.Q6[700],darker:x.Q6[800],contrast:x.n$[0]},warning:{lighter:x.$y[100],light:x.$y[200],main:x.$y[400],dark:x.$y[600],darker:x.$y[700],contrast:x.n$[0]},success:{lighter:x.ek[300],light:x.ek[400],main:x.ek[600],dark:x.ek[700],darker:x.ek[800],contrast:x.n$[0]},info:{lighter:x.QN[100],light:x.QN[200],main:x.QN[300],dark:x.QN[500],darker:x.QN[600],contrast:x.n$[0]}},action:{hover:x.n$[900],disabled:x.n$[1e3]},badges:{online:x.ek[600],away:x.$y[400],dnd:x.Q6[500],offline:(0,o.uK)(x.n$[350],.64)},text:{primary:x.n$[1100],accent:x.n$[900],secondary:x.n$[800],disabled:x.n$[500],contrast:x.n$[0]},border:{primary:x.n$[1100],accent:x.n$[900],secondary:x.n$[800],disabled:x.n$[500],contrast:x.n$[0]},background:{badge:x.n$[500],default:x.n$[50],shape:x.n$[0],skeleton:x.n$[100],shimmer:x.n$[0],contrast:x.n$[1100]},animation:{instant:0,fastest:100,fast:250,normal:300,slow:450,slowest:600},highlight:{mention:x.er[300]}},U=(x.ek[100],x.ek[200],x.ek[400],x.ek[600],x.ek[700],x.n$[0],x.$C[200],x.$C[300],x.$C[500],x.$C[700],x.$C[800],x.n$[0],x.Q6[200],x.Q6[300],x.Q6[500],x.Q6[700],x.Q6[800],x.n$[0],x.$y[100],x.$y[200],x.$y[400],x.$y[600],x.$y[700],x.n$[0],x.ek[300],x.ek[400],x.ek[600],x.ek[700],x.ek[800],x.n$[0],x.QN[100],x.QN[200],x.QN[300],x.QN[500],x.QN[600],x.n$[0],x.n$[0],x.n$[100],x.ek[600],x.$y[400],x.Q6[500],(0,o.uK)(x.n$[350],.64),x.n$[50],x.n$[150],x.n$[300],x.n$[700],x.n$[100],x.n$[50],x.n$[150],x.n$[300],x.n$[700],x.n$[100],x.iN[800],x.iN[700],x.iN[500],x.n$[50],x.n$[100],x.n$[0],x.Q6[200],({children:e=null,theme:t=Q})=>A().createElement(i.ThemeProvider,{theme:t},A().createElement(F,null),e)),S=U},13693:(e,t)=>{"use strict";t.Z=["account-minus-outline","account-multiple-outline","account-multiple-plus-outline","account-outline","account-plus-outline","airplane-variant","airplane","alert-circle-outline","alert-outline","application-cog","apps","archive-arrow-up-outline","archive-outline","arrow-back-ios","arrow-collapse","arrow-down-bold-circle-outline","arrow-down","arrow-expand-all","arrow-expand","arrow-forward-ios","arrow-left","arrow-right-bold-outline","arrow-right","arrow-up-bold-circle-outline","arrow-up","at","basketball","beach-umbrella-outline","bell-off-outline","bell-outline","bell-ring-outline","bluetooth","book-lock-outline","book-outline","bookmark-outline","bookmark","brand-gitlab","brand-google","brand-office-365","brand-one-login","brand-zoom","bullhorn-outline","calendar-check-outline","calendar-month-outline","calendar-outline","camera-outline","cancel","car-outline","cellphone","chart-bar","chart-line","check-all","check-circle-outline","check-circle","check","checkbox-blank-outline","checkbox-marked","checkbox-multiple-marked-outline","chevron-down-circle-outline","chevron-down","chevron-left","chevron-right","chevron-up","circle-multiple-outline-lock","circle-multiple-outline","circle-outline","clock-outline","clock-send-outline","clock","close-circle-outline","close-circle","close","code-block","code-brackets","code-tags","cog-outline","console","content-copy","credit-card-outline","crown-outline","currency-usd","dock-left","dock-window","dots-horizontal","dots-vertical","download-outline","drag-vertical","draw","email-outline","email-plus-outline","email-variant","emoticon-custom-outline","emoticon-happy-outline","emoticon-outline","emoticon-plus-outline","exclamation-thick","exit-to-app","export-variant","eye-off-outline","eye-outline","file-audio-outline-large","file-audio-outline","file-code-outline-large","file-code-outline","file-excel-outline-large","file-excel-outline","file-generic-outline-large","file-generic-outline","file-gif","file-image-broken-outline-large","file-image-broken-outline","file-image-outline-large","file-image-outline","file-multiple-outline-large","file-multiple-outline","file-patch-outline-large","file-patch-outline","file-pdf-outline-large","file-pdf-outline","file-powerpoint-outline-large","file-powerpoint-outline","file-text-outline-large","file-text-outline","file-video-outline-large","file-video-outline","file-word-outline-large","file-word-outline","file-zip-outline-large","file-zip-outline","filter-variant","fire","flag-checkered","flag-outline","flag","flask-outline","folder-move-outline","folder-outline","folder-plus-outline","food-apple","food-fork-drink","format-bold","format-clear","format-header-1","format-header-2","format-header-3","format-header-4","format-header-5","format-header-6","format-header","format-italic","format-letter-case","format-list-bulleted","format-list-numbered","format-quote-open","format-strikethrough-variant","forum-outline","gfycat","github-circle","glasses","globe-checked","globe","hammer","hand-right-outline-off","hand-right-outline","hand-right","headphones","heart-outline","help-circle-outline","help","home-variant-outline","iframe-list-outline","image-area-outline","image-broken-outline","image-outline","import","infinity","information-outline","kanban","key-variant-circle","key-variant","keyboard-return","laptop","layers-outline","leaf-outline","leaf","lightbulb-outline","lightning-bolt-outline","link-variant-off","link-variant","lock-outline","lock","logout-variant","magnify-minus","magnify-plus","magnify","mark-as-unread","mattermost","menu-down","menu-left","menu-right","menu-up","menu-variant","menu","message-arrow-right-outline","message-check-outline","message-check","message-minus-outline","message-plus-outline","message-text-outline","microphone-off","microphone-outline","microphone","minus-box","minus-circle-outline","minus-circle","minus","monitor-off","monitor-share","monitor","notebook-outline","oauth","open-in-new","palette-outline","paperclip","pause","pencil-outline","phone-hangup","phone-in-talk","phone-outline","phone","pin-outline","pin","play-box-multiple-outline","play-outline","play","playlist-check","plus-box-outline","plus-box","plus","pound","power-plug-outline","product-boards","product-channels","product-playbooks","products","radiobox-blank","radiobox-marked","record-circle-outline","record-square-outline","refresh","reply-outline","resize-bottom-right","restore","robot-happy","search-list","send-outline","send","server-outline","server-variant-plus","server-variant","settings-outline","share-variant-outline","shield-alert-outline","shield-outline","shuffle-variant","sitemap","slash-forward-box-outline","slash-forward","soccer","sort-alphabetical-ascending","sort-ascending","source-branch","source-pull","square","star-outline","star","sync","table-column-plus-after","table-column-plus-before","table-column-remove","table-large","table-plus","table-remove","table-row-plus-after","table-row-plus-before","table-row-remove","table-settings","tablet","text-box-outline","thumbs-up-down","timeline-text-outline","trash-can-outline","tune","update","video-outline","view-grid-plus-outline","volume-high","webhook-incoming","webhook-outgoing","webhook"]},79119:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(30808),A=n(25773),i=n(84390),o=n(38944),s=n(82267),a=n(7818),u=n(87387),l=n(78580),c=n(38062),d=n(24246);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,A.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,a.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,A.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,A.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,A.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),h=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,A.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),g=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:a,className:u,component:g=(a?"div":"hr"),flexItem:m=!1,light:v=!1,orientation:y="horizontal",role:w=("hr"!==g?"separator":void 0),textAlign:B="center",variant:b="fullWidth"}=n,C=(0,r.Z)(n,f),E=(0,A.Z)({},n,{absolute:i,component:g,flexItem:m,light:v,orientation:y,role:w,textAlign:B,variant:b}),D=(e=>{const{absolute:t,children:n,classes:r,flexItem:A,light:i,orientation:o,textAlign:a,variant:u}=e,l={root:["root",t&&"absolute",u,i&&"light","vertical"===o&&"vertical",A&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===a&&"vertical"!==o&&"textAlignRight","left"===a&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,s.Z)(l,c.V,r)})(E);return(0,d.jsx)(p,(0,A.Z)({as:g,className:(0,o.Z)(D.root,u),role:w,ref:t,ownerState:E},C,{children:a?(0,d.jsx)(h,{className:D.wrapper,ownerState:E,children:a}):null}))}))},38062:(e,t,n)=>{"use strict";n.d(t,{V:()=>i,Z:()=>o});var r=n(44124),A=n(17097);function i(e){return(0,A.Z)("MuiDivider",e)}const o=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},78849:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(84390).createContext({})},98813:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_e});var r=n(25773),A=n(30808),i=n(84390),o=(n(33230),n(38944)),s=n(82267),a=n(72146),u=n(7818),l=n(87387);const c=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var d=n(78580),f=n(44124),p=n(17097);function h(e){return(0,p.Z)("MuiPaper",e)}(0,f.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=n(24246);const m=["className","component","elevation","square","variant"],v=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,u.Fq)("#fff",c(t.elevation))}, ${(0,u.Fq)("#fff",c(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),y=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiPaper"}),{className:i,component:a="div",elevation:u=1,square:l=!1,variant:c="elevation"}=n,f=(0,A.Z)(n,m),p=(0,r.Z)({},n,{component:a,elevation:u,square:l,variant:c}),y=(e=>{const{square:t,elevation:n,variant:r,classes:A}=e,i={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,s.Z)(i,h,A)})(p);return(0,g.jsx)(v,(0,r.Z)({as:a,ownerState:p,className:(0,o.Z)(y.root,i),ref:t},f))}));var w=n(2444),B=n(80668);function b(e){return(0,B.Z)(e).defaultView||window}const C=b;var E=n(51183),D=n(99443),F=n(94776);const x=e=>e.scrollTop;function Q(e,t){var n,r;const{timeout:A,easing:i,style:o={}}=e;return{duration:null!=(n=o.transitionDuration)?n:"number"==typeof A?A:A[t.mode]||0,easing:null!=(r=o.transitionTimingFunction)?r:"object"==typeof i?i[t.mode]:i,delay:o.transitionDelay}}const U=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function S(e){return`scale(${e}, ${e**2})`}const I={entering:{opacity:1,transform:S(1)},entered:{opacity:1,transform:"none"}},k="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),T=i.forwardRef((function(e,t){const{addEndListener:n,appear:o=!0,children:s,easing:a,in:u,onEnter:l,onEntered:c,onEntering:d,onExit:f,onExited:p,onExiting:h,style:m,timeout:v="auto",TransitionComponent:y=D.ZP}=e,w=(0,A.Z)(e,U),B=i.useRef(),b=i.useRef(),C=(0,F.Z)(),T=i.useRef(null),O=(0,E.Z)(T,s.ref,t),L=e=>t=>{if(e){const n=T.current;void 0===t?e(n):e(n,t)}},H=L(d),_=L(((e,t)=>{x(e);const{duration:n,delay:r,easing:A}=Q({style:m,timeout:v,easing:a},{mode:"enter"});let i;"auto"===v?(i=C.transitions.getAutoHeightDuration(e.clientHeight),b.current=i):i=n,e.style.transition=[C.transitions.create("opacity",{duration:i,delay:r}),C.transitions.create("transform",{duration:k?i:.666*i,delay:r,easing:A})].join(","),l&&l(e,t)})),M=L(c),P=L(h),R=L((e=>{const{duration:t,delay:n,easing:r}=Q({style:m,timeout:v,easing:a},{mode:"exit"});let A;"auto"===v?(A=C.transitions.getAutoHeightDuration(e.clientHeight),b.current=A):A=t,e.style.transition=[C.transitions.create("opacity",{duration:A,delay:n}),C.transitions.create("transform",{duration:k?A:.666*A,delay:k?n:n||.333*A,easing:r})].join(","),e.style.opacity=0,e.style.transform=S(.75),f&&f(e)})),N=L(p);return i.useEffect((()=>()=>{clearTimeout(B.current)}),[]),(0,g.jsx)(y,(0,r.Z)({appear:o,in:u,nodeRef:T,onEnter:_,onEntered:M,onEntering:H,onExit:R,onExited:N,onExiting:P,addEndListener:e=>{"auto"===v&&(B.current=setTimeout(e,b.current||0)),n&&n(T.current,e)},timeout:"auto"===v?null:v},w,{children:(e,t)=>i.cloneElement(s,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:S(.75),visibility:"exited"!==e||u?void 0:"hidden"},I[e],m,s.props.style),ref:O},t))}))}));T.muiSupportAuto=!0;const O=T;var L=n(97048),H=n(81925);function _(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}var M=n(69372),P=n(96858),R=n(40514);const N=i.forwardRef((function(e,t){const{children:n,container:r,disablePortal:A=!1}=e,[o,s]=i.useState(null),a=(0,L.Z)(i.isValidElement(n)?n.ref:null,t);if((0,P.Z)((()=>{A||s(function(e){return"function"==typeof e?e():e}(r)||document.body)}),[r,A]),(0,P.Z)((()=>{if(o&&!A)return(0,R.Z)(t,o),()=>{(0,R.Z)(t,null)}}),[t,o,A]),A){if(i.isValidElement(n)){const e={ref:a};return i.cloneElement(n,e)}return(0,g.jsx)(i.Fragment,{children:n})}return(0,g.jsx)(i.Fragment,{children:o?M.createPortal(n,o):o})}));var K=n(63268);function j(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function V(e){return parseInt(b(e).getComputedStyle(e).paddingRight,10)||0}function Z(e,t,n,r,A){const i=[t,n,...r];[].forEach.call(e.children,(e=>{const t=-1===i.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&j(e,A)}))}function G(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}const z=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function W(e){const t=[],n=[];return Array.from(e.querySelectorAll(z)).forEach(((e,r)=>{const A=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==A&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===A?t.push(e):n.push({documentOrder:r,tabIndex:A,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function q(){return!0}const Y=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:A=!1,getTabbable:o=W,isEnabled:s=q,open:a}=e,u=i.useRef(!1),l=i.useRef(null),c=i.useRef(null),d=i.useRef(null),f=i.useRef(null),p=i.useRef(!1),h=i.useRef(null),m=(0,L.Z)(t.ref,h),v=i.useRef(null);i.useEffect((()=>{a&&h.current&&(p.current=!n)}),[n,a]),i.useEffect((()=>{if(!a||!h.current)return;const e=(0,B.Z)(h.current);return h.current.contains(e.activeElement)||(h.current.hasAttribute("tabIndex")||h.current.setAttribute("tabIndex","-1"),p.current&&h.current.focus()),()=>{A||(d.current&&d.current.focus&&(u.current=!0,d.current.focus()),d.current=null)}}),[a]),i.useEffect((()=>{if(!a||!h.current)return;const e=(0,B.Z)(h.current),t=t=>{const{current:n}=h;if(null!==n)if(e.hasFocus()&&!r&&s()&&!u.current){if(!n.contains(e.activeElement)){if(t&&f.current!==t.target||e.activeElement!==f.current)f.current=null;else if(null!==f.current)return;if(!p.current)return;let r=[];if(e.activeElement!==l.current&&e.activeElement!==c.current||(r=o(h.current)),r.length>0){var A,i;const e=Boolean((null==(A=v.current)?void 0:A.shiftKey)&&"Tab"===(null==(i=v.current)?void 0:i.key)),t=r[0],n=r[r.length-1];"string"!=typeof t&&"string"!=typeof n&&(e?n.focus():t.focus())}else n.focus()}}else u.current=!1},n=t=>{v.current=t,!r&&s()&&"Tab"===t.key&&e.activeElement===h.current&&t.shiftKey&&(u.current=!0,c.current&&c.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const A=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&t(null)}),50);return()=>{clearInterval(A),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[n,r,A,s,a,o]);const y=e=>{null===d.current&&(d.current=e.relatedTarget),p.current=!0};return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)("div",{tabIndex:a?0:-1,onFocus:y,ref:l,"data-testid":"sentinelStart"}),i.cloneElement(t,{ref:m,onFocus:e=>{null===d.current&&(d.current=e.relatedTarget),p.current=!0,f.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,g.jsx)("div",{tabIndex:a?0:-1,onFocus:y,ref:c,"data-testid":"sentinelEnd"})]})};function $(e){return(0,p.Z)("MuiModal",e)}function X(e){return"string"==typeof e}function J(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}function ee(e,t){return"function"==typeof e?e(t):e}(0,f.Z)("MuiModal",["root","hidden","backdrop"]);const te=["elementType","externalSlotProps","ownerState"];function ne(e){var t;const{elementType:n,externalSlotProps:i,ownerState:s}=e,a=(0,A.Z)(e,te),u=ee(i,s),{props:l,internalRef:c}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:A,externalForwardedProps:i,className:s}=e;if(!t){const e=(0,o.Z)(null==i?void 0:i.className,null==A?void 0:A.className,s,null==n?void 0:n.className),t=(0,r.Z)({},null==n?void 0:n.style,null==i?void 0:i.style,null==A?void 0:A.style),a=(0,r.Z)({},n,i,A);return e.length>0&&(a.className=e),Object.keys(t).length>0&&(a.style=t),{props:a,internalRef:void 0}}const a=function(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}((0,r.Z)({},i,A)),u=J(A),l=J(i),c=t(a),d=(0,o.Z)(null==c?void 0:c.className,null==n?void 0:n.className,s,null==i?void 0:i.className,null==A?void 0:A.className),f=(0,r.Z)({},null==c?void 0:c.style,null==n?void 0:n.style,null==i?void 0:i.style,null==A?void 0:A.style),p=(0,r.Z)({},c,n,l,u);return d.length>0&&(p.className=d),Object.keys(f).length>0&&(p.style=f),{props:p,internalRef:c.ref}}((0,r.Z)({},a,{externalSlotProps:u})),d=(0,L.Z)(c,null==u?void 0:u.ref,null==(t=e.additionalProps)?void 0:t.ref),f=function(e,t,n){return void 0===e||X(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}(n,(0,r.Z)({},l,{ref:d}),s);return f}const re={disableDefaultClasses:!1},Ae=i.createContext(re),ie=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],oe=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&j(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);Z(t,e.mount,e.modalRef,r,!0);const A=G(this.containers,(e=>e.container===t));return-1!==A?(this.containers[A].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=G(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];r.restore||(r.restore=function(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,B.Z)(e);return t.body===e?b(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){const e=(0,K.Z)((0,B.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${V(r)+e}px`;const t=(0,B.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${V(t)+e}px`}))}let e;if(r.parentNode instanceof DocumentFragment)e=(0,B.Z)(r).body;else{const t=r.parentElement,n=b(r);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}(r,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const r=G(this.containers,(t=>-1!==t.modals.indexOf(e))),A=this.containers[r];if(A.modals.splice(A.modals.indexOf(e),1),this.modals.splice(n,1),0===A.modals.length)A.restore&&A.restore(),e.modalRef&&j(e.modalRef,t),Z(A.container,e.mount,e.modalRef,A.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=A.modals[A.modals.length-1];e.modalRef&&j(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},se=i.forwardRef((function(e,t){var n,o;const{children:a,closeAfterTransition:u=!1,component:l,container:c,disableAutoFocus:d=!1,disableEnforceFocus:f=!1,disableEscapeKeyDown:p=!1,disablePortal:h=!1,disableRestoreFocus:m=!1,disableScrollLock:v=!1,hideBackdrop:y=!1,keepMounted:w=!1,manager:b=oe,onBackdropClick:C,onClose:E,onKeyDown:D,open:F,onTransitionEnter:x,onTransitionExited:Q,slotProps:U={},slots:S={}}=e,I=(0,A.Z)(e,ie),[k,T]=i.useState(!F),O=i.useRef({}),M=i.useRef(null),P=i.useRef(null),R=(0,L.Z)(P,t),K=function(e){return!!e&&e.props.hasOwnProperty("in")}(a),V=null==(n=e["aria-hidden"])||n,Z=()=>(O.current.modalRef=P.current,O.current.mountNode=M.current,O.current),G=()=>{b.mount(Z(),{disableScrollLock:v}),P.current&&(P.current.scrollTop=0)},z=(0,H.Z)((()=>{const e=function(e){return"function"==typeof e?e():e}(c)||(0,B.Z)(M.current).body;b.add(Z(),e),P.current&&G()})),W=i.useCallback((()=>b.isTopModal(Z())),[b]),q=(0,H.Z)((e=>{M.current=e,e&&P.current&&(F&&W()?G():j(P.current,V))})),X=i.useCallback((()=>{b.remove(Z(),V)}),[b,V]);i.useEffect((()=>()=>{X()}),[X]),i.useEffect((()=>{F?z():K&&u||X()}),[F,X,K,u,z]);const J=(0,r.Z)({},e,{closeAfterTransition:u,disableAutoFocus:d,disableEnforceFocus:f,disableEscapeKeyDown:p,disablePortal:h,disableRestoreFocus:m,disableScrollLock:v,exited:k,hideBackdrop:y,keepMounted:w}),ee=(e=>{const{open:t,exited:n}=e,r={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,s.Z)(r,function(e){const{disableDefaultClasses:t}=i.useContext(Ae);return n=>t?"":e(n)}($))})(J),te={};void 0===a.props.tabIndex&&(te.tabIndex="-1"),K&&(te.onEnter=_((()=>{T(!1),x&&x()}),a.props.onEnter),te.onExited=_((()=>{T(!0),Q&&Q(),u&&X()}),a.props.onExited));const re=null!=(o=null!=l?l:S.root)?o:"div",se=ne({elementType:re,externalSlotProps:U.root,externalForwardedProps:I,additionalProps:{ref:R,role:"presentation",onKeyDown:e=>{D&&D(e),"Escape"===e.key&&W()&&(p||(e.stopPropagation(),E&&E(e,"escapeKeyDown")))}},className:ee.root,ownerState:J}),ae=S.backdrop,ue=ne({elementType:ae,externalSlotProps:U.backdrop,additionalProps:{"aria-hidden":!0,onClick:e=>{e.target===e.currentTarget&&(C&&C(e),E&&E(e,"backdropClick"))},open:F},className:ee.backdrop,ownerState:J});return w||F||K&&!k?(0,g.jsx)(N,{ref:q,container:c,disablePortal:h,children:(0,g.jsxs)(re,(0,r.Z)({},se,{children:[!y&&ae?(0,g.jsx)(ae,(0,r.Z)({},ue)):null,(0,g.jsx)(Y,{disableEnforceFocus:f,disableAutoFocus:d,disableRestoreFocus:m,isEnabled:W,open:F,children:i.cloneElement(a,te)})]}))}):null})),ae=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ue={entering:{opacity:1},entered:{opacity:1}},le=i.forwardRef((function(e,t){const n=(0,F.Z)(),o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:s,appear:a=!0,children:u,easing:l,in:c,onEnter:d,onEntered:f,onEntering:p,onExit:h,onExited:m,onExiting:v,style:y,timeout:w=o,TransitionComponent:B=D.ZP}=e,b=(0,A.Z)(e,ae),C=i.useRef(null),U=(0,E.Z)(C,u.ref,t),S=e=>t=>{if(e){const n=C.current;void 0===t?e(n):e(n,t)}},I=S(p),k=S(((e,t)=>{x(e);const r=Q({style:y,timeout:w,easing:l},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",r),e.style.transition=n.transitions.create("opacity",r),d&&d(e,t)})),T=S(f),O=S(v),L=S((e=>{const t=Q({style:y,timeout:w,easing:l},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),h&&h(e)})),H=S(m);return(0,g.jsx)(B,(0,r.Z)({appear:a,in:c,nodeRef:C,onEnter:k,onEntered:T,onEntering:I,onExit:L,onExited:H,onExiting:O,addEndListener:e=>{s&&s(C.current,e)},timeout:w},b,{children:(e,t)=>i.cloneElement(u,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||c?void 0:"hidden"},ue[e],y,u.props.style),ref:U},t))}))}));function ce(e){return(0,p.Z)("MuiBackdrop",e)}(0,f.Z)("MuiBackdrop",["root","invisible"]);const de=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],fe=(0,l.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"}))),pe=i.forwardRef((function(e,t){var n,i,a;const u=(0,d.Z)({props:e,name:"MuiBackdrop"}),{children:l,className:c,component:f="div",components:p={},componentsProps:h={},invisible:m=!1,open:v,slotProps:y={},slots:w={},TransitionComponent:B=le,transitionDuration:b}=u,C=(0,A.Z)(u,de),E=(0,r.Z)({},u,{component:f,invisible:m}),D=(e=>{const{classes:t,invisible:n}=e,r={root:["root",n&&"invisible"]};return(0,s.Z)(r,ce,t)})(E),F=null!=(n=y.root)?n:h.root;return(0,g.jsx)(B,(0,r.Z)({in:v,timeout:b},C,{children:(0,g.jsx)(fe,(0,r.Z)({"aria-hidden":!0},F,{as:null!=(i=null!=(a=w.root)?a:p.Root)?i:f,className:(0,o.Z)(D.root,c,null==F?void 0:F.className),ownerState:(0,r.Z)({},E,null==F?void 0:F.ownerState),classes:D,ref:t,children:l}))}))})),he=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],ge=(0,l.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),me=(0,l.ZP)(pe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ve=i.forwardRef((function(e,t){var n,s,a,u,l,c;const f=(0,d.Z)({name:"MuiModal",props:e}),{BackdropComponent:p=me,BackdropProps:h,classes:m,className:v,closeAfterTransition:y=!1,children:w,component:B,components:b={},componentsProps:C={},disableAutoFocus:E=!1,disableEnforceFocus:D=!1,disableEscapeKeyDown:F=!1,disablePortal:x=!1,disableRestoreFocus:Q=!1,disableScrollLock:U=!1,hideBackdrop:S=!1,keepMounted:I=!1,slotProps:k,slots:T,theme:O}=f,L=(0,A.Z)(f,he),[H,_]=i.useState(!0),M={closeAfterTransition:y,disableAutoFocus:E,disableEnforceFocus:D,disableEscapeKeyDown:F,disablePortal:x,disableRestoreFocus:Q,disableScrollLock:U,hideBackdrop:S,keepMounted:I},P=(0,r.Z)({},f,M,{exited:H}),R=null!=(n=null!=(s=null==T?void 0:T.root)?s:b.Root)?n:ge,N=null!=(a=null!=(u=null==T?void 0:T.backdrop)?u:b.Backdrop)?a:p,K=null!=(l=null==k?void 0:k.root)?l:C.root,j=null!=(c=null==k?void 0:k.backdrop)?c:C.backdrop;return(0,g.jsx)(se,(0,r.Z)({slots:{root:R,backdrop:N},slotProps:{root:()=>(0,r.Z)({},ee(K,P),!X(R)&&{as:B,theme:O},{className:(0,o.Z)(v,null==K?void 0:K.className,null==m?void 0:m.root,!P.open&&P.exited&&(null==m?void 0:m.hidden))}),backdrop:()=>(0,r.Z)({},h,ee(j,P),{className:(0,o.Z)(null==j?void 0:j.className,null==m?void 0:m.backdrop)})},onTransitionEnter:()=>_(!1),onTransitionExited:()=>_(!0),ref:t},L,M,{children:w}))}));function ye(e){return(0,p.Z)("MuiPopover",e)}(0,f.Z)("MuiPopover",["root","paper"]);const we=["onEntering"],Be=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function be(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function Ce(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function Ee(e){return[e.horizontal,e.vertical].map((e=>"number"==typeof e?`${e}px`:e)).join(" ")}function De(e){return"function"==typeof e?e():e}const Fe=(0,l.ZP)(ve,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),xe=(0,l.ZP)(y,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Qe=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiPopover"}),{action:a,anchorEl:u,anchorOrigin:l={vertical:"top",horizontal:"left"},anchorPosition:c,anchorReference:f="anchorEl",children:p,className:h,container:m,elevation:v=8,marginThreshold:y=16,open:B,PaperProps:b={},transformOrigin:D={vertical:"top",horizontal:"left"},TransitionComponent:F=O,transitionDuration:x="auto",TransitionProps:{onEntering:Q}={}}=n,U=(0,A.Z)(n.TransitionProps,we),S=(0,A.Z)(n,Be),I=i.useRef(),k=(0,E.Z)(I,b.ref),T=(0,r.Z)({},n,{anchorOrigin:l,anchorReference:f,elevation:v,marginThreshold:y,PaperProps:b,transformOrigin:D,TransitionComponent:F,transitionDuration:x,TransitionProps:U}),L=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"]},ye,t)})(T),H=i.useCallback((()=>{if("anchorPosition"===f)return c;const e=De(u),t=(e&&1===e.nodeType?e:(0,w.Z)(I.current).body).getBoundingClientRect();return{top:t.top+be(t,l.vertical),left:t.left+Ce(t,l.horizontal)}}),[u,l.horizontal,l.vertical,c,f]),_=i.useCallback((e=>({vertical:be(e,D.vertical),horizontal:Ce(e,D.horizontal)})),[D.horizontal,D.vertical]),M=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=_(t);if("none"===f)return{top:null,left:null,transformOrigin:Ee(n)};const r=H();let A=r.top-n.vertical,i=r.left-n.horizontal;const o=A+t.height,s=i+t.width,a=C(De(u)),l=a.innerHeight-y,c=a.innerWidth-y;if(A<y){const e=A-y;A-=e,n.vertical+=e}else if(o>l){const e=o-l;A-=e,n.vertical+=e}if(i<y){const e=i-y;i-=e,n.horizontal+=e}else if(s>c){const e=s-c;i-=e,n.horizontal+=e}return{top:`${Math.round(A)}px`,left:`${Math.round(i)}px`,transformOrigin:Ee(n)}}),[u,f,H,_,y]),[P,R]=i.useState(B),N=i.useCallback((()=>{const e=I.current;if(!e)return;const t=M(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,R(!0)}),[M]);i.useEffect((()=>{B&&N()})),i.useImperativeHandle(a,(()=>B?{updatePosition:()=>{N()}}:null),[B,N]),i.useEffect((()=>{if(!B)return;const e=function(e,t=166){let n;function r(...r){clearTimeout(n),n=setTimeout((()=>{e.apply(this,r)}),t)}return r.clear=()=>{clearTimeout(n)},r}((()=>{N()})),t=C(u);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[u,B,N]);let K=x;"auto"!==x||F.muiSupportAuto||(K=void 0);const j=m||(u?(0,w.Z)(De(u)).body:void 0);return(0,g.jsx)(Fe,(0,r.Z)({BackdropProps:{invisible:!0},className:(0,o.Z)(L.root,h),container:j,open:B,ref:t,ownerState:T},S,{children:(0,g.jsx)(F,(0,r.Z)({appear:!0,in:B,onEntering:(e,t)=>{Q&&Q(e,t),N()},onExited:()=>{R(!1)},timeout:K},U,{children:(0,g.jsx)(xe,(0,r.Z)({elevation:v},b,{ref:k,className:(0,o.Z)(L.paper,b.className)},P?void 0:{style:(0,r.Z)({},b.style,{opacity:0})},{ownerState:T,children:p}))}))}))}));function Ue(e){return(0,p.Z)("MuiMenu",e)}(0,f.Z)("MuiMenu",["root","paper","list"]);const Se=["onEntering"],Ie=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],ke={vertical:"top",horizontal:"right"},Te={vertical:"top",horizontal:"left"},Oe=(0,l.ZP)(Qe,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Le=(0,l.ZP)(y,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),He=(0,l.ZP)(a.Z,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),_e=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiMenu"}),{autoFocus:a=!0,children:u,disableAutoFocusItem:l=!1,MenuListProps:c={},onClose:f,open:p,PaperProps:h={},PopoverClasses:m,transitionDuration:v="auto",TransitionProps:{onEntering:y}={},variant:w="selectedMenu"}=n,B=(0,A.Z)(n.TransitionProps,Se),b=(0,A.Z)(n,Ie),C=(0,F.Z)(),E="rtl"===C.direction,D=(0,r.Z)({},n,{autoFocus:a,disableAutoFocusItem:l,MenuListProps:c,onEntering:y,PaperProps:h,transitionDuration:v,TransitionProps:B,variant:w}),x=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"],list:["list"]},Ue,t)})(D),Q=a&&!l&&p,U=i.useRef(null);let S=-1;return i.Children.map(u,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===w&&e.props.selected||-1===S)&&(S=t))})),(0,g.jsx)(Oe,(0,r.Z)({onClose:f,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?ke:Te,PaperProps:(0,r.Z)({as:Le},h,{classes:(0,r.Z)({},h.classes,{root:x.paper})}),className:x.root,open:p,ref:t,transitionDuration:v,TransitionProps:(0,r.Z)({onEntering:(e,t)=>{U.current&&U.current.adjustStyleForScrollbar(e,C),y&&y(e,t)}},B),ownerState:D},b,{classes:m,children:(0,g.jsx)(He,(0,r.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),f&&f(e,"tabKeyDown"))},actions:U,autoFocus:a&&(-1===S||l),autoFocusItem:Q,variant:w},c,{className:(0,o.Z)(x.list,c.className),children:u}))}))}))},44636:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ue});var r=n(30808),A=n(25773),i=n(84390),o=n.n(i),s=n(38944),a=n(82267),u=n(7818),l=n(87387),c=n(78580),d=n(78849),f=n(51183);const p=n(81925).Z;let h,g=!0,m=!1;const v={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function y(e){e.metaKey||e.altKey||e.ctrlKey||(g=!0)}function w(){g=!1}function B(){"hidden"===this.visibilityState&&m&&(g=!0)}const b=function(){const e=i.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",y,!0),t.addEventListener("mousedown",w,!0),t.addEventListener("pointerdown",w,!0),t.addEventListener("touchstart",w,!0),t.addEventListener("visibilitychange",B,!0))}),[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return g||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!v[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(m=!0,window.clearTimeout(h),h=window.setTimeout((()=>{m=!1}),100),t.current=!1,!0)},ref:e}};var C=n(47169),E=n(93219),D=n(16897);function F(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function x(e,t,n){return null!=n[t]?n[t]:e.props[t]}function Q(e,t,n){var r=F(e.children),A=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,A=Object.create(null),i=[];for(var o in e)o in t?i.length&&(A[o]=i,i=[]):i.push(o);var s={};for(var a in t){if(A[a])for(r=0;r<A[a].length;r++){var u=A[a][r];s[A[a][r]]=n(u)}s[a]=n(a)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}(t,r);return Object.keys(A).forEach((function(o){var s=A[o];if((0,i.isValidElement)(s)){var a=o in t,u=o in r,l=t[o],c=(0,i.isValidElement)(l)&&!l.props.in;!u||a&&!c?u||!a||c?u&&a&&(0,i.isValidElement)(l)&&(A[o]=(0,i.cloneElement)(s,{onExited:n.bind(null,s),in:l.props.in,exit:x(s,"exit",e),enter:x(s,"enter",e)})):A[o]=(0,i.cloneElement)(s,{in:!1}):A[o]=(0,i.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:x(s,"exit",e),enter:x(s,"enter",e)})}})),A}var U=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},S=function(e){function t(t,n){var r,A=(r=e.call(this,t,n)||this).handleExited.bind((0,C.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:A,firstRender:!0},r}(0,E.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,A=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,r=o,F(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:x(e,"appear",n),enter:x(e,"enter",n),exit:x(e,"exit",n)})}))):Q(e,A,o),firstRender:!1}},n.handleExited=function(e,t){var n=F(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,A.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,A=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,s=U(this.state.children).map(n);return delete A.appear,delete A.enter,delete A.exit,null===t?o().createElement(D.Z.Provider,{value:i},s):o().createElement(D.Z.Provider,{value:i},o().createElement(t,A,s))},t}(o().Component);S.propTypes={},S.defaultProps={component:"div",childFactory:function(e){return e}};const I=S;var k=n(85939),T=n(24246);var O=n(44124);const L=(0,O.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),H=["center","classes","className"];let _,M,P,R,N=e=>e;const K=(0,k.keyframes)(_||(_=N`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),j=(0,k.keyframes)(M||(M=N`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),V=(0,k.keyframes)(P||(P=N`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Z=(0,l.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),G=(0,l.ZP)((function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:A,rippleY:o,rippleSize:a,in:u,onExited:l,timeout:c}=e,[d,f]=i.useState(!1),p=(0,s.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),h={width:a,height:a,top:-a/2+o,left:-a/2+A},g=(0,s.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||f(!0),i.useEffect((()=>{if(!u&&null!=l){const e=setTimeout(l,c);return()=>{clearTimeout(e)}}}),[l,u,c]),(0,T.jsx)("span",{className:p,style:h,children:(0,T.jsx)("span",{className:g})})}),{name:"MuiTouchRipple",slot:"Ripple"})(R||(R=N`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
//# sourceMappingURL=7781.03cb2ee6dd1ee5549d04.js.map