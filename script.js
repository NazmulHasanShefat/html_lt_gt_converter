const main_code = document.querySelector("#main-code");
const display = document.querySelector("#display");
const submit = document.querySelector("#submit");
const copy = document.querySelector("#copy");
submit.addEventListener("click", () => {
    let x = main_code.value;
    if (x) {
        x = x.replaceAll(/</g, "&lt;");
        x = x.replaceAll(/>/g, "&gt;");
        x = x.replace(/&lt;|&gt;/gi, function(e){
           return e = e.concat("</span>");
        })
        
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
const copy_code_block_btn = document.querySelector("#copy_code_block_btn");
copy_code_block_btn.addEventListener("click",()=>{
    const code_block_1 = document.querySelector("#code_block_1");
    navigator.clipboard.writeText(code_block_1.innerText);
    copy_code_block_btn.innerHTML = `
    copied<span>
       <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
    `
    setTimeout(()=>{
        copy_code_block_btn.innerHTML = `
         copy<span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
<path d="M7.00001 4.10999C6.14022 4.33198 5.37874 4.83376 4.83558 5.53625C4.29241 6.23875 3.99845 7.10201 4.00001 7.98999V17.99C4.00001 19.0509 4.42149 20.0682 5.17164 20.8184C5.92178 21.5685 6.93914 21.99 8.00001 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C19.9993 7.10372 19.7044 6.24269 19.1614 5.54224C18.6184 4.84178 17.8581 4.34156 17 4.12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5.98999C8.46957 5.98999 7.96089 5.77925 7.58582 5.40417C7.21074 5.0291 7 4.52042 7 3.98999C7 3.45956 7.21074 2.95088 7.58582 2.57581C7.96089 2.20073 8.46957 1.98999 9 1.98999H15C15.5304 1.98999 16.0392 2.20073 16.4142 2.57581C16.7893 2.95088 17 3.45956 17 3.98999C17 4.52042 16.7893 5.0291 16.4142 5.40417C16.0392 5.77925 15.5304 5.98999 15 5.98999H9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
        `
    },1000)
})