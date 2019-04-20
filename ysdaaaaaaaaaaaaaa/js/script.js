function ysdaaaaaaaaaaaaaa(){
    var ysda1 = "よしだああああああああああああああ！";
    var ff14Tag = "#FF14 #FFXIV";
    var UserString = document.getElementById('inputTextarea1').value;
    var ysdaaaaaaaaaaaaaa = UserString + " " + ysda1 + " " + ff14Tag;

    document.getElementById('outputTextarea1').value = ysdaaaaaaaaaaaaaa;

    var button = '<a id="tweetButton" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-lang="ja" data-show-count="false" data-text="' + ysdaaaaaaaaaaaaaa + '">Tweet</a>';
    twttr.widgets.load();
    $('#twbtn').html(button);
    //document.getElementById('tweetButton').setAttribute('data-text', ysdaaaaaaaaaaaaaa);
};

function limitBreakCharged(){
	document.getElementById('soundLimitBreakCharged').play();
};

function limitBreakActivated(){
	document.getElementById('soundLimitBreakActivated').play();
};

$('#myModal').modal('show');

document.getElementById('btn-ysda1').onclick = function() {
    limitBreakActivated();
    ysdaaaaaaaaaaaaaa();
};

document.getElementById('inputTextarea1').onkeyup = function() {
    var n = Math.random()
    if(n < 0.1){
        limitBreakCharged();
    }
}
