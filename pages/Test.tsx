import React, { useRef, useState } from 'react'

const Test:any = ({karigarData,handleRecipietChange}:any) => {
    const [showDropdown, setShowDropdown] = useState<any>(false);
    const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>()
    const [noRecords, setNoRecordsFound] = useState<any>(false);
    const [filterDropdownList, setFilterDropdownList] = useState<any>([]);
    const inputRef = useRef<any>(null);
 console.log(karigarData, "karigarData")
  const HandleInputField = (e: any) => {
    console.log('input value', e.target.value);
    setShowDropdown(true);
    setSelectedDropdownValue(e.target.value);
    const query = e.target.value;
 const UpdatedFilterList: any = karigarData?.filter((item: any) => {
      return item?.toLowerCase()?.indexOf(query?.toLowerCase()) !== -1;
    });

    const handleShowDropdown =()=> {
        setShowDropdown(!showDropdown)
    }
    const handleKeyDown = (e: any) => {
        if (e.key === 'Tab') {
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
      };

  return (
    
      <div >
        <input
          type="text"
          className="from-cntrol input-sm"
          id="exampleInputEmail1"
          placeholder="Karigar Name"
          onChange={HandleInputField}
          onClick={handleShowDropdown}
          defaultValue={karigarData[0]?.karigar_name}
          value={selectedDropdownValue}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          readOnly
          ref={inputRef}
        />
        {showDropdown && (
          <ul
            className=" dropdown-ul-list border"
            aria-label="Default select example"
          >
            {noRecords === false && filterDropdownList?.length === 0 ? (
              <>
                {karigarData.map((name: any, index: any) => (
                  <li
                    key={index}
                    onClick={() => handleSelectedOption(name.karigar_name)}
                    className="dropdown-list"
                  >
                    {name.karigar_name}
                  </li>
                ))}
              </>
            ) : (
              <>
                {filterDropdownList.map((name: any, index: any) => (
                  <li
                    key={index}
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
        <p>Hiii</p>
      </div>
    
  )
}
}
export default Test;