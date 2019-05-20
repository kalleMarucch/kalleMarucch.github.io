$(function () {
    var day1 = new Date('2010/9/30 00:00:00');
    var day2 = new Date();
    var today = day2.getFullYear() + "/" + (day2.getMonth()+1) + "/" + day2.getDate();
    var dayDiff = Math.floor((day2.getTime() - day1.getTime()) / (1000 * 60 * 60 * 24));

    var content1 = "";
    var content2 = "";
    switch(dayDiff % 3){
        case 0:
            content1 = "フィールド・オブ・グローリー";
            content2 = "（砕氷戦）";
            break;
        case 1:
            content1 = "外縁遺跡群";
            content2 = "（制圧戦）";
            break;
        case 2:
            content1 = "シールロック"
            content2 = "（争奪戦）";
            break;
        default:
    }
    $('#today').text(today);
    $('#pvpRouletteContent1').text(content1);
    $('#pvpRouletteContent2').text(content2);
});