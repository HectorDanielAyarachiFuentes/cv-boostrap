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
     // Para descargar en formato PDF
     function downloadPDF() {
        // Retraso para cargar contenido dinámico
        setTimeout(() => {
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();
    
            const element = document.body; // Cambiado a document.body para capturar toda la página
    
            // Agregar la fecha al contenido antes de convertir a PDF
            const dateElement = document.createElement('div');
            dateElement.innerHTML = `<p style="text-align: center;">Descargado el: ${currentDate} a las ${currentTime}</p>`;
            element.appendChild(dateElement);
    
            html2pdf(element, {
                margin: 10,
                filename: 'CURRICULUM VITAE - Héctor Daniel Ayarachi Fuentes.pdf',
                image: { type: 'jpeg', quality: 1.0 }, // Ajustar calidad para mantener colores originales
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Cambiado a formato 'a4'
            }).then(() => {
                // Eliminar el elemento de la fecha después de la conversión a PDF
                element.removeChild(dateElement);
            });
        }, 1000);
    }
    