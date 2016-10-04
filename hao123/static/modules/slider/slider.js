define(function (require) {
var MVC = require('MVC');
	require('m/slider/slider.css')
MVC
.addModel('slider', {
	data: [
		{
			"icon": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-09-16/5158508c9d04f5a0f4fe2d8de9da1dc0.png",
			"iconTitle": "萌主页",
			"title": "当女孩遇到熊",
			"content": "深山里有萝莉出没",
			"img": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/moe/0723zc5.png"
		},
		{
			"icon": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-10-07/1f955fdb77200a7e9dafe2e4ce908dc7.jpg",
			"iconTitle": "动漫",
			"title": "会说话的汤姆猫",
			"content": "汤姆猫给你讲故事",
			"img": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/img/moe/0723zc2.png"
		},
		{
			"icon": "https://www.hao123.com/r/image/2016-07-22/abcdfced1d1c8721615890716cc91874.png",
			"iconTitle": "LOL直播",
			"title": "中单蚂蚱输出爆炸",
			"content": "JY解说",
			"img": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/95508069f8fd9d213cb3e9139468b5cc.jpg"
		},
		{
			"icon": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-10-23/1a37805cacf29a3d260452f2a613ea6a.png",
			"iconTitle": "景点门票",
			"title": "厦门方特梦幻王国",
			"content": "跟着跑男一起狂欢",
			"img": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/4980c19b003b4fe58c57dfcb9ded2fc4.jpg"
		},
		{
			"icon": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-09-16/5ca5d8a0de5f2c33472f15b6eabc8e1f.png",
			"iconTitle": "hao到家",
			"title": "美食送到家",
			"content": "吃货福音私人订制",
			"img": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/6e39118f82eb844155db3562356580df.png"
		}
	]
})
.addView('slider', function (model, template) {
	// 定义步定义容器
	var dom = $('<div id="slider" class="slider"></div>');
	// 获取数据
	// var data = MVC.Model.get('slider')
	var d = model.get('slider')
	// 定义模板
	var tpl = [
		'<div class="container"><ul>{#list#}</ul></div>',
		'<div class="arrow"></div>'
	].join('')	// 这是个数组，我们需要的是字符串，所以调用jion方法
	var liTpl = [
		'<li>',
			'<img src="{#icon#}" alt="" />',
			'<p>{#iconTitle#}</p>',
			'<div>',
				'<img src="{#img#}" alt="" />',
				'<h4>{#title#}</h4>',
				'<p>{#content#}</p>',
			'</div>',
		'</li>'
	].join('');
	// 定义模板字符串
	var html = liHtml = '';
	// 格式化模板
	for (var i = 0; i < d.data.length; i++) {
		liHtml += template(liTpl, d.data[i])
	}
	html = template(tpl, {
		list: liHtml
	});
	// 插入页面中
	dom.html(html)
	dom.appendTo('body');
	return dom;
})
.addCtrl('slider', function (model, view) {
	var dom = view.create('slider');
	// 添加箭头按钮的交互
	dom.delegate('.arrow', 'click', function () {
		// 当按钮有close，说明现在是关闭状态，此时点击，就要显示容器，并将按钮的close类取消掉
		if ($(this).hasClass('close')) {
			// 取消close类
			$(this).removeClass('close');
			// 将容器显示出来
			dom.find('.container').animate({marginLeft: 0}, 200)
		// 否则按钮没有close类， 说明现在是打开状态，此时点击，就要关闭容器，并添加按钮的close类
		} else {
			$(this).addClass('close');
			dom.find('.container').animate({marginLeft: -50}, 200)
		}
	})
})
})
