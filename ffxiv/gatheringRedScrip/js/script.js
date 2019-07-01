function setGatheringTimeTable(fileName){
    $.getJSON("data/" + fileName + ".json", function (json) {

        var rows = "";
        for(i = 0; i < json.length; i++){
            rows += '<tr>';
            rows += '<td>';
            rows += '<input type="checkbox" ' + json[i][0] + '>';
            rows += '</td>';
            for (j = 1; j < json[i].length; j++) {
                rows += '<td>';
                rows += json[i][j];
                rows += '</td>';
            }
            rows += '</td>';
        }

        $('#' + fileName + ' tbody').append(rows);

    });
};

setGatheringTimeTable('miner5');
setGatheringTimeTable('botanist5');
setGatheringTimeTable('gathering5');
setGatheringTimeTable('miner4');
setGatheringTimeTable('botanist4');
setGatheringTimeTable('gathering4');
setGatheringTimeTable('miner3');
setGatheringTimeTable('botanist3');