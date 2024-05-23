import React from 'react'
import './Orders.css'
import { assets } from '../../assets/assets'

const Orders = () => {
  return (
    <div className='add'>
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='image' hidden/>
        </div>
      </form>
    </div>
  )
}

export default Orders
