(this.webpackJsonpcalendar_react_app=this.webpackJsonpcalendar_react_app||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),i=n.n(a),d=n(3),r=n(0);var s=function(e){var t=e.initialLang;return Object(r.jsxs)("select",{onChange:function(n){t=n.target.value,e.handleCallBack(t)},children:[Object(r.jsx)("option",{value:"english",children:"en"}),Object(r.jsx)("option",{value:"german",children:"de"})]})};var l=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"date card-en center-div-flex",children:Object(r.jsx)("h1",{children:e.date})}),Object(r.jsxs)("div",{className:"day-month-year card-en center-div-flex",children:[Object(r.jsx)("div",{className:"day",children:Object(r.jsx)("h5",{children:e.day})}),Object(r.jsx)("div",{className:"month",children:Object(r.jsx)("h5",{children:e.month})}),Object(r.jsx)("div",{className:"year",children:Object(r.jsx)("h5",{children:e.year})})]}),Object(r.jsxs)("div",{className:"time-greet card-en",children:[Object(r.jsxs)("div",{className:"time",children:[Object(r.jsx)("div",{className:"hh",children:Object(r.jsx)("h2",{children:e.time.hh})}),Object(r.jsx)("div",{className:"colon-symbol",children:Object(r.jsx)("h2",{className:"blink",children:":"})}),Object(r.jsx)("div",{className:"mm",children:Object(r.jsx)("h2",{children:e.time.mm})}),Object(r.jsx)("div",{className:"colon-symbol",children:Object(r.jsx)("h2",{className:"blink",children:":"})}),Object(r.jsx)("div",{className:"ss",children:Object(r.jsx)("h2",{children:e.time.ss})})]}),Object(r.jsx)("div",{className:"greet",children:Object(r.jsx)("p",{children:Object(r.jsxs)("em",{children:["Hello, Good ",e.msg,"!"]})})})]})]})};var j=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"time card-de center-div-flex flex-direction-column",children:[Object(r.jsx)("h1",{children:e.time.hh}),Object(r.jsx)("h1",{children:e.time.mm})]}),Object(r.jsxs)("div",{className:"date-day-month card-de flex-direction-column",children:[Object(r.jsx)("div",{className:"date",children:Object(r.jsx)("h5",{children:e.date})}),Object(r.jsx)("div",{className:"day font-weight-400",children:Object(r.jsx)("h5",{children:e.day})}),Object(r.jsx)("div",{className:"month font-weight-400",children:Object(r.jsx)("h5",{children:e.month})})]}),Object(r.jsx)("div",{className:"greet card-de center-div-flex",children:Object(r.jsx)("div",{className:"greet",children:Object(r.jsx)("p",{children:Object(r.jsxs)("em",{children:["Hallo, Guten ",e.msg,"!"]})})})})]})};var m=function(e){return Object(r.jsx)("div",{className:"card",children:"english"===e.language?Object(r.jsx)(l,{date:e.ddmyt.date.twoDigitDate,day:e.ddmyt.dayName.enShort,month:e.ddmyt.monthName.enShort,year:e.ddmyt.year,time:e.ddmyt.time,msg:e.greetObj.en}):Object(r.jsx)(j,{date:e.ddmyt.date.dateDeFormat,day:e.ddmyt.dayName.deLong,month:e.ddmyt.monthName.deLong,time:e.ddmyt.time,msg:e.greetObj.de})})};var o,h=function(e){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsxs)("p",{children:["Copyright \xa9 Sat-Sid 2023 - ",e.year]})})},b=n(5),O={day:"numeric",month:"numeric",year:"numeric"},x={weekday:"long",month:"long"},g={date:{twoDigitDate:"",dateDeFormat:""},monthName:{enShort:"",deLong:""},dayName:{enShort:"",deLong:""},time:{hh:"",mm:"",ss:""},year:""};var v=function(){return o=new Date,g.date.twoDigitDate=o.toString().split(" ")[2],g.date.dateDeFormat=o.toLocaleString("de",O),g.monthName.enShort=o.toString().split(" ")[1].toUpperCase(),g.monthName.deLong=o.toLocaleString("de",x).split(" ")[0].toUpperCase(),g.dayName.enShort=o.toString().split(" ")[0].toUpperCase(),g.dayName.deLong=o.toLocaleString("de",x).split(" ")[1].toUpperCase(),g.time.hh=o.toString().split(" ")[4].slice(0,2),g.time.mm=o.toString().split(" ")[4].slice(3,5),g.time.ss=o.toString().split(" ")[4].slice(6,8),g.year=o.toString().split(" ")[3],Object(b.a)({},g)},u={morning:{en:"Morning",de:"Morgen"},afternoon:{en:"Afternoon",de:"Tag"},evening:{en:"Evening",de:"Abend"}};var y,N,p=function(){return u},f=v(),S=p();setInterval((function(){window.location.reload()}),3e4);var w=function(){var e=Object(c.useState)("english"),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(f),l=Object(d.a)(i,2),j=l[0],o=l[1];return N=Number(j.time.hh),setInterval((function(){o(v)}),1e3),y=function(e){var t="";return e>16||e<5?t="evening":e<12?t="morning":e>=12&&(t="afternoon"),t}(N),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(s,{handleCallBack:function(e){a(e)},initialLang:n}),Object(r.jsx)("div",{className:"card-container center-div-flex",children:Object(r.jsx)(m,{language:n,ddmyt:j,greetObj:S[y]})}),Object(r.jsx)(h,{year:j.year})]})};i.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c95f8e04.chunk.js.map