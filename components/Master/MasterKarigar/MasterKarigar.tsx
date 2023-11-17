import React, { useState } from 'react';
import MasterKarigarListing from './MasterKarigarListing';
import AddKarigar from './AddKarigar';
import MasterListing from '../MasterListing';

const MasterKarigar: any = ({
  karigarData,
  inputValue,
  HandleInputValue,
  HandleSubmit,
  error,
  value,
  placeholder
}: any) => {
  const [searchField, setSearchField] = useState<any>('');
  const HandleSearchInput: any = (e: any) => {
    setSearchField(e.target.value);
  };
  const filterList: any =
    karigarData?.length > 0 &&
    karigarData !== null &&
    karigarData.filter((value: any) => {
      return value.karigar_name
        ?.toLowerCase()
        .includes(searchField?.toLowerCase());
    });
  console.log(karigarData, 'kun karigar master');
  return (
    <div className='container-lg'>
      <MasterListing 
      value={value}/>
    <div >
      <div
        className="nav nav-pills mb-1 justify-content-center "
        id="pills-tab"
        role="tablist"
      >
        <div className="nav-tabs tabs-container w-50 " role="presentation">
          <button
            className="nav-link active w-100 p-1 border"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Karigar List
          </button>
        </div>
        <div className="nav-tabs tabs-container w-50" role="presentation">
          <button
            className="nav-link  w-100 p-1 border"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Create New Karigar
          </button>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <MasterKarigarListing
            karigarData={filterList}
            HandleSearchInput={HandleSearchInput}
            placeholder={placeholder}
          />
        </div>
        <AddKarigar 
        inputValue={inputValue}
        HandleInputValue={HandleInputValue}
        error={error}
        HandleSubmit={HandleSubmit}
        />
      </div>
    </div>
    </div>
  );
};

export default MasterKarigar;
