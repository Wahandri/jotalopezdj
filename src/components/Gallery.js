"use client";

import "./Gallery.css";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/azotea2.jpg", alt: "Evento 1" },
    { src: "/images/IMG_4278.jpg", alt: "Luces" },
    { src: "/images/57486.JPG", alt: "DJ en vivo" },
    { src: "/images/azotea1.jpg", alt: "Boda" },
    { src: "/images/bodaViborilla.jpg", alt: "Proyección" },
    { src: "/images/BODAJUANITO.jpg", alt: "Boda" },
    { src: "/images/BodaViborillaPlaya.jpg", alt: "DJ luces" },
    { src: "/images/imagen2.jpg", alt: "Luces" },
    { src: "/images/bodaViborilla2.jpg", alt: "Cumpleaños" },
    { src: "/images/lopezDJ.jpg", alt: "Evento corporativo" },
  ];

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="galeria" className="gallery-section" ref={ref}>
      <motion.h2
        className="gallery-title text-gold"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.6 }}
      >
        Galería
      </motion.h2>

      <motion.div
        className="masonry-grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="masonry-item"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="gallery-image"
            />
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-image-wrapper"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="modal-image"
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
