import React from 'react'

export default ({ currentSound }) => {
  const desc = currentSound.description.split('\n')
  console.log(desc)
  return (
    <div className="center pa3 pa4-ns w-100 vh-40 vh-100-ns overflow-auto">
      <div className="tc">
        <img
          title="user avatar"
          className="br-100 h3 w3 dib ba b--black-05 pa1"
          src={currentSound.userPic}
        />
        <h2 className="f4 mb2">{currentSound.userName}</h2>
        <h3 className="f6 fw4 gray mt0">{currentSound.title}</h3>     
      </div>
      <div className='tc pa3'>
        <p className='pb1'>
          {desc
            .map(s => s.toLowerCase())
            .filter(s => s.search('autor nagrania:') !== -1)
            .map(s => s.substring(15))[0]
          }
        </p>        
        <p className='pb1'>
          {desc
            .map(s => s.toLowerCase())
            .filter(s => s.search('lokalizacja:') !== -1)
            .map(s => s.substring(12))[0]
          }
        </p>
        <p className='pb1'>
          {desc
            .map(s => s.toLowerCase())
            .filter(s => s.search('gps:') !== -1)
            .map(s => s.substring(5))[0]
          }
        </p>
        <p className='pb1'>
          {desc
            .map(s => s.toLowerCase())
            .filter(s => s.search('rekorder, mikrofon:') !== -1)
            .map(s => s.substring(19))[0]
          }
        </p>
        <p className='pb1'>
          {desc
            .map(s => s.toLowerCase())
            .filter(s => s.search('czas:') !== -1)[0]
          }
        </p>
        <p className='pb1'>
          {desc
            .map(s => s.toLowerCase())
            .filter(s => s.search('data:') !== -1)
            .map(s => s.substring(5))[0]
          }
        </p>
      </div>
    </div>
  )
}
