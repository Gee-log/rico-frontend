$.ajax({
    type: 'GET',
    url: '/operations/',
    success: createTable,
});

function createTable(data) {

    data.forEach(function (element) {
        console.log(element);
    });

    $('#records').empty();
    var tblBody = document.getElementById("records");

    // cells creation
    for (var j = 0; j < data.length; j++) {
        // table row creation
        var row = document.createElement("tr");
        var operation = data[j];

        var cell = document.createElement("td");
        var cellText = document.createTextNode(operation['robotnumber']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(operation['uuid']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(operation['status']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(operation['request']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        //row added to end of table body
        tblBody.appendChild(row);

    }
}

var n = 1;
window.setInterval(function () {
    $.ajax({
        url: 'http://127.0.0.1:8000/checktask',
        type: 'GET',
        success: function (data) {
            console.log(data);
            console.log("call round: " + n);
            n++;
            test(data);
        },
        failure: function (data) {
            alert('Got an error dude');
        }
    });
}, 3000);



function test(data) {
    if (data == 'success') {

        console.log(data);
        console.log("call round: " + n);
        n++;

    } else if (data == 'started'){
        console.log(data);
        console.log("call round: " + n);
        n++;
    }
}


