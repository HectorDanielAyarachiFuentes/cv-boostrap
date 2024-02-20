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


    function downloadPDF() {
        // Obtener la fecha actual
        const fechaActual = new Date();
        
        // Formatear la fecha como desees, por ejemplo: "DD/MM/YYYY HH:mm:ss"
        const formatoFecha = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const fechaFormateada = fechaActual.toLocaleString('es-ES', formatoFecha);
    
        // Mostrar la fecha en el elemento HTML
        document.getElementById('fechaDescarga').innerText = `Fecha de descarga: ${fechaFormateada}`;
    
        // Capturar toda la página para descargar en formato PDF
        window.print();
    }