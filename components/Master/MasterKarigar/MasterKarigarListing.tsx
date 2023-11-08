import React from 'react';

const MasterKarigarListing = ({ masterData }: any) => {
  // console.log(masterData,"master kariagr data")
  return (
    <div>
      <div className="mx-4">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Enter Karigar Name"
        />
      </div>
      <div className="table-responsive border p-3 mt-2">
        <table className="table table-hover table-striped w-100 ">
          <thead>
            <tr className="table_row">
              <th className="thead text-start">Karigar Name</th>
            </tr>
          </thead>
          <tbody>
            {masterData?.length > 0 &&
              masterData !== null &&
              masterData?.map((item: any, i: any) => (
                <tr key={i} className="">
                  <td className="table-body-row">{item.karigar_name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasterKarigarListing;
