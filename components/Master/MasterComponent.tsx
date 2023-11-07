import React from 'react'
import MasterKarigar from './MasterKarigar/MasterKarigar'
import useReadyReceiptKarigar from '@/hooks/readyReceiptKarigarHooks'
import MasterMaterial from './MasterMaterial/MasterMaterial'

const MasterComponent = () => {
    const {karigarData} = useReadyReceiptKarigar()
  return (
   
      <div className="container-lg ">
        {/* <MasterKarigar 
        karigarData={karigarData}/> */}
        < MasterMaterial/>
      </div>

  )
}

export default MasterComponent