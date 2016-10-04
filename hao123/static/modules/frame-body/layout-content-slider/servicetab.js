define(function(require){
	var MVC=require("MVC");
	MVC.addModel("servicetab",{

	})
	MVC.addView('servicetab',function(model,template){
		var dom=$('<div class="servicetab-top"></div>')
		var tpl=[
				'<div class="servicetab">',
				'<div class="content">',
					'<ul>',
						'<li><span>电视剧</span><i></i><span>综艺</span></li>',
						'<li><span>游戏</span><i></i><span>小游戏</span></li>',
						'<li><span>电影</span><i></i><span>直播</span></li>',
						'<li><span>动画</span><i></i><span>漫画</span></li>',
						'<li><span>头条</span><i></i><span>军事</span></li>',
						'<li><span>旅游</span><i></i><span>音乐</span></li>',
						'<li><span>彩票</span><i></i><span>股票</span></li>',
						'<li><span>搞笑</span><i></i><span>小说</span></li>',
						'<li><span>特价</span><i></i><span>手机</span></li>',
						'<li><span>教育</span><i></i><span>理财</span></li>',
					'</ul>',
				'</div>',
			'</div>',
			'<div class="box-startools">',
				'<span class="left"></span>',
				'<span class="right"></span>',
				'<div class="startools-container">',
					'<a href="javascript:;">天气</a>',
					'<a href="javascript:;">星座</a>',
					'<a href="javascript:;">网盘</a>',
					'<a href="javascript:;">快递</a>',
					'<a href="javascript:;">违章</a>',
					'<a href="javascript:;">万年历</a>',
					'<a href="javascript:;">地图</a>',
					'<a href="javascript:;">邮箱</a>',
					'<a href="javascript:;">火车票</a>',
					'<a href="javascript:;">更多</a>',
				'</div>',
			'</div>'
		].join("")
		dom.html(tpl);
		$("#layout-content-slider").append(dom);
		return dom;
	})
	.addCtrl("servicetab",function(model,view,observer){
		var dom=view.create("servicetab");
		var lock=false;
		dom.delegate(".right","click",function(){
			lock=!lock;
			var state=lock?0:1;
			if(state){
				$(this).removeClass("open")
				observer.fire("slideUp")
			}else{
				$(this).addClass("open")
				observer.fire("slideDown")
			}
		})
	})	
})
