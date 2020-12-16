//INDEX PAGE

var userInput = {
    name: "",
    email: "",
    password: "",
    gender: "",
    nationality: "",
}

var userArr = [];

function input() {
    userInput.name = (document.getElementById("fname").value);
    userInput.email = (document.getElementById("email").value);
    userInput.password = (document.getElementById("password").value);
    userInput.nationality = (document.getElementById("nationality").value);

    userArr.push(userInput);


    localStorage.setItem("userArr", JSON.stringify(userArr));


    alert("SignUp Successfully")

    window.location.href = "./signin.html"
    return false;

}


//SIGNIN PAGE

function login() {


    let getdata = JSON.parse(localStorage.getItem("userArr"));

    const email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;



    for (i = 0; i < getdata.length; i++) {

        if ((getdata[i].email === email) && (getdata[i].password === Password)) {
            localStorage.setItem("curentuser", JSON.stringify(getdata[i]));
            alert("Login Success");

            window.location.href = "home.html";

        } else {
            alert("User Not Found");
        }

        
    }

    return false;
}



//HOME PAGE



var currentUser = JSON.parse(localStorage.getItem("curentuser"));

if (currentUser) {
    document.getElementById("name").innerHTML = currentUser.name;
    document.getElementById("email").innerHTML = currentUser.email;
    document.getElementById("nationality").innerHTML = currentUser.nationality;
}