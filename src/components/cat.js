import React from 'react';
import './cat.css'
import kitty from '../img/kitty.svg';
 const Cat = () => {

    return <div className='cat'>
        <img src={kitty} alt='kitty'></img>
    </div>

}
export default Cat;