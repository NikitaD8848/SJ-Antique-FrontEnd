import React from 'react';
import MasterKarigar from './MasterKarigar/MasterKarigar';
import useReadyReceiptKarigar from '@/hooks/readyReceiptKarigarHooks';
import MasterMaterial from './MasterMaterial/MasterMaterialMaster';
import useMasterHooks from '@/hooks/master/masterHooks';

const MasterComponent = () => {
  const {
    karigarList,
    kunKarigarList,
    materialList,
    inputValue,
    nameValue,
    HandleInputValue,
    HandleSubmit,
    HandleKunInputValue,
    HandleKunSubmit,
    HandleNameChange,
    HandleSave,
    error
  } = useMasterHooks();

  return (
    <div className="container-lg ">
      {/* <MasterListing/> */}
      <MasterKarigar
        karigarData={kunKarigarList}
        inputValue={inputValue}
        HandleInputValue={HandleKunInputValue}
        HandleSubmit={HandleKunSubmit}
        error={error}
      />
      <MasterMaterial
        materialList={materialList}
        nameValue={nameValue}
        HandleNameChange={HandleNameChange}
        HandleSave={HandleSave}
        error={error}
      />
    </div>
  );
};

export default MasterComponent;
