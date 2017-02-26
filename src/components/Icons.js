import React from 'react'
import { Link } from 'react-router'
import { copyTextToClipboard } from '../helpers/index.js'

const IconHome = () => <Link to='/'>
  <svg width='16' height='16' fill='#000' data-id='geomicon-home' viewBox='0 0 32 32'>
    <path d='M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z' />
  </svg>
</Link>  

const IconAdd = () => <Link to='/add'>
  <svg viewBox='0 0 16 16' width='16' height='16' fill='#000' stroke='#000'>
    <path d='M0 8 L16 8' />
    <path d='M8 0 L8 16' />
  </svg>
</Link>

const IconLink = ({id}) => <div onClick={() => copyTextToClipboard(`https://devmap2.now.sh/rec/${id}`)}>
  <svg width='16' height='16' fill='#000' data-id='geomicon-link' viewBox='0 0 32 32'>
    <path d='M0 16 A8 8 0 0 1 8 8 L14 8 A8 8 0 0 1 22 16 L18 16 A4 4 0 0 0 14 12 L8 12 A4 4 0 0 0 4 16 A4 4 0 0 0 8 20 L10 24 L8 24 A8 8 0 0 1 0 16z M22 8 L24 8 A8 8 0 0 1 32 16 A8 8 0 0 1 24 24 L18 24 A8 8 0 0 1 10 16 L14 16 A4 4 0 0 0 18 20 L24 20 A4 4 0 0 0 28 16 A4 4 0 0 0 24 12z' />
  </svg>
</div>

export {
  IconHome,
  IconAdd,
  IconLink
}