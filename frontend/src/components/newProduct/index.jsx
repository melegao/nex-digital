import React from 'react'
import { useState } from 'react'
import ModalNewProduct from '../modalNewProduct'
import { NewProductContainer } from './styles'

function NewProduct() {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () =>{
        setModalOpen(!modalOpen)
    }


  return (
    <>
    <NewProductContainer onClick={() => handleModalOpen()}>
        Cadastrar
    </NewProductContainer>
    {modalOpen && <ModalNewProduct modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
    </>
  )
}

export default NewProduct