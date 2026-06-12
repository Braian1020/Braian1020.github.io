/*******************************************************************************
 * CONFIGURACIÓN GENERAL - EDITABLE DESDE AQUÍ
 *******************************************************************************/
const CONFIG = {
    // 1. FECHA DE ANIVERSARIO (Formato: YYYY-MM-DD)
    fechaInicio: "2026-03-13", // <--- CAMBIA ESTA FECHA AQUÍ

    // 2. TEXTO DE LAS CARTAS POR MES (Tono tranquilo y sincero)
    cartaMes1: "¡Feliz primer mes! ❤️ Qué loco cómo cambia la vida en un instante...",
    cartaMes2: "¡Felices 2 meses, mi amor!. ❤️ Gracias por cada momento, por tu cariño y por hacer mis días más felices. Espero que sigamos construyendo muchos recuerdos juntos. Te quiero muchísimo",
    cartaMes3: "¡Felices 3 meses, mi amor. ❤️ Gracias por las aventuras, los viajes, las risas y hasta por los golpes de cada día. 😅 Te quiero mucho y espero seguir creando más recuerdos contigo. 🥰",
    // ... el resto de tus textos sigue igual abajo

    // 3. FOTOGRAFÍAS DE LOS MESES (Rutas relativas a tus carpetas)
    // Agrega tantas como quieras por cada mes para el carrusel interactivo
    imagenesMes: {
        1: ["Img/mes1/1.jpeg","Img/mes1/2.jpeg","Img/mes1/3.jpeg","Img/mes1/4.jpeg","Img/mes1/5.jpeg","Img/mes1/6.jpeg"],
        2: ["Img/mes2/1.jpeg","Img/mes2/2.jpg","Img/mes2/3.jpeg","Img/mes2/4.jpg","Img/mes2/5.jpeg","Img/mes2/6.jpeg","Img/mes2/7.jpeg","Img/mes2/8.jpg","Img/mes2/9.jpeg",],
        3: ["Img/mes3/1.jpeg", "Img/mes3/2.jpeg", "Img/mes3/3.jpeg", "Img/mes3/4.jpeg","Img/mes3/5.jpeg","Img/mes3/6.jpeg","Img/mes3/7.jpeg","Img/mes3/8.jpeg","Img/mes3/9.jpeg","Img/mes3/10.jpeg","Img/mes3/11.jpeg","Img/mes3/12.jpeg","Img/mes3/13.jpeg","Img/mes3/14.jpeg","Img/mes3/15.jpeg","Img/mes3/16.jpeg",]
    },

    // 4. PLAYLIST DE MÚSICA (Coloca tus archivos en la carpeta /music/)
    playlist: [
        { 
            titulo: "Recuerdos para Nostros✨", 
            archivo: "Music.mp3" // <-- Aquí pones el nombre exacto de tu archivo
        },
        { 
            titulo: "Menor que Usted", 
            archivo: "Music1.mp3" 
        },
        { 
            titulo: "Ella Baila Sola", 
            archivo: "Music2.mp3" 
        }
    ],

   // 5. CARTAS SORPRESA (Sobres)
    cartasSorpresa: [
        "Me encanta poder ser tu electricista, tu pintor y tu apoyo en lo que sea que necesites. Cuenta conmigo siempre. 🛠️🎨",
        "Gracias por enseñarme a salir de mi caparazón y mostrarme que hay un mundo entero por recorrer.",
        "Disfruto mucho hacer el desayuno para ti y recordarte, a mi manera, que estoy feliz de tenerte cerca. ☕🍳",
        "Nuestra historia es diferente, inesperada y real. Eso es lo que la hace tan valiosa para mí.",
        "Un recordatorio tranquilo: me haces mucho bien y te quiero de verdad. Gracias por estos 3 meses. 🌸"
    ],

    // 6. MEME CUANDO SE LOGRA PRESIONAR "NO" EN EL JUEGO
    memeNoImagen: "img/meme-no.jpg",

    // 7. PREGUNTAS DEL JUEGO "SI FUERA..."
    preguntasIfGame: [
        { q: "Si fuera un gusanito espacial de otra galaxia, ¿me querrías?", meme: "img/meme-gusanito.jpg" },
        { q: "Si fuera una papa frita olvidada al fondo de la bolsa, ¿me comerías con amor?", meme: "img/meme-papa.jpg" },
        { q: "Si fuera un pingüino torpe que se cae al hielo todo el tiempo, ¿me abrazarías?", meme: "img/meme-pinguino.jpg" },
        { q: "Si fuera una piedrita estorbosa en tu zapato favorito, ¿me conservarías?", meme: "img/meme-piedra.jpg" },
        { q: "Si fuera un gatito gruñón que araña los muebles, ¿me darías mimos?", meme: "img/meme-gatito.jpg" }
    ],

   // 8. ELEMENTOS DE LA LÍNEA DE TIEMPO (Tu historia real)
    lineaTiempo: [
        { fecha: "El Inicio", titulo: "Un giro inesperado", desc: "Llegué a tu vida cuando no lo esperabas, convirtiéndome poco a poco en lo que ambos necesitábamos descubrir." },
        { fecha: "El Cambio", titulo: "Saliendo de mi mundo", desc: "Me sacaste del espacio tan privado que tenía. Contigo aprendí a abrirme más, a detallar y a ser más detallista." },
        { fecha: "La Aventura", titulo: "Rutas y viajes", desc: "Nuestra primera gran experiencia viajando y escalando juntos en Llama, Cajamarca. Algo retador, emocionante y único." }
    ],

    // 9. MURO DE RECUERDOS EXTRA
    muroRecuerdos: [
        { fecha: "20 de Marzo", titulo: "Nuestra primera promesa", foto: "Img/deta/0.jpeg", desc: "El comienzo de todas las promesas que aún nos quedan por cumplir. ❤️🥰"},
        { fecha: "28 de Marzo", titulo: "Nuestro Primer Ceviche de Noche", foto: "Img/deta/3.jpeg", desc: "Nuestro primer ceviche de noche. Hablamos tanto que el tiempo voló, aunque el ceviche tenía tanta sal que hasta me subió la presión por primera vez. 😂❤️"},
        { fecha: "16 de Abril", titulo: "La primera de muchas Flores", foto: "Img/deta/4.jpeg", desc: "El primera rosa que te regalé, esperando que te sacara una sonrisa tan bonita como las que tú me regalas cada día. 🌹✨"},
        { fecha: "9 de Mayo", titulo: "Nuestro primer compartir juntos, sencillo pero perfecto", foto: "Img/deta/5.jpeg", desc: "Nuestro primer compartir juntos, sencillo pero perfecto❤️🌮🥤"},
        { fecha: "17 de Mayo", titulo: "Nuestro primer Viaje", foto: "Img/mes3/2.jpeg", desc: "Nuestra primera aventura juntos, llena de momentos especiales." },
        { fecha: "03 de Junio", titulo: "El Tercero de la Relación", foto: "Img/deta/1.jpeg", desc: "El compañero que la acompañará cuando yo no esté. 🧸✨" }
    ],

    // 10. TEXTO DEL MENSAJE FINAL (Efecto Máquina de Escribir)
    textoFinal: `Sara ❤️\nGracias por estos maravillosos 3 meses.\nCada recuerdo me hace sonreír,\ncada detalle compartido cuenta\ny cada paso contigo es una nueva experiencia.\n\nTe quiero mucho.\nCon aprecio, Pool ✨`
};


/*******************************************************************************
 * LÓGICA DEL SISTEMA (NO TOCAR SI NO TIENES EXPERIENCIA)
 *******************************************************************************/

let currentMonthOpen = null;
let currentImageIndex = 0;
let currentTrackIndex = 0;
let loveNoAttempts = 0;
let currentIfQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    initLluviaCorazones();
    initTimeline();
    initMuroRecuerdos();
    initSobres();
    initReproductor();
    initContador();

    // Pantalla de Bienvenida -> Contenido Principal
    document.getElementById("btn-enter").addEventListener("click", () => {
        document.getElementById("welcome-screen").classList.remove("active");
        document.getElementById("welcome-screen").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
        // Iniciar reproducción automática de música si los navegadores lo permiten
        document.getElementById("main-audio").play().catch(() => console.log("Auto-play bloqueado por el navegador. Requiere interacción previa."));
        initScrollAnimations();
        triggerTypewriter();
    });

    // Inicializar interacción del juego principal "¿Me quieres?"
    initLoveGame();
    // Inicializar juego extra "Si fuera..."
    showIfQuestion();
});

/* --- LLUVIA DE CORAZONES --- */
function initLluviaCorazones() {
    const container = document.getElementById("heart-rain-container");
    const containerWidth = window.innerWidth;
    
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * containerWidth + "px";
        heart.style.fontSize = Math.random() * (25 - 12) + 12 + "px";
        heart.style.animationDuration = Math.random() * (6 - 3) + 3 + "s";
        container.appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 6000);
    }, 400);
}

/* --- ANIMACIONES AL HACER SCROLL --- */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-anim');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

/* --- CONTADOR DINÁMICO --- */
function initContador() {
    const targetDate = new Date(CONFIG.fechaInicio + "T00:00:00");
    
    function updateCounter() {
        const now = new Date();
        let diff = now - targetDate;
        if (diff < 0) diff = 0;

        // Cálculo aproximado de meses y días restantes
        let months = (now.getFullYear() - targetDate.getFullYear()) * 12 + (now.getMonth() - targetDate.getMonth());
        if (now.getDate() < targetDate.getDate()) {
            months--;
        }
        
        // Ajustar fecha base para el remanente de días/horas
        let baseDate = new Date(targetDate);
        baseDate.setMonth(baseDate.getMonth() + months);
        let remDiff = now - baseDate;

        const secs = Math.floor(remDiff / 1000) % 60;
        const mins = Math.floor(remDiff / (1000 * 60)) % 60;
        const hours = Math.floor(remDiff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(remDiff / (1000 * 60 * 60 * 24));

        document.getElementById("count-months").innerText = months.toString().padStart(2, '0');
        document.getElementById("count-days").innerText = days.toString().padStart(2, '0');
        document.getElementById("count-hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("count-minutes").innerText = mins.toString().padStart(2, '0');
        document.getElementById("count-seconds").innerText = secs.toString().padStart(2, '0');
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}

/* --- DINÁMICOS: TIMELINE Y MURO --- */
function initTimeline() {
    const container = document.getElementById("timeline-container");
    CONFIG.lineaTiempo.forEach((item, index) => {
        const side = index % 2 === 0 ? "left" : "right";
        container.innerHTML += `
            <div class="timeline-item ${side}">
                <div class="timeline-content">
                    <span style="font-weight:bold; color:var(--dark-rose);">${item.fecha}</span>
                    <h3>${item.titulo}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
    });
}

function initMuroRecuerdos() {
    const container = document.getElementById("muro-container");
    container.innerHTML = ""; 
    CONFIG.muroRecuerdos.forEach((rec, index) => {
        container.innerHTML += `
            <div class="muro-card">
                <img src="${rec.foto}" alt="${rec.titulo}" class="muro-img-clickable" onclick="openMuroLightbox('${rec.foto}', '${rec.titulo}')" onerror="this.src='https://placehold.co/400x300?text=Foto+Recuerdo'">
                <div class="muro-info">
                    <span class="muro-date">${rec.fecha}</span>
                    <h3>${rec.titulo}</h3>
                    <p>${rec.desc}</p>
                </div>
            </div>
        `;
    });

    // Crear el contenedor del Lightbox para el muro si no existe
    if (!document.getElementById("muro-lightbox")) {
        const lightboxHtml = `
            <div id="muro-lightbox" class="lightbox hidden" onclick="closeMuroLightbox()">
                <span class="close-lightbox">&times;</span>
                <div class="lightbox-content" onclick="event.stopPropagation()">
                    <img id="muro-lightbox-img" src="" alt="" style="max-width:100%; max-height:75vh; border-radius:10px; object-fit:contain;">
                    <h3 id="muro-lightbox-caption" style="margin-top:15px; color:var(--dark-text);"></h3>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHtml);
    }
}

// Funciones para abrir y cerrar el Lightbox del muro
function openMuroLightbox(src, title) {
    const lightbox = document.getElementById("muro-lightbox");
    document.getElementById("muro-lightbox-img").src = src;
    document.getElementById("muro-lightbox-caption").innerText = title;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("active");
}

function closeMuroLightbox() {
    const lightbox = document.getElementById("muro-lightbox");
    lightbox.classList.remove("active");
    lightbox.classList.add("hidden");
}

/* --- INTERACTIVIDAD ÁLBUM POR MESES (LIGHTBOX + CARRUSEL) --- */
function openLightboxMonth(monthNum) {
    currentMonthOpen = monthNum;
    currentImageIndex = 0;
    
    // Inyectar texto de carta adaptado
    let txt = CONFIG[`cartaMes${monthNum}`];
    document.getElementById("lightbox-letter-text").innerText = txt;
    
    // Configurar carrusel de imágenes
    updateCarouselUI();
    
    document.getElementById("album-lightbox").classList.remove("hidden");
    document.getElementById("album-lightbox").classList.add("active");
}

function closeLightboxMonth() {
    document.getElementById("album-lightbox").classList.remove("active");
    document.getElementById("album-lightbox").classList.add("hidden");
}

function updateCarouselUI() {
    const slideContainer = document.getElementById("carousel-images");
    slideContainer.innerHTML = "";
    
    const arrayImgs = CONFIG.imagenesMes[currentMonthOpen] || [];
    if(arrayImgs.length === 0) {
        slideContainer.innerHTML = `<img src="https://placehold.co/600x400?text=Mes+${currentMonthOpen}" alt="Placeholder">`;
        return;
    }
    
    const currentImgUrl = arrayImgs[currentImageIndex];
    const imgEl = document.createElement("img");
    imgEl.src = currentImgUrl;
    imgEl.alt = "Recuerdo del mes " + currentMonthOpen;
    imgEl.onerror = function() { this.src = `https://placehold.co/600x400?text=Foto+${currentImageIndex+1}`; };
    slideContainer.appendChild(imgEl);
}

function moveCarousel(direction) {
    const arrayImgs = CONFIG.imagenesMes[currentMonthOpen] || [];
    if(arrayImgs.length === 0) return;
    
    currentImageIndex += direction;
    if(currentImageIndex >= arrayImgs.length) currentImageIndex = 0;
    if(currentImageIndex < 0) currentImageIndex = arrayImgs.length - 1;
    
    updateCarouselUI();
}

/* --- REPRODUCTOR DE MÚSICA --- */
function initReproductor() {
    const audio = document.getElementById("main-audio");
    const playBtn = document.getElementById("player-play");
    const prevBtn = document.getElementById("player-prev");
    const nextBtn = document.getElementById("player-next");
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.getElementById("progress-container");
    const trackTitle = document.getElementById("track-title");
    const trackTime = document.getElementById("track-time");
    const volumeSlider = document.getElementById("volume-slider");

    function loadTrack(index) {
        if(!CONFIG.playlist[index]) return;
        audio.src = CONFIG.playlist[index].archivo;
        trackTitle.innerText = CONFIG.playlist[index].titulo;
    }

    function playTrack() {
        audio.play().then(() => {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(err => console.log("Esperando interacción del usuario: ", err));
    }

    function pauseTrack() {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }

    playBtn.addEventListener("click", () => {
        if (audio.paused) playTrack(); else pauseTrack();
    });

    prevBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + CONFIG.playlist.length) % CONFIG.playlist.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    nextBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + 1) % CONFIG.playlist.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    audio.addEventListener("timeupdate", () => {
        const { duration, currentTime } = audio;
        if(!duration) return;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Formatear tiempos
        const format = (time) => Math.floor(time / 60) + ":" + Math.floor(time % 60).toString().padStart(2, '0');
        trackTime.innerText = `${format(currentTime)} / ${format(duration)}`;
    });

    progressContainer.addEventListener("click", (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        if(duration) audio.currentTime = (clickX / width) * duration;
    });

    volumeSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });

    // Inicializar primera pista
    loadTrack(currentTrackIndex);
}

/* --- SOBRES DE CARTAS SORPRESA --- */
function initSobres() {
    const container = document.getElementById("envelopes-container");
    CONFIG.cartasSorpresa.forEach((_, idx) => {
        container.innerHTML += `
            <div class="envelope-wrapper" onclick="openEnvelope(${idx})">
                <div class="envelope-icon"><i class="fas fa-envelope-open-text"></i></div>
                <p style="margin-top:10px; font-weight:600;">Carta ${idx + 1}</p>
            </div>
        `;
    });
}

function openEnvelope(index) {
    const text = CONFIG.cartasSorpresa[index];
    document.getElementById("surprise-modal-text").innerText = text;
    document.getElementById("surprise-modal").classList.remove("hidden");
    document.getElementById("surprise-modal").classList.add("active");
    triggerConfettiEfecto();
}

function closeSurpriseModal() {
    document.getElementById("surprise-modal").classList.remove("active");
    document.getElementById("surprise-modal").classList.add("hidden");
}

/* --- EFECTO CONFETI AUXILIAR --- */
function triggerConfettiEfecto() {
    // Generación ráfaga temporal de corazones para simular confeti
    const container = document.getElementById("heart-rain-container");
    for (let i = 0; i < 30; i++) {
        const c = document.createElement("div");
        c.classList.add("floating-heart");
        c.innerHTML = "💖";
        c.style.left = (window.innerWidth / 2) + (Math.random() * 300 - 150) + "px";
        c.style.top = (window.innerHeight / 2) + (Math.random() * 300 - 150) + "px";
        c.style.fontSize = Math.random() * (30 - 15) + 15 + "px";
        c.style.animationDuration = "2s";
        container.appendChild(c);
        setTimeout(() => c.remove(), 2000);
    }
}

/* --- JUEGO 1: ¿ME QUIERES? --- */
function initLoveGame() {
    const btnYes = document.getElementById("btn-love-yes");
    const btnNo = document.getElementById("btn-love-no");
    const hintText = document.getElementById("love-game-hint");
    const space = document.getElementById("love-game-space");

    const phrases = [
        "¿Segura? 🥺",
        "Piensa bien 😭",
        "Yo sí te quiero ❤️",
        "¡Inténtalo otra vez! No acepto un no 👀",
        "¡Te tengo en la mira! 🎯"
    ];

    btnNo.addEventListener("mouseover", moverBotonNo);
    btnNo.addEventListener("click", (e) => {
        e.preventDefault();
        moverBotonNo();
        loveNoAttempts++;
        if (loveNoAttempts >= 5) {
            finalizarMemeNo();
        }
    });

    function moverBotonNo() {
        const spaceWidth = space.clientWidth - btnNo.clientWidth;
        const spaceHeight = space.clientHeight - btnNo.clientHeight;
        
        const randX = Math.max(0, Math.floor(Math.random() * spaceWidth));
        const randY = Math.max(0, Math.floor(Math.random() * spaceHeight));
        
        btnNo.style.left = randX + "px";
        btnNo.style.top = randY + "px";

        // Cambiar texto de pista
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        hintText.innerText = randomPhrase;
    }

    btnYes.addEventListener("click", () => {
        hintText.innerText = "¡Sabía que me querías muchísimo! 😍✨";
        triggerConfettiEfecto();
    });

    function finalizarMemeNo() {
        const resultDiv = document.getElementById("love-game-result");
        resultDiv.innerHTML = `
            <p style="font-weight:bold; margin-top:15px;">Ya sabía que no me querías 😭</p>
            <img class="meme-img" src="${CONFIG.memeNoImagen}" onerror="this.src='https://placehold.co/300x200?text=Meme+No+Encontrado'" alt="Meme triste">
        `;
        resultDiv.classList.remove("hidden");
    }
}

/* --- JUEGO 2: SI FUERA... --- */
function showIfQuestion() {
    const qObj = CONFIG.preguntasIfGame[currentIfQuestionIndex];
    document.getElementById("if-game-question").innerText = qObj.q;
    document.getElementById("if-game-result").classList.add("hidden");
    document.getElementById("if-game-content").classList.remove("hidden");
}

function answerIfGame(isYes) {
    const resultDiv = document.getElementById("if-game-result");
    const currentQ = CONFIG.preguntasIfGame[currentIfQuestionIndex];
    document.getElementById("if-game-content").classList.add("hidden");
    resultDiv.classList.remove("hidden");

    if (isYes) {
        resultDiv.innerHTML = `
            <p style="color:var(--romantic-red); font-weight:bold;">¡Aww! Yo sabía que tu amor supera cualquier forma física 🥰. ¡Eres la mejor!</p>
            <div style="font-size:3rem; animation: pulse 1s infinite;">💖</div>
            <button onclick="nextIfQuestion()" class="btn-romantic" style="padding:5px 15px; font-size:0.9rem; margin-top:10px;">Siguiente</button>
        `;
        triggerConfettiEfecto();
    } else {
        resultDiv.innerHTML = `
            <p style="font-weight:bold;">¡Qué mala! Me dejas plantado en mi versión alternativa 💔😂</p>
            <img class="meme-img" src="${currentQ.meme}" onerror="this.src='https://placehold.co/300x200?text=Reacci%C3%B3n+Meme'" alt="Meme Reacción">
            <br>
            <button onclick="nextIfQuestion()" class="btn-romantic" style="padding:5px 15px; font-size:0.9rem; margin-top:10px;">Siguiente pregunta</button>
        `;
    }
}

function nextIfQuestion() {
    currentIfQuestionIndex = (currentIfQuestionIndex + 1) % CONFIG.preguntasIfGame.length;
    showIfQuestion();
}

/* --- MÁQUINA DE ESCRIBIR (MENSAJE FINAL) --- */
function triggerTypewriter() {
    const element = document.getElementById("typewriter-text");
    const text = CONFIG.textoFinal;
    let i = 0;
    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            // Manejar saltos de línea correctamente en HTML
            if(text.charAt(i) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(type, 60); // Velocidad de escritura
        }
    }
    // Se ejecuta al cargar, pero solo será visible en el scroll suave final
    type();
}