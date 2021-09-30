let $msg = document.getElementById("msg");
let $vazio = document.querySelector(".vazio");
let $saida = document.getElementById("saida");
let $enviar = document.getElementById("enviar");

$msg.addEventListener("keyup", function(enter) {
    let chave = enter.which || enter.keyCode;
    if (chave === 13) {
        vazio();
    }

});

$enviar.addEventListener("click", function() {
    vazio();
})

function vazio() {
    if ($msg.value === "") {
        $vazio.style.display = "flex";
        setTimeout(function() { $vazio.style.display = "none"; }, 1200);
    } else {
        $saida.innerHTML = $msg.value;
        $msg.value = "";
    }
}