function k(){}const dt=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function Q(){return Object.create(null)}function N(t){t.forEach(Y)}function F(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function It(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function mt(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t){let e;return Z(t,n=>e=n)(),e}function Gt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Jt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,c){if(r){const s=tt(e,n,i,c);t.p(s,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const et=typeof window<"u";let pt=et?()=>window.performance.now():()=>Date.now(),I=et?t=>requestAnimationFrame(t):k;const E=new Set;function nt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&I(nt)}function yt(t){let e;return E.size===0&&I(nt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let R=!1;function gt(){R=!0}function wt(){R=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:$t(1,r,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<c.length&&s[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(s[o],f)}}function xt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=st("style");return Et(it(t),e),e.sheet}function Et(t,e){return xt(t.head||t,e),e.sheet}function kt(t,e){if(R){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){R&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Yt(){return W(" ")}function Zt(){return W("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){At(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ct(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ne(t,e,n){return ct(t,e,n,st)}function ie(t,e,n){return ct(t,e,n,Nt)}function Ct(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function re(t){return Ct(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function le(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ue(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ae(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function fe(t,e){return new t(e)}const P=new Map;let q=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:vt(e),rules:{}};return P.set(t,n),n}function jt(t,e,n,i,r,c,s,u=0){const o=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=o){const w=e+(n-e)*c(p);l+=p*100+`%{${s(w,1-w)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${u}`,_=it(t),{stylesheet:m,rules:d}=P.get(_)||Tt(_,t);d[a]||(d[a]=!0,m.insertRule(`@keyframes ${a} ${f}`,m.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Pt())}function Pt(){I(()=>{q||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),P.clear())})}let C;function A(t){C=t}function G(){if(!C)throw new Error("Function called outside component initialization");return C}function _e(t){G().$$.on_mount.push(t)}function de(t){G().$$.after_update.push(t)}function he(){const t=G();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=lt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],U=[],j=[],V=[],ut=Promise.resolve();let L=!1;function at(){L||(L=!0,ut.then(ft))}function pe(){return at(),ut}function O(t){j.push(t)}const H=new Set;let x=0;function ft(){if(x!==0)return;const t=C;do{try{for(;x<v.length;){const e=v[x];x++,A(e),qt(e.$$)}}catch(e){throw v.length=0,x=0,e}for(A(null),v.length=0,x=0;U.length;)U.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];H.has(n)||(H.add(n),n())}j.length=0}while(v.length);for(;V.length;)V.pop()();L=!1,H.clear(),A(t)}function qt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let S;function Ot(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function X(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const D=new Set;let b;function ye(){b={r:0,c:[],p:b}}function ge(){b.r||N(b.c),b=b.p}function _t(t,e){t&&t.i&&(D.delete(t),t.i(e))}function Rt(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),b.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function we(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const u=b;u.r+=1;function o(){const{delay:l=0,duration:f=300,easing:a=dt,tick:_=k,css:m}=r||zt;m&&(s=jt(t,1,0,f,l,a,m));const d=pt()+l,$=d+f;O(()=>X(t,!1,"start")),yt(p=>{if(c){if(p>=$)return _(0,1),X(t,!1,"end"),--u.r||N(u.c),!1;if(p>=d){const w=a((p-d)/f);_(1-w,w)}}return c})}return F(r)?Ot().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),c&&(s&&Dt(t,s),c=!1)}}}const $e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function be(t,e){Rt(t,1,1,()=>{e.delete(t.key)})}function xe(t,e,n,i,r,c,s,u,o,l,f,a){let _=t.length,m=c.length,d=_;const $={};for(;d--;)$[t[d].key]=d;const p=[],w=new Map,z=new Map;for(d=m;d--;){const h=a(r,c,d),y=n(h);let g=s.get(y);g?i&&g.p(h,e):(g=l(y,h),g.c()),w.set(y,p[d]=g),y in $&&z.set(y,Math.abs(d-$[y]))}const J=new Set,K=new Set;function B(h){_t(h,1),h.m(u,f),s.set(h.key,h),f=h.first,m--}for(;_&&m;){const h=p[m-1],y=t[_-1],g=h.key,M=y.key;h===y?(f=h.first,_--,m--):w.has(M)?!s.has(g)||J.has(g)?B(h):K.has(M)?_--:z.get(g)>z.get(M)?(K.add(g),B(h)):(J.add(M),_--):(o(y,s),_--)}for(;_--;){const h=t[_];w.has(h.key)||o(h,s)}for(;m;)B(p[m-1]);return p}function ve(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=e[c];if(u){for(const o in s)o in u||(i[o]=1);for(const o in u)r[o]||(n[o]=u[o],r[o]=1);t[c]=u}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ee(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(Y).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),c.forEach(O)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(v.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,r,c,s,u=[-1]){const o=C;A(t);const l=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Q(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...m)=>{const d=m.length?m[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),f&&Lt(t,a)),_}):[],l.update(),f=!0,N(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){gt();const a=St(e.target);l.fragment&&l.fragment.l(a),a.forEach(rt)}else l.fragment&&l.fragment.c();e.intro&&_t(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),wt(),ft()}A(o)}class Se{$destroy(){Ht(this,1),this.$destroy=k}$on(e,n){if(!F(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{dt as $,pe as A,k as B,Nt as C,ie as D,kt as E,te as F,Xt as G,N as H,Gt as I,Jt as J,ae as K,Qt as L,Ut as M,Kt as N,$e as O,ht as P,ve as Q,O as R,Se as S,le as T,Z as U,ue as V,he as W,oe as X,F as Y,me as Z,It as _,Yt as a,we as a0,xe as a1,be as a2,Wt as a3,Vt as b,re as c,ge as d,Zt as e,_t as f,ye as g,rt as h,Ne as i,de as j,st as k,ne as l,St as m,ee as n,_e as o,ce as p,W as q,Ct as r,Ft as s,Rt as t,se as u,fe as v,Ee as w,ke as x,Bt as y,Ht as z};
