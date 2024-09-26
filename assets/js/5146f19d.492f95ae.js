"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[9560],{10097:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(85893),r=s(11151);const t={},o="178: Deploy MDM based policies for EDR/AV",c={id:"workshop-guidance/devices/RMD_178",title:"178: Deploy MDM based policies for EDR/AV",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_178.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_178",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_178",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_178.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"177: Firewall",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_177"},next:{title:"179: Certificates / Wi-Fi / VPN",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_179"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Steps to Deploy MDM-Based Policies for EDR/AV on macOS",id:"steps-to-deploy-mdm-based-policies-for-edrav-on-macos",level:3},{value:"Benefits",id:"benefits",level:3},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Impact on End Users",id:"impact-on-end-users",level:3},{value:"Tying to Zero Trust",id:"tying-to-zero-trust",level:3},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"178-deploy-mdm-based-policies-for-edrav",children:"178: Deploy MDM based policies for EDR/AV"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Deploying MDM-based policies for Endpoint Detection and Response (EDR) and Antivirus (AV) on macOS devices using Microsoft Intune involves several steps. Here's a detailed overview:"}),"\n",(0,i.jsx)(n.h3,{id:"steps-to-deploy-mdm-based-policies-for-edrav-on-macos",children:"Steps to Deploy MDM-Based Policies for EDR/AV on macOS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prerequisites and System Requirements"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure you have the necessary licenses for Microsoft Defender for Endpoint."}),"\n",(0,i.jsx)(n.li,{children:"Verify that macOS devices meet the system requirements\xb9."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create System Configuration Profiles"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the Intune admin center, navigate to ",(0,i.jsx)(n.strong,{children:"Devices > Configuration profiles"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Create profiles for system extensions, network extensions, full disk access, and other necessary configurations."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Approve System Extensions"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Devices > Configuration profiles"})," and create a new profile."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"macOS"})," as the platform and ",(0,i.jsx)(n.strong,{children:"Extensions"})," as the profile type."]}),"\n",(0,i.jsx)(n.li,{children:"Add the required system extensions."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deploy Microsoft Defender for Endpoint"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Download the onboarding package from the Microsoft Defender Security Center."}),"\n",(0,i.jsx)(n.li,{children:"Deploy the package using Intune by creating a new app and assigning it to the relevant device groups."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure EDR Policies"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the Intune admin center, go to ",(0,i.jsx)(n.strong,{children:"Endpoint security > Endpoint detection and response"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Create and configure EDR policies, including onboarding packages and other settings."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Security"}),": Provides advanced threat detection and response capabilities, improving overall security posture."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Centralized Management"}),": Simplifies the management of security policies across all macOS devices from a single console."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compliance"}),": Helps ensure devices comply with organizational security policies and regulatory requirements."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Complexity"}),": Initial setup and configuration can be complex and time-consuming."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Resource Intensive"}),": May require significant system resources, potentially impacting device performance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User Experience"}),": Users might experience interruptions during the deployment and configuration process."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"impact-on-end-users",children:"Impact on End Users"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance"}),": Users might notice a slight decrease in performance due to the additional security processes running in the background."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Notifications"}),": Users will receive notifications related to security events and updates."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Restrictions"}),": Some applications or actions might be restricted based on the security policies applied."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tying-to-zero-trust",children:"Tying to Zero Trust"}),"\n",(0,i.jsx)(n.p,{children:"Deploying MDM-based policies for EDR/AV on macOS devices aligns with the Zero Trust security model by ensuring that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Continuous Verification"}),": Every access request is continuously verified, regardless of where the request originates."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Least Privilege Access"}),": Users and devices are granted the minimum level of access necessary to perform their tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Assume Breach"}),": The system is designed with the assumption that a breach has already occurred, ensuring robust detection and response mechanisms."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Deploy Microsoft Defender for Endpoint on macOS with Microsoft Intune. ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/defender-endpoint/mac-install-with-intune",children:"https://learn.microsoft.com/en-us/defender-endpoint/mac-install-with-intune"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Intune endpoint detection and response policy. | Microsoft Learn. ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-edr-policy",children:"https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-edr-policy"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Deploy MDM based policies for EDR/AV | Zero Trust Assessment. ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/zerotrustassessment/docs/workshop-guidance/devices/RMD_178",children:"https://microsoft.github.io/zerotrustassessment/docs/workshop-guidance/devices/RMD_178"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Deployment guide to manage macOS devices in Microsoft Intune. ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/deployment-guide-platform-macos",children:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/deployment-guide-platform-macos"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var i=s(67294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);