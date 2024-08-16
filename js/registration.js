const title = document.getElementById("title");
const userField = document.getElementById("username_field");
const idField = document.getElementById("id_field");
const confirmField = document.getElementById("confirm_field");
const signupbtn = document.getElementById("signupbtn");
const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", ()=>{
    title.innerHTML = "Sign in";
    userField.style.display = "none";
    idField.style.display = "none";
    confirmField.style.display = "none";
    if (signupbtn.style.backgroundColor === "white")
    {
        loginBtn.style.backgroundColor = "white";
        signupbtn.style.backgroundColor= "#555";
    };
});

signupbtn.addEventListener("click", ()=>{
    title.innerHTML = "Sign up";
    userField.style.display = "flex";
    idField.style.display = "flex";
    confirmField.style.display = "flex";
    if (loginBtn.style.backgroundColor === "white")
    {
        signupbtn.style.backgroundColor = "white";
        loginBtn.style.backgroundColor ="#555";
    }
});