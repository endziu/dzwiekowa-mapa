import React from 'react'
import { takeFirst } from '../helpers/'

const Description = ({ selectedSound }) => (
  <div className='flex flex-row justify-start items-start dn-sh mt1 bg-near-white'>
    <img
      style={{maxWidth: '80px', maxHeight: '80px',minWidth: '80px', minHeight: '80px'}}
      src={selectedSound.artwork_url || selectedSound.userPic}
      alt='artwork'
    />
    <div className='overflow-auto pl2'>
      <p className='infoHeight'>
        {takeFirst(
          selectedSound.description.split('\n').filter(s => s.includes('Opis'))
        ).substring(5)}
      </p>
    </div>
  </div>
)

export default Description
