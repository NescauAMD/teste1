document.addEventListener("DOMContentLoaded", function() {
    function atualizarContagem() {
        const dataEvento = new Date("Jan 1, 2026 00:00:00").getTime();
        const agora = new Date().getTime();
        const diferenca = dataEvento - agora;

        if (diferenca < 0) {
            document.getElementById("countdown").innerHTML = "O evento já aconteceu!";
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${dias} dias : ${horas} horas : ${minutos} minutos : ${segundos} segundos`;
    }

    atualizarContagem(); // Atualiza imediatamente ao carregar a página
    setInterval(atualizarContagem, 1000); // Atualiza a cada segundo
});