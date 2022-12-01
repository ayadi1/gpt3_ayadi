import {
  Header,
  WhatisGPT,
  MyApps,
  Blog,Footer
} from "./containers";
import "./global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <WhatisGPT />
      <MyApps />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
