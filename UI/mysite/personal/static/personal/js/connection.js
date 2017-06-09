$(document).ready(function() {
  $.ajax({
      type: 'GET',
      url: '/connections/',
      data: {
        act: "connected",
        act: "disconnected"
      },
      success: function(data) {
          connected_port = data;

          // do something
          for (i in connected_port) {
          console.log(connected_port[i]);
          }
      }
  });
});