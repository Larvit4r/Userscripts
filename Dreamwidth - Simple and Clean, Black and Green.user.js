// ==UserScript==
// @name	Dreamwidth: Simple and Clean, Black and Green
// @namespace	https://github.com/Larvit4r/Userscripts/
// @description	Removes DW clutter and changes the Tropo background to Black and Green! Untested on non-Tropo styles. Adapted from userstyle.org's userstyle->userscript code.
// @icon        https://dreamwidth.org/favicon.ico
// @author	Ryu / Larvit4r
// @version	2018.08.29
// @license	GPL-3.0-or-later
// @include	*://dreamwidth.org/*
// @include	*://*.dreamwidth.org/*
// @exclude	*://journal-to-exclude-here.dreamwidth.org/*
// @require	https://code.jquery.com/jquery-1.11.3.min.js
// @grant	none
// @run-at	document-start
// ==/UserScript==
(function(){var css=["@namespace url(http://www.w3.org/1999/xhtml);",
// Obligatory "HIDE THAT TRASH" code
	".right nav-search,#skip,#logo,.entry-content img,footer,#statistics,.bottomcomment,.appwidget-search,.nav-search,hr{display:none !important}",
	".module-time,.module-powered,#footer,.module-userprofile,.module-navlinks,.module-calendar,.module-syndicate,.module-pagesummary,.module-credit,.module-cuttagcontrols{display:none !important}",
//Delete or hide the line below if you don't want to hide the mouseover pop-ups
	".ui-tooltip,.ippu,.ippu .ContextualPopup,.ContextualPopup img,.ContextualPopup a,.ContextualPopup .Relation,.ContextualPopup .Actions {display:none !important}",
//This will hide comments for you, although it only works in journal posts at the moment. If you were to block "denise", her posts would still show up on https://dw-news.dreamwidth.org but if you were on a post like https://dw-news.dreamwidth.org/38369.html then the OP would be hidden, as would her comments. This does not affect the comment count because this is just some simple CSS.
	".poster-usernametoblockhere {display:none !important}",
// For hiding images in entry OPs, may make a toggle feature for this after I've learned to code better. Mainly for my fellow anon community users.
	".entry_text img,.entry_content img,div.latest-entry.usercontent img {display:none !important}",
// #222 - Off-black (background)
// #020 = Really dark/"black-ish" green (if you'd prefer a greener background)
// #052 = Green
// #DDD = Off-white (text)
// If you're still figuring out color codes, remember that #123 is short for #112233!
	"body,html,#canvas,#page,#masthead,#lj_controlstrip,#lj_controlstrip td{background-color:#222 !important;background:#222 !important;background-image:none !important;color:#DDD !important;border:0px !important;padding:0px !important;border-bottom:0px !important;border-right:0px !important}",
	"form td,.details_stats,#settings_left,.tablist .tab disabled,.action-bar,.settings_content,#settings_nav a,td.NotificationOptions,.history_label,.history_option,.table-as-list td{background-color:#222 !important;background:#222 !important;color:#DDD !important;border:0px !important}",
	".selected,#canvas #header .inner,.navigation,#entries .entry,.section_head,.panel,.alert-box,.topnav,.tab-header .comment-info,.tablist .tab,.comment .inner .header,div.actions ul li,#page nav,.progress-meter li,.postfix,#nav-login-form,div.username,.button.radius,button,.subheader,.customize-nav-group,#uploadBox-inner,.tab-header,#settings_nav a.active,th.display_label,form th,.inset-box,#cf-select,#cf-intro,.column-table th,.table-as-list th,.tags-container{background-color:#052 !important;color:#DDD !important;border:0px !important;background:#052 !important; box-shadow: 0 0 0 !important}",
	".folders a,.action-box .inner,#shim-alpha,.comment-pages,.inner,#intro-box,#intro-box-main,.highlight-box,.shop-status-bar{background:transparent !important;color:#DDD !important;border:0px !important}",
	"h1,h2,h3,h4,h5,h6,.entry .header,.entry .footer{color:#DDD !important;background:transparent !important}",
	"span,.entry-content,form tr,.section,div.profile th,li.unavailable,ul,ol,li,p,fieldset,label{color:#DDD !important;background:transparent !important;border:0px !important}",
	".nav ul li a,.topnav a,div.section{background-color:#052 !important;border:0px !important}",
// Form objects
	"input,textarea,textarea::placeholder,textbox,select,fieldset legend,.warning-box,.screened{background-color:#686 !important;border:0px !important;color:#DDD !important;border-top:0px !important;border-left:0px !important}",
// Spoiler cuts
// See: https://fail-fandomanon.dreamwidth.org/1076.html?thread=1102398260
// Keep in mind that this code will only work for 1. posts where it's already enabled or 2. people using custom CSS code like this userscript, so spoilers will not be properly hidden for most people.
	"div[tabindex]{display:inline}",
	"div[tabindex]>b~div{display:none}",
	"div[tabindex]>b{color:#00F;text-decoration:underline;cursor:pointer}",
	"div[tabindex]>b::before{content:'['}",
	"div[tabindex]>b::after{content:']'}",
	"div[tabindex]:focus>b{display:none}",
	"div[tabindex]:focus>b~div{display:inline}",
	"div[tabindex]:focus{outline:none}",
// Links
	"span.expandcollapse.on a{color:#AAA !important}",
	"a:link{color:#0C0 !important}",
	"a:visited{color:#070 !important}",
	"a:hover{color:#F90 !important}",
	"a:active{color:#FC0 !important}",
// DON'T TOUCH
""].join("\n");if(typeof GM_addStyle!="undefined"){GM_addStyle(css)}else if(typeof PRO_addStyle!="undefined"){PRO_addStyle(css)}else if(typeof addStyle!="undefined"){addStyle(css)}else{var node=document.createElement("style");node.type="text/css";node.appendChild(document.createTextNode(css));var heads=document.getElementsByTagName("head");if(heads.length>0){heads[0].appendChild(node)}else{document.documentElement.appendChild(node)}}})()
