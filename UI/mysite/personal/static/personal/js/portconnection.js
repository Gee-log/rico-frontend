var selectedEastPortId = undefined;
var selectedWestPortId = undefined;
var eValue, wValue;
var pair = [];
var array = [];
var i = 0;
var data;

$(document).ready(function () {

  $("#Connect").attr('disabled', 'disabled');
  $("#Disconnect").attr('disabled', 'disabled');

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

  $('[data-toggle="tooltip"]').tooltip();

  function eastPair() {

    pair.forEach(function (element) {

      if (selectedEastPortId == element[0]) {
        $(".East, .West").removeClass("selected");
        $('#' + element[0]).addClass('selected');
        $('#' + element[0]).removeClass("connectedpair selected");
        $('#' + element[1]).removeClass("connectedpair selected");
        $('#' + element[0]).addClass('connectedpair');
        $('#' + element[1]).addClass('connectedpair');
        console.log("his pair: " + element[1]);
      }

      $('#' + element[1]).click(function () {
        // $('#' + element[0]).addClass('selected');
        // $('#' + element[1]).addClass('selected');

        if (selectedEastPortId == element[0] && selectedWestPortId == element[1]) {
          $("#Disconnect").removeAttr('disabled');
          console.log("Correct Pair !");
        }
      });
    });
  }

  function westPair() {

    pair.forEach(function (element) {

      if (selectedWestPortId == element[1]) {
        $(".East, .West").removeClass("selected");
        $('#' + element[0]).removeClass("connectedpair selected");
        $('#' + element[1]).removeClass("connectedpair selected");
        $('#' + element[0]).addClass('connectedpair');
        $('#' + element[1]).addClass('connectedpair');
        console.log("his pair: " + element[0]);
      }

      $('#' + element[0]).click(function () {
        // $('#' + element[0]).addClass('selected');
        // $('#' + element[1]).addClass('selected');

        if (selectedEastPortId == element[0] && selectedWestPortId == element[1]) {
          $("#Disconnect").removeAttr('disabled');
          console.log("Correct Pair !");
        }
      });
    });
  }

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
      $("#Disconnect").attr('disabled', 'disabled');
      eastPair();
    }
  });
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
      $("#Disconnect").attr('disabled', 'disabled');
      westPair();
    }
  });
  //     pair.forEach(function (element) {

  //   if (selectedWestPortId == element[1]) {
  //     $('#' + element[0]).addClass('connectedpair');
  //     $('#' + element[1]).addClass('connectedpair');
  //     console.log("his pair:" + element[0]);
  //     // $('#' + element[0]).click(function () {
  //     //   $('#' + element[0]).addClass('selected');
  //     //   $('#' + element[1]).addClass('selected');
  //     // });
  //   }
  // });

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

    // $.ajax({
    //   url: "http://192.168.60.73:8000/app1/target?axis=arm_up&position=555",
    //   type: "GET",
    //   crossDomain: true,
    //   dataType: "json",
    //   success: function (result) {
    //     alert(JSON.stringify(result));
    //   },
    //   error: function (xhr, status, error) {
    //     alert(status);
    //   }
    // });

  });

  $("#Disconnect").click(function (e) {

    $("td").removeClass('selected');
    // $("#" + selectedEastPortId).removeClass('connected');
    // $("#" + selectedWestPortId).removeClass('connected');
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

  function unlockButton(eValue, wValue, data) {

    var sumValue;
    sumValue = eValue + wValue;
    if (sumValue == 0 && data == 'success' || data == 'error') {
      $("#Connect").removeAttr('disabled');
      console.log("Unlock connect button | status: ", data);
    } else if (sumValue == 1) {
      $("#Connect, #Disconnect").attr('disabled', 'disabled');
      console.log("Lock connect & disconnect");
    } else if (data == 'started' || data == 'progressing') {
      $("#Connect, #Disconnect").attr('disabled', 'disabled');
      console.log("Lock connect & disconnect | status", data);
    }
    // else if (sumValue == 2) {
    //   $("#Disconnect").removeAttr('disabled');
    //   console.log("Unlock disconnect & lock connect");
    // }
  }

  // function setColor() {

  //   $.ajax({
  //     type: 'GET',
  //     url: '/connections/',
  //     success: function (data) {
  //       for (i = 0; i < data.length; i++) {
  //         var status = data[i];
  //         var x = [status['east'], status['west'], status['status']];
  //           if (status['status'] == 'pending') {
  //             $("#E" + status['east']).addClass('connected');
  //             $("#W" + status['west']).addClass('connected');
  //             console.log('East ' + status['east'], 'West ' + status['west'], 'status:' + status['status']);
  //         }
  //       }
  //     }
  //   });
  // }
  // setColor();

  function setConnectedPort() {

    $.ajax({
      type: 'GET',
      url: '/connections/',
      data: {
        act: "connected",
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
          if (connected_port[i][1] == 'success') {
            var pre = 'Connected to ';
            $("#" + i).removeClass('disconnected');
            $("#" + connected_port[i]).removeClass('disconnected');
            $("#" + i).addClass('connected');
            $("#" + connected_port[i]).addClass('connected');
            $("#T" + i).attr('data-original-title', pre + connected_port[i]);
            $("#T" + connected_port[i]).attr('data-original-title', pre + i);
            console.log(i + " : " + connected_port[i][0] + " | " + "Status : " + connected_port[i][1]);
            pair.push([i, connected_port[i][0]]);
          }
          if (connected_port[i][1] == 'started' || connected_port[i][1] == 'pending') {
            $("#" + i).addClass('disconnected');
            $("#" + connected_port[i]).addClass('disconnected');
          }
        }
        if (connected_port[i][1] == 'success' || connected_port[i][1] !== 'started' || connected_port[i][1] !== 'pending') {
          console.log("---------------------------------------------------------------------------");
        }
      }
    });
  }
  setConnectedPort();

  function checkStatus(data) {

    if (data == 'success') {
      data = 'success'
      unlockButton(eValue, wValue, data);
    } else if (data == 'started') {
      data = 'started'
      unlockButton(eValue, wValue, data);
    } else if (data == 'progressing') {
      data = 'progressing'
      unlockButton(eValue, wValue, data);
    }
    else {
      data = 'error'
      unlockButton(eValue, wValue, data);
    }
  }

  window.setInterval(function () {
    $.ajax({
      url: '/checktask/',
      type: 'GET',
      success: function (data) {
        checkStatus(data.status);
        setConnectedPort();
      },
      failure: function (data) {
        alert('Got an error dude');
      }
    });
  }, 5000);

});

// Progress bar !!
// $("#reset").click(function () {
//   $(':input', '#attachmentModal').val("");
//   $("#pbarmain").hide();
//   $("#pbar").hide();
//   $(".progress-bar").css("width", "0%");
//   i = 0;
// });

// function makeProgress() {
//   $("#pbarmain").show();
//   $("#pbar").show();
//   if (i < 100) {
//     i = i + 2;
//     $(".progress-bar").css("width", i + "%").text(i + " %");
//     setTimeout("makeProgress()", 100);
//   }
// }

