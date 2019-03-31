function zeroPadding(NUM, LEN){
	return ( Array(LEN).join('0') + NUM ).slice( -LEN );
}

function showClock1() {
    var nowTime = new Date();
    var nowYear = nowTime.getFullYear();
    var nowMonth = nowTime.getMonth() + 1;
    var nowDay = nowTime.getDate();
    var nowHour = zeroPadding(nowTime.getHours(),2);
    var nowMin  = zeroPadding(nowTime.getMinutes(),2);
    var nowSec  = zeroPadding(nowTime.getSeconds(),2);
    var nowMil  = zeroPadding(nowTime.getMilliseconds(),3);
    var msg = "(" + nowYear + "/" + nowMonth + "/" + nowDay + ") " + nowHour + ":" + nowMin + ":" + nowSec + ":" + nowMil;
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}

showClock1();

setTimeout(function () {
    showClock1();  // 最初のジャスト1秒表示
    setInterval(showClock1, 10); // 以降のジャスト1秒表示
}, 10 - (new Date()).getUTCMilliseconds());