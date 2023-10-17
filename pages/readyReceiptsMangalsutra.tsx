import React from 'react'
import styles from '../styles/readyReceipts.module.css'

const readyReceiptsMangalsutra = () => {
    //const tableData:any =[NetWt,FewWt,BBWt,KunWt,CsWt,GrossWt]
  return (
    <div className='mx-5'>
    <div className='container-fluid '>
            <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <div className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Ready receipts (Mangalsutra karigar)</button>
                </div>
                <div className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create new ready receipt</button>
                </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Ready receipts (Mangalsutra karigar)</div>
                <div className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab">
                    Create new ready receipt
                    <div>
                        <div className="container-fluid">
                            <div className={`${styles.button}`}>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className=" table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Transaction Date</th>
                                        <th scope="col">Receipt no</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row"><input type="date" /></td>
                                        <td><input type="number" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="container-fluid">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. no</th>
                                    <th scope="col">Net Wt</th>
                                    <th scope="col">Few Wt</th>
                                    <th scope="col">BB Wt</th>
                                    <th scope="col">Kun Wt</th>
                                    <th scope="col">CS Wt</th>
                                    <th scope="col">Gross Wt</th>
                                    <th scope="col">Kun Pc</th>
                                    </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default readyReceiptsMangalsutra