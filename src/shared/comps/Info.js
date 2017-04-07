import React from 'react'

export default ({ currentSound }) => {
  const desc = currentSound.description.split('\n')
  desc.map((item,index) => console.log(index, item))
  return (
    <article className="center pa3 pa4-ns w-100 vh-40 overflow-auto">
      <div className="tc">
        <img
          title="user avatar"
          className="br-100 h3 w3 dib ba b--black-05 pa1"
          src={currentSound.userPic}
        />
        <h2 className="f4 mb2">{currentSound.userName}</h2>
        <h3 className="f6 fw4 gray mt0">{currentSound.title}</h3>     
      </div>
    </article>
  )
}
