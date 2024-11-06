/*! For license information please see 6354.b219d41ca550bffdc27d.js.LICENSE.txt */
(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[6354,3487],{99073:(e,t,n)=>{"use strict";n.d(t,{nq:()=>m,ms:()=>x,tZ:()=>E,F4:()=>D});n(93219);var A=n(84390),r=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,n=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var A=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(A);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);r.insertRule(e,i?0:r.cssRules.length)}catch(e){}}else A.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=n(96612),o="/*|*/",a=o+"}";function s(e){e&&u.current.insert(e+"}")}var u={current:null},c=function(e,t,n,A,r,i,c,l,d,f){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return u.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===l)return t+o;break;case 3:switch(l){case 102:case 112:return u.current.insert(n[0]+t),"";default:return t+(0===f?o:"")}case-2:t.split(a).forEach(s)}};function l(e,t,n){var A="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):A+=n+" "})),A}var d=function(e,t,n){var A=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[A]&&(e.registered[A]=t.styles),void 0===e.inserted[t.name]){var r=t;do{e.insert("."+A,r,e.sheet,!0),r=r.next}while(void 0!==r)}},f=n(47989),p=Object.prototype.hasOwnProperty,h=(0,A.createContext)("undefined"!=typeof HTMLElement?function(e){void 0===e&&(e={});var t,n=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var A,o=new i.Z(t),a={};A=e.container||document.head;var s,l=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(l,(function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach((function(e){a[e]=!0})),e.parentNode!==A&&A.appendChild(e)})),o.use(e.stylisPlugins)(c),s=function(e,t,n,A){var r=t.name;u.current=n,o(e,t.styles),A&&(d.inserted[r]=!0)};var d={key:n,sheet:new r({key:n,container:A,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:a,registered:{},insert:s};return d}():null),g=(0,A.createContext)({}),m=h.Provider,v=function(e){var t=function(t,n){return(0,A.createElement)(h.Consumer,null,(function(A){return e(t,A,n)}))};return(0,A.forwardRef)(t)},y="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",B=function(){return null},w=function(e,t,n,r){var i=null===n?t.css:t.css(n);"string"==typeof i&&void 0!==e.registered[i]&&(i=e.registered[i]);var o=t[y],a=[i],s="";"string"==typeof t.className?s=l(e.registered,a,t.className):null!=t.className&&(s=t.className+" ");var u=(0,f.O)(a);d(e,u,"string"==typeof o),s+=e.key+"-"+u.name;var c={};for(var h in t)p.call(t,h)&&"css"!==h&&h!==y&&(c[h]=t[h]);c.ref=r,c.className=s;var g=(0,A.createElement)(o,c),m=(0,A.createElement)(B,null);return(0,A.createElement)(A.Fragment,null,m,g)},C=v((function(e,t,n){return"function"==typeof e.css?(0,A.createElement)(g.Consumer,null,(function(A){return w(t,e,A,n)})):w(t,e,null,n)})),b=n(34086),E=function(e,t){var n=arguments;if(null==t||!p.call(t,"css"))return A.createElement.apply(void 0,n);var r=n.length,i=new Array(r);i[0]=C,i[1]=function(e,t){var n={};for(var A in t)p.call(t,A)&&(n[A]=t[A]);return n[y]=e,n}(e,t);for(var o=2;o<r;o++)i[o]=n[o];return A.createElement.apply(null,i)},D=(A.Component,function(){var e=b.Z.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}),F=function e(t){for(var n=t.length,A=0,r="";A<n;A++){var i=t[A];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var a in o="",i)i[a]&&a&&(o&&(o+=" "),o+=a);break;default:o=i}o&&(r&&(r+=" "),r+=o)}}return r},Q=function(){return null},x=v((function(e,t){return(0,A.createElement)(g.Consumer,null,(function(n){var r=function(){for(var e=arguments.length,n=new Array(e),A=0;A<e;A++)n[A]=arguments[A];var r=(0,f.O)(n,t.registered);return d(t,r,!1),t.key+"-"+r.name},i={css:r,cx:function(){for(var e=arguments.length,n=new Array(e),A=0;A<e;A++)n[A]=arguments[A];return function(e,t,n){var A=[],r=l(e,A,n);return A.length<2?n:r+t(A)}(t.registered,r,F(n))},theme:n},o=e.children(i),a=(0,A.createElement)(Q,null);return(0,A.createElement)(A.Fragment,null,a,o)}))}))},34086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var A=n(47989);const r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,A.O)(t)}},47989:(e,t,n)=>{"use strict";n.d(t,{O:()=>h});const A=function(e){for(var t,n=0,A=0,r=e.length;r>=4;++A,r-=4)t=1540483477*(65535&(t=255&e.charCodeAt(A)|(255&e.charCodeAt(++A))<<8|(255&e.charCodeAt(++A))<<16|(255&e.charCodeAt(++A))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(r){case 3:n^=(255&e.charCodeAt(A+2))<<16;case 2:n^=(255&e.charCodeAt(A+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(A)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)};var r,i=n(84380),o=/[A-Z]|^ms/g,a=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},c=(r={},function(e){return void 0===r[e]&&(r[e]=s(t=e)?t:t.replace(o,"-$&").toLowerCase()),r[e];var t}),l=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(a,(function(e,t,n){return f={name:t,styles:n,next:f},t}))}return 1===i.Z[e]||s(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,n,A){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return f={name:n.name,styles:n.styles,next:f},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)f={name:r.name,styles:r.styles,next:f},r=r.next;return n.styles+";"}return function(e,t,n){var A="";if(Array.isArray(n))for(var r=0;r<n.length;r++)A+=d(e,t,n[r],!1);else for(var i in n){var o=n[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?A+=i+"{"+t[o]+"}":u(o)&&(A+=c(i)+":"+l(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var a=d(e,t,o,!1);switch(i){case"animation":case"animationName":A+=c(i)+":"+a+";";break;default:A+=i+"{"+a+"}"}}else for(var s=0;s<o.length;s++)u(o[s])&&(A+=c(i)+":"+l(i,o[s])+";")}return A}(e,t,n);case"function":if(void 0!==e){var i=f,o=n(e);return f=i,d(e,t,o,A)}}if(null==t)return n;var a=t[n];return void 0===a||A?n:a}var f,p=/label:\s*([^\s;\n{]+)\s*;/g,h=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";f=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,i+=d(n,t,o,!1)):i+=o[0];for(var a=1;a<e.length;a++)i+=d(n,t,e[a],46===i.charCodeAt(i.length-1)),r&&(i+=o[a]);p.lastIndex=0;for(var s,u="";null!==(s=p.exec(i));)u+="-"+s[1];return{name:A(i)+u,styles:i,next:f}}},66842:(e,t,n)=>{"use strict";n.d(t,{EY:()=>s});var A=Array.prototype.indexOf,r={};function i(e,t){var n=" ";return 0===A.call(t.parentNode.childNodes,t)&&(n="| "),n+(e=(e=e.replace(/\r\n/g,"\n").replace(/\n/g," ")).replace(/\|/g,"\\|"))+" |"}function o(e,t){var n=e.getAttribute("colspan")||1;return n<=1?"":(" "+t+" |").repeat(n-1)}function a(e){for(var t=e.parentNode;t;){if("TABLE"===t.nodeName)return!0;t=t.parentNode}return!1}function s(e){for(var t in e.keep((function(e){return"TABLE"===e.nodeName&&a(e)})),r)e.addRule(t,r[t])}r.tableCell={filter:["th","td"],replacement:function(e,t){return i(e,t)+o(t,"")}},r.tableRow={filter:"tr",replacement:function(e,t){var n,A,r,a="",s={left:":--",right:"--:",center:":-:"};if(A=(n=t).parentNode,r=A,"THEAD"!==A.nodeName&&"TFOOT"!==A.nodeName&&"TBODY"!==A.nodeName||(r=A.parentNode),"TABLE"===r.nodeName&&r.rows[0]===n)for(var u=0;u<t.childNodes.length;u++){var c="---",l=(t.childNodes[u].getAttribute("align")||"").toLowerCase();l&&(c=s[l]||c),a+=i(c,t.childNodes[u])+o(t.childNodes[u],c)}return"\n"+e+(a?"\n"+a:"")}},r.table={filter:function(e){return"TABLE"===e.nodeName&&!a(e)},replacement:function(e){return"\n\n"+(e=e.replace("\n\n","\n"))+"\n\n"}},r.tableSection={filter:["thead","tbody","tfoot"],replacement:function(e){return e}},r.captionSection={filter:"caption",replacement:function(e,t){return"TABLE"===t.parentNode.nodeName&&t.parentNode.childNodes[0]===t?e:""}}},69383:(e,t,n)=>{"use strict";n.d(t,{LR:()=>s,Sb:()=>o,IM:()=>d,wr:()=>c,vG:()=>a,ZP:()=>m});var A=n(84390),r=n.n(A),i=n(15710);const o=100,a=["h1","h2","h3","h4","h5","h6"],s={h1:800,h2:700,h3:600,h4:500,h5:400,h6:300},u=[0,25,50,75,100,200,300,400,500,600,700,800,900,1e3],c={0:{size:8,lineHeight:14},25:{size:10,lineHeight:16},50:{size:11,lineHeight:16},75:{size:12,lineHeight:16},100:{size:14,lineHeight:20},200:{size:16,lineHeight:24},300:{size:18,lineHeight:24},400:{size:20,lineHeight:28},500:{size:22,lineHeight:28},600:{size:25,lineHeight:30},700:{size:28,lineHeight:36},800:{size:32,lineHeight:40},900:{size:36,lineHeight:44},1e3:{size:40,lineHeight:48}};u.forEach((e=>{c[e].marginTop=i.cQ.getFontMargin(c[e].size,8/9),c[e].marginBottom=i.cQ.getFontMargin(c[e].size,.5)}));const l="h6",d="bold",f="both",p="inherit";var h=n(85939);const g=n.n(h)().h6.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e)&&t(e)})((({theme:e,inheritLineHeight:t,color:n,margin:A,size:r,weight:o})=>h.css`
        ${(({inheritLineHeight:e,size:t,weight:n})=>h.css`
    font-family: ${i.bH.heading};
    ${n?h.css`
              font-weight: ${i.Os[n]};
          `:null};
    ${i.cQ.isNumber(t)?h.css`
              font-size: ${c[t].size}px;
              line-height: ${e?"inherit":`${c[t].lineHeight}px`};
          `:null};
`)({inheritLineHeight:t,size:r,weight:o})};
        ${(({color:e,theme:t})=>"inherit"===e?h.css`
            color: inherit;
        `:i.cQ.isColor(e)?h.css`
            color: ${e};
        `:h.css`
        color: ${(null==t?void 0:t.text[e])||"inherit"};
    `)({color:n,theme:e})};
        ${(({margin:e,size:t})=>{if(!e||!t)return null;let n=`${c[t].marginTop}px 0 ${c[t].marginBottom}px`;switch(e){case"none":n="0";break;case"bottom":n=`0 0 ${c[t].marginBottom}px`;break;case"top":n=`${c[t].marginTop}px 0 0`}return h.css`
        margin: ${n};
    `})({margin:A,size:r})};

        // animation
        body.enable-animations & {
            transition: color ${e.animation.fastest} 0s ease-in-out;
        }
    `));const m=e=>{var{inheritLineHeight:t=!1,color:n=p,element:A=l,margin:s=f,size:c=o,weight:h=d}=e,m=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n}(e,["inheritLineHeight","color","element","margin","size","weight"]);i.cQ.assert(a.includes(A)||r().isValidElement(A),`Compass Components: Heading component was used with an unsupported element '${A}'.\n                Please provide one from these available options: ${a.join(", ")}, or a valid \`ReactElement\`.`),i.cQ.assert(i.YS.includes(n)||i.cQ.isColor(n),`Compass Components - Heading: component was used with an unsupported color '${n}'.\n            Please provide one from these available options: ${i.YS.join(", ")}, or a valid CSS color value`,!0),i.cQ.assert(u.includes(c),`Compass Components - Heading: component was used with an unsupported size '${c}'.\n            Please provide one from these available options: ${u.join(", ")}.`,!0),i.cQ.assert(i.M9.includes(s),`Compass Components - Heading: component was used with an unsupported margin '${s}'.\n            Please provide one from these available options: ${i.M9.join(", ")}.`,!0),i.cQ.assert(i.Xw.includes(h),`Compass Components - Heading: component was used with an unsupported weight '${h}'.\n            Please provide one from these available options: ${i.Xw.join(", ")}.`,!0);const v=Object.assign({inheritLineHeight:t,color:n,margin:s,size:c,weight:h},m);return r().createElement(g,Object.assign({as:A},v))}},48332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>y});var A=n(84390),r=n.n(A),i=n(62329),o=n(15710);const a="md",s="button",u={xs:{compactSpacing:50,spacing:75,iconSize:12,fontSize:75},sm:{compactSpacing:75,spacing:100,iconSize:16,fontSize:100},md:{compactSpacing:100,spacing:125,iconSize:20,fontSize:100},lg:{compactSpacing:100,spacing:125,iconSize:28,fontSize:200}};var c=n(85939),l=n.n(c),d=n(15535),f=n(26621);const p={0:{offsetY:0,blurRadius:0},1:{offsetY:2,blurRadius:3},2:{offsetY:4,blurRadius:6},3:{offsetY:6,blurRadius:14},4:{offsetY:8,blurRadius:24},5:{offsetY:12,blurRadius:32},6:{offsetY:20,blurRadius:32}},h=[0,2,4,8,12,16,20,24,"circle","pill"],g=function({width:e,height:t,radius:n=4}){const A=o.cQ.isString(n)?n:"rectangle";"circle"===A&&o.cQ.assert(o.cQ.isNumber(e),"applyShape: When choosing `circle` as value for `radius` the width needs to be of type `number`"),o.cQ.assert(h.includes(n),`applyShape: Please provide a \`radius\` value that meets the requirement. Valid options are: ${h.join(", ")}.`);const r={rectangle:`${n}px`,circle:"50%",pill:"1000px"};return"circle"===A&&o.cQ.isNumber(e)&&e>=0?c.css`
            border-radius: ${r[A]};

            width: ${o.cQ.getPxValue(e)};
            height: ${o.cQ.getPxValue(e)};

            flex-basis: ${o.cQ.getPxValue(e)}; // adding this in for flex: 0 elements
        `:c.css`
        border-radius: ${r[A]};

        ${e?c.css`
                  width: ${o.cQ.getPxValue(e)};
                  flex-basis: ${o.cQ.getPxValue(e)};
              `:null};
        height: ${t?o.cQ.getPxValue(t):null};
    `};l().div.withConfig({shouldForwardProp:(e,t)=>o.cQ.blockProperty(e,["width","height","radius","elevation","element"])&&t(e)})((({radius:e,elevation:t,elevationOnHover:n,width:A,height:r,theme:i,padding:o,margin:a,backgroundColor:s=i.background.shape})=>c.css`
        display: flex;
        background-color: ${s};

        ${g({width:A,height:r,radius:e})};
        ${function({elevation:e=0,elevationOnHover:t=e},n){if(0===e&&0===t)return null;const{offsetY:A,blurRadius:r}=p[e],i=n?.32:.08;if(e!==t){const{offsetY:n,blurRadius:o}=p[t];return c.css`
            box-shadow: 0 ${A}px ${r}px rgba(0, 0, 0, ${i});
            z-index: ${e||0};

            &:hover {
                box-shadow: 0 ${n}px ${o}px rgba(0, 0, 0, ${i});
            }
        `}return c.css`
        box-shadow: 0 ${A}px ${r}px rgba(0, 0, 0, ${i});
        z-index: ${e||0};
    `}({elevation:t,elevationOnHover:n},"dark"===i.type)};

        ${o&&(0,f.Og)(o)};
        ${a&&(0,f.P3)(a)};
    `));var m=n(26603);const v=l().button.withConfig({shouldForwardProp:(e,t)=>o.cQ.blockProperty(e)&&t(e)})((({size:e,compact:t,inverted:n,toggled:A,active:r,destructive:i,disabled:a,theme:{palette:s,action:l,text:p,animation:h,noStyleReset:v}})=>{const y=!n&&!i&&!A,{main:B,contrast:w}=i&&!A?s.alert:s.primary,{spacing:C,compactSpacing:b,fontSize:E}=u[e],D={background:B,text:A?w:p.primary},F={background:{default:A?1:0,hover:A?.92:.08,active:n?.16:.08},text:{default:A?1:.56,hover:A?1:.72,active:1}};n&&(D.background=w,D.text=A?B:w),i&&!A&&(D.background=B,D.text=n?w:B,F.background.hover=n?.8:.08,F.background.active=n?1:.16),a&&(D.text=l.disabled,F.background.default=0,F.text.default=.32);const Q=c.css`
            background: ${(0,o.uK)(D.background,F.background.active)};
            color: ${(0,o.uK)(n?w:B,F.text.active)};
        `,x=a?c.css`
                  cursor: not-allowed;
              `:c.css`
                  :hover {
                      background: ${(0,o.uK)(y?l.hover:D.background,F.background.hover)};
                      color: ${(0,o.uK)(D.text,F.text.hover)};
                  }

                  :active {
                      ${Q};
                  }

                  &:focus {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${i?s.alert.main:B};
                  }

                  &:focus:not(:focus-visible) {
                      box-shadow: none;
                  }

                  &:focus-visible {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${i?s.alert.main:B};
                  }
              `;return c.css`
            ${v&&d.P}

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            color: ${(0,o.uK)(D.text,F.text.default)};
            background: ${(0,o.uK)(D.background,F.background.default)};

            ${g({radius:4})};
            ${(0,f.Og)(f.ZP.all(t?b:C))};

            span {
                ${(0,f.P3)(f.ZP.only("left",75))};
                ${(0,m.R1)({size:E,weight:"bold",inheritLineHeight:!0})};
            }

            ${x};

            ${r&&Q}

            transition: background ${h.fast} ease-in-out,
                color ${h.fast} ease-in-out, box-shadow ${h.fast} ease-in-out;
        `}));const y=r().forwardRef(((e,t)=>{var{icon:n,element:A=s,size:c=a,compact:l=!1,inverted:d=!1,toggled:f=!1,active:p=!1,destructive:h=!1,disabled:g=!1,label:m,onClick:y}=e,B=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n}(e,["icon","element","size","compact","inverted","toggled","active","destructive","disabled","label","onClick"]);o.cQ.assert(!h&&!f||h&&!f||f&&!h,"Compass Components: IconButton component was used with both `destructive` and `toggled` properties set to true. Please use only one of the options",!0);const w={size:c,compact:l,inverted:d,toggled:f,active:p,destructive:h,disabled:g||!o.cQ.isFunction(y),onClick:y};return r().createElement(v,Object.assign({ref:t,as:A},w,B),r().createElement(i.ZP,{glyph:n,size:u[c].iconSize}),m&&r().createElement("span",null,m))}))},72137:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>d});var A=n(84390),r=n.n(A);const i="md",o={xs:10,sm:12,md:16,lg:20,xl:32};var a=n(85939),s=n.n(a),u=n(62329),c=n(15710);const l=s()(u.ZP).withConfig({shouldForwardProp:(e,t)=>c.cQ.forceForwardProperty(e,["glyph","size"])||c.cQ.blockProperty(e)&&t(e)})((({theme:e,status:t})=>a.css`
        color: ${e.badges[t]};
    `));const d=e=>{var{status:t,size:n=i}=e,A=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n}(e,["status","size"]);let a="circle-outline";switch(t){case"away":a="clock";break;case"dnd":a="minus-circle";break;case"online":a="check-circle"}const s=Object.assign({status:t,glyph:a,size:o[n]},A);return r().createElement(l,Object.assign({},s))}},26603:(e,t,n)=>{"use strict";n.d(t,{Z2:()=>a,lG:()=>l,nn:()=>h,R1:()=>m,ZP:()=>y});var A=n(84390),r=n.n(A),i=n(15710);const o=[25,50,75,100,200,300],a=100,s=["p","span","label"],u="p",c=["light","regular","bold"],l="regular",d=["none","both","bottom","top"],f="both",p="inherit",h={25:{size:10,lineHeight:16},50:{size:11,lineHeight:16},75:{size:12,lineHeight:16},100:{size:14,lineHeight:20},200:{size:16,lineHeight:24},300:{size:18,lineHeight:28}};o.forEach((e=>{h[e].margin=i.cQ.getFontMargin(h[e].size,.75)}));var g=n(85939);const m=({inheritLineHeight:e=!1,size:t=a,weight:n=l})=>{const A=e?"inherit":`${h[t].lineHeight}px`;return g.css`
        font-family: ${i.bH.body};
        font-weight: ${i.Os[n]};
        font-size: ${h[t].size}px;
        line-height: ${A};
    `},v=n.n(g)().p.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e,["color","size"])&&t(e)})((({theme:e,inheritLineHeight:t,color:n,margin:A,size:r,weight:o})=>g.css`
        ${m({inheritLineHeight:t,size:r,weight:o})};
        ${(({color:e,theme:t})=>"inherit"===e?g.css`
            color: inherit;
        `:i.cQ.isColor(e)?g.css`
            color: ${e};
        `:g.css`
        color: ${(null==t?void 0:t.text[e])||"inherit"};
    `)({color:n,theme:e})};
        ${(({margin:e=f,size:t=a})=>{if("none"===e)return g.css`
            margin: 0;
        `;let n=`${h[t].margin}px 0`;switch(e){case"bottom":n=`0 0 ${h[t].margin}px`;break;case"top":n=`${h[t].margin}px 0 0`}return g.css`
        margin: ${n};
    `})({margin:A,size:r})};

        body.enable-animations & {
            transition: color ${e.animation.fastest} 0s ease-in-out;
        }
    `));const y=e=>{var{inheritLineHeight:t=!1,color:n=p,element:A=u,margin:h=f,size:g=a,weight:m=l}=e,y=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n}(e,["inheritLineHeight","color","element","margin","size","weight"]);i.cQ.assert(s.includes(A)||r().isValidElement(A),`Compass Components - Text: component was used with an unsupported element '${A}'.\n            Please provide one from these available options: ${s.join(", ")}, or a valid \`ReactElement\``,!0),i.cQ.assert(i.YS.includes(n)||i.cQ.isColor(n),`Compass Components - Text: component was used with an unsupported color '${n}'.\n            Please provide one from these available options: ${c.join(", ")}, or a valid CSS color value`,!0),i.cQ.assert(o.includes(g),`Compass Components - Text: component was used with an unsupported size '${g}'.\n            Please provide one from these available options: ${o.join(", ")}.`,!0),i.cQ.assert(d.includes(h),`Compass Components - Text: component was used with an unsupported margin '${h}'.\n            Please provide one from these available options: ${d.join(", ")}.`,!0),i.cQ.assert(c.includes(m),`Compass Components - Text: component was used with an unsupported weight '${m}'.\n            Please provide one from these available options: ${c.join(", ")}.`,!0);const B=Object.assign({inheritLineHeight:t,color:n,margin:h,size:g,weight:m},y);return r().createElement(v,Object.assign({as:A},B))}},97387:(e,t,n)=>{"use strict";n.d(t,{iN:()=>A,ek:()=>r,QN:()=>i,n$:()=>o,$y:()=>a,jk:()=>s,Q6:()=>u,$C:()=>c,er:()=>l});const A={100:"rgb(165, 190, 243)",200:"rgb(129, 163, 239)",300:"rgb(93, 137, 234)",400:"rgb(56, 111, 229)",500:"rgb(28, 88, 217)",600:"rgb(23, 73, 181)",700:"rgb(19, 59, 144)",800:"rgb(14, 44, 108)"},r={100:"rgb(179, 230, 209)",200:"rgb(148, 219, 191)",300:"rgb(117, 209, 172)",400:"rgb(87, 199, 154)",500:"rgb(61, 184, 135)",600:"rgb(51, 153, 112)",700:"rgb(41, 122, 90)",800:"rgb(31, 92, 67)"},i={100:"rgb(116, 146, 210)",200:"rgb(60, 100, 185)",300:"rgb(50, 83, 154)",400:"rgb(40, 66, 123)",500:"rgb(30, 50, 92)",600:"rgb(20, 33, 62)",700:"rgb(15, 25, 46)",800:"rgb(10, 17, 31)"},o={0:"rgb(255, 255, 255)",50:"rgb(244, 244, 246)",100:"rgb(232, 233, 237)",150:"rgb(221, 223, 228)",200:"rgb(209, 212, 219)",250:"rgb(198, 201, 210)",300:"rgb(186, 190, 201)",350:"rgb(175, 179, 192)",400:"rgb(164, 169, 183)",450:"rgb(152, 158, 174)",500:"rgb(141, 147, 165)",550:"rgb(129, 136, 156)",600:"rgb(118, 125, 147)",650:"rgb(108, 115, 137)",700:"rgb(99, 105, 126)",750:"rgb(90, 96, 114)",800:"rgb(81, 86, 103)",850:"rgb(72, 77, 91)",900:"rgb(63, 67, 80)",950:"rgb(54, 58, 69)",1e3:"rgb(45, 48, 57)",1050:"rgb(36, 38, 46)",1100:"rgb(27, 29, 34)",1150:"rgb(18, 19, 23)",1200:"rgb(9, 10, 11)",1250:"rgb(0, 0, 0)"},a={100:"rgb(246, 201, 162)",200:"rgb(243, 180, 124)",300:"rgb(239, 158, 87)",400:"rgb(236, 137, 50)",500:"rgb(224, 116, 21)",600:"rgb(187, 96, 17)",700:"rgb(149, 77, 14)",800:"rgb(112, 58, 10)"},s={100:"rgb(183, 186, 225)",200:"rgb(154, 158, 213)",300:"rgb(126, 131, 201)",400:"rgb(97, 103, 189)",500:"rgb(72, 79, 173)",600:"rgb(60, 66, 144)",700:"rgb(48, 53, 115)",800:"rgb(36, 39, 86)"},u={100:"rgb(235, 173, 174)",200:"rgb(226, 141, 142)",300:"rgb(218, 108, 110)",400:"rgb(210, 75, 78)",500:"rgb(196, 49, 51)",600:"rgb(163, 41, 43)",700:"rgb(131, 33, 34)",800:"rgb(98, 24, 26)"},c={100:"rgb(164, 244, 244)",200:"rgb(127, 240, 240)",300:"rgb(91, 236, 236)",400:"rgb(54, 231, 231)",500:"rgb(26, 219, 219)",600:"rgb(21, 183, 183)",700:"rgb(17, 146, 146)",800:"rgb(13, 110, 110)"},l={100:"rgb(255, 224, 153)",200:"rgb(255, 212, 112)",300:"rgb(255, 200, 71)",400:"rgb(255, 188, 31)",500:"rgb(245, 171, 0)",600:"rgb(204, 143, 0)",700:"rgb(163, 114, 0)",800:"rgb(122, 86, 0)"}},62329:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>g});var A=n(84390),r=n.n(A),i=n(15710),o=n(85939),a=n.n(o),s=n(13693);const u=20,c={8:10,10:12,12:14,16:18,20:24,28:31,32:36,40:48,52:60,64:72,104:120},l=["none",...s.Z.map((e=>e))],d="mattermost",f="inherit";function p({size:e}){return o.css`
        height: ${e}px;
        width: ${e}px;

        &::before {
            font-size: ${c[e]}px;
            letter-spacing: ${c[e]}px;
        }
    `}const h=a().i.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e)&&t(e)})((({theme:e,color:t})=>o.css`
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
            font-size: ${c[u]}px;
            line-height: 1;
            letter-spacing: ${c[u]}px;
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
    `));const g=e=>{var{glyph:t=d,size:n=u,color:A=f,className:o=""}=e,a=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n}(e,["glyph","size","color","className"]);i.cQ.assert(l.includes(t),`Compass Components - Icon: please provide a valid option for the \`iconGlyph\` property. Choose from the following: ${l.join(", ")}.`);const s={size:n,color:A,glyph:t,className:`${o} icon-${t}`};return r().createElement(h,Object.assign({},s,a))}},15710:(e,t,n)=>{"use strict";n.d(t,{YS:()=>l,M9:()=>c,bH:()=>a,Xw:()=>s,Os:()=>u,cQ:()=>g,uK:()=>y});var A=n(59139),r=n.n(A),i=n(14206),o=n.n(i);const a={body:"Open Sans, sans-serif",heading:"Metropolis, sans-serif"},s=["light","regular","bold"],u={light:300,regular:400,bold:600},c=["none","both","bottom","top"],l=["primary","secondary","disabled","inherit"],d=["children","className","disabled","role","selected","type","onClick","checked","defaultChecked"],f=e=>"number"==typeof e,p=e=>"function"==typeof e;class h extends Error{constructor(e){super(e),this.name="CompassError"}}const g={warn:function(e,...t){console.warn(e,...t)},assert:function(e,t,n=!1){if(!e){if(n)return void console.warn(t);throw new h(t)}},clamp:function(e,t=0,n=1){if(e<t||e>n)throw new Error(`Compass Components: The value provided ${e} is out of range [${t}, ${n}].`);return Math.min(Math.max(t,e),n)},isColor:function(e){const t=(new Option).style;return t.color=e,t.color===e},isNumber:f,isFunction:p,isString:e=>"string"==typeof e,isFunctionalComponent:e=>p(e)&&!(e.prototype&&e.prototype.isReactComponent),blockProperty:(e,t=[])=>e.toString().startsWith("data-")||e.toString().startsWith("aria-")||d.includes(e.toString())||!t.includes(e.toString()),forceForwardProperty:(e,t=[])=>t.includes(e.toString()),getBase64:function(e){return o().get(e,{responseType:"arraybuffer"}).then((e=>{const t=Buffer.from(e.data,"binary").toString("base64");return`data:${e.headers["content-type"]};base64,${t}`}))},getStoryDocumentationUrl:function(e){const t=e.title.split("/").map((e=>r()(e))).join("-");return 0===e.includeStories.length?`/?path=/docs/${t}--page`:`/?path=/docs/${t}--${r()(e.includeStories[0])}`},hideComponentProperties:function(e=[]){return e.reduce(((e,t)=>Object.assign(e,{[t]:{table:{disable:!0}}})),{forwardedAs:{table:{disable:!0}},theme:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}})},getFontMargin:(e,t)=>Math.max(4*Math.round(e*t/4),8),getPxValue:e=>f(e)?`${e}px`:e,noop:function(){}},m=["rgb","rgba","hsl","hsla"];function v(e){if("#"===e.charAt(0))return v(function(e){const t=e.slice(1),n=new RegExp(`.{1,${t.length>=6?2:1}}`,"gu");let A=t.match(n);return A&&1===A[0].length&&(A=A.map((e=>e+e))),A?`rgb${4===A.length?"a":""}(${A.map(((e,t)=>t<3?Number.parseInt(e,16):Math.round(Number.parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),n=e.slice(0,Math.max(0,t));if(!m.includes(n))throw new Error("Compass Components: Unsupported `%s` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().");return{type:n,values:e.slice(t+1,-1).split(",").map((e=>Number.parseFloat(e)))}}function y(e,t){const n=v(e),A=g.clamp(t);return"rgb"!==n.type&&"hsl"!==n.type||(n.type+="a"),n.values[3]=A,function(e){const{type:t,values:n}=e;let A=n;return t.includes("rgb")?A=n.map(((e,t)=>t<3?Number.parseInt(e.toString(),10):e)):t.includes("hsl")&&(A[1]=`${n[1]}%`,A[2]=`${n[2]}%`),`${t}(${A.join(", ")})`}(n)}n(97387),n(84390)},15607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var A=n(84390),r=n.n(A),i=n(15710);const o=["div","span","article","aside","details","figcaption","figure","footer","header","main","mark","nav","section","summary","time","ul","li"],a="div",s=!1,u=!1,c="initial",l=["initial","baseline","flex-start","center","flex-end","stretch"],d="initial",f=["initial","flex-start","center","flex-end","stretch","space-around","space-between","space-evenly"],p="initial";var h=n(85939),g=n.n(h),m=n(26621);const v=g().div.withConfig({shouldForwardProp:(e,t)=>i.cQ.blockProperty(e,["flex","wrap","row","padding","margin","width","height"])&&t(e)})((({flex:e,wrap:t,row:n,justify:A,alignment:r,padding:o,margin:a,width:s,height:u})=>h.css`
        display: flex;
        flex: ${e};
        flex-wrap: ${t?"wrap":"nowrap"};
        flex-direction: ${n?"row":"column"};
        align-items: ${r};
        justify-content: ${A};
        padding: ${o?(0,m.ME)(o):"0"};
        margin: ${a?(0,m.ME)(a):"0"};
        ${(i.cQ.isNumber(s)||i.cQ.isString(s))&&h.css`
            max-width: ${i.cQ.getPxValue(s)};
        `}
        ${(i.cQ.isNumber(u)||i.cQ.isString(u))&&h.css`
            max-height: ${i.cQ.getPxValue(u)};
        `}
    `));const y=function(e){var{element:t=a,alignment:n=d,justify:A=p,flex:h=c,row:g=s,wrap:m=u}=e,y=function(e,t){var n={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(n[A]=e[A]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(A=Object.getOwnPropertySymbols(e);r<A.length;r++)t.indexOf(A[r])<0&&Object.prototype.propertyIsEnumerable.call(e,A[r])&&(n[A[r]]=e[A[r]])}return n}(e,["element","alignment","justify","flex","row","wrap"]);i.cQ.assert(l.includes(n),`Compass Components - Flex: incompatible alignment property (${n}) set on Flex component. Please choose from the following: ${l.join(", ")}`),i.cQ.assert(f.includes(A),`Compass Components - Flex: incompatible justify property (${A}) set on Flex component. Please choose from the following: ${f.join(", ")}`),i.cQ.assert(o.includes(t)||i.cQ.isFunctionalComponent(t),`Compass Components - Flex: incompatible element property (${t}) used in Flex component. Please choose from the following: ${o.join(", ")}`);const B=Object.assign({alignment:n,justify:A,flex:h,row:g,wrap:m},y);return r().createElement(v,Object.assign({},B,{as:t}))}},26621:(e,t,n)=>{"use strict";n.d(t,{P3:()=>u,Og:()=>s,ZP:()=>c,ME:()=>i});var A=n(15710);const r={0:0,25:2,50:4,75:6,100:8,125:10,150:12,175:16,200:20,250:24,300:28,350:32,400:40,450:48,500:56,600:64,700:72,800:80},i=e=>e.map((e=>e?A.cQ.getPxValue(r[e]):0)).join(" "),o={all:e=>[e,e,e,e],trbl:({top:e=0,right:t=0,bottom:n=0,left:A=0})=>[e,t,n,A],only(e,t){const n={top:0,right:0,bottom:0,left:0};return n[e]=t,this.trbl(n)},symmetric({vertical:e=0,horizontal:t=0}){return this.trbl({top:e,right:t,bottom:e,left:t})}};var a=n(85939);function s(e){return a.css`
        padding: ${i(e)};
    `}function u(e){return a.css`
        margin: ${i(e)};
    `}const c=o},15535:(e,t,n)=>{"use strict";n.d(t,{P:()=>r,Z:()=>i});var A=n(85939);const r=A.css`
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
`,i=A.css`
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
        ${r}
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
`},71554:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>I,Wb:()=>x});var A=n(84390),r=n.n(A),i=n(85939),o=n(15710);const a=n.p+"files/015736ac96a0f4b445b5.woff2",s=n.p+"files/6f1462a75cab16ee77c8.woff2",u=n.p+"files/c7106e4ab743a4136ded.woff2",c=n.p+"files/d5daf742611b86ea2649.woff2",l=n.p+"files/53036a05f6557c05e491.woff2",d=n.p+"files/debacb904ea0289fc5c6.woff2",f=n.p+"files/df29fd5007ba01096d6b.woff2",p=n.p+"files/f356182e1dc28ee0d654.woff2",h=n.p+"files/0bcd8fb193ae33961ab2.woff2",g=n.p+"files/be7a481e724d47203afb.woff2",m=n.p+"files/7eaa3b990583dc1a5d69.woff2",v=n.p+"files/f9d11b5d4831f29245c8.woff2",y=i.css`
    // Metropolis font definitions
    @font-face {
        font-family: 'Metropolis';
        src: url(${a}) format('woff2');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${s}) format('woff2');
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
        src: url(${c}) format('woff2');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Metropolis';
        src: url(${l}) format('woff2');
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
`;var B=n(15535),w=n(69383),C=n(26603);const b=i.css`
    font-family: ${o.bH.body};
    font-size: ${C.nn[C.Z2].size}px;
    font-weight: ${C.lG};
    line-height: ${C.nn[C.Z2].lineHeight}px;

    p,
    span,
    label {
        // set body type styles
        // - defaults
        margin: ${C.nn[C.Z2].margin}px 0;
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
        font-weight: ${w.IM};
        margin: ${w.wr[w.Sb].marginTop}px 0
            ${w.wr[w.Sb].marginBottom}px;
    }

    ${w.vG.map((e=>{const t=w.LR[e];return i.css`
            ${e} {
                font-size: ${w.wr[t].size}px;
                line-height: ${w.wr[t].lineHeight}px;
                margin: ${w.wr[t].marginTop}px 0
                    ${w.wr[t].marginBottom}px;
            }
        `}))}

    html, body {
        background: ${({theme:e})=>e.background.default};
    }
`,E=b,D=i.createGlobalStyle`
    ${({theme:e})=>e.noStyleReset?null:B.Z};
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
`,F=D;var Q=n(97387);Q.jk[200],Q.jk[300],Q.jk[500],Q.jk[700],Q.jk[800],Q.n$[0],Q.$C[200],Q.$C[300],Q.$C[500],Q.$C[700],Q.$C[800],Q.n$[0],Q.Q6[200],Q.Q6[300],Q.Q6[500],Q.Q6[700],Q.Q6[800],Q.n$[0],Q.$y[100],Q.$y[200],Q.$y[400],Q.$y[600],Q.$y[700],Q.n$[0],Q.ek[300],Q.ek[400],Q.ek[600],Q.ek[700],Q.ek[800],Q.n$[0],Q.QN[100],Q.QN[200],Q.QN[300],Q.QN[500],Q.QN[600],Q.n$[0],Q.n$[0],Q.n$[100],Q.ek[600],Q.$y[400],Q.Q6[500],(0,o.uK)(Q.n$[350],.64),Q.n$[150],Q.n$[50],Q.n$[300],Q.n$[700],Q.n$[100],Q.n$[150],Q.n$[50],Q.n$[300],Q.n$[700],Q.n$[100],Q.n$[1250],Q.n$[1100],Q.n$[1e3],Q.n$[900],Q.n$[800],Q.n$[50],Q.Q6[200];const x={type:"light",elevationOpacity:.08,noStyleReset:!1,noFontFaces:!1,noDefaultStyle:!1,palette:{primary:{lighter:Q.iN[300],light:Q.iN[400],main:Q.iN[500],dark:Q.iN[600],darker:Q.iN[700],contrast:Q.n$[0]},secondary:{lighter:Q.QN[300],light:Q.QN[400],main:Q.QN[500],dark:Q.QN[600],darker:Q.QN[700],contrast:Q.n$[0]},alert:{lighter:Q.Q6[200],light:Q.Q6[300],main:Q.Q6[500],dark:Q.Q6[700],darker:Q.Q6[800],contrast:Q.n$[0]},warning:{lighter:Q.$y[100],light:Q.$y[200],main:Q.$y[400],dark:Q.$y[600],darker:Q.$y[700],contrast:Q.n$[0]},success:{lighter:Q.ek[300],light:Q.ek[400],main:Q.ek[600],dark:Q.ek[700],darker:Q.ek[800],contrast:Q.n$[0]},info:{lighter:Q.QN[100],light:Q.QN[200],main:Q.QN[300],dark:Q.QN[500],darker:Q.QN[600],contrast:Q.n$[0]}},action:{hover:Q.n$[900],disabled:Q.n$[1e3]},badges:{online:Q.ek[600],away:Q.$y[400],dnd:Q.Q6[500],offline:(0,o.uK)(Q.n$[350],.64)},text:{primary:Q.n$[1100],accent:Q.n$[900],secondary:Q.n$[800],disabled:Q.n$[500],contrast:Q.n$[0]},border:{primary:Q.n$[1100],accent:Q.n$[900],secondary:Q.n$[800],disabled:Q.n$[500],contrast:Q.n$[0]},background:{badge:Q.n$[500],default:Q.n$[50],shape:Q.n$[0],skeleton:Q.n$[100],shimmer:Q.n$[0],contrast:Q.n$[1100]},animation:{instant:0,fastest:100,fast:250,normal:300,slow:450,slowest:600},highlight:{mention:Q.er[300]}},U=(Q.ek[100],Q.ek[200],Q.ek[400],Q.ek[600],Q.ek[700],Q.n$[0],Q.$C[200],Q.$C[300],Q.$C[500],Q.$C[700],Q.$C[800],Q.n$[0],Q.Q6[200],Q.Q6[300],Q.Q6[500],Q.Q6[700],Q.Q6[800],Q.n$[0],Q.$y[100],Q.$y[200],Q.$y[400],Q.$y[600],Q.$y[700],Q.n$[0],Q.ek[300],Q.ek[400],Q.ek[600],Q.ek[700],Q.ek[800],Q.n$[0],Q.QN[100],Q.QN[200],Q.QN[300],Q.QN[500],Q.QN[600],Q.n$[0],Q.n$[0],Q.n$[100],Q.ek[600],Q.$y[400],Q.Q6[500],(0,o.uK)(Q.n$[350],.64),Q.n$[50],Q.n$[150],Q.n$[300],Q.n$[700],Q.n$[100],Q.n$[50],Q.n$[150],Q.n$[300],Q.n$[700],Q.n$[100],Q.iN[800],Q.iN[700],Q.iN[500],Q.n$[50],Q.n$[100],Q.n$[0],Q.Q6[200],({children:e=null,theme:t=x})=>r().createElement(i.ThemeProvider,{theme:t},r().createElement(F,null),e)),I=U},13693:(e,t)=>{"use strict";t.Z=["account-minus-outline","account-multiple-outline","account-multiple-plus-outline","account-outline","account-plus-outline","airplane-variant","airplane","alert-circle-outline","alert-outline","application-cog","apps","archive-arrow-up-outline","archive-outline","arrow-back-ios","arrow-collapse","arrow-down-bold-circle-outline","arrow-down","arrow-expand-all","arrow-expand","arrow-forward-ios","arrow-left","arrow-right-bold-outline","arrow-right","arrow-up-bold-circle-outline","arrow-up","at","basketball","beach-umbrella-outline","bell-off-outline","bell-outline","bell-ring-outline","bluetooth","book-lock-outline","book-outline","bookmark-outline","bookmark","brand-gitlab","brand-google","brand-office-365","brand-one-login","brand-zoom","bullhorn-outline","calendar-check-outline","calendar-month-outline","calendar-outline","camera-outline","cancel","car-outline","cellphone","chart-bar","chart-line","check-all","check-circle-outline","check-circle","check","checkbox-blank-outline","checkbox-marked","checkbox-multiple-marked-outline","chevron-down-circle-outline","chevron-down","chevron-left","chevron-right","chevron-up","circle-multiple-outline-lock","circle-multiple-outline","circle-outline","clock-outline","clock-send-outline","clock","close-circle-outline","close-circle","close","code-block","code-brackets","code-tags","cog-outline","console","content-copy","credit-card-outline","crown-outline","currency-usd","dock-left","dock-window","dots-horizontal","dots-vertical","download-outline","drag-vertical","draw","email-outline","email-plus-outline","email-variant","emoticon-custom-outline","emoticon-happy-outline","emoticon-outline","emoticon-plus-outline","exclamation-thick","exit-to-app","export-variant","eye-off-outline","eye-outline","file-audio-outline-large","file-audio-outline","file-code-outline-large","file-code-outline","file-excel-outline-large","file-excel-outline","file-generic-outline-large","file-generic-outline","file-gif","file-image-broken-outline-large","file-image-broken-outline","file-image-outline-large","file-image-outline","file-multiple-outline-large","file-multiple-outline","file-patch-outline-large","file-patch-outline","file-pdf-outline-large","file-pdf-outline","file-powerpoint-outline-large","file-powerpoint-outline","file-text-outline-large","file-text-outline","file-video-outline-large","file-video-outline","file-word-outline-large","file-word-outline","file-zip-outline-large","file-zip-outline","filter-variant","fire","flag-checkered","flag-outline","flag","flask-outline","folder-move-outline","folder-outline","folder-plus-outline","food-apple","food-fork-drink","format-bold","format-clear","format-header-1","format-header-2","format-header-3","format-header-4","format-header-5","format-header-6","format-header","format-italic","format-letter-case","format-list-bulleted","format-list-numbered","format-quote-open","format-strikethrough-variant","forum-outline","gfycat","github-circle","glasses","globe-checked","globe","hammer","hand-right-outline-off","hand-right-outline","hand-right","headphones","heart-outline","help-circle-outline","help","home-variant-outline","iframe-list-outline","image-area-outline","image-broken-outline","image-outline","import","infinity","information-outline","kanban","key-variant-circle","key-variant","keyboard-return","laptop","layers-outline","leaf-outline","leaf","lightbulb-outline","lightning-bolt-outline","link-variant-off","link-variant","lock-outline","lock","logout-variant","magnify-minus","magnify-plus","magnify","mark-as-unread","mattermost","menu-down","menu-left","menu-right","menu-up","menu-variant","menu","message-arrow-right-outline","message-check-outline","message-check","message-minus-outline","message-plus-outline","message-text-outline","microphone-off","microphone-outline","microphone","minus-box","minus-circle-outline","minus-circle","minus","monitor-off","monitor-share","monitor","notebook-outline","oauth","open-in-new","palette-outline","paperclip","pause","pencil-outline","phone-hangup","phone-in-talk","phone-outline","phone","pin-outline","pin","play-box-multiple-outline","play-outline","play","playlist-check","plus-box-outline","plus-box","plus","pound","power-plug-outline","product-boards","product-channels","product-playbooks","products","radiobox-blank","radiobox-marked","record-circle-outline","record-square-outline","refresh","reply-outline","resize-bottom-right","restore","robot-happy","search-list","send-outline","send","server-outline","server-variant-plus","server-variant","settings-outline","share-variant-outline","shield-alert-outline","shield-outline","shuffle-variant","sitemap","slash-forward-box-outline","slash-forward","soccer","sort-alphabetical-ascending","sort-ascending","source-branch","source-pull","square","star-outline","star","sync","table-column-plus-after","table-column-plus-before","table-column-remove","table-large","table-plus","table-remove","table-row-plus-after","table-row-plus-before","table-row-remove","table-settings","tablet","text-box-outline","thumbs-up-down","timeline-text-outline","trash-can-outline","tune","update","video-outline","view-grid-plus-outline","volume-high","webhook-incoming","webhook-outgoing","webhook"]},79119:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var A=n(30808),r=n(25773),i=n(84390),o=n(38944),a=n(82267),s=n(7818),u=n(87387),c=n(78580),l=n(38062),d=n(24246);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),h=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),g=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:u,component:g=(s?"div":"hr"),flexItem:m=!1,light:v=!1,orientation:y="horizontal",role:B=("hr"!==g?"separator":void 0),textAlign:w="center",variant:C="fullWidth"}=n,b=(0,A.Z)(n,f),E=(0,r.Z)({},n,{absolute:i,component:g,flexItem:m,light:v,orientation:y,role:B,textAlign:w,variant:C}),D=(e=>{const{absolute:t,children:n,classes:A,flexItem:r,light:i,orientation:o,textAlign:s,variant:u}=e,c={root:["root",t&&"absolute",u,i&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,a.Z)(c,l.V,A)})(E);return(0,d.jsx)(p,(0,r.Z)({as:g,className:(0,o.Z)(D.root,u),role:B,ref:t,ownerState:E},b,{children:s?(0,d.jsx)(h,{className:D.wrapper,ownerState:E,children:s}):null}))}))},38062:(e,t,n)=>{"use strict";n.d(t,{V:()=>i,Z:()=>o});var A=n(44124),r=n(17097);function i(e){return(0,r.Z)("MuiDivider",e)}const o=(0,A.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},78849:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});const A=n(84390).createContext({})},98813:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_e});var A=n(25773),r=n(30808),i=n(84390),o=(n(33230),n(38944)),a=n(82267),s=n(72146),u=n(7818),c=n(87387);const l=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var d=n(78580),f=n(44124),p=n(17097);function h(e){return(0,p.Z)("MuiPaper",e)}(0,f.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=n(24246);const m=["className","component","elevation","square","variant"],v=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,A.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,A.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,u.Fq)("#fff",l(t.elevation))}, ${(0,u.Fq)("#fff",l(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),y=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:u=1,square:c=!1,variant:l="elevation"}=n,f=(0,r.Z)(n,m),p=(0,A.Z)({},n,{component:s,elevation:u,square:c,variant:l}),y=(e=>{const{square:t,elevation:n,variant:A,classes:r}=e,i={root:["root",A,!t&&"rounded","elevation"===A&&`elevation${n}`]};return(0,a.Z)(i,h,r)})(p);return(0,g.jsx)(v,(0,A.Z)({as:s,ownerState:p,className:(0,o.Z)(y.root,i),ref:t},f))}));var B=n(2444),w=n(80668);function C(e){return(0,w.Z)(e).defaultView||window}const b=C;var E=n(51183),D=n(99443),F=n(94776);const Q=e=>e.scrollTop;function x(e,t){var n,A;const{timeout:r,easing:i,style:o={}}=e;return{duration:null!=(n=o.transitionDuration)?n:"number"==typeof r?r:r[t.mode]||0,easing:null!=(A=o.transitionTimingFunction)?A:"object"==typeof i?i[t.mode]:i,delay:o.transitionDelay}}const U=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function I(e){return`scale(${e}, ${e**2})`}const k={entering:{opacity:1,transform:I(1)},entered:{opacity:1,transform:"none"}},S="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),T=i.forwardRef((function(e,t){const{addEndListener:n,appear:o=!0,children:a,easing:s,in:u,onEnter:c,onEntered:l,onEntering:d,onExit:f,onExited:p,onExiting:h,style:m,timeout:v="auto",TransitionComponent:y=D.ZP}=e,B=(0,r.Z)(e,U),w=i.useRef(),C=i.useRef(),b=(0,F.Z)(),T=i.useRef(null),O=(0,E.Z)(T,a.ref,t),H=e=>t=>{if(e){const n=T.current;void 0===t?e(n):e(n,t)}},L=H(d),_=H(((e,t)=>{Q(e);const{duration:n,delay:A,easing:r}=x({style:m,timeout:v,easing:s},{mode:"enter"});let i;"auto"===v?(i=b.transitions.getAutoHeightDuration(e.clientHeight),C.current=i):i=n,e.style.transition=[b.transitions.create("opacity",{duration:i,delay:A}),b.transitions.create("transform",{duration:S?i:.666*i,delay:A,easing:r})].join(","),c&&c(e,t)})),M=H(l),P=H(h),R=H((e=>{const{duration:t,delay:n,easing:A}=x({style:m,timeout:v,easing:s},{mode:"exit"});let r;"auto"===v?(r=b.transitions.getAutoHeightDuration(e.clientHeight),C.current=r):r=t,e.style.transition=[b.transitions.create("opacity",{duration:r,delay:n}),b.transitions.create("transform",{duration:S?r:.666*r,delay:S?n:n||.333*r,easing:A})].join(","),e.style.opacity=0,e.style.transform=I(.75),f&&f(e)})),N=H(p);return i.useEffect((()=>()=>{clearTimeout(w.current)}),[]),(0,g.jsx)(y,(0,A.Z)({appear:o,in:u,nodeRef:T,onEnter:_,onEntered:M,onEntering:L,onExit:R,onExited:N,onExiting:P,addEndListener:e=>{"auto"===v&&(w.current=setTimeout(e,C.current||0)),n&&n(T.current,e)},timeout:"auto"===v?null:v},B,{children:(e,t)=>i.cloneElement(a,(0,A.Z)({style:(0,A.Z)({opacity:0,transform:I(.75),visibility:"exited"!==e||u?void 0:"hidden"},k[e],m,a.props.style),ref:O},t))}))}));T.muiSupportAuto=!0;const O=T;var H=n(97048),L=n(81925);function _(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}var M=n(69372),P=n(96858),R=n(40514);const N=i.forwardRef((function(e,t){const{children:n,container:A,disablePortal:r=!1}=e,[o,a]=i.useState(null),s=(0,H.Z)(i.isValidElement(n)?n.ref:null,t);if((0,P.Z)((()=>{r||a(function(e){return"function"==typeof e?e():e}(A)||document.body)}),[A,r]),(0,P.Z)((()=>{if(o&&!r)return(0,R.Z)(t,o),()=>{(0,R.Z)(t,null)}}),[t,o,r]),r){if(i.isValidElement(n)){const e={ref:s};return i.cloneElement(n,e)}return(0,g.jsx)(i.Fragment,{children:n})}return(0,g.jsx)(i.Fragment,{children:o?M.createPortal(n,o):o})}));var K=n(63268);function j(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Z(e){return parseInt(C(e).getComputedStyle(e).paddingRight,10)||0}function V(e,t,n,A,r){const i=[t,n,...A];[].forEach.call(e.children,(e=>{const t=-1===i.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&j(e,r)}))}function G(e,t){let n=-1;return e.some(((e,A)=>!!t(e)&&(n=A,!0))),n}const z=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function W(e){const t=[],n=[];return Array.from(e.querySelectorAll(z)).forEach(((e,A)=>{const r=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===r?t.push(e):n.push({documentOrder:A,tabIndex:r,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function q(){return!0}const Y=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:A=!1,disableRestoreFocus:r=!1,getTabbable:o=W,isEnabled:a=q,open:s}=e,u=i.useRef(!1),c=i.useRef(null),l=i.useRef(null),d=i.useRef(null),f=i.useRef(null),p=i.useRef(!1),h=i.useRef(null),m=(0,H.Z)(t.ref,h),v=i.useRef(null);i.useEffect((()=>{s&&h.current&&(p.current=!n)}),[n,s]),i.useEffect((()=>{if(!s||!h.current)return;const e=(0,w.Z)(h.current);return h.current.contains(e.activeElement)||(h.current.hasAttribute("tabIndex")||h.current.setAttribute("tabIndex","-1"),p.current&&h.current.focus()),()=>{r||(d.current&&d.current.focus&&(u.current=!0,d.current.focus()),d.current=null)}}),[s]),i.useEffect((()=>{if(!s||!h.current)return;const e=(0,w.Z)(h.current),t=t=>{const{current:n}=h;if(null!==n)if(e.hasFocus()&&!A&&a()&&!u.current){if(!n.contains(e.activeElement)){if(t&&f.current!==t.target||e.activeElement!==f.current)f.current=null;else if(null!==f.current)return;if(!p.current)return;let A=[];if(e.activeElement!==c.current&&e.activeElement!==l.current||(A=o(h.current)),A.length>0){var r,i;const e=Boolean((null==(r=v.current)?void 0:r.shiftKey)&&"Tab"===(null==(i=v.current)?void 0:i.key)),t=A[0],n=A[A.length-1];"string"!=typeof t&&"string"!=typeof n&&(e?n.focus():t.focus())}else n.focus()}}else u.current=!1},n=t=>{v.current=t,!A&&a()&&"Tab"===t.key&&e.activeElement===h.current&&t.shiftKey&&(u.current=!0,l.current&&l.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&t(null)}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[n,A,r,a,s,o]);const y=e=>{null===d.current&&(d.current=e.relatedTarget),p.current=!0};return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)("div",{tabIndex:s?0:-1,onFocus:y,ref:c,"data-testid":"sentinelStart"}),i.cloneElement(t,{ref:m,onFocus:e=>{null===d.current&&(d.current=e.relatedTarget),p.current=!0,f.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,g.jsx)("div",{tabIndex:s?0:-1,onFocus:y,ref:l,"data-testid":"sentinelEnd"})]})};function X(e){return(0,p.Z)("MuiModal",e)}function $(e){return"string"==typeof e}function J(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}function ee(e,t){return"function"==typeof e?e(t):e}(0,f.Z)("MuiModal",["root","hidden","backdrop"]);const te=["elementType","externalSlotProps","ownerState"];function ne(e){var t;const{elementType:n,externalSlotProps:i,ownerState:a}=e,s=(0,r.Z)(e,te),u=ee(i,a),{props:c,internalRef:l}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:a}=e;if(!t){const e=(0,o.Z)(null==i?void 0:i.className,null==r?void 0:r.className,a,null==n?void 0:n.className),t=(0,A.Z)({},null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),s=(0,A.Z)({},n,i,r);return e.length>0&&(s.className=e),Object.keys(t).length>0&&(s.style=t),{props:s,internalRef:void 0}}const s=function(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}((0,A.Z)({},i,r)),u=J(r),c=J(i),l=t(s),d=(0,o.Z)(null==l?void 0:l.className,null==n?void 0:n.className,a,null==i?void 0:i.className,null==r?void 0:r.className),f=(0,A.Z)({},null==l?void 0:l.style,null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),p=(0,A.Z)({},l,n,c,u);return d.length>0&&(p.className=d),Object.keys(f).length>0&&(p.style=f),{props:p,internalRef:l.ref}}((0,A.Z)({},s,{externalSlotProps:u})),d=(0,H.Z)(l,null==u?void 0:u.ref,null==(t=e.additionalProps)?void 0:t.ref),f=function(e,t,n){return void 0===e||$(e)?t:(0,A.Z)({},t,{ownerState:(0,A.Z)({},t.ownerState,n)})}(n,(0,A.Z)({},c,{ref:d}),a);return f}const Ae={disableDefaultClasses:!1},re=i.createContext(Ae),ie=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],oe=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&j(e.modalRef,!1);const A=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);V(t,e.mount,e.modalRef,A,!0);const r=G(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:A}),n)}mount(e,t){const n=G(this.containers,(t=>-1!==t.modals.indexOf(e))),A=this.containers[n];A.restore||(A.restore=function(e,t){const n=[],A=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,w.Z)(e);return t.body===e?C(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(A)){const e=(0,K.Z)((0,w.Z)(A));n.push({value:A.style.paddingRight,property:"padding-right",el:A}),A.style.paddingRight=`${Z(A)+e}px`;const t=(0,w.Z)(A).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${Z(t)+e}px`}))}let e;if(A.parentNode instanceof DocumentFragment)e=(0,w.Z)(A).body;else{const t=A.parentElement,n=C(A);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:A}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}(A,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const A=G(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[A];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&j(e.modalRef,t),V(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(A,1);else{const e=r.modals[r.modals.length-1];e.modalRef&&j(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},ae=i.forwardRef((function(e,t){var n,o;const{children:s,closeAfterTransition:u=!1,component:c,container:l,disableAutoFocus:d=!1,disableEnforceFocus:f=!1,disableEscapeKeyDown:p=!1,disablePortal:h=!1,disableRestoreFocus:m=!1,disableScrollLock:v=!1,hideBackdrop:y=!1,keepMounted:B=!1,manager:C=oe,onBackdropClick:b,onClose:E,onKeyDown:D,open:F,onTransitionEnter:Q,onTransitionExited:x,slotProps:U={},slots:I={}}=e,k=(0,r.Z)(e,ie),[S,T]=i.useState(!F),O=i.useRef({}),M=i.useRef(null),P=i.useRef(null),R=(0,H.Z)(P,t),K=function(e){return!!e&&e.props.hasOwnProperty("in")}(s),Z=null==(n=e["aria-hidden"])||n,V=()=>(O.current.modalRef=P.current,O.current.mountNode=M.current,O.current),G=()=>{C.mount(V(),{disableScrollLock:v}),P.current&&(P.current.scrollTop=0)},z=(0,L.Z)((()=>{const e=function(e){return"function"==typeof e?e():e}(l)||(0,w.Z)(M.current).body;C.add(V(),e),P.current&&G()})),W=i.useCallback((()=>C.isTopModal(V())),[C]),q=(0,L.Z)((e=>{M.current=e,e&&P.current&&(F&&W()?G():j(P.current,Z))})),$=i.useCallback((()=>{C.remove(V(),Z)}),[C,Z]);i.useEffect((()=>()=>{$()}),[$]),i.useEffect((()=>{F?z():K&&u||$()}),[F,$,K,u,z]);const J=(0,A.Z)({},e,{closeAfterTransition:u,disableAutoFocus:d,disableEnforceFocus:f,disableEscapeKeyDown:p,disablePortal:h,disableRestoreFocus:m,disableScrollLock:v,exited:S,hideBackdrop:y,keepMounted:B}),ee=(e=>{const{open:t,exited:n}=e,A={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,a.Z)(A,function(e){const{disableDefaultClasses:t}=i.useContext(re);return n=>t?"":e(n)}(X))})(J),te={};void 0===s.props.tabIndex&&(te.tabIndex="-1"),K&&(te.onEnter=_((()=>{T(!1),Q&&Q()}),s.props.onEnter),te.onExited=_((()=>{T(!0),x&&x(),u&&$()}),s.props.onExited));const Ae=null!=(o=null!=c?c:I.root)?o:"div",ae=ne({elementType:Ae,externalSlotProps:U.root,externalForwardedProps:k,additionalProps:{ref:R,role:"presentation",onKeyDown:e=>{D&&D(e),"Escape"===e.key&&W()&&(p||(e.stopPropagation(),E&&E(e,"escapeKeyDown")))}},className:ee.root,ownerState:J}),se=I.backdrop,ue=ne({elementType:se,externalSlotProps:U.backdrop,additionalProps:{"aria-hidden":!0,onClick:e=>{e.target===e.currentTarget&&(b&&b(e),E&&E(e,"backdropClick"))},open:F},className:ee.backdrop,ownerState:J});return B||F||K&&!S?(0,g.jsx)(N,{ref:q,container:l,disablePortal:h,children:(0,g.jsxs)(Ae,(0,A.Z)({},ae,{children:[!y&&se?(0,g.jsx)(se,(0,A.Z)({},ue)):null,(0,g.jsx)(Y,{disableEnforceFocus:f,disableAutoFocus:d,disableRestoreFocus:m,isEnabled:W,open:F,children:i.cloneElement(s,te)})]}))}):null})),se=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ue={entering:{opacity:1},entered:{opacity:1}},ce=i.forwardRef((function(e,t){const n=(0,F.Z)(),o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:a,appear:s=!0,children:u,easing:c,in:l,onEnter:d,onEntered:f,onEntering:p,onExit:h,onExited:m,onExiting:v,style:y,timeout:B=o,TransitionComponent:w=D.ZP}=e,C=(0,r.Z)(e,se),b=i.useRef(null),U=(0,E.Z)(b,u.ref,t),I=e=>t=>{if(e){const n=b.current;void 0===t?e(n):e(n,t)}},k=I(p),S=I(((e,t)=>{Q(e);const A=x({style:y,timeout:B,easing:c},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",A),e.style.transition=n.transitions.create("opacity",A),d&&d(e,t)})),T=I(f),O=I(v),H=I((e=>{const t=x({style:y,timeout:B,easing:c},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),h&&h(e)})),L=I(m);return(0,g.jsx)(w,(0,A.Z)({appear:s,in:l,nodeRef:b,onEnter:S,onEntered:T,onEntering:k,onExit:H,onExited:L,onExiting:O,addEndListener:e=>{a&&a(b.current,e)},timeout:B},C,{children:(e,t)=>i.cloneElement(u,(0,A.Z)({style:(0,A.Z)({opacity:0,visibility:"exited"!==e||l?void 0:"hidden"},ue[e],y,u.props.style),ref:U},t))}))}));function le(e){return(0,p.Z)("MuiBackdrop",e)}(0,f.Z)("MuiBackdrop",["root","invisible"]);const de=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],fe=(0,c.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>(0,A.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"}))),pe=i.forwardRef((function(e,t){var n,i,s;const u=(0,d.Z)({props:e,name:"MuiBackdrop"}),{children:c,className:l,component:f="div",components:p={},componentsProps:h={},invisible:m=!1,open:v,slotProps:y={},slots:B={},TransitionComponent:w=ce,transitionDuration:C}=u,b=(0,r.Z)(u,de),E=(0,A.Z)({},u,{component:f,invisible:m}),D=(e=>{const{classes:t,invisible:n}=e,A={root:["root",n&&"invisible"]};return(0,a.Z)(A,le,t)})(E),F=null!=(n=y.root)?n:h.root;return(0,g.jsx)(w,(0,A.Z)({in:v,timeout:C},b,{children:(0,g.jsx)(fe,(0,A.Z)({"aria-hidden":!0},F,{as:null!=(i=null!=(s=B.root)?s:p.Root)?i:f,className:(0,o.Z)(D.root,l,null==F?void 0:F.className),ownerState:(0,A.Z)({},E,null==F?void 0:F.ownerState),classes:D,ref:t,children:c}))}))})),he=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],ge=(0,c.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,A.Z)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),me=(0,c.ZP)(pe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ve=i.forwardRef((function(e,t){var n,a,s,u,c,l;const f=(0,d.Z)({name:"MuiModal",props:e}),{BackdropComponent:p=me,BackdropProps:h,classes:m,className:v,closeAfterTransition:y=!1,children:B,component:w,components:C={},componentsProps:b={},disableAutoFocus:E=!1,disableEnforceFocus:D=!1,disableEscapeKeyDown:F=!1,disablePortal:Q=!1,disableRestoreFocus:x=!1,disableScrollLock:U=!1,hideBackdrop:I=!1,keepMounted:k=!1,slotProps:S,slots:T,theme:O}=f,H=(0,r.Z)(f,he),[L,_]=i.useState(!0),M={closeAfterTransition:y,disableAutoFocus:E,disableEnforceFocus:D,disableEscapeKeyDown:F,disablePortal:Q,disableRestoreFocus:x,disableScrollLock:U,hideBackdrop:I,keepMounted:k},P=(0,A.Z)({},f,M,{exited:L}),R=null!=(n=null!=(a=null==T?void 0:T.root)?a:C.Root)?n:ge,N=null!=(s=null!=(u=null==T?void 0:T.backdrop)?u:C.Backdrop)?s:p,K=null!=(c=null==S?void 0:S.root)?c:b.root,j=null!=(l=null==S?void 0:S.backdrop)?l:b.backdrop;return(0,g.jsx)(ae,(0,A.Z)({slots:{root:R,backdrop:N},slotProps:{root:()=>(0,A.Z)({},ee(K,P),!$(R)&&{as:w,theme:O},{className:(0,o.Z)(v,null==K?void 0:K.className,null==m?void 0:m.root,!P.open&&P.exited&&(null==m?void 0:m.hidden))}),backdrop:()=>(0,A.Z)({},h,ee(j,P),{className:(0,o.Z)(null==j?void 0:j.className,null==m?void 0:m.backdrop)})},onTransitionEnter:()=>_(!1),onTransitionExited:()=>_(!0),ref:t},H,M,{children:B}))}));function ye(e){return(0,p.Z)("MuiPopover",e)}(0,f.Z)("MuiPopover",["root","paper"]);const Be=["onEntering"],we=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function Ce(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function be(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function Ee(e){return[e.horizontal,e.vertical].map((e=>"number"==typeof e?`${e}px`:e)).join(" ")}function De(e){return"function"==typeof e?e():e}const Fe=(0,c.ZP)(ve,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Qe=(0,c.ZP)(y,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),xe=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiPopover"}),{action:s,anchorEl:u,anchorOrigin:c={vertical:"top",horizontal:"left"},anchorPosition:l,anchorReference:f="anchorEl",children:p,className:h,container:m,elevation:v=8,marginThreshold:y=16,open:w,PaperProps:C={},transformOrigin:D={vertical:"top",horizontal:"left"},TransitionComponent:F=O,transitionDuration:Q="auto",TransitionProps:{onEntering:x}={}}=n,U=(0,r.Z)(n.TransitionProps,Be),I=(0,r.Z)(n,we),k=i.useRef(),S=(0,E.Z)(k,C.ref),T=(0,A.Z)({},n,{anchorOrigin:c,anchorReference:f,elevation:v,marginThreshold:y,PaperProps:C,transformOrigin:D,TransitionComponent:F,transitionDuration:Q,TransitionProps:U}),H=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"]},ye,t)})(T),L=i.useCallback((()=>{if("anchorPosition"===f)return l;const e=De(u),t=(e&&1===e.nodeType?e:(0,B.Z)(k.current).body).getBoundingClientRect();return{top:t.top+Ce(t,c.vertical),left:t.left+be(t,c.horizontal)}}),[u,c.horizontal,c.vertical,l,f]),_=i.useCallback((e=>({vertical:Ce(e,D.vertical),horizontal:be(e,D.horizontal)})),[D.horizontal,D.vertical]),M=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=_(t);if("none"===f)return{top:null,left:null,transformOrigin:Ee(n)};const A=L();let r=A.top-n.vertical,i=A.left-n.horizontal;const o=r+t.height,a=i+t.width,s=b(De(u)),c=s.innerHeight-y,l=s.innerWidth-y;if(r<y){const e=r-y;r-=e,n.vertical+=e}else if(o>c){const e=o-c;r-=e,n.vertical+=e}if(i<y){const e=i-y;i-=e,n.horizontal+=e}else if(a>l){const e=a-l;i-=e,n.horizontal+=e}return{top:`${Math.round(r)}px`,left:`${Math.round(i)}px`,transformOrigin:Ee(n)}}),[u,f,L,_,y]),[P,R]=i.useState(w),N=i.useCallback((()=>{const e=k.current;if(!e)return;const t=M(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,R(!0)}),[M]);i.useEffect((()=>{w&&N()})),i.useImperativeHandle(s,(()=>w?{updatePosition:()=>{N()}}:null),[w,N]),i.useEffect((()=>{if(!w)return;const e=function(e,t=166){let n;function A(...A){clearTimeout(n),n=setTimeout((()=>{e.apply(this,A)}),t)}return A.clear=()=>{clearTimeout(n)},A}((()=>{N()})),t=b(u);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[u,w,N]);let K=Q;"auto"!==Q||F.muiSupportAuto||(K=void 0);const j=m||(u?(0,B.Z)(De(u)).body:void 0);return(0,g.jsx)(Fe,(0,A.Z)({BackdropProps:{invisible:!0},className:(0,o.Z)(H.root,h),container:j,open:w,ref:t,ownerState:T},I,{children:(0,g.jsx)(F,(0,A.Z)({appear:!0,in:w,onEntering:(e,t)=>{x&&x(e,t),N()},onExited:()=>{R(!1)},timeout:K},U,{children:(0,g.jsx)(Qe,(0,A.Z)({elevation:v},C,{ref:S,className:(0,o.Z)(H.paper,C.className)},P?void 0:{style:(0,A.Z)({},C.style,{opacity:0})},{ownerState:T,children:p}))}))}))}));function Ue(e){return(0,p.Z)("MuiMenu",e)}(0,f.Z)("MuiMenu",["root","paper","list"]);const Ie=["onEntering"],ke=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],Se={vertical:"top",horizontal:"right"},Te={vertical:"top",horizontal:"left"},Oe=(0,c.ZP)(xe,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),He=(0,c.ZP)(y,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Le=(0,c.ZP)(s.Z,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),_e=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiMenu"}),{autoFocus:s=!0,children:u,disableAutoFocusItem:c=!1,MenuListProps:l={},onClose:f,open:p,PaperProps:h={},PopoverClasses:m,transitionDuration:v="auto",TransitionProps:{onEntering:y}={},variant:B="selectedMenu"}=n,w=(0,r.Z)(n.TransitionProps,Ie),C=(0,r.Z)(n,ke),b=(0,F.Z)(),E="rtl"===b.direction,D=(0,A.Z)({},n,{autoFocus:s,disableAutoFocusItem:c,MenuListProps:l,onEntering:y,PaperProps:h,transitionDuration:v,TransitionProps:w,variant:B}),Q=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"],list:["list"]},Ue,t)})(D),x=s&&!c&&p,U=i.useRef(null);let I=-1;return i.Children.map(u,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===B&&e.props.selected||-1===I)&&(I=t))})),(0,g.jsx)(Oe,(0,A.Z)({onClose:f,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?Se:Te,PaperProps:(0,A.Z)({as:He},h,{classes:(0,A.Z)({},h.classes,{root:Q.paper})}),className:Q.root,open:p,ref:t,transitionDuration:v,TransitionProps:(0,A.Z)({onEntering:(e,t)=>{U.current&&U.current.adjustStyleForScrollbar(e,b),y&&y(e,t)}},w),ownerState:D},C,{classes:m,children:(0,g.jsx)(Le,(0,A.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),f&&f(e,"tabKeyDown"))},actions:U,autoFocus:s&&(-1===I||c),autoFocusItem:x,variant:B},l,{className:(0,o.Z)(Q.list,l.className),children:u}))}))}))},44636:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ue});var A=n(30808),r=n(25773),i=n(84390),o=n.n(i),a=n(38944),s=n(82267),u=n(7818),c=n(87387),l=n(78580),d=n(78849),f=n(51183);const p=n(81925).Z;let h,g=!0,m=!1;const v={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function y(e){e.metaKey||e.altKey||e.ctrlKey||(g=!0)}function B(){g=!1}function w(){"hidden"===this.visibilityState&&m&&(g=!0)}const C=function(){const e=i.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",y,!0),t.addEventListener("mousedown",B,!0),t.addEventListener("pointerdown",B,!0),t.addEventListener("touchstart",B,!0),t.addEventListener("visibilitychange",w,!0))}),[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return g||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!v[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(m=!0,window.clearTimeout(h),h=window.setTimeout((()=>{m=!1}),100),t.current=!1,!0)},ref:e}};var b=n(47169),E=n(93219),D=n(16897);function F(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function Q(e,t,n){return null!=n[t]?n[t]:e.props[t]}function x(e,t,n){var A=F(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var A,r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var a={};for(var s in t){if(r[s])for(A=0;A<r[s].length;A++){var u=r[s][A];a[r[s][A]]=n(u)}a[s]=n(s)}for(A=0;A<i.length;A++)a[i[A]]=n(i[A]);return a}(t,A);return Object.keys(r).forEach((function(o){var a=r[o];if((0,i.isValidElement)(a)){var s=o in t,u=o in A,c=t[o],l=(0,i.isValidElement)(c)&&!c.props.in;!u||s&&!l?u||!s||l?u&&s&&(0,i.isValidElement)(c)&&(r[o]=(0,i.cloneElement)(a,{onExited:n.bind(null,a),in:c.props.in,exit:Q(a,"exit",e),enter:Q(a,"enter",e)})):r[o]=(0,i.cloneElement)(a,{in:!1}):r[o]=(0,i.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:Q(a,"exit",e),enter:Q(a,"enter",e)})}})),r}var U=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},I=function(e){function t(t,n){var A,r=(A=e.call(this,t,n)||this).handleExited.bind((0,b.Z)(A));return A.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},A}(0,E.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,A,r=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,A=o,F(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:A.bind(null,e),in:!0,appear:Q(e,"appear",n),enter:Q(e,"enter",n),exit:Q(e,"exit",n)})}))):x(e,r,o),firstRender:!1}},n.handleExited=function(e,t){var n=F(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,A.Z)(e,["component","childFactory"]),i=this.state.contextValue,a=U(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o().createElement(D.Z.Provider,{value:i},a):o().createElement(D.Z.Provider,{value:i},o().createElement(t,r,a))},t}(o().Component);I.propTypes={},I.defaultProps={component:"div",childFactory:function(e){return e}};const k=I;var S=n(85939),T=n(24246);var O=n(44124);const H=(0,O.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),L=["center","classes","className"];let _,M,P,R,N=e=>e;const K=(0,S.keyframes)(_||(_=N`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),j=(0,S.keyframes)(M||(M=N`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Z=(0,S.keyframes)(P||(P=N`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),V=(0,c.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),G=(0,c.ZP)((function(e){const{className:t,classes:n,pulsate:A=!1,rippleX:r,rippleY:o,rippleSize:s,in:u,onExited:c,timeout:l}=e,[d,f]=i.useState(!1),p=(0,a.Z)(t,n.ripple,n.rippleVisible,A&&n.ripplePulsate),h={width:s,height:s,top:-s/2+o,left:-s/2+r},g=(0,a.Z)(n.child,d&&n.childLeaving,A&&n.childPulsate);return u||d||f(!0),i.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,l);return()=>{clearTimeout(e)}}}),[c,u,l]),(0,T.jsx)("span",{className:p,style:h,children:(0,T.jsx)("span",{className:g})})}),{name:"MuiTouchRipple",slot:"Ripple"})(R||(R=N`
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
//# sourceMappingURL=6354.b219d41ca550bffdc27d.js.map