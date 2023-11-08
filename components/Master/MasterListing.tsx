import { useState } from 'react';
import MasterKarigar from './MasterKarigar/MasterKarigar';
import MasterMaterial from './MasterMaterial/MasterMaterial';
import useMasterHooks from '@/hooks/masterHooks';
import styles from '../../styles/header.module.css';

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
    error
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
      <div className="row d-flex justify-content-center mb-2">
        {masterlist?.length > 0 &&
          masterlist !== null &&
          masterlist.map((data: any, index: any) => {
            return (
              <div key={index} className="col-lg-2 text-center">
                <button
                  className={`${styles.button} ${
                    selectedButtonIndex === index ? "activeColor" : ''
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
          HandleInputValue={HandleInputValue}
          HandleSubmit={HandleSubmit}
          error={error}
        />
      )}
      {selectedComponent === 'kundankarigar' && (
        <MasterKarigar
          karigarData={kunKarigarList}
          inputValue={inputValue}
          HandleInputValue={HandleKunInputValue}
          HandleSubmit={HandleKunSubmit}
          error={error}
        />
      )}
      {selectedComponent === 'material' && (
        <MasterMaterial
          materialList={materialList}
          nameValue={nameValue}
          HandleNameChange={HandleNameChange}
          HandleSave={HandleSave}
          error={error}
        />
      )}
    </div>
  );
};

export default MasterListing;
