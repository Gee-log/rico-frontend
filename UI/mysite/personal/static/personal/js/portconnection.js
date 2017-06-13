var xmlhttp = new XMLHttpRequest();
var selectedEastPortId = undefined;
var selectedWestPortId = undefined;
var array = [];
var eValue, wValue;

$(document).ready(function () {

  setConnectedPort();

  // if (localStorage.getItem('portValues') == null) {
  //     var array = [];
  // } else {
  //     array = JSON.parse(localStorage.getItem('portValues'));
  // }

  $('[data-toggle="tooltip"]').tooltip();

  $('.East').click(function () {
    $('.East').removeClass('selected');
    $(this).addClass('selected');
    selectedEastPortId = $(this).attr('id');

    console.log("Current EastPort value = " + selectedEastPortId);

    if (!$(this).hasClass('connected')) {
      eValue = 0;
      isSelectEast(eValue);
    } else if ($(this).hasClass('connected')) {
      eValue = 1;
      isSelectEast(eValue);
    }
  });

  $('.West').click(function () {
    $('.West').removeClass('selected');
    $(this).addClass('selected');
    selectedWestPortId = $(this).attr('id');

    console.log("Current WestPort value = " + selectedWestPortId);

    if (!$(this).hasClass('connected')) {
      wValue = 0;
      isSelectWest(wValue);
    } else if ($(this).hasClass('connected')) {
      wValue = 1;
      isSelectWest(wValue);
    }
  });

  $("#Connect").click(function (e) {
    array.push("{" + selectedEastPortId + " " + selectedWestPortId + "}");
    // localStorage.setItem('portValues', JSON.stringify(array));

    $("td").removeClass('selected');

    // Not using right now !
    // $("#" + selectedEastPortId).addClass('connected');
    // $("#" + selectedWestPortId).addClass('connected');
    $("#" + selectedEastPortId).removeClass('disconnected');
    $("#" + selectedWestPortId).removeClass('disconnected');

    console.log("Connecting EastPortID " + selectedEastPortId + " To WestPortID " +
      selectedWestPortId);

    console.log(array);

    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/connections/',
      data: {
        east: selectedEastPortId.substring(1),
        west: selectedWestPortId.substring(1),
        action: "connect"
      },
      success: function (e) {
        console.log(e);
        setConnectedPort();

      }
    });
  });

  $("#Disconnect").click(function (e) {
    $("#" + selectedEastPortId).removeClass('connected');
    $("#" + selectedWestPortId).removeClass('connected');

    console.log("Disconnecting EastPortID " + selectedEastPortId + " To WestPortID " +
      selectedWestPortId);

    console.log(array);

    e.preventDefault();
    var urls = ['/connections/'];

    $.each(urls, function (i, u) {
      $.ajax(u,
        {
          type: 'POST',
          data: {
            east: selectedEastPortId.substring(1),
            west: selectedWestPortId.substring(1),
            action: "disconnect"
          },
          success: function (e) {
            console.log(e);
            setConnectedPort();
          }
        });
    })
  });

  function isSelectEast(eValue) {
    console.log("East Value : " + eValue);
    unlockButton(eValue, wValue);
    // if (selectedEastPortId + selectedWestPortId == 0) {
    //   $("#Connect").removeAttr('disabled');
    //   console.log("Number ja : " + (selectedEastPortId + selectedWestPortId));
    // } else if (selectedEastPortId + selectedWestPortId == 1) {
    //     $("#Disconnect").attr('disabled');
    //     $("#Connect").attr('disabled');
    //   } else if (selectedEastPortId + selectedWestPortId == 2) {
    //       $("#Disconnect").removeAttr('disabled');
    //     }
  }

  function isSelectWest(wValue) {
    console.log("West Value : " + wValue);
    unlockButton(eValue, wValue);
  }

  function unlockButton(eValue, wValue) {
    var sumValue;
    sumValue = eValue + wValue;

    if (sumValue == 0) {
      $("#Connect").removeAttr('disabled');
      console.log("Unlock connect");
    } else if (sumValue == 1) {
      $("#Connect").attr('disabled', 'disabled');
      $("#Disconnect").attr('disabled', 'disabled');
      console.log("Lock connect & disconnect");
    } else if (sumValue == 2) {
      $("#Disconnect").removeAttr('disabled');
      console.log("Unlock disconnect & lock connect");
    }
  }

  // var alerted = localStorage.getItem('alerted') || '';
  // if (alerted != 'yes') {
  //     alert("EastPort and WestPort were selected. Unlock button!");
  //     localStorage.setItem('alerted', 'yes');
  // }

  function isSelected(port) {
    var isSelectedPort = $("#" + port).hasClass("selected");
    console.log(isSelectedPort);

    // if (isSelectedPort) {
    //     $("#" + port).removeClass("selected");
    // }
  }

  // Not using right now !
  // xmlhttp.onreadystatechange = function () {
  //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //         alert(xmlhttp.responseText);
  //     }
  // }

  function setConnectedPort() {
    $.ajax({
      type: 'GET',
      url: '/connections/',
      data: {
        act: "connected"
      },
      success: function (data) {
        connected_port = data;

        for (i = 0; i < 144; i++) {
          $("#E" + i).removeClass('connected');
          $("#TE" + i).attr('data-original-title', '')
          $("#W" + i).removeClass('connected');
          $("#TW" + i).attr('data-original-title', '')
        }

        for (i in connected_port) {
          var pre = 'Connected to ';
          $("#" + i).addClass('connected');
          $("#" + connected_port[i]).addClass('connected');
          $("#T" + i).attr('data-original-title', pre + connected_port[i]);
          $("#T" + connected_port[i]).attr('data-original-title', pre + i);
          console.log(i + " : " + connected_port[i]);
        }
      }
    });
  }

  setConnectedPort();

});