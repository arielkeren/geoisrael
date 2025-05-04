import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center h-screen bg-gray-900">
      <h1 className="text-white text-9xl font-bold uppercase">GeoIsrael</h1>
      <Link
        href="/play"
        className="flex justify-center items-center bg-gray-200 font-bold text-2xl uppercase rounded w-72 h-12 cursor-pointer transition-colors hover:bg-gray-300"
      >
        Play
      </Link>
    </div>
  );
};

export default Home;
