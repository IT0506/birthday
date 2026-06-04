import { AnimatePresence, motion } from "framer-motion";

export default function MemoryModal({
  selected,
  closeModal,
}) {
  if (!selected) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.8,
            opacity: 0,
          }}
        >
          <h2>{selected.title}</h2>

          {/* Memory Photos */}
          <div className="memory-gallery">
            {selected.images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`${selected.title}-${index}`}
                className="memory-photo"
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            ))}
          </div>

          <div className="memory-box">
            <h3>📖 Story</h3>
            <p>{selected.details}</p>
          </div>

          <div className="memory-box">
            <h3>❤️ Favorite Memory</h3>
            <p>{selected.memory}</p>
          </div>

          <div className="memory-box">
            <h3>🎯 Achievement</h3>
            <p>{selected.achievement}</p>
          </div>

          <button
            className="close-btn"
            onClick={closeModal}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}