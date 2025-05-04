import { useEffect, useState } from "react";
import { loadLayersModel, LayersModel, browser } from "@tensorflow/tfjs";
import { IMAGE_SIZE, MODEL_PATH } from "../constants";

const useModel = () => {
  const [model, setModel] = useState<LayersModel | null>(null);

  useEffect(() => {
    const loadModel = async () => setModel(await loadLayersModel(MODEL_PATH));

    loadModel();
  }, []);

  const runModel = async (imagePath: string) => {
    if (!model) return null;

    const img = new Image();
    img.src = imagePath;
    await new Promise(resolve => (img.onload = resolve));

    const tensorImage = browser
      .fromPixels(img)
      .resizeBilinear([IMAGE_SIZE, IMAGE_SIZE])
      .expandDims(0)
      .toFloat()
      .div(255.0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prediction = await (model.predict(tensorImage) as any).array();

    return prediction[0].indexOf(Math.max(...prediction[0]));
  };

  return runModel;
};

export default useModel;
