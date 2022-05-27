import React, { useState } from 'react'
import { SUser } from './styles'
import Input from '../Input'
import { toast } from 'react-toastify'
const User = ({setShowOrderBtn, setShowUser, cart, setShowModal, setCart, setAmount}) => {
  const [username, setUsername] = useState('');
  const [street, setStreet] = useState('');
  const [postal, setPostal] = useState('');
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(postal) || postal.length !== 5){
      setPostal('');
      toast.error('Invalid postal code');
      return;
    }


    const user = {
      username,
      street,
      postal,
      city,
    }

    const order = {...user, ...cart};
    setCart([]);
    setAmount(0);
    console.log(order);
    toast.success('Order success')
    setShowModal(false);
  }


  
  console.log(`${username} ${street} ${postal} ${city}`)
  return (
    <SUser onSubmit={handleSubmit}>
        <Input label="Your name" val={username} setVal={setUsername} />
        <Input label="Street" val={street} setVal={setStreet}  />
        <Input label="Postal Code" val={postal} setVal={setPostal}  />
        <Input label="City" val={city} setVal={setCity} />
        <div className="btn-group">
          <button onClick={() => {setShowOrderBtn(true); setShowUser(false)}}>CANCEL</button>
          <button type="submit">CONFIRM</button>
        </div>
    </SUser>
  )
}

export default User