function test(){
			//기타 변수
			var stage;
			var stage_wid=1280;
			var stage_hei=720;
			var key;
			//소 변수
			var cow;
			var cowWid=62;
			var cowHei=44;
			//배경
			var bgimg;
			//풀
			var weeds;

		
			window.addEventListener("load",function(){
				stage=document.getElementById("stage");
				stage.style.width=stage_wid+"px";
				stage.style.height=stage_hei+"px";
				
				bgimg = new BgImg(stage,1280,720);
				bgimg.init();

				cow = new Cow(stage,cowWid,cowHei,640,566);
				cow.init();

				weeds = new Weeds(stage,70,60,300,555);
				weeds.init();

							
			});
			//키보드 누를시 이벤트
			window.addEventListener("keydown",function(){
				key=event.keyCode;
				switch(key){
					case 37: 
						cow.velX=-2; //왼쪽
						break;
					case 39: 
						cow.velX=+2; //오른쪽
						break;
					case 32:	//소가 풀뜯을때,
						var result= hitTest(cow,weeds);
						
						if(result){
							console.log("충덜");
							
							//충돌감지 후, 스페이스마 눌렀을시 잡초가 사라지며, 소의 크기증가.
							cowWid+=2;
							cowHei+=1;

						}else{
							console.log("no충덜");
						}
						break;

				}
			});

			window.addEventListener("keyup",function(){
				cow.velX=0;
			});
}