function checkform(){
    if(document.getElementById("un").value== 'Netflix@gmail.com' && document.getElementById("pw").value== 'Netflix123'){
    alert("Login successful");
    }
    else{
        alert("Enter valid username and password");
        return;
    }
}