(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{30:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n.n(c),o=n(15),u=n(23),i=n.n(u);var m=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(i.a,null),"Keeper"))};var s=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},E=n(25),p=n.n(E);var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(p.a,null)))},f=n(21),b=n(26),v=n.n(b),h=n(56),g=n(57);var j=function(e){const t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],s=i[1];function E(e){const t=e.target,n=t.name,a=t.value;s(e=>Object(f.a)(Object(f.a)({},e),{},{[n]:a}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:E,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:E,value:m.content,placeholder:"Take a note...",rows:c?3:1}),l.a.createElement(g.a,{in:c},l.a.createElement(h.a,{onClick:function(t){e.onAdd(m),s({title:"",content:""}),t.preventDefault()}},l.a.createElement(v.a,null)))))};var O=function(){const e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];function r(e){c(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(j,{onAdd:function(e){c(t=>[...t,e])}}),n.map((e,t)=>l.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:r})),l.a.createElement(s,null))};r.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d3e5737a.chunk.js.map