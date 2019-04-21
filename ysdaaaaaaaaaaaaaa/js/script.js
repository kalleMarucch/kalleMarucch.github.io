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
	document.getElementById('soundLimitBreakCharged').play();
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

// input for limit break charge...
var limitBreakGauge = 0;
function limitBreakBar(value){
    switch(value){
        case 1:
            document.getElementById('progress-bar').setAttribute('style', 'width: 33%');
            break;
        case 2:
            document.getElementById('progress-bar').setAttribute('style', 'width: 66%');
            break;
        case 3:
            document.getElementById('progress-bar').setAttribute('style', 'width: 100%');
            break;
        default:
            document.getElementById('progress-bar').setAttribute('style', 'width: 0%');
    }

}


document.getElementById('inputTextarea1').onkeyup = function() {
    var n = Math.random()
    if((limitBreakGauge < 3) && (n < 0.1)){
        limitBreakGauge++;
        limitBreakCharged();
        limitBreakBar(limitBreakGauge);
    }
}
