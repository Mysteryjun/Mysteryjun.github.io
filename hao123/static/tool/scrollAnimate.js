define(function(){
	function scrollAnimate(target,time){
			var frameNumber = 0;	//帧编号
			var start = document.body.scrollTop || document.documentElement.scrollTop;	 //起点
			var distance = target - start;
			var interval = 10;
			var maxFrame = time / interval;

			clearInterval(timer);
			var timer = setInterval(function(){
				frameNumber++;
				if(frameNumber == maxFrame){
					clearInterval(timer);
				}
				//第一个参数t表示当前帧编号
				//第二个参数b表示起始位置
				//第三个参数c表示变化量
				//第四个参数d表示总帧数
				//返回当前帧应该在哪儿
				document.body.scrollTop = document.documentElement.scrollTop = CubicEaseInOut(frameNumber,start,distance,maxFrame);
			},10);

			
		    function CubicEaseInOut(t, b, c, d) {
		        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		        return c / 2 * ((t -= 2) * t * t + 2) + b;
		    }
		}
		return scrollAnimate;
})
