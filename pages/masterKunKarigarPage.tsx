import MasterKarigar from '@/components/Master/MasterKarigar/MasterKarigar';
import useMasterHooks from '@/hooks/master/masterHooks';
import React from 'react'

const masterKunKarigarPage = () => {
        const {
          karigarList,
          inputValue,
          HandleInputValue,
          HandleSubmit,
          error,
          setError,
        }:any = useMasterHooks();
  return (
    <MasterKarigar
          karigarData={karigarList}
          inputValue={inputValue}
          HandleInputValue={HandleInputValue}
          HandleSubmit={HandleSubmit}
          error={error}
          setError={setError}
        />
  )
}

export default masterKunKarigarPage