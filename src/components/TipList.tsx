import { Dispatch } from 'react'
import { formatCurrency } from '../helpers'
import '../styles/ListStyle.css'
import { ItemType } from '../types'
import { ActionsMenu } from '../recucer/MenuRecuder'

type TipListProops = {
  order: ItemType[]
  dispatch: Dispatch<ActionsMenu>
}

export const TipList = ({ order, dispatch }: TipListProops) => {

  return (
    <div className="list">
      {
        order.map((item) => (

          <div key={item.id} className='list-container'>
            <div className="list_info">
              <p className='order_name'>{item.name} - {formatCurrency(item.price)}</p>
              <p className='order_amount'>Amount : {item.amount} - {formatCurrency(item.amount * item.price)}</p>
            </div>
            <button
              className='order_delete'

              onClick={() => {
                dispatch({ type: 'delete-item', payload: { id: item.id } })
              }}
            >
              x
            </button>
          </div>
        ))
      }
    </div>
  )
}
