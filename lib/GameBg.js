var GameBg=function(stage,wid,hei){
	this.stage=stage;
	this.div;
	this.img;
	this.width=wid;
	this.height=hei;

	this.bgY=0;



	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
	
	
		this.img=document.createElement("img");
		this.img.src="./images/background.jpg";
		
		this.div.appendChild(this.img);
		this.stage.appendChild(this.div);

		this.move();
	}

	this.move=function(){
		var bg=this;
		this.bgY+=2;
		bg.div.style.backgroundPosition="0px"+bg.bgY+"px";
		setTimeout(function(){
			bg.move();
		},10);
	}
}