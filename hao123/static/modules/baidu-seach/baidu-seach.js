//搜素模块
define(function(require){
	var MVC=require("MVC");
	require("m/baidu-seach/baidu.css");
	MVC.addModel("baiduSeach",{
		newspush:[
		{
			className:"importNew xin",
			text:"1",
			content:"浙江发布高温预警"
		},
		{
			className:"importNew xin",
			text:"2",
			content:"烈士李磊骨灰安葬"
		},
		
		{
			className:"importNew xin",
			text:"3",
			content:"开心网创始人离职"
		},
		
		{
			className:"xin",
			text:"4",
			content:"抓癞蛤蟆煮汤中毒"
		},
		
		{
			className:"xin",
			text:"5",
			content:"保姆突然情绪失控"
		},
		
		{
			text:"6",
			content:"张一山杨紫互撩"
		},
		
		{
			text:"7",
			content:"不玩游戏被扣薪水"
		},
		
		{
			text:"8",
			content:"失踪三姐弟被杀害"
		},
		{
			text:"9",
			content:"孕妇地铁喝水被罚"
		},
		{
			text:"10",
			content:"九把刀亲吻陈晓"
		}
		],
		newItem:[
			{content:"金钟国签中国公司"},
			{content:"赵丽颖豪宅曝光"},
			{content:"林心如挺肚扛菜篮"},
			{content:"英国爆发2亿老鼠"},
			{content:"男子辞职抓妖怪"},
			{content:"贺寿蛋糕被插菊花"},
			{content:"暴雨最牛公交掉头"},
			{content:"美女医生旗袍上班"},
			{content:"女孩在尼姑庵与世隔绝23年"},
			{content:"倪萍被曝移民美国"}
		]
	})
	.addView("baiduSeach",function(model,template){
		var dom=$('<div class="json-search-panel-box"></div>');
		var data=model.get("baiduSeach");
		var tpl=[
			'<div class="json-search-panel">',
				'<a class="s-wea" href="javascript:;"></a>',
				'<div class="seach">',
				'<ul class="news-push">{#newsPush#}',
				/*'<li class="importNew xin"><i>1</i><span>浙江发布高温预警</span></li>',
				'<li class="importNew xin"><i>2</i><span>烈士李磊骨灰安葬</span></li>',
				'<li class="importNew xin"><i>3</i><span>开心网创始人离职</span></li>',
				'<li class="xin"><i>4</i><span>抓癞蛤蟆煮汤中毒</span></li>',
				'<li class="xin"><i>5</i><span>保姆突然情绪失控</span></li>',
				'<li><i>6</i><span>张一山杨紫互撩</span></li>',
				'<li><i>7</i><span>不玩游戏被扣薪水</span></li>',
				'<li><i>8</i><span>失踪三姐弟被杀害</span></li>',
				'<li><i>9</i><span>孕妇地铁喝水被罚</span></li>',
				'<li><i>10</i><span>九把刀亲吻陈晓</span></li>',*/
			'</ul>',
				'<span class="wangye">网页</span>',
				'<i class="xia"></i>',
				'<ul class="wangye-list" style="display:none">',
					'<li><a href="javascript:;">网页</a></li>',
					'<li><a href="javascript:;">音乐</a></li>',
					'<li><a href="javascript:;">视屏</a></li>',
					'<li><a href="javascript:;">图片</a></li>',
					'<li><a href="javascript:;">贴吧</a></li>',
					'<li><a href="javascript:;">知道</a></li>',
					'<li><a href="javascript:;">新闻</a></li>',
					'<li><a href="javascript:;">地图</a></li>',
					'<li><a href="javascript:;">更多&gt;&gt;</a></li>',
				'</ul>',
				'<input type="text">',
				'<b class="itemNum">5</b>',
				'<button>百度一下</button>',
			'</div>',
			'<div class="grid">',
				'<i></i>',
				'<b class="quanquan"></b>',
				'<ul class="grid-unit">{#itemNews#}',
					/*'<li><a href="javascript:;">金钟国签中国公司</a></li>',
					'<li><a href="javascript:;">赵丽颖豪宅曝光</a></li>',
					'<li><a href="javascript:;">林心如挺肚扛菜篮</a></li>',
					'<li><a href="javascript:;">英国爆发2亿老鼠</a></li>',
					'<li><a href="javascript:;">男子辞职抓妖怪</a></li>',
					'<li><a href="javascript:;">贺寿蛋糕被插菊花</a></li>',
					'<li><a href="javascript:;">暴雨最牛公交掉头</a></li>',
					'<li><a href="javascript:;">美女医生旗袍上班</a></li>',
					'<li><a href="javascript:;">女孩在尼姑庵与世隔绝23年</a></li>',
					'<li><a href="javascript:;">倪萍被曝移民美国</a></li>',
					'<li><a href="javascript:;">金钟国签中国公司</a></li>',*/
				'</ul>',
			'</div>',
			'<div id="fastBrow">',
					'<i></i>',
					'<span>上网最快的浏览器</span>',
				'</div>',
		'</div>	'
		].join("");
		var liHtml1=liHtml2="";
		var liTpl1='<li class="{#className#}"><i>{#text#}</i><span>{#content#}</span></li>';
		var liTpl2='<li><a href="javascript:;">{#content#}</a></li>';
		//加载模板
		$.each(data.newspush,function(index,value){
			liHtml1+=template(liTpl1,value);
		})
		$.each(data.newItem,function(index,value){
			liHtml2+=template(liTpl2,value)
		})
		var html=template(tpl,{
			newsPush:liHtml1,
			itemNews:liHtml2
		})
		//插入body中。。。。
		dom.html(html).appendTo("body");
		return dom;
	})
	.addCtrl("baiduSeach",function(model,view,observer){
		// 显示影藏
		var dom=view.create("baiduSeach");
		dom.delegate(".wangye","click",function(){
			dom.find(".seach i").addClass("shang");
			dom.find(".wangye-list").toggle();
		})
		//网页的下拉菜单事件
		.delegate(".wangye-list li","click",function(ev){
			if($(this).index()==8){
				return;
			}
			dom.find(".seach i").removeClass("shang");
			var value=$(this).children("a").html();
			dom.find(".wangye").html(value);
			dom.find(".wangye-list").toggle();
			dom.find("input")[0].focus();
		})
		//5的点击事件
		.delegate(".itemNum","click",function(){
			if($(this).hasClass("open")){
				$(this).removeClass("open")
				dom.find(".news-push").toggle();
				$(this).html("5")
			}
			else{
				$(this).html("^");
				$(this).addClass("open");
				dom.find(".news-push").toggle();
			}
			$(this).css({"backgroundPosition":"0 -19px"});
			$(this).hover(function(){
				$(this).css("color","#f50")
			},function(){
				$(this).css("color","#333")
			}
			)
		})
		//小圆圈事件
		.delegate(".news-push li","click",function(){
			var value=$(this).children("span").html();
			dom.find("input").val(value);
			dom.find(".itemNum").html("5")
			dom.find(".news-push").toggle();
		})
		
		//自动轮播滚动事件
		function bindEvent(){
			var width=200;
			var interTimer=2000;
			var timer;
			var li=dom.find(".grid-unit li").first().clone(true);
			dom.find(".grid-unit").append(li);
			var unit=dom.find(".grid-unit");
			var idx=0;
			dom.delegate(".grid","mouseover",function(){
			dom.find(".quanquan").show();
			clearInterval(timer);
			})
			.delegate(".grid","mouseleave",function(){
			dom.find(".quanquan").hide();
			timer=setInterval(handler,interTimer)
			})
			timer=setInterval(handler,interTimer)
			function handler(){
				idx++;
				unit.animate({left:-width*idx},500,function(){
					if(idx>9){
						idx=0;
						unit.css("left",0);
					}
				})
			}	
		}
		
		bindEvent();

		//document 点击事件 ul 收回
		$(document).on("click",function(ev){
			if(!$.contains($(".news-push")[0],ev.target)&&ev.target!==dom.find(".itemNum")[0]){
				
				dom.find(".news-push").hide();
				dom.find(".itemNum").html("5")
			}
			
			if((!$.contains($(".wangye-list")[0],ev.target))&& (ev.target!==dom.find(".wangye")[0])){
				dom.find(".wangye-list").hide();
				dom.find(".seach i").removeClass("shang");
			}
			
		})
		var lock=true;
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
				dom.css({"position":"fixed",
						"backgroundColor":"#f3f3f3",
						"opacity":"0.97",
						"alpha":'filter(opacity=97)',
						"top":0,
						"left":0,
						"zIndex":99999
					})
				dom.find(".grid").hide();
				$("#fastBrow").show();
			}else{
				dom.css({"position":"relative",
					"backgroundColor":"",
					"opacity":"1",
					"alpha":'filter(opacity=100)',
					"top":0,
					"left":0

			})
				$("#fastBrow").hide();
				dom.find(".grid").show();
			}
		})


	})
})
