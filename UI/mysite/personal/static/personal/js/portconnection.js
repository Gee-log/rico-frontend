var xmlhttp = new XMLHttpRequest();
var selectedEastPortId = undefined;
var selectedWestPortId = undefined;
var array = [];
var eValue, wValue;
var pair = [];

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
      $('.East').removeClass('disconnected');
      $('.West').removeClass('disconnected');
    } else if ($(this).hasClass('connected')) {
      eValue = 1;
      isSelectEast(eValue);
      $(this).removeClass('selected');
      $('.East').removeClass('disconnected');
      $('.West').removeClass('disconnected');

      pair.forEach(function (element) {
        if (selectedEastPortId == element[0]) {
          console.log("his pair:" + element[1]);
          $('#' + element[0]).addClass('disconnected');
          $('#' + element[1]).addClass('disconnected');
        }
      });
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
      $('.East').removeClass('disconnected');
      $('.West').removeClass('disconnected');
    } else if ($(this).hasClass('connected')) {
      wValue = 1;
      isSelectWest(wValue);
      $(this).removeClass('selected');
      $('.East').removeClass('disconnected');
      $('.West').removeClass('disconnected');

      pair.forEach(function (element) {
        if (selectedWestPortId == element[1]) {
          console.log("his pair:" + element[0]);
          $('#' + element[0]).addClass('disconnected');
          $('#' + element[1]).addClass('disconnected');
        }
      });
    }
  });

  $("#Connect").click(function (e) {
    array.push("{" + selectedEastPortId + " " + selectedWestPortId + "}");
    // localStorage.setItem('portValues', JSON.stringify(array));

    $("td").removeClass('selected');
    $("#Connect").attr('disabled', 'disabled');
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

    $("td").removeClass('selected');
    $("#" + selectedEastPortId).removeClass('connected');
    $("#" + selectedWestPortId).removeClass('connected');
    $("#Disconnect").attr('disabled', 'disabled');

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

  function isSelected(port) {

    var isSelectedPort = $("#" + port).hasClass("selected");
    console.log(isSelectedPort);
  }

  function setConnectedPort() {

    $.ajax({
      type: 'POST',
      url: '/connections/',
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
  }

  function isSelectBoth(selectedEastPortId, selectedWestPortId) {

    if (selectedEastPortId && selectedWestPortId) {
      $("#Connect").removeAttr('disabled');
      $("#Disconnect").removeAttr('disabled');
    }
  }

  function isSelected(port) {
    var isSelectedPort = $("#" + port).hasClass("selected");
    console.log(isSelectedPort);
  }

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
          pair.push([i, connected_port[i]]);
        }


      }
    });
  }
  setConnectedPort();

});
