import DicomJsx from "../index";


const ListJsx = ({ dicomLists } : { dicomLists: Array<string> }) => {

  return (
    <>
      {
        dicomLists.map(item => <DicomJsx url={item}/>)
      }

    </>

  )
}

export default ListJsx;
