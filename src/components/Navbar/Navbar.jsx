import React, { useState } from 'react';
import "./navbar.scss";
import AddCarModal from "../AddCarModal/AddCarModal";
import Button from "../../UI/Button/Button"
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  return (
    <div className='navBar'>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <p className='navBar__title'>Car Dealership</p>
      </Link>
      {isOpenModal && <AddCarModal openModal={openModal} />}
      <Button className="add-btn" onClick={openModal}>Add Car</Button>
    </div>
  )
}

export default Navbar