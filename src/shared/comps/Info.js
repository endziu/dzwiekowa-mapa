import React from 'react'

export default ({ currentSound }) => {
  return (
    <div className='center pa3 pa4-m pa5-l mt6-l w-100 h-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto'>
      <div className='flex mb2'>
        <img
          title='user avatar'
          className='br-100 h3 w3 h4-l w4-l dib ba b--black-05 pa1'
          src={currentSound.userPic}
        />
        <div className='flex flex-column pt4-l pl4-l pt2 pl2'>
          <h2 className='f5 f3-l mb2'>{currentSound.userName}</h2>
          <h3 className='f6 f4-l fw4 gray mt0'>{currentSound.title}</h3>
        </div>
      </div>
      <div className='flex flex-column f5-l measure lh-copy'>
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
        <img className='pr1 pb1 grow dim' src='http://lorempixel.com/160/90/' alt='random photo' />
        <img className='pr1 pb1 grow dim' src='http://lorempixel.com/160/90/' alt='random photo' />
        <img className='pr1 pb1 grow dim' src='http://lorempixel.com/160/90/' alt='random photo' />
        <img className='pr1 pb1 grow dim' src='http://lorempixel.com/160/90/' alt='random photo' />
        <img className='pr1 pb1 grow dim' src='http://lorempixel.com/160/90/' alt='random photo' />
      </div>
    </div>
  )
}
