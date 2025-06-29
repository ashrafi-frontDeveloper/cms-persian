import React from 'react'
import Errorbox from '../Error/Errorbox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'

export default function Products() {
  return (
    <>
        <Errorbox message="هیچ محصولی یافت نشد" />

        <AddNewProduct />
    </>
  )
}
