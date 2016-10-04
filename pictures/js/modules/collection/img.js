// 该模块是图片的集合容器
define(function (require) {
	// 获取图片模型的类
	var ImgModel = require('modules/model/img');

	// 创建了一个集合类
	var ImgCollection = Backbone.Collection.extend({
		model: ImgModel,
		imageId: 0,
		// 用来拉去服务器端的数据，添加到集合中
		fetchData: function (success) {
			var that = this;
			// 发送异步请求获取数据并添加到集合中
			$.get('data/imageList.json', function (res) {
				if (res.errno === 0) {
					// console.log(res.data);
					res.data.sort(function () {
						return Math.random() > .5 ? 1 : -1;
					})
					// 返回的res.data是一个数组
					res.data.map(function (item) {
						item.id = that.imageId++;
					})
					// 将返回的数据添加到集合中
					that.add(res.data)
					// 将数据添加到集合中后调用回调函数
					success && success();
				}
			})
		}
	})


	// 测试
	// var list = new ImgCollection();
	// list.fetchData(function () {
	// 	console.log(list)
	// });
	
	// list.add({
	// 	"title": "精彩建筑摄影作品",
	// 	"url": "img/01.jpg",
	// 	"width": 640,
	// 	"height": 400
	// })

	return ImgCollection
})