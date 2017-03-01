import React from 'react'
import { takeFirst } from '../helpers/'

const Info = ({selectedSound}) => <div className='flex flex-row justify-start items-start pb2 dn-sh'>
  <img
    className='pt2'
    src={selectedSound.artwork_url || selectedSound.userPic}
    alt='artwork'
  />
  <p className='measure pt2 pl2'>
    { takeFirst(
          selectedSound.description
            .split('\n')
            .filter(s => s.includes('Opis'))
      ).substring(5) }
  </p>
</div>

export default Info