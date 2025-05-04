"use client";

import { useEffect, useState } from "react";
import ImageDisplay from "../components/ImageDisplay";
import { REGIONS } from "../constants";
import Options from "../components/Options";
import GameOverScreen from "../components/GameOverScreen";
import useModel from "../hooks/useModel";
import { AiOutlineLoading } from "react-icons/ai";

const Play: React.FC = () => {
  const [imagePath, setImagePath] = useState("/images/image1.jpg");
  const [region, setRegion] = useState(REGIONS[0]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const runModel = useModel();

  const nextImage = async () => {
    const randomImagePath = `/images/image${
      Math.floor(Math.random() * 40) + 1
    }.jpg`;

    setImagePath(randomImagePath);
    const prediction = await runModel(randomImagePath);
    setRegion(REGIONS[prediction ?? 0]);
  };

  useEffect(() => {
    const loadPage = async () => {
      await nextImage();
      setIsLoading(false);
    };

    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const guess = async (selectedRegion: string) => {
    if (selectedRegion === region) {
      setScore(score + 1);
      await nextImage();
    } else setIsGameOver(true);
  };

  const playAgain = async () => {
    setIsGameOver(false);
    setScore(0);
    await nextImage();
  };

  if (isGameOver) return <GameOverScreen score={score} playAgain={playAgain} />;

  return (
    <>
      <div className="h-16 flex justify-center items-center">
        <h1 className="font-medium text-2xl text-white">Guess the region</h1>
      </div>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center gap-5 h-[50vh]">
          <AiOutlineLoading className="animate-spin text-gray-200 text-8xl" />
          <p className="text-white uppercase text-lg font-bold">Loading</p>
        </div>
      ) : (
        <ImageDisplay imagePath={imagePath} />
      )}

      <Options onClick={guess} />
      <p className="absolute bottom-5 left-5 font-medium text-white text-xl">
        Score: {score}
      </p>
    </>
  );
};

export default Play;
