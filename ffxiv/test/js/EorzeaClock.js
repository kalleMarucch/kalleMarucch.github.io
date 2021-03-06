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



var EorzeaClock = function(){
    const eorzeaStandardYear = 12,
    eorzeaStandardMonth = 32,
    eoraezStandardDates = 24,
    eorzeaStandardHours = 70,
    eorzeaStandardMinutes = 60,
    eorzeaStandardSeconds = 60;

    var
    _eorzeaTime = 0,
    _eorzeaYear = 0,
    _eorzeaMonth = 0,
    _eorzeaDate = 0,
    _eorzeaHours = 0,
    _eorzeaMinutes = 0,
    _eorzeaSeconds = 0;

    function _init() {
        // 何らかの処理
        var ratioRealToGame = (60 * 24 / 70);
        var nowDate = new Date;
        var eorzeaTime = Math.floor(nowDate.getTime() / 1000);
        _eorzeaTime = nowDate.getTime();
        var eorzeaMinutes = eorzeaTime * eorzeaStandardSeconds;

        _eorzeaYear = eorzeaTime / (365 * 24 * 60 * 60);
        var delta = (eorzeaTime * ratioRealToGame);
        var gameSecond = (delta % 60) | 0; delta -= gameSecond; delta /= 60.0;
        var gameMinute = (delta % 60) | 0; delta -= gameMinute; delta /= 60.0;
        var gameHour = (delta % 24) | 0; delta -= gameHour; delta /= 24.0;
        var gameDay = (delta % 32) | 0; delta -= gameDay; delta /= 32.0;
        var gameMonth = (delta % 12) | 0; delta -= gameMonth; delta /= 12.0;
        var gameYear = delta | 0;
        gameDay++;
        gameMonth++;

        _eorzeaYear = gameYear;
    _eorzeaMonth = gameMonth;
    _eorzeaDate = gameDay;
    _eorzeaHours = gameHour;
    _eorzeaMinutes = gameMinute;
    _eorzeaSeconds = gameSecond;
    }

    function _getYear() {
        return _eorzeaYear;
    }

    function _getMonth() {
        return _eorzeaMonth;
    }

    function _getDate() {
        return _eorzeaDate;
    }

    function _getHours() {
        return _eorzeaHours;
    }

    function _getMinutes() {
        return _eorzeaMinutes;
    }

    function _getSeconds() {
        return _eorzeaSeconds;
    }

    function _doSomething() {
        //・・・
    }

    function _showAll(){
        var msg = "";
        msg += "time: " + _eorzeaTime;
        msg += "<br>";
        msg += "year: " + _eorzeaYear;
        msg += "<br>";
        msg += "month: " + _eorzeaMonth;
        msg += "<br>";
        msg += "date: " + _eorzeaDate;
        msg += "<br>";
        msg += "hours: " + _eorzeaHours;
        msg += "<br>";
        msg += "minutes: " + _eorzeaMinutes;
        msg += "<br>";
        msg += "seconds: " + _eorzeaSeconds;
        msg += "<br>";
        msg += "ET : " + _eorzeaYear + "/" + _eorzeaMonth + "/" + _eorzeaDate
            + " " + _eorzeaHours + ":" + _eorzeaMinutes + ":" + _eorzeaSeconds;
        msg += "<br>";
        return msg;
    }

    // 初期化を実行する
    _init();

    // 公開APIを返す
    return {
        getYear : _getYear,
        getMonth : _getMonth,
        getDate : _getDate,
        getHours : _getHours,
        getMinutes : _getMinutes,
        getSeconds : _getSeconds,
        showAll: _showAll
    };
};

function showFc(){
    var ec = new EorzeaClock();
    document.getElementById("Debug").innerHTML = ec.showAll();
    document.getElementById("EorzeaClockArea").innerHTML = ec.getYear();
}

showFc();

setTimeout(function () {
    showFc();  // 最初のジャスト1秒表示
    setInterval(showFc, 10); // 以降のジャスト1秒表示
}, 10 - (new Date()).getUTCMilliseconds());
