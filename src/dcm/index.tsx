import { useState } from "react";
import DicomsList from "dcm/components/list";
import "./index.less";
import DicomCheck from "./components/dicomCheck";

const DicomJsx = ({
  dicomLists,
  disabled = false,
}: {
  mode: string;
  dicomLists: Array<{url: string, devicePixelRatio?: number}>;
  disabled?: boolean;
}) => {
  const [index, setIndex] = useState<number>(0);

  const getDicomIndex = (e: number) => {
    setIndex(e);
  };

  return (
    <div className="main">
      <div className="list">
        <DicomsList
          disabled={disabled}
          dicomLists={dicomLists}
          getDicomIndex={getDicomIndex}
        />
      </div>
      <div className="container">
        <DicomCheck
          disabled={disabled}
          dicomLists={dicomLists}
          activeIndex={index}
        />
      </div>
    </div>
  );
};

export default DicomJsx;
