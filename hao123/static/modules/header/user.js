define(function(require){
	var MVC=require("MVC");
	MVC.addModel("login",{

	})
	.addView("login",function(model,template){
		var dom=$('<div class="login" id="login"></div>');
		var tpl=[
			'<div class="header">',
			'<span>登录百度帐号</span>',
			'<span class="cancel">X</span>',
		'</div>',
		'<div class="login-body">',
			'<div class="body-left">',
				'<p>手机扫描，安全登录</p>',
				'<div>',
					'<img src="https://passport.baidu.com/v2/api/qrcode?sign=06f24057775cf2c1d47eee5aafc42436&uaonly=" alt="">',
				'</div>',
				'<div>请使用<a href="javascript:;">手机百度app</a>扫描登录</div>',
			'</div>',
			'<div class="body-right">',
				'<div>',
					'<a href="javascript:;">短信快捷登录</a>',
				'</div>',
				'<form>',
				'<div class="username">',
					'<input type="text" placeholder="手机/邮箱/用户名">',
				'</div>',
				'<div class="password">',
					'<input type="password" placeholder="密码">',
				'</div>',
				'<div>',
					'<input id="autoLogin" type="checkbox">',
					'<label for="autoLogin">下次自动登录</label>',
					'<a href="javascript:;">登录遇到问题</a>					',
				'</div>',
				'<button>登录</button>',
				'<a class="regist">立即注册</a>',
				'</form>',
				'<div class="body-right-foot">',
					'<p>可以使用以下方式登录</p>',
					'<a href="javascript:;"></a>',
					'<a href="javascript:;"></a>',
				'</div>',
			'</div>',
		'</div>'
		].join("");
		dom.html(tpl).appendTo("body");
		return dom;
	})
	.addCtrl("login",function(model,view,observer){
		var dom=view.create("login");
		function init(){
			bindEvent();
		}
		//绑定事件
		function bindEvent(){
			dom.delegate(".header","mousedown",function(ev){
				var deltaX=ev.clientX-$(this).offset().left;
				var deltaY=ev.clientY-$(this).offset().top;;
				$(document).mousemove(function(ev){
					dom.css("left",ev.clientX-deltaX);
					dom.css("top",ev.clientY-deltaY);
				})
			})
			$(document).mouseup(function(){
				$(document).off('mousemove');
			})
		}
		observer.regist("openLoginLayer",function(){
			if(dom.hasClass("open")){
				return;
			}
			init();
			$("body").append("<div class='mark'></div>");
			dom.addClass("open");
		})
		dom.delegate(".cancel","click",function(){
			dom.removeClass("open");
			$("div[class='mark']").remove();
		})

	})
})
