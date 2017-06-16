var obj = [];
var value1;

$(document).ready(function (e) {
    $('.search-panel .dropdown-menu').find('a').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});

$('#uItem li').click(function () {
    value1 = $(this).attr('value');
    console.log(value1);
});

function myFunction() {
    var input;
    var filter;
    var table;
    var tr;
    var td;
    var i;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[value1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

$.ajax({
    type: 'GET',
    url: '/alarms/',
    success: createTable,
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

        cell = document.createElement("td");
        cellText = document.createTextNode(alarm['severity']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        //row added to end of table body
        tblBody.appendChild(row);

    }
}