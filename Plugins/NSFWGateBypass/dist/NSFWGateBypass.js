function r(e){window.enmity.plugins.registerPlugin(e)}function s(...e){return window.enmity.getModuleByProps(e)}function o(e){return window.enmity.patcher.create(e)}const n=o("nsfw-gate-bypass"),i=s("isNSFWInvite"),a=s("getCurrentUser").default,l={name:"NSFWGateBypass",onStart(){n.instead(i,"isNSFWInvite",()=>!1),n.instead(i,"shouldNSFWGateGuild",()=>!1),n.instead(i,"handleNSFWGuildInvite",()=>!1),n.after(a,"getCurrentUser",(e,u,t)=>(t.nsfwAllowed==!1&&(t.nsfwAllowed=!0),t))},onStop(){n.unpatchAll()}};r(l);