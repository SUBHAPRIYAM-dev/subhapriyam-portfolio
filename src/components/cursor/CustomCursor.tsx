import { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hover targets and data-cursor attributes
      const target = e.target as HTMLElement | null;
      const hoverable = target?.closest("a, button, [data-cursor], .interactive-hover");

      if (hoverable) {
        setIsHovered(true);
        const text = hoverable.getAttribute("data-cursor") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isTouchDevice]);

  // Eased trailing motion for outer ring
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId: number;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Immediate Inner Dot */}
      <div
        className="fixed w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_10px_#38bdf8]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0.4 : 1})`,
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        className={`fixed border rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out backdrop-blur-[1px] ${
          isHovered
            ? "w-16 h-16 bg-cyan-500/10 border-cyan-400/60 scale-110"
            : "w-9 h-9 border-white/20 scale-100"
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
