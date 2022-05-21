import React, { useState } from 'react';
import Sosmedia from './Header/sosialmed';
import Rumbulog from './Header/Rumbudlogo';
import Language from './Header/Language';
import Currency from './Header/Usd';
import Ling from './Header/linktolog';

function Nav() {
    const [selected, setSelected] = useState('ENGLISH (UK)');
    return (
    <div className='home'>
      <div className='navbar'>
        <Sosmedia />
        <Rumbulog />
        <Language selected={selected} setSelected={setSelected} />
        <Currency />
        <Ling />
      </div>
    </div>
  );
}

export default Nav;