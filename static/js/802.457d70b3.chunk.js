"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{6802:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(5861),a=r(9439),s=r(7757),i=r.n(s),c=r(1087),l=r(7689),o=r(2791),u=r(8407),p="movieDetails_img__jB64k",h="movieDetails_imgWrap__TicsT",v="movieDetails_descrWrap__S2jhO",f="movieDetails_btn__M1CwD",m="movieDetails_btnList__+Pp3w",d="movieDetails_castBtn__rkrAN",g="movieDetails_reviewsBtn__Zfhks",x="movieDetails_descrTitle__1j0yX",w="movieDetails_loading__NfvCI",_=r(6652),j=r(8402),b=r(184),k=function(){var e,t,r=(0,l.UO)().movieId,s=(0,o.useState)(null),k=(0,a.Z)(s,2),y=k[0],N=k[1],D=(0,o.useState)(!0),Z=(0,a.Z)(D,2),C=Z[0],S=Z[1];(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,(0,u.TP)(r);case 4:t=e.sent,N(t),S(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,S(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var U,G,M=null!==(e=null===(t=(0,l.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.rU,{className:f,to:M,children:"Go Back"}),C?(0,b.jsx)("div",{className:w,children:(0,b.jsx)(j.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{margin:"0 auto"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:h,children:[y.poster_path?(0,b.jsx)("img",{className:p,alt:y.original_title,src:"https://image.tmdb.org/t/p/w500".concat(y.poster_path)}):(0,b.jsx)("img",{className:p,src:_,alt:"not available"}),(0,b.jsxs)("div",{className:v,children:[(0,b.jsxs)("h1",{children:[y.original_title," (",(G=y.release_date,new Date(G).getFullYear()),")"]}),(0,b.jsxs)("p",{className:x,children:["User Score: ",~~(10*y.vote_average),"%"]}),(0,b.jsx)("p",{className:x,children:"Overview"}),(0,b.jsx)("p",{children:y.overview}),(0,b.jsx)("p",{className:x,children:"Genres"}),(0,b.jsx)("p",{children:(U=y.genres,U.map((function(e){return e.name})).join(", "))})]})]}),(0,b.jsx)("div",{children:(0,b.jsxs)("ul",{className:m,children:[(0,b.jsx)("li",{children:(0,b.jsx)(c.rU,{to:"cast",state:{from:M},children:(0,b.jsx)("button",{className:d,children:"Cast"})})}),(0,b.jsx)("li",{children:(0,b.jsx)(c.rU,{to:"reviews",state:{from:M},children:(0,b.jsx)("button",{className:g,children:"Reviews"})})})]})}),(0,b.jsx)(o.Suspense,{fallback:(0,b.jsx)("div",{className:w,children:(0,b.jsx)(j.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{margin:"0 auto"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}),children:(0,b.jsx)(l.j3,{})})]})]})}},8407:function(e,t,r){r.d(t,{Df:function(){return c},M1:function(){return p},TP:function(){return o},qF:function(){return m},tx:function(){return v}});var n=r(5861),a=r(7757),s=r.n(a),i=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"13e949714959e6b204127682b184b526",language:"en-US"}});function c(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,i.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function o(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,i.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,i.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,i.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e,t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/search/movie?query=".concat(t),e.prev=1,e.next=4,i.get(n,{params:{page:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},6652:function(e,t,r){e.exports=r.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=802.457d70b3.chunk.js.map