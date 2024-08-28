var $e=Object.defineProperty;var ke=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Z=(e,t,n)=>ke(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function y(){}function me(e){return e()}function fe(){return Object.create(null)}function R(e){e.forEach(me)}function _e(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ve(e){return Object.keys(e).length===0}function xe(e,...t){if(e==null){for(const r of t)r(void 0);return y}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function be(e,t,n){e.$$.on_destroy.push(xe(t,n))}function Ce(e,t,n){return e.set(n),t}function a(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function Ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function ne(e){return document.createTextNode(e)}function b(){return ne(" ")}function je(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Oe(e){return Array.from(e.childNodes)}function Se(e,t){t=""+t,e.data!==t&&(e.data=t)}function W(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let N;function H(e){N=e}function Te(){if(!N)throw new Error("Function called outside component initialization");return N}function Pe(e){Te().$$.on_mount.push(e)}const O=[],S=[];let T=[];const de=[],Le=Promise.resolve();let ee=!1;function Ae(){ee||(ee=!0,Le.then(ye))}function D(e){T.push(e)}const Y=new Set;let E=0;function ye(){if(E!==0)return;const e=N;do{try{for(;E<O.length;){const t=O[E];E++,H(t),He(t.$$)}}catch(t){throw O.length=0,E=0,t}for(H(null),O.length=0,E=0;S.length;)S.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];Y.has(n)||(Y.add(n),n())}T.length=0}while(O.length);for(;de.length;)de.pop()();ee=!1,Y.clear(),H(e)}function He(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function Be(e){const t=[],n=[];T.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),T=t}const U=new Set;let k;function Me(){k={r:0,c:[],p:k}}function Ne(){k.r||R(k.c),k=k.p}function v(e,t){e&&e.i&&(U.delete(e),e.i(t))}function B(e,t,n,r){if(e&&e.o){if(U.has(e))return;U.add(e),k.c.push(()=>{U.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ge(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function re(e){e&&e.c()}function F(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),D(()=>{const s=e.$$.on_mount.map(me).filter(_e);e.$$.on_destroy?e.$$.on_destroy.push(...s):R(s),e.$$.on_mount=[]}),o.forEach(D)}function G(e,t){const n=e.$$;n.fragment!==null&&(Be(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Re(e,t){e.$$.dirty[0]===-1&&(O.push(e),Ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,r,o,s,f=null,d=[-1]){const h=N;H(e);const i=e.$$={fragment:null,ctx:[],props:s,update:y,not_equal:o,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:fe(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};f&&f(i.root);let m=!1;if(i.ctx=n?n(e,t.props||{},(u,l,...c)=>{const p=c.length?c[0]:l;return i.ctx&&o(i.ctx[u],i.ctx[u]=p)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](p),m&&Re(e,u)),l}):[],i.update(),m=!0,R(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const u=Oe(t.target);i.fragment&&i.fragment.l(u),u.forEach(P)}else i.fragment&&i.fragment.c();t.intro&&v(e.$$.fragment),F(e,t.target,t.anchor),ye()}H(h)}class X{constructor(){Z(this,"$$");Z(this,"$$set")}$destroy(){G(this,1),this.$destroy=y}$on(t,n){if(!_e(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);function qe(e){let t;return{c(){t=_("div"),w(t,"class","background-image svelte-5f6gye"),W(t,"background-image",`url(${e[0]})`),W(t,"opacity",e[1])},m(n,r){M(n,t,r)},p(n,[r]){r&1&&W(t,"background-image",`url(${n[0]})`),r&2&&W(t,"opacity",n[1])},i:y,o:y,d(n){n&&P(t)}}}function ze(e,t,n){let{imagePath:r}=t,{opacity:o}=t;return e.$$set=s=>{"imagePath"in s&&n(0,r=s.imagePath),"opacity"in s&&n(1,o=s.opacity)},[r,o]}class We extends X{constructor(t){super(),J(this,t,ze,qe,I,{imagePath:0,opacity:1})}}function Ue(e){let t,n,r;return{c(){t=_("a"),n=ne(e[0]),w(t,"href",r="mailto:"+e[0]),w(t,"class","svelte-13kzo7a")},m(o,s){M(o,t,s),a(t,n)},p(o,[s]){s&1&&Se(n,o[0]),s&1&&r!==(r="mailto:"+o[0])&&w(t,"href",r)},i:y,o:y,d(o){o&&P(t)}}}function De(e,t,n){let{address:r}=t;return e.$$set=o=>{"address"in o&&n(0,r=o.address)},[r]}class Fe extends X{constructor(t){super(),J(this,t,De,Ue,I,{address:0})}}const j=[];function Ge(e,t=y){let n;const r=new Set;function o(d){if(I(e,d)&&(e=d,n)){const h=!j.length;for(const i of r)i[1](),j.push(i,e);if(h){for(let i=0;i<j.length;i+=2)j[i][0](j[i+1]);j.length=0}}}function s(d){o(d(e))}function f(d,h=y){const i=[d,h];return r.add(i),r.size===1&&(n=t(o,s)||y),d(e),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:f}}const te=Ge(null);function Je(e){let t,n,r,o,s,f,d,h,i,m,u,l,c,p,g,x,oe,L,se,K,ie,A,ue,q,ce,C,le,V,ae,Q,z;return C=new Fe({props:{address:"reg-recruitment-inbox@turing.ac.uk"}}),{c(){t=_("div"),n=_("h1"),n.textContent="Research Engineering at the Turing",r=b(),o=_("p"),o.textContent="Hello! We’re excited you’ve come to visit us! 🎉",s=b(),f=_("p"),f.textContent=`We are a team of data scientists, software engineers, and compute
        specialists who build tools and software to support research in data
        science and artificial intelligence.`,d=b(),h=_("h2"),h.textContent="Our research themes",i=b(),m=_("p"),m.textContent=`We work across many themes, such as health, environment and
        sustainability, and defence and national security.`,u=b(),l=_("h2"),l.textContent="Examples of our work",c=b(),p=_("p"),p.innerHTML='See <a href="https://github.com/search?q=topic%3Ahut23+org%3Aalan-turing-institute+fork%3Atrue&amp;type=repositories" target="_blank" class="svelte-gckujw">our GitHub page</a>.',g=b(),x=_("p"),x.innerHTML=`We also run <a href="https://alan-turing-institute.github.io/TuringDataStories/" target="_blank" class="svelte-gckujw">Turing Data Stories</a>, a series of short, engaging, and accessible stories about using data
        science to analyse cultural phenomena in our world.`,oe=b(),L=_("h2"),L.textContent="How we work",se=b(),K=_("p"),K.textContent=`To learn more about the team, check out our handbook — this is a living
        document that we’re updating with our practices and processes, and
        should give you some insight into how we work.`,ie=b(),A=_("h2"),A.textContent="Get in touch with us",ue=b(),q=_("p"),ce=ne("Recruitment: "),re(C.$$.fragment),le=b(),V=_("p"),V.innerHTML='Sign up for mailing list: <a href="https://forms.office.com/e/vJy48fNJXB" target="_blank" class="svelte-gckujw">here</a>',ae=b(),Q=_("p"),Q.innerHTML='Unsubscribe from mailing list: <a href="https://forms.office.com/e/P22MqUT0N3" target="_blank" class="svelte-gckujw">here</a>',w(n,"class","svelte-gckujw"),w(h,"class","svelte-gckujw"),w(l,"class","svelte-gckujw"),w(L,"class","svelte-gckujw"),w(A,"class","svelte-gckujw"),w(t,"id","content"),w(t,"class","svelte-gckujw")},m($,we){M($,t,we),a(t,n),a(t,r),a(t,o),a(t,s),a(t,f),a(t,d),a(t,h),e[4](h),a(t,i),a(t,m),a(t,u),a(t,l),e[5](l),a(t,c),a(t,p),a(t,g),a(t,x),a(t,oe),a(t,L),e[6](L),a(t,se),a(t,K),a(t,ie),a(t,A),e[7](A),a(t,ue),a(t,q),a(q,ce),F(C,q,null),a(t,le),a(t,V),a(t,ae),a(t,Q),z=!0},p:y,i($){z||(v(C.$$.fragment,$),z=!0)},o($){B(C.$$.fragment,$),z=!1},d($){$&&P(t),e[4](null),e[5](null),e[6](null),e[7](null),G(C)}}}function Xe(e,t,n){let r;be(e,te,l=>n(8,r=l));let o,s,f,d;Pe(()=>{Ce(te,r=[0,o.getBoundingClientRect().top-200,s.getBoundingClientRect().top-200,d.getBoundingClientRect().top-200,f.getBoundingClientRect().top-200],r)});function h(l){S[l?"unshift":"push"](()=>{o=l,n(0,o)})}function i(l){S[l?"unshift":"push"](()=>{s=l,n(1,s)})}function m(l){S[l?"unshift":"push"](()=>{d=l,n(3,d)})}function u(l){S[l?"unshift":"push"](()=>{f=l,n(2,f)})}return[o,s,f,d,h,i,m,u]}class Ke extends X{constructor(t){super(),J(this,t,Xe,Je,I,{})}}function he(e,t,n){const r=e.slice();return r[6]=t[n],r[8]=n,r}function pe(e){let t,n;return t=new We({props:{imagePath:e[6],opacity:e[1][e[8]]}}),{c(){re(t.$$.fragment)},m(r,o){F(t,r,o),n=!0},p(r,o){const s={};o&2&&(s.opacity=r[1][r[8]]),t.$set(s)},i(r){n||(v(t.$$.fragment,r),n=!0)},o(r){B(t.$$.fragment,r),n=!1},d(r){G(t,r)}}}function Ve(e){let t=!1,n=()=>{t=!1},r,o,s,f,d,h,i;D(e[3]);let m=ge(e[2]),u=[];for(let c=0;c<m.length;c+=1)u[c]=pe(he(e,m,c));const l=c=>B(u[c],1,1,()=>{u[c]=null});return f=new Ke({}),{c(){for(let c=0;c<u.length;c+=1)u[c].c();o=b(),s=_("main"),re(f.$$.fragment)},m(c,p){for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(c,p);M(c,o,p),M(c,s,p),F(f,s,null),d=!0,h||(i=je(window,"scroll",()=>{t=!0,clearTimeout(r),r=setTimeout(n,100),e[3]()}),h=!0)},p(c,[p]){if(p&1&&!t&&(t=!0,clearTimeout(r),scrollTo(window.pageXOffset,c[0]),r=setTimeout(n,100)),p&6){m=ge(c[2]);let g;for(g=0;g<m.length;g+=1){const x=he(c,m,g);u[g]?(u[g].p(x,p),v(u[g],1)):(u[g]=pe(x),u[g].c(),v(u[g],1),u[g].m(o.parentNode,o))}for(Me(),g=m.length;g<u.length;g+=1)l(g);Ne()}},i(c){if(!d){for(let p=0;p<m.length;p+=1)v(u[p]);v(f.$$.fragment,c),d=!0}},o(c){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)B(u[p]);B(f.$$.fragment,c),d=!1},d(c){c&&(P(o),P(s)),Ee(u,c),G(f),h=!1,i()}}}function Qe(e,t,n){let r;be(e,te,i=>n(4,r=i));function o(i,m){if(r===null)return m===0?1:0;console.log(r);let u=200,l=r[m],c=m<r.length-1?r[m+1]-u:l+1e3;return i<l?Math.max(0,1-(l-i)/u):i>c?Math.max(0,1-(i-c)/u):1}let s=0,f=["backgrounds/tgks.jpg","backgrounds/azmr.jpg","backgrounds/shmn.png","backgrounds/wsct.png","backgrounds/pplp.png"],d=Array(f.length).fill(0);function h(){n(0,s=window.pageYOffset)}return e.$$.update=()=>{if(e.$$.dirty&3)for(let i=0;i<d.length;i++)n(1,d[i]=o(s,i),d)},[s,d,f,h]}class Ze extends X{constructor(t){super(),J(this,t,Qe,Ve,I,{})}}new Ze({target:document.getElementById("app")});
