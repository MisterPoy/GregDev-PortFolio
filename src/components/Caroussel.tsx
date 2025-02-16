import React, { useState } from "react";
import "../assets/styles/Carousel.scss";

// Définition des types pour les props du composant
interface CarouselProps {
  pictures: string[]; // Un tableau de chaînes de caractères pour les URLs des images
  alt: string; // Texte alternatif pour les images
}

export function Carousel({ pictures, alt }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Index de l'image actuelle
  const [fade, setFade] = useState<boolean>(false); // Gère l'effet de fondu

  // Fonction pour afficher l'image précédente
  const previousImg = (): void => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 350);
  };

  // Fonction pour afficher l'image suivante
  const nextImg = (): void => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((nextIndex) =>
        nextIndex === pictures.length - 1 ? 0 : nextIndex + 1
      );
      setFade(false);
    }, 350);
  };

  return (
    <div className="carousel">
      <div
        className={`carousel-img ${fade ? "fade" : ""}`}
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      ></div>
      {pictures.length > 1 && (
        <>
          <div>
            <img
              onClick={previousImg}
              src="/assets/images/arrowLeft.png"
              alt="Arrow left"
              className="arrow arrowLeft"
            />
          </div>
          <div>
            <img
              onClick={nextImg}
              src="/assets/images/arrowRight.png"
              alt="Arrow right"
              className="arrow arrowRight"
            />
          </div>
          <div className="img-count">{`${currentIndex + 1}/${
            pictures.length
          }`}</div>
        </>
      )}
    </div>
  );
}
