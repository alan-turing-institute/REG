var ze=Object.defineProperty;var We=(t,e,n)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ke=(t,e,n)=>We(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function E(){}function Ne(t,e){for(const n in e)t[n]=e[n];return t}function Ge(t){return t()}function Te(){return Object.create(null)}function Y(t){t.forEach(Ge)}function Be(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let fe;function X(t,e){return t===e?!0:(fe||(fe=document.createElement("a")),fe.href=e,t===fe.href)}function Je(t){return Object.keys(t).length===0}function Ke(t,...e){if(t==null){for(const s of e)s(void 0);return E}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function re(t,e,n){t.$$.on_destroy.push(Ke(e,n))}function oe(t,e,n,s){if(t){const r=Pe(t,e,n,s);return t[0](r)}}function Pe(t,e,n,s){return t[1]&&s?Ne(n.ctx.slice(),t[1](s(e))):n.ctx}function ae(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function ue(t,e,n,s,r,i){if(r){const o=Pe(e,n,s,i);t.p(o,r)}}function ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function ye(t,e,n){return t.set(n),e}function m(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function Oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function $(){return J(" ")}function Ye(){return J("")}function H(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ue(t){return Array.from(t.childNodes)}function be(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ee(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function z(t,e,n){t.classList.toggle(e,!!n)}let ie;function se(t){ie=t}function Xe(){if(!ie)throw new Error("Function called outside component initialization");return ie}function Qe(t){Xe().$$.on_mount.push(t)}const te=[],K=[];let ne=[];const Se=[],Ve=Promise.resolve();let Ce=!1;function Ze(){Ce||(Ce=!0,Ve.then(Me))}function me(t){ne.push(t)}function pe(t){Se.push(t)}const $e=new Set;let x=0;function Me(){if(x!==0)return;const t=ie;do{try{for(;x<te.length;){const e=te[x];x++,se(e),xe(e.$$)}}catch(e){throw te.length=0,x=0,e}for(se(null),te.length=0,x=0;K.length;)K.pop()();for(let e=0;e<ne.length;e+=1){const n=ne[e];$e.has(n)||($e.add(n),n())}ne.length=0}while(te.length);for(;Se.length;)Se.pop()();Ce=!1,$e.clear(),se(t)}function xe(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(me)}}function et(t){const e=[],n=[];ne.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),ne=e}const ge=new Set;let V;function He(){V={r:0,c:[],p:V}}function Fe(){V.r||Y(V.c),V=V.p}function C(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function q(t,e,n,s){if(t&&t.o){if(ge.has(t))return;ge.add(t),V.c.push(()=>{ge.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function _e(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ve(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function B(t){t&&t.c()}function I(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),me(()=>{const i=t.$$.on_mount.map(Ge).filter(Be);t.$$.on_destroy?t.$$.on_destroy.push(...i):Y(i),t.$$.on_mount=[]}),r.forEach(me)}function A(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){t.$$.dirty[0]===-1&&(te.push(t),Ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,s,r,i,o=null,a=[-1]){const d=ie;se(t);const l=t.$$={fragment:null,ctx:[],props:i,update:E,not_equal:r,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Te(),dirty:a,skip_bound:!1,root:e.target||d.$$.root};o&&o(l.root);let g=!1;if(l.ctx=n?n(t,e.props||{},(f,u,...h)=>{const k=h.length?h[0]:u;return l.ctx&&r(l.ctx[f],l.ctx[f]=k)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](k),g&&tt(t,f)),u}):[],l.update(),g=!0,Y(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const f=Ue(e.target);l.fragment&&l.fragment.l(f),f.forEach(b)}else l.fragment&&l.fragment.c();e.intro&&C(t.$$.fragment),I(t,e.target,e.anchor),Me()}se(d)}class D{constructor(){ke(this,"$$");ke(this,"$$set")}$destroy(){A(this,1),this.$destroy=E}$on(e,n){if(!Be(n))return E;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nt);function st(t){let e,n,s,r,i;return{c(){e=p("link"),n=$(),s=p("picture"),r=p("img"),c(e,"rel","preload"),c(e,"href",t[0]),c(e,"as","image"),X(r.src,i=t[0])||c(r,"src",i),c(r,"alt",""),c(r,"class","svelte-j4v6fw"),Ee(s,"--opacity",t[1]),c(s,"class","svelte-j4v6fw")},m(o,a){m(document.head,e),w(o,n,a),w(o,s,a),m(s,r)},p(o,[a]){a&1&&c(e,"href",o[0]),a&1&&!X(r.src,i=o[0])&&c(r,"src",i),a&2&&Ee(s,"--opacity",o[1])},i:E,o:E,d(o){o&&(b(n),b(s)),b(e)}}}function rt(t,e,n){let{imagePath:s}=e,{opacity:r}=e;return t.$$set=i=>{"imagePath"in i&&n(0,s=i.imagePath),"opacity"in i&&n(1,r=i.opacity)},[s,r]}class it extends D{constructor(e){super(),F(this,e,rt,st,O,{imagePath:0,opacity:1})}}function lt(t){let e,n,s,r,i;return{c(){e=p("a"),n=p("img"),X(n.src,s=t[2])||c(n,"src",s),c(n,"alt",t[3]),c(n,"class","svelte-r42k52"),z(n,"hovered",t[0]),c(e,"href",t[1]),c(e,"target","_blank"),z(e,"hovered",t[0])},m(o,a){w(o,e,a),m(e,n),r||(i=[H(e,"mouseenter",t[4]),H(e,"mouseleave",t[5])],r=!0)},p(o,[a]){a&4&&!X(n.src,s=o[2])&&c(n,"src",s),a&8&&c(n,"alt",o[3]),a&1&&z(n,"hovered",o[0]),a&2&&c(e,"href",o[1]),a&1&&z(e,"hovered",o[0])},i:E,o:E,d(o){o&&b(e),r=!1,Y(i)}}}function ot(t,e,n){let{href:s}=e,{imgSrc:r}=e,{alt:i}=e,{hovered:o}=e;const a=()=>n(0,o=!0),d=()=>n(0,o=!1);return t.$$set=l=>{"href"in l&&n(1,s=l.href),"imgSrc"in l&&n(2,r=l.imgSrc),"alt"in l&&n(3,i=l.alt),"hovered"in l&&n(0,o=l.hovered)},[o,s,r,i,a,d]}let at=class extends D{constructor(e){super(),F(this,e,ot,lt,O,{href:1,imgSrc:2,alt:3,hovered:0})}};function ut(t){let e,n,s,r,i,o,a,d,l;const g=t[4].default,f=oe(g,t,t[3],null);return{c(){e=p("div"),n=p("a"),s=p("h3"),r=J(t[2]),i=$(),o=p("div"),f&&f.c(),c(s,"class","svelte-ac8nz1"),c(n,"class","text svelte-ac8nz1"),c(n,"href",t[1]),c(n,"target","_blank"),z(n,"hovered",t[0]),c(e,"class","text svelte-ac8nz1"),c(o,"class","text svelte-ac8nz1")},m(u,h){w(u,e,h),m(e,n),m(n,s),m(s,r),w(u,i,h),w(u,o,h),f&&f.m(o,null),a=!0,d||(l=[H(n,"mouseenter",t[5]),H(n,"mouseleave",t[6])],d=!0)},p(u,[h]){(!a||h&4)&&be(r,u[2]),(!a||h&2)&&c(n,"href",u[1]),(!a||h&1)&&z(n,"hovered",u[0]),f&&f.p&&(!a||h&8)&&ue(f,g,u,u[3],a?ae(g,u[3],h,null):ce(u[3]),null)},i(u){a||(C(f,u),a=!0)},o(u){q(f,u),a=!1},d(u){u&&(b(e),b(i),b(o)),f&&f.d(u),d=!1,Y(l)}}}function ct(t,e,n){let{$$slots:s={},$$scope:r}=e,{href:i}=e,{title:o}=e,{hovered:a}=e;const d=()=>n(0,a=!0),l=()=>n(0,a=!1);return t.$$set=g=>{"href"in g&&n(1,i=g.href),"title"in g&&n(2,o=g.title),"hovered"in g&&n(0,a=g.hovered),"$$scope"in g&&n(3,r=g.$$scope)},[a,i,o,r,s,d,l]}let ft=class extends D{constructor(e){super(),F(this,e,ct,ut,O,{href:1,title:2,hovered:0})}};function dt(t){let e;const n=t[4].default,s=oe(n,t,t[7],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&128)&&ue(s,n,r,r[7],e?ae(n,r[7],i,null):ce(r[7]),null)},i(r){e||(C(s,r),e=!0)},o(r){q(s,r),e=!1},d(r){s&&s.d(r)}}}function ht(t){let e,n,s,r,i,o;function a(f){t[5](f)}let d={href:t[0],imgSrc:t[2],alt:t[1]};t[3]!==void 0&&(d.hovered=t[3]),e=new at({props:d}),K.push(()=>ve(e,"hovered",a));function l(f){t[6](f)}let g={href:t[0],title:t[1],$$slots:{default:[dt]},$$scope:{ctx:t}};return t[3]!==void 0&&(g.hovered=t[3]),r=new ft({props:g}),K.push(()=>ve(r,"hovered",l)),{c(){B(e.$$.fragment),s=$(),B(r.$$.fragment)},m(f,u){I(e,f,u),w(f,s,u),I(r,f,u),o=!0},p(f,[u]){const h={};u&1&&(h.href=f[0]),u&4&&(h.imgSrc=f[2]),u&2&&(h.alt=f[1]),!n&&u&8&&(n=!0,h.hovered=f[3],pe(()=>n=!1)),e.$set(h);const k={};u&1&&(k.href=f[0]),u&2&&(k.title=f[1]),u&128&&(k.$$scope={dirty:u,ctx:f}),!i&&u&8&&(i=!0,k.hovered=f[3],pe(()=>i=!1)),r.$set(k)},i(f){o||(C(e.$$.fragment,f),C(r.$$.fragment,f),o=!0)},o(f){q(e.$$.fragment,f),q(r.$$.fragment,f),o=!1},d(f){f&&b(s),A(e,f),A(r,f)}}}function gt(t,e,n){let{$$slots:s={},$$scope:r}=e,{href:i}=e,{title:o}=e,{imgSrc:a}=e,d=!1;function l(f){d=f,n(3,d)}function g(f){d=f,n(3,d)}return t.$$set=f=>{"href"in f&&n(0,i=f.href),"title"in f&&n(1,o=f.title),"imgSrc"in f&&n(2,a=f.imgSrc),"$$scope"in f&&n(7,r=f.$$scope)},[i,o,a,d,s,l,g,r]}class je extends D{constructor(e){super(),F(this,e,gt,ht,O,{href:0,title:1,imgSrc:2})}}const mt="/REG/svelte/assets/reg_team-GQL4UVjP.jpg",pt="/REG/svelte/assets/ati_space-C9DfJzJO.jpg";function _t(t){let e;return{c(){e=p("p"),e.textContent=`Learn more about our three job roles, and meet some of the
                people in our team.`,c(e,"class","svelte-bfd3lw")},m(n,s){w(n,e,s)},p:E,d(n){n&&b(e)}}}function vt(t){let e;return{c(){e=p("p"),e.textContent=`The Alan Turing Institute is the UK's national institute for
                data science and artificial intelligence.`,c(e,"class","svelte-bfd3lw")},m(n,s){w(n,e,s)},p:E,d(n){n&&b(e)}}}function bt(t){let e,n,s,r,i,o,a,d,l,g,f,u;return a=new je({props:{href:"https://www.turing.ac.uk/research/research-engineering/meet-the-team",imgSrc:mt,title:"Meet the team",$$slots:{default:[_t]},$$scope:{ctx:t}}}),l=new je({props:{href:"https://www.turing.ac.uk/",imgSrc:pt,title:"The Alan Turing Institute",$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("p"),n.textContent=`We are a team of data scientists, software engineers, and compute
        specialists who build tools and software to support research in data
        science and artificial intelligence at The Alan Turing Institute.`,s=$(),r=p("p"),r.textContent=`In particular, we take traditional research outputs such as algorithms
        or models and transform them into software that is reproducible,
        scalable, and sustainable.`,i=$(),o=p("div"),B(a.$$.fragment),d=$(),B(l.$$.fragment),g=$(),f=p("p"),f.textContent=`Although all of us have our own specialist backgrounds, we often work
        with researchers across other disciplines. Scroll down further to get a
        flavour of the kinds of projects we work on.`,c(n,"class","svelte-bfd3lw"),c(r,"class","svelte-bfd3lw"),c(o,"id","profile"),c(o,"class","svelte-bfd3lw"),c(f,"class","nobottom svelte-bfd3lw"),c(e,"id","container"),c(e,"class","svelte-bfd3lw")},m(h,k){w(h,e,k),m(e,n),m(e,s),m(e,r),m(e,i),m(e,o),I(a,o,null),m(o,d),I(l,o,null),m(e,g),m(e,f),u=!0},p(h,[k]){const _={};k&1&&(_.$$scope={dirty:k,ctx:h}),a.$set(_);const v={};k&1&&(v.$$scope={dirty:k,ctx:h}),l.$set(v)},i(h){u||(C(a.$$.fragment,h),C(l.$$.fragment,h),u=!0)},o(h){q(a.$$.fragment,h),q(l.$$.fragment,h),u=!1},d(h){h&&b(e),A(a),A(l)}}}class wt extends D{constructor(e){super(),F(this,e,null,bt,O,{})}}function kt(t){let e,n;const s=t[1].default,r=oe(s,t,t[0],null);return{c(){e=p("div"),r&&r.c(),c(e,"id","grid-container"),c(e,"class","svelte-hvi7pm")},m(i,o){w(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&ue(r,s,i,i[0],n?ae(s,i[0],o,null):ce(i[0]),null)},i(i){n||(C(r,i),n=!0)},o(i){q(r,i),n=!1},d(i){i&&b(e),r&&r.d(i)}}}function $t(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class yt extends D{constructor(e){super(),F(this,e,$t,kt,O,{})}}function St(t){let e,n,s;return{c(){e=p("div"),n=p("img"),X(n.src,s=t[2])||c(n,"src",s),c(n,"alt",t[3]),c(n,"class","svelte-1l8agsr"),c(e,"class","image-container svelte-1l8agsr")},m(r,i){w(r,e,i),m(e,n)},p(r,i){i&4&&!X(n.src,s=r[2])&&c(n,"src",s),i&8&&c(n,"alt",r[3])},d(r){r&&b(e)}}}function Ct(t){let e,n,s,r,i;return{c(){e=p("a"),n=p("img"),X(n.src,s=t[2])||c(n,"src",s),c(n,"alt",t[3]),c(n,"class","svelte-1l8agsr"),z(n,"hovered",t[0]),c(e,"href",t[1]),c(e,"target","_blank"),c(e,"class","image-container svelte-1l8agsr"),z(e,"hovered",t[0])},m(o,a){w(o,e,a),m(e,n),r||(i=[H(e,"mouseenter",t[4]),H(e,"mouseleave",t[5])],r=!0)},p(o,a){a&4&&!X(n.src,s=o[2])&&c(n,"src",s),a&8&&c(n,"alt",o[3]),a&1&&z(n,"hovered",o[0]),a&2&&c(e,"href",o[1]),a&1&&z(e,"hovered",o[0])},d(o){o&&b(e),r=!1,Y(i)}}}function jt(t){let e;function n(i,o){return i[1]!==null?Ct:St}let s=n(t),r=s(t);return{c(){r.c(),e=Ye()},m(i,o){r.m(i,o),w(i,e,o)},p(i,[o]){s===(s=n(i))&&r?r.p(i,o):(r.d(1),r=s(i),r&&(r.c(),r.m(e.parentNode,e)))},i:E,o:E,d(i){i&&b(e),r.d(i)}}}function qt(t,e,n){let{href:s}=e,{imgSrc:r}=e,{alt:i}=e,{hovered:o}=e;const a=()=>n(0,o=!0),d=()=>n(0,o=!1);return t.$$set=l=>{"href"in l&&n(1,s=l.href),"imgSrc"in l&&n(2,r=l.imgSrc),"alt"in l&&n(3,i=l.alt),"hovered"in l&&n(0,o=l.hovered)},[o,s,r,i,a,d]}class Tt extends D{constructor(e){super(),F(this,e,qt,jt,O,{href:1,imgSrc:2,alt:3,hovered:0})}}function Et(t){let e,n;return{c(){e=p("h3"),n=J(t[2]),c(e,"class","svelte-1y0yvll")},m(s,r){w(s,e,r),m(e,n)},p(s,r){r&4&&be(n,s[2])},d(s){s&&b(e)}}}function Rt(t){let e,n,s,r,i;return{c(){e=p("a"),n=p("h3"),s=J(t[2]),c(n,"class","svelte-1y0yvll"),c(e,"href",t[1]),c(e,"target","_blank"),c(e,"class","svelte-1y0yvll"),z(e,"hovered",t[0])},m(o,a){w(o,e,a),m(e,n),m(n,s),r||(i=[H(e,"mouseenter",t[6]),H(e,"mouseleave",t[7])],r=!0)},p(o,a){a&4&&be(s,o[2]),a&2&&c(e,"href",o[1]),a&1&&z(e,"hovered",o[0])},d(o){o&&b(e),r=!1,Y(i)}}}function Lt(t){let e,n,s;function r(l,g){return l[1]!==null?Rt:Et}let i=r(t),o=i(t);const a=t[5].default,d=oe(a,t,t[4],null);return{c(){e=p("div"),o.c(),n=$(),d&&d.c(),c(e,"class","text svelte-1y0yvll"),z(e,"alignRight",t[3])},m(l,g){w(l,e,g),o.m(e,null),m(e,n),d&&d.m(e,null),s=!0},p(l,[g]){i===(i=r(l))&&o?o.p(l,g):(o.d(1),o=i(l),o&&(o.c(),o.m(e,n))),d&&d.p&&(!s||g&16)&&ue(d,a,l,l[4],s?ae(a,l[4],g,null):ce(l[4]),null),(!s||g&8)&&z(e,"alignRight",l[3])},i(l){s||(C(d,l),s=!0)},o(l){q(d,l),s=!1},d(l){l&&b(e),o.d(),d&&d.d(l)}}}function It(t,e,n){let{$$slots:s={},$$scope:r}=e,{href:i}=e,{title:o}=e,{hovered:a}=e,{alignRight:d}=e;const l=()=>n(0,a=!0),g=()=>n(0,a=!1);return t.$$set=f=>{"href"in f&&n(1,i=f.href),"title"in f&&n(2,o=f.title),"hovered"in f&&n(0,a=f.hovered),"alignRight"in f&&n(3,d=f.alignRight),"$$scope"in f&&n(4,r=f.$$scope)},[a,i,o,d,r,s,l,g]}class At extends D{constructor(e){super(),F(this,e,It,Lt,O,{href:1,title:2,hovered:0,alignRight:3})}}function Gt(t){let e;const n=t[5].default,s=oe(n,t,t[8],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&256)&&ue(s,n,r,r[8],e?ae(n,r[8],i,null):ce(r[8]),null)},i(r){e||(C(s,r),e=!0)},o(r){q(s,r),e=!1},d(r){s&&s.d(r)}}}function Bt(t){let e,n,s,r,i,o,a;function d(u){t[6](u)}let l={href:t[1],imgSrc:t[3],alt:t[2]};t[4]!==void 0&&(l.hovered=t[4]),n=new Tt({props:l}),K.push(()=>ve(n,"hovered",d));function g(u){t[7](u)}let f={href:t[1],title:t[2],alignRight:!t[0],$$slots:{default:[Gt]},$$scope:{ctx:t}};return t[4]!==void 0&&(f.hovered=t[4]),i=new At({props:f}),K.push(()=>ve(i,"hovered",g)),{c(){e=p("div"),B(n.$$.fragment),r=$(),B(i.$$.fragment),c(e,"class","grid-container picture-first svelte-yxc9k3"),z(e,"reversed",!t[0])},m(u,h){w(u,e,h),I(n,e,null),m(e,r),I(i,e,null),a=!0},p(u,[h]){const k={};h&2&&(k.href=u[1]),h&8&&(k.imgSrc=u[3]),h&4&&(k.alt=u[2]),!s&&h&16&&(s=!0,k.hovered=u[4],pe(()=>s=!1)),n.$set(k);const _={};h&2&&(_.href=u[1]),h&4&&(_.title=u[2]),h&1&&(_.alignRight=!u[0]),h&256&&(_.$$scope={dirty:h,ctx:u}),!o&&h&16&&(o=!0,_.hovered=u[4],pe(()=>o=!1)),i.$set(_),(!a||h&1)&&z(e,"reversed",!u[0])},i(u){a||(C(n.$$.fragment,u),C(i.$$.fragment,u),a=!0)},o(u){q(n.$$.fragment,u),q(i.$$.fragment,u),a=!1},d(u){u&&b(e),A(n),A(i)}}}function Pt(t,e,n){let{$$slots:s={},$$scope:r}=e,{pictureFirst:i}=e,{href:o}=e,{title:a}=e,{imgSrc:d}=e,l=!1;function g(u){l=u,n(4,l)}function f(u){l=u,n(4,l)}return t.$$set=u=>{"pictureFirst"in u&&n(0,i=u.pictureFirst),"href"in u&&n(1,o=u.href),"title"in u&&n(2,a=u.title),"imgSrc"in u&&n(3,d=u.imgSrc),"$$scope"in u&&n(8,r=u.$$scope)},[i,o,a,d,l,s,g,f,r]}class de extends D{constructor(e){super(),F(this,e,Pt,Bt,O,{pictureFirst:0,href:1,title:2,imgSrc:3})}}function Ot(t){let e;return{c(){e=p("p"),e.textContent=`“I tell you I must go!” I retorted, roused to something like
            passion. “Do you think I can stay to become nothing to you? Do you
            think I am an automaton?—a machine without feelings? and can bear to
            have my morsel of bread snatched from my lips, and my drop of living
            water dashed from my cup?`,c(e,"class","svelte-1drdaye")},m(n,s){w(n,e,s)},p:E,d(n){n&&b(e)}}}function Mt(t){let e;return{c(){e=p("p"),e.textContent=`Do you think, because I am poor, obscure, plain, and little, I am
            soulless and heartless? You think wrong!—I have as much soul as
            you,—and full as much heart! And if God had gifted me with some
            beauty and much wealth, I should have made it as hard for you to
            leave me, as it is now for me to leave you.`,c(e,"class","svelte-1drdaye")},m(n,s){w(n,e,s)},p:E,d(n){n&&b(e)}}}function Ht(t){let e;return{c(){e=p("p"),e.textContent=`I am not talking to you now through the medium of custom,
            conventionalities, nor even of mortal flesh;—it is my spirit that
            addresses your spirit; just as if both had passed through the grave,
            and we stood at God’s feet, equal,—as we are!”`,c(e,"class","svelte-1drdaye")},m(n,s){w(n,e,s)},p:E,d(n){n&&b(e)}}}function Ft(t){let e;return{c(){e=p("p"),e.textContent="Lorem ipsum, Jane's monologue ended there.",c(e,"class","svelte-1drdaye")},m(n,s){w(n,e,s)},p:E,d(n){n&&b(e)}}}function Dt(t){let e,n,s,r,i,o,a,d;return e=new de({props:{pictureFirst:!0,href:"https://www.turing.ac.uk/research/transformation-health",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg",title:"Health",$$slots:{default:[Ot]},$$scope:{ctx:t}}}),s=new de({props:{pictureFirst:!1,href:"https://www.turing.ac.uk/research/environment-and-sustainability",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg",title:"Environment and Sustainability",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),i=new de({props:{pictureFirst:!0,href:"https://www.turing.ac.uk/research/defence-and-national-security",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg",title:"Defence and National Security",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),a=new de({props:{pictureFirst:!1,href:"https://www.turing.ac.uk/research/research-programmes/fundamental-ai",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg",title:"Foundational Research",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment),n=$(),B(s.$$.fragment),r=$(),B(i.$$.fragment),o=$(),B(a.$$.fragment)},m(l,g){I(e,l,g),w(l,n,g),I(s,l,g),w(l,r,g),I(i,l,g),w(l,o,g),I(a,l,g),d=!0},p(l,g){const f={};g&1&&(f.$$scope={dirty:g,ctx:l}),e.$set(f);const u={};g&1&&(u.$$scope={dirty:g,ctx:l}),s.$set(u);const h={};g&1&&(h.$$scope={dirty:g,ctx:l}),i.$set(h);const k={};g&1&&(k.$$scope={dirty:g,ctx:l}),a.$set(k)},i(l){d||(C(e.$$.fragment,l),C(s.$$.fragment,l),C(i.$$.fragment,l),C(a.$$.fragment,l),d=!0)},o(l){q(e.$$.fragment,l),q(s.$$.fragment,l),q(i.$$.fragment,l),q(a.$$.fragment,l),d=!1},d(l){l&&(b(n),b(r),b(o)),A(e,l),A(s,l),A(i,l),A(a,l)}}}function zt(t){let e,n,s,r,i,o,a,d;return a=new yt({props:{id:"container",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){e=p("p"),e.textContent=`Research at the Turing is largely organised into three themes, namely:
    Health; Environment and Sustainability; and Defence and National Security.
    Apart from these, we also carry out foundational research in data science
    and AI, which spans all of these themes.`,n=$(),s=p("p"),s.textContent="(Something about DSaP?!)",r=$(),i=p("p"),i.textContent="Click on each of these links to learn more.",o=$(),B(a.$$.fragment),c(e,"class","svelte-1drdaye"),c(s,"class","svelte-1drdaye"),c(i,"class","svelte-1drdaye")},m(l,g){w(l,e,g),w(l,n,g),w(l,s,g),w(l,r,g),w(l,i,g),w(l,o,g),I(a,l,g),d=!0},p(l,[g]){const f={};g&1&&(f.$$scope={dirty:g,ctx:l}),a.$set(f)},i(l){d||(C(a.$$.fragment,l),d=!0)},o(l){q(a.$$.fragment,l),d=!1},d(l){l&&(b(e),b(n),b(s),b(r),b(i),b(o)),A(a,l)}}}class Wt extends D{constructor(e){super(),F(this,e,null,zt,O,{})}}const Nt="/REG/svelte/assets/left-BG4OTYr9.png",Jt="/REG/svelte/assets/right-CWlFw4cs.png",Kt="/REG/svelte/assets/wordcloud-BDr3bYKg.png",Yt="/REG/svelte/assets/ua-6YCbdyKQ.png",Ut="/REG/svelte/assets/turingjl-CUgbiirT.png",Xt="/REG/svelte/assets/ai4nwp-CGlYpzLi.png";function Re(t,e,n){const s=t.slice();return s[7]=e[n],s}function Qt(t){let e,n;return{c(){e=p("p"),e.textContent=`${t[7].description}`,n=$(),c(e,"class","svelte-1jckqix")},m(s,r){w(s,e,r),w(s,n,r)},p:E,d(s){s&&(b(e),b(n))}}}function Le(t){let e,n;return e=new je({props:{href:t[7].href,imgSrc:t[7].imgSrc,title:t[7].title,$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,r){I(e,s,r),n=!0},p(s,r){const i={};r&1024&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){q(e.$$.fragment,s),n=!1},d(s){A(e,s)}}}function Vt(t){let e,n,s,r,i,o,a,d,l,g,f,u,h,k,_,v,S,G,N,L=_e(t[1]),T=[];for(let y=0;y<L.length;y+=1)T[y]=Le(Re(t,L,y));const W=y=>q(T[y],1,1,()=>{T[y]=null});return{c(){e=p("p"),e.innerHTML=`Most of our work is open-source. You can see a list of repositories we have
    worked on in <a href="https://github.com/search?q=topic%3Ahut23+org%3Aalan-turing-institute+fork%3Atrue&amp;type=repositories" target="_blank">the <span class="monospace svelte-1jckqix">alan-turing-institute</span> GitHub organisation</a>.`,n=$(),s=p("p"),s.textContent=`Here is a sample of some of the projects we are currently working on. This
    list is not exhaustive!`,r=$(),i=p("div"),o=p("button"),o.innerHTML=`<img src="${Nt}" alt="Scroll left" class="scroll svelte-1jckqix"/>`,a=$(),d=p("div"),l=p("div");for(let y=0;y<T.length;y+=1)T[y].c();g=$(),f=p("button"),f.innerHTML=`<img src="${Jt}" alt="Scroll right" class="scroll svelte-1jckqix"/>`,u=$(),h=p("p"),h.textContent=`The following word cloud was generated from a (slightly unscientific)
    survey of languages and technologies we have used in REG. The most common
    language we use is Python, but there are many others!`,k=$(),_=p("img"),c(e,"class","svelte-1jckqix"),c(s,"class","svelte-1jckqix"),c(o,"class","svelte-1jckqix"),c(l,"id","gallery"),c(l,"class","svelte-1jckqix"),c(d,"id","gallery-container"),c(d,"class","svelte-1jckqix"),c(f,"class","svelte-1jckqix"),c(i,"id","gallery-container-container"),c(i,"class","svelte-1jckqix"),c(h,"class","svelte-1jckqix"),c(_,"class","word-cloud svelte-1jckqix"),X(_.src,v=Kt)||c(_,"src",v),c(_,"alt","Word cloud of languages and technologies used in REG")},m(y,R){w(y,e,R),w(y,n,R),w(y,s,R),w(y,r,R),w(y,i,R),m(i,o),m(i,a),m(i,d),m(d,l);for(let j=0;j<T.length;j+=1)T[j]&&T[j].m(l,null);t[4](d),m(i,g),m(i,f),w(y,u,R),w(y,h,R),w(y,k,R),w(y,_,R),S=!0,G||(N=[H(o,"click",t[3]),H(f,"click",t[5])],G=!0)},p(y,[R]){if(R&2){L=_e(y[1]);let j;for(j=0;j<L.length;j+=1){const U=Re(y,L,j);T[j]?(T[j].p(U,R),C(T[j],1)):(T[j]=Le(U),T[j].c(),C(T[j],1),T[j].m(l,null))}for(He(),j=L.length;j<T.length;j+=1)W(j);Fe()}},i(y){if(!S){for(let R=0;R<L.length;R+=1)C(T[R]);S=!0}},o(y){T=T.filter(Boolean);for(let R=0;R<T.length;R+=1)q(T[R]);S=!1},d(y){y&&(b(e),b(n),b(s),b(r),b(i),b(u),b(h),b(k),b(_)),Oe(T,y),t[4](null),G=!1,Y(N)}}}function Zt(t,e,n){let s=[{href:"https://www.turing.ac.uk/research/research-engineering/meet-the-team",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg",title:"Project A",description:"This space could be yours!"},{href:"https://www.turing.ac.uk/research/research-projects/ai-numerical-weather-prediction-nwp-ai4nwp",imgSrc:Xt,title:"AI for Numerical Weather Prediction",description:"A collaboration with the Met Office on the use of modern AI techniques for weather forecasting."},{href:"https://urban-analytics-technology-platform.github.io/",imgSrc:Yt,title:"Urban Analytics",description:"A collection of open-source software to improve how we design, interact with, and live in urban spaces."},{href:"https://turinglang.org/",imgSrc:Ut,title:"Turing.jl",description:"A Julia library for general-purpose probabilistic programming and Bayesian inference."}],r,i=0;function o(g){i+=g;const f=Math.ceil((r.scrollWidth-r.clientWidth)/240);i=Math.max(0,Math.min(i,f));const u=Math.max(0,Math.min(r.scrollWidth-r.clientWidth,i*240));r.scroll({left:u,behavior:"smooth"})}const a=()=>o(-1);function d(g){K[g?"unshift":"push"](()=>{r=g,n(0,r)})}return[r,s,o,a,d,()=>o(1)]}class xt extends D{constructor(e){super(),F(this,e,Zt,Vt,O,{})}}function en(t){let e,n,s,r,i,o,a;return{c(){e=p("p"),e.innerHTML='To learn more about the team, check out <a href="https://alan-turing-institute.github.io/REG-handbook/" target="_blank">our handbook</a>: this is a living document that describes our practices and processes.',n=$(),s=p("p"),s.textContent="(Say something about hybrid working?)",r=$(),i=p("p"),i.textContent=`Apart from project work, we also have 20% of our time set aside for personal
    development as well as internal team responsibilities. Some of our outputs
    from this time include:`,o=$(),a=p("ul"),a.innerHTML=`<li><a href="https://alan-turing-institute.github.io/TuringDataStories/" target="_blank">Turing Data Stories</a>, a series of short, engaging, and accessible stories about using data
        science to analyse cultural phenomena in our world.</li> <li><a href="https://alan-turing-institute.github.io/summer-experience-challenges/" target="_blank">A series of challenges</a> for the Turing Summer Experience, a week-long summer school aimed at improving
        access to data science careers for underrepresented groups.</li> <li>Numerous contributions to open-source software libraries, which we have
        written <a href="https://www.turing.ac.uk/blog/open-source-software-why-it-matters-and-how-get-involved" target="_blank">a blog post</a> about.</li>`,c(e,"class","svelte-sxmzo"),c(s,"class","svelte-sxmzo"),c(i,"class","svelte-sxmzo"),c(a,"class","svelte-sxmzo")},m(d,l){w(d,e,l),w(d,n,l),w(d,s,l),w(d,r,l),w(d,i,l),w(d,o,l),w(d,a,l)},p:E,i:E,o:E,d(d){d&&(b(e),b(n),b(s),b(r),b(i),b(o),b(a))}}}class tn extends D{constructor(e){super(),F(this,e,null,en,O,{})}}function nn(t){let e,n,s,r;return{c(){e=p("a"),n=J(t[0]),s=J("@turing.ac.uk"),c(e,"href",r="mailto:"+t[0]+"@turing.ac.uk"),c(e,"class","svelte-wl841j")},m(i,o){w(i,e,o),m(e,n),m(e,s)},p(i,[o]){o&1&&be(n,i[0]),o&1&&r!==(r="mailto:"+i[0]+"@turing.ac.uk")&&c(e,"href",r)},i:E,o:E,d(i){i&&b(e)}}}function sn(t,e,n){let{address:s}=e;return t.$$set=r=>{"address"in r&&n(0,s=r.address)},[s]}class he extends D{constructor(e){super(),F(this,e,sn,nn,O,{address:0})}}function rn(t){let e,n,s,r,i,o,a,d,l,g,f,u,h,k,_,v,S,G,N,L,T,W,y,R,j,U,Z,Q,P;return h=new he({props:{address:"reg-recruitment-inbox"}}),G=new he({props:{address:"kgoldmann"}}),L=new he({props:{address:"pyong"}}),j=new he({props:{address:"moreilly"}}),{c(){e=p("p"),e.textContent=`Whether you'd like to work with us, ask a question, or just say hello, we'd
    love to hear from you!`,n=$(),s=p("div"),r=p("div"),r.innerHTML=`<h3 class="svelte-qrlm1f">Careers</h3> <p class="svelte-qrlm1f">We will be recruiting in the near future, hopefully in autumn 2024!
            You can <a href="https://alan-turing-institute.github.io/REG-handbook/docs/join_us/recruitment_faqs/" target="_blank">read our recruitment FAQs here</a>.</p> <p class="svelte-qrlm1f">If you want to be notified when our job postings go live, you can
            also
            <a href="https://forms.office.com/e/vJy48fNJXB" target="_blank">subscribe to our mailing list here</a>.</p>`,i=$(),o=p("div"),o.innerHTML=`<h3 class="svelte-qrlm1f">Follow us on social media</h3> <p class="svelte-qrlm1f">Although we spend most of our time contributing code on GitHub, you
            can also find us on <a href="https://www.linkedin.com/showcase/turing-research-engineering/" target="_blank">LinkedIn</a>
            and
            <a href="https://twitter.com/turinghut23" target="_blank">Twitter</a>.</p>`,a=$(),d=p("div"),l=p("h3"),l.textContent="Email us",g=$(),f=p("p"),u=J("For any questions about recruitment, you can drop a line to "),B(h.$$.fragment),k=J("."),_=$(),v=p("p"),S=J(`If you'd like to hear more about or work with us on equality,
            diversity, and inclusion, please contact our EDI leads Kat and Penny
            (`),B(G.$$.fragment),N=J("; "),B(L.$$.fragment),T=J(")."),W=$(),y=p("p"),R=J(`For all other queries, please contact Martin O'Reilly, Director of
            Research Engineering (`),B(j.$$.fragment),U=J(")."),Z=$(),Q=p("div"),Q.innerHTML=`<h3 class="svelte-qrlm1f">Our offices</h3> <p class="svelte-qrlm1f">The Alan Turing Institute is located in the British Library, at <a href="https://maps.app.goo.gl/Xj3ZmJPDwwD8RKMf7" target="_blank">96 Euston Road, NW1 2DB London</a>. It is a 5-minute walk from King’s Cross.</p> <p class="svelte-qrlm1f">If you would like to arrange a visit, please do get in touch as we
            have to request a visitor’s pass in advance.</p>`,c(e,"class","svelte-qrlm1f"),c(r,"class","grid-item svelte-qrlm1f"),c(o,"class","grid-item svelte-qrlm1f"),c(l,"class","svelte-qrlm1f"),c(f,"class","svelte-qrlm1f"),c(v,"class","svelte-qrlm1f"),c(y,"class","svelte-qrlm1f"),c(d,"class","grid-item svelte-qrlm1f"),c(Q,"class","grid-item svelte-qrlm1f"),c(s,"id","grid-container"),c(s,"class","svelte-qrlm1f")},m(M,we){w(M,e,we),w(M,n,we),w(M,s,we),m(s,r),m(s,i),m(s,o),m(s,a),m(s,d),m(d,l),m(d,g),m(d,f),m(f,u),I(h,f,null),m(f,k),m(d,_),m(d,v),m(v,S),I(G,v,null),m(v,N),I(L,v,null),m(v,T),m(d,W),m(d,y),m(y,R),I(j,y,null),m(y,U),m(s,Z),m(s,Q),P=!0},p:E,i(M){P||(C(h.$$.fragment,M),C(G.$$.fragment,M),C(L.$$.fragment,M),C(j.$$.fragment,M),P=!0)},o(M){q(h.$$.fragment,M),q(G.$$.fragment,M),q(L.$$.fragment,M),q(j.$$.fragment,M),P=!1},d(M){M&&(b(e),b(n),b(s)),A(h),A(G),A(L),A(j)}}}class ln extends D{constructor(e){super(),F(this,e,null,rn,O,{})}}const ee=[];function De(t,e=E){let n;const s=new Set;function r(a){if(O(t,a)&&(t=a,n)){const d=!ee.length;for(const l of s)l[1](),ee.push(l,t);if(d){for(let l=0;l<ee.length;l+=2)ee[l][0](ee[l+1]);ee.length=0}}}function i(a){r(a(t))}function o(a,d=E){const l=[a,d];return s.add(l),s.size===1&&(n=e(r,i)||E),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const le=De(null),qe=De(null);function on(t){let e,n,s,r,i,o,a,d,l,g,f,u,h,k,_,v,S,G,N,L,T,W,y,R,j,U,Z,Q;return i=new wt({}),g=new Wt({}),_=new xt({}),L=new tn({}),j=new ln({}),{c(){e=p("div"),n=p("div"),s=p("h2"),s.textContent="About us",r=$(),B(i.$$.fragment),o=$(),a=p("div"),d=p("h2"),d.textContent="Our research themes",l=$(),B(g.$$.fragment),f=$(),u=p("div"),h=p("h2"),h.textContent="Examples of our projects",k=$(),B(_.$$.fragment),v=$(),S=p("div"),G=p("h2"),G.textContent="How we work",N=$(),B(L.$$.fragment),T=$(),W=p("div"),y=p("h2"),y.textContent="Get in touch with us",R=$(),B(j.$$.fragment),c(n,"class","content-box svelte-12k7hh1"),c(a,"class","content-box svelte-12k7hh1"),c(u,"class","content-box svelte-12k7hh1"),c(S,"class","content-box svelte-12k7hh1"),c(W,"class","content-box svelte-12k7hh1"),c(e,"id","content"),c(e,"class","svelte-12k7hh1")},m(P,M){w(P,e,M),m(e,n),m(n,s),t[6](s),m(n,r),I(i,n,null),m(e,o),m(e,a),m(a,d),t[7](d),m(a,l),I(g,a,null),m(e,f),m(e,u),m(u,h),t[8](h),m(u,k),I(_,u,null),m(e,v),m(e,S),m(S,G),t[9](G),m(S,N),I(L,S,null),m(e,T),m(e,W),m(W,y),t[10](y),m(W,R),I(j,W,null),U=!0,Z||(Q=H(window,"resize",t[5]),Z=!0)},p:E,i(P){U||(C(i.$$.fragment,P),C(g.$$.fragment,P),C(_.$$.fragment,P),C(L.$$.fragment,P),C(j.$$.fragment,P),U=!0)},o(P){q(i.$$.fragment,P),q(g.$$.fragment,P),q(_.$$.fragment,P),q(L.$$.fragment,P),q(j.$$.fragment,P),U=!1},d(P){P&&b(e),t[6](null),A(i),t[7](null),A(g),t[8](null),A(_),t[9](null),A(L),t[10](null),A(j),Z=!1,Q()}}}function an(t,e,n){let s,r;re(t,qe,v=>n(11,s=v)),re(t,le,v=>n(12,r=v));let i,o,a,d,l;function g(){if(s===null)return;const S=s[0].getBoundingClientRect().top- -80;ye(le,r=s.map(G=>G.getBoundingClientRect().top-S),r)}Qe(()=>{ye(qe,s=[i,o,a,l,d],s),setTimeout(g,200)});function f(v){K[v?"unshift":"push"](()=>{i=v,n(0,i)})}function u(v){K[v?"unshift":"push"](()=>{o=v,n(1,o)})}function h(v){K[v?"unshift":"push"](()=>{a=v,n(2,a)})}function k(v){K[v?"unshift":"push"](()=>{l=v,n(4,l)})}function _(v){K[v?"unshift":"push"](()=>{d=v,n(3,d)})}return[i,o,a,d,l,g,f,u,h,k,_]}class un extends D{constructor(e){super(),F(this,e,an,on,O,{})}}const cn="/REG/svelte/assets/ati-B22-59qH.png";function fn(t){let e,n,s,r,i,o,a,d,l,g,f,u,h,k,_,v,S,G,N,L,T;return{c(){e=p("div"),n=p("div"),n.innerHTML=`<img id="logo" src="${cn}" alt="The Alan Turing Institute logo" class="svelte-1bcdgib"/> <h1 class="svelte-1bcdgib">Research Engineering</h1>`,s=$(),r=p("div"),i=p("ul"),o=p("li"),a=p("button"),a.textContent="About us",d=$(),l=p("li"),g=p("button"),g.textContent="Research",f=$(),u=p("li"),h=p("button"),h.textContent="Projects",k=$(),_=p("li"),v=p("button"),v.textContent="Working ways",S=$(),G=p("li"),N=p("button"),N.textContent="Contact",c(n,"id","navbar-left"),c(n,"class","svelte-1bcdgib"),c(a,"class","svelte-1bcdgib"),c(g,"class","svelte-1bcdgib"),c(h,"class","svelte-1bcdgib"),c(v,"class","svelte-1bcdgib"),c(N,"class","svelte-1bcdgib"),c(i,"class","svelte-1bcdgib"),c(r,"id","navbar-right"),c(e,"id","navbar"),c(e,"class","svelte-1bcdgib")},m(W,y){w(W,e,y),m(e,n),m(e,s),m(e,r),m(r,i),m(i,o),m(o,a),m(i,d),m(i,l),m(l,g),m(i,f),m(i,u),m(u,h),m(i,k),m(i,_),m(_,v),m(i,S),m(i,G),m(G,N),L||(T=[H(a,"click",t[1]),H(g,"click",t[2]),H(h,"click",t[3]),H(v,"click",t[4]),H(N,"click",t[5])],L=!0)},p:E,i:E,o:E,d(W){W&&b(e),L=!1,Y(T)}}}function dn(t,e,n){let s,r;re(t,le,u=>n(6,s=u)),re(t,qe,u=>n(7,r=u));function i(){if(r===null)return;const h=r[0].getBoundingClientRect().top- -80;ye(le,s=r.map(k=>k.getBoundingClientRect().top-h),s)}function o(u){if(i(),s===null)return;const h=u===0?0:-80,k=s[u]-h;window.scrollTo({top:k,behavior:"smooth"})}return[o,()=>o(0),()=>o(1),()=>o(2),()=>o(3),()=>o(4)]}class hn extends D{constructor(e){super(),F(this,e,dn,fn,O,{})}}function Ie(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function Ae(t){let e,n;return e=new it({props:{imagePath:t[6],opacity:t[1][t[8]]}}),{c(){B(e.$$.fragment)},m(s,r){I(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.opacity=s[1][s[8]]),e.$set(i)},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){q(e.$$.fragment,s),n=!1},d(s){A(e,s)}}}function gn(t){let e=!1,n=()=>{e=!1},s,r,i,o,a,d,l,g,f;me(t[3]);let u=_e(t[2]),h=[];for(let _=0;_<u.length;_+=1)h[_]=Ae(Ie(t,u,_));const k=_=>q(h[_],1,1,()=>{h[_]=null});return i=new hn({}),d=new un({}),{c(){for(let _=0;_<h.length;_+=1)h[_].c();r=$(),B(i.$$.fragment),o=$(),a=p("main"),B(d.$$.fragment)},m(_,v){for(let S=0;S<h.length;S+=1)h[S]&&h[S].m(_,v);w(_,r,v),I(i,_,v),w(_,o,v),w(_,a,v),I(d,a,null),l=!0,g||(f=H(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(n,100),t[3]()}),g=!0)},p(_,[v]){if(v&1&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,_[0]),s=setTimeout(n,100)),v&6){u=_e(_[2]);let S;for(S=0;S<u.length;S+=1){const G=Ie(_,u,S);h[S]?(h[S].p(G,v),C(h[S],1)):(h[S]=Ae(G),h[S].c(),C(h[S],1),h[S].m(r.parentNode,r))}for(He(),S=u.length;S<h.length;S+=1)k(S);Fe()}},i(_){if(!l){for(let v=0;v<u.length;v+=1)C(h[v]);C(i.$$.fragment,_),C(d.$$.fragment,_),l=!0}},o(_){h=h.filter(Boolean);for(let v=0;v<h.length;v+=1)q(h[v]);q(i.$$.fragment,_),q(d.$$.fragment,_),l=!1},d(_){_&&(b(r),b(o),b(a)),Oe(h,_),A(i,_),A(d),g=!1,f()}}}function mn(t,e,n){let s;re(t,le,l=>n(4,s=l));let r=["backgrounds/aiuk24.jpg","backgrounds/hw24.jpg","backgrounds/ad24.jpg","backgrounds/rsecon23.jpg","backgrounds/ad23.jpg"];function i(l,g){if(s===null)return g===0?.7:0;console.log(s);let h=s[g]+100,k=g<r.length-1?s[g+1]-300:h+1e7;return l<h?g===0?.7:Math.max(0,.7*(1-(h-l)/300)):l>k?Math.max(0,.7*(1-(l-k)/300)):.7}let o=0,a=Array(r.length).fill(0);function d(){n(0,o=window.pageYOffset)}return t.$$.update=()=>{if(t.$$.dirty&3)for(let l=0;l<a.length;l++)n(1,a[l]=i(o,l),a)},[o,a,r,d]}class pn extends D{constructor(e){super(),F(this,e,mn,gn,O,{})}}new pn({target:document.getElementById("app")});
