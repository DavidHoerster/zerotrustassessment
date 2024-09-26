"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[626],{13686:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(85893),t=s(11151);const r={},c="172: Evaluate macOS management with Intune + JAMF",o={id:"workshop-guidance/devices/RMD_172",title:"172: Evaluate macOS management with Intune + JAMF",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_172.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_172",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_172",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_172.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"171: Review current management needs",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_171"},next:{title:"173: AMB provisioning",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_173"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Steps to Evaluate macOS Management with Intune + Jamf",id:"steps-to-evaluate-macos-management-with-intune--jamf",level:3},{value:"Benefits",id:"benefits",level:3},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Possible Impact on End Users",id:"possible-impact-on-end-users",level:3},{value:"Tying to Zero Trust",id:"tying-to-zero-trust",level:3},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"172-evaluate-macos-management-with-intune--jamf",children:"172: Evaluate macOS management with Intune + JAMF"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Evaluating macOS management with Intune and Jamf involves integrating both platforms to leverage their strengths. Here's a detailed overview:"}),"\n",(0,i.jsx)(n.h3,{id:"steps-to-evaluate-macos-management-with-intune--jamf",children:"Steps to Evaluate macOS Management with Intune + Jamf"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Assess Current Environment"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identify the number of macOS devices and their current management status."}),"\n",(0,i.jsx)(n.li,{children:"Determine the existing management tools and policies in place."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Set Up Integration"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configure Jamf Pro"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Settings"})," > ",(0,i.jsx)(n.strong,{children:"Global Management"})," > ",(0,i.jsx)(n.strong,{children:"Conditional Access"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Intune Integration for macOS"}),"\u2075."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configure Intune"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new application for Jamf Pro in Microsoft Azure."}),"\n",(0,i.jsx)(n.li,{children:"Configure Intune to allow Jamf Pro integration."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deploy Intune Company Portal"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use Jamf Pro to deploy the Intune Company Portal app to macOS devices."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Register Devices"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Configure a policy in Jamf Pro to deploy to users through the Jamf self-service portal app to register devices with Microsoft Entra ID."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure Compliance Policies"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create and deploy device compliance policies in Intune."}),"\n",(0,i.jsx)(n.li,{children:"Ensure that Jamf Pro sends inventory updates to Intune."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Test and Validate"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pilot the integration with a small group of users to identify any issues."}),"\n",(0,i.jsx)(n.li,{children:"Gather feedback and make necessary adjustments."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Monitor and Maintain"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Continuously monitor the compliance status and update policies as needed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unified Management"}),": Combines the strengths of both Intune and Jamf for comprehensive macOS management."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Security"}),": Enforces compliance policies and integrates with Microsoft Entra ID for secure access."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Improved User Experience"}),": Streamlines device setup and access to resources."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scalability"}),": Easily scales management as the number of macOS devices grows."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Initial Setup Complexity"}),": Setting up and configuring the integration can be complex and time-consuming."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Learning Curve"}),": IT staff may need training to effectively use both Intune and Jamf."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compatibility Issues"}),": Some older macOS versions may not support all features."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"possible-impact-on-end-users",children:"Possible Impact on End Users"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Seamless Access"}),": Users benefit from streamlined access to corporate resources and fewer authentication prompts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Learning Curve"}),": Users may need initial guidance on new policies and procedures."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Security"}),": Users experience improved security measures, reducing the risk of data breaches."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tying-to-zero-trust",children:"Tying to Zero Trust"}),"\n",(0,i.jsx)(n.p,{children:"Evaluating and managing macOS devices with Intune and Jamf aligns with Zero Trust principles by:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Continuous Verification"}),": Ensuring that devices and users are continuously verified before granting access."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conditional Access"}),": Enforcing policies that require devices to meet security standards."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Least Privilege Access"}),": Limiting access to resources based on user roles and compliance status."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure the Connection Between Jamf Pro and Microsoft Intune. ",(0,i.jsx)(n.a,{href:"https://docs.jamf.com/technical-papers/jamf-pro/microsoft-intune/10.16.0/Configure_the_Connection_Between_Jamf_Pro_and_Microsoft_Intune.html",children:"https://docs.jamf.com/technical-papers/jamf-pro/microsoft-intune/10.16.0/Configure_the_Connection_Between_Jamf_Pro_and_Microsoft_Intune.html"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Configuring Jamf Pro and Intune Integration - Microsoft Community Hub. ",(0,i.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/intune-customer-success/configuring-jamf-pro-and-intune-integration/ba-p/334613",children:"https://techcommunity.microsoft.com/t5/intune-customer-success/configuring-jamf-pro-and-intune-integration/ba-p/334613"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Jamf Managed Device Compliance with Microsoft Entra ID - Microsoft Intune. ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/jamf-managed-device-compliance-with-entra-id",children:"https://learn.microsoft.com/en-us/mem/intune/protect/jamf-managed-device-compliance-with-entra-id"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Integrating with Microsoft Intune to Enforce Compliance on Mac ... - Jamf. ",(0,i.jsx)(n.a,{href:"https://docs.jamf.com/technical-papers/jamf-pro/microsoft-intune/10.34.0/Introduction.html",children:"https://docs.jamf.com/technical-papers/jamf-pro/microsoft-intune/10.34.0/Introduction.html"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Integrating with Microsoft Intune to Enforce Compliance on Mac ... - Jamf. ",(0,i.jsx)(n.a,{href:"https://www.jamf.com/resources/technical-papers/integrating-with-microsoft-intune-to-enforce-compliance-on-macs/",children:"https://www.jamf.com/resources/technical-papers/integrating-with-microsoft-intune-to-enforce-compliance-on-macs/"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://aka.ms/Intune/Jamf-Device-Compliance",children:"https://aka.ms/Intune/Jamf-Device-Compliance"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.jamf.com/technical-papers/jamf-pro/microsoft-intune/10.17.0/Requirements.html",children:"https://docs.jamf.com/technical-papers/jamf-pro/microsoft-intune/10.17.0/Requirements.html"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var i=s(67294);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);