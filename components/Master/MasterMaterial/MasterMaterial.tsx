import React, { useState } from 'react';
import MasterMaterialListing from './MasterMaterialListing';
const MasterMaterial: any = ({
  materialList,
  HandleNameChange,
  HandleSave,
  nameValue,
  error,
}: any) => {
  const [inputName, setInputName] = useState('');
  const [inputGroup, setInputGroup] = useState('');
  const handleInputChange1 = (event: any) => {
    setInputName(event.target.value);
  };
  const handleInputChange2 = (event: any) => {
    setInputGroup(event.target.value);
  };
  const filteredList: any =
    materialList?.length > 0 &&
    materialList !== null &&
    materialList.filter(
      (client: any) =>
        client.material.toLowerCase().includes(inputName.toLowerCase()) &&
        client.material_abbr.toLowerCase().includes(inputGroup.toLowerCase())
    );
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
            Material List
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
            Create New Material
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
          <MasterMaterialListing
            materialList={filteredList}
            handleInputChange1={handleInputChange1}
            handleInputChange2={handleInputChange2}
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
              <label htmlFor="">Material Name</label>
              <span className="text-danger">*</span>
            </div>
            <div className="p-1">
              <input
                type="text"
                className="form-control w-50 border p-1"
                name="material"
                value={nameValue.material}
                onChange={(e) => {
                  HandleNameChange(e);
                }}
                required
              />
            </div>
            <div className=" m-1">
              <label htmlFor="">Material Abbrivation</label>
              <span className="text-danger">*</span>
            </div>
            <div className="p-1">
              <input
                type="text"
                className="form-control w-50 border p-1"
                name="material_abbr"
                value={nameValue.material_abbr}
                onChange={(e) => {
                  HandleNameChange(e);
                }}
                required
              />
            </div>
            <div> {error && <p className="text-danger">{error}</p>}</div>
            <div className="d-flex justify-content-start">
              <button
                type="submit"
                className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
                onClick={HandleSave}
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
export default MasterMaterial;
