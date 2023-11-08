import React, { useState } from 'react';
import MasterKarigarListing from './MasterKarigarListing';

const MasterKarigar: any = ({
  karigarData,
  inputValue,
  HandleInputValue,
  HandleSubmit,
  error,
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
    <div>
      <div
        className="nav nav-pills mb-2 justify-content-center "
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
          />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="container">
            <div className=" m-1">
              <label>Karigar Name</label>
              <span className="text-danger">*</span>
            </div>
            <div className="p-1">
              <input
                type="text"
                className="form-control w-50 border p-1"
                value={inputValue}
                onChange={(e) => {
                  HandleInputValue(e);
                }}
                required
              />
            </div>
            <div>{error && <p className="text-danger">{error}</p>}
            </div>
            <div className="d-flex justify-content-start">
              <button
                type="submit"
                className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
                onClick={HandleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterKarigar;
