var xmlhttp = new XMLHttpRequest();
var selectedEastPortId = undefined;
var selectedWestPortId = undefined;
var array = [];



$(document).ready(function () {

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
        isSelectBoth(selectedEastPortId, selectedWestPortId);

        console.log("Current EastPort value = " + selectedEastPortId);

        // $(this).attr(function (i, text) {
        //     return text === "PUSH ME" ? "DON'T PUSH ME" : "PUSH ME";
        // });


    });

    $('.West').click(function () {
        $('.West').removeClass('selected');
        $(this).addClass('selected');
        selectedWestPortId = $(this).attr('id');
        isSelectBoth(selectedEastPortId, selectedWestPortId);

        console.log("Current WestPort value = " + selectedWestPortId);
    });

    $("#Connect").click(function (e) {

        array.push("{" + selectedEastPortId + " " + selectedWestPortId + "}");
        // localStorage.setItem('portValues', JSON.stringify(array));

        $("td").removeClass('selected');

        $("#" + selectedEastPortId).addClass('connected');
        $("#" + selectedWestPortId).addClass('connected');
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
            }
        });

    });
    //     $.each(array, function(index, value){
    //         var eventE = new Object();
    //         eventE.id = value.id;
    //         array2.push(eventE);
    //     });

    //     $.ajax
    //     ({
    //         type: "GET",
    //         dataType: 'json',
    //         async: false,
    //         url: 'http://127.0.0.1:8000/save_json/',
    //         data: { data: JSON.stringify(array2) },
    //         success: function() { console.log("Thanks!"); },
    //         failure: function() { console.log("Error!") }
    //     });



    $("#Disconnect").click(function () {
        $("td").removeClass('selected');

        $("#" + selectedEastPortId).removeClass('connected');
        $("#" + selectedWestPortId).removeClass('connected');

        console.log("Disconnecting EastPortID " + selectedEastPortId + " To WestPortID " +
            selectedWestPortId);

        console.log(array);
    });

    function isSelectBoth(selectedEastPortId, selectedWestPortId) {

        if (selectedEastPortId && selectedWestPortId) {
            $("#Connect").removeAttr('disabled');
            $("#Disconnect").removeAttr('disabled');

            // var alerted = localStorage.getItem('alerted') || '';
            // if (alerted != 'yes') {
            //     alert("EastPort and WestPort were selected. Unlock button!");
            //     localStorage.setItem('alerted', 'yes');
            // }
        }
    }

    function isSelected(port) {
        var isSelectedPort = $("#" + port).hasClass("selected");
        console.log(isSelectedPort);

        // if (isSelectedPort) {
        //     $("#" + port).removeClass("selected");
        // }
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
        }
    }


});