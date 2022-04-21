//Pseudocode:


//Use js to influnce the css colors according to current time
//-get current time, get syntax for changing according to current time- military time.. for loop
//Click enable save button (universal listener, apply to .btn)
//Save button saves to local storage 
//Local storage loads events when refreshed (key as time, value as string, use for loop)

//Moment
const dateTime = moment()
$("#moment").text(dateTime);


//Save Button
$("#btn08").click(function() {
    var text = $('textarea#text08').val();
    //Save in Innerhtml
$(".selector").html("Your text here");
    //send to server and process response
    localStorage.setItem('text08', text);
});

//Call on page load
$(document).ready(function () {
    var timeTable = JSON.parse(localStorage.getItem("schedule"));
    if (!timeTable) {
        timeTable = {
            hour: [
                08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
            ],
            task: [
                "","","","","","","","","","","","",""
            ],
        }; localStorage.setItem("schedule",JSON.stringify(timeTable));
    }
  });