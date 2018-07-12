$(document).ready(function(){
var timerSec=[];
var timerMin=[];
startCount(timerMin,timerSec);
$("#reset").click(function(){
	console.log('reset');
	for(var i=0;i<timerSec.length;i++){
		console.log(timerSec.length);
		clearTimeout(timerSec[i]);
		clearTimeout(timerMin[i]);
		}
	startCount(timerSec,timerMin);
});
function startCount(tm,ts){
	timeCount(timerSec,"#seconds",1000);
	timeCount(timerMin,"#minutes",60000);
}
function timeCount(arr,iddiv,delay){
	while(arr.length>0){
		arr.pop();
	}
	console.log('length:'+arr.length);
	var toI, toJ;
	for(var i=0;i<=6;i++){
		toI=setTimeout(function(i){
			if(i==6){
				i=0;
				console.log('if i');
			}
			for (var j = 0; j <=10; j++) {
  				toJ=setTimeout(function (j,i) {
  					if(j==10){
  						console.log('if j');
  						i++;
  						if(i==6){
  							i=0;
  						}
						j=0;
  					}
  					//console.log(i,j);
    				$(iddiv).text(i+''+j);
  				}, delay * j + 1, j,i);
			}

		},delay*10*i+1,i);
	}
	arr.push(toJ);
	arr.push(toI);
}
});

