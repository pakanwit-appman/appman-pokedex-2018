import React from 'react'
import { CardBox } from './index'
import './modal.css'



const Modal = ({ data = [], onSearch, onAdd, closeModal }) => (
  <div className='modal' onClick={closeModal}>
    <div className='modal-content'>
      <div>
        <input className='input-search' onChange={(event) => onSearch(event)} />
      </div>
      {
        data.map((item) => (
          <CardBox key={item.id} item={item} onAdd={onAdd} isShowAdd={true} />
        ))
      }
    </div>
  </div>
)

export default Modal