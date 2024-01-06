const formOpenBtn = document.querySelector("#form-open"),
    logSignHome = document.querySelector(".logsign_home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw-hide");

    formOpenBtn.addEventListener("click", () => logSignHome.classList.add("show"))
    formCloseBtn.addEventListener("click", () => logSignHome.classList.remove("show"));

    pwShowHide.forEach(icon => {
        icon.addEventListener("click", () => {
            let getPwInput = icon.parentElement.querySelector("input");
            if(getPwInput.type === "password"){
                getPwInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            }
            else {
                getPwInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        })
    })

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.add("active");
    });

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.remove("active");
    });