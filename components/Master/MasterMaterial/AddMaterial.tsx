import React from 'react'

const AddMaterial = ({
    nameValue,
    HandleNameChange,
    HandleSave,
    error
}:any) => {
  return (
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
  )
}

export default AddMaterial