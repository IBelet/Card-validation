(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{17:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(2),i=n(9),c=n.n(i),s=n(4),l=n(1),o=n(6),u=n.n(o),d=n(3),b=n.n(d),j=n(5),m=n(8),p="https://api.paymentwall.com/api/payment-systems/?key=02d212179155a9534354f69a0714a578&country_code=";function O(e,a){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(b.a.mark((function e(a,n){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p).concat(a),n);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("".concat(t.status," - ").concat(t.statusText));case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){var e=Object(j.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(b.a.mark((function e(){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ipdata.co?api-key=0228e97f62294e53d9396a985932a63955f9b01a62b1146963fc1d09");case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.country_code);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=Object.keys(m),x=function(e){var a=e.setSelectedCountry,n=e.selectedCountry;Object(r.useEffect)((function(){i()}),[]);var i=function(){var e=Object(j.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.jsxs)("div",{className:"is-flex is-align-items-center is-justify-content-space-evenly is-flex-wrap-wrap",children:[Object(t.jsx)("span",{children:"Select your country: "}),Object(t.jsxs)("div",{className:"control has-icons-left",children:[Object(t.jsx)("div",{className:"select is-primary is-rounded",children:Object(t.jsxs)("select",{onChange:function(e){a(e.target.value)},value:n,children:[Object(t.jsx)("option",{value:"",disabled:!0,children:"Select your country"}),S.map((function(e){return Object(t.jsx)("option",{value:e,children:m[e]},e)}))]})}),Object(t.jsx)("span",{className:"icon is-left",children:Object(t.jsx)("i",{className:"fas fa-globe"})})]})]})},y=function(e){var a=e.selectedCountry,n=e.setPaymentMethods,i=e.paymentMethods,c=e.values,s=e.setValues;Object(r.useEffect)(Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o();case 1:case"end":return e.stop()}}),e)}))),[a]);var o=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(a);case 2:t=e.sent,n(t||[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.jsx)("div",{className:"is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap",children:0!==i.length?Object(t.jsx)(t.Fragment,{children:i.map((function(e){return Object(t.jsx)("label",{children:Object(t.jsxs)("div",{className:"box m-1 is-flex is-align-items-center",children:[Object(t.jsx)("input",{type:"radio",name:"method",value:e.ps_type_id,onChange:function(e){s(Object(l.a)(Object(l.a)({},c),{},{method:e.target.value}))}}),Object(t.jsx)("img",{src:e.img_url,alt:e.name,className:"m-1"}),e.name]})},e.ps_type_id)}))}):Object(t.jsx)("h3",{children:"Sorry, payment unavailable in this country"})})},M=n(10),g=n.n(M);function N(e){return e.replace(/\D/,"")}function C(e){var a=(new Date).getFullYear(),n=(new Date).getMonth(),t=e.split("-").map((function(e){return+e})),r=Object(s.a)(t,2),i=r[0],c=r[1];return a<i||n<c&&a===i}var A={name:"",card:"",expDate:"",cvv:"",method:""},B={name:!1,card:!1,expDate:!1,cvv:!1},G=function(e){var a=e.amount,n=void 0===a?9.99:a,i=e.currency,c=void 0===i?"$":i,o=e.doPayment,d=Object(r.useState)([]),b=Object(s.a)(d,2),j=b[0],m=b[1],p=Object(r.useState)(""),O=Object(s.a)(p,2),h=O[0],v=O[1],f=Object(r.useState)(A),S=Object(s.a)(f,2),M=S[0],G=S[1],I=Object(r.useState)(B),T=Object(s.a)(I,2),P=T[0],w=T[1],E=!Object.values(M).every((function(e){return e})),D=Object.values(P).some((function(e){return e}));return Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(M)},children:[Object(t.jsx)(x,{setSelectedCountry:v,selectedCountry:h}),j&&Object(t.jsx)(y,{selectedCountry:h,setPaymentMethods:m,paymentMethods:j,values:M,setValues:G}),Object(t.jsx)("div",{className:"field",children:Object(t.jsxs)("label",{className:"label",children:["Cardholder name:",Object(t.jsx)("input",{className:"input",type:"text",name:"name",id:"name",value:M.name,onChange:function(e){var a;G(Object(l.a)(Object(l.a)({},M),{},{name:(a=e.target.value,a.replace(/[^A-Za-z\s]/g,""))})),w(Object(l.a)(Object(l.a)({},P),{},{name:!1}))},onBlur:function(){return w(Object(l.a)(Object(l.a)({},P),{},{name:(e=M.name,!e.match(/[A-Za-z\s]/g))}));var e}}),P.name&&Object(t.jsx)("p",{className:"help is-danger",children:"Please enter your name"})]})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsxs)("label",{className:"label",children:["Card number:",Object(t.jsx)("input",{className:"input",type:"text",name:"card",id:"card",value:M.card,onChange:function(e){G(Object(l.a)(Object(l.a)({},M),{},{card:N(e.target.value)})),w(Object(l.a)(Object(l.a)({},P),{},{card:!1}))},onBlur:function(){return w(Object(l.a)(Object(l.a)({},P),{},{card:(e=M.card,!(e&&g.a.isValid(e)))}));var e}}),P.card&&Object(t.jsx)("p",{className:"help is-danger",children:"Please enter valid card number"})]})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsxs)("label",{className:"label",children:["CVV code:",Object(t.jsx)("input",{className:"input",type:"text",name:"cvv",id:"cvv",value:M.cvv,onChange:function(e){G(Object(l.a)(Object(l.a)({},M),{},{cvv:N(e.target.value)})),w(Object(l.a)(Object(l.a)({},P),{},{cvv:!1}))},onBlur:function(e){return w(Object(l.a)(Object(l.a)({},P),{},{cvv:!M.cvv}))}}),P.cvv&&Object(t.jsx)("p",{className:"help is-danger",children:"Please enter CVV"})]})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsxs)("label",{className:"label",children:["Expiration date:",Object(t.jsx)("input",{className:"input",type:"month",name:"expDate",id:"expDate",value:M.expDate,onChange:function(e){G(Object(l.a)(Object(l.a)({},M),{},{expDate:e.target.value})),w(Object(l.a)(Object(l.a)({},P),{},{expDate:!1}))},onBlur:function(){return w(Object(l.a)(Object(l.a)({},P),{},{expDate:!C(M.expDate)}))}}),P.expDate&&Object(t.jsx)("p",{className:"help is-danger",children:"Please enter valid date"})]})}),Object(t.jsx)("button",{type:"submit",disabled:E||D,title:"Fill all fields",className:u()({button:!0,"is-warning":E||D,"is-success":!(E||D)}),children:"Pay ".concat(n," ").concat(c)})]})},I=function(e){var a=e.isError;return Object(t.jsx)("div",{className:u()({notification:!0,"p-4":!0,"is-success":a,"is-danger":!a}),children:a?Object(t.jsx)("p",{children:"Payment is successful"}):Object(t.jsx)("p",{children:"Payment error"})})},T=function(){var e=Object(r.useState)(!1),a=Object(s.a)(e,2),n=a[0],i=a[1],c=Object(r.useState)(!1),l=Object(s.a)(c,2),o=l[0],u=l[1];return Object(t.jsx)("div",{className:"container p-4 is-flex is-flex-direction-column is-align-items-center",children:o?Object(t.jsx)(I,{isError:n}):Object(t.jsx)(G,{doPayment:function(e){i(Boolean(e)),u(!0),setTimeout((function(){u(!1)}),3e3)}})})};c.a.render(Object(t.jsx)(T,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua And Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia And Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, Democratic Republic","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote D\\"Ivoire","HR":"Croatia","CU":"Cuba","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island & Mcdonald Islands","VA":"Holy See (Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Republic Of","IQ":"Iraq","IE":"Ireland","IM":"Isle Of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\\"s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libyan Arab Jamahiriya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States Of","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint Barthelemy","SH":"Saint Helena","KN":"Saint Kitts And Nevis","LC":"Saint Lucia","MF":"Saint Martin","PM":"Saint Pierre And Miquelon","VC":"Saint Vincent And Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome And Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia And Sandwich Isl.","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard And Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad And Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks And Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis And Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}')}},[[17,1,2]]]);
//# sourceMappingURL=main.22992fd6.chunk.js.map