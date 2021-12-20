import { Row, Col } from "antd";
import { useState } from "react";

const DicomsList = ({
  dicomLists,
  getDicomIndex,
  disabled,
}: {
  dicomLists: Array<{url: string, devicePixelRatio?: number}>;
  disabled: boolean;
  getDicomIndex: (e: number) => void;
}) => {
  const [actived, setActived] = useState(0);

  const switchDicom = (index: number) => {
    setActived(index);
    getDicomIndex(index);
  };

  return (
    <>
      {disabled ? "其他扫查图片" : ""}
      <Row gutter={[16, 16]}>
        {dicomLists.map((item, index) => (
          <Col key={item.url} span={24} onClick={switchDicom.bind(null, index)}>
            <span className={index === actived ? "activedSpan" : ""}>
              {index + 1}
            </span>
            {/*<DicomItem url={item} />*/}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DicomsList;
