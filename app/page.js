
"use client"

import React from 'react';
import Carousel from './carousel/Page';
import ProductList from './products/Page';
import Template from './template/Page';
import ImageBoard from './imageBoard/Page';

const page = () => {
  return (
    <>
      <Carousel />
      <ProductList />
      <Template />
      <ImageBoard />
    </>
  )
}

export default page