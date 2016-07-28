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
	this.velX=0;
	this.speedCount=0;
	this.running=false;
	this.whichY=-2;
	//소크기증가
	this.sizeWid=3;
	this.sizeHei=2;
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

	this.move=function(){
		var cow = this;
		
		//소표정움직임
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
		//좌우측으로 Img 진입X!! 
		if(this.x>=stage_wid-parseInt(this.width) || this.x<=0){
			console.log("진입X"+this.x);
			
			this.velX=-2*this.velX;
		}

		//소와 잡초가 닿았을시 잡초제거.
		for(var i=0;i<weedArr.length;i++){
			if(weedArr[i] != undefined){

				var result=hitTest2(this.div,-cow.sizeWid,-cow.sizeHei, weedArr[i].img );

				if(result){
					console.log("잡초에 닿음");	
					//잡초제거시 소크기 증가.
					this.width+=this.sizeWid;
					this.height+=this.sizeHei;

					this.div.style.width=this.width+"px";
					this.div.style.height=this.height+"px";
					this.img.style.width=this.width+"px";
					this.img.style.height=this.height+"px";
					
					cow.y += cow.whichY;
					this.div.style.top=this.y+"px"

					this.stage.removeChild(weedArr[i].img);
					delete weedArr[i];
				}
			}
		}

		//이동하기
		this.x=this.x+this.velX;
		this.div.style.left=this.x+"px";

		setTimeout(function(){
				cow.move();
		},2);
	}

}//end of Cow