type Props = {
  region: string;
  onClick: (region: string) => void;
};

const OptionButton: React.FC<Props> = ({ region, onClick }) => {
  return (
    <button
      className="bg-gray-200 cursor-pointer drop-shadow-xl hover:bg-gray-300 font-bold py-4 rounded uppercase text-lg"
      onClick={() => onClick(region)}
    >
      {region}
    </button>
  );
};

export default OptionButton;
