import React from 'react'

export default ({ currentSound }) => {

  return (
    <div className="center pa2 mt5-ns w-100 h-100-ns vh-40 mw6-ns bg-near-white overflow-auto">
      <div className="flex mb2">
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
      </div>
      <div className='flex flex-wrap mt3'>
        <img className='pa1 grow dim' src='http://lorempixel.com/140/90/' alt='random photo'/>
        <img className='pa1 grow dim' src='http://lorempixel.com/140/90/' alt='random photo'/>
        <img className='pa1 grow dim' src='http://lorempixel.com/140/90/' alt='random photo'/>
        <img className='pa1 grow dim' src='http://lorempixel.com/140/90/' alt='random photo'/>
        <img className='pa1 grow dim' src='http://lorempixel.com/140/90/' alt='random photo'/>
      </div>
    </div>
  )
}
