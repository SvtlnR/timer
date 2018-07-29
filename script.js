$(document).ready(function(){
var ss=0;
var fs=0;
var sm=0;
var fm=0;
var isPaused=false;
var timer;
startTimer();
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
	startTimer();

});
$("#pause").click(function(){
	isPaused=!isPaused;
	pause();
});
function startTimer(){
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
function pause(){
	if(isPaused){
		clearInterval(timer);
	}
	else{
		startTimer();
	}
}
});

