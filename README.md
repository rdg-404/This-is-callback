<h1 align="center">Como funcionam as callback</h1>
<h2>É uma função sendo executada dentro de outra</h2>

<br><br><br><br><br><br>

<img src="./screenshots/Captura de tela 2022-09-30 220321.png">

* Passa uma função como parâmetro ao chamar a outra função.

<br><br><br><br><br>
<img src="./screenshots/Captura de tela 2022-09-30 220306.png">

* A outra função recebe, sequencialmente, os parâmetros

<br><br><br><br><br>
<img src="./screenshots/Captura de tela 2022-09-30 221546.png">

* Chamando a função callback, recebida como parâmetro acima
* Passando o button como parâmetro, pego na criação da arrow func.


<br><br><br><br><br>
<h1 align="center">Assincronismo</h1>

<h2>Ter um certo tempo de espera para executar</h2>

* Função ``` SetTimeout() ```

``` js
  setTimeout(myFunction, 5000);

  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
  } 

```


* Função ``` SetInterval() ```

``` js

  setInterval(myFunction, 1000);

  function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
  }

```

* Após cada 1 seg chama a função ``` muFunction() ```

