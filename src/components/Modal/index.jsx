import React from 'react'
import { SModal } from './styles'
import { FaTimes } from 'react-icons/fa'
import FoodItem from '../FoodItem'
import { AiTwotoneDelete } from 'react-icons/ai'


const Modal = ({ setShowModal, cart }) => {
    return (
        <SModal>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h1>Your Cart</h1>
                    <span className="icon" style={{ cursor: 'pointer' }} onClick={() => setShowModal(false)}><FaTimes color="red" fontSize={"30px"} /></span>
                </div>
                <div className="modal-content">
                    <div className="content-header">
                        <h1 className='item-header' style={{ fontSize: 20 }}>Item</h1>
                        <h1 className='amount-header' style={{ fontSize: 20 }}>Amount</h1>
                    </div>
                    <div className="content-item">
                        {cart.length > 0 && cart.map((item) => (
                            <div className="item-wrap">
                                <div className="item-left">
                                    <FoodItem key={item.id} item={item} />
                                </div>
                                <div className="item-right">
                                    <span className="amount-text">{item.amount}</span>
                                    {/* <div className="button-container">
                                        <button>+</button>
                                        <button>-</button>
                                    </div>
                                    <button><AiTwotoneDelete /></button> */}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </SModal>
    )
}

export default Modal