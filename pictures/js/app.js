// 入口文件实现路由模块
define(function (require) {

	// 将图片集合模块引入进来
	var ImgCollection = require('modules/collection/img');
	/// 引入列表页视图类
	var List = require('modules/list/list');
	// 引入大图页视图类
	var Layer = require('modules/layer/layer')

	// 创建图片的集合
	var imgCollection = new ImgCollection();
	// 这里的请求是异步的，所以后面执行时候，这里请求还没有完毕
	// imgCollection.fetchData();

	// 创建大图页视图
	var layerView = new Layer({
		collection: imgCollection,
		el: $('#layer')
	})

	// 创建列表页视图
	var listView = new List({
		collection: imgCollection,
		el: $('#list')
	})

	var Router = Backbone.Router.extend({
		routes: {
			// 大图页的路由规则 #layer/47
			'layer/:num': 'showLayer',
			// 其他路由匹配到列表页
			'*other': 'showList'
		},
		// 当匹配到大图页路由时候，我们调用该方法显示大图页
		showLayer: function (id) {
			// 实例化大图页的视图类
			
			layerView.render(id);

			// 当打开大图页时候，将列表页隐藏，将大图页展示
			$('#list').hide();
			$('#layer').show();
			// console.log(id)
			// console.log('show layer')
		},
		showList: function () {
			// 实例化视图类

			// 当打开列表页时候，将大图页隐藏，将列表页显示
			$('#layer').hide();
			$('#list').show();

			// 将视图渲染到页面中
			// view.render();
			// console.log('show list')
		}
	})
	// 将路由初始化暴漏在接口install方法里，方便该模块加载后调用
	return function () {
		// 实例化路由
		var router = new Router();
		// 启动路由
		Backbone.history.start();
	}
	// return {
	// 	install: function () {
	// 		var router = new Router();
	// 		Backbone.history.start();
	// 	}
	// }
	
})