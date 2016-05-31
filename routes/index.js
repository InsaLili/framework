/**
 * Created by Lili on 09/04/15.
 */
/* GET Userlist page. */

var express = require('express');
var router = express.Router();
var group1 = [];
var group2 = [];
var group3 = [];
var group4 = [];
//store all groups' averages
var allData = [];
//flag of how many groups update data
var allGroupNum = [0,0,0,0];
router.get('/upload', function(req, res){
	console.log("upload");
    fetchData(req.query);
});
//get one player data from url
function fetchData(data){
    console.log(data);
//    parse data
    var group = parseInt(data.group);
    var player = data.player;
    var light = data.light.split('_');
    var wind = data.wind.split('_');
    var tem = data.tem.split('_');
    var nitrate = data.nitrate.split('_');

//    store this player's data by different type of measure
    var groupData = [];
    groupData[0] = light;
    groupData[1] = wind;
    groupData[2] = tem;
    groupData[3] = nitrate;
    console.log("group number"+group);
//    write them to corresponding group array
//    as soon as one group is completed, calculate the average, meanwhile add the group number
    switch (group){
        case 1:
            group1[player-1] = groupData;
            console.log(group1);
            if((typeof group1[0] !== 'undefined')&&(typeof group1[1] !== 'undefined')&&(typeof group1[2] !== 'undefined')){
                averageData(group1, group);
                allGroupNum[0]=1;
            }
            break;
        case 2:
            group2[player-1] = groupData;
            console.log(group2);
            if((typeof group2[0] !== 'undefined')&&(typeof group2[1] !== 'undefined')&&(typeof group2[2] !== 'undefined')){
                averageData(group2, group);
                allGroupNum[1]=1;
            }
            break;
        case 3:
            group3[player-1] = groupData;
            console.log(group3);
            if((typeof group3[0] !== 'undefined')&&(typeof group3[1] !== 'undefined')&&(typeof group3[2] !== 'undefined')){
                averageData(group3, group);
                allGroupNum[2]=1;
            }
            break;
        case 4:
            group4[player-1] = groupData;
            console.log(group4);
            if((typeof group4[0] !== 'undefined')&&(typeof group4[1] !== 'undefined')&&(typeof group4[2] !== 'undefined')){
                averageData(group4, group);
                allGroupNum[3]=1;
            }
            break;
    }
//    when all groups have updated their data, calculate the average of groups. The average group is group n°5.
    var sum = 0;
    for( var i = 0; i < allGroupNum.length; i++ ){
        sum += allGroupNum[i]; 
    }
    if(sum == 4){
        averageAllData(allData, 5);
    }
}

//calculate the average of one group
function averageData(group, groupNum){
    console.log("average data of one group");
    console.log("group number"+groupNum);
    console.log(group);
    var player1 = group[0];
    var player2 = group[1];
    var player3 = group[2];

    var data=[];
//    i means each type of measure, 1=light, 2=wind, 3=tem, 4=nitrate
    for(var i=0; i<4; i++){
        var location=[];
//        j means each location. We have five locations to update
        for(var j=0; j<5; j++){
//            get one measure result on one location of three players, then put them into an array
            var value = [parseFloat(player1[i][j]), parseFloat(player2[i][j]), parseFloat(player3[i][j])];
            var count = 0;
            var totalValue = 0;
//            if value isNaN, exclude it
            for(var k=0; k<value.length; k++){
                if(isNaN(value[k])){
                    value[k]=0;
                }else{
                    totalValue += value[k];
                    count++;
                }
            }
            if(count == 0){
                location[j] = "X";
            }else{
                var avgValue = totalValue/count;
//                set the format of each measure result
                switch (i){
                    case 0:
                        location[j] = Math.round(avgValue)+'Lux';
                        break;
                    case 1:
                        location[j] = avgValue.toFixed(1)+'km/h';
                        break;
                    case 2:
                        location[j] = avgValue.toFixed(1)+'°C';
                        break;
                    case 3:
                        location[j] = avgValue.toFixed(1)+'mg/L';
                        break;
                }
            }
        }
//        data[i] contains each location's average of i type of measure
//        data contains all measure result average on all locations of one group
        data[i] = location;
    }
    console.log("average");
    console.log(data);
    allData[groupNum-1] = data;
    console.log("all data");
    console.log(allData);
    uploadDB(groupNum, data);

}

//calculate the average of one group
function averageAllData(group, groupNum){
    console.log("average data for all groups");
    console.log("group number"+groupNum);
    console.log(group);
    var group1 = group[0];
    var group2 = group[1];
    var group3 = group[2];
    var group4 = group[3];

    var data=[];
//    i means each type of measure, 1=light, 2=wind, 3=tem, 4=nitrate
    for(var i=0; i<4; i++){
        var location=[];
//        j means each location. We have five locations to update
        for(var j=0; j<5; j++){
//            get one measure result on one location of three players, then put them into an array
            var value = [parseFloat(group1[i][j]), parseFloat(group2[i][j]), parseFloat(group3[i][j]), parseFloat(group4[i][j])];
            var count = 0;
            var totalValue = 0;
//            if value isNaN, exclude it
            for(var k=0; k<value.length; k++){
                if(isNaN(value[k])){
                    value[k]=0;
                }else{
                    totalValue += value[k];
                    count++;
                }
            }
            if(count == 0){
                location[j] = "X";
            }else{
                var avgValue = totalValue/count;
//                set the format of each measure result
                switch (i){
                    case 0:
                        location[j] = Math.round(avgValue)+'Lux';
                        break;
                    case 1:
                        location[j] = avgValue.toFixed(1)+'km/h';
                        break;
                    case 2:
                        location[j] = avgValue.toFixed(1)+'°C';
                        break;
                    case 3:
                        location[j] = avgValue.toFixed(1)+'mg/L';
                        break;
                }
            }
        }
//        data[i] contains each location's average of i type of measure
//        data contains all measure result average on all locations of one group
        data[i] = location;
    }
    console.log("average");
    console.log(data);
    uploadDB(groupNum, data);
}


//put one group's data into database
function uploadDB(groupNum, data){
    console.log("update database");
//    i means each location
    for(var i=0; i<5; i++){
//        as db.get won't be executed immediately, wrap with an anonymous function to store i in e
        (function(e){
            var locationNum = e+1;
            db.get('measure/'+groupNum+'/'+locationNum).then(function(doc) {
                console.log("locationNum = "+locationNum);
                return db.put({
                    group: groupNum,
                    location: locationNum,
                    Light: data[0][e],
                    Wind: data[1][e],
                    Temperature: data[2][e],
                    PH: data[3][e]
                }, 'measure/'+groupNum+'/'+locationNum, doc._rev);
            });
        })(i);
    }
}
module.exports = router;

