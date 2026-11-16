import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface FlavorCupItem {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
  badgeColor?: string;
}

export const SHIBBYS_FLAVORS: FlavorCupItem[] = [
  {
    id: "original-tart",
    name: "Original Tart",
    tag: "Signature Classic",
    description: "Crisp, tangy, light, and naturally refreshing froyo.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/83600870-d335-4aeb-84c8-c18938c45736.png",
  },
  {
    id: "premium-acai",
    name: "Premium Açaí",
    tag: "100% Organic",
    description: "Rich Amazonian organic açaí with pure berry intensity.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/4a4b62e6-b6b7-4618-b986-92f815b693dd.png",
  },
  {
    id: "coconut",
    name: "Coconut",
    tag: "Dairy Free & Vegan",
    description: "Creamy tropical coconut milk froyo, light and smooth.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/5545b21a-6c0c-437d-871d-4eb8fba4fe02.png",
  },
  {
    id: "chocolate",
    name: "Chocolate",
    tag: "Deep Cocoa",
    description: "Decadent Dutch cocoa churned into silky froyo velvet.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/6d16486e-ab0e-446c-b13b-783e4656734d.png",
  },
  {
    id: "biscoff",
    name: "Biscoff",
    tag: "Fan Favourite",
    description: "Rich buttery caramel with sea-salt flake perfection.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/1a777818-eb0e-4992-ba3d-cd5de7abdbb7.png",
  },
  {
    id: "vanilla",
    name: "Vanilla",
    tag: "Pure Bean",
    description: "Real bourbon vanilla bean with rich creamy sweetness.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/cd3e43a1-1a88-4323-98ba-2d4a7390370b.png",
  },
  {
    id: "Wild Berry",
    name: "Wild Berry",
    tag: "Real Fruit",
    description: "A vibrant blend of juicy wild berries, bursting with sweet and tangy flavour.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/e605f9da-b814-4663-b343-f66fe006b9b6.png",
  },
  {
    id: "mango",
    name: "Mango Sorbet",
    tag: "Vegan / Fruit",
    description: "Juicy tropical mango purée, naturally bright and dairy-free.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/87c1d5f6-9a15-4c62-8017-28a4fe0e3362.png",
  },
];

export function ShibbysFlavoursCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 420 });
  const [rotation, setRotation] = useState(Math.PI / 2);
  const destRotationRef = useRef(Math.PI / 2);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartRotationRef = useRef(Math.PI / 2);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  // Measure container
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = Math.min(480, Math.max(340, Math.round(w * 0.38)));
        setDimensions({ width: w, height: h });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Animation physics loop (matches CloudCarousel smooth dampening)
  useEffect(() => {
    let current = rotation;
    const loop = () => {
      if (!isDraggingRef.current) {
        // Auto-rotation when not hovered
        if (!isHovered) {
          destRotationRef.current -= 0.0035;
        }
        const diff = destRotationRef.current - current;
        current += diff * 0.1;
        setRotation(current);

        // Find which item is closest to the front (sin is highest)
        const total = SHIBBYS_FLAVORS.length;
        const spacing = (Math.PI * 2) / total;
        let bestIdx = 0;
        let maxSin = -2;
        for (let i = 0; i < total; i++) {
          const rad = current + i * spacing;
          const s = Math.sin(rad);
          if (s > maxSin) {
            maxSin = s;
            bestIdx = i;
          }
        }
        setActiveIdx(bestIdx);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, rotation]);

  const rotateTo = useCallback((index: number) => {
    const total = SHIBBYS_FLAVORS.length;
    const spacing = (Math.PI * 2) / total;
    // We want index to be at angle = PI/2 (front)
    // current + index * spacing = PI/2 + 2*k*PI
    const current = destRotationRef.current;
    const targetBase = Math.PI / 2 - index * spacing;
    // Find closest k
    const diff = (targetBase - current) % (Math.PI * 2);
    let normalizedDiff = diff;
    if (diff > Math.PI) normalizedDiff -= Math.PI * 2;
    if (diff < -Math.PI) normalizedDiff += Math.PI * 2;
    destRotationRef.current = current + normalizedDiff;
  }, []);

  const handlePrev = useCallback(() => {
    const total = SHIBBYS_FLAVORS.length;
    const spacing = (Math.PI * 2) / total;
    destRotationRef.current += spacing;
  }, []);

  const handleNext = useCallback(() => {
    const total = SHIBBYS_FLAVORS.length;
    const spacing = (Math.PI * 2) / total;
    destRotationRef.current -= spacing;
  }, []);

  // Mouse / Touch drag handlers
  const onPointerDown = (clientX: number) => {
    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragStartRotationRef.current = destRotationRef.current;
    lastXRef.current = clientX;
    velocityRef.current = 0;
  };

  const onPointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - dragStartXRef.current;
    const sensitivity = 0.005;
    destRotationRef.current = dragStartRotationRef.current - dx * sensitivity;
    velocityRef.current = clientX - lastXRef.current;
    lastXRef.current = clientX;
  };

  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // snap to nearest
    const total = SHIBBYS_FLAVORS.length;
    const spacing = (Math.PI * 2) / total;
    const current = destRotationRef.current;
    const nearestStep = Math.round((current - Math.PI / 2) / spacing);
    destRotationRef.current = Math.PI / 2 + nearestStep * spacing - velocityRef.current * 0.01;
  };

  // Compute 3D positions exactly as CloudCarousel does:
  // x = xCenter + (cos(rad) * xRadius - orgWidth * 0.5) * scale
  // y = yCenter + (sin(rad) * yRadius) * scale
  // scale = ((sin(rad) + 1) * smallRange) + minScale
  const total = SHIBBYS_FLAVORS.length;
  const spacing = (Math.PI * 2) / total;
  const minScale = 0.22;
  const smallRange = (1 - minScale) * 0.5;

  const xRadius = Math.max(180, dimensions.width * 0.42);
  const yRadius = Math.max(30, dimensions.height * 0.18);
  const xCentre = dimensions.width / 2;
  const yCentre = dimensions.height * 0.22;
  const baseCupSize = Math.min(360, Math.max(220, Math.round(dimensions.width * 0.28)));

  const activeItem = SHIBBYS_FLAVORS[activeIdx] ?? SHIBBYS_FLAVORS[0]!;

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Orbit Canvas Container */}
      <div
        ref={containerRef}
        className="relative mx-auto w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        style={{ height: `${dimensions.height + 140}px` }}
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onMouseUp={onPointerUp}
        onTouchStart={(e) => {
          if (e.touches[0]) onPointerDown(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) onPointerMove(e.touches[0].clientX);
        }}
        onTouchEnd={onPointerUp}
      >
        {/* Subtle elliptical shadow/track on the floor */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-gradient-to-b from-white/5 to-transparent blur-sm"
          style={{
            top: `${yCentre + yRadius + baseCupSize * 0.4}px`,
            width: `${xRadius * 2}px`,
            height: `${yRadius * 2}px`,
          }}
        />

        {/* 3D items sorted by scale (back to front) */}
        {SHIBBYS_FLAVORS.map((flavor, i) => {
          const rad = rotation + i * spacing;
          const sinVal = Math.sin(rad);
          const cosVal = Math.cos(rad);
          const scale = (sinVal + 1) * smallRange + minScale;
          const w = baseCupSize * scale;
          const h = baseCupSize * scale;
          const x = xCentre + cosVal * xRadius - w * 0.5;
          const y = yCentre + sinVal * yRadius * scale;
          const zIndex = Math.round(scale * 100);
          const opacity = Math.max(0.12, Math.min(1, scale * 1.05));
          const isFront = i === activeIdx;

          return (
            <div
              key={flavor.id}
              onClick={(e) => {
                e.stopPropagation();
                rotateTo(i);
              }}
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                width: `${w}px`,
                height: `${h}px`,
                zIndex,
                opacity,
                cursor: "pointer",
                transition: isDraggingRef.current ? "none" : "transform 0.15s ease-out",
              }}
              className="group/cup flex items-center justify-center"
              title={`${flavor.name} — Click to bring to front`}
            >
              <div className="relative size-full">
                {/* Real Shibbys-style transparent cup photo */}
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  draggable={false}
                  className={`size-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
                    isFront ? "group-hover/cup:scale-105" : "hover:brightness-110"
                  }`}
                  loading="eager"
                />

                {/* Soft ground reflection/glow under the cup */}
                <div
                  className="pointer-events-none absolute -bottom-3 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-black/25 blur-md"
                  style={{ opacity: scale }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Front active flavour title & description box (interactive Shibbys style) */}
      <div className="relative mt-6 mx-auto max-w-md px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-card backdrop-blur-md shadow-sm border border-white/25">
          <span>✨</span>
          <span>{activeItem.tag}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-extrabold text-card sm:text-3xl drop-shadow-md">
          {activeItem.name}
        </h3>
        <p className="mt-1.5 text-sm text-card/90 drop-shadow-sm leading-relaxed">
          {activeItem.description}
        </p>

        {/* Carousel controls & indicator dots */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous flavour"
            className="flex size-10 items-center justify-center rounded-full bg-card/90 text-froyo-darkteal shadow-md transition-all hover:scale-110 hover:bg-card active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-1.5">
            {SHIBBYS_FLAVORS.map((f, i) => (
              <button
                key={f.id}
                type="button"
                onClick={() => rotateTo(i)}
                aria-label={`Jump to ${f.name}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIdx
                    ? "h-2.5 w-7 bg-white shadow-sm"
                    : "size-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next flavour"
            className="flex size-10 items-center justify-center rounded-full bg-card/90 text-froyo-darkteal shadow-md transition-all hover:scale-110 hover:bg-card active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
