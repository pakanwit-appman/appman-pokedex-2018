import React from 'react'
import './content.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { CardBox } from './index'

const Content = ({ myPokedex = [], isShowRemove, onRemove }) => (
  <div className='content'>
    {
      myPokedex.map((item) => (
        <div key={item.id} className='content-row'>
          <CardBox key={item.id} item={item} isShowAdd={false} isShowRemove={isShowRemove} onRemove={onRemove} />
        </div>
      ))
    }
  </div>
)
export default Content