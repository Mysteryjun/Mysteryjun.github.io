define(function(require){
	var MVC=require("lib/MVC");
	require("m/frame-body/govSiteTop.css");
	MVC.addModel("govSiteTop",{

	})
	.addView("govSiteTop",function(model,template){
		var dom=$('<div class="frame-body" id="frame-body"></div>');
		var tpl=[
			'<div class="govSiteTop" id="govSiteTop">',
			'<span>权威推荐</span>',
			'<ul>',
				'<li><a href="javascript:;">人民网</a></li>',
				'<li><a href="javascript:;">新华网</a></li>',
				'<li><a href="javascript:;">央视网</a></li>',
				'<li><a href="javascript:;">国际在线</a></li>',
				'<li><a href="javascript:;">中国日报网</a></li>',
				'<li><a href="javascript:;">中国网</a></li>',
				'<li><a href="javascript:;">中国经济网</a></li>',
				'<li><a href="javascript:;">光明网</a></li>',
				'<li><a href="javascript:;">央广网</a></li>',
				'<li><a href="javascript:;">求是网</a></li>',
				'<li><a href="javascript:;">中国青年网</a></li>',
				'<li><a href="javascript:;">中国网信网</a></li>',
			'</ul>',
		'</div>'
		].join("");
		dom.html(tpl).appendTo("body");
		return dom;
	})
	.addCtrl("govSiteTop",function(model,view){
		var dom=view.create("govSiteTop");
	})


})
