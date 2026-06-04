import childhood from "../assets/childhood/c1.jpg";
import current from "../assets/current.jpg";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ThenVsNow() {
  const { scrollYProgress } = useScroll();

  const oldOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [1, 0]
  );

  const newOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    [0, 1]
  );

  return (
    <section className="then-now">
      <h2>✨ Then vs Now ✨</h2>

      <div className="image-stack">

  <motion.img
    src={childhood}
    alt="Childhood"
    className="morph"
    style={{
      opacity: oldOpacity,
      scale: oldOpacity
    }}
  />

  <motion.img
    src={current}
    alt="Current"
    className="morph"
    style={{
      opacity: newOpacity,
      scale: newOpacity
    }}
  />

</div>

      <h3>24 Years of Growth</h3>

      <p>
        From a curious child with big dreams
        to the person I am today.
      </p>
    </section>
  );
}