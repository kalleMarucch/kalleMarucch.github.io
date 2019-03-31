function showClock1() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin  = nowTime.getMinutes();
    var nowSec  = nowTime.getSeconds();
    var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}

showClock1();

setTimeout(function () {
    showClock1();  // 最初のジャスト1秒表示
    setInterval(showClock1, 1000); // 以降のジャスト1秒表示
}, 1000 - (new Date()).getUTCMilliseconds());