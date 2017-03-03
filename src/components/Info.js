import React from 'react'
import { takeFirst } from '../helpers/'

const Info = ({ selectedSound }) => (
  <div className='flex flex-row justify-start items-start dn-sh'>
    <img
      className='pt2 dontScale'
      src={selectedSound.artwork_url || selectedSound.userPic}
      alt='artwork'
    />
    <div className='overflow-auto'>
      <p className='measure-wide pt2 pl2 infoHeight'>
        {takeFirst(
          selectedSound.description.split('\n').filter(s => s.includes('Opis'))
        ).substring(5)}
      </p>
    </div>
  </div>
)

export default Info
