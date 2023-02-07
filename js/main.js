const msg = document.getElementById("msg");
const vazio = document.querySelector(".vazio");
const saida = document.getElementById("saida");
const enviar = document.getElementById("enviar");

function enviarMensagem() {
  if (msg.value === "") {
    vazio.style.display = "flex";
    setTimeout(() => {
      vazio.style.display = "none";
    }, 1200);
  } else {
    saida.innerHTML = msg.value;
    msg.value = "";
  }
}

msg.addEventListener("keyup", (enter) => {
  if (enter.which === 13 || enter.keyCode === 13) {
    enviarMensagem();
  }
});

enviar.addEventListener("click", enviarMensagem);
