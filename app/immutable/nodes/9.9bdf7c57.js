import{S as L,i as M,s as H,C as h,y as T,a as P,z as _,c as Q,A as I,b as U,H as y,g as $,d as g,B as O,h as V,a1 as z}from"../chunks/index.a6e5a0ea.js";import{C as D}from"../chunks/isSymbol.4a57b641.js";import{C as R,D as b,t as a}from"../chunks/methods.24cfb888.js";import{g as C}from"../chunks/clsx.m.fec05fde.js";function q(l){let s,i,t,p;const c=[{inputLabel:k,inputValueStore:l[1],inputSize:w,inputTypeStore:l[0],inputOptions:l[2],inputModifiers:l[3]}];let u={};for(let e=0;e<c.length;e+=1)u=h(u,c[e]);s=new D({props:u});const m=[{outputRows:l[5],inputValueStore:l[1],inputTypeStore:l[0],preCalc:l[4]}];let o={};for(let e=0;e<m.length;e+=1)o=h(o,m[e]);return t=new R({props:o}),{c(){T(s.$$.fragment),i=P(),T(t.$$.fragment)},l(e){_(s.$$.fragment,e),i=Q(e),_(t.$$.fragment,e)},m(e,n){I(s,e,n),U(e,i,n),I(t,e,n),p=!0},p(e,[n]){const r=n&15?y(c,[{inputLabel:k,inputValueStore:e[1],inputSize:w,inputTypeStore:e[0],inputOptions:e[2],inputModifiers:e[3]}]):{};s.$set(r);const f=n&51?y(m,[{outputRows:e[5],inputValueStore:e[1],inputTypeStore:e[0],preCalc:e[4]}]):{};t.$set(f)},i(e){p||($(s.$$.fragment,e),$(t.$$.fragment,e),p=!0)},o(e){g(s.$$.fragment,e),g(t.$$.fragment,e),p=!1},d(e){O(s,e),e&&V(i),O(t,e)}}}const k="Time in",w=1;function N(l){const s=C("timeInputType","fromSeconds"),i=C("timeInput","");function t(o=null){const e=z(i),n=z(s);let r=b.now().toUTC(),f=o===null?r:u(e,n)||r,S=n.replace("from","to"),v={toSQL:{includeOffset:!1}},d=(o===null?f:f.plus({[o]:1}))[S](v[S]||{});i.set(typeof d=="string"?d.replace(/\.000$/,""):String(d))}const p=[{value:"fromSeconds",text:"Unix (Seconds)"},{value:"fromMillis",text:"Unix (Milliseconds)"},{value:"fromISO",text:"ISO 8601"},{value:"fromSQL",text:"SQL"},{value:"fromHTTP",text:"HTTP"}],c=[{html:"Now",callback:()=>t(),separator:","},{html:"+1",separator:""},{html:"sec",callback:()=>t("seconds"),separator:","},{html:"min",callback:()=>t("minutes"),separator:","},{html:"hour",callback:()=>t("hours"),separator:","},{html:"day",callback:()=>t("days"),separator:","},{html:"month",callback:()=>t("months"),separator:","},{html:"year",callback:()=>t("years")}],u=(o,e)=>{try{let n=["fromMillis","fromSeconds"].includes(e)?Number(o):o,r=b[e](n,{zone:"utc"});return!o||!r.isValid?null:r}catch{return null}},m=[{cols:[{title:"Unix (Seconds)",size:1,method:a.unix_sec,sendInputType:"fromSeconds"},{title:"Unix (Milliseconds)",size:1,method:a.unix_milli,sendInputType:"fromMillis"},{title:"ISO 8601",size:1,method:a.iso,sendInputType:"fromISO"}]},{cols:[{title:"ISO Week",size:1,method:a.iso_week,sendInputType:"fromISO"},{title:"ISO Date",size:1,method:a.iso_date,sendInputType:"fromISO"},{title:"ISO Time",size:1,method:a.iso_time,sendInputType:"fromISO"}]},{cols:[{title:"SQL",size:1,method:a.sql,sendInputType:"fromSQL"},{title:"HTTP",size:1,method:a.http,sendInputType:"fromHTTP"}]},{cols:[{title:"Local (ISO 8601)",size:1,method:a.local,send:!1},{title:"Local (Full)",size:1,method:a.full,send:!1}]}];return[s,i,p,c,u,m]}class W extends L{constructor(s){super(),M(this,s,N,q,H,{})}}export{W as component};
