import React, { useState } from 'react';
import SelectInputDropdown from './SelectInputDropdown';

const KunCreateReceiptForm: any = ({recipitData, karigarData, handleRecipietChange}:any) => {
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  };
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className='row d-flex border'>
      <div className="col-lg-3 col-md-6">
        <label className="form-Form.Label fs-6 text-dark form-label-bold">
          Date
        </label>
        <div>
          <input
            type="text"
            id="date"
            name="date"
            className="form-control input-sm"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            disabled
            value={currentDate}
          />
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <label className="form-Form.Label fs-6 text-dark form-label-bold">
          Karigar(supplier)
        </label>
        <div className='dropdown-input-container'>
          <SelectInputDropdown
            karigarData={karigarData}
            handleRecipietChange={handleRecipietChange}
          />
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <label className="form-Form.Label fs-6 text-dark form-label-bold">
          Remarks
        </label>
        <div>
          <input
            className="form-control input-sm"
            type="text"
            name="remarks"
            value={recipitData.remarks}
            onChange={handleRecipietChange}
          />
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <label className="form-Form.Label fs-6 text-dark form-label-bold">
          Ready Receit Type
        </label>
        <div>
          <input
            className="form-control input-sm"
            type="text"
            readOnly
            value={'Kundan'}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default KunCreateReceiptForm;
