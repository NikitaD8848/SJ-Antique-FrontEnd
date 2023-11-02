import React, { useState, useEffect } from 'react';

const KundanListing = ({ kundanListing }: any) => {
  return (
    <div className="container lg">
      <div className="container-lg table-responsive">
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
              <th className="thead" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {kundanListing?.length > 0 &&
              kundanListing?.map((item: any, i: any) => (
                <tr key={i}>
                  <td className="table_row">{item.name}</td>
                  <td className="table_row">{item.posting_date}</td>
                  <td className="table_row">{item.custom_karigar}</td>
                  <td className="table_row">{item.custom_karigar}</td>
                  <td className="table_row">
                    {item.docstatus === 0
                      ? 'Draft'
                      : item.docstatus === 1
                      ? 'Submitted'
                      : item.docstatus === 2
                      ? 'Cancelled'
                      : ''}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KundanListing;
