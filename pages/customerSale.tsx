import React from 'react'
import styles from '../styles/readyReceipts.module.css'

const customerSale = () => {
  return (
    <div className='mx-5'>
    <div className='container-fluid '>
            <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <div className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Customer-Sale (Customer)</button>
                </div>
                <div className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create new customer sale</button>
                </div>
            </div><div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Customer-Sale (Customer)</div>
                <div className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab">
                    Create new customer sale
                    <div>
                        <div>
                            <div className={`${styles.button}`}>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="">
                            <table className="container-fluid table">
                                <thead>
                                    <tr>
                                        <th scope="col">Transaction Date</th>
                                        <th scope="col">Issue no</th>
                                        <th scope="col">Cs category</th>
                                        <th scope="col">Kun category</th>
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
        </div>
  )
}

export default customerSale