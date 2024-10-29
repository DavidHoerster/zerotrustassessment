"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[8992],{80662:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(74848),r=i(28453);const t={},o="037: Conditional launch",c={id:"workshop-guidance/devices/RMD_037",title:"037: Conditional launch",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_037.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_037",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_037",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_037.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"036: Access requirements",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_036"},next:{title:"038: Device Manufacturers",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_038"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Conditional Launch Settings for MAM in Microsoft Intune",id:"conditional-launch-settings-for-mam-in-microsoft-intune",level:3},{value:"1. <strong>Max PIN Attempts</strong>",id:"1-max-pin-attempts",level:3},{value:"2. <strong>Offline Grace Period</strong>",id:"2-offline-grace-period",level:3},{value:"3. <strong>Jailbroken/Rooted Devices</strong>",id:"3-jailbrokenrooted-devices",level:3},{value:"4. <strong>Minimum OS Version</strong>",id:"4-minimum-os-version",level:3},{value:"5. <strong>Maximum OS Version</strong>",id:"5-maximum-os-version",level:3},{value:"6. <strong>Minimum App Version</strong>",id:"6-minimum-app-version",level:3},{value:"7. <strong>Device Manufacturer(s)</strong>",id:"7-device-manufacturers",level:3},{value:"8. <strong>Play Integrity Verdict</strong>",id:"8-play-integrity-verdict",level:3},{value:"9. <strong>Require Threat Scan on Apps</strong>",id:"9-require-threat-scan-on-apps",level:3},{value:"10. <strong>Minimum Company Portal Version</strong>",id:"10-minimum-company-portal-version",level:3},{value:"11. <strong>Disabled Account</strong>",id:"11-disabled-account",level:3},{value:"Benefits",id:"benefits",level:4},{value:"Drawbacks",id:"drawbacks",level:4},{value:"Impact on End Users",id:"impact-on-end-users",level:4},{value:"Relation to Zero Trust",id:"relation-to-zero-trust",level:4},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"037-conditional-launch",children:"037: Conditional launch"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h3,{id:"conditional-launch-settings-for-mam-in-microsoft-intune",children:"Conditional Launch Settings for MAM in Microsoft Intune"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Conditional Launch settings"})," in Microsoft Intune's Mobile Application Management (MAM) policies help ensure that only compliant users can access corporate data via MAM protected apps. These settings validate various aspects of the app and device before allowing access to work or school account data."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"App Protection Policy Conditional Launch"})," settings in Microsoft Intune for Android devices provide a way to enforce security requirements for accessing corporate applications. Here\u2019s a detailed overview of the available options:"]}),"\n",(0,s.jsxs)(n.h3,{id:"1-max-pin-attempts",children:["1. ",(0,s.jsx)(n.strong,{children:"Max PIN Attempts"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Set the maximum number of incorrect PIN attempts before access is blocked."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": You can choose to block access or wipe corporate data if the limit is exceeded."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"2-offline-grace-period",children:["2. ",(0,s.jsx)(n.strong,{children:"Offline Grace Period"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Define how long a user can be offline before access to managed apps is restricted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": Options include blocking access or wiping corporate data after the grace period expires."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"3-jailbrokenrooted-devices",children:["3. ",(0,s.jsx)(n.strong,{children:"Jailbroken/Rooted Devices"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Determine whether access is allowed on devices that are jailbroken or rooted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": You can block access or wipe corporate data if a device is detected as compromised."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"4-minimum-os-version",children:["4. ",(0,s.jsx)(n.strong,{children:"Minimum OS Version"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Specify the minimum Android OS version required for accessing managed apps."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": If the device does not meet this requirement, you can block access or wipe data."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"5-maximum-os-version",children:["5. ",(0,s.jsx)(n.strong,{children:"Maximum OS Version"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Set a maximum OS version for accessing managed apps."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": Similar to the minimum version, you can block access or wipe data if the device exceeds this version."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"6-minimum-app-version",children:["6. ",(0,s.jsx)(n.strong,{children:"Minimum App Version"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Specify the minimum version of the app required for access."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": If the app version is outdated, you can block access or wipe data."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"7-device-manufacturers",children:["7. ",(0,s.jsx)(n.strong,{children:"Device Manufacturer(s)"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Allow or block access based on specific device manufacturers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": You can set actions to block access or wipe data for non-compliant manufacturers."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"8-play-integrity-verdict",children:["8. ",(0,s.jsx)(n.strong,{children:"Play Integrity Verdict"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Use Google Play Integrity API to assess the integrity of the app and device."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": Depending on the verdict, you can block access or wipe data."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"9-require-threat-scan-on-apps",children:["9. ",(0,s.jsx)(n.strong,{children:"Require Threat Scan on Apps"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Ensure that apps are scanned for threats before access is granted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": You can block access or wipe data if a threat is detected."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"10-minimum-company-portal-version",children:["10. ",(0,s.jsx)(n.strong,{children:"Minimum Company Portal Version"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Specify the minimum version of the Intune Company Portal app required."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": If the version is below the specified threshold, you can block access or wipe data."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"11-disabled-account",children:["11. ",(0,s.jsx)(n.strong,{children:"Disabled Account"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Block access if the user\u2019s account is disabled."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Actions"}),": Automatically block access to managed apps."]}),"\n",(0,s.jsx)(n.hr,{}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"benefits",children:"Benefits"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhanced Security"}),": Ensures that only users meeting specific criteria can access sensitive data in procted apps, reducing the risk of data breaches."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Protection"}),": Allows for selective wiping of corporate data atthe application level(e.g., jailbroken/rooted devices)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compliance Enforcement"}),": Helps organizations enforce compliance with security policies across MAM protected apps."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexibility"}),": Offers a range of settings to tailor security measures to specific organizational needs."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Complex Configuration"}),": Setting up and managing these policies can be complex and may require significant administrative effort."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User Disruption"}),": Users may experience disruptions if their devices or apps do not meet the compliance requirements, potentially impacting productivity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Resource Intensive"}),": Implementing and maintaining these policies can be resource-intensive, requiring dedicated IT staff."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"impact-on-end-users",children:"Impact on End Users"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Improved Security"}),": Users benefit from enhanced security measures, protecting their personal and corporate data with almost no impact to end users."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Access Restrictions"}),": Users may face access restrictions if their devices do not comply with the set policies, which could limit their ability to work."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"relation-to-zero-trust",children:"Relation to Zero Trust"}),"\n",(0,s.jsx)(n.p,{children:"Zero Trust is a security model that assumes breaches are inevitable and focuses on verifying every request as though it originates from an open network. Conditional Launch settings in Intune support Zero Trust principles in several ways:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verify Explicitly"}),": Policies ensure that every device and user is verified before granting access."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Least Privilege Access"}),": Policies enforce the principle of least privilege, ensuring users have only the access they need."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Assume Breach"}),": Intune integrates with threat detection and response services to monitor and respond to potential threats in real-time."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["App protection policy conditional launch improvements - blog: ",(0,s.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/intune-customer-success/app-protection-policy-conditional-launch-improvements/ba-p/2209022",children:"https://techcommunity.microsoft.com/t5/intune-customer-success/app-protection-policy-conditional-launch-improvements/ba-p/2209022"})]}),"\n",(0,s.jsxs)(n.li,{children:["Wipe data using app protection policy conditional launch actions: ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policies-access-actions",children:"https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policies-access-actions"})]}),"\n",(0,s.jsxs)(n.li,{children:["Understand app protection conditional launch using Microsoft Intune: ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/microsoft-365/solutions/apps-protect-conditional-launch?view=o365-worldwide",children:"https://learn.microsoft.com/en-us/microsoft-365/solutions/apps-protect-conditional-launch?view=o365-worldwide"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);