import React, { useState, useEffect } from "react";
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Image as ImageIcon,
  Eye
} from "lucide-react";

export interface CatalogPhoto {
  id: number;
  url: string;
  fullUrl: string;
  thumb: string;
}

// 36 Photos extracted directly from Google Photos album
const PHOTO_URLS = [
  "https://lh3.googleusercontent.com/pw/AP1GczM_haTmbiKSRYvy5SbpY2NjMmhWD4dw1S1-XCiojt6zb5drGRHt9CnXaBQsSQf24agisSDeTDSFxd9WEjfMA4x0yuQK3-d-LRqDhYbaPnqeXYts_TY",
  "https://lh3.googleusercontent.com/pw/AP1GczPFtcn1GD60mrVcBPDHeXMFerf3fCjOrKBBhF5eYxG9QikfFp59l1vbkBFZ8A5JdZFFQokzsbozn-aOD6I5k1u7QIDKFxypchaAeLC6mdVI-nZPQS4",
  "https://lh3.googleusercontent.com/pw/AP1GczMyIIiuozaI6QFtK0WxNdn6N4ecxwrtUWrCzZYhATCdByBmXk_gvoNLQ57cjX7_FxEpchR7bb78cnHPd9B-8cVF9NERtuC83X_SdZ5PXBAqm6q-nVk",
  "https://lh3.googleusercontent.com/pw/AP1GczMY5Hu4PRQSIZ3KCXlNVVwq9sTArCnd3odZ6mhb_KAYlNCuZuGuMrj3aRy51TEWoKsuurulgyoeuiD3mw1Be8rp139V_YNWcrxJmXyMicmNN9psEC4",
  "https://lh3.googleusercontent.com/pw/AP1GczOD5r2CuAFWenN7r0rgGqtjua--WSOz9xzNX1M53JJmrS-ujwCg7D9ZEE9C0RFVf0ZrXNMNggsQa4w3jN8AnodZ1IPqzgOh_jc_3v_h2D28_6n7PgA",
  "https://lh3.googleusercontent.com/pw/AP1GczMMKmiDhYUTuwQbuX5airrjDQHpGDfA_l5VeG9FiJ3RheFlwSSMDvwJDATJD0VYHrpdgqBkhe7X9M96nvR5nVPD3Tl6qwvUf78Aaes9kclN6v7qHTo",
  "https://lh3.googleusercontent.com/pw/AP1GczM42lwyT449lmHykZj-8e_D9VxaMZTTXMnSVtC58HmnHih6Yp8-LVbNoB4vKEmC_xiIl-UJXT9-QOUuCFjRJ1A950LuNXR80xSvLKqfaYnNHvznpoU",
  "https://lh3.googleusercontent.com/pw/AP1GczPQgR51f4xxPE8jQm6SE4hWtrz0TdjZ5rtbYjxHoJIK9gux4lPCVLnjNf_1MJr3xhGajOzomUBZuEmxsYg6hILd3O81rb8QzBP1L1ERJrTya41IDco",
  "https://lh3.googleusercontent.com/pw/AP1GczMbqFOaDiXc5zydbyhnYlLlVNqfHR0oXeOMZuU1ENF4jVYo1lcH47w11uMTetYGmsO5VjDArHKrNpDU9MofWy1rv7jdakvvzEFKdvwfxvoBT97W0DI",
  "https://lh3.googleusercontent.com/pw/AP1GczMprmU4HS21TPgj3wwrtsVlOaI-Wp7AJsw631-MNbAEZCwBEV1vgbOzuOBrsrPRGKS03Ui7-40AkajqpwAi6UvmSje3HzbThO5nB3v08wTOJeLEsVA",
  "https://lh3.googleusercontent.com/pw/AP1GczPAFQWvSx2fsBMa961z0AtRIP0Wjd10u5nZ9wPwRc-6Bd9KbFm1wt60rQdym-8gPlBP53Q2ftsUrruBC39dC-JaJh3ds-XFTaJRj4VWP5sRnFMS9jw",
  "https://lh3.googleusercontent.com/pw/AP1GczOB6b0oF0SVNxEjnib2zBasIfzi1sCtBrPW7x8Cq0gpceKh-AoMrMIllB3Dnae-fv-2M3S2AfSPYXeWsKKe9_ii-0eE8u6QfipoMRKz5_16-GWUIVY",
  "https://lh3.googleusercontent.com/pw/AP1GczOa2BTRdt3UWzOMUtKSV_70uN2KenD9bNwhT44XnhRYoMQN6o8A1sZ-AFGXEYaUlwwAFG3OBwb4I0X1zyszUqQEXc4KWTbo6d73yScuV7Y97M34ljI",
  "https://lh3.googleusercontent.com/pw/AP1GczPHPWNlpM3b5iaKpcbG07TseMJS98IhWQs3y2p-QAo1lZBinF0nT5UUhEEtlvntMavincnjX0XtlXjv1MOZEvpjIeurSI_0WtYZJd2mH_NtKyF1duw",
  "https://lh3.googleusercontent.com/pw/AP1GczO3hJJ6ym8wF5zBhbZ7Bev8nq3C7NmMGW6SqwcIZgqNY5X9Oerr4sFHUtXu0vGdHs3l-_kcv_XR91OjZu0ZyF4DcsR7J5j2FIPqTyuj8ri61ITeR0g",
  "https://lh3.googleusercontent.com/pw/AP1GczPt0mSb1qjrtpzqBYmsGnyTVdVAI7OIxASKCnk0aazpUxxH8DdS3n7QXVP9EwzU2HCoGd6rQK5-Q-YwtVgBUkoaRpNKGmg8nm7a2wlzFGiueMbruD4",
  "https://lh3.googleusercontent.com/pw/AP1GczNhLUefbKo10xBqX26rwjyCEBCNvYIzuMXCc0DZlpDNI6ss-7_jEv0Eqcc9wLMWbJvODYPxcRY4XGxiEHbkWXZ-OazsTKg3JFSJ2GFS6GWrt-uMUxA",
  "https://lh3.googleusercontent.com/pw/AP1GczPUIhjQQa7YZEjffUTPfmK8a7um6nkUbc0P0uIcTlPG7KR21N8yqDlJarJ2VQIWmfN3FJIwMPADClYUWvIS3NdTvJEyvhpdndDs9co8S9zScsTmr78",
  "https://lh3.googleusercontent.com/pw/AP1GczOVPO9KlESkaH_CMCwO7DCdYAl--jRskHWB-G57s2SuVWhk9xYW57R8Ui2JA49HCiYqitxIgg0eWmtlxclvDmdGxhQePLWfwt8k3pWEzi1_pNvX7E4",
  "https://lh3.googleusercontent.com/pw/AP1GczNhdqiafrDmKJHA8GkMLaCNDJ5cWDIgbFA2WicSmnD1MR1DEJMFnq55Hd9U79fsLBhYucsT2hozXhGm_Gy6aYWVSRMOUB6kK-CgZUzNZ6lxREjXAvo",
  "https://lh3.googleusercontent.com/d/1q3CjNacY6D-tcTUCEiBSZs8E2gyiMnPL",
  "https://lh3.googleusercontent.com/pw/AP1GczNXzQe-PXZY0eDV24vN6QF_7rK7RnuodHo1puzYWsySDLdXNmmXGHtxRBIqzPeO3z1Ezcvk1UBetCgYLBXGpDecGMHk3BxLIGgl-gxBN8MzavbEpW8",
  "https://lh3.googleusercontent.com/pw/AP1GczP9MkJRAlcO3nF2LoIyRYyJLaOi5Wfzh2JjWQkD5g4uXNnnc0DUriu2dIboYzK1-H0jJgqCRh1ZmqEfOfqiAvNBoWaVdKdKunpgsnrzGfzVnWoLhZs",
  "https://lh3.googleusercontent.com/pw/AP1GczNrc521MCa4tlP9zuOiy7scvsPZOwIHRroAi5YdWF7in8OpXmUuDFNZht29EFGto5zBvyQpv9WzQldWY-PWOZnUgWlc7fudFMTaZMg5YnNVbI0CJVQ",
  "https://lh3.googleusercontent.com/pw/AP1GczNRGO9kHloY-vp37dOegoPLbvHmf6Ahn82Irt3UDB2EgFOUdbPkuBIQ7IWsP8qhRFOrOkhDLhO3EQuABVX7TUlNV9C6GK8BGpH8SdYqWCCxi2Znvuk",
  "https://lh3.googleusercontent.com/pw/AP1GczPU_8OgVu74LBA6SNAegy620_h8ChvH51CMyzu2qLRI_N7bfXipzhJNpOXqVzMf_KTeQOkdJ5Cq9bJU-Zk2_F24jzTsxrRrFRQifHz2CxI8nenuyJU",
  "https://lh3.googleusercontent.com/pw/AP1GczPRjZjszdiuCk0kofsUMnCqQeV5ljHXsTWZPM-Du6GK5V4ifHNWaCc708HNLvzctRObEzJ9it8uxjn8Xz_YxEHAldFPkMmE3hWvDUVJwH7raMMUHz0",
  "https://lh3.googleusercontent.com/pw/AP1GczNLHoaBh-1-Zc6JEbh7AY_HHL6d_abGL2efBqTOcdtJS7i3cvgRJy4zORottSztHKnWf4IAjFggFFbtCv44ckXXU6l4zUzEikjaED_7j5TCU8f2Itg",
  "https://lh3.googleusercontent.com/pw/AP1GczMI7GedxNJts3r14gF9PMl5erd0KzRzhJ-Zpir04RximUIW-h2u5GQWsy9_myOPlXZn_aS44zQuTb5SV87CYTXelSVU_U1ty0Wm_ewmq3Ya-d_5SGw",
  "https://lh3.googleusercontent.com/pw/AP1GczPhbmTq7Jhatp_TnFkuchhs1Ial8cW0BH_S1oAdfGx6gi2RHiQrBRGeq0Ud8NNeX3fJkWZM7fp1btLR79RslYfFHzVZYPPKIcWUriQf4EkuK1T2G2w",
  "https://lh3.googleusercontent.com/pw/AP1GczOyl-Dc9Xl8bMCyOgCPGCLp5WblVTshVo0YN8-taMD0UD9-_aN4qDRq6965sZtKRI04enYNmS1K0Yc31HRkuiPrtARLIcuhQAmIn6vqigCDgSPsnO4",
  "https://lh3.googleusercontent.com/pw/AP1GczPlTNQZtGFO9_dLd26Hm-vbW34pUnt06bA42P_EJX3ZD-I-NiF9MsQQZjigb3YeXjzhmnnkPymF1YLOsSvzHdLCCPA87CuOiPkpL5BYOkm8h8xun5c",
  "https://lh3.googleusercontent.com/pw/AP1GczPR9rE1giijvE_vHpL08PgquLfygdKcg6Gxzyr-7gFb4oE2LB_TpNvAFeBPmFxu3eLnXvrhxww88YYH9Th_SuM8I4wjpbXBQdYvC0JBkJuhYUJfRSc",
  "https://lh3.googleusercontent.com/pw/AP1GczOgd3sw0rMgOCHLKAG699J1Uk1y0xI0jvw4A8P6RnCHlYkTyBG4ER-UDo91ABR7R_kJG3QrTHfPxD2G-inNJCzX5Oa1m3BM77TxK-_kQfgnQlC7tzo",
  "https://lh3.googleusercontent.com/pw/AP1GczNDkck10PE913J99fRlL3wlLwczSd-jqNZeG0hvJXxIeC7kYhgggdNIUSVFI4iOLT0squKGYa7ukPNJNOyZ9femyT9egmGMAnh82QTX29HZ0IcAJZA",
  "https://lh3.googleusercontent.com/pw/AP1GczNJS1upoZFtCab-OzNhp5cqQDOUoaDrgWVA9hqxr8uyXcYC5_x8n5emo5NbL2T7zH8G2dpD_8q7kdrlK89X2NKeNcKoVIhzKZb4SSIbjokqRZCP7ew"
];

const ALL_CATALOG_PHOTOS: CatalogPhoto[] = PHOTO_URLS.map((url, index) => ({
  id: index + 1,
  url: `${url}=w900`,
  fullUrl: `${url}=w1600`,
  thumb: `${url}=w500-h500-c`
}));

function PhotoThumbnail({ 
  photo, 
  alt 
}: { 
  photo: CatalogPhoto; 
  alt: string;
}) {
  const [src, setSrc] = useState(photo.thumb);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    if (errorCount === 0) {
      setSrc(photo.url);
      setErrorCount(1);
    } else if (errorCount === 1) {
      const raw = photo.thumb.split("=")[0];
      setSrc(raw);
      setErrorCount(2);
    } else if (errorCount === 2) {
      setSrc("https://lh3.googleusercontent.com/d/1zSSHqssNq7P5YDhljaq20uSE4-AOEHT1=w500");
      setErrorCount(3);
    }
  };

  return (
    <div className="relative w-full h-full bg-[#fff0f3] flex items-center justify-center overflow-hidden rounded-xl">
      {/* Soft romantic shimmer while image is downloading */}
      {!hasLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffe5ec] via-[#ffccd5]/50 to-[#fff0f3] flex flex-col items-center justify-center animate-pulse z-0">
          <span className="text-xl animate-bounce">✨</span>
          <span className="text-[10px] text-[#e63946]/70 font-semibold mt-1">Cargando...</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        onLoad={() => setHasLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-108 ${
          hasLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function ModalPhotoViewer({
  photo
}: {
  photo: CatalogPhoto;
}) {
  const [src, setSrc] = useState(photo.fullUrl);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setSrc(photo.fullUrl);
    setIsLoaded(false);
  }, [photo.fullUrl]);

  return (
    <div className="relative max-w-full max-h-[74vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
      {/* Blurred thumbnail preview while high-res downloads */}
      <img
        src={photo.thumb}
        alt="Preview"
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover filter blur-md opacity-40 transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-40"
        }`}
      />

      {/* Loading spinner while high-res loads */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white/90">
          <div className="w-8 h-8 border-2 border-[#ffafcc] border-t-transparent rounded-full animate-spin mb-2" />
          <span className="text-xs font-medium tracking-wide">Cargando recuerdo...</span>
        </div>
      )}

      {/* High-res image */}
      <img
        key={photo.id + src}
        src={src}
        alt="Recuerdo de Sara & Pool"
        referrerPolicy="no-referrer"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (src === photo.fullUrl) {
            setSrc(photo.url);
          } else {
            setSrc(photo.thumb);
          }
        }}
        className={`relative z-20 max-w-full max-h-[74vh] object-contain rounded-xl shadow-inner border border-rose-100 transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

interface PhotoCatalogProps {
  onFavoriteTrigger?: () => void;
}

export default function PhotoCatalog({ onFavoriteTrigger }: PhotoCatalogProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("sara_pool_fav_photos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  // Sync favorites to localStorage
  const toggleFavorite = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev => {
      let updated: number[];
      if (prev.includes(id)) {
        updated = prev.filter(x => x !== id);
      } else {
        updated = [...prev, id];
        if (onFavoriteTrigger) onFavoriteTrigger();
      }
      try {
        localStorage.setItem("sara_pool_fav_photos", JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  const displayedPhotos = ALL_CATALOG_PHOTOS;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex(prev => (prev! > 0 ? prev! - 1 : displayedPhotos.length - 1));
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex(prev => (prev! < displayedPhotos.length - 1 ? prev! + 1 : 0));
      } else if (e.key === "Escape") {
        setActivePhotoIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, displayedPhotos.length]);

  return (
    <section id="catalogo-section" className="relative py-16 sm:py-20 px-4 max-w-7xl mx-auto text-center scroll-mt-24">
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#e63946] mb-3 flex items-center justify-center gap-2">
          <ImageIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#e63946]" />
          Álbum de Recuerdos • Sara & Pool
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#4a1525]/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Nuestros momentos juntos capturados con todo el amor. ❤️
        </p>
      </div>

      {/* --- EXCLUSIVE DECORATED MOSAIC GALLERY GRID (MARCOS DECORATIVOS ELEGANTES Y LIMPIOS) --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 pt-3">
        {displayedPhotos.map((photo, idx) => {
          const isFav = favorites.includes(photo.id);
          const decorationPattern = photo.id % 4;

          return (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative bg-white/95 p-3 rounded-2xl shadow-[0_8px_24px_rgba(230,57,70,0.12)] border-2 border-[#ffccd5]/80 hover:border-[#e63946] hover:shadow-[0_14px_36px_rgba(230,57,70,0.22)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer ring-1 ring-black/5 flex flex-col items-center"
            >
              {/* --- 1. WASHI TAPE / DECORATIVE ACCENTS AT TOP --- */}
              {decorationPattern === 0 && (
                <div className="absolute -top-2.5 left-4 w-12 sm:w-14 h-4 bg-[#ffafcc]/85 border border-white shadow-xs transform -rotate-2 rounded-xs pointer-events-none z-20 flex items-center justify-center">
                  <span className="text-[7px] text-[#4a1525]/70 font-mono tracking-tighter">S&P ❤️</span>
                </div>
              )}

              {decorationPattern === 1 && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 bg-[#ffe5ec]/95 border border-amber-300/80 shadow-xs transform rotate-1 rounded-xs pointer-events-none z-20 flex items-center justify-center">
                  <span className="text-[7px] text-amber-800 font-bold tracking-widest uppercase">AMOR</span>
                </div>
              )}

              {decorationPattern === 2 && (
                <div className="absolute -top-2 right-3 px-2 py-0.5 bg-rose-50 border border-dashed border-[#e63946]/70 rounded text-[9px] font-bold text-[#e63946] shadow-xs z-20 pointer-events-none transform rotate-3 flex items-center gap-0.5">
                  <span>💌</span>
                  <span className="text-[8px] font-mono">S&P</span>
                </div>
              )}

              {decorationPattern === 3 && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 shadow-md border border-white z-20 flex items-center justify-center pointer-events-none">
                  <span className="text-[8px]">✨</span>
                </div>
              )}

              {/* --- 2. INNER PHOTO CONTAINER WITH VINTAGE CORNERS --- */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-rose-50 border border-rose-100 shadow-inner">
                {/* Vintage Corner Brackets */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/90 rounded-tl-xs pointer-events-none z-10 drop-shadow-xs" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/90 rounded-br-xs pointer-events-none z-10 drop-shadow-xs" />

                {/* Photo with safe loading, fallback and referrerPolicy */}
                <PhotoThumbnail photo={photo} alt="Recuerdo de Sara & Pool" />

                {/* Favorite Heart Button */}
                <button
                  onClick={(e) => toggleFavorite(photo.id, e)}
                  className="absolute top-2 right-2 z-20 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-sm hover:scale-115 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                  title={isFav ? "Quitar de favoritas" : "Marcar como favorita"}
                >
                  <Heart className={`w-3.5 h-3.5 transition-colors ${isFav ? "fill-[#e63946] text-[#e63946]" : "text-gray-400 group-hover:text-[#e63946]"}`} />
                </button>

                {/* Gradient Hover Overlay with expand icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white pointer-events-none">
                  <span className="bg-white/90 text-[#e63946] p-2 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- LIGHTBOX MODAL (PANTALLA COMPLETA EN ALTA RESOLUCIÓN Y DECORADA) --- */}
      {activePhotoIndex !== null && displayedPhotos[activePhotoIndex] && (
        <div 
          onClick={() => setActivePhotoIndex(null)}
          className="fixed inset-0 bg-black/92 backdrop-blur-md flex flex-col justify-between items-center z-[3000] p-4 animate-in fade-in duration-200 select-none cursor-pointer"
        >
          {/* Top Bar */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-5xl flex items-center justify-between text-white py-2 px-4 z-50 cursor-default"
          >
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl font-bold text-rose-300">
                Sara & Pool ❤️
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleFavorite(displayedPhotos[activePhotoIndex].id)}
                className="bg-white/10 hover:bg-white/20 border border-white/20 p-2 rounded-full text-white transition-all cursor-pointer"
                title="Favorita"
              >
                <Heart className={`w-4 h-4 ${favorites.includes(displayedPhotos[activePhotoIndex].id) ? "fill-[#e63946] text-[#e63946]" : "text-white"}`} />
              </button>

              <button
                onClick={() => setActivePhotoIndex(null)}
                className="bg-white/10 hover:bg-rose-600 border border-white/20 p-2 rounded-full text-white transition-colors cursor-pointer"
                title="Cerrar (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Image Container with Decorated Frame and Arrow Nav */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative flex-grow flex items-center justify-center max-w-5xl w-full my-auto px-12 cursor-default"
          >
            {/* Prev Button */}
            <button
              onClick={() => setActivePhotoIndex(prev => (prev! > 0 ? prev! - 1 : displayedPhotos.length - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer z-30 shadow-lg"
              title="Foto anterior (←)"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* High-Res Photo inside Decorated Frame */}
            <div className="relative p-3 bg-white/95 rounded-2xl shadow-2xl border-2 border-white ring-4 ring-[#ffafcc]/40 max-w-full max-h-[82vh] flex flex-col items-center">
              {/* Top Washi Tape in Modal */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#ffafcc]/90 border border-white/80 shadow-md transform -rotate-1 rounded-xs pointer-events-none z-30 flex items-center justify-center">
                <span className="text-[9px] text-[#4a1525] font-bold tracking-widest uppercase">
                  SARA & POOL ❤️
                </span>
              </div>

              {/* Safe high-res viewer with loader, thumb preview and fallbacks */}
              <ModalPhotoViewer photo={displayedPhotos[activePhotoIndex]} />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setActivePhotoIndex(prev => (prev! < displayedPhotos.length - 1 ? prev! + 1 : 0))}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer z-30 shadow-lg"
              title="Siguiente foto (→)"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Bottom Footnote */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl py-2 px-4 flex items-center justify-center text-xs text-white/70 cursor-default"
          >
            <span>Usa las flechas del teclado (← / →) o los botones para navegar</span>
          </div>
        </div>
      )}
    </section>
  );
}
