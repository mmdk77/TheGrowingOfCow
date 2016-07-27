function hitTest(me, target) {

	 me_x= parseInt(me.style.left);
	 me_y= parseInt(me.style.top);
	 me_width=parseInt(me.style.width);
	 me_height=parseInt(me.style.height);
	 
	 target_x= parseInt(target.style.left);
	 target_y= parseInt(target.style.top);
	 target_width=parseInt(target.style.width);
	 target_height=parseInt(target.style.height);
	 
	 var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));
	 var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width)); 
	 
	 var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));
	 var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));
	  
	 return (result1 || result2) && (result3 || result4);
}

function getRandomByRange(max, min){
	var r=Math.floor(Math.random()*(max-min+1)+min);
	return r;
}

function go(s){
	step=s;
	//움직임처리 
	cow.velX=step;	

	//액션처리!!
	cow.running=true;
}


function bgEffect(){
	//카메라 효과 
	bgX-=(step*5);
	stage.style.backgroundPosition=bgX+"px 0px";

	setTimeout("bgEffect()", 100);
}
