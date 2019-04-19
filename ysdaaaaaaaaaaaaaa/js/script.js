function ysdaaaaaaaaaaaaaa(){
    var ysda1 = "よしだああああああああああああああ！";
    var ff14Tag = "#FF14 #FFXIV";
    var UserString = document.getElementById('formControlTextarea1').value;
    var ysdaaaaaaaaaaaaaa = UserString + " " + ysda1 + " " + ff14Tag;

    document.getElementById('outputTextarea1').value = ysdaaaaaaaaaaaaaa;
};

document.getElementById("btn-ysda1").onclick = function() {
    ysdaaaaaaaaaaaaaa();
};

(function (window, $) {
    'use strict';

    $.fn.useSound = function (_event, _id) {
      var se = $(_id);
      this.on(_event, function(){
        se[0].currentTime = 0;
        se[0].play();
      });
      return this;
    };

  })(this, this.jQuery);

  $('.btn input#btn-ysda1').useSound('mousedown touchstart', '#sound');