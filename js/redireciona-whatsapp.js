document.addEventListener("DOMContentLoaded", () => {
  let segundos = 5;
  const conteudo = document.querySelector(".conteudo-obrigado");

  if (!conteudo) return; // segurança

  const texto = document.createElement("p");
  texto.style.marginTop = "20px";
  texto.style.color = "#054f77";
  texto.style.fontWeight = "600";
  texto.style.fontSize = "1.1rem";
  texto.textContent = `Você será redirecionado para o WhatsApp em ${segundos} segundos...`;
  conteudo.appendChild(texto);

  const contador = setInterval(() => {
    segundos--;
    texto.textContent = `Você será redirecionado para o WhatsApp em ${segundos} segundos...`;

    if (segundos === 0) {
      clearInterval(contador);
      window.open(
        "https://wa.me/5521985371561?text=Olá%20Pedro!%20Acabei%20de%20enviar%20meus%20dados%20no%20site.",
        "_blank"
      );
    }
  }, 1000);
});
