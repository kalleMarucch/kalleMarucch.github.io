/*
基本
・日本時間(JST) 1970/1/1 00:00:00を、ET 1/1/1 00:00:00としています。
・ET24時間(1440分)＝協定世界時(UTC)70分としています。
・1年＝12月、1月＝32日、1日＝24時間の歴法を採用しています。
・ET1時間＝UTC3分弱、ET1分＝UTC3秒弱、も覚えとくといいかも？

注意事項
・ET年の値については想定値です。ゲーム内では、第七星暦の5年？固定と思われます。
・歴法は参考サイトを元に決定していますが、旧版（根性版）にてゲーム内で語られていたものを元にしているようです。新生版には情報はありません。
・月齢についても同様ですが、旧版（根性版）でもゲーム内の言及がないように見受けられます。
・あなたのPCの時間を元に計算をしています。PCの時間がズレていると、エオルゼア時間（以下ET）にもズレが発生します。
・PC時間を設定しなおした後、ブラウザの再起動が必要なケースがあります。

参考サイト
FF14 Online Wiki様　五紀歴
FF14用語辞典様　五紀暦
elemen様　エオルゼア時計
*/


var EorzeaClock = (function(){
    var _name = 'kazushi',
    _age = 36;

    function _init() {
        // 何らかの処理
        var nowDate = new Date;
    }

    function _getName() {
        return _name;
    }

    function _getAge() {
        return _age;
    }

    function _doSomething() {
        //・・・
    }

    // 初期化を実行する
    _init();

    // 公開APIを返す
    return {
        getName: _getName,
        getAge : _getAge
    };
}());

document.getElementById("EorzeaClockArea").innerHTML = EorzeaClock.getName();

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