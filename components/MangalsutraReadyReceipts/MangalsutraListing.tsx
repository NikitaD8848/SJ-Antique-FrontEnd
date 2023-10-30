import React, { useState } from 'react';
import {KundanListingDataset} from '../../datasets/Ready-Receipts-kundan/KundanListing'

const MangalsutraListing = () => {
  const [mangalsutraListing, setMangalsutraListing] = useState(KundanListingDataset.data)

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
                Karigar
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
          {mangalsutraListing.length > 0 &&
              mangalsutraListing.map((item:any)=>(
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
    </div>
  );
};

export default MangalsutraListing;
