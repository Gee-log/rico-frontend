var value = undefined;
var round = undefined;
var pendingID = [];
var buttonID = [];

$(document).ready(function (e) {

    round = 0;

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

    $('.search-panel .dropdown-menu').find('a').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });

    $('#myTable').DataTable({
        searching: false,
        ordering: false,
        "lengthMenu": [[15, 30, 50, -1], [15, 30, 50, "All"]]
    });

    pendingID.forEach(function (element) {
        buttonID.push(element);
        $('#P' + element).click(function () {
            id = $(this).attr('id');
            formatID = id.substring(1);
            for (var i = 0; i < pendingID.length; i++) {
                $('#P' + pendingID[i]).attr('disabled', 'disabled');
                $('#C' + pendingID[i]).attr('disabled', 'disabled');
            }
            $.ajax({
                type: 'POST',
                url: '/pendingtask/',
                data: {
                    id: formatID,
                },
                success: function (data) {
                    console.log('Sending Pending ID:', data);
                    round++;
                }
            });
        });
        $('#C' + element).click(function () {
            id = $(this).attr('id');
            formatID = id.substring(1);
            $.ajax({
                type: 'POST',
                url: '/canceltask/',
                data: {
                    id: formatID,
                    action: 'canceled',
                },
                success: function () {
                    console.log('Sending Cancel ID:', element);
                    location.reload();
                }
            });
        });
    });

    window.setInterval(function () {
        $.ajax({
            url: '/checktask/',
            type: 'GET',
            success: function (data) {
                console.log('Last task status:', data.status[0]);
                console.log('Value :', round);
                console.log('------------------------------');
                if (round == 1 && data.status[0] == 'success') {
                    location.reload();
                    round--;
                }
            },
            failure: function (data) {
                alert('Got an error dude');
            }
        });
    }, 3000);

    // Waiting for improve !!

    // $('#P' + pendingID).click(function () {
    //     console.log(pendingID);
    // $.ajax({
    //     type: 'GET',
    //     url: '/connectionhistorys/',
    //     success: function (data) {
    //         var objpend;

    //         for (var i = 0; i < data.length; i++) {
    //             var obj = data[i];
    //             if (obj['status'] == 'pending') {
    //                 objpend = obj;
    //             }
    //             if (objpend['west'] == 145) {
    //                 objpend['west'] = 1
    //             }
    //         }

    //         $.ajax({
    //             type: 'POST',
    //             url: '/test/',
    //             data: {
    //                 id: objpend['id'],
    //             },
    //             success: function () {
    //                 console.log(data);
    //             }
    //         });
    //     }
    // });
    // });

    // window.setInterval(function () {
    //     $.ajax({
    //         url: '/checktask/',
    //         type: 'GET',
    //         success: function (data) {
    //             console.log('Status : ' + data.status);
    //         },
    //         failure: function (data) {
    //             alert('Got an error dude');
    //         }
    //     });
    // }, 10000);

});

$('#uItem li').click(function () {

    value = $(this).attr('value');
});

function searchTable() {

    var input;
    var filter;
    var table;
    var tr;
    var td;
    var i;

    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[value];
        if (td && value) {
            if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } else {
            $(tr).each(function (index) {
                if (!index) return;
                $(this).find("td").each(function () {
                    var id = $(this).text().toLowerCase().trim();
                    var not_found = (id.indexOf(filter) == -1);
                    $(this).closest('tr').toggle(!not_found);
                    return not_found;
                });
            });
        }
    }
}

$.ajax({
    type: 'GET',
    url: '/connectionhistorys/',
    success: createTable,
});

function createTable(data) {

    $('#records').empty();
    var tblBody = document.getElementById("records");


    // cells creation
    for (var j = 0; j < data.length; j++) {
        // table row creation
        var row = document.createElement("tr");
        var conn = data[j];

        if (conn['status'] == 'pending') {
            console.log(conn['id']);
            pendingID.push(conn['id']);
        }

        if (conn['status'] == 'success' || conn['status'] == 'pending' || conn['started'] == 'started') {
            var day = new Date(conn['timestamp']);
            var formatday = day.toString().substring(0, 15);
            cell = document.createElement("td");
            cellText = document.createTextNode(formatday);
            cell.appendChild(cellText);
            row.appendChild(cell);

            var time = new Date(conn['timestamp']);
            var formattime = time.toString().substring(15);
            cell = document.createElement("td");
            cellText = document.createTextNode(formattime);
            cell.appendChild(cellText);
            row.appendChild(cell);

            var cell = document.createElement("td");
            var cellText = document.createTextNode('');
            cell.appendChild(cellText);
            row.appendChild(cell);

            var type = conn['switching_type'];
            var typeCheck = type.toString();
            var cell = document.createElement("td");

            if (typeCheck == 'C') {
                var cellText = document.createTextNode('Connected');
            } else if (typeCheck == 'D') {
                var cellText = document.createTextNode('Disconnected');
            }
            cell.appendChild(cellText);
            row.appendChild(cell);

            cell = document.createElement("td");
            cellText = document.createTextNode("E" + conn['east']);
            cell.appendChild(cellText);
            row.appendChild(cell);

            cell = document.createElement("td");
            cellText = document.createTextNode("W" + conn['west']);
            cell.appendChild(cellText);
            row.appendChild(cell);

            var status = conn['status'];
            var formatstatus = status.charAt(0).toUpperCase() + status.slice(1);
            cell = document.createElement("td");
            cellText = document.createTextNode(formatstatus);
            if (status == 'pending') {
                var cellText = document.createElement("BUTTON");
                cellText.className = "btn btn-default"
                var text = document.createTextNode("Continue Pending");
                cellText.id = 'P' + conn['id'];
                cellText.appendChild(text);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);

            var status = conn['status'];
            var formatstatus = status.charAt(0).toUpperCase() + status.slice(1);
            cell = document.createElement("td");
            if (status == 'success') {
                cellText = document.createTextNode('');
            }
            if (status == 'pending') {
                var cellText = document.createElement("BUTTON");
                cellText.className = "btn btn-default"
                var text = document.createTextNode("Cancel");
                cellText.id = 'C' + conn['id'];
                cellText.appendChild(text);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
            //row added to end of table body
            tblBody.appendChild(row);

        }
    }
}

