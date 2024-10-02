import{r as t,j as $}from"./index-S9ZFpKWr.js";import{a as i,_ as l,c as u}from"./index-gF_s75Pt.js";import{$ as w,a as S,b as m}from"./index-47JtSr82.js";const p="Avatar",[_,T]=w(p),[L,g]=_(p),N=t.forwardRef((e,r)=>{const{__scopeAvatar:a,...o}=e,[c,s]=t.useState("idle");return t.createElement(L,{scope:a,imageLoadingStatus:c,onImageLoadingStatusChange:s},t.createElement(i.span,l({},o,{ref:r})))}),h="AvatarImage",E=t.forwardRef((e,r)=>{const{__scopeAvatar:a,src:o,onLoadingStatusChange:c=()=>{},...s}=e,n=g(h,a),d=C(o),f=S(b=>{c(b),n.onImageLoadingStatusChange(b)});return m(()=>{d!=="idle"&&f(d)},[d,f]),d==="loaded"?t.createElement(i.img,l({},s,{ref:r,src:o})):null}),R="AvatarFallback",y=t.forwardRef((e,r)=>{const{__scopeAvatar:a,delayMs:o,...c}=e,s=g(R,a),[n,d]=t.useState(o===void 0);return t.useEffect(()=>{if(o!==void 0){const f=window.setTimeout(()=>d(!0),o);return()=>window.clearTimeout(f)}},[o]),n&&s.imageLoadingStatus!=="loaded"?t.createElement(i.span,l({},c,{ref:r})):null});function C(e){const[r,a]=t.useState("idle");return m(()=>{if(!e){a("error");return}let o=!0;const c=new window.Image,s=n=>()=>{o&&a(n)};return a("loading"),c.onload=s("loaded"),c.onerror=s("error"),c.src=e,()=>{o=!1}},[e]),r}const v=N,x=E,A=y,I=t.forwardRef(({className:e,...r},a)=>$.jsx(v,{ref:a,className:u("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...r}));I.displayName=v.displayName;const M=t.forwardRef(({className:e,...r},a)=>$.jsx(x,{ref:a,className:u("aspect-square h-full w-full",e),...r}));M.displayName=x.displayName;const j=t.forwardRef(({className:e,...r},a)=>$.jsx(A,{ref:a,className:u("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...r}));j.displayName=A.displayName;export{I as A,M as a,j as b};
