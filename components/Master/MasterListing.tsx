import { useState } from 'react';
import MasterKarigar from './MasterKarigar/MasterKarigar';
import MasterMaterial from './MasterMaterial/MasterMaterial';
import useMasterHooks from '@/hooks/masterHooks';
import styles from '../../styles/master.module.css';

const MasterListing = () => {
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
  } = useMasterHooks();
  const masterlist: any = ['Karigar', 'Kundan Karigar', 'Material'];

  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleButtonClick = (data: any, index: any) => {
    setSelectedButtonIndex(index);
    const processedStr = data.replace(/\s+/g, '').toLowerCase();

    setSelectedComponent(processedStr);
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        {masterlist?.length > 0 &&
          masterlist !== null &&
          masterlist.map((data: any, index: any) => {
            return (
              <div key={index} className="col-lg-2">
                <button
                  className={`alert text-center border btn btn-primary p-1 px-2 ${
                    selectedButtonIndex === index ? styles.activetabs : ''
                  }`}
                  onClick={() => handleButtonClick(data, index)}
                >
                  {data}
                </button>
              </div>
            );
          })}
      </div>

      {selectedComponent === 'karigar' && (
        <MasterKarigar
          karigarData={karigarList}
          inputValue={inputValue}
          HandleInputValue={HandleKunInputValue}
          HandleSubmit={HandleKunSubmit}
        />
      )}
      {selectedComponent === 'kundankarigar' && (
        <MasterKarigar
          karigarData={kunKarigarList}
          inputValue={inputValue}
          HandleInputValue={HandleKunInputValue}
          HandleSubmit={HandleKunSubmit}
        />
      )}
      {selectedComponent === 'material' && (
        <MasterMaterial
          materialList={materialList}
          nameValue={nameValue}
          HandleNameChange={HandleNameChange}
          HandleSave={HandleSave}
        />
      )}
    </div>
  );
};

export default MasterListing;
