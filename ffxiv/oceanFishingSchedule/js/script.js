function setTimeTable(){

    var pathDay5_2 = new Date("2020/02/18");
    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    var rows ="";
    rows += "<tr>";

    rows += "</tr>";
    $('#day1 tbody').append(rows);
}

$this.setTimeTable();