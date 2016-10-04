define(function (require) {
// 引入MVC模块
var MVC = require('MVC')

MVC.addModel('email', {
	"data": {
		"normalEmail": [
			"@163.com",
			"@126.com",
			"@sohu.com",
			"@sina.com"
		],
		"specialEmail": [
			"百度登录",
			"支付宝",
			"QQ邮箱",
			"新浪微博"
		]
	}
})
.addView('email', function (model, template) {
	// 定义容器
	var dom = $('<div class="email-layer" id="email"></div>');
	// 获取数据
	var data = model.get('email').data;
	// 定义模板
	var tpl = [
		'<div class="containerEmail">',
			'<div>',
				'<input type="text" placeholder="邮箱账号"/>',
				'<span class="choose-email">{#chooseEmail#}</span>',
				'<ul>{#list#}</ul>',
			'</div>',
			'<div>',
				'<input type="password" placeholder="账号密码"/>',
				'<span class="loginEmail">登录</span>',
				'<span class="cancel">取消</span>',
			'</div>',
			'<div>',
				'<input type="checkbox" id="email-checkbox"/>',
				'<label for="email-checkbox">我阅读并同意使用协议</label>',
			'</div>',
		'</div>'
	].join('');
	var listTpl = '<li class="{#cls#}">{#key#}</li>'
	// 定义模板字符串
	var html = listHtml = '';
	// 格式化模板
	$.each(data.normalEmail, function (index, value) {
		listHtml += template(listTpl, {
			key: value,
			cls: 'choose'
		})
	})
	// for (var i = 0; i < data.normalEmail.length; i++) {
	// 	// normalEmail[i]是一个字符串，template方法第二个参数与不能格式字符串，必须是对象，所以我们要构造一个对象
	// 	listHtml += template(listTpl, {
	// 		key: data.normalEmail[i],
	// 		cls: 'choose'
	// 	})
	// }
	listHtml += '<li class="not-email">以下为弹出登录</li>';
	$.each(data.specialEmail, function (index, value) {
		listHtml += template(listTpl, {
			key: value
		})
	})
	// for (var i = 0; i < data.specialEmail.length; i++) {
	// 	listHtml += template(listTpl, {
	// 		key: data.specialEmail[i],
	// 		// cls: 'not-choose'
	// 	})
	// }
	html = template(tpl, {
		list: listHtml,
		chooseEmail: data.normalEmail[0]
	})
	// 输出到页面中
	dom.html(html).appendTo('#header .email');
	return dom;
}).addCtrl('email', function (model, view, observer) {
	var dom=null;
	// 当我们页面打开的时候，没有该模块，是当点击邮箱按钮的时候，才打开的，
	// $.get('data/email.json', function (res) {
	// 	if (res.errno === 0) {
	// 		model.add('email', res.data);
	// 		view.create('email')
	// 	}
	// })
	//现在创建视图之前要获取异步的数据
	
	// 初始化我们的浮层
	function init () {
				dom = view.create('email');
				// 绑定事件
				bindEvent();
				// 展示浮层
				showLayer();	
	};
	// 我们的浮层要有交互，所以我们要绑定事件
	function bindEvent () {
		dom.delegate('.cancel', 'click', function () {
			// 当点击取消按钮，要关闭浮层能，所以要发布关闭浮层的消息
			observer.fire('closeEmailLayer')
		})
		// 为邮箱后缀名绑定事件
		.delegate('.choose-email', 'click', function () {
			// 当点击按钮的时候，我们要判断ul列表的状态
			// 当它是打开状态时候，它就有open，此时我们要关闭这个列表，所以，我们就要删除这个open
			if (dom.find('ul').hasClass('open')) {
				dom.find('ul').removeClass('open')

			// 当前是关闭状态，此时没有open类，此时我们要打开列表，就要添加open类
			} else {
				dom.find('ul').addClass('open')
			}
			// 后面的逻辑就不要执行了
			// 为ul列表添加open类
			// dom.find('ul').addClass('open')
			// console.log('success')
		})
		// 为ul中的li绑定点击事件，点击这个li获取他的内容，并且填充到choose-email的span中
		.delegate('ul li', 'click', function () {
			// if ($(this).hasClass('not-choose') || $(this).hasClass('not-email')) {
			// 	dom.find('ul').removeClass('open');
			// 	return ;
			// }
			// 如果元素有choose类，那么该元素是可以设置内容的
			if ($(this).hasClass('choose')) {
				// 获取该元素的内容
				var value = $(this).html();
				// 为choose-eamil添加改价该内容
				dom.find('.choose-email').html(value)
			}
			// 关闭列表
			dom.find('ul').removeClass('open')
		})
		$(document).on('click', function (e) {
			// 点击的元素一定不要再<span class="email"></span>元素里面，并且也不能是这个元素
			if ($.contains($('#header .email')[0], e.target) || e.target === $('#header .email')[0]) {
				return ;
			}
			observer.fire('closeEmailLayer')
		})
	}
	// 为模块添加open，是页面展示出来
	function showLayer () {
		dom.addClass('open')
	}
	function hideLayer () {
		dom.removeClass('open')
	}

	// 打开浮层
	observer.regist('openEmailLayer', function () {
		// 判断页面有没有初始化，我们通过判断dom存不存在就可以了
		if(dom){
			showLayer();
		}else{
			init();
		}
			// 页面没有初始化之前要调用init，如果初始化了，就不需要调用它了，直接调用用showlayer
			
	}).regist('closeEmailLayer', function () {
		hideLayer();
	})
})
})
