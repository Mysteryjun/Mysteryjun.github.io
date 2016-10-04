define(function (require) {
// 这个模块依赖MVC以及样式
var MVC = require('MVC');
	require('m/header/header.css');
	require('m/header/skin');
	require('m/header/email');
	require("m/header/user")

MVC
.addModel('header', {
	weather: {
		city: '北京',
		text: '雨',
		icon: 'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/weather/v1/a3.png',
		temperature: '29 ~ 15℃'
	},
	date: {
		month: (new Date().getMonth()+1)+'月'+new Date().getDate()+'日',
		day: (function(){
			var week=new Date().getDay();
			var arr=["天","一","二","三","四","五","六"];
			return "星期"+arr[week];
		})()
	},
	adList: [
		{
			id: '1',
			url: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/3014791910749041be89669021585088.jpg'
		},
		{
			id: '2',
			url: 'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/f1a861eb4cc55cbf63b7178b66fe27fb.jpg'
		},
		{
			id: '3',
			url: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/2a762faca36ca00a5c7211737c082368.jpg'
		}
	]
})
.addView('header', function (model, template) {
	// 第一步创建容器
	var dom = $('<div class="header" id="header"></div>');
	// 第二步，获取数据
	var data = model.get('header');
	// 第三步 创建视图模板
	var tpl = [
		'<div class="container">',
			'<div class="header-left">',
				'<img src="https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/richanglogo168_24.png" alt="" />',
				'<span class="weather">',
					'<strong class="city">{#weather.city#}</strong>',
					'<strong><img src="{#weather.icon#}" alt="" /> {#weather.text#} {#weather.temperature#}</strong>',
				'</span>',
				'<span class="date"><b>{#date.month#} {#date.day#}</b></span>',
				'<span class="star"><b>星座运势</b></span>',
			'</div>',
			'<div class="header-right">',
				'<ul class="ad">{#list#}</ul>',
				'<span class="user"><b>登录</b></span>',
				'<span class="email"><b>邮箱</b></span>',
				'<span class="browser"><b>浏览器</b></span>',
				'<span class="skin"><b>换肤</b></span>',
			'</div>',
		'</div>'
	].join('');
	listTpl = '<li><img src="{#url#}" alt="" /></li>';
	// 第四步定义模板字符串
	var html  = listHtml = '';
	// 第五步格式化模板
	for (var i = 0; i < data.adList.length; i++) {
		listHtml += template(listTpl, data.adList[i]);
	}
	// 当前模板中与data数据对应的属性list没有值，所以我们给他添加一个
	data.list = listHtml;
	html = template(tpl, data);
	// 第六步
	dom.html(html);
	dom.appendTo('#app')
	// 第七步，返回dom
	return dom;
})
.addCtrl('header', function (model, view, observer) {
	var dom = view.create('header');
	// 添加业务逻辑
	dom.delegate('.user', 'click', function () {
		observer.fire('openLoginLayer')
	}).delegate('.email', 'click', function (e) {
		if (e.target.tagName.toLowerCase() === 'b') {
			// 点击需求是，如果浮层打开了，就关闭浮层，如果浮层关闭的就打开
			// 判断浮层打开还是关闭我们只需要判断‘open’即可

			// 如果有这个类。，就说明了，浮层是打开的，需要关闭
			if ($(this).hasClass('open')) {
				observer.fire('closeEmailLayer');
				
			// 否则。，页面是关闭的，那么我们就发送打开浮层的消息
			} else {
				// 第一步，发送打开弹层消息
				observer.fire('openEmailLayer')
				// 第二步为该元素添加类
				$(this).addClass('open')
			}
			
		}
		
	}).delegate('.skin', 'click', function () {
		// 如果skin按钮有open类的时候，说明是打开状态，此时我们要删除open。并且发送closeSkinLayer消息
		if ($(this).hasClass('open')) {
			// $(this).removeClass('open');
			observer.fire('closeSkinLayer')

		// 如果skin按钮没有open类，说明是关闭状态，此时我们要添加open类，并且发送openSkinlayer消息
		} else {
			$(this).addClass('open');
			observer.fire('openSkinLayer')
		}
	})

	// observer.regist('openEmailLayer', function () {
	// 	dom.find('.email').addClass('open')
	// })
	observer.regist('closeEmailLayer', function () {
		dom.find('.email').removeClass('open')
	})
	// 注册关闭换肤浮层消息，关闭时要删除skin按钮上的open类
	.regist('closeSkinLayer', function () {
		dom.find('.skin').removeClass('open');
	})
})
})
