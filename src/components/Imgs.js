import React from 'react'

const Imgs = (props) => <div className='pl2 pl5-ns pt5 pt2-ns'>
  <p>{`id: ${props.params.id}`}</p>
  <p>{`route: ${props.currentRoute}`}</p>
  <p>
    <img title={'avatar'} src={props.currentSound.userPic} alt={'userPic'} />
    <img title={'artwork'} src={props.currentSound.artwork_url} alt={'artwork'} />
  </p>
</div>

export default Imgs
