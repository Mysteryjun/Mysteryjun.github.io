//slider 5个模块
define(function(require){
	var MVC=require("MVC");
	var movePic=require("movePic");
	MVC.addModel("sliderModule",{
		data:{
			toplist0:{
				img:[
					{src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/e3dff9624e8136a3d7529288efe49ab5.jpg"},
					{src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/1a2bde4c99ae0302938a0e0a5512dfcf.jpg"},
					{src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/759425f6f9214143ddce13f6dad5bb22.jpg"},
					{src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/3faa2f5f9a5a84d2e6eb151f91256429.jpg"}
				],
				toplist0_news:[
					{item:"北京男子袭击执勤武警 10秒钟被放倒"},
					{item:"女子凌晨坠楼亡 家中有他人入室痕迹"},
					{item:"因为精神病 他笔下的猫也诡异了起来"},
					{item:"空调里面住了户邻居 从此全家人悲剧"},
					{item:"女子经期大出血 血液仅剩正常人一半"},
					{item:"男子订婚日大喊腰疼 结局令媳妇后悔"},
					{item:"女子幽会情人遇女主回家 躲阳台坠亡"},
					{item:"北京男子袭击执勤武警 10秒钟被放倒"},
					{item:"男大学生带女友旅游 神秘失踪去嫖娼"}
				],
				toplist0_news1:[
					{item:"日本超级大西瓜香港上市 每个1900元"},
					{item:"完全陌生的两人见面就接吻 然后悲剧"},
					{item:"少女竟爱上公交司机:穿校服与其开房"},
					{item:"上海女子凌晨上厕所遭抢劫 颈部割伤"},
					{item:"5款运动型中级车行情 最高优惠4万"}
				],
				toplist0_news2:[
					{item:"台方:事故大巴未确认安装监控 最后轨迹蹊跷 "},
					{item:"女教师中1.29亿躺地尖叫 暴富后丈夫坚持上班"},
					{item:"女子嫌孩子不听话 将3岁亲子塞进车站安检机 "},
					{item:"冰火两重天!重庆40度高温 冻库员工穿棉袄上班"},
					{item:"小伙失忆流落救助站 能破解电脑密码身份成迷"}
				],
				imgList:[
					{img1:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/e6b4fe1a7648228893fcdf01d020935b.jpg"},
					{img2:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/d33f960676cb365fcc59f9768746d802.jpg"}
				]
			}

		}

	})
	.addView("sliderModule",function(model,template){
		var dom=$('<div class="g-bg5" id="g-bg5"></div>');
		var data=model.get("sliderModule");
		var tpl=[
			'<div class="box-toplist0">',
					'<div class="scrollBar0-gun">',
						'<i class="bar0"></i>',
					'</div>',
					'<div class="topbar0 topbar">',
						'<ul>',
							'<li class="first"><i></i><a href="javascript:;">推荐</a></li>',
							'<li><i></i><a href="javascript:;">社会</a></li>',
							'<li><i></i><a href="javascript:;">娱乐</a></li>',
							'<li><i></i><a href="javascript:;">军事</a></li>',
							'<li><a href="javascript:;">体育</a></li>',
						'</ul>',
						'<div class="moreTuijian">',
							'<span>财经</span>',
							'<span>旅游</span>',
							'<span>汽车</span>',
						'</div>',
						'<span class="showMore"></span>',
					'</div>',
					'<div class="scrollBar0">',
						'<div class="toppicture0" id="toppicture0">',
							'<span class="left">&lt;</span>',
							'<span class="right">&gt;</span>',
								'<ul>{#imgPic#}',
									// '<li>',
									// '<img src="h1/34a01c8878dd1b39c9f0e80b78f27fb0.jpg" alt="">',
									// '</li>',
									// '<li>',
									// 	'<img src="h1/670c3fee98344c849509bd81614211e3.jpg" alt="">',
									// '</li>',
									// '<li>',
									// 	'<img src="h1/9792d23b6d99472abebd9e9c0eaef0e2.jpg" alt="">',
									// '</li>',
									// '<li>',
									// 	'<img src="h1/c95b19097d6111cfa608a96cd0eec5b0.jpg" alt="">',
									// '</li>',
								'</ul>',
						'</div>',
					'</div>',
					'<div class="toplist0-news">',
						'<ul>{#toplist0_news#}',
							/*'<li><a href="javascript:;">北京男子袭击执勤武警 10秒钟被放倒</a></li>',
							'<li><a href="javascript:;">女子凌晨坠楼亡 家中有他人入室痕迹</a></li>',
							'<li><a href="javascript:;">因为精神病 他笔下的猫也诡异了起来</a></li>',
							'<li><a href="javascript:;">空调里面住了户邻居 从此全家人悲剧</a></li>',
							'<li><a href="javascript:;">女子经期大出血 血液仅剩正常人一半</a></li>',
							'<li><a href="javascript:;">男子订婚日大喊腰疼 结局令媳妇后悔</a></li>',
							'<li><a href="javascript:;">女子幽会情人遇女主回家 躲阳台坠亡</a></li>',
							'<li><a href="javascript:;">男大学生带女友旅游 神秘失踪去嫖娼</a></li>',*/
						'</ul>',
						'<div class="haokan"><i>好看</i><span>挤破头也报名 百度招你做网红</span></div>',
					'</div>',
					'<div class="toplist0-img1">',
						'<img src="{#img1#}" alt="">',
					'</div>',
					'<div class="toplist0-news1">',
						'<ul>{#toplist0_news1#}',
			  				/*'<li class="first"><a href="javascript:;">新人懵了! 司仪婚礼唱失恋阵线联盟</a></li>',
							'<li><a href="javascript:;">她60岁未婚 却是23个孩子“母亲”</a></li>',
							'<li><a href="javascript:;">名模新婚之夜玩得过:竟把公公当老公</a></li>',
							'<li><a href="javascript:;">功夫之王表演绝活气断钢丝 惊呆众人</a></li>',
							'<li><a href="javascript:;">5款运动型中级车行情 最高优惠4万</a></li>',*/
						'</ul>',
					'</div>',
					'<div class="toplist0-img2">',
						'<img src="{#img2#}" alt="">',
					'</div>',
					'<div class="toplist0-news2">',
						'<ul>{#toplist0_news2#}',
							/*'<li><a href="javascript:;">台方:事故大巴未确认安装监控 最后轨迹蹊跷  </a></li>',
							'<li><a href="javascript:;">女教师中1.29亿躺地尖叫 暴富后丈夫坚持上班 </a></li>',
							'<li><a href="javascript:;">女子嫌孩子不听话 将3岁亲子塞进车站安检机  </a></li>',
							'<li><a href="javascript:;">冰火两重天!重庆40度高温 冻库员工穿棉袄上班 </a></li>',
							'<li><a href="javascript:;">小伙失忆流落救助站 能破解电脑密码身份成迷   </a></li>',*/
						'</ul>',
					'</div>',
					'<div class="more-news">',
						'<p>',
							'<a>更多新闻&gt;&gt;</a>',
						'</p>',
					'</div>',
				'</div>',
				'<div class="box-toplist1">',
					'<div class="scrollBar1-gun">',
						'<i class="bar1"></i>',
					'</div>',
					'<div class="topbar1 topbar">',
						'<ul>',
							'<li><i></i><a href="javascript:;">视屏</a></li>',
							'<li class="first"><i></i><a href="javascript:;">热剧</a></li>',
							'<li><i></i><a href="javascript:;">电影</a></li>',
							'<li><i></i><a href="javascript:;">综艺</a></li>',
							'<li><a href="javascript:;">动漫</a></li>',
						'</ul>',
					'</div>',
					'<div class="scrollBar1">',
						'<div class="toppicture1" id="toppicture1">',
							'<span class="left">&lt;</span>',
							'<span class="right">&gt;</span>',
								'<ul>',
									'<li>',
									'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/5d46b386d7f1a918882493dd5ba737e5.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/f8b96fa2e56987701a1e519fa098507a.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/81dd15dad6d4a0fc7f42fef75415c849.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-24/45e782dce76441f74bff7596396d114c.jpg" alt="">',
									'</li>',
								'</ul>',
						'</div>',
					'</div>',
					'<div class="toplist1-news0">',
						'<ul>',
							'<li><a href="javascript:;">天天向上疑似骗捐 汪涵人品遭质疑</a></li>',
							'<li><a href="javascript:;">阿宝妻子开嗓唱歌 开口震撼全场</a></li>',
							'<li><a href="javascript:;">难得同框！黄晓明Baby深夜吃海鲜</a></li>',
							'<li><a href="javascript:;">袁立发鸡汤文遭网友打脸:没文化!</a></li>',
							'<li><a href="javascript:;">胡歌现机场显落寞 疑因是霍改嫁了</a></li>',
							'<li><a href="javascript:;">柳岩吊钢丝从大桥跳江 红发惹眼</a></li>',
						'</ul>',
					'</div>',
					'<div class="toplist1-img1">',
						'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-23/eb74dcf8ce8b36b9c35a25cb4ed13cbf.jpg" alt="">',
					'</div>',
					'<div class="toplist1-news1">',
						'<ul>',
							'<li><a href="javascript:;">最经典的西门吹雪为减肥猝死家中 </a></li>',
							'<li><a href="javascript:;">胡歌为啥不当伴郎？林心如这么说 </a></li>',
							'<li><a href="javascript:;">杨子珊也整容了？撞脸半个娱乐圈 </a></li>',
							'<li><a href="javascript:;">曝刘亦菲热舞照片 穿短裙性感火辣 </a></li>',
							'',
						'</ul>',
					'</div>',
				'</div>',
				'<div class="box-toplist2">',
					'<div class="topbar2 topbar">',
						'<ul>',
							'<li><i></i><a href="javascript:;">热门</a></li>',
							'<li><i></i><a href="javascript:;">游戏</a></li>',
							'<li class="first"><i></i><a href="javascript:;">页游</a></li>',
							'<li><i></i><a href="javascript:;">单机</a></li>',
							'<li><a href="javascript:;">手游</a></li>',
						'</ul>',
					'</div>',
					'<div class="scrollBar2">',
						'<div class="toppicture2" id="toppicture2">',
							'<span class="left">&lt;</span>',
							'<span class="right">&gt;</span>',
								'<ul>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-17/4f90a596254874d77df8972d595204c0.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-14/da0972fd560068cab2d010b07f152cc6.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/f1055e0c794192c200c1be9fc340a532.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-20/ee7d42a6ae8c7d3013613063f1949b53.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-06-20/e922fbd2a40ad82b1309adb0c94b7677.jpg" alt="">',
									'</li>',
								'</ul>',
						'</div>',
					'</div>',
					'<div class="news2-1">',
						'<ul>',
							'<li><i></i><a href="javascript:;">奥特曼冒险</a></li>',
							'<li><i></i><a href="javascript:;">时尚豹纹控</a></li>',
							'<li><i></i><a href="javascript:;">懒羊羊回家</a></li>',
							'<li><i></i><a href="javascript:;">组装机械龙</a></li>',
							'<li><i></i><a href="javascript:;">美女献热吻</a></li>',
							'<li><i></i><a href="javascript:;">美女的逆袭</a></li>',
							'<li><i></i><a href="javascript:;">太平洋战争</a></li>',
							'<li><i></i><a href="javascript:;">小偷哪里跑</a></li>',
							'<li><i></i><a href="javascript:;">可爱宝贝</a></li>',
							'<li><i></i><a href="javascript:;">炸鬼子炮楼</a></li>',
							'<li><i></i><a href="javascript:;">高速疾驰</a></li>',
							'<li><i></i><a href="javascript:;">光头强上树</a></li>',
						'</ul>',
					'</div>',
				'</div>',
				'<div class="box-toplist3">',
					'<div class="topbar3 topbar">',
						'<ul>',
							'<li><i></i><a href="javascript:;">购物</a></li>',
							'<li><i></i><a href="javascript:;">团购</a></li>',
							'<li><i></i><a href="javascript:;">特卖</a></li>',
							'<li class="first"><i></i><a href="javascript:;">9块9</a></li>',
							'<li><a href="javascript:;">海淘</a></li>',
						'</ul>',
					'</div>',
					'<div class="scrollBar3">',
						'<div class="toppicture3" id="toppicture3">',
							'<span class="left">&lt;</span>',
							'<span class="right">&gt;</span>',
								'<ul>',
									'<li>',
										'<img src="https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-05-11/169c0e5e0aaaa71e75f5682511474ba8.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-05-23/48dc1358c52bba59ecd30947a1034a62.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-03-28/ea5a9a1002c9b73bb6bc60cceef7e1dd.jpg" alt="">',
									'</li>',
								'</ul>',
						'</div>',
					'</div>',
					'<div class="news3-1">',
						'<ul>',
							'<li><i></i><a href="javascript:;">百元内好货不断</a></li>',
							'<li><i></i><a href="javascript:;">大码女装1折起</a></li>',
							'<li><i></i><a href="javascript:;">20元封顶优选</a></li>',
							'<li><i></i><a href="javascript:;">棉麻女装1折起</a></li>',
							'<li><i></i><a href="javascript:;">居家好货1折起</a></li>',
							'<li><i></i><a href="javascript:;">民族服饰8.8元起</a></li>',
							'<li><i></i><a href="javascript:;">碎花服饰1折起</a></li>',
							'<li><i></i><a href="javascript:;">父母衣裤28起</a></li>',
						'</ul>',
					'</div>',
				'</div>',
			'<div class="box-toplist4">',
					'<div class="topbar4 topbar">',
						'<ul>',
							'<li><i></i><b></b><a href="javascript:;">旅游</a></li>',
							'<li><i></i><a href="javascript:;">学习</a></li>',
							'<li><i></i><a href="javascript:;">汽车</a></li>',
							'<li><i></i><a href="javascript:;">生活</a></li>',
							'<li class="first"><a href="javascript:;">健康</a></li>',
						'</ul>',
					'</div>',
					'<div class="scrollBar4">',
						'<div class="toppicture4" id="toppicture4">',
							'<span class="left">&lt;</span>',
							'<span class="right">&gt;</span>',
								'<ul>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-19/c2fed9d4aeabe4338df23bb4d6cf77d3.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-22/6b8d775b4d886f469dc6aff179b9e95e.jpg" alt="">',
									'</li>',
									'<li>',
										'<img src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-07-19/57b84e896fc821499a1739a9c45f0ef3.jpg" alt="">',
									'</li>',
								'</ul>',
						'</div>',
					'</div>',
					'<div class="news4-1">',
						'<ul>',
							'<li><i></i><a href="javascript:;">魔枕令人疲惫</a></li>',
							'<li><i></i><a href="javascript:;">小物却能抗癌</a></li>',
							'<li><i></i><a href="javascript:;">夏天吃它没病</a></li>',
							'<li><i></i><a href="javascript:;">常喝它竟得癌</a></li>',
							'<li><i></i><a href="javascript:;">吃它再不中暑</a></li>',
							'<li><i></i><a href="javascript:;">怀孕时别吃它</a></li>',
							'<li><i></i><a href="javascript:;">祛皱防衰吃它</a></li>',
							'<li><i></i><a href="javascript:;">别吃这毒水果</a></li>',
						'</ul>',
					'</div>'
		].join("");
		// 模板
		var tplImg="<li><img src='{#src#}'></li>";
		var tplnew1='<li><a href="javascript:;">{#item#}</a></li>';
		var tplnew2='<li><a href="javascript:;">{#item#}</a></li>';
		var tplnew3='<li><a href="javascript:;">{#item#}</a></li>';

		var htpl1=htpl2=htpl3=htpl4="";
		$.each(data.data.toplist0.img,function(index,value){
			htpl1+=template(tplImg,value)
		})
		$.each(data.data.toplist0.toplist0_news,function(index,value){
			htpl2+=template(tplnew1,value)
		})
		$.each(data.data.toplist0.toplist0_news1,function(index,value){
			htpl3+=template(tplnew2,value)
		})
		$.each(data.data.toplist0.toplist0_news2,function(index,value){
			htpl4+=template(tplnew3,value)
		})
		
		//tpl 最后匹配
		var html=template(tpl,{
			imgPic:htpl1,
			toplist0_news:htpl2,
			toplist0_news1:htpl3,
			toplist0_news2:htpl4,
			img1:data.data.toplist0.imgList[0].img1,
			img2:data.data.toplist0.imgList[1].img2
		});
		
		//插入dom
		dom.html(html).appendTo("#layout-content-slider");
		return dom;

	})
	.addCtrl("sliderModule",function(model,view,observer){
		//模块1 的加号那里事件
		var dom=view.create("sliderModule");
		dom.delegate(".showMore","click",function(){
			dom.find(".moreTuijian").fadeToggle();
		})
		dom.delegate(".moreTuijian span","click",function(){
			dom.find(".moreTuijian").fadeToggle();
		})
		// 运动时间加载
		movePic("toppicture1");
		movePic("toppicture2");
		movePic("toppicture3");
		movePic("toppicture4");
		movePic("toppicture0");
		//选项卡切换时间
		
		dom.delegate(".topbar li","click",function(){
			$(this).addClass("first").siblings().removeClass("first");
		})
		//下滑时间用观察者模式
		observer.regist("slideDown",function(){
			dom.animate({top:-2},300,"linear")
		})
		observer.regist("slideUp",function(){
			dom.animate({top:-30},300,"linear")
		})


	})

})
