import { useEffect } from "react";
import dwv from 'src/dicom/core/dwv'


const DicomJsx = () => {
  useEffect(() => {
    var app = new dwv.App();
    app.init({containerDivId: "dwv"});
    app.loadURLs(["https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm"]);
  }, [])


  return (
    <div id="dwv">
      <div className="layerContainer"></div>
    </div>
  )
}

export default DicomJsx;
