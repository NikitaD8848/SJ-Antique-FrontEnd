import React, { useState } from 'react';

const KundanListing = () => {
    //const [kundanListing, setKundanListing] = useState(KundanListingDataset)

  return (
    <div className="container lg">
        <div className='container-lg table-responsive'>
            <table className='table table-striped table-hover table-bordered'>
                <thead>
                    <tr>
                        <th className='thead' scope='col'>Receipt No.</th>
                        <th className='thead' scope='col'>Transaction Date</th>
                        <th className='thead' scope='col'>Karigar</th>
                        <th className='thead' scope='col'>A</th>
                        <th className='thead' scope='col'>B</th>
                        <th className='thead' scope='col'>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='table_row' ></td>
                        <td className='table_row' >12</td>
                        <td className='table_row' >Karigar1</td>
                        <td className='table_row' >sdf</td>
                        <td className='table_row' >asdf</td>
                        <td className='table_row' >asdf</td>
                    </tr>
                    <tr>
                        <td className='table_row' >12</td>
                        <td className='table_row' >12</td>
                        <td className='table_row' >Karigar1</td>
                        <td className='table_row' >sdf</td>
                        <td className='table_row' >asdf</td>
                        <td className='table_row' >asdf</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </div>
  )
}

export default KundanListing