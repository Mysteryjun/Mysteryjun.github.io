define(function (require) {
// 引入MVC模块
var MVC = require('MVC')

MVC
.addModel('skin', {
	// chooseSkinId: 'noSkin'
	// 表示当前选中的图片
	chooseSkinId: '05',
		"data": [
		{
			"id": "1",
			"src": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/a9ade02eea646d29e5d05942a56c08f6.jpg",
			"title": "飞船"
		},
		{
			"id": "2",
			"src": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-02-10/822fdf40d2a95dbf664b95e14c2cf449.jpg",
			"title": "LOVE"
		},
		{
			"id": "3",
			"src": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/cdfc99ea659f467893b43e0c02160dcf.jpg",
			"title": "树叶纸飞机"
		},
		{
			"id": "4",
			"src": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-04-10/8664eec438f362b0617f2adf7e3e3cd3.jpg",
			"title": "匹诺曹"
		},
		{
			"id": "5",
			"src": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/d25ac6dcf40e0b5ea8a4c0914e85cf62.jpg",
			"title": "可爱萌宠"
		},
		{
			"id": "6",
			"src": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/978cb567734a3aa4d29d4d3119a3fc8c.jpg",
			"title": "绿意盎然"
		},
		{
			"id": "7",
			"src": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-10-29/bf2d02b808533646f6bc9a70c5bd547f.jpg",
			"title": "爱上模特"
		},
		{
			"id": "8",
			"src": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/ab74dd0412738c1bf2d57a92faa48a6a.jpg",
			"title": "约会ladycc"
		},
		{
			"id": "9",
			"src": "https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/496c3e1f5acd2563863a6d67823cbd56.jpg",
			"title": "罗小黑战绩"
		},
		{
			"id": "10",
			"src": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/d21ad32f9bc291b478fd1a09572f1c56.jpg",
			"title": "艾米莉爱梦想"
		},
		{
			"id": "11",
			"src": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-24/0176d090f9979b055f3bbe94fa22fb2d.jpg",
			"title": "无知熊猫"
		},
		{
			"id": "12",
			"src": "https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2014-11-23/f83ebfe1f127d644e276f0339a9177d7.jpg",
			"title": "牛轰轰四叶草"
		}
	]
})
.addView('skin', function (model, template) {
	// 第一步创建视图容器
	var dom = $('<div id="skin" class="skin"></div>');
	// 第二步获取数据
	var data = model.get('skin');
	// 第三步创建模板
	var tpl = [
		'<div class="skin-header"><div class="container">',
			'<span class="tabs">最新推荐</span>',
			'<span class="no-use-btn">不使用皮肤</span>',
			'<span class="save-btn">保存</span>',
			'<span class="cancel-btn">取消</span>',
		'</div></div>',
		'<div class="skin-content">',
			'<ul class="container">{#skinList#}</ul>',
		'</div>'
	].join('');
	var skinItem = '<li data-id="{#id#}"><img src="{#src#}" alt="" /><p>{#title#}</p><i></i></li>';
	// 定义模板字符串
	var skinItemsHtml = '';
	// 格式化模板
	$.each(data.data, function (index, obj) {
		skinItemsHtml += template(skinItem, obj);
	})
	// 将视图插入到页面中
	var html = template(tpl, {
		skinList: skinItemsHtml
	});
	dom.html(html);
	dom.prependTo('body');
	// dom.html(template(tpl, {
	// 	skinList: skinItemsHtml
	// })).prependTo('body');
	return dom;
})
.addCtrl('skin', function (model, view, observer) {
	
	var dom=null;
	var bigBgPic=[
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/f38093604807c2cc31a84ca4194a0f4e.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/27fbf0ab0754745cf2b10c7e2309e9a5.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/1f21ed37e8dd574880fcf893b0051ca9.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/b430a1dfcea3e9053662d9f57509e731.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/3be7d0a25df72988ca2d78b4e45aa88f.jpg',
		'https://www.hao123.com/r/image/2015-08-28/3bc7a03c8a30e719a4bab308efbe2fec.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-10-29/5d91878107d17b97037081a312791fb5.jpg',
		'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/af26c9afaa9118e3c95e6d69bdb4d68d.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/e0557ce96599f3e9b6bcab6e6c5e0e71.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/bef59c8e58cb93ef694290d0fef9916b.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/0a36d2f0a8f90e1adaf788a786343fa2.jpg',
		'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-25/685c0cfe2db0de1a6b5aa3cf93650d2f.jpg'
	]
	var skinId = model.get('skin.chooseSkinId');
	// 页面不存在我就要创建一个页面
	function init () {
				dom = view.create('skin')
				// 为页面中的元素绑定事件
				bindEvent();
				// 将视图显示出来
				showSkin();
		
	}

	// 为模块添加交互逻辑的
	function bindEvent () {
		dom.delegate('.save-btn', 'click', function () {
			observer.fire('closeSkinLayer')
		})
		.delegate('.cancel-btn', 'click', function () {
			// 我们点击取消按钮的时候，我们不能保存该图片，所以我们在closeSkinLayer传递数据notSaveSkin值是true
			observer.fire('closeSkinLayer', {
				notSaveSkin: true
			})
		})
		.delegate('.container li', 'click', function () {
			// 获取当前元素绑定的data-id属性
			var value = $(this).attr('data-id');
			// 缓存该id
			skinId = value;
			// 设置页面背景
			setBodyBg(value);
		})
		// 点击不使用皮肤按钮
		.delegate('.no-use-btn', 'click', function () {
			skinId = 'noSkin';
			setBodyBg(skinId)
		})
	}

	// 设置页面的背景的方法
	function setBodyBg (value) {
		if (value === 'noSkin') {
			$('body').css('background', '#fff');
		} else {
			$('body').css('background', 'url('+bigBgPic[parseInt(value)-1]+') center top no-repeat')
		}
	}

	// 展示skin浮层
	function showSkin () {
		dom.slideDown();
	}
	// 关闭skin浮层
	function hideSkin () {
		dom.slideUp()
	}

	// 注册打开页面的消息
	observer.regist('openSkinLayer', function () {
		// init方法只能初始化一次，
		if(dom){
			showSkin();
		}else{
			init()
		}
			// dom不存在，说明没有被初始化，我们就要调用init方法初始化
			
		
	})
	// 订阅关闭浮层消息
	.regist('closeSkinLayer', function (data) {
		// 我们保存图片id是往哪保存？
		// 要往mode，skin.chooseSkinId保存，
		// 取消操作，不能保存图片的，只有点击保存按钮和换肤按钮才能保存

		// 该分支是点击取消按钮
		if (data && data.data && data.data.notSaveSkin) {
			// setBodyBg(model.get('skin.chooseSkinId'))

		//该分支表示点击保存或者换肤按钮
		} else {
			model.add('skin.chooseSkinId', skinId)
			// $.psot('url', {skin: skinid}, function)
			// setBodyBg(model.get('skin.chooseSkinId'))
		}

		setBodyBg(model.get('skin.chooseSkinId'))
		hideSkin();
	})

	// 渲染页面中的默认图片
	setBodyBg(model.get('skin.chooseSkinId'))
})
})
