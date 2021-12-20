import { useState, useEffect } from "react";
import DicomRender from "dcm/components/dicomCheck/dicomRender";
// import { SourceData } from "@/services/check";

const DicomCheck = ({
  activeIndex,
  dicomLists,
  disabled,
}: {
  activeIndex: number;
  disabled: boolean;
  dicomLists: Array<{url: string, devicePixelRatio?: number}>;
}) => {
  const [items, setItems] = useState<Array<{ url: string, devicePixelRatio?: number }>>([]);
  useEffect(() => {
    setItems((prevState) => {
      prevState[activeIndex] = dicomLists[activeIndex];
      return [...prevState];
    });
  }, [activeIndex, dicomLists]);

  const loadSuccess = (ind: number) => {
    setItems((prevState) => {
      // 每次自动加载加3个
      if(ind < dicomLists.length) {
        prevState[ind] = dicomLists[ind];
      }
      if(ind + 1 < dicomLists.length) {
        prevState[ind + 1] = dicomLists[ind + 1];
      }
      if(ind + 2 < dicomLists.length) {
        prevState[ind + 2] = dicomLists[ind + 2];
      }
      return [...prevState];
    });
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={
              Number(activeIndex) === index
                ? "actived renderItem"
                : "default renderItem"
            }
          >
            <DicomRender
              loadSuccess={loadSuccess}
              index={index}
              disabled={disabled}
              url={item?.url || ''}
              devicePixelRatio={item?.devicePixelRatio || 1}
            />
          </div>
        );
      })}
    </>
  );
};

export default DicomCheck;
