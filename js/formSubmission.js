// submiting form data using javascript
const myForm = document.getElementById("form");

myForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(event);

    // get form elements
    const formElements = event.target.elements;
    const {firstName, secondName} = formElements;
    console.log("The firstName after object destructuring : ")
    console.log(firstName);

    submitViaAPI({
        firstName: firstName.value,
        secondName: secondName.value
    })
});

function submitViaAPI(data){
    console.log(`This is the data : ${typeof(data)}`);
    console.log(data);
    console.log("submitted");
}
