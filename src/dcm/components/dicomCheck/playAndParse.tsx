import { PauseCircleOutlined, PlayCircleOutlined, RedoOutlined } from "@ant-design/icons";
import { Slider } from "antd";
import { memo } from 'react';

const PlayAndParse = (
  {numberOfFrames, onResetPlay, isPlay, onPlay, currentFrame, onChangeFrame}:
    { numberOfFrames: number, onResetPlay: () => void,
      isPlay: number,
      onPlay: (e: number) => void,
      currentFrame: number,
      onChangeFrame: (e: number) => void
    }) => {

  return (
    <>
      {numberOfFrames > 1 ? (
        <div className={'mediaControl'}>
          <div className={'buttonOperate'}>
            {currentFrame === numberOfFrames ? (
              <RedoOutlined
                onClick={onResetPlay}
                style={{ fontSize: 30, color: "#007FFE" }}
              />
            ) : (
              <>
                {isPlay === 0 ? (
                  <PlayCircleOutlined
                    onClick={onPlay.bind(null, 0)}
                    style={{ fontSize: 30, color: "#007FFE" }}
                  />
                ) : (
                  <PauseCircleOutlined
                    onClick={onPlay.bind(null, 1)}
                    style={{ fontSize: 30, color: "#007FFE" }}
                  />
                )}
              </>
            )}
          </div>
          <div className={'scrollProcess'}>
            <Slider step={1} onChange={onChangeFrame} max={numberOfFrames} value={currentFrame} />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default memo(PlayAndParse);
