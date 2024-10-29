"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[132],{3522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453);const r={},a="023: Identify Critical Assets",o={id:"workshop-guidance/data/RMT_023",title:"023: Identify Critical Assets",description:"Overview",source:"@site/docs/workshop-guidance/data/RMT_023.md",sourceDirName:"workshop-guidance/data",slug:"/workshop-guidance/data/RMT_023",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_023",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/data/RMT_023.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"022: Segment administration using Administrative Units and RBAC",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_022"},next:{title:"024: Plan for the protection of Critical Assets",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_024"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"023-identify-critical-assets",children:"023: Identify Critical Assets"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Critical Data Assets are defined here to be Mission-critical which require special data security and/or cryptographic requirements, such as in the Defense or Military industries."}),"\n",(0,i.jsx)(t.p,{children:"Such resources are, either permanently or temporarily, accessible only to a very limited set of users, and never shared with personnel outside of the organization.\nExamples include documents with secret product design plans or formulas, critical PII for VIP employees or customers, undisclosed financial or business results, high value R&D and exploration data, etc."}),"\n",(0,i.jsx)(t.p,{children:'Identify emails (not individually, but as patterns, e.g. "email sent to the executive board that discuss undisclosed financial results"), documents and other data assets that can be considered critical data assets. This step will not be applicable for most industries and most organizations.'}),"\n",(0,i.jsx)(t.p,{children:"Also identify the optimal means for detecting such data. Data that resides in a specific document that would never be transformed into other formats or incorporated into other documents can be just labeled accordingly, so the label will always travel with the document allowing easy identification.\nContent that can be transformed into other formats or copied in part or in full in other documents but that is only valuable if present in complete or semi-complete form (e.g. some forms of source code and CAD designs or numerical data) can be detected using fingerprints with full or high percentage match.\nContent that can be transformed into other formats or copied in part or in full in other documents and that is only valuable even if only obtained in part (e.g. financial results, product plans, etc.) can be detected using either labels that don't allow for copying and which include dynamic watermarks, or via fingerprints configured for partial match."}),"\n",(0,i.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Dynamic watermarking for sensitivity labels in Word, Excel, and PowerPoint ",(0,i.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/security-compliance-and-identity/preview-dynamic-watermarking-for-sensitivity-labels-in-word/ba-p/4185842",children:"https://techcommunity.microsoft.com/t5/security-compliance-and-identity/preview-dynamic-watermarking-for-sensitivity-labels-in-word/ba-p/4185842"})]}),"\n",(0,i.jsxs)(t.li,{children:["Document fingerprinting in Microsoft Purview ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/purview/sit-document-fingerprinting",children:"https://learn.microsoft.com/en-us/purview/sit-document-fingerprinting"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);