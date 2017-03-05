import React from 'react'

const Info = (props) => <div className='self-end self-start-ns pa2'>
  <p>{`id: ${props.params.id}`}</p>
  <p>{`route: ${props.currentRoute}`}</p>
  <p>{`${props.currentSound.userName} - ${props.currentSound.title}`}</p>
  <p>{`duration: ${props.currentSound.duration} ms.`}</p>
</div>

export default Info
