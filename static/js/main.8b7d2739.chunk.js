(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={btnsBlock:"FeedbackOptions_btnsBlock__2vSRc",button:"FeedbackOptions_button__1BYbK"}},,,,,,function(e,t,n){e.exports={list:"FeedbackStatistics_list__nccZW"}},function(e,t,n){e.exports={section:"Section_section__1i6Ap"}},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),o=n(4),s=n.n(o),r=(n(17),n(5)),d=n(6),l=n(7),b=n(11),u=n(10),j=(n(18),n(2)),v=n.n(j);function h(e){var t=e.onLeaveFeedback;return Object(c.jsxs)("div",{className:v.a.btnsBlock,children:[Object(c.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return t("good")},children:"Good"}),Object(c.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return t("neutral")},children:"Neutral"}),Object(c.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return t("bad")},children:"Bad"})]})}var O=n(8),f=n.n(O);function k(e){var t=e.good,n=void 0===t?0:t,a=e.neutral,i=void 0===a?0:a,o=e.bad,s=void 0===o?0:o,r=e.total,d=void 0===r?0:r,l=e.positivePercentage,b=void 0===l?"0":l;return Object(c.jsxs)("ul",{className:f.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",n]}),Object(c.jsxs)("li",{children:["Neutral: ",i]}),Object(c.jsxs)("li",{children:["Bad: ",s]}),Object(c.jsxs)("li",{children:["Total: ",d]}),Object(c.jsxs)("li",{children:["Positive feedback: ",b,"%"]})]})}var x=n(9),p=n.n(x);function g(e){var t=e.title,n=void 0===t?"Title":t,a=e.children;return Object(c.jsxs)("div",{className:p.a.section,children:[Object(c.jsx)("h2",{children:n}),a]})}function m(e){var t=e.message;return Object(c.jsx)("div",{children:t})}var F=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedaback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(e,t){return(t/e*100).toFixed()},e.handleLeaveFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,a=e.neutral,i=this.countTotalFeedaback(),o=this.countPositiveFeedbackPercentage(i,this.state.good);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(g,{title:"Please leave feeaback",children:Object(c.jsx)(h,{onLeaveFeedback:this.handleLeaveFeedback})}),Object(c.jsx)(g,{title:"Statistics",children:i>0?Object(c.jsx)(k,{good:t,neutral:a,bad:n,total:i,positivePercentage:o}):Object(c.jsx)(m,{message:"No feedback given"})})]})}}]),n}(a.Component);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.8b7d2739.chunk.js.map