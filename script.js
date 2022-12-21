$(document).ready(function () {
    // FETCHING DATA FROM JSON FILE
    $.getJSON("profile-data.json",function (data) {
        console.log(data);
        console.log(data.name);
        $("#name").html("<h1 class=\"red\">"+data.name+"</h1>");
    });
});