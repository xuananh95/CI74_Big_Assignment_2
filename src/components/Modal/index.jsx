import React, { useEffect, useState } from 'react'
import { SModal } from './styles'
import { FaTimes } from 'react-icons/fa'
import FoodItem from '../FoodItem'
import { RiDeleteBin5Line } from 'react-icons/ri'
import User from '../User'


const Modal = ({ setShowModal, cart, handleIncreaseAmount, handleDecreaseAmount, total, setCart, setAmount }) => {
    const [showUser, setShowUser] = useState(false);
    // useEffect(()=>{
    //     return () => setShowUser(false);
    // })
    const [showOrderBtn, setShowOrderBtn] = useState(true);

    return (
        <SModal>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h1>Your Cart</h1>
                    <span className="icon"
                        style={{ cursor: 'pointer' }} 
                        onClick={() => {
                            setShowModal(false);
                            setShowUser(false)
                            }}>
                                <FaTimes color="red" fontSize={"30px"} />
                    </span>
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
                                    <div className="button-container">
                                        <button className="amount-btn" onClick={() => handleIncreaseAmount(item.id)}>+</button>
                                        <button className="amount-btn" onClick={() => handleDecreaseAmount(item.id)}>-</button>
                                    </div>
                                    <button className="delete-btn"><RiDeleteBin5Line color="white" fontSize="15px" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="total-amount">
                            <h1>Total: </h1>
                            <h1>$ {total}</h1>
                    </div>
                    
                </div>
                <div className="order">
                        <div className="order-btn-group">
                            {
                                showOrderBtn && <button className="order-btn"
                                                    onClick={() => {
                                                        setShowUser(true);
                                                        setShowOrderBtn(false);
                                                }}>
                                                        Order
                                                </button>
                            }
                        </div>
                        
                        {showUser && <User setShowOrderBtn={setShowOrderBtn} setShowUser={setShowUser} cart={cart} setShowModal={setShowModal} setCart={setCart} setAmount={setAmount} />}
                </div>
            </div>
        </SModal>
    )
}

export default Modal