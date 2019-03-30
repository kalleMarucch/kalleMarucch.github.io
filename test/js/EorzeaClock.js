var dt = new Date;

var EorzeaClock = (function(){
    var _name = 'kazushi',
        _age = 36;
    
    function _init() {
      // 何らかの処理
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

function showClock1() {
  var nowTime = new Date();
  var nowHour = nowTime.getHours();
  var nowMin  = nowTime.getMinutes();
  var nowSec  = nowTime.getSeconds();
  var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("RealtimeClockArea").innerHTML = msg; 
 }

 document.getElementById("EorzeaClockArea").innerHTML = EorzeaClock.getName();
 setInterval('showClock1()',1000);