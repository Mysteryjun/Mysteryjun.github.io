// 创建列表视图
define(function (require) {
	require('modules/list/list.css');
	require('modules/list/reset.css');
	var Throttle = require('tools/throttle');
	// 创建列表视图类
	var List = Backbone.View.extend({
		// 图片的视图模板
		// {id: 1, style: 'width: 200px; height: 100px;', url: 'img/01.jpg'}
		tpl: _.template('<a href="#layer/<%=id%>"><img style="<%=style%>" src="<%=url%>" alt="" /></a>'),
		leftHeight: 0,
		rightHeight: 0,
		// 添加搜索交互
		events: {
			'click .search-btn': 'showSearchView',
			'tap .navlist li': 'chooseImageType',
			// 代理返回顶部按钮点击事件
			'tap .go-top': 'goTop',
			'tap .back': 'showAllImg'
		},
		initialize: function () {
			var that = this;
			// 渲染初始页面
			// 第一步获取页面图片的数据
			this.getData();
			// 获取图片容器元素
			this.initDom();
			// 监听集合添加数据
			// this.collection.on('add', function () {})
			this.listenTo(this.collection, 'add', function (model) {
				// 渲染页面
				this.render(model);
			})

			// 绑定window scroll 事件
			$(window).on('scroll', function () {
				Throttle(that.loadMoreData, {
					context: that
				})
				// console.log(111)
			})
		},
		// 加载更多图片
		loadMoreData: function () {
			var h = $('body').height() - $(window).height() - $(window).scrollTop() - 200 <= 0;
			if (h) {
				this.getData();
			}
			// 处理返回顶部按钮
			this.dealGoTop();
		},
		// 处理返回顶部按钮
		dealGoTop: function () {
			// 获取$(window).scrollTop()属性值
			if ($(window).scrollTop() > 200) {
				// $(window).scrollTop()属性值大于200将返回顶部按钮显示出来
				this.$('.go-top').show()
			} else {
				this.$('.go-top').hide()
			}
			
		},
		// 获取集合数据
		getData: function () {
			this.collection.fetchData();
		},
		// 获取图片容器元素
		initDom: function () {
			// 获取左边图片列表容器
			this.leftContainer = this.$('.left-list')
			// 获取右边图片列表容器
			this.rightContainer = this.$('.right-list')
		},
		render: function (model) {
			// 获取json数据
			var data = {
				id: model.get('id'),
				style: 'width: ' + model.get('showWidth') + 'px; height: ' + model.get('showHeight') + 'px;',
				url: model.get('url')
			}
			// 格式化模板
			var tpl = this.tpl(data);
			// 插入到页面中
			// 判断左右两个容器哪个容器矮就向哪个容器内添加图片
			if (this.leftHeight > this.rightHeight) {
				this.renderRight(tpl, model.get('showHeight'));
			} else {
				this.renderLeft(tpl, model.get('showHeight'));
			}
		},
		renderLeft: function (tpl, height) {
			this.leftHeight += height + 6;
			// 将tpl转化为zepto对象，并插入到左边的容器
			this.leftContainer.append($(tpl))
		},
		renderRight: function (tpl, height) {
			this.rightHeight += height + 6;
			this.rightContainer.append($(tpl))
		},
		// 获取搜索框里面的内容
		getSearchInputValue: function () {
			var val = this.$('.search-input').val();
			// 判断value非空
			if (/^\s*$/.test(val)) {
				alert('请输入关键字')
				return;
			}
			// 去除首位的空白符
			val = val.replace(/^\s+|\s+$/g, '');
			// 为了val在外部使用，所以我们要将它返回出来
			return val;
		},
		/**
		 * 在集合中搜索数据
		 * @val: 	搜索的query
		 * @key: 	模型的搜索属性
		 */
		searchDataFromCollection: function (val, key) {
			var searchKey = key || 'title';
			var col = this.collection.filter(function (model) {
				// 精确的搜索匹配，判断val是不是在模型的title里面
				return model.get(searchKey).indexOf(val) >= 0;
			})
			console.log(col)

			return col;
		},
		/**
		 * 重置搜搜的视图的
		 * @result 		搜索数据结果的数组
		 */ 
		resetView: function (result) {
			var that = this;
			// 清空图片容器视图
			this.clearView();
			// 遍历reult中的model
			result.forEach(function (model, index) {
				that.render(model)
			})
		},
		/**
		 * 清空图片容器视图
		 */
		clearView: function () {
			// 清空右边图片容器内容
			this.rightContainer.html('')
			// 清空左边容器高度
			this.rightHeight = 0;
			// 清空左边图片容器内容
			this.leftContainer.html('')
			// 清空右边容器高度
			this.leftHeight = 0;
		},
		// 显示搜索结果页
		showSearchView: function () {
			// 第一步获取搜索的内容
			var val = this.getSearchInputValue()
			// 第二步根据搜索的内容获取数据
				
			if (val) {
				var result = this.searchDataFromCollection(val, 'title');
				// 把这些数据渲染到页面中
				this.resetView(result)
			}
		},
		/**
		 * 获取按钮数据
		 * @dom 	按钮元素
		 * return 	按钮上的数据
		 */ 
		getTypeBtnValue: function (dom) {
			// 获取dom上data-id属性
			// var id = $(dom).attr('data-id')
			// console.log(id)
			var id = $(dom).data('id')
			return id;
		},
		getModelsFromCollection: function (val, key) {
			return this.collection.filter(function (model) {
				return model.get(key) == val
			})
		},
		// 单击图片类别按钮回调函数
		chooseImageType: function (e) {
			// 第一步 获取按钮上的数据
			var id = this.getTypeBtnValue(e.target);
			// 第二步 获取集合中的相关模型
			var result = this.getModelsFromCollection(id, 'type')

			// 第三步 渲染页面
			this.resetView(result)
		},
		goTop: function () {
			// 返回顶部
			window.scrollTo(0, 0)
			// 使用动画请加载zepto.animate库
			// $(document).animate({scrollTop: 0}, 400)
		},
		showAllImg: function () {
			var that = this;
			this.clearView();
			this.collection.forEach(function (model) {
				that.render(model);
			})
		}
	})

	return List;
})