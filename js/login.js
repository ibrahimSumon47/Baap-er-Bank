document.getElementById("btn-login").addEventListener("click",function(){
    
    const emailField = document.getElementById("user-email");
    const email =emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    if(email === "ibrahimsumon005@gmail.com" && password ==="AbcD1234~!@#"){
        window.location.href = "bank.html";
    }
    else{
        alert("invalid User");
    }
})