angular.module('app', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	// 配置登录页面路由
	.when('/login',{
		templateUrl:'view/login.html',
		controller:'loginCtrl'
	})
	.when('/',{
		templateUrl: 'view/main.html',
		controller: 'mainCtrl'
	})
	// 创建用户
	.when('/createuser', {
		templateUrl: 'view/createuser.html',
		controller: 'createuserCtrl'
	})
	// 用户列表 pageNum表示用户列表页码
	.when('/userlist/:pageNum', {
		templateUrl: 'view/userlist.html',
		controller: 'userlistCtrl'
	})
	// 用户详情 userId表示用户的id
	.when('/userdetail/:userId', {
		templateUrl: 'view/userdetail.html',
		controller: 'userdetailCtrl'
	})
	// 创建新闻
	.when('/createnews', {
		templateUrl: 'view/createnews.html',
		controller: 'createnewsCtrl'
	})
	// 新闻列表 pageNum表示列表的页码
	.when('/newslist/:pageNum', {
		templateUrl: 'view/newslist.html',
		controller: 'newslistCtrl'
	})
	// 新闻详情 newsId表示新闻id
	.when('/newsdetail/:newsId', {
		templateUrl: 'view/newsdetail.html',
		controller: 'newsdetailCtrl'
	})
	// 默认跳转到main路由下
	.otherwise({
		redirectTo: '/'
	})
})
// 定义创建用户控制器
.controller('createuserCtrl', function ($scope, $http, $location) {
	$scope.user = {};
	console.log($scope)
	// 添加表单提交方法
	$scope.submit = function () {
		// 将user数据发送给后端,要用$http服务
		$http({
			method: 'POST',
			url: 'action/createuser.php',
			data: $scope.user
		})
		.success(function (res) {
			// 提交成功默认跳转到列表的第一页
			if (res && res.errno === 0) {
				$location.path('/userlist/1')
			}
		})
	}
})
// 定义用户列表控制器
.controller('userlistCtrl', function ($scope, $routeParams, $http) {
	// 在该模块中，我们只有先获取数据才能将视图渲染出来
	// 获取什么样的数据，要根据pageNum来决定，
	$scope.num = $routeParams.pageNum;	// 表示我们当前列表页的页码,但是是一个字符串
	// console.log(typeof $scope.num)
	// 有了num我们可以发送一个请求来获取数据
	$http({
		method: 'GET',
		url: 'action/userlist.php',
		params: {
			pageNum: $scope.num
		}
	})
	.success(function (res) {
		if (res && res.errno === 0) {
			// 我们将数据保存在list变量
			$scope.list = res.data;
		}
	})
})
// 定义用户详情控制器
.controller('userdetailCtrl', function ($scope, $routeParams, $http) {
	// 在该模块中，我们要先获取数据，再渲染页面，我们获取数据要根据用户id来或区域
	// var id = $routeParams.userId;
	// 根据id来获取数据，我们要发送请求
	$http({
		// url: 'action/userdetail.php',
		url: 'action/userdetail.json',
		method: 'GET',
		params: {
			id: $routeParams.userId
		}
	})
	.success(function (res) {
		// 如果返回成功，将data数据保存在user变量中
		if (res && res.errno === 0) {
			$scope.user = res.data;
		}
	})
})
// 定义创建新闻控制器
.controller('createnewsCtrl', function ($scope, $http, $location) {
	// 提交信息，并且返回成功时跳转到列表页
	$scope.submit = function () {
		// 为创建新闻时自动添加时间
		$scope.news.date = new Date().getTime();
		$http({
			url: 'action/createnews.php',
			method: "POST",
			data: $scope.news
		})
		.success(function (res) {
			// 如果请求返回成功，我们跳转到列表页
			if (res && res.errno === 0) {
				// 默认跳转到列表页第一页
				$location.path('/newslist/1')
			}
		})
	}
})
// 定义新闻列表控制器
.controller('newslistCtrl', function ($scope, $http, $routeParams) {
	// 将页码参数保存在作用域中
	$scope.num = $routeParams.pageNum;
	// 该页面，我们要先请求数据，再渲染页面
	$http({
		url: 'action/newslist.php',
		method: 'GET',
		params: {
			pageNum: $scope.num
		}
	})
	.success(function (res) {
		if (res && res.errno === 0) {
			// 将请求得到的数据保存在list变量中
			$scope.list = res.data;
			// console.log($scope.list)
		}
	})
})
// 定义新闻详情控制器
.controller('newsdetailCtrl', function ($scope, $http, $routeParams) {
	// 该模块要先获取数据再渲染页面，获取的数据要通过$routeparams的id来获取
	$http({
		url: 'action/newsdetail.php',
		method: 'GET',
		params: {
			id: $routeParams.newsId
		}
	})
	.success(function (res) {
		// 数据请求成功我们将数据保存在news变量中
		if (res && res.errno === 0) {
			$scope.news = res.data;
			// console.log($scope.news)
		}
	})
})
// 定义主页面的控制器
.controller('mainCtrl', function ($scope, $interval) {
	// 定义当前时间
	$scope.date = new Date();
	// 调用interval服务来实现时间刷新
	$interval(function () {
		$scope.date = new Date();
	}, 1000)
})
// 定义导航列表控制器
.controller('navCtrl', function ($scope) {
	$scope.list = [
		{
			title: "用户模块",
			childlist: [
				{
					title: '用户列表',
					url: '#/userlist/1'
				},
				{
					title: '创建用户',
					url: '#/createuser'
				}
			]
		},
		{
			title: '新闻模块',
			childlist: [
				{
					title: '新闻列表',
					url: '#/newslist/1'
				},
				{
					title: '创建新闻',
					url: '#/createnews'
				}
			]
		}
	]
})
// 定义登录页面视图控制器
.controller('loginCtrl',function($scope,$http,$location, $rootScope){
	$scope.submit = function(){
		// 将用户信息提交到后端
		$http({
			method:'POST',
			url:'action/login.php',
			data:$scope.user
		})
		.success(function(res){
			// 如果res.error是0，我们要将页面跳转到主页面
			if (res && res.errno === 0) {
				// 将username赋值给根作用域下
				$rootScope.username = res.data.username
				$location.path('/')
			}
		})
	}
})
.run(function($rootScope,$http,$location){
	$http({
		url:'action/checkLogin.php',
		method:'GET'
	})
	.success(function(res){
		// 判断返回的信息，如果res中data有数据那么就渲染主页面，如果没有数据，就渲染登录页面
		if (res && res.data) {
			// 进入主页面
			$rootScope.username = res.data.username
			$location.path('/')
		}else{
			// 进入登录页面
			// 将hash设置成#/login
			$location.path('/login')
		}
	})
});