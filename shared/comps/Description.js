import React from 'react'

const Description = ({ selectedSound }) => (
  <div className='flex flex-row justify-start items-start dn-sh mt1 bg-near-white'>
    <img
      className='br2'
      style={{maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}
      src={selectedSound.artwork_url || selectedSound.userPic}
      alt='artwork'
    />
    <div className='overflow-auto pl2'>
      <p className='infoHeight lh-title f5'>
        {selectedSound.info.opis}
      </p>
    </div>
  </div>
)

export default Description
