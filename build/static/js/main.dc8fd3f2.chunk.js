(this.webpackJsonpsurvey=this.webpackJsonpsurvey||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=(a(14),a(1)),c=(a(15),a(16),function(e){var t=e.children;return r.a.createElement("div",{className:"Container"},t)}),s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null,r.a.createElement("div",{style:{padding:"1em"}},r.a.createElement("span",null,"Logo is Right here"))),r.a.createElement("div",{style:{backgroundColor:"rgb(51, 76, 130)",height:"3em"}}),r.a.createElement("div",{style:{backgroundColor:"rgb(210, 76, 88)",height:"3em"}}),r.a.createElement("div",null))},m=(a(17),function(e){var t=function(e){switch(e){case 0:return 0;case 1:return 33;case 2:return 67;case 3:return 100;default:return 0}}(e.checkpoint);return r.a.createElement("div",{className:"progress-bar-container"},r.a.createElement("progress",{className:"Progress",value:t,max:"100"}),r.a.createElement("span",{className:"progress-bar-checkpoint checkpoint-1 active"}),r.a.createElement("span",{className:"progress-bar-checkpoint checkpoint-2 ".concat(t>=33?"active":"")}),r.a.createElement("span",{className:"progress-bar-checkpoint checkpoint-3 ".concat(t>=67?"active":"")}),r.a.createElement("span",{className:"progress-bar-checkpoint checkpoint-4 ".concat(t>=100?"active":"")}))}),u=a(2),d=a(4),E=(a(18),a(19),function(e){var t=e.questionNumber;return r.a.createElement("div",{className:"question-number-container"},r.a.createElement("span",{className:"question-number-decoration"}),r.a.createElement("span",{className:"question-number"},"".concat(t," of 11")),r.a.createElement("span",{className:"question-number-decoration"}))}),f=(a(20),function(e){var t=e.question,a=e.value,o=e.onChange,i=void 0===o?function(){}:o,c=Object(n.useState)(a),s=Object(l.a)(c,2),m=s[0],u=s[1];return r.a.createElement("form",{className:"survey-question"},r.a.createElement("h1",{className:"survey-question-title"},t.title),r.a.createElement("div",{className:"answers"},t.answers.map((function(e,t){return r.a.createElement("label",{key:e,className:"radio-container"},e,r.a.createElement("input",{name:"answer",type:"radio",onChange:function(e){i(e.currentTarget.value),u(e.currentTarget.value)},checked:m==t,value:t}),r.a.createElement("span",{className:"radio-button"}))}))))}),h=a(30),v=[{id:0,title:"What is your current employment status?",answers:["I am a current full time federal employee","I am currently on active duty in the military","I am a part time federal employee or national guard/reserve military member","I am a retired military or federal employee"]},{id:1,title:"How old are you",answers:["17-30","30-45","45-55","56+"]},{id:2,title:"How many years until you expect to retire?",answers:["20 years or more","10 - 20 years","5 - 10 years","Less than 5 years or currently retired"]},{id:3,title:"How much do you currently have in your savings?",answers:["6 months or more of living expenses","3-5 months living expenses","1-2 months living expenses","Less than one month of living expenses"]},{id:4,title:"If the stock marker lost 40% you would",answers:["See it as an opportunty and invest more if you had the cash available","Continue with my currenty strategy, but not invest any more even if I had cash available","Change my strategy and reduce my exposure to risk","Pull my money out of the stock market"]},{id:5,title:"In the next few years you expect your income to",answers:["Increase","Stay the same","Decrease","Decrease drastically"]},{id:6,title:"What do you expect out of your TSP?",answers:["I expect my portfolio to significantly exceed inflation, even if this means higher levels of Volatility","I expect my portfolio to exceed inflation, with reasonable levels of volatility","I exepct my portfolio to keep pace with inflation, with lover levels of volatility","I am more concerned with having as little volatility as possible more than keeping pace with inflation"]},{id:7,title:"I'm most comfortable with a portfolio that",answers:["May fluctuate by 20% up or down but averages 10% over the life of the investment","May fluctuate by 15% up or down but averages 8% over the life of the investment","May fluctuate by 10% up or down but averages 4-6% over the life of the investment","I would take less than 2% in exchange for my portfolio fluctuation a minimal amount"]},{id:8,title:"How would you describe yourself?",answers:["I am an optimist. I am confident that things will always work out.","I am objective. Show me the benefits and the drawbacks. I'll make a decision and live with it","I am an anxious person. I usually worry about most things","I am a pessimist. If something can go wrong, it will go wrong."]},{id:9,title:"When you are reviewing your TSP to what do you think will focus your attention?",answers:["The overall longterm performance of the entire portfolio","The most recent results of the entire portfolio","The individual fund that is doing the best","The individual fund that is doing the worst"]},{id:10,title:"If I was given $10,000 in an inheritance I would",answers:["Wait for a drop in the market and invest the money according to my current investment strategy","Invest the money immediately in accordance with my current investment strategy","Invest the money in Low Risk Bonds or Certificates of Deposit","Save the money and not invest any of it."]}];var p=function(e){var t=e.onSurveyFinished,a=Object(n.useState)({}),o=Object(l.a)(a,2),i=o[0],c=o[1],s=Object(n.useState)(0),m=Object(l.a)(s,2),p=m[0],y=m[1],g=Object(n.useState)(!1),O=Object(l.a)(g,2),b=O[0],N=O[1],S=Object(n.useState)(!0),I=Object(l.a)(S,2),w=I[0],A=I[1],T=Object(n.useRef)(!0);return Object(n.useEffect)((function(){T.current&&(setTimeout(N(!0),0),T.current=!1)}),[T]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{questionNumber:p+1}),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(h.a,{in:b,timeout:300,classNames:"alert",onEntered:function(){A(!0)}},b?r.a.createElement(f,{key:v[p].id,value:i[p],question:v[p],onChange:function(e){c(Object(d.a)({},i,Object(u.a)({},p,e)))}}):r.a.createElement("div",null))),w&&r.a.createElement("div",{className:"question-actions"},0!==p&&r.a.createElement("button",{className:"prev-button",key:"prev",onClick:function(){y(p-=1),A(!1),N(!1),setTimeout((function(){N(!0)}),100)}}," ",r.a.createElement("span",{className:"btn__content",tabIndex:"-1"},"<<<","\xa0\xa0\xa0\xa0Previous")),p!==v.length-1&&r.a.createElement("button",{className:"next-button",key:"next",disabled:void 0===i[p.toString()],onClick:function(){y(p+=1),A(!1),N(!1),setTimeout((function(){N(!0)}),100)}},r.a.createElement("span",{className:"btn__content",tabIndex:"-1"},"Next\xa0\xa0\xa0\xa0",">>>")),p===v.length-1&&r.a.createElement("button",{className:"next-button",key:"next",disabled:void 0===i[p.toString()],onClick:function(){t(i)}},r.a.createElement("span",{className:"btn__content",tabIndex:"-1"},"Finish"))))},y=(a(23),a(24),function(e){var t=e.onClick,a=void 0===t?function(){}:t,n=e.children,o=e.fullWidth,i=void 0!==o&&o;return r.a.createElement("button",{onClick:a,className:"primary-button ".concat(i&&"full-width")},r.a.createElement("span",{className:"primary-button-btn__content"},n))}),g=function(e){var t=e.onStart;return r.a.createElement("div",{className:"landing-page"},r.a.createElement("div",{style:{margin:"4rem"}}),r.a.createElement("h1",{className:"landing-page-title"},"Welcome!"),r.a.createElement("div",{style:{margin:"4rem"}}),r.a.createElement(y,{onClick:t},"Click here to get started!"))},O=(a(25),function(e){var t=e.answers,a=e.onConfirm,o=void 0===a?function(){}:a,i=Object(n.useState)(t),c=Object(l.a)(i,2),s=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:"3em"}}),v.map((function(e){return r.a.createElement("div",{style:{borderBottom:"#ddd solid 1px",marginBottom:"1em",paddingBottom:"1em"}},r.a.createElement(f,{question:e,value:s[e.id],onChange:function(t){m(Object(d.a)({},s,Object(u.a)({},e.id,t)))}}))})),r.a.createElement("div",{style:{padding:"1rem 2rem 3rem"}},r.a.createElement(y,{fullWidth:!0,onClick:o},"Submit")))}),b=a(7),N=a.n(b),S={0:{0:0,1:0,2:0,3:0},1:{0:10,1:7,2:5,3:1},2:{0:10,1:5,2:3,3:1},3:{0:10,1:7,2:3,3:0},4:{0:10,1:5,2:3,3:0},5:{0:10,1:7,2:3,3:1},6:{0:10,1:7,2:5,3:1},7:{0:10,1:7,2:3,3:0},8:{0:10,1:7,2:3,3:1},9:{0:10,1:5,2:5,3:1},10:{0:10,1:10,2:5,3:1}},I=function(e){var t=0;for(var a in e)t+=S[a][e[a]];return t},w=(a(26),a(27),function(e){e.onStart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"contact-form-title"},"Contact an Advisor"),r.a.createElement("p",{className:"contact-form-description"},"Thank you for your interest in us! Please fill out The form below, and advise will be with you as soon as possible!"),r.a.createElement("form",{className:"contact-form"},r.a.createElement("input",{className:"input",name:"first",type:"text",placeholder:"First"}),r.a.createElement("input",{className:"input",name:"last",type:"text",placeholder:"Last"}),r.a.createElement("input",{className:"input",name:"age",type:"number",placeholder:"Age"}),r.a.createElement("input",{className:"input",name:"email",type:"email",placeholder:"Email"}),r.a.createElement("input",{className:"input",name:"number",type:"tel",placeholder:"Phone Number"}),r.a.createElement(y,{fullWidth:!0},"Submit")))}),A=function(e){var t=e.answers,a=I(t),o=function(e){return e<25?{C:50,S:25,I:25,F:0,G:0}:e<50?{C:50,S:10,I:15,F:25,G:0}:e<75?{C:45,S:0,I:10,F:45,G:0}:{C:10,S:0,I:10,F:10,G:70}}(100),i=Object(n.useState)(!1),c=Object(l.a)(i,2),s=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(w,null),!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"results-title"},function(e){return e<25?"PRESERVATION OF CAPITAL":e<50?"BALANCED":e<75?"GROWTH AND INCOME":"GROWTH FOCUSED"}(a)),r.a.createElement("p",{className:"results-description"},function(e){return e<25?"YOU ARE GROWTH FOCUSED. YOUR PORTFOLIO VALUE MAY EXPERIENCE LARGE SWINGS UP OR DOWN.\n        WE RECOMMEND THAT YOU ALLOCATE YOUR FUNDS INSIDE YOUR TSP AS FOLLOWS:":e<50?"YOU ARE GROWTH AND INCOME FOCUSED. YOUR PORTFOLIO VALUE MAY EXPERIENCE MODERATE\n        SWINGS UP OR DOWN. WE RECOMMEND THAT YOU ALLOCATE THE FUNDS INSIDE YOUR TSP AS\n        FOLLOWS:":e<75?"YOU ARE BALANCED FOCUSED. BOTH GROWTH AND INCOME ARE EQUALLY IMPORTANT IN YOUR\n        PORTFOLIO. YOU CAN EXPECT MODERATE TO LESS THAN MODERATE SWINGS UP OR DOWN IN THE\n        VALUE OF YOUR TSP ACCOUNT. WE RECOMMEND THAT YOU ALLOCATE YOUR FUNDS INSIDE YOUR TSP\n        AS FOLLOWS:":"YOU ARE FOCUSED ON PRESERVING WHAT YOU HAVE SAVED. YOUR PORTFOLIO VALUE MAY STILL\n        EXPERIENCE VOLITILITY BUT IS EXPECTED TO BE MUCH LESS THAN MARKET AVERAGE. WE\n        RECOMMEND THAT YOU ALLOCATE YOUR FUNDS INSIDE YOUR TSP AS FOLLOWS:"}(a)),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{width:"60%",marginLeft:"1em"}},r.a.createElement(N.a,{animate:!0,animationDuration:500,animationEasing:"ease-out",cx:50,cy:50,label:function(e){var t=e.data,a=e.dataIndex;return t[a].percentage>0?Math.round(t[a].percentage)+"%":null},labelPosition:110,labelStyle:{fill:"#000000",fontFamily:"sans-serif",fontSize:"1em"},data:[{title:"C",value:o.C,color:"rgb(210, 76, 88)"},{title:"S",value:o.S,color:"rgb(51, 76, 130)"},{title:"I",value:o.I,color:"#AA82B9"},{title:"F",value:o.F,color:"#599675"},{title:"G",value:o.G,color:"#E3D170"}],startAngle:0,lengthAngle:360,lineWidth:100,paddingAngle:0,radius:40,rounded:!1,viewBoxSize:[400,400]})),r.a.createElement("div",{style:{display:"flex",width:"33%",justifyContent:"center",marginLeft:"auto",marginRight:"1em"}},r.a.createElement("div",{display:"table"},o.C>0&&r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"legend-color legend-color-c"}),"C Plan"),o.S>0&&r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"legend-color legend-color-s"}),"S Plan"),o.I>0&&r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"legend-color legend-color-i"}),"I Plan"),o.F>0&&r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"legend-color legend-color-f"}),"F Plan"),o.G>0&&r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"legend-color legend-color-g"}),"G Plan")))),r.a.createElement("div",{style:{textAlign:"center",marginBottom:"3em"}},r.a.createElement(y,{onClick:function(){m(!0)}},"Contact an Advisor"))))},T=0,C=1,R=2,k=3;var L=function(){var e=Object(n.useState)(T),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)({}),u=Object(l.a)(i,2),d=u[0],E=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{style:{marginTop:"3em"}},r.a.createElement(c,null,r.a.createElement(m,{checkpoint:a}),r.a.createElement("div",{style:{marginTop:"2em"}}),a===T&&r.a.createElement(g,{onStart:function(){o(C)}}),a===C&&r.a.createElement(p,{onSurveyFinished:function(e){E(e),o(R)}}),a===R&&r.a.createElement(O,{answers:d,onConfirm:function(){return o(k)}}),a===k&&r.a.createElement(A,{answers:d}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.dc8fd3f2.chunk.js.map