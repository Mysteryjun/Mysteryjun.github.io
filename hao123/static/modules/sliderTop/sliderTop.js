//返回顶部模块
define(function(require){
	var MVC=require("MVC");
	var scrollAnimate=require("tool/scrollAnimate");
	require("m/sliderTop/sliderTop.css");
	MVC.addModel("sliderTop",{
		src:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-21/fa67eb59cab7f6207ef5e2ed82849b3e.png"
	})
	.addView("sliderTop",function(model,template){
		var dom=$('<div class="sliderTop" id="sliderTop"></div>');
		var data=model.get("sliderTop");
		var tpl=[
			'<div>',
			'<img src="{#src#}" alt="">',
		'</div>',
		'<div class="rightBar">',
			'<a>看片</a>',
			'<a>游戏</a>',
			'<a>购物</a>',
			'<a>笑话</a>',
			'<a>头条新闻</a>',
			'<a class="goToTop">分类网址</a>',
		'</div>'
		].join("");
		var html=template(tpl,{
			src:data.src
		})
		dom.html(html).appendTo("body");
		return dom;
	})
	//返回顶部
	.addCtrl("sliderTop",function(model,view,observer){
		var dom=view.create("sliderTop");
		$(window).scroll(function(){
			if($(window).scrollTop()>1400){
				dom.find(".goToTop").on("click",function(){
					scrollAnimate(0,700);
				})
				dom.find(".goToTop").html("返回顶部");
			}
			else{
				dom.find(".goToTop").off()
				dom.find(".goToTop").html("分类网址");
			}
		})

	})
})
