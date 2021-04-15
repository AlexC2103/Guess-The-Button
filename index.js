var randomID = Math.floor(Math.random() * 3) + 1;
var CorrectButtons = 0;
var WrongButtons = 0;
function replyClick(clickedID) {
  if (clickedID == randomID) {
    document.getElementById(clickedID).style.background = 'green';
    CorrectButtons++;
  } else {
    document.getElementById(clickedID).style.background = 'red';
    WrongButtons++;
  }

  for (var i = 1; i <= 3; ++i) {
    if (i != clickedID) {
      document.getElementById(i).disabled = true;
      if (i == randomID) {
        document.getElementById(i).style.background = 'green';
      } else {
        document.getElementById(i).style.background = 'red';
      }
    }
  }
}

function Restart() {
  for (var i = 1; i <= 3; ++i) {
    document.getElementById(i).style.background = '';
    document.getElementById(i).disabled = false;
  }

  randomID = Math.floor(Math.random() * 3) + 1;
}

function EndGame() {
  alert('Correct Buttons: ' + CorrectButtons + '\nWrong Buttons: ' + WrongButtons);
  Restart();
  WrongButtons = CorrectButtons = 0;
}
