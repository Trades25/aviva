(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{42980:function(e,n,a){"use strict";var r=a(8014),t=a(62044),i=a(52452),l=a.n(i);n.Z=function(){var e=(0,t.Z)("pricing").t;return(0,r.jsx)("div",{className:l().container,children:(0,r.jsxs)("div",{className:l().wrapper,children:[(0,r.jsx)("div",{className:l().leftSectionContainer,children:(0,r.jsx)("div",{className:l().header,children:e("landing.header")})}),(0,r.jsxs)("div",{className:l().rightSection,children:[(0,r.jsxs)("div",{className:l().cardContainer,children:[(0,r.jsx)("div",{className:l().cardHeader,children:e("landing.card1_header")}),(0,r.jsxs)("div",{className:l().cardInfo,children:[(0,r.jsx)("div",{className:l().cardInfoDollar,children:"$"}),(0,r.jsx)("div",{className:l().cardInfoZero,children:"0"}),(0,r.jsx)("div",{className:l().cardInfoText,children:e("landing.card1_desc")})]})]}),(0,r.jsxs)("div",{className:l().cardContainer,children:[(0,r.jsx)("div",{className:l().cardHeaderYellow,children:e("landing.card2_header")}),(0,r.jsxs)("div",{className:l().cardInfo,children:[(0,r.jsx)("div",{className:l().cardInfoDollar,children:"$"}),(0,r.jsx)("div",{className:l().cardInfoZero,children:"0"}),(0,r.jsxs)("div",{className:l().cardInfoText,children:[e("landing.card1_desc"),(0,r.jsx)("br",{}),e("landing.card2_desc_2")]})]})]})]})]})})}},72830:function(e,n,a){"use strict";a.d(n,{Z:function(){return b}});var r=a(12042),t=a(99728),i=a(8014),l=a(56168),s=a(62044),c=a(50862),o=a.n(c),d=a(50744),u=a.n(d),f=a(75657),h=a.n(f),g=a(75332),v=a(31110),p=[{label:"Pricing",value:"/trading/pricing"},{label:"Margin Rates",value:"/trading/pricing/margin-rates"},{label:"Special Services",value:"/trading/pricing/special-services"},{label:"Broker Comparison",value:"/trading/pricing/broker-comparison"}],m={option:function(e,n){var a=n.isSelected;return(0,t.Z)((0,r.Z)({},e),{backgroundColor:a?"#508AE1":void 0,color:a?"#FFF":void 0})}};function b(e){var n=e.selectedIndex,a=(0,s.Z)("pricing-tabs").t,r=(0,g.useRouter)(),t=(0,l.useCallback)((function(e){r.asPath!==e.value&&r.push(e.value,void 0,{scroll:!1})}),[r]),c=(0,l.useCallback)((function(e){return a(e.label)}),[a]);return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"container sm:hidden",children:(0,i.jsx)(v.ZP,{placeholder:a("Please select"),className:"mt-4 w-full",inputId:"tabs",onChange:t,options:p,defaultValue:p[n],formatOptionLabel:c,instanceId:(0,l.useId)(),styles:m})}),(0,i.jsx)("div",{className:"hidden sm:block",children:(0,i.jsx)("div",{className:"border-grayish-blue bg-smoke border-b",children:(0,i.jsx)("nav",{className:"isolate mx-auto flex max-w-4xl","aria-label":"Tabs",children:p.map((function(e,r){return(0,i.jsx)(h(),{href:e.value,scroll:!1,children:(0,i.jsx)("a",{className:u()("text-sm h-14 px-1.5 flex items-center justify-center font-futura font-semibold sm:text-lg text-ft-slate sm:px-4 md:px-6 lg:px-8 xl:px-14 outline-0",r===n&&"text-ft-blue border-b border-solid border-ft-blue"),children:a(e.label)})},e.label)}))})})})]})}b.defaultProps={selectedIndex:0},b.propTypes={selectedIndex:o().number}},61739:function(e,n,a){"use strict";a.d(n,{Af:function(){return v},F3:function(){return f},lj:function(){return g},oe:function(){return u},xG:function(){return h}});var r=a(43692),t=a(12042),i=a(99728),l=a(21157),s=a(61557),c=a(65954),o=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},d=function(e,n,a){return("en-US"===a?"".concat(e).concat(n):"".concat(e,"/").concat(a).concat(n)).replace(/\/+$/,"")},u=function(e,n,a,r){var t="https://www.proultimatewealth.com",i={title:a||"",description:r||""};return i.canonical=d(t,e,n),i.languageAlternates=[{href:d(t,e,"en-US"),hrefLang:"en"},{href:d(t,e,"zh-CN"),hrefLang:"zh-hans"},{href:d(t,e,"zh-TW"),hrefLang:"zh-hant"},{href:d(t,e,"en-US"),hrefLang:"x-default"}],i},f=function(e,n){if(e.length<=n)return[e];for(var a=[],r=0;r<e.length;)a.push(e.slice(r,r+n)),r+=n;return a},h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,t.Z)({style:"currency"},a),{currency:n})).format(e)},g=function(e,n,a){return 1===e?n*(1+a):g(e-1,n,a)+n*Math.pow(1+a,e)},v=(function(){var e=(0,r.Z)((function(e,n){var a,r,t,i,l,d,u,f,h,g,v,p=arguments;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return a=p.length>2&&void 0!==p[2]&&p[2],r=[],t=function(a){var r={fields:["Slug","locale"],locale:"all",pagination:{page:a,pageSize:100}};return n&&(r.filters=n),(0,c.s1)(e,{params:r})},i=function(e){e.length&&e.forEach((function(e){var n=o(e.attributes.locale);r.push({params:a?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:n})}))},[4,t(1)];case 1:if(l=s.sent(),d=l.data,u=d.data,f=d.meta,i(u),!(f.pagination.pageCount>1))return[3,3];for(h=[],g=2;g<=f.pagination.pageCount;g+=1)v=t(g),h.push(v);return[4,Promise.all(h)];case 2:s.sent().forEach((function(e){var n=e.data.data;i(n)})),s.label=3;case 3:return[2,r]}}))}))}(),function(){var e=(0,r.Z)((function(e,n,a){var r,t,i,o,d,u,f,h,g,v,p,m,b,_,x,N,S,j,C;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return d=e.params.slug,u=e.locale,f=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(u),h={},g=[(0,c.s1)("/api/guides",{params:{locale:f,filters:{Slug:{$eq:d},Category:{$eq:n}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],a&&g.push((0,c.s1)("/api/videos",{params:{locale:f,filters:{Slug:{$eq:a}},populate:"Videos"}})),[4,Promise.all(g)];case 1:return v=l.Z.apply(void 0,[s.sent(),2]),p=v[0],m=v[1],b=p.data,(null===(_=b.data)||void 0===_?void 0:_.length)?(x=(0,l.Z)(_,1),N=x[0],h.title=N.attributes.Title,h.subTitle=N.attributes.Subtitle||"",h.slug=N.attributes.Slug,h.content=N.attributes.Content||"",h.sections=N.attributes.Section||null,h.seo={title:(null===(r=N.attributes)||void 0===r||null===(t=r.SEO)||void 0===t?void 0:t.Title)||null,description:(null===(i=N.attributes)||void 0===i||null===(o=i.SEO)||void 0===o?void 0:o.Description)||null},h.videos=[],a&&(S=m.data,(null===(j=S.data)||void 0===j?void 0:j.length)&&(C=(0,l.Z)(j,1),C[0].attributes.Videos.forEach((function(e){var n={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};h.videos.push(n)})))),[2,h]):[2,!1]}}))}))}(),function(e,n){for(var a=null,r=0;r<e.length;r+=1){if(n.includes(e[r].value)){a=e[r];break}if(e[r].options&&(a=v(e[r].options,n)))break}return a})},52452:function(e){e.exports={container:"Landing_container__2z8_4",wrapper:"Landing_wrapper__HScPD",leftSectionContainer:"Landing_leftSectionContainer__n0C2M",header:"Landing_header__Veo2L",desc:"Landing_desc__hz15o",rightSection:"Landing_rightSection__5JRya",cardContainer:"Landing_cardContainer__gBvtu",cardHeader:"Landing_cardHeader__ED9I5",cardHeaderYellow:"Landing_cardHeaderYellow__JIjsE",cardInfo:"Landing_cardInfo__mQRbQ",cardInfoDollar:"Landing_cardInfoDollar__dGCnU",cardInfoZero:"Landing_cardInfoZero__t2xM7",cardInfoText:"Landing_cardInfoText__GKKkH"}}}]);