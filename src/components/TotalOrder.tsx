import { Dispatch, useMemo, useState } from 'react'
import { ItemType, TipType } from '../types'
import { formatCurrency } from '../helpers'
import { ToastContainer, toast } from 'react-toastify'

import '../styles/ListStyle.css'
import 'react-toastify/dist/ReactToastify.css';
import { ActionsMenu } from '../recucer/MenuRecuder'


type TotalOrderProops = {
    order: ItemType[]
    dispatch: Dispatch<ActionsMenu>
}

const tipOptions: TipType[] = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

export const TotalOrder = ({ order, dispatch }: TotalOrderProops) => {

    const subTotalPaid = useMemo(() => {
        return order.reduce((total, item) => total + (item.price * item.amount), 0);
    }, [order])

    const[tip, setTip] = useState(0);

    const totalPay = useMemo(()=>{
        return subTotalPaid + (subTotalPaid * tip) ;
    },[order, tip])
    
    const notify = ()=> {
        toast.success('Order completed')
    }

    return (
        <div className="total-order">
            <p>Subtotal to be paid : {formatCurrency(subTotalPaid)}</p>

            <div className='tip-list'>
                {
                    tipOptions.map((item) => (
                        <div className='tip-opt' key={item.id}>
                            <label htmlFor={item.id} className='tip-label'>{item.label}</label>
                            <input
                                className='tip-input'
                                type="radio"
                                value={item.value}
                                id={item.id}
                                name='tip'

                                onChange={()=>{setTip(item.value)}}
                            />
                        </div>
                    ))
                }
            </div>

            <p>Tip : {formatCurrency(subTotalPaid * tip)}</p>
            <p>Total to be paid : {formatCurrency(totalPay)}</p>

            <button 
                className='total_btn'
                
                onClick={()=>{
                    notify()

                    setTimeout(() => {
                        dispatch({type:'reset-app'})
                    }, 5500);
                }}
            >
                Save Order
            </button>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    )
}
