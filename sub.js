const inputs = document.querySelectorAll("input,textarea");

inputs.forEach(element => {
    element.addEventListener("change", () => {
        let submit = true;
        inputs.forEach(element => {
            if (!element.value) {
                submit = false;
            }
        });
        if (submit) {
            const button = document.getElementById("sub-button");
            button.classList.toggle("disabled");
        }
    })
});


