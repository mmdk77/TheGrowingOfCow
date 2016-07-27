var Cow = function(stage,width,height,x,y,src){
	this.stage=stage;
	this.img;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	//움직임
	this.velX =0;
	this.speedCount=0;
	this.running=false;
	//소 배고픔
	this.full=true;
	this.empty=false;


	this.init=function(){
		this.div = document.createElement("div");			
		this.div.style.overflow="hidden";	
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		
		this.img = document.createElement("img");
		this.img.src = this.src;
		this.img.style.width= this.width+"px";
		this.img.style.height= this.height+"px";
		this.img.style.position="relative";
		

		this.div.appendChild(this.img);
		this.stage.appendChild(this.div);
		

		this.move();
	}
	///이미지 움직임
	this.action=function(){
		if(this.running){
			this.speedCount++;
			if(this.speedCount%35==0){
				cowCnt++; // 0,1,2,3
				if(cowCnt > cowArr.length-1){
					cowCnt=1;
				}
			}
			this.img.src=cowArr[cowCnt];
		}else{
			this.img.src=cowArr[0]; //서 있는 모습
		}
	}

	////키보드 움직임 
	this.move=function(){
		var cow = this;
		
		this.x+=this.velX; //현재 x위치에서 velX만큼 전진!!

		//우측벽으로 나가는지 판단!! 
		if(this.x>=stage.width-this.width || this.x<=0){
			console.log("진입X"+this.x);
			this.velX=-1*this.velX;
		}

		/*for(var i=0;i<weedArr.length;i++){
			var result=hitTest( this.div , weedArr[i].img );
			if(result && this.eat){
				this.velX=0;
				console.log("잡초에 닿음");	
				this.eat=false; 
			}
		}*/

		//이동하기
		this.x=this.x+this.velX;
		this.div.style.left=this.x+"px";

		this.action();

		setTimeout(function(){
				cow.move();
		},20);
	}

}//end of Cow