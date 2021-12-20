import Dicom from "./dcm";
import 'index.less';
import test from 'files/2021120216180372Kija.mp4'

function App() {
  return (
    <div className='app'>
      <Dicom dicomLists={[
        { url: test, devicePixelRatio: 0.32770017 },
        // { url: one, devicePixelRatio: 1 }
      ]}/>
    </div>
  );
}

export default App;
