$(document).ready(function(){
var ss=0;
var fs=0;
var sm=0;
var fm=0;
var isPaused=false;
var timer=setInterval(function(){
	ss++;
	if(ss==10){
		ss=0;
		fs++;
		if(fs==6){
			fs=0;
			sm++;
			if(sm==10){
				sm=0;
				fm++;
				if(fm==6){
					fm==0;
				}
				$("#firstmin").text(fm);
			}
			$("#secmin").text(sm);
		}
		$("#firstsec").text(fs);
	}
	$("#secsec").text(ss);
	},1000);

$("#reset").click(function(){
	isPaused=false;
	clearInterval(timer);
	ss=0;
	fs=0;
	sm=0;
	fm=0;
	$("#firstmin").text(fm);
	$("#secmin").text(sm);
	$("#firstsec").text(fs);
	$("#secsec").text(ss);
	timer=setInterval(function(){
	ss++;
	if(ss==10){
		ss=0;
		fs++;
		if(fs==6){
			fs=0;
			sm++;
			if(sm==10){
				sm=0;
				fm++;
				if(fm==6){
					fm==0;
				}
				$("#firstmin").text(fm);
			}
			$("#secmin").text(sm);
		}
		$("#firstsec").text(fs);
	}
	$("#secsec").text(ss);
	},1000);

});
$("#pause").click(function(){
	isPaused=!isPaused;
	pause();
});
function pause(){
	if(isPaused){
		clearInterval(timer);
	}
	else{
		timer=setInterval(function(){
			ss++;
			if(ss==10){
				ss=0;
				fs++;
				if(fs==6){
					fs=0;
					sm++;
					if(sm==10){
						sm=0;
						fm++;
						if(fm==6){
							fm==0;
						}
						$("#firstmin").text(fm);
					}
					$("#secmin").text(sm);
				}
				$("#firstsec").text(fs);
			}
			$("#secsec").text(ss);
		},1000);
	}
}
/*var bss=0;
var bfs=0;
var bsm=0;
var bfm=0;
var isPaused=false;
var sstm,fstm,smtm,fmtm;
startCount(bss,bfs,bsm,bfm);
var timerSecSec=setInterval(function(){
	for (var i = 0; i < 10; i++) {
		if(!isPaused){
		sstm=setTimeout(function (i) {
  			$("#secsec").text(i);
  			}, 1000* i + 1, i);
		}
		else{
			clearTimeout(sstm);
		}
	}
},10000);
var timerFirstSec=setInterval(function(){
	for (var i = 0; i < 6; i++) {
		if(!isPaused){
  		fstm=setTimeout(function (i) {
  			$("#firstsec").text(i);
  			}, 10000* i + 1, i);}
  		else{
			clearTimeout(fstm);
		}
	}
},60000);
var timerSecMin=setInterval(function(){
	for (var i = 0; i < 10; i++) {
		if(!isPaused){
  		smtm=setTimeout(function (i) {
  			$("#secmin").text(i);
  			}, 60000* i + 1, i);}
		else{
			clearTimeout(smtm);
		}
	}
		
},600000);
var timerFirstMin=setInterval(function(){
	for (var i = 0; i < 6; i++) {
		if(isPaused){
  		fmtm=setTimeout(function (i) {
  			$("#firstmin").text(i);
  			}, 600000* i + 1, i);
  		}
		else{
			clearTimeout(fmtm);
		}
	}
},3600000);

$("#pause").click(function(){
	isPaused=!isPaused;
	pause();
});
console.log(bfm,bsm,bfs,bss);
$("#reset").click(function(){
	isPaused=true;
	pause();
	bss=0;
	bfs=0;
	bsm=0;
	bfm=0;
	isPaused=false;
	startCount(bfm,bsm,bfs,bss);
	var timerSecSec=setInterval(function(){
	for (var i = 0; i < 10; i++) {
		if(!isPaused){
		var sstm=setTimeout(function (i) {
  			$("#secsec").text(i);
  			}, 1000* i + 1, i);
		}
		else{
			clearTimeout(sstm);
		}
	}
},10000);
var timerFirstSec=setInterval(function(){
	for (var i = 0; i < 6; i++) {
		if(!isPaused){
  		var fstm=setTimeout(function (i) {
  			$("#firstsec").text(i);
  			}, 10000* i + 1, i);}
  		else{
			clearTimeout(fstm);
		}
	}
},60000);
var timerSecMin=setInterval(function(){
	for (var i = 0; i < 10; i++) {
		if(!isPaused){
  		var smtm=setTimeout(function (i) {
  			$("#secmin").text(i);
  			}, 60000* i + 1, i);}
		else{
			clearTimeout(smtm);
		}
	}
		
},600000);
var timerFirstMin=setInterval(function(){
	for (var i = 0; i < 6; i++) {
		if(isPaused){
  		var fmtm=setTimeout(function (i) {
  			$("#firstmin").text(i);
  			}, 600000* i + 1, i);
  		}
		else{
			clearTimeout(fmtm);
		}
	}
},3600000);
});
function startCount(begss,begfs,begsm,begfm){
	var secSec=timeCount("#secsec",10,1000,begss);
	var firstSec=timeCount("#firstsec",6,10000,begfs);
	var secMin=timeCount("#secmin",10,60000,begsm);
	var firstMin=timeCount("#firstmin",6,600000,begfm);
}
function timeCount(iddiv,limit,delay,beg){
	for (var i = beg; i < limit; i++) {
		console.log('timcount ');
		if(!isPaused){
  		var tmout=setTimeout(function (i) {
  			$(iddiv).text(i);
  		}, delay * i + 1, i);}
  		else{
  			clearTimeout(tmout);
  		}
	}
}
function pause(){
	if(isPaused){
		console.log('pause');
		clearInterval(timerSecSec);
		clearInterval(timerFirstSec);
		clearInterval(timerSecMin);
		clearInterval(timerFirstMin);
		console.log('done');
		bss=$("#secsec").text();
		bfs=$("#firstsec").text();
		bsm=$("#secmin").text();
		bfm=$("#firstmin").text();
		console.log(bfm,bsm,bfs,bss);
	}
	else{
		startCount(bss,bfs,bsm,bfm);
		var timerSecSec=setInterval(function(){
			for (var i = 0; i < 10; i++) {
				sstm=setTimeout(function (i) {
  				$("#secsec").text(i);
  				}, 1000* i + 1, i);
			}
		},10000);
		var timerFirstSec=setInterval(function(){
			for (var i = 0; i < 6; i++) {
  				fstm=setTimeout(function (i) {
  				$("#firstsec").text(i);
  				}, 10000* i + 1, i);
			}
		},60000);
		var timerSecMin=setInterval(function(){
			for (var i = 0; i < 10; i++) {
  				smtm=setTimeout(function (i) {
  				$("#secmin").text(i);
  				}, 60000* i + 1, i);
			}
		},600000);
		var timerFirstMin=setInterval(function(){
			for (var i = 0; i < 6; i++) {
  				fmtm=setTimeout(function (i) {
  				$("#firstmin").text(i);
  				}, 600000* i + 1, i);
			}
		},3600000);
	}
}*/
});

