import React from 'react';

import { Nav, GiftBody, Footer } from '../../Layout';

export default function Gift() {
  return (
    <div className='Gift'>
      <Nav style={{backgroundColor: 'rgb(0,191,255)', position: 'relative'}} />
      <GiftBody />
      <Footer />
    </div>
  )
}
