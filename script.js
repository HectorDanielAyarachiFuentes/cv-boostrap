
    // Obtener referencias a elementos HTML
    var audioPlayer = document.getElementById("audio-player");
    var ramoncito = document.getElementById("ramoncito");
    // Agregar un controlador de eventos para el clic en el elemento <span>
    ramoncito.addEventListener("click", function () {
        // Si el audio está pausado, reproducirlo; de lo contrario, pausarlo
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
