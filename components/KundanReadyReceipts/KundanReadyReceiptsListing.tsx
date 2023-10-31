import React, { useState } from 'react';
import {KundanListingDataset} from '../../datasets/Ready-Receipts-kundan/KundanListing'

const KundanListing = () => {
  const [kundanListing, setKundanListing] = useState(KundanListingDataset.data)

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
              <th className="thead" scope="col">
                A
              </th>
              <th className="thead" scope="col">
                B
              </th>
              <th className="thead" scope="col">
                C
              </th>
            </tr>
          </thead>
          <tbody>
          {kundanListing.length > 0 &&
            kundanListing.map((item:any)=>(
            <tr>
                <td className='table_row' >{item.Receipt_no}</td>
                <td className='table_row' >{item.transaction_date}</td>
                <td className='table_row' >{item.karigar}</td>
                <td className='table_row' >{item.A}</td>
                <td className='table_row' >{item.B}</td>
                <td className='table_row' >{item.C}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default KundanListing;
