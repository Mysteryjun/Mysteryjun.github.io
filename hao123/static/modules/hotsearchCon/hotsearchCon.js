//hot模块
define(function(require){
	require("m/hotsearchCon/hotsearchCon.css");
	var MVC=require("MVC");
	MVC.addModel("hotSeach",{
		data:[
			{content:""},
			{content:"北京天气"},
			{content:"鹿晗恢复自由"},
			{content:"身交警喊话baby"},
			{content:"中国新歌声"},
			{content:"九把刀吻陈晓"},
			{content:"张一山撩杨紫"},
			{content:"岳云鹏变美女"}
		]
	})
	.addView("hotSeach",function(model,template){
		var dom=$('<div class="hotSearch" id="hotSeach"></div>');
		var data=model.get("hotSeach");
		var tpl=[
			'<div class="container">',
				'<ul>{#hotSearch#}',
					/*'<li><a href="javascript:;"></a></li>',
					'<li><a href="javascript:;">释放阿斯蒂芬</a></li>',
					'<li><a href="javascript:;">释放阿斯蒂芬</a></li>',
					'<li><a href="javascript:;">释放阿斯蒂芬</a></li>',
					'<li><a href="javascript:;">释放阿斯蒂芬</a></li>',
					'<li><a href="javascript:;">释放阿斯蒂芬</a></li>',
					'<li><a href="javascript:;">释放阿斯蒂芬</a></li>',
					'<li><a href="javascript:;">释放阿斯蒂芬</a></li>',*/
				'</ul>',
			'</div>'
		].join("");
		var liTpl='<li><a href="javascript:;">{#content#}</a></li>';
		var lihtml=html="";
		$.each(data.data,function(index,value){
			lihtml+=template(liTpl,value);
		})
		html=template(tpl,{
			hotSearch:lihtml
		})
		dom.html(html).appendTo("body");
		return dom;
	})
	.addCtrl("hotSeach",function(model,view,observer){
		var dom=view.create("hotSeach");
	})

})
