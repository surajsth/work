
// import './App.css';
import Team from './Card/Team';

import Divide from "./Card/Divide";



import Auto from "./Card/Auto";
import Feat from "./Card/Feat";

import Blog from "./Card/Blog";
import Client from './Card/Client';
// import Main from './Card/Main';

function App() {
  return (
    <div className="App">
      <Team />
      <Blog />
      <Client />
      <Feat />
      <Auto />
      {/* <Main /> */}
      <Divide />
    </div>
  );
}

export default App;
