import ListJsx from "./components/list";


const DicomJsx = ({url}) => {

  const dicomLists = [
    'https://sit-community-public.oss-cn-shanghai.aliyuncs.com/goodsimg/1637306469393.',
    'https://sit-community-public.oss-cn-shanghai.aliyuncs.com/goodsimg/1637306481841.',
    'https://sit-community-public.oss-cn-shanghai.aliyuncs.com/goodsimg/1637306489393.',
    'https://sit-community-public.oss-cn-shanghai.aliyuncs.com/goodsimg/1637306498325.',
    'https://sit-community-public.oss-cn-shanghai.aliyuncs.com/goodsimg/1637306508596.'
  ]
  return (
    <>
      <ListJsx dicomLists={dicomLists}/>
    </>
  )
}

export default DicomJsx;
