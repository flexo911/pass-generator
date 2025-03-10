"use strict";
const form = document.getElementById("register-form");
    const passNote = document.getElementById("passNote");
    const userPass = document.getElementById("user-pass");
    const passProgress = document.getElementById("passProgress");
    const generatePass = document.getElementById("generate-pass");

    generatePass.addEventListener("click", async (event) => {
      const response = await fetch("http://localhost:3000/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
         userPass.value = data.password;
        checkPassword(userPass.value)

    })

    userPass.addEventListener("input", (e) => {
        checkPassword(userPass.value)
    })

    function checkPassword(password) {
        let strength=0;
        if (password.match(/[a-z]+/)){
            console.log(password.match(/[a-z]+/))
            strength+=15;
        }
        if (password.match(/[A-Z]+/)){
            strength+=15;
        }
        if (password.match(/[0-9]+/)){
            strength+=15;
        }
        if (password.match(/[!@#$%^&*()_+-={}|;:,.<>?]+/)){
            strength+=15;
            }
        if (password.length>6){
             strength+=20;
        }
        if (password.length>12) {
             strength+=20;
        }
        if(strength<=30){
            passProgress.classList.add("bg-danger");
            passProgress.classList.remove("bg-success");
            passProgress.classList.remove("bg-warning");
        }
        if(strength>=30 && strength <=80){
            passProgress.classList.remove("bg-danger");
            passProgress.classList.remove("bg-success");
            passProgress.classList.add("bg-warning");
        }
        if(strength >=80){
            passProgress.classList.remove("bg-danger");
            passProgress.classList.add("bg-success");
            passProgress.classList.remove("bg-warning");
        }

            passProgress.style.width = strength + "%";
            passProgress.innerHTML = strength + "%";
    }
    form.addEventListener("submit", async (event) => {
        alert('registered')
    })