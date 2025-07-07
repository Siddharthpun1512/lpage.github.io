const id= "admin";
const pass= "1234";
 function tolog(){
    var logid = document.getElementById("logid").value;
    var logpass = document.getElementById("logpass").value;
    if(logid == id && logpass == pass){
        alert("you are logged in");
    }else{
        alert("Invalid Login ID or Password.");
    }
 }