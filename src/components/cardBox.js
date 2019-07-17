import React from 'react'
import './cardBox.css'
import calc from '../utilities'

const cardBox = ({ item, onAdd, isShowAdd = false, onRemove, isShowRemove = false }) => {
  const a = calc(item)
  return <div className='card-box'>
    <div className='card-content'>
      <img src={item.imageUrl} width='100' height='150' />
      <div className='card-wording'>
        <div>{item.name}</div>
        <div>
          <div>HP</div>
          <div className="energy">
            <div className="percent" style={{ width: `${a.hp}%`, backgroundColor: '#f0932b' }}>{`${a.hp}%`}</div>
          </div>
        </div>
        <div>
          <div>STR</div>
          <div className="energy">
            <div className="percent" style={{ width: `${a.str}%`, backgroundColor: '#f0932b' }}>{`${a.str}%`}</div>
          </div>
        </div>
        <div>
          <div>WEAK</div>
          <div className="energy">
            <div className="percent" style={{ width: `${a.weak}%`, backgroundColor: '#f0932b' }}>{`${a.weak}%`}</div>
          </div>
        </div>
      </div>
      {
        isShowAdd && <button onClick={() => onAdd(item)}>Add</button>
      }
      {
        isShowRemove && <button onClick={() => onRemove(item)}>X</button>
      }
    </div>
  </div>
}
export default cardBox