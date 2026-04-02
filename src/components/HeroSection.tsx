import { useEffect, useRef, useState } from "react";
import topLeftEllipse from "@/assets/top-left-Ellipse.svg";
import topRightEllipse from "@/assets/top-right-Ellipse.svg";
import topTopEllipse from "@/assets/top-top-Ellipse.svg";

const TOTAL_FRAMES = 181;
const FRAME_PATH = "/hero-frames/ezgif-frame-";

const getFrameSrc = (index: number) => {
  const num = String(index + 1).padStart(3, "0");
  return `${FRAME_PATH}${num}.jpg`;
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  // Draw frame on canvas based on scroll
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (!img) return;

      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cover fit
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );
      drawFrame(frameIndex);
    };

    // Draw first frame immediately
    drawFrame(0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: "400vh" }}
    >
      {/* Sticky canvas container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />

        {/* Decorative ellipses */}
        <img
          src={topLeftEllipse}
          alt=""
          className="absolute top-0 left-0 w-[500px] opacity-40 pointer-events-none z-10"
        />
        <img
          src={topRightEllipse}
          alt=""
          className="absolute top-20 right-0 w-[400px] opacity-30 pointer-events-none z-10"
        />
        <img
          src={topTopEllipse}
          alt=""
          className="absolute -top-10 left-1/3 w-[300px] opacity-25 pointer-events-none z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
