function gamestart(){
  var randomNum = Array(9);
  var countNum = 0;

  document.getElementById("result").textContent=" ";

  //1~9の数字をrandomNum配列にランダムに入れる
  while(randomNum[8] === undefined){
    var num = Math.floor(Math.random() * ( 10 - 1 ) + 1);
    if(randomNum.includes(num)===false){
      randomNum[countNum] = num;
      countNum++;
    }
  }
  //実際にbuttonの配下に1~9を入れる（表示させる）
  for(i=1; i<10; i++){
    var realNum = randomNum[i-1];
    document.getElementById("n" + i).textContent=realNum;

  }　
}

function timerstart(){
	var startTime = Date.now();
	var elapsedTime = 0;

	timer= setInterval(function(){
		elapsedTime = Date.now() - startTime;

		document.getElementById("stopwatch").textContent= elapsedTime / 1000;


	},10)

}










  //順番通り押せているかチェック

var count = 1;

function check(button){

	var pushNum = button.firstElementChild.textContent;
	console.log(pushNum);

	if(pushNum != count){
		document.getElementById("result").textContent="MISS!!"
		clearInterval(timer);
	}

	//押した数字が9かつ順番通りなら時間計測終了
	if(pushNum == 9 && count == 9){
		clearInterval(timer);

		document.getElementById("result").textContent="FINISH!!"
	}

	count++;


}
