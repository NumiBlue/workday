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
    console.log(text);
    //send to server and process response
});
