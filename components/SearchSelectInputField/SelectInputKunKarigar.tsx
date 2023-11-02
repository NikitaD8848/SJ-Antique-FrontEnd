import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/readyReceipts.module.css';

const SelectInputKunKarigar = ({
  kundanKarigarData,
  tableData,
  setTableData,
}: any) => {
  const inputRef = useRef<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState();
  const [noRecords, setNoRecordsFound] = useState(false);
  const [filterDropdownList, setFilterDropdownList] = useState([]);
  //const [masterData, setMasterData] = useState<any>();

  console.log('check karigar', kundanKarigarData);
  console.log(typeof kundanKarigarData, 'type ');

  const HandleSelectInputField = (e: any) => {
    console.log('input field', e.target.value);
    setShowDropdown(true);
    setSelectedDropdownValue(e.target.value);
    const query = e.target.value;

    const UpdatedFilterList: any = kundanKarigarData?.filter((item: any) => {
      return (
        item.karigar_name?.toLowerCase()?.indexOf(query?.toLowerCase()) !== -1
      );
    });
    setFilterDropdownList(UpdatedFilterList);
    setNoRecordsFound(true);
    setTableData({ ...tableData, custom_kun_karigar: selectedDropdownValue });
  };
  console.log(tableData,"tabledata kun karigar")

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Escape') {
      setShowDropdown(true);
    }
    if (e.key === 'Escape') {
      setShowDropdown(!showDropdown);
    }
  };

  const handleSelectedOption = (data: any) => {
    console.log('dataa', data);
    setSelectedDropdownValue(data);
    setShowDropdown(false);
    setTableData({ ...tableData, custom_kun_karigar: data });
  };
  console.log(tableData,"tabledata kun karigar")
  console.log(selectedDropdownValue, 'selected value');
  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      // Check if the input element itself was clicked
      if (
        e?.target !== inputRef?.current &&
        !inputRef?.current?.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        name="custom_karigar"
        className={` ${styles.table_select}`}
        id="exampleInputEmail1"
        placeholder="Karigar Name"
        onChange={HandleSelectInputField}
        onClick={handleShowDropdown}
        value={selectedDropdownValue}
        defaultValue={kundanKarigarData?.karigar_name}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        ref={inputRef}
      />
      {showDropdown && (
        <ul className=" dropdown-ul-list border">
          {noRecords === false && filterDropdownList?.length === 0 ? (
            <>
              {kundanKarigarData?.map((name: any, i: any) => (
                <li
                  key={i}
                  onClick={() => handleSelectedOption(name.karigar_name)}
                  className="dropdown-list"
                >
                  {name.karigar_name}
                </li>
              ))}
            </>
          ) : (
            <>
              {filterDropdownList.map((name: any, i: any) => (
                <li
                  key={i}
                  onClick={() => handleSelectedOption(name.karigar_name)}
                  className="dropdown-list"
                >
                  {name.karigar_name}
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
};
export default SelectInputKunKarigar;
