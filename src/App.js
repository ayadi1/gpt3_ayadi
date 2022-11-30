import {
  Header,
  Companies,
  WhatisGPT,
  Feature,
  MyApps,
  Cta,
  Blog,
} from "./containers";
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
      <Blog />
    </div>
  );
}

export default App;
