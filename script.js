const main_code = document.querySelector("#main-code");
const display = document.querySelector("#display");
const submit = document.querySelector("#submit");
const copy = document.querySelector("#copy");
submit.addEventListener("click", () => {
    let x = main_code.value;
    if (x) {
        x = x.replaceAll(/</g, "&lt;");
        x = x.replaceAll(/>/g, "&gt;");
        display.value = x;
        submit.innerText = "Converted";
        setTimeout(()=>{
            submit.innerText = "Submit";
        },1000)
    } else {
        Swal.fire({
            icon: "error",
            title: "Please enter some code!",
        });
    }
});
copy.addEventListener("click", () => {
    let display_text = display.value;
    if (display_text) {
        navigator.clipboard.writeText(display_text);
        copy.innerText = "copied ✓";
        setTimeout(() => {
            copy.innerText = "Copy";
        }, 2000);
    } else {
        Swal.fire({
            icon: "error",
            title: "Copy faild plaese enter some text",
        });
    }
})