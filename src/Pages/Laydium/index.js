import React from 'react';

import { Nav, LaydiumBody, Footer } from '../../Layout';

export default function Laydium() {
  return (
    <div className='Laydium'>
        <Nav style={{backgroundColor: 'rgb(0,191,255)', position: 'relative'}} />
        <LaydiumBody />
        <Footer style={{backgroundColor: 'rgb(0,191,255)'}}/>
    </div>
  )
}
