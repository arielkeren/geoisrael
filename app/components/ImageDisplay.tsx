import Image from "next/image";

type Props = {
  imagePath: string;
};

const ImageDisplay: React.FC<Props> = ({ imagePath }) => {
  return (
    <div className="flex justify-center">
      <Image
        className="drop-shadow-2xl rounded border-6 border-gray-200"
        src={imagePath}
        height="750"
        width="750"
        priority
        alt=""
      />
    </div>
  );
};

export default ImageDisplay;
