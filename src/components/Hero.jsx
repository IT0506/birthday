import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import childhood from "../assets/childhood/c1.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="stars"></div>

      <motion.img
        src={childhood}
        alt="Childhood Memory"
        className="hero-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <TypeAnimation
        sequence={[
          "🎂 Happy 24th Birthday",
          2000,
          "✨ Celebrating 24 Amazing Years",
          2000,
          "🚀 The Journey Continues",
          2000,
        ]}
        wrapper="h1"
        repeat={Infinity}
      />

      <p>
        Every year tells a story.
        Every memory shapes a dream.
      </p>

      <div className="scroll-indicator">
        ↓ Scroll ↓
      </div>
    </section>
  );
}