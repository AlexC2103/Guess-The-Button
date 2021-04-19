var randomID = Math.floor(Math.random() * 3) + 1;
var correctButtons = 0;
var wrongButtons = 0;
function replyClick(clickedID) {
  if (clickedID == randomID) {
    document.getElementById(clickedID).style.background = '#58c75b';
    correctButtons++;
  } else {
    document.getElementById(clickedID).style.background = '#e04f4f';
    wrongButtons++;
  }

  for (var i = 1; i <= 3; ++i) {
    if (i != clickedID) {
      document.getElementById(i).disabled = true;
      if (i == randomID) {
        document.getElementById(i).style.background = '#58c75b';
      } else {
        document.getElementById(i).style.background = '#e04f4f';
      }
    }
  }

  document.getElementById('stats').innerHTML = 'CORRECT BUTTONS: ' + correctButtons + '<br>' +
                                               'WRONG BUTTONS: ' + wrongButtons;
}

function restart() {
  for (var i = 1; i <= 3; ++i) {
    document.getElementById(i).style.background = '';
    document.getElementById(i).disabled = false;
  }

  randomID = Math.floor(Math.random() * 3) + 1;
}

function endGame() {
  restart();
  wrongButtons = correctButtons = 0;
  document.getElementById('stats').innerHTML = 'CORRECT BUTTONS: 0' + '<br>' +
                                               'WRONG BUTTONS: 0';
}
