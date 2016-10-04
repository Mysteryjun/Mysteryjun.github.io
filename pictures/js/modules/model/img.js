// 图片模型模块
define(function () {
	// 计算容器宽度
	// 屏幕宽度是由两张图片和三个边距构成，每个边距是6像素
	// 得到一张图片的宽度
	var listWidth = parseInt(($(window).width() - 6 * 3) / 2); 
	var ImgModel = Backbone.Model.extend({
		initialize: function () {
			this.on('add', function (model) {
				// 根据容器宽度算出每个模型的实际宽度
				// 计算高度的公式 h = H * w / W
				// H model.get('height')
				// W model.get('width')
				// w listWidth
				var h = model.get('height') * listWidth / model.get('width');
				// 对模型添加计算后的宽度和高度
				model.set({
					showWidth: listWidth,
					showHeight: h
				})
				// console.log(model)
			})
		}
	})

	return ImgModel;
})