  $(document).ready(function(){
   function ab() {
 var r = $("<tr><td><input type='checkbox' class='dynamic'></td><td>"+$('#fname').val()+"</td><td>"+$('#lname').val()+"</td><td>"+$('#datepicker').val()+"</td><td>"+$('#pno').val()+"</td></tr>")
$(".tab").append(r);	
};	
  $(function() {
    $( "#accordion" ).accordion({

      collapsible: true,
	  	active:false,
	  speed:2500
    });
  });
  $(function() {
    $( "#draggable" ).draggable();
  });
  $(function(){
	$('#slidorion').slidorion({
		interval: 4000,
		effect: 'slideLeft'
		});
});
	
  $(function() {
    $( "#datepicker" ).datepicker();
  });
  $(function() {
    $( "#dialog" ).dialog();
  });
  $(function() {
    $( "#draggable" ).draggable();
  });
  function fnOpenNormalDialog() {
    $("#dialog-confirm").html("Do you want to submit the details?");

    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Confirmation",
        height: 250,
        width: 400,
        buttons: {
            "Yes": function () {
                $(this).dialog('close');
                callback(true);
            },
                "No": function () {
                $(this).dialog('close');
                callback(false);
            }
        }
    });
}

$('#btnOpenDialog').click(fnOpenNormalDialog)
function callback(value) {
    if (value) {
	ab();

 $(".hi").val("");
  
$(".main").click(function(){
	if($(".main").is(":checked"))
{
$(".dynamic").prop("checked",true);
}
   else
{
$(".dynamic").prop("checked",false);
}
});
        alert("Details submitted");
    } else {
        alert("Action Cancelled");
    }
}
$(".deletedata").click(function()
{
	if($(".dynamic").is(":checked"))
{
$(".main").prop("checked",false);
var arr=[];
arr=$(".tab tr .dynamic:checked").parent().parent();
$(".table1").append(arr);
$(".tab tr .dynamic:checked").parent().parent().hide();
$(".table1 tr .dynamic:checked").parent().html('');
}
});
});
