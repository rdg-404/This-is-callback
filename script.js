
///funcao de criar botao
//primeiro param texto de dentro do botao
//segundo param callback sendo pega la da linha 19 e 31
function newButton(text, callback) {
    const $body = document.querySelector('body');
    const $button = document.createElement('button');
    $button.textContent = text;

    callback($button);//excuta a callback recebendo o button la da linha 19 e 31


    $body.insertAdjacentElement("beforeend", $button);

    // return $button;
}



///param button enviado para a callback na linha 10
newButton("Login", (button) => {
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
