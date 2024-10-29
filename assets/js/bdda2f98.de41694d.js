"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[9047],{61755:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=t(74848),s=t(28453);const o={},r="041: Require device lock",c={id:"workshop-guidance/devices/RMD_041",title:"041: Require device lock",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_041.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_041",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_041",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_041.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"040: Approved keyboards",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_040"},next:{title:"042: Knox Attestation",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_042"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function l(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"041-require-device-lock",children:"041: Require device lock"})}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"This setting determines whether the Android device has a device PIN that meets the minimum password requirement. The App protection policy can take action if the device lock doesn\u2019t meet the minimum password requirement.\nValues include:"}),"\n",(0,n.jsx)(i.p,{children:"*Low Complexity"}),"\n",(0,n.jsx)(i.p,{children:"*Medium Complexity"}),"\n",(0,n.jsx)(i.p,{children:"*High Complexity"}),"\n",(0,n.jsx)(i.p,{children:"**This complexity value is targeted to Android 12+. For devices operating on Android 11 and earlier, setting a complexity value of low, medium, or high will default to the expected behavior for Low Complexity. For more information, see Google's developer documentation getPasswordComplexity, PASSWORD_COMPLEXITY_LOW,       PASSWORD_COMPLEXITY_MEDIUM, and PASSWORD_COMPLEXITY_HIGH."}),"\n",(0,n.jsx)(i.p,{children:"Actions include:"}),"\n",(0,n.jsx)(i.p,{children:"*Warn - The user sees a notification if the device lock doesn\u2019t meet the minimum password requirement. The notification can be dismissed."}),"\n",(0,n.jsx)(i.p,{children:"*Block access - The user will be blocked from access if the device lock doesn\u2019t meet the minimum password requirement."}),"\n",(0,n.jsx)(i.p,{children:"*Wipe data - The user account that is associated with the application is wiped from the device if the device lock doesn\u2019t meet the minimum password requirement."}),"\n",(0,n.jsx)(i.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-android#device-conditions",children:"https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-android#device-conditions"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);