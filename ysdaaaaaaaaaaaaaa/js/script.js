// main
function ysdaaaaaaaaaaaaaa(){
    var ysda1 = "よしだああああああああああああああ！";
    var ff14Tag = "#FF14 #FFXIV";
    var UserString = document.getElementById('inputTextarea1').value;
    var ysdaaaaaaaaaaaaaa = UserString + " " + ysda1 + " " + ff14Tag;

    var button = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-lang="ja" data-show-count="false" data-url="#" data-text="' + ysdaaaaaaaaaaaaaa + '">Tweet</a>';
    $('#twbtn').html(button);
    twttr.widgets.load();
    //document.getElementById('outputTextarea1').value = ysdaaaaaaaaaaaaaa;
};

// show modal first
$('#myModal').modal('show');

// sound limit break charge
function limitBreakCharged(){
    var sound = document.getElementById('soundLimitBreakCharged');
    sound.load();
    sound.play();
};

// sound limit break actevated
function limitBreakActivated(){
	document.getElementById('soundLimitBreakActivated').play();
};

// limit break !!!
document.getElementById('btn-ysda1').onclick = function() {
    limitBreakActivated();
    ysdaaaaaaaaaaaaaa();
};

// limit break bar progress
var limitBreakGauge = 0;
function limitBreakBar(value){
    var bar = document.getElementById('progress-bar');
    switch(value){
        case 1:
            bar.style.width =  "33%";
            break;
        case 2:
            bar.style.width =  "66%";
            break;
        case 3:
            bar.style.width =  "100%";
            break;
        default:
            bar.style.width =  "0%";
    }
}

// limit break bar check
$(document).ready(function() {
    $('#progress-bar').on('DOMSubtreeModified propertychange', function() {
        $("#progress-bar").load(location.href + " #progress-bar");
    });
});

// input for limit break charge...
document.getElementById('inputTextarea1').onkeyup = function() {
    var n = Math.random()
    if((limitBreakGauge < 3) && (n < 0.08)){
        limitBreakGauge++;
        limitBreakCharged();
        limitBreakBar(limitBreakGauge);
    }
}
