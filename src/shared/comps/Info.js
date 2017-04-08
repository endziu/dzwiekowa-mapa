import React from 'react'

export default ({ currentSound }) => {

  return (
    <div className="center pa3 pa4-ns w-100 vh-40 vh-100-ns overflow-auto">
      <div className="flex mb3">
        <img
          title="user avatar"
          className="br-100 h3 w3 dib ba b--black-05 pa1"
          src={currentSound.userPic}
        />
        <div className='flex flex-column pt2 pl2'>
          <h2 className="f5 mb2">{currentSound.userName}</h2>
          <h3 className="f6 fw4 gray mt0">{currentSound.title}</h3>     
        </div>
      </div>
      <div className='flex flex-column measure lh-copy'>
        <p>
          <b>autor: </b>{currentSound.info.author}
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
      <div>

      </div>
    </div>
  )
}
