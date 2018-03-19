
$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19)

    $('#randomNumber').text(Random);

    var crystalOne = Math.floor(Math.random() * 11 + 1)
    var crystalTwo = Math.floor(Math.random() * 11 + 1)
    var crystalThree = Math.floor(Math.random() * 11 + 1)
    var crystalFour = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        $("#randomNumber").text(Random);
        crystalOne = Math.floor(Math.random() * 11 + 1);
        crystalTwo = Math.floor(Math.random() * 11 + 1);
        crystalThree = Math.floor(Math.random() * 11 + 1);
        crystalFour = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }

    function winner() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $(".crystal-image").click(function () {
        userTotal = userTotal + crystalOne;
        $('#finalTotal').text(userTotal);
    })
    if (userTotal == Random) {
        winner();
    }
    else if (userTotal > Random) {
        loser();
    }

    $(".crystal-image").click(function () {
        userTotal = userTotal + crystalTwo;
        $('#finalTotal').text(userTotal);
    })
    if (userTotal == Random) {
        winner();
    }
    else if (userTotal > Random) {
        loser();
    }
    $(".crystal-image").click(function () {
        userTotal = userTotal + crystalThree;
        $('#finalTotal').text(userTotal);
    })
    if (userTotal == Random) {
        winner();
    }
    else if (userTotal > Random) {
        loser();
    }
    $(".crystal-image").click(function () {
        userTotal = userTotal + crystalFour;
        $('#finalTotal').text(userTotal);
    })
    if (userTotal == Random) {
        winner();
    }
    else if (userTotal > Random) {
        loser();
    }


});








