import React from 'react'
import { SFoodItem } from './styles';


const FoodItem = ({ item }) => {
    return (
        <SFoodItem>
            <img className="image" src={item.image} alt={item.name} width="100" height="100" />
            <div className='info'>
                <h3 className='name'>{item.name}</h3>
                <p className='description'>{item.description}</p>
                <p className='price'>$ {item.price}</p>
            </div>
        </SFoodItem>
    )
}

export default FoodItem