let title = document.getElementById("title");
let userField = document.getElementById("username_field");
let idField = document.getElementById("id_field");
let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");


signinbtn.addEventListener("click", ()=>{
    title.innerHTML = "Sign in";
    userField.style.display = "none";
    idField.style.display = "none";
    if (signupbtn.style.backgroundColor === "white")
    {
        signinbtn.style.backgroundColor = "white";
        signupbtn.style.backgroundColor= "#555";
    };
});

signupbtn.addEventListener("click", ()=>{
    title.innerHTML = "Sign up";
    userField.style.display = "flex";
    if (signinbtn.style.backgroundColor === "white")
    {
        signupbtn.style.backgroundColor = "white";
        signinbtn.style.backgroundColor ="#555";
    }
});