import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { SFoodCart } from './styles';
import FoodItem from '../FoodItem';

const FoodCart = ({ item, handleAddToCart }) => {
    const [amount, setAmount] = useState(0);
    const handleAdd = () => {
        if (!amount) {
            toast.error("Please enter amount");
            return;
        }
        const newCart = { ...item, amount };
        handleAddToCart(newCart);
    }


    return (
        <SFoodCart>
            <div className="item-left">
                <FoodItem item={item} />
            </div>

            <div className='item-right'>
                <div className="amount">
                    <span className="amount-text">Amount </span>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="button-add" onClick={handleAdd}>+ Add</button>
            </div>
        </SFoodCart>
    )
}

export default FoodCart