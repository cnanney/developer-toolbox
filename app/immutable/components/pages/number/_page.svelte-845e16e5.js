import{S as v,i as w,s as z,P as m,w as f,a as O,x as _,c as V,y as $,b as P,Q as d,f as g,t as y,z as S,h as R}from"../../../chunks/index-3776f072.js";import{C as B}from"../../../chunks/isSymbol-dfea86d6.js";import{C as D,a as c}from"../../../chunks/methods-64ff8b78.js";import{g as b}from"../../../chunks/stores-567c1fde.js";function H(s){let e,a,n,o;const u=[{inputLabel:T,inputValueStore:s[1],inputSize:h,inputTypeStore:s[0],inputOptions:s[2]}];let i={};for(let t=0;t<u.length;t+=1)i=m(i,u[t]);e=new B({props:i});const r=[{outputRows:s[4],inputValueStore:s[1],inputTypeStore:s[0],preCalc:s[3]}];let l={};for(let t=0;t<r.length;t+=1)l=m(l,r[t]);return n=new D({props:l}),{c(){f(e.$$.fragment),a=O(),f(n.$$.fragment)},l(t){_(e.$$.fragment,t),a=V(t),_(n.$$.fragment,t)},m(t,p){$(e,t,p),P(t,a,p),$(n,t,p),o=!0},p(t,[p]){const I=p&7?d(u,[{inputLabel:T,inputValueStore:t[1],inputSize:h,inputTypeStore:t[0],inputOptions:t[2]}]):{};e.$set(I);const C=p&27?d(r,[{outputRows:t[4],inputValueStore:t[1],inputTypeStore:t[0],preCalc:t[3]}]):{};n.$set(C)},i(t){o||(g(e.$$.fragment,t),g(n.$$.fragment,t),o=!0)},o(t){y(e.$$.fragment,t),y(n.$$.fragment,t),o=!1},d(t){S(e,t),t&&R(a),S(n,t)}}}const T="Number in",h=1;function q(s){const e=b("numberInputType","10"),a=b("numberInput",""),n=[{value:"10",text:"Decimal"},{value:"2",text:"Binary"},{value:"8",text:"Octal"},{value:"16",text:"Hexadecimal"}],o=(i,r)=>({2:"0b",8:"0o",10:"",16:"0x"}[r]||"")+i,u=[{cols:[{title:"Binary",size:2,method:c.bin,sendInputType:"2"}]},{cols:[{title:"Octal",size:1,method:c.oct,sendInputType:"8"}]},{cols:[{title:"Decimal",size:1,method:c.dec,sendInputType:"10"}]},{cols:[{title:"Hexadecimal",size:1,method:c.hex,sendInputType:"16"}]}];return[e,a,n,o,u]}class j extends v{constructor(e){super(),w(this,e,q,H,z,{})}}export{j as default};
