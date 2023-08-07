import{g as n,S as _,q as b,o as x,b as v,r as T,c as p,d as h,e as o,f as s,t as u,h as g,w as $,j as k,s as y,p as C,v as S,F as A,k as P,l as B,a as L,m as j,n as M}from"./index-d75c227e.js";const H={class:"promo-banner relative h-screen overflow-hidden"},D=["src","alt"],V=o("div",{class:"promo-banner__overlay absolute h-screen w-full bg-main-white/80"},null,-1),N={class:"promo-banner-content absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center md:w-full md:flex-row md:justify-center"},q={class:"promo-banner-content__text mb-8 text-center md:w-1/3"},E={class:"mb-4 font-yeseva-one text-4xl uppercase text-main-blue"},F={class:"font-marmelad text-lg text-main-blue"},I={class:"md:w-1/3"},R=["src","alt"],z=o("i",{class:"fas fa-chevron-right flex h-10 w-10 rotate-90 animate-pulse cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"},null,-1),U={__name:"PromoBannerSection",setup(f){n.registerPlugin(_);const t=b();let a=n.matchMedia();const c=()=>{n.timeline().fromTo(".promo-banner-content__text",{y:"20%",opacity:0},{y:0,opacity:1,duration:1},0).fromTo(".promo-banner-content__image",{y:"20%",opacity:0},{y:0,opacity:1,duration:1},0).fromTo(".promo-banner__button",{opacity:0},{opacity:1})},d=()=>{a.add("(min-width: 768px)",()=>{n.timeline({scrollTrigger:{trigger:".promo-banner",start:"top top",end:"bottom top",scrub:!0}}).fromTo(".promo-banner__background",{y:0},{y:()=>`${window.innerHeight*(1-window.innerHeight/(window.innerHeight*2))}px`})})};return x(()=>{c(),d()}),v(()=>{_.killAll()}),(l,e)=>{const r=T("router-link");return p(),h("section",H,[o("img",{src:s(t).banner["promo-banner-background"].image,alt:s(t).banner["promo-banner-background"]["image-alt"],class:"promo-banner__background absolute h-screen w-full object-cover"},null,8,D),V,o("div",N,[o("div",q,[o("h1",E,u(s(t).banner.promoBannerTitle),1),o("p",F,u(s(t).banner.promoBannerSubtitle),1)]),o("div",I,[o("img",{src:s(t).banner["promo-banner-image"].image,alt:s(t).banner["promo-banner-image"]["image-alt"],class:"promo-banner-content__image mx-auto h-48 w-48 rounded-full object-cover object-center md:h-56 md:w-56 lg:h-80 lg:w-80"},null,8,R)])]),g(r,{class:"promo-banner__button absolute bottom-[10vh] left-1/2 -translate-x-1/2",to:"/promo#promo-card0"},{default:$(()=>[z]),_:1})])}}},W=["id"],G=["src","alt"],J={class:"my-4 font-yeseva-one text-4xl uppercase text-main-blue"},K={class:"mb-4 font-marmelad text-2xl text-main-blue"},O={class:"mb-4 font-marmelad text-base text-main-blue"},Q=o("i",{class:"fas fa-chevron-right flex h-10 w-10 rotate-90 cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"},null,-1),X={__name:"PromoCard",setup(f){n.registerPlugin(_);let t=n.matchMedia();const a=b(),c=e=>{t.add("(max-width: 767px)",()=>{n.timeline({scrollTrigger:{trigger:`#promo-card${e}`,start:"top 85%",toggleActions:"play none none none"}}).fromTo(`#promo-card${e}`,{y:50,opacity:0},{opacity:1,y:0,duration:1})})},d=e=>{t.add("(min-width: 768px)",()=>{const r=n.timeline({scrollTrigger:{trigger:`#promo-card${e}`,start:"top center",toggleActions:"play none none none"}});switch(e%2){case 0:r.fromTo(`.promo-card${e}__text`,{x:"100%",opacity:0},{x:0,opacity:1,duration:1});break;case 1:r.fromTo(`.promo-card${e}__text`,{x:"-100%",opacity:0},{x:0,opacity:1,duration:1});break}})},l=e=>{t.add("(min-width: 768px)",()=>{n.timeline({scrollTrigger:{trigger:`#promo-card${e}`,start:"top top",end:"bottom top",scrub:!0}}).fromTo(`.promo-card${e}__image`,{y:0},{y:()=>`${window.innerHeight*(1-window.innerHeight/(window.innerHeight*2))}px`})})};return x(()=>{a.cards.forEach((e,r)=>{c(r),d(r),l(r)})}),v(()=>{_.killAll()}),(e,r)=>{const w=T("router-link");return p(!0),h(A,null,k(s(a).cards,(m,i)=>(p(),h("section",{key:i,class:"h-screen overflow-hidden drop-shadow-2xl md:relative",id:`promo-card${i}`,ref_for:!0,ref:"promoCard"},[o("div",{class:y(`promo-card${i}__image`)},[o("img",{class:"w-full object-cover md:h-screen",src:m.promoCardImage.image[0],alt:m.promoCardImage["image-alt"]},null,8,G)],2),o("div",{class:y(["flex h-auto flex-col justify-between border-t-4 border-main-blue px-4 py-10 text-center md:absolute md:top-0 md:h-screen md:w-[40vw] md:justify-center md:border-t-0 md:bg-main-white/80",`promo-card${i}__text ${i%2?"md:left-0 md:border-r-4":"md:right-0 md:border-l-4"}`])},[o("h1",J,u(m.promoCardTitle),1),o("h2",K,u(m.promoCardSubtitle),1),o("p",O,u(m.promoCardText),1),i!==s(a).cards.length-1?(p(),C(w,{key:0,class:"absolute bottom-[10vh] left-1/2 hidden -translate-x-1/2 md:block",to:`/promo#promo-card${i+1}`},{default:$(()=>[Q]),_:2},1032,["to"])):S("",!0)],2)],8,W))),128)}}},Y={class:"promo relative w-full"},Z={class:"promo--sticky sticky top-0 h-full w-full"},eo={__name:"PromoView",async setup(f){let t,a;const c=P(),d=B(()=>c.selectedLanguage),l=b(),e=L(),r=j();try{[t,a]=M(()=>l.getPromoPageData(e.query.preview,d.value)),await t,a()}catch{r.push("/badCall")}return(w,m)=>(p(),h("section",Y,[o("div",Z,[g(U),g(X)])]))}};export{eo as default};