// 创建大图页视图类模块
define(function (require) {
	require('modules/layer/layer.css')
	var height = $(window).height();
	// 创建大图页视图类
	var Layer = Backbone.View.extend({
		tpl: _.template($('#layer_tpl').html()),
		lastModelId: [],
		modelId: 0,
		events: {
			'swipeLeft .img-container img': 'showNextImage',
			'swipeRight .img-container img': 'showPreImage',
			'tap .img-container img': 'toggleNav',
			'tap .back': 'goBack'
		},
		goBack: function () {
			// 最后一个id是当前图片的id，所以应该将它清除
			this.lastModelId.pop();
			// 获取上一张图片的id
			var id = this.lastModelId[this.lastModelId.length - 1];
			// this.id = this.lastModelId[this.lastModelId.length - 2]

			// 如果id存在，我们就将该图片渲染出来
			if (id) {
				var model = this.collection.get(id)
				this.changeImage(model)
			// 否则说明是第一张图片。我们要将它返回
			} else {
				location.hash = '#'
			}
			// console.log(id)
		},
		toggleNav: function () {
			this.$('.navbar').toggleClass('hide')
		},
		// 显示后一张图片
		showNextImage: function () {
			// 获取数据model
			var model = this.collection.get(++this.modelId)
			// 如果在集合中可以获取到model，执行渲染逻辑
			if (model) {
				// 将当前图片id缓存下来
				this.lastModelId.push(this.modelId)
				this.changeImage(model)

			// 如果没有获取到model，说明已经最一张了
			} else {
				alert('已经是最后一张了')
				this.modelId--;
			}
		},
		// 显示前一张图片
		showPreImage: function () {
			var model = this.collection.get(--this.modelId)
			if (model) {
				// 将当前图片id缓存下来
				this.lastModelId.push(this.modelId)
				this.changeImage(model)
			} else {
				alert('已经是第一张了');
				this.modelId++;
			}
		},
		/**
		 * 根据model改变当前视图中的图片
		 * @model 		模型数据
		 */
		changeImage: function (model) {
			// 只需要改变两件事情， 1是图片url，2图片的title
			this.$('.img-container img').attr('src', model.get('url'))
			this.$('.title').html(model.get('title'))
		},
		/**
		 * 根据id获取集合中的模型
		 * @id 	 模型的id
		 * return Model 	该id对应模型
		 */
		getModelById: function (id) {
			this.modelId = id;
			var model = this.collection.get(id);
			return model;
		},
		/**
		 * 渲染大图页
		 * @id 		表示该图片模型上的id
		 */
		render: function (id) {
			var that = this;
			// this.collection.fetchData(function () {
			// 	console.log(that.collection)
			// 	// 根据id获取集合中的模型
			// 	var model = that.getModelById(id)
			// 	// 如果model是空的化，说明list没有初始化，或者是collection没有该id对应的model
			// 	// 此时我们要将他渲染到list页面
			// 	if (!model) {
			// 		// 将该页面跳转到list
			// 		// location.hash = '#'
			// 		// return;
			// 	}
			// 	// 获取json数据
			// 	var data = model.pick('url', 'title')
			// 	data.styles = 'line-height: ' + height + 'px';
			// 	// 渲染模板
			// 	var tpl = that.tpl(data);
			// 	// 插入页面中
			// 	that.$el.html(tpl)
			// 	// 将大图也显示出来
			// 	that.$el.show();
			// })
			// 根据id获取集合中的模型
			var model = this.getModelById(id)
			// 如果model是空的化，说明list没有初始化，或者是collection没有该id对应的model
			// 此时我们要将他渲染到list页面
			if (!model) {
				// 将该页面跳转到list
				location.hash = '#'
				return;
			}
			// 将当前图片id缓存下来
			this.lastModelId.push(this.modelId)
			// 获取json数据
			var data = model.pick('url', 'title')
			data.styles = 'line-height: ' + height + 'px';
			// 渲染模板
			var tpl = this.tpl(data);
			// 插入页面中
			this.$el.html(tpl)
			// 将大图也显示出来
			this.$el.show();
			// console.log(this.collection)
			// this.$el.html('显示大图页')
		}
	})
	return Layer;
})