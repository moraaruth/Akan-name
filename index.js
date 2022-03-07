$(document).ready(function() {
		
    $(function() {
        $( "#calendar" ).datepicker();
    });
})
$('#calendar').change(function () { 
    var eventDate = $('#calendar').val();
    var dateElement = eventDate.split("/");
    var dateFormat = dateElement[2]+'-'+dateElement[0]+'-'+dateElement[1];
    var date = new Date(dateFormat+'T10:00:00Z'); 
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = weekday[date.getDay()];
    $('#calendar').val;

    document.getElementById("demo").value = day;
    
});
function getInputValue(){
    
    
    var inputVal = document.getElementById("demo").value;
    var inputValue = document.getElementById("gender").value;
    let akan_name;
    if (inputVal=="Sunday" && inputValue=="male") {
        akan_name = "Kwasi";
    } else if (inputVal=="Sunday" && inputValue=="female") {
        akan_name = "Akosua";
    } else if (inputVal=="Monday" && inputValue=="male") {
        akan_name = "Kwadwo";
    }else if (inputVal=="Monday" && inputValue=="female") {
        akan_name = "Adwoa";
    }else if (inputVal=="Tuesday" && inputValue=="male") {
        akan_name = "Kwabena";
    }else if (inputVal=="Tuesday" && inputValue=="female") {
        akan_name = "Abenaa";
    }else if (inputVal=="Wednesday" && inputValue=="male") {
        akan_name = "Kwaku";
    }else if (inputVal=="Wednesday" && inputValue=="female") {
        akan_name = "Akua";
    }else if (inputVal=="Thursday" && inputValue=="male") {
        akan_name = "Yaw";
    }else if (inputVal=="Thursday" && inputValue=="female") {
        akan_name = "Yaa";
    }else if (inputVal=="Friday" && inputValue=="male") {
        akan_name = "Kofi";
    }else if (inputVal=="Friday" && inputValue=="female") {
        akan_name = "Afua";
    }else if (inputVal=="Saturday" && inputValue=="male") {
        akan_name = "Kwame";
    }else if (inputVal=="Saturday" && inputValue=="female") {
        akan_name = "Ama";
    }
    
    document.getElementById("thename").innerHTML = akan_name;
    
    // Displaying the value
    //alert(inputVal);
    
}