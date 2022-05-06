import React, {useState} from 'react';
import "./header.scss";
import AddProductModal from "../AddProductModal/AddProductModal";

const Header = () => {
 
    const [isOpenModal, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
  return (
    <div className='header'>
     <span className='products-title'>List of Products</span>
     { isOpenModal && <AddProductModal setIsOpen={setIsOpen}/>}
     <button onClick={openModal} className='add-button'>Add product</button>
    </div>
  )
}

export default Header