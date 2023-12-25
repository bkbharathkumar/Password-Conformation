let Container = document.querySelector(".Container");
let inputs = document.querySelectorAll("input");
let pwd = document.querySelector("#pwd");
let cpwd = document.querySelector("#cpwd");
let bsub = document.querySelector("#bsub");
let msg = document.querySelector("#msg");
let emsg = document.querySelector("#emsg");
let email = document.querySelector('#email');
let mail = document.querySelector(".mail");
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

Container.addEventListener("keyup", () => {

    if (!(email.value.match(emailPattern))) {
        emsg.innerHTML = "  ";
        emsg.style.color = "#fa8231";

    }
})

bsub.addEventListener("click", () => {
    let password = pwd.value;
    let Cpassword = cpwd.value;
    console.log(email.value);


    if (password != 0) {
        if (Cpassword != 0) {
            if (password == Cpassword) {
                msg.innerHTML = "The password is Correct";
                msg.style.color = "#16a085";
                Container.classList.add("correct");

            } else {
                msg.innerHTML = "The Password is Incorrect";
                msg.style.color = "#e74c3c";
                Container.classList.add("Incorrect");
            }

        } else {
            msg.innerHTML = "Enter your Confirm password";
            msg.style.color = "#fa8231";
            Container.classList.add("Warning");
        }

    } else {
        msg.innerHTML = "Enter your password";
        msg.style.color = "#fa8231";
        Container.classList.add("Warning");
    }
});
//let input;
inputs.forEach((input) => {
    input.addEventListener("click", () => {
        // console.log(input);


        Container.classList.remove("correct");
        Container.classList.remove("Incorrect");
        Container.classList.remove("Warning");
        if ((!mail.classList.contains("emailWarning")) && !(email.value.match(emailPattern))) {

            mail.classList.add("emailWarning");
        }
        if (!email.value.match(emailPattern)) {
            emsg.innerHTML = "Invalid Email";
            mail.classList.add("emailWarning");
        }



        if (email.value.match(emailPattern)) {
            mail.classList.remove("emailWarning");
            emsg.innerHTML = "";
            //  {
            //     msg.innerHTML = "Invalid Email";
        }
        // mail.classList.remove("emailWarning");

        msg.innerHTML = " ";
        msg.style.color = "#0652DD"
    });
});