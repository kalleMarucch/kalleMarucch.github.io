// var
var limitBreakGauge1 = false;
var limitBreakGauge2 = false;
var limitBreakGauge3 = false;

// show modal first
$('#myModal').modal('show');

// limit break bar
function chargeLimitBreak(){

    if(!limitBreakGauge1){
        $("#limit_break_bar1").css({'width':'1%'});
        $("#limit_break_bar1").css({'width':'100%'});
        limitBreakGauge1 = true;
        playLimitBreakCharged();
    }else if(!limitBreakGauge2){
        $("#limit_break_bar2").css({'width':'1%'});
        $("#limit_break_bar2").css({'width':'100%'});
        limitBreakGauge2 = true;
        playLimitBreakCharged();
    }else if(!limitBreakGauge3){
        $("#limit_break_bar3").css({'width':'1%'});
        $("#limit_break_bar3").css({'width':'100%'});
        limitBreakGauge3 = true;
        playLimitBreakCharged();
    }
}

// input for limit break charge...
$(function () {
    $(document).on('keyup','#inputTextarea1',function(){
        var n = Math.random();
        if(n < 0.1){
            chargeLimitBreak();
        }
    });
})

// generate tweet button
function ysdaaaaaaaaaaaaaa(){
    var ysda1 = "よしだああああああああああああああ！";
    var ff14Tag = "#FF14 #FFXIV";
    var UserString = document.getElementById('inputTextarea1').value;
    var ysdaaaaaaaaaaaaaa = UserString + " " + ysda1 + " " + ff14Tag;

    var tweetButton = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-lang="ja" data-show-count="false" data-url="#" data-text="' + ysdaaaaaaaaaaaaaa + '">Tweet</a>';

    $('#twbtn').html(tweetButton);
    twttr.widgets.load();
    //document.getElementById('outputTextarea1').value = ysdaaaaaaaaaaaaaa;
};

// play:limit break charge
function playLimitBreakCharged(){
    var sound = document.getElementById('soundLimitBreakCharged');
    sound.load();
    sound.play();
};

// play:limit break actevated
function playLimitBreakActivated(){
	document.getElementById('soundLimitBreakActivated').play();
};

// limit break !!!
document.getElementById('btn-ysda1').onclick = function() {
    playLimitBreakActivated();
    ysdaaaaaaaaaaaaaa();
};
