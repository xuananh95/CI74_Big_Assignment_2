import React from 'react'
import { SHeader } from './styles'
import { BsFillCartFill } from 'react-icons/bs'


const Header = ({ amount, setShowModal }) => {
    return (
        <SHeader>
            <h1>
                Meal
            </h1>
            <div className="cart" onClick={() => setShowModal(true)}>
                <BsFillCartFill fontSize={"30px"} /> Your Cart
                <span className='amount'>{amount}</span>
            </div>
        </SHeader>
    )
}

export default Header