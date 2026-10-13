import React, { useState } from "react";
import { 
  Lock, 
  Unlock, 
  Heart, 
  Camera, 
  X, 
  Eye, 
  ArrowLeft,
  Waves,
  Landmark,
  Mountain
} from "lucide-react";
import { PERU_DEPARTMENTS, DepartmentData } from "../data/peruDepartmentsData";
import { TRAVEL_ALBUMS } from "../data/travelAlbumsData";

// --- DISTRICT DATA STRUCTURE ---
export interface DistrictData {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  isUnlocked: boolean;
  romanticNote: string;
  photos: string[];
  stickers: string[];
  albumUrl?: string;
}

export interface ZoneGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  districts: DistrictData[];
}

// =========================================================================
// --- DISTRICTS & CIUDADES (CONTENIDO Y FOTOGRAFÍAS EXCLUSIVAS POR CIUDAD) ---
// =========================================================================

// --- LAMBAYEQUE / CHICLAYO ZONES ---
const LAMBAYEQUE_ZONES: ZoneGroup[] = [
  {
    id: "mar",
    title: "Costa y Mar",
    subtitle: "Nuestra brisa marina y atardeceres dorados",
    icon: "🌊",
    districts: [
      {
        id: "pimentel",
        name: "Pimentel",
        title: "Pimentel, donde el mar inspira",
        subtitle: "Brisa marina, atardeceres y momentos inolvidables.",
        tagline: "El muelle de madera y atardeceres dorados 🌅",
        isUnlocked: true,
        romanticNote: "Caminar por el muelle de madera de Pimentel tomados de la mano mientras el cielo se pinta de colores.",
        photos: TRAVEL_ALBUMS.pimentel.photos,
        albumUrl: TRAVEL_ALBUMS.pimentel.album_url,
        stickers: ["🌊", "🌅", "🦀", "❤️"]
      },
      {
        id: "san_jose",
        name: "San José",
        title: "San José, serenidad junto a las olas",
        subtitle: "Caleta tranquila, el sonido del viento y tu sonrisa infinita.",
        tagline: "Caleta serena y paz a tu lado ⛵",
        isUnlocked: true,
        romanticNote: "El mar tranquilo, las barquitas de colores y el sonido suave de las olas compartiendo nuestro momento.",
        photos: TRAVEL_ALBUMS.san_jose.photos,
        albumUrl: TRAVEL_ALBUMS.san_jose.album_url,
        stickers: ["⛵", "🐟", "✨", "🤍"]
      },
      {
        id: "santa_rosa",
        name: "Santa Rosa",
        title: "Santa Rosa, encanto de pescadores",
        subtitle: "Aguas mansas y caminos costeros por descubrir juntos.",
        tagline: "Caleta pesquera y brisa marina",
        isUnlocked: false,
        romanticNote: "Probar el rico ceviche en la caleta en nuestro próximo viaje juntos.",
        photos: [],
        stickers: ["🐟", "🔒"]
      },
      {
        id: "puerto_eten",
        name: "Puerto Eten",
        title: "Puerto Eten, huellas del tiempo",
        subtitle: "El muelle histórico mirando hacia el infinito azul.",
        tagline: "Malecón histórico y mar abierto",
        isUnlocked: false,
        romanticNote: "Recorrer el malecón del ferrocarril histórico y ver las olas.",
        photos: [],
        stickers: ["🚂", "🔒"]
      }
    ]
  },
  {
    id: "ciudad",
    title: "Ciudad y Tradición",
    subtitle: "Paseos cotidianos, historia y momentos dulces",
    icon: "🏛️",
    districts: [
      {
        id: "chiclayo",
        name: "Chiclayo",
        title: "Chiclayo, el corazón de nuestro viaje",
        subtitle: "Calles, complicidad y recuerdos en la Capital de la Amistad.",
        tagline: "La Capital de la Amistad y nuestro punto de partida ❤️",
        isUnlocked: true,
        romanticNote: "Pasear por el parque principal, compartir momentos cotidianos y construir recuerdos imborrables juntos.",
        photos: TRAVEL_ALBUMS.chiclayo.photos,
        albumUrl: TRAVEL_ALBUMS.chiclayo.album_url,
        stickers: ["❤️", "🏙️", "✨", "🥰"]
      },
      {
        id: "la_victoria",
        name: "La Victoria",
        title: "La Victoria, complicidad en cada paso",
        subtitle: "Nuestras caminatas de la mano y risas sinceras de cada día.",
        tagline: "Nuestras caminatas cotidianas y risas 🛵",
        isUnlocked: true,
        romanticNote: "Salir a dar un paseo, comer un antojito y regresar contentos tomados de la mano.",
        photos: TRAVEL_ALBUMS.la_victoria.photos,
        albumUrl: TRAVEL_ALBUMS.la_victoria.album_url,
        stickers: ["🛵", "🌆", "❤️"]
      },
      {
        id: "lambayeque_distrito",
        name: "Lambayeque",
        title: "Lambayeque, dulzura e historia viva",
        subtitle: "Calles coloniales, tradición norteña y momentos para recordar.",
        tagline: "Calles históricas y King Kong tradicional 👑",
        isUnlocked: true,
        romanticNote: "Caminar por la ciudad colonial y endulzarnos con un King Kong lambayecano.",
        photos: TRAVEL_ALBUMS.lambayeque.photos,
        albumUrl: TRAVEL_ALBUMS.lambayeque.album_url,
        stickers: ["👑", "🍯", "🥰"]
      },
      {
        id: "monsefu",
        name: "Monsefú",
        title: "Monsefú, colores que abrazan el alma",
        subtitle: "Flores aromáticas, telares bordados y miradas llenas de cariño.",
        tagline: "Flores hermosas y artesanía viva 💐",
        isUnlocked: true,
        romanticNote: "Visitar la feria de flores y telares coloridos con la persona que ilumina mis días.",
        photos: TRAVEL_ALBUMS.monsefu.photos,
        albumUrl: TRAVEL_ALBUMS.monsefu.album_url,
        stickers: ["💐", "🧵", "🌸"]
      },
      {
        id: "ferrenafe",
        name: "Ferreñafe",
        title: "Ferreñafe, tierra de mística y fe",
        subtitle: "Cultura milenaria, horizontes de algarrobos y momentos únicos juntos.",
        tagline: "Tierra de la doble fe y cultura Sicán ✨",
        isUnlocked: true,
        romanticNote: "Nuestra visita a Ferreñafe disfrutando de su historia, calidez y momentos mágicos juntos.",
        photos: TRAVEL_ALBUMS.ferrenafe.photos,
        albumUrl: TRAVEL_ALBUMS.ferrenafe.album_url,
        stickers: ["🏺", "✨", "❤️"]
      },
      {
        id: "zana",
        name: "Zaña",
        title: "Zaña, arcos de piedra y memoria",
        subtitle: "Templos antiguos bajo el cielo abierto de la costa.",
        tagline: "Ruinas coloniales y misterio",
        isUnlocked: false,
        romanticNote: "Pasear entre los arcos de piedra de los templos antiguos.",
        photos: [],
        stickers: ["⛪", "🔒"]
      }
    ]
  },
  {
    id: "valles",
    title: "Valles y Rutas",
    subtitle: "Cerros, carreteras y naturaleza norteña",
    icon: "⛰️",
    districts: [
      {
        id: "motupe",
        name: "Motupe",
        title: "Motupe, devoción entre los cerros",
        subtitle: "Caminos abiertos, cielo despejado y la bendición del camino.",
        tagline: "Ruta norteña, fe y Cerro Chalpón ⛰️",
        isUnlocked: true,
        romanticNote: "Nuestro inolvidable viaje por la carretera norteña contemplando los cerros y paisajes.",
        photos: TRAVEL_ALBUMS.motupe.photos,
        albumUrl: TRAVEL_ALBUMS.motupe.album_url,
        stickers: ["⛰️", "🚗", "🌿"]
      },
      {
        id: "chongoyape",
        name: "Chongoyape",
        title: "Chongoyape, refugio de vida silvestre",
        subtitle: "Bosques secos, senderos verdes y naturaleza en calma.",
        tagline: "Reserva natural y osos de anteojos",
        isUnlocked: false,
        romanticNote: "Caminar por la reserva ecológica de Chaparrí juntos.",
        photos: [],
        stickers: ["🐻", "🔒"]
      },
      {
        id: "tucume",
        name: "Túcume",
        title: "Túcume, valle de pirámides",
        subtitle: "Horizontes de adobe y secretos de civilizaciones eternas.",
        tagline: "Valle de las pirámides prehispánicas",
        isUnlocked: false,
        romanticNote: "Subir al mirador de las 26 pirámides de adobe.",
        photos: [],
        stickers: ["🏜️", "🔒"]
      },
      {
        id: "olmos",
        name: "Olmos",
        title: "Olmos, umbral hacia los andes",
        subtitle: "Valles fértiles y rutas que cruzan la cordillera.",
        tagline: "Valle fértil y ruta a la sierra",
        isUnlocked: false,
        romanticNote: "Conocer el valle de los limones en nuestro paso por la carretera.",
        photos: [],
        stickers: ["🍋", "🔒"]
      },
      {
        id: "reque",
        name: "Reque",
        title: "Reque, mirador del río",
        subtitle: "Campiñas verdes bañadas por la luz del atardecer.",
        tagline: "Mirador campestre y valle verde",
        isUnlocked: false,
        romanticNote: "Admirar todo el valle verde desde el mirador.",
        photos: [],
        stickers: ["🌄", "🔒"]
      }
    ]
  }
];

// --- CAJAMARCA ZONES ---
const CAJAMARCA_ZONES: ZoneGroup[] = [
  {
    id: "sierra_llama",
    title: "Sierra y Valles Andinos",
    subtitle: "Montañas verdes, aire puro y nuestra gran aventura",
    icon: "⛰️",
    districts: [
      {
        id: "llama",
        name: "Llama",
        title: "Llama, el abrazo verde de la cordillera",
        subtitle: "Aire puro de altura, montañas infinitas y nuestro viaje soñado.",
        tagline: "Valle andino verde y hermosa sierra ⛰️",
        isUnlocked: true,
        romanticNote: "Nuestro hermoso viaje a Llama en Cajamarca. Respirar el aire puro de la sierra y contemplar las montañas verdes juntos.",
        photos: TRAVEL_ALBUMS.llama.photos,
        albumUrl: TRAVEL_ALBUMS.llama.album_url,
        stickers: ["⛰️", "🌄", "🌿", "❤️"]
      },
      {
        id: "chota",
        name: "Chota",
        title: "Chota, cuna de tradiciones andinas",
        subtitle: "Pueblos acogedores entre las cumbres norteñas.",
        tagline: "Plaza andina y tradiciones de altura",
        isUnlocked: false,
        romanticNote: "Conocer la capital provincial andina vecina a Llama.",
        photos: [],
        stickers: ["🏔️", "🔒"]
      },
      {
        id: "celendin",
        name: "Celendín",
        title: "Celendín, balcones y cielos limpios",
        subtitle: "Tejidos finos y calles tranquilas en la sierra.",
        tagline: "Tierra de sombreros de paja y balcones",
        isUnlocked: false,
        romanticNote: "Pasear por sus calles típicas y probar sus dulces.",
        photos: [],
        stickers: ["👒", "🔒"]
      }
    ]
  },
  {
    id: "historia_termas",
    title: "Aguas Termales e Historia",
    subtitle: "Naturaleza, historia inca y paisajes milenarios",
    icon: "♨️",
    districts: [
      {
        id: "banos_del_inca",
        name: "Baños del Inca",
        title: "Baños del Inca, calor de manantiales",
        subtitle: "Vapores cálidos y descanso bajo el firmamento andino.",
        tagline: "Aguas termales curativas del Inca",
        isUnlocked: false,
        romanticNote: "Relajarnos juntos en las cálidas aguas termales bajo el cielo andino.",
        photos: [],
        stickers: ["♨️", "🔒"]
      },
      {
        id: "cajamarca_capital",
        name: "Cajamarca Capital",
        title: "Cajamarca, arquitectura y atardeceres de piedra",
        subtitle: "La vista desde Santa Apolonia sobre techos de teja y campanas coloniales.",
        tagline: "Catedral barroca y mirador Santa Apolonia",
        isUnlocked: false,
        romanticNote: "Subir a Santa Apolonia al atardecer y ver toda la ciudad iluminada.",
        photos: [],
        stickers: ["⛪", "🔒"]
      },
      {
        id: "cumbemayo",
        name: "Cumbemayo",
        title: "Cumbemayo, el bosque sagrado de rocas",
        subtitle: "Canales incaicos tallados en la piedra volcánica.",
        tagline: "Bosque de piedras milenario",
        isUnlocked: false,
        romanticNote: "Caminar entre los farallones de roca volcánica.",
        photos: [],
        stickers: ["🪨", "🔒"]
      },
      {
        id: "granja_porcon",
        name: "Granja Porcón",
        title: "Granja Porcón, aroma a pino y serenidad",
        subtitle: "Bosques espesos de coníferas y vida campestre.",
        tagline: "Bosque de pinos y quesos andinos",
        isUnlocked: false,
        romanticNote: "Pasear entre los pinos y probar los ricos quesos cajamarquinos.",
        photos: [],
        stickers: ["🌲", "🔒"]
      },
      {
        id: "jaen",
        name: "Jaén",
        title: "Jaén, aromas de selva alta y buen café",
        subtitle: "Cascadas cristalinas y sol cálido en las montañas.",
        tagline: "Café de especialidad y cascadas",
        isUnlocked: false,
        romanticNote: "Disfrutar de un café de altura recién tostado.",
        photos: [],
        stickers: ["☕", "🔒"]
      }
    ]
  }
];

export default function PeruTravelCollage() {
  // Navigation: 'map' | 'city'
  const [view, setView] = useState<"map" | "city">("map");
  const [hoveredDept, setHoveredDept] = useState<DepartmentData | null>(null);

  // Active selected city / district
  const [activeDistrict, setActiveDistrict] = useState<DistrictData | null>(null);
  
  // Page of visible images in the collage (editorial carousel/pagination with arrows)
  const [collagePage, setCollagePage] = useState<number>(0);

  // Modals
  const [lockedModal, setLockedModal] = useState<{ title: string; note: string } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Direct selection from the Map:
  // Selecting Chiclayo / Lambayeque opens its city view immediately (Pimentel by default or direct city)
  // Selecting Cajamarca opens Llama directly
  const handleDeptClick = (dept: DepartmentData) => {
    if (dept.id === "lambayeque") {
      const defaultDistrict = LAMBAYEQUE_ZONES[1].districts[0]; // Chiclayo
      setActiveDistrict(defaultDistrict);
      setCollagePage(0);
      setView("city");
      window.scrollTo({ top: document.getElementById("viajes-peru-section")?.offsetTop || 0, behavior: "smooth" });
    } else if (dept.id === "cajamarca") {
      const defaultDistrict = CAJAMARCA_ZONES[0].districts[0]; // Llama
      setActiveDistrict(defaultDistrict);
      setCollagePage(0);
      setView("city");
      window.scrollTo({ top: document.getElementById("viajes-peru-section")?.offsetTop || 0, behavior: "smooth" });
    } else {
      setLockedModal({
        title: dept.label,
        note: `Próximo destino por desbloquear en nuestro viaje a ${dept.capital} ❤️`
      });
    }
  };

  // Place click inside a zone
  const handleDistrictSelect = (district: DistrictData) => {
    if (district.isUnlocked) {
      setActiveDistrict(district);
      setCollagePage(0);
      window.scrollTo({ top: document.getElementById("viajes-peru-section")?.offsetTop || 0, behavior: "smooth" });
    } else {
      setLockedModal({
        title: district.name,
        note: district.romanticNote
      });
    }
  };

  // Sort so hovered department renders last (highest z-order in SVG, preventing clipped borders)
  const sortedDepartments = [...PERU_DEPARTMENTS].sort((a, b) => {
    if (hoveredDept?.id === a.id) return 1;
    if (hoveredDept?.id === b.id) return -1;
    if ((a.id === "lambayeque" || a.id === "cajamarca") && !(b.id === "lambayeque" || b.id === "cajamarca")) return 1;
    if (!(a.id === "lambayeque" || a.id === "cajamarca") && (b.id === "lambayeque" || b.id === "cajamarca")) return -1;
    return 0;
  });

  // Determine current department group based on activeDistrict
  const isCajamarca = activeDistrict?.id === "llama";
  const currentDepartmentName = isCajamarca ? "Cajamarca" : "Chiclayo (Lambayeque)";
  const currentDepartmentZones = isCajamarca ? CAJAMARCA_ZONES : LAMBAYEQUE_ZONES;

  // Collage pagination logic (show distinct compositions if more than 4 photos)
  const currentPhotos = activeDistrict?.photos || [];
  const PHOTOS_PER_SET = 4;
  const totalSets = Math.max(1, Math.ceil(currentPhotos.length / PHOTOS_PER_SET));
  
  // Safe page index
  const safePage = Math.min(collagePage, totalSets - 1);
  const startIdx = safePage * PHOTOS_PER_SET;
  const visiblePhotos = currentPhotos.slice(startIdx, startIdx + PHOTOS_PER_SET);

  const handlePrevPhotos = () => {
    setCollagePage((prev) => (prev > 0 ? prev - 1 : totalSets - 1));
  };

  const handleNextPhotos = () => {
    setCollagePage((prev) => (prev < totalSets - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="viajes-peru-section" 
      className="PeruTravelCollage py-12 px-4 max-w-6xl mx-auto scroll-mt-20 select-none" 
      data-component="PeruTravelCollage"
    >
      
      {/* ========================================================================= */}
      {/* --- VISTA 1: EL MAPA DEL PERÚ TAL CUAL (PROTAGONISTA PRINCIPAL) --- */}
      {/* ========================================================================= */}
      {view === "map" && (
        <div className="flex flex-col items-center">
          
          {/* Título Limpio y Directo */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#e63946] font-bold flex items-center justify-center gap-2">
              <span>Nuestras Rutas en Perú</span>
              <span className="heart-pulse text-2xl">❤️</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Selecciona una ciudad en el mapa para ingresar directamente a sus recuerdos
            </p>
          </div>

          {/* Contenedor Limpio del Mapa */}
          <div className="relative w-full max-w-[540px] bg-gradient-to-b from-sky-50/50 via-white to-rose-50/50 rounded-3xl border-2 border-rose-200/90 p-4 sm:p-6 shadow-xl overflow-hidden">
            
            {/* Tooltip flotante superior cuando pasas el mouse */}
            <div className="h-8 flex items-center justify-center mb-2">
              {hoveredDept ? (
                <div className={`text-xs font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 transition-all transform scale-105 ${
                  hoveredDept.id === "lambayeque"
                    ? "bg-gradient-to-r from-[#e63946] to-[#ff0054] text-white shadow-rose-300"
                    : hoveredDept.id === "cajamarca"
                    ? "bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white shadow-sky-300"
                    : "bg-gradient-to-r from-rose-50 to-pink-100 text-rose-800 border border-rose-300 shadow-rose-200/50"
                }`}>
                  <span>{hoveredDept.id === "lambayeque" ? "❤️" : hoveredDept.id === "cajamarca" ? "⛰️" : "💖"}</span>
                  <span>{hoveredDept.id === "lambayeque" ? "Chiclayo" : hoveredDept.label}</span>
                  <span className="text-[10px] opacity-90">
                    {hoveredDept.id === "lambayeque" || hoveredDept.id === "cajamarca" 
                      ? "• ¡Toca para ingresar! ✨" 
                      : "• Próxima parada juntos 🔒"}
                  </span>
                </div>
              ) : (
                <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1.5">
                  <span>🇵🇪</span>
                  <span>Pasa el cursor y pulsa una ciudad para ver su collage</span>
                </span>
              )}
            </div>

            {/* SVG REAL DE LOS 25 DEPARTAMENTOS */}
            <svg 
              viewBox="0 0 600 840" 
              className="w-full h-auto drop-shadow-md select-none max-h-[620px]"
            >
              <defs>
                {/* Brillo estándar */}
                <filter id="glow-dept" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Brillo romántico sutil en hover para departamentos bloqueados */}
                <filter id="romantic-hover-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="0" stdDeviation="5.5" floodColor="#f43f5e" floodOpacity="0.75" />
                  <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#fda4af" floodOpacity="0.5" />
                </filter>

                {/* Brillo romántico para Chiclayo en hover */}
                <filter id="lambayeque-glow-hover" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#e11d48" floodOpacity="0.9" />
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ffffff" floodOpacity="0.6" />
                </filter>

                {/* Brillo romántico para Cajamarca en hover */}
                <filter id="cajamarca-glow-hover" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#0284c7" floodOpacity="0.9" />
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ffffff" floodOpacity="0.6" />
                </filter>

                {/* Gradiente sutil romántico para departamentos en hover */}
                <linearGradient id="romantic-hover-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fecdd3" />
                  <stop offset="60%" stopColor="#fda4af" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>

              {sortedDepartments.map((dept) => {
                const isLambayeque = dept.id === "lambayeque";
                const isCajamarcaDept = dept.id === "cajamarca";
                const isUnlocked = isLambayeque || isCajamarcaDept;
                const isHovered = hoveredDept?.id === dept.id;

                let fill = "#ffd6df";
                if (isLambayeque) {
                  fill = isHovered ? "#ff0054" : "#e63946";
                } else if (isCajamarcaDept) {
                  fill = isHovered ? "#0284c7" : "#0ea5e9";
                } else if (isHovered) {
                  fill = "url(#romantic-hover-grad)";
                }

                let filter = undefined;
                if (isLambayeque) {
                  filter = isHovered ? "url(#lambayeque-glow-hover)" : "url(#glow-dept)";
                } else if (isCajamarcaDept) {
                  filter = isHovered ? "url(#cajamarca-glow-hover)" : "url(#glow-dept)";
                } else if (isHovered) {
                  filter = "url(#romantic-hover-glow)";
                }

                const strokeColor = isHovered
                  ? (isLambayeque ? "#ffffff" : isCajamarcaDept ? "#ffffff" : "#fb7185")
                  : "#ffffff";

                const strokeWidth = isHovered
                  ? (isUnlocked ? 3.2 : 2.4)
                  : (isUnlocked ? 2.5 : 1.2);

                return (
                  <g 
                    key={dept.id}
                    onMouseEnter={() => setHoveredDept(dept)}
                    onMouseLeave={() => setHoveredDept(null)}
                    onClick={() => handleDeptClick(dept)}
                    className="cursor-pointer"
                    style={{
                      transformOrigin: `${dept.center.x}px ${dept.center.y}px`,
                      transform: isHovered ? "scale(1.048)" : "scale(1)",
                      transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    {/* Polígono del departamento */}
                    <path
                      d={dept.path}
                      fill={fill}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      filter={filter}
                      className="transition-colors duration-200"
                    />

                    {/* Pin Chiclayo Desbloqueado (Costa Norte - Corazón palpitante sin etiquetas ni candados) */}
                    {isLambayeque && (
                      <g 
                        transform={`translate(86, 312)`} 
                        className="pointer-events-none transition-transform duration-200"
                        style={{ transform: isHovered ? "scale(1.18)" : "scale(1)" }}
                      >
                        <circle r={isHovered ? 18 : 14} fill="#ffffff" opacity={isHovered ? 0.5 : 0.35} className="animate-ping" />
                        <circle r={isHovered ? 13 : 11} fill="#e63946" stroke="#ffffff" strokeWidth="2.5" />
                        <text y="3.5" textAnchor="middle" fill="#ffffff" fontSize={isHovered ? 11 : 9.5} fontWeight="bold">❤️</text>
                      </g>
                    )}

                    {/* Pin Cajamarca Desbloqueado (Sierra Norte - Pin limpio sin etiquetas ni candados) */}
                    {isCajamarcaDept && (
                      <g 
                        transform={`translate(150, 274)`} 
                        className="pointer-events-none transition-transform duration-200"
                        style={{ transform: isHovered ? "scale(1.18)" : "scale(1)" }}
                      >
                        <circle r={isHovered ? 18 : 14} fill="#ffffff" opacity={isHovered ? 0.5 : 0.35} className="animate-ping" />
                        <circle r={isHovered ? 13 : 11} fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
                        <text y="3.5" textAnchor="middle" fill="#ffffff" fontSize={isHovered ? 11 : 9.5} fontWeight="bold">⛰️</text>
                      </g>
                    )}

                    {/* Candados e interactividad en departamentos bloqueados */}
                    {!isUnlocked && (
                      <g transform={`translate(${dept.center.x}, ${dept.center.y})`} className="pointer-events-none transition-all duration-200">
                        {isHovered ? (
                          <g>
                            <circle r="11" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1.5" className="animate-pulse" />
                            <text y="3.5" textAnchor="middle" fontSize="9">
                              💖
                            </text>
                          </g>
                        ) : (
                          <g className="opacity-75">
                            <circle r="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                            <text y="3" textAnchor="middle" fill="#64748b" fontSize="8">
                              🔒
                            </text>
                          </g>
                        )}
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Leyenda Mínima Inferior */}
            <div className="mt-4 pt-3 border-t border-rose-100 flex items-center justify-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-[#e63946]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e63946]"></span>
                Chiclayo ❤️
              </span>
              <span className="flex items-center gap-1.5 text-sky-700">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]"></span>
                Cajamarca ⛰️
              </span>
              <span className="flex items-center gap-1.5 text-gray-500">
                <span>🔒</span>
                Por desbloquear
              </span>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* --- VISTA 2: APARTADO INDEPENDIENTE DE LA CIUDAD SELECCIONADA --- */}
      {/* ========================================================================= */}
      {view === "city" && activeDistrict && (
        <div className="space-y-10 animate-in fade-in duration-300">
          
          {/* Navegación Discreta: Botón discreto para volver al mapa general */}
          <div className="flex items-center justify-start border-b border-rose-100 pb-3">
            <button
              onClick={() => setView("map")}
              className="group inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#e63946] transition-colors cursor-pointer py-1.5 px-3 rounded-full hover:bg-rose-50 border border-transparent hover:border-rose-200"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Regresar al mapa general</span>
            </button>
          </div>

          {/* ========================================================================= */}
          {/* --- TÍTULO Y FRASE BREVE (FUERA Y ENCIMA DE LAS FOTOGRAFÍAS) --- */}
          {/* ========================================================================= */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#e63946] tracking-tight">
              {activeDistrict.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium italic">
              {activeDistrict.subtitle}
            </p>
            {activeDistrict.albumUrl && (
              <div className="pt-1.5 flex items-center justify-center">
                <a
                  href={activeDistrict.albumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100/90 px-3.5 py-1.5 rounded-full transition-all border border-rose-200/80 shadow-2xs hover:shadow-xs"
                >
                  <Camera className="w-3.5 h-3.5 text-rose-500" />
                  <span>Álbum en Google Photos ({activeDistrict.photos.length} fotos) ↗</span>
                </a>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* --- COLLAGE EDITORIAL CON FLECHAS DECORATIVAS Y FOTOS 100% LIMPIAS --- */}
          {/* ========================================================================= */}
          <div className="relative group/collage px-0 sm:px-12">
            
            {/* Flecha Izquierda Decorativa y Funcional */}
            {totalSets > 1 && (
              <button
                onClick={handlePrevPhotos}
                className="absolute -left-2 sm:left-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-rose-600 hover:text-[#e63946] shadow-lg hover:shadow-xl border border-rose-200 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
                title="Ver fotografías anteriores"
                aria-label="Fotografías anteriores"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
              </button>
            )}

            {/* Flecha Derecha Decorativa y Funcional */}
            {totalSets > 1 && (
              <button
                onClick={handleNextPhotos}
                className="absolute -right-2 sm:right-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-rose-600 hover:text-[#e63946] shadow-lg hover:shadow-xl border border-rose-200 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
                title="Ver siguientes fotografías"
                aria-label="Siguientes fotografías"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.2] rotate-180" />
              </button>
            )}

            {/* Contenedor del Collage Editorial (Diferentes Tamaños, Visualmente Equilibrado, Fotos Limpias) */}
            <div className="bg-white/80 rounded-3xl p-3 sm:p-6 border border-rose-100 shadow-sm transition-all duration-300">
              
              {/* Composición según cantidad de fotos visibles */}
              {visiblePhotos.length >= 4 ? (
                /* Grid Editorial Asimétrico Armónico (4 fotos) */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch">
                  
                  {/* Foto Principal Destacada (Editorial Lead) */}
                  <div 
                    onClick={() => setLightboxIndex(startIdx + 0)}
                    className="md:col-span-7 relative h-[280px] sm:h-[380px] md:h-[460px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                  >
                    <img 
                      src={visiblePhotos[0]} 
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                      <span className="bg-white/95 text-[#e63946] p-3 rounded-full shadow-lg transform scale-90 group-hover/img:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  {/* Columna Derecha con 3 Fotografías Complementarias */}
                  <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 h-[280px] sm:h-[380px] md:h-[460px]">
                    
                    {/* Foto Superior Derecha */}
                    <div 
                      onClick={() => setLightboxIndex(startIdx + 1)}
                      className="flex-1 relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                    >
                      <img 
                        src={visiblePhotos[1]} 
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                        <span className="bg-white/95 text-[#e63946] p-2 rounded-full shadow-lg transform scale-90 group-hover/img:scale-100 transition-transform">
                          <Eye className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Dos Fotos Inferiores en Dúo */}
                    <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4">
                      <div 
                        onClick={() => setLightboxIndex(startIdx + 2)}
                        className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                      >
                        <img 
                          src={visiblePhotos[2]} 
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                          <span className="bg-white/95 text-[#e63946] p-2 rounded-full shadow-lg transform scale-90 group-hover/img:scale-100 transition-transform">
                            <Eye className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      <div 
                        onClick={() => setLightboxIndex(startIdx + 3)}
                        className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                      >
                        <img 
                          src={visiblePhotos[3]} 
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                          <span className="bg-white/95 text-[#e63946] p-2 rounded-full shadow-lg transform scale-90 group-hover/img:scale-100 transition-transform">
                            <Eye className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              ) : visiblePhotos.length === 3 ? (
                /* Composición Editorial con 3 Fotos */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch h-[280px] sm:h-[380px] md:h-[440px]">
                  <div 
                    onClick={() => setLightboxIndex(startIdx + 0)}
                    className="md:col-span-7 relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                  >
                    <img 
                      src={visiblePhotos[0]} 
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
                    <div 
                      onClick={() => setLightboxIndex(startIdx + 1)}
                      className="flex-1 relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                    >
                      <img 
                        src={visiblePhotos[1]} 
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                        loading="lazy"
                      />
                    </div>
                    <div 
                      onClick={() => setLightboxIndex(startIdx + 2)}
                      className="flex-1 relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                    >
                      <img 
                        src={visiblePhotos[2]} 
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Composición para 1 o 2 Fotos (sin duplicar imágenes) */
                <div className={`grid gap-4 max-w-3xl mx-auto h-[320px] sm:h-[420px] ${
                  visiblePhotos.length === 1 ? "grid-cols-1 max-w-lg mx-auto" : "grid-cols-1 sm:grid-cols-2"
                }`}>
                  {visiblePhotos.map((url, i) => (
                    <div 
                      key={i}
                      onClick={() => setLightboxIndex(startIdx + i)}
                      className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group/img bg-rose-50"
                    >
                      <img 
                        src={url} 
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-104"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                        <span className="bg-white/95 text-[#e63946] p-3 rounded-full shadow-lg transform scale-90 group-hover/img:scale-100 transition-transform">
                          <Eye className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Indicador sutil de páginas si hay más fotos */}
              {totalSets > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4 pt-2">
                  {Array.from({ length: totalSets }).map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCollagePage(dotIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        dotIdx === safePage ? "w-6 bg-[#e63946]" : "w-2 bg-rose-200 hover:bg-rose-300"
                      }`}
                      aria-label={`Ver grupo de fotos ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* ========================================================================= */}
          {/* --- OTRAS CIUDADES Y ZONAS DISPONIBLES EN ESTA REGIÓN --- */}
          {/* ========================================================================= */}
          <div className="pt-6 border-t border-rose-100">
            <div className="text-center mb-6">
              <h4 className="text-lg font-serif font-bold text-[#4a1525]">
                Lugares de {currentDepartmentName}
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Selecciona otro lugar de esta región para ver su collage
              </p>
            </div>

            <div className="space-y-6">
              {currentDepartmentZones.map((zone) => (
                <div key={zone.id} className="bg-white/70 rounded-2xl border border-rose-100 p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-rose-50">
                    <span className="text-lg">{zone.icon}</span>
                    <span className="font-serif font-bold text-sm text-[#4a1525]">{zone.title}</span>
                    <span className="text-xs text-gray-400">• {zone.subtitle}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                    {zone.districts.map((district) => {
                      const isCurrent = activeDistrict.id === district.id;
                      const isUnlocked = district.isUnlocked;

                      return (
                        <button
                          key={district.id}
                          onClick={() => handleDistrictSelect(district)}
                          className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                            isCurrent
                              ? "bg-rose-50/80 border-[#e63946] shadow-xs ring-1 ring-[#e63946]/30"
                              : isUnlocked
                              ? "bg-white hover:bg-rose-50/40 border-rose-200/80"
                              : "bg-gray-50/80 hover:bg-gray-100/80 border-gray-200/70 opacity-60"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-xs font-bold text-[#4a1525] truncate">{district.name}</span>
                            <span className="text-[10px]">
                              {isUnlocked ? "✨" : "🔒"}
                            </span>
                          </div>
                          <span className={`text-[10px] font-medium truncate ${isCurrent ? "text-[#e63946] font-bold" : "text-gray-500"}`}>
                            {isCurrent ? "Viendo ahora" : isUnlocked ? "Ver collage" : "Por visitar"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* --- MODAL CANDADO RÁPIDO Y BONITO (SIN TANTO TEXTO) --- */}
      {/* ========================================================================= */}
      {lockedModal && (
        <div 
          onClick={() => setLockedModal(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-[2000] cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border-2 border-rose-200 text-center relative cursor-default"
          >
            <button
              onClick={() => setLockedModal(null)}
              className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-[#e63946] rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 mx-auto mb-3 bg-rose-100 rounded-full flex items-center justify-center">
              <Lock className="w-7 h-7 text-[#e63946]" />
            </div>

            <h4 className="text-xl font-serif font-bold text-[#4a1525] mb-1">
              {lockedModal.title}
            </h4>

            <p className="text-xs text-gray-600 mb-5 font-medium">
              {lockedModal.note}
            </p>

            <button
              onClick={() => setLockedModal(null)}
              className="w-full py-2.5 bg-[#e63946] text-white font-bold rounded-xl text-xs hover:bg-rose-600 transition-colors cursor-pointer"
            >
              ¡Para nuestro próximo viaje! ❤️
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* --- MODAL FOTO PANTALLA COMPLETA CON FLECHAS DE NAVEGACIÓN --- */}
      {/* ========================================================================= */}
      {lightboxIndex !== null && currentPhotos[lightboxIndex] && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 z-[3000] cursor-pointer select-none"
        >
          {/* Botón Cerrar */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer z-40"
            title="Cerrar (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Flecha Anterior en Lightbox */}
          {currentPhotos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : currentPhotos.length - 1));
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-white/15 hover:bg-white/30 text-white rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer z-40 backdrop-blur-xs"
              title="Foto anterior"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}

          {/* Flecha Siguiente en Lightbox */}
          {currentPhotos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! < currentPhotos.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-white/15 hover:bg-white/30 text-white rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer z-40 backdrop-blur-xs"
              title="Siguiente foto"
            >
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </button>
          )}

          {/* Fotografía Totalmente Limpia */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full max-h-[88vh] flex items-center justify-center cursor-default"
          >
            <img 
              src={currentPhotos[lightboxIndex]} 
              alt="" 
              className="max-w-full max-h-[86vh] object-contain rounded-2xl shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}

    </section>
  );
}
