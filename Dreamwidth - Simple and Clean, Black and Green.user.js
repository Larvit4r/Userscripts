// ==UserScript==
// @name  Dreamwidth: Simple and Clean, Black and Green
// @namespace https://github.com/Larvit4r/Userscripts/
// @description Removes DW clutter and changes the Tropo background to Black and Green! Untested on non-Tropo styles. Adapted from userstyle.org's userstyle->userscript code.
// @icon  https://dreamwidth.org/favicon.ico
// @author  Ryu / Larvit4r
// @version 2018.08.27
// @license GPLv3
// @include *://*.dreamwidth.org/*
// @exclude *://insert-journal-you-want-to-exclude-here.dreamwidth.org/*
// @require https://code.jquery.com/jquery-1.11.3.min.js
// @run-at  document-start
// ==/UserScript==
(function() {var css = ["@namespace url(http://www.w3.org/1999/xhtml);",
	".right nav-search, #skip,.poster-example_user div.contents,#logo,.entry-content img,footer,#statistics,.bottomcomment,.appwidget-search,hr{display:none !important}",
	"html,#canvas,#page,#masthead,body {background-color:#020 !important;background:#020 !important;background-image:none !important;color:#DDD !important;border:0px !important;padding:0px; !important}",
	"form td,.details_stats, #settings_left, .tablist .tab disabled, .action-bar {background-color:#020 !important;background:#020 !important;color:#DDD !important;border:0px !important}",

	".section_head,form tr, .panel,.alert-box, .topnav, .tab-header .comment-info, .tablist .tab, .comment .inner .header, div.actions ul li, #page nav, .progress-meter li {background-color:#052 !important, color: #DDD !important;border:0px !important;background:#052 !important}",

	".nav ul li a, .topnav a {background-color:#052 !important;border:0px !important}",
	"div.username {background-color: #052 !important;border: 0px !important}",
	"input, textarea, textbox, fieldset, select, legend {background-color:#AFA !important;border:0px !important}",
	"div.section {background-color: #052 !important; border: 0px !important; color: #DDD !important}",
	".action-box .inner, #shim-alpha, .comment-pages, .inner, #intro-box, #intro-box-main, .highlight-box, .shop-status-bar {background:transparent !important;color: #DDD !important;border:0px !important}",
/* links */
	"span.expandcollapse.on a {color: #AAA !important}",
	"a:link {color: #0C0 !important}",
	"a:visited {color: #070 !important}",
	"a:hover {color: #F90 !important}",
	"a:active {color: #FC0 !important}",
	"h1,h2,h3,h4,h5,h6{color:#DDD !important}",
	""
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}}})();
