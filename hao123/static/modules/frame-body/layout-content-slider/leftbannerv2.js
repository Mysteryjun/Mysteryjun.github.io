//slider 周杰伦的图片轮播
define(function(require){
	var MVC=require("MVC");
	var PicFade=require("tool/picFade");
	MVC.addModel("leftbannerv2",{
		data:[
			{
				src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/fbe72cc7652a5911ab0bcc160902dcd3.jpg",
			},
			{
				src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/22b861842412039ed716ecb9854b6dfd.jpg",
			},
			{
				src:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/img/0724zuo.jpg",
			}
		]
	})
	.addView("leftbannerv2",function(model,template){

		var dom=$('<div class="layout-content-slider" id="layout-content-slider">');
		var data=model.get("leftbannerv2");
		var tpl=[
				'<div class="leftbannerv2" id="leftbannerv2">',
				'<span class="left">&lt;</span>',
				'<span class="right">&gt;</span>',
				'<ul>{#litpl#}',
					// '<li>',
					// '<img src="h1/43ffb7f4bf24766ae03b2cdf92747582.jpg" alt="">',
					// '</li>',
					// '<li>',
					// 	'<img src="h1/07232144.jpg" alt="">',
					// '</li>',
					// '<li>',
					// 	'<img src="h1/e6eb92457630ed9a64b39e9f8a551082.jpg" alt="">',
					// '</li>',
				'</ul>'
		].join("")
		var html=lihtml="";
		var liTpl="<li><img src={#src#}></li>";
		$.each(data.data,function(index,value){
			lihtml+=template(liTpl,value);
		})

		html=template(tpl,{
			litpl:lihtml
		})
		dom.html(html).appendTo(".frame-body");
	
	})
	.addCtrl("leftbannerv2",function(model,view,observer){
		var dom=view.create("leftbannerv2");
		PicFade("leftbannerv2",1000,2500);

	})

})
