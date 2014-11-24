var runnerHistory1 = [];
var runnerHistory2 = [];
var runnerHistroy3 = [];
var runnerHistory4 = [];
var runnerHistroy5 = [];

function padding(time){
    var value = time.toString();
    String("00:00.000" + n).slice(-5);
}

function process(button) {
    if (button == "update1") {
        var information = ['firstName1', 'lastName1', 'firstLap1', 'secondLap1', 'totalTime1', 'runnerName1', 'splitOne1', 'splitTwo1', 'splitThree1', 'totalTimeRunner1',
            'runnerHistory1'
        ];
        update(information);
    } else if (button == "update2") {
        var information = ['firstName2', 'lastName2', 'firstLap2', 'secondLap2', 'totalTime2', 'runnerName2', 'splitOne2', 'splitTwo2', 'splitThree2', 'totalTimeRunner2',
            'runnerHistory2'
        ];
        update(information);
    } else if (button == "update3") {
        var information = ['firstName3', 'lastName3', 'firstLap3', 'secondLap3', 'totalTime3', 'runnerName3', 'splitOne3', 'splitTwo3', 'splitThree3', 'totalTimeRunner3',
            'runnerHistory3'
        ];
        update(information);
    } else if (button == "update4") {
        var information = ['firstName4', 'lastName4', 'firstLap4', 'secondLap4', 'totalTime4', 'runnerName4', 'splitOne4', 'splitTwo4', 'splitThree4', 'totalTimeRunner4',
            'runnerHistory4'
        ];
        update(information);
    } else if (button == "update5") {
        var information = ['firstName5', 'lastName5', 'firstLap5', 'secondLap5', 'totalTime5', 'runnerName5', 'splitOne5', 'splitTwo5', 'splitThree5', 'totalTimeRunner5',
            'runnerHistory5'
        ];
        update(information);
    } else if (button == "delete1") {
        var information = ['runnerName1', 'splitOne1', 'splitTwo1', 'splitThree1', 'totalTimeRunner1', 'firstName1', 'lastName1', 'firstLap1', 'secondLap1', 'totalTime1'];
        erase(information);
    } else if (button == "delete2") {
        var information = ['runnerName2', 'splitOne2', 'splitTwo2', 'splitThree2', 'totalTimeRunner2', 'firstName2', 'lastName2', 'firstLap2', 'secondLap2', 'totalTime2'];
        erase(information);
    } else if (button == "delete3") {
        var information = ['runnerName3', 'splitOne3', 'splitTwo3', 'splitThree3', 'totalTimeRunner3', 'firstName3', 'lastName3', 'firstLap3', 'secondLap3', 'totalTime3'];
        earse(information);
    } else if (button == "delete4") {
        var information = ['runnerName4', 'splitOne4', 'splitTwo4', 'splitThree4', 'totalTimeRunner4', 'firstName4', 'lastName4', 'firstLap4', 'secondLap4', 'totalTime4'];
        delete(information);
    } else if (button == "delete5") {
        var information = ['runnerName5', 'splitOne5', 'splitTwo5', 'splitThree5', 'totalTimeRunner5', 'firstName5', 'lastName5', 'firstLap5', 'secondLap5', 'totalTime5'];
        erase(information);
    } else if (button == "restore1") {
        var information = ['firstName1', 'lastName1', 'firstLap1', 'secondLap1', 'totalTime1'];
        revert(runnerHistory1, information);
    } else if (button == "restore2") {
        var information = ['firstName2', 'lastName2', 'firstLap2', 'secondLap2', 'totalTime2'];
        revert(runnerHistory2, information);
    } else if (button == "restore3") {
        var information = ['firstName3', 'lastName3', 'firstLap3', 'secondLap3', 'totalTime3'];
        revert(runnerHistory3, information);
    } else if (button == "restore4") {
        var information = ['firstName4', 'lastName4', 'firstLap4', 'secondLap4', 'totalTime4'];
        revert(runnerHistory4, information);
    } else if (button == "restore5") {
        var information = ['firstName5', 'lastName5', 'firstLap5', 'secondLap5', 'totalTime5'];
        revert(runnerHistory5, information);
    }
}

function update(information) {
    var fullName = (document.getElementById(information[0]).value + " " + document.getElementById(information[1]).value);
    var firstLapSeconds = parseFloat(document.getElementById(information[2]).value.split(":")[0]) * 60 + parseFloat(document.getElementById(information[2]).value.split(":")[1]);
    var secondLapSeconds = parseFloat(document.getElementById(information[3]).value.split(":")[0]) * 60 + parseFloat(document.getElementById(information[3]).value.split(":")[1]);
    var thirdLapSeconds = parseFloat(document.getElementById(information[4]).value.split(":")[0]) * 60 + parseFloat(document.getElementById(information[4]).value.split(":")[1]);

    var splitOneMinuites = parseInt(document.getElementById(information[2]).value.split(":")[0]).toString();
    var splitOneSeconds = parseFloat(document.getElementById(information[2]).value.split(":")[1]).toString();
    var splitOne = splitOneMinuites + ":" + splitOneSeconds;

    var sFDiff = parseFloat(secondLapSeconds - firstLapSeconds);
    splitTwoMinuites = parseInt(sFDiff / 60);
    splitTwoSeconds = parseInt(sFDiff % 60);
    var splitTwo = splitTwoMinuites.toString() + ":" + splitTwoSeconds.toString();

    var tSDiff = parseFloat(thirdLapSeconds - secondLapSeconds);
    splitTwoMinuites = parseInt(tSDiff / 60);
    splitTwoSeconds = parseInt(tSDiff % 60);
    var splitThree = splitTwoMinuites.toString() + ":" + splitTwoSeconds.toString();

    var totalMinuites = parseInt(document.getElementById(information[4]).value.split(":")[0]).toString();
    var totalSeconds = parseFloat(document.getElementById(information[4]).value.split(":")[1]).toString();
    var totalTime = totalMinuites + ":" + totalSeconds;

    if (fullName == " ") {
        document.getElementById(information[5]).innerHTML = "Error";
    } else {
        document.getElementById(information[5]).innerHTML = fullName;
    }
    if (splitOneMinuites == "NaN" || splitOneSeconds == "NaN") {
        document.getElementById(information[6]).innerHTML = "Error";
    } else {
        document.getElementById(information[6]).innerHTML = splitOne;
    }
    if (splitTwoMinuites == "NaN" || splitTwoSeconds == "NaN") {
        document.getElementById(information[7]).innerHTML = "Error";
    } else {
        document.getElementById(information[7]).innerHTML = splitTwo;
    }
    if (splitOneMinuites == "NaN" || splitOneSeconds == "NaN") {
        document.getElementById(information[8]).innerHTML = "Error";
    } else {
        document.getElementById(information[8]).innerHTML = splitThree;
    }
    if (totalMinuites == "NaN" || totalSeconds == "NaN") {
        document.getElementById(information[9]).innerHTML = "Error";
    } else {
        document.getElementById(information[9]).innerHTML = totalTime;
    }

    var data = [document.getElementById(information[0]).value, document.getElementById(information[1]).value, document.getElementById(information[2]).value, document.getElementById(information[3]).value, document.getElementById(information[4]).value];
   
    if(information[10] == 'runnerHistory1'){
        runnerHistory1.push(data);
    }else if(information[10] == 'runnerHistory2'){
        runnerHistory2.push(data);
    }else if(information[10] == 'runnerHistory3'){
        runnerHistory3.push(data);
    }else if(information[10] == 'runnerHistory4'){
        runnerHistory4.push(data);
    }else if(information[10] == 'runnerHistory3'){
        runnerHistory5.push(data);
    }
}


function erase(information) {
    document.getElementById(information[0]).innerHTML = "";
    document.getElementById(information[1]).innerHTML = "";
    document.getElementById(information[2]).innerHTML = "";
    document.getElementById(information[3]).innerHTML = "";
    document.getElementById(information[4]).innerHTML = "";
    document.getElementById(information[5]) = "";
    document.getElementById(information[6]) = "";
    document.getElementById(information[7]) = "";
    document.getElementById(information[8]) = "";
    document.getElementById(information[9]) = "";
}

function revert(runnerHistory, information) {
    var history = runnerHistory.pop();
    document.getElementById(information[0]).value = history[0];
    document.getElementById(information[1]).value = history[1];
    document.getElementById(information[2]).value = history[2];
    document.getElementById(information[3]).value = history[3];
    document.getElementById(information[4]).value = history[4];
}