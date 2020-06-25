import React from 'react';

import GlobalStyles from './styles/global';
import Slide from './components/Slide';

import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.jpg';
import foto3 from './assets/foto3.jpg';
import foto4 from './assets/foto4.jpg';
import foto5 from './assets/foto5.jpg';
import foto6 from './assets/foto6.jpg';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Slide>
        <div>
          <img src={foto1} alt="" />
        </div>
        <div>
          <img src={foto2} alt="" />
        </div>
        <div>
          <img src={foto3} alt="" />
        </div>
        <div>
          <img src={foto4} alt="" />
        </div>
        <div>
          <img src={foto5} alt="" />
        </div>
        <div>
          <img src={foto6} alt="" />
        </div>
      </Slide>
    </>
  );
};

export default App;
