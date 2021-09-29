import React from 'react';
import './styles/App.css';
import {router} from "./router/Router";

function App() {
    const routes = router();
  return (
    <div className={'main-block'}>
        {routes}
    </div>
  );
}

export default App;
