import { Button, Space } from "antd";
import { ColumnHeightOutlined } from "@ant-design/icons";
import { Dispatch, FormEvent, MutableRefObject, ReactNode, useCallback } from "react";
// import html2canvas from "html2canvas";
// import { picture } from "@/libs/api/user-api";
// import { usePictureContext } from "@/libs/context/paramsProvider";

const ButtonJsx = (
  { activeMode, modeType, children, onClickImpl, dataMode, icon, keyDownImpl } :
  { activeMode: string, onClickImpl: (e: unknown) => void, modeType: Array<string>,
    children: ReactNode, dataMode?: string, icon?: ReactNode,
    keyDownImpl: (e: FormEvent<HTMLFormElement>) => void }
) => {
  return (
    <Button
      onKeyDown={keyDownImpl}
      icon={icon}
      data-mode={dataMode}
      style={{
        border: modeType.includes(activeMode) ? `1px solid #299bff` : `1px solid #d9d9d9`,
        color: modeType.includes(activeMode) ? `#299bff` : 'rgba(0, 0, 0, 0.85)',
      }}
      onClick={onClickImpl}>
      { children }
    </Button>
  )
}

const DicomOperate = (
  { activeMode,
    setPlayImpl,
    setActiveMode,
    onReset } :
  { activeMode: string,
    onSwitch: (event: any) => void,
    setActiveMode: Dispatch<string>,
    toolsName: MutableRefObject<Array<string>>,
    disabled: boolean,
    onReset: () => void,
    setPlayImpl: Dispatch<number>
  }
) => {

  // const [loading, setLoading] = useState(false);
  // const { setPicture } = usePictureContext();

  // const onScreenShot = async() => {
  //   setPlayImpl(0)
  //   // setLoading(true);
  //   // const canvas : HTMLCanvasElement = await html2canvas(document.querySelector(".actived .layerContainer") as HTMLElement);
  //   // canvas.toBlob(async (blob) => {
  //   //   try {
  //   //     const { url } = await picture(blob);
  //   //     setPicture((prevState: Array<string>) => prevState.concat(url));
  //   //   } catch (e) {
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // });
  // }

  const onClickImpl = useCallback((e) => {
    console.log(e);
    const button = e.target.closest('button');
    setActiveMode(button.dataset.mode)
  }, [setActiveMode])

  const keyDownImpl = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Space>
      <ButtonJsx
        dataMode={activeMode === 'Draw' ? "ZoomAndPan" : "Draw"}
        icon={activeMode === 'Draw' ? <ColumnHeightOutlined /> : ""}
        activeMode={activeMode}
        keyDownImpl={keyDownImpl}
        onClickImpl={onClickImpl}
        modeType={['ZoomAndPan', 'Draw', 'WindowLevel']}
      >
        {activeMode === 'Draw' ? "取消测量" : "测量"}
      </ButtonJsx>
      {/*{*/}
      {/*  toolsName.current.includes("Scroll") ?*/}
      {/*    <ButtonJsx*/}
      {/*      dataMode={"Scroll"}*/}
      {/*      activeMode={activeMode}*/}
      {/*      onClickImpl={onClickImpl}*/}
      {/*      modeType={['Scroll']}*/}
      {/*    >*/}
      {/*      视频模式*/}
      {/*    </ButtonJsx> : null*/}
      {/*}*/}
      {/*<Spin size="small" spinning={loading}>*/}
      {/*  <Button disabled={disabled} onClick={onScreenShot}>*/}
      {/*    截图*/}
      {/*  </Button>*/}
      {/*</Spin>*/}
      <Button onClick={onReset} onKeyDown={keyDownImpl}>重置</Button>
    </Space>
  )
}

export default DicomOperate;
