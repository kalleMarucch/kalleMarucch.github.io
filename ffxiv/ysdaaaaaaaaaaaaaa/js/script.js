// var
var limitBreakGauge1 = false;
var limitBreakGauge2 = false;
var limitBreakGauge3 = false;

var limitBreakGauge = 0;

// show modal first
$('#my_modal').modal('show');

// limit break bar
function chargeLimitBreak(){

    if(!limitBreakGauge1){
        $("#limit_break_bar1").css({'width':'1%'});
        $("#limit_break_bar1").css({'width':'100%'});
        limitBreakGauge1 = true;
        limitBreakGauge++;
        playLimitBreakCharged();
    }else if(!limitBreakGauge2){
        $("#limit_break_bar2").css({'width':'1%'});
        $("#limit_break_bar2").css({'width':'100%'});
        limitBreakGauge2 = true;
        limitBreakGauge++;
        playLimitBreakCharged();
    }else if(!limitBreakGauge3){
        $("#limit_break_bar3").css({'width':'1%'});
        $("#limit_break_bar3").css({'width':'100%'});
        limitBreakGauge3 = true;
        limitBreakGauge++;
        playLimitBreakCharged();
    }
}


// input for limit break charge...
$(function () {
    $(document).on('keyup','#input_textarea',function(){

        var count = $('#input_textarea').val().length;
        $('#count_textarea').text(count);

        var n = Math.random();
        if(n < (0.014 * 4)){
            chargeLimitBreak();
        }
    });
})

// generate tweet button
function ysdaaaaaaaaaaaaaa(){
    var odder_otter = "よしだ？";
    var cherry_bomb = "よしだあああ！";
    var dalamud = "よしだああああああああああああああ！";
    var ff14Tag = "#FF14 #FFXIV";
    var hpbdYsdTag = "#吉P生誕祭";
    var userString = document.getElementById('input_textarea').value;
    var userStringLength = userString.length;
    var userEmotion = document.getElementById('form1').emotion.value;

    var ysdaaa = "";

    if(userStringLength >= 1){
        ysdaaa = " ";
    }

    switch(userEmotion){
        case '1': ysdaaa += odder_otter; break;
        case '2': ysdaaa += cherry_bomb; break;
        case '3': ysdaaa += dalamud; break;
        case '4': ysdaaa += raubahn(userStringLength, 120); break;
        case '5': ysdaaa += raubahn(userStringLength, 110); break;
        default: ysdaaa += dalamud;
    }

    var ysdaaaaaaaaaaaaaa = userString + ysdaaa + " " + ff14Tag;

    if(userEmotion == '5') ysdaaaaaaaaaaaaaa += " " + hpbdYsdTag;

    var tweetButton = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-lang="ja" data-show-count="false" data-url="#" data-text="' + ysdaaaaaaaaaaaaaa + '">Tweet</a>';

    $('#tweet_button_area').html(tweetButton);
    twttr.widgets.load();
    //document.getElementById('output_textarea').value = ysdaaaaaaaaaaaaaa + ":" + userEmotion + ":"+ ysdaaaaaaaaaaaaaa.length;
};

// option: raubahn
function raubahn(strLength, maxStrLength){
    var ysda = "よしだ";

    for( var i = 0; i <= (maxStrLength - strLength); i++){
        ysda+="あ";
    }

    ysda+="!";

    return ysda;
}

// play:limit break charge
function playLimitBreakCharged(){
    var sound = document.getElementById('sound_limit_break_charged');
    sound.load();
    sound.play();
};

// play:limit break actevated
function playLimitBreakActivated(){
    var sound = document.getElementById('sound_limit_break_activated');
    sound.load();
    sound.play();
};

// limit break !!!
document.getElementById('button_ysda').onclick = function() {
    var maxChargeLimitBreak = function(){
        chargeLimitBreak();
        var id = setTimeout(maxChargeLimitBreak, 1000);
        if(limitBreakGauge > 2){　
            clearTimeout(id);
            setTimeout(function(){
                playLimitBreakActivated();
                ysdaaaaaaaaaaaaaa();
            }, 1000);
        }
    }
    maxChargeLimitBreak();
};
