import { useState } from "react";
import MemoryModal from "./MemoryModal";

import c1 from "../assets/childhood/c1.jpg";
import c2 from "../assets/childhood/c2.jpg";


import s1 from "../assets/school/s1.jpg";
import s2 from "../assets/school/s2.jpg";
import s3 from "../assets/school/s3.jpg";

import c11 from "../assets/college/c11.jpg";
import c12 from "../assets/college/c12.jpg";
import c13 from "../assets/college/c13.jpg";

import t1 from "../assets/today/t1.jpg";
import t2 from "../assets/today/t2.jpg";
import t3 from "../assets/today/t3.jpg";

const journey = [
  {
    year: "2002",
    title: "👶 Childhood",

    images: [c1, c2],

    details:
      "The beginning of countless adventures and dreams.",

    memory:
      "Playing outdoors until sunset.",

    achievement:
      "Learning curiosity and creativity.",
  },

  {
    year: "2010",
    title: "🎒 School",

    images: [s1, s2, s3],

    details:
      "School years filled with friends and learning.",

    memory:
      "Annual day performances and competitions.",

    achievement:
      "Building confidence.",
  },

  {
    year: "2020",
    title: "🎓 College",

    images: [c11, c12, c13],

    details:
      "Coding, projects and growth.",

    memory:
      "Late-night project sessions.",

    achievement:
      "Learning software development.",
  },

  {
    year: "2026",
    title: "🚀 Today",

    images: [t1, t2, t3],

    details:
      "Celebrating 24 years and looking ahead.",

    memory:
      "Building exciting projects.",

    achievement:
      "Continuous self-improvement.",
  },
];

export default function Timeline() {
  const [selected, setSelected] =
    useState(null);

  return (
    <section className="timeline">

      <h2>✨ My Journey ✨</h2>

      <div className="journey-grid">

        {journey.map((item) => (
          <div
            key={item.year}
            className="journey-card"
          >
            <span>{item.year}</span>

            <h3>{item.title}</h3>

            <button
              onClick={() =>
                setSelected(item)
              }
            >
              Explore Memory →
            </button>
          </div>
        ))}

      </div>

      <MemoryModal
        selected={selected}
        closeModal={() =>
          setSelected(null)
        }
      />

    </section>
  );
}