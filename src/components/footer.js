import React from 'react'
import './footer.css'

export const Footer = ({ onClick }) => (
  <div className='footer'>
    <button className='addButton' onClick={onClick}>Add</button>
  </div>
)
export default Footer