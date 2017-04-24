import React from 'react'

export default ({ currentSound }) => {
  return (
    <div className='center pa2 pa4-m pa5-l vh-100-ns vh-40 mw7-m mw8-l bg-white overflow-auto'>
      <div className='flex mb2 w-90 w-100-ns'>
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
      <div className='flex flex-column measure lh-copy w-90 w-100-l'>
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
    </div>
  )
}
