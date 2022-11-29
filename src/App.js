import { Header, Companies, WhatisGPT, Feature, MyApps ,Cta } from "./containers";
import "./global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Companies />
      <WhatisGPT />
      <Feature />
      <MyApps />
      <Cta />
    </div>
  );
}

export default App;
