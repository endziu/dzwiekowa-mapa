import React from 'react'

export default ({ currentSound }) => {
  return (
    <div className='center pa3 pa4-m pa5-l w-100 vh-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto'>
      <div className='flex mb2'>
        <img
          title='user avatar'
          className='br-100 h3 w3 h4-l w4-l dib ba b--black-05 pa1'
          src={currentSound.userPic}
        />
        <div className='flex flex-column pt4-l pl4-l pt2 pl2'>
          <h2 className='f3-ns f4 mb1'>{currentSound.userName}</h2>
          <h3 className='f5 f4-l fw4 gray mt0'>{currentSound.title}</h3>
        </div>
      </div>
      <div className='flex flex-column measure lh-copy'>
        <p>
          <b>autor nagrania: </b>{currentSound.info.author}
        </p>
        <p>
          <b>lokalizacja: </b>{currentSound.info.localization}
        </p>
        <p>
          <b>gps: </b>{`${currentSound.info.gps.lat} - ${currentSound.info.gps.lng}`}
        </p>
        <p>
          <b>sprzęt: </b>{currentSound.info.gear}
        </p>
        <p>
          <b>data: </b>{currentSound.info.date}
        </p>
        <p>
          <b>czas: </b>{currentSound.info.time}
        </p>
        <p>
          <b>opis: </b>{currentSound.info.opis}
        </p>
      </div>
      <div className='flex flex-wrap mt3'>
        <img className='mr2 mb2 w3 h3 grow dim ba bw2 b--green' src='http://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/1369666005.jpg' alt='random photo' />
        <img className='mr2 mb2 w3 h3 grow dim' src='http://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/1369665965.jpg' alt='random photo' />
        <img className='mr2 mb2 w3 h3 grow dim' src='http://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/1369665989.jpg' alt='random photo' />
        <img className='mr2 mb2 w3 h3 grow dim' src='http://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/1369665999.jpg' alt='random photo' />
        <img className='mr2 mb2 w3 h3 grow dim' src='http://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/1369665982.jpg' alt='random photo' />
        <img className='mr2 mb2 w3 h3 grow dim' src='http://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/1369665972.jpg' alt='random photo' />
        <img className='mr2 mb2 w3 h3 grow dim' src='http://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/1369665972.jpg' alt='random photo' />
      </div>
      <div className='mw6'>
        <img className='pr2 pb2' src='http://res.cloudinary.com/endziu/image/upload/w_512/mapa/1369665994.jpg' alt='random photo' />
      </div>
    </div>
  )
}


