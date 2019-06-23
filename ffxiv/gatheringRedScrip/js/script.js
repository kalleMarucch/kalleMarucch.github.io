$(function() {
    $.getJSON("data/miner3.json", function (json) {

        var rows = "";
        for(i = 0; i < json.length; i++){
            rows += "<tr>";
            for (j = 0; j < json[i].length; j++) {
                alert(json[i][j]);
                rows += "<td>";
                rows += json[i][j];
                rows += "</td>"
            }
            rows += "</td>";
        }

        $('#miner3 tbody').append(rows);

    });
});
