function valid(){
    let x=document.getElementById("user").value;
    let y=document.getElementById("pass").value;
    if(x=="admin" && y=="12345")
    {
        alert("login successfull")
    }
    else{
        alert("invalid username or password")
    }
    
}