var value = undefined;

$(document).ready(function (e) {

    $('.search-panel .dropdown-menu').find('a').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });

    $('#alarm_records').DataTable({
        searching: false,
        ordering: false,
        "lengthMenu": [[15, 30, 50, -1], [15, 30, 50, "All"]]
    });
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
    filter = input.value.toUpperCase();
    table = document.getElementById("alarm_records");
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