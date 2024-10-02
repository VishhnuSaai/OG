import{d as a,r as M,j as s,h as Oe,e as gt,c as vt,f as ve}from"./index-S9ZFpKWr.js";import{B as J}from"./button-hjNhbjSD.js";import{S as ye}from"./skeleton-iBcKSVdE.js";import{o as yt}from"./OGlogo-Tt_NDezG.js";import{$ as wt,d as bt,r as xt,k as Rt,g as Et,i as Dt,j as Pt,q as $t}from"./index-f8mGLlf5.js";import{c as q}from"./index-gF_s75Pt.js";import{m as jt}from"./motion-eQ5RRHFP.js";import"./index-polp_dyw.js";import"./index-xbCSyz75.js";import"./index-47JtSr82.js";const Ct="/assets/cartGif--G4cnv6x.gif";var Le=a.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{}}),Re=()=>a.useContext(Le);function Tt(e,{insertAt:n}={}){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Tt(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);var Nt=typeof window<"u"?M.useLayoutEffect:M.useEffect;function xe(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}function St(){return Ee(/^Mac/)}function Ot(){return Ee(/^iPhone/)}function At(){return Ee(/^iPad/)||St()&&navigator.maxTouchPoints>1}function Fe(){return Ot()||At()}function Ee(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):void 0}var we=typeof document<"u"&&window.visualViewport;function Ae(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function We(e){for(Ae(e)&&(e=e.parentElement);e&&!Ae(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var _t=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),ae=0,be;function It(e={}){let{isDisabled:n}=e;Nt(()=>{if(!n)return ae++,ae===1&&(Fe()?be=zt():be=kt()),()=>{ae--,ae===0&&be()}},[n])}function kt(){return xe(ce(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),ce(document.documentElement,"overflow","hidden"))}function zt(){let e,n=0,t=f=>{e=We(f.target),!(e===document.documentElement&&e===document.body)&&(n=f.changedTouches[0].pageY)},r=f=>{if(!e||e===document.documentElement||e===document.body){f.preventDefault();return}let l=f.changedTouches[0].pageY,A=e.scrollTop,C=e.scrollHeight-e.clientHeight;C!==0&&((A<=0&&l>n||A>=C&&l<n)&&f.preventDefault(),n=l)},c=f=>{let l=f.target;ue(l)&&l!==document.activeElement&&(f.preventDefault(),l.style.transform="translateY(-2000px)",l.focus(),requestAnimationFrame(()=>{l.style.transform=""}))},i=f=>{let l=f.target;ue(l)&&(l.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{l.style.transform="",we&&(we.height<window.innerHeight?requestAnimationFrame(()=>{_e(l)}):we.addEventListener("resize",()=>_e(l),{once:!0}))}))},o=()=>{window.scrollTo(0,0)},m=window.pageXOffset,E=window.pageYOffset,v=xe(ce(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),ce(document.documentElement,"overflow","hidden"));window.scrollTo(0,0);let h=xe(K(document,"touchstart",t,{passive:!1,capture:!0}),K(document,"touchmove",r,{passive:!1,capture:!0}),K(document,"touchend",c,{passive:!1,capture:!0}),K(document,"focus",i,!0),K(window,"scroll",o));return()=>{v(),h(),window.scrollTo(m,E)}}function ce(e,n,t){let r=e.style[n];return e.style[n]=t,()=>{e.style[n]=r}}function K(e,n,t,r){return e.addEventListener(n,t,r),()=>{e.removeEventListener(n,t,r)}}function _e(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=We(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let r=t.getBoundingClientRect().top,c=e.getBoundingClientRect().top,i=e.getBoundingClientRect().bottom,o=t.getBoundingClientRect().bottom;i>o&&(t.scrollTop+=c-r)}e=t.parentElement}}function ue(e){return e instanceof HTMLInputElement&&!_t.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function Mt(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Lt(...e){return n=>e.forEach(t=>Mt(t,n))}function He(...e){return M.useCallback(Lt(...e),e)}var z=null;function Ft({isOpen:e,modal:n,nested:t,hasBeenOpened:r}){let[c,i]=a.useState(typeof window<"u"?window.location.href:""),o=a.useRef(0);function m(){if(z===null&&e){z={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:v,innerHeight:h}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top=`${-o.current}px`,document.body.style.left=`${-v}px`,document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let f=h-window.innerHeight;f&&o.current>=h&&(document.body.style.top=`${-(o.current+f)}px`)}),300)}}function E(){if(z!==null){let v=-parseInt(document.body.style.top,10),h=-parseInt(document.body.style.left,10);document.body.style.position=z.position,document.body.style.top=z.top,document.body.style.left=z.left,document.body.style.height=z.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(c!==window.location.href){i(window.location.href);return}window.scrollTo(h,v)}),z=null}}return a.useEffect(()=>{function v(){o.current=window.scrollY}return v(),window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]),a.useEffect(()=>{t||!r||(e?(m(),n||setTimeout(()=>{E()},500)):E())},[e,r,c]),{restorePositionSetting:E}}var Be=new WeakMap;function R(e,n,t=!1){if(!e||!(e instanceof HTMLElement)||!n)return;let r={};Object.entries(n).forEach(([c,i])=>{if(c.startsWith("--")){e.style.setProperty(c,i);return}r[c]=e.style[c],e.style[c]=i}),!t&&Be.set(e,r)}function se(e,n){if(!e||!(e instanceof HTMLElement))return;let t=Be.get(e);t&&(n?e.style[n]=t[n]:Object.entries(t).forEach(([r,c])=>{e.style[r]=c}))}function le(e){let n=window.getComputedStyle(e),t=n.transform||n.webkitTransform||n.mozTransform,r=t.match(/^matrix3d\((.+)\)$/);return r?parseFloat(r[1].split(", ")[13]):(r=t.match(/^matrix\((.+)\)$/),r?parseFloat(r[1].split(", ")[5]):null)}function Wt(e){return 8*(Math.log(e+1)-2)}var w={DURATION:.5,EASE:[.32,.72,0,1]},Ue=.4;function qe(e){let n=a.useRef(e);return a.useEffect(()=>{n.current=e}),a.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function Ht({defaultProp:e,onChange:n}){let t=a.useState(e),[r]=t,c=a.useRef(r),i=qe(n);return a.useEffect(()=>{c.current!==r&&(i(r),c.current=r)},[r,c,i]),t}function Bt({prop:e,defaultProp:n,onChange:t=()=>{}}){let[r,c]=Ht({defaultProp:n,onChange:t}),i=e!==void 0,o=i?e:r,m=qe(t),E=a.useCallback(v=>{if(i){let h=typeof v=="function"?v(e):v;h!==e&&m(h)}else c(v)},[i,e,c,m]);return[o,E]}function Ut({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:r,overlayRef:c,fadeFromIndex:i,onSnapPointChange:o}){let[m,E]=Bt({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),v=a.useMemo(()=>m===(t==null?void 0:t[t.length-1]),[t,m]),h=t&&t.length>0&&(i||i===0)&&!Number.isNaN(i)&&t[i]===m||!t,f=a.useMemo(()=>{var g;return(g=t==null?void 0:t.findIndex(b=>b===m))!=null?g:null},[t,m]),l=a.useMemo(()=>{var g;return(g=t==null?void 0:t.map(b=>{let y=typeof window<"u",j=typeof b=="string",T=0;j&&(T=parseInt(b,10));let _=j?T:y?b*window.innerHeight:0;return y?window.innerHeight-_:_}))!=null?g:[]},[t]),A=a.useMemo(()=>f!==null?l==null?void 0:l[f]:null,[l,f]),C=a.useCallback(g=>{var b;let y=(b=l==null?void 0:l.findIndex(j=>j===g))!=null?b:null;o(y),R(r.current,{transition:`transform ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`,transform:`translate3d(0, ${g}px, 0)`}),l&&y!==l.length-1&&y!==i?R(c.current,{transition:`opacity ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`,opacity:"0"}):R(c.current,{transition:`opacity ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`,opacity:"1"}),E(y!==null?t==null?void 0:t[y]:null)},[r.current,t,l,i,c,E]);a.useEffect(()=>{var g;if(e){let b=(g=t==null?void 0:t.findIndex(y=>y===e))!=null?g:null;l&&b&&typeof l[b]=="number"&&C(l[b])}},[e,t,l,C]);function k({draggedDistance:g,closeDrawer:b,velocity:y,dismissible:j}){if(i===void 0)return;let T=A-g,_=f===i-1,de=f===0,Y=g>0;if(_&&R(c.current,{transition:`opacity ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`}),y>2&&!Y){j?b():C(l[0]);return}if(y>2&&Y&&l&&t){C(l[t.length-1]);return}let V=l==null?void 0:l.reduce((N,X)=>typeof N!="number"||typeof X!="number"?N:Math.abs(X-T)<Math.abs(N-T)?X:N);if(y>Ue&&Math.abs(g)<window.innerHeight*.4){let N=Y?1:-1;if(N>0&&v){C(l[t.length-1]);return}if(de&&N<0&&j&&b(),f===null)return;C(l[f+N]);return}C(V)}function H({draggedDistance:g}){if(A===null)return;let b=A-g;R(r.current,{transform:`translate3d(0, ${b}px, 0)`})}function L(g,b){if(!t||typeof f!="number"||!l||i===void 0)return null;let y=f===i-1;if(f>=i&&b)return 0;if(y&&!b)return 1;if(!h&&!y)return null;let j=y?f+1:f-1,T=y?l[j]-l[j-1]:l[j+1]-l[j],_=g/Math.abs(T);return y?1-_:_}return{isLastSnapPoint:v,activeSnapPoint:m,shouldFade:h,getPercentageDragged:L,setActiveSnapPoint:E,activeSnapPointIndex:f,onRelease:k,onDrag:H,snapPointsOffset:l}}var qt=.25,Yt=100,Ie=8,W=16,ke=26,ze="vaul-dragging";function Ye({open:e,onOpenChange:n,children:t,shouldScaleBackground:r,onDrag:c,onRelease:i,snapPoints:o,nested:m,closeThreshold:E=qt,scrollLockTimeout:v=Yt,dismissible:h=!0,fadeFromIndex:f=o&&o.length-1,activeSnapPoint:l,setActiveSnapPoint:A,fixed:C,modal:k=!0,onClose:H}){var L;let[g=!1,b]=a.useState(!1),[y,j]=a.useState(!1),[T,_]=a.useState(!1),[de,Y]=a.useState(!1),[V,N]=a.useState(!1),[X,De]=a.useState(!1),F=a.useRef(null),te=a.useRef(null),fe=a.useRef(null),Pe=a.useRef(null),ne=a.useRef(null),G=a.useRef(!1),me=a.useRef(null),pe=a.useRef(0),B=a.useRef(!1),$e=a.useRef(0),p=a.useRef(null),je=a.useRef(((L=p.current)==null?void 0:L.getBoundingClientRect().height)||0),he=a.useRef(0),rt=a.useCallback(u=>{o&&u===Z.length-1&&(te.current=new Date)},[]),{activeSnapPoint:ot,activeSnapPointIndex:Q,setActiveSnapPoint:Ce,onRelease:it,snapPointsOffset:Z,onDrag:at,shouldFade:Te,getPercentageDragged:st}=Ut({snapPoints:o,activeSnapPointProp:l,setActiveSnapPointProp:A,drawerRef:p,fadeFromIndex:f,overlayRef:F,onSnapPointChange:rt});It({isDisabled:!g||V||!k||X||!y});let{restorePositionSetting:lt}=Ft({isOpen:g,modal:k,nested:m,hasBeenOpened:y});function re(){return(window.innerWidth-ke)/window.innerWidth}function ct(u){var d;!h&&!o||p.current&&!p.current.contains(u.target)||(je.current=((d=p.current)==null?void 0:d.getBoundingClientRect().height)||0,N(!0),fe.current=new Date,Fe()&&window.addEventListener("touchend",()=>G.current=!1,{once:!0}),u.target.setPointerCapture(u.pointerId),pe.current=u.screenY)}function Ne(u,d){var x;let D=u,$=(x=window.getSelection())==null?void 0:x.toString(),P=p.current?le(p.current):null,S=new Date;if(te.current&&S.getTime()-te.current.getTime()<500)return!1;if(P>0)return!0;if($&&$.length>0)return!1;if(ne.current&&S.getTime()-ne.current.getTime()<v&&P===0||d)return ne.current=S,!1;for(;D;){if(D.scrollHeight>D.clientHeight){if(D.scrollTop!==0)return ne.current=new Date,!1;if(D.getAttribute("role")==="dialog")return!0}D=D.parentNode}return!0}function ut(u){if(V){let d=pe.current-u.screenY,x=d>0;if(o&&Q===0&&!h||!G.current&&!Ne(u.target,x))return;if(p.current.classList.add(ze),G.current=!0,R(p.current,{transition:"none"}),R(F.current,{transition:"none"}),o&&at({draggedDistance:d}),x&&!o){let I=Wt(d);R(p.current,{transform:`translate3d(0, ${Math.min(I*-1,0)}px, 0)`});return}let D=Math.abs(d),$=document.querySelector("[vaul-drawer-wrapper]"),P=D/je.current,S=st(D,x);S!==null&&(P=S);let ge=1-P;if((Te||f&&Q===f-1)&&(c==null||c(u,P),R(F.current,{opacity:`${ge}`,transition:"none"},!0)),$&&F.current&&r){let I=Math.min(re()+P*(1-re()),1),ie=8-P*8,ht=Math.max(0,14-P*14);R($,{borderRadius:`${ie}px`,transform:`scale(${I}) translate3d(0, ${ht}px, 0)`,transition:"none"},!0)}o||R(p.current,{transform:`translate3d(0, ${D}px, 0)`})}}a.useEffect(()=>()=>{oe(!1),lt()},[]),a.useEffect(()=>{var u;function d(){var x;if(!p.current)return;let D=document.activeElement;if(ue(D)||B.current){let $=((x=window.visualViewport)==null?void 0:x.height)||0,P=window.innerHeight-$,S=p.current.getBoundingClientRect().height||0;he.current||(he.current=S);let ge=p.current.getBoundingClientRect().top;if(Math.abs($e.current-P)>60&&(B.current=!B.current),o&&o.length>0&&Z&&Q){let I=Z[Q]||0;P+=I}if($e.current=P,S>$||B.current){let I=p.current.getBoundingClientRect().height,ie=I;I>$&&(ie=$-ke),C?p.current.style.height=`${I-Math.max(P,0)}px`:p.current.style.height=`${Math.max(ie,$-ge)}px`}else p.current.style.height=`${he.current}px`;o&&o.length>0&&!B.current?p.current.style.bottom="0px":p.current.style.bottom=`${Math.max(P,0)}px`}}return(u=window.visualViewport)==null||u.addEventListener("resize",d),()=>{var x;return(x=window.visualViewport)==null?void 0:x.removeEventListener("resize",d)}},[Q,o,Z]);function U(){p.current&&(H==null||H(),R(p.current,{transform:"translate3d(0, 100%, 0)",transition:`transform ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`}),R(F.current,{opacity:"0",transition:`opacity ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`}),oe(!1),setTimeout(()=>{_(!1),b(!1)},300),setTimeout(()=>{o&&Ce(o[0])},w.DURATION*1e3))}a.useEffect(()=>{if(!g&&r){let u=setTimeout(()=>{se(document.body)},200);return()=>clearTimeout(u)}},[g,r]),a.useEffect(()=>{e?(b(!0),j(!0)):U()},[e]),a.useEffect(()=>{de&&(n==null||n(g))},[g]),a.useEffect(()=>{Y(!0)},[]);function Se(){if(!p.current)return;let u=document.querySelector("[vaul-drawer-wrapper]"),d=le(p.current);R(p.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`}),R(F.current,{transition:`opacity ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`,opacity:"1"}),r&&d&&d>0&&g&&R(u,{borderRadius:`${Ie}px`,overflow:"hidden",transform:`scale(${re()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${w.DURATION}s`,transitionTimingFunction:`cubic-bezier(${w.EASE.join(",")})`},!0)}function dt(u){var d;if(!V||!p.current)return;G.current&&ue(u.target)&&u.target.blur(),p.current.classList.remove(ze),G.current=!1,N(!1),Pe.current=new Date;let x=le(p.current);if(!Ne(u.target,!1)||!x||Number.isNaN(x)||fe.current===null)return;let D=Pe.current.getTime()-fe.current.getTime(),$=pe.current-u.screenY,P=Math.abs($)/D;if(P>.05&&(De(!0),setTimeout(()=>{De(!1)},200)),o){it({draggedDistance:$,closeDrawer:U,velocity:P,dismissible:h}),i==null||i(u,!0);return}if($>0){Se(),i==null||i(u,!0);return}if(P>Ue){U(),i==null||i(u,!1);return}let S=Math.min((d=p.current.getBoundingClientRect().height)!=null?d:0,window.innerHeight);if(x>=S*E){U(),i==null||i(u,!1);return}i==null||i(u,!0),Se()}a.useEffect(()=>{g&&(te.current=new Date,oe(!0))},[g]),a.useEffect(()=>{T&&p.current.querySelectorAll("*").forEach(u=>{let d=u;(d.scrollHeight>d.clientHeight||d.scrollWidth>d.clientWidth)&&d.classList.add("vaul-scrollable")})},[T]);function oe(u){let d=document.querySelector("[vaul-drawer-wrapper]");!d||!r||(u?(R(document.body,{background:"black"},!0),R(d,{borderRadius:`${Ie}px`,overflow:"hidden",transform:`scale(${re()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${w.DURATION}s`,transitionTimingFunction:`cubic-bezier(${w.EASE.join(",")})`})):(se(d,"overflow"),se(d,"transform"),se(d,"borderRadius"),R(d,{transitionProperty:"transform, border-radius",transitionDuration:`${w.DURATION}s`,transitionTimingFunction:`cubic-bezier(${w.EASE.join(",")})`})))}function ft(u){let d=u?(window.innerWidth-W)/window.innerWidth:1,x=u?-W:0;me.current&&window.clearTimeout(me.current),R(p.current,{transition:`transform ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`,transform:`scale(${d}) translate3d(0, ${x}px, 0)`}),!u&&p.current&&(me.current=setTimeout(()=>{R(p.current,{transition:"none",transform:`translate3d(0, ${le(p.current)}px, 0)`})},500))}function mt(u,d){if(d<0)return;let x=(window.innerWidth-W)/window.innerWidth,D=x+d*(1-x),$=-W+d*W;R(p.current,{transform:`scale(${D}) translate3d(0, ${$}px, 0)`,transition:"none"})}function pt(u,d){let x=d?(window.innerWidth-W)/window.innerWidth:1,D=d?-W:0;d&&R(p.current,{transition:`transform ${w.DURATION}s cubic-bezier(${w.EASE.join(",")})`,transform:`scale(${x}) translate3d(0, ${D}px, 0)`})}return a.createElement($t,{modal:k,onOpenChange:u=>{if(e!==void 0){n==null||n(u);return}u?(j(!0),b(u)):U()},open:g},a.createElement(Le.Provider,{value:{visible:T,activeSnapPoint:ot,snapPoints:o,setActiveSnapPoint:Ce,drawerRef:p,overlayRef:F,scaleBackground:oe,onOpenChange:n,onPress:ct,setVisible:_,onRelease:dt,onDrag:ut,dismissible:h,isOpen:g,shouldFade:Te,closeDrawer:U,onNestedDrag:mt,onNestedOpenChange:ft,onNestedRelease:pt,keyboardIsOpen:B,openProp:e,modal:k,snapPointsOffset:Z}},t))}var Ve=a.forwardRef(function({children:e,...n},t){let{overlayRef:r,snapPoints:c,onRelease:i,shouldFade:o,isOpen:m,visible:E}=Re(),v=He(t,r),h=c&&c.length>0;return a.createElement(wt,{onMouseUp:i,ref:v,"vaul-drawer-visible":E?"true":"false","vaul-overlay":"","vaul-snap-points":m&&h?"true":"false","vaul-snap-points-overlay":m&&o?"true":"false",...n})});Ve.displayName="Drawer.Overlay";var Xe=a.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:n,onAnimationEnd:t,style:r,...c},i){let{drawerRef:o,onPress:m,onRelease:E,onDrag:v,dismissible:h,keyboardIsOpen:f,snapPointsOffset:l,visible:A,closeDrawer:C,modal:k,openProp:H,onOpenChange:L,setVisible:g}=Re(),b=He(i,o);return a.useEffect(()=>{g(!0)},[]),a.createElement(bt,{onOpenAutoFocus:y=>{e?e(y):(y.preventDefault(),o.current.focus())},onPointerDown:m,onPointerDownOutside:y=>{if(n==null||n(y),!k){y.preventDefault();return}f.current&&(f.current=!1),y.preventDefault(),L==null||L(!1),!(!h||H!==void 0)&&C()},onPointerMove:v,onPointerUp:E,ref:b,style:l&&l.length>0?{"--snap-point-height":`${l[0]}px`,...r}:r,...c,"vaul-drawer":"","vaul-drawer-visible":A?"true":"false"})});Xe.displayName="Drawer.Content";function Vt({onDrag:e,onOpenChange:n,...t}){let{onNestedDrag:r,onNestedOpenChange:c,onNestedRelease:i}=Re();if(!r)throw new Error("Drawer.NestedRoot must be placed in another drawer");return a.createElement(Ye,{nested:!0,onClose:()=>{c(!1)},onDrag:(o,m)=>{r(o,m),e==null||e(o,m)},onOpenChange:o=>{o&&c(o),n==null||n(o)},onRelease:i,...t})}var O={Root:Ye,NestedRoot:Vt,Content:Xe,Overlay:Ve,Trigger:xt,Portal:Rt,Close:Et,Title:Dt,Description:Pt};const Ge=({shouldScaleBackground:e=!0,...n})=>s.jsx(O.Root,{shouldScaleBackground:e,...n});Ge.displayName="Drawer";const Xt=O.Trigger,Gt=O.Portal,Qt=O.Close,Qe=M.forwardRef(({className:e,...n},t)=>s.jsx(O.Overlay,{ref:t,className:q("fixed inset-0 z-50 bg-black/80",e),...n}));Qe.displayName=O.Overlay.displayName;const Ze=M.forwardRef(({className:e,children:n,...t},r)=>s.jsxs(Gt,{children:[s.jsx(Qe,{}),s.jsxs(O.Content,{ref:r,className:q("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",e),...t,children:[s.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),n]})]}));Ze.displayName="DrawerContent";const Je=({className:e,...n})=>s.jsx("div",{className:q("grid gap-1.5 p-4 text-center sm:text-left",e),...n});Je.displayName="DrawerHeader";const Ke=({className:e,...n})=>s.jsx("div",{className:q("mt-auto flex flex-col gap-2 p-4",e),...n});Ke.displayName="DrawerFooter";const et=M.forwardRef(({className:e,...n},t)=>s.jsx(O.Title,{ref:t,className:q("text-lg font-semibold leading-none tracking-tight",e),...n}));et.displayName=O.Title.displayName;const tt=M.forwardRef(({className:e,...n},t)=>s.jsx(O.Description,{ref:t,className:q("text-sm text-muted-foreground",e),...n}));tt.displayName=O.Description.displayName;var nt={},Zt=Oe&&Oe.__awaiter||function(e,n,t,r){function c(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function m(h){try{v(r.next(h))}catch(f){o(f)}}function E(h){try{v(r.throw(h))}catch(f){o(f)}}function v(h){h.done?i(h.value):c(h.value).then(m,E)}v((r=r.apply(e,n||[])).next())})};Object.defineProperty(nt,"__esModule",{value:!0});const ee=M;class Jt{constructor(n){this.options=n,typeof window<"u"&&(this.rzrpayInstannce=new window.Razorpay(this.options))}on(n,t){this.rzrpayInstannce.on(n,t)}open(){this.rzrpayInstannce.open()}}const Kt=()=>{const e="https://checkout.razorpay.com/v1/checkout.js",n=(0,ee.useMemo)(()=>typeof window<"u",[]),[t,r]=(0,ee.useState)(!1),c=(0,ee.useCallback)(()=>!(!n||!("Razorpay"in window)),[]),i=(0,ee.useCallback)(o=>{if(n)return new Promise((m,E)=>{const v=document.createElement("script");v.src=o,v.onload=h=>{r(!0),m(h)},v.onerror=h=>E(h),document.body.appendChild(v)})},[]);return(0,ee.useEffect)(()=>{c()||Zt(void 0,void 0,void 0,function*(){try{yield i(e)}catch(o){throw new Error(o)}})},[]),[Jt,t]};var en=nt.default=Kt;const tn="_stop_motion_957oz_2",nn="_model_hover_957oz_6",rn="_access_padd_957oz_29",on="_model_hover_container_957oz_36",an="_filter_957oz_39",sn="_emptyCartMainParent_957oz_56",ln="_cg_957oz_59",Me={stop_motion:tn,model_hover:nn,access_padd:rn,model_hover_container:on,filter:an,emptyCartMainParent:sn,cg:ln},cn=window.screen.width;function bn(){const e=gt(i=>i);console.log(e.cartReducer.length);const n=vt(),[t]=en(),r=async()=>{const i={key:"rzp_test_aNYoQ5FgTfdEnR",amount:"3000",currency:"INR",name:"Acme Corp",description:"Test Transaction",image:yt,order_id:"order_9A33XWu170gUtm",handler:m=>{console.log(m)},prefill:{name:"Piyush Garg",email:"youremail@example.com",contact:"9999999999"},notes:{address:"Razorpay Corporate Office"},theme:{color:"#3399cc"}},o=new t(i);o.on("payment.failed",function(m){alert(m.error.code),alert(m.error.description),alert(m.error.source),alert(m.error.step),alert(m.error.reason),alert(m.error.metadata.order_id),alert(m.error.metadata.payment_id)}),o.open()},c=()=>{var i;return s.jsx("div",{className:"flex flex-wrap justify-center",children:(i=e.cartReducer)==null?void 0:i.map(o=>{if(!(o.title==""||o.quantity==0))return s.jsx(s.Fragment,{children:s.jsxs("div",{style:{cursor:"pointer",margin:"1rem 1rem 1rem 1rem"},className:Me.model_hover_container,children:[s.jsx("div",{style:{backgroundColor:o.color,width:"15rem",height:"20rem",overflow:"hidden",borderRadius:"1rem"},className:Me.model_hover,children:s.jsx("img",{src:o.img,style:{objectFit:"fill"}})}),s.jsxs("div",{style:{textAlign:"center",marginTop:"1.5rem"},children:[s.jsx("div",{style:{textAlign:"center",fontWeight:"bold"},children:o.title}),s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("div",{style:{fontWeight:300,fontSize:"1.5rem"},children:["₹",o.price]}),s.jsx("div",{style:{fontWeight:300},children:s.jsxs("div",{children:[s.jsx(J,{style:{backgroundColor:"white",color:"black",border:"1px solid gray",marginRight:"0.5rem",padding:"0.5rem",height:"2rem"},onClick:()=>{o.quantity===0?(n(ve.removeItem(o.id)),console.log(o)):n(ve.decrementQuantity(o.id))},children:"-"})," ",o.quantity,s.jsx(J,{onClick:()=>{n(ve.incrementQuantity(o.id)),console.log(o.quantity)},style:{backgroundColor:"white",color:"black",border:"1px solid gray",marginLeft:"0.5rem",padding:"0.5rem",height:"2rem"},children:"+"})]})})]})]})]})})})})};return s.jsxs(s.Fragment,{children:[()=>{if(cn>500)return s.jsx(jt.div,{initial:{height:"92vh"},animate:{height:0,transition:{duration:1}},exit:{height:"92vh",transition:{delay:.5,duration:1,ease:"easeInOut"}},style:{position:"absolute",bottom:0,width:"100%",height:"0vh",backgroundColor:"#202020",zIndex:100}})},s.jsxs("section",{className:"my-12",children:[s.jsx("div",{style:{fontSize:"2rem",fontWeight:600,textAlign:"center",marginBottom:"2rem"},children:"Cart/Wishlist"}),s.jsx("div",{style:{textAlign:"center"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),e.cartReducer.length>1?c():s.jsxs("div",{className:" emptyCartMainParent text-center relative top-20 h-full",children:[s.jsx("div",{id:"fs",children:s.jsx("p",{className:" text-3xl fof uppercase ",id:"fs"})}),s.jsx("img",{src:Ct,style:{left:"50%",transform:"translateX(-50%)"},className:"absolute cg"})]}),s.jsx("div",{children:e.cartReducer.length>1?s.jsxs(Ge,{children:[s.jsx("div",{className:"mt-16 text-center",children:s.jsx(Xt,{children:s.jsx(J,{className:"px-12 py-6",children:"Proceed"})})}),s.jsxs(Ze,{style:{maxHeight:"75vh"},children:[s.jsxs(Je,{style:{overflow:"scroll"},children:[s.jsx(et,{children:"Are you sure absolutely sure?"}),s.jsx(tt,{children:Array.from({length:5}).map(()=>s.jsxs("div",{className:"space-y-4 mx-6 my-6",children:[s.jsx(ye,{className:"h-64 w-64 "}),s.jsxs("div",{className:"space-y-2",children:[s.jsx(ye,{className:"h-4 w-[250px]"}),s.jsx(ye,{className:"h-4 w-[200px]"})]})]}))})]}),s.jsxs(Ke,{children:[s.jsx(J,{onClick:r,children:"Pay"}),s.jsx(Qt,{children:s.jsx(J,{variant:"outline",children:"Cancel"})})]})]})]}):s.jsx("div",{})})]})]})}export{bn as default};