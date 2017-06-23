var selectedEastPortId = undefined;
var selectedWestPortId = undefined;
var eValue, wValue;
var pair = [];
var array = [];

$(document).ready(function () {

  function getCookie(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return "";
  }

  $(function () {
    $.ajaxSetup({
      headers: {
        "X-CSRFToken": getCookie("csrftoken")
      }
    });
  });

  setConnectedPort();

  $('[data-toggle="tooltip"]').tooltip();

  $('.East').click(function () {
    $('.East').removeClass('selected');
    $(this).addClass('selected');
    selectedEastPortId = $(this).attr('id');
    console.log("Current EastPort value = " + selectedEastPortId);

    if (!$(this).hasClass('connected')) {
      eValue = 0;
      isSelectEast(eValue);
      $(".East, .West").removeClass("connectedpair");
    } else if ($(this).hasClass('connected')) {
      eValue = 1;
      isSelectEast(eValue);
      $(".East, .West").removeClass("connectedpair selected");

      pair.forEach(function (element) {
        if (selectedEastPortId == element[0]) {
          $('#' + element[0]).addClass('connectedpair');
          $('#' + element[1]).addClass('connectedpair');
          console.log("his pair: " + element[1]);
        }
      });
    }

    // $('.West').click(function () {

    //   if ($(this).hasClass('connectedpair')) {

    //     pair.forEach(function (element) {

    //       if (selectedEastPortId == element[0]) {
    //         $('#' + element[0]).addClass('selected');
    //         $('#' + element[1]).addClass('selected');
    //       }
    //     });
    //   }
    // });
  });

  $('.West').click(function () {
    $('.West').removeClass('selected');
    $(this).addClass('selected');
    selectedWestPortId = $(this).attr('id');
    console.log("Current WestPort value = " + selectedWestPortId);

    if (!$(this).hasClass('connected')) {
      wValue = 0;
      isSelectWest(wValue);
      $(".East, .West").removeClass('connectedpair');
    } else if ($(this).hasClass('connected')) {
      wValue = 1;
      isSelectWest(wValue);
      $(".East, .West").removeClass("connectedpair selected");

      pair.forEach(function (element) {
        if (selectedWestPortId == element[1]) {
          $('#' + element[0]).addClass('connectedpair');
          $('#' + element[1]).addClass('connectedpair');
          console.log("his pair:" + element[0]);
        }
      });
    }

    // $('.East').click(function () {

    //   if ($(this).hasClass('connectedpair')) {

    //     pair.forEach(function (element) {

    //       if (selectedWestPortId == element[1]) {
    //         $('#' + element[0]).addClass('selected');
    //         $('#' + element[1]).addClass('selected');
    //       }
    //     });
    //   }
    // });
  });

  $("#Connect").click(function (e) {
    array.push("{" + selectedEastPortId + " " + selectedWestPortId + "}");
    $("td").removeClass('selected');
    $("#Connect").attr('disabled', 'disabled');
    // $("#" + selectedEastPortId).removeClass('disconnected');
    // $("#" + selectedWestPortId).removeClass('disconnected');

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
        action: "connect",
      },
      success: function (e) {
        console.log(e);
        setConnectedPort();
      }
    });

    // $(function () {
    //   function callback(res) {
    //     console.log(res);
    //     test(res)
    //   }
    //   $.ajax({
    //     type: 'GET',
    //     url: 'http://192.168.60.73:8000/app1/target?axis=arm_up&position=555',
    //     success: callback,
    //     complete: callback,
    //     crossDomain: true,
    //     async: true,
    //     success: test,
    //   });
    // })

    // function test(obj) {
    //   var parts = [];
    //   for (var i in obj) {
    //     if (obj.hasOwnProperty(i)) {
    //       parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
    //     }
    //   }
    //   console.log("http://192.168.60.73:8000/app1/result?id=" + obj);
    // }

    $.ajax({
      url: "http://192.168.60.73:8000/app1/target?axis=arm_up&position=555",
      type: "GET",
      crossDomain: true,
      dataType: "json",
      success: function (result) {
        alert(JSON.stringify(result));
      },
      error: function (xhr, status, error) {
        alert(status);
      }
    });

  });

  $("#Disconnect").click(function (e) {
    $("td").removeClass('selected');
    $("#" + selectedEastPortId).removeClass('connected');
    $("#" + selectedWestPortId).removeClass('connected');
    $(".East, .West").removeClass('connectedpair');
    $("#Disconnect").attr('disabled', 'disabled');

    console.log("Disconnecting EastPortID " + selectedEastPortId + " To WestPortID " +
      selectedWestPortId);
    console.log(array);

    $.ajax({
      type: 'POST',
      url: '/connections/',
      data: {
        east: selectedEastPortId.substring(1),
        west: selectedWestPortId.substring(1),
        action: "disconnect",
      },
      success: function (e) {
        console.log(e);
        setConnectedPort();
      }
    });
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
      $("#Connect, #Disconnect").attr('disabled', 'disabled');
      console.log("Lock connect & disconnect");
    } else if (sumValue == 2) {
      $("#Disconnect").removeAttr('disabled');
      console.log("Unlock disconnect & lock connect");
    }
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
