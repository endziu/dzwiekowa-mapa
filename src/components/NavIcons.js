import React from 'react'
import { IconHome, IconAdd, IconLink } from './Icons.js'

const NavIcons = ({id}) => <div className='icons flex flex-row justify-start bb b--black-40 pt2'>
  <div className='dim w2 h2 pa2 bg-white black pointer'>
    <IconHome />
  </div>
  <div className='dim w2 h2 pa2 bg-white black pointer'>
    <IconAdd />
  </div>
  <div className='dim w2 h2 pa2 bg-white black pointer'>
    <IconLink id={id} />
  </div>
</div>

export default NavIcons
