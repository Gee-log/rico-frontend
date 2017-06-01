var currentAlarmTime = new Date();

var patterns = [
  ['I', 'Robot standby'],
  ['I', 'E1 connect to W7'],
  ['I', 'E144 connect to W144'],
  ['I', 'E20 connect to W50'],
  ['I', 'E20 disconnect from W50'],
  ['W', 'Arm slips 1 pulse'],
  ['S', 'Arm slips 2 pulses'],
  ['W', 'Rollback slips 2 pulses'],
  ['S', 'Rollback slips 3 pulses'],
  ['E', 'Gripper torque alarm'],
  ['E', 'Power down'],
  ['H', 'Missing connector'],
];

function updateSaveUrl(time) {
  console.log('updateSaveUrl', time);
  $("#save").prop("href", "/2/" + time);
}

function clear() {
  $('#records').empty();
  currentAlarmTime = new Date();
  updateSaveUrl(currentAlarmTime.getTime());
}

function randomPattern() {
  var i = Math.floor(Math.random() * patterns.length);
  return patterns[i];
}

function randomTime() {
  /*return Math.floor((Math.random() * 5000) + 2000);*/
  return Math.floor((Math.random() * 10000) + 10000);
}

$('#clear').click(function () {
  $('#clear').attr('disabled', 'disabled');
  $('#save').attr('disabled', 'disabled');
});

function createTable(data) {
  $('#records').empty();

  var tblBody = document.getElementById("records");

  // cells creation
  for (var j = 0; j < data.length; j++) {
    // table row creation
    var row = document.createElement("tr");
    var alarm = data[j];

    var cell = document.createElement("td");    
    var cellText = document.createTextNode(alarm['alarm']);
    cell.appendChild(cellText);
    row.appendChild(cell);

    cell = document.createElement("td");    
    cellText = document.createTextNode(alarm['detail']);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var t = new Date(alarm['timestamp']);
    cell = document.createElement("td");    
    cellText = document.createTextNode(t.toString());
    cell.appendChild(cellText);
    row.appendChild(cell);

    //row added to end of table body
    tblBody.appendChild(row);

    $("#clear").removeAttr('disabled');
    $("#save").removeAttr('disabled');
  }
}

function randomAlert() {
  setTimeout(function() {
    var p = randomPattern();
    $.ajax({
        type: 'POST',
        url: '/alarms/',
        data: {
            alarm: p[0],
            detail: p[1],
        },
        success: function (e) {
            console.log('randomAlert success', e);
        }
    });

    console.log('randomAlert', new Date(), p);

    randomAlert();
  }, randomTime());
}

//
// init
//

(function() {
  $('#clear').click(function(e) {
    e.preventDefault();
    clear();
  });

  currentAlarmTime.setMinutes(currentAlarmTime.getMinutes() - 1);

  setInterval(function() {
    console.log('polling', new Date());
    $.ajax({
      type: 'GET',
      url: '/alarms/',
      data: {
        since: currentAlarmTime.getTime() / 1000,
      },
      success: createTable,
    });
  }, 4000);

  updateSaveUrl(currentAlarmTime.getTime());

  randomAlert();
})();
