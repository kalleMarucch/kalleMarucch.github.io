function zeroPadding(NUM, LEN){
	return ( Array(LEN).join('0') + NUM ).slice( -LEN );
}

function showClock1() {
    var nowTime = new Date();
    var nowHour = zeroPadding(nowTime.getHours(),2);
    var nowMin  = zeroPadding(nowTime.getMinutes(),2);
    var nowSec  = zeroPadding(nowTime.getSeconds(),2);
    var msg = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}

showClock1();

setTimeout(function () {
    showClock1();  // 最初のジャスト1秒表示
    setInterval(showClock1, 1000); // 以降のジャスト1秒表示
}, 1000 - (new Date()).getUTCMilliseconds());