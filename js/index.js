//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};


/*主部轮播图*/
var a=document.getElementById('mainbanner_btn').getElementsByTagName('li'),
	b=document.getElementById('mainbanner_pic').getElementsByTagName('li'),
	c=document.getElementById('mainbanner_box'),
	right= document.getElementById('on_right'),             
	left= document.getElementById('on_left');
var now=0;
a[0].style.background='red';
b[0].style.opacity='1';
b[0].style.filter='alpha(opacity=100)';
function name1(){ 
 	for (var i = 0; i < a.length; i++) {
			a[i].style.background='#fff';
			b[i].style.opacity='0';
			b[i].style.filter='alpha(opacity=0)';
			b[i].style.transition='all 0.6s';
		};
		a[now].style.background='red';	
		b[now].style.opacity='1';
		b[now].style.filter='alpha(opacity=100)';
		b[now].style.transition='all 0.6s';;	
	  }
for (var i = 0; i < a.length; i++) {
	a[i].index=i;
	a[i].onmouseover=function(){
		now=this.index;
		name1();
	}
}
function onright(){
	 now=(now+1)%a.length;
     name1();		
}
right.onclick=function onright(){
	 now=(now+1)%a.length;
     name1();		
}
left.onclick=function onleft(){
	if(now==0){now=a.length};
	 now=(now-1)%a.length;
    name1();
}
var time=setInterval('onright()',2000);
c.onmouseover=function(){
	clearInterval(time);
}
c.onmouseout=function(){
	time=setInterval('onright()',2000);
}
/*whole*/
var wc = document.getElementById('wholeul').getElementsByTagName('li'),
	wclen = wc.length;
wc[0].className='wc';
for(var i = 0; i < wclen; i++){
	wc[i].onclick=function(){
		for(var i = 0; i < wclen; i++){
			wc[i].className='';
		};
		this.className='wc';
		wc[wclen-1].className += ' li3';
	};
}
/*choose*/
var ch = document.getElementById('chooseul').getElementsByTagName('li'),
	chlen = ch.length;
ch[0].className='ch';
for(var i = 0; i < chlen; i++){
	ch[i].onclick=function(){
		for(var i = 0; i < chlen; i++){
			ch[i].className='';
		};
		this.className='ch';
	};
}
/*底部轮播图*/
var btbData = [
	{
		href : "http://image.baidu.com",
		url : "./images/exhibition01.png"
	},
	{
		href : "http://image.baidu.com",
		url : "./images/exhibition02.png"
	},
	{
		href : "http://image.baidu.com",
		url : "./images/exhibition03.png"
	},
	{
		href : "http://image.baidu.com",
		url : "./images/exhibition04.png"
	},
	{
		href : "http://image.baidu.com",
		url : "./images/exhibition05.png"
	},
	{
		href : "http://image.baidu.com",
		url : "./images/exhibition06.png"
	}
];
function createBTMbanner(option){
	var a = document.createElement('a');
	a.href = option.href;
	a.style.background = "url(" + option.url +")";
	return a;
}
var btbfragment = document.createDocumentFragment();
btbData.forEach(function(item){
	btbfragment.appendChild(createBTMbanner(item));
});
var btb = document.getElementById('btmbanner'),
	btb_box = document.getElementById('banner_box'),
	div = document.createElement('div');
div.className = "clear";
var btnright = document.createElement('div'),
	btnleft = document.createElement('div');
	btnright.className = "btnr";
	btnleft.className = "btnl";
btnleft.style.display="none";
btnleft.onclick = function(){
	var b = -580;
	var timer1 = setInterval(function(){
		b+=6;
		if(b==2){b=0;}
		btb.style.left=b + "px";
		b==0 && clearInterval(timer1);
	},9.6);
	this.style.display="none";
	btnright.style.display="block";
}
btnright.onclick = function(){
	var a = 0;
	var timer2 =setInterval(function(){
		btb.style.left = -a + "px";
		a+=6;
		if(a==576){a=574;}
		a==580 && clearInterval(timer2);
	},9.6);
	this.style.display="none";
	btnleft.style.display="block";
}
btb.appendChild(btbfragment);
btb.appendChild(div);
btb_box.appendChild(btnleft);
btb_box.appendChild(btnright);
