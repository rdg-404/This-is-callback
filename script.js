
function newButton(text, callback) { ///Recebendo função como parâmetro
    const $body = document.querySelector('body');
    const $button = document.createElement('button');
    $button.textContent = text;

    callback($button); //chamando a funcao callback


    $body.insertAdjacentElement("beforeend", $button);

}


newButton("Login", (button) => { //enviando função como parameter
    button.style.cssText = `
        font-size: 20px;
    `;

    button.addEventListener("click", () => {
        console.log("Hello World!");
    })
})



newButton("Signup", (button) => {
    button.style.cssText = `
        font-size: 30px;
        color: red;
    `;
})
