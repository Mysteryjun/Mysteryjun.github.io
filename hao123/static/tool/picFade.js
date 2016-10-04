define(function(){

	var PicFade=function(id,timer,interTimer){
			var timer=timer||700;
			var interTimer=interTimer||2500;
			var $unit=$("#"+id);
			var $leftBtn=$unit.find("span[class='left']");
			var $rightBtn=$unit.find("span[class='right']");
			var $li=$unit.find("li");
			var length=$li.size()-1;
			var timer;
			$unit.find("li:first").siblings().css("display","none")
			var idx=0;
			var old=0;
			$unit.hover(function(){
				$unit.find("span").show();
				clearInterval(timer);
			},function(){
				timer=setInterval(hander,interTimer)
				$unit.find("span").hide();
			}
			)
			timer=setInterval(hander,interTimer);
			function hander(){
				idx++;
				idx=idx>length?0:idx;
				if(idx!=old){
					$li.eq(idx).fadeIn(timer);
					$li.eq(old).fadeOut(timer);
					old=idx;
				}
				else{return 
				}
			}
			$leftBtn.click(function(){
				hander();
			})
			$rightBtn.click(function(){
				idx--;
				idx=idx<0?length:idx;
				if(idx!=old){
					$li.eq(idx).fadeIn();
					$li.eq(old).fadeOut();
					old=idx;
				}
				else{
					return 
				}
			})

		}
		return PicFade;
})
