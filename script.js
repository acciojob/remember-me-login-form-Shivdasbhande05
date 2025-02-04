//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
const getName = document.querySelector("#username");
const getPassword = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");
const submitBtn = document.querySelector("#submit");
const existingBtn = document.querySelector("#existing");

const savedName = localStorage.getItem("Username");
const savedPassword = localStorage.getItem("Password");

if(savedName && savedPassword){
    existingBtn.style.display = "block";
} else {
    existingBtn.style.display = "none";
}


function setItem() {
    localStorage.setItem("Username",getName.value.trim());
    localStorage.setItem("Password",getPassword.value.trim());
}
function removeItem() {
    localStorage.removeItem("Username",getName.value.trim());
    localStorage.removeItem("Password",getPassword.value.trim());
}

submitBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    if(checkbox.checked){
        setItem();
    } else {
        removeItem();
    }

    alert(`Logged in as ${getName.value.trim()}`);

    existingBtn.style.display = "block";
});

existingBtn.addEventListener("click",() => {
    if(savedName){
        alert(`Logged in as ${savedName}`);
    }
})

})


