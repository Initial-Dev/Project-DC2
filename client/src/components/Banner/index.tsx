import { Icons } from "@/components/Icons/Icons";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export const Banner = () => {
  // A remplacer par valeur dynamique
  // Initialisation des états pour l'image, la classe d'opacité et la progression
  const [image, setImage] = useState("./banner1.png");
  const [opacityClass, setOpacityClass] = useState("opacity-100");
  const [progress, setProgress] = useState(0);

  // Utilisation de useEffect pour gérer le cycle de vie du composant
  useEffect(() => {
    // A remplacer par valeur dynamique
    // Définition de la liste des images à faire défiler
    const images = ["./banner1.png", "./banner2.png", "./banner3.png"];
    let currentImage = 0; // Index de l'image actuelle
    const intervalTime = 10000; // Durée de l'intervalle pour changer d'image (10 secondes)

    // Fonction pour mettre à jour la progression
    const updateProgress = () => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          // Si la progression est complète, on commence le fondu
          setOpacityClass("opacity-0");
          setTimeout(() => {
            // Changement de l'image après la durée du fondu
            currentImage = (currentImage + 1) % images.length;
            setImage(images[currentImage]);
            setOpacityClass("opacity-100"); // Réinitialisation de l'opacité
          }, 1000); // Durée du fondu
          return 0;
        } else {
          // Incrémentation de la progression
          return oldProgress + 1;
        }
      });
    };

    // Définition de l'intervalle pour la mise à jour de la progression
    const progressInterval = setInterval(
      updateProgress,
      intervalTime / 100, // Calcul pour la mise à jour de la progression chaque 0.1 seconde
    );

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(progressInterval);
  }, []); // Le tableau vide assure que useEffect s'exécute une seule fois à la création du composant

  return (
    <div className="hidden md:block relative w-full h-[40rem] overflow-hidden px-8 py-4">
      <div className="absolute flex flex-col gap-4 bottom-20 left-20 z-20 ">
        {/* A remplacer par valeur dynamique */}
        <h1 className="text-white font-kanit text-3xl">
          Nike Air Max 97 " All Star Jersey "
        </h1>
        <button className="bg-white hover:bg-gray-200 text-primary font-semibold w-32 px-4 py-2 rounded-lg transition ease-in-out duration-300">
          Acheter
        </button>
      </div>
      <a
        className="absolute p-4 rounded-lg shadow-2xl bg-white border-2 border-black/20 flex flex-col gap-4 top-20 right-20 z-20"
        href="/"
      >
        {/* A remplacer par valeur dynamique */}
        <Icons.nike className="" width="40" height="40" />
      </a>
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* href doit être remplacé par valeur dynamique qui est le chemion du produit */}
        <a href="/">
          <img
            src={image}
            alt="banner"
            className={`w-full h-full object-cover shadow-lg z-0 transition-opacity duration-1000 ${opacityClass}`}
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
        </a>
        <Progress
          value={progress}
          className="absolute bottom-0 bg-white/20 h-1 z-20 "
        />
      </div>
    </div>
  );
};
