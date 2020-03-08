function setTimeTable(){

    var pathDay5_2 = new Date("2020/02/18");
    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    var rows ="";
    rows += "<tr>";

    rows += "<td>";
    rows += "1/13";
    rows += "</td>";

    rows += "<td>";
    rows += "メルトール海峡北";
    rows += "</td>";

    rows += "<td>";
    rows += "南[昼]";
    rows += "</td>";

    rows += "<td>";
    rows += "湾[夕]";
    rows += "</td>";

    rows += "<td>";
    rows += "北[夜]";
    rows += "</td>";

    rows += "<td>";
    rows += "🦈";
    rows += "</td>";

    rows += "</tr>";
    $('#day1 tbody').append(rows);
}

$this.setTimeTable();