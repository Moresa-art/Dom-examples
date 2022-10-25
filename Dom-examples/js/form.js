console.log("hi there!")
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const submitButton = document.getElementById('submit');
submitButton.onclick = function(){
    if(firstName.value == ""|| secondName.value == ""){
        console.log("fill out the form properly you foll")
    }else{
        console.log("clever person you did it!")
    }
}