var Weeds = function(stage,width,height,x,y,src){
	this.stage=stage;
	this.img;
	this.src=src;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;


	this.init=function(){
		this.img = document.createElement("img");
		this.img.src = this.src;
		
		this.img.style.width= this.width+"px";
		this.img.style.height= this.height+"px";
		
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";	
		
		this.stage.appendChild(this.img);
	
		this.move();
	}

	this.move=function(){
		var weeds = this;

		setTimeout(function(){

			//잡초 자동 및 랜덤으로 나타남
			weeds.move();
		},3000);
	}

}//end of Cow