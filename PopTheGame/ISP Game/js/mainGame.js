var canvas = document.getElementById('game');
var clicks = 0;
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");

$(document).ready(function() {
    $('#backBut').hide();
    ctx.fillStyle = '#FA6B05'
    ctx.font = "100px Jelly";
    ctx.fillText("POP!", 75, 200);

});



$('.play').click(function() {
    $('#menu').hide();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startLevelOne();
});

$('.credits').click(function() {
    $('#backBut').show();
    $('#playBut').hide();
    $('#creditsBut').hide();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#FA6B05'
    ctx.font = "23px Jelly";
    ctx.fillText("By Harrison Apitz-Grossman", 15, 200);

    ctx2.fillStyle = '#FA6B05'
    ctx2.font = "23px Jelly";
    ctx2.fillText("& Phillip Nadjafov", 60, 250);
});

$('.back').click(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    $('#playBut').show();
    $('#creditsBut').show();
    $('#backBut').hide();
    ctx.fillStyle = '#FA6B05'
    ctx.font = "100px Jelly";
    ctx.fillText("POP!", 75, 200);

});

function startLevelOne() {

    var radius2 = 0;
    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;

    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                startLevelTwo();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                startLevelOne();

            }
        }

    });


    $(document).ready(function() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext("2d");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 125;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

        var radius2 = 0;
        var centerX2 = canvas.width / 2;
        var centerY2 = canvas.height / 2;
        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
        ctx2.fillStyle = "#FA6B05";
        ctx2.fill();
        ctx2.lineWidth = 0;



        var ctx3 = canvas.getContext("2d");

        ctx3.font = "50px Jelly";
        ctx3.fillText("Level 1", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (radius2 >= 120 && radius2 <= 135) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            radius2 = radius2 + 1;
            var centerX2 = canvas.width / 2;
            var centerY2 = canvas.height / 2;
            var ctx2 = canvas.getContext("2d");
            ctx2.beginPath();
            ctx2.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
            ctx2.fillStyle = '#FA6B05';
            ctx2.fill();
            ctx2.lineWidth = 0;
            if (radius2 > 135) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 20);
    }



}

function startLevelTwo() {
    var radius2 = 0;
    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;

    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelThree();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                startLevelTwo();

            }
        }

    });


    $(document).ready(function() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext("2d");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 125;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

        var radius2 = 0;
        var centerX2 = canvas.width / 2;
        var centerY2 = canvas.height / 2;
        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
        ctx2.fillStyle = "#FA6B05";
        ctx2.fill();
        ctx2.lineWidth = 0;

        var ctx3 = canvas.getContext("2d");
        ctx3.font = "50px Jelly";
        ctx3.fillText("Level 2", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (radius2 >= 120 && radius2 <= 130) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;

            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            radius2 = radius2 + 1;
            var centerX2 = canvas.width / 2;
            var centerY2 = canvas.height / 2;
            var ctx4 = canvas.getContext("2d");
            ctx4.beginPath();
            ctx4.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
            ctx4.fillStyle = '#FA6B05';
            ctx4.fill();
            ctx4.lineWidth = 0;
            if (radius2 > 135) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 5);
    }


}

function startLevelThree() {


    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;
    var sideLength = 10;
    var xCoor = canvas.width / 2.0 - sideLength / 2.0;
    var yCoor = canvas.height / 2.0 - sideLength / 2.0;

    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelFour();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();

                startLevelThree();

            }
        }

    });


    $(document).ready(function() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext("2d");
        var bigSquareWidth = bigSquareHeight = 225;
        ctx.rect(canvas.width / 2.0 - bigSquareWidth / 2.0, canvas.height / 2.0 - bigSquareWidth / 2.0, bigSquareWidth, bigSquareWidth);
        ctx.stroke();

        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.rect(xCoor, yCoor, sideLength, sideLength);
        ctx2.fillStyle = '#FA6B05';
        ctx2.fill();

        var ctx3 = canvas.getContext("2d");
        ctx3.font = "50px Jelly";
        ctx3.fillText("Level 3", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (sideLength >= 220 && sideLength <= 235) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            sideLength++;
            var ctx2 = canvas.getContext("2d");
            ctx2.beginPath();
            ctx2.fillStyle = '#FA6B05';
            ctx2.rect(canvas.width / 2.0 - sideLength / 2.0, canvas.height / 2.0 - sideLength / 2.0, sideLength, sideLength);
            ctx2.fill();
            if (sideLength > 235) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 10);
    }
}

function startLevelFour() {
    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;
    var sideLength = 10;
    var xCoor = canvas.width / 2.0 - sideLength / 2.0;
    var yCoor = canvas.height / 2.0 - sideLength / 2.0;

    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelFive();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelFour();

            }
        }

    });

    $(document).ready(function() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext("2d");
        var bigSquareWidth = bigSquareHeight = 225;
        ctx.rect(canvas.width / 2.0 - bigSquareWidth / 2.0, canvas.height / 2.0 - bigSquareWidth / 2.0, bigSquareWidth, bigSquareWidth);
        ctx.stroke();

        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.rect(xCoor, yCoor, sideLength, sideLength);
        ctx2.fillStyle = '#FA6B05';
        ctx2.fill();

        var ctx3 = canvas.getContext("2d");
        ctx3.font = "50px Jelly";
        ctx3.fillText("Level 4", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (sideLength >= 220 && sideLength <= 235) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            sideLength++;
            var ctx2 = canvas.getContext("2d");
            ctx2.beginPath();
            ctx2.fillStyle = '#FA6B05';
            ctx2.rect(canvas.width / 2.0 - sideLength / 2.0, canvas.height / 2.0 - sideLength / 2.0, sideLength, sideLength);
            ctx2.fill();
            if (sideLength > 235) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 5);
    }
}

function startLevelFive() {

    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;
    var sideLength = 10;
    var xCoor = canvas.width / 2.0 - sideLength / 2.0;
    var yCoor = canvas.height / 2.0 - sideLength / 2.0;


    var lineOneX = canvas.width / 10;
    var lineOneY = canvas.height / 1.5;
    var lineTwoX = canvas.width - (canvas.width / 10);
    var lineTwoY = canvas.height / 1.5;
    var lineThreeX = canvas.width / 2;
    var lineThreeY = canvas.height / 3.5;

    var x1 = (canvas.width / 2.5) - 22;
    var y1 = lineOneY - 63;
    var x2 = (canvas.width - canvas.width / 2.5) + 22;
    var y2 = lineTwoY - 63;
    var x3 = lineThreeX;
    var y3 = (canvas.height / 2.1) - 25.5;


    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelSix();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();

                startLevelFive();

            }
        }

    });

    $(document).ready(function() {
        var canvas = document.getElementById('game');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(lineOneX, lineOneY);
            ctx.lineTo(lineTwoX, lineTwoY);
            ctx.lineTo(lineThreeX, lineThreeY);
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'black';
            ctx.stroke();

            var ctx2 = canvas.getContext('2d');

            ctx2.beginPath();
            ctx2.moveTo(x1, y1);
            ctx2.lineTo(x2, y2);
            ctx2.lineTo(x3, y3);
            ctx2.closePath();
            ctx2.fillStyle = '#FA6B05';

            ctx2.fill();
            ctx2.strokeStyle = '#FA6B05';
            ctx2.stroke();


        }

        var ctx3 = canvas.getContext("2d");
        ctx3.font = "50px Jelly";
        ctx3.fillStyle = '#FA6B05';
        ctx3.fillText("Level 5", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (y3 <= (canvas.height / 3.5) + 12.5 && y3 >= canvas.height / 3.5) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            x1--;
            y1++;
            x2++;
            y2++;
            y3--;

            var ctx4 = canvas.getContext('2d');

            ctx4.beginPath();
            ctx4.moveTo(x1, y1);
            ctx4.lineTo(x2, y2);
            ctx4.lineTo(x3, y3);
            ctx4.closePath();
            ctx4.fillStyle = '#FA6B05';

            ctx4.fill();
            ctx4.strokeStyle = '#FA6B05';
            ctx4.stroke();
            if (y3 < canvas.height / 3.5) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 10);
    }
}

function startLevelSix() {
    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;
    var sideLength = 10;
    var xCoor = canvas.width / 2.0 - sideLength / 2.0;
    var yCoor = canvas.height / 2.0 - sideLength / 2.0;


    var lineOneX = canvas.width / 10;
    var lineOneY = canvas.height / 1.5;
    var lineTwoX = canvas.width - (canvas.width / 10);
    var lineTwoY = canvas.height / 1.5;
    var lineThreeX = canvas.width / 2;
    var lineThreeY = canvas.height / 3.5;

    var x1 = (canvas.width / 2.5) - 22;
    var y1 = lineOneY - 63;
    var x2 = (canvas.width - canvas.width / 2.5) + 22;
    var y2 = lineTwoY - 63;
    var x3 = lineThreeX;
    var y3 = (canvas.height / 2.1) - 25.5;


    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelSeven();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();

                startLevelSix();

            }
        }

    });

    $(document).ready(function() {
        var canvas = document.getElementById('game');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(lineOneX, lineOneY);
            ctx.lineTo(lineTwoX, lineTwoY);
            ctx.lineTo(lineThreeX, lineThreeY);
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'black';
            ctx.stroke();

            var ctx2 = canvas.getContext('2d');

            ctx2.beginPath();
            ctx2.moveTo(x1, y1);
            ctx2.lineTo(x2, y2);
            ctx2.lineTo(x3, y3);
            ctx2.closePath();
            ctx2.fillStyle = '#FA6B05';

            ctx2.fill();
            ctx2.strokeStyle = '#FA6B05';
            ctx2.stroke();


        }

        var ctx3 = canvas.getContext("2d");
        ctx3.font = "50px Jelly";
        ctx3.fillStyle = '#FA6B05';
        ctx3.fillText("Level 6", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (y3 <= (canvas.height / 3.5) + 12.5 && y3 >= canvas.height / 3.5) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            x1--;
            y1++;
            x2++;
            y2++;
            y3--;

            var ctx4 = canvas.getContext('2d');

            ctx4.beginPath();
            ctx4.moveTo(x1, y1);
            ctx4.lineTo(x2, y2);
            ctx4.lineTo(x3, y3);
            ctx4.closePath();
            ctx4.fillStyle = '#FA6B05';

            ctx4.fill();
            ctx4.strokeStyle = '#FA6B05';
            ctx4.stroke();
            if (y3 < canvas.height / 3.5) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 5);
    }
}

function startLevelSeven() {
    var radius2 = 0;
    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;

    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelEight();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();

                startLevelSeven();

            }
        }

    });


    $(document).ready(function() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext("2d");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 125;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

        var radius2 = 0;
        var centerX2 = canvas.width / 2;
        var centerY2 = canvas.height / 2;
        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
        ctx2.fillStyle = "#FA6B05";
        ctx2.fill();
        ctx2.lineWidth = 0;



        var ctx3 = canvas.getContext("2d");

        ctx3.font = "50px Jelly";
        ctx3.fillText("Level 7", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (radius2 >= 124 && radius2 <= 130) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            radius2 = radius2 + 1;
            var centerX2 = canvas.width / 2;
            var centerY2 = canvas.height / 2;
            var ctx2 = canvas.getContext("2d");
            ctx2.beginPath();
            ctx2.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
            ctx2.fillStyle = '#FA6B05';
            ctx2.fill();
            ctx2.lineWidth = 0;
            if (radius2 > 135) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 1);
    }

}

function startLevelEight() {
    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;
    var sideLength = 10;
    var xCoor = canvas.width / 2.0 - sideLength / 2.0;
    var yCoor = canvas.height / 2.0 - sideLength / 2.0;

    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                startLevelNine();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();

                startLevelEight();

            }
        }

    });


    $(document).ready(function() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext("2d");
        var bigSquareWidth = bigSquareHeight = 225;
        ctx.rect(canvas.width / 2.0 - bigSquareWidth / 2.0, canvas.height / 2.0 - bigSquareWidth / 2.0, bigSquareWidth, bigSquareWidth);
        ctx.stroke();

        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.rect(xCoor, yCoor, sideLength, sideLength);
        ctx2.fillStyle = '#FA6B05';
        ctx2.fill();

        var ctx3 = canvas.getContext("2d");
        ctx3.fillStyle = '#FA6B05'
        ctx3.font = "50px Jelly";
        ctx3.fillText("Level 8", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (sideLength >= 225 && sideLength <= 230) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            sideLength += 1;
            var ctx2 = canvas.getContext("2d");
            ctx2.beginPath();
            ctx2.fillStyle = '#FA6B05';
            ctx2.rect(canvas.width / 2.0 - sideLength / 2.0, canvas.height / 2.0 - sideLength / 2.0, sideLength, sideLength);
            ctx2.fill();
            if (sideLength > 235) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 1);
    }
}

function startLevelNine() {
    var canvas = document.getElementById('game');
    var clicks = 0;
    var win = false;
    var sideLength = 10;
    var xCoor = canvas.width / 2.0 - sideLength / 2.0;
    var yCoor = canvas.height / 2.0 - sideLength / 2.0;


    var lineOneX = canvas.width / 10;
    var lineOneY = canvas.height / 1.5;
    var lineTwoX = canvas.width - (canvas.width / 10);
    var lineTwoY = canvas.height / 1.5;
    var lineThreeX = canvas.width / 2;
    var lineThreeY = canvas.height / 3.5;

    var x1 = (canvas.width / 2.5) - 22;
    var y1 = lineOneY - 63;
    var x2 = (canvas.width - canvas.width / 2.5) + 22;
    var y2 = lineTwoY - 63;
    var x3 = lineThreeX;
    var y3 = (canvas.height / 2.1) - 25.5;


    $("#game").click(function(e) {
        clicks++;
        if (clicks == 1) {
            grow();
        }
        if (clicks == 3) {
            if (win == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                endGame();
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();

                startLevelNine();

            }
        }

    });

    $(document).ready(function() {
        var canvas = document.getElementById('game');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(lineOneX, lineOneY);
            ctx.lineTo(lineTwoX, lineTwoY);
            ctx.lineTo(lineThreeX, lineThreeY);
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'black';
            ctx.stroke();

            var ctx2 = canvas.getContext('2d');

            ctx2.beginPath();
            ctx2.moveTo(x1, y1);
            ctx2.lineTo(x2, y2);
            ctx2.lineTo(x3, y3);
            ctx2.closePath();
            ctx2.fillStyle = '#FA6B05';

            ctx2.fill();
            ctx2.strokeStyle = '#FA6B05';
            ctx2.stroke();


        }

        var ctx3 = canvas.getContext("2d");
        ctx3.font = "50px Jelly";
        ctx3.fillStyle = '#FA6B05';
        ctx3.fillText("Level 9", 10, 50);
    })


    function grow() {
        if (clicks == 2) {
            if (y3 <= (canvas.height / 3.5) + 12.5 && y3 >= canvas.height / 3.5) {
                var winMessage = canvas.getContext("2d");
                winMessage.font = "50px Jelly";
                winMessage.fillStyle = 'black';
                winMessage.fillText("You Win!", 60, 265);
                win = true;
                return;
            } else {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }
            clicks = 0;
            win = false;
            return;
        } else {
            x1--;
            y1++;
            x2++;
            y2++;
            y3--;

            var ctx4 = canvas.getContext('2d');

            ctx4.beginPath();
            ctx4.moveTo(x1, y1);
            ctx4.lineTo(x2, y2);
            ctx4.lineTo(x3, y3);
            ctx4.closePath();
            ctx4.fillStyle = '#FA6B05';

            ctx4.fill();
            ctx4.strokeStyle = '#FA6B05';
            ctx4.stroke();
            if (y3 < canvas.height / 3.5) {
                var loseMessage = canvas.getContext("2d");
                loseMessage.font = "50px Jelly";
                loseMessage.fillStyle = 'black';
                loseMessage.fillText("You Lose!", 60, 265);
                return;
            }

        }
        setTimeout(grow, 1);
    }
}

function endGame() {
    $('#menu').show();

    ctx.fillStyle = '#FA6B05'
    ctx.font = "50px Jelly";
    ctx.fillText("YOU WIN!", 61, 200);
}
