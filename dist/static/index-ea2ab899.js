import{h as f,r as c,al as h,j as t,Y as P,am as j,an as B,e as E,Z as H,ao as k,W as I,B as C,ap as U,U as b}from"./sanity-667c1d91.js";const y=f(b)`
  position: relative;
`;function R(a){const{children:o}=a,{collapsed:n}=B();return t.jsx(y,{hidden:n,height:"fill",overflow:"auto",children:o})}function S(a){const{actionHandlers:o,index:n,menuItems:e,menuItemGroups:r,title:i}=a,{features:s}=E();return!(e!=null&&e.length)&&!i?null:t.jsx(H,{actions:t.jsx(k,{menuItems:e,menuItemGroups:r,actionHandlers:o}),backButton:s.backButton&&n>0&&t.jsx(I,{as:C,"data-as":"a",icon:U,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function v(a){const{index:o,pane:n,paneKey:e,...r}=a,{child:i,component:s,menuItems:d,menuItemGroups:u,type:T,...p}=n,[l,m]=c.useState(null),{title:x=""}=h(n);return t.jsxs(P,{id:e,minWidth:320,selected:r.isSelected,children:[t.jsx(S,{actionHandlers:l==null?void 0:l.actionHandlers,index:o,menuItems:d,menuItemGroups:u,title:x}),t.jsxs(R,{children:[j.isValidElementType(s)&&c.createElement(s,{...r,...p,ref:m,child:i,paneKey:e}),c.isValidElement(s)&&s]})]})}export{v as default};
