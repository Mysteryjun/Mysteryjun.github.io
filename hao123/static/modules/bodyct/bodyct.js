define(function(require){
	var MVC=require("MVC");
	require("m/bodyct/bodyct.css");
	//加载节流器
	var Throttle=require("tool/Throttle");
	
	MVC.addModel("bodyct",{
		img:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/0298257c27ae9e3b4df0f91a892efe5c.png"
	})
	.addView("bodyct",function(model,template){
		var dom=$('<div class="menus" id="menus"></div>');
		var data=model.get("bodyct");
		var tpl=[
			'<ul>',
				'<li class="first"><span class="menu-split"></span><a href="#">首页</a></li>',
				'<li><span class="menu-split"></span><a href="#tv">电视剧</a></li>',
				'<li><span class="menu-split"></span><a href="#movie">最新电影</a></li>',
				'<li><span class="menu-split"></span><a href="#news">新闻头条</a></li>',
				'<li><span class="menu-split"></span><a href="#bagua">八卦娱乐</a></li>',
				'<li><span class="menu-split"></span><a href="#military">军事热点</a></li>',
				'<li><span class="menu-split"></span><a href="#game">热门游戏</a></li>',
				'<li><span class="menu-split"></span><a href="#xyx">小游戏</a></li>',
				'<li><span class="menu-split"></span><a href="#tejia">今日特价</a></li>',
				'<li><span class="menu-split"></span><a href="#travel">特价旅游</a></li>',
				'<li><a href="#life">生活服务</a></li>',
			'</ul>',
			'<div class="youxi"><img src="{#img#}" alt=""></div>'
		].join("");
		var html=template(tpl,data);
		dom.html(html).appendTo("body");
		return dom;
	})
	.addCtrl("bodyct",function(model,view,observer){
		var dom=view.create("bodyct");
		dom.delegate("li","click",function(){
			$(this).addClass("first").siblings().removeClass("first");
		})
		.delegate("li:eq(6)","mousemove",function(){
			Throttle(showYX,{time:100})
		})
		.delegate("li:eq(6)","mouseleave",function(){
			Throttle(hideYX,{time:2500})
		})

		function showYX(){
			dom.find(".youxi").show().animate({top:-20},400)
		}
		function hideYX(){
			dom.find(".youxi").animate({top:40},200,function(){
				$(this).hide();
			})
		}


	})


})
