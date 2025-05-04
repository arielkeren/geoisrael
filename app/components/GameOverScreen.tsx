import Link from "next/link";

type Props = {
  score: number;
  playAgain: () => Promise<void>;
};

const GameOverScreen: React.FC<Props> = ({ score, playAgain }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center h-screen bg-gray-900">
      <h1 className="text-white text-5xl font-bold uppercase">Game Over</h1>
      <p className="text-white font-medium text-xl">Your score: {score}</p>
      <button
        onClick={playAgain}
        className="bg-gray-200 font-bold uppercase rounded w-48 h-10 cursor-pointer transition-colors hover:bg-gray-300"
      >
        Play Again
      </button>
      <Link
        href="/"
        className="flex justify-center items-center bg-gray-200 font-bold uppercase rounded w-48 h-10 cursor-pointer transition-colors hover:bg-gray-300"
      >
        Home
      </Link>
    </div>
  );
};

export default GameOverScreen;
