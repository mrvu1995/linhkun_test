$(document).ready(function(){
  //insert rows in table
  $(".add").click(function(){
    var stt = $("#stt").val();
    var fname = $("#fName").val();
    var lname = $("#lName").val();
    var email = $("#email").val();
    var add_row = "<tr><td>" + stt + "</td><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td></tr>";
    $("table tbody").append(add_row);
    });

  //delete rows in table
});
