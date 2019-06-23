function setGatheringTimeTable(fileName, checkboxChcecked){
    $.getJSON("data/" + fileName + ".json", function (json) {

        var rows = "";
        for(i = 0; i < json.length; i++){
            rows += '<tr>';
            rows += '<td>';
            if(checkboxChcecked){
                rows += '<input type="checkbox" checked>';
            }else{
                rows += '<input type="checkbox">';
            }
            rows += '</td>';
            for (j = 0; j < json[i].length; j++) {
                rows += '<td>';
                rows += json[i][j];
                rows += '</td>';
            }
            rows += '</td>';
        }

        $('#' + fileName + ' tbody').append(rows);

    });
};

setGatheringTimeTable('miner3', true);
setGatheringTimeTable('gathering3', true);