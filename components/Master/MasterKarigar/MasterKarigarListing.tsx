import React, { useState } from 'react'

const MasterKarigarListing = ({karigarData, HandleSearchInput}:any) => {
  return (
    <div >
        <div className='mx-4'>
            <input 
            type="text"
            name='name'
            id='name'
            aria-describedby="emailHelp"
            className='form-control w-25'
            placeholder='Enter Karigar Name'
            onChange={HandleSearchInput}
            />
        </div>
        <div className='table-responsive border p-3 mt-2'>
        <table className='table table-hover table-striped w-100 '>
            <thead >
                <tr className='table_row' >
                    <th scope='col' className='thead'>Karigar Name</th>
                </tr>
            </thead>
            <tbody>
                {karigarData?.length > 0 && 
                karigarData !== null &&
                karigarData.map((item:any, i:any)=>(
                    <tr key={i} className=''>
                    <td className='table-body-row'>{item.karigar_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>

    </div>
  )
}

export default MasterKarigarListing