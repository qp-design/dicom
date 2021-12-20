import { useEffect } from "react";
// @ts-ignore
import dwv from "dwv-us";
import "../../index.less";

dwv.gui.getElement = dwv.gui.base.getElement;
dwv.image.decoderScripts = {
  jpeg2000: `/ass/dwv/decoders/pdfjs/decode-jpeg2000.js`,
  "jpeg-lossless": `/ass/dwv/decoders/rii-mango/decode-jpegloss.js`,
  "jpeg-baseline": `/ass/dwv/decoders/pdfjs/decode-jpegbaseline.js`,
  rle: `/ass/dwv/decoders/dwv/decode-rle.js`,
};

const DicomItem = ({ url }: { url: string }) => {
  useEffect(() => {
    // create app
    var app = new dwv.App();
    // initialise app
    app.init({
      containerDivId: url,
    });
    // store
    app.loadURLs([url]);
  }, [url]);

  return (
    <div id={url} className="item">
      <div className="layerContainer"></div>
    </div>
  );
};

export default DicomItem;
