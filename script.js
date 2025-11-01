import generator from "generate-password-browser";

let passButton = document.getElementById('passButton');
let passwordInput = document.getElementById('passwordInput');

passButton.addEventListener('click', () => {
    let myPw = generator.generate({
        length: 14,
        numbers: true,
        symbols: true,
    })
    passwordInput.value = myPw;
})
