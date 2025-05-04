import { REGIONS } from "../constants";
import OptionButton from "./OptionButton";

type Props = {
  onClick: (region: string) => Promise<void>;
};

const Options: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 mt-4 w-1/2">
        {REGIONS.map(region => (
          <OptionButton key={region} region={region} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default Options;
