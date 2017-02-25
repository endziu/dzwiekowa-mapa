import React from 'react'
import { Link } from 'react-router'

const Welcome = ({ message }) => <header className="sans-serif">
  <div className="cover bg-left bg-center-l">
    <div className="tc-l mt4 mt5-m mt6-l ph3">
      <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">dźwiękowa mapa wrocławia 3.0</h1>
      <h2 className="fw1 f3 black-80 mt3 mb4">z nowym design'em i możliwością share'owania linków ;-)</h2>
      <Link className="f6 no-underline grow dib v-mid bg-blue black ba b--blue ph3 pv2 mb3" to="/rec/235266599">dźwięk #1</Link>
      <span className="dib v-mid ph3 black-70 mb3">albo</span>
      <Link className="f6 no-underline grow dib v-mid black ba b--black ph3 pv2 mb3" href="/rec/272034628">dźwięk #2</Link>
    </div>
  </div> 
</header>

export default Welcome
