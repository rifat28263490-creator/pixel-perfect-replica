import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import topLeftEllipse from "@/assets/top-left-Ellipse.svg";
import topRightEllipse from "@/assets/top-right-Ellipse.svg";
import topTopEllipse from "@/assets/top-top-Ellipse.svg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Video background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-animation.webm" type="video/webm" />
          <source src="/hero-animation.mp4" type="video/mp4" />
        </video>
      </motion.div>

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
    </section>
  );
};

export default HeroSection;
