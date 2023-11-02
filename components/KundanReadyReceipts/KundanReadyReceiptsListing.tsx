import React, { useState, useEffect } from 'react';

const KundanListing = ({ kundanListing }: any) => {
  return (
    
      <div className=" table-responsive py-2">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="thead" scope="col">
                Receipt No.
              </th>
              <th className="thead" scope="col">
                Transaction Date
              </th>
              <th className="thead" scope="col">
                Kundan Karigar
              </th>
            </tr>
          </thead>
          <tbody>
            {kundanListing?.length > 0 &&
              kundanListing?.map((item: any) => (
                <tr>
                  <td className="table_row">{item.name}</td>
                  <td className="table_row">{item.posting_date}</td>
                  <td className="table_row">{item.custom_karigar}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default KundanListing;
