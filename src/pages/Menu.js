import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../component/MenuItem'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='MenuTitle'> OUR MENU</h1>
        <div className='menuList'>
            {MenuList.map((Item ,key)=>{
            return(
           <MenuItem
           key={key}
           imag={Item.image}
           name={Item.nam}
           price={Item.price}   
           />


        );
        })}
        </div>
      
    </div>
  )
}

export default Menu
