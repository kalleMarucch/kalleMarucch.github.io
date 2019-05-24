$(function () {
    var day1 = new Date('2010/9/30 00:00:00');
    var day2 = new Date();
    var dayDiff = Math.floor((day2.getTime() - day1.getTime()) / (1000 * 60 * 60 * 24));

    for (let index = 0; index < 7; index++) {

        var day3 = new Date(day2.getTime());
        day3.setDate(day3.getDate() + index);
        var day3Week = ["日", "月", "火", "水", "木", "金", "土"][day3.getDay()];

        var day4 = (day3.getMonth() + 1) + "/" + day3.getDate();

        var contentArray = isFrontlineContent((dayDiff + index) % 3);

        $('tbody').append(
            $('<tr></tr>')
                //.append($('<td></td>').text(index + 1))
                .append($('<td></td>')
                    .append($('<small></small>').text(day4))
                    .append('<br>')
                    .append($('<small></small>').text('(' + day3Week + ')'))
                )
                .append($('<td></td>')
                    .append($('<small></small>').text(contentArray[1]))
                    .append('<br>')
                    .append($('<small></small>').text(contentArray[0]))
                )
        );
    }
});

function isFrontlineContent(val) {
    var array = [];

    switch (val) {
        case 0:
            array.push("フィールド・オブ・グローリー");
            array.push("砕氷戦");
            break;
        case 1:
            array.push("外縁遺跡群");
            array.push("制圧戦");
            break;
        case 2:
            array.push("シールロック");
            array.push("争奪戦");
            break;
        default:
            array.push('none');
            array.push("none");
    }
    return array;
}