import React, { useState, useEffect } from 'react';
import { KundanListingDataset } from '../../datasets/Ready-Receipts-kundan/KundanListing';
import getPurchasreceiptListApi from '@/services/api/get-purchase-recipts-list-api';

const KundanListing = ({ loginAcessToken, Fields }: any) => {
  const [kundanListing, setKundanListing] = useState<any>([]);
  console.log(loginAcessToken, 'loginAcessToken');
  console.log(Fields, 'loginAcessToken');
  useEffect(() => {
    const getPurchaseList = async () => {
      const listData = await getPurchasreceiptListApi(loginAcessToken, Fields);
      setKundanListing(listData);
    };

    getPurchaseList();
  }, []);
  console.log(kundanListing, 'kundanListing');

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
    </div>
  );
};

export default KundanListing;
