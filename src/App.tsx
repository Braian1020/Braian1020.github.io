/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import PhotoCatalog from "./components/PhotoCatalog";
import BackgroundRomanticVideo from "./components/BackgroundRomanticVideo";
import PeruTravelCollage from "./components/PeruTravelCollage";
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  Menu,
  X,
  Lock,
  Unlock,
  CheckCircle2,
  Music,
  Play,
  Pause,
  Volume2,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from "lucide-react";

// --- CONFIGURATION CONSTANTS (From original script.js) ---
const CONFIG = {
  fechaInicio: "2026-03-13",
  
  cartaMes1: "¡Feliz primer mes! ❤️ Qué loco cómo cambia la vida en un instante...",
  cartaMes2: "¡Felices 2 meses, mi amor!. ❤️ Gracias por cada momento, por tu cariño y por hacer mis días más felices. Espero que sigamos construyendo muchos recuerdos juntos. Te quiero muchísimo",
  cartaMes3: "¡Felices 3 meses, mi amor. ❤️ Gracias por las aventuras, los viajes, las risas y hasta por los golpes de cada día. 😅 Te quiero mucho y espero seguir creando más recuerdos contigo. 🥰",
  cartaMes4: "¡Felices 4 meses, mi amor! ❤️\n\nEste mes ha sido un capítulo completamente diferente en nuestra historia. Después de las aventuras, los viajes emocionantes y las salidas constantes, nos tocó poner una pausa, quedarnos más tiempo en casita y entrar en el famoso \"modo ahorradores\". Al principio, tal vez podría parecer un reto, pero para mí ha sido uno de los meses más hermosos y reveladores a tu lado.\n\nDicen que el amor se prueba en los momentos de calma, de rutina y de esfuerzo compartido, y estos últimos treinta días han sido la prueba viviente de que somos un equipo extraordinario. Descubrir que no necesitamos planes extravagantes ni grandes gastos para pasarla increíble, reír a carcajadas y sentirnos plenamente felices es un regalo invaluable. Me encanta cómo disfrutamos de las cosas más simples: preparar un desayuno juntos en casa, ver películas acurrucados, conversar por horas planeando el mañana o simplemente estar en silencio sabiendo que estamos ahí el uno para el otro. Nuestro amor no necesita lujos; se nutre de nuestra complicidad.\n\nEste mes también nos ha traído grandes victorias que celebrar con el corazón lleno. La noticia más maravillosa de todas es que nuestra pequeña Gitana ya está libre de cáncer. Verla sana es un alivio inmenso, y el hecho de estar ahorrando juntos con tanto amor para su operación de esterilización demuestra el enorme corazón que tienes y la hermosa familia que estamos construyendo. \n\nPor otro lado, me llena de orgullo verte dándolo todo, tan enfocada y dedicada a tu tesis. Admiro tu inteligencia, tu disciplina y esa fuerza con la que avanzas hacia tus metas profesionales; sé que vas a brillar en tu sustentación y aquí estaré siempre para aplaudir tus éxitos. Andar por la calle y poder sacar mi licencia de conducir es un paso del cual me alegro mucho, porque sé que es el inicio de muchas más rutas y caminos que recorreremos juntos cuando llegue el momento.\n\nGracias por enseñarme que en las buenas, en las malas, en la abundancia y en el ahorro, estar contigo siempre es la mejor decisión. Eres mi hogar, mi compañera de aventuras y mi persona favorita en el mundo. Te quiero con toda mi alma, mi amor. ¡Felices 4 meses! 🥰✨",

  imagenesMes: {
    1: [
      "Img/mes1/1.jpeg",
      "Img/mes1/2.jpeg",
      "Img/mes1/3.jpeg",
      "Img/mes1/4.jpeg",
      "Img/mes1/5.jpeg",
      "Img/mes1/6.jpeg"
    ],
    2: [
      "Img/mes2/1.jpeg",
      "Img/mes2/2.jpg",
      "Img/mes2/3.jpeg",
      "Img/mes2/4.jpg",
      "Img/mes2/5.jpeg",
      "Img/mes2/6.jpeg",
      "Img/mes2/7.jpeg",
      "Img/mes2/8.jpg",
      "Img/mes2/9.jpeg"
    ],
    3: [
      "Img/mes3/1.jpeg",
      "Img/mes3/2.jpeg",
      "Img/mes3/3.jpeg",
      "Img/mes3/4.jpeg",
      "Img/mes3/5.jpeg",
      "Img/mes3/6.jpeg",
      "Img/mes3/7.jpeg",
      "Img/mes3/8.jpeg",
      "Img/mes3/9.jpeg",
      "Img/mes3/10.jpeg",
      "Img/mes3/11.jpeg",
      "Img/mes3/12.jpeg",
      "Img/mes3/13.jpeg",
      "Img/mes3/14.jpeg",
      "Img/mes3/15.jpeg",
      "Img/mes3/16.jpeg"
    ],
    4: [
      "https://lh3.googleusercontent.com/d/1zSSHqssNq7P5YDhljaq20uSE4-AOEHT1",
      "https://lh3.googleusercontent.com/d/1q3CjNacY6D-tcTUCEiBSZs8E2gyiMnPL",
      "https://lh3.googleusercontent.com/d/14HL9If6eB5EnZlmAcEdYqShvnltKeo98",
      "https://lh3.googleusercontent.com/d/1ocy28kPt3T36Yo2nqSEx8K9ev8pppKGI",
      "https://lh3.googleusercontent.com/d/1jVFmUKgcSN8C2_s9isrxKszxE19jk6bK"
    ]
  } as Record<number, string[]>,

  playlist: [
    { titulo: "Recuerdos para Nosotros✨", archivo: "Music.mp3" },
    { titulo: "Menor que Usted", archivo: "Music1.mp3" },
    { titulo: "Ella Baila Sola", archivo: "Music2.mp3" }
  ],

  cartasSorpresa: [
    "Me encanta poder ser tu electricista, tu pintor y tu apoyo en lo que sea que necesites. Cuenta conmigo siempre. 🛠️🎨",
    "Gracias por enseñarme a salir de mi caparazón y mostrarme que hay un mundo entero por recorrer.",
    "Disfruto mucho hacer el desayuno para ti y recordarte, a mi manera, que estoy feliz de tenerte cerca. ☕🍳",
    "Nuestra historia es diferente, inesperada y real. Eso es lo que la hace tan valiosa para mí.",
    "Un recordatorio tranquilo: me haces mucho bien y te quiero de verdad. Gracias por cada día a tu lado. 🌸"
  ],

  lineaTiempo: [
    { fecha: "El Inicio", titulo: "Un giro inesperado", desc: "Llegué a tu vida cuando no lo esperabas, convirtiéndome poco a poco en lo que ambos necesitábamos descubrir." },
    { fecha: "El Cambio", titulo: "Saliendo de mi mundo", desc: "Me sacaste del espacio tan privado que tenía. Contigo aprendí a abrirme más, a detallar y a ser más detallista." },
    { fecha: "La Aventura", titulo: "Rutas y viajes", desc: "Nuestra primera gran experiencia viajando y escalando juntos en Llama, Cajamarca. Algo retador, emocionante y único." }
  ],

  muroRecuerdos: [
    { fecha: "20 de Marzo", titulo: "Nuestra primera promesa", foto: "Img/deta/0.jpeg", desc: "El comienzo de todas las promesas que aún nos quedan por cumplir. ❤️🥰" },
    { fecha: "28 de Marzo", titulo: "Nuestro Primer Ceviche de Noche", foto: "Img/deta/3.jpeg", desc: "Nuestro primer ceviche de noche. Hablamos tanto que el tiempo voló, aunque el ceviche tenía tanta sal que hasta me subió la presión por primera vez. 😂❤️" },
    { fecha: "16 de Abril", titulo: "La primera de muchas Flores", foto: "Img/deta/4.jpeg", desc: "La primera rosa que te regalé, esperando que te sacara una sonrisa tan bonita como las que tú me regalas cada día. 🌹✨" },
    { fecha: "9 de Mayo", titulo: "Nuestro primer compartir juntos, sencillo pero perfecto", foto: "Img/deta/5.jpeg", desc: "Nuestro primer compartir juntos, sencillo pero perfecto ❤️🌮🥤" },
    { fecha: "17 de Mayo", titulo: "Nuestro primer Viaje", foto: "Img/mes3/2.jpeg", desc: "Nuestra primera aventura juntos, llena de momentos especiales." },
    { fecha: "03 de Junio", titulo: "El Tercero de la Relación", foto: "Img/deta/1.jpeg", desc: "El compañero que la acompañará cuando yo no esté. 🧸✨" },
    { fecha: "07 de Julio", titulo: "Nuestra Campeona Gitana", foto: "https://lh3.googleusercontent.com/d/1ocy28kPt3T36Yo2nqSEx8K9ev8pppKGI", desc: "Ver a nuestra valiente Gitana ganarle por completo la batalla al cáncer es el regalo más hermoso de la vida. Hoy nos toca consentirla con mucho amor en su camita, mientras nos ponemos en modo súper ahorradores, uniendo fuerzas como el gran equipo que somos para planificar su operación de esterilización y asegurarnos de que siga llenando nuestros días con su colita alegre y su amor perruno incomparable. 🐾🎗️❤️" }
  ],

  textoFinal: `Sara ❤️\nGracias por construir esta hermosa historia a mi lado.\nCada recuerdo me hace sonreír,\ncada detalle compartido cuenta\ny cada paso contigo es una hermosa aventura.\n\nTe quiero con todo mi corazón.\nCon todo mi amor, Pool ✨`
};

const MONTH4_RECUERDOS = [
  {
    title: "¡Gitana libre de Cáncer! 🐶🎗️",
    foto: "https://lh3.googleusercontent.com/d/1zSSHqssNq7P5YDhljaq20uSE4-AOEHT1",
    desc: "¡Nuestra hermosa campeona superó el cáncer por completo! Verla sana y moviendo la cola es la felicidad más grande de este mes. Seguimos sumando esfuerzos con mucho amor para su operación de esterilización.",
    tag: "#AmorPerruno #FelicidadInfinita"
  },
  {
    title: "¡Licencia de Pool! 🚗🪪",
    foto: "https://lh3.googleusercontent.com/d/1q3CjNacY6D-tcTUCEiBSZs8E2gyiMnPL",
    desc: "¡Por fin logré sacar mi licencia de conducir! Un paso muy feliz que nos abre las puertas para planear muchos más paseos, rutas seguras y viajes increíbles de copilotos en el futuro.",
    tag: "#MetaCumplida #NuevosCaminos"
  },
  {
    title: "Valkiria & Gitana 🐱🐶",
    foto: "https://lh3.googleusercontent.com/d/14HL9If6eB5EnZlmAcEdYqShvnltKeo98",
    desc: "Nuestras hermosas hijas conociéndose... pero de lejitos y a distancia. ¡Se conocen de reojo pero no se pueden ni ver! 😂 Esperamos que con el tiempo se vuelvan las mejores compinches de travesuras.",
    tag: "#HijasPerrunaYGatuna #AmorSalvaje"
  },
  {
    title: "La camita de Gitana 🛏️🔨",
    foto: "https://lh3.googleusercontent.com/d/1ocy28kPt3T36Yo2nqSEx8K9ev8pppKGI",
    desc: "Su obsequio especial por ganarle al cáncer... ¡duró menos de 12 horas! Lo destruyó con una felicidad absoluta y sin una pizca de arrepentimiento. Gitana siendo 100% auténtica. 😂",
    tag: "#GitanaDestructora #AmorPerruno"
  },
  {
    title: "Nuestra bebida proteica 🥛🍓",
    foto: "https://lh3.googleusercontent.com/d/1jVFmUKgcSN8C2_s9isrxKszxE19jk6bK",
    desc: "El combustible y batido oficial de nuestras tardes fitness en casa. Cuidando el bolsillo, manteniéndonos saludables y disfrutando de los placeres más sencillos de la vida juntos.",
    tag: "#ProteinaDeAmor #ModoAhorro"
  }
];

function SafeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="relative w-full h-full bg-[#fff0f3] flex items-center justify-center overflow-hidden">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#fff5f7] text-xs text-[#ff85a1] animate-pulse">
          <span>Cargando recuerdo... ✨</span>
        </div>
      )}
      {!error ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`${className || ""} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300 w-full h-full object-cover`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#ffe5ec] to-[#ffc2d1] p-4 text-center">
          <span className="text-3xl mb-1">✨💝</span>
          <span className="text-[10px] font-bold text-[#e63946] uppercase tracking-wider">Recuerdo Guardado</span>
          <span className="text-[9px] text-[#4a1525]/70 mt-1 flex items-center gap-1">
            Ver original <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>
      )}
    </div>
  );
}

interface HeartParticle {
  id: number;
  left: number;
  fontSize: number;
  duration: number;
  char: string;
}

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
}

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Password Question Start Interface State ---
  const [passwordInput, setPasswordInput] = useState("");
  const [rawDateValue, setRawDateValue] = useState("");
  const [entryMode, setEntryMode] = useState<"calendar" | "text">("calendar");
  const [passwordError, setPasswordError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockSuccessMsg, setUnlockSuccessMsg] = useState("");

  // --- Background Heart Rain State & Effect ---
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const chars = ["❤️", "💖", "💕", "🌸", "✨", "💗", "💘"];
    const interval = setInterval(() => {
      const newHeart: HeartParticle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        fontSize: Math.random() * 16 + 10, // 10px to 26px
        duration: Math.random() * 3 + 3,   // 3s to 6s
        char: chars[Math.floor(Math.random() * chars.length)]
      };
      setHearts(prev => [...prev, newHeart]);
      
      // Clear heart from state after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 6000);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // --- Confetti Sparkles State & Effect ---
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);

  const triggerConfetti = () => {
    const newSparkles: SparkleParticle[] = [];
    const colors = ["#ffafcc", "#ff85a1", "#e63946", "#ffb703", "#ffffff", "#ff4d6d"];
    for (let i = 0; i < 40; i++) {
      newSparkles.push({
        id: Date.now() + Math.random() + i,
        x: 50,
        y: 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 16 + 12,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 8 + 4
      });
    }
    setSparkles(prev => [...prev, ...newSparkles]);
  };

  useEffect(() => {
    if (sparkles.length === 0) return;
    const interval = setInterval(() => {
      setSparkles(prev => {
        return prev
          .map(s => {
            const nextX = s.x + Math.cos(s.angle) * s.speed * 0.25;
            const nextY = s.y + Math.sin(s.angle) * s.speed * 0.25 + 0.35; // Slight gravity pull
            return {
              ...s,
              x: nextX,
              y: nextY,
              size: Math.max(0, s.size - 0.25)
            };
          })
          .filter(s => s.size > 0 && s.x >= 0 && s.x <= 100 && s.y >= 0 && s.y <= 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [sparkles]);

  // --- Audio Player State & Controls ---
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex(prev => (prev + 1) % CONFIG.playlist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex(prev => (prev - 1 + CONFIG.playlist.length) % CONFIG.playlist.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    nextTrack();
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (audioRef.current && duration) {
      audioRef.current.currentTime = pos * duration;
      setCurrentTime(pos * duration);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // --- Final Letter Typewriter State ---
  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    if (!hasEntered) return;
    let idx = 0;
    const fullText = CONFIG.textoFinal;
    setTypewriterText("");

    const timer = setInterval(() => {
      if (idx < fullText.length) {
        setTypewriterText(fullText.slice(0, idx + 1));
        idx++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [hasEntered]);

  // Handle question password verification
  const handleVerifyPassword = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Check either passwordInput or rawDateValue
    const candidate = (entryMode === "calendar" && rawDateValue ? rawDateValue : passwordInput).trim();
    const raw = candidate.toLowerCase();
    // Normalize: remove slashes, dashes, dots, spaces, commas
    const normalized = raw.replace(/[\s\.\-\/\,]+/g, "");

    // The question is: "¿Cuándo comenzó nuestra historia?"
    // The requested exact answer is: 13/03/26
    // We gracefully handle natural variations:
    // 13/03/26, 13/03/2026, 13-03-26, 13.03.26, 13 03 26, 13/3/26, 13 de marzo de 2026
    // and calendar format: 2026-03-13 (normalized: 20260313 or 260313)
    const isCorrect = 
      normalized === "130326" ||
      normalized === "13032026" ||
      normalized === "20260313" ||
      normalized === "260313" ||
      normalized === "13326" ||
      normalized === "1332026" ||
      (raw.includes("13") && (raw.includes("marzo") || raw.includes("03") || raw.includes("mar")));

    if (isCorrect) {
      setPasswordError("");
      setIsUnlocking(true);
      setUnlockSuccessMsg("¡Respuesta correcta! Bienvenidos a nuestra historia, Sara y Pool ❤️");
      triggerConfetti();

      setTimeout(() => {
        setHasEntered(true);
        setIsUnlocking(false);
        // Delay play to allow transition and trigger safely
        if (audioRef.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(err => console.log("Auto-play blocked:", err));
        }
      }, 900);
    } else {
      setPasswordError("Fecha incorrecta. Este álbum es privado ❤️");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleLockAlbum = () => {
    setHasEntered(false);
    setPasswordInput("");
    setRawDateValue("");
    setPasswordError("");
    setIsUnlocking(false);
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen text-[#4a1525] font-sans overflow-x-hidden selection:bg-[#ffafcc] selection:text-[#4a1525]">
      {/* Subtle Romantic Background Video behind all content */}
      <BackgroundRomanticVideo />
      
      {/* --- Heart Rain Background layer --- */}
      <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden">
        {hearts.map(heart => (
          <span
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.fontSize}px`,
              animationDuration: `${heart.duration}s`
            }}
          >
            {heart.char}
          </span>
        ))}
      </div>

      {/* --- Dynamic Confetti Particle layer --- */}
      <div className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden">
        {sparkles.map(s => (
          <span
            key={s.id}
            className="absolute select-none text-center transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              color: s.color,
              fontSize: `${s.size}px`,
              transition: "left 30ms linear, top 30ms linear"
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* --- 1. OBLIGATORY QUESTION PASSWORD START SCREEN --- */}
      {!hasEntered ? (
        <section className="fixed inset-0 bg-gradient-to-br from-[#ffe5ec] via-[#ffccd5] to-[#fff0f3] flex flex-col justify-center items-center p-4 sm:p-6 z-[2000] overflow-y-auto">
          <div className={`max-w-md w-full bg-white/75 backdrop-blur-xl p-7 sm:p-10 rounded-3xl border border-white/80 shadow-[0_12px_40px_rgba(230,57,70,0.18)] text-center transition-all duration-300 ${isShaking ? "animate-shake" : ""}`}>
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-xs font-bold text-[#e63946] mb-4 tracking-wider uppercase shadow-xs">
              {isUnlocking ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                  <span className="text-emerald-700">¡Acceso Concedido!</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-[#e63946]" />
                  <span>Álbum Privado • Acceso Secreto</span>
                </>
              )}
            </div>

            {/* Couple Title */}
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#e63946] mb-1.5 tracking-wide drop-shadow-xs select-none">
              Sara <span className="heart-pulse text-[#e63946] mx-1">❤️</span> Pool
            </h1>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#4a1525]/75 mb-6 uppercase">
              Nuestra Historia de Amor
            </p>

            {/* Question Card Box */}
            <div className="bg-gradient-to-b from-white to-[#fff5f7] border-2 border-[#ffafcc] rounded-2xl p-5 sm:p-6 shadow-sm text-left mb-5 relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#e63946] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Contraseña de Seguridad
                </span>
                <span className="text-xs font-medium text-gray-500">
                  Obligatoria
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#4a1525] font-serif mb-1 leading-snug">
                ¿Cuándo comenzó nuestra historia?
              </h2>
              <p className="text-xs text-gray-500 mb-4">
                Solo nosotros dos conocemos la fecha exacta en que todo comenzó.
              </p>

              {/* Selector de modo: Calendario o Escribir */}
              <div className="flex bg-rose-100/70 p-1 rounded-xl gap-1 mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setEntryMode("calendar");
                    if (passwordError) setPasswordError("");
                  }}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                    entryMode === "calendar"
                      ? "bg-white text-[#e63946] shadow-xs"
                      : "text-gray-600 hover:text-[#4a1525]"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Elegir en Calendario</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEntryMode("text");
                    if (passwordError) setPasswordError("");
                  }}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                    entryMode === "text"
                      ? "bg-white text-[#e63946] shadow-xs"
                      : "text-gray-600 hover:text-[#4a1525]"
                  }`}
                >
                  <span>✍️ Escribir Fecha</span>
                </button>
              </div>

              <form onSubmit={handleVerifyPassword} className="space-y-4">
                {entryMode === "calendar" ? (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#e63946]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input
                      type="date"
                      value={rawDateValue}
                      onChange={(e) => {
                        const val = e.target.value;
                        setRawDateValue(val);
                        if (val) {
                          const [y, m, d] = val.split("-");
                          setPasswordInput(`${d}/${m}/${y.slice(2)}`);
                        } else {
                          setPasswordInput("");
                        }
                        if (passwordError) setPasswordError("");
                      }}
                      disabled={isUnlocking}
                      autoFocus
                      className="w-full pl-11 pr-4 py-3 bg-white border-2 border-[#ffafcc] focus:border-[#e63946] focus:ring-2 focus:ring-[#ffafcc]/50 rounded-xl text-base sm:text-lg font-bold text-[#4a1525] outline-none transition-all shadow-inner cursor-pointer"
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#ff85a1]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={passwordInput}
                      onChange={(e) => {
                        setPasswordInput(e.target.value);
                        if (passwordError) setPasswordError("");
                      }}
                      placeholder="Ingresa la fecha..."
                      disabled={isUnlocking}
                      autoFocus
                      className="w-full pl-11 pr-10 py-3 bg-white border-2 border-[#ffafcc] focus:border-[#e63946] focus:ring-2 focus:ring-[#ffafcc]/50 rounded-xl text-base sm:text-lg font-bold text-[#4a1525] placeholder-gray-400 outline-none transition-all shadow-inner tracking-wider"
                    />
                    {passwordInput && !isUnlocking && (
                      <button
                        type="button"
                        onClick={() => {
                          setPasswordInput("");
                          setRawDateValue("");
                        }}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                {/* Error Banner */}
                {passwordError && (
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs sm:text-sm text-rose-700 font-medium flex items-start gap-2 animate-in fade-in">
                    <span className="text-base shrink-0">🔒</span>
                    <span>{passwordError}</span>
                  </div>
                )}

                {/* Success Banner */}
                {isUnlocking && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs sm:text-sm text-emerald-800 font-bold flex items-center gap-2 animate-in zoom-in-95">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{unlockSuccessMsg}</span>
                  </div>
                )}

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isUnlocking || (!passwordInput.trim() && !rawDateValue.trim())}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 select-none cursor-pointer ${
                    isUnlocking
                      ? "bg-emerald-600 text-white cursor-default"
                      : (!passwordInput.trim() && !rawDateValue.trim())
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300"
                      : "bg-[#e63946] hover:bg-[#ff85a1] active:scale-98 text-white shadow-rose-500/25 hover:shadow-lg hover:shadow-rose-500/30"
                  }`}
                >
                  {isUnlocking ? (
                    <>
                      <Sparkles className="w-5 h-5 animate-spin" />
                      <span>Abriendo nuestro álbum...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5 fill-current animate-pulse" />
                      <span>Desbloquear Nuestro Álbum ❤️</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sweet Footer */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-[11px] text-gray-500">
                Un rincón privado y exclusivo para <strong>Sara</strong> y <strong>Pool</strong> ✨
              </p>
            </div>

          </div>
        </section>
      ) : (
        /* --- MAIN ALBUM CONTENT --- */
        <div className="fade-in relative z-10">
          
          {/* --- Sticky Navbar --- */}
          <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#ffe5ec] py-4 px-6 md:px-12 flex justify-between items-center z-[900]">
            <div 
              onClick={() => scrollToSection("top")}
              className="font-serif text-2xl md:text-3xl font-bold text-[#e63946] cursor-pointer hover:scale-105 transition-transform flex items-center gap-2"
            >
              Sara & Pool <span className="heart-pulse">❤️</span>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex gap-6 items-center text-sm md:text-base font-semibold">
              <li>
                <button onClick={() => scrollToSection("catalogo-section")} className="hover:text-[#e63946] transition-colors py-1 cursor-pointer font-bold text-[#e63946] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
                  Álbum de Fotos 📸
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("viajes-peru-section")} className="hover:text-[#e63946] transition-colors py-1 cursor-pointer flex items-center gap-1 font-semibold">
                  Rutas en Perú 🗺️
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("timeline-section")} className="hover:text-[#e63946] transition-colors py-1 cursor-pointer">
                  Nuestra Historia 📖
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("music-section")} className="hover:text-[#e63946] transition-colors py-1 cursor-pointer">
                  Canciones 🎵
                </button>
              </li>
              <li>
                <button 
                  onClick={handleLockAlbum}
                  className="bg-rose-50 hover:bg-rose-100 text-[#e63946] border border-rose-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-xs"
                  title="Bloquear álbum con la contraseña de seguridad"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Bloquear</span>
                </button>
              </li>
            </ul>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button 
                onClick={handleLockAlbum}
                className="bg-rose-50 text-[#e63946] border border-rose-200 p-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                title="Bloquear álbum"
              >
                <Lock className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#4a1525] p-2 hover:bg-[#fff0f3] rounded-lg transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Nav Menu Drawer */}
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white border-b border-[#ffe5ec] shadow-lg flex flex-col p-6 gap-3 text-center font-bold z-[890] lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
                <button onClick={() => { scrollToSection("catalogo-section"); setMobileMenuOpen(false); }} className="hover:text-[#e63946] py-2 border-b border-gray-100 cursor-pointer text-[#e63946] font-bold">Álbum de Fotos 📸</button>
                <button onClick={() => { scrollToSection("viajes-peru-section"); setMobileMenuOpen(false); }} className="hover:text-[#e63946] py-2 border-b border-gray-100 cursor-pointer flex items-center justify-center gap-1.5">Rutas en Perú 🗺️</button>
                <button onClick={() => { scrollToSection("timeline-section"); setMobileMenuOpen(false); }} className="hover:text-[#e63946] py-2 border-b border-gray-100 cursor-pointer">Nuestra Historia 📖</button>
                <button onClick={() => { scrollToSection("music-section"); setMobileMenuOpen(false); }} className="hover:text-[#e63946] py-2 border-b border-gray-100 cursor-pointer">Canciones 🎵</button>
                <button onClick={() => { handleLockAlbum(); setMobileMenuOpen(false); }} className="hover:bg-rose-100 text-[#e63946] py-2.5 px-4 bg-rose-50 rounded-xl flex items-center justify-center gap-2 cursor-pointer font-bold">
                  <Lock className="w-4 h-4" /> Bloquear Álbum
                </button>
              </div>
            )}
          </nav>

          <div id="top" />

          {/* --- 1. ÁLBUM DE FOTOS OFICIAL (SARA Y POOL) --- */}
          <PhotoCatalog onFavoriteTrigger={triggerConfetti} />

          {/* --- 2. NUESTROS VIAJES Y RUTAS EN PERÚ (MAPA Y COLLAGE DE DISTRITOS) --- */}
          <PeruTravelCollage />

          {/* --- 3. HISTORIA (TIMELINE) --- */}
          <section id="timeline-section" className="py-20 px-4 max-w-4xl mx-auto text-center scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-serif text-[#e63946] mb-12 flex justify-center items-center gap-2">
              <Calendar className="w-8 h-8 text-[#e63946]" />
              Nuestra Historia
            </h2>
            <div className="relative border-l-4 border-[#ffafcc] ml-4 md:mx-auto md:w-3/4 text-left">
              {CONFIG.lineaTiempo.map((item, index) => (
                <div key={index} className="mb-10 ml-6 md:ml-10 relative">
                  {/* Circle Indicator */}
                  <span className="absolute -left-[30px] md:-left-[46px] top-1.5 bg-[#e63946] h-6 w-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                    <span className="h-1.5 w-1.5 bg-white rounded-full"></span>
                  </span>
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#ffe5ec]">
                    <span className="text-xs font-bold uppercase text-[#ff85a1] tracking-widest block mb-1">
                      {item.fecha}
                    </span>
                    <h3 className="text-2xl font-bold text-[#4a1525] mb-2 font-romantic">
                      {item.titulo}
                    </h3>
                    <p className="text-base text-gray-700 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- 7. MUSIC PLAYER SECTION --- */}
          <section id="music-section" className="py-20 px-4 max-w-4xl mx-auto text-center scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-serif text-[#e63946] mb-12 flex justify-center items-center gap-2">
              <Music className="w-8 h-8 text-[#e63946]" />
              Nuestras Canciones Juntos 🎵
            </h2>
            <div className="bg-white border border-[#ffafcc] rounded-3xl p-6 md:p-10 max-w-xl mx-auto shadow-md">
              <div className="flex items-center gap-4 mb-6 text-left">
                <div className="bg-[#fff0f3] p-4 rounded-2xl border border-[#ffafcc]/40">
                  <Music className="w-8 h-8 text-[#e63946] animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#4a1525]">
                    {CONFIG.playlist[currentTrackIndex]?.titulo}
                  </h4>
                  <span className="text-sm font-semibold text-gray-500 block mt-1">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              </div>

              {/* Progress Slider Bar */}
              <div 
                onClick={handleProgressChange}
                className="bg-gray-100 rounded-full h-2 w-full cursor-pointer mb-6 relative overflow-hidden"
              >
                <div 
                  className="bg-[#e63946] h-full rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center gap-6 md:gap-8 mb-6">
                <button 
                  onClick={prevTrack}
                  className="text-2xl text-[#4a1525] hover:text-[#e63946] transition-colors p-2 cursor-pointer"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={togglePlay}
                  className="bg-[#e63946] hover:bg-[#ff85a1] text-white p-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-0.5" />}
                </button>
                <button 
                  onClick={nextTrack}
                  className="text-2xl text-[#4a1525] hover:text-[#e63946] transition-colors p-2 cursor-pointer"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              {/* Volume Slider Control */}
              <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
                <Volume2 className="w-5 h-5 text-gray-400" />
                <input 
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full accent-[#e63946] h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Invisible audio tag */}
              <audio 
                ref={audioRef}
                src={CONFIG.playlist[currentTrackIndex]?.archivo}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnded}
              />
            </div>
          </section>

          {/* --- 10. FINAL MESSAGE SECTION --- */}
          <section id="final-section" className="py-24 px-4 max-w-4xl mx-auto text-center scroll-mt-24">
            <div className="bg-gradient-to-br from-[#ffe5ec] to-[#ffc2d1] p-10 md:p-16 rounded-[40px] shadow-lg border border-white/50 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
              
              <div className="absolute top-4 left-4 text-3xl opacity-20">✨</div>
              <div className="absolute bottom-4 right-4 text-3xl opacity-20">💖</div>
              
              <div className="text-center max-w-xl mx-auto relative z-10">
                <p className="font-serif text-2xl md:text-4xl text-[#4a1525] leading-relaxed whitespace-pre-line select-none font-medium">
                  {typewriterText}
                </p>
                <div className="text-[#e63946] text-3xl md:text-4xl mt-8 animate-pulse flex justify-center gap-2">
                  <span>✨</span>
                  <span>💖</span>
                  <span>✨</span>
                </div>
              </div>
            </div>
          </section>

          {/* --- Footer --- */}
          <footer className="py-8 text-center text-sm font-semibold text-gray-500 border-t border-[#ffe5ec] mt-12 bg-white/40 backdrop-blur-sm">
            <p>Pool & Sara ❤️ Con todo mi amor</p>
          </footer>

        </div>
      )}
    </div>
  );
}
