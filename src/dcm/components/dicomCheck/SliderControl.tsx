import { Slider } from "antd";
import { useRef } from "react";

const SliderControl = ({
  onChangeValue,
  scrollValue,
}: {
  onChangeValue: (e: number) => void;
  scrollValue: number;
}) => {
  const marks = useRef({
    10: "10%",
    100: "100%",
    300: "300%",
  });

  return (
    <Slider
      vertical={true}
      onChange={onChangeValue}
      marks={marks.current}
      min={10}
      max={300}
      step={10}
      value={scrollValue}
    />
  );
};

export default SliderControl;
