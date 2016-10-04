
define(function (require, exports, module) {
	var MVC = require('MVC');
	require('m/slider/slider');
	require('m/header/header');
	require("m/baidu-seach/baidu-seach");
	require("m/hotsearchCon/hotsearchCon");
	require("m/bodyct/bodyct");
	require("m/frame-body/govSiteTop");
	require("m/frame-body/layout-content-slider/leftbannerv2");
	require("m/frame-body/layout-content-slider/servicetab");
	require("m/frame-body/layout-content-slider/sliderModule");
	require("m/sliderTop/sliderTop.js");
	require("m/layout-content/layout-content.js");

	return {
		// 定义模块的入口
		init: function () {
			// 将模块加载进来
			MVC.install();
		}
	}
})
