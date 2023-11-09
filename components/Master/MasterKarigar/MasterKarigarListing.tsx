import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MasterKarigarListing = ({ karigarData, HandleSearchInput }: any) => {
  const router = useRouter()
  const HandleDetails =(name:any)=>{
    router.push({
      pathname:'/master/KarigarDetailsPage',
      query: name
    })
  }
  return (
    <div>
      <div className="mx-4">
        <input
          type="text"
          name="name"
          id="name"
          aria-describedby="emailHelp"
          className="form-control form-control-color w-25"
          aria-label="Disabled input example"
          placeholder="Enter Karigar Name"
          onChange={HandleSearchInput}
        />
      </div>
      <div className="table-responsive border p-3 mt-2">
        <table className="table table-hover table-striped w-100 ">
          <thead>
            <tr className="table_row">
              <th scope="col" className="thead text-start">
                Karigar Name
              </th>
            </tr>
          </thead>
          <tbody>
            {karigarData?.length > 0 &&
              karigarData !== null &&
              karigarData.map((item: any, i: any) => (
                <tr key={i} className="">
                  <td className="table-body-row cursor-pointer" onClick={()=>HandleDetails(item.karigar_name)}>
                    {item.karigar_name} 
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasterKarigarListing;
