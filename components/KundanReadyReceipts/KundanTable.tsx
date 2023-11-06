import React from 'react';
import CurrentDate from '../CurrentDate';
import SearchSelectInputField from '../SearchSelectInputField/SearchSelectInputField';

const KundanTable = ({
  handleRecipietChange,
  recipitData,
  karigarData,
  setRecipitData,
}: any) => {
  return (
    <>
      {' '}
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="thead" scope="col">
              Date
            </th>

            <th className="thead" scope="col">
              Karigar(Supplier) <span className="text-danger">*</span>
            </th>
            <th className="thead" scope="col">
              Remarks
            </th>
            <th className="thead" scope="col">
              Ready Receipt Type
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table_row">
            <td scope="row" className="table_row">
              <CurrentDate />
            </td>
            <td className="table_row">
              <SearchSelectInputField
                karigarData={karigarData}
                recipitData={recipitData}
                setRecipitData={setRecipitData}
              />
            </td>
            <td className="table_row">
              <input
                className="form-control input-sm border border-secondary"
                type="text"
                name="remarks"
                value={recipitData.remarks}
                onChange={handleRecipietChange}
              />
            </td>
            <td className="table_row">
              <input
                className="form-control input-sm border border-secondary"
                type="text"
                readOnly
                value={'Kundan'}
                disabled
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default KundanTable;
